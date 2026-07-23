import { n as e, t } from "./style-CCV5GAnU.js";
import { a as n, i as r, n as i, o as a, r as o, t as s } from "./samples-Cx5kG2aH.js";
import { useEffect as c, useState as l } from "react";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var u = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), d = /* @__PURE__ */ t(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return t = e.displayName || null, t === null ? n(e.type) || "Memo" : t;
				case D:
					t = e._payload, e = e._init;
					try {
						return n(e(t));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var t = n(e);
				return t ? "<" + t + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = n(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
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
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, t, r, a, s, u) {
			var f = t.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(t, "key")) {
				f = n(e);
				var m = Object.keys(t).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(t) && (i(t.key), f = "" + t.key), "key" in t) for (var h in r = {}, t) h !== "key" && (r[h] = t[h]);
			else r = t;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = e("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		t.Fragment = v, t.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, t.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), f = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = u() : t.exports = d();
})))(), p = 800, m = 600;
function h(e) {
	return Math.max(80, e.length * 8 + 40);
}
function g(e, t) {
	return e.length <= t ? e : e.slice(0, t - 3) + "...";
}
function _({ selectedResult: e, sendTextMessage: t }) {
	let [n, r] = l(null);
	c(() => {
		e?.toolName === "createMindMap" && e.data && r(e.data);
	}, [e]);
	let i = (e) => n?.nodes.find((t) => t.id === e), a = (e) => {
		t && t(`I want to expand the "${e.text}" branch. Add related sub-ideas.`);
	};
	return n ? /* @__PURE__ */ (0, f.jsx)("div", {
		className: "size-full bg-gray-50 overflow-hidden",
		children: /* @__PURE__ */ (0, f.jsxs)("div", {
			className: "size-full relative",
			children: [
				/* @__PURE__ */ (0, f.jsx)("div", {
					className: "absolute top-4 left-4 z-10",
					children: /* @__PURE__ */ (0, f.jsx)("h2", {
						className: "text-xl font-bold text-gray-800 bg-white/80 px-3 py-1 rounded-lg shadow",
						children: n.title
					})
				}),
				/* @__PURE__ */ (0, f.jsxs)("svg", {
					className: "size-full",
					viewBox: `0 0 ${p} ${m}`,
					preserveAspectRatio: "xMidYMid meet",
					children: [/* @__PURE__ */ (0, f.jsx)("g", {
						className: "connections",
						children: n.connections.map((e) => {
							let t = i(e.from), n = i(e.to);
							return /* @__PURE__ */ (0, f.jsxs)("g", { children: [/* @__PURE__ */ (0, f.jsx)("line", {
								x1: t?.x || 0,
								y1: t?.y || 0,
								x2: n?.x || 0,
								y2: n?.y || 0,
								stroke: "#94A3B8",
								strokeWidth: "2",
								className: "transition-all duration-300"
							}), e.label && /* @__PURE__ */ (0, f.jsx)("text", {
								x: ((t?.x || 0) + (n?.x || 0)) / 2,
								y: ((t?.y || 0) + (n?.y || 0)) / 2 - 5,
								textAnchor: "middle",
								className: "text-xs fill-gray-500",
								children: e.label
							})] }, `${e.from}-${e.to}`);
						})
					}), /* @__PURE__ */ (0, f.jsx)("g", {
						className: "nodes",
						children: n.nodes.map((e) => /* @__PURE__ */ (0, f.jsxs)("g", {
							transform: `translate(${e.x}, ${e.y})`,
							className: "cursor-pointer transition-transform duration-200 hover:scale-110",
							onClick: () => a(e),
							children: [/* @__PURE__ */ (0, f.jsx)("rect", {
								x: -h(e.text) / 2,
								y: -20,
								width: h(e.text),
								height: 40,
								rx: 20,
								fill: e.color || "#4F46E5",
								className: "drop-shadow-md"
							}), /* @__PURE__ */ (0, f.jsx)("text", {
								textAnchor: "middle",
								dominantBaseline: "middle",
								fill: "white",
								className: "text-sm font-medium select-none pointer-events-none",
								children: g(e.text, 20)
							})]
						}, e.id))
					})]
				}),
				/* @__PURE__ */ (0, f.jsx)("div", {
					className: "absolute bottom-4 left-4 right-4 text-center",
					children: /* @__PURE__ */ (0, f.jsx)("p", {
						className: "text-sm text-gray-500 bg-white/80 px-3 py-2 rounded-lg inline-block",
						children: "Click a node to expand it with new ideas"
					})
				})
			]
		})
	}) : /* @__PURE__ */ (0, f.jsx)("div", {
		className: "size-full flex items-center justify-center",
		children: /* @__PURE__ */ (0, f.jsx)("p", {
			className: "text-gray-400",
			children: "No mind map data"
		})
	});
}
//#endregion
//#region src/react/Preview.tsx
function v({ result: e }) {
	let t = e.data, n = t?.nodes && t.nodes.length > 0, r = t?.title || "Mind Map", i = t?.nodes?.length || 0;
	return /* @__PURE__ */ (0, f.jsxs)("div", {
		className: "p-3 bg-indigo-50 rounded-lg text-center",
		children: [
			/* @__PURE__ */ (0, f.jsx)("div", {
				className: "text-2xl mb-1",
				children: "🧠"
			}),
			/* @__PURE__ */ (0, f.jsx)("div", {
				className: "text-indigo-700 font-medium text-sm truncate",
				children: r
			}),
			n ? /* @__PURE__ */ (0, f.jsxs)("div", {
				className: "text-xs text-gray-500 mt-1",
				children: [i, " ideas"]
			}) : /* @__PURE__ */ (0, f.jsx)("div", {
				className: "text-xs text-amber-600 mt-1",
				children: e.message || "No data"
			})
		]
	});
}
//#endregion
//#region src/react/index.ts
var y = {
	...o,
	ViewComponent: _,
	PreviewComponent: v,
	samples: s
}, b = { plugin: y };
//#endregion
export { v as Preview, r as SYSTEM_PROMPT, n as TOOL_DEFINITION, a as TOOL_NAME, _ as View, b as default, i as executeMindMap, y as plugin, o as pluginCore, s as samples };
