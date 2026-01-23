/**
 * Mind Map Plugin Core
 */
import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { MindMapData, MindMapArgs, MindMapJsonData } from "./types";
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";
export declare const executeMindMap: (context: ToolContext, args: MindMapArgs) => Promise<ToolResult<MindMapData, MindMapJsonData>>;
export declare const pluginCore: ToolPluginCore<MindMapData, MindMapJsonData, MindMapArgs>;
