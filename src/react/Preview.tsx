/**
 * Mind Map Plugin - React Preview Component
 */

import type { PreviewComponentProps } from "gui-chat-protocol/react";
import type { MindMapData, MindMapJsonData } from "../core/types";

type PreviewProps = PreviewComponentProps<MindMapData, MindMapJsonData>;

export function Preview({ result }: PreviewProps) {
  const data = result.data as MindMapData | null;
  const hasData = data?.nodes && data.nodes.length > 0;
  const title = data?.title || "Mind Map";
  const nodeCount = data?.nodes?.length || 0;

  return (
    <div className="p-3 bg-indigo-50 rounded-lg text-center">
      <div className="text-2xl mb-1">🧠</div>
      <div className="text-indigo-700 font-medium text-sm truncate">{title}</div>
      {hasData ? (
        <div className="text-xs text-gray-500 mt-1">{nodeCount} ideas</div>
      ) : (
        <div className="text-xs text-amber-600 mt-1">
          {result.message || "No data"}
        </div>
      )}
    </div>
  );
}

export default Preview;
