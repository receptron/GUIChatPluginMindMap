/**
 * Mind Map Plugin Unit Tests
 * Run with: npx tsx --test tests/plugin.test.ts
 */

import { test, describe } from "node:test";
import assert from "node:assert";
import { executeMindMap, TOOL_NAME } from "../src/core/plugin.js";
import type { MindMapData, MindMapArgs, MindMapJsonData } from "../src/core/types.js";
import type { ToolContext, ToolResult } from "gui-chat-protocol";

// Helper to create a mock context
function createContext(currentResult?: ToolResult<MindMapData, MindMapJsonData>): ToolContext {
  return {
    currentResult,
  };
}

// Helper to create a basic mind map for testing
async function createTestMindMap(): Promise<ToolResult<MindMapData, MindMapJsonData>> {
  const args: MindMapArgs = {
    action: "create",
    title: "Test Mind Map",
    centralIdea: "Central Idea",
    ideas: ["Idea 1", "Idea 2", "Idea 3"],
  };
  return await executeMindMap(createContext(), args);
}

describe("Mind Map Plugin - create action", () => {
  test("should create a mind map with central idea and branches", async () => {
    const args: MindMapArgs = {
      action: "create",
      title: "AI Technologies",
      centralIdea: "Artificial Intelligence",
      ideas: ["Machine Learning", "Deep Learning", "NLP"],
    };

    const result = await executeMindMap(createContext(), args);

    assert.strictEqual(result.toolName, TOOL_NAME);
    assert.ok(result.data, "data should be defined");
    assert.strictEqual(result.data.title, "AI Technologies");
    assert.strictEqual(result.data.nodes.length, 4); // 1 center + 3 ideas
    assert.strictEqual(result.data.connections.length, 3);
    assert.ok(result.data.centerNodeId, "centerNodeId should be defined");

    // Verify center node
    const centerNode = result.data.nodes.find((n) => n.id === result.data!.centerNodeId);
    assert.ok(centerNode, "center node should exist");
    assert.strictEqual(centerNode.text, "Artificial Intelligence");

    console.log("✓ Created mind map with 4 nodes and 3 connections");
  });

  test("should return error when title is missing", async () => {
    const args: MindMapArgs = {
      action: "create",
      centralIdea: "No Title",
    };

    const result = await executeMindMap(createContext(), args);

    assert.strictEqual(result.data, undefined);
    assert.ok(result.message?.includes("Title and central idea are required"));
    console.log("✓ Returns error when title is missing");
  });
});

