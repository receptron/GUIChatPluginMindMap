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

// Branch input comes from an LLM, so it is untrusted: cap the nesting so a
// pathological payload can't exhaust the stack. A map deeper than this is
// unreadable on an 800x600 canvas anyway.
const MAX_BRANCH_DEPTH = 10;

// Layout recursion follows a host-supplied tree, which can be far deeper than
// anything this plugin creates; stop before the stack does.
const MAX_LAYOUT_DEPTH = 50;

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
function getNodeDepth(nodeId: string, nodes: MindMapNode[], centerNodeId: string): number {
  const visited = new Set<string>();
  let current = nodeId;
  let depth = 0;

  while (current !== centerNodeId && !visited.has(current)) {
    visited.add(current);
    const parent = nodes.find((n) => n.children?.includes(current));
    if (!parent) return depth + 1; // Default to depth 1 if parent not found
    current = parent.id;
    depth++;
  }
  return current === centerNodeId ? depth : depth + 1;
}

/** A parsed branch: label plus its (possibly empty) nested branches */
interface IdeaBranch {
  text: string;
  children: IdeaBranch[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Tool arguments arrive from an LLM over HTTP: a field the schema types as a
 *  string can still be a number, an object, or absent at runtime. */
function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parseIdea(input: unknown, depth: number): IdeaBranch | null {
  if (typeof input === "string") {
    const text = readText(input);
    return text ? { text, children: [] } : null;
  }
  if (!isRecord(input)) return null;
  const text = readText(input.text);
  if (!text) return null;
  return {
    text,
    children: depth >= MAX_BRANCH_DEPTH ? [] : parseIdeas(input.children, depth + 1),
  };
}

/** Accepts both the flat (`["a", "b"]`) and nested
 *  (`[{ text: "a", children: [...] }]`) forms the tool schema allows. */
function parseIdeas(input: unknown, depth = 1): IdeaBranch[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((entry) => parseIdea(entry, depth))
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

  // Replace in place rather than filter-and-append: a map that loses its
  // center-first ordering reconstructs with the wrong center when a host
  // hands back only ids and labels.
  return {
    ...map,
    nodes: [...nodes.map((n) => (n.id === parentNodeId ? updatedParent : n)), newNode],
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
    if (depth > MAX_LAYOUT_DEPTH) return;

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

  // `positionChildren` marks the center itself as processed; seeding the set
  // with it made the first call return before positioning anything
  positionChildren(centerNodeId, 1, new Set<string>());

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

  // Collect all node IDs to delete (the node and all its descendants).
  // Iterative: host-supplied children can be cyclic or thousands deep.
  const idsToDelete = new Set<string>();
  const pending = [nodeIdToDelete];
  while (pending.length > 0) {
    const nodeId = pending.pop() ?? "";
    if (idsToDelete.has(nodeId)) continue;
    idsToDelete.add(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    node?.children?.forEach((childId) => pending.push(childId));
  }

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
    Number.isFinite(value.x) &&
    Number.isFinite(value.y)
  );
}

function isMindMapConnection(value: unknown): value is MindMapConnection {
  return isRecord(value) && typeof value.from === "string" && typeof value.to === "string";
}

/** A complete map — every node carries a position. */
function toMindMapData(value: unknown): MindMapData | null {
  if (!isRecord(value) || !Array.isArray(value.nodes)) return null;
  const parsed = value.nodes.filter(isMindMapNode);
  if (parsed.length === 0 || parsed.length !== value.nodes.length) return null;
  if (new Set(parsed.map((n) => n.id)).size !== parsed.length) return null;

  // `children` is whatever the host stored: normalize it, or the layout and
  // the delete cascade end up calling array methods on a string
  const nodes = parsed.map((node) => ({ ...node, children: readIdList(node.children) }));

  return {
    title: typeof value.title === "string" ? value.title : "Mind Map",
    nodes,
    connections: Array.isArray(value.connections)
      ? value.connections.filter(isMindMapConnection)
      : [],
    centerNodeId: typeof value.centerNodeId === "string" ? value.centerNodeId : "",
  };
}

interface IdLabelEntry {
  id: string;
  text: string;
  children?: unknown;
}

function isIdLabelEntry(value: unknown): value is IdLabelEntry {
  return isRecord(value) && typeof value.id === "string" && typeof value.text === "string";
}

function readIdList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((id): id is string => typeof id === "string") : [];
}

/** Parent → children as the payload states it, taking declared `children` and
 *  whatever its connection list implies. Either one alone recovers the tree. */
function collectAdjacency(
  entries: IdLabelEntry[],
  connections: MindMapConnection[]
): Map<string, string[]> {
  const known = new Set(entries.map((e) => e.id));
  const adjacency = new Map(
    entries.map((e) => [e.id, readIdList(e.children).filter((id) => known.has(id))])
  );
  connections.forEach(({ from, to }) => {
    const siblings = adjacency.get(from);
    if (siblings && known.has(to) && !siblings.includes(to)) siblings.push(to);
  });
  return adjacency;
}

/** Reduce an untrusted graph to a tree: one parent per node, no cycles, and
 *  everything reachable from the center. `children` drives the layout and the
 *  cascading delete, so a cycle there would hang them; cross links survive in
 *  `connections`. A payload with no relationships at all becomes a star. */
function buildTree(
  centerId: string,
  ids: string[],
  adjacency: Map<string, string[]>
): Map<string, string[]> {
  const tree = new Map(ids.map((id) => [id, new Array<string>()]));
  const claimed = new Set([centerId]);
  const queue = [centerId];
  let cursor = 0;

  const claim = (parent: string, child: string) => {
    claimed.add(child);
    tree.get(parent)?.push(child);
    queue.push(child);
  };

  const walk = () => {
    while (cursor < queue.length) {
      const parent = queue[cursor++];
      (adjacency.get(parent) ?? []).forEach((child) => {
        if (!claimed.has(child)) claim(parent, child);
      });
    }
  };

  walk();
  // What the center can't reach hangs off it — with its own subtree intact
  ids.forEach((id) => {
    if (claimed.has(id)) return;
    claim(centerId, id);
    walk();
  });
  return tree;
}

function childConnections(children: Map<string, string[]>): MindMapConnection[] {
  return Array.from(children.entries()).flatMap(([from, ids]) => ids.map((to) => ({ from, to })));
}

/** Explicit connections first (they may carry labels and cross links), then any
 *  tree edge they don't already cover — the two must not disagree. */
function mergeConnections(
  explicit: MindMapConnection[],
  derived: MindMapConnection[]
): MindMapConnection[] {
  const edgeKey = (c: MindMapConnection) => `${c.from} ${c.to}`;
  const seen = new Set(explicit.map(edgeKey));
  return [...explicit, ...derived.filter((c) => !seen.has(edgeKey(c)))];
}

/** Last resort: the caller handed back nodes without positions — `jsonData`
 *  echoed as `existingMap`, or a host that persists no layout. Ids survive, so
 *  a follow-up edit still lands on the node the caller meant; the hierarchy
 *  survives too when children or connections came along, and only a bare
 *  id/label list degrades to a star around the center. */
function reconstructFromIdLabels(value: unknown): MindMapData | null {
  if (!isRecord(value) || !Array.isArray(value.nodes) || value.nodes.length === 0) return null;
  const entries = value.nodes.filter(isIdLabelEntry);
  if (entries.length !== value.nodes.length) return null;

  const declaredCenterId = readText(value.centerNodeId);
  const center = entries.find((e) => e.id === declaredCenterId) ?? entries[0];
  const ids = entries.map((e) => e.id);
  const known = new Set(ids);
  if (known.size !== ids.length) return null; // duplicate ids: which node an edit meant is unknowable
  const connections = Array.isArray(value.connections)
    ? value.connections.filter(isMindMapConnection).filter((c) => known.has(c.from) && known.has(c.to))
    : [];
  const children = buildTree(center.id, ids, collectAdjacency(entries, connections));

  let branchIndex = 0;
  const nodes: MindMapNode[] = entries.map((entry) => ({
    id: entry.id,
    text: entry.text,
    x: CENTER_X,
    y: CENTER_Y,
    color: entry.id === center.id ? CENTER_COLOR : getColor(branchIndex++),
    children: children.get(entry.id) ?? [],
  }));

  return rebalanceLayout({
    title: readText(value.title) || "Mind Map",
    nodes,
    connections: mergeConnections(connections, childConnections(children)),
    centerNodeId: center.id,
  });
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
    reconstructFromIdLabels(context?.currentResult?.data) ??
    reconstructFromIdLabels(argsMap)
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
      const title = readText(args.title);
      const centralIdea = readText(args.centralIdea);
      if (!title || !centralIdea) {
        return {
          toolName: TOOL_NAME,
          message: "Title and central idea are required for creating a mind map",
          instructions: "Ask the user for the title and central concept.",
        };
      }
      mapData = createMindMap(title, centralIdea, parseIdeas(args.ideas));
      message = `Created mind map "${title}" with ${mapData.nodes.length} nodes`;
      instructions =
        "Tell the user the mind map has been created. Ask if they want to add more ideas or create connections between concepts.";
      break;
    }

    case "add_node": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      const parentRef = readText(args.parentNodeId);
      const newIdea = readText(args.newIdea);
      if (!parentRef || !newIdea) {
        return {
          toolName: TOOL_NAME,
          message: "Both parentNodeId and newIdea are required to add a node",
          instructions: "Ask the user which node to add the new idea to.",
        };
      }
      const parent = findNodeByRef(existingMap, parentRef);
      if (parent.kind !== "found") {
        return nodeLookupError(existingMap, parentRef, parent);
      }
      mapData = addNodeToMap(existingMap, parent.node, newIdea);
      message = `Added "${newIdea}" to the mind map`;
      instructions =
        "Confirm the new idea was added. Ask if they want to continue expanding or explore other branches.";
      break;
    }

