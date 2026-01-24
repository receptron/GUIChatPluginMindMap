const y = "createMindMap", O = {
  type: "function",
  name: y,
  description: "Create or update an interactive mind map to visualize ideas, concepts, and their relationships. Use this when brainstorming, organizing thoughts, or explaining complex topics visually.",
  parameters: {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["create", "add_node", "delete_node", "connect", "update", "rebalance"],
        description: "Action to perform: create (new mind map), add_node (add idea to existing node), delete_node (remove a node and its connections), connect (link two nodes), update (modify existing map), rebalance (recalculate layout for better display)"
      },
      title: {
        type: "string",
        description: "Title of the mind map (required for create action)"
      },
      centralIdea: {
        type: "string",
        description: "The central concept or main topic (required for create action)"
      },
      ideas: {
        type: "array",
        items: { type: "string" },
        description: "List of related ideas to add as branches from the central idea (for create action)"
      },
      parentNodeId: {
        type: "string",
        description: "ID of the parent node to attach new idea to (for add_node action)"
      },
      newIdea: {
        type: "string",
        description: "New idea to add (for add_node action)"
      },
      nodeIdToDelete: {
        type: "string",
        description: "ID of the node to delete (for delete_node action). Children of this node will also be deleted."
      },
      fromNodeId: {
        type: "string",
        description: "Source node ID for connection (for connect action)"
      },
      toNodeId: {
        type: "string",
        description: "Target node ID for connection (for connect action)"
      },
      connectionLabel: {
        type: "string",
        description: "Optional label for the connection"
      },
      existingMap: {
        type: "object",
        description: "Optional: Current mind map state. Not required if updating the currently displayed mind map - the plugin will use the current state automatically."
      }
    },
    required: ["action"]
  }
}, $ = `Use ${y} to create visual mind maps when:
- The user wants to brainstorm or explore ideas
- Organizing complex topics with multiple related concepts
- Explaining relationships between different concepts
- Planning projects or workflows
- Summarizing discussions into visual format

When creating a mind map, start with a clear central idea and branch out with related concepts. Use add_node to expand specific branches, delete_node to remove unwanted nodes, and connect to show relationships between non-adjacent ideas.`, A = [
  "#4F46E5",
  // indigo
  "#0891B2",
  // cyan
  "#059669",
  // emerald
  "#D97706",
  // amber
  "#DC2626",
  // red
  "#7C3AED",
  // violet
  "#2563EB",
  // blue
  "#DB2777"
  // pink
];
function x() {
  return `node_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function C(n) {
  return A[n % A.length];
}
const T = 800, E = 600, R = T / 2, P = E / 2, D = 60;
function S(n, e, t, i, o) {
  const s = 2 * Math.PI * n / e - Math.PI / 2;
  return {
    x: t + o * Math.cos(s),
    y: i + o * Math.sin(s)
  };
}
function _(n, e, t, i, o) {
  const s = n - R, r = e - P, f = Math.atan2(r, s), a = Math.PI * 0.67, l = f - a / 2, c = i > 1 ? a / (i - 1) : 0, d = l + c * t, u = 120 * Math.pow(0.85, o - 1);
  return {
    x: n + u * Math.cos(d),
    y: e + u * Math.sin(d)
  };
}
function k(n, e) {
  return {
    x: Math.max(D, Math.min(T - D, n)),
    y: Math.max(D, Math.min(E - D, e))
  };
}
function v(n, e, t, i = /* @__PURE__ */ new Set()) {
  var o;
  if (n === t) return 0;
  if (i.has(n)) return 999;
  i.add(n);
  for (const s of e)
    if ((o = s.children) != null && o.includes(n))
      return 1 + v(s.id, e, t, i);
  return 1;
}
function j(n, e, t) {
  const r = {
    id: x(),
    text: e,
    x: 400,
    y: 300,
    color: "#1F2937",
    // dark gray for center
    children: []
  }, f = [r], a = [];
  return t.forEach((l, c) => {
    var u;
    const d = S(c, t.length, 400, 300, 200), m = {
      id: x(),
      text: l,
      x: d.x,
      y: d.y,
      color: C(c),
      children: []
    };
    f.push(m), (u = r.children) == null || u.push(m.id), a.push({
      from: r.id,
      to: m.id
    });
  }), {
    title: n,
    nodes: f,
    connections: a,
    centerNodeId: r.id
  };
}
function q(n, e, t) {
  var p;
  const i = n.nodes || [], o = n.connections || [], s = i.find((g) => g.id === e);
  if (!s)
    return { ...n, nodes: i, connections: o };
  const r = ((p = s.children) == null ? void 0 : p.length) || 0, f = r, a = r + 1, l = v(e, i, n.centerNodeId || "") + 1, c = _(
    s.x,
    s.y,
    f,
    a,
    l
  ), d = k(c.x, c.y), m = {
    id: x(),
    text: t,
    x: d.x,
    y: d.y,
    color: C(i.length),
    children: []
  }, u = {
    ...s,
    children: [...s.children || [], m.id]
  };
  return {
    ...n,
    nodes: [...i.filter((g) => g.id !== e), u, m],
    connections: [
      ...o,
      { from: e, to: m.id }
    ]
  };
}
function L(n) {
  const e = n.nodes || [], t = n.centerNodeId;
  if (!t || e.length === 0 || !e.find((a) => a.id === t))
    return n;
  const o = new Map(e.map((a) => [a.id, { ...a }])), s = o.get(t);
  s.x = R, s.y = P;
  const r = (a, l, c) => {
    const d = o.get(a);
    if (!d || !d.children || c.has(a)) return;
    c.add(a);
    const m = d.children.filter((u) => !c.has(u));
    m.forEach((u, p) => {
      const g = o.get(u);
      if (g) {
        if (l === 1) {
          const M = S(
            p,
            m.length,
            d.x,
            d.y,
            160
          );
          g.x = M.x, g.y = M.y;
        } else {
          const N = _(
            d.x,
            d.y,
            p,
            m.length,
            l
          ), M = k(N.x, N.y);
          g.x = M.x, g.y = M.y;
        }
        r(u, l + 1, c);
      }
    });
  }, f = /* @__PURE__ */ new Set();
  return f.add(t), r(t, 1, f), {
    ...n,
    nodes: Array.from(o.values())
  };
}
function F(n, e, t, i) {
  const o = n.connections || [];
  return o.some(
    (r) => r.from === e && r.to === t
  ) ? { ...n, connections: o } : {
    ...n,
    connections: [
      ...o,
      { from: e, to: t, label: i }
    ]
  };
}
function H(n, e) {
  const t = n.nodes || [], i = n.connections || [];
  if (e === n.centerNodeId)
    return n;
  const o = /* @__PURE__ */ new Set();
  function s(a) {
    o.add(a);
    const l = t.find((c) => c.id === a);
    l != null && l.children && l.children.forEach((c) => s(c));
  }
  s(e);
  const r = t.filter((a) => !o.has(a.id)).map((a) => {
    var l;
    return {
      ...a,
      // Remove deleted children from children arrays
      children: (l = a.children) == null ? void 0 : l.filter((c) => !o.has(c))
    };
  }), f = i.filter(
    (a) => !o.has(a.from) && !o.has(a.to)
  );
  return {
    ...n,
    nodes: r,
    connections: f
  };
}
function I(n, e) {
  var i, o, s, r;
  const t = (i = n.currentResult) == null ? void 0 : i.data;
  if (console.log("[MindMap Debug] getExistingMapData:", {
    contextDataExists: !!t,
    contextDataNodes: (o = t == null ? void 0 : t.nodes) == null ? void 0 : o.length,
    argsMapExists: !!e,
    argsMapNodes: (s = e == null ? void 0 : e.nodes) == null ? void 0 : s.length,
    argsMapHasNodeCount: e && "nodeCount" in e
  }), t != null && t.nodes && t.nodes.length > 0)
    return console.log("[MindMap Debug] Using contextData with", t.nodes.length, "nodes"), {
      ...t,
      connections: t.connections || []
    };
  if (e != null && e.nodes && e.nodes.length > 0)
    return console.log("[MindMap Debug] Using argsMap with", e.nodes.length, "nodes"), {
      ...e,
      connections: e.connections || []
    };
  if (e && "nodeCount" in e && e.nodes) {
    console.log("[MindMap Debug] Reconstructing from jsonData format");
    const f = e, a = 400, l = 300, c = 200, d = f.nodes.map((u, p) => {
      const g = 2 * Math.PI * p / f.nodes.length - Math.PI / 2;
      return {
        id: u.id,
        text: u.text,
        x: p === 0 ? a : a + c * Math.cos(g),
        y: p === 0 ? l : l + c * Math.sin(g),
        color: p === 0 ? "#1F2937" : C(p),
        children: []
      };
    }), m = [];
    if (d.length > 1) {
      const u = d[0];
      for (let p = 1; p < d.length; p++)
        m.push({
          from: u.id,
          to: d[p].id
        }), u.children = u.children || [], u.children.push(d[p].id);
    }
    return console.log("[MindMap Debug] Reconstructed", d.length, "nodes from jsonData"), {
      title: "Mind Map",
      nodes: d,
      connections: m,
      centerNodeId: ((r = d[0]) == null ? void 0 : r.id) || ""
    };
  }
  return console.log("[MindMap Debug] No existing map found, returning null"), null;
}
const U = async (n, e) => {
  var l, c, d, m, u, p, g, N, M;
  const { action: t } = e;
  let i, o, s;
  switch (t) {
    case "create": {
      if (!e.title || !e.centralIdea)
        return {
          toolName: y,
          message: "Title and central idea are required for creating a mind map",
          instructions: "Ask the user for the title and central concept."
        };
      i = j(
        e.title,
        e.centralIdea,
        e.ideas || []
      ), o = `Created mind map "${e.title}" with ${i.nodes.length} nodes`, s = "Tell the user the mind map has been created. Ask if they want to add more ideas or create connections between concepts.";
      break;
    }
    case "add_node": {
      const h = I(n, e.existingMap), w = {
        hasContext: !!n,
        hasCurrentResult: !!(n != null && n.currentResult),
        currentResultToolName: (l = n == null ? void 0 : n.currentResult) == null ? void 0 : l.toolName,
        currentResultHasData: !!((c = n == null ? void 0 : n.currentResult) != null && c.data),
        currentResultDataNodes: (u = (m = (d = n == null ? void 0 : n.currentResult) == null ? void 0 : d.data) == null ? void 0 : m.nodes) == null ? void 0 : u.length,
        argsHasExistingMap: !!e.existingMap,
        argsExistingMapNodes: (g = (p = e.existingMap) == null ? void 0 : p.nodes) == null ? void 0 : g.length,
        existingMapResult: h ? `${(N = h.nodes) == null ? void 0 : N.length} nodes` : null,
        parentNodeId: e.parentNodeId,
        newIdea: e.newIdea
      };
      if (console.log("[MindMap Debug] add_node:", JSON.stringify(w, null, 2)), !h || !e.parentNodeId || !e.newIdea) {
        const b = [];
        return h || b.push("existingMap"), e.parentNodeId || b.push("parentNodeId"), e.newIdea || b.push("newIdea"), {
          toolName: y,
          message: `Missing: ${b.join(", ")}. Debug: context.currentResult.data=${!!((M = n == null ? void 0 : n.currentResult) != null && M.data)}, args.existingMap=${!!e.existingMap}`,
          instructions: "Ask the user which node to add the new idea to."
        };
      }
      i = q(
        h,
        e.parentNodeId,
        e.newIdea
      ), o = `Added "${e.newIdea}" to the mind map`, s = "Confirm the new idea was added. Ask if they want to continue expanding or explore other branches.";
      break;
    }
    case "delete_node": {
      const h = I(n, e.existingMap);
      if (!h || !e.nodeIdToDelete)
        return {
          toolName: y,
          message: "Existing map and node ID are required for deletion",
          instructions: "Ask which node should be deleted."
        };
      if (e.nodeIdToDelete === h.centerNodeId)
        return {
          toolName: y,
          message: "Cannot delete the center node",
          instructions: "Tell the user that the center node cannot be deleted."
        };
      const w = h.nodes.find((b) => b.id === e.nodeIdToDelete);
      i = H(h, e.nodeIdToDelete), o = `Deleted "${(w == null ? void 0 : w.text) || e.nodeIdToDelete}" from the mind map`, s = "Confirm the node was deleted. Ask if they want to make any other changes.";
      break;
    }
    case "connect": {
      const h = I(n, e.existingMap);
      if (!h || !e.fromNodeId || !e.toNodeId)
        return {
          toolName: y,
          message: "Existing map and both node IDs are required for connection",
          instructions: "Ask which concepts should be connected."
        };
      i = F(
        h,
        e.fromNodeId,
        e.toNodeId,
        e.connectionLabel
      ), o = "Connected nodes in the mind map", s = "Confirm the connection was created. Ask if they want to add more relationships.";
      break;
    }
    case "update": {
      const h = I(n, e.existingMap);
      if (!h)
        return {
          toolName: y,
          message: "Existing map is required for update",
          instructions: "The mind map data is missing."
        };
      i = h, o = "Mind map updated", s = "The mind map has been refreshed.";
      break;
    }
    case "rebalance": {
      const h = I(n, e.existingMap);
      if (!h)
        return {
          toolName: y,
          message: "Existing map is required for rebalance",
          instructions: "The mind map data is missing."
        };
      i = L(h), o = `Mind map layout rebalanced with ${i.nodes.length} nodes`, s = "The mind map layout has been optimized for better readability.";
      break;
    }
    default:
      return {
        toolName: y,
        message: `Unknown action: ${t}`,
        instructions: "Invalid action specified."
      };
  }
  const r = i.nodes || [], f = i.connections || [], a = {
    nodeCount: r.length,
    connectionCount: f.length,
    nodes: r.map((h) => ({ id: h.id, text: h.text }))
  };
  return {
    toolName: y,
    message: o,
    title: i.title,
    data: i,
    jsonData: a,
    instructions: s,
    updating: t !== "create"
  };
}, W = {
  toolDefinition: O,
  execute: U,
  generatingMessage: "Creating mind map...",
  isEnabled: () => !0,
  systemPrompt: $
}, z = [
  {
    name: "AI Applications",
    args: {
      action: "create",
      title: "AI Applications",
      centralIdea: "Artificial Intelligence",
      ideas: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Robotics",
        "Expert Systems",
        "Speech Recognition"
      ]
    }
  },
  {
    name: "Web Development",
    args: {
      action: "create",
      title: "Modern Web Development",
      centralIdea: "Web Development",
      ideas: [
        "Frontend",
        "Backend",
        "Database",
        "DevOps",
        "Security"
      ]
    }
  },
  {
    name: "Project Planning",
    args: {
      action: "create",
      title: "New Project",
      centralIdea: "Project Goals",
      ideas: [
        "Research",
        "Design",
        "Implementation",
        "Testing",
        "Deployment",
        "Maintenance"
      ]
    }
  },
  {
    name: "Creative Writing",
    args: {
      action: "create",
      title: "Story Ideas",
      centralIdea: "Adventure Story",
      ideas: [
        "Main Character",
        "Setting",
        "Conflict",
        "Plot Twists",
        "Resolution"
      ]
    }
  }
];
export {
  $ as SYSTEM_PROMPT,
  O as TOOL_DEFINITION,
  y as TOOL_NAME,
  U as executeMindMap,
  W as pluginCore,
  z as samples
};
