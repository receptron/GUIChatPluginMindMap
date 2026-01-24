<template>
  <div class="size-full bg-slate-100 overflow-hidden">
    <div v-if="mapData" class="size-full relative">
      <!-- Title and Controls -->
      <div class="absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none">
        <h2 class="text-lg font-bold text-gray-800 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-200 pointer-events-auto">
          {{ mapData.title }}
        </h2>
        <button
          @click="rebalance"
          class="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700 pointer-events-auto"
        >
          整理
        </button>
      </div>

      <!-- Add Node Input -->
      <div class="absolute bottom-3 left-3 right-3 z-10 flex gap-2 items-center">
        <span class="bg-white px-2 py-1.5 rounded-lg shadow-sm text-sm text-gray-600 border border-gray-200 truncate max-w-32">
          {{ targetNodeText }}
        </span>
        <span class="text-gray-400">→</span>
        <input
          v-model="newNodeText"
          type="text"
          placeholder="新しいノード..."
          class="flex-1 px-3 py-1.5 rounded-lg border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          @keydown.enter="addNode"
        />
        <button
          @click="addNode"
          :disabled="!newNodeText.trim()"
          class="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700 disabled:border-gray-400"
        >
          追加
        </button>
      </div>

      <!-- SVG Mind Map -->
      <svg
        ref="svgRef"
        class="size-full"
        :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
        preserveAspectRatio="xMidYMid meet"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
        @mouseleave="onMouseUp"
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
          :class="draggingNodeId === node.id ? 'cursor-grabbing' : 'cursor-grab'"
          @mousedown.prevent="onMouseDown($event, node)"
        >
          <rect
            :x="-nodeSize(node.text).w / 2"
            :y="-nodeSize(node.text).h / 2"
            :width="nodeSize(node.text).w"
            :height="nodeSize(node.text).h"
            rx="6"
            :fill="node.color || '#6366F1'"
            :stroke="selectedNodeId === node.id ? '#FCD34D' : 'none'"
            :stroke-width="selectedNodeId === node.id ? 3 : 0"
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

    </div>

    <div v-else class="size-full flex items-center justify-center">
      <p class="text-gray-400">データがありません</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
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
// Padding for node placement (avoid UI overlays)
const PADDING_TOP = 80;
const PADDING_BOTTOM = 80;
const PADDING_SIDE = 60;

// Reactive data - make a deep copy to allow mutations
const mapData = ref<MindMapData | null>(null);
const newNodeText = ref("");
const selectedNodeId = ref<string | null>(null);
const svgRef = ref<SVGSVGElement | null>(null);
const draggingNodeId = ref<string | null>(null);

const targetNodeText = computed(() => {
  if (!mapData.value) return "";
  const targetId = selectedNodeId.value || mapData.value.centerNodeId;
  const node = mapData.value.nodes.find((n) => n.id === targetId);
  return node?.text || "";
});

watch(
  () => props.selectedResult,
  (result) => {
    // Don't overwrite local data while dragging
    if (draggingNodeId.value) return;

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

// Convert screen coordinates to SVG coordinates
function screenToSvg(event: MouseEvent): { x: number; y: number } {
  const svg = svgRef.value;
  if (!svg) return { x: 0, y: 0 };

  const rect = svg.getBoundingClientRect();
  const scaleX = WIDTH / rect.width;
  const scaleY = HEIGHT / rect.height;

  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY,
  };
}

function onMouseDown(__event: MouseEvent, node: MindMapNode) {
  draggingNodeId.value = node.id;
  selectedNodeId.value = node.id;
}

function onMouseMove(event: MouseEvent) {
  if (!draggingNodeId.value || !mapData.value) return;

  const pos = screenToSvg(event);
  const node = mapData.value.nodes.find((n) => n.id === draggingNodeId.value);
  if (node) {
    const clamped = clampPosition(pos.x, pos.y);
    node.x = clamped.x;
    node.y = clamped.y;
    // Trigger reactivity
    mapData.value = { ...mapData.value };
  }
}

function onMouseUp() {
  if (draggingNodeId.value && props.onUpdateResult && props.selectedResult && mapData.value) {
    props.onUpdateResult({
      ...props.selectedResult,
      data: mapData.value,
    });
  }
  draggingNodeId.value = null;
}

function addNode() {
  const text = newNodeText.value.trim();
  if (!text || !mapData.value) return;

  const data = mapData.value;
  const parentId = selectedNodeId.value || data.centerNodeId;
  if (!parentId) return;

  const parent = data.nodes.find((n) => n.id === parentId);
  if (!parent) return;

  // Calculate position for new node
  const currentSiblings = parent.children?.length || 0;
  const pos = calculateChildPosition(parent, currentSiblings);

  // Generate unique ID
  const newId = `node_${Date.now()}`;

  // Create new node with calculated position
  const newNode: MindMapNode = {
    id: newId,
    text,
    x: pos.x,
    y: pos.y,
    children: [],
  };

  // Add node to nodes array
  data.nodes.push(newNode);

  // Add connection
  data.connections.push({ from: parentId, to: newId });

  // Add to parent's children
  if (!parent.children) parent.children = [];
  parent.children.push(newId);

  // Clear input and trigger update
  newNodeText.value = "";
  mapData.value = { ...data };

  // Notify parent
  if (props.onUpdateResult && props.selectedResult) {
    props.onUpdateResult({
      ...props.selectedResult,
      data: mapData.value,
    });
  }
}

function calculateChildPosition(
  parent: MindMapNode,
  siblingIndex: number
): { x: number; y: number } {
  // Direction from center to parent
  const dx = parent.x - CX;
  const dy = parent.y - CY;
  const parentAngle = Math.atan2(dy, dx);

  // If parent is center, spread evenly around
  const isCenter = Math.abs(dx) < 10 && Math.abs(dy) < 10;
  const totalSiblings = siblingIndex + 1;

  if (isCenter) {
    const angle = (2 * Math.PI * siblingIndex) / Math.max(totalSiblings, 4) - Math.PI / 2;
    const radius = 140;
    return clampPosition(
      CX + radius * Math.cos(angle),
      CY + radius * Math.sin(angle)
    );
  }

  // Spread children in an arc
  const spreadAngle = Math.PI * 0.6;
  const startAngle = parentAngle - spreadAngle / 2;
  const step = totalSiblings > 1 ? spreadAngle / totalSiblings : 0;
  const angle = startAngle + step * siblingIndex + step / 2;
  const radius = 90;

  return clampPosition(
    parent.x + radius * Math.cos(angle),
    parent.y + radius * Math.sin(angle)
  );
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
          const pos = clampPosition(
            parent.x + radius * Math.cos(angle),
            parent.y + radius * Math.sin(angle)
          );
          kid.x = pos.x;
          kid.y = pos.y;
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
          const pos = clampPosition(
            parent.x + radius * Math.cos(angle),
            parent.y + radius * Math.sin(angle)
          );
          kid.x = pos.x;
          kid.y = pos.y;
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

function clampPosition(x: number, y: number): { x: number; y: number } {
  return {
    x: clamp(x, PADDING_SIDE, WIDTH - PADDING_SIDE),
    y: clamp(y, PADDING_TOP, HEIGHT - PADDING_BOTTOM),
  };
}
</script>
