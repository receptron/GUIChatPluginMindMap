/**
 * Mind Map Plugin - React View Component
 */

import { useState, useEffect } from "react";
import type { ViewComponentProps } from "gui-chat-protocol/react";
import type { MindMapData, MindMapJsonData, MindMapNode } from "../core/types";
import { TOOL_NAME } from "../core/definition";

type ViewProps = ViewComponentProps<MindMapData, MindMapJsonData>;

const VIEW_BOX_WIDTH = 800;
const VIEW_BOX_HEIGHT = 600;

function getNodeWidth(text: string): number {
  const minWidth = 80;
  const charWidth = 8;
  return Math.max(minWidth, text.length * charWidth + 40);
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

export function View({ selectedResult, sendTextMessage }: ViewProps) {
  const [data, setData] = useState<MindMapData | null>(null);

  useEffect(() => {
    if (selectedResult?.toolName === TOOL_NAME && selectedResult.data) {
      setData(selectedResult.data as MindMapData);
    }
  }, [selectedResult]);

  const getNode = (id: string): MindMapNode | undefined => {
    return data?.nodes.find((n) => n.id === id);
  };

  const handleNodeClick = (node: MindMapNode) => {
    if (sendTextMessage) {
      sendTextMessage(
        `I want to expand the "${node.text}" branch. Add related sub-ideas.`
      );
    }
  };

  if (!data) {
    return (
      <div className="size-full flex items-center justify-center">
        <p className="text-gray-400">No mind map data</p>
      </div>
    );
  }

  return (
    <div className="size-full bg-gray-50 overflow-hidden">
      <div className="size-full relative">
        {/* Title */}
        <div className="absolute top-4 left-4 z-10">
          <h2 className="text-xl font-bold text-gray-800 bg-white/80 px-3 py-1 rounded-lg shadow">
            {data.title}
          </h2>
        </div>

        {/* SVG Mind Map */}
        <svg
          className="size-full"
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connections */}
          <g className="connections">
            {data.connections.map((conn) => {
              const fromNode = getNode(conn.from);
              const toNode = getNode(conn.to);
              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <line
                    x1={fromNode?.x || 0}
                    y1={fromNode?.y || 0}
                    x2={toNode?.x || 0}
                    y2={toNode?.y || 0}
                    stroke="#94A3B8"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  {conn.label && (
                    <text
                      x={((fromNode?.x || 0) + (toNode?.x || 0)) / 2}
                      y={((fromNode?.y || 0) + (toNode?.y || 0)) / 2 - 5}
                      textAnchor="middle"
                      className="text-xs fill-gray-500"
                    >
                      {conn.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* Nodes */}
          <g className="nodes">
            {data.nodes.map((node) => (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={() => handleNodeClick(node)}
              >
                {/* Node background */}
                <rect
                  x={-getNodeWidth(node.text) / 2}
                  y={-20}
                  width={getNodeWidth(node.text)}
                  height={40}
                  rx={20}
                  fill={node.color || "#4F46E5"}
                  className="drop-shadow-md"
                />
                {/* Node text */}
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  className="text-sm font-medium select-none pointer-events-none"
                >
                  {truncateText(node.text, 20)}
                </text>
              </g>
            ))}
          </g>
        </svg>

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-sm text-gray-500 bg-white/80 px-3 py-2 rounded-lg inline-block">
            Click a node to expand it with new ideas
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;
