# fix: add_node / delete_node が動かない問題

- Issue: receptron/GUIChatPluginMindMap#29
- 上流の症状: receptron/mulmoclaude#2709 (`HTTP 500 /api/mindmap: Cannot read properties of null (reading 'currentResult')`)

## 背景 — なぜ create だけ成功するのか

`create` は `getExistingMapData()` を呼ばない唯一のアクション。他の全アクションはこれを経由し、その中で
`context.currentResult` を無防備に読んでいる。ホストが `null` を渡すとここで TypeError になり、
mulmoclaude 側の `wrapPluginExecute` が 500 に変換する。

`ToolContext` は全フィールド optional なので、状態を持たないホストが空の context を渡すのは正常系。
プラグインが落ちてはいけない。

## 背景 — null を直しても動かない理由

MulmoClaude では `execute()` はクライアントで呼ばれず、全て `/api/mindmap` 経由で実行される
(`mulmoclaude/src/tools/types.ts` に明記)。サーバは `SERVER_TOOL_CONTEXT = Object.freeze({})` を渡すため
`currentResult` は常に空。さらに MCP ブリッジ (`server/agent/mcp-server.ts`) が LLM に返すのは
`message` と `instructions` だけで `jsonData` は返さない ＝ **LLM はノード ID を一度も見ていない**。

したがって完全な解決は2リポにまたがる:

| 層 | 変更 |
|---|---|
| このリポ | 落ちない / ラベルでノードを解決できる / 1回の create で階層を作れる |
| mulmoclaude | セッションの直近 mindmap 結果を `context.currentResult` として渡す |

## 変更内容 (このリポ)

### 1. context を null 安全にする

`getExistingMapData(context?: ToolContext | null, ...)` にして `context?.currentResult?.data` で読む。

### 2. ノード参照を ID / ラベル両対応にする

`resolveNodeRef(map, ref)` を追加し、`add_node` の `parentNodeId`、`delete_node` の `nodeIdToDelete`、
`connect` の `fromNodeId` / `toNodeId` に適用する。

解決順:
1. ノード ID の完全一致
2. `text` の完全一致 (大文字小文字・前後空白を無視)
3. `text` の部分一致

複数該当したら **曖昧エラー**、0件なら **候補ラベル付きのエラー** を返す。
現状の「親が見つからなければ元のマップをそのまま返す」無言 no-op はやめる — LLM には成功に見えてしまい、
失敗が検出できないため。

### 3. create を階層対応にする

`ideas` の各要素を `string` または `{ text, children?: [...] }` として受け付ける (深さ無制限)。
スキーマは `oneOf` で表現し、`children` は再帰参照を避けるため緩い型 + description で説明する
(JSON Schema の `$ref` は LLM のツールスキーマで扱いが安定しないため)。

レイアウトは既存の関数を再利用する:
- 第1階層 … `calculateNodePosition` (半径 200、従来の create と同じ)
- 第2階層以降 … `calculateChildPosition` + `clampPosition` (`add_node` と同じ扇状配置)

### 4. デバッグ出力の削除

`console.log("[MindMap Debug] ...")` と、ユーザ向け message に混ざった `Debug: ...` 文字列を削除する。

### 5. テストを CI で回す

`tests/plugin.test.ts` は存在するが package.json に `test` script が無く CI からも呼ばれていない。
そのため既に1件 fail したまま気付けていない (`"Existing map"` を期待するテストが `"Missing: existingMap. Debug:..."`
を受け取っている)。`test` script を足し、CI の matrix に `yarn test` を追加する。

新規テスト:
- `context` が `null` / `undefined` でも throw しない
- ラベル文字列で `add_node` / `delete_node` / `connect` できる
- 曖昧なラベル・存在しないラベルはエラー結果を返す (map は変更しない)
- 入れ子 `ideas` で3階層以上が1回の create で作れる
- 既存の「親が見つからないとき」テストは *無言 no-op* から *エラー結果* に期待値を更新

## 実施順

1. plan (このファイル) をコミット
2. 実装 + テスト
3. `yarn typecheck` / `yarn lint` / `yarn build` / `yarn test`
4. PR (このリポ)
5. mulmoclaude 側 PR (session の直近結果を context に渡す)
6. マージ後に npm publish → mulmoclaude の dependency bump
