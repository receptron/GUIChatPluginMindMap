/* empty css               */
import { TOOL_NAME as oe, samples as ie, pluginCore as ae } from "./core.js";
import { SYSTEM_PROMPT as He, TOOL_DEFINITION as Ge, executeMindMap as Le } from "./core.js";
import { defineComponent as j, ref as D, computed as P, watch as le, openBlock as h, createElementBlock as g, createElementVNode as c, toDisplayString as R, withDirectives as re, withKeys as de, vModelText as ce, Fragment as Y, renderList as B, withModifiers as ue, normalizeClass as he } from "vue";
const ge = { class: "size-full bg-slate-100 overflow-hidden" }, fe = {
  key: 0,
  class: "size-full relative"
}, xe = { class: "absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none" }, ve = { class: "text-lg font-bold text-gray-800 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-200 pointer-events-auto" }, pe = { class: "absolute bottom-3 left-3 right-3 z-10 flex gap-2 items-center" }, me = { class: "bg-white px-2 py-1.5 rounded-lg shadow-sm text-sm text-gray-600 border border-gray-200 truncate max-w-32" }, ye = ["disabled"], be = ["viewBox"], _e = ["x1", "y1", "x2", "y2"], Me = ["transform", "onMousedown"], we = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"], ke = {
  fill: "white",
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  "font-size": "10",
  "font-weight": "500"
}, Ie = ["y"], Re = {
  key: 1,
  class: "size-full flex items-center justify-center"
}, $ = 800, E = 600, C = 10, Ne = 80, De = 80, X = 60, Ce = /* @__PURE__ */ j({
  __name: "View",
  props: {
    selectedResult: {},
    sendTextMessage: { type: Function },
    onUpdateResult: { type: Function }
  },
  setup(O) {
    const a = O, v = $ / 2, w = E / 2, o = D(null), y = D(""), l = D(null), m = D(null), b = D(null), J = P(() => {
      if (!o.value) return "";
      const n = l.value || o.value.centerNodeId, t = o.value.nodes.find((e) => e.id === n);
      return (t == null ? void 0 : t.text) || "";
    });
    le(
      () => a.selectedResult,
      (n) => {
        b.value || (n == null ? void 0 : n.toolName) === oe && n.data && (o.value = JSON.parse(JSON.stringify(n.data)));
      },
      { immediate: !0, deep: !0 }
    );
    function T(n) {
      var t;
      return (t = o.value) == null ? void 0 : t.nodes.find((e) => e.id === n);
    }
    function z(n) {
      if (!n) return [""];
      if (n.length <= C) return [n];
      const t = [];
      let e = n;
      for (; e.length > 0; ) {
        if (e.length <= C) {
          t.push(e);
          break;
        }
        if (t.push(e.slice(0, C)), e = e.slice(C), t.length >= 3) {
          e.length > 0 && (t[2] = t[2].slice(0, C - 2) + "..");
          break;
        }
      }
      return t;
    }
    function A(n) {
      const t = z(n), e = Math.max(...t.map((f) => f.length)), s = Math.max(60, e * 8 + 16), i = Math.max(28, t.length * 14 + 12);
      return { w: s, h: i };
    }
    function K(n, t) {
      return -(z(n).length * 14) / 2 + 7 + t * 14;
    }
    function W(n) {
      const t = m.value;
      if (!t) return { x: 0, y: 0 };
      const e = t.getBoundingClientRect(), s = $ / e.width, i = E / e.height;
      return {
        x: (n.clientX - e.left) * s,
        y: (n.clientY - e.top) * i
      };
    }
    function q(n, t) {
      b.value = t.id, l.value = t.id;
    }
    function Q(n) {
      if (!b.value || !o.value) return;
      const t = W(n), e = o.value.nodes.find((s) => s.id === b.value);
      if (e) {
        const s = N(t.x, t.y);
        e.x = s.x, e.y = s.y, o.value = { ...o.value };
      }
    }
    function F() {
      b.value && a.onUpdateResult && a.selectedResult && o.value && a.onUpdateResult({
        ...a.selectedResult,
        data: o.value
      }), b.value = null;
    }
    function H() {
      var d;
      const n = y.value.trim();
      if (!n || !o.value) return;
      const t = o.value, e = l.value || t.centerNodeId;
      if (!e) return;
      const s = t.nodes.find((u) => u.id === e);
      if (!s) return;
      const i = ((d = s.children) == null ? void 0 : d.length) || 0, f = Z(s, i), r = `node_${Date.now()}`, p = {
        id: r,
        text: n,
        x: f.x,
        y: f.y,
        children: []
      };
      t.nodes.push(p), t.connections.push({ from: e, to: r }), s.children || (s.children = []), s.children.push(r), y.value = "", o.value = { ...t }, a.onUpdateResult && a.selectedResult && a.onUpdateResult({
        ...a.selectedResult,
        data: o.value
      });
    }
    function Z(n, t) {
      const e = n.x - v, s = n.y - w, i = Math.atan2(s, e), f = Math.abs(e) < 10 && Math.abs(s) < 10, r = t + 1;
      if (f) {
        const k = 2 * Math.PI * t / Math.max(r, 4) - Math.PI / 2, M = 140;
        return N(
          v + M * Math.cos(k),
          w + M * Math.sin(k)
        );
      }
      const p = Math.PI * 0.6, d = i - p / 2, u = r > 1 ? p / r : 0, _ = d + u * t + u / 2, x = 90;
      return N(
        n.x + x * Math.cos(_),
        n.y + x * Math.sin(_)
      );
    }
    function ee() {
      if (!o.value) return;
      const n = o.value, t = n.centerNodeId;
      if (!t) return;
      console.log("[Rebalance] Starting...", n.nodes.length, "nodes");
      const e = /* @__PURE__ */ new Map();
      for (const r of n.nodes)
        e.set(r.id, r);
      const s = e.get(t);
      if (!s) return;
      s.x = v, s.y = w;
      const i = /* @__PURE__ */ new Set([t]);
      function f(r, p) {
        const d = e.get(r);
        if (!(d != null && d.children)) return;
        const u = d.children.filter((x) => !i.has(x));
        if (u.length === 0) return;
        u.forEach((x) => i.add(x));
        const _ = p === 1 ? 140 : 90 * Math.pow(0.9, p - 2);
        if (p === 1)
          u.forEach((x, k) => {
            const M = 2 * Math.PI * k / u.length - Math.PI / 2, I = e.get(x);
            if (I) {
              const S = N(
                d.x + _ * Math.cos(M),
                d.y + _ * Math.sin(M)
              );
              I.x = S.x, I.y = S.y;
            }
          });
        else {
          const x = d.x - v, k = d.y - w, M = Math.atan2(k, x), I = Math.PI * 0.5, S = u.length > 1 ? I / (u.length - 1) : 0, te = M - I / 2;
          u.forEach((ne, se) => {
            const L = te + S * se, U = e.get(ne);
            if (U) {
              const V = N(
                d.x + _ * Math.cos(L),
                d.y + _ * Math.sin(L)
              );
              U.x = V.x, U.y = V.y;
            }
          });
        }
        u.forEach((x) => f(x, p + 1));
      }
      f(t, 1), o.value = { ...n, nodes: Array.from(e.values()) }, console.log("[Rebalance] Done"), a.onUpdateResult && a.selectedResult && a.onUpdateResult({
        ...a.selectedResult,
        data: o.value
      });
    }
    function G(n, t, e) {
      return Math.max(t, Math.min(e, n));
    }
    function N(n, t) {
      return {
        x: G(n, X, $ - X),
        y: G(t, Ne, E - De)
      };
    }
    return (n, t) => (h(), g("div", ge, [
      o.value ? (h(), g("div", fe, [
        c("div", xe, [
          c("h2", ve, R(o.value.title), 1),
          c("button", {
            onClick: ee,
            class: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700 pointer-events-auto"
          }, " 整理 ")
        ]),
        c("div", pe, [
          c("span", me, R(J.value), 1),
          t[1] || (t[1] = c("span", { class: "text-gray-400" }, "→", -1)),
          re(c("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (e) => y.value = e),
            type: "text",
            placeholder: "新しいノード...",
            class: "flex-1 px-3 py-1.5 rounded-lg border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
            onKeydown: de(H, ["enter"])
          }, null, 544), [
            [ce, y.value]
          ]),
          c("button", {
            onClick: H,
            disabled: !y.value.trim(),
            class: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700 disabled:border-gray-400"
          }, " 追加 ", 8, ye)
        ]),
        (h(), g("svg", {
          ref_key: "svgRef",
          ref: m,
          class: "size-full",
          viewBox: `0 0 ${$} ${E}`,
          preserveAspectRatio: "xMidYMid meet",
          onMousemove: Q,
          onMouseup: F,
          onMouseleave: F
        }, [
          c("g", null, [
            (h(!0), g(Y, null, B(o.value.connections, (e) => {
              var s, i, f, r;
              return h(), g("line", {
                key: `${e.from}-${e.to}`,
                x1: ((s = T(e.from)) == null ? void 0 : s.x) ?? 0,
                y1: ((i = T(e.from)) == null ? void 0 : i.y) ?? 0,
                x2: ((f = T(e.to)) == null ? void 0 : f.x) ?? 0,
                y2: ((r = T(e.to)) == null ? void 0 : r.y) ?? 0,
                stroke: "#9CA3AF",
                "stroke-width": "2"
              }, null, 8, _e);
            }), 128))
          ]),
          (h(!0), g(Y, null, B(o.value.nodes, (e) => (h(), g("g", {
            key: e.id,
            transform: `translate(${e.x}, ${e.y})`,
            class: he(b.value === e.id ? "cursor-grabbing" : "cursor-grab"),
            onMousedown: ue((s) => q(s, e), ["prevent"])
          }, [
            c("rect", {
              x: -A(e.text).w / 2,
              y: -A(e.text).h / 2,
              width: A(e.text).w,
              height: A(e.text).h,
              rx: "6",
              fill: e.color || "#6366F1",
              stroke: l.value === e.id ? "#FCD34D" : "none",
              "stroke-width": l.value === e.id ? 3 : 0
            }, null, 8, we),
            c("text", ke, [
              (h(!0), g(Y, null, B(z(e.text), (s, i) => (h(), g("tspan", {
                key: i,
                x: "0",
                y: K(e.text, i)
              }, R(s), 9, Ie))), 128))
            ])
          ], 42, Me))), 128))
        ], 40, be))
      ])) : (h(), g("div", Re, [...t[2] || (t[2] = [
        c("p", { class: "text-gray-400" }, "データがありません", -1)
      ])]))
    ]));
  }
}), Pe = { class: "p-3 bg-indigo-50 rounded-lg text-center" }, Te = { class: "text-indigo-700 font-medium text-sm truncate" }, Ae = {
  key: 0,
  class: "text-xs text-gray-500 mt-1"
}, Se = {
  key: 1,
  class: "text-xs text-amber-600 mt-1"
}, $e = /* @__PURE__ */ j({
  __name: "Preview",
  props: {
    result: {}
  },
  setup(O) {
    const a = O, v = P(() => a.result.data), w = P(() => {
      var l;
      return ((l = v.value) == null ? void 0 : l.nodes) && v.value.nodes.length > 0;
    }), o = P(() => {
      var l;
      return ((l = v.value) == null ? void 0 : l.title) || "Mind Map";
    }), y = P(() => {
      var l, m;
      return ((m = (l = v.value) == null ? void 0 : l.nodes) == null ? void 0 : m.length) || 0;
    });
    return (l, m) => (h(), g("div", Pe, [
      m[0] || (m[0] = c("div", { class: "text-2xl mb-1" }, "🧠", -1)),
      c("div", Te, R(o.value), 1),
      w.value ? (h(), g("div", Ae, R(y.value) + " ideas ", 1)) : (h(), g("div", Se, R(a.result.message || "No data"), 1))
    ]));
  }
}), Ee = {
  ...ae,
  viewComponent: Ce,
  previewComponent: $e,
  samples: ie
}, Ye = { plugin: Ee };
export {
  $e as Preview,
  He as SYSTEM_PROMPT,
  Ge as TOOL_DEFINITION,
  oe as TOOL_NAME,
  Ce as View,
  Ye as default,
  Le as executeMindMap,
  Ee as plugin,
  ae as pluginCore,
  ie as samples
};
