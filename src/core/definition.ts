/**
 * Mind Map Tool Definition
 */

import type { ToolDefinition } from "gui-chat-protocol";

export const TOOL_NAME = "createMindMap";

export const TOOL_DEFINITION: ToolDefinition = {
  type: "function",
  name: TOOL_NAME,
  description:
    "Create or update an interactive mind map to visualize ideas, concepts, and their relationships. Use this when brainstorming, organizing thoughts, or explaining complex topics visually.",
  parameters: {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["create", "add_node", "connect", "update", "rebalance"],
        description:
          "Action to perform: create (new mind map), add_node (add idea to existing node), connect (link two nodes), update (modify existing map), rebalance (recalculate layout for better display)",
      },
      title: {
        type: "string",
        description: "Title of the mind map (required for create action)",
      },
      centralIdea: {
        type: "string",
        description:
          "The central concept or main topic (required for create action)",
      },
      ideas: {
        type: "array",
        items: { type: "string" },
        description:
          "List of related ideas to add as branches from the central idea (for create action)",
      },
      parentNodeId: {
        type: "string",
        description: "ID of the parent node to attach new idea to (for add_node action)",
      },
      newIdea: {
        type: "string",
        description: "New idea to add (for add_node action)",
      },
      fromNodeId: {
        type: "string",
        description: "Source node ID for connection (for connect action)",
      },
      toNodeId: {
        type: "string",
        description: "Target node ID for connection (for connect action)",
      },
      connectionLabel: {
        type: "string",
        description: "Optional label for the connection",
      },
      existingMap: {
        type: "object",
        description:
          "Optional: Current mind map state. Not required if updating the currently displayed mind map - the plugin will use the current state automatically.",
      },
    },
    required: ["action"],
  },
};

export const SYSTEM_PROMPT = `Use ${TOOL_NAME} to create visual mind maps when:
- The user wants to brainstorm or explore ideas
- Organizing complex topics with multiple related concepts
- Explaining relationships between different concepts
- Planning projects or workflows
- Summarizing discussions into visual format

When creating a mind map, start with a clear central idea and branch out with related concepts. Use add_node to expand specific branches and connect to show relationships between non-adjacent ideas.`;
