/* empty css               */
import { TOOL_NAME as V, samples as j, pluginCore as J } from "./core.js";
import { SYSTEM_PROMPT as yt, TOOL_DEFINITION as _t, executeMindMap as wt } from "./core.js";
import { defineComponent as P, ref as X, watch as G, openBlock as o, createElementBlock as i, createElementVNode as c, toDisplayString as w, Fragment as A, renderList as O, computed as N } from "vue";
const W = { class: "size-full bg-slate-100 overflow-hidden" }, q = {
  key: 0,
  class: "size-full relative"
}, K = { class: "absolute top-3 left-3 right-3 z-10 flex justify-between items-center" }, Q = { class: "text-lg font-bold text-gray-800 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-200" }, Z = ["viewBox"], tt = ["x1", "y1", "x2", "y2"], et = ["transform", "onClick"], st = ["x", "y", "width", "height", "fill"], nt = {
  fill: "white",
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  "font-size": "10",
  "font-weight": "500"
}, ot = ["y"], it = {
  key: 1,
  class: "size-full flex items-center justify-center"
}, R = 800, I = 600, _ = 10, at = /* @__PURE__ */ P({
  __name: "View",
  props: {
    selectedResult: {},
    sendTextMessage: { type: Function },
    onUpdateResult: { type: Function }
  },
  setup(T) {
    const d = T, f = R / 2, M = I / 2, a = X(null);
    G(
      () => d.selectedResult,
      (e) => {
        (e == null ? void 0 : e.toolName) === V && e.data && (a.value = JSON.parse(JSON.stringify(e.data)));
      },
      { immediate: !0, deep: !0 }
    );
    function v(e) {
      var s;
      return (s = a.value) == null ? void 0 : s.nodes.find((t) => t.id === e);
    }
    function n(e) {
      if (!e) return [""];
      if (e.length <= _) return [e];
      const s = [];
      let t = e;
      for (; t.length > 0; ) {
        if (t.length <= _) {
          s.push(t);
          break;
        }
        if (s.push(t.slice(0, _)), t = t.slice(_), s.length >= 3) {
          t.length > 0 && (s[2] = s[2].slice(0, _ - 2) + "..");
          break;
        }
      }
      return s;
    }
    function u(e) {
      const s = n(e), t = Math.max(...s.map((m) => m.length)), l = Math.max(60, t * 8 + 16), r = Math.max(28, s.length * 14 + 12);
      return { w: l, h: r };
    }
    function D(e, s) {
      return -(n(e).length * 14) / 2 + 7 + s * 14;
    }
    function F(e) {
      d.sendTextMessage && d.sendTextMessage(`「${e.text}」を展開して、関連するアイデアを追加して`);
    }
    function H() {
      if (!a.value) return;
      const e = a.value, s = e.centerNodeId;
      if (!s) return;
      console.log("[Rebalance] Starting...", e.nodes.length, "nodes");
      const t = /* @__PURE__ */ new Map();
      for (const p of e.nodes)
        t.set(p.id, p);
      const l = t.get(s);
      if (!l) return;
      l.x = f, l.y = M;
      const r = /* @__PURE__ */ new Set([s]);
      function m(p, k) {
        const h = t.get(p);
        if (!(h != null && h.children)) return;
        const g = h.children.filter((x) => !r.has(x));
        if (g.length === 0) return;
        g.forEach((x) => r.add(x));
        const C = k === 1 ? 140 : 90 * Math.pow(0.9, k - 2);
        if (k === 1)
          g.forEach((x, E) => {
            const $ = 2 * Math.PI * E / g.length - Math.PI / 2, y = t.get(x);
            y && (y.x = b(h.x + C * Math.cos($), 60, R - 60), y.y = b(h.y + C * Math.sin($), 60, I - 60));
          });
        else {
          const x = h.x - f, E = h.y - M, $ = Math.atan2(E, x), y = Math.PI * 0.5, Y = g.length > 1 ? y / (g.length - 1) : 0, B = $ - y / 2;
          g.forEach((L, U) => {
            const z = B + Y * U, S = t.get(L);
            S && (S.x = b(h.x + C * Math.cos(z), 60, R - 60), S.y = b(h.y + C * Math.sin(z), 60, I - 60));
          });
        }
        g.forEach((x) => m(x, k + 1));
      }
      m(s, 1), a.value = { ...e, nodes: Array.from(t.values()) }, console.log("[Rebalance] Done"), d.onUpdateResult && d.selectedResult && d.onUpdateResult({
        ...d.selectedResult,
        data: a.value
      });
    }
    function b(e, s, t) {
      return Math.max(s, Math.min(t, e));
    }
    return (e, s) => (o(), i("div", W, [
      a.value ? (o(), i("div", q, [
        c("div", K, [
          c("h2", Q, w(a.value.title), 1),
          c("button", {
            onClick: H,
            class: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700"
          }, " 整理 ")
        ]),
        (o(), i("svg", {
          class: "size-full",
          viewBox: `0 0 ${R} ${I}`,
          preserveAspectRatio: "xMidYMid meet"
        }, [
          c("g", null, [
            (o(!0), i(A, null, O(a.value.connections, (t) => {
              var l, r, m, p;
              return o(), i("line", {
                key: `${t.from}-${t.to}`,
                x1: ((l = v(t.from)) == null ? void 0 : l.x) ?? 0,
                y1: ((r = v(t.from)) == null ? void 0 : r.y) ?? 0,
                x2: ((m = v(t.to)) == null ? void 0 : m.x) ?? 0,
                y2: ((p = v(t.to)) == null ? void 0 : p.y) ?? 0,
                stroke: "#9CA3AF",
                "stroke-width": "2"
              }, null, 8, tt);
            }), 128))
          ]),
          (o(!0), i(A, null, O(a.value.nodes, (t) => (o(), i("g", {
            key: t.id,
            transform: `translate(${t.x}, ${t.y})`,
            class: "cursor-pointer",
            onClick: (l) => F(t)
          }, [
            c("rect", {
              x: -u(t.text).w / 2,
              y: -u(t.text).h / 2,
              width: u(t.text).w,
              height: u(t.text).h,
              rx: "6",
              fill: t.color || "#6366F1"
            }, null, 8, st),
            c("text", nt, [
              (o(!0), i(A, null, O(n(t.text), (l, r) => (o(), i("tspan", {
                key: r,
                x: "0",
                y: D(t.text, r)
              }, w(l), 9, ot))), 128))
            ])
          ], 8, et))), 128))
        ], 8, Z)),
        s[0] || (s[0] = c("div", { class: "absolute bottom-3 left-0 right-0 text-center" }, [
          c("span", { class: "text-xs text-gray-500 bg-white/90 px-2 py-1 rounded shadow-sm" }, " ノードをクリックして展開 ")
        ], -1))
      ])) : (o(), i("div", it, [...s[1] || (s[1] = [
        c("p", { class: "text-gray-400" }, "データがありません", -1)
      ])]))
    ]));
  }
}), lt = { class: "p-3 bg-indigo-50 rounded-lg text-center" }, rt = { class: "text-indigo-700 font-medium text-sm truncate" }, ct = {
  key: 0,
  class: "text-xs text-gray-500 mt-1"
}, dt = {
  key: 1,
  class: "text-xs text-amber-600 mt-1"
}, ut = /* @__PURE__ */ P({
  __name: "Preview",
  props: {
    result: {}
  },
  setup(T) {
    const d = T, f = N(() => d.result.data), M = N(() => {
      var n;
      return ((n = f.value) == null ? void 0 : n.nodes) && f.value.nodes.length > 0;
    }), a = N(() => {
      var n;
      return ((n = f.value) == null ? void 0 : n.title) || "Mind Map";
    }), v = N(() => {
      var n, u;
      return ((u = (n = f.value) == null ? void 0 : n.nodes) == null ? void 0 : u.length) || 0;
    });
    return (n, u) => (o(), i("div", lt, [
      u[0] || (u[0] = c("div", { class: "text-2xl mb-1" }, "🧠", -1)),
      c("div", rt, w(a.value), 1),
      M.value ? (o(), i("div", ct, w(v.value) + " ideas ", 1)) : (o(), i("div", dt, w(d.result.message || "No data"), 1))
    ]));
  }
}), ht = {
  ...J,
  viewComponent: at,
  previewComponent: ut,
  samples: j
}, mt = { plugin: ht };
export {
  ut as Preview,
  yt as SYSTEM_PROMPT,
  _t as TOOL_DEFINITION,
  V as TOOL_NAME,
  at as View,
  mt as default,
  wt as executeMindMap,
  ht as plugin,
  J as pluginCore,
  j as samples
};
