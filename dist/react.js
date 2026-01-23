/* empty css               */
import { TOOL_NAME as re, samples as te, pluginCore as ne } from "./core.js";
import { SYSTEM_PROMPT as ge, TOOL_DEFINITION as Re, executeMindMap as je } from "./core.js";
import ae, { useState as se, useEffect as oe } from "react";
var b = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ie() {
  if (M) return h;
  M = 1;
  var n = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function u(x, f, d) {
    var t = null;
    if (d !== void 0 && (t = "" + d), f.key !== void 0 && (t = "" + f.key), "key" in f) {
      d = {};
      for (var i in f)
        i !== "key" && (d[i] = f[i]);
    } else d = f;
    return f = d.ref, {
      $$typeof: n,
      type: x,
      key: t,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return h.Fragment = a, h.jsx = u, h.jsxs = u, h;
}
var E = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function le() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case U:
          return "Profiler";
        case V:
          return "StrictMode";
        case G:
          return "Suspense";
        case X:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function u(e) {
      try {
        a(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var s = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), a(e);
      }
    }
    function x(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function t(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function i(e, r) {
      function s() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function m() {
      var e = n(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function z(e, r, s, l, v, y) {
      var c = s.ref;
      return e = {
        $$typeof: N,
        type: e,
        key: r,
        props: s,
        _owner: l
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, s, l, v, y) {
      var c = r.children;
      if (c !== void 0)
        if (l)
          if (K(c)) {
            for (l = 0; l < c.length; l++)
              O(c[l]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(c);
      if (P.call(r, "key")) {
        c = n(e);
        var p = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        l = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", Y[c + l] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          c,
          p,
          c
        ), Y[c + l] = !0);
      }
      if (c = null, s !== void 0 && (u(s), c = "" + s), t(r) && (u(r.key), c = "" + r.key), "key" in r) {
        s = {};
        for (var k in r)
          k !== "key" && (s[k] = r[k]);
      } else s = r;
      return c && i(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), z(
        e,
        c,
        s,
        f(),
        v,
        y
      );
    }
    function O(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === g && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    var _ = ae, N = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), J = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), R = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var S, C = {}, $ = _.react_stack_bottom_frame.bind(
      _,
      d
    )(), I = j(x(d)), Y = {};
    E.Fragment = T, E.jsx = function(e, r, s) {
      var l = 1e4 > R.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        s,
        !1,
        l ? Error("react-stack-top-frame") : $,
        l ? j(x(e)) : I
      );
    }, E.jsxs = function(e, r, s) {
      var l = 1e4 > R.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        s,
        !0,
        l ? Error("react-stack-top-frame") : $,
        l ? j(x(e)) : I
      );
    };
  })()), E;
}
var D;
function ce() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? b.exports = ie() : b.exports = le()), b.exports;
}
var o = ce();
const ue = 800, fe = 600;
function F(n) {
  return Math.max(80, n.length * 8 + 40);
}
function de(n, a) {
  return n.length <= a ? n : n.slice(0, a - 3) + "...";
}
function me({ selectedResult: n, sendTextMessage: a }) {
  const [u, x] = se(null);
  oe(() => {
    (n == null ? void 0 : n.toolName) === re && n.data && x(n.data);
  }, [n]);
  const f = (t) => u == null ? void 0 : u.nodes.find((i) => i.id === t), d = (t) => {
    a && a(
      `I want to expand the "${t.text}" branch. Add related sub-ideas.`
    );
  };
  return u ? /* @__PURE__ */ o.jsx("div", { className: "size-full bg-gray-50 overflow-hidden", children: /* @__PURE__ */ o.jsxs("div", { className: "size-full relative", children: [
    /* @__PURE__ */ o.jsx("div", { className: "absolute top-4 left-4 z-10", children: /* @__PURE__ */ o.jsx("h2", { className: "text-xl font-bold text-gray-800 bg-white/80 px-3 py-1 rounded-lg shadow", children: u.title }) }),
    /* @__PURE__ */ o.jsxs(
      "svg",
      {
        className: "size-full",
        viewBox: `0 0 ${ue} ${fe}`,
        preserveAspectRatio: "xMidYMid meet",
        children: [
          /* @__PURE__ */ o.jsx("g", { className: "connections", children: u.connections.map((t) => {
            const i = f(t.from), m = f(t.to);
            return /* @__PURE__ */ o.jsxs("g", { children: [
              /* @__PURE__ */ o.jsx(
                "line",
                {
                  x1: (i == null ? void 0 : i.x) || 0,
                  y1: (i == null ? void 0 : i.y) || 0,
                  x2: (m == null ? void 0 : m.x) || 0,
                  y2: (m == null ? void 0 : m.y) || 0,
                  stroke: "#94A3B8",
                  strokeWidth: "2",
                  className: "transition-all duration-300"
                }
              ),
              t.label && /* @__PURE__ */ o.jsx(
                "text",
                {
                  x: (((i == null ? void 0 : i.x) || 0) + ((m == null ? void 0 : m.x) || 0)) / 2,
                  y: (((i == null ? void 0 : i.y) || 0) + ((m == null ? void 0 : m.y) || 0)) / 2 - 5,
                  textAnchor: "middle",
                  className: "text-xs fill-gray-500",
                  children: t.label
                }
              )
            ] }, `${t.from}-${t.to}`);
          }) }),
          /* @__PURE__ */ o.jsx("g", { className: "nodes", children: u.nodes.map((t) => /* @__PURE__ */ o.jsxs(
            "g",
            {
              transform: `translate(${t.x}, ${t.y})`,
              className: "cursor-pointer transition-transform duration-200 hover:scale-110",
              onClick: () => d(t),
              children: [
                /* @__PURE__ */ o.jsx(
                  "rect",
                  {
                    x: -F(t.text) / 2,
                    y: -20,
                    width: F(t.text),
                    height: 40,
                    rx: 20,
                    fill: t.color || "#4F46E5",
                    className: "drop-shadow-md"
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "text",
                  {
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    fill: "white",
                    className: "text-sm font-medium select-none pointer-events-none",
                    children: de(t.text, 20)
                  }
                )
              ]
            },
            t.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "absolute bottom-4 left-4 right-4 text-center", children: /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-500 bg-white/80 px-3 py-2 rounded-lg inline-block", children: "Click a node to expand it with new ideas" }) })
  ] }) }) : /* @__PURE__ */ o.jsx("div", { className: "size-full flex items-center justify-center", children: /* @__PURE__ */ o.jsx("p", { className: "text-gray-400", children: "No mind map data" }) });
}
function xe({ result: n }) {
  var d;
  const a = n.data, u = (a == null ? void 0 : a.nodes) && a.nodes.length > 0, x = (a == null ? void 0 : a.title) || "Mind Map", f = ((d = a == null ? void 0 : a.nodes) == null ? void 0 : d.length) || 0;
  return /* @__PURE__ */ o.jsxs("div", { className: "p-3 bg-indigo-50 rounded-lg text-center", children: [
    /* @__PURE__ */ o.jsx("div", { className: "text-2xl mb-1", children: "🧠" }),
    /* @__PURE__ */ o.jsx("div", { className: "text-indigo-700 font-medium text-sm truncate", children: x }),
    u ? /* @__PURE__ */ o.jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [
      f,
      " ideas"
    ] }) : /* @__PURE__ */ o.jsx("div", { className: "text-xs text-amber-600 mt-1", children: n.message || "No data" })
  ] });
}
const pe = {
  ...ne,
  ViewComponent: me,
  PreviewComponent: xe,
  samples: te
}, ve = { plugin: pe };
export {
  xe as Preview,
  ge as SYSTEM_PROMPT,
  Re as TOOL_DEFINITION,
  re as TOOL_NAME,
  me as View,
  ve as default,
  je as executeMindMap,
  pe as plugin,
  ne as pluginCore,
  te as samples
};
