/**
 * Mind Map Plugin - Type Definitions
 */

/** A node in the mind map */
export interface MindMapNode {
  id: string;
  text: string;
  x: number;
  y: number;
  color?: string;
  children?: string[]; // IDs of child nodes
}

/** A connection between nodes */
export interface MindMapConnection {
  from: string;
  to: string;
  label?: string;
}

/** Data stored in result.data (for UI display) */
export interface MindMapData {
  title: string;
  nodes: MindMapNode[];
  connections: MindMapConnection[];
  centerNodeId: string;
}

/** A branch for the create action: a plain label, or a label with nested branches */
export type IdeaInput = string | { text: string; children?: IdeaInput[] };

/** Arguments passed to the tool */
export interface MindMapArgs {
  action: "create" | "add_node" | "delete_node" | "connect" | "update" | "rebalance";
  title?: string;
  centralIdea?: string;
  ideas?: IdeaInput[];
  parentNodeId?: string;
  newIdea?: string;
  nodeIdToDelete?: string;
  fromNodeId?: string;
  toNodeId?: string;
  connectionLabel?: string;
  existingMap?: MindMapData;
}

/** JSON data returned in result.jsonData */
export interface MindMapJsonData {
  nodeCount: number;
  connectionCount: number;
  /** Lets a caller that echoes this back as `existingMap` keep the center */
  centerNodeId: string;
  nodes: { id: string; text: string }[];
}