describe("Mind Map Plugin - add_node action", () => {
  test("should add a node to existing map from context", async () => {
    // First create a map
    const createResult = await createTestMindMap();
    assert.ok(createResult.data, "createResult.data should be defined");

    const originalNodeCount = createResult.data.nodes.length;
    const originalConnectionCount = createResult.data.connections.length;
    const centerNodeId = createResult.data.centerNodeId;

    console.log(`  Original: ${originalNodeCount} nodes, ${originalConnectionCount} connections`);

    // Now add a node using context
    const addArgs: MindMapArgs = {
      action: "add_node",
      parentNodeId: centerNodeId,
      newIdea: "New Idea",
    };

    const context = createContext(createResult);
    const result = await executeMindMap(context, addArgs);

    assert.ok(result.data, "result.data should be defined after add_node");
    assert.strictEqual(result.data.nodes.length, originalNodeCount + 1, "Should have one more node");
    assert.strictEqual(result.data.connections.length, originalConnectionCount + 1, "Should have one more connection");
    assert.strictEqual(result.updating, true, "Should be an updating result");

    // Verify new node exists
    const newNode = result.data.nodes.find((n) => n.text === "New Idea");
    assert.ok(newNode, "New node should exist");

    // Verify connection exists
    const newConnection = result.data.connections.find((c) => c.to === newNode!.id);
    assert.ok(newConnection, "Connection to new node should exist");
    assert.strictEqual(newConnection.from, centerNodeId);

    console.log(`✓ Added node: ${result.data.nodes.length} nodes, ${result.data.connections.length} connections`);
  });

  test("should add a node using existingMap in args", async () => {
    const createResult = await createTestMindMap();
    assert.ok(createResult.data);

    const centerNodeId = createResult.data.centerNodeId;
    const originalNodeCount = createResult.data.nodes.length;

    // Pass existingMap directly in args (not using context)
    const addArgs: MindMapArgs = {
      action: "add_node",
      existingMap: createResult.data,
      parentNodeId: centerNodeId,
      newIdea: "New Idea from Args",
    };

    const result = await executeMindMap(createContext(), addArgs); // empty context

    assert.ok(result.data, "result.data should be defined");
    assert.strictEqual(result.data.nodes.length, originalNodeCount + 1);

    const newNode = result.data.nodes.find((n) => n.text === "New Idea from Args");
    assert.ok(newNode, "New node should exist");

    console.log("✓ Added node using existingMap in args");
  });

  test("should reconstruct map from jsonData format (what LLM sends)", async () => {
    // Simulate what the LLM might pass - jsonData format with nodeCount
    const jsonDataFormat = {
      nodeCount: 3,
      connectionCount: 2,
      nodes: [
        { id: "node_1", text: "Center" },
        { id: "node_2", text: "Branch 1" },
        { id: "node_3", text: "Branch 2" },
      ],
    } as unknown as MindMapData;

    const addArgs: MindMapArgs = {
      action: "add_node",
      existingMap: jsonDataFormat,
      parentNodeId: "node_1",
      newIdea: "New Branch",
    };

    const result = await executeMindMap(createContext(), addArgs);

    assert.ok(result.data, "Should reconstruct and return data");
    assert.ok(result.data.nodes.length > 3, "Should have added a node");
    assert.ok(result.data.connections, "Should have connections array");

    const newNode = result.data.nodes.find((n) => n.text === "New Branch");
    assert.ok(newNode, "New node should exist");

    console.log(`✓ Reconstructed from jsonData format: ${result.data.nodes.length} nodes`);
  });

  test("should return error when no existing map is available", async () => {
    const addArgs: MindMapArgs = {
      action: "add_node",
      parentNodeId: "some_id",
      newIdea: "Orphan Idea",
    };

    const result = await executeMindMap(createContext(), addArgs);

    assert.strictEqual(result.data, undefined);
    assert.ok(result.message?.includes("Existing map"));

    console.log("✓ Returns error when no existing map");
  });

  test("should report an error listing the available nodes when the parent is unknown", async () => {
    const createResult = await createTestMindMap();
    assert.ok(createResult.data);

    const addArgs: MindMapArgs = {
      action: "add_node",
      parentNodeId: "non_existent_id",
      newIdea: "Orphan Idea",
    };

    const context = createContext(createResult);
    const result = await executeMindMap(context, addArgs);

    // A silent no-op reads as success to the caller — fail loudly instead
    assert.strictEqual(result.data, undefined, "Should not return a map");
    assert.ok(result.message?.includes("non_existent_id"));
    assert.ok(result.message?.includes("Idea 1"), "Should list the available labels");

    console.log("✓ Unknown parent node reports the available labels");
  });
});

describe("Mind Map Plugin - missing context (mulmoclaude#2709)", () => {
  test("should not throw when context is null", async () => {
    const result = await executeMindMap(null, {
      action: "add_node",
      parentNodeId: "Idea 1",
      newIdea: "New Idea",
    });

    assert.strictEqual(result.data, undefined);
    assert.ok(result.message?.includes("Existing map"));
    console.log("✓ null context returns an error instead of throwing");
  });

  test("should not throw when context is undefined for every action", async () => {
    const actions: MindMapArgs["action"][] = [
      "add_node",
      "delete_node",
      "connect",
      "update",
      "rebalance",
    ];

    for (const action of actions) {
      const result = await executeMindMap(undefined, { action });
      assert.strictEqual(result.data, undefined, `${action} should not return data`);
      assert.ok(result.message, `${action} should return a message`);
    }

    console.log("✓ undefined context is handled by every action");
  });

  test("should still create a map with no context", async () => {
    const result = await executeMindMap(null, {
      action: "create",
      title: "No Context",
      centralIdea: "Center",
      ideas: ["A"],
    });

    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, 2);
    console.log("✓ create works without a context");
  });
});

