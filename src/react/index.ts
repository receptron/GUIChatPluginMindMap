/**
 * Mind Map Plugin - React Implementation
 */

import "../style.css";

import type { ToolPluginReact } from "gui-chat-protocol/react";
import type { MindMapData, MindMapArgs, MindMapJsonData } from "../core/types";
import { pluginCore } from "../core/plugin";
import { samples } from "../core/samples";
import { View } from "./View";
import { Preview } from "./Preview";

export const plugin: ToolPluginReact<MindMapData, MindMapJsonData, MindMapArgs> = {
  ...pluginCore,
  ViewComponent: View,
  PreviewComponent: Preview,
  samples,
};

export type { MindMapData, MindMapArgs, MindMapJsonData } from "../core/types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeMindMap,
  pluginCore,
} from "../core/plugin";

export { samples } from "../core/samples";

export { View, Preview };

export default { plugin };