    case "delete_node": {
      const existingMap = getExistingMapData(context, args.existingMap);
      if (!existingMap) return missingMapResult();
      const targetRef = readText(args.nodeIdToDelete);
      if (!targetRef) {
        return {
          toolName: TOOL_NAME,
          message: "nodeIdToDelete is required for deletion",
          instructions: "Ask which node should be deleted.",
        };
      }
      const target = findNodeByRef(existingMap, targetRef);
      if (target.kind !== "found") {
        return nodeLookupError(existingMap, targetRef, target);
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
      const fromRef = readText(args.fromNodeId);
      const toRef = readText(args.toNodeId);
      if (!fromRef || !toRef) {
        return {
          toolName: TOOL_NAME,
          message: "Both fromNodeId and toNodeId are required for connection",
          instructions: "Ask which concepts should be connected.",
        };
      }
      const from = findNodeByRef(existingMap, fromRef);
      if (from.kind !== "found") return nodeLookupError(existingMap, fromRef, from);
      const to = findNodeByRef(existingMap, toRef);
      if (to.kind !== "found") return nodeLookupError(existingMap, toRef, to);

      mapData = connectNodes(
        existingMap,
        from.node.id,
        to.node.id,
        readText(args.connectionLabel) || undefined
      );
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
    centerNodeId: mapData.centerNodeId,
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
