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

function createMindMap(
  title: string,
  centralIdea: string,
  ideas: string[]
): MindMapData {
  const centerX = 400;
  const centerY = 300;
  const radius = 200;

  const centerNode: MindMapNode = {
    id: generateId(),
    text: centralIdea,
    x: centerX,
    y: centerY,
    color: "#1F2937", // dark gray for center
    children: [],
  };

  const nodes: MindMapNode[] = [centerNode];
  const connections: MindMapConnection[] = [];

  ideas.forEach((idea, index) => {
    const pos = calculateNodePosition(index, ideas.length, centerX, centerY, radius);
    const childNode: MindMapNode = {
      id: generateId(),
      text: idea,
      x: pos.x,
      y: pos.y,
      color: getColor(index),
      children: [],
    };
    nodes.push(childNode);
    centerNode.children?.push(childNode.id);
    connections.push({
      from: centerNode.id,
      to: childNode.id,
    });
  });

  return {
    title,
    nodes,
    connections,
    centerNodeId: centerNode.id,
  };
}

function addNodeToMap(
  map: MindMapData,
  parentNodeId: string,
  newIdea: string
): MindMapData {
  const nodes = map.nodes || [];
  const connections = map.connections || [];

  const parentNode = nodes.find((n) => n.id === parentNodeId);
  if (!parentNode) {
    return { ...map, nodes, connections };
  }

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
 * Get existing map data from context or args
 * Prefers context.currentResult.data as it has full structure
 * Will initialize missing arrays (connections) if needed
 */
function getExistingMapData(
  context: ToolContext,
  argsMap?: MindMapData
): MindMapData | null {
  // Prefer data from context (has full structure with positions, colors, connections)
  const contextData = context.currentResult?.data as MindMapData | undefined;

  console.log("[MindMap Debug] getExistingMapData:", {
    contextDataExists: !!contextData,
    contextDataNodes: contextData?.nodes?.length,
    argsMapExists: !!argsMap,
    argsMapNodes: argsMap?.nodes?.length,
    argsMapHasNodeCount: argsMap && "nodeCount" in argsMap,
  });

  if (contextData?.nodes && contextData.nodes.length > 0) {
    console.log("[MindMap Debug] Using contextData with", contextData.nodes.length, "nodes");
    // Ensure connections is an array
    return {
      ...contextData,
      connections: contextData.connections || [],
    };
  }

  // Fall back to args if it has nodes
  if (argsMap?.nodes && argsMap.nodes.length > 0) {
    console.log("[MindMap Debug] Using argsMap with", argsMap.nodes.length, "nodes");
    // Ensure connections is an array
    return {
      ...argsMap,
      connections: argsMap.connections || [],
    };
  }

  // Last resort: try to reconstruct from argsMap even if nodes are simplified (from jsonData)
  // This handles the case where LLM passes jsonData format
  if (argsMap && "nodeCount" in argsMap && (argsMap as unknown as MindMapJsonData).nodes) {
    console.log("[MindMap Debug] Reconstructing from jsonData format");
    const jsonData = argsMap as unknown as MindMapJsonData;
    // We can't fully reconstruct without positions, but we can at least not crash
    const centerX = 400;
    const centerY = 300;
    const radius = 200;

    const reconstructedNodes: MindMapNode[] = jsonData.nodes.map((n, index) => {
      const angle = (2 * Math.PI * index) / jsonData.nodes.length - Math.PI / 2;
      return {
        id: n.id,
        text: n.text,
        x: index === 0 ? centerX : centerX + radius * Math.cos(angle),
        y: index === 0 ? centerY : centerY + radius * Math.sin(angle),
        color: index === 0 ? "#1F2937" : getColor(index),
        children: [],
      };
    });

    // Reconstruct connections from first node to all others
    const reconstructedConnections: MindMapConnection[] = [];
    if (reconstructedNodes.length > 1) {
      const centerNode = reconstructedNodes[0];
      for (let i = 1; i < reconstructedNodes.length; i++) {
        reconstructedConnections.push({
          from: centerNode.id,
          to: reconstructedNodes[i].id,
        });
        centerNode.children = centerNode.children || [];
        centerNode.children.push(reconstructedNodes[i].id);
      }
    }

    console.log("[MindMap Debug] Reconstructed", reconstructedNodes.length, "nodes from jsonData");
    return {
      title: "Mind Map",
      nodes: reconstructedNodes,
      connections: reconstructedConnections,
      centerNodeId: reconstructedNodes[0]?.id || "",
    };
  }

  console.log("[MindMap Debug] No existing map found, returning null");
  return null;
}

export const executeMindMap = async (
  context: ToolContext,
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
      mapData = createMindMap(
        args.title,
        args.centralIdea,
        args.ideas || []
      );
      message = `Created mind map "${args.title}" with ${mapData.nodes.length} nodes`;
      instructions =
        "Tell the user the mind map has been created. Ask if they want to add more ideas or create connections between concepts.";
      break;
    }

    case "add_node": {
      const existingMap = getExistingMapData(context, args.existingMap as MindMapData);

      // Debug logging
      const debugInfo = {
        hasContext: !!context,
        hasCurrentResult: !!context?.currentResult,
        currentResultToolName: context?.currentResult?.toolName,
        currentResultHasData: !!context?.currentResult?.data,
        currentResultDataNodes: (context?.currentResult?.data as MindMapData | undefined)?.nodes?.length,
        argsHasExistingMap: !!args.existingMap,
        argsExistingMapNodes: (args.existingMap as MindMapData | undefined)?.nodes?.length,
        existingMapResult: existingMap ? `${existingMap.nodes?.length} nodes` : null,
        parentNodeId: args.parentNodeId,
        newIdea: args.newIdea,
      };
      console.log("[MindMap Debug] add_node:", JSON.stringify(debugInfo, null, 2));

      if (!existingMap || !args.parentNodeId || !args.newIdea) {
        const missing = [];
        if (!existingMap) missing.push("existingMap");
        if (!args.parentNodeId) missing.push("parentNodeId");
        if (!args.newIdea) missing.push("newIdea");
        return {
          toolName: TOOL_NAME,
          message: `Missing: ${missing.join(", ")}. Debug: context.currentResult.data=${!!context?.currentResult?.data}, args.existingMap=${!!args.existingMap}`,
          instructions: "Ask the user which node to add the new idea to.",
        };
      }
      mapData = addNodeToMap(
        existingMap,
        args.parentNodeId,
        args.newIdea
      );
      message = `Added "${args.newIdea}" to the mind map`;
      instructions =
        "Confirm the new idea was added. Ask if they want to continue expanding or explore other branches.";
      break;
    }

    case "connect": {
      const existingMap = getExistingMapData(context, args.existingMap as MindMapData);
      if (!existingMap || !args.fromNodeId || !args.toNodeId) {
        return {
          toolName: TOOL_NAME,
          message: "Existing map and both node IDs are required for connection",
          instructions: "Ask which concepts should be connected.",
        };
      }
      mapData = connectNodes(
        existingMap,
        args.fromNodeId,
        args.toNodeId,
        args.connectionLabel
      );
      message = `Connected nodes in the mind map`;
      instructions =
        "Confirm the connection was created. Ask if they want to add more relationships.";
      break;
    }

    case "update": {
      const existingMap = getExistingMapData(context, args.existingMap as MindMapData);
      if (!existingMap) {
        return {
          toolName: TOOL_NAME,
          message: "Existing map is required for update",
          instructions: "The mind map data is missing.",
        };
      }
      mapData = existingMap;
      message = "Mind map updated";
      instructions = "The mind map has been refreshed.";
      break;
    }

    case "rebalance": {
      const existingMap = getExistingMapData(context, args.existingMap as MindMapData);
      if (!existingMap) {
        return {
          toolName: TOOL_NAME,
          message: "Existing map is required for rebalance",
          instructions: "The mind map data is missing.",
        };
      }
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

/**
 * Merge function for handling parallel tool calls.
 * Merges nodes and connections from newData into currentData,
 * adding only items that don't already exist.
 */
function mergeMindMapData(
  currentData: MindMapData,
  newData: MindMapData
): MindMapData {
  const currentNodeIds = new Set(currentData.nodes.map((n) => n.id));
  const addedNodes = newData.nodes.filter((n) => !currentNodeIds.has(n.id));

  const connKey = (c: MindMapConnection) => `${c.from}->${c.to}`;
  const currentConnKeys = new Set(
    (currentData.connections || []).map(connKey)
  );
  const addedConnections = (newData.connections || []).filter(
    (c) => !currentConnKeys.has(connKey(c))
  );

  // Also merge children arrays
  const nodeMap = new Map(currentData.nodes.map((n) => [n.id, { ...n }]));
  for (const newNode of newData.nodes) {
    const existing = nodeMap.get(newNode.id);
    if (existing && newNode.children) {
      const existingChildren = new Set(existing.children || []);
      const newChildren = newNode.children.filter((c) => !existingChildren.has(c));
      existing.children = [...(existing.children || []), ...newChildren];
    }
  }

  return {
    ...newData,
    nodes: [...Array.from(nodeMap.values()), ...addedNodes],
    connections: [...(currentData.connections || []), ...addedConnections],
  };
}

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
  merge: mergeMindMapData,
};
