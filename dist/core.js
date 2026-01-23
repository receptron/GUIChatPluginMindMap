const y = "createMindMap", j = {
  type: "function",
  name: y,
  description: "Create or update an interactive mind map to visualize ideas, concepts, and their relationships. Use this when brainstorming, organizing thoughts, or explaining complex topics visually.",
  parameters: {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["create", "add_node", "connect", "update", "rebalance"],
        description: "Action to perform: create (new mind map), add_node (add idea to existing node), connect (link two nodes), update (modify existing map), rebalance (recalculate layout for better display)"
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

When creating a mind map, start with a clear central idea and branch out with related concepts. Use add_node to expand specific branches and connect to show relationships between non-adjacent ideas.`, C = [
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
function D() {
  return `node_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function x(n) {
  return C[n % C.length];
}
const A = 800, E = 600, T = A / 2, R = E / 2, w = 60;
function P(n, e, t, o, i) {
  const s = 2 * Math.PI * n / e - Math.PI / 2;
  return {
    x: t + i * Math.cos(s),
    y: o + i * Math.sin(s)
  };
}
function S(n, e, t, o, i) {
  const s = n - T, r = e - R, f = Math.atan2(r, s), d = Math.PI * 0.67, m = f - d / 2, u = o > 1 ? d / (o - 1) : 0, a = m + u * t, c = 120 * Math.pow(0.85, i - 1);
  return {
    x: n + c * Math.cos(a),
    y: e + c * Math.sin(a)
  };
}
function _(n, e) {
  return {
    x: Math.max(w, Math.min(A - w, n)),
    y: Math.max(w, Math.min(E - w, e))
  };
}
function k(n, e, t, o = /* @__PURE__ */ new Set()) {
  var i;
  if (n === t) return 0;
  if (o.has(n)) return 999;
  o.add(n);
  for (const s of e)
    if ((i = s.children) != null && i.includes(n))
      return 1 + k(s.id, e, t, o);
  return 1;
}
function v(n, e, t) {
  const r = {
    id: D(),
    text: e,
    x: 400,
    y: 300,
    color: "#1F2937",
    // dark gray for center
    children: []
  }, f = [r], d = [];
  return t.forEach((m, u) => {
    var c;
    const a = P(u, t.length, 400, 300, 200), p = {
      id: D(),
      text: m,
      x: a.x,
      y: a.y,
      color: x(u),
      children: []
    };
    f.push(p), (c = r.children) == null || c.push(p.id), d.push({
      from: r.id,
      to: p.id
    });
  }), {
    title: n,
    nodes: f,
    connections: d,
    centerNodeId: r.id
  };
}
function L(n, e, t) {
  var l;
  const o = n.nodes || [], i = n.connections || [], s = o.find((g) => g.id === e);
  if (!s)
    return { ...n, nodes: o, connections: i };
  const r = ((l = s.children) == null ? void 0 : l.length) || 0, f = r, d = r + 1, m = k(e, o, n.centerNodeId || "") + 1, u = S(
    s.x,
    s.y,
    f,
    d,
    m
  ), a = _(u.x, u.y), p = {
    id: D(),
    text: t,
    x: a.x,
    y: a.y,
    color: x(o.length),
    children: []
  }, c = {
    ...s,
    children: [...s.children || [], p.id]
  };
  return {
    ...n,
    nodes: [...o.filter((g) => g.id !== e), c, p],
    connections: [
      ...i,
      { from: e, to: p.id }
    ]
  };
}
function q(n) {
  const e = n.nodes || [], t = n.centerNodeId;
  if (!t || e.length === 0 || !e.find((d) => d.id === t))
    return n;
  const i = new Map(e.map((d) => [d.id, { ...d }])), s = i.get(t);
  s.x = T, s.y = R;
  const r = (d, m, u) => {
    const a = i.get(d);
    if (!a || !a.children || u.has(d)) return;
    u.add(d);
    const p = a.children.filter((c) => !u.has(c));
    p.forEach((c, l) => {
      const g = i.get(c);
      if (g) {
        if (m === 1) {
          const M = P(
            l,
            p.length,
            a.x,
            a.y,
            160
          );
          g.x = M.x, g.y = M.y;
        } else {
          const b = S(
            a.x,
            a.y,
            l,
            p.length,
            m
          ), M = _(b.x, b.y);
          g.x = M.x, g.y = M.y;
        }
        r(c, m + 1, u);
      }
    });
  }, f = /* @__PURE__ */ new Set();
  return f.add(t), r(t, 1, f), {
    ...n,
    nodes: Array.from(i.values())
  };
}
function H(n, e, t, o) {
  const i = n.connections || [];
  return i.some(
    (r) => r.from === e && r.to === t
  ) ? { ...n, connections: i } : {
    ...n,
    connections: [
      ...i,
      { from: e, to: t, label: o }
    ]
  };
}
function I(n, e) {
  var o, i, s, r;
  const t = (o = n.currentResult) == null ? void 0 : o.data;
  if (console.log("[MindMap Debug] getExistingMapData:", {
    contextDataExists: !!t,
    contextDataNodes: (i = t == null ? void 0 : t.nodes) == null ? void 0 : i.length,
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
    const f = e, d = 400, m = 300, u = 200, a = f.nodes.map((c, l) => {
      const g = 2 * Math.PI * l / f.nodes.length - Math.PI / 2;
      return {
        id: c.id,
        text: c.text,
        x: l === 0 ? d : d + u * Math.cos(g),
        y: l === 0 ? m : m + u * Math.sin(g),
        color: l === 0 ? "#1F2937" : x(l),
        children: []
      };
    }), p = [];
    if (a.length > 1) {
      const c = a[0];
      for (let l = 1; l < a.length; l++)
        p.push({
          from: c.id,
          to: a[l].id
        }), c.children = c.children || [], c.children.push(a[l].id);
    }
    return console.log("[MindMap Debug] Reconstructed", a.length, "nodes from jsonData"), {
      title: "Mind Map",
      nodes: a,
      connections: p,
      centerNodeId: ((r = a[0]) == null ? void 0 : r.id) || ""
    };
  }
  return console.log("[MindMap Debug] No existing map found, returning null"), null;
}
const U = async (n, e) => {
  var m, u, a, p, c, l, g, b, M;
  const { action: t } = e;
  let o, i, s;
  switch (t) {
    case "create": {
      if (!e.title || !e.centralIdea)
        return {
          toolName: y,
          message: "Title and central idea are required for creating a mind map",
          instructions: "Ask the user for the title and central concept."
        };
      o = v(
        e.title,
        e.centralIdea,
        e.ideas || []
      ), i = `Created mind map "${e.title}" with ${o.nodes.length} nodes`, s = "Tell the user the mind map has been created. Ask if they want to add more ideas or create connections between concepts.";
      break;
    }
    case "add_node": {
      const h = I(n, e.existingMap), O = {
        hasContext: !!n,
        hasCurrentResult: !!(n != null && n.currentResult),
        currentResultToolName: (m = n == null ? void 0 : n.currentResult) == null ? void 0 : m.toolName,
        currentResultHasData: !!((u = n == null ? void 0 : n.currentResult) != null && u.data),
        currentResultDataNodes: (c = (p = (a = n == null ? void 0 : n.currentResult) == null ? void 0 : a.data) == null ? void 0 : p.nodes) == null ? void 0 : c.length,
        argsHasExistingMap: !!e.existingMap,
        argsExistingMapNodes: (g = (l = e.existingMap) == null ? void 0 : l.nodes) == null ? void 0 : g.length,
        existingMapResult: h ? `${(b = h.nodes) == null ? void 0 : b.length} nodes` : null,
        parentNodeId: e.parentNodeId,
        newIdea: e.newIdea
      };
      if (console.log("[MindMap Debug] add_node:", JSON.stringify(O, null, 2)), !h || !e.parentNodeId || !e.newIdea) {
        const N = [];
        return h || N.push("existingMap"), e.parentNodeId || N.push("parentNodeId"), e.newIdea || N.push("newIdea"), {
          toolName: y,
          message: `Missing: ${N.join(", ")}. Debug: context.currentResult.data=${!!((M = n == null ? void 0 : n.currentResult) != null && M.data)}, args.existingMap=${!!e.existingMap}`,
          instructions: "Ask the user which node to add the new idea to."
        };
      }
      o = L(
        h,
        e.parentNodeId,
        e.newIdea
      ), i = `Added "${e.newIdea}" to the mind map`, s = "Confirm the new idea was added. Ask if they want to continue expanding or explore other branches.";
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
      o = H(
        h,
        e.fromNodeId,
        e.toNodeId,
        e.connectionLabel
      ), i = "Connected nodes in the mind map", s = "Confirm the connection was created. Ask if they want to add more relationships.";
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
      o = h, i = "Mind map updated", s = "The mind map has been refreshed.";
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
      o = q(h), i = `Mind map layout rebalanced with ${o.nodes.length} nodes`, s = "The mind map layout has been optimized for better readability.";
      break;
    }
    default:
      return {
        toolName: y,
        message: `Unknown action: ${t}`,
        instructions: "Invalid action specified."
      };
  }
  const r = o.nodes || [], f = o.connections || [], d = {
    nodeCount: r.length,
    connectionCount: f.length,
    nodes: r.map((h) => ({ id: h.id, text: h.text }))
  };
  return {
    toolName: y,
    message: i,
    title: o.title,
    data: o,
    jsonData: d,
    instructions: s,
    updating: t !== "create"
  };
}, W = {
  toolDefinition: j,
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
  j as TOOL_DEFINITION,
  y as TOOL_NAME,
  U as executeMindMap,
  W as pluginCore,
  z as samples
};
