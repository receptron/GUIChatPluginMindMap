<template>
  <div class="size-full bg-slate-100 overflow-hidden">
    <div v-if="mapData" class="size-full relative">
      <!-- Title and Controls -->
      <div class="absolute top-3 left-3 right-3 z-10 flex justify-between items-center">
        <h2 class="text-lg font-bold text-gray-800 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-200">
          {{ mapData.title }}
        </h2>
        <button
          @click="rebalance"
          class="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700"
        >
          整理
        </button>
      </div>

      <!-- SVG Mind Map -->
      <svg
        class="size-full"
        :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- Connections -->
        <g>
          <line
            v-for="conn in mapData.connections"
            :key="`${conn.from}-${conn.to}`"
            :x1="getNodeById(conn.from)?.x ?? 0"
            :y1="getNodeById(conn.from)?.y ?? 0"
            :x2="getNodeById(conn.to)?.x ?? 0"
            :y2="getNodeById(conn.to)?.y ?? 0"
            stroke="#9CA3AF"
            stroke-width="2"
          />
        </g>

        <!-- Nodes -->
        <g
          v-for="node in mapData.nodes"
          :key="node.id"
          :transform="`translate(${node.x}, ${node.y})`"
          class="cursor-pointer"
          @click="expandNode(node)"
        >
          <rect
            :x="-nodeSize(node.text).w / 2"
            :y="-nodeSize(node.text).h / 2"
            :width="nodeSize(node.text).w"
            :height="nodeSize(node.text).h"
            rx="6"
            :fill="node.color || '#6366F1'"
          />
          <text
            fill="white"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="10"
            font-weight="500"
          >
            <tspan
              v-for="(line, i) in splitText(node.text)"
              :key="i"
              x="0"
              :y="textY(node.text, i)"
            >
              {{ line }}
            </tspan>
          </text>
        </g>
      </svg>

      <!-- Help text -->
      <div class="absolute bottom-3 left-0 right-0 text-center">
        <span class="text-xs text-gray-500 bg-white/90 px-2 py-1 rounded shadow-sm">
          ノードをクリックして展開
        </span>
      </div>
    </div>

    <div v-else class="size-full flex items-center justify-center">
      <p class="text-gray-400">データがありません</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { ToolResult } from "gui-chat-protocol";
import type { MindMapData, MindMapNode } from "../core/types";
import { TOOL_NAME } from "../core/definition";

const props = defineProps<{
  selectedResult: ToolResult<MindMapData>;
  sendTextMessage?: (text?: string) => void;
  onUpdateResult?: (result: ToolResult<MindMapData>) => void;
}>();

// Constants
const WIDTH = 800;
const HEIGHT = 600;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;
const MAX_CHARS = 10;

// Reactive data - make a deep copy to allow mutations
const mapData = ref<MindMapData | null>(null);

watch(
  () => props.selectedResult,
  (result) => {
    if (result?.toolName === TOOL_NAME && result.data) {
      // Deep copy the data so we can mutate it
      mapData.value = JSON.parse(JSON.stringify(result.data));
    }
  },
  { immediate: true, deep: true }
);

function getNodeById(id: string): MindMapNode | undefined {
  return mapData.value?.nodes.find((n) => n.id === id);
}

// Split text into lines
function splitText(text: string): string[] {
  if (!text) return [""];
  if (text.length <= MAX_CHARS) return [text];

  const lines: string[] = [];
  let rest = text;

  while (rest.length > 0) {
    if (rest.length <= MAX_CHARS) {
      lines.push(rest);
      break;
    }
    lines.push(rest.slice(0, MAX_CHARS));
    rest = rest.slice(MAX_CHARS);
    if (lines.length >= 3) {
      // Max 3 lines, add ellipsis if more
      if (rest.length > 0) {
        lines[2] = lines[2].slice(0, MAX_CHARS - 2) + "..";
      }
      break;
    }
  }
  return lines;
}

// Calculate node size based on text
function nodeSize(text: string): { w: number; h: number } {
  const lines = splitText(text);
  const maxLen = Math.max(...lines.map((l) => l.length));
  const w = Math.max(60, maxLen * 8 + 16);
  const h = Math.max(28, lines.length * 14 + 12);
  return { w, h };
}

// Calculate Y position for each text line
function textY(text: string, lineIndex: number): number {
  const lines = splitText(text);
  const totalHeight = lines.length * 14;
  const startY = -totalHeight / 2 + 7;
  return startY + lineIndex * 14;
}

function expandNode(node: MindMapNode) {
  if (props.sendTextMessage) {
    props.sendTextMessage(`「${node.text}」を展開して、関連するアイデアを追加して`);
  }
}

// Rebalance the layout
function rebalance() {
  if (!mapData.value) return;

  const data = mapData.value;
  const centerNodeId = data.centerNodeId;
  if (!centerNodeId) return;

  console.log("[Rebalance] Starting...", data.nodes.length, "nodes");

  // Build node map
  const nodeMap = new Map<string, MindMapNode>();
  for (const n of data.nodes) {
    nodeMap.set(n.id, n);
  }

  // Position center
  const center = nodeMap.get(centerNodeId);
  if (!center) return;
  center.x = CX;
  center.y = CY;

  // Recursive positioning
  const visited = new Set<string>([centerNodeId]);

  function layoutChildren(parentId: string, depth: number) {
    const parent = nodeMap.get(parentId);
    if (!parent?.children) return;

    const kids = parent.children.filter((id) => !visited.has(id));
    if (kids.length === 0) return;

    kids.forEach((kidId) => visited.add(kidId));

    const radius = depth === 1 ? 140 : 90 * Math.pow(0.9, depth - 2);

    if (depth === 1) {
      // First level: circular
      kids.forEach((kidId, i) => {
        const angle = (2 * Math.PI * i) / kids.length - Math.PI / 2;
        const kid = nodeMap.get(kidId);
        if (kid) {
          kid.x = clamp(parent.x + radius * Math.cos(angle), 60, WIDTH - 60);
          kid.y = clamp(parent.y + radius * Math.sin(angle), 60, HEIGHT - 60);
        }
      });
    } else {
      // Deeper: fan out
      const dx = parent.x - CX;
      const dy = parent.y - CY;
      const baseAngle = Math.atan2(dy, dx);
      const spread = Math.PI * 0.5;
      const step = kids.length > 1 ? spread / (kids.length - 1) : 0;
      const start = baseAngle - spread / 2;

      kids.forEach((kidId, i) => {
        const angle = start + step * i;
        const kid = nodeMap.get(kidId);
        if (kid) {
          kid.x = clamp(parent.x + radius * Math.cos(angle), 60, WIDTH - 60);
          kid.y = clamp(parent.y + radius * Math.sin(angle), 60, HEIGHT - 60);
        }
      });
    }

    // Recurse
    kids.forEach((kidId) => layoutChildren(kidId, depth + 1));
  }

  layoutChildren(centerNodeId, 1);

  // Force reactivity update
  mapData.value = { ...data, nodes: Array.from(nodeMap.values()) };

  console.log("[Rebalance] Done");

  // Notify parent
  if (props.onUpdateResult && props.selectedResult) {
    props.onUpdateResult({
      ...props.selectedResult,
      data: mapData.value,
    });
  }
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}
</script>
