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
        enum: ["create", "add_node", "delete_node", "connect", "update", "rebalance"],
        description:
          "Action to perform: create (new mind map, including its full hierarchy), add_node (add idea to existing node), delete_node (remove a node and its connections), connect (link two nodes), update (modify existing map), rebalance (recalculate layout for better display)",
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
        description:
          "Branches of the central idea (for create action). Each entry is either a plain label, or an object { text, children } whose children follow the same shape — nest them to build the whole hierarchy, at any depth, in this single call.",
        items: {
          oneOf: [
            { type: "string", description: "A branch with no sub-branches" },
            {
              type: "object",
              description: "A branch with nested sub-branches",
              properties: {
                text: { type: "string", description: "Label of this branch" },
                children: {
                  type: "array",
                  items: { type: "object" },
                  description:
                    "Sub-branches, same { text, children } shape. Omit for a leaf.",
                },
              },
              required: ["text"],
            },
          ],
        },
      },
      parentNodeId: {
        type: "string",
        description:
          "Parent node to attach the new idea to (for add_node action). Either the node ID or its label text.",
      },
      newIdea: {
        type: "string",
        description: "New idea to add (for add_node action)",
      },
      nodeIdToDelete: {
        type: "string",
        description:
          "Node to delete (for delete_node action) — node ID or label text. Children of this node will also be deleted.",
      },
      fromNodeId: {
        type: "string",
        description: "Source node for connection (for connect action) — node ID or label text",
      },
      toNodeId: {
        type: "string",
        description: "Target node for connection (for connect action) — node ID or label text",
      },
      connectionLabel: {
        type: "string",
        description: "Optional label for the connection",
      },
      existingMap: {
        type: "object",
        description:
          "Optional: Current mind map state. Not required when the host tracks the displayed mind map - the plugin uses that state automatically. Pass it only if a previous call reported that no mind map was available.",
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

When creating a mind map, start with a clear central idea and branch out with related concepts. Nest "ideas" entries ({ text, children }) to build a multi-level hierarchy in one create call — this works even on hosts that keep no mind map state between calls. Use add_node to expand specific branches, delete_node to remove unwanted nodes, and connect to show relationships between non-adjacent ideas; those actions take either a node ID or the node's label text.`;
