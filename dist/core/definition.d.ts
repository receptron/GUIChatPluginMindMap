/**
 * Mind Map Tool Definition
 */
import type { ToolDefinition } from "gui-chat-protocol";
export declare const TOOL_NAME = "createMindMap";
export declare const TOOL_DEFINITION: ToolDefinition;
export declare const SYSTEM_PROMPT = "Use createMindMap to create visual mind maps when:\n- The user wants to brainstorm or explore ideas\n- Organizing complex topics with multiple related concepts\n- Explaining relationships between different concepts\n- Planning projects or workflows\n- Summarizing discussions into visual format\n\nWhen creating a mind map, start with a clear central idea and branch out with related concepts. Use add_node to expand specific branches and connect to show relationships between non-adjacent ideas.";
