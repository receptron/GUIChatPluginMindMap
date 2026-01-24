# @gui-chat-plugin/mindmap

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fmindmap.svg)](https://www.npmjs.com/package/@gui-chat-plugin/mindmap)

Interactive mind map plugin for GUI Chat applications. Create visual mind maps for brainstorming and idea organization.

## Features

- Create mind maps with central idea and branching nodes
- Add, delete, and connect nodes interactively
- Auto-layout with rebalance functionality
- Export to PNG and PDF
- Vue and React support

## Installation

```bash
yarn add @gui-chat-plugin/mindmap
```

## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import MindMapPlugin from "@gui-chat-plugin/mindmap/vue";

const pluginList = [
  // ... other plugins
  MindMapPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/mindmap/style.css";
```

### React Integration

```typescript
import MindMapPlugin from "@gui-chat-plugin/mindmap/react";
import "@gui-chat-plugin/mindmap/style.css";
```

### Core-only Usage

```typescript
import { executeMindMap, TOOL_DEFINITION } from "@gui-chat-plugin/mindmap";

// Create a mind map
const result = await executeMindMap(context, {
  action: "create",
  title: "Project Ideas",
  centralIdea: "New Product",
  ideas: ["Feature A", "Feature B", "Feature C"],
});
```

## API

### MindMapArgs

```typescript
interface MindMapArgs {
  action: "create" | "add_node" | "delete_node" | "connect" | "update" | "rebalance";
  title?: string;           // Title of the mind map
  centralIdea?: string;     // Central idea for new mind map
  ideas?: string[];         // Initial ideas branching from center
  parentNodeId?: string;    // Parent node ID for add_node
  newIdea?: string;         // New idea text for add_node
  nodeIdToDelete?: string;  // Node ID to delete
  fromNodeId?: string;      // Source node for connection
  toNodeId?: string;        // Target node for connection
  connectionLabel?: string; // Label for connection
}
```

### Actions

| Action | Description |
|--------|-------------|
| `create` | Create a new mind map with central idea and branches |
| `add_node` | Add a new node as child of existing node |
| `delete_node` | Delete a node and its children |
| `connect` | Create a connection between two nodes |
| `update` | Update existing mind map |
| `rebalance` | Auto-arrange nodes for better layout |

## Test Prompts

Try these prompts to test the plugin:

1. "Create a mind map about project planning"
2. "Add a new idea about marketing to the mind map"
3. "Connect the design and development nodes"

## Development

```bash
# Install dependencies
yarn install

# Run Vue demo
yarn dev

# Run React demo
yarn dev:react

# Build
yarn build

# Lint
yarn lint
```

## License

MIT