describe("Mind Map Plugin - node references by label", () => {
  test("should add a node using the parent's label", async () => {
    const createResult = await createTestMindMap();
    assert.ok(createResult.data);

    const result = await executeMindMap(createContext(createResult), {
      action: "add_node",
      parentNodeId: "Idea 2",
      newIdea: "Sub of Idea 2",
    });

    assert.ok(result.data);
    const parent = result.data.nodes.find((n) => n.text === "Idea 2");
    const child = result.data.nodes.find((n) => n.text === "Sub of Idea 2");
    assert.ok(parent && child);
    assert.ok(parent.children?.includes(child.id), "Child should be attached to the label's node");
    console.log("✓ add_node resolves a label");
  });

  test("should match a label case-insensitively and ignore surrounding space", async () => {
    const createResult = await createTestMindMap();

    const result = await executeMindMap(createContext(createResult), {
      action: "add_node",
      parentNodeId: "  idea 3 ",
      newIdea: "Sub of Idea 3",
    });

    assert.ok(result.data);
    const parent = result.data.nodes.find((n) => n.text === "Idea 3");
    const child = result.data.nodes.find((n) => n.text === "Sub of Idea 3");
    assert.ok(parent?.children?.includes(child!.id));
    console.log("✓ Label matching is case- and space-insensitive");
  });

  test("should delete a node using its label", async () => {
    const createResult = await createTestMindMap();
    assert.ok(createResult.data);

    const result = await executeMindMap(createContext(createResult), {
      action: "delete_node",
      nodeIdToDelete: "Idea 1",
    });

    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, createResult.data.nodes.length - 1);
    assert.ok(!result.data.nodes.some((n) => n.text === "Idea 1"));
    console.log("✓ delete_node resolves a label");
  });

  test("should refuse to delete the center node addressed by label", async () => {
    const createResult = await createTestMindMap();

    const result = await executeMindMap(createContext(createResult), {
      action: "delete_node",
      nodeIdToDelete: "Central Idea",
    });

    assert.strictEqual(result.data, undefined);
    assert.ok(result.message?.includes("center node"));
    console.log("✓ Center node is protected when addressed by label");
  });

  test("should connect two nodes by label", async () => {
    const createResult = await createTestMindMap();
    assert.ok(createResult.data);

    const result = await executeMindMap(createContext(createResult), {
      action: "connect",
      fromNodeId: "Idea 1",
      toNodeId: "Idea 3",
      connectionLabel: "supports",
    });

    assert.ok(result.data);
    const from = result.data.nodes.find((n) => n.text === "Idea 1")!;
    const to = result.data.nodes.find((n) => n.text === "Idea 3")!;
    const connection = result.data.connections.find((c) => c.from === from.id && c.to === to.id);
    assert.ok(connection);
    assert.strictEqual(connection.label, "supports");
    console.log("✓ connect resolves labels");
  });

  test("should report ambiguity instead of guessing", async () => {
    const createResult = await executeMindMap(createContext(), {
      action: "create",
      title: "Ambiguous",
      centralIdea: "Root",
      ideas: ["Growth plan", "Growth risks"],
    });
    assert.ok(createResult.data);

    const result = await executeMindMap(createContext(createResult), {
      action: "add_node",
      parentNodeId: "Growth",
      newIdea: "Nope",
    });

    assert.strictEqual(result.data, undefined, "Should not modify the map");
    assert.ok(result.message?.includes("Growth plan"));
    assert.ok(result.message?.includes("Growth risks"));
    console.log("✓ Ambiguous labels report the candidates");
  });
});

describe("Mind Map Plugin - hierarchical create", () => {
  test("should build three levels in a single create call", async () => {
    const result = await executeMindMap(createContext(), {
      action: "create",
      title: "Logic Tree",
      centralIdea: "Revenue",
      ideas: [
        {
          text: "Marketing",
          children: [{ text: "SNS", children: [{ text: "X" }, { text: "Instagram" }] }, { text: "Ads" }],
        },
        "Sales",
      ],
    });

    assert.ok(result.data);
    // Revenue + Marketing + SNS + X + Instagram + Ads + Sales
    assert.strictEqual(result.data.nodes.length, 7);
    assert.strictEqual(result.data.connections.length, 6);

    const byText = (text: string) => result.data!.nodes.find((n) => n.text === text)!;
    assert.ok(byText("Marketing").children?.includes(byText("SNS").id));
    assert.ok(byText("SNS").children?.includes(byText("X").id));
    assert.ok(byText("SNS").children?.includes(byText("Instagram").id));
    assert.ok(byText("Marketing").children?.includes(byText("Ads").id));
    assert.ok(byText("Revenue").children?.includes(byText("Sales").id));
    console.log("✓ Nested ideas build a 3-level hierarchy in one call");
  });

  test("should keep every node inside the canvas", async () => {
    const result = await executeMindMap(createContext(), {
      action: "create",
      title: "Deep",
      centralIdea: "Root",
      ideas: [
        {
          text: "L1",
          children: [{ text: "L2", children: [{ text: "L3", children: [{ text: "L4" }] }] }],
        },
      ],
    });

    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, 5);
    for (const node of result.data.nodes) {
      assert.ok(node.x >= 0 && node.x <= 800, `x out of canvas: ${node.x}`);
      assert.ok(node.y >= 0 && node.y <= 600, `y out of canvas: ${node.y}`);
    }
    console.log("✓ Deep hierarchies stay inside the canvas");
  });

  test("should skip empty or malformed branches", async () => {
    const result = await executeMindMap(createContext(), {
      action: "create",
      title: "Messy",
      centralIdea: "Root",
      // The LLM occasionally emits blanks or objects without `text`
      ideas: ["  ", { text: "Kept" }, { text: "   " }],
    });

    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, 2);
    assert.strictEqual(result.data.nodes[1].text, "Kept");
    console.log("✓ Blank branches are dropped");
  });
});

