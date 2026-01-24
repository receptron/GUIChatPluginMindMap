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
    children?: string[];
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
/** Arguments passed to the tool */
export interface MindMapArgs {
    action: "create" | "add_node" | "delete_node" | "connect" | "update" | "rebalance";
    title?: string;
    centralIdea?: string;
    ideas?: string[];
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
    nodes: {
        id: string;
        text: string;
    }[];
}
