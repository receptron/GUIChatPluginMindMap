/**
 * Mind Map Plugin Core
 */

import type {
  ToolPluginCore,
  ToolContext,
  ToolResult,
} from "gui-chat-protocol";
import type {
  MindMapData,
  MindMapArgs,
  MindMapJsonData,
  MindMapNode,
  MindMapConnection,
} from "./types";
import { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Color palette for nodes
const COLORS = [
  "#4F46E5", // indigo
  "#0891B2", // cyan
  "#059669", // emerald
  "#D97706", // amber
  "#DC2626", // red
  "#7C3AED", // violet
  "#2563EB", // blue
  "#DB2777", // pink
];

function generateId(): string {
  return `node_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function getColor(index: number): string {
  return COLORS[index % COLORS.length];
}

// Canvas dimensions
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const CENTER_X = CANVAS_WIDTH / 2;
const CENTER_Y = CANVAS_HEIGHT / 2;
const PADDING = 60;
const ROOT_RADIUS = 200;
const CENTER_COLOR = "#1F2937";

// Cap for node labels listed back to the LLM when a reference can't be
// resolved — a 100-node map would otherwise flood the tool response.
const MAX_LISTED_NODES = 30;

function calculateNodePosition(
  index: number,
  total: number,
  centerX: number,
  centerY: number,
  radius: number
): { x: number; y: number } {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

/**
 * Calculate position for a child node relative to its parent
 * Spreads children in an arc on the opposite side from the center
 */
function calculateChildPosition(
  parentX: number,
  parentY: number,
  childIndex: number,
  totalSiblings: number,
  depth: number
): { x: number; y: number } {
  // Direction from center to parent (this is the "outward" direction)
  const dx = parentX - CENTER_X;
  const dy = parentY - CENTER_Y;
  const parentAngle = Math.atan2(dy, dx);

  // Spread children in a 120-degree arc centered on the outward direction
  const spreadAngle = Math.PI * 0.67; // 120 degrees
  const startAngle = parentAngle - spreadAngle / 2;
  const angleStep = totalSiblings > 1 ? spreadAngle / (totalSiblings - 1) : 0;
  const childAngle = startAngle + angleStep * childIndex;

  // Distance decreases with depth to keep things compact
  const baseDistance = 120;
  const distance = baseDistance * Math.pow(0.85, depth - 1);

  return {
    x: parentX + distance * Math.cos(childAngle),
    y: parentY + distance * Math.sin(childAngle),
  };
}

/**
 * Clamp position to stay within canvas bounds
 */
function clampPosition(x: number, y: number): { x: number; y: number } {
  return {
    x: Math.max(PADDING, Math.min(CANVAS_WIDTH - PADDING, x)),
    y: Math.max(PADDING, Math.min(CANVAS_HEIGHT - PADDING, y)),
  };
}

/**
 * Get the depth of a node in the tree (center node = 0)
 */
function getNodeDepth(
  nodeId: string,
  nodes: MindMapNode[],
  centerNodeId: string,
  visited: Set<string> = new Set()
): number {
  if (nodeId === centerNodeId) return 0;
  if (visited.has(nodeId)) return 999; // Prevent cycles

  visited.add(nodeId);

  for (const node of nodes) {
    if (node.children?.includes(nodeId)) {
      return 1 + getNodeDepth(node.id, nodes, centerNodeId, visited);
    }
  }
  return 1; // Default to depth 1 if parent not found
}

/** A parsed branch: label plus its (possibly empty) nested branches */
interface IdeaBranch {
  text: string;
  children: IdeaBranch[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseIdea(input: unknown): IdeaBranch | null {
  if (typeof input === "string") {
    const text = input.trim();
    return text ? { text, children: [] } : null;
  }
  if (!isRecord(input) || typeof input.text !== "string") return null;
  const text = input.text.trim();
  return text ? { text, children: parseIdeas(input.children) } : null;
}

/** Accepts both the flat (`["a", "b"]`) and nested
 *  (`[{ text: "a", children: [...] }]`) forms the tool schema allows. */
function parseIdeas(input: unknown): IdeaBranch[] {
  if (!Array.isArray(input)) return [];
  return input
    .map(parseIdea)
    .filter((branch): branch is IdeaBranch => branch !== null);
}

function branchPosition(
  parent: MindMapNode,
  index: number,
  totalSiblings: number,
  depth: number
): { x: number; y: number } {
  if (depth === 1) {
    return calculateNodePosition(index, totalSiblings, parent.x, parent.y, ROOT_RADIUS);
  }
  const raw = calculateChildPosition(parent.x, parent.y, index, totalSiblings, depth);
  return clampPosition(raw.x, raw.y);
}

function appendBranches(
  parent: MindMapNode,
  branches: IdeaBranch[],
  depth: number,
  nodes: MindMapNode[],
  connections: MindMapConnection[]
): void {
  branches.forEach((branch, index) => {
    const pos = branchPosition(parent, index, branches.length, depth);
    const node: MindMapNode = {
      id: generateId(),
      text: branch.text,
      x: pos.x,
      y: pos.y,
      color: getColor(depth === 1 ? index : nodes.length),
      children: [],
    };
    nodes.push(node);
    parent.children?.push(node.id);
    connections.push({ from: parent.id, to: node.id });
    appendBranches(node, branch.children, depth + 1, nodes, connections);
  });
}

function createMindMap(
  title: string,
  centralIdea: string,
  ideas: IdeaBranch[]
): MindMapData {
  const centerNode: MindMapNode = {
    id: generateId(),
    text: centralIdea,
    x: CENTER_X,
    y: CENTER_Y,
    color: CENTER_COLOR,
    children: [],
  };

  const nodes: MindMapNode[] = [centerNode];
  const connections: MindMapConnection[] = [];
  appendBranches(centerNode, ideas, 1, nodes, connections);

  return {
    title,
    nodes,
    connections,
    centerNodeId: centerNode.id,
  };
}

function addNodeToMap(
  map: MindMapData,
  parentNode: MindMapNode,
  newIdea: string
): MindMapData {
  const nodes = map.nodes || [];
  const connections = map.connections || [];
  const parentNodeId = parentNode.id;

  // Calculate how many siblings will exist after adding this node
  const currentSiblings = parentNode.children?.length || 0;
  const newSiblingIndex = currentSiblings;
  const totalSiblingsAfter = currentSiblings + 1;

  // Get depth of new node
  const depth = getNodeDepth(parentNodeId, nodes, map.centerNodeId || "") + 1;

  // Calculate position using the improved algorithm
  const rawPos = calculateChildPosition(
    parentNode.x,
    parentNode.y,
    newSiblingIndex,
    totalSiblingsAfter,
    depth
  );

  // Clamp to canvas bounds
  const pos = clampPosition(rawPos.x, rawPos.y);

  const newNode: MindMapNode = {
    id: generateId(),
    text: newIdea,
    x: pos.x,
    y: pos.y,
    color: getColor(nodes.length),
    children: [],
  };

  const updatedParent = {
    ...parentNode,
    children: [...(parentNode.children || []), newNode.id],
  };

  return {
    ...map,
    nodes: [...nodes.filter((n) => n.id !== parentNodeId), updatedParent, newNode],
    connections: [
      ...connections,
      { from: parentNodeId, to: newNode.id },
    ],
  };
}

/**
 * Recalculate layout for all nodes based on tree structure
 */
function rebalanceLayout(map: MindMapData): MindMapData {
  const nodes = map.nodes || [];
  const centerNodeId = map.centerNodeId;

  if (!centerNodeId || nodes.length === 0) {
    return map;
  }

  // Find center node
  const centerNode = nodes.find((n) => n.id === centerNodeId);
  if (!centerNode) {
    return map;
  }

  // Create a map for quick lookup
  const nodeMap = new Map(nodes.map((n) => [n.id, { ...n }]));

  // Position center node
  const updatedCenter = nodeMap.get(centerNodeId)!;
  updatedCenter.x = CENTER_X;
  updatedCenter.y = CENTER_Y;

  // Build tree structure and position recursively
  const positionChildren = (
    parentId: string,
    depth: number,
    processedIds: Set<string>
  ) => {
    const parent = nodeMap.get(parentId);
    if (!parent || !parent.children || processedIds.has(parentId)) return;

    processedIds.add(parentId);
    const childIds = parent.children.filter((id) => !processedIds.has(id));

    childIds.forEach((childId, index) => {
      const child = nodeMap.get(childId);
      if (!child) return;

      if (depth === 1) {
        // First level: arrange in a circle
        const radius = 160;
        const pos = calculateNodePosition(
          index,
          childIds.length,
          parent.x,
          parent.y,
          radius
        );
        child.x = pos.x;
        child.y = pos.y;
      } else {
        // Deeper levels: use the fan-out algorithm
        const pos = calculateChildPosition(
          parent.x,
          parent.y,
          index,
          childIds.length,
          depth
        );
        const clamped = clampPosition(pos.x, pos.y);
        child.x = clamped.x;
        child.y = clamped.y;
      }

      // Recursively position this node's children
      positionChildren(childId, depth + 1, processedIds);
    });
  };

  // Start positioning from center
  const processedIds = new Set<string>();
  processedIds.add(centerNodeId);
  positionChildren(centerNodeId, 1, processedIds);

  return {
    ...map,
    nodes: Array.from(nodeMap.values()),
  };
}

function connectNodes(
  map: MindMapData,
  fromNodeId: string,
  toNodeId: string,
  label?: string
): MindMapData {
  const connections = map.connections || [];

  const exists = connections.some(
    (c) => c.from === fromNodeId && c.to === toNodeId
  );
  if (exists) {
    return { ...map, connections };
  }

  return {
    ...map,
    connections: [
      ...connections,
      { from: fromNodeId, to: toNodeId, label },
    ],
  };
}

/**
 * Delete a node and all its descendants from the map
 */
function deleteNodeFromMap(
  map: MindMapData,
  nodeIdToDelete: string
): MindMapData {
  const nodes = map.nodes || [];
  const connections = map.connections || [];

  // Cannot delete center node
  if (nodeIdToDelete === map.centerNodeId) {
    return map;
  }

  // Collect all node IDs to delete (the node and all its descendants)
  const idsToDelete = new Set<string>();

  function collectDescendants(nodeId: string) {
    idsToDelete.add(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node?.children) {
      node.children.forEach((childId) => collectDescendants(childId));
    }
  }

  collectDescendants(nodeIdToDelete);

  // Filter out deleted nodes
  const remainingNodes = nodes
    .filter((n) => !idsToDelete.has(n.id))
    .map((n) => ({
      ...n,
      // Remove deleted children from children arrays
      children: n.children?.filter((childId) => !idsToDelete.has(childId)),
    }));

  // Filter out connections involving deleted nodes
  const remainingConnections = connections.filter(
    (c) => !idsToDelete.has(c.from) && !idsToDelete.has(c.to)
  );

  return {
    ...map,
    nodes: remainingNodes,
    connections: remainingConnections,
  };
}

type NodeLookup =
  | { kind: "found"; node: MindMapNode }
  | { kind: "missing" }
  | { kind: "ambiguous"; matches: MindMapNode[] };

/**
 * Resolve a node reference to a node.
 * Callers (the LLM) rarely know the generated IDs, so a label is accepted
 * too: exact ID, then exact text, then substring — all case-insensitive.
 */
function findNodeByRef(map: MindMapData, ref: string): NodeLookup {
  const nodes = map.nodes || [];
  const byId = nodes.find((n) => n.id === ref);
  if (byId) return { kind: "found", node: byId };

  const needle = ref.trim().toLowerCase();
  if (!needle) return { kind: "missing" };

  const byText = nodes.filter((n) => n.text.trim().toLowerCase() === needle);
  const matches =
    byText.length > 0
      ? byText
      : nodes.filter((n) => n.text.toLowerCase().includes(needle));

  if (matches.length === 1) return { kind: "found", node: matches[0] };
  if (matches.length > 1) return { kind: "ambiguous", matches };
  return { kind: "missing" };
}

function listLabels(nodes: MindMapNode[]): string {
  const labels = nodes.slice(0, MAX_LISTED_NODES).map((n) => `"${n.text}"`);
  if (nodes.length > MAX_LISTED_NODES) labels.push("…");
  return labels.join(", ");
}

function nodeLookupError(
  map: MindMapData,
  ref: string,
  lookup: NodeLookup
): ToolResult<MindMapData, MindMapJsonData> {
  const message =
    lookup.kind === "ambiguous"
      ? `"${ref}" matches several nodes: ${listLabels(lookup.matches)}. Use the exact label or the node ID.`
      : `No node matches "${ref}". Nodes in this mind map: ${listLabels(map.nodes || [])}`;
  return {
    toolName: TOOL_NAME,
    message,
    instructions:
      "Tell the user which node could not be identified and ask them which of the listed nodes they meant.",
  };
}

function isMindMapNode(value: unknown): value is MindMapNode {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.text === "string" &&
    typeof value.x === "number" &&
    typeof value.y === "number"
  );
}

function isMindMapConnection(value: unknown): value is MindMapConnection {
  return isRecord(value) && typeof value.from === "string" && typeof value.to === "string";
}

/** A complete map — every node carries a position. */
function toMindMapData(value: unknown): MindMapData | null {
  if (!isRecord(value) || !Array.isArray(value.nodes)) return null;
  const nodes = value.nodes.filter(isMindMapNode);
  if (nodes.length === 0 || nodes.length !== value.nodes.length) return null;

  return {
    title: typeof value.title === "string" ? value.title : "Mind Map",
    nodes,
    connections: Array.isArray(value.connections)
      ? value.connections.filter(isMindMapConnection)
      : [],
    centerNodeId: typeof value.centerNodeId === "string" ? value.centerNodeId : "",
  };
}

function isIdTextPair(value: unknown): value is { id: string; text: string } {
  return isRecord(value) && typeof value.id === "string" && typeof value.text === "string";
}

/** The LLM sometimes echoes back `jsonData` (ids and labels, no positions)
 *  as `existingMap`. Rebuild a flat map from it — the ids are preserved, so
 *  a follow-up edit still lands on the node the caller meant. */
function reconstructFromJsonData(value: unknown): MindMapData | null {
  if (!isRecord(value) || !("nodeCount" in value) || !Array.isArray(value.nodes)) return null;
  const pairs = value.nodes.filter(isIdTextPair);
  if (pairs.length === 0) return null;

  const nodes: MindMapNode[] = pairs.map((pair, index) => ({
    id: pair.id,
    text: pair.text,
    ...(index === 0
      ? { x: CENTER_X, y: CENTER_Y }
      : calculateNodePosition(index, pairs.length, CENTER_X, CENTER_Y, ROOT_RADIUS)),
    color: index === 0 ? CENTER_COLOR : getColor(index),
    children: [],
  }));

  const [centerNode, ...branches] = nodes;
  centerNode.children = branches.map((n) => n.id);
  return {
    title: "Mind Map",
    nodes,
    connections: branches.map((n) => ({ from: centerNode.id, to: n.id })),
    centerNodeId: centerNode.id,
  };
}

/**
 * Get existing map data from context or args.
 * The context copy is preferred: it carries the full structure (positions,
 * colors, connections) while args may hold only what the LLM echoed back.
 *
 * `context` is nullable on purpose: hosts that run the plugin without any
 * client-side state (MulmoClaude's server bridge) pass an empty or missing
 * context, and reading through it unguarded turned every non-create action
 * into an HTTP 500.
 */
function getExistingMapData(
  context: ToolContext | null | undefined,
  argsMap?: unknown
): MindMapData | null {
  return (
    toMindMapData(context?.currentResult?.data) ??
    toMindMapData(argsMap) ??
    reconstructFromJsonData(argsMap)
  );
}

function missingMapResult(): ToolResult<MindMapData, MindMapJsonData> {
  return {
    toolName: TOOL_NAME,
    message:
      "Existing map is required — no mind map is available to edit in this session.",
    instructions:
      'Create the mind map first with action "create". Nested "ideas" entries ({ text, children }) build every level in that single call.',
  };
}

export const executeMindMap = async (
  context: ToolContext | null | undefined,
  args: MindMapArgs
): Promise<ToolResult<MindMapData, MindMapJsonData>> => {
  const { action } = args;

  let mapData: MindMapData;
  let message: string;
  let instructions: string;

  switch (action) {
    case "create": {
      if (!args.title || !args.centralIdea) {
        return {
          toolName: TOOL_NAME,
          message: "Title and central idea are required for creating a mind map",
          instructions: "Ask the user for the title and central concept.",
        };
      }
      mapData = createMindMap(args.title, args.centralIdea, parseIdeas(args.ideas));
      message = `Created mind map "${args.title}" with ${mapData.nodes.length} nodes`;
      instructions =
        "Tell the user the mind map has been created. Ask if they want to add more ideas or create connections between concepts.";
      break;
    }

    case "add_node": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      if (!args.parentNodeId || !args.newIdea) {
        return {
          toolName: TOOL_NAME,
          message: "Both parentNodeId and newIdea are required to add a node",
          instructions: "Ask the user which node to add the new idea to.",
        };
      }
      const parent = findNodeByRef(existingMap, args.parentNodeId);
      if (parent.kind !== "found") {
        return nodeLookupError(existingMap, args.parentNodeId, parent);
      }
      mapData = addNodeToMap(existingMap, parent.node, args.newIdea);
      message = `Added "${args.newIdea}" to the mind map`;
      instructions =
        "Confirm the new idea was added. Ask if they want to continue expanding or explore other branches.";
      break;
    }

    case "delete_node": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      if (!args.nodeIdToDelete) {
        return {
          toolName: TOOL_NAME,
          message: "nodeIdToDelete is required for deletion",
          instructions: "Ask which node should be deleted.",
        };
      }
      const target = findNodeByRef(existingMap, args.nodeIdToDelete);
      if (target.kind !== "found") {
        return nodeLookupError(existingMap, args.nodeIdToDelete, target);
      }
      if (target.node.id === existingMap.centerNodeId) {
        return {
          toolName: TOOL_NAME,
          message: "Cannot delete the center node",
          instructions: "Tell the user that the center node cannot be deleted.",
        };
      }
      mapData = deleteNodeFromMap(existingMap, target.node.id);
      message = `Deleted "${target.node.text}" from the mind map`;
      instructions =
        "Confirm the node was deleted. Ask if they want to make any other changes.";
      break;
    }

    case "connect": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      if (!args.fromNodeId || !args.toNodeId) {
        return {
          toolName: TOOL_NAME,
          message: "Both fromNodeId and toNodeId are required for connection",
          instructions: "Ask which concepts should be connected.",
        };
      }
      const from = findNodeByRef(existingMap, args.fromNodeId);
      if (from.kind !== "found") return nodeLookupError(existingMap, args.fromNodeId, from);
      const to = findNodeByRef(existingMap, args.toNodeId);
      if (to.kind !== "found") return nodeLookupError(existingMap, args.toNodeId, to);

      mapData = connectNodes(existingMap, from.node.id, to.node.id, args.connectionLabel);
      message = `Connected "${from.node.text}" and "${to.node.text}"`;
      instructions =
        "Confirm the connection was created. Ask if they want to add more relationships.";
      break;
    }

    case "update": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      mapData = existingMap;
      message = "Mind map updated";
      instructions = "The mind map has been refreshed.";
      break;
    }

    case "rebalance": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      mapData = rebalanceLayout(existingMap);
      message = `Mind map layout rebalanced with ${mapData.nodes.length} nodes`;
      instructions = "The mind map layout has been optimized for better readability.";
      break;
    }

    default:
      return {
        toolName: TOOL_NAME,
        message: `Unknown action: ${action}`,
        instructions: "Invalid action specified.",
      };
  }

  const nodes = mapData.nodes || [];
  const connections = mapData.connections || [];

  const jsonData: MindMapJsonData = {
    nodeCount: nodes.length,
    connectionCount: connections.length,
    nodes: nodes.map((n) => ({ id: n.id, text: n.text })),
  };

  return {
    toolName: TOOL_NAME,
    message,
    title: mapData.title,
    data: mapData,
    jsonData,
    instructions,
    updating: action !== "create",
  };
};

export const pluginCore: ToolPluginCore<
  MindMapData,
  MindMapJsonData,
  MindMapArgs
> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeMindMap,
  generatingMessage: "Creating mind map...",
  isEnabled: () => true,
  systemPrompt: SYSTEM_PROMPT,
};
