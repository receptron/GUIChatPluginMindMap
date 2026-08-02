# @gui-chat-plugin/mindmap

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fmindmap.svg)](https://www.npmjs.com/package/@gui-chat-plugin/mindmap)

Interactive mind map plugin for GUI Chat applications. Create visual mind maps for brainstorming and idea organization.

## Features

- Create mind maps with central idea and branching nodes
- Add, delete, and connect nodes interactively
- Auto-layout with rebalance functionality
- Export to PNG and PDF
- Vue and React support

## Installation

```bash
yarn add @gui-chat-plugin/mindmap gui-chat-protocol
```

> `gui-chat-protocol` is a peer dependency — install it alongside the plugin; the host application provides the runtime and this plugin only declares the compatible range.


## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import MindMapPlugin from "@gui-chat-plugin/mindmap/vue";

const pluginList = [
  // ... other plugins
  MindMapPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/mindmap/style.css";
```

### React Integration

```typescript
import MindMapPlugin from "@gui-chat-plugin/mindmap/react";
import "@gui-chat-plugin/mindmap/style.css";
```

### Core-only Usage

```typescript
import { executeMindMap, TOOL_DEFINITION } from "@gui-chat-plugin/mindmap";

// Create a mind map
const result = await executeMindMap(context, {
  action: "create",
  title: "Project Ideas",
  centralIdea: "New Product",
  ideas: ["Feature A", "Feature B", "Feature C"],
});

// Nest `ideas` to build every level in one call — the only way to get a
// multi-level map on hosts that keep no mind map state between calls
const tree = await executeMindMap(context, {
  action: "create",
  title: "Revenue",
  centralIdea: "Revenue",
  ideas: [
    { text: "Marketing", children: [{ text: "SNS", children: [{ text: "X" }] }, { text: "Ads" }] },
    "Sales",
  ],
});
```

`context` may be `null` / `undefined` — a host without client-side state (an
MCP/server bridge) can call `executeMindMap` with no context. Actions that
need an existing map then look at `existingMap` in the args, and return an
error result if there is nothing to edit.

## API

### MindMapArgs

```typescript
// A branch: a plain label, or a label with nested branches (any depth)
type IdeaInput = string | { text: string; children?: IdeaInput[] };

interface MindMapArgs {
  action: "create" | "add_node" | "delete_node" | "connect" | "update" | "rebalance";
  title?: string;           // Title of the mind map
  centralIdea?: string;     // Central idea for new mind map
  ideas?: IdeaInput[];      // Branches of the central idea, nestable
  parentNodeId?: string;    // Parent node for add_node — node ID or label text
  newIdea?: string;         // New idea text for add_node
  nodeIdToDelete?: string;  // Node to delete — node ID or label text
  fromNodeId?: string;      // Source node for connection — node ID or label text
  toNodeId?: string;        // Target node for connection — node ID or label text
  connectionLabel?: string; // Label for connection
}
```

Node references accept either the generated node ID or the node's label. A
label is matched case-insensitively: exact text first, then substring. If it
matches nothing — or several nodes — the call returns an error result listing
the map's labels and leaves the map untouched.

### Actions

| Action | Description |
|--------|-------------|
| `create` | Create a new mind map with central idea and branches (nested `ideas` build the whole hierarchy) |
| `add_node` | Add a new node as child of existing node |
| `delete_node` | Delete a node and its children |
| `connect` | Create a connection between two nodes |
| `update` | Update existing mind map |
| `rebalance` | Auto-arrange nodes for better layout |

## Test Prompts

Try these prompts to test the plugin:

1. "Create a mind map about project planning"
2. "Add a new idea about marketing to the mind map"
3. "Connect the design and development nodes"

## Development

```bash
# Install dependencies
yarn install

# Run Vue demo
yarn dev

# Run React demo
yarn dev:react

# Build
yarn build

# Lint
yarn lint

# Test
yarn test
```

## License

MIT

## Related

- Protocol spec: [gui-chat-protocol](https://github.com/receptron/gui-chat-protocol)
- Reference implementations using this protocol: [mulmoclaude](https://github.com/receptron/mulmoclaude) · [MulmoChat](https://github.com/receptron/MulmoChat)