describe("Mind Map Plugin - connect action", () => {
  test("should connect two nodes", async () => {
    const createResult = await createTestMindMap();
    assert.ok(createResult.data);

    const nodes = createResult.data.nodes;
    const node1 = nodes[1]; // First branch
    const node2 = nodes[2]; // Second branch
    const originalConnectionCount = createResult.data.connections.length;

    const connectArgs: MindMapArgs = {
      action: "connect",
      fromNodeId: node1.id,
      toNodeId: node2.id,
      connectionLabel: "relates to",
    };

    const context = createContext(createResult);
    const result = await executeMindMap(context, connectArgs);

    assert.ok(result.data);
    assert.strictEqual(result.data.connections.length, originalConnectionCount + 1);

    const newConnection = result.data.connections.find(
      (c) => c.from === node1.id && c.to === node2.id
    );
    assert.ok(newConnection, "New connection should exist");
    assert.strictEqual(newConnection.label, "relates to");

    console.log("✓ Connected two nodes");
  });
});

describe("Mind Map Plugin - sequential operations", () => {
  test("should handle multiple add_node operations correctly", async () => {
    // Create initial map
    let result = await createTestMindMap();
    assert.ok(result.data);

    const centerId = result.data.centerNodeId;
    console.log(`  Initial: ${result.data.nodes.length} nodes`);

    // Add first node
    result = await executeMindMap(createContext(result), {
      action: "add_node",
      parentNodeId: centerId,
      newIdea: "Added 1",
    });
    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, 5);
    console.log(`  After add 1: ${result.data.nodes.length} nodes`);

    // Add second node
    result = await executeMindMap(createContext(result), {
      action: "add_node",
      parentNodeId: centerId,
      newIdea: "Added 2",
    });
    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, 6);
    console.log(`  After add 2: ${result.data.nodes.length} nodes`);

    // Add third node to a branch
    const branchId = result.data.nodes.find((n) => n.text === "Added 1")!.id;
    result = await executeMindMap(createContext(result), {
      action: "add_node",
      parentNodeId: branchId,
      newIdea: "Sub-branch",
    });
    assert.ok(result.data);
    assert.strictEqual(result.data.nodes.length, 7);
    console.log(`  After add sub-branch: ${result.data.nodes.length} nodes`);

    // Verify all connections exist (original 3 + 3 new)
    assert.strictEqual(result.data.connections.length, 6);

    console.log("✓ Sequential operations: 7 nodes, 6 connections");
  });
});

describe("Mind Map Plugin - data integrity", () => {
  test("should assign unique IDs to all nodes", async () => {
    const result = await createTestMindMap();
    assert.ok(result.data);

    const ids = result.data.nodes.map((n) => n.id);
    const uniqueIds = new Set(ids);

    assert.strictEqual(uniqueIds.size, ids.length, "All IDs should be unique");
    console.log("✓ All node IDs are unique");
  });

  test("should have valid connections array even with empty connections", async () => {
    const args: MindMapArgs = {
      action: "create",
      title: "Solo Node",
      centralIdea: "Just Me",
    };

    const result = await executeMindMap(createContext(), args);

    assert.ok(result.data);
    assert.ok(Array.isArray(result.data.connections), "connections should be an array");
    assert.strictEqual(result.data.connections.length, 0);

    console.log("✓ Connections array is valid even when empty");
  });
});

console.log("\n🧪 Running Mind Map Plugin Tests...\n");
