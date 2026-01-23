/**
 * Mind Map Plugin - Vue Implementation
 */
import "../style.css";
import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { MindMapData, MindMapArgs, MindMapJsonData } from "../core/types";
import View from "./View.vue";
import Preview from "./Preview.vue";
export declare const plugin: ToolPlugin<MindMapData, MindMapJsonData, MindMapArgs>;
export type { MindMapData, MindMapArgs, MindMapJsonData } from "../core/types";
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT, executeMindMap, pluginCore, } from "../core/plugin";
export { samples } from "../core/samples";
export { View, Preview };
declare const _default: {
    plugin: ToolPlugin<MindMapData, MindMapJsonData, MindMapArgs, import("gui-chat-protocol/vue").InputHandler, Record<string, unknown>>;
};
export default _default;
