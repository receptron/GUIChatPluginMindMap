var Bh = Object.defineProperty;
var Rh = (r, e, t) => e in r ? Bh(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var _e = (r, e, t) => Rh(r, typeof e != "symbol" ? e + "" : e, t);
/* empty css               */
import { TOOL_NAME as Th, samples as Dh, pluginCore as qh } from "./core.js";
import { defineComponent as oc, ref as Ea, computed as Ba, watch as Uh, openBlock as Mr, createElementBlock as jr, createElementVNode as hr, toDisplayString as Zi, withDirectives as zh, withKeys as Hh, vModelText as Wh, Fragment as No, renderList as Lo, withModifiers as Gh, normalizeClass as Vh } from "vue";
function Ae(r) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ae(r);
}
var rn = Uint8Array, Br = Uint16Array, il = Int32Array, al = new rn([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), sl = new rn([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Vl = new rn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), lc = function(r, e) {
  for (var t = new Br(31), i = 0; i < 31; ++i)
    t[i] = e += 1 << r[i - 1];
  for (var a = new il(t[30]), i = 1; i < 30; ++i)
    for (var s = t[i]; s < t[i + 1]; ++s)
      a[s] = s - t[i] << 5 | i;
  return { b: t, r: a };
}, uc = lc(al, 2), Yh = uc.b, Yo = uc.r;
Yh[28] = 258, Yo[258] = 28;
var Jh = lc(sl, 0), Yl = Jh.r, Jo = new Br(32768);
for (var Fe = 0; Fe < 32768; ++Fe) {
  var ri = (Fe & 43690) >> 1 | (Fe & 21845) << 1;
  ri = (ri & 52428) >> 2 | (ri & 13107) << 2, ri = (ri & 61680) >> 4 | (ri & 3855) << 4, Jo[Fe] = ((ri & 65280) >> 8 | (ri & 255) << 8) >> 1;
}
var Ra = (function(r, e, t) {
  for (var i = r.length, a = 0, s = new Br(e); a < i; ++a)
    r[a] && ++s[r[a] - 1];
  var f = new Br(e);
  for (a = 1; a < e; ++a)
    f[a] = f[a - 1] + s[a - 1] << 1;
  var l;
  if (t) {
    l = new Br(1 << e);
    var c = 15 - e;
    for (a = 0; a < i; ++a)
      if (r[a])
        for (var d = a << 4 | r[a], m = e - r[a], N = f[r[a] - 1]++ << m, P = N | (1 << m) - 1; N <= P; ++N)
          l[Jo[N] >> c] = d;
  } else
    for (l = new Br(i), a = 0; a < i; ++a)
      r[a] && (l[a] = Jo[f[r[a] - 1]++] >> 15 - r[a]);
  return l;
}), Ii = new rn(288);
for (var Fe = 0; Fe < 144; ++Fe)
  Ii[Fe] = 8;
for (var Fe = 144; Fe < 256; ++Fe)
  Ii[Fe] = 9;
for (var Fe = 256; Fe < 280; ++Fe)
  Ii[Fe] = 7;
for (var Fe = 280; Fe < 288; ++Fe)
  Ii[Fe] = 8;
var Ds = new rn(32);
for (var Fe = 0; Fe < 32; ++Fe)
  Ds[Fe] = 5;
var $h = /* @__PURE__ */ Ra(Ii, 9, 0), Xh = /* @__PURE__ */ Ra(Ds, 5, 0), cc = function(r) {
  return (r + 7) / 8 | 0;
}, Kh = function(r, e, t) {
  return (t == null || t > r.length) && (t = r.length), new rn(r.subarray(e, t));
}, Rn = function(r, e, t) {
  t <<= e & 7;
  var i = e / 8 | 0;
  r[i] |= t, r[i + 1] |= t >> 8;
}, Oa = function(r, e, t) {
  t <<= e & 7;
  var i = e / 8 | 0;
  r[i] |= t, r[i + 1] |= t >> 8, r[i + 2] |= t >> 16;
}, So = function(r, e) {
  for (var t = [], i = 0; i < r.length; ++i)
    r[i] && t.push({ s: i, f: r[i] });
  var a = t.length, s = t.slice();
  if (!a)
    return { t: fc, l: 0 };
  if (a == 1) {
    var f = new rn(t[0].s + 1);
    return f[t[0].s] = 1, { t: f, l: 1 };
  }
  t.sort(function(ot, vt) {
    return ot.f - vt.f;
  }), t.push({ s: -1, f: 25001 });
  var l = t[0], c = t[1], d = 0, m = 1, N = 2;
  for (t[0] = { s: -1, f: l.f + c.f, l, r: c }; m != a - 1; )
    l = t[t[d].f < t[N].f ? d++ : N++], c = t[d != m && t[d].f < t[N].f ? d++ : N++], t[m++] = { s: -1, f: l.f + c.f, l, r: c };
  for (var P = s[0].s, i = 1; i < a; ++i)
    s[i].s > P && (P = s[i].s);
  var p = new Br(P + 1), j = $o(t[m - 1], p, 0);
  if (j > e) {
    var i = 0, E = 0, R = j - e, k = 1 << R;
    for (s.sort(function(vt, ht) {
      return p[ht.s] - p[vt.s] || vt.f - ht.f;
    }); i < a; ++i) {
      var V = s[i].s;
      if (p[V] > e)
        E += k - (1 << j - p[V]), p[V] = e;
      else
        break;
    }
    for (E >>= R; E > 0; ) {
      var Y = s[i].s;
      p[Y] < e ? E -= 1 << e - p[Y]++ - 1 : ++i;
    }
    for (; i >= 0 && E; --i) {
      var U = s[i].s;
      p[U] == e && (--p[U], ++E);
    }
    j = e;
  }
  return { t: new rn(p), l: j };
}, $o = function(r, e, t) {
  return r.s == -1 ? Math.max($o(r.l, e, t + 1), $o(r.r, e, t + 1)) : e[r.s] = t;
}, Jl = function(r) {
  for (var e = r.length; e && !r[--e]; )
    ;
  for (var t = new Br(++e), i = 0, a = r[0], s = 1, f = function(c) {
    t[i++] = c;
  }, l = 1; l <= e; ++l)
    if (r[l] == a && l != e)
      ++s;
    else {
      if (!a && s > 2) {
        for (; s > 138; s -= 138)
          f(32754);
        s > 2 && (f(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
      } else if (s > 3) {
        for (f(a), --s; s > 6; s -= 6)
          f(8304);
        s > 2 && (f(s - 3 << 5 | 8208), s = 0);
      }
      for (; s--; )
        f(a);
      s = 1, a = r[l];
    }
  return { c: t.subarray(0, i), n: e };
}, Ma = function(r, e) {
  for (var t = 0, i = 0; i < e.length; ++i)
    t += r[i] * e[i];
  return t;
}, hc = function(r, e, t) {
  var i = t.length, a = cc(e + 2);
  r[a] = i & 255, r[a + 1] = i >> 8, r[a + 2] = r[a] ^ 255, r[a + 3] = r[a + 1] ^ 255;
  for (var s = 0; s < i; ++s)
    r[a + s + 4] = t[s];
  return (a + 4 + i) * 8;
}, $l = function(r, e, t, i, a, s, f, l, c, d, m) {
  Rn(e, m++, t), ++a[256];
  for (var N = So(a, 15), P = N.t, p = N.l, j = So(s, 15), E = j.t, R = j.l, k = Jl(P), V = k.c, Y = k.n, U = Jl(E), ot = U.c, vt = U.n, ht = new Br(19), X = 0; X < V.length; ++X)
    ++ht[V[X] & 31];
  for (var X = 0; X < ot.length; ++X)
    ++ht[ot[X] & 31];
  for (var D = So(ht, 7), H = D.t, w = D.l, A = 19; A > 4 && !H[Vl[A - 1]]; --A)
    ;
  var B = d + 5 << 3, q = Ma(a, Ii) + Ma(s, Ds) + f, et = Ma(a, P) + Ma(s, E) + f + 14 + 3 * A + Ma(ht, H) + 2 * ht[16] + 3 * ht[17] + 7 * ht[18];
  if (c >= 0 && B <= q && B <= et)
    return hc(e, m, r.subarray(c, c + d));
  var it, at, K, st;
  if (Rn(e, m, 1 + (et < q)), m += 2, et < q) {
    it = Ra(P, p, 0), at = P, K = Ra(E, R, 0), st = E;
    var xt = Ra(H, w, 0);
    Rn(e, m, Y - 257), Rn(e, m + 5, vt - 1), Rn(e, m + 10, A - 4), m += 14;
    for (var X = 0; X < A; ++X)
      Rn(e, m + 3 * X, H[Vl[X]]);
    m += 3 * A;
    for (var ft = [V, ot], x = 0; x < 2; ++x)
      for (var M = ft[x], X = 0; X < M.length; ++X) {
        var T = M[X] & 31;
        Rn(e, m, xt[T]), m += H[T], T > 15 && (Rn(e, m, M[X] >> 5 & 127), m += M[X] >> 12);
      }
  } else
    it = $h, at = Ii, K = Xh, st = Ds;
  for (var X = 0; X < l; ++X) {
    var W = i[X];
    if (W > 255) {
      var T = W >> 18 & 31;
      Oa(e, m, it[T + 257]), m += at[T + 257], T > 7 && (Rn(e, m, W >> 23 & 31), m += al[T]);
      var $ = W & 31;
      Oa(e, m, K[$]), m += st[$], $ > 3 && (Oa(e, m, W >> 5 & 8191), m += sl[$]);
    } else
      Oa(e, m, it[W]), m += at[W];
  }
  return Oa(e, m, it[256]), m + at[256];
}, Zh = /* @__PURE__ */ new il([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), fc = /* @__PURE__ */ new rn(0), Qh = function(r, e, t, i, a, s) {
  var f = s.z || r.length, l = new rn(i + f + 5 * (1 + Math.ceil(f / 7e3)) + a), c = l.subarray(i, l.length - a), d = s.l, m = (s.r || 0) & 7;
  if (e) {
    m && (c[0] = s.r >> 3);
    for (var N = Zh[e - 1], P = N >> 13, p = N & 8191, j = (1 << t) - 1, E = s.p || new Br(32768), R = s.h || new Br(j + 1), k = Math.ceil(t / 3), V = 2 * k, Y = function(Dt) {
      return (r[Dt] ^ r[Dt + 1] << k ^ r[Dt + 2] << V) & j;
    }, U = new il(25e3), ot = new Br(288), vt = new Br(32), ht = 0, X = 0, D = s.i || 0, H = 0, w = s.w || 0, A = 0; D + 2 < f; ++D) {
      var B = Y(D), q = D & 32767, et = R[B];
      if (E[q] = et, R[B] = q, w <= D) {
        var it = f - D;
        if ((ht > 7e3 || H > 24576) && (it > 423 || !d)) {
          m = $l(r, c, 0, U, ot, vt, X, H, A, D - A, m), H = ht = X = 0, A = D;
          for (var at = 0; at < 286; ++at)
            ot[at] = 0;
          for (var at = 0; at < 30; ++at)
            vt[at] = 0;
        }
        var K = 2, st = 0, xt = p, ft = q - et & 32767;
        if (it > 2 && B == Y(D - ft))
          for (var x = Math.min(P, it) - 1, M = Math.min(32767, D), T = Math.min(258, it); ft <= M && --xt && q != et; ) {
            if (r[D + K] == r[D + K - ft]) {
              for (var W = 0; W < T && r[D + W] == r[D + W - ft]; ++W)
                ;
              if (W > K) {
                if (K = W, st = ft, W > x)
                  break;
                for (var $ = Math.min(ft, W - 2), tt = 0, at = 0; at < $; ++at) {
                  var lt = D - ft + at & 32767, ut = E[lt], gt = lt - ut & 32767;
                  gt > tt && (tt = gt, et = lt);
                }
              }
            }
            q = et, et = E[q], ft += q - et & 32767;
          }
        if (st) {
          U[H++] = 268435456 | Yo[K] << 18 | Yl[st];
          var At = Yo[K] & 31, kt = Yl[st] & 31;
          X += al[At] + sl[kt], ++ot[257 + At], ++vt[kt], w = D + K, ++ht;
        } else
          U[H++] = r[D], ++ot[r[D]];
      }
    }
    for (D = Math.max(D, w); D < f; ++D)
      U[H++] = r[D], ++ot[r[D]];
    m = $l(r, c, d, U, ot, vt, X, H, A, D - A, m), d || (s.r = m & 7 | c[m / 8 | 0] << 3, m -= 7, s.h = R, s.p = E, s.i = D, s.w = w);
  } else {
    for (var D = s.w || 0; D < f + d; D += 65535) {
      var St = D + 65535;
      St >= f && (c[m / 8 | 0] = d, St = f), m = hc(c, m + 1, r.subarray(D, St));
    }
    s.i = f;
  }
  return Kh(l, 0, i + cc(m) + a);
}, dc = function() {
  var r = 1, e = 0;
  return {
    p: function(t) {
      for (var i = r, a = e, s = t.length | 0, f = 0; f != s; ) {
        for (var l = Math.min(f + 2655, s); f < l; ++f)
          a += i += t[f];
        i = (i & 65535) + 15 * (i >> 16), a = (a & 65535) + 15 * (a >> 16);
      }
      r = i, e = a;
    },
    d: function() {
      return r %= 65521, e %= 65521, (r & 255) << 24 | (r & 65280) << 8 | (e & 255) << 8 | e >> 8;
    }
  };
}, tf = function(r, e, t, i, a) {
  if (!a && (a = { l: 1 }, e.dictionary)) {
    var s = e.dictionary.subarray(-32768), f = new rn(s.length + r.length);
    f.set(s), f.set(r, s.length), r = f, a.w = s.length;
  }
  return Qh(r, e.level == null ? 6 : e.level, e.mem == null ? a.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 20 : 12 + e.mem, t, i, a);
}, pc = function(r, e, t) {
  for (; t; ++e)
    r[e] = t, t >>>= 8;
}, ef = function(r, e) {
  var t = e.level, i = t == 0 ? 0 : t < 6 ? 1 : t == 9 ? 3 : 2;
  if (r[0] = 120, r[1] = i << 6 | (e.dictionary && 32), r[1] |= 31 - (r[0] << 8 | r[1]) % 31, e.dictionary) {
    var a = dc();
    a.p(e.dictionary), pc(r, 2, a.d());
  }
};
function Xo(r, e) {
  e || (e = {});
  var t = dc();
  t.p(r);
  var i = tf(r, e, e.dictionary ? 6 : 2, 4);
  return ef(i, e), pc(i, i.length - 4, t.d()), i;
}
var rf = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), nf = 0;
try {
  rf.decode(fc, { stream: !0 }), nf = 1;
} catch {
}
function af(r) {
  if (Array.isArray(r)) return r;
}
function sf(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var i, a, s, f, l = [], c = !0, d = !1;
    try {
      if (s = (t = t.call(r)).next, e !== 0) for (; !(c = (i = s.call(t)).done) && (l.push(i.value), l.length !== e); c = !0) ;
    } catch (m) {
      d = !0, a = m;
    } finally {
      try {
        if (!c && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (d) throw a;
      }
    }
    return l;
  }
}
function Xl(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function of(r, e) {
  if (r) {
    if (typeof r == "string") return Xl(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Xl(r, e) : void 0;
  }
}
function lf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kl(r, e) {
  return af(r) || sf(r, e) || of(r, e) || lf();
}
function Zl(r, e = "utf8") {
  return new TextDecoder(e).decode(r);
}
const uf = new TextEncoder();
function cf(r) {
  return uf.encode(r);
}
const hf = 1024 * 8, ff = (() => {
  const r = new Uint8Array(4), e = new Uint32Array(r.buffer);
  return !((e[0] = 1) & r[0]);
})(), ko = {
  int8: globalThis.Int8Array,
  uint8: globalThis.Uint8Array,
  int16: globalThis.Int16Array,
  uint16: globalThis.Uint16Array,
  int32: globalThis.Int32Array,
  uint32: globalThis.Uint32Array,
  uint64: globalThis.BigUint64Array,
  int64: globalThis.BigInt64Array,
  float32: globalThis.Float32Array,
  float64: globalThis.Float64Array
};
class ol {
  /**
   * Create a new IOBuffer.
   * @param data - The data to construct the IOBuffer with.
   * If data is a number, it will be the new buffer's length<br>
   * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
   * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
   * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
   * @param options - An object for the options.
   * @returns A new IOBuffer instance.
   */
  constructor(e = hf, t = {}) {
    /**
     * Reference to the internal ArrayBuffer object.
     */
    _e(this, "buffer");
    /**
     * Byte length of the internal ArrayBuffer.
     */
    _e(this, "byteLength");
    /**
     * Byte offset of the internal ArrayBuffer.
     */
    _e(this, "byteOffset");
    /**
     * Byte length of the internal ArrayBuffer.
     */
    _e(this, "length");
    /**
     * The current offset of the buffer's pointer.
     */
    _e(this, "offset");
    _e(this, "lastWrittenByte");
    _e(this, "littleEndian");
    _e(this, "_data");
    _e(this, "_mark");
    _e(this, "_marks");
    let i = !1;
    typeof e == "number" ? e = new ArrayBuffer(e) : (i = !0, this.lastWrittenByte = e.byteLength);
    const a = t.offset ? t.offset >>> 0 : 0, s = e.byteLength - a;
    let f = a;
    (ArrayBuffer.isView(e) || e instanceof ol) && (e.byteLength !== e.buffer.byteLength && (f = e.byteOffset + a), e = e.buffer), i ? this.lastWrittenByte = s : this.lastWrittenByte = 0, this.buffer = e, this.length = s, this.byteLength = s, this.byteOffset = f, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, f, s), this._mark = 0, this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more
   * bytes after the offset.
   * @param byteLength - The needed memory in bytes.
   * @returns `true` if there is sufficient space and `false` otherwise.
   */
  available(e = 1) {
    return this.offset + e <= this.length;
  }
  /**
   * Check if little-endian mode is used for reading and writing multi-byte
   * values.
   * @returns `true` if little-endian mode is used, `false` otherwise.
   */
  isLittleEndian() {
    return this.littleEndian;
  }
  /**
   * Set little-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setLittleEndian() {
    return this.littleEndian = !0, this;
  }
  /**
   * Check if big-endian mode is used for reading and writing multi-byte values.
   * @returns `true` if big-endian mode is used, `false` otherwise.
   */
  isBigEndian() {
    return !this.littleEndian;
  }
  /**
   * Switches to big-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setBigEndian() {
    return this.littleEndian = !1, this;
  }
  /**
   * Move the pointer n bytes forward.
   * @param n - Number of bytes to skip.
   * @returns This.
   */
  skip(e = 1) {
    return this.offset += e, this;
  }
  /**
   * Move the pointer n bytes backward.
   * @param n - Number of bytes to move back.
   * @returns This.
   */
  back(e = 1) {
    return this.offset -= e, this;
  }
  /**
   * Move the pointer to the given offset.
   * @param offset - The offset to move to.
   * @returns This.
   */
  seek(e) {
    return this.offset = e, this;
  }
  /**
   * Store the current pointer offset.
   * @see {@link IOBuffer#reset}
   * @returns This.
   */
  mark() {
    return this._mark = this.offset, this;
  }
  /**
   * Move the pointer back to the last pointer offset set by mark.
   * @see {@link IOBuffer#mark}
   * @returns This.
   */
  reset() {
    return this.offset = this._mark, this;
  }
  /**
   * Push the current pointer offset to the mark stack.
   * @see {@link IOBuffer#popMark}
   * @returns This.
   */
  pushMark() {
    return this._marks.push(this.offset), this;
  }
  /**
   * Pop the last pointer offset from the mark stack, and set the current
   * pointer offset to the popped value.
   * @see {@link IOBuffer#pushMark}
   * @returns This.
   */
  popMark() {
    const e = this._marks.pop();
    if (e === void 0)
      throw new Error("Mark stack empty");
    return this.seek(e), this;
  }
  /**
   * Move the pointer offset back to 0.
   * @returns This.
   */
  rewind() {
    return this.offset = 0, this;
  }
  /**
   * Make sure the buffer has sufficient memory to write a given byteLength at
   * the current pointer offset.
   * If the buffer's memory is insufficient, this method will create a new
   * buffer (a copy) with a length that is twice (byteLength + current offset).
   * @param byteLength - The needed memory in bytes.
   * @returns This.
   */
  ensureAvailable(e = 1) {
    if (!this.available(e)) {
      const i = (this.offset + e) * 2, a = new Uint8Array(i);
      a.set(new Uint8Array(this.buffer)), this.buffer = a.buffer, this.length = i, this.byteLength = i, this._data = new DataView(this.buffer);
    }
    return this;
  }
  /**
   * Read a byte and return false if the byte's value is 0, or true otherwise.
   * Moves pointer forward by one byte.
   * @returns The read boolean.
   */
  readBoolean() {
    return this.readUint8() !== 0;
  }
  /**
   * Read a signed 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  /**
   * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  /**
   * Alias for {@link IOBuffer#readUint8}.
   * @returns The read byte.
   */
  readByte() {
    return this.readUint8();
  }
  /**
   * Read `n` bytes and move pointer forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The read bytes.
   */
  readBytes(e = 1) {
    return this.readArray(e, "uint8");
  }
  /**
   * Creates an array of corresponding to the type `type` and size `size`.
   * For example type `uint8` will create a `Uint8Array`.
   * @param size - size of the resulting array
   * @param type - number type of elements to read
   * @returns The read array.
   */
  readArray(e, t) {
    const i = ko[t].BYTES_PER_ELEMENT * e, a = this.byteOffset + this.offset, s = this.buffer.slice(a, a + i);
    if (this.littleEndian === ff && t !== "uint8" && t !== "int8") {
      const l = new Uint8Array(this.buffer.slice(a, a + i));
      l.reverse();
      const c = new ko[t](l.buffer);
      return this.offset += i, c.reverse(), c;
    }
    const f = new ko[t](s);
    return this.offset += i, f;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readInt16() {
    const e = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readUint16() {
    const e = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readInt32() {
    const e = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readUint32() {
    const e = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  /**
   * Read a 32-bit floating number and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readFloat32() {
    const e = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  /**
   * Read a 64-bit floating number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readFloat64() {
    const e = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  /**
   * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigInt64() {
    const e = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  /**
   * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigUint64() {
    const e = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  /**
   * Read a 1-byte ASCII character and move pointer forward by 1 byte.
   * @returns The read character.
   */
  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  /**
   * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
   * @param n - Number of characters to read.
   * @returns The read characters.
   */
  readChars(e = 1) {
    let t = "";
    for (let i = 0; i < e; i++)
      t += this.readChar();
    return t;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The decoded string.
   */
  readUtf8(e = 1) {
    return Zl(this.readBytes(e));
  }
  /**
   * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
   * forward by `n` bytes.
   * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
   * @param n - Number of bytes to read.
   * @param encoding - The encoding to use. Default is 'utf8'.
   * @returns The decoded string.
   */
  decodeText(e = 1, t = "utf8") {
    return Zl(this.readBytes(e), t);
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
   * forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeBoolean(e) {
    return this.writeUint8(e ? 255 : 0), this;
  }
  /**
   * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt8(e) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, e), this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
   * byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint8(e) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, e), this._updateLastWrittenByte(), this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}.
   * @param value - The value to write.
   * @returns This.
   */
  writeByte(e) {
    return this.writeUint8(e);
  }
  /**
   * Write all elements of `bytes` as uint8 values and move pointer forward by
   * `bytes.length` bytes.
   * @param bytes - The array of bytes to write.
   * @returns This.
   */
  writeBytes(e) {
    this.ensureAvailable(e.length);
    for (let t = 0; t < e.length; t++)
      this._data.setUint8(this.offset++, e[t]);
    return this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit signed integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt16(e) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, e, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint16(e) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, e, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit signed integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt32(e) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint32(e) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit floating number and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat32(e) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit floating number and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat64(e) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit signed bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigInt64(e) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigUint64(e) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write the charCode of `str`'s first character as an 8-bit unsigned integer
   * and move pointer forward by 1 byte.
   * @param str - The character to write.
   * @returns This.
   */
  writeChar(e) {
    return this.writeUint8(e.charCodeAt(0));
  }
  /**
   * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
   * and move pointer forward by `str.length` bytes.
   * @param str - The characters to write.
   * @returns This.
   */
  writeChars(e) {
    for (let t = 0; t < e.length; t++)
      this.writeUint8(e.charCodeAt(t));
    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   * @param str - The string to write.
   * @returns This.
   */
  writeUtf8(e) {
    return this.writeBytes(cf(e));
  }
  /**
   * Export a Uint8Array view of the internal buffer.
   * The view starts at the byte offset and its length
   * is calculated to stop at the last written byte or the original length.
   * @returns A new Uint8Array view.
   */
  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  /**
   *  Get the total number of bytes written so far, regardless of the current offset.
   * @returns - Total number of bytes.
   */
  getWrittenByteLength() {
    return this.lastWrittenByte - this.byteOffset;
  }
  /**
   * Update the last written byte offset
   * @private
   */
  _updateLastWrittenByte() {
    this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
  }
}
function na(r) {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}
const df = 3, pf = 258, gc = 29, gf = 256, mf = gf + 1 + gc, mc = 30, vf = 512, bf = new Array((mf + 2) * 2);
na(bf);
const wf = new Array(mc * 2);
na(wf);
const yf = new Array(vf);
na(yf);
const xf = new Array(pf - df + 1);
na(xf);
const _f = new Array(gc);
na(_f);
const Af = new Array(mc);
na(Af);
const Nf = (r, e, t, i) => {
  let a = r & 65535 | 0, s = r >>> 16 & 65535 | 0, f = 0;
  for (; t !== 0; ) {
    f = t > 2e3 ? 2e3 : t, t -= f;
    do
      a = a + e[i++] | 0, s = s + a | 0;
    while (--f);
    a %= 65521, s %= 65521;
  }
  return a | s << 16 | 0;
};
var Ko = Nf;
const Lf = () => {
  let r, e = [];
  for (var t = 0; t < 256; t++) {
    r = t;
    for (var i = 0; i < 8; i++)
      r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[t] = r;
  }
  return e;
}, Sf = new Uint32Array(Lf()), kf = (r, e, t, i) => {
  const a = Sf, s = i + t;
  r ^= -1;
  for (let f = i; f < s; f++)
    r = r >>> 8 ^ a[(r ^ e[f]) & 255];
  return r ^ -1;
};
var gn = kf, Zo = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, vc = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const Pf = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
var If = function(r) {
  const e = Array.prototype.slice.call(arguments, 1);
  for (; e.length; ) {
    const t = e.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const i in t)
        Pf(t, i) && (r[i] = t[i]);
    }
  }
  return r;
}, Cf = (r) => {
  let e = 0;
  for (let i = 0, a = r.length; i < a; i++)
    e += r[i].length;
  const t = new Uint8Array(e);
  for (let i = 0, a = 0, s = r.length; i < s; i++) {
    let f = r[i];
    t.set(f, a), a += f.length;
  }
  return t;
}, bc = {
  assign: If,
  flattenChunks: Cf
};
let wc = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  wc = !1;
}
const Da = new Uint8Array(256);
for (let r = 0; r < 256; r++)
  Da[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
Da[254] = Da[254] = 1;
var Ff = (r) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(r);
  let e, t, i, a, s, f = r.length, l = 0;
  for (a = 0; a < f; a++)
    t = r.charCodeAt(a), (t & 64512) === 55296 && a + 1 < f && (i = r.charCodeAt(a + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), a++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (e = new Uint8Array(l), s = 0, a = 0; s < l; a++)
    t = r.charCodeAt(a), (t & 64512) === 55296 && a + 1 < f && (i = r.charCodeAt(a + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), a++)), t < 128 ? e[s++] = t : t < 2048 ? (e[s++] = 192 | t >>> 6, e[s++] = 128 | t & 63) : t < 65536 ? (e[s++] = 224 | t >>> 12, e[s++] = 128 | t >>> 6 & 63, e[s++] = 128 | t & 63) : (e[s++] = 240 | t >>> 18, e[s++] = 128 | t >>> 12 & 63, e[s++] = 128 | t >>> 6 & 63, e[s++] = 128 | t & 63);
  return e;
};
const Ef = (r, e) => {
  if (e < 65534 && r.subarray && wc)
    return String.fromCharCode.apply(null, r.length === e ? r : r.subarray(0, e));
  let t = "";
  for (let i = 0; i < e; i++)
    t += String.fromCharCode(r[i]);
  return t;
};
var Of = (r, e) => {
  const t = e || r.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(r.subarray(0, e));
  let i, a;
  const s = new Array(t * 2);
  for (a = 0, i = 0; i < t; ) {
    let f = r[i++];
    if (f < 128) {
      s[a++] = f;
      continue;
    }
    let l = Da[f];
    if (l > 4) {
      s[a++] = 65533, i += l - 1;
      continue;
    }
    for (f &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && i < t; )
      f = f << 6 | r[i++] & 63, l--;
    if (l > 1) {
      s[a++] = 65533;
      continue;
    }
    f < 65536 ? s[a++] = f : (f -= 65536, s[a++] = 55296 | f >> 10 & 1023, s[a++] = 56320 | f & 1023);
  }
  return Ef(s, a);
}, Mf = (r, e) => {
  e = e || r.length, e > r.length && (e = r.length);
  let t = e - 1;
  for (; t >= 0 && (r[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? e : t + Da[r[t]] > e ? t : e;
}, Qo = {
  string2buf: Ff,
  buf2string: Of,
  utf8border: Mf
};
function jf() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Bf = jf;
const Ns = 16209, Rf = 16191;
var Tf = function(e, t) {
  let i, a, s, f, l, c, d, m, N, P, p, j, E, R, k, V, Y, U, ot, vt, ht, X, D, H;
  const w = e.state;
  i = e.next_in, D = e.input, a = i + (e.avail_in - 5), s = e.next_out, H = e.output, f = s - (t - e.avail_out), l = s + (e.avail_out - 257), c = w.dmax, d = w.wsize, m = w.whave, N = w.wnext, P = w.window, p = w.hold, j = w.bits, E = w.lencode, R = w.distcode, k = (1 << w.lenbits) - 1, V = (1 << w.distbits) - 1;
  t:
    do {
      j < 15 && (p += D[i++] << j, j += 8, p += D[i++] << j, j += 8), Y = E[p & k];
      e:
        for (; ; ) {
          if (U = Y >>> 24, p >>>= U, j -= U, U = Y >>> 16 & 255, U === 0)
            H[s++] = Y & 65535;
          else if (U & 16) {
            ot = Y & 65535, U &= 15, U && (j < U && (p += D[i++] << j, j += 8), ot += p & (1 << U) - 1, p >>>= U, j -= U), j < 15 && (p += D[i++] << j, j += 8, p += D[i++] << j, j += 8), Y = R[p & V];
            r:
              for (; ; ) {
                if (U = Y >>> 24, p >>>= U, j -= U, U = Y >>> 16 & 255, U & 16) {
                  if (vt = Y & 65535, U &= 15, j < U && (p += D[i++] << j, j += 8, j < U && (p += D[i++] << j, j += 8)), vt += p & (1 << U) - 1, vt > c) {
                    e.msg = "invalid distance too far back", w.mode = Ns;
                    break t;
                  }
                  if (p >>>= U, j -= U, U = s - f, vt > U) {
                    if (U = vt - U, U > m && w.sane) {
                      e.msg = "invalid distance too far back", w.mode = Ns;
                      break t;
                    }
                    if (ht = 0, X = P, N === 0) {
                      if (ht += d - U, U < ot) {
                        ot -= U;
                        do
                          H[s++] = P[ht++];
                        while (--U);
                        ht = s - vt, X = H;
                      }
                    } else if (N < U) {
                      if (ht += d + N - U, U -= N, U < ot) {
                        ot -= U;
                        do
                          H[s++] = P[ht++];
                        while (--U);
                        if (ht = 0, N < ot) {
                          U = N, ot -= U;
                          do
                            H[s++] = P[ht++];
                          while (--U);
                          ht = s - vt, X = H;
                        }
                      }
                    } else if (ht += N - U, U < ot) {
                      ot -= U;
                      do
                        H[s++] = P[ht++];
                      while (--U);
                      ht = s - vt, X = H;
                    }
                    for (; ot > 2; )
                      H[s++] = X[ht++], H[s++] = X[ht++], H[s++] = X[ht++], ot -= 3;
                    ot && (H[s++] = X[ht++], ot > 1 && (H[s++] = X[ht++]));
                  } else {
                    ht = s - vt;
                    do
                      H[s++] = H[ht++], H[s++] = H[ht++], H[s++] = H[ht++], ot -= 3;
                    while (ot > 2);
                    ot && (H[s++] = H[ht++], ot > 1 && (H[s++] = H[ht++]));
                  }
                } else if ((U & 64) === 0) {
                  Y = R[(Y & 65535) + (p & (1 << U) - 1)];
                  continue r;
                } else {
                  e.msg = "invalid distance code", w.mode = Ns;
                  break t;
                }
                break;
              }
          } else if ((U & 64) === 0) {
            Y = E[(Y & 65535) + (p & (1 << U) - 1)];
            continue e;
          } else if (U & 32) {
            w.mode = Rf;
            break t;
          } else {
            e.msg = "invalid literal/length code", w.mode = Ns;
            break t;
          }
          break;
        }
    } while (i < a && s < l);
  ot = j >> 3, i -= ot, j -= ot << 3, p &= (1 << j) - 1, e.next_in = i, e.next_out = s, e.avail_in = i < a ? 5 + (a - i) : 5 - (i - a), e.avail_out = s < l ? 257 + (l - s) : 257 - (s - l), w.hold = p, w.bits = j;
};
const Vi = 15, Ql = 852, tu = 592, eu = 0, Po = 1, ru = 2, Df = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), qf = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Uf = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), zf = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Hf = (r, e, t, i, a, s, f, l) => {
  const c = l.bits;
  let d = 0, m = 0, N = 0, P = 0, p = 0, j = 0, E = 0, R = 0, k = 0, V = 0, Y, U, ot, vt, ht, X = null, D;
  const H = new Uint16Array(Vi + 1), w = new Uint16Array(Vi + 1);
  let A = null, B, q, et;
  for (d = 0; d <= Vi; d++)
    H[d] = 0;
  for (m = 0; m < i; m++)
    H[e[t + m]]++;
  for (p = c, P = Vi; P >= 1 && H[P] === 0; P--)
    ;
  if (p > P && (p = P), P === 0)
    return a[s++] = 1 << 24 | 64 << 16 | 0, a[s++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
  for (N = 1; N < P && H[N] === 0; N++)
    ;
  for (p < N && (p = N), R = 1, d = 1; d <= Vi; d++)
    if (R <<= 1, R -= H[d], R < 0)
      return -1;
  if (R > 0 && (r === eu || P !== 1))
    return -1;
  for (w[1] = 0, d = 1; d < Vi; d++)
    w[d + 1] = w[d] + H[d];
  for (m = 0; m < i; m++)
    e[t + m] !== 0 && (f[w[e[t + m]]++] = m);
  if (r === eu ? (X = A = f, D = 20) : r === Po ? (X = Df, A = qf, D = 257) : (X = Uf, A = zf, D = 0), V = 0, m = 0, d = N, ht = s, j = p, E = 0, ot = -1, k = 1 << p, vt = k - 1, r === Po && k > Ql || r === ru && k > tu)
    return 1;
  for (; ; ) {
    B = d - E, f[m] + 1 < D ? (q = 0, et = f[m]) : f[m] >= D ? (q = A[f[m] - D], et = X[f[m] - D]) : (q = 96, et = 0), Y = 1 << d - E, U = 1 << j, N = U;
    do
      U -= Y, a[ht + (V >> E) + U] = B << 24 | q << 16 | et | 0;
    while (U !== 0);
    for (Y = 1 << d - 1; V & Y; )
      Y >>= 1;
    if (Y !== 0 ? (V &= Y - 1, V += Y) : V = 0, m++, --H[d] === 0) {
      if (d === P)
        break;
      d = e[t + f[m]];
    }
    if (d > p && (V & vt) !== ot) {
      for (E === 0 && (E = p), ht += N, j = d - E, R = 1 << j; j + E < P && (R -= H[j + E], !(R <= 0)); )
        j++, R <<= 1;
      if (k += 1 << j, r === Po && k > Ql || r === ru && k > tu)
        return 1;
      ot = V & vt, a[ot] = p << 24 | j << 16 | ht - s | 0;
    }
  }
  return V !== 0 && (a[ht + V] = d - E << 24 | 64 << 16 | 0), l.bits = p, 0;
};
var Ta = Hf;
const Wf = 0, yc = 1, xc = 2, {
  Z_FINISH: nu,
  Z_BLOCK: Gf,
  Z_TREES: Ls,
  Z_OK: Ci,
  Z_STREAM_END: Vf,
  Z_NEED_DICT: Yf,
  Z_STREAM_ERROR: Vr,
  Z_DATA_ERROR: _c,
  Z_MEM_ERROR: Ac,
  Z_BUF_ERROR: Jf,
  Z_DEFLATED: iu
} = vc, Hs = 16180, au = 16181, su = 16182, ou = 16183, lu = 16184, uu = 16185, cu = 16186, hu = 16187, fu = 16188, du = 16189, qs = 16190, Tn = 16191, Io = 16192, pu = 16193, Co = 16194, gu = 16195, mu = 16196, vu = 16197, bu = 16198, Ss = 16199, ks = 16200, wu = 16201, yu = 16202, xu = 16203, _u = 16204, Au = 16205, Fo = 16206, Nu = 16207, Lu = 16208, Me = 16209, Nc = 16210, Lc = 16211, $f = 852, Xf = 592, Kf = 15, Zf = Kf, Su = (r) => (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);
function Qf() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Fi = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.mode < Hs || e.mode > Lc ? 1 : 0;
}, Sc = (r) => {
  if (Fi(r))
    return Vr;
  const e = r.state;
  return r.total_in = r.total_out = e.total = 0, r.msg = "", e.wrap && (r.adler = e.wrap & 1), e.mode = Hs, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array($f), e.distcode = e.distdyn = new Int32Array(Xf), e.sane = 1, e.back = -1, Ci;
}, kc = (r) => {
  if (Fi(r))
    return Vr;
  const e = r.state;
  return e.wsize = 0, e.whave = 0, e.wnext = 0, Sc(r);
}, Pc = (r, e) => {
  let t;
  if (Fi(r))
    return Vr;
  const i = r.state;
  return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Vr : (i.window !== null && i.wbits !== e && (i.window = null), i.wrap = t, i.wbits = e, kc(r));
}, Ic = (r, e) => {
  if (!r)
    return Vr;
  const t = new Qf();
  r.state = t, t.strm = r, t.window = null, t.mode = Hs;
  const i = Pc(r, e);
  return i !== Ci && (r.state = null), i;
}, t1 = (r) => Ic(r, Zf);
let ku = !0, Eo, Oo;
const e1 = (r) => {
  if (ku) {
    Eo = new Int32Array(512), Oo = new Int32Array(32);
    let e = 0;
    for (; e < 144; )
      r.lens[e++] = 8;
    for (; e < 256; )
      r.lens[e++] = 9;
    for (; e < 280; )
      r.lens[e++] = 7;
    for (; e < 288; )
      r.lens[e++] = 8;
    for (Ta(yc, r.lens, 0, 288, Eo, 0, r.work, { bits: 9 }), e = 0; e < 32; )
      r.lens[e++] = 5;
    Ta(xc, r.lens, 0, 32, Oo, 0, r.work, { bits: 5 }), ku = !1;
  }
  r.lencode = Eo, r.lenbits = 9, r.distcode = Oo, r.distbits = 5;
}, Cc = (r, e, t, i) => {
  let a;
  const s = r.state;
  return s.window === null && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), i >= s.wsize ? (s.window.set(e.subarray(t - s.wsize, t), 0), s.wnext = 0, s.whave = s.wsize) : (a = s.wsize - s.wnext, a > i && (a = i), s.window.set(e.subarray(t - i, t - i + a), s.wnext), i -= a, i ? (s.window.set(e.subarray(t - i, t), 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += a, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += a))), 0;
}, r1 = (r, e) => {
  let t, i, a, s, f, l, c, d, m, N, P, p, j, E, R = 0, k, V, Y, U, ot, vt, ht, X;
  const D = new Uint8Array(4);
  let H, w;
  const A = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Fi(r) || !r.output || !r.input && r.avail_in !== 0)
    return Vr;
  t = r.state, t.mode === Tn && (t.mode = Io), f = r.next_out, a = r.output, c = r.avail_out, s = r.next_in, i = r.input, l = r.avail_in, d = t.hold, m = t.bits, N = l, P = c, X = Ci;
  t:
    for (; ; )
      switch (t.mode) {
        case Hs:
          if (t.wrap === 0) {
            t.mode = Io;
            break;
          }
          for (; m < 16; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          if (t.wrap & 2 && d === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, D[0] = d & 255, D[1] = d >>> 8 & 255, t.check = gn(t.check, D, 2, 0), d = 0, m = 0, t.mode = au;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((d & 255) << 8) + (d >> 8)) % 31) {
            r.msg = "incorrect header check", t.mode = Me;
            break;
          }
          if ((d & 15) !== iu) {
            r.msg = "unknown compression method", t.mode = Me;
            break;
          }
          if (d >>>= 4, m -= 4, ht = (d & 15) + 8, t.wbits === 0 && (t.wbits = ht), ht > 15 || ht > t.wbits) {
            r.msg = "invalid window size", t.mode = Me;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, r.adler = t.check = 1, t.mode = d & 512 ? du : Tn, d = 0, m = 0;
          break;
        case au:
          for (; m < 16; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          if (t.flags = d, (t.flags & 255) !== iu) {
            r.msg = "unknown compression method", t.mode = Me;
            break;
          }
          if (t.flags & 57344) {
            r.msg = "unknown header flags set", t.mode = Me;
            break;
          }
          t.head && (t.head.text = d >> 8 & 1), t.flags & 512 && t.wrap & 4 && (D[0] = d & 255, D[1] = d >>> 8 & 255, t.check = gn(t.check, D, 2, 0)), d = 0, m = 0, t.mode = su;
        /* falls through */
        case su:
          for (; m < 32; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          t.head && (t.head.time = d), t.flags & 512 && t.wrap & 4 && (D[0] = d & 255, D[1] = d >>> 8 & 255, D[2] = d >>> 16 & 255, D[3] = d >>> 24 & 255, t.check = gn(t.check, D, 4, 0)), d = 0, m = 0, t.mode = ou;
        /* falls through */
        case ou:
          for (; m < 16; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          t.head && (t.head.xflags = d & 255, t.head.os = d >> 8), t.flags & 512 && t.wrap & 4 && (D[0] = d & 255, D[1] = d >>> 8 & 255, t.check = gn(t.check, D, 2, 0)), d = 0, m = 0, t.mode = lu;
        /* falls through */
        case lu:
          if (t.flags & 1024) {
            for (; m < 16; ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            t.length = d, t.head && (t.head.extra_len = d), t.flags & 512 && t.wrap & 4 && (D[0] = d & 255, D[1] = d >>> 8 & 255, t.check = gn(t.check, D, 2, 0)), d = 0, m = 0;
          } else t.head && (t.head.extra = null);
          t.mode = uu;
        /* falls through */
        case uu:
          if (t.flags & 1024 && (p = t.length, p > l && (p = l), p && (t.head && (ht = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            i.subarray(
              s,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              s + p
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            ht
          )), t.flags & 512 && t.wrap & 4 && (t.check = gn(t.check, i, p, s)), l -= p, s += p, t.length -= p), t.length))
            break t;
          t.length = 0, t.mode = cu;
        /* falls through */
        case cu:
          if (t.flags & 2048) {
            if (l === 0)
              break t;
            p = 0;
            do
              ht = i[s + p++], t.head && ht && t.length < 65536 && (t.head.name += String.fromCharCode(ht));
            while (ht && p < l);
            if (t.flags & 512 && t.wrap & 4 && (t.check = gn(t.check, i, p, s)), l -= p, s += p, ht)
              break t;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = hu;
        /* falls through */
        case hu:
          if (t.flags & 4096) {
            if (l === 0)
              break t;
            p = 0;
            do
              ht = i[s + p++], t.head && ht && t.length < 65536 && (t.head.comment += String.fromCharCode(ht));
            while (ht && p < l);
            if (t.flags & 512 && t.wrap & 4 && (t.check = gn(t.check, i, p, s)), l -= p, s += p, ht)
              break t;
          } else t.head && (t.head.comment = null);
          t.mode = fu;
        /* falls through */
        case fu:
          if (t.flags & 512) {
            for (; m < 16; ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            if (t.wrap & 4 && d !== (t.check & 65535)) {
              r.msg = "header crc mismatch", t.mode = Me;
              break;
            }
            d = 0, m = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), r.adler = t.check = 0, t.mode = Tn;
          break;
        case du:
          for (; m < 32; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          r.adler = t.check = Su(d), d = 0, m = 0, t.mode = qs;
        /* falls through */
        case qs:
          if (t.havedict === 0)
            return r.next_out = f, r.avail_out = c, r.next_in = s, r.avail_in = l, t.hold = d, t.bits = m, Yf;
          r.adler = t.check = 1, t.mode = Tn;
        /* falls through */
        case Tn:
          if (e === Gf || e === Ls)
            break t;
        /* falls through */
        case Io:
          if (t.last) {
            d >>>= m & 7, m -= m & 7, t.mode = Fo;
            break;
          }
          for (; m < 3; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          switch (t.last = d & 1, d >>>= 1, m -= 1, d & 3) {
            case 0:
              t.mode = pu;
              break;
            case 1:
              if (e1(t), t.mode = Ss, e === Ls) {
                d >>>= 2, m -= 2;
                break t;
              }
              break;
            case 2:
              t.mode = mu;
              break;
            case 3:
              r.msg = "invalid block type", t.mode = Me;
          }
          d >>>= 2, m -= 2;
          break;
        case pu:
          for (d >>>= m & 7, m -= m & 7; m < 32; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          if ((d & 65535) !== (d >>> 16 ^ 65535)) {
            r.msg = "invalid stored block lengths", t.mode = Me;
            break;
          }
          if (t.length = d & 65535, d = 0, m = 0, t.mode = Co, e === Ls)
            break t;
        /* falls through */
        case Co:
          t.mode = gu;
        /* falls through */
        case gu:
          if (p = t.length, p) {
            if (p > l && (p = l), p > c && (p = c), p === 0)
              break t;
            a.set(i.subarray(s, s + p), f), l -= p, s += p, c -= p, f += p, t.length -= p;
            break;
          }
          t.mode = Tn;
          break;
        case mu:
          for (; m < 14; ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          if (t.nlen = (d & 31) + 257, d >>>= 5, m -= 5, t.ndist = (d & 31) + 1, d >>>= 5, m -= 5, t.ncode = (d & 15) + 4, d >>>= 4, m -= 4, t.nlen > 286 || t.ndist > 30) {
            r.msg = "too many length or distance symbols", t.mode = Me;
            break;
          }
          t.have = 0, t.mode = vu;
        /* falls through */
        case vu:
          for (; t.have < t.ncode; ) {
            for (; m < 3; ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            t.lens[A[t.have++]] = d & 7, d >>>= 3, m -= 3;
          }
          for (; t.have < 19; )
            t.lens[A[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, H = { bits: t.lenbits }, X = Ta(Wf, t.lens, 0, 19, t.lencode, 0, t.work, H), t.lenbits = H.bits, X) {
            r.msg = "invalid code lengths set", t.mode = Me;
            break;
          }
          t.have = 0, t.mode = bu;
        /* falls through */
        case bu:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; R = t.lencode[d & (1 << t.lenbits) - 1], k = R >>> 24, V = R >>> 16 & 255, Y = R & 65535, !(k <= m); ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            if (Y < 16)
              d >>>= k, m -= k, t.lens[t.have++] = Y;
            else {
              if (Y === 16) {
                for (w = k + 2; m < w; ) {
                  if (l === 0)
                    break t;
                  l--, d += i[s++] << m, m += 8;
                }
                if (d >>>= k, m -= k, t.have === 0) {
                  r.msg = "invalid bit length repeat", t.mode = Me;
                  break;
                }
                ht = t.lens[t.have - 1], p = 3 + (d & 3), d >>>= 2, m -= 2;
              } else if (Y === 17) {
                for (w = k + 3; m < w; ) {
                  if (l === 0)
                    break t;
                  l--, d += i[s++] << m, m += 8;
                }
                d >>>= k, m -= k, ht = 0, p = 3 + (d & 7), d >>>= 3, m -= 3;
              } else {
                for (w = k + 7; m < w; ) {
                  if (l === 0)
                    break t;
                  l--, d += i[s++] << m, m += 8;
                }
                d >>>= k, m -= k, ht = 0, p = 11 + (d & 127), d >>>= 7, m -= 7;
              }
              if (t.have + p > t.nlen + t.ndist) {
                r.msg = "invalid bit length repeat", t.mode = Me;
                break;
              }
              for (; p--; )
                t.lens[t.have++] = ht;
            }
          }
          if (t.mode === Me)
            break;
          if (t.lens[256] === 0) {
            r.msg = "invalid code -- missing end-of-block", t.mode = Me;
            break;
          }
          if (t.lenbits = 9, H = { bits: t.lenbits }, X = Ta(yc, t.lens, 0, t.nlen, t.lencode, 0, t.work, H), t.lenbits = H.bits, X) {
            r.msg = "invalid literal/lengths set", t.mode = Me;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, H = { bits: t.distbits }, X = Ta(xc, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, H), t.distbits = H.bits, X) {
            r.msg = "invalid distances set", t.mode = Me;
            break;
          }
          if (t.mode = Ss, e === Ls)
            break t;
        /* falls through */
        case Ss:
          t.mode = ks;
        /* falls through */
        case ks:
          if (l >= 6 && c >= 258) {
            r.next_out = f, r.avail_out = c, r.next_in = s, r.avail_in = l, t.hold = d, t.bits = m, Tf(r, P), f = r.next_out, a = r.output, c = r.avail_out, s = r.next_in, i = r.input, l = r.avail_in, d = t.hold, m = t.bits, t.mode === Tn && (t.back = -1);
            break;
          }
          for (t.back = 0; R = t.lencode[d & (1 << t.lenbits) - 1], k = R >>> 24, V = R >>> 16 & 255, Y = R & 65535, !(k <= m); ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          if (V && (V & 240) === 0) {
            for (U = k, ot = V, vt = Y; R = t.lencode[vt + ((d & (1 << U + ot) - 1) >> U)], k = R >>> 24, V = R >>> 16 & 255, Y = R & 65535, !(U + k <= m); ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            d >>>= U, m -= U, t.back += U;
          }
          if (d >>>= k, m -= k, t.back += k, t.length = Y, V === 0) {
            t.mode = Au;
            break;
          }
          if (V & 32) {
            t.back = -1, t.mode = Tn;
            break;
          }
          if (V & 64) {
            r.msg = "invalid literal/length code", t.mode = Me;
            break;
          }
          t.extra = V & 15, t.mode = wu;
        /* falls through */
        case wu:
          if (t.extra) {
            for (w = t.extra; m < w; ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            t.length += d & (1 << t.extra) - 1, d >>>= t.extra, m -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = yu;
        /* falls through */
        case yu:
          for (; R = t.distcode[d & (1 << t.distbits) - 1], k = R >>> 24, V = R >>> 16 & 255, Y = R & 65535, !(k <= m); ) {
            if (l === 0)
              break t;
            l--, d += i[s++] << m, m += 8;
          }
          if ((V & 240) === 0) {
            for (U = k, ot = V, vt = Y; R = t.distcode[vt + ((d & (1 << U + ot) - 1) >> U)], k = R >>> 24, V = R >>> 16 & 255, Y = R & 65535, !(U + k <= m); ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            d >>>= U, m -= U, t.back += U;
          }
          if (d >>>= k, m -= k, t.back += k, V & 64) {
            r.msg = "invalid distance code", t.mode = Me;
            break;
          }
          t.offset = Y, t.extra = V & 15, t.mode = xu;
        /* falls through */
        case xu:
          if (t.extra) {
            for (w = t.extra; m < w; ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            t.offset += d & (1 << t.extra) - 1, d >>>= t.extra, m -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            r.msg = "invalid distance too far back", t.mode = Me;
            break;
          }
          t.mode = _u;
        /* falls through */
        case _u:
          if (c === 0)
            break t;
          if (p = P - c, t.offset > p) {
            if (p = t.offset - p, p > t.whave && t.sane) {
              r.msg = "invalid distance too far back", t.mode = Me;
              break;
            }
            p > t.wnext ? (p -= t.wnext, j = t.wsize - p) : j = t.wnext - p, p > t.length && (p = t.length), E = t.window;
          } else
            E = a, j = f - t.offset, p = t.length;
          p > c && (p = c), c -= p, t.length -= p;
          do
            a[f++] = E[j++];
          while (--p);
          t.length === 0 && (t.mode = ks);
          break;
        case Au:
          if (c === 0)
            break t;
          a[f++] = t.length, c--, t.mode = ks;
          break;
        case Fo:
          if (t.wrap) {
            for (; m < 32; ) {
              if (l === 0)
                break t;
              l--, d |= i[s++] << m, m += 8;
            }
            if (P -= c, r.total_out += P, t.total += P, t.wrap & 4 && P && (r.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? gn(t.check, a, P, f - P) : Ko(t.check, a, P, f - P)), P = c, t.wrap & 4 && (t.flags ? d : Su(d)) !== t.check) {
              r.msg = "incorrect data check", t.mode = Me;
              break;
            }
            d = 0, m = 0;
          }
          t.mode = Nu;
        /* falls through */
        case Nu:
          if (t.wrap && t.flags) {
            for (; m < 32; ) {
              if (l === 0)
                break t;
              l--, d += i[s++] << m, m += 8;
            }
            if (t.wrap & 4 && d !== (t.total & 4294967295)) {
              r.msg = "incorrect length check", t.mode = Me;
              break;
            }
            d = 0, m = 0;
          }
          t.mode = Lu;
        /* falls through */
        case Lu:
          X = Vf;
          break t;
        case Me:
          X = _c;
          break t;
        case Nc:
          return Ac;
        case Lc:
        /* falls through */
        default:
          return Vr;
      }
  return r.next_out = f, r.avail_out = c, r.next_in = s, r.avail_in = l, t.hold = d, t.bits = m, (t.wsize || P !== r.avail_out && t.mode < Me && (t.mode < Fo || e !== nu)) && Cc(r, r.output, r.next_out, P - r.avail_out), N -= r.avail_in, P -= r.avail_out, r.total_in += N, r.total_out += P, t.total += P, t.wrap & 4 && P && (r.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? gn(t.check, a, P, r.next_out - P) : Ko(t.check, a, P, r.next_out - P)), r.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Tn ? 128 : 0) + (t.mode === Ss || t.mode === Co ? 256 : 0), (N === 0 && P === 0 || e === nu) && X === Ci && (X = Jf), X;
}, n1 = (r) => {
  if (Fi(r))
    return Vr;
  let e = r.state;
  return e.window && (e.window = null), r.state = null, Ci;
}, i1 = (r, e) => {
  if (Fi(r))
    return Vr;
  const t = r.state;
  return (t.wrap & 2) === 0 ? Vr : (t.head = e, e.done = !1, Ci);
}, a1 = (r, e) => {
  const t = e.length;
  let i, a, s;
  return Fi(r) || (i = r.state, i.wrap !== 0 && i.mode !== qs) ? Vr : i.mode === qs && (a = 1, a = Ko(a, e, t, 0), a !== i.check) ? _c : (s = Cc(r, e, t, t), s ? (i.mode = Nc, Ac) : (i.havedict = 1, Ci));
};
var s1 = kc, o1 = Pc, l1 = Sc, u1 = t1, c1 = Ic, h1 = r1, f1 = n1, d1 = i1, p1 = a1, g1 = "pako inflate (from Nodeca project)", Dn = {
  inflateReset: s1,
  inflateReset2: o1,
  inflateResetKeep: l1,
  inflateInit: u1,
  inflateInit2: c1,
  inflate: h1,
  inflateEnd: f1,
  inflateGetHeader: d1,
  inflateSetDictionary: p1,
  inflateInfo: g1
};
function m1() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var v1 = m1;
const Fc = Object.prototype.toString, {
  Z_NO_FLUSH: b1,
  Z_FINISH: w1,
  Z_OK: qa,
  Z_STREAM_END: Mo,
  Z_NEED_DICT: jo,
  Z_STREAM_ERROR: y1,
  Z_DATA_ERROR: Pu,
  Z_MEM_ERROR: x1
} = vc;
function Ua(r) {
  this.options = bc.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, r || {});
  const e = this.options;
  e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(r && r.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15) === 0 && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Bf(), this.strm.avail_out = 0;
  let t = Dn.inflateInit2(
    this.strm,
    e.windowBits
  );
  if (t !== qa)
    throw new Error(Zo[t]);
  if (this.header = new v1(), Dn.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Qo.string2buf(e.dictionary) : Fc.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = Dn.inflateSetDictionary(this.strm, e.dictionary), t !== qa)))
    throw new Error(Zo[t]);
}
Ua.prototype.push = function(r, e) {
  const t = this.strm, i = this.options.chunkSize, a = this.options.dictionary;
  let s, f, l;
  if (this.ended) return !1;
  for (e === ~~e ? f = e : f = e === !0 ? w1 : b1, Fc.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(i), t.next_out = 0, t.avail_out = i), s = Dn.inflate(t, f), s === jo && a && (s = Dn.inflateSetDictionary(t, a), s === qa ? s = Dn.inflate(t, f) : s === Pu && (s = jo)); t.avail_in > 0 && s === Mo && t.state.wrap > 0 && r[t.next_in] !== 0; )
      Dn.inflateReset(t), s = Dn.inflate(t, f);
    switch (s) {
      case y1:
      case Pu:
      case jo:
      case x1:
        return this.onEnd(s), this.ended = !0, !1;
    }
    if (l = t.avail_out, t.next_out && (t.avail_out === 0 || s === Mo))
      if (this.options.to === "string") {
        let c = Qo.utf8border(t.output, t.next_out), d = t.next_out - c, m = Qo.buf2string(t.output, c);
        t.next_out = d, t.avail_out = i - d, d && t.output.set(t.output.subarray(c, c + d), 0), this.onData(m);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(s === qa && l === 0)) {
      if (s === Mo)
        return s = Dn.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
Ua.prototype.onData = function(r) {
  this.chunks.push(r);
};
Ua.prototype.onEnd = function(r) {
  r === qa && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = bc.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function _1(r, e) {
  const t = new Ua(e);
  if (t.push(r), t.err) throw t.msg || Zo[t.err];
  return t.result;
}
var A1 = Ua, N1 = _1, L1 = {
  Inflate: A1,
  inflate: N1
};
const { Inflate: S1, inflate: k1 } = L1;
var Iu = S1, P1 = k1;
const Ec = [];
for (let r = 0; r < 256; r++) {
  let e = r;
  for (let t = 0; t < 8; t++)
    e & 1 ? e = 3988292384 ^ e >>> 1 : e = e >>> 1;
  Ec[r] = e;
}
const Cu = 4294967295;
function I1(r, e, t) {
  let i = r;
  for (let a = 0; a < t; a++)
    i = Ec[(i ^ e[a]) & 255] ^ i >>> 8;
  return i;
}
function C1(r, e) {
  return (I1(Cu, r, e) ^ Cu) >>> 0;
}
function Fu(r, e, t) {
  const i = r.readUint32(), a = C1(new Uint8Array(r.buffer, r.byteOffset + r.offset - e - 4, e), e);
  if (a !== i)
    throw new Error(`CRC mismatch for chunk ${t}. Expected ${i}, found ${a}`);
}
function Oc(r, e, t) {
  for (let i = 0; i < t; i++)
    e[i] = r[i];
}
function Mc(r, e, t, i) {
  let a = 0;
  for (; a < i; a++)
    e[a] = r[a];
  for (; a < t; a++)
    e[a] = r[a] + e[a - i] & 255;
}
function jc(r, e, t, i) {
  let a = 0;
  if (t.length === 0)
    for (; a < i; a++)
      e[a] = r[a];
  else
    for (; a < i; a++)
      e[a] = r[a] + t[a] & 255;
}
function Bc(r, e, t, i, a) {
  let s = 0;
  if (t.length === 0) {
    for (; s < a; s++)
      e[s] = r[s];
    for (; s < i; s++)
      e[s] = r[s] + (e[s - a] >> 1) & 255;
  } else {
    for (; s < a; s++)
      e[s] = r[s] + (t[s] >> 1) & 255;
    for (; s < i; s++)
      e[s] = r[s] + (e[s - a] + t[s] >> 1) & 255;
  }
}
function Rc(r, e, t, i, a) {
  let s = 0;
  if (t.length === 0) {
    for (; s < a; s++)
      e[s] = r[s];
    for (; s < i; s++)
      e[s] = r[s] + e[s - a] & 255;
  } else {
    for (; s < a; s++)
      e[s] = r[s] + t[s] & 255;
    for (; s < i; s++)
      e[s] = r[s] + F1(e[s - a], t[s], t[s - a]) & 255;
  }
}
function F1(r, e, t) {
  const i = r + e - t, a = Math.abs(i - r), s = Math.abs(i - e), f = Math.abs(i - t);
  return a <= s && a <= f ? r : s <= f ? e : t;
}
function E1(r, e, t, i, a, s) {
  switch (r) {
    case 0:
      Oc(e, t, a);
      break;
    case 1:
      Mc(e, t, a, s);
      break;
    case 2:
      jc(e, t, i, a);
      break;
    case 3:
      Bc(e, t, i, a, s);
      break;
    case 4:
      Rc(e, t, i, a, s);
      break;
    default:
      throw new Error(`Unsupported filter: ${r}`);
  }
}
const O1 = new Uint16Array([255]), M1 = new Uint8Array(O1.buffer), j1 = M1[0] === 255;
function B1(r) {
  const { data: e, width: t, height: i, channels: a, depth: s } = r, f = [
    { x: 0, y: 0, xStep: 8, yStep: 8 },
    // Pass 1
    { x: 4, y: 0, xStep: 8, yStep: 8 },
    // Pass 2
    { x: 0, y: 4, xStep: 4, yStep: 8 },
    // Pass 3
    { x: 2, y: 0, xStep: 4, yStep: 4 },
    // Pass 4
    { x: 0, y: 2, xStep: 2, yStep: 4 },
    // Pass 5
    { x: 1, y: 0, xStep: 2, yStep: 2 },
    // Pass 6
    { x: 0, y: 1, xStep: 1, yStep: 2 }
    // Pass 7
  ], l = Math.ceil(s / 8) * a, c = new Uint8Array(i * t * l);
  let d = 0;
  for (let m = 0; m < 7; m++) {
    const N = f[m], P = Math.ceil((t - N.x) / N.xStep), p = Math.ceil((i - N.y) / N.yStep);
    if (P <= 0 || p <= 0)
      continue;
    const j = P * l, E = new Uint8Array(j);
    for (let R = 0; R < p; R++) {
      const k = e[d++], V = e.subarray(d, d + j);
      d += j;
      const Y = new Uint8Array(j);
      E1(k, V, Y, E, j, l), E.set(Y);
      for (let U = 0; U < P; U++) {
        const ot = N.x + U * N.xStep, vt = N.y + R * N.yStep;
        if (!(ot >= t || vt >= i))
          for (let ht = 0; ht < l; ht++)
            c[(vt * t + ot) * l + ht] = Y[U * l + ht];
      }
    }
  }
  if (s === 16) {
    const m = new Uint16Array(c.buffer);
    if (j1)
      for (let N = 0; N < m.length; N++)
        m[N] = R1(m[N]);
    return m;
  } else
    return c;
}
function R1(r) {
  return (r & 255) << 8 | r >> 8 & 255;
}
const T1 = new Uint16Array([255]), D1 = new Uint8Array(T1.buffer), q1 = D1[0] === 255, U1 = new Uint8Array(0);
function Eu(r) {
  const { data: e, width: t, height: i, channels: a, depth: s } = r, f = Math.ceil(s / 8) * a, l = Math.ceil(s / 8 * a * t), c = new Uint8Array(i * l);
  let d = U1, m = 0, N, P;
  for (let p = 0; p < i; p++) {
    switch (N = e.subarray(m + 1, m + 1 + l), P = c.subarray(p * l, (p + 1) * l), e[m]) {
      case 0:
        Oc(N, P, l);
        break;
      case 1:
        Mc(N, P, l, f);
        break;
      case 2:
        jc(N, P, d, l);
        break;
      case 3:
        Bc(N, P, d, l, f);
        break;
      case 4:
        Rc(N, P, d, l, f);
        break;
      default:
        throw new Error(`Unsupported filter: ${e[m]}`);
    }
    d = P, m += l + 1;
  }
  if (s === 16) {
    const p = new Uint16Array(c.buffer);
    if (q1)
      for (let j = 0; j < p.length; j++)
        p[j] = z1(p[j]);
    return p;
  } else
    return c;
}
function z1(r) {
  return (r & 255) << 8 | r >> 8 & 255;
}
const Os = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function Ou(r) {
  if (!H1(r.readBytes(Os.length)))
    throw new Error("wrong PNG signature");
}
function H1(r) {
  if (r.length < Os.length)
    return !1;
  for (let e = 0; e < Os.length; e++)
    if (r[e] !== Os[e])
      return !1;
  return !0;
}
const W1 = "tEXt", G1 = 0, Tc = new TextDecoder("latin1");
function V1(r) {
  if (J1(r), r.length === 0 || r.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const Y1 = /^[\u0000-\u00FF]*$/;
function J1(r) {
  if (!Y1.test(r))
    throw new Error("invalid latin1 text");
}
function $1(r, e, t) {
  const i = Dc(e);
  r[i] = X1(e, t - i.length - 1);
}
function Dc(r) {
  for (r.mark(); r.readByte() !== G1; )
    ;
  const e = r.offset;
  r.reset();
  const t = Tc.decode(r.readBytes(e - r.offset - 1));
  return r.skip(1), V1(t), t;
}
function X1(r, e) {
  return Tc.decode(r.readBytes(e));
}
const Or = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, Bo = {
  UNKNOWN: -1,
  DEFLATE: 0
}, Mu = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, Ro = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, Ps = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, To = {
  SOURCE: 0,
  OVER: 1
};
class K1 extends ol {
  constructor(t, i = {}) {
    super(t);
    _e(this, "_checkCrc");
    _e(this, "_inflator");
    _e(this, "_png");
    _e(this, "_apng");
    _e(this, "_end");
    _e(this, "_hasPalette");
    _e(this, "_palette");
    _e(this, "_hasTransparency");
    _e(this, "_transparency");
    _e(this, "_compressionMethod");
    _e(this, "_filterMethod");
    _e(this, "_interlaceMethod");
    _e(this, "_colorType");
    _e(this, "_isAnimated");
    _e(this, "_numberOfFrames");
    _e(this, "_numberOfPlays");
    _e(this, "_frames");
    _e(this, "_writingDataChunks");
    const { checkCrc: a = !1 } = i;
    this._checkCrc = a, this._inflator = new Iu(), this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(0),
      depth: 1,
      text: {}
    }, this._apng = {
      width: -1,
      height: -1,
      channels: -1,
      depth: 1,
      numberOfFrames: 1,
      numberOfPlays: 0,
      text: {},
      frames: []
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = Bo.UNKNOWN, this._filterMethod = Mu.UNKNOWN, this._interlaceMethod = Ro.UNKNOWN, this._colorType = Or.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (Ou(this); !this._end; ) {
      const t = this.readUint32(), i = this.readChars(4);
      this.decodeChunk(t, i);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (Ou(this); !this._end; ) {
      const t = this.readUint32(), i = this.readChars(4);
      this.decodeApngChunk(t, i);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(t, i) {
    const a = this.offset;
    switch (i) {
      // 11.2 Critical chunks
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(t);
        break;
      case "IDAT":
        this.decodeIDAT(t);
        break;
      case "IEND":
        this._end = !0;
        break;
      // 11.3 Ancillary chunks
      case "tRNS":
        this.decodetRNS(t);
        break;
      case "iCCP":
        this.decodeiCCP(t);
        break;
      case W1:
        $1(this._png.text, this, t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - a !== t)
      throw new Error(`Length mismatch while decoding chunk ${i}`);
    this._checkCrc ? Fu(this, t + 4, i) : this.skip(4);
  }
  decodeApngChunk(t, i) {
    const a = this.offset;
    switch (i !== "fdAT" && i !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), i) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(t);
        break;
      default:
        this.decodeChunk(t, i), this.offset = a + t;
        break;
    }
    if (this.offset - a !== t)
      throw new Error(`Length mismatch while decoding chunk ${i}`);
    this._checkCrc ? Fu(this, t + 4, i) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = Z1(this.readUint8());
    const i = this.readUint8();
    this._colorType = i;
    let a;
    switch (i) {
      case Or.GREYSCALE:
        a = 1;
        break;
      case Or.TRUECOLOUR:
        a = 3;
        break;
      case Or.INDEXED_COLOUR:
        a = 1;
        break;
      case Or.GREYSCALE_ALPHA:
        a = 2;
        break;
      case Or.TRUECOLOUR_ALPHA:
        a = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case Or.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${i}`);
    }
    if (this._png.channels = a, this._compressionMethod = this.readUint8(), this._compressionMethod !== Bo.DEFLATE)
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = !0;
  }
  decodeFCTL() {
    const t = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array(0)
    };
    this._frames.push(t);
  }
  // https://www.w3.org/TR/PNG/#11PLTE
  decodePLTE(t) {
    if (t % 3 !== 0)
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);
    const i = t / 3;
    this._hasPalette = !0;
    const a = [];
    this._palette = a;
    for (let s = 0; s < i; s++)
      a.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(t) {
    this._writingDataChunks = !0;
    const i = t, a = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, a, i)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  decodeFDAT(t) {
    this._writingDataChunks = !0;
    let i = t, a = this.offset + this.byteOffset;
    if (a += 4, i -= 4, this._inflator.push(new Uint8Array(this.buffer, a, i)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(t) {
    switch (this._colorType) {
      case Or.GREYSCALE:
      case Or.TRUECOLOUR: {
        if (t % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);
        if (t / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(t / 2);
        for (let i = 0; i < t / 2; i++)
          this._transparency[i] = this.readUint16();
        break;
      }
      case Or.INDEXED_COLOUR: {
        if (t > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
        let i = 0;
        for (; i < t; i++) {
          const a = this.readByte();
          this._palette[i].push(a);
        }
        for (; i < this._palette.length; i++)
          this._palette[i].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case Or.UNKNOWN:
      case Or.GREYSCALE_ALPHA:
      case Or.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(t) {
    const i = Dc(this), a = this.readUint8();
    if (a !== Bo.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${a}`);
    const s = this.readBytes(t - i.length - 2);
    this._png.iccEmbeddedProfile = {
      name: i,
      profile: P1(s)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const t = this.readUint32(), i = this.readUint32(), a = this.readByte();
    this._png.resolution = { x: t, y: i, unit: a };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let t = 0; t < this._numberOfFrames; t++) {
      const i = {
        sequenceNumber: this._frames[t].sequenceNumber,
        delayNumber: this._frames[t].delayNumber,
        delayDenominator: this._frames[t].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, a = this._frames.at(t);
      if (a) {
        if (a.data = Eu({
          data: a.data,
          width: a.width,
          height: a.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), t === 0 || a.xOffset === 0 && a.yOffset === 0 && a.width === this._png.width && a.height === this._png.height)
          i.data = a.data;
        else {
          const s = this._apng.frames.at(t - 1);
          this.disposeFrame(a, s, i), this.addFrameDataToCanvas(i, a);
        }
        this._apng.frames.push(i);
      }
    }
    return this._apng;
  }
  disposeFrame(t, i, a) {
    switch (t.disposeOp) {
      case Ps.NONE:
        break;
      case Ps.BACKGROUND:
        for (let s = 0; s < this._png.height; s++)
          for (let f = 0; f < this._png.width; f++) {
            const l = (s * t.width + f) * this._png.channels;
            for (let c = 0; c < this._png.channels; c++)
              a.data[l + c] = 0;
          }
        break;
      case Ps.PREVIOUS:
        a.data.set(i.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(t, i) {
    const a = 1 << this._png.depth, s = (f, l) => {
      const c = ((f + i.yOffset) * this._png.width + i.xOffset + l) * this._png.channels, d = (f * i.width + l) * this._png.channels;
      return { index: c, frameIndex: d };
    };
    switch (i.blendOp) {
      case To.SOURCE:
        for (let f = 0; f < i.height; f++)
          for (let l = 0; l < i.width; l++) {
            const { index: c, frameIndex: d } = s(f, l);
            for (let m = 0; m < this._png.channels; m++)
              t.data[c + m] = i.data[d + m];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case To.OVER:
        for (let f = 0; f < i.height; f++)
          for (let l = 0; l < i.width; l++) {
            const { index: c, frameIndex: d } = s(f, l);
            for (let m = 0; m < this._png.channels; m++) {
              const N = i.data[d + this._png.channels - 1] / a, P = m % (this._png.channels - 1) === 0 ? 1 : i.data[d + m], p = Math.floor(N * P + (1 - N) * t.data[c + m]);
              t.data[c + m] += p;
            }
          }
        break;
      default:
        throw new Error("Unknown blendOp");
    }
  }
  decodeImage() {
    var i;
    if (this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    const t = this._isAnimated ? ((i = this._frames) == null ? void 0 : i.at(0)).data : this._inflator.result;
    if (this._filterMethod !== Mu.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Ro.NO_INTERLACE)
      this._png.data = Eu({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === Ro.ADAM7)
      this._png.data = B1({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else
      throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
    this._hasPalette && (this._png.palette = this._palette), this._hasTransparency && (this._png.transparency = this._transparency);
  }
  pushDataToFrame() {
    const t = this._inflator.result, i = this._frames.at(-1);
    i ? i.data = t : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: Ps.NONE,
      blendOp: To.SOURCE,
      data: t
    }), this._inflator = new Iu(), this._writingDataChunks = !1;
  }
}
function Z1(r) {
  if (r !== 1 && r !== 2 && r !== 4 && r !== 8 && r !== 16)
    throw new Error(`invalid bit depth: ${r}`);
  return r;
}
var ju;
(function(r) {
  r[r.UNKNOWN = 0] = "UNKNOWN", r[r.METRE = 1] = "METRE";
})(ju || (ju = {}));
function Q1(r, e) {
  return new K1(r, e).decode();
}
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 4.0.0 Built on 2025-12-18T10:27:09.425Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2025 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2025 yWorks GmbH, http://www.yworks.com
 *               2015-2025 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */
var Jt = /* @__PURE__ */ (function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
})();
function Do() {
  Jt.console && typeof Jt.console.log == "function" && Jt.console.log.apply(Jt.console, arguments);
}
var Se = { log: Do, warn: function(r) {
  Jt.console && (typeof Jt.console.warn == "function" ? Jt.console.warn.apply(Jt.console, arguments) : Do.call(null, arguments));
}, error: function(r) {
  Jt.console && (typeof Jt.console.error == "function" ? Jt.console.error.apply(Jt.console, arguments) : Do(r));
} };
function qo(r, e, t) {
  var i = new XMLHttpRequest();
  i.open("GET", r), i.responseType = "blob", i.onload = function() {
    Si(i.response, e, t);
  }, i.onerror = function() {
    Se.error("could not download file");
  }, i.send();
}
function Bu(r) {
  var e = new XMLHttpRequest();
  e.open("HEAD", r, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Is(r) {
  try {
    r.dispatchEvent(new MouseEvent("click"));
  } catch {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), r.dispatchEvent(e);
  }
}
var Si = Jt.saveAs || ((typeof window > "u" ? "undefined" : Ae(window)) !== "object" || window !== Jt ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(r, e, t) {
  var i = Jt.URL || Jt.webkitURL, a = document.createElement("a");
  e = e || r.name || "download", a.download = e, a.rel = "noopener", typeof r == "string" ? (a.href = r, a.origin !== location.origin ? Bu(a.href) ? qo(r, e, t) : Is(a, a.target = "_blank") : Is(a)) : (a.href = i.createObjectURL(r), setTimeout(function() {
    i.revokeObjectURL(a.href);
  }, 4e4), setTimeout(function() {
    Is(a);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(r, e, t) {
  if (e = e || r.name || "download", typeof r == "string") if (Bu(r)) qo(r, e, t);
  else {
    var i = document.createElement("a");
    i.href = r, i.target = "_blank", setTimeout(function() {
      Is(i);
    });
  }
  else navigator.msSaveOrOpenBlob((function(a, s) {
    return s === void 0 ? s = { autoBom: !1 } : Ae(s) !== "object" && (Se.warn("Deprecated: Expected third argument to be a object"), s = { autoBom: !s }), s.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], { type: a.type }) : a;
  })(r, t), e);
} : function(r, e, t, i) {
  if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), typeof r == "string") return qo(r, e, t);
  var a = r.type === "application/octet-stream", s = /constructor/i.test(Jt.HTMLElement) || Jt.safari, f = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((f || a && s) && (typeof FileReader > "u" ? "undefined" : Ae(FileReader)) === "object") {
    var l = new FileReader();
    l.onloadend = function() {
      var m = l.result;
      m = f ? m : m.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = m : location = m, i = null;
    }, l.readAsDataURL(r);
  } else {
    var c = Jt.URL || Jt.webkitURL, d = c.createObjectURL(r);
    i ? i.location = d : location.href = d, i = null, setTimeout(function() {
      c.revokeObjectURL(d);
    }, 4e4);
  }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function qc(r) {
  var e;
  r = r || "", this.ok = !1, r.charAt(0) == "#" && (r = r.substr(1, 6)), r = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[r = (r = r.replace(/ /g, "")).toLowerCase()] || r;
  for (var t = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(l) {
    return [parseInt(l[1]), parseInt(l[2]), parseInt(l[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(l) {
    return [parseInt(l[1], 16), parseInt(l[2], 16), parseInt(l[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(l) {
    return [parseInt(l[1] + l[1], 16), parseInt(l[2] + l[2], 16), parseInt(l[3] + l[3], 16)];
  } }], i = 0; i < t.length; i++) {
    var a = t[i].re, s = t[i].process, f = a.exec(r);
    f && (e = s(f), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var l = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16);
    return l.length == 1 && (l = "0" + l), c.length == 1 && (c = "0" + c), d.length == 1 && (d = "0" + d), "#" + l + c + d;
  };
}
var Ms = Jt.atob.bind(Jt), Ru = Jt.btoa.bind(Jt);
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function Uo(r, e) {
  var t = r[0], i = r[1], a = r[2], s = r[3];
  t = pr(t, i, a, s, e[0], 7, -680876936), s = pr(s, t, i, a, e[1], 12, -389564586), a = pr(a, s, t, i, e[2], 17, 606105819), i = pr(i, a, s, t, e[3], 22, -1044525330), t = pr(t, i, a, s, e[4], 7, -176418897), s = pr(s, t, i, a, e[5], 12, 1200080426), a = pr(a, s, t, i, e[6], 17, -1473231341), i = pr(i, a, s, t, e[7], 22, -45705983), t = pr(t, i, a, s, e[8], 7, 1770035416), s = pr(s, t, i, a, e[9], 12, -1958414417), a = pr(a, s, t, i, e[10], 17, -42063), i = pr(i, a, s, t, e[11], 22, -1990404162), t = pr(t, i, a, s, e[12], 7, 1804603682), s = pr(s, t, i, a, e[13], 12, -40341101), a = pr(a, s, t, i, e[14], 17, -1502002290), t = gr(t, i = pr(i, a, s, t, e[15], 22, 1236535329), a, s, e[1], 5, -165796510), s = gr(s, t, i, a, e[6], 9, -1069501632), a = gr(a, s, t, i, e[11], 14, 643717713), i = gr(i, a, s, t, e[0], 20, -373897302), t = gr(t, i, a, s, e[5], 5, -701558691), s = gr(s, t, i, a, e[10], 9, 38016083), a = gr(a, s, t, i, e[15], 14, -660478335), i = gr(i, a, s, t, e[4], 20, -405537848), t = gr(t, i, a, s, e[9], 5, 568446438), s = gr(s, t, i, a, e[14], 9, -1019803690), a = gr(a, s, t, i, e[3], 14, -187363961), i = gr(i, a, s, t, e[8], 20, 1163531501), t = gr(t, i, a, s, e[13], 5, -1444681467), s = gr(s, t, i, a, e[2], 9, -51403784), a = gr(a, s, t, i, e[7], 14, 1735328473), t = mr(t, i = gr(i, a, s, t, e[12], 20, -1926607734), a, s, e[5], 4, -378558), s = mr(s, t, i, a, e[8], 11, -2022574463), a = mr(a, s, t, i, e[11], 16, 1839030562), i = mr(i, a, s, t, e[14], 23, -35309556), t = mr(t, i, a, s, e[1], 4, -1530992060), s = mr(s, t, i, a, e[4], 11, 1272893353), a = mr(a, s, t, i, e[7], 16, -155497632), i = mr(i, a, s, t, e[10], 23, -1094730640), t = mr(t, i, a, s, e[13], 4, 681279174), s = mr(s, t, i, a, e[0], 11, -358537222), a = mr(a, s, t, i, e[3], 16, -722521979), i = mr(i, a, s, t, e[6], 23, 76029189), t = mr(t, i, a, s, e[9], 4, -640364487), s = mr(s, t, i, a, e[12], 11, -421815835), a = mr(a, s, t, i, e[15], 16, 530742520), t = vr(t, i = mr(i, a, s, t, e[2], 23, -995338651), a, s, e[0], 6, -198630844), s = vr(s, t, i, a, e[7], 10, 1126891415), a = vr(a, s, t, i, e[14], 15, -1416354905), i = vr(i, a, s, t, e[5], 21, -57434055), t = vr(t, i, a, s, e[12], 6, 1700485571), s = vr(s, t, i, a, e[3], 10, -1894986606), a = vr(a, s, t, i, e[10], 15, -1051523), i = vr(i, a, s, t, e[1], 21, -2054922799), t = vr(t, i, a, s, e[8], 6, 1873313359), s = vr(s, t, i, a, e[15], 10, -30611744), a = vr(a, s, t, i, e[6], 15, -1560198380), i = vr(i, a, s, t, e[13], 21, 1309151649), t = vr(t, i, a, s, e[4], 6, -145523070), s = vr(s, t, i, a, e[11], 10, -1120210379), a = vr(a, s, t, i, e[2], 15, 718787259), i = vr(i, a, s, t, e[9], 21, -343485551), r[0] = ii(t, r[0]), r[1] = ii(i, r[1]), r[2] = ii(a, r[2]), r[3] = ii(s, r[3]);
}
function Ws(r, e, t, i, a, s) {
  return e = ii(ii(e, r), ii(i, s)), ii(e << a | e >>> 32 - a, t);
}
function pr(r, e, t, i, a, s, f) {
  return Ws(e & t | ~e & i, r, e, a, s, f);
}
function gr(r, e, t, i, a, s, f) {
  return Ws(e & i | t & ~i, r, e, a, s, f);
}
function mr(r, e, t, i, a, s, f) {
  return Ws(e ^ t ^ i, r, e, a, s, f);
}
function vr(r, e, t, i, a, s, f) {
  return Ws(t ^ (e | ~i), r, e, a, s, f);
}
function Uc(r) {
  var e, t = r.length, i = [1732584193, -271733879, -1732584194, 271733878];
  for (e = 64; e <= r.length; e += 64) Uo(i, t2(r.substring(e - 64, e)));
  r = r.substring(e - 64);
  var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (e = 0; e < r.length; e++) a[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
  if (a[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (Uo(i, a), e = 0; e < 16; e++) a[e] = 0;
  return a[14] = 8 * t, Uo(i, a), i;
}
function t2(r) {
  var e, t = [];
  for (e = 0; e < 64; e += 4) t[e >> 2] = r.charCodeAt(e) + (r.charCodeAt(e + 1) << 8) + (r.charCodeAt(e + 2) << 16) + (r.charCodeAt(e + 3) << 24);
  return t;
}
var Tu = "0123456789abcdef".split("");
function e2(r) {
  for (var e = "", t = 0; t < 4; t++) e += Tu[r >> 8 * t + 4 & 15] + Tu[r >> 8 * t & 15];
  return e;
}
function r2(r) {
  return String.fromCharCode(255 & r, (65280 & r) >> 8, (16711680 & r) >> 16, (4278190080 & r) >> 24);
}
function tl(r) {
  return Uc(r).map(r2).join("");
}
var n2 = (function(r) {
  for (var e = 0; e < r.length; e++) r[e] = e2(r[e]);
  return r.join("");
})(Uc("hello")) != "5d41402abc4b2a76b9719d911017c592";
function ii(r, e) {
  if (n2) {
    var t = (65535 & r) + (65535 & e);
    return (r >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
  }
  return r + e & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function el(r, e) {
  var t, i, a, s;
  if (r !== t) {
    for (var f = (a = r, s = 1 + (256 / r.length | 0), new Array(s + 1).join(a)), l = [], c = 0; c < 256; c++) l[c] = c;
    var d = 0;
    for (c = 0; c < 256; c++) {
      var m = l[c];
      d = (d + m + f.charCodeAt(c)) % 256, l[c] = l[d], l[d] = m;
    }
    t = r, i = l;
  } else l = i;
  var N = e.length, P = 0, p = 0, j = "";
  for (c = 0; c < N; c++) p = (p + (m = l[P = (P + 1) % 256])) % 256, l[P] = l[p], l[p] = m, f = l[(l[P] + l[p]) % 256], j += String.fromCharCode(e.charCodeAt(c) ^ f);
  return j;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var Du = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function $i(r, e, t, i) {
  this.v = 1, this.r = 2;
  var a = 192;
  r.forEach(function(l) {
    if (Du.perm !== void 0) throw new Error("Invalid permission: " + l);
    a += Du[l];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var s = (e + this.padding).substr(0, 32), f = (t + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(s, f), this.P = -(1 + (255 ^ a)), this.encryptionKey = tl(s + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(0, 5), this.U = el(this.encryptionKey, this.padding);
}
function Xi(r) {
  if (/[^\u0000-\u00ff]/.test(r)) throw new Error("Invalid PDF Name Object: " + r + ", Only accept ASCII characters.");
  for (var e = "", t = r.length, i = 0; i < t; i++) {
    var a = r.charCodeAt(i);
    e += a < 33 || a === 35 || a === 37 || a === 40 || a === 41 || a === 47 || a === 60 || a === 62 || a === 91 || a === 93 || a === 123 || a === 125 || a > 126 ? "#" + ("0" + a.toString(16)).slice(-2) : r[i];
  }
  return e;
}
function qu(r) {
  if (Ae(r) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var e = {};
  this.subscribe = function(t, i, a) {
    if (a = a || !1, typeof t != "string" || typeof i != "function" || typeof a != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    e.hasOwnProperty(t) || (e[t] = {});
    var s = Math.random().toString(35);
    return e[t][s] = [i, !!a], s;
  }, this.unsubscribe = function(t) {
    for (var i in e) if (e[i][t]) return delete e[i][t], Object.keys(e[i]).length === 0 && delete e[i], !0;
    return !1;
  }, this.publish = function(t) {
    if (e.hasOwnProperty(t)) {
      var i = Array.prototype.slice.call(arguments, 1), a = [];
      for (var s in e[t]) {
        var f = e[t][s];
        try {
          f[0].apply(r, i);
        } catch (l) {
          Jt.console && Se.error("jsPDF PubSub Error", l.message, l);
        }
        f[1] && a.push(s);
      }
      a.length && a.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return e;
  };
}
function Us(r) {
  if (!(this instanceof Us)) return new Us(r);
  var e = "opacity,stroke-opacity".split(",");
  for (var t in r) r.hasOwnProperty(t) && e.indexOf(t) >= 0 && (this[t] = r[t]);
  this.id = "", this.objectNumber = -1;
}
function zc(r, e) {
  this.gState = r, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function ki(r, e, t, i, a) {
  if (!(this instanceof ki)) return new ki(r, e, t, i, a);
  this.type = r === "axial" ? 2 : 3, this.coords = e, this.colors = t, zc.call(this, i, a);
}
function Ki(r, e, t, i, a) {
  if (!(this instanceof Ki)) return new Ki(r, e, t, i, a);
  this.boundingBox = r, this.xStep = e, this.yStep = t, this.stream = "", this.cloneIndex = 0, zc.call(this, i, a);
}
function Rt(r) {
  var e, t = typeof arguments[0] == "string" ? arguments[0] : "p", i = arguments[1], a = arguments[2], s = arguments[3], f = [], l = 1, c = 16, d = "S", m = null;
  Ae(r = r || {}) === "object" && (t = r.orientation, i = r.unit || i, a = r.format || a, s = r.compress || r.compressPdf || s, (m = r.encryption || null) !== null && (m.userPassword = m.userPassword || "", m.ownerPassword = m.ownerPassword || "", m.userPermissions = m.userPermissions || []), l = typeof r.userUnit == "number" ? Math.abs(r.userUnit) : 1, r.precision !== void 0 && (e = r.precision), r.floatPrecision !== void 0 && (c = r.floatPrecision), d = r.defaultPathOperation || "S"), f = r.filters || (s === !0 ? ["FlateEncode"] : f), i = i || "mm", t = ("" + (t || "P")).toLowerCase();
  var N = r.putOnlyUsedFonts || !1, P = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = qu;
  var j = "1.3", E = p.__private__.getPdfVersion = function() {
    return j;
  };
  p.__private__.setPdfVersion = function(u) {
    j = u;
  };
  var R = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return R;
  };
  var k = p.__private__.getPageFormat = function(u) {
    return R[u];
  };
  a = a || "a4";
  var V = "compat", Y = "advanced", U = V;
  function ot() {
    this.saveGraphicsState(), I(new Vt(ee, 0, 0, -ee, 0, pi() * ee).toString() + " cm"), this.setFontSize(this.getFontSize() / ee), d = "n", U = Y;
  }
  function vt() {
    this.restoreGraphicsState(), d = "S", U = V;
  }
  var ht = p.__private__.combineFontStyleAndFontWeight = function(u, v) {
    if (u == "bold" && v == "normal" || u == "bold" && v == 400 || u == "normal" && v == "italic" || u == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return v && (u = v == 400 || v === "normal" ? u === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || u !== "normal" ? (v == 700 ? "bold" : v) + "" + u : "bold"), u;
  };
  p.advancedAPI = function(u) {
    var v = U === V;
    return v && ot.call(this), typeof u != "function" || (u(this), v && vt.call(this)), this;
  }, p.compatAPI = function(u) {
    var v = U === Y;
    return v && vt.call(this), typeof u != "function" || (u(this), v && ot.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return U === Y;
  };
  var X, D = function(u) {
    if (U !== Y) throw new Error(u + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, H = p.roundToPrecision = p.__private__.roundToPrecision = function(u, v) {
    var O = e || v;
    if (isNaN(u) || isNaN(O)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return u.toFixed(O).replace(/0+$/, "");
  };
  X = p.hpf = p.__private__.hpf = typeof c == "number" ? function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return H(u, c);
  } : c === "smart" ? function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return H(u, u > -1 && u < 1 ? 16 : 5);
  } : function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return H(u, 16);
  };
  var w = p.f2 = p.__private__.f2 = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.f2");
    return H(u, 2);
  }, A = p.__private__.f3 = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.f3");
    return H(u, 3);
  }, B = p.scale = p.__private__.scale = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.scale");
    return U === V ? u * ee : U === Y ? u : void 0;
  }, q = function(u) {
    return B((function(v) {
      return U === V ? pi() - v : U === Y ? v : void 0;
    })(u));
  };
  p.__private__.setPrecision = p.setPrecision = function(u) {
    typeof parseInt(u, 10) == "number" && (e = parseInt(u, 10));
  };
  var et, it = "00000000000000000000000000000000", at = p.__private__.getFileId = function() {
    return it;
  }, K = p.__private__.setFileId = function(u) {
    return it = u !== void 0 && /^[a-fA-F0-9]{32}$/.test(u) ? u.toUpperCase() : it.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), m !== null && (Ke = new $i(m.userPermissions, m.userPassword, m.ownerPassword, it)), it;
  };
  p.setFileId = function(u) {
    return K(u), this;
  }, p.getFileId = function() {
    return at();
  };
  var st = p.__private__.convertDateToPDFDate = function(u) {
    var v = u.getTimezoneOffset(), O = v < 0 ? "+" : "-", z = Math.floor(Math.abs(v / 60)), Z = Math.abs(v % 60), pt = [O, T(z), "'", T(Z), "'"].join("");
    return ["D:", u.getFullYear(), T(u.getMonth() + 1), T(u.getDate()), T(u.getHours()), T(u.getMinutes()), T(u.getSeconds()), pt].join("");
  }, xt = p.__private__.convertPDFDateToDate = function(u) {
    var v = parseInt(u.substr(2, 4), 10), O = parseInt(u.substr(6, 2), 10) - 1, z = parseInt(u.substr(8, 2), 10), Z = parseInt(u.substr(10, 2), 10), pt = parseInt(u.substr(12, 2), 10), bt = parseInt(u.substr(14, 2), 10);
    return new Date(v, O, z, Z, pt, bt, 0);
  }, ft = p.__private__.setCreationDate = function(u) {
    var v;
    if (u === void 0 && (u = /* @__PURE__ */ new Date()), u instanceof Date) v = st(u);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(u)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      v = u;
    }
    return et = v;
  }, x = p.__private__.getCreationDate = function(u) {
    var v = et;
    return u === "jsDate" && (v = xt(et)), v;
  };
  p.setCreationDate = function(u) {
    return ft(u), this;
  }, p.getCreationDate = function(u) {
    return x(u);
  };
  var M, T = p.__private__.padd2 = function(u) {
    return ("0" + parseInt(u)).slice(-2);
  }, W = p.__private__.padd2Hex = function(u) {
    return ("00" + (u = u.toString())).substr(u.length);
  }, $ = 0, tt = [], lt = [], ut = 0, gt = [], At = [], kt = !1, St = lt;
  p.__private__.setCustomOutputDestination = function(u) {
    kt = !0, St = u;
  };
  var Dt = function(u) {
    kt || (St = u);
  };
  p.__private__.resetCustomOutputDestination = function() {
    kt = !1, St = lt;
  };
  var I = p.__private__.out = function(u) {
    return u = u.toString(), ut += u.length + 1, St.push(u), St;
  }, Lt = p.__private__.write = function(u) {
    return I(arguments.length === 1 ? u.toString() : Array.prototype.join.call(arguments, " "));
  }, ae = p.__private__.getArrayBuffer = function(u) {
    for (var v = u.length, O = new ArrayBuffer(v), z = new Uint8Array(O); v--; ) z[v] = u.charCodeAt(v);
    return O;
  }, Ht = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return Ht;
  };
  var yt = r.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(u) {
    return yt = U === Y ? u / ee : u, this;
  };
  var Wt, It = p.__private__.getFontSize = p.getFontSize = function() {
    return U === V ? yt : yt * ee;
  }, zt = r.R2L || !1;
  p.__private__.setR2L = p.setR2L = function(u) {
    return zt = u, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return zt;
  };
  var qt, ve = p.__private__.setZoomMode = function(u) {
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(u)) Wt = u;
    else if (isNaN(u)) {
      if ([void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(u) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + u + '" is not recognized.');
      Wt = u;
    } else Wt = parseInt(u, 10);
  };
  p.__private__.getZoomMode = function() {
    return Wt;
  };
  var ue, Zt = p.__private__.setPageMode = function(u) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(u) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + u + '" is not recognized.');
    qt = u;
  };
  p.__private__.getPageMode = function() {
    return qt;
  };
  var he = p.__private__.setLayoutMode = function(u) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(u) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + u + '" is not recognized.');
    ue = u;
  };
  p.__private__.getLayoutMode = function() {
    return ue;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(u, v, O) {
    return ve(u), he(v), Zt(O), this;
  };
  var ce = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(u) {
    if (Object.keys(ce).indexOf(u) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return ce[u];
  }, p.__private__.getDocumentProperties = function() {
    return ce;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(u) {
    for (var v in ce) ce.hasOwnProperty(v) && u[v] && (ce[v] = u[v]);
    return this;
  }, p.__private__.setDocumentProperty = function(u, v) {
    if (Object.keys(ce).indexOf(u) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return ce[u] = v;
  };
  var Mt, ee, Tt, qe, pe, se = {}, oe = {}, Ee = [], Ut = {}, ke = {}, Yt = {}, Qt = {}, Oe = null, le = 0, Gt = [], be = new qu(p), si = r.hotfixes || [], fr = {}, wn = {}, sn = [], Vt = function u(v, O, z, Z, pt, bt) {
    if (!(this instanceof u)) return new u(v, O, z, Z, pt, bt);
    isNaN(v) && (v = 1), isNaN(O) && (O = 0), isNaN(z) && (z = 0), isNaN(Z) && (Z = 1), isNaN(pt) && (pt = 0), isNaN(bt) && (bt = 0), this._matrix = [v, O, z, Z, pt, bt];
  };
  Object.defineProperty(Vt.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(u) {
    this._matrix[0] = u;
  } }), Object.defineProperty(Vt.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(u) {
    this._matrix[1] = u;
  } }), Object.defineProperty(Vt.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(u) {
    this._matrix[2] = u;
  } }), Object.defineProperty(Vt.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(u) {
    this._matrix[3] = u;
  } }), Object.defineProperty(Vt.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(u) {
    this._matrix[4] = u;
  } }), Object.defineProperty(Vt.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(u) {
    this._matrix[5] = u;
  } }), Object.defineProperty(Vt.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(u) {
    this._matrix[0] = u;
  } }), Object.defineProperty(Vt.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(u) {
    this._matrix[1] = u;
  } }), Object.defineProperty(Vt.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(u) {
    this._matrix[2] = u;
  } }), Object.defineProperty(Vt.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(u) {
    this._matrix[3] = u;
  } }), Object.defineProperty(Vt.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(u) {
    this._matrix[4] = u;
  } }), Object.defineProperty(Vt.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(u) {
    this._matrix[5] = u;
  } }), Object.defineProperty(Vt.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Vt.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Vt.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Vt.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Vt.prototype.join = function(u) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(X).join(u);
  }, Vt.prototype.multiply = function(u) {
    var v = u.sx * this.sx + u.shy * this.shx, O = u.sx * this.shy + u.shy * this.sy, z = u.shx * this.sx + u.sy * this.shx, Z = u.shx * this.shy + u.sy * this.sy, pt = u.tx * this.sx + u.ty * this.shx + this.tx, bt = u.tx * this.shy + u.ty * this.sy + this.ty;
    return new Vt(v, O, z, Z, pt, bt);
  }, Vt.prototype.decompose = function() {
    var u = this.sx, v = this.shy, O = this.shx, z = this.sy, Z = this.tx, pt = this.ty, bt = Math.sqrt(u * u + v * v), Ft = (u /= bt) * O + (v /= bt) * z;
    O -= u * Ft, z -= v * Ft;
    var jt = Math.sqrt(O * O + z * z);
    return Ft /= jt, u * (z /= jt) < v * (O /= jt) && (u = -u, v = -v, Ft = -Ft, bt = -bt), { scale: new Vt(bt, 0, 0, jt, 0, 0), translate: new Vt(1, 0, 0, 1, Z, pt), rotate: new Vt(u, v, -v, u, 0, 0), skew: new Vt(1, 0, Ft, 1, 0, 0) };
  }, Vt.prototype.toString = function(u) {
    return this.join(" ");
  }, Vt.prototype.inversed = function() {
    var u = this.sx, v = this.shy, O = this.shx, z = this.sy, Z = this.tx, pt = this.ty, bt = 1 / (u * z - v * O), Ft = z * bt, jt = -v * bt, $t = -O * bt, re = u * bt;
    return new Vt(Ft, jt, $t, re, -Ft * Z - $t * pt, -jt * Z - re * pt);
  }, Vt.prototype.applyToPoint = function(u) {
    var v = u.x * this.sx + u.y * this.shx + this.tx, O = u.x * this.shy + u.y * this.sy + this.ty;
    return new Sn(v, O);
  }, Vt.prototype.applyToRectangle = function(u) {
    var v = this.applyToPoint(u), O = this.applyToPoint(new Sn(u.x + u.w, u.y + u.h));
    return new fa(v.x, v.y, O.x - v.x, O.y - v.y);
  }, Vt.prototype.clone = function() {
    var u = this.sx, v = this.shy, O = this.shx, z = this.sy, Z = this.tx, pt = this.ty;
    return new Vt(u, v, O, z, Z, pt);
  }, p.Matrix = Vt;
  var yn = p.matrixMult = function(u, v) {
    return v.multiply(u);
  }, xn = new Vt(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = xn;
  var Rr = function(u, v) {
    if (!ke[u]) {
      var O = (v instanceof ki ? "Sh" : "P") + (Object.keys(Ut).length + 1).toString(10);
      v.id = O, ke[u] = O, Ut[O] = v, be.publish("addPattern", v);
    }
  };
  p.ShadingPattern = ki, p.TilingPattern = Ki, p.addShadingPattern = function(u, v) {
    return D("addShadingPattern()"), Rr(u, v), this;
  }, p.beginTilingPattern = function(u) {
    D("beginTilingPattern()"), da(u.boundingBox[0], u.boundingBox[1], u.boundingBox[2] - u.boundingBox[0], u.boundingBox[3] - u.boundingBox[1], u.matrix);
  }, p.endTilingPattern = function(u, v) {
    D("endTilingPattern()"), v.stream = At[M].join(`
`), Rr(u, v), be.publish("endTilingPattern", v), sn.pop().restore();
  };
  var Tr, Be = p.__private__.newObject = function() {
    var u = nr();
    return ar(u, !0), u;
  }, nr = p.__private__.newObjectDeferred = function() {
    return $++, tt[$] = function() {
      return ut;
    }, $;
  }, ar = function(u, v) {
    return v = typeof v == "boolean" && v, tt[u] = ut, v && I(u + " 0 obj"), u;
  }, oi = p.__private__.newAdditionalObject = function() {
    var u = { objId: nr(), content: "" };
    return gt.push(u), u;
  }, qn = nr(), Yr = nr(), on = p.__private__.decodeColorString = function(u) {
    var v = u.split(" ");
    if (v.length !== 2 || v[1] !== "g" && v[1] !== "G") v.length !== 5 || v[4] !== "k" && v[4] !== "K" || (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), "r"]);
    else {
      var O = parseFloat(v[0]);
      v = [O, O, O, "r"];
    }
    for (var z = "#", Z = 0; Z < 3; Z++) z += ("0" + Math.floor(255 * parseFloat(v[Z])).toString(16)).slice(-2);
    return z;
  }, Jr = p.__private__.encodeColorString = function(u) {
    var v;
    typeof u == "string" && (u = { ch1: u });
    var O = u.ch1, z = u.ch2, Z = u.ch3, pt = u.ch4, bt = u.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof O == "string" && O.charAt(0) !== "#") {
      var Ft = new qc(O);
      if (Ft.ok) O = Ft.toHex();
      else if (!/^\d*\.?\d*$/.test(O)) throw new Error('Invalid color "' + O + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof O == "string" && /^#[0-9A-Fa-f]{3}$/.test(O) && (O = "#" + O[1] + O[1] + O[2] + O[2] + O[3] + O[3]), typeof O == "string" && /^#[0-9A-Fa-f]{6}$/.test(O)) {
      var jt = parseInt(O.substr(1), 16);
      O = jt >> 16 & 255, z = jt >> 8 & 255, Z = 255 & jt;
    }
    if (z === void 0 || pt === void 0 && O === z && z === Z) v = typeof O == "string" ? O + " " + bt[0] : u.precision === 2 ? w(O / 255) + " " + bt[0] : A(O / 255) + " " + bt[0];
    else if (pt === void 0 || Ae(pt) === "object") {
      if (pt && !isNaN(pt.a) && pt.a === 0) return ["1.", "1.", "1.", bt[1]].join(" ");
      v = typeof O == "string" ? [O, z, Z, bt[1]].join(" ") : u.precision === 2 ? [w(O / 255), w(z / 255), w(Z / 255), bt[1]].join(" ") : [A(O / 255), A(z / 255), A(Z / 255), bt[1]].join(" ");
    } else v = typeof O == "string" ? [O, z, Z, pt, bt[2]].join(" ") : u.precision === 2 ? [w(O), w(z), w(Z), w(pt), bt[2]].join(" ") : [A(O), A(z), A(Z), A(pt), bt[2]].join(" ");
    return v;
  }, $r = p.__private__.getFilters = function() {
    return f;
  }, Dr = p.__private__.putStream = function(u) {
    var v = (u = u || {}).data || "", O = u.filters || $r(), z = u.alreadyAppliedFilters || [], Z = u.addLength1 || !1, pt = v.length, bt = u.objectId, Ft = function(Ze) {
      return Ze;
    };
    if (m !== null && bt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    m !== null && (Ft = Ke.encryptor(bt, 0));
    var jt = {};
    O === !0 && (O = ["FlateEncode"]);
    var $t = u.additionalKeyValues || [], re = (jt = Rt.API.processDataByFilters !== void 0 ? Rt.API.processDataByFilters(v, O) : { data: v, reverseChain: [] }).reverseChain + (Array.isArray(z) ? z.join(" ") : z.toString());
    if (jt.data.length !== 0 && ($t.push({ key: "Length", value: jt.data.length }), Z === !0 && $t.push({ key: "Length1", value: pt })), re.length != 0) if (re.split("/").length - 1 == 1) $t.push({ key: "Filter", value: re });
    else {
      $t.push({ key: "Filter", value: "[" + re + "]" });
      for (var ge = 0; ge < $t.length; ge += 1) if ($t[ge].key === "DecodeParms") {
        for (var je = [], $e = 0; $e < jt.reverseChain.split("/").length - 1; $e += 1) je.push("null");
        je.push($t[ge].value), $t[ge].value = "[" + je.join(" ") + "]";
      }
    }
    I("<<");
    for (var Pe = 0; Pe < $t.length; Pe++) I("/" + $t[Pe].key + " " + $t[Pe].value);
    I(">>"), jt.data.length !== 0 && (I("stream"), I(Ft(jt.data)), I("endstream"));
  }, li = p.__private__.putPage = function(u) {
    var v = u.number, O = u.data, z = u.objId, Z = u.contentsObjId;
    ar(z, !0), I("<</Type /Page"), I("/Parent " + u.rootDictionaryObjId + " 0 R"), I("/Resources " + u.resourceDictionaryObjId + " 0 R"), I("/MediaBox [" + parseFloat(X(u.mediaBox.bottomLeftX)) + " " + parseFloat(X(u.mediaBox.bottomLeftY)) + " " + X(u.mediaBox.topRightX) + " " + X(u.mediaBox.topRightY) + "]"), u.cropBox !== null && I("/CropBox [" + X(u.cropBox.bottomLeftX) + " " + X(u.cropBox.bottomLeftY) + " " + X(u.cropBox.topRightX) + " " + X(u.cropBox.topRightY) + "]"), u.bleedBox !== null && I("/BleedBox [" + X(u.bleedBox.bottomLeftX) + " " + X(u.bleedBox.bottomLeftY) + " " + X(u.bleedBox.topRightX) + " " + X(u.bleedBox.topRightY) + "]"), u.trimBox !== null && I("/TrimBox [" + X(u.trimBox.bottomLeftX) + " " + X(u.trimBox.bottomLeftY) + " " + X(u.trimBox.topRightX) + " " + X(u.trimBox.topRightY) + "]"), u.artBox !== null && I("/ArtBox [" + X(u.artBox.bottomLeftX) + " " + X(u.artBox.bottomLeftY) + " " + X(u.artBox.topRightX) + " " + X(u.artBox.topRightY) + "]"), typeof u.userUnit == "number" && u.userUnit !== 1 && I("/UserUnit " + u.userUnit), be.publish("putPage", { objId: z, pageContext: Gt[v], pageNumber: v, page: O }), I("/Contents " + Z + " 0 R"), I(">>"), I("endobj");
    var pt = O.join(`
`);
    return U === Y && (pt += `
Q`), ar(Z, !0), Dr({ data: pt, filters: $r(), objectId: Z }), I("endobj"), z;
  }, ln = p.__private__.putPages = function() {
    var u, v, O = [];
    for (u = 1; u <= le; u++) Gt[u].objId = nr(), Gt[u].contentsObjId = nr();
    for (u = 1; u <= le; u++) O.push(li({ number: u, data: At[u], objId: Gt[u].objId, contentsObjId: Gt[u].contentsObjId, mediaBox: Gt[u].mediaBox, cropBox: Gt[u].cropBox, bleedBox: Gt[u].bleedBox, trimBox: Gt[u].trimBox, artBox: Gt[u].artBox, userUnit: Gt[u].userUnit, rootDictionaryObjId: qn, resourceDictionaryObjId: Yr }));
    ar(qn, !0), I("<</Type /Pages");
    var z = "/Kids [";
    for (v = 0; v < le; v++) z += O[v] + " 0 R ";
    I(z + "]"), I("/Count " + le), I(">>"), I("endobj"), be.publish("postPutPages");
  }, ui = function(u) {
    be.publish("putFont", { font: u, out: I, newObject: Be, putStream: Dr }), u.isAlreadyPutted !== !0 && (u.objectNumber = Be(), I("<<"), I("/Type /Font"), I("/BaseFont /" + Xi(u.postScriptName)), I("/Subtype /Type1"), typeof u.encoding == "string" && I("/Encoding /" + u.encoding), I("/FirstChar 32"), I("/LastChar 255"), I(">>"), I("endobj"));
  }, Oi = function(u) {
    u.objectNumber = Be();
    var v = [];
    v.push({ key: "Type", value: "/XObject" }), v.push({ key: "Subtype", value: "/Form" }), v.push({ key: "BBox", value: "[" + [X(u.x), X(u.y), X(u.x + u.width), X(u.y + u.height)].join(" ") + "]" }), v.push({ key: "Matrix", value: "[" + u.matrix.toString() + "]" });
    var O = u.pages[1].join(`
`);
    Dr({ data: O, additionalKeyValues: v, objectId: u.objectNumber }), I("endobj");
  }, Mi = function(u, v) {
    v || (v = 21);
    var O = Be(), z = (function(bt, Ft) {
      var jt, $t = [], re = 1 / (Ft - 1);
      for (jt = 0; jt < 1; jt += re) $t.push(jt);
      if ($t.push(1), bt[0].offset != 0) {
        var ge = { offset: 0, color: bt[0].color };
        bt.unshift(ge);
      }
      if (bt[bt.length - 1].offset != 1) {
        var je = { offset: 1, color: bt[bt.length - 1].color };
        bt.push(je);
      }
      for (var $e = "", Pe = 0, Ze = 0; Ze < $t.length; Ze++) {
        for (jt = $t[Ze]; jt > bt[Pe + 1].offset; ) Pe++;
        var Xe = bt[Pe].offset, sr = (jt - Xe) / (bt[Pe + 1].offset - Xe), In = bt[Pe].color, Kr = bt[Pe + 1].color;
        $e += W(Math.round((1 - sr) * In[0] + sr * Kr[0]).toString(16)) + W(Math.round((1 - sr) * In[1] + sr * Kr[1]).toString(16)) + W(Math.round((1 - sr) * In[2] + sr * Kr[2]).toString(16));
      }
      return $e.trim();
    })(u.colors, v), Z = [];
    Z.push({ key: "FunctionType", value: "0" }), Z.push({ key: "Domain", value: "[0.0 1.0]" }), Z.push({ key: "Size", value: "[" + v + "]" }), Z.push({ key: "BitsPerSample", value: "8" }), Z.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), Z.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), Dr({ data: z, additionalKeyValues: Z, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: O }), I("endobj"), u.objectNumber = Be(), I("<< /ShadingType " + u.type), I("/ColorSpace /DeviceRGB");
    var pt = "/Coords [" + X(parseFloat(u.coords[0])) + " " + X(parseFloat(u.coords[1])) + " ";
    u.type === 2 ? pt += X(parseFloat(u.coords[2])) + " " + X(parseFloat(u.coords[3])) : pt += X(parseFloat(u.coords[2])) + " " + X(parseFloat(u.coords[3])) + " " + X(parseFloat(u.coords[4])) + " " + X(parseFloat(u.coords[5])), I(pt += "]"), u.matrix && I("/Matrix [" + u.matrix.toString() + "]"), I("/Function " + O + " 0 R"), I("/Extend [true true]"), I(">>"), I("endobj");
  }, ji = function(u, v) {
    var O = nr(), z = Be();
    v.push({ resourcesOid: O, objectOid: z }), u.objectNumber = z;
    var Z = [];
    Z.push({ key: "Type", value: "/Pattern" }), Z.push({ key: "PatternType", value: "1" }), Z.push({ key: "PaintType", value: "1" }), Z.push({ key: "TilingType", value: "1" }), Z.push({ key: "BBox", value: "[" + u.boundingBox.map(X).join(" ") + "]" }), Z.push({ key: "XStep", value: X(u.xStep) }), Z.push({ key: "YStep", value: X(u.yStep) }), Z.push({ key: "Resources", value: O + " 0 R" }), u.matrix && Z.push({ key: "Matrix", value: "[" + u.matrix.toString() + "]" }), Dr({ data: u.stream, additionalKeyValues: Z, objectId: u.objectNumber }), I("endobj");
  }, Gs = function(u) {
    for (var v in u.objectNumber = Be(), I("<<"), u) switch (v) {
      case "opacity":
        I("/ca " + w(u[v]));
        break;
      case "stroke-opacity":
        I("/CA " + w(u[v]));
    }
    I(">>"), I("endobj");
  }, ia = function(u) {
    ar(u.resourcesOid, !0), I("<<"), I("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), (function() {
      for (var v in I("/Font <<"), se) se.hasOwnProperty(v) && (N === !1 || N === !0 && P.hasOwnProperty(v)) && I("/" + v + " " + se[v].objectNumber + " 0 R");
      I(">>");
    })(), (function() {
      if (Object.keys(Ut).length > 0) {
        for (var v in I("/Shading <<"), Ut) Ut.hasOwnProperty(v) && Ut[v] instanceof ki && Ut[v].objectNumber >= 0 && I("/" + v + " " + Ut[v].objectNumber + " 0 R");
        be.publish("putShadingPatternDict"), I(">>");
      }
    })(), (function(v) {
      if (Object.keys(Ut).length > 0) {
        for (var O in I("/Pattern <<"), Ut) Ut.hasOwnProperty(O) && Ut[O] instanceof p.TilingPattern && Ut[O].objectNumber >= 0 && Ut[O].objectNumber < v && I("/" + O + " " + Ut[O].objectNumber + " 0 R");
        be.publish("putTilingPatternDict"), I(">>");
      }
    })(u.objectOid), (function() {
      if (Object.keys(Yt).length > 0) {
        var v;
        for (v in I("/ExtGState <<"), Yt) Yt.hasOwnProperty(v) && Yt[v].objectNumber >= 0 && I("/" + v + " " + Yt[v].objectNumber + " 0 R");
        be.publish("putGStateDict"), I(">>");
      }
    })(), (function() {
      for (var v in I("/XObject <<"), fr) fr.hasOwnProperty(v) && fr[v].objectNumber >= 0 && I("/" + v + " " + fr[v].objectNumber + " 0 R");
      be.publish("putXobjectDict"), I(">>");
    })(), I(">>"), I("endobj");
  }, za = function(u) {
    oe[u.fontName] = oe[u.fontName] || {}, oe[u.fontName][u.fontStyle] = u.id;
  }, Ha = function(u, v, O, z, Z) {
    var pt = { id: "F" + (Object.keys(se).length + 1).toString(10), postScriptName: u, fontName: v, fontStyle: O, encoding: z, isStandardFont: Z || !1, metadata: {} };
    return be.publish("addFont", { font: pt, instance: this }), se[pt.id] = pt, za(pt), pt.id;
  }, qr = p.__private__.pdfEscape = p.pdfEscape = function(u, v) {
    return (function(O, z) {
      var Z, pt, bt, Ft, jt, $t, re, ge, je;
      if (bt = (z = z || {}).sourceEncoding || "Unicode", jt = z.outputEncoding, (z.autoencode || jt) && se[Mt].metadata && se[Mt].metadata[bt] && se[Mt].metadata[bt].encoding && (Ft = se[Mt].metadata[bt].encoding, !jt && se[Mt].encoding && (jt = se[Mt].encoding), !jt && Ft.codePages && (jt = Ft.codePages[0]), typeof jt == "string" && (jt = Ft[jt]), jt)) {
        for (re = !1, $t = [], Z = 0, pt = O.length; Z < pt; Z++) (ge = jt[O.charCodeAt(Z)]) ? $t.push(String.fromCharCode(ge)) : $t.push(O[Z]), $t[Z].charCodeAt(0) >> 8 && (re = !0);
        O = $t.join("");
      }
      for (Z = O.length; re === void 0 && Z !== 0; ) O.charCodeAt(Z - 1) >> 8 && (re = !0), Z--;
      if (!re) return O;
      for ($t = z.noBOM ? [] : [254, 255], Z = 0, pt = O.length; Z < pt; Z++) {
        if ((je = (ge = O.charCodeAt(Z)) >> 8) >> 8) throw new Error("Character at position " + Z + " of string '" + O + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
        $t.push(je), $t.push(ge - (je << 8));
      }
      return String.fromCharCode.apply(void 0, $t);
    })(u, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, aa = p.__private__.beginPage = function(u) {
    At[++le] = [], Gt[le] = { objId: 0, contentsObjId: 0, userUnit: Number(l), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(u[0]), topRightY: Number(u[1]) } }, Ga(le), Dt(At[M]);
  }, Wa = function(u, v) {
    var O, z, Z;
    switch (t = v || t, typeof u == "string" && (O = k(u.toLowerCase()), Array.isArray(O) && (z = O[0], Z = O[1])), Array.isArray(u) && (z = u[0] * ee, Z = u[1] * ee), isNaN(z) && (z = a[0], Z = a[1]), (z > 14400 || Z > 14400) && (Se.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), z = Math.min(14400, z), Z = Math.min(14400, Z)), a = [z, Z], t.substr(0, 1)) {
      case "l":
        Z > z && (a = [Z, z]);
        break;
      case "p":
        z > Z && (a = [Z, z]);
    }
    aa(a), Xt(la), I(Di), ca !== 0 && I(ca + " J"), ha !== 0 && I(ha + " j"), be.publish("addPage", { pageNumber: le });
  }, sa = function(u) {
    u > 0 && u <= le && (At.splice(u, 1), Gt.splice(u, 1), le--, M > le && (M = le), this.setPage(M));
  }, Ga = function(u) {
    u > 0 && u <= le && (M = u);
  }, Va = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return At.length - 1;
  }, Ya = function(u, v, O) {
    var z, Z = void 0;
    return O = O || {}, u = u !== void 0 ? u : se[Mt].fontName, v = v !== void 0 ? v : se[Mt].fontStyle, z = u.toLowerCase(), oe[z] !== void 0 && oe[z][v] !== void 0 ? Z = oe[z][v] : oe[u] !== void 0 && oe[u][v] !== void 0 ? Z = oe[u][v] : O.disableWarning === !1 && Se.warn("Unable to look up font label for font '" + u + "', '" + v + "'. Refer to getFontList() for available fonts."), Z || O.noFallback || (Z = oe.times[v]) == null && (Z = oe.times.normal), Z;
  }, un = p.__private__.putInfo = function() {
    var u = Be(), v = function(z) {
      return z;
    };
    for (var O in m !== null && (v = Ke.encryptor(u, 0)), I("<<"), I("/Producer (" + qr(v("jsPDF " + Rt.version)) + ")"), ce) ce.hasOwnProperty(O) && ce[O] && I("/" + O.substr(0, 1).toUpperCase() + O.substr(1) + " (" + qr(v(ce[O])) + ")");
    I("/CreationDate (" + qr(v(et)) + ")"), I(">>"), I("endobj");
  }, Bi = p.__private__.putCatalog = function(u) {
    var v = (u = u || {}).rootDictionaryObjId || qn;
    switch (Be(), I("<<"), I("/Type /Catalog"), I("/Pages " + v + " 0 R"), Wt || (Wt = "fullwidth"), Wt) {
      case "fullwidth":
        I("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        I("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        I("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        I("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var O = "" + Wt;
        O.substr(O.length - 1) === "%" && (Wt = parseInt(Wt) / 100), typeof Wt == "number" && I("/OpenAction [3 0 R /XYZ null null " + w(Wt) + "]");
    }
    switch (ue || (ue = "continuous"), ue) {
      case "continuous":
        I("/PageLayout /OneColumn");
        break;
      case "single":
        I("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        I("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        I("/PageLayout /TwoColumnRight");
    }
    qt && I("/PageMode /" + qt), be.publish("putCatalog"), I(">>"), I("endobj");
  }, Vs = p.__private__.putTrailer = function() {
    I("trailer"), I("<<"), I("/Size " + ($ + 1)), I("/Root " + $ + " 0 R"), I("/Info " + ($ - 1) + " 0 R"), m !== null && I("/Encrypt " + Ke.oid + " 0 R"), I("/ID [ <" + it + "> <" + it + "> ]"), I(">>");
  }, Je = p.__private__.putHeader = function() {
    I("%PDF-" + j), I("%ºß¬à");
  }, Ja = p.__private__.putXRef = function() {
    var u = "0000000000";
    I("xref"), I("0 " + ($ + 1)), I("0000000000 65535 f ");
    for (var v = 1; v <= $; v++) typeof tt[v] == "function" ? I((u + tt[v]()).slice(-10) + " 00000 n ") : tt[v] !== void 0 ? I((u + tt[v]).slice(-10) + " 00000 n ") : I("0000000000 00000 n ");
  }, cn = p.__private__.buildDocument = function() {
    var u;
    $ = 0, ut = 0, lt = [], tt = [], gt = [], qn = nr(), Yr = nr(), Dt(lt), be.publish("buildDocument"), Je(), ln(), (function() {
      be.publish("putAdditionalObjects");
      for (var O = 0; O < gt.length; O++) {
        var z = gt[O];
        ar(z.objId, !0), I(z.content), I("endobj");
      }
      be.publish("postPutAdditionalObjects");
    })(), u = [], (function() {
      for (var O in se) se.hasOwnProperty(O) && (N === !1 || N === !0 && P.hasOwnProperty(O)) && ui(se[O]);
    })(), (function() {
      var O;
      for (O in Yt) Yt.hasOwnProperty(O) && Gs(Yt[O]);
    })(), (function() {
      for (var O in fr) fr.hasOwnProperty(O) && Oi(fr[O]);
    })(), (function(O) {
      var z;
      for (z in Ut) Ut.hasOwnProperty(z) && (Ut[z] instanceof ki ? Mi(Ut[z]) : Ut[z] instanceof Ki && ji(Ut[z], O));
    })(u), be.publish("putResources"), u.forEach(ia), ia({ resourcesOid: Yr, objectOid: Number.MAX_SAFE_INTEGER }), be.publish("postPutResources"), m !== null && (Ke.oid = Be(), I("<<"), I("/Filter /Standard"), I("/V " + Ke.v), I("/R " + Ke.r), I("/U <" + Ke.toHexString(Ke.U) + ">"), I("/O <" + Ke.toHexString(Ke.O) + ">"), I("/P " + Ke.P), I(">>"), I("endobj")), un(), Bi();
    var v = ut;
    return Ja(), Vs(), I("startxref"), I("" + v), I("%%EOF"), Dt(At[M]), lt.join(`
`);
  }, Ri = p.__private__.getBlob = function(u) {
    return new Blob([ae(u)], { type: "application/pdf" });
  }, $a = p.output = p.__private__.output = (Tr = function(u, v) {
    switch (typeof (v = v || {}) == "string" ? v = { filename: v } : v.filename = v.filename || "generated.pdf", u) {
      case void 0:
        return cn();
      case "save":
        p.save(v.filename);
        break;
      case "arraybuffer":
        return ae(cn());
      case "blob":
        return Ri(cn());
      case "bloburi":
      case "bloburl":
        if (Jt.URL !== void 0 && typeof Jt.URL.createObjectURL == "function") return Jt.URL && Jt.URL.createObjectURL(Ri(cn())) || void 0;
        Se.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var O = "", z = cn();
        try {
          O = Ru(z);
        } catch {
          O = Ru(unescape(encodeURIComponent(z)));
        }
        return "data:application/pdf;filename=" + v.filename + ";base64," + O;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Jt) === "[object Window]") {
          var Z = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", pt = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          v.pdfObjectUrl && (Z = v.pdfObjectUrl, pt = "");
          var bt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + Z + '"' + pt + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(v) + ");<\/script></body></html>", Ft = Jt.open();
          return Ft !== null && Ft.document.write(bt), Ft;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Jt) === "[object Window]") {
          var jt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (v.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + v.filename + '" width="500px" height="400px" /></body></html>', $t = Jt.open();
          if ($t !== null) {
            $t.document.write(jt);
            var re = this;
            $t.document.documentElement.querySelector("#pdfViewer").onload = function() {
              $t.document.title = v.filename, $t.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(re.output("bloburl"));
            };
          }
          return $t;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Jt) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var ge = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", v) + '"></iframe></body></html>', je = Jt.open();
        if (je !== null && (je.document.write(ge), je.document.title = v.filename), je || typeof safari > "u") return je;
        break;
      case "datauri":
      case "dataurl":
        return Jt.document.location.href = this.output("datauristring", v);
      default:
        return null;
    }
  }, Tr.foo = function() {
    try {
      return Tr.apply(this, arguments);
    } catch (O) {
      var u = O.stack || "";
      ~u.indexOf(" at ") && (u = u.split(" at ")[1]);
      var v = "Error in function " + u.split(`
`)[0].split("<")[0] + ": " + O.message;
      if (!Jt.console) throw new Error(v);
      Jt.console.error(v, O), Jt.alert && alert(v);
    }
  }, Tr.foo.bar = Tr, Tr.foo), Ur = function(u) {
    return Array.isArray(si) === !0 && si.indexOf(u) > -1;
  };
  switch (i) {
    case "pt":
      ee = 1;
      break;
    case "mm":
      ee = 72 / 25.4;
      break;
    case "cm":
      ee = 72 / 2.54;
      break;
    case "in":
      ee = 72;
      break;
    case "px":
      ee = Ur("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      ee = 12;
      break;
    case "ex":
      ee = 6;
      break;
    default:
      if (typeof i != "number") throw new Error("Invalid unit: " + i);
      ee = i;
  }
  var Ke = null;
  ft(), K();
  var _n = p.__private__.getPageInfo = p.getPageInfo = function(u) {
    if (isNaN(u) || u % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Gt[u].objId, pageNumber: u, pageContext: Gt[u] };
  }, Xa = p.__private__.getPageInfoByObjId = function(u) {
    if (isNaN(u) || u % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var v in Gt) if (Gt[v].objId === u) break;
    return _n(v);
  }, Ys = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: Gt[M].objId, pageNumber: M, pageContext: Gt[M] };
  };
  p.addPage = function() {
    return Wa.apply(this, arguments), this;
  }, p.setPage = function() {
    return Ga.apply(this, arguments), Dt.call(this, At[M]), this;
  }, p.insertPage = function(u) {
    return this.addPage(), this.movePage(M, u), this;
  }, p.movePage = function(u, v) {
    var O, z;
    if (u > v) {
      O = At[u], z = Gt[u];
      for (var Z = u; Z > v; Z--) At[Z] = At[Z - 1], Gt[Z] = Gt[Z - 1];
      At[v] = O, Gt[v] = z, this.setPage(v);
    } else if (u < v) {
      O = At[u], z = Gt[u];
      for (var pt = u; pt < v; pt++) At[pt] = At[pt + 1], Gt[pt] = Gt[pt + 1];
      At[v] = O, Gt[v] = z, this.setPage(v);
    }
    return this;
  }, p.deletePage = function() {
    return sa.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(u, v, O, z, Z) {
    var pt, bt, Ft, jt, $t, re, ge, je, $e, Pe = (z = z || {}).scope || this;
    if (typeof u == "number" && typeof v == "number" && (typeof O == "string" || Array.isArray(O))) {
      var Ze = O;
      O = v, v = u, u = Ze;
    }
    if (arguments[3] instanceof Vt == 0 ? (Ft = arguments[4], jt = arguments[5], Ae(ge = arguments[3]) === "object" && ge !== null || (typeof Ft == "string" && (jt = Ft, Ft = null), typeof ge == "string" && (jt = ge, ge = null), typeof ge == "number" && (Ft = ge, ge = null), z = { flags: ge, angle: Ft, align: jt })) : (D("The transform parameter of text() with a Matrix value"), $e = Z), isNaN(v) || isNaN(O) || u == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (u.length === 0) return Pe;
    var Xe, sr = "", In = typeof z.lineHeightFactor == "number" ? z.lineHeightFactor : hi, Kr = Pe.internal.scaleFactor;
    function Cn(we) {
      return we = we.split("	").join(Array(z.TabLen || 9).join(" ")), qr(we, ge);
    }
    function ga(we) {
      for (var Ne, ze = we.concat(), Qe = [], On = ze.length; On--; ) typeof (Ne = ze.shift()) == "string" ? Qe.push(Ne) : Array.isArray(we) && (Ne.length === 1 || Ne[1] === void 0 && Ne[2] === void 0) ? Qe.push(Ne[0]) : Qe.push([Ne[0], Ne[1], Ne[2]]);
      return Qe;
    }
    function Ui(we, Ne) {
      var ze;
      if (typeof we == "string") ze = Ne(we)[0];
      else if (Array.isArray(we)) {
        for (var Qe, On, La = we.concat(), Wi = [], os = La.length; os--; ) typeof (Qe = La.shift()) == "string" ? Wi.push(Ne(Qe)[0]) : Array.isArray(Qe) && typeof Qe[0] == "string" && (On = Ne(Qe[0], Qe[1], Qe[2]), Wi.push([On[0], On[1], On[2]]));
        ze = Wi;
      }
      return ze;
    }
    var Un = !1, gi = !0;
    if (typeof u == "string") Un = !0;
    else if (Array.isArray(u)) {
      var mi = u.concat();
      bt = [];
      for (var zn, or = mi.length; or--; ) (typeof (zn = mi.shift()) != "string" || Array.isArray(zn) && typeof zn[0] != "string") && (gi = !1);
      Un = gi;
    }
    if (Un === !1) throw new Error('Type of text must be string or Array. "' + u + '" is not recognized.');
    typeof u == "string" && (u = u.match(/[\r?\n]/) ? u.split(/\r\n|\r|\n/g) : [u]);
    var vi = yt / Pe.internal.scaleFactor, bi = vi * (In - 1);
    switch (z.baseline) {
      case "bottom":
        O -= bi;
        break;
      case "top":
        O += vi - bi;
        break;
      case "hanging":
        O += vi - 2 * bi;
        break;
      case "middle":
        O += vi / 2 - bi;
    }
    if ((re = z.maxWidth || 0) > 0 && (typeof u == "string" ? u = Pe.splitTextToSize(u, re) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function(we, Ne) {
      return we.concat(Pe.splitTextToSize(Ne, re));
    }, []))), pt = { text: u, x: v, y: O, options: z, mutex: { pdfEscape: qr, activeFontKey: Mt, fonts: se, activeFontSize: yt } }, be.publish("preProcessText", pt), u = pt.text, Ft = (z = pt.options).angle, $e instanceof Vt == 0 && Ft && typeof Ft == "number") {
      Ft *= Math.PI / 180, z.rotationDirection === 0 && (Ft = -Ft), U === Y && (Ft = -Ft);
      var ma = Math.cos(Ft), va = Math.sin(Ft);
      $e = new Vt(ma, va, -va, ma, 0, 0);
    } else Ft && Ft instanceof Vt && ($e = Ft);
    U !== Y || $e || ($e = xn), ($t = z.charSpace || Ln) !== void 0 && (sr += X(B($t)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (je = z.horizontalScale) !== void 0 && (sr += X(100 * je) + ` Tz
`), z.lang;
    var br = -1, Fn = z.renderingMode !== void 0 ? z.renderingMode : z.stroke, zi = Pe.internal.getCurrentPageInfo().pageContext;
    switch (Fn) {
      case 0:
      case !1:
      case "fill":
        br = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        br = 1;
        break;
      case 2:
      case "fillThenStroke":
        br = 2;
        break;
      case 3:
      case "invisible":
        br = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        br = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        br = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        br = 6;
        break;
      case 7:
      case "addToPathForClipping":
        br = 7;
    }
    var as = zi.usedRenderingMode !== void 0 ? zi.usedRenderingMode : -1;
    br !== -1 ? sr += br + ` Tr
` : as !== -1 && (sr += `0 Tr
`), br !== -1 && (zi.usedRenderingMode = br), jt = z.align || "left";
    var zr, wi = yt * In, ba = Pe.internal.pageSize.getWidth(), wa = se[Mt];
    $t = z.charSpace || Ln, re = z.maxWidth || 0, ge = Object.assign({ autoencode: !0, noBOM: !0 }, z.flags);
    var Hn = [], yi = function(we) {
      return Pe.getStringUnitWidth(we, { font: wa, charSpace: $t, fontSize: yt, doKerning: !1 }) * yt / Kr;
    };
    if (Object.prototype.toString.call(u) === "[object Array]") {
      var Lr;
      bt = ga(u), jt !== "left" && (zr = bt.map(yi));
      var Sr, Wn = 0;
      if (jt === "right") {
        v -= zr[0], u = [], or = bt.length;
        for (var En = 0; En < or; En++) En === 0 ? (Sr = An(v), Lr = Nn(O)) : (Sr = B(Wn - zr[En]), Lr = -wi), u.push([bt[En], Sr, Lr]), Wn = zr[En];
      } else if (jt === "center") {
        v -= zr[0] / 2, u = [], or = bt.length;
        for (var Gn = 0; Gn < or; Gn++) Gn === 0 ? (Sr = An(v), Lr = Nn(O)) : (Sr = B((Wn - zr[Gn]) / 2), Lr = -wi), u.push([bt[Gn], Sr, Lr]), Wn = zr[Gn];
      } else if (jt === "left") {
        u = [], or = bt.length;
        for (var ya = 0; ya < or; ya++) u.push(bt[ya]);
      } else if (jt === "justify" && wa.encoding === "Identity-H") {
        u = [], or = bt.length, re = re !== 0 ? re : ba;
        for (var Hi = 0, Ue = 0; Ue < or; Ue++) if (Lr = Ue === 0 ? Nn(O) : -wi, Sr = Ue === 0 ? An(v) : Hi, Ue < or - 1) {
          var ss = B((re - zr[Ue]) / (bt[Ue].split(" ").length - 1)), fn = bt[Ue].split(" ");
          u.push([fn[0] + " ", Sr, Lr]), Hi = 0;
          for (var dn = 1; dn < fn.length; dn++) {
            var xa = (yi(fn[dn - 1] + " " + fn[dn]) - yi(fn[dn])) * Kr + ss;
            dn == fn.length - 1 ? u.push([fn[dn], xa, 0]) : u.push([fn[dn] + " ", xa, 0]), Hi -= xa;
          }
        } else u.push([bt[Ue], Sr, Lr]);
        u.push(["", Hi, 0]);
      } else {
        if (jt !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (u = [], or = bt.length, re = re !== 0 ? re : ba, Ue = 0; Ue < or; Ue++) {
          Lr = Ue === 0 ? Nn(O) : -wi, Sr = Ue === 0 ? An(v) : 0;
          var _a = bt[Ue].split(" ").length - 1, Aa = _a > 0 ? (re - zr[Ue]) / _a : 0;
          Ue < or - 1 ? Hn.push(X(B(Aa))) : Hn.push(0), u.push([bt[Ue], Sr, Lr]);
        }
      }
    }
    (typeof z.R2L == "boolean" ? z.R2L : zt) === !0 && (u = Ui(u, function(we, Ne, ze) {
      return [we.split("").reverse().join(""), Ne, ze];
    })), pt = { text: u, x: v, y: O, options: z, mutex: { pdfEscape: qr, activeFontKey: Mt, fonts: se, activeFontSize: yt } }, be.publish("postProcessText", pt), u = pt.text, Xe = pt.mutex.isHex || !1;
    var Na = se[Mt].encoding;
    Na !== "WinAnsiEncoding" && Na !== "StandardEncoding" || (u = Ui(u, function(we, Ne, ze) {
      return [Cn(we), Ne, ze];
    })), bt = ga(u), u = [];
    for (var Vn, Yn, Jn, xi = Array.isArray(bt[0]) ? 1 : 0, $n = "", _i = function(we, Ne, ze) {
      var Qe = "";
      return ze instanceof Vt ? (ze = typeof z.angle == "number" ? yn(ze, new Vt(1, 0, 0, 1, we, Ne)) : yn(new Vt(1, 0, 0, 1, we, Ne), ze), U === Y && (ze = yn(new Vt(1, 0, 0, -1, 0, 0), ze)), Qe = ze.join(" ") + ` Tm
`) : Qe = X(we) + " " + X(Ne) + ` Td
`, Qe;
    }, Hr = 0; Hr < bt.length; Hr++) {
      switch ($n = "", xi) {
        case 1:
          Jn = (Xe ? "<" : "(") + bt[Hr][0] + (Xe ? ">" : ")"), Vn = parseFloat(bt[Hr][1]), Yn = parseFloat(bt[Hr][2]);
          break;
        case 0:
          Jn = (Xe ? "<" : "(") + bt[Hr] + (Xe ? ">" : ")"), Vn = An(v), Yn = Nn(O);
      }
      Hn !== void 0 && Hn[Hr] !== void 0 && ($n = Hn[Hr] + ` Tw
`), Hr === 0 ? u.push($n + _i(Vn, Yn, $e) + Jn) : xi === 0 ? u.push($n + Jn) : xi === 1 && u.push($n + _i(Vn, Yn, $e) + Jn);
    }
    u = xi === 0 ? u.join(` Tj
T* `) : u.join(` Tj
`), u += ` Tj
`;
    var pn = `BT
/`;
    return pn += Mt + " " + yt + ` Tf
`, pn += X(yt * In) + ` TL
`, pn += fi + `
`, pn += sr, pn += u, I(pn += "ET"), P[Mt] = !0, Pe;
  };
  var Js = p.__private__.clip = p.clip = function(u) {
    return I(u === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return Js("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return I("n"), this;
  };
  var hn = p.__private__.isValidStyle = function(u) {
    var v = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(u) !== -1 && (v = !0), v;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(u) {
    return hn(u) && (d = u), this;
  };
  var Ka = p.__private__.getStyle = p.getStyle = function(u) {
    var v = d;
    switch (u) {
      case "D":
      case "S":
        v = "S";
        break;
      case "F":
        v = "f";
        break;
      case "FD":
      case "DF":
        v = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        v = u;
    }
    return v;
  }, Za = p.close = function() {
    return I("h"), this;
  };
  p.stroke = function() {
    return I("S"), this;
  }, p.fill = function(u) {
    return Ti("f", u), this;
  }, p.fillEvenOdd = function(u) {
    return Ti("f*", u), this;
  }, p.fillStroke = function(u) {
    return Ti("B", u), this;
  }, p.fillStrokeEvenOdd = function(u) {
    return Ti("B*", u), this;
  };
  var Ti = function(u, v) {
    Ae(v) === "object" ? Xs(v, u) : I(u);
  }, ci = function(u) {
    u === null || U === Y && u === void 0 || (u = Ka(u), I(u));
  };
  function $s(u, v, O, z, Z) {
    var pt = new Ki(v || this.boundingBox, O || this.xStep, z || this.yStep, this.gState, Z || this.matrix);
    pt.stream = this.stream;
    var bt = u + "$$" + this.cloneIndex++ + "$$";
    return Rr(bt, pt), pt;
  }
  var Xs = function(u, v) {
    var O = ke[u.key], z = Ut[O];
    if (z instanceof ki) I("q"), I(Ks(v)), z.gState && p.setGState(z.gState), I(u.matrix.toString() + " cm"), I("/" + O + " sh"), I("Q");
    else if (z instanceof Ki) {
      var Z = new Vt(1, 0, 0, -1, 0, pi());
      u.matrix && (Z = Z.multiply(u.matrix || xn), O = $s.call(z, u.key, u.boundingBox, u.xStep, u.yStep, Z).id), I("q"), I("/Pattern cs"), I("/" + O + " scn"), z.gState && p.setGState(z.gState), I(v), I("Q");
    }
  }, Ks = function(u) {
    switch (u) {
      case "f":
      case "F":
      case "n":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
      case "S":
        return "W S";
      case "B*":
        return "W* S";
    }
  }, oa = p.moveTo = function(u, v) {
    return I(X(B(u)) + " " + X(q(v)) + " m"), this;
  }, Qa = p.lineTo = function(u, v) {
    return I(X(B(u)) + " " + X(q(v)) + " l"), this;
  }, Xr = p.curveTo = function(u, v, O, z, Z, pt) {
    return I([X(B(u)), X(q(v)), X(B(O)), X(q(z)), X(B(Z)), X(q(pt)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(u, v, O, z, Z) {
    if (isNaN(u) || isNaN(v) || isNaN(O) || isNaN(z) || !hn(Z)) throw new Error("Invalid arguments passed to jsPDF.line");
    return U === V ? this.lines([[O - u, z - v]], u, v, [1, 1], Z || "S") : this.lines([[O - u, z - v]], u, v, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(u, v, O, z, Z, pt) {
    var bt, Ft, jt, $t, re, ge, je, $e, Pe, Ze, Xe, sr;
    if (typeof u == "number" && (sr = O, O = v, v = u, u = sr), z = z || [1, 1], pt = pt || !1, isNaN(v) || isNaN(O) || !Array.isArray(u) || !Array.isArray(z) || !hn(Z) || typeof pt != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (oa(v, O), bt = z[0], Ft = z[1], $t = u.length, Ze = v, Xe = O, jt = 0; jt < $t; jt++) (re = u[jt]).length === 2 ? (Ze = re[0] * bt + Ze, Xe = re[1] * Ft + Xe, Qa(Ze, Xe)) : (ge = re[0] * bt + Ze, je = re[1] * Ft + Xe, $e = re[2] * bt + Ze, Pe = re[3] * Ft + Xe, Ze = re[4] * bt + Ze, Xe = re[5] * Ft + Xe, Xr(ge, je, $e, Pe, Ze, Xe));
    return pt && Za(), ci(Z), this;
  }, p.path = function(u) {
    for (var v = 0; v < u.length; v++) {
      var O = u[v], z = O.c;
      switch (O.op) {
        case "m":
          oa(z[0], z[1]);
          break;
        case "l":
          Qa(z[0], z[1]);
          break;
        case "c":
          Xr.apply(this, z);
          break;
        case "h":
          Za();
      }
    }
    return this;
  }, p.__private__.rect = p.rect = function(u, v, O, z, Z) {
    if (isNaN(u) || isNaN(v) || isNaN(O) || isNaN(z) || !hn(Z)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return U === V && (z = -z), I([X(B(u)), X(q(v)), X(B(O)), X(B(z)), "re"].join(" ")), ci(Z), this;
  }, p.__private__.triangle = p.triangle = function(u, v, O, z, Z, pt, bt) {
    if (isNaN(u) || isNaN(v) || isNaN(O) || isNaN(z) || isNaN(Z) || isNaN(pt) || !hn(bt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[O - u, z - v], [Z - O, pt - z], [u - Z, v - pt]], u, v, [1, 1], bt, !0), this;
  }, p.__private__.roundedRect = p.roundedRect = function(u, v, O, z, Z, pt, bt) {
    if (isNaN(u) || isNaN(v) || isNaN(O) || isNaN(z) || isNaN(Z) || isNaN(pt) || !hn(bt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var Ft = 4 / 3 * (Math.SQRT2 - 1);
    return Z = Math.min(Z, 0.5 * O), pt = Math.min(pt, 0.5 * z), this.lines([[O - 2 * Z, 0], [Z * Ft, 0, Z, pt - pt * Ft, Z, pt], [0, z - 2 * pt], [0, pt * Ft, -Z * Ft, pt, -Z, pt], [2 * Z - O, 0], [-Z * Ft, 0, -Z, -pt * Ft, -Z, -pt], [0, 2 * pt - z], [0, -pt * Ft, Z * Ft, -pt, Z, -pt]], u + Z, v, [1, 1], bt, !0), this;
  }, p.__private__.ellipse = p.ellipse = function(u, v, O, z, Z) {
    if (isNaN(u) || isNaN(v) || isNaN(O) || isNaN(z) || !hn(Z)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var pt = 4 / 3 * (Math.SQRT2 - 1) * O, bt = 4 / 3 * (Math.SQRT2 - 1) * z;
    return oa(u + O, v), Xr(u + O, v - bt, u + pt, v - z, u, v - z), Xr(u - pt, v - z, u - O, v - bt, u - O, v), Xr(u - O, v + bt, u - pt, v + z, u, v + z), Xr(u + pt, v + z, u + O, v + bt, u + O, v), ci(Z), this;
  }, p.__private__.circle = p.circle = function(u, v, O, z) {
    if (isNaN(u) || isNaN(v) || isNaN(O) || !hn(z)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(u, v, O, O, z);
  }, p.setFont = function(u, v, O) {
    return O && (v = ht(v, O)), Mt = Ya(u, v, { disableWarning: !1 }), this;
  };
  var Zs = p.__private__.getFont = p.getFont = function() {
    return se[Ya.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var u, v, O = {};
    for (u in oe) if (oe.hasOwnProperty(u)) for (v in O[u] = [], oe[u]) oe[u].hasOwnProperty(v) && O[u].push(v);
    return O;
  }, p.addFont = function(u, v, O, z, Z) {
    var pt = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && pt.indexOf(arguments[3]) !== -1 ? Z = arguments[3] : arguments[3] && pt.indexOf(arguments[3]) == -1 && (O = ht(O, z)), Ha.call(this, u, v, O, Z = Z || "Identity-H");
  };
  var hi, la = r.lineWidth || 0.200025, Qs = p.__private__.getLineWidth = p.getLineWidth = function() {
    return la;
  }, Xt = p.__private__.setLineWidth = p.setLineWidth = function(u) {
    return la = u, I(X(B(u)) + " w"), this;
  };
  p.__private__.setLineDash = Rt.API.setLineDash = Rt.API.setLineDashPattern = function(u, v) {
    if (u = u || [], v = v || 0, isNaN(v) || !Array.isArray(u)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return u = u.map(function(O) {
      return X(B(O));
    }).join(" "), v = X(B(v)), I("[" + u + "] " + v + " d"), this;
  };
  var to = p.__private__.getLineHeight = p.getLineHeight = function() {
    return yt * hi;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return yt * hi;
  };
  var eo = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(u) {
    return typeof (u = u || 1.15) == "number" && (hi = u), this;
  }, ro = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return hi;
  };
  eo(r.lineHeight);
  var An = p.__private__.getHorizontalCoordinate = function(u) {
    return B(u);
  }, Nn = p.__private__.getVerticalCoordinate = function(u) {
    return U === Y ? u : Gt[M].mediaBox.topRightY - Gt[M].mediaBox.bottomLeftY - B(u);
  }, no = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(u) {
    return X(An(u));
  }, io = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(u) {
    return X(Nn(u));
  }, Di = r.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return on(Di);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(u, v, O, z) {
    return Di = Jr({ ch1: u, ch2: v, ch3: O, ch4: z, pdfColorType: "draw", precision: 2 }), I(Di), this;
  };
  var ua = r.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return on(ua);
  }, p.__private__.setFillColor = p.setFillColor = function(u, v, O, z) {
    return ua = Jr({ ch1: u, ch2: v, ch3: O, ch4: z, pdfColorType: "fill", precision: 2 }), I(ua), this;
  };
  var fi = r.textColor || "0 g", ao = p.__private__.getTextColor = p.getTextColor = function() {
    return on(fi);
  };
  p.__private__.setTextColor = p.setTextColor = function(u, v, O, z) {
    return fi = Jr({ ch1: u, ch2: v, ch3: O, ch4: z, pdfColorType: "text", precision: 3 }), this;
  };
  var Ln = r.charSpace, so = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(Ln || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return Ln = u, this;
  };
  var ca = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(u) {
    var v = p.CapJoinStyles[u];
    if (v === void 0) throw new Error("Line cap style of '" + u + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ca = v, I(v + " J"), this;
  };
  var ha = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(u) {
    var v = p.CapJoinStyles[u];
    if (v === void 0) throw new Error("Line join style of '" + u + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ha = v, I(v + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(u) {
    if (u = u || 0, isNaN(u)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return I(X(B(u)) + " M"), this;
  }, p.GState = Us, p.setGState = function(u) {
    (u = typeof u == "string" ? Yt[Qt[u]] : ts(null, u)).equals(Oe) || (I("/" + u.id + " gs"), Oe = u);
  };
  var ts = function(u, v) {
    if (!u || !Qt[u]) {
      var O = !1;
      for (var z in Yt) if (Yt.hasOwnProperty(z) && Yt[z].equals(v)) {
        O = !0;
        break;
      }
      if (O) v = Yt[z];
      else {
        var Z = "GS" + (Object.keys(Yt).length + 1).toString(10);
        Yt[Z] = v, v.id = Z;
      }
      return u && (Qt[u] = v.id), be.publish("addGState", v), v;
    }
  };
  p.addGState = function(u, v) {
    return ts(u, v), this;
  }, p.saveGraphicsState = function() {
    return I("q"), Ee.push({ key: Mt, size: yt, color: fi }), this;
  }, p.restoreGraphicsState = function() {
    I("Q");
    var u = Ee.pop();
    return Mt = u.key, yt = u.size, fi = u.color, Oe = null, this;
  }, p.setCurrentTransformationMatrix = function(u) {
    return I(u.toString() + " cm"), this;
  }, p.comment = function(u) {
    return I("#" + u), this;
  };
  var Sn = function(u, v) {
    var O = u || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return O;
    }, set: function(pt) {
      isNaN(pt) || (O = parseFloat(pt));
    } });
    var z = v || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return z;
    }, set: function(pt) {
      isNaN(pt) || (z = parseFloat(pt));
    } });
    var Z = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return Z;
    }, set: function(pt) {
      Z = pt.toString();
    } }), this;
  }, fa = function(u, v, O, z) {
    Sn.call(this, u, v), this.type = "rect";
    var Z = O || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return Z;
    }, set: function(bt) {
      isNaN(bt) || (Z = parseFloat(bt));
    } });
    var pt = z || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return pt;
    }, set: function(bt) {
      isNaN(bt) || (pt = parseFloat(bt));
    } }), this;
  }, qi = function() {
    this.page = le, this.currentPage = M, this.pages = At.slice(0), this.pagesContext = Gt.slice(0), this.x = Tt, this.y = qe, this.matrix = pe, this.width = pa(M), this.height = rs(M), this.outputDestination = St, this.id = "", this.objectNumber = -1;
  };
  qi.prototype.restore = function() {
    le = this.page, M = this.currentPage, Gt = this.pagesContext, At = this.pages, Tt = this.x, qe = this.y, pe = this.matrix, es(M, this.width), kn(M, this.height), St = this.outputDestination;
  };
  var da = function(u, v, O, z, Z) {
    sn.push(new qi()), le = M = 0, At = [], Tt = u, qe = v, pe = Z, aa([O, z]);
  };
  for (var di in p.beginFormObject = function(u, v, O, z, Z) {
    return da(u, v, O, z, Z), this;
  }, p.endFormObject = function(u) {
    return (function(v) {
      if (wn[v]) sn.pop().restore();
      else {
        var O = new qi(), z = "Xo" + (Object.keys(fr).length + 1).toString(10);
        O.id = z, wn[v] = z, fr[z] = O, be.publish("addFormObject", O), sn.pop().restore();
      }
    })(u), this;
  }, p.doFormObject = function(u, v) {
    var O = fr[wn[u]];
    return I("q"), I(v.toString() + " cm"), I("/" + O.id + " Do"), I("Q"), this;
  }, p.getFormObject = function(u) {
    var v = fr[wn[u]];
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix };
  }, p.save = function(u, v) {
    return u = u || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || !1, v.returnPromise === !1 ? (Si(Ri(cn()), u), typeof Si.unload == "function" && Jt.setTimeout && setTimeout(Si.unload, 911), this) : new Promise(function(O, z) {
      try {
        var Z = Si(Ri(cn()), u);
        typeof Si.unload == "function" && Jt.setTimeout && setTimeout(Si.unload, 911), O(Z);
      } catch (pt) {
        z(pt.message);
      }
    });
  }, Rt.API) Rt.API.hasOwnProperty(di) && (di === "events" && Rt.API.events.length ? (function(u, v) {
    var O, z, Z;
    for (Z = v.length - 1; Z !== -1; Z--) O = v[Z][0], z = v[Z][1], u.subscribe.apply(u, [O].concat(typeof z == "function" ? [z] : z));
  })(be, Rt.API.events) : p[di] = Rt.API[di]);
  function pa(u) {
    return Gt[u].mediaBox.topRightX - Gt[u].mediaBox.bottomLeftX;
  }
  function es(u, v) {
    Gt[u].mediaBox.topRightX = v + Gt[u].mediaBox.bottomLeftX;
  }
  function rs(u) {
    return Gt[u].mediaBox.topRightY - Gt[u].mediaBox.bottomLeftY;
  }
  function kn(u, v) {
    Gt[u].mediaBox.topRightY = v + Gt[u].mediaBox.bottomLeftY;
  }
  var Pn = p.getPageWidth = function(u) {
    return pa(u = u || M) / ee;
  }, ns = p.setPageWidth = function(u, v) {
    es(u, v * ee);
  }, pi = p.getPageHeight = function(u) {
    return rs(u = u || M) / ee;
  }, is = p.setPageHeight = function(u, v) {
    kn(u, v * ee);
  };
  return p.internal = { pdfEscape: qr, getStyle: Ka, getFont: Zs, getFontSize: It, getCharSpace: so, getTextColor: ao, getLineHeight: to, getLineHeightFactor: ro, getLineWidth: Qs, write: Lt, getHorizontalCoordinate: An, getVerticalCoordinate: Nn, getCoordinateString: no, getVerticalCoordinateString: io, collections: {}, newObject: Be, newAdditionalObject: oi, newObjectDeferred: nr, newObjectDeferredBegin: ar, getFilters: $r, putStream: Dr, events: be, scaleFactor: ee, pageSize: { getWidth: function() {
    return Pn(M);
  }, setWidth: function(u) {
    ns(M, u);
  }, getHeight: function() {
    return pi(M);
  }, setHeight: function(u) {
    is(M, u);
  } }, encryptionOptions: m, encryption: Ke, getEncryptor: function(u) {
    return m !== null ? Ke.encryptor(u, 0) : function(v) {
      return v;
    };
  }, output: $a, getNumberOfPages: Va, get pages() {
    return At;
  }, out: I, f2: w, f3: A, getPageInfo: _n, getPageInfoByObjId: Xa, getCurrentPageInfo: Ys, getPDFVersion: E, Point: Sn, Rectangle: fa, Matrix: Vt, hasHotfix: Ur }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return Pn(M);
  }, set: function(u) {
    ns(M, u);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return pi(M);
  }, set: function(u) {
    is(M, u);
  }, enumerable: !0, configurable: !0 }), (function(u) {
    for (var v = 0, O = Ht.length; v < O; v++) {
      var z = Ha.call(this, u[v][0], u[v][1], u[v][2], Ht[v][3], !0);
      N === !1 && (P[z] = !0);
      var Z = u[v][0].split("-");
      za({ id: z, fontName: Z[0], fontStyle: Z[1] || "" });
    }
    be.publish("addFonts", { fonts: se, dictionary: oe });
  }).call(p, Ht), Mt = "F1", Wa(a, t), be.publish("initialized"), p;
}
$i.prototype.lsbFirstWord = function(r) {
  return String.fromCharCode(255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255);
}, $i.prototype.toHexString = function(r) {
  return r.split("").map(function(e) {
    return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, $i.prototype.hexToBytes = function(r) {
  for (var e = [], t = 0; t < r.length; t += 2) e.push(String.fromCharCode(parseInt(r.substr(t, 2), 16)));
  return e.join("");
}, $i.prototype.processOwnerPassword = function(r, e) {
  return el(tl(e).substr(0, 5), r);
}, $i.prototype.encryptor = function(r, e) {
  var t = tl(this.encryptionKey + String.fromCharCode(255 & r, r >> 8 & 255, r >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
  return function(i) {
    return el(t, i);
  };
}, Us.prototype.equals = function(r) {
  var e, t = "id,objectNumber,equals";
  if (!r || Ae(r) !== Ae(this)) return !1;
  var i = 0;
  for (e in this) if (!(t.indexOf(e) >= 0)) {
    if (this.hasOwnProperty(e) && !r.hasOwnProperty(e) || this[e] !== r[e]) return !1;
    i++;
  }
  for (e in r) r.hasOwnProperty(e) && t.indexOf(e) < 0 && i--;
  return i === 0;
}, Rt.API = { events: [] }, Rt.version = "4.0.0";
var De = Rt.API, ll = 1, Ei = function(r) {
  return r.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, Yi = function(r) {
  return r.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, Kt = function(r) {
  return r.toFixed(2);
}, ni = function(r) {
  return r.toFixed(5);
};
De.__acroform__ = {};
var Nr = function(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r;
}, Uu = function(r) {
  return r * ll;
}, mn = function(r) {
  var e = new Wc(), t = Ct.internal.getHeight(r) || 0, i = Ct.internal.getWidth(r) || 0;
  return e.BBox = [0, 0, Number(Kt(i)), Number(Kt(t))], e;
}, i2 = De.__acroform__.setBit = function(r, e) {
  if (r = r || 0, e = e || 0, isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return r | 1 << e;
}, a2 = De.__acroform__.clearBit = function(r, e) {
  if (r = r || 0, e = e || 0, isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return r & ~(1 << e);
}, s2 = De.__acroform__.getBit = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return r & 1 << e ? 1 : 0;
}, Ge = De.__acroform__.getBitForPdf = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return s2(r, e - 1);
}, Ve = De.__acroform__.setBitForPdf = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return i2(r, e - 1);
}, Ye = De.__acroform__.clearBitForPdf = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return a2(r, e - 1);
}, o2 = De.__acroform__.calculateCoordinates = function(r, e) {
  var t = e.internal.getHorizontalCoordinate, i = e.internal.getVerticalCoordinate, a = r[0], s = r[1], f = r[2], l = r[3], c = {};
  return c.lowerLeft_X = t(a) || 0, c.lowerLeft_Y = i(s + l) || 0, c.upperRight_X = t(a + f) || 0, c.upperRight_Y = i(s) || 0, [Number(Kt(c.lowerLeft_X)), Number(Kt(c.lowerLeft_Y)), Number(Kt(c.upperRight_X)), Number(Kt(c.upperRight_Y))];
}, l2 = function(r) {
  if (r.appearanceStreamContent) return r.appearanceStreamContent;
  if (r.V || r.DV) {
    var e = [], t = r._V || r.DV, i = rl(r, t), a = r.scope.internal.getFont(r.fontName, r.fontStyle).id;
    e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(r.scope.__private__.encodeColorString(r.color)), e.push("/" + a + " " + Kt(i.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(i.text), e.push("ET"), e.push("Q"), e.push("EMC");
    var s = mn(r);
    return s.scope = r.scope, s.stream = e.join(`
`), s;
  }
}, rl = function(r, e) {
  var t = r.fontSize === 0 ? r.maxFontSize : r.fontSize, i = { text: "", fontSize: "" }, a = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
  a = r.multiline ? a.map(function(w) {
    return w.split(`
`);
  }) : a.map(function(w) {
    return [w];
  });
  var s = t, f = Ct.internal.getHeight(r) || 0;
  f = f < 0 ? -f : f;
  var l = Ct.internal.getWidth(r) || 0;
  l = l < 0 ? -l : l;
  var c = function(w, A, B) {
    if (w + 1 < a.length) {
      var q = A + " " + a[w + 1][0];
      return Cs(q, r, B).width <= l - 4;
    }
    return !1;
  };
  s++;
  t: for (; s > 0; ) {
    e = "", s--;
    var d, m, N = Cs("3", r, s).height, P = r.multiline ? f - s : (f - N) / 2, p = P += 2, j = 0, E = 0, R = 0;
    if (s <= 0) {
      e = `(...) Tj
`, e += "% Width of Text: " + Cs(e, r, s = 12).width + ", FieldWidth:" + l + `
`;
      break;
    }
    for (var k = "", V = 0, Y = 0; Y < a.length; Y++) if (a.hasOwnProperty(Y)) {
      var U = !1;
      if (a[Y].length !== 1 && R !== a[Y].length - 1) {
        if ((N + 2) * (V + 2) + 2 > f) continue t;
        k += a[Y][R], U = !0, E = Y, Y--;
      } else {
        k = (k += a[Y][R] + " ").substr(k.length - 1) == " " ? k.substr(0, k.length - 1) : k;
        var ot = parseInt(Y), vt = c(ot, k, s), ht = Y >= a.length - 1;
        if (vt && !ht) {
          k += " ", R = 0;
          continue;
        }
        if (vt || ht) {
          if (ht) E = ot;
          else if (r.multiline && (N + 2) * (V + 2) + 2 > f) continue t;
        } else {
          if (!r.multiline || (N + 2) * (V + 2) + 2 > f) continue t;
          E = ot;
        }
      }
      for (var X = "", D = j; D <= E; D++) {
        var H = a[D];
        if (r.multiline) {
          if (D === E) {
            X += H[R] + " ", R = (R + 1) % H.length;
            continue;
          }
          if (D === j) {
            X += H[H.length - 1] + " ";
            continue;
          }
        }
        X += H[0] + " ";
      }
      switch (X = X.substr(X.length - 1) == " " ? X.substr(0, X.length - 1) : X, m = Cs(X, r, s).width, r.textAlign) {
        case "right":
          d = l - m - 2;
          break;
        case "center":
          d = (l - m) / 2;
          break;
        default:
          d = 2;
      }
      e += Kt(d) + " " + Kt(p) + ` Td
`, e += "(" + Ei(X) + `) Tj
`, e += -Kt(d) + ` 0 Td
`, p = -(s + 2), m = 0, j = U ? E : E + 1, V++, k = "";
    }
    break;
  }
  return i.text = e, i.fontSize = s, i;
}, Cs = function(r, e, t) {
  var i = e.scope.internal.getFont(e.fontName, e.fontStyle), a = e.scope.getStringUnitWidth(r, { font: i, fontSize: parseFloat(t), charSpace: 0 }) * parseFloat(t);
  return { height: e.scope.getStringUnitWidth("3", { font: i, fontSize: parseFloat(t), charSpace: 0 }) * parseFloat(t) * 1.5, width: a };
}, u2 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, c2 = function(r, e) {
  var t = { type: "reference", object: r };
  e.internal.getPageInfo(r.page).pageContext.annotations.find(function(i) {
    return i.type === t.type && i.object === t.object;
  }) === void 0 && e.internal.getPageInfo(r.page).pageContext.annotations.push(t);
}, h2 = function(r, e) {
  if (e.scope = r, r.internal !== void 0 && (r.internal.acroformPlugin === void 0 || r.internal.acroformPlugin.isInitialized === !1)) {
    if (nn.FieldNum = 0, r.internal.acroformPlugin = JSON.parse(JSON.stringify(u2)), r.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    ll = r.internal.scaleFactor, r.internal.acroformPlugin.acroFormDictionaryRoot = new Gc(), r.internal.acroformPlugin.acroFormDictionaryRoot.scope = r, r.internal.acroformPlugin.acroFormDictionaryRoot._eventID = r.internal.events.subscribe("postPutResources", function() {
      (function(t) {
        t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0;
      })(r);
    }), r.internal.events.subscribe("buildDocument", function() {
      (function(t) {
        t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var i = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var a in i) if (i.hasOwnProperty(a)) {
          var s = i[a];
          s.objId = void 0, s.hasAnnotation && c2(s, t);
        }
      })(r);
    }), r.internal.events.subscribe("putCatalog", function() {
      (function(t) {
        if (t.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(r);
    }), r.internal.events.subscribe("postPutPages", function(t) {
      (function(i, a) {
        var s = !i;
        for (var f in i || (a.internal.newObjectDeferredBegin(a.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), a.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), i = i || a.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (i.hasOwnProperty(f)) {
          var l = i[f], c = [], d = l.Rect;
          if (l.Rect && (l.Rect = o2(l.Rect, a)), a.internal.newObjectDeferredBegin(l.objId, !0), l.DA = Ct.createDefaultAppearanceStream(l), Ae(l) === "object" && typeof l.getKeyValueListForStream == "function" && (c = l.getKeyValueListForStream()), l.Rect = d, l.hasAppearanceStream && !l.appearanceStreamContent) {
            var m = l2(l);
            c.push({ key: "AP", value: "<</N " + m + ">>" }), a.internal.acroformPlugin.xForms.push(m);
          }
          if (l.appearanceStreamContent) {
            var N = "";
            for (var P in l.appearanceStreamContent) if (l.appearanceStreamContent.hasOwnProperty(P)) {
              var p = l.appearanceStreamContent[P];
              if (N += "/" + P + " ", N += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var f in p) if (p.hasOwnProperty(f)) {
                  var j = p[f];
                  typeof j == "function" && (j = j.call(a, l)), N += "/" + f + " " + j + " ", a.internal.acroformPlugin.xForms.indexOf(j) >= 0 || a.internal.acroformPlugin.xForms.push(j);
                }
              } else typeof (j = p) == "function" && (j = j.call(a, l)), N += "/" + f + " " + j, a.internal.acroformPlugin.xForms.indexOf(j) >= 0 || a.internal.acroformPlugin.xForms.push(j);
              N += ">>";
            }
            c.push({ key: "AP", value: `<<
` + N + ">>" });
          }
          a.internal.putStream({ additionalKeyValues: c, objectId: l.objId }), a.internal.out("endobj");
        }
        s && (function(E, R) {
          for (var k in E) if (E.hasOwnProperty(k)) {
            var V = k, Y = E[k];
            R.internal.newObjectDeferredBegin(Y.objId, !0), Ae(Y) === "object" && typeof Y.putStream == "function" && Y.putStream(), delete E[V];
          }
        })(a.internal.acroformPlugin.xForms, a);
      })(t, r);
    }), r.internal.acroformPlugin.isInitialized = !0;
  }
}, Hc = De.__acroform__.arrayToPdfArray = function(r, e, t) {
  var i = function(f) {
    return f;
  };
  if (Array.isArray(r)) {
    for (var a = "[", s = 0; s < r.length; s++) switch (s !== 0 && (a += " "), Ae(r[s])) {
      case "boolean":
      case "number":
      case "object":
        a += r[s].toString();
        break;
      case "string":
        r[s].substr(0, 1) !== "/" ? (e !== void 0 && t && (i = t.internal.getEncryptor(e)), a += "(" + Ei(i(r[s].toString())) + ")") : a += r[s].toString();
    }
    return a + "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, zo = function(r, e, t) {
  var i = function(a) {
    return a;
  };
  return e !== void 0 && t && (i = t.internal.getEncryptor(e)), (r = r || "").toString(), "(" + Ei(i(r)) + ")";
}, vn = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(r) {
    this._objId = r;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
vn.prototype.toString = function() {
  return this.objId + " 0 R";
}, vn.prototype.putStream = function() {
  var r = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: r, objectId: this.objId }), this.scope.internal.out("endobj");
}, vn.prototype.getKeyValueListForStream = function() {
  var r = [], e = Object.getOwnPropertyNames(this).filter(function(s) {
    return s != "content" && s != "appearanceStreamContent" && s != "scope" && s != "objId" && s.substring(0, 1) != "_";
  });
  for (var t in e) if (Object.getOwnPropertyDescriptor(this, e[t]).configurable === !1) {
    var i = e[t], a = this[i];
    a && (Array.isArray(a) ? r.push({ key: i, value: Hc(a, this.objId, this.scope) }) : a instanceof vn ? (a.scope = this.scope, r.push({ key: i, value: a.objId + " 0 R" })) : typeof a != "function" && r.push({ key: i, value: a }));
  }
  return r;
};
var Wc = function() {
  vn.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var r, e = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return e;
  }, set: function(t) {
    e = t;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(t) {
    r = t.trim();
  }, get: function() {
    return r || null;
  } });
};
Nr(Wc, vn);
var Gc = function() {
  vn.call(this);
  var r, e = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return e.length > 0 ? e : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return e;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (r) {
      var t = function(i) {
        return i;
      };
      return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + Ei(t(r)) + ")";
    }
  }, set: function(t) {
    r = t;
  } });
};
Nr(Gc, vn);
var nn = function r() {
  vn.call(this);
  var e = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute F supplied.');
    e = k;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(e, 3);
  }, set: function(k) {
    k ? this.F = Ve(e, 3) : this.F = Ye(e, 3);
  } });
  var t = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute Ff supplied.');
    t = k;
  } });
  var i = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (i.length !== 0) return i;
  }, set: function(k) {
    i = k !== void 0 ? k : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[0]) ? 0 : i[0];
  }, set: function(k) {
    i[0] = k;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[1]) ? 0 : i[1];
  }, set: function(k) {
    i[1] = k;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[2]) ? 0 : i[2];
  }, set: function(k) {
    i[2] = k;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[3]) ? 0 : i[3];
  }, set: function(k) {
    i[3] = k;
  } });
  var a = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return a;
  }, set: function(k) {
    switch (k) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        a = k;
        break;
      default:
        throw new Error('Invalid value "' + k + '" for attribute FT supplied.');
    }
  } });
  var s = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!s || s.length < 1) {
      if (this instanceof zs) return;
      s = "FieldObject" + r.FieldNum++;
    }
    var k = function(V) {
      return V;
    };
    return this.scope && (k = this.scope.internal.getEncryptor(this.objId)), "(" + Ei(k(s)) + ")";
  }, set: function(k) {
    s = k.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return s;
  }, set: function(k) {
    s = k;
  } });
  var f = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return f;
  }, set: function(k) {
    f = k;
  } });
  var l = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return l;
  }, set: function(k) {
    l = k;
  } });
  var c = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return c;
  }, set: function(k) {
    c = k;
  } });
  var d = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return d === void 0 ? 50 / ll : d;
  }, set: function(k) {
    d = k;
  } });
  var m = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return m;
  }, set: function(k) {
    m = k;
  } });
  var N = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!N || this instanceof zs || this instanceof Pi)) return zo(N, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), N = k;
  } });
  var P = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (P) return this instanceof ir == 0 ? zo(P, this.objId, this.scope) : P;
  }, set: function(k) {
    k = k.toString(), P = this instanceof ir == 0 ? k.substr(0, 1) === "(" ? Yi(k.substr(1, k.length - 2)) : Yi(k) : k;
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof ir == 1 ? Yi(P.substr(1, P.length - 1)) : P;
  }, set: function(k) {
    k = k.toString(), P = this instanceof ir == 1 ? "/" + k : k;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return p;
  }, set: function(k) {
    this.V = k;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return this instanceof ir == 0 ? zo(p, this.objId, this.scope) : p;
  }, set: function(k) {
    k = k.toString(), p = this instanceof ir == 0 ? k.substr(0, 1) === "(" ? Yi(k.substr(1, k.length - 2)) : Yi(k) : k;
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof ir == 1 ? Yi(p.substr(1, p.length - 1)) : p;
  }, set: function(k) {
    k = k.toString(), p = this instanceof ir == 1 ? "/" + k : k;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var j, E = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return E;
  }, set: function(k) {
    k = !!k, E = k;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (j) return j;
  }, set: function(k) {
    j = k;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 1);
  }, set: function(k) {
    k ? this.Ff = Ve(this.Ff, 1) : this.Ff = Ye(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 2);
  }, set: function(k) {
    k ? this.Ff = Ve(this.Ff, 2) : this.Ff = Ye(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 3);
  }, set: function(k) {
    k ? this.Ff = Ve(this.Ff, 3) : this.Ff = Ye(this.Ff, 3);
  } });
  var R = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (R !== null) return R;
  }, set: function(k) {
    if ([0, 1, 2].indexOf(k) === -1) throw new Error('Invalid value "' + k + '" for attribute Q supplied.');
    R = k;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var k;
    switch (R) {
      case 0:
      default:
        k = "left";
        break;
      case 1:
        k = "center";
        break;
      case 2:
        k = "right";
    }
    return k;
  }, configurable: !0, enumerable: !0, set: function(k) {
    switch (k) {
      case "right":
      case 2:
        R = 2;
        break;
      case "center":
      case 1:
        R = 1;
        break;
      default:
        R = 0;
    }
  } });
};
Nr(nn, vn);
var Qi = function() {
  nn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var r = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(t) {
    r = t;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return r;
  }, set: function(t) {
    r = t;
  } });
  var e = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return Hc(e, this.objId, this.scope);
  }, set: function(t) {
    var i, a;
    a = [], typeof (i = t) == "string" && (a = (function(s, f, l) {
      l || (l = 1);
      for (var c, d = []; c = f.exec(s); ) d.push(c[l]);
      return d;
    })(i, /\((.*?)\)/g)), e = a;
  } }), this.getOptions = function() {
    return e;
  }, this.setOptions = function(t) {
    e = t, this.sort && e.sort();
  }, this.addOption = function(t) {
    t = (t = t || "").toString(), e.push(t), this.sort && e.sort();
  }, this.removeOption = function(t, i) {
    for (i = i || !1, t = (t = t || "").toString(); e.indexOf(t) !== -1 && (e.splice(e.indexOf(t), 1), i !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 18);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 18) : this.Ff = Ye(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 19);
  }, set: function(t) {
    this.combo === !0 && (t ? this.Ff = Ve(this.Ff, 19) : this.Ff = Ye(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 20);
  }, set: function(t) {
    t ? (this.Ff = Ve(this.Ff, 20), e.sort()) : this.Ff = Ye(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 22);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 22) : this.Ff = Ye(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 23);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 23) : this.Ff = Ye(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 27);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 27) : this.Ff = Ye(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
Nr(Qi, nn);
var ta = function() {
  Qi.call(this), this.fontName = "helvetica", this.combo = !1;
};
Nr(ta, Qi);
var ea = function() {
  ta.call(this), this.combo = !0;
};
Nr(ea, ta);
var js = function() {
  ea.call(this), this.edit = !0;
};
Nr(js, ea);
var ir = function() {
  nn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 15);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 15) : this.Ff = Ye(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 16);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 16) : this.Ff = Ye(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 17);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 17) : this.Ff = Ye(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 26);
  }, set: function(t) {
    t ? this.Ff = Ve(this.Ff, 26) : this.Ff = Ye(this.Ff, 26);
  } });
  var r, e = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var t = function(s) {
      return s;
    };
    if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
      var i, a = [];
      for (i in a.push("<<"), e) a.push("/" + i + " (" + Ei(t(e[i])) + ")");
      return a.push(">>"), a.join(`
`);
    }
  }, set: function(t) {
    Ae(t) === "object" && (e = t);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return e.CA || "";
  }, set: function(t) {
    typeof t == "string" && (e.CA = t);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(t) {
    r = t;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return r.substr(1, r.length - 1);
  }, set: function(t) {
    r = "/" + t;
  } });
};
Nr(ir, nn);
var Bs = function() {
  ir.call(this), this.pushButton = !0;
};
Nr(Bs, ir);
var ra = function() {
  ir.call(this), this.radio = !0, this.pushButton = !1;
  var r = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(e) {
    r = e !== void 0 ? e : [];
  } });
};
Nr(ra, ir);
var zs = function() {
  var r, e;
  nn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(a) {
    r = a;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return e;
  }, set: function(a) {
    e = a;
  } });
  var t, i = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var a = function(l) {
      return l;
    };
    this.scope && (a = this.scope.internal.getEncryptor(this.objId));
    var s, f = [];
    for (s in f.push("<<"), i) f.push("/" + s + " (" + Ei(a(i[s])) + ")");
    return f.push(">>"), f.join(`
`);
  }, set: function(a) {
    Ae(a) === "object" && (i = a);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return i.CA || "";
  }, set: function(a) {
    typeof a == "string" && (i.CA = a);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(a) {
    t = a;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return t.substr(1, t.length - 1);
  }, set: function(a) {
    t = "/" + a;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ct.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Nr(zs, nn), ra.prototype.setAppearance = function(r) {
  if (!("createAppearanceStream" in r) || !("getCA" in r)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
    var t = this.Kids[e];
    t.appearanceStreamContent = r.createAppearanceStream(t.optionName), t.caption = r.getCA();
  }
}, ra.prototype.createOption = function(r) {
  var e = new zs();
  return e.Parent = this, e.optionName = r, this.Kids.push(e), f2.call(this.scope, e), e;
};
var Rs = function() {
  ir.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ct.CheckBox.createAppearanceStream();
};
Nr(Rs, ir);
var Pi = function() {
  nn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 13);
  }, set: function(e) {
    e ? this.Ff = Ve(this.Ff, 13) : this.Ff = Ye(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 21);
  }, set: function(e) {
    e ? this.Ff = Ve(this.Ff, 21) : this.Ff = Ye(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = Ve(this.Ff, 23) : this.Ff = Ye(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 24);
  }, set: function(e) {
    e ? this.Ff = Ve(this.Ff, 24) : this.Ff = Ye(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 25);
  }, set: function(e) {
    e ? this.Ff = Ve(this.Ff, 25) : this.Ff = Ye(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = Ve(this.Ff, 26) : this.Ff = Ye(this.Ff, 26);
  } });
  var r = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(e) {
    r = e;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return r;
  }, set: function(e) {
    Number.isInteger(e) && (r = e);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
Nr(Pi, nn);
var Ts = function() {
  Pi.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Ge(this.Ff, 14);
  }, set: function(r) {
    r ? this.Ff = Ve(this.Ff, 14) : this.Ff = Ye(this.Ff, 14);
  } }), this.password = !0;
};
Nr(Ts, Pi);
var Ct = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Ct.CheckBox.YesNormal }, D: { On: Ct.CheckBox.YesPushDown, Off: Ct.CheckBox.OffPushDown } };
}, YesPushDown: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [], i = r.scope.internal.getFont(r.fontName, r.fontStyle).id, a = r.scope.__private__.encodeColorString(r.color), s = rl(r, r.caption);
  return t.push("0.749023 g"), t.push("0 0 " + Kt(Ct.internal.getWidth(r)) + " " + Kt(Ct.internal.getHeight(r)) + " re"), t.push("f"), t.push("BMC"), t.push("q"), t.push("0 0 1 rg"), t.push("/" + i + " " + Kt(s.fontSize) + " Tf " + a), t.push("BT"), t.push(s.text), t.push("ET"), t.push("Q"), t.push("EMC"), e.stream = t.join(`
`), e;
}, YesNormal: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = r.scope.internal.getFont(r.fontName, r.fontStyle).id, i = r.scope.__private__.encodeColorString(r.color), a = [], s = Ct.internal.getHeight(r), f = Ct.internal.getWidth(r), l = rl(r, r.caption);
  return a.push("1 g"), a.push("0 0 " + Kt(f) + " " + Kt(s) + " re"), a.push("f"), a.push("q"), a.push("0 0 1 rg"), a.push("0 0 " + Kt(f - 1) + " " + Kt(s - 1) + " re"), a.push("W"), a.push("n"), a.push("0 g"), a.push("BT"), a.push("/" + t + " " + Kt(l.fontSize) + " Tf " + i), a.push(l.text), a.push("ET"), a.push("Q"), e.stream = a.join(`
`), e;
}, OffPushDown: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [];
  return t.push("0.749023 g"), t.push("0 0 " + Kt(Ct.internal.getWidth(r)) + " " + Kt(Ct.internal.getHeight(r)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
} }, RadioButton: { Circle: { createAppearanceStream: function(r) {
  var e = { D: { Off: Ct.RadioButton.Circle.OffPushDown }, N: {} };
  return e.N[r] = Ct.RadioButton.Circle.YesNormal, e.D[r] = Ct.RadioButton.Circle.YesPushDown, e;
}, getCA: function() {
  return "l";
}, YesNormal: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [], i = Ct.internal.getWidth(r) <= Ct.internal.getHeight(r) ? Ct.internal.getWidth(r) / 4 : Ct.internal.getHeight(r) / 4;
  i = Number((0.9 * i).toFixed(5));
  var a = Ct.internal.Bezier_C, s = Number((i * a).toFixed(5));
  return t.push("q"), t.push("1 0 0 1 " + ni(Ct.internal.getWidth(r) / 2) + " " + ni(Ct.internal.getHeight(r) / 2) + " cm"), t.push(i + " 0 m"), t.push(i + " " + s + " " + s + " " + i + " 0 " + i + " c"), t.push("-" + s + " " + i + " -" + i + " " + s + " -" + i + " 0 c"), t.push("-" + i + " -" + s + " -" + s + " -" + i + " 0 -" + i + " c"), t.push(s + " -" + i + " " + i + " -" + s + " " + i + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
}, YesPushDown: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [], i = Ct.internal.getWidth(r) <= Ct.internal.getHeight(r) ? Ct.internal.getWidth(r) / 4 : Ct.internal.getHeight(r) / 4;
  i = Number((0.9 * i).toFixed(5));
  var a = Number((2 * i).toFixed(5)), s = Number((a * Ct.internal.Bezier_C).toFixed(5)), f = Number((i * Ct.internal.Bezier_C).toFixed(5));
  return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ni(Ct.internal.getWidth(r) / 2) + " " + ni(Ct.internal.getHeight(r) / 2) + " cm"), t.push(a + " 0 m"), t.push(a + " " + s + " " + s + " " + a + " 0 " + a + " c"), t.push("-" + s + " " + a + " -" + a + " " + s + " -" + a + " 0 c"), t.push("-" + a + " -" + s + " -" + s + " -" + a + " 0 -" + a + " c"), t.push(s + " -" + a + " " + a + " -" + s + " " + a + " 0 c"), t.push("f"), t.push("Q"), t.push("0 g"), t.push("q"), t.push("1 0 0 1 " + ni(Ct.internal.getWidth(r) / 2) + " " + ni(Ct.internal.getHeight(r) / 2) + " cm"), t.push(i + " 0 m"), t.push(i + " " + f + " " + f + " " + i + " 0 " + i + " c"), t.push("-" + f + " " + i + " -" + i + " " + f + " -" + i + " 0 c"), t.push("-" + i + " -" + f + " -" + f + " -" + i + " 0 -" + i + " c"), t.push(f + " -" + i + " " + i + " -" + f + " " + i + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
}, OffPushDown: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [], i = Ct.internal.getWidth(r) <= Ct.internal.getHeight(r) ? Ct.internal.getWidth(r) / 4 : Ct.internal.getHeight(r) / 4;
  i = Number((0.9 * i).toFixed(5));
  var a = Number((2 * i).toFixed(5)), s = Number((a * Ct.internal.Bezier_C).toFixed(5));
  return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ni(Ct.internal.getWidth(r) / 2) + " " + ni(Ct.internal.getHeight(r) / 2) + " cm"), t.push(a + " 0 m"), t.push(a + " " + s + " " + s + " " + a + " 0 " + a + " c"), t.push("-" + s + " " + a + " -" + a + " " + s + " -" + a + " 0 c"), t.push("-" + a + " -" + s + " -" + s + " -" + a + " 0 -" + a + " c"), t.push(s + " -" + a + " " + a + " -" + s + " " + a + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
} }, Cross: { createAppearanceStream: function(r) {
  var e = { D: { Off: Ct.RadioButton.Cross.OffPushDown }, N: {} };
  return e.N[r] = Ct.RadioButton.Cross.YesNormal, e.D[r] = Ct.RadioButton.Cross.YesPushDown, e;
}, getCA: function() {
  return "8";
}, YesNormal: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [], i = Ct.internal.calculateCross(r);
  return t.push("q"), t.push("1 1 " + Kt(Ct.internal.getWidth(r) - 2) + " " + Kt(Ct.internal.getHeight(r) - 2) + " re"), t.push("W"), t.push("n"), t.push(Kt(i.x1.x) + " " + Kt(i.x1.y) + " m"), t.push(Kt(i.x2.x) + " " + Kt(i.x2.y) + " l"), t.push(Kt(i.x4.x) + " " + Kt(i.x4.y) + " m"), t.push(Kt(i.x3.x) + " " + Kt(i.x3.y) + " l"), t.push("s"), t.push("Q"), e.stream = t.join(`
`), e;
}, YesPushDown: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = Ct.internal.calculateCross(r), i = [];
  return i.push("0.749023 g"), i.push("0 0 " + Kt(Ct.internal.getWidth(r)) + " " + Kt(Ct.internal.getHeight(r)) + " re"), i.push("f"), i.push("q"), i.push("1 1 " + Kt(Ct.internal.getWidth(r) - 2) + " " + Kt(Ct.internal.getHeight(r) - 2) + " re"), i.push("W"), i.push("n"), i.push(Kt(t.x1.x) + " " + Kt(t.x1.y) + " m"), i.push(Kt(t.x2.x) + " " + Kt(t.x2.y) + " l"), i.push(Kt(t.x4.x) + " " + Kt(t.x4.y) + " m"), i.push(Kt(t.x3.x) + " " + Kt(t.x3.y) + " l"), i.push("s"), i.push("Q"), e.stream = i.join(`
`), e;
}, OffPushDown: function(r) {
  var e = mn(r);
  e.scope = r.scope;
  var t = [];
  return t.push("0.749023 g"), t.push("0 0 " + Kt(Ct.internal.getWidth(r)) + " " + Kt(Ct.internal.getHeight(r)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
} } }, createDefaultAppearanceStream: function(r) {
  var e = r.scope.internal.getFont(r.fontName, r.fontStyle).id, t = r.scope.__private__.encodeColorString(r.color);
  return "/" + e + " " + r.fontSize + " Tf " + t;
} };
Ct.internal = { Bezier_C: 0.551915024494, calculateCross: function(r) {
  var e = Ct.internal.getWidth(r), t = Ct.internal.getHeight(r), i = Math.min(e, t);
  return { x1: { x: (e - i) / 2, y: (t - i) / 2 + i }, x2: { x: (e - i) / 2 + i, y: (t - i) / 2 }, x3: { x: (e - i) / 2, y: (t - i) / 2 }, x4: { x: (e - i) / 2 + i, y: (t - i) / 2 + i } };
} }, Ct.internal.getWidth = function(r) {
  var e = 0;
  return Ae(r) === "object" && (e = Uu(r.Rect[2])), e;
}, Ct.internal.getHeight = function(r) {
  var e = 0;
  return Ae(r) === "object" && (e = Uu(r.Rect[3])), e;
};
var f2 = De.addField = function(r) {
  if (h2(this, r), !(r instanceof nn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var e;
  return (e = r).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), r.page = r.scope.internal.getCurrentPageInfo().pageNumber, this;
};
De.AcroFormChoiceField = Qi, De.AcroFormListBox = ta, De.AcroFormComboBox = ea, De.AcroFormEditBox = js, De.AcroFormButton = ir, De.AcroFormPushButton = Bs, De.AcroFormRadioButton = ra, De.AcroFormCheckBox = Rs, De.AcroFormTextField = Pi, De.AcroFormPasswordField = Ts, De.AcroFormAppearance = Ct, De.AcroForm = { ChoiceField: Qi, ListBox: ta, ComboBox: ea, EditBox: js, Button: ir, PushButton: Bs, RadioButton: ra, CheckBox: Rs, TextField: Pi, PasswordField: Ts, Appearance: Ct }, Rt.AcroForm = { ChoiceField: Qi, ListBox: ta, ComboBox: ea, EditBox: js, Button: ir, PushButton: Bs, RadioButton: ra, CheckBox: Rs, TextField: Pi, PasswordField: Ts, Appearance: Ct };
Rt.AcroForm;
function Vc(r) {
  return r.reduce(function(e, t, i) {
    return e[t] = i, e;
  }, {});
}
(function(r) {
  var e = "addImage_";
  r.__addimage__ = {};
  var t = "UNKNOWN", i = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a = r.__addimage__.getImageFileTypeByImageData = function(w, A) {
    var B, q, et, it, at, K = t;
    if ((A = A || t) === "RGBA" || w.data !== void 0 && w.data instanceof Uint8ClampedArray && "height" in w && "width" in w) return "RGBA";
    if (vt(w)) for (at in i) for (et = i[at], B = 0; B < et.length; B += 1) {
      for (it = !0, q = 0; q < et[B].length; q += 1) if (et[B][q] !== void 0 && et[B][q] !== w[q]) {
        it = !1;
        break;
      }
      if (it === !0) {
        K = at;
        break;
      }
    }
    else for (at in i) for (et = i[at], B = 0; B < et.length; B += 1) {
      for (it = !0, q = 0; q < et[B].length; q += 1) if (et[B][q] !== void 0 && et[B][q] !== w.charCodeAt(q)) {
        it = !1;
        break;
      }
      if (it === !0) {
        K = at;
        break;
      }
    }
    return K === t && A !== t && (K = A), K;
  }, s = function w(A) {
    for (var B = this.internal.write, q = this.internal.putStream, et = (0, this.internal.getFilters)(); et.indexOf("FlateEncode") !== -1; ) et.splice(et.indexOf("FlateEncode"), 1);
    A.objectId = this.internal.newObject();
    var it = [];
    if (it.push({ key: "Type", value: "/XObject" }), it.push({ key: "Subtype", value: "/Image" }), it.push({ key: "Width", value: A.width }), it.push({ key: "Height", value: A.height }), A.colorSpace === k.INDEXED ? it.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (A.palette.length / 3 - 1) + " " + ("sMask" in A && A.sMask !== void 0 ? A.objectId + 2 : A.objectId + 1) + " 0 R]" }) : (it.push({ key: "ColorSpace", value: "/" + A.colorSpace }), A.colorSpace === k.DEVICE_CMYK && it.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), it.push({ key: "BitsPerComponent", value: A.bitsPerComponent }), "decodeParameters" in A && A.decodeParameters !== void 0 && it.push({ key: "DecodeParms", value: "<<" + A.decodeParameters + ">>" }), "transparency" in A && Array.isArray(A.transparency) && A.transparency.length > 0) {
      for (var at = "", K = 0, st = A.transparency.length; K < st; K++) at += A.transparency[K] + " " + A.transparency[K] + " ";
      it.push({ key: "Mask", value: "[" + at + "]" });
    }
    A.sMask !== void 0 && it.push({ key: "SMask", value: A.objectId + 1 + " 0 R" });
    var xt = A.filter !== void 0 ? ["/" + A.filter] : void 0;
    if (q({ data: A.data, additionalKeyValues: it, alreadyAppliedFilters: xt, objectId: A.objectId }), B("endobj"), "sMask" in A && A.sMask !== void 0) {
      var ft, x = (ft = A.sMaskBitsPerComponent) !== null && ft !== void 0 ? ft : A.bitsPerComponent, M = { width: A.width, height: A.height, colorSpace: "DeviceGray", bitsPerComponent: x, data: A.sMask };
      "filter" in A && (M.decodeParameters = "/Predictor ".concat(A.predictor, " /Colors 1 /BitsPerComponent ").concat(x, " /Columns ").concat(A.width), M.filter = A.filter), w.call(this, M);
    }
    if (A.colorSpace === k.INDEXED) {
      var T = this.internal.newObject();
      q({ data: X(new Uint8Array(A.palette)), objectId: T }), B("endobj");
    }
  }, f = function() {
    var w = this.internal.collections[e + "images"];
    for (var A in w) s.call(this, w[A]);
  }, l = function() {
    var w, A = this.internal.collections[e + "images"], B = this.internal.write;
    for (var q in A) B("/I" + (w = A[q]).index, w.objectId, "0", "R");
  }, c = function() {
    this.internal.collections[e + "images"] || (this.internal.collections[e + "images"] = {}, this.internal.events.subscribe("putResources", f), this.internal.events.subscribe("putXobjectDict", l));
  }, d = function() {
    var w = this.internal.collections[e + "images"];
    return c.call(this), w;
  }, m = function() {
    return Object.keys(this.internal.collections[e + "images"]).length;
  }, N = function(w) {
    return typeof r["process" + w.toUpperCase()] == "function";
  }, P = function(w) {
    return Ae(w) === "object" && w.nodeType === 1;
  }, p = function(w, A) {
    if (w.nodeName === "IMG" && w.hasAttribute("src")) {
      var B = "" + w.getAttribute("src");
      if (B.indexOf("data:image/") === 0) return Ms(unescape(B).split("base64,").pop());
      var q = r.loadFile(B, !0);
      if (q !== void 0) return q;
    }
    if (w.nodeName === "CANVAS") {
      if (w.width === 0 || w.height === 0) throw new Error("Given canvas must have data. Canvas width: " + w.width + ", height: " + w.height);
      var et;
      switch (A) {
        case "PNG":
          et = "image/png";
          break;
        case "WEBP":
          et = "image/webp";
          break;
        default:
          et = "image/jpeg";
      }
      return Ms(w.toDataURL(et, 1).split("base64,").pop());
    }
  }, j = function(w) {
    var A = this.internal.collections[e + "images"];
    if (A) {
      for (var B in A) if (w === A[B].alias) return A[B];
    }
  }, E = function(w, A, B) {
    return w || A || (w = -96, A = -96), w < 0 && (w = -1 * B.width * 72 / w / this.internal.scaleFactor), A < 0 && (A = -1 * B.height * 72 / A / this.internal.scaleFactor), w === 0 && (w = A * B.width / B.height), A === 0 && (A = w * B.height / B.width), [w, A];
  }, R = function(w, A, B, q, et, it) {
    var at = E.call(this, B, q, et), K = this.internal.getCoordinateString, st = this.internal.getVerticalCoordinateString, xt = d.call(this);
    if (B = at[0], q = at[1], xt[et.index] = et, it) {
      it *= Math.PI / 180;
      var ft = Math.cos(it), x = Math.sin(it), M = function(W) {
        return W.toFixed(4);
      }, T = [M(ft), M(x), M(-1 * x), M(ft), 0, 0, "cm"];
    }
    this.internal.write("q"), it ? (this.internal.write([1, "0", "0", 1, K(w), st(A + q), "cm"].join(" ")), this.internal.write(T.join(" ")), this.internal.write([K(B), "0", "0", K(q), "0", "0", "cm"].join(" "))) : this.internal.write([K(B), "0", "0", K(q), K(w), st(A + q), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + et.index + " Do"), this.internal.write("Q");
  }, k = r.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  r.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var V = r.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, Y = r.__addimage__.sHashCode = function(w) {
    var A, B, q = 0;
    if (typeof w == "string") for (B = w.length, A = 0; A < B; A++) q = (q << 5) - q + w.charCodeAt(A), q |= 0;
    else if (vt(w)) for (B = w.byteLength / 2, A = 0; A < B; A++) q = (q << 5) - q + w[A], q |= 0;
    return q;
  }, U = r.__addimage__.validateStringAsBase64 = function(w) {
    (w = w || "").toString().trim();
    var A = !0;
    return w.length === 0 && (A = !1), w.length % 4 != 0 && (A = !1), /^[A-Za-z0-9+/]+$/.test(w.substr(0, w.length - 2)) === !1 && (A = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(w.substr(-2)) === !1 && (A = !1), A;
  }, ot = r.__addimage__.extractImageFromDataUrl = function(w) {
    if (w == null || !(w = w.trim()).startsWith("data:")) return null;
    var A = w.indexOf(",");
    return A < 0 ? null : w.substring(0, A).trim().endsWith("base64") ? w.substring(A + 1) : null;
  };
  r.__addimage__.isArrayBuffer = function(w) {
    return w instanceof ArrayBuffer;
  };
  var vt = r.__addimage__.isArrayBufferView = function(w) {
    return w instanceof Int8Array || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int16Array || w instanceof Uint16Array || w instanceof Int32Array || w instanceof Uint32Array || w instanceof Float32Array || w instanceof Float64Array;
  }, ht = r.__addimage__.binaryStringToUint8Array = function(w) {
    for (var A = w.length, B = new Uint8Array(A), q = 0; q < A; q++) B[q] = w.charCodeAt(q);
    return B;
  }, X = r.__addimage__.arrayBufferToBinaryString = function(w) {
    for (var A = "", B = vt(w) ? w : new Uint8Array(w), q = 0; q < B.length; q += 8192) A += String.fromCharCode.apply(null, B.subarray(q, q + 8192));
    return A;
  };
  r.addImage = function() {
    var w, A, B, q, et, it, at, K, st;
    if (typeof arguments[1] == "number" ? (A = t, B = arguments[1], q = arguments[2], et = arguments[3], it = arguments[4], at = arguments[5], K = arguments[6], st = arguments[7]) : (A = arguments[1], B = arguments[2], q = arguments[3], et = arguments[4], it = arguments[5], at = arguments[6], K = arguments[7], st = arguments[8]), Ae(w = arguments[0]) === "object" && !P(w) && "imageData" in w) {
      var xt = w;
      w = xt.imageData, A = xt.format || A || t, B = xt.x || B || 0, q = xt.y || q || 0, et = xt.w || xt.width || et, it = xt.h || xt.height || it, at = xt.alias || at, K = xt.compression || K, st = xt.rotation || xt.angle || st;
    }
    var ft = this.internal.getFilters();
    if (K === void 0 && ft.indexOf("FlateEncode") !== -1 && (K = "SLOW"), isNaN(B) || isNaN(q)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    c.call(this);
    var x = D.call(this, w, A, at, K);
    return R.call(this, B, q, et, it, x, st), this;
  };
  var D = function(w, A, B, q) {
    var et, it, at;
    if (typeof w == "string" && a(w) === t) {
      w = unescape(w);
      var K = H(w, !1);
      (K !== "" || (K = r.loadFile(w, !0)) !== void 0) && (w = K);
    }
    if (P(w) && (w = p(w, A)), A = a(w, A), !N(A)) throw new Error("addImage does not support files of type '" + A + "', please ensure that a plugin for '" + A + "' support is added.");
    if (((at = B) == null || at.length === 0) && (B = (function(st) {
      return typeof st == "string" || vt(st) ? Y(st) : vt(st.data) ? Y(st.data) : null;
    })(w)), (et = j.call(this, B)) || (w instanceof Uint8Array || A === "RGBA" || (it = w, w = ht(w)), et = this["process" + A.toUpperCase()](w, m.call(this), B, (function(st) {
      return st && typeof st == "string" && (st = st.toUpperCase()), st in r.image_compression ? st : V.NONE;
    })(q), it)), !et) throw new Error("An unknown error occurred whilst processing the image.");
    return et;
  }, H = r.__addimage__.convertBase64ToBinaryString = function(w, A) {
    A = typeof A != "boolean" || A;
    var B, q = "";
    if (typeof w == "string") {
      var et;
      B = (et = ot(w)) !== null && et !== void 0 ? et : w;
      try {
        q = Ms(B);
      } catch (it) {
        if (A) throw U(B) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + it.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return q;
  };
  r.getImageProperties = function(w) {
    var A, B, q = "";
    if (P(w) && (w = p(w)), typeof w == "string" && a(w) === t && ((q = H(w, !1)) === "" && (q = r.loadFile(w) || ""), w = q), B = a(w), !N(B)) throw new Error("addImage does not support files of type '" + B + "', please ensure that a plugin for '" + B + "' support is added.");
    if (w instanceof Uint8Array || (w = ht(w)), !(A = this["process" + B.toUpperCase()](w))) throw new Error("An unknown error occurred whilst processing the image");
    return A.fileType = B, A;
  };
})(Rt.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = function(t) {
    if (t !== void 0 && t != "") return !0;
  };
  Rt.API.events.push(["addPage", function(t) {
    this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
  }]), r.events.push(["putPage", function(t) {
    for (var i, a, s, f = this.internal.getCoordinateString, l = this.internal.getVerticalCoordinateString, c = this.internal.getPageInfoByObjId(t.objId), d = t.pageContext.annotations, m = !1, N = 0; N < d.length && !m; N++) switch ((i = d[N]).type) {
      case "link":
        (e(i.options.url) || e(i.options.pageNumber)) && (m = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        m = !0;
    }
    if (m != 0) {
      this.internal.write("/Annots [");
      for (var P = 0; P < d.length; P++) {
        i = d[P];
        var p = this.internal.pdfEscape, j = this.internal.getEncryptor(t.objId);
        switch (i.type) {
          case "reference":
            this.internal.write(" " + i.object.objId + " 0 R ");
            break;
          case "text":
            var E = this.internal.newAdditionalObject(), R = this.internal.newAdditionalObject(), k = this.internal.getEncryptor(E.objId), V = i.title || "Note";
            s = "<</Type /Annot /Subtype /Text " + (a = "/Rect [" + f(i.bounds.x) + " " + l(i.bounds.y + i.bounds.h) + " " + f(i.bounds.x + i.bounds.w) + " " + l(i.bounds.y) + "] ") + "/Contents (" + p(k(i.contents)) + ")", s += " /Popup " + R.objId + " 0 R", s += " /P " + c.objId + " 0 R", s += " /T (" + p(k(V)) + ") >>", E.content = s;
            var Y = E.objId + " 0 R";
            s = "<</Type /Annot /Subtype /Popup " + (a = "/Rect [" + f(i.bounds.x + 30) + " " + l(i.bounds.y + i.bounds.h) + " " + f(i.bounds.x + i.bounds.w + 30) + " " + l(i.bounds.y) + "] ") + " /Parent " + Y, i.open && (s += " /Open true"), s += " >>", R.content = s, this.internal.write(E.objId, "0 R", R.objId, "0 R");
            break;
          case "freetext":
            a = "/Rect [" + f(i.bounds.x) + " " + l(i.bounds.y) + " " + f(i.bounds.x + i.bounds.w) + " " + l(i.bounds.y + i.bounds.h) + "] ";
            var U = i.color || "#000000";
            s = "<</Type /Annot /Subtype /FreeText " + a + "/Contents (" + p(j(i.contents)) + ")", s += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + U + ")", s += " /Border [0 0 0]", s += " >>", this.internal.write(s);
            break;
          case "link":
            if (i.options.name) {
              var ot = this.annotations._nameMap[i.options.name];
              i.options.pageNumber = ot.page, i.options.top = ot.y;
            } else i.options.top || (i.options.top = 0);
            if (a = "/Rect [" + i.finalBounds.x + " " + i.finalBounds.y + " " + i.finalBounds.w + " " + i.finalBounds.h + "] ", s = "", i.options.url) s = "<</Type /Annot /Subtype /Link " + a + "/Border [0 0 0] /A <</S /URI /URI (" + p(j(i.options.url)) + ") >>";
            else if (i.options.pageNumber) switch (s = "<</Type /Annot /Subtype /Link " + a + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(i.options.pageNumber).objId + " 0 R", i.options.magFactor = i.options.magFactor || "XYZ", i.options.magFactor) {
              case "Fit":
                s += " /Fit]";
                break;
              case "FitH":
                s += " /FitH " + i.options.top + "]";
                break;
              case "FitV":
                i.options.left = i.options.left || 0, s += " /FitV " + i.options.left + "]";
                break;
              default:
                var vt = l(i.options.top);
                i.options.left = i.options.left || 0, i.options.zoom === void 0 && (i.options.zoom = 0), s += " /XYZ " + i.options.left + " " + vt + " " + i.options.zoom + "]";
            }
            s != "" && (s += " >>", this.internal.write(s));
        }
      }
      this.internal.write("]");
    }
  }]), r.createAnnotation = function(t) {
    var i = this.internal.getCurrentPageInfo();
    switch (t.type) {
      case "link":
        this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
        break;
      case "text":
      case "freetext":
        i.pageContext.annotations.push(t);
    }
  }, r.link = function(t, i, a, s, f) {
    var l = this.internal.getCurrentPageInfo(), c = this.internal.getCoordinateString, d = this.internal.getVerticalCoordinateString;
    l.pageContext.annotations.push({ finalBounds: { x: c(t), y: d(i), w: c(t + a), h: d(i + s) }, options: f, type: "link" });
  }, r.textWithLink = function(t, i, a, s) {
    var f, l, c = this.getTextWidth(t), d = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (s.maxWidth !== void 0) {
      l = s.maxWidth;
      var m = this.splitTextToSize(t, l).length;
      f = Math.ceil(d * m);
    } else l = c, f = d;
    return this.text(t, i, a, s), a += 0.2 * d, s.align === "center" && (i -= c / 2), s.align === "right" && (i -= c), this.link(i, a - d, l, f, s), c;
  }, r.getTextWidth = function(t) {
    var i = this.internal.getFontSize();
    return this.getStringUnitWidth(t) * i / this.internal.scaleFactor;
  };
})(Rt.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, t = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, a = [1570, 1571, 1573, 1575];
  r.__arabicParser__ = {};
  var s = r.__arabicParser__.isInArabicSubstitutionA = function(E) {
    return e[E.charCodeAt(0)] !== void 0;
  }, f = r.__arabicParser__.isArabicLetter = function(E) {
    return typeof E == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(E);
  }, l = r.__arabicParser__.isArabicEndLetter = function(E) {
    return f(E) && s(E) && e[E.charCodeAt(0)].length <= 2;
  }, c = r.__arabicParser__.isArabicAlfLetter = function(E) {
    return f(E) && a.indexOf(E.charCodeAt(0)) >= 0;
  };
  r.__arabicParser__.arabicLetterHasIsolatedForm = function(E) {
    return f(E) && s(E) && e[E.charCodeAt(0)].length >= 1;
  };
  var d = r.__arabicParser__.arabicLetterHasFinalForm = function(E) {
    return f(E) && s(E) && e[E.charCodeAt(0)].length >= 2;
  };
  r.__arabicParser__.arabicLetterHasInitialForm = function(E) {
    return f(E) && s(E) && e[E.charCodeAt(0)].length >= 3;
  };
  var m = r.__arabicParser__.arabicLetterHasMedialForm = function(E) {
    return f(E) && s(E) && e[E.charCodeAt(0)].length == 4;
  }, N = r.__arabicParser__.resolveLigatures = function(E) {
    var R = 0, k = t, V = "", Y = 0;
    for (R = 0; R < E.length; R += 1) k[E.charCodeAt(R)] !== void 0 ? (Y++, typeof (k = k[E.charCodeAt(R)]) == "number" && (V += String.fromCharCode(k), k = t, Y = 0), R === E.length - 1 && (k = t, V += E.charAt(R - (Y - 1)), R -= Y - 1, Y = 0)) : (k = t, V += E.charAt(R - Y), R -= Y, Y = 0);
    return V;
  };
  r.__arabicParser__.isArabicDiacritic = function(E) {
    return E !== void 0 && i[E.charCodeAt(0)] !== void 0;
  };
  var P = r.__arabicParser__.getCorrectForm = function(E, R, k) {
    return f(E) ? s(E) === !1 ? -1 : !d(E) || !f(R) && !f(k) || !f(k) && l(R) || l(E) && !f(R) || l(E) && c(R) || l(E) && l(R) ? 0 : m(E) && f(R) && !l(R) && f(k) && d(k) ? 3 : l(E) || !f(k) ? 1 : 2 : -1;
  }, p = function(E) {
    var R = 0, k = 0, V = 0, Y = "", U = "", ot = "", vt = (E = E || "").split("\\s+"), ht = [];
    for (R = 0; R < vt.length; R += 1) {
      for (ht.push(""), k = 0; k < vt[R].length; k += 1) Y = vt[R][k], U = vt[R][k - 1], ot = vt[R][k + 1], f(Y) ? (V = P(Y, U, ot), ht[R] += V !== -1 ? String.fromCharCode(e[Y.charCodeAt(0)][V]) : Y) : ht[R] += Y;
      ht[R] = N(ht[R]);
    }
    return ht.join(" ");
  }, j = r.__arabicParser__.processArabic = r.processArabic = function() {
    var E, R = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, k = [];
    if (Array.isArray(R)) {
      var V = 0;
      for (k = [], V = 0; V < R.length; V += 1) Array.isArray(R[V]) ? k.push([p(R[V][0]), R[V][1], R[V][2]]) : k.push([p(R[V])]);
      E = k;
    } else E = p(R);
    return typeof arguments[0] == "string" ? E : (arguments[0].text = E, arguments[0]);
  };
  r.events.push(["preProcessText", j]);
})(Rt.API), Rt.API.autoPrint = function(r) {
  var e;
  return (r = r || {}).variant = r.variant || "non-conform", r.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
    e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    this.internal.out("/OpenAction " + e + " 0 R");
  })), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = function() {
    var t = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return t;
    }, set: function(l) {
      t = l;
    } });
    var i = 150;
    Object.defineProperty(this, "width", { get: function() {
      return i;
    }, set: function(l) {
      i = isNaN(l) || Number.isInteger(l) === !1 || l < 0 ? 150 : l, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = i + 1);
    } });
    var a = 300;
    Object.defineProperty(this, "height", { get: function() {
      return a;
    }, set: function(l) {
      a = isNaN(l) || Number.isInteger(l) === !1 || l < 0 ? 300 : l, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = a + 1);
    } });
    var s = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return s;
    }, set: function(l) {
      s = l;
    } });
    var f = {};
    Object.defineProperty(this, "style", { get: function() {
      return f;
    }, set: function(l) {
      f = l;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  e.prototype.getContext = function(t, i) {
    var a;
    if ((t = t || "2d") !== "2d") return null;
    for (a in i) this.pdf.context2d.hasOwnProperty(a) && (this.pdf.context2d[a] = i[a]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, e.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, r.events.push(["initialized", function() {
    this.canvas = new e(), this.canvas.pdf = this;
  }]);
})(Rt.API), (function(r) {
  var e = { left: 0, top: 0, bottom: 0, right: 0 }, t = !1, i = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), a.call(this));
  }, a = function() {
    this.internal.__cell__.lastCell = new s(), this.internal.__cell__.pages = 1;
  }, s = function() {
    var c = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return c;
    }, set: function(E) {
      c = E;
    } });
    var d = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return d;
    }, set: function(E) {
      d = E;
    } });
    var m = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return m;
    }, set: function(E) {
      m = E;
    } });
    var N = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return N;
    }, set: function(E) {
      N = E;
    } });
    var P = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return P;
    }, set: function(E) {
      P = E;
    } });
    var p = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return p;
    }, set: function(E) {
      p = E;
    } });
    var j = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return j;
    }, set: function(E) {
      j = E;
    } }), this;
  };
  s.prototype.clone = function() {
    return new s(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, s.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, r.setHeaderFunction = function(c) {
    return i.call(this), this.internal.__cell__.headerFunction = typeof c == "function" ? c : void 0, this;
  }, r.getTextDimensions = function(c, d) {
    i.call(this);
    var m = (d = d || {}).fontSize || this.getFontSize(), N = d.font || this.getFont(), P = d.scaleFactor || this.internal.scaleFactor, p = 0, j = 0, E = 0, R = this;
    if (!Array.isArray(c) && typeof c != "string") {
      if (typeof c != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      c = String(c);
    }
    var k = d.maxWidth;
    k > 0 ? typeof c == "string" ? c = this.splitTextToSize(c, k) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(Y, U) {
      return Y.concat(R.splitTextToSize(U, k));
    }, [])) : c = Array.isArray(c) ? c : [c];
    for (var V = 0; V < c.length; V++) p < (E = this.getStringUnitWidth(c[V], { font: N }) * m) && (p = E);
    return p !== 0 && (j = c.length), { w: p /= P, h: Math.max((j * m * this.getLineHeightFactor() - m * (this.getLineHeightFactor() - 1)) / P, 0) };
  }, r.cellAddPage = function() {
    i.call(this), this.addPage();
    var c = this.internal.__cell__.margins || e;
    return this.internal.__cell__.lastCell = new s(c.left, c.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var f = r.cell = function() {
    var c;
    c = arguments[0] instanceof s ? arguments[0] : new s(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), i.call(this);
    var d = this.internal.__cell__.lastCell, m = this.internal.__cell__.padding, N = this.internal.__cell__.margins || e, P = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return d.lineNumber !== void 0 && (d.lineNumber === c.lineNumber ? (c.x = (d.x || 0) + (d.width || 0), c.y = d.y || 0) : d.y + d.height + c.height + N.bottom > this.getPageHeight() ? (this.cellAddPage(), c.y = N.top, p && P && (this.printHeaderRow(c.lineNumber, !0), c.y += P[0].height)) : c.y = d.y + d.height || c.y), c.text[0] !== void 0 && (this.rect(c.x, c.y, c.width, c.height, t === !0 ? "FD" : void 0), c.align === "right" ? this.text(c.text, c.x + c.width - m, c.y + m, { align: "right", baseline: "top" }) : c.align === "center" ? this.text(c.text, c.x + c.width / 2, c.y + m, { align: "center", baseline: "top", maxWidth: c.width - m - m }) : this.text(c.text, c.x + m, c.y + m, { align: "left", baseline: "top", maxWidth: c.width - m - m })), this.internal.__cell__.lastCell = c, this;
  };
  r.table = function(c, d, m, N, P) {
    if (i.call(this), !m) throw new Error("No data for PDF table.");
    var p, j, E, R, k = [], V = [], Y = [], U = {}, ot = {}, vt = [], ht = [], X = (P = P || {}).autoSize || !1, D = P.printHeaders !== !1, H = P.css && P.css["font-size"] !== void 0 ? 16 * P.css["font-size"] : P.fontSize || 12, w = P.margins || Object.assign({ width: this.getPageWidth() }, e), A = typeof P.padding == "number" ? P.padding : 3, B = P.headerBackgroundColor || "#c8c8c8", q = P.headerTextColor || "#000";
    if (a.call(this), this.internal.__cell__.printHeaders = D, this.internal.__cell__.margins = w, this.internal.__cell__.table_font_size = H, this.internal.__cell__.padding = A, this.internal.__cell__.headerBackgroundColor = B, this.internal.__cell__.headerTextColor = q, this.setFontSize(H), N == null) V = k = Object.keys(m[0]), Y = k.map(function() {
      return "left";
    });
    else if (Array.isArray(N) && Ae(N[0]) === "object") for (k = N.map(function(xt) {
      return xt.name;
    }), V = N.map(function(xt) {
      return xt.prompt || xt.name || "";
    }), Y = N.map(function(xt) {
      return xt.align || "left";
    }), p = 0; p < N.length; p += 1) ot[N[p].name] = 0.7499990551181103 * N[p].width;
    else Array.isArray(N) && typeof N[0] == "string" && (V = k = N, Y = k.map(function() {
      return "left";
    }));
    if (X || Array.isArray(N) && typeof N[0] == "string") for (p = 0; p < k.length; p += 1) {
      for (U[R = k[p]] = m.map(function(xt) {
        return xt[R];
      }), this.setFont(void 0, "bold"), vt.push(this.getTextDimensions(V[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), j = U[R], this.setFont(void 0, "normal"), E = 0; E < j.length; E += 1) vt.push(this.getTextDimensions(j[E], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      ot[R] = Math.max.apply(null, vt) + A + A, vt = [];
    }
    if (D) {
      var et = {};
      for (p = 0; p < k.length; p += 1) et[k[p]] = {}, et[k[p]].text = V[p], et[k[p]].align = Y[p];
      var it = l.call(this, et, ot);
      ht = k.map(function(xt) {
        return new s(c, d, ot[xt], it, et[xt].text, void 0, et[xt].align);
      }), this.setTableHeaderRow(ht), this.printHeaderRow(1, !1);
    }
    var at = N.reduce(function(xt, ft) {
      return xt[ft.name] = ft.align, xt;
    }, {});
    for (p = 0; p < m.length; p += 1) {
      "rowStart" in P && P.rowStart instanceof Function && P.rowStart({ row: p, data: m[p] }, this);
      var K = l.call(this, m[p], ot);
      for (E = 0; E < k.length; E += 1) {
        var st = m[p][k[E]];
        "cellStart" in P && P.cellStart instanceof Function && P.cellStart({ row: p, col: E, data: st }, this), f.call(this, new s(c, d, ot[k[E]], K, st, p + 2, at[k[E]]));
      }
    }
    return this.internal.__cell__.table_x = c, this.internal.__cell__.table_y = d, this;
  };
  var l = function(c, d) {
    var m = this.internal.__cell__.padding, N = this.internal.__cell__.table_font_size, P = this.internal.scaleFactor;
    return Object.keys(c).map(function(p) {
      var j = c[p];
      return this.splitTextToSize(j.hasOwnProperty("text") ? j.text : j, d[p] - m - m);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * N / P + m + m;
    }, this).reduce(function(p, j) {
      return Math.max(p, j);
    }, 0);
  };
  r.setTableHeaderRow = function(c) {
    i.call(this), this.internal.__cell__.tableHeaderRow = c;
  }, r.printHeaderRow = function(c, d) {
    if (i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var m;
    if (t = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var N = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new s(N[0], N[1], N[2], N[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var P = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      m = this.internal.__cell__.tableHeaderRow[p].clone(), d && (m.y = this.internal.__cell__.margins.top || 0, P.push(m)), m.lineNumber = c;
      var j = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), f.call(this, m), this.setTextColor(j);
    }
    P.length > 0 && this.setTableHeaderRow(P), this.setFont(void 0, "normal"), t = !1;
  };
})(Rt.API);
var Yc = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, Jc = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], nl = Vc(Jc), $c = [100, 200, 300, 400, 500, 600, 700, 800, 900], d2 = Vc($c);
function Ho(r) {
  var e = r.family.replace(/"|'/g, "").toLowerCase(), t = (function(s) {
    return Yc[s = s || "normal"] ? s : "normal";
  })(r.style), i = (function(s) {
    return s ? typeof s == "number" ? s >= 100 && s <= 900 && s % 100 == 0 ? s : 400 : /^\d00$/.test(s) ? parseInt(s) : s === "bold" ? 700 : 400 : 400;
  })(r.weight), a = (function(s) {
    return typeof nl[s = s || "normal"] == "number" ? s : "normal";
  })(r.stretch);
  return { family: e, style: t, weight: i, stretch: a, src: r.src || [], ref: r.ref || { name: e, style: [a, t, i].join(" ") } };
}
function zu(r, e, t, i) {
  var a;
  for (a = t; a >= 0 && a < e.length; a += i) if (r[e[a]]) return r[e[a]];
  for (a = t; a >= 0 && a < e.length; a -= i) if (r[e[a]]) return r[e[a]];
}
var p2 = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, Hu = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function Wu(r) {
  return [r.stretch, r.style, r.weight, r.family].join(" ");
}
function Gu(r) {
  return r.trimLeft();
}
function g2(r, e) {
  for (var t = 0; t < r.length; ) {
    if (r.charAt(t) === e) return [r.substring(0, t), r.substring(t + 1)];
    t += 1;
  }
  return null;
}
function m2(r) {
  var e = r.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return e === null ? null : [e[0], r.substring(e[0].length)];
}
var Fs, Vu, Yu, Ji, Es, Ju, $u, Xu, Wo = ["times"];
function Ku(r, e, t, i, a) {
  var s = 4, f = Qu;
  switch (a) {
    case Rt.API.image_compression.FAST:
      s = 1, f = Zu;
      break;
    case Rt.API.image_compression.MEDIUM:
      s = 6, f = tc;
      break;
    case Rt.API.image_compression.SLOW:
      s = 9, f = ec;
  }
  r = (function(c, d, m, N) {
    for (var P, p = c.length / d, j = new Uint8Array(c.length + p), E = [v2, Zu, Qu, tc, ec], R = 0; R < p; R += 1) {
      var k = R * d, V = c.subarray(k, k + d);
      if (N) j.set(N(V, m, P), k + R);
      else {
        for (var Y = E.length, U = [], ot = 0; ot < Y; ot += 1) U[ot] = E[ot](V, m, P);
        var vt = w2(U.concat());
        j.set(U[vt], k + R);
      }
      P = V;
    }
    return j;
  })(r, e, Math.ceil(t * i / 8), f);
  var l = Xo(r, { level: s });
  return Rt.API.__addimage__.arrayBufferToBinaryString(l);
}
function v2(r) {
  var e = Array.apply([], r);
  return e.unshift(0), e;
}
function Zu(r, e) {
  var t = r.length, i = [];
  i[0] = 1;
  for (var a = 0; a < t; a += 1) {
    var s = r[a - e] || 0;
    i[a + 1] = r[a] - s + 256 & 255;
  }
  return i;
}
function Qu(r, e, t) {
  var i = r.length, a = [];
  a[0] = 2;
  for (var s = 0; s < i; s += 1) {
    var f = t && t[s] || 0;
    a[s + 1] = r[s] - f + 256 & 255;
  }
  return a;
}
function tc(r, e, t) {
  var i = r.length, a = [];
  a[0] = 3;
  for (var s = 0; s < i; s += 1) {
    var f = r[s - e] || 0, l = t && t[s] || 0;
    a[s + 1] = r[s] + 256 - (f + l >>> 1) & 255;
  }
  return a;
}
function ec(r, e, t) {
  var i = r.length, a = [];
  a[0] = 4;
  for (var s = 0; s < i; s += 1) {
    var f = b2(r[s - e] || 0, t && t[s] || 0, t && t[s - e] || 0);
    a[s + 1] = r[s] - f + 256 & 255;
  }
  return a;
}
function b2(r, e, t) {
  if (r === e && e === t) return r;
  var i = Math.abs(e - t), a = Math.abs(r - t), s = Math.abs(r + e - t - t);
  return i <= a && i <= s ? r : a <= s ? e : t;
}
function w2(r) {
  var e = r.map(function(t) {
    return t.reduce(function(i, a) {
      return i + Math.abs(a);
    }, 0);
  });
  return e.indexOf(Math.min.apply(null, e));
}
function Go(r, e, t) {
  var i = e * t, a = Math.floor(i / 8), s = 16 - (i - 8 * a + t), f = (1 << t) - 1;
  return Xc(r, a) >> s & f;
}
function rc(r, e, t, i) {
  var a = t * i, s = Math.floor(a / 8), f = 16 - (a - 8 * s + i), l = (1 << i) - 1, c = (e & l) << f;
  (function(d, m, N) {
    if (m + 1 < d.byteLength) d.setUint16(m, N, !1);
    else {
      var P = N >> 8 & 255;
      d.setUint8(m, P);
    }
  })(r, s, Xc(r, s) & ~(l << f) & 65535 | c);
}
function Xc(r, e) {
  return e + 1 < r.byteLength ? r.getUint16(e, !1) : r.getUint8(e) << 8;
}
function y2(r) {
  var e = 0;
  if (r[e++] !== 71 || r[e++] !== 73 || r[e++] !== 70 || r[e++] !== 56 || (r[e++] + 1 & 253) != 56 || r[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var t = r[e++] | r[e++] << 8, i = r[e++] | r[e++] << 8, a = r[e++], s = a >> 7, f = 1 << 1 + (7 & a);
  r[e++], r[e++];
  var l = null, c = null;
  s && (l = e, c = f, e += 3 * f);
  var d = !0, m = [], N = 0, P = null, p = 0, j = null;
  for (this.width = t, this.height = i; d && e < r.length; ) switch (r[e++]) {
    case 33:
      switch (r[e++]) {
        case 255:
          if (r[e] !== 11 || r[e + 1] == 78 && r[e + 2] == 69 && r[e + 3] == 84 && r[e + 4] == 83 && r[e + 5] == 67 && r[e + 6] == 65 && r[e + 7] == 80 && r[e + 8] == 69 && r[e + 9] == 50 && r[e + 10] == 46 && r[e + 11] == 48 && r[e + 12] == 3 && r[e + 13] == 1 && r[e + 16] == 0) e += 14, j = r[e++] | r[e++] << 8, e++;
          else for (e += 12; ; ) {
            if (!((w = r[e++]) >= 0)) throw Error("Invalid block size");
            if (w === 0) break;
            e += w;
          }
          break;
        case 249:
          if (r[e++] !== 4 || r[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var E = r[e++];
          N = r[e++] | r[e++] << 8, P = r[e++], 1 & E || (P = null), p = E >> 2 & 7, e++;
          break;
        case 254:
          for (; ; ) {
            if (!((w = r[e++]) >= 0)) throw Error("Invalid block size");
            if (w === 0) break;
            e += w;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + r[e - 1].toString(16));
      }
      break;
    case 44:
      var R = r[e++] | r[e++] << 8, k = r[e++] | r[e++] << 8, V = r[e++] | r[e++] << 8, Y = r[e++] | r[e++] << 8, U = r[e++], ot = U >> 6 & 1, vt = 1 << 1 + (7 & U), ht = l, X = c, D = !1;
      U >> 7 && (D = !0, ht = e, X = vt, e += 3 * vt);
      var H = e;
      for (e++; ; ) {
        var w;
        if (!((w = r[e++]) >= 0)) throw Error("Invalid block size");
        if (w === 0) break;
        e += w;
      }
      m.push({ x: R, y: k, width: V, height: Y, has_local_palette: D, palette_offset: ht, palette_size: X, data_offset: H, data_length: e - H, transparent_index: P, interlaced: !!ot, delay: N, disposal: p });
      break;
    case 59:
      d = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + r[e - 1].toString(16));
  }
  this.numFrames = function() {
    return m.length;
  }, this.loopCount = function() {
    return j;
  }, this.frameInfo = function(A) {
    if (A < 0 || A >= m.length) throw new Error("Frame index out of range.");
    return m[A];
  }, this.decodeAndBlitFrameBGRA = function(A, B) {
    var q = this.frameInfo(A), et = q.width * q.height, it = new Uint8Array(et);
    nc(r, q.data_offset, it, et);
    var at = q.palette_offset, K = q.transparent_index;
    K === null && (K = 256);
    var st = q.width, xt = t - st, ft = st, x = 4 * (q.y * t + q.x), M = 4 * ((q.y + q.height) * t + q.x), T = x, W = 4 * xt;
    q.interlaced === !0 && (W += 4 * t * 7);
    for (var $ = 8, tt = 0, lt = it.length; tt < lt; ++tt) {
      var ut = it[tt];
      if (ft === 0 && (ft = st, (T += W) >= M && (W = 4 * xt + 4 * t * ($ - 1), T = x + (st + xt) * ($ << 1), $ >>= 1)), ut === K) T += 4;
      else {
        var gt = r[at + 3 * ut], At = r[at + 3 * ut + 1], kt = r[at + 3 * ut + 2];
        B[T++] = kt, B[T++] = At, B[T++] = gt, B[T++] = 255;
      }
      --ft;
    }
  }, this.decodeAndBlitFrameRGBA = function(A, B) {
    var q = this.frameInfo(A), et = q.width * q.height, it = new Uint8Array(et);
    nc(r, q.data_offset, it, et);
    var at = q.palette_offset, K = q.transparent_index;
    K === null && (K = 256);
    var st = q.width, xt = t - st, ft = st, x = 4 * (q.y * t + q.x), M = 4 * ((q.y + q.height) * t + q.x), T = x, W = 4 * xt;
    q.interlaced === !0 && (W += 4 * t * 7);
    for (var $ = 8, tt = 0, lt = it.length; tt < lt; ++tt) {
      var ut = it[tt];
      if (ft === 0 && (ft = st, (T += W) >= M && (W = 4 * xt + 4 * t * ($ - 1), T = x + (st + xt) * ($ << 1), $ >>= 1)), ut === K) T += 4;
      else {
        var gt = r[at + 3 * ut], At = r[at + 3 * ut + 1], kt = r[at + 3 * ut + 2];
        B[T++] = gt, B[T++] = At, B[T++] = kt, B[T++] = 255;
      }
      --ft;
    }
  };
}
function nc(r, e, t, i) {
  for (var a = r[e++], s = 1 << a, f = s + 1, l = f + 1, c = a + 1, d = (1 << c) - 1, m = 0, N = 0, P = 0, p = r[e++], j = new Int32Array(4096), E = null; ; ) {
    for (; m < 16 && p !== 0; ) N |= r[e++] << m, m += 8, p === 1 ? p = r[e++] : --p;
    if (m < c) break;
    var R = N & d;
    if (N >>= c, m -= c, R !== s) {
      if (R === f) break;
      for (var k = R < l ? R : E, V = 0, Y = k; Y > s; ) Y = j[Y] >> 8, ++V;
      var U = Y;
      if (P + V + (k !== R ? 1 : 0) > i) return void Se.log("Warning, gif stream longer than expected.");
      t[P++] = U;
      var ot = P += V;
      for (k !== R && (t[P++] = U), Y = k; V--; ) Y = j[Y], t[--ot] = 255 & Y, Y >>= 8;
      E !== null && l < 4096 && (j[l++] = E << 8 | U, l >= d + 1 && c < 12 && (++c, d = d << 1 | 1)), E = R;
    } else l = f + 1, d = (1 << (c = a + 1)) - 1, E = null;
  }
  return P !== i && Se.log("Warning, gif stream shorter than expected."), t;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function Vo(r) {
  var e, t, i, a, s, f = Math.floor, l = new Array(64), c = new Array(64), d = new Array(64), m = new Array(64), N = new Array(65535), P = new Array(65535), p = new Array(64), j = new Array(64), E = [], R = 0, k = 7, V = new Array(64), Y = new Array(64), U = new Array(64), ot = new Array(256), vt = new Array(2048), ht = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], X = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], D = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], H = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], w = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], A = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], B = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], q = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], et = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function it(x, M) {
    for (var T = 0, W = 0, $ = new Array(), tt = 1; tt <= 16; tt++) {
      for (var lt = 1; lt <= x[tt]; lt++) $[M[W]] = [], $[M[W]][0] = T, $[M[W]][1] = tt, W++, T++;
      T *= 2;
    }
    return $;
  }
  function at(x) {
    for (var M = x[0], T = x[1] - 1; T >= 0; ) M & 1 << T && (R |= 1 << k), T--, --k < 0 && (R == 255 ? (K(255), K(0)) : K(R), k = 7, R = 0);
  }
  function K(x) {
    E.push(x);
  }
  function st(x) {
    K(x >> 8 & 255), K(255 & x);
  }
  function xt(x, M, T, W, $) {
    for (var tt, lt = $[0], ut = $[240], gt = (function(yt, Wt) {
      var It, zt, qt, ve, ue, Zt, he, ce, Mt, ee, Tt = 0;
      for (Mt = 0; Mt < 8; ++Mt) {
        It = yt[Tt], zt = yt[Tt + 1], qt = yt[Tt + 2], ve = yt[Tt + 3], ue = yt[Tt + 4], Zt = yt[Tt + 5], he = yt[Tt + 6];
        var qe = It + (ce = yt[Tt + 7]), pe = It - ce, se = zt + he, oe = zt - he, Ee = qt + Zt, Ut = qt - Zt, ke = ve + ue, Yt = ve - ue, Qt = qe + ke, Oe = qe - ke, le = se + Ee, Gt = se - Ee;
        yt[Tt] = Qt + le, yt[Tt + 4] = Qt - le;
        var be = 0.707106781 * (Gt + Oe);
        yt[Tt + 2] = Oe + be, yt[Tt + 6] = Oe - be;
        var si = 0.382683433 * ((Qt = Yt + Ut) - (Gt = oe + pe)), fr = 0.5411961 * Qt + si, wn = 1.306562965 * Gt + si, sn = 0.707106781 * (le = Ut + oe), Vt = pe + sn, yn = pe - sn;
        yt[Tt + 5] = yn + fr, yt[Tt + 3] = yn - fr, yt[Tt + 1] = Vt + wn, yt[Tt + 7] = Vt - wn, Tt += 8;
      }
      for (Tt = 0, Mt = 0; Mt < 8; ++Mt) {
        It = yt[Tt], zt = yt[Tt + 8], qt = yt[Tt + 16], ve = yt[Tt + 24], ue = yt[Tt + 32], Zt = yt[Tt + 40], he = yt[Tt + 48];
        var xn = It + (ce = yt[Tt + 56]), Rr = It - ce, Tr = zt + he, Be = zt - he, nr = qt + Zt, ar = qt - Zt, oi = ve + ue, qn = ve - ue, Yr = xn + oi, on = xn - oi, Jr = Tr + nr, $r = Tr - nr;
        yt[Tt] = Yr + Jr, yt[Tt + 32] = Yr - Jr;
        var Dr = 0.707106781 * ($r + on);
        yt[Tt + 16] = on + Dr, yt[Tt + 48] = on - Dr;
        var li = 0.382683433 * ((Yr = qn + ar) - ($r = Be + Rr)), ln = 0.5411961 * Yr + li, ui = 1.306562965 * $r + li, Oi = 0.707106781 * (Jr = ar + Be), Mi = Rr + Oi, ji = Rr - Oi;
        yt[Tt + 40] = ji + ln, yt[Tt + 24] = ji - ln, yt[Tt + 8] = Mi + ui, yt[Tt + 56] = Mi - ui, Tt++;
      }
      for (Mt = 0; Mt < 64; ++Mt) ee = yt[Mt] * Wt[Mt], p[Mt] = ee > 0 ? ee + 0.5 | 0 : ee - 0.5 | 0;
      return p;
    })(x, M), At = 0; At < 64; ++At) j[ht[At]] = gt[At];
    var kt = j[0] - T;
    T = j[0], kt == 0 ? at(W[0]) : (at(W[P[tt = 32767 + kt]]), at(N[tt]));
    for (var St = 63; St > 0 && j[St] == 0; ) St--;
    if (St == 0) return at(lt), T;
    for (var Dt, I = 1; I <= St; ) {
      for (var Lt = I; j[I] == 0 && I <= St; ) ++I;
      var ae = I - Lt;
      if (ae >= 16) {
        Dt = ae >> 4;
        for (var Ht = 1; Ht <= Dt; ++Ht) at(ut);
        ae &= 15;
      }
      tt = 32767 + j[I], at($[(ae << 4) + P[tt]]), at(N[tt]), I++;
    }
    return St != 63 && at(lt), T;
  }
  function ft(x) {
    x = Math.min(Math.max(x, 1), 100), s != x && ((function(M) {
      for (var T = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], W = 0; W < 64; W++) {
        var $ = f((T[W] * M + 50) / 100);
        $ = Math.min(Math.max($, 1), 255), l[ht[W]] = $;
      }
      for (var tt = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], lt = 0; lt < 64; lt++) {
        var ut = f((tt[lt] * M + 50) / 100);
        ut = Math.min(Math.max(ut, 1), 255), c[ht[lt]] = ut;
      }
      for (var gt = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], At = 0, kt = 0; kt < 8; kt++) for (var St = 0; St < 8; St++) d[At] = 1 / (l[ht[At]] * gt[kt] * gt[St] * 8), m[At] = 1 / (c[ht[At]] * gt[kt] * gt[St] * 8), At++;
    })(x < 50 ? Math.floor(5e3 / x) : Math.floor(200 - 2 * x)), s = x);
  }
  this.encode = function(x, M) {
    M && ft(M), E = new Array(), R = 0, k = 7, st(65496), st(65504), st(16), K(74), K(70), K(73), K(70), K(0), K(1), K(1), K(0), st(1), st(1), K(0), K(0), (function() {
      st(65499), st(132), K(0);
      for (var zt = 0; zt < 64; zt++) K(l[zt]);
      K(1);
      for (var qt = 0; qt < 64; qt++) K(c[qt]);
    })(), (function(zt, qt) {
      st(65472), st(17), K(8), st(qt), st(zt), K(3), K(1), K(17), K(0), K(2), K(17), K(1), K(3), K(17), K(1);
    })(x.width, x.height), (function() {
      st(65476), st(418), K(0);
      for (var zt = 0; zt < 16; zt++) K(X[zt + 1]);
      for (var qt = 0; qt <= 11; qt++) K(D[qt]);
      K(16);
      for (var ve = 0; ve < 16; ve++) K(H[ve + 1]);
      for (var ue = 0; ue <= 161; ue++) K(w[ue]);
      K(1);
      for (var Zt = 0; Zt < 16; Zt++) K(A[Zt + 1]);
      for (var he = 0; he <= 11; he++) K(B[he]);
      K(17);
      for (var ce = 0; ce < 16; ce++) K(q[ce + 1]);
      for (var Mt = 0; Mt <= 161; Mt++) K(et[Mt]);
    })(), st(65498), st(12), K(3), K(1), K(0), K(2), K(17), K(3), K(17), K(0), K(63), K(0);
    var T = 0, W = 0, $ = 0;
    R = 0, k = 7, this.encode.displayName = "_encode_";
    for (var tt, lt, ut, gt, At, kt, St, Dt, I, Lt = x.data, ae = x.width, Ht = x.height, yt = 4 * ae, Wt = 0; Wt < Ht; ) {
      for (tt = 0; tt < yt; ) {
        for (At = yt * Wt + tt, St = -1, Dt = 0, I = 0; I < 64; I++) kt = At + (Dt = I >> 3) * yt + (St = 4 * (7 & I)), Wt + Dt >= Ht && (kt -= yt * (Wt + 1 + Dt - Ht)), tt + St >= yt && (kt -= tt + St - yt + 4), lt = Lt[kt++], ut = Lt[kt++], gt = Lt[kt++], V[I] = (vt[lt] + vt[ut + 256 | 0] + vt[gt + 512 | 0] >> 16) - 128, Y[I] = (vt[lt + 768 | 0] + vt[ut + 1024 | 0] + vt[gt + 1280 | 0] >> 16) - 128, U[I] = (vt[lt + 1280 | 0] + vt[ut + 1536 | 0] + vt[gt + 1792 | 0] >> 16) - 128;
        T = xt(V, d, T, e, i), W = xt(Y, m, W, t, a), $ = xt(U, m, $, t, a), tt += 32;
      }
      Wt += 8;
    }
    if (k >= 0) {
      var It = [];
      It[1] = k + 1, It[0] = (1 << k + 1) - 1, at(It);
    }
    return st(65497), new Uint8Array(E);
  }, r = r || 50, (function() {
    for (var x = String.fromCharCode, M = 0; M < 256; M++) ot[M] = x(M);
  })(), e = it(X, D), t = it(A, B), i = it(H, w), a = it(q, et), (function() {
    for (var x = 1, M = 2, T = 1; T <= 15; T++) {
      for (var W = x; W < M; W++) P[32767 + W] = T, N[32767 + W] = [], N[32767 + W][1] = T, N[32767 + W][0] = W;
      for (var $ = -(M - 1); $ <= -x; $++) P[32767 + $] = T, N[32767 + $] = [], N[32767 + $][1] = T, N[32767 + $][0] = M - 1 + $;
      x <<= 1, M <<= 1;
    }
  })(), (function() {
    for (var x = 0; x < 256; x++) vt[x] = 19595 * x, vt[x + 256 | 0] = 38470 * x, vt[x + 512 | 0] = 7471 * x + 32768, vt[x + 768 | 0] = -11059 * x, vt[x + 1024 | 0] = -21709 * x, vt[x + 1280 | 0] = 32768 * x + 8421375, vt[x + 1536 | 0] = -27439 * x, vt[x + 1792 | 0] = -5329 * x;
  })(), ft(r);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function en(r, e) {
  if (this.pos = 0, this.buffer = r, this.datav = new DataView(r.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function ic(r) {
  function e(D) {
    if (!D) throw Error("assert :P");
  }
  function t(D, H, w) {
    for (var A = 0; 4 > A; A++) if (D[H + A] != w.charCodeAt(A)) return !0;
    return !1;
  }
  function i(D, H, w, A, B) {
    for (var q = 0; q < B; q++) D[H + q] = w[A + q];
  }
  function a(D, H, w, A) {
    for (var B = 0; B < A; B++) D[H + B] = w;
  }
  function s(D) {
    return new Int32Array(D);
  }
  function f(D, H) {
    for (var w = [], A = 0; A < D; A++) w.push(new H());
    return w;
  }
  function l(D, H) {
    var w = [];
    return (function A(B, q, et) {
      for (var it = et[q], at = 0; at < it && (B.push(et.length > q + 1 ? [] : new H()), !(et.length < q + 1)); at++) A(B[at], q + 1, et);
    })(w, 0, D), w;
  }
  var c = function() {
    var D = this;
    function H(n, o) {
      for (var h = 1 << o - 1 >>> 0; n & h; ) h >>>= 1;
      return h ? (n & h - 1) + h : n;
    }
    function w(n, o, h, g, b) {
      e(!(g % h));
      do
        n[o + (g -= h)] = b;
      while (0 < g);
    }
    function A(n, o, h, g, b) {
      if (e(2328 >= b), 512 >= b) var y = s(512);
      else if ((y = s(b)) == null) return 0;
      return (function(_, L, S, C, G, nt) {
        var F, J, Q = L, ct = 1 << S, rt = s(16), dt = s(16);
        for (e(G != 0), e(C != null), e(_ != null), e(0 < S), J = 0; J < G; ++J) {
          if (15 < C[J]) return 0;
          ++rt[C[J]];
        }
        if (rt[0] == G) return 0;
        for (dt[1] = 0, F = 1; 15 > F; ++F) {
          if (rt[F] > 1 << F) return 0;
          dt[F + 1] = dt[F] + rt[F];
        }
        for (J = 0; J < G; ++J) F = C[J], 0 < C[J] && (nt[dt[F]++] = J);
        if (dt[15] == 1) return (C = new B()).g = 0, C.value = nt[0], w(_, Q, 1, ct, C), ct;
        var mt, _t = -1, wt = ct - 1, Bt = 0, Pt = 1, ne = 1, Et = 1 << S;
        for (J = 0, F = 1, G = 2; F <= S; ++F, G <<= 1) {
          if (Pt += ne <<= 1, 0 > (ne -= rt[F])) return 0;
          for (; 0 < rt[F]; --rt[F]) (C = new B()).g = F, C.value = nt[J++], w(_, Q + Bt, G, Et, C), Bt = H(Bt, F);
        }
        for (F = S + 1, G = 2; 15 >= F; ++F, G <<= 1) {
          if (Pt += ne <<= 1, 0 > (ne -= rt[F])) return 0;
          for (; 0 < rt[F]; --rt[F]) {
            if (C = new B(), (Bt & wt) != _t) {
              for (Q += Et, mt = 1 << (_t = F) - S; 15 > _t && !(0 >= (mt -= rt[_t])); ) ++_t, mt <<= 1;
              ct += Et = 1 << (mt = _t - S), _[L + (_t = Bt & wt)].g = mt + S, _[L + _t].value = Q - L - _t;
            }
            C.g = F - S, C.value = nt[J++], w(_, Q + (Bt >> S), G, Et, C), Bt = H(Bt, F);
          }
        }
        return Pt != 2 * dt[15] - 1 ? 0 : ct;
      })(n, o, h, g, b, y);
    }
    function B() {
      this.value = this.g = 0;
    }
    function q() {
      this.value = this.g = 0;
    }
    function et() {
      this.G = f(5, B), this.H = s(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = f(yi, q);
    }
    function it(n, o, h, g) {
      e(n != null), e(o != null), e(2147483648 > g), n.Ca = 254, n.I = 0, n.b = -8, n.Ka = 0, n.oa = o, n.pa = h, n.Jd = o, n.Yc = h + g, n.Zc = 4 <= g ? h + g - 4 + 1 : h, lt(n);
    }
    function at(n, o) {
      for (var h = 0; 0 < o--; ) h |= gt(n, 128) << o;
      return h;
    }
    function K(n, o) {
      var h = at(n, o);
      return ut(n) ? -h : h;
    }
    function st(n, o, h, g) {
      var b, y = 0;
      for (e(n != null), e(o != null), e(4294967288 > g), n.Sb = g, n.Ra = 0, n.u = 0, n.h = 0, 4 < g && (g = 4), b = 0; b < g; ++b) y += o[h + b] << 8 * b;
      n.Ra = y, n.bb = g, n.oa = o, n.pa = h;
    }
    function xt(n) {
      for (; 8 <= n.u && n.bb < n.Sb; ) n.Ra >>>= 8, n.Ra += n.oa[n.pa + n.bb] << Wn - 8 >>> 0, ++n.bb, n.u -= 8;
      W(n) && (n.h = 1, n.u = 0);
    }
    function ft(n, o) {
      if (e(0 <= o), !n.h && o <= Sr) {
        var h = T(n) & Lr[o];
        return n.u += o, xt(n), h;
      }
      return n.h = 1, n.u = 0;
    }
    function x() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function M() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function T(n) {
      return n.Ra >>> (n.u & Wn - 1) >>> 0;
    }
    function W(n) {
      return e(n.bb <= n.Sb), n.h || n.bb == n.Sb && n.u > Wn;
    }
    function $(n, o) {
      n.u = o, n.h = W(n);
    }
    function tt(n) {
      n.u >= En && (e(n.u >= En), xt(n));
    }
    function lt(n) {
      e(n != null && n.oa != null), n.pa < n.Zc ? (n.I = (n.oa[n.pa++] | n.I << 8) >>> 0, n.b += 8) : (e(n != null && n.oa != null), n.pa < n.Yc ? (n.b += 8, n.I = n.oa[n.pa++] | n.I << 8) : n.Ka ? n.b = 0 : (n.I <<= 8, n.b += 8, n.Ka = 1));
    }
    function ut(n) {
      return at(n, 1);
    }
    function gt(n, o) {
      var h = n.Ca;
      0 > n.b && lt(n);
      var g = n.b, b = h * o >>> 8, y = (n.I >>> g > b) + 0;
      for (y ? (h -= b, n.I -= b + 1 << g >>> 0) : h = b + 1, g = h, b = 0; 256 <= g; ) b += 8, g >>= 8;
      return g = 7 ^ b + Gn[g], n.b -= g, n.Ca = (h << g) - 1, y;
    }
    function At(n, o, h) {
      n[o + 0] = h >> 24 & 255, n[o + 1] = h >> 16 & 255, n[o + 2] = h >> 8 & 255, n[o + 3] = 255 & h;
    }
    function kt(n, o) {
      return n[o + 0] | n[o + 1] << 8;
    }
    function St(n, o) {
      return kt(n, o) | n[o + 2] << 16;
    }
    function Dt(n, o) {
      return kt(n, o) | kt(n, o + 2) << 16;
    }
    function I(n, o) {
      var h = 1 << o;
      return e(n != null), e(0 < o), n.X = s(h), n.X == null ? 0 : (n.Mb = 32 - o, n.Xa = o, 1);
    }
    function Lt(n, o) {
      e(n != null), e(o != null), e(n.Xa == o.Xa), i(o.X, 0, n.X, 0, 1 << o.Xa);
    }
    function ae() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Ht(n, o, h, g) {
      e(h != null), e(g != null);
      var b = h[0], y = g[0];
      return b == 0 && (b = (n * y + o / 2) / o), y == 0 && (y = (o * b + n / 2) / n), 0 >= b || 0 >= y ? 0 : (h[0] = b, g[0] = y, 1);
    }
    function yt(n, o) {
      return n + (1 << o) - 1 >>> o;
    }
    function Wt(n, o) {
      return ((4278255360 & n) + (4278255360 & o) >>> 0 & 4278255360) + ((16711935 & n) + (16711935 & o) >>> 0 & 16711935) >>> 0;
    }
    function It(n, o) {
      D[o] = function(h, g, b, y, _, L, S) {
        var C;
        for (C = 0; C < _; ++C) {
          var G = D[n](L[S + C - 1], b, y + C);
          L[S + C] = Wt(h[g + C], G);
        }
      };
    }
    function zt() {
      this.ud = this.hd = this.jd = 0;
    }
    function qt(n, o) {
      return ((4278124286 & (n ^ o)) >>> 1) + (n & o) >>> 0;
    }
    function ve(n) {
      return 0 <= n && 256 > n ? n : 0 > n ? 0 : 255 < n ? 255 : void 0;
    }
    function ue(n, o) {
      return ve(n + (n - o + 0.5 >> 1));
    }
    function Zt(n, o, h) {
      return Math.abs(o - h) - Math.abs(n - h);
    }
    function he(n, o, h, g, b, y, _) {
      for (g = y[_ - 1], h = 0; h < b; ++h) y[_ + h] = g = Wt(n[o + h], g);
    }
    function ce(n, o, h, g, b) {
      var y;
      for (y = 0; y < h; ++y) {
        var _ = n[o + y], L = _ >> 8 & 255, S = 16711935 & (S = (S = 16711935 & _) + ((L << 16) + L));
        g[b + y] = (4278255360 & _) + S >>> 0;
      }
    }
    function Mt(n, o) {
      o.jd = 255 & n, o.hd = n >> 8 & 255, o.ud = n >> 16 & 255;
    }
    function ee(n, o, h, g, b, y) {
      var _;
      for (_ = 0; _ < g; ++_) {
        var L = o[h + _], S = L >>> 8, C = L, G = 255 & (G = (G = L >>> 16) + ((n.jd << 24 >> 24) * (S << 24 >> 24) >>> 5));
        C = 255 & (C = (C += (n.hd << 24 >> 24) * (S << 24 >> 24) >>> 5) + ((n.ud << 24 >> 24) * (G << 24 >> 24) >>> 5)), b[y + _] = (4278255360 & L) + (G << 16) + C;
      }
    }
    function Tt(n, o, h, g, b) {
      D[o] = function(y, _, L, S, C, G, nt, F, J) {
        for (S = nt; S < F; ++S) for (nt = 0; nt < J; ++nt) C[G++] = b(L[g(y[_++])]);
      }, D[n] = function(y, _, L, S, C, G, nt) {
        var F = 8 >> y.b, J = y.Ea, Q = y.K[0], ct = y.w;
        if (8 > F) for (y = (1 << y.b) - 1, ct = (1 << F) - 1; _ < L; ++_) {
          var rt, dt = 0;
          for (rt = 0; rt < J; ++rt) rt & y || (dt = g(S[C++])), G[nt++] = b(Q[dt & ct]), dt >>= F;
        }
        else D["VP8LMapColor" + h](S, C, Q, ct, G, nt, _, L, J);
      };
    }
    function qe(n, o, h, g, b) {
      for (h = o + h; o < h; ) {
        var y = n[o++];
        g[b++] = y >> 16 & 255, g[b++] = y >> 8 & 255, g[b++] = 255 & y;
      }
    }
    function pe(n, o, h, g, b) {
      for (h = o + h; o < h; ) {
        var y = n[o++];
        g[b++] = y >> 16 & 255, g[b++] = y >> 8 & 255, g[b++] = 255 & y, g[b++] = y >> 24 & 255;
      }
    }
    function se(n, o, h, g, b) {
      for (h = o + h; o < h; ) {
        var y = (_ = n[o++]) >> 16 & 240 | _ >> 12 & 15, _ = 240 & _ | _ >> 28 & 15;
        g[b++] = y, g[b++] = _;
      }
    }
    function oe(n, o, h, g, b) {
      for (h = o + h; o < h; ) {
        var y = (_ = n[o++]) >> 16 & 248 | _ >> 13 & 7, _ = _ >> 5 & 224 | _ >> 3 & 31;
        g[b++] = y, g[b++] = _;
      }
    }
    function Ee(n, o, h, g, b) {
      for (h = o + h; o < h; ) {
        var y = n[o++];
        g[b++] = 255 & y, g[b++] = y >> 8 & 255, g[b++] = y >> 16 & 255;
      }
    }
    function Ut(n, o, h, g, b, y) {
      if (y == 0) for (h = o + h; o < h; ) At(g, ((y = n[o++])[0] >> 24 | y[1] >> 8 & 65280 | y[2] << 8 & 16711680 | y[3] << 24) >>> 0), b += 32;
      else i(g, b, n, o, h);
    }
    function ke(n, o) {
      D[o][0] = D[n + "0"], D[o][1] = D[n + "1"], D[o][2] = D[n + "2"], D[o][3] = D[n + "3"], D[o][4] = D[n + "4"], D[o][5] = D[n + "5"], D[o][6] = D[n + "6"], D[o][7] = D[n + "7"], D[o][8] = D[n + "8"], D[o][9] = D[n + "9"], D[o][10] = D[n + "10"], D[o][11] = D[n + "11"], D[o][12] = D[n + "12"], D[o][13] = D[n + "13"], D[o][14] = D[n + "0"], D[o][15] = D[n + "0"];
    }
    function Yt(n) {
      return n == uo || n == co || n == ds || n == ho;
    }
    function Qt() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Oe() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function le() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Qt(), this.f.kb = new Oe(), this.sd = null;
    }
    function Gt() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function be() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function si(n) {
      return alert("todo:WebPSamplerProcessPlane"), n.T;
    }
    function fr(n, o) {
      var h = n.T, g = o.ba.f.RGBA, b = g.eb, y = g.fb + n.ka * g.A, _ = Gr[o.ba.S], L = n.y, S = n.O, C = n.f, G = n.N, nt = n.ea, F = n.W, J = o.cc, Q = o.dc, ct = o.Mc, rt = o.Nc, dt = n.ka, mt = n.ka + n.T, _t = n.U, wt = _t + 1 >> 1;
      for (dt == 0 ? _(L, S, null, null, C, G, nt, F, C, G, nt, F, b, y, null, null, _t) : (_(o.ec, o.fc, L, S, J, Q, ct, rt, C, G, nt, F, b, y - g.A, b, y, _t), ++h); dt + 2 < mt; dt += 2) J = C, Q = G, ct = nt, rt = F, G += n.Rc, F += n.Rc, y += 2 * g.A, _(L, (S += 2 * n.fa) - n.fa, L, S, J, Q, ct, rt, C, G, nt, F, b, y - g.A, b, y, _t);
      return S += n.fa, n.j + mt < n.o ? (i(o.ec, o.fc, L, S, _t), i(o.cc, o.dc, C, G, wt), i(o.Mc, o.Nc, nt, F, wt), h--) : 1 & mt || _(L, S, null, null, C, G, nt, F, C, G, nt, F, b, y + g.A, null, null, _t), h;
    }
    function wn(n, o, h) {
      var g = n.F, b = [n.J];
      if (g != null) {
        var y = n.U, _ = o.ba.S, L = _ == fs || _ == ds;
        o = o.ba.f.RGBA;
        var S = [0], C = n.ka;
        S[0] = n.T, n.Kb && (C == 0 ? --S[0] : (--C, b[0] -= n.width), n.j + n.ka + n.T == n.o && (S[0] = n.o - n.j - C));
        var G = o.eb;
        C = o.fb + C * o.A, n = ml(g, b[0], n.width, y, S, G, C + (L ? 0 : 3), o.A), e(h == S), n && Yt(_) && Sa(G, C, L, y, S, o.A);
      }
      return 0;
    }
    function sn(n) {
      var o = n.ma, h = o.ba.S, g = 11 > h, b = h == cs || h == hs || h == fs || h == lo || h == 12 || Yt(h);
      if (o.memory = null, o.Ib = null, o.Jb = null, o.Nd = null, !ba(o.Oa, n, b ? 11 : 12)) return 0;
      if (b && Yt(h) && ga(), n.da) alert("todo:use_scaling");
      else {
        if (g) {
          if (o.Ib = si, n.Kb) {
            if (h = n.U + 1 >> 1, o.memory = s(n.U + 2 * h), o.memory == null) return 0;
            o.ec = o.memory, o.fc = 0, o.cc = o.ec, o.dc = o.fc + n.U, o.Mc = o.cc, o.Nc = o.dc + h, o.Ib = fr, ga();
          }
        } else alert("todo:EmitYUV");
        b && (o.Jb = wn, g && Kr());
      }
      if (g && !El) {
        for (n = 0; 256 > n; ++n) vh[n] = 89858 * (n - 128) + gs >> ps, yh[n] = -22014 * (n - 128) + gs, wh[n] = -45773 * (n - 128), bh[n] = 113618 * (n - 128) + gs >> ps;
        for (n = Pa; n < go; ++n) o = 76283 * (n - 16) + gs >> ps, xh[n - Pa] = un(o, 255), _h[n - Pa] = un(o + 8 >> 4, 15);
        El = 1;
      }
      return 1;
    }
    function Vt(n) {
      var o = n.ma, h = n.U, g = n.T;
      return e(!(1 & n.ka)), 0 >= h || 0 >= g ? 0 : (h = o.Ib(n, o), o.Jb != null && o.Jb(n, o, h), o.Dc += h, 1);
    }
    function yn(n) {
      n.ma.memory = null;
    }
    function xn(n, o, h, g) {
      return ft(n, 8) != 47 ? 0 : (o[0] = ft(n, 14) + 1, h[0] = ft(n, 14) + 1, g[0] = ft(n, 1), ft(n, 3) != 0 ? 0 : !n.h);
    }
    function Rr(n, o) {
      if (4 > n) return n + 1;
      var h = n - 2 >> 1;
      return (2 + (1 & n) << h) + ft(o, h) + 1;
    }
    function Tr(n, o) {
      return 120 < o ? o - 120 : 1 <= (h = ((h = nh[o - 1]) >> 4) * n + (8 - (15 & h))) ? h : 1;
      var h;
    }
    function Be(n, o, h) {
      var g = T(h), b = n[o += 255 & g].g - 8;
      return 0 < b && ($(h, h.u + 8), g = T(h), o += n[o].value, o += g & (1 << b) - 1), $(h, h.u + n[o].g), n[o].value;
    }
    function nr(n, o, h) {
      return h.g += n.g, h.value += n.value << o >>> 0, e(8 >= h.g), n.g;
    }
    function ar(n, o, h) {
      var g = n.xc;
      return e((o = g == 0 ? 0 : n.vc[n.md * (h >> g) + (o >> g)]) < n.Wb), n.Ya[o];
    }
    function oi(n, o, h, g) {
      var b = n.ab, y = n.c * o, _ = n.C;
      o = _ + o;
      var L = h, S = g;
      for (g = n.Ta, h = n.Ua; 0 < b--; ) {
        var C = n.gc[b], G = _, nt = o, F = L, J = S, Q = (S = g, L = h, C.Ea);
        switch (e(G < nt), e(nt <= C.nc), C.hc) {
          case 2:
            Ue(F, J, (nt - G) * Q, S, L);
            break;
          case 0:
            var ct = G, rt = nt, dt = S, mt = L, _t = (Et = C).Ea;
            ct == 0 && (ya(F, J, null, null, 1, dt, mt), he(F, J + 1, 0, 0, _t - 1, dt, mt + 1), J += _t, mt += _t, ++ct);
            for (var wt = 1 << Et.b, Bt = wt - 1, Pt = yt(_t, Et.b), ne = Et.K, Et = Et.w + (ct >> Et.b) * Pt; ct < rt; ) {
              var fe = ne, tr = Et, ie = 1;
              for (Hi(F, J, dt, mt - _t, 1, dt, mt); ie < _t; ) {
                var Ot = (ie & ~Bt) + wt;
                Ot > _t && (Ot = _t), (0, _a[fe[tr++] >> 8 & 15])(F, J + +ie, dt, mt + ie - _t, Ot - ie, dt, mt + ie), ie = Ot;
              }
              J += _t, mt += _t, ++ct & Bt || (Et += Pt);
            }
            nt != C.nc && i(S, L - Q, S, L + (nt - G - 1) * Q, Q);
            break;
          case 1:
            for (Q = F, rt = J, _t = (F = C.Ea) - (mt = F & ~(dt = (J = 1 << C.b) - 1)), ct = yt(F, C.b), wt = C.K, C = C.w + (G >> C.b) * ct; G < nt; ) {
              for (Bt = wt, Pt = C, ne = new zt(), Et = rt + mt, fe = rt + F; rt < Et; ) Mt(Bt[Pt++], ne), Aa(ne, Q, rt, J, S, L), rt += J, L += J;
              rt < fe && (Mt(Bt[Pt++], ne), Aa(ne, Q, rt, _t, S, L), rt += _t, L += _t), ++G & dt || (C += ct);
            }
            break;
          case 3:
            if (F == S && J == L && 0 < C.b) {
              for (rt = S, F = Q = L + (nt - G) * Q - (mt = (nt - G) * yt(C.Ea, C.b)), J = S, dt = L, ct = [], mt = (_t = mt) - 1; 0 <= mt; --mt) ct[mt] = J[dt + mt];
              for (mt = _t - 1; 0 <= mt; --mt) rt[F + mt] = ct[mt];
              ss(C, G, nt, S, Q, S, L);
            } else ss(C, G, nt, F, J, S, L);
        }
        L = g, S = h;
      }
      S != h && i(g, h, L, S, y);
    }
    function qn(n, o) {
      var h = n.V, g = n.Ba + n.c * n.C, b = o - n.C;
      if (e(o <= n.l.o), e(16 >= b), 0 < b) {
        var y = n.l, _ = n.Ta, L = n.Ua, S = y.width;
        if (oi(n, b, h, g), b = L = [L], e((h = n.C) < (g = o)), e(y.v < y.va), g > y.o && (g = y.o), h < y.j) {
          var C = y.j - h;
          h = y.j, b[0] += C * S;
        }
        if (h >= g ? h = 0 : (b[0] += 4 * y.v, y.ka = h - y.j, y.U = y.va - y.v, y.T = g - h, h = 1), h) {
          if (L = L[0], 11 > (h = n.ca).S) {
            var G = h.f.RGBA, nt = (g = h.S, b = y.U, y = y.T, C = G.eb, G.A), F = y;
            for (G = G.fb + n.Ma * G.A; 0 < F--; ) {
              var J = _, Q = L, ct = b, rt = C, dt = G;
              switch (g) {
                case us:
                  Na(J, Q, ct, rt, dt);
                  break;
                case cs:
                  Vn(J, Q, ct, rt, dt);
                  break;
                case uo:
                  Vn(J, Q, ct, rt, dt), Sa(rt, dt, 0, ct, 1, 0);
                  break;
                case Al:
                  xi(J, Q, ct, rt, dt);
                  break;
                case hs:
                  Ut(J, Q, ct, rt, dt, 1);
                  break;
                case co:
                  Ut(J, Q, ct, rt, dt, 1), Sa(rt, dt, 0, ct, 1, 0);
                  break;
                case fs:
                  Ut(J, Q, ct, rt, dt, 0);
                  break;
                case ds:
                  Ut(J, Q, ct, rt, dt, 0), Sa(rt, dt, 1, ct, 1, 0);
                  break;
                case lo:
                  Yn(J, Q, ct, rt, dt);
                  break;
                case ho:
                  Yn(J, Q, ct, rt, dt), gl(rt, dt, ct, 1, 0);
                  break;
                case Nl:
                  Jn(J, Q, ct, rt, dt);
                  break;
                default:
                  e(0);
              }
              L += S, G += nt;
            }
            n.Ma += y;
          } else alert("todo:EmitRescaledRowsYUVA");
          e(n.Ma <= h.height);
        }
      }
      n.C = o, e(n.C <= n.i);
    }
    function Yr(n) {
      var o;
      if (0 < n.ua) return 0;
      for (o = 0; o < n.Wb; ++o) {
        var h = n.Ya[o].G, g = n.Ya[o].H;
        if (0 < h[1][g[1] + 0].g || 0 < h[2][g[2] + 0].g || 0 < h[3][g[3] + 0].g) return 0;
      }
      return 1;
    }
    function on(n, o, h, g, b, y) {
      if (n.Z != 0) {
        var _ = n.qd, L = n.rd;
        for (e(Kn[n.Z] != null); o < h; ++o) Kn[n.Z](_, L, g, b, g, b, y), _ = g, L = b, b += y;
        n.qd = _, n.rd = L;
      }
    }
    function Jr(n, o) {
      var h = n.l.ma, g = h.Z == 0 || h.Z == 1 ? n.l.j : n.C;
      if (g = n.C < g ? g : n.C, e(o <= n.l.o), o > g) {
        var b = n.l.width, y = h.ca, _ = h.tb + b * g, L = n.V, S = n.Ba + n.c * g, C = n.gc;
        e(n.ab == 1), e(C[0].hc == 3), dn(C[0], g, o, L, S, y, _), on(h, g, o, y, _, b);
      }
      n.C = n.Ma = o;
    }
    function $r(n, o, h, g, b, y, _) {
      var L = n.$ / g, S = n.$ % g, C = n.m, G = n.s, nt = h + n.$, F = nt;
      b = h + g * b;
      var J = h + g * y, Q = 280 + G.ua, ct = n.Pb ? L : 16777216, rt = 0 < G.ua ? G.Wa : null, dt = G.wc, mt = nt < J ? ar(G, S, L) : null;
      e(n.C < y), e(J <= b);
      var _t = !1;
      t: for (; ; ) {
        for (; _t || nt < J; ) {
          var wt = 0;
          if (L >= ct) {
            var Bt = nt - h;
            e((ct = n).Pb), ct.wd = ct.m, ct.xd = Bt, 0 < ct.s.ua && Lt(ct.s.Wa, ct.s.vb), ct = L + ah;
          }
          if (S & dt || (mt = ar(G, S, L)), e(mt != null), mt.Qb && (o[nt] = mt.qb, _t = !0), !_t) if (tt(C), mt.jc) {
            wt = C, Bt = o;
            var Pt = nt, ne = mt.pd[T(wt) & yi - 1];
            e(mt.jc), 256 > ne.g ? ($(wt, wt.u + ne.g), Bt[Pt] = ne.value, wt = 0) : ($(wt, wt.u + ne.g - 256), e(256 <= ne.value), wt = ne.value), wt == 0 && (_t = !0);
          } else wt = Be(mt.G[0], mt.H[0], C);
          if (C.h) break;
          if (_t || 256 > wt) {
            if (!_t) if (mt.nd) o[nt] = (mt.qb | wt << 8) >>> 0;
            else {
              if (tt(C), _t = Be(mt.G[1], mt.H[1], C), tt(C), Bt = Be(mt.G[2], mt.H[2], C), Pt = Be(mt.G[3], mt.H[3], C), C.h) break;
              o[nt] = (Pt << 24 | _t << 16 | wt << 8 | Bt) >>> 0;
            }
            if (_t = !1, ++nt, ++S >= g && (S = 0, ++L, _ != null && L <= y && !(L % 16) && _(n, L), rt != null)) for (; F < nt; ) wt = o[F++], rt.X[(506832829 * wt & 4294967295) >>> rt.Mb] = wt;
          } else if (280 > wt) {
            if (wt = Rr(wt - 256, C), Bt = Be(mt.G[4], mt.H[4], C), tt(C), Bt = Tr(g, Bt = Rr(Bt, C)), C.h) break;
            if (nt - h < Bt || b - nt < wt) break t;
            for (Pt = 0; Pt < wt; ++Pt) o[nt + Pt] = o[nt + Pt - Bt];
            for (nt += wt, S += wt; S >= g; ) S -= g, ++L, _ != null && L <= y && !(L % 16) && _(n, L);
            if (e(nt <= b), S & dt && (mt = ar(G, S, L)), rt != null) for (; F < nt; ) wt = o[F++], rt.X[(506832829 * wt & 4294967295) >>> rt.Mb] = wt;
          } else {
            if (!(wt < Q)) break t;
            for (_t = wt - 280, e(rt != null); F < nt; ) wt = o[F++], rt.X[(506832829 * wt & 4294967295) >>> rt.Mb] = wt;
            wt = nt, e(!(_t >>> (Bt = rt).Xa)), o[wt] = Bt.X[_t], _t = !0;
          }
          _t || e(C.h == W(C));
        }
        if (n.Pb && C.h && nt < b) e(n.m.h), n.a = 5, n.m = n.wd, n.$ = n.xd, 0 < n.s.ua && Lt(n.s.vb, n.s.Wa);
        else {
          if (C.h) break t;
          _ != null && _(n, L > y ? y : L), n.a = 0, n.$ = nt - h;
        }
        return 1;
      }
      return n.a = 3, 0;
    }
    function Dr(n) {
      e(n != null), n.vc = null, n.yc = null, n.Ya = null;
      var o = n.Wa;
      o != null && (o.X = null), n.vb = null, e(n != null);
    }
    function li() {
      var n = new $t();
      return n == null ? null : (n.a = 0, n.xb = kl, ke("Predictor", "VP8LPredictors"), ke("Predictor", "VP8LPredictors_C"), ke("PredictorAdd", "VP8LPredictorsAdd"), ke("PredictorAdd", "VP8LPredictorsAdd_C"), Ue = ce, Aa = ee, Na = qe, Vn = pe, Yn = se, Jn = oe, xi = Ee, D.VP8LMapColor32b = fn, D.VP8LMapColor8b = xa, n);
    }
    function ln(n, o, h, g, b) {
      var y = 1, _ = [n], L = [o], S = g.m, C = g.s, G = null, nt = 0;
      t: for (; ; ) {
        if (h) for (; y && ft(S, 1); ) {
          var F = _, J = L, Q = g, ct = 1, rt = Q.m, dt = Q.gc[Q.ab], mt = ft(rt, 2);
          if (Q.Oc & 1 << mt) y = 0;
          else {
            switch (Q.Oc |= 1 << mt, dt.hc = mt, dt.Ea = F[0], dt.nc = J[0], dt.K = [null], ++Q.ab, e(4 >= Q.ab), mt) {
              case 0:
              case 1:
                dt.b = ft(rt, 3) + 2, ct = ln(yt(dt.Ea, dt.b), yt(dt.nc, dt.b), 0, Q, dt.K), dt.K = dt.K[0];
                break;
              case 3:
                var _t, wt = ft(rt, 8) + 1, Bt = 16 < wt ? 0 : 4 < wt ? 1 : 2 < wt ? 2 : 3;
                if (F[0] = yt(dt.Ea, Bt), dt.b = Bt, _t = ct = ln(wt, 1, 0, Q, dt.K)) {
                  var Pt, ne = wt, Et = dt, fe = 1 << (8 >> Et.b), tr = s(fe);
                  if (tr == null) _t = 0;
                  else {
                    var ie = Et.K[0], Ot = Et.w;
                    for (tr[0] = Et.K[0][0], Pt = 1; Pt < 1 * ne; ++Pt) tr[Pt] = Wt(ie[Ot + Pt], tr[Pt - 1]);
                    for (; Pt < 4 * fe; ++Pt) tr[Pt] = 0;
                    Et.K[0] = null, Et.K[0] = tr, _t = 1;
                  }
                }
                ct = _t;
                break;
              case 2:
                break;
              default:
                e(0);
            }
            y = ct;
          }
        }
        if (_ = _[0], L = L[0], y && ft(S, 1) && !(y = 1 <= (nt = ft(S, 4)) && 11 >= nt)) {
          g.a = 3;
          break t;
        }
        var Nt;
        if (Nt = y) e: {
          var He, te, de, Ce = g, lr = _, wr = L, Re = nt, dr = h, yr = Ce.m, er = Ce.s, me = [null], ye = 1, Te = 0, xe = ih[Re];
          r: for (; ; ) {
            if (dr && ft(yr, 1)) {
              var ur = ft(yr, 3) + 2, Qr = yt(lr, ur), We = yt(wr, ur), _r = Qr * We;
              if (!ln(Qr, We, 0, Ce, me)) break r;
              for (me = me[0], er.xc = ur, He = 0; He < _r; ++He) {
                var Le = me[He] >> 8 & 65535;
                me[He] = Le, Le >= ye && (ye = Le + 1);
              }
            }
            if (yr.h) break r;
            for (te = 0; 5 > te; ++te) {
              var rr = Ll[te];
              !te && 0 < Re && (rr += 1 << Re), Te < rr && (Te = rr);
            }
            var Pr = f(ye * xe, B), xr = ye, Ir = f(xr, et);
            if (Ir == null) var Cr = null;
            else e(65536 >= xr), Cr = Ir;
            var Ar = s(Te);
            if (Cr == null || Ar == null || Pr == null) {
              Ce.a = 1;
              break r;
            }
            var Fr = Pr;
            for (He = de = 0; He < ye; ++He) {
              var Ie = Cr[He], Er = Ie.G, tn = Ie.H, Ai = 0, jn = 1, cr = 0;
              for (te = 0; 5 > te; ++te) {
                rr = Ll[te], Er[te] = Fr, tn[te] = de, !te && 0 < Re && (rr += 1 << Re);
                i: {
                  var vs, mo = rr, bs = Ce, Ia = Ar, Lh = Fr, Sh = de, vo = 0, Zn = bs.m, kh = ft(Zn, 1);
                  if (a(Ia, 0, 0, mo), kh) {
                    var Ph = ft(Zn, 1) + 1, Ih = ft(Zn, 1), jl = ft(Zn, Ih == 0 ? 1 : 8);
                    Ia[jl] = 1, Ph == 2 && (Ia[jl = ft(Zn, 8)] = 1);
                    var ws = 1;
                  } else {
                    var Bl = s(19), Rl = ft(Zn, 4) + 4;
                    if (19 < Rl) {
                      bs.a = 3;
                      var ys = 0;
                      break i;
                    }
                    for (vs = 0; vs < Rl; ++vs) Bl[rh[vs]] = ft(Zn, 3);
                    var bo = void 0, Ca = void 0, Tl = bs, Ch = Bl, xs = mo, Dl = Ia, wo = 0, Qn = Tl.m, ql = 8, Ul = f(128, B);
                    n: for (; A(Ul, 0, 7, Ch, 19); ) {
                      if (ft(Qn, 1)) {
                        var Fh = 2 + 2 * ft(Qn, 3);
                        if ((bo = 2 + ft(Qn, Fh)) > xs) break n;
                      } else bo = xs;
                      for (Ca = 0; Ca < xs && bo--; ) {
                        tt(Qn);
                        var zl = Ul[0 + (127 & T(Qn))];
                        $(Qn, Qn.u + zl.g);
                        var Gi = zl.value;
                        if (16 > Gi) Dl[Ca++] = Gi, Gi != 0 && (ql = Gi);
                        else {
                          var Eh = Gi == 16, Hl = Gi - 16, Oh = th[Hl], Wl = ft(Qn, Qc[Hl]) + Oh;
                          if (Ca + Wl > xs) break n;
                          for (var Mh = Eh ? ql : 0; 0 < Wl--; ) Dl[Ca++] = Mh;
                        }
                      }
                      wo = 1;
                      break n;
                    }
                    wo || (Tl.a = 3), ws = wo;
                  }
                  (ws = ws && !Zn.h) && (vo = A(Lh, Sh, 8, Ia, mo)), ws && vo != 0 ? ys = vo : (bs.a = 3, ys = 0);
                }
                if (ys == 0) break r;
                if (jn && eh[te] == 1 && (jn = Fr[de].g == 0), Ai += Fr[de].g, de += ys, 3 >= te) {
                  var Fa, yo = Ar[0];
                  for (Fa = 1; Fa < rr; ++Fa) Ar[Fa] > yo && (yo = Ar[Fa]);
                  cr += yo;
                }
              }
              if (Ie.nd = jn, Ie.Qb = 0, jn && (Ie.qb = (Er[3][tn[3] + 0].value << 24 | Er[1][tn[1] + 0].value << 16 | Er[2][tn[2] + 0].value) >>> 0, Ai == 0 && 256 > Er[0][tn[0] + 0].value && (Ie.Qb = 1, Ie.qb += Er[0][tn[0] + 0].value << 8)), Ie.jc = !Ie.Qb && 6 > cr, Ie.jc) {
                var _s, Bn = Ie;
                for (_s = 0; _s < yi; ++_s) {
                  var ti = _s, ei = Bn.pd[ti], As = Bn.G[0][Bn.H[0] + ti];
                  256 <= As.value ? (ei.g = As.g + 256, ei.value = As.value) : (ei.g = 0, ei.value = 0, ti >>= nr(As, 8, ei), ti >>= nr(Bn.G[1][Bn.H[1] + ti], 16, ei), ti >>= nr(Bn.G[2][Bn.H[2] + ti], 0, ei), nr(Bn.G[3][Bn.H[3] + ti], 24, ei));
                }
              }
            }
            er.vc = me, er.Wb = ye, er.Ya = Cr, er.yc = Pr, Nt = 1;
            break e;
          }
          Nt = 0;
        }
        if (!(y = Nt)) {
          g.a = 3;
          break t;
        }
        if (0 < nt) {
          if (C.ua = 1 << nt, !I(C.Wa, nt)) {
            g.a = 1, y = 0;
            break t;
          }
        } else C.ua = 0;
        var xo = g, Gl = _, jh = L, _o = xo.s, Ao = _o.xc;
        if (xo.c = Gl, xo.i = jh, _o.md = yt(Gl, Ao), _o.wc = Ao == 0 ? -1 : (1 << Ao) - 1, h) {
          g.xb = fh;
          break t;
        }
        if ((G = s(_ * L)) == null) {
          g.a = 1, y = 0;
          break t;
        }
        y = (y = $r(g, G, 0, _, L, L, null)) && !S.h;
        break t;
      }
      return y ? (b != null ? b[0] = G : (e(G == null), e(h)), g.$ = 0, h || Dr(C)) : Dr(C), y;
    }
    function ui(n, o) {
      var h = n.c * n.i, g = h + o + 16 * o;
      return e(n.c <= o), n.V = s(g), n.V == null ? (n.Ta = null, n.Ua = 0, n.a = 1, 0) : (n.Ta = n.V, n.Ua = n.Ba + h + o, 1);
    }
    function Oi(n, o) {
      var h = n.C, g = o - h, b = n.V, y = n.Ba + n.c * h;
      for (e(o <= n.l.o); 0 < g; ) {
        var _ = 16 < g ? 16 : g, L = n.l.ma, S = n.l.width, C = S * _, G = L.ca, nt = L.tb + S * h, F = n.Ta, J = n.Ua;
        oi(n, _, b, y), vl(F, J, G, nt, C), on(L, h, h + _, G, nt, S), g -= _, b += _ * n.c, h += _;
      }
      e(h == o), n.C = n.Ma = o;
    }
    function Mi() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function ji() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function Gs() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = s(4), this.Lb = s(4);
    }
    function ia() {
      this.Yb = (function() {
        var n = [];
        return (function o(h, g, b) {
          for (var y = b[g], _ = 0; _ < y && (h.push(b.length > g + 1 ? [] : 0), !(b.length < g + 1)); _++) o(h[_], g + 1, b);
        })(n, 0, [3, 11]), n;
      })();
    }
    function za() {
      this.jb = s(3), this.Wc = l([4, 8], ia), this.Xc = l([4, 17], ia);
    }
    function Ha() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new s(4), this.od = new s(4);
    }
    function qr() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function aa() {
      this.Na = this.la = 0;
    }
    function Wa() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function sa() {
      this.ad = s(384), this.Za = 0, this.Ob = s(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Ga() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new qr()), this.Y = 0, this.ya = Array(new sa()), this.aa = 0, this.l = new Bi();
    }
    function Va() {
      this.y = s(16), this.f = s(8), this.ea = s(8);
    }
    function Ya() {
      this.cb = this.a = 0, this.sc = "", this.m = new x(), this.Od = new Mi(), this.Kc = new ji(), this.ed = new Ha(), this.Qa = new Gs(), this.Ic = this.$c = this.Aa = 0, this.D = new Ga(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = f(8, x), this.ia = 0, this.pb = f(4, Wa), this.Pa = new za(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Va()), this.Hd = 0, this.rb = Array(new aa()), this.sb = 0, this.wa = Array(new qr()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new sa()), this.L = this.aa = 0, this.gd = l([4, 2], qr), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function un(n, o) {
      return 0 > n ? 0 : n > o ? o : n;
    }
    function Bi() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function Vs() {
      var n = new Ya();
      return n != null && (n.a = 0, n.sc = "OK", n.cb = 0, n.Xb = 0, ka || (ka = Ri)), n;
    }
    function Je(n, o, h) {
      return n.a == 0 && (n.a = o, n.sc = h, n.cb = 0), 0;
    }
    function Ja(n, o, h) {
      return 3 <= h && n[o + 0] == 157 && n[o + 1] == 1 && n[o + 2] == 42;
    }
    function cn(n, o) {
      if (n == null) return 0;
      if (n.a = 0, n.sc = "OK", o == null) return Je(n, 2, "null VP8Io passed to VP8GetHeaders()");
      var h = o.data, g = o.w, b = o.ha;
      if (4 > b) return Je(n, 7, "Truncated header.");
      var y = h[g + 0] | h[g + 1] << 8 | h[g + 2] << 16, _ = n.Od;
      if (_.Rb = !(1 & y), _.td = y >> 1 & 7, _.yd = y >> 4 & 1, _.ub = y >> 5, 3 < _.td) return Je(n, 3, "Incorrect keyframe parameters.");
      if (!_.yd) return Je(n, 4, "Frame not displayable.");
      g += 3, b -= 3;
      var L = n.Kc;
      if (_.Rb) {
        if (7 > b) return Je(n, 7, "cannot parse picture header");
        if (!Ja(h, g, b)) return Je(n, 3, "Bad code word");
        L.c = 16383 & (h[g + 4] << 8 | h[g + 3]), L.Td = h[g + 4] >> 6, L.i = 16383 & (h[g + 6] << 8 | h[g + 5]), L.Ud = h[g + 6] >> 6, g += 7, b -= 7, n.za = L.c + 15 >> 4, n.Ub = L.i + 15 >> 4, o.width = L.c, o.height = L.i, o.Da = 0, o.j = 0, o.v = 0, o.va = o.width, o.o = o.height, o.da = 0, o.ib = o.width, o.hb = o.height, o.U = o.width, o.T = o.height, a((y = n.Pa).jb, 0, 255, y.jb.length), e((y = n.Qa) != null), y.Cb = 0, y.Bb = 0, y.Fb = 1, a(y.Zb, 0, 0, y.Zb.length), a(y.Lb, 0, 0, y.Lb);
      }
      if (_.ub > b) return Je(n, 7, "bad partition length");
      it(y = n.m, h, g, _.ub), g += _.ub, b -= _.ub, _.Rb && (L.Ld = ut(y), L.Kd = ut(y)), L = n.Qa;
      var S, C = n.Pa;
      if (e(y != null), e(L != null), L.Cb = ut(y), L.Cb) {
        if (L.Bb = ut(y), ut(y)) {
          for (L.Fb = ut(y), S = 0; 4 > S; ++S) L.Zb[S] = ut(y) ? K(y, 7) : 0;
          for (S = 0; 4 > S; ++S) L.Lb[S] = ut(y) ? K(y, 6) : 0;
        }
        if (L.Bb) for (S = 0; 3 > S; ++S) C.jb[S] = ut(y) ? at(y, 8) : 255;
      } else L.Bb = 0;
      if (y.Ka) return Je(n, 3, "cannot parse segment header");
      if ((L = n.ed).zd = ut(y), L.Tb = at(y, 6), L.wb = at(y, 3), L.Pc = ut(y), L.Pc && ut(y)) {
        for (C = 0; 4 > C; ++C) ut(y) && (L.vd[C] = K(y, 6));
        for (C = 0; 4 > C; ++C) ut(y) && (L.od[C] = K(y, 6));
      }
      if (n.L = L.Tb == 0 ? 0 : L.zd ? 1 : 2, y.Ka) return Je(n, 3, "cannot parse filter header");
      var G = b;
      if (b = S = g, g = S + G, L = G, n.Xb = (1 << at(n.m, 2)) - 1, G < 3 * (C = n.Xb)) h = 7;
      else {
        for (S += 3 * C, L -= 3 * C, G = 0; G < C; ++G) {
          var nt = h[b + 0] | h[b + 1] << 8 | h[b + 2] << 16;
          nt > L && (nt = L), it(n.Jc[+G], h, S, nt), S += nt, L -= nt, b += 3;
        }
        it(n.Jc[+C], h, S, L), h = S < g ? 0 : 5;
      }
      if (h != 0) return Je(n, h, "cannot parse partitions");
      for (h = at(S = n.m, 7), b = ut(S) ? K(S, 4) : 0, g = ut(S) ? K(S, 4) : 0, L = ut(S) ? K(S, 4) : 0, C = ut(S) ? K(S, 4) : 0, S = ut(S) ? K(S, 4) : 0, G = n.Qa, nt = 0; 4 > nt; ++nt) {
        if (G.Cb) {
          var F = G.Zb[nt];
          G.Fb || (F += h);
        } else {
          if (0 < nt) {
            n.pb[nt] = n.pb[0];
            continue;
          }
          F = h;
        }
        var J = n.pb[nt];
        J.Sc[0] = fo[un(F + b, 127)], J.Sc[1] = po[un(F + 0, 127)], J.Eb[0] = 2 * fo[un(F + g, 127)], J.Eb[1] = 101581 * po[un(F + L, 127)] >> 16, 8 > J.Eb[1] && (J.Eb[1] = 8), J.Qc[0] = fo[un(F + C, 117)], J.Qc[1] = po[un(F + S, 127)], J.lc = F + S;
      }
      if (!_.Rb) return Je(n, 4, "Not a key frame.");
      for (ut(y), _ = n.Pa, h = 0; 4 > h; ++h) {
        for (b = 0; 8 > b; ++b) for (g = 0; 3 > g; ++g) for (L = 0; 11 > L; ++L) C = gt(y, ch[h][b][g][L]) ? at(y, 8) : lh[h][b][g][L], _.Wc[h][b].Yb[g][L] = C;
        for (b = 0; 17 > b; ++b) _.Xc[h][b] = _.Wc[h][hh[b]];
      }
      return n.kc = ut(y), n.kc && (n.Bd = at(y, 8)), n.cb = 1;
    }
    function Ri(n, o, h, g, b, y, _) {
      var L = o[b].Yb[h];
      for (h = 0; 16 > b; ++b) {
        if (!gt(n, L[h + 0])) return b;
        for (; !gt(n, L[h + 1]); ) if (L = o[++b].Yb[0], h = 0, b == 16) return 16;
        var S = o[b + 1].Yb;
        if (gt(n, L[h + 2])) {
          var C = n, G = 0;
          if (gt(C, (F = L)[(nt = h) + 3])) if (gt(C, F[nt + 6])) {
            for (L = 0, nt = 2 * (G = gt(C, F[nt + 8])) + (F = gt(C, F[nt + 9 + G])), G = 0, F = sh[nt]; F[L]; ++L) G += G + gt(C, F[L]);
            G += 3 + (8 << nt);
          } else gt(C, F[nt + 7]) ? (G = 7 + 2 * gt(C, 165), G += gt(C, 145)) : G = 5 + gt(C, 159);
          else G = gt(C, F[nt + 4]) ? 3 + gt(C, F[nt + 5]) : 2;
          L = S[2];
        } else G = 1, L = S[1];
        S = _ + oh[b], 0 > (C = n).b && lt(C);
        var nt, F = C.b, J = (nt = C.Ca >> 1) - (C.I >> F) >> 31;
        --C.b, C.Ca += J, C.Ca |= 1, C.I -= (nt + 1 & J) << F, y[S] = ((G ^ J) - J) * g[(0 < b) + 0];
      }
      return 16;
    }
    function $a(n) {
      var o = n.rb[n.sb - 1];
      o.la = 0, o.Na = 0, a(n.zc, 0, 0, n.zc.length), n.ja = 0;
    }
    function Ur(n, o, h, g, b) {
      b = n[o + h + 32 * g] + (b >> 3), n[o + h + 32 * g] = -256 & b ? 0 > b ? 0 : 255 : b;
    }
    function Ke(n, o, h, g, b, y) {
      Ur(n, o, 0, h, g + b), Ur(n, o, 1, h, g + y), Ur(n, o, 2, h, g - y), Ur(n, o, 3, h, g - b);
    }
    function _n(n) {
      return (20091 * n >> 16) + n;
    }
    function Xa(n, o, h, g) {
      var b, y = 0, _ = s(16);
      for (b = 0; 4 > b; ++b) {
        var L = n[o + 0] + n[o + 8], S = n[o + 0] - n[o + 8], C = (35468 * n[o + 4] >> 16) - _n(n[o + 12]), G = _n(n[o + 4]) + (35468 * n[o + 12] >> 16);
        _[y + 0] = L + G, _[y + 1] = S + C, _[y + 2] = S - C, _[y + 3] = L - G, y += 4, o++;
      }
      for (b = y = 0; 4 > b; ++b) L = (n = _[y + 0] + 4) + _[y + 8], S = n - _[y + 8], C = (35468 * _[y + 4] >> 16) - _n(_[y + 12]), Ur(h, g, 0, 0, L + (G = _n(_[y + 4]) + (35468 * _[y + 12] >> 16))), Ur(h, g, 1, 0, S + C), Ur(h, g, 2, 0, S - C), Ur(h, g, 3, 0, L - G), y++, g += 32;
    }
    function Ys(n, o, h, g) {
      var b = n[o + 0] + 4, y = 35468 * n[o + 4] >> 16, _ = _n(n[o + 4]), L = 35468 * n[o + 1] >> 16;
      Ke(h, g, 0, b + _, n = _n(n[o + 1]), L), Ke(h, g, 1, b + y, n, L), Ke(h, g, 2, b - y, n, L), Ke(h, g, 3, b - _, n, L);
    }
    function Js(n, o, h, g, b) {
      Xa(n, o, h, g), b && Xa(n, o + 16, h, g + 4);
    }
    function hn(n, o, h, g) {
      _i(n, o + 0, h, g, 1), _i(n, o + 32, h, g + 128, 1);
    }
    function Ka(n, o, h, g) {
      var b;
      for (n = n[o + 0] + 4, b = 0; 4 > b; ++b) for (o = 0; 4 > o; ++o) Ur(h, g, o, b, n);
    }
    function Za(n, o, h, g) {
      n[o + 0] && we(n, o + 0, h, g), n[o + 16] && we(n, o + 16, h, g + 4), n[o + 32] && we(n, o + 32, h, g + 128), n[o + 48] && we(n, o + 48, h, g + 128 + 4);
    }
    function Ti(n, o, h, g) {
      var b, y = s(16);
      for (b = 0; 4 > b; ++b) {
        var _ = n[o + 0 + b] + n[o + 12 + b], L = n[o + 4 + b] + n[o + 8 + b], S = n[o + 4 + b] - n[o + 8 + b], C = n[o + 0 + b] - n[o + 12 + b];
        y[0 + b] = _ + L, y[8 + b] = _ - L, y[4 + b] = C + S, y[12 + b] = C - S;
      }
      for (b = 0; 4 > b; ++b) _ = (n = y[0 + 4 * b] + 3) + y[3 + 4 * b], L = y[1 + 4 * b] + y[2 + 4 * b], S = y[1 + 4 * b] - y[2 + 4 * b], C = n - y[3 + 4 * b], h[g + 0] = _ + L >> 3, h[g + 16] = C + S >> 3, h[g + 32] = _ - L >> 3, h[g + 48] = C - S >> 3, g += 64;
    }
    function ci(n, o, h) {
      var g, b = o - 32, y = kr, _ = 255 - n[b - 1];
      for (g = 0; g < h; ++g) {
        var L, S = y, C = _ + n[o - 1];
        for (L = 0; L < h; ++L) n[o + L] = S[C + n[b + L]];
        o += 32;
      }
    }
    function $s(n, o) {
      ci(n, o, 4);
    }
    function Xs(n, o) {
      ci(n, o, 8);
    }
    function Ks(n, o) {
      ci(n, o, 16);
    }
    function oa(n, o) {
      var h;
      for (h = 0; 16 > h; ++h) i(n, o + 32 * h, n, o - 32, 16);
    }
    function Qa(n, o) {
      var h;
      for (h = 16; 0 < h; --h) a(n, o, n[o - 1], 16), o += 32;
    }
    function Xr(n, o, h) {
      var g;
      for (g = 0; 16 > g; ++g) a(o, h + 32 * g, n, 16);
    }
    function Zs(n, o) {
      var h, g = 16;
      for (h = 0; 16 > h; ++h) g += n[o - 1 + 32 * h] + n[o + h - 32];
      Xr(g >> 5, n, o);
    }
    function hi(n, o) {
      var h, g = 8;
      for (h = 0; 16 > h; ++h) g += n[o - 1 + 32 * h];
      Xr(g >> 4, n, o);
    }
    function la(n, o) {
      var h, g = 8;
      for (h = 0; 16 > h; ++h) g += n[o + h - 32];
      Xr(g >> 4, n, o);
    }
    function Qs(n, o) {
      Xr(128, n, o);
    }
    function Xt(n, o, h) {
      return n + 2 * o + h + 2 >> 2;
    }
    function to(n, o) {
      var h, g = o - 32;
      for (g = new Uint8Array([Xt(n[g - 1], n[g + 0], n[g + 1]), Xt(n[g + 0], n[g + 1], n[g + 2]), Xt(n[g + 1], n[g + 2], n[g + 3]), Xt(n[g + 2], n[g + 3], n[g + 4])]), h = 0; 4 > h; ++h) i(n, o + 32 * h, g, 0, g.length);
    }
    function eo(n, o) {
      var h = n[o - 1], g = n[o - 1 + 32], b = n[o - 1 + 64], y = n[o - 1 + 96];
      At(n, o + 0, 16843009 * Xt(n[o - 1 - 32], h, g)), At(n, o + 32, 16843009 * Xt(h, g, b)), At(n, o + 64, 16843009 * Xt(g, b, y)), At(n, o + 96, 16843009 * Xt(b, y, y));
    }
    function ro(n, o) {
      var h, g = 4;
      for (h = 0; 4 > h; ++h) g += n[o + h - 32] + n[o - 1 + 32 * h];
      for (g >>= 3, h = 0; 4 > h; ++h) a(n, o + 32 * h, g, 4);
    }
    function An(n, o) {
      var h = n[o - 1 + 0], g = n[o - 1 + 32], b = n[o - 1 + 64], y = n[o - 1 - 32], _ = n[o + 0 - 32], L = n[o + 1 - 32], S = n[o + 2 - 32], C = n[o + 3 - 32];
      n[o + 0 + 96] = Xt(g, b, n[o - 1 + 96]), n[o + 1 + 96] = n[o + 0 + 64] = Xt(h, g, b), n[o + 2 + 96] = n[o + 1 + 64] = n[o + 0 + 32] = Xt(y, h, g), n[o + 3 + 96] = n[o + 2 + 64] = n[o + 1 + 32] = n[o + 0 + 0] = Xt(_, y, h), n[o + 3 + 64] = n[o + 2 + 32] = n[o + 1 + 0] = Xt(L, _, y), n[o + 3 + 32] = n[o + 2 + 0] = Xt(S, L, _), n[o + 3 + 0] = Xt(C, S, L);
    }
    function Nn(n, o) {
      var h = n[o + 1 - 32], g = n[o + 2 - 32], b = n[o + 3 - 32], y = n[o + 4 - 32], _ = n[o + 5 - 32], L = n[o + 6 - 32], S = n[o + 7 - 32];
      n[o + 0 + 0] = Xt(n[o + 0 - 32], h, g), n[o + 1 + 0] = n[o + 0 + 32] = Xt(h, g, b), n[o + 2 + 0] = n[o + 1 + 32] = n[o + 0 + 64] = Xt(g, b, y), n[o + 3 + 0] = n[o + 2 + 32] = n[o + 1 + 64] = n[o + 0 + 96] = Xt(b, y, _), n[o + 3 + 32] = n[o + 2 + 64] = n[o + 1 + 96] = Xt(y, _, L), n[o + 3 + 64] = n[o + 2 + 96] = Xt(_, L, S), n[o + 3 + 96] = Xt(L, S, S);
    }
    function no(n, o) {
      var h = n[o - 1 + 0], g = n[o - 1 + 32], b = n[o - 1 + 64], y = n[o - 1 - 32], _ = n[o + 0 - 32], L = n[o + 1 - 32], S = n[o + 2 - 32], C = n[o + 3 - 32];
      n[o + 0 + 0] = n[o + 1 + 64] = y + _ + 1 >> 1, n[o + 1 + 0] = n[o + 2 + 64] = _ + L + 1 >> 1, n[o + 2 + 0] = n[o + 3 + 64] = L + S + 1 >> 1, n[o + 3 + 0] = S + C + 1 >> 1, n[o + 0 + 96] = Xt(b, g, h), n[o + 0 + 64] = Xt(g, h, y), n[o + 0 + 32] = n[o + 1 + 96] = Xt(h, y, _), n[o + 1 + 32] = n[o + 2 + 96] = Xt(y, _, L), n[o + 2 + 32] = n[o + 3 + 96] = Xt(_, L, S), n[o + 3 + 32] = Xt(L, S, C);
    }
    function io(n, o) {
      var h = n[o + 0 - 32], g = n[o + 1 - 32], b = n[o + 2 - 32], y = n[o + 3 - 32], _ = n[o + 4 - 32], L = n[o + 5 - 32], S = n[o + 6 - 32], C = n[o + 7 - 32];
      n[o + 0 + 0] = h + g + 1 >> 1, n[o + 1 + 0] = n[o + 0 + 64] = g + b + 1 >> 1, n[o + 2 + 0] = n[o + 1 + 64] = b + y + 1 >> 1, n[o + 3 + 0] = n[o + 2 + 64] = y + _ + 1 >> 1, n[o + 0 + 32] = Xt(h, g, b), n[o + 1 + 32] = n[o + 0 + 96] = Xt(g, b, y), n[o + 2 + 32] = n[o + 1 + 96] = Xt(b, y, _), n[o + 3 + 32] = n[o + 2 + 96] = Xt(y, _, L), n[o + 3 + 64] = Xt(_, L, S), n[o + 3 + 96] = Xt(L, S, C);
    }
    function Di(n, o) {
      var h = n[o - 1 + 0], g = n[o - 1 + 32], b = n[o - 1 + 64], y = n[o - 1 + 96];
      n[o + 0 + 0] = h + g + 1 >> 1, n[o + 2 + 0] = n[o + 0 + 32] = g + b + 1 >> 1, n[o + 2 + 32] = n[o + 0 + 64] = b + y + 1 >> 1, n[o + 1 + 0] = Xt(h, g, b), n[o + 3 + 0] = n[o + 1 + 32] = Xt(g, b, y), n[o + 3 + 32] = n[o + 1 + 64] = Xt(b, y, y), n[o + 3 + 64] = n[o + 2 + 64] = n[o + 0 + 96] = n[o + 1 + 96] = n[o + 2 + 96] = n[o + 3 + 96] = y;
    }
    function ua(n, o) {
      var h = n[o - 1 + 0], g = n[o - 1 + 32], b = n[o - 1 + 64], y = n[o - 1 + 96], _ = n[o - 1 - 32], L = n[o + 0 - 32], S = n[o + 1 - 32], C = n[o + 2 - 32];
      n[o + 0 + 0] = n[o + 2 + 32] = h + _ + 1 >> 1, n[o + 0 + 32] = n[o + 2 + 64] = g + h + 1 >> 1, n[o + 0 + 64] = n[o + 2 + 96] = b + g + 1 >> 1, n[o + 0 + 96] = y + b + 1 >> 1, n[o + 3 + 0] = Xt(L, S, C), n[o + 2 + 0] = Xt(_, L, S), n[o + 1 + 0] = n[o + 3 + 32] = Xt(h, _, L), n[o + 1 + 32] = n[o + 3 + 64] = Xt(g, h, _), n[o + 1 + 64] = n[o + 3 + 96] = Xt(b, g, h), n[o + 1 + 96] = Xt(y, b, g);
    }
    function fi(n, o) {
      var h;
      for (h = 0; 8 > h; ++h) i(n, o + 32 * h, n, o - 32, 8);
    }
    function ao(n, o) {
      var h;
      for (h = 0; 8 > h; ++h) a(n, o, n[o - 1], 8), o += 32;
    }
    function Ln(n, o, h) {
      var g;
      for (g = 0; 8 > g; ++g) a(o, h + 32 * g, n, 8);
    }
    function so(n, o) {
      var h, g = 8;
      for (h = 0; 8 > h; ++h) g += n[o + h - 32] + n[o - 1 + 32 * h];
      Ln(g >> 4, n, o);
    }
    function ca(n, o) {
      var h, g = 4;
      for (h = 0; 8 > h; ++h) g += n[o + h - 32];
      Ln(g >> 3, n, o);
    }
    function ha(n, o) {
      var h, g = 4;
      for (h = 0; 8 > h; ++h) g += n[o - 1 + 32 * h];
      Ln(g >> 3, n, o);
    }
    function ts(n, o) {
      Ln(128, n, o);
    }
    function Sn(n, o, h) {
      var g = n[o - h], b = n[o + 0], y = 3 * (b - g) + oo[1020 + n[o - 2 * h] - n[o + h]], _ = ls[112 + (y + 4 >> 3)];
      n[o - h] = kr[255 + g + ls[112 + (y + 3 >> 3)]], n[o + 0] = kr[255 + b - _];
    }
    function fa(n, o, h, g) {
      var b = n[o + 0], y = n[o + h];
      return Wr[255 + n[o - 2 * h] - n[o - h]] > g || Wr[255 + y - b] > g;
    }
    function qi(n, o, h, g) {
      return 4 * Wr[255 + n[o - h] - n[o + 0]] + Wr[255 + n[o - 2 * h] - n[o + h]] <= g;
    }
    function da(n, o, h, g, b) {
      var y = n[o - 3 * h], _ = n[o - 2 * h], L = n[o - h], S = n[o + 0], C = n[o + h], G = n[o + 2 * h], nt = n[o + 3 * h];
      return 4 * Wr[255 + L - S] + Wr[255 + _ - C] > g ? 0 : Wr[255 + n[o - 4 * h] - y] <= b && Wr[255 + y - _] <= b && Wr[255 + _ - L] <= b && Wr[255 + nt - G] <= b && Wr[255 + G - C] <= b && Wr[255 + C - S] <= b;
    }
    function di(n, o, h, g) {
      var b = 2 * g + 1;
      for (g = 0; 16 > g; ++g) qi(n, o + g, h, b) && Sn(n, o + g, h);
    }
    function pa(n, o, h, g) {
      var b = 2 * g + 1;
      for (g = 0; 16 > g; ++g) qi(n, o + g * h, 1, b) && Sn(n, o + g * h, 1);
    }
    function es(n, o, h, g) {
      var b;
      for (b = 3; 0 < b; --b) di(n, o += 4 * h, h, g);
    }
    function rs(n, o, h, g) {
      var b;
      for (b = 3; 0 < b; --b) pa(n, o += 4, h, g);
    }
    function kn(n, o, h, g, b, y, _, L) {
      for (y = 2 * y + 1; 0 < b--; ) {
        if (da(n, o, h, y, _)) if (fa(n, o, h, L)) Sn(n, o, h);
        else {
          var S = n, C = o, G = h, nt = S[C - 2 * G], F = S[C - G], J = S[C + 0], Q = S[C + G], ct = S[C + 2 * G], rt = 27 * (mt = oo[1020 + 3 * (J - F) + oo[1020 + nt - Q]]) + 63 >> 7, dt = 18 * mt + 63 >> 7, mt = 9 * mt + 63 >> 7;
          S[C - 3 * G] = kr[255 + S[C - 3 * G] + mt], S[C - 2 * G] = kr[255 + nt + dt], S[C - G] = kr[255 + F + rt], S[C + 0] = kr[255 + J - rt], S[C + G] = kr[255 + Q - dt], S[C + 2 * G] = kr[255 + ct - mt];
        }
        o += g;
      }
    }
    function Pn(n, o, h, g, b, y, _, L) {
      for (y = 2 * y + 1; 0 < b--; ) {
        if (da(n, o, h, y, _)) if (fa(n, o, h, L)) Sn(n, o, h);
        else {
          var S = n, C = o, G = h, nt = S[C - G], F = S[C + 0], J = S[C + G], Q = ls[112 + (4 + (ct = 3 * (F - nt)) >> 3)], ct = ls[112 + (ct + 3 >> 3)], rt = Q + 1 >> 1;
          S[C - 2 * G] = kr[255 + S[C - 2 * G] + rt], S[C - G] = kr[255 + nt + ct], S[C + 0] = kr[255 + F - Q], S[C + G] = kr[255 + J - rt];
        }
        o += g;
      }
    }
    function ns(n, o, h, g, b, y) {
      kn(n, o, h, 1, 16, g, b, y);
    }
    function pi(n, o, h, g, b, y) {
      kn(n, o, 1, h, 16, g, b, y);
    }
    function is(n, o, h, g, b, y) {
      var _;
      for (_ = 3; 0 < _; --_) Pn(n, o += 4 * h, h, 1, 16, g, b, y);
    }
    function u(n, o, h, g, b, y) {
      var _;
      for (_ = 3; 0 < _; --_) Pn(n, o += 4, 1, h, 16, g, b, y);
    }
    function v(n, o, h, g, b, y, _, L) {
      kn(n, o, b, 1, 8, y, _, L), kn(h, g, b, 1, 8, y, _, L);
    }
    function O(n, o, h, g, b, y, _, L) {
      kn(n, o, 1, b, 8, y, _, L), kn(h, g, 1, b, 8, y, _, L);
    }
    function z(n, o, h, g, b, y, _, L) {
      Pn(n, o + 4 * b, b, 1, 8, y, _, L), Pn(h, g + 4 * b, b, 1, 8, y, _, L);
    }
    function Z(n, o, h, g, b, y, _, L) {
      Pn(n, o + 4, 1, b, 8, y, _, L), Pn(h, g + 4, 1, b, 8, y, _, L);
    }
    function pt() {
      this.ba = new le(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new be(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function bt() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function Ft() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function jt() {
      this.ua = 0, this.Wa = new ae(), this.vb = new ae(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new et(), this.yc = new B();
    }
    function $t() {
      this.xb = this.a = 0, this.l = new Bi(), this.ca = new le(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new M(), this.Pb = 0, this.wd = new M(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new jt(), this.ab = 0, this.gc = f(4, Ft), this.Oc = 0;
    }
    function re() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Bi(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function ge(n, o, h, g, b, y, _) {
      for (n = n == null ? 0 : n[o + 0], o = 0; o < _; ++o) b[y + o] = n + h[g + o] & 255, n = b[y + o];
    }
    function je(n, o, h, g, b, y, _) {
      var L;
      if (n == null) ge(null, null, h, g, b, y, _);
      else for (L = 0; L < _; ++L) b[y + L] = n[o + L] + h[g + L] & 255;
    }
    function $e(n, o, h, g, b, y, _) {
      if (n == null) ge(null, null, h, g, b, y, _);
      else {
        var L, S = n[o + 0], C = S, G = S;
        for (L = 0; L < _; ++L) C = G + (S = n[o + L]) - C, G = h[g + L] + (-256 & C ? 0 > C ? 0 : 255 : C) & 255, C = S, b[y + L] = G;
      }
    }
    function Pe(n, o, h, g) {
      var b = o.width, y = o.o;
      if (e(n != null && o != null), 0 > h || 0 >= g || h + g > y) return null;
      if (!n.Cc) {
        if (n.ga == null) {
          var _;
          if (n.ga = new re(), (_ = n.ga == null) || (_ = o.width * o.o, e(n.Gb.length == 0), n.Gb = s(_), n.Uc = 0, n.Gb == null ? _ = 0 : (n.mb = n.Gb, n.nb = n.Uc, n.rc = null, _ = 1), _ = !_), !_) {
            _ = n.ga;
            var L = n.Fa, S = n.P, C = n.qc, G = n.mb, nt = n.nb, F = S + 1, J = C - 1, Q = _.l;
            if (e(L != null && G != null && o != null), Kn[0] = null, Kn[1] = ge, Kn[2] = je, Kn[3] = $e, _.ca = G, _.tb = nt, _.c = o.width, _.i = o.height, e(0 < _.c && 0 < _.i), 1 >= C) o = 0;
            else if (_.$a = 3 & L[S + 0], _.Z = L[S + 0] >> 2 & 3, _.Lc = L[S + 0] >> 4 & 3, S = L[S + 0] >> 6 & 3, 0 > _.$a || 1 < _.$a || 4 <= _.Z || 1 < _.Lc || S) o = 0;
            else if (Q.put = Vt, Q.ac = sn, Q.bc = yn, Q.ma = _, Q.width = o.width, Q.height = o.height, Q.Da = o.Da, Q.v = o.v, Q.va = o.va, Q.j = o.j, Q.o = o.o, _.$a) t: {
              e(_.$a == 1), o = li();
              e: for (; ; ) {
                if (o == null) {
                  o = 0;
                  break t;
                }
                if (e(_ != null), _.mc = o, o.c = _.c, o.i = _.i, o.l = _.l, o.l.ma = _, o.l.width = _.c, o.l.height = _.i, o.a = 0, st(o.m, L, F, J), !ln(_.c, _.i, 1, o, null) || (o.ab == 1 && o.gc[0].hc == 3 && Yr(o.s) ? (_.ic = 1, L = o.c * o.i, o.Ta = null, o.Ua = 0, o.V = s(L), o.Ba = 0, o.V == null ? (o.a = 1, o = 0) : o = 1) : (_.ic = 0, o = ui(o, _.c)), !o)) break e;
                o = 1;
                break t;
              }
              _.mc = null, o = 0;
            }
            else o = J >= _.c * _.i;
            _ = !o;
          }
          if (_) return null;
          n.ga.Lc != 1 ? n.Ga = 0 : g = y - h;
        }
        e(n.ga != null), e(h + g <= y);
        t: {
          if (o = (L = n.ga).c, y = L.l.o, L.$a == 0) {
            if (F = n.rc, J = n.Vc, Q = n.Fa, S = n.P + 1 + h * o, C = n.mb, G = n.nb + h * o, e(S <= n.P + n.qc), L.Z != 0) for (e(Kn[L.Z] != null), _ = 0; _ < g; ++_) Kn[L.Z](F, J, Q, S, C, G, o), F = C, J = G, G += o, S += o;
            else for (_ = 0; _ < g; ++_) i(C, G, Q, S, o), F = C, J = G, G += o, S += o;
            n.rc = F, n.Vc = J;
          } else {
            if (e(L.mc != null), o = h + g, e((_ = L.mc) != null), e(o <= _.i), _.C >= o) o = 1;
            else if (L.ic || Kr(), L.ic) {
              L = _.V, F = _.Ba, J = _.c;
              var ct = _.i, rt = (Q = 1, S = _.$ / J, C = _.$ % J, G = _.m, nt = _.s, _.$), dt = J * ct, mt = J * o, _t = nt.wc, wt = rt < mt ? ar(nt, C, S) : null;
              e(rt <= dt), e(o <= ct), e(Yr(nt));
              e: for (; ; ) {
                for (; !G.h && rt < mt; ) {
                  if (C & _t || (wt = ar(nt, C, S)), e(wt != null), tt(G), 256 > (ct = Be(wt.G[0], wt.H[0], G))) L[F + rt] = ct, ++rt, ++C >= J && (C = 0, ++S <= o && !(S % 16) && Jr(_, S));
                  else {
                    if (!(280 > ct)) {
                      Q = 0;
                      break e;
                    }
                    ct = Rr(ct - 256, G);
                    var Bt, Pt = Be(wt.G[4], wt.H[4], G);
                    if (tt(G), !(rt >= (Pt = Tr(J, Pt = Rr(Pt, G))) && dt - rt >= ct)) {
                      Q = 0;
                      break e;
                    }
                    for (Bt = 0; Bt < ct; ++Bt) L[F + rt + Bt] = L[F + rt + Bt - Pt];
                    for (rt += ct, C += ct; C >= J; ) C -= J, ++S <= o && !(S % 16) && Jr(_, S);
                    rt < mt && C & _t && (wt = ar(nt, C, S));
                  }
                  e(G.h == W(G));
                }
                Jr(_, S > o ? o : S);
                break e;
              }
              !Q || G.h && rt < dt ? (Q = 0, _.a = G.h ? 5 : 3) : _.$ = rt, o = Q;
            } else o = $r(_, _.V, _.Ba, _.c, _.i, o, Oi);
            if (!o) {
              g = 0;
              break t;
            }
          }
          h + g >= y && (n.Cc = 1), g = 1;
        }
        if (!g) return null;
        if (n.Cc && ((g = n.ga) != null && (g.mc = null), n.ga = null, 0 < n.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return n.nb + h * b;
    }
    function Ze(n, o, h, g, b, y) {
      for (; 0 < b--; ) {
        var _, L = n, S = o + (h ? 1 : 0), C = n, G = o + (h ? 0 : 3);
        for (_ = 0; _ < g; ++_) {
          var nt = C[G + 4 * _];
          nt != 255 && (nt *= 32897, L[S + 4 * _ + 0] = L[S + 4 * _ + 0] * nt >> 23, L[S + 4 * _ + 1] = L[S + 4 * _ + 1] * nt >> 23, L[S + 4 * _ + 2] = L[S + 4 * _ + 2] * nt >> 23);
        }
        o += y;
      }
    }
    function Xe(n, o, h, g, b) {
      for (; 0 < g--; ) {
        var y;
        for (y = 0; y < h; ++y) {
          var _ = n[o + 2 * y + 0], L = 15 & (C = n[o + 2 * y + 1]), S = 4369 * L, C = (240 & C | C >> 4) * S >> 16;
          n[o + 2 * y + 0] = (240 & _ | _ >> 4) * S >> 16 & 240 | (15 & _ | _ << 4) * S >> 16 >> 4 & 15, n[o + 2 * y + 1] = 240 & C | L;
        }
        o += b;
      }
    }
    function sr(n, o, h, g, b, y, _, L) {
      var S, C, G = 255;
      for (C = 0; C < b; ++C) {
        for (S = 0; S < g; ++S) {
          var nt = n[o + S];
          y[_ + 4 * S] = nt, G &= nt;
        }
        o += h, _ += L;
      }
      return G != 255;
    }
    function In(n, o, h, g, b) {
      var y;
      for (y = 0; y < b; ++y) h[g + y] = n[o + y] >> 8;
    }
    function Kr() {
      Sa = Ze, gl = Xe, ml = sr, vl = In;
    }
    function Cn(n, o, h) {
      D[n] = function(g, b, y, _, L, S, C, G, nt, F, J, Q, ct, rt, dt, mt, _t) {
        var wt, Bt = _t - 1 >> 1, Pt = L[S + 0] | C[G + 0] << 16, ne = nt[F + 0] | J[Q + 0] << 16;
        e(g != null);
        var Et = 3 * Pt + ne + 131074 >> 2;
        for (o(g[b + 0], 255 & Et, Et >> 16, ct, rt), y != null && (Et = 3 * ne + Pt + 131074 >> 2, o(y[_ + 0], 255 & Et, Et >> 16, dt, mt)), wt = 1; wt <= Bt; ++wt) {
          var fe = L[S + wt] | C[G + wt] << 16, tr = nt[F + wt] | J[Q + wt] << 16, ie = Pt + fe + ne + tr + 524296, Ot = ie + 2 * (fe + ne) >> 3;
          Et = Ot + Pt >> 1, Pt = (ie = ie + 2 * (Pt + tr) >> 3) + fe >> 1, o(g[b + 2 * wt - 1], 255 & Et, Et >> 16, ct, rt + (2 * wt - 1) * h), o(g[b + 2 * wt - 0], 255 & Pt, Pt >> 16, ct, rt + (2 * wt - 0) * h), y != null && (Et = ie + ne >> 1, Pt = Ot + tr >> 1, o(y[_ + 2 * wt - 1], 255 & Et, Et >> 16, dt, mt + (2 * wt - 1) * h), o(y[_ + 2 * wt + 0], 255 & Pt, Pt >> 16, dt, mt + (2 * wt + 0) * h)), Pt = fe, ne = tr;
        }
        1 & _t || (Et = 3 * Pt + ne + 131074 >> 2, o(g[b + _t - 1], 255 & Et, Et >> 16, ct, rt + (_t - 1) * h), y != null && (Et = 3 * ne + Pt + 131074 >> 2, o(y[_ + _t - 1], 255 & Et, Et >> 16, dt, mt + (_t - 1) * h)));
      };
    }
    function ga() {
      Gr[us] = dh, Gr[cs] = Pl, Gr[Al] = ph, Gr[hs] = Il, Gr[fs] = Cl, Gr[lo] = Fl, Gr[Nl] = gh, Gr[uo] = Pl, Gr[co] = Il, Gr[ds] = Cl, Gr[ho] = Fl;
    }
    function Ui(n) {
      return n & -16384 ? 0 > n ? 0 : 255 : n >> mh;
    }
    function Un(n, o) {
      return Ui((19077 * n >> 8) + (26149 * o >> 8) - 14234);
    }
    function gi(n, o, h) {
      return Ui((19077 * n >> 8) - (6419 * o >> 8) - (13320 * h >> 8) + 8708);
    }
    function mi(n, o) {
      return Ui((19077 * n >> 8) + (33050 * o >> 8) - 17685);
    }
    function zn(n, o, h, g, b) {
      g[b + 0] = Un(n, h), g[b + 1] = gi(n, o, h), g[b + 2] = mi(n, o);
    }
    function or(n, o, h, g, b) {
      g[b + 0] = mi(n, o), g[b + 1] = gi(n, o, h), g[b + 2] = Un(n, h);
    }
    function vi(n, o, h, g, b) {
      var y = gi(n, o, h);
      o = y << 3 & 224 | mi(n, o) >> 3, g[b + 0] = 248 & Un(n, h) | y >> 5, g[b + 1] = o;
    }
    function bi(n, o, h, g, b) {
      var y = 240 & mi(n, o) | 15;
      g[b + 0] = 240 & Un(n, h) | gi(n, o, h) >> 4, g[b + 1] = y;
    }
    function ma(n, o, h, g, b) {
      g[b + 0] = 255, zn(n, o, h, g, b + 1);
    }
    function va(n, o, h, g, b) {
      or(n, o, h, g, b), g[b + 3] = 255;
    }
    function br(n, o, h, g, b) {
      zn(n, o, h, g, b), g[b + 3] = 255;
    }
    function Fn(n, o, h) {
      D[n] = function(g, b, y, _, L, S, C, G, nt) {
        for (var F = G + (-2 & nt) * h; G != F; ) o(g[b + 0], y[_ + 0], L[S + 0], C, G), o(g[b + 1], y[_ + 0], L[S + 0], C, G + h), b += 2, ++_, ++S, G += 2 * h;
        1 & nt && o(g[b + 0], y[_ + 0], L[S + 0], C, G);
      };
    }
    function zi(n, o, h) {
      return h == 0 ? n == 0 ? o == 0 ? 6 : 5 : o == 0 ? 4 : 0 : h;
    }
    function as(n, o, h, g, b) {
      switch (n >>> 30) {
        case 3:
          _i(o, h, g, b, 0);
          break;
        case 2:
          Hr(o, h, g, b);
          break;
        case 1:
          we(o, h, g, b);
      }
    }
    function zr(n, o) {
      var h, g, b = o.M, y = o.Nb, _ = n.oc, L = n.pc + 40, S = n.oc, C = n.pc + 584, G = n.oc, nt = n.pc + 600;
      for (h = 0; 16 > h; ++h) _[L + 32 * h - 1] = 129;
      for (h = 0; 8 > h; ++h) S[C + 32 * h - 1] = 129, G[nt + 32 * h - 1] = 129;
      for (0 < b ? _[L - 1 - 32] = S[C - 1 - 32] = G[nt - 1 - 32] = 129 : (a(_, L - 32 - 1, 127, 21), a(S, C - 32 - 1, 127, 9), a(G, nt - 32 - 1, 127, 9)), g = 0; g < n.za; ++g) {
        var F = o.ya[o.aa + g];
        if (0 < g) {
          for (h = -1; 16 > h; ++h) i(_, L + 32 * h - 4, _, L + 32 * h + 12, 4);
          for (h = -1; 8 > h; ++h) i(S, C + 32 * h - 4, S, C + 32 * h + 4, 4), i(G, nt + 32 * h - 4, G, nt + 32 * h + 4, 4);
        }
        var J = n.Gd, Q = n.Hd + g, ct = F.ad, rt = F.Hc;
        if (0 < b && (i(_, L - 32, J[Q].y, 0, 16), i(S, C - 32, J[Q].f, 0, 8), i(G, nt - 32, J[Q].ea, 0, 8)), F.Za) {
          var dt = _, mt = L - 32 + 16;
          for (0 < b && (g >= n.za - 1 ? a(dt, mt, J[Q].y[15], 4) : i(dt, mt, J[Q + 1].y, 0, 4)), h = 0; 4 > h; h++) dt[mt + 128 + h] = dt[mt + 256 + h] = dt[mt + 384 + h] = dt[mt + 0 + h];
          for (h = 0; 16 > h; ++h, rt <<= 2) dt = _, mt = L + Ol[h], Zr[F.Ob[h]](dt, mt), as(rt, ct, 16 * +h, dt, mt);
        } else if (dt = zi(g, b, F.Ob[0]), Xn[dt](_, L), rt != 0) for (h = 0; 16 > h; ++h, rt <<= 2) as(rt, ct, 16 * +h, _, L + Ol[h]);
        for (h = F.Gc, dt = zi(g, b, F.Dd), Mn[dt](S, C), Mn[dt](G, nt), rt = ct, dt = S, mt = C, 255 & (F = 0 | h) && (170 & F ? pn(rt, 256, dt, mt) : Ne(rt, 256, dt, mt)), F = G, rt = nt, 255 & (h >>= 8) && (170 & h ? pn(ct, 320, F, rt) : Ne(ct, 320, F, rt)), b < n.Ub - 1 && (i(J[Q].y, 0, _, L + 480, 16), i(J[Q].f, 0, S, C + 224, 8), i(J[Q].ea, 0, G, nt + 224, 8)), h = 8 * y * n.B, J = n.sa, Q = n.ta + 16 * g + 16 * y * n.R, ct = n.qa, F = n.ra + 8 * g + h, rt = n.Ha, dt = n.Ia + 8 * g + h, h = 0; 16 > h; ++h) i(J, Q + h * n.R, _, L + 32 * h, 16);
        for (h = 0; 8 > h; ++h) i(ct, F + h * n.B, S, C + 32 * h, 8), i(rt, dt + h * n.B, G, nt + 32 * h, 8);
      }
    }
    function wi(n, o, h, g, b, y, _, L, S) {
      var C = [0], G = [0], nt = 0, F = S != null ? S.kd : 0, J = S ?? new bt();
      if (n == null || 12 > h) return 7;
      J.data = n, J.w = o, J.ha = h, o = [o], h = [h], J.gb = [J.gb];
      t: {
        var Q = o, ct = h, rt = J.gb;
        if (e(n != null), e(ct != null), e(rt != null), rt[0] = 0, 12 <= ct[0] && !t(n, Q[0], "RIFF")) {
          if (t(n, Q[0] + 8, "WEBP")) {
            rt = 3;
            break t;
          }
          var dt = Dt(n, Q[0] + 4);
          if (12 > dt || 4294967286 < dt) {
            rt = 3;
            break t;
          }
          if (F && dt > ct[0] - 8) {
            rt = 7;
            break t;
          }
          rt[0] = dt, Q[0] += 12, ct[0] -= 12;
        }
        rt = 0;
      }
      if (rt != 0) return rt;
      for (dt = 0 < J.gb[0], h = h[0]; ; ) {
        t: {
          var mt = n;
          ct = o, rt = h;
          var _t = C, wt = G, Bt = Q = [0];
          if ((Et = nt = [nt])[0] = 0, 8 > rt[0]) rt = 7;
          else {
            if (!t(mt, ct[0], "VP8X")) {
              if (Dt(mt, ct[0] + 4) != 10) {
                rt = 3;
                break t;
              }
              if (18 > rt[0]) {
                rt = 7;
                break t;
              }
              var Pt = Dt(mt, ct[0] + 8), ne = 1 + St(mt, ct[0] + 12);
              if (2147483648 <= ne * (mt = 1 + St(mt, ct[0] + 15))) {
                rt = 3;
                break t;
              }
              Bt != null && (Bt[0] = Pt), _t != null && (_t[0] = ne), wt != null && (wt[0] = mt), ct[0] += 18, rt[0] -= 18, Et[0] = 1;
            }
            rt = 0;
          }
        }
        if (nt = nt[0], Q = Q[0], rt != 0) return rt;
        if (ct = !!(2 & Q), !dt && nt) return 3;
        if (y != null && (y[0] = !!(16 & Q)), _ != null && (_[0] = ct), L != null && (L[0] = 0), _ = C[0], Q = G[0], nt && ct && S == null) {
          rt = 0;
          break;
        }
        if (4 > h) {
          rt = 7;
          break;
        }
        if (dt && nt || !dt && !nt && !t(n, o[0], "ALPH")) {
          h = [h], J.na = [J.na], J.P = [J.P], J.Sa = [J.Sa];
          t: {
            Pt = n, rt = o, dt = h;
            var Et = J.gb;
            _t = J.na, wt = J.P, Bt = J.Sa, ne = 22, e(Pt != null), e(dt != null), mt = rt[0];
            var fe = dt[0];
            for (e(_t != null), e(Bt != null), _t[0] = null, wt[0] = null, Bt[0] = 0; ; ) {
              if (rt[0] = mt, dt[0] = fe, 8 > fe) {
                rt = 7;
                break t;
              }
              var tr = Dt(Pt, mt + 4);
              if (4294967286 < tr) {
                rt = 3;
                break t;
              }
              var ie = 8 + tr + 1 & -2;
              if (ne += ie, 0 < Et && ne > Et) {
                rt = 3;
                break t;
              }
              if (!t(Pt, mt, "VP8 ") || !t(Pt, mt, "VP8L")) {
                rt = 0;
                break t;
              }
              if (fe[0] < ie) {
                rt = 7;
                break t;
              }
              t(Pt, mt, "ALPH") || (_t[0] = Pt, wt[0] = mt + 8, Bt[0] = tr), mt += ie, fe -= ie;
            }
          }
          if (h = h[0], J.na = J.na[0], J.P = J.P[0], J.Sa = J.Sa[0], rt != 0) break;
        }
        h = [h], J.Ja = [J.Ja], J.xa = [J.xa];
        t: if (Et = n, rt = o, dt = h, _t = J.gb[0], wt = J.Ja, Bt = J.xa, Pt = rt[0], mt = !t(Et, Pt, "VP8 "), ne = !t(Et, Pt, "VP8L"), e(Et != null), e(dt != null), e(wt != null), e(Bt != null), 8 > dt[0]) rt = 7;
        else {
          if (mt || ne) {
            if (Et = Dt(Et, Pt + 4), 12 <= _t && Et > _t - 12) {
              rt = 3;
              break t;
            }
            if (F && Et > dt[0] - 8) {
              rt = 7;
              break t;
            }
            wt[0] = Et, rt[0] += 8, dt[0] -= 8, Bt[0] = ne;
          } else Bt[0] = 5 <= dt[0] && Et[Pt + 0] == 47 && !(Et[Pt + 4] >> 5), wt[0] = dt[0];
          rt = 0;
        }
        if (h = h[0], J.Ja = J.Ja[0], J.xa = J.xa[0], o = o[0], rt != 0) break;
        if (4294967286 < J.Ja) return 3;
        if (L == null || ct || (L[0] = J.xa ? 2 : 1), _ = [_], Q = [Q], J.xa) {
          if (5 > h) {
            rt = 7;
            break;
          }
          L = _, F = Q, ct = y, n == null || 5 > h ? n = 0 : 5 <= h && n[o + 0] == 47 && !(n[o + 4] >> 5) ? (dt = [0], Et = [0], _t = [0], st(wt = new M(), n, o, h), xn(wt, dt, Et, _t) ? (L != null && (L[0] = dt[0]), F != null && (F[0] = Et[0]), ct != null && (ct[0] = _t[0]), n = 1) : n = 0) : n = 0;
        } else {
          if (10 > h) {
            rt = 7;
            break;
          }
          L = Q, n == null || 10 > h || !Ja(n, o + 3, h - 3) ? n = 0 : (F = n[o + 0] | n[o + 1] << 8 | n[o + 2] << 16, ct = 16383 & (n[o + 7] << 8 | n[o + 6]), n = 16383 & (n[o + 9] << 8 | n[o + 8]), 1 & F || 3 < (F >> 1 & 7) || !(F >> 4 & 1) || F >> 5 >= J.Ja || !ct || !n ? n = 0 : (_ && (_[0] = ct), L && (L[0] = n), n = 1));
        }
        if (!n || (_ = _[0], Q = Q[0], nt && (C[0] != _ || G[0] != Q))) return 3;
        S != null && (S[0] = J, S.offset = o - S.w, e(4294967286 > o - S.w), e(S.offset == S.ha - h));
        break;
      }
      return rt == 0 || rt == 7 && nt && S == null ? (y != null && (y[0] |= J.na != null && 0 < J.na.length), g != null && (g[0] = _), b != null && (b[0] = Q), 0) : rt;
    }
    function ba(n, o, h) {
      var g = o.width, b = o.height, y = 0, _ = 0, L = g, S = b;
      if (o.Da = n != null && 0 < n.Da, o.Da && (L = n.cd, S = n.bd, y = n.v, _ = n.j, 11 > h || (y &= -2, _ &= -2), 0 > y || 0 > _ || 0 >= L || 0 >= S || y + L > g || _ + S > b)) return 0;
      if (o.v = y, o.j = _, o.va = y + L, o.o = _ + S, o.U = L, o.T = S, o.da = n != null && 0 < n.da, o.da) {
        if (!Ht(L, S, h = [n.ib], y = [n.hb])) return 0;
        o.ib = h[0], o.hb = y[0];
      }
      return o.ob = n != null && n.ob, o.Kb = n == null || !n.Sd, o.da && (o.ob = o.ib < 3 * g / 4 && o.hb < 3 * b / 4, o.Kb = 0), 1;
    }
    function wa(n) {
      if (n == null) return 2;
      if (11 > n.S) {
        var o = n.f.RGBA;
        o.fb += (n.height - 1) * o.A, o.A = -o.A;
      } else o = n.f.kb, n = n.height, o.O += (n - 1) * o.fa, o.fa = -o.fa, o.N += (n - 1 >> 1) * o.Ab, o.Ab = -o.Ab, o.W += (n - 1 >> 1) * o.Db, o.Db = -o.Db, o.F != null && (o.J += (n - 1) * o.lb, o.lb = -o.lb);
      return 0;
    }
    function Hn(n, o, h, g) {
      if (g == null || 0 >= n || 0 >= o) return 2;
      if (h != null) {
        if (h.Da) {
          var b = h.cd, y = h.bd, _ = -2 & h.v, L = -2 & h.j;
          if (0 > _ || 0 > L || 0 >= b || 0 >= y || _ + b > n || L + y > o) return 2;
          n = b, o = y;
        }
        if (h.da) {
          if (!Ht(n, o, b = [h.ib], y = [h.hb])) return 2;
          n = b[0], o = y[0];
        }
      }
      g.width = n, g.height = o;
      t: {
        var S = g.width, C = g.height;
        if (n = g.S, 0 >= S || 0 >= C || !(n >= us && 13 > n)) n = 2;
        else {
          if (0 >= g.Rd && g.sd == null) {
            _ = y = b = o = 0;
            var G = (L = S * Ml[n]) * C;
            if (11 > n || (y = (C + 1) / 2 * (o = (S + 1) / 2), n == 12 && (_ = (b = S) * C)), (C = s(G + 2 * y + _)) == null) {
              n = 1;
              break t;
            }
            g.sd = C, 11 > n ? ((S = g.f.RGBA).eb = C, S.fb = 0, S.A = L, S.size = G) : ((S = g.f.kb).y = C, S.O = 0, S.fa = L, S.Fd = G, S.f = C, S.N = 0 + G, S.Ab = o, S.Cd = y, S.ea = C, S.W = 0 + G + y, S.Db = o, S.Ed = y, n == 12 && (S.F = C, S.J = 0 + G + 2 * y), S.Tc = _, S.lb = b);
          }
          if (o = 1, b = g.S, y = g.width, _ = g.height, b >= us && 13 > b) if (11 > b) n = g.f.RGBA, o &= (L = Math.abs(n.A)) * (_ - 1) + y <= n.size, o &= L >= y * Ml[b], o &= n.eb != null;
          else {
            n = g.f.kb, L = (y + 1) / 2, G = (_ + 1) / 2, S = Math.abs(n.fa), C = Math.abs(n.Ab);
            var nt = Math.abs(n.Db), F = Math.abs(n.lb), J = F * (_ - 1) + y;
            o &= S * (_ - 1) + y <= n.Fd, o &= C * (G - 1) + L <= n.Cd, o = (o &= nt * (G - 1) + L <= n.Ed) & S >= y & C >= L & nt >= L, o &= n.y != null, o &= n.f != null, o &= n.ea != null, b == 12 && (o &= F >= y, o &= J <= n.Tc, o &= n.F != null);
          }
          else o = 0;
          n = o ? 0 : 2;
        }
      }
      return n != 0 || h != null && h.fd && (n = wa(g)), n;
    }
    var yi = 64, Lr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Sr = 24, Wn = 32, En = 8, Gn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    It("Predictor0", "PredictorAdd0"), D.Predictor0 = function() {
      return 4278190080;
    }, D.Predictor1 = function(n) {
      return n;
    }, D.Predictor2 = function(n, o, h) {
      return o[h + 0];
    }, D.Predictor3 = function(n, o, h) {
      return o[h + 1];
    }, D.Predictor4 = function(n, o, h) {
      return o[h - 1];
    }, D.Predictor5 = function(n, o, h) {
      return qt(qt(n, o[h + 1]), o[h + 0]);
    }, D.Predictor6 = function(n, o, h) {
      return qt(n, o[h - 1]);
    }, D.Predictor7 = function(n, o, h) {
      return qt(n, o[h + 0]);
    }, D.Predictor8 = function(n, o, h) {
      return qt(o[h - 1], o[h + 0]);
    }, D.Predictor9 = function(n, o, h) {
      return qt(o[h + 0], o[h + 1]);
    }, D.Predictor10 = function(n, o, h) {
      return qt(qt(n, o[h - 1]), qt(o[h + 0], o[h + 1]));
    }, D.Predictor11 = function(n, o, h) {
      var g = o[h + 0];
      return 0 >= Zt(g >> 24 & 255, n >> 24 & 255, (o = o[h - 1]) >> 24 & 255) + Zt(g >> 16 & 255, n >> 16 & 255, o >> 16 & 255) + Zt(g >> 8 & 255, n >> 8 & 255, o >> 8 & 255) + Zt(255 & g, 255 & n, 255 & o) ? g : n;
    }, D.Predictor12 = function(n, o, h) {
      var g = o[h + 0];
      return (ve((n >> 24 & 255) + (g >> 24 & 255) - ((o = o[h - 1]) >> 24 & 255)) << 24 | ve((n >> 16 & 255) + (g >> 16 & 255) - (o >> 16 & 255)) << 16 | ve((n >> 8 & 255) + (g >> 8 & 255) - (o >> 8 & 255)) << 8 | ve((255 & n) + (255 & g) - (255 & o))) >>> 0;
    }, D.Predictor13 = function(n, o, h) {
      var g = o[h - 1];
      return (ue((n = qt(n, o[h + 0])) >> 24 & 255, g >> 24 & 255) << 24 | ue(n >> 16 & 255, g >> 16 & 255) << 16 | ue(n >> 8 & 255, g >> 8 & 255) << 8 | ue(255 & n, 255 & g)) >>> 0;
    };
    var ya = D.PredictorAdd0;
    D.PredictorAdd1 = he, It("Predictor2", "PredictorAdd2"), It("Predictor3", "PredictorAdd3"), It("Predictor4", "PredictorAdd4"), It("Predictor5", "PredictorAdd5"), It("Predictor6", "PredictorAdd6"), It("Predictor7", "PredictorAdd7"), It("Predictor8", "PredictorAdd8"), It("Predictor9", "PredictorAdd9"), It("Predictor10", "PredictorAdd10"), It("Predictor11", "PredictorAdd11"), It("Predictor12", "PredictorAdd12"), It("Predictor13", "PredictorAdd13");
    var Hi = D.PredictorAdd2;
    Tt("ColorIndexInverseTransform", "MapARGB", "32b", function(n) {
      return n >> 8 & 255;
    }, function(n) {
      return n;
    }), Tt("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(n) {
      return n;
    }, function(n) {
      return n >> 8 & 255;
    });
    var Ue, ss = D.ColorIndexInverseTransform, fn = D.MapARGB, dn = D.VP8LColorIndexInverseTransformAlpha, xa = D.MapAlpha, _a = D.VP8LPredictorsAdd = [];
    _a.length = 16, (D.VP8LPredictors = []).length = 16, (D.VP8LPredictorsAdd_C = []).length = 16, (D.VP8LPredictors_C = []).length = 16;
    var Aa, Na, Vn, Yn, Jn, xi, $n, _i, Hr, pn, we, Ne, ze, Qe, On, La, Wi, os, ul, cl, hl, fl, dl, pl, Sa, gl, ml, vl, bl = s(511), wl = s(2041), yl = s(225), xl = s(767), _l = 0, oo = wl, ls = yl, kr = xl, Wr = bl, us = 0, cs = 1, Al = 2, hs = 3, fs = 4, lo = 5, Nl = 6, uo = 7, co = 8, ds = 9, ho = 10, Qc = [2, 3, 7], th = [3, 3, 11], Ll = [280, 256, 256, 256, 40], eh = [0, 1, 1, 1, 0], rh = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], nh = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], ih = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], ah = 8, fo = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], po = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ka = null, sh = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], oh = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], Sl = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], lh = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], uh = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], ch = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], hh = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Xn = [], Zr = [], Mn = [], fh = 1, kl = 2, Kn = [], Gr = [];
    Cn("UpsampleRgbLinePair", zn, 3), Cn("UpsampleBgrLinePair", or, 3), Cn("UpsampleRgbaLinePair", br, 4), Cn("UpsampleBgraLinePair", va, 4), Cn("UpsampleArgbLinePair", ma, 4), Cn("UpsampleRgba4444LinePair", bi, 2), Cn("UpsampleRgb565LinePair", vi, 2);
    var dh = D.UpsampleRgbLinePair, ph = D.UpsampleBgrLinePair, Pl = D.UpsampleRgbaLinePair, Il = D.UpsampleBgraLinePair, Cl = D.UpsampleArgbLinePair, Fl = D.UpsampleRgba4444LinePair, gh = D.UpsampleRgb565LinePair, ps = 16, gs = 1 << ps - 1, Pa = -227, go = 482, mh = 6, El = 0, vh = s(256), bh = s(256), wh = s(256), yh = s(256), xh = s(go - Pa), _h = s(go - Pa);
    Fn("YuvToRgbRow", zn, 3), Fn("YuvToBgrRow", or, 3), Fn("YuvToRgbaRow", br, 4), Fn("YuvToBgraRow", va, 4), Fn("YuvToArgbRow", ma, 4), Fn("YuvToRgba4444Row", bi, 2), Fn("YuvToRgb565Row", vi, 2);
    var Ol = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], ms = [0, 2, 8], Ah = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], Nh = 1;
    this.WebPDecodeRGBA = function(n, o, h, g, b) {
      var y = cs, _ = new pt(), L = new le();
      _.ba = L, L.S = y, L.width = [L.width], L.height = [L.height];
      var S = L.width, C = L.height, G = new Gt();
      if (G == null || n == null) var nt = 2;
      else e(G != null), nt = wi(n, o, h, G.width, G.height, G.Pd, G.Qd, G.format, null);
      if (nt != 0 ? S = 0 : (S != null && (S[0] = G.width[0]), C != null && (C[0] = G.height[0]), S = 1), S) {
        L.width = L.width[0], L.height = L.height[0], g != null && (g[0] = L.width), b != null && (b[0] = L.height);
        t: {
          if (g = new Bi(), (b = new bt()).data = n, b.w = o, b.ha = h, b.kd = 1, o = [0], e(b != null), ((n = wi(b.data, b.w, b.ha, null, null, null, o, null, b)) == 0 || n == 7) && o[0] && (n = 4), (o = n) == 0) {
            if (e(_ != null), g.data = b.data, g.w = b.w + b.offset, g.ha = b.ha - b.offset, g.put = Vt, g.ac = sn, g.bc = yn, g.ma = _, b.xa) {
              if ((n = li()) == null) {
                _ = 1;
                break t;
              }
              if ((function(F, J) {
                var Q = [0], ct = [0], rt = [0];
                e: for (; ; ) {
                  if (F == null) return 0;
                  if (J == null) return F.a = 2, 0;
                  if (F.l = J, F.a = 0, st(F.m, J.data, J.w, J.ha), !xn(F.m, Q, ct, rt)) {
                    F.a = 3;
                    break e;
                  }
                  if (F.xb = kl, J.width = Q[0], J.height = ct[0], !ln(Q[0], ct[0], 1, F, null)) break e;
                  return 1;
                }
                return e(F.a != 0), 0;
              })(n, g)) {
                if (g = (o = Hn(g.width, g.height, _.Oa, _.ba)) == 0) {
                  e: {
                    g = n;
                    r: for (; ; ) {
                      if (g == null) {
                        g = 0;
                        break e;
                      }
                      if (e(g.s.yc != null), e(g.s.Ya != null), e(0 < g.s.Wb), e((h = g.l) != null), e((b = h.ma) != null), g.xb != 0) {
                        if (g.ca = b.ba, g.tb = b.tb, e(g.ca != null), !ba(b.Oa, h, hs)) {
                          g.a = 2;
                          break r;
                        }
                        if (!ui(g, h.width) || h.da) break r;
                        if ((h.da || Yt(g.ca.S)) && Kr(), 11 > g.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), g.ca.f.kb.F != null && Kr()), g.Pb && 0 < g.s.ua && g.s.vb.X == null && !I(g.s.vb, g.s.Wa.Xa)) {
                          g.a = 1;
                          break r;
                        }
                        g.xb = 0;
                      }
                      if (!$r(g, g.V, g.Ba, g.c, g.i, h.o, qn)) break r;
                      b.Dc = g.Ma, g = 1;
                      break e;
                    }
                    e(g.a != 0), g = 0;
                  }
                  g = !g;
                }
                g && (o = n.a);
              } else o = n.a;
            } else {
              if ((n = new Vs()) == null) {
                _ = 1;
                break t;
              }
              if (n.Fa = b.na, n.P = b.P, n.qc = b.Sa, cn(n, g)) {
                if ((o = Hn(g.width, g.height, _.Oa, _.ba)) == 0) {
                  if (n.Aa = 0, h = _.Oa, e((b = n) != null), h != null) {
                    if (0 < (S = 0 > (S = h.Md) ? 0 : 100 < S ? 255 : 255 * S / 100)) {
                      for (C = G = 0; 4 > C; ++C) 12 > (nt = b.pb[C]).lc && (nt.ia = S * Ah[0 > nt.lc ? 0 : nt.lc] >> 3), G |= nt.ia;
                      G && (alert("todo:VP8InitRandom"), b.ia = 1);
                    }
                    b.Ga = h.Id, 100 < b.Ga ? b.Ga = 100 : 0 > b.Ga && (b.Ga = 0);
                  }
                  (function(F, J) {
                    if (F == null) return 0;
                    if (J == null) return Je(F, 2, "NULL VP8Io parameter in VP8Decode().");
                    if (!F.cb && !cn(F, J)) return 0;
                    if (e(F.cb), J.ac == null || J.ac(J)) {
                      J.ob && (F.L = 0);
                      var Q = ms[F.L];
                      if (F.L == 2 ? (F.yb = 0, F.zb = 0) : (F.yb = J.v - Q >> 4, F.zb = J.j - Q >> 4, 0 > F.yb && (F.yb = 0), 0 > F.zb && (F.zb = 0)), F.Va = J.o + 15 + Q >> 4, F.Hb = J.va + 15 + Q >> 4, F.Hb > F.za && (F.Hb = F.za), F.Va > F.Ub && (F.Va = F.Ub), 0 < F.L) {
                        var ct = F.ed;
                        for (Q = 0; 4 > Q; ++Q) {
                          var rt;
                          if (F.Qa.Cb) {
                            var dt = F.Qa.Lb[Q];
                            F.Qa.Fb || (dt += ct.Tb);
                          } else dt = ct.Tb;
                          for (rt = 0; 1 >= rt; ++rt) {
                            var mt = F.gd[Q][rt], _t = dt;
                            if (ct.Pc && (_t += ct.vd[0], rt && (_t += ct.od[0])), 0 < (_t = 0 > _t ? 0 : 63 < _t ? 63 : _t)) {
                              var wt = _t;
                              0 < ct.wb && (wt = 4 < ct.wb ? wt >> 2 : wt >> 1) > 9 - ct.wb && (wt = 9 - ct.wb), 1 > wt && (wt = 1), mt.dd = wt, mt.tc = 2 * _t + wt, mt.ld = 40 <= _t ? 2 : 15 <= _t ? 1 : 0;
                            } else mt.tc = 0;
                            mt.La = rt;
                          }
                        }
                      }
                      Q = 0;
                    } else Je(F, 6, "Frame setup failed"), Q = F.a;
                    if (Q = Q == 0) {
                      if (Q) {
                        F.$c = 0, 0 < F.Aa || (F.Ic = Nh);
                        e: {
                          Q = F.Ic, ct = 4 * (wt = F.za);
                          var Bt = 32 * wt, Pt = wt + 1, ne = 0 < F.L ? wt * (0 < F.Aa ? 2 : 1) : 0, Et = (F.Aa == 2 ? 2 : 1) * wt;
                          if ((mt = ct + 832 + (rt = 3 * (16 * Q + ms[F.L]) / 2 * Bt) + (dt = F.Fa != null && 0 < F.Fa.length ? F.Kc.c * F.Kc.i : 0)) != mt) Q = 0;
                          else {
                            if (mt > F.Vb) {
                              if (F.Vb = 0, F.Ec = s(mt), F.Fc = 0, F.Ec == null) {
                                Q = Je(F, 1, "no memory during frame initialization.");
                                break e;
                              }
                              F.Vb = mt;
                            }
                            mt = F.Ec, _t = F.Fc, F.Ac = mt, F.Bc = _t, _t += ct, F.Gd = f(Bt, Va), F.Hd = 0, F.rb = f(Pt + 1, aa), F.sb = 1, F.wa = ne ? f(ne, qr) : null, F.Y = 0, F.D.Nb = 0, F.D.wa = F.wa, F.D.Y = F.Y, 0 < F.Aa && (F.D.Y += wt), e(!0), F.oc = mt, F.pc = _t, _t += 832, F.ya = f(Et, sa), F.aa = 0, F.D.ya = F.ya, F.D.aa = F.aa, F.Aa == 2 && (F.D.aa += wt), F.R = 16 * wt, F.B = 8 * wt, wt = (Bt = ms[F.L]) * F.R, Bt = Bt / 2 * F.B, F.sa = mt, F.ta = _t + wt, F.qa = F.sa, F.ra = F.ta + 16 * Q * F.R + Bt, F.Ha = F.qa, F.Ia = F.ra + 8 * Q * F.B + Bt, F.$c = 0, _t += rt, F.mb = dt ? mt : null, F.nb = dt ? _t : null, e(_t + dt <= F.Fc + F.Vb), $a(F), a(F.Ac, F.Bc, 0, ct), Q = 1;
                          }
                        }
                        if (Q) {
                          if (J.ka = 0, J.y = F.sa, J.O = F.ta, J.f = F.qa, J.N = F.ra, J.ea = F.Ha, J.Vd = F.Ia, J.fa = F.R, J.Rc = F.B, J.F = null, J.J = 0, !_l) {
                            for (Q = -255; 255 >= Q; ++Q) bl[255 + Q] = 0 > Q ? -Q : Q;
                            for (Q = -1020; 1020 >= Q; ++Q) wl[1020 + Q] = -128 > Q ? -128 : 127 < Q ? 127 : Q;
                            for (Q = -112; 112 >= Q; ++Q) yl[112 + Q] = -16 > Q ? -16 : 15 < Q ? 15 : Q;
                            for (Q = -255; 510 >= Q; ++Q) xl[255 + Q] = 0 > Q ? 0 : 255 < Q ? 255 : Q;
                            _l = 1;
                          }
                          $n = Ti, _i = Js, pn = hn, we = Ka, Ne = Za, Hr = Ys, ze = ns, Qe = pi, On = v, La = O, Wi = is, os = u, ul = z, cl = Z, hl = di, fl = pa, dl = es, pl = rs, Zr[0] = ro, Zr[1] = $s, Zr[2] = to, Zr[3] = eo, Zr[4] = An, Zr[5] = no, Zr[6] = Nn, Zr[7] = io, Zr[8] = ua, Zr[9] = Di, Xn[0] = Zs, Xn[1] = Ks, Xn[2] = oa, Xn[3] = Qa, Xn[4] = hi, Xn[5] = la, Xn[6] = Qs, Mn[0] = so, Mn[1] = Xs, Mn[2] = fi, Mn[3] = ao, Mn[4] = ha, Mn[5] = ca, Mn[6] = ts, Q = 1;
                        } else Q = 0;
                      }
                      Q && (Q = (function(fe, tr) {
                        for (fe.M = 0; fe.M < fe.Va; ++fe.M) {
                          var ie, Ot = fe.Jc[fe.M & fe.Xb], Nt = fe.m, He = fe;
                          for (ie = 0; ie < He.za; ++ie) {
                            var te = Nt, de = He, Ce = de.Ac, lr = de.Bc + 4 * ie, wr = de.zc, Re = de.ya[de.aa + ie];
                            if (de.Qa.Bb ? Re.$b = gt(te, de.Pa.jb[0]) ? 2 + gt(te, de.Pa.jb[2]) : gt(te, de.Pa.jb[1]) : Re.$b = 0, de.kc && (Re.Ad = gt(te, de.Bd)), Re.Za = !gt(te, 145) + 0, Re.Za) {
                              var dr = Re.Ob, yr = 0;
                              for (de = 0; 4 > de; ++de) {
                                var er, me = wr[0 + de];
                                for (er = 0; 4 > er; ++er) {
                                  me = uh[Ce[lr + er]][me];
                                  for (var ye = Sl[gt(te, me[0])]; 0 < ye; ) ye = Sl[2 * ye + gt(te, me[ye])];
                                  me = -ye, Ce[lr + er] = me;
                                }
                                i(dr, yr, Ce, lr, 4), yr += 4, wr[0 + de] = me;
                              }
                            } else me = gt(te, 156) ? gt(te, 128) ? 1 : 3 : gt(te, 163) ? 2 : 0, Re.Ob[0] = me, a(Ce, lr, me, 4), a(wr, 0, me, 4);
                            Re.Dd = gt(te, 142) ? gt(te, 114) ? gt(te, 183) ? 1 : 3 : 2 : 0;
                          }
                          if (He.m.Ka) return Je(fe, 7, "Premature end-of-partition0 encountered.");
                          for (; fe.ja < fe.za; ++fe.ja) {
                            if (He = Ot, te = (Nt = fe).rb[Nt.sb - 1], Ce = Nt.rb[Nt.sb + Nt.ja], ie = Nt.ya[Nt.aa + Nt.ja], lr = Nt.kc ? ie.Ad : 0) te.la = Ce.la = 0, ie.Za || (te.Na = Ce.Na = 0), ie.Hc = 0, ie.Gc = 0, ie.ia = 0;
                            else {
                              var Te, xe;
                              if (te = Ce, Ce = He, lr = Nt.Pa.Xc, wr = Nt.ya[Nt.aa + Nt.ja], Re = Nt.pb[wr.$b], de = wr.ad, dr = 0, yr = Nt.rb[Nt.sb - 1], me = er = 0, a(de, dr, 0, 384), wr.Za) var ur = 0, Qr = lr[3];
                              else {
                                ye = s(16);
                                var We = te.Na + yr.Na;
                                if (We = ka(Ce, lr[1], We, Re.Eb, 0, ye, 0), te.Na = yr.Na = (0 < We) + 0, 1 < We) $n(ye, 0, de, dr);
                                else {
                                  var _r = ye[0] + 3 >> 3;
                                  for (ye = 0; 256 > ye; ye += 16) de[dr + ye] = _r;
                                }
                                ur = 1, Qr = lr[0];
                              }
                              var Le = 15 & te.la, rr = 15 & yr.la;
                              for (ye = 0; 4 > ye; ++ye) {
                                var Pr = 1 & rr;
                                for (_r = xe = 0; 4 > _r; ++_r) Le = Le >> 1 | (Pr = (We = ka(Ce, Qr, We = Pr + (1 & Le), Re.Sc, ur, de, dr)) > ur) << 7, xe = xe << 2 | (3 < We ? 3 : 1 < We ? 2 : de[dr + 0] != 0), dr += 16;
                                Le >>= 4, rr = rr >> 1 | Pr << 7, er = (er << 8 | xe) >>> 0;
                              }
                              for (Qr = Le, ur = rr >> 4, Te = 0; 4 > Te; Te += 2) {
                                for (xe = 0, Le = te.la >> 4 + Te, rr = yr.la >> 4 + Te, ye = 0; 2 > ye; ++ye) {
                                  for (Pr = 1 & rr, _r = 0; 2 > _r; ++_r) We = Pr + (1 & Le), Le = Le >> 1 | (Pr = 0 < (We = ka(Ce, lr[2], We, Re.Qc, 0, de, dr))) << 3, xe = xe << 2 | (3 < We ? 3 : 1 < We ? 2 : de[dr + 0] != 0), dr += 16;
                                  Le >>= 2, rr = rr >> 1 | Pr << 5;
                                }
                                me |= xe << 4 * Te, Qr |= Le << 4 << Te, ur |= (240 & rr) << Te;
                              }
                              te.la = Qr, yr.la = ur, wr.Hc = er, wr.Gc = me, wr.ia = 43690 & me ? 0 : Re.ia, lr = !(er | me);
                            }
                            if (0 < Nt.L && (Nt.wa[Nt.Y + Nt.ja] = Nt.gd[ie.$b][ie.Za], Nt.wa[Nt.Y + Nt.ja].La |= !lr), He.Ka) return Je(fe, 7, "Premature end-of-file encountered.");
                          }
                          if ($a(fe), Nt = tr, He = 1, ie = (Ot = fe).D, te = 0 < Ot.L && Ot.M >= Ot.zb && Ot.M <= Ot.Va, Ot.Aa == 0) e: {
                            if (ie.M = Ot.M, ie.uc = te, zr(Ot, ie), He = 1, ie = (xe = Ot.D).Nb, te = (me = ms[Ot.L]) * Ot.R, Ce = me / 2 * Ot.B, ye = 16 * ie * Ot.R, _r = 8 * ie * Ot.B, lr = Ot.sa, wr = Ot.ta - te + ye, Re = Ot.qa, de = Ot.ra - Ce + _r, dr = Ot.Ha, yr = Ot.Ia - Ce + _r, rr = (Le = xe.M) == 0, er = Le >= Ot.Va - 1, Ot.Aa == 2 && zr(Ot, xe), xe.uc) for (Pr = (We = Ot).D.M, e(We.D.uc), xe = We.yb; xe < We.Hb; ++xe) {
                              ur = xe, Qr = Pr;
                              var xr = (Ir = (cr = We).D).Nb;
                              Te = cr.R;
                              var Ir = Ir.wa[Ir.Y + ur], Cr = cr.sa, Ar = cr.ta + 16 * xr * Te + 16 * ur, Fr = Ir.dd, Ie = Ir.tc;
                              if (Ie != 0) if (e(3 <= Ie), cr.L == 1) 0 < ur && fl(Cr, Ar, Te, Ie + 4), Ir.La && pl(Cr, Ar, Te, Ie), 0 < Qr && hl(Cr, Ar, Te, Ie + 4), Ir.La && dl(Cr, Ar, Te, Ie);
                              else {
                                var Er = cr.B, tn = cr.qa, Ai = cr.ra + 8 * xr * Er + 8 * ur, jn = cr.Ha, cr = cr.Ia + 8 * xr * Er + 8 * ur;
                                xr = Ir.ld, 0 < ur && (Qe(Cr, Ar, Te, Ie + 4, Fr, xr), La(tn, Ai, jn, cr, Er, Ie + 4, Fr, xr)), Ir.La && (os(Cr, Ar, Te, Ie, Fr, xr), cl(tn, Ai, jn, cr, Er, Ie, Fr, xr)), 0 < Qr && (ze(Cr, Ar, Te, Ie + 4, Fr, xr), On(tn, Ai, jn, cr, Er, Ie + 4, Fr, xr)), Ir.La && (Wi(Cr, Ar, Te, Ie, Fr, xr), ul(tn, Ai, jn, cr, Er, Ie, Fr, xr));
                              }
                            }
                            if (Ot.ia && alert("todo:DitherRow"), Nt.put != null) {
                              if (xe = 16 * Le, Le = 16 * (Le + 1), rr ? (Nt.y = Ot.sa, Nt.O = Ot.ta + ye, Nt.f = Ot.qa, Nt.N = Ot.ra + _r, Nt.ea = Ot.Ha, Nt.W = Ot.Ia + _r) : (xe -= me, Nt.y = lr, Nt.O = wr, Nt.f = Re, Nt.N = de, Nt.ea = dr, Nt.W = yr), er || (Le -= me), Le > Nt.o && (Le = Nt.o), Nt.F = null, Nt.J = null, Ot.Fa != null && 0 < Ot.Fa.length && xe < Le && (Nt.J = Pe(Ot, Nt, xe, Le - xe), Nt.F = Ot.mb, Nt.F == null && Nt.F.length == 0)) {
                                He = Je(Ot, 3, "Could not decode alpha data.");
                                break e;
                              }
                              xe < Nt.j && (me = Nt.j - xe, xe = Nt.j, e(!(1 & me)), Nt.O += Ot.R * me, Nt.N += Ot.B * (me >> 1), Nt.W += Ot.B * (me >> 1), Nt.F != null && (Nt.J += Nt.width * me)), xe < Le && (Nt.O += Nt.v, Nt.N += Nt.v >> 1, Nt.W += Nt.v >> 1, Nt.F != null && (Nt.J += Nt.v), Nt.ka = xe - Nt.j, Nt.U = Nt.va - Nt.v, Nt.T = Le - xe, He = Nt.put(Nt));
                            }
                            ie + 1 != Ot.Ic || er || (i(Ot.sa, Ot.ta - te, lr, wr + 16 * Ot.R, te), i(Ot.qa, Ot.ra - Ce, Re, de + 8 * Ot.B, Ce), i(Ot.Ha, Ot.Ia - Ce, dr, yr + 8 * Ot.B, Ce));
                          }
                          if (!He) return Je(fe, 6, "Output aborted.");
                        }
                        return 1;
                      })(F, J)), J.bc != null && J.bc(J), Q &= 1;
                    }
                    return Q ? (F.cb = 0, Q) : 0;
                  })(n, g) || (o = n.a);
                }
              } else o = n.a;
            }
            o == 0 && _.Oa != null && _.Oa.fd && (o = wa(_.ba));
          }
          _ = o;
        }
        y = _ != 0 ? null : 11 > y ? L.f.RGBA.eb : L.f.kb.y;
      } else y = null;
      return y;
    };
    var Ml = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function d(D, H) {
    for (var w = "", A = 0; A < 4; A++) w += String.fromCharCode(D[H++]);
    return w;
  }
  function m(D, H) {
    return D[H + 0] | D[H + 1] << 8;
  }
  function N(D, H) {
    return (D[H + 0] | D[H + 1] << 8 | D[H + 2] << 16) >>> 0;
  }
  function P(D, H) {
    return (D[H + 0] | D[H + 1] << 8 | D[H + 2] << 16 | D[H + 3] << 24) >>> 0;
  }
  new c();
  var p = [0], j = [0], E = [], R = new c(), k = r, V = (function(D, H) {
    var w = {}, A = 0, B = !1, q = 0, et = 0;
    if (w.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    (function(x, M) {
      for (var T = 0; T < 4; T++) if (x[M + T] != "RIFF".charCodeAt(T)) return !0;
      return !1;
    })(D, H)) {
      for (P(D, H += 4), H += 8; H < D.length; ) {
        var it = d(D, H), at = P(D, H += 4);
        H += 4;
        var K = at + (1 & at);
        switch (it) {
          case "VP8 ":
          case "VP8L":
            w.frames[A] === void 0 && (w.frames[A] = {}), (ft = w.frames[A]).src_off = B ? et : H - 8, ft.src_size = q + at + 8, A++, B && (B = !1, q = 0, et = 0);
            break;
          case "VP8X":
            (ft = w.header = {}).feature_flags = D[H];
            var st = H + 4;
            ft.canvas_width = 1 + N(D, st), st += 3, ft.canvas_height = 1 + N(D, st), st += 3;
            break;
          case "ALPH":
            B = !0, q = K + 8, et = H - 8;
            break;
          case "ANIM":
            (ft = w.header).bgcolor = P(D, H), st = H + 4, ft.loop_count = m(D, st), st += 2;
            break;
          case "ANMF":
            var xt, ft;
            (ft = w.frames[A] = {}).offset_x = 2 * N(D, H), H += 3, ft.offset_y = 2 * N(D, H), H += 3, ft.width = 1 + N(D, H), H += 3, ft.height = 1 + N(D, H), H += 3, ft.duration = N(D, H), H += 3, xt = D[H++], ft.dispose = 1 & xt, ft.blend = xt >> 1 & 1;
        }
        it != "ANMF" && (H += K);
      }
      return w;
    }
  })(k, 0);
  V.response = k, V.rgbaoutput = !0, V.dataurl = !1;
  var Y = V.header ? V.header : null, U = V.frames ? V.frames : null;
  if (Y) {
    Y.loop_counter = Y.loop_count, p = [Y.canvas_height], j = [Y.canvas_width];
    for (var ot = 0; ot < U.length && U[ot].blend != 0; ot++) ;
  }
  var vt = U[0], ht = R.WebPDecodeRGBA(k, vt.src_off, vt.src_size, j, p);
  vt.rgba = ht, vt.imgwidth = j[0], vt.imgheight = p[0];
  for (var X = 0; X < j[0] * p[0] * 4; X++) E[X] = ht[X];
  return this.width = j, this.height = p, this.data = E, this;
}
(function(r) {
  var e, t, i, a, s, f, l, c, d, m = function(x) {
    return x = x || {}, this.isStrokeTransparent = x.isStrokeTransparent || !1, this.strokeOpacity = x.strokeOpacity || 1, this.strokeStyle = x.strokeStyle || "#000000", this.fillStyle = x.fillStyle || "#000000", this.isFillTransparent = x.isFillTransparent || !1, this.fillOpacity = x.fillOpacity || 1, this.font = x.font || "10px sans-serif", this.textBaseline = x.textBaseline || "alphabetic", this.textAlign = x.textAlign || "left", this.lineWidth = x.lineWidth || 1, this.lineJoin = x.lineJoin || "miter", this.lineCap = x.lineCap || "butt", this.path = x.path || [], this.transform = x.transform !== void 0 ? x.transform.clone() : new c(), this.globalCompositeOperation = x.globalCompositeOperation || "normal", this.globalAlpha = x.globalAlpha || 1, this.clip_path = x.clip_path || [], this.currentPoint = x.currentPoint || new f(), this.miterLimit = x.miterLimit || 10, this.lastPoint = x.lastPoint || new f(), this.lineDashOffset = x.lineDashOffset || 0, this.lineDash = x.lineDash || [], this.margin = x.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = x.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof x.ignoreClearRect != "boolean" || x.ignoreClearRect, this;
  };
  r.events.push(["initialized", function() {
    this.context2d = new N(this), e = this.internal.f2, t = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, a = this.internal.getHorizontalCoordinate, s = this.internal.getVerticalCoordinate, f = this.internal.Point, l = this.internal.Rectangle, c = this.internal.Matrix, d = new m();
  }]);
  var N = function(x) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var M = x;
    Object.defineProperty(this, "pdf", { get: function() {
      return M;
    } });
    var T = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return T;
    }, set: function(I) {
      T = !!I;
    } });
    var W = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return W;
    }, set: function(I) {
      W = !!I;
    } });
    var $ = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return $;
    }, set: function(I) {
      isNaN(I) || ($ = I);
    } });
    var tt = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return tt;
    }, set: function(I) {
      isNaN(I) || (tt = I);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return d.margin;
    }, set: function(I) {
      var Lt;
      typeof I == "number" ? Lt = [I, I, I, I] : ((Lt = new Array(4))[0] = I[0], Lt[1] = I.length >= 2 ? I[1] : Lt[0], Lt[2] = I.length >= 3 ? I[2] : Lt[0], Lt[3] = I.length >= 4 ? I[3] : Lt[1]), d.margin = Lt;
    } });
    var lt = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return lt;
    }, set: function(I) {
      lt = I;
    } });
    var ut = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return ut;
    }, set: function(I) {
      ut = I;
    } });
    var gt = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return gt;
    }, set: function(I) {
      gt = I;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return d;
    }, set: function(I) {
      I instanceof m && (d = I);
    } }), Object.defineProperty(this, "path", { get: function() {
      return d.path;
    }, set: function(I) {
      d.path = I;
    } });
    var At = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return At;
    }, set: function(I) {
      At = I;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(I) {
      var Lt;
      Lt = P(I), this.ctx.fillStyle = Lt.style, this.ctx.isFillTransparent = Lt.a === 0, this.ctx.fillOpacity = Lt.a, this.pdf.setFillColor(Lt.r, Lt.g, Lt.b, { a: Lt.a }), this.pdf.setTextColor(Lt.r, Lt.g, Lt.b, { a: Lt.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(I) {
      var Lt = P(I);
      this.ctx.strokeStyle = Lt.style, this.ctx.isStrokeTransparent = Lt.a === 0, this.ctx.strokeOpacity = Lt.a, Lt.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (Lt.a, this.pdf.setDrawColor(Lt.r, Lt.g, Lt.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(I) {
      ["butt", "round", "square"].indexOf(I) !== -1 && (this.ctx.lineCap = I, this.pdf.setLineCap(I));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(I) {
      isNaN(I) || (this.ctx.lineWidth = I, this.pdf.setLineWidth(I));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(I) {
      ["bevel", "round", "miter"].indexOf(I) !== -1 && (this.ctx.lineJoin = I, this.pdf.setLineJoin(I));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(I) {
      isNaN(I) || (this.ctx.miterLimit = I, this.pdf.setMiterLimit(I));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(I) {
      this.ctx.textBaseline = I;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(I) {
      ["right", "end", "center", "left", "start"].indexOf(I) !== -1 && (this.ctx.textAlign = I);
    } });
    var kt = null, St = null, Dt = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Dt;
    }, set: function(I) {
      kt = null, St = null, Dt = I;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(I) {
      var Lt;
      if (this.ctx.font = I, (Lt = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(I)) !== null) {
        var ae = Lt[1];
        Lt[2];
        var Ht = Lt[3], yt = Lt[4];
        Lt[5];
        var Wt = Lt[6], It = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(yt)[2];
        yt = Math.floor(It === "px" ? parseFloat(yt) * this.pdf.internal.scaleFactor : It === "em" ? parseFloat(yt) * this.pdf.getFontSize() : parseFloat(yt) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(yt);
        var zt = (function(Tt) {
          var qe, pe, se = [], oe = Tt.trim();
          if (oe === "") return Wo;
          if (oe in Hu) return [Hu[oe]];
          for (; oe !== ""; ) {
            switch (pe = null, qe = (oe = Gu(oe)).charAt(0)) {
              case '"':
              case "'":
                pe = g2(oe.substring(1), qe);
                break;
              default:
                pe = m2(oe);
            }
            if (pe === null || (se.push(pe[0]), (oe = Gu(pe[1])) !== "" && oe.charAt(0) !== ",")) return Wo;
            oe = oe.replace(/^,/, "");
          }
          return se;
        })(Wt);
        if (this.fontFaces) {
          var qt = (function(Tt, qe) {
            var pe = Tt.getFontList(), se = JSON.stringify(pe);
            if (kt === null || St !== se) {
              var oe = (function(Ee) {
                var Ut = [];
                return Object.keys(Ee).forEach(function(ke) {
                  Ee[ke].forEach(function(Yt) {
                    var Qt = null;
                    switch (Yt) {
                      case "bold":
                        Qt = { family: ke, weight: "bold" };
                        break;
                      case "italic":
                        Qt = { family: ke, style: "italic" };
                        break;
                      case "bolditalic":
                        Qt = { family: ke, weight: "bold", style: "italic" };
                        break;
                      case "":
                      case "normal":
                        Qt = { family: ke };
                    }
                    Qt !== null && (Qt.ref = { name: ke, style: Yt }, Ut.push(Qt));
                  });
                }), Ut;
              })(pe);
              kt = (function(Ee) {
                for (var Ut = {}, ke = 0; ke < Ee.length; ++ke) {
                  var Yt = Ho(Ee[ke]), Qt = Yt.family, Oe = Yt.stretch, le = Yt.style, Gt = Yt.weight;
                  Ut[Qt] = Ut[Qt] || {}, Ut[Qt][Oe] = Ut[Qt][Oe] || {}, Ut[Qt][Oe][le] = Ut[Qt][Oe][le] || {}, Ut[Qt][Oe][le][Gt] = Yt;
                }
                return Ut;
              })(oe.concat(qe)), St = se;
            }
            return kt;
          })(this.pdf, this.fontFaces), ve = zt.map(function(Tt) {
            return { family: Tt, stretch: "normal", weight: Ht, style: ae };
          }), ue = (function(Tt, qe, pe) {
            for (var se = (pe = pe || {}).defaultFontFamily || "times", oe = Object.assign({}, p2, pe.genericFontFamilies || {}), Ee = null, Ut = null, ke = 0; ke < qe.length; ++ke) if (oe[(Ee = Ho(qe[ke])).family] && (Ee.family = oe[Ee.family]), Tt.hasOwnProperty(Ee.family)) {
              Ut = Tt[Ee.family];
              break;
            }
            if (!(Ut = Ut || Tt[se])) throw new Error("Could not find a font-family for the rule '" + Wu(Ee) + "' and default family '" + se + "'.");
            if (Ut = (function(Yt, Qt) {
              if (Qt[Yt]) return Qt[Yt];
              var Oe = nl[Yt], le = Oe <= nl.normal ? -1 : 1, Gt = zu(Qt, Jc, Oe, le);
              if (!Gt) throw new Error("Could not find a matching font-stretch value for " + Yt);
              return Gt;
            })(Ee.stretch, Ut), Ut = (function(Yt, Qt) {
              if (Qt[Yt]) return Qt[Yt];
              for (var Oe = Yc[Yt], le = 0; le < Oe.length; ++le) if (Qt[Oe[le]]) return Qt[Oe[le]];
              throw new Error("Could not find a matching font-style for " + Yt);
            })(Ee.style, Ut), !(Ut = (function(Yt, Qt) {
              if (Qt[Yt]) return Qt[Yt];
              if (Yt === 400 && Qt[500]) return Qt[500];
              if (Yt === 500 && Qt[400]) return Qt[400];
              var Oe = d2[Yt], le = zu(Qt, $c, Oe, Yt < 400 ? -1 : 1);
              if (!le) throw new Error("Could not find a matching font-weight for value " + Yt);
              return le;
            })(Ee.weight, Ut))) throw new Error("Failed to resolve a font for the rule '" + Wu(Ee) + "'.");
            return Ut;
          })(qt, ve);
          this.pdf.setFont(ue.ref.name, ue.ref.style);
        } else {
          var Zt = "";
          (Ht === "bold" || parseInt(Ht, 10) >= 700 || ae === "bold") && (Zt = "bold"), ae === "italic" && (Zt += "italic"), Zt.length === 0 && (Zt = "normal");
          for (var he = "", ce = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, Mt = 0; Mt < zt.length; Mt++) {
            if (this.pdf.internal.getFont(zt[Mt], Zt, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              he = zt[Mt];
              break;
            }
            if (Zt === "bolditalic" && this.pdf.internal.getFont(zt[Mt], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) he = zt[Mt], Zt = "bold";
            else if (this.pdf.internal.getFont(zt[Mt], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              he = zt[Mt], Zt = "normal";
              break;
            }
          }
          if (he === "") {
            for (var ee = 0; ee < zt.length; ee++) if (ce[zt[ee]]) {
              he = ce[zt[ee]];
              break;
            }
          }
          he = he === "" ? "Times" : he, this.pdf.setFont(he, Zt);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(I) {
      this.ctx.globalCompositeOperation = I;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(I) {
      this.ctx.globalAlpha = I;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(I) {
      this.ctx.lineDashOffset = I, ft.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(I) {
      this.ctx.lineDash = I, ft.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(I) {
      this.ctx.ignoreClearRect = !!I;
    } });
  };
  N.prototype.setLineDash = function(x) {
    this.lineDash = x;
  }, N.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, N.prototype.fill = function() {
    U.call(this, "fill", !1);
  }, N.prototype.stroke = function() {
    U.call(this, "stroke", !1);
  }, N.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, N.prototype.moveTo = function(x, M) {
    if (isNaN(x) || isNaN(M)) throw Se.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var T = this.ctx.transform.applyToPoint(new f(x, M));
    this.path.push({ type: "mt", x: T.x, y: T.y }), this.ctx.lastPoint = new f(x, M);
  }, N.prototype.closePath = function() {
    var x = new f(0, 0), M = 0;
    for (M = this.path.length - 1; M !== -1; M--) if (this.path[M].type === "begin" && Ae(this.path[M + 1]) === "object" && typeof this.path[M + 1].x == "number") {
      x = new f(this.path[M + 1].x, this.path[M + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new f(x.x, x.y);
  }, N.prototype.lineTo = function(x, M) {
    if (isNaN(x) || isNaN(M)) throw Se.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var T = this.ctx.transform.applyToPoint(new f(x, M));
    this.path.push({ type: "lt", x: T.x, y: T.y }), this.ctx.lastPoint = new f(T.x, T.y);
  }, N.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), U.call(this, null, !0);
  }, N.prototype.quadraticCurveTo = function(x, M, T, W) {
    if (isNaN(T) || isNaN(W) || isNaN(x) || isNaN(M)) throw Se.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var $ = this.ctx.transform.applyToPoint(new f(T, W)), tt = this.ctx.transform.applyToPoint(new f(x, M));
    this.path.push({ type: "qct", x1: tt.x, y1: tt.y, x: $.x, y: $.y }), this.ctx.lastPoint = new f($.x, $.y);
  }, N.prototype.bezierCurveTo = function(x, M, T, W, $, tt) {
    if (isNaN($) || isNaN(tt) || isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W)) throw Se.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var lt = this.ctx.transform.applyToPoint(new f($, tt)), ut = this.ctx.transform.applyToPoint(new f(x, M)), gt = this.ctx.transform.applyToPoint(new f(T, W));
    this.path.push({ type: "bct", x1: ut.x, y1: ut.y, x2: gt.x, y2: gt.y, x: lt.x, y: lt.y }), this.ctx.lastPoint = new f(lt.x, lt.y);
  }, N.prototype.arc = function(x, M, T, W, $, tt) {
    if (isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W) || isNaN($)) throw Se.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (tt = !!tt, !this.ctx.transform.isIdentity) {
      var lt = this.ctx.transform.applyToPoint(new f(x, M));
      x = lt.x, M = lt.y;
      var ut = this.ctx.transform.applyToPoint(new f(0, T)), gt = this.ctx.transform.applyToPoint(new f(0, 0));
      T = Math.sqrt(Math.pow(ut.x - gt.x, 2) + Math.pow(ut.y - gt.y, 2));
    }
    Math.abs($ - W) >= 2 * Math.PI && (W = 0, $ = 2 * Math.PI), this.path.push({ type: "arc", x, y: M, radius: T, startAngle: W, endAngle: $, counterclockwise: tt });
  }, N.prototype.arcTo = function(x, M, T, W, $) {
    throw new Error("arcTo not implemented.");
  }, N.prototype.rect = function(x, M, T, W) {
    if (isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W)) throw Se.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(x, M), this.lineTo(x + T, M), this.lineTo(x + T, M + W), this.lineTo(x, M + W), this.lineTo(x, M), this.lineTo(x + T, M), this.lineTo(x, M);
  }, N.prototype.fillRect = function(x, M, T, W) {
    if (isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W)) throw Se.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var $ = {};
      this.lineCap !== "butt" && ($.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && ($.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(x, M, T, W), this.fill(), $.hasOwnProperty("lineCap") && (this.lineCap = $.lineCap), $.hasOwnProperty("lineJoin") && (this.lineJoin = $.lineJoin);
    }
  }, N.prototype.strokeRect = function(x, M, T, W) {
    if (isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W)) throw Se.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    j.call(this) || (this.beginPath(), this.rect(x, M, T, W), this.stroke());
  }, N.prototype.clearRect = function(x, M, T, W) {
    if (isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W)) throw Se.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(x, M, T, W));
  }, N.prototype.save = function(x) {
    x = typeof x != "boolean" || x;
    for (var M = this.pdf.internal.getCurrentPageInfo().pageNumber, T = 0; T < this.pdf.internal.getNumberOfPages(); T++) this.pdf.setPage(T + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(M), x) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var W = new m(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = W;
    }
  }, N.prototype.restore = function(x) {
    x = typeof x != "boolean" || x;
    for (var M = this.pdf.internal.getCurrentPageInfo().pageNumber, T = 0; T < this.pdf.internal.getNumberOfPages(); T++) this.pdf.setPage(T + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(M), x && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, N.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var P = function(x) {
    var M, T, W, $;
    if (x.isCanvasGradient === !0 && (x = x.getColor()), !x) return { r: 0, g: 0, b: 0, a: 0, style: x };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(x)) M = 0, T = 0, W = 0, $ = 0;
    else {
      var tt = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(x);
      if (tt !== null) M = parseInt(tt[1]), T = parseInt(tt[2]), W = parseInt(tt[3]), $ = 1;
      else if ((tt = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(x)) !== null) M = parseInt(tt[1]), T = parseInt(tt[2]), W = parseInt(tt[3]), $ = parseFloat(tt[4]);
      else {
        if ($ = 1, typeof x == "string" && x.charAt(0) !== "#") {
          var lt = new qc(x);
          x = lt.ok ? lt.toHex() : "#000000";
        }
        x.length === 4 ? (M = x.substring(1, 2), M += M, T = x.substring(2, 3), T += T, W = x.substring(3, 4), W += W) : (M = x.substring(1, 3), T = x.substring(3, 5), W = x.substring(5, 7)), M = parseInt(M, 16), T = parseInt(T, 16), W = parseInt(W, 16);
      }
    }
    return { r: M, g: T, b: W, a: $, style: x };
  }, p = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, j = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  N.prototype.fillText = function(x, M, T, W) {
    if (isNaN(M) || isNaN(T) || typeof x != "string") throw Se.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (W = isNaN(W) ? void 0 : W, !p.call(this)) {
      var $ = K(this.ctx.transform.rotation), tt = this.ctx.transform.scaleX;
      A.call(this, { text: x, x: M, y: T, scale: tt, angle: $, align: this.textAlign, maxWidth: W });
    }
  }, N.prototype.strokeText = function(x, M, T, W) {
    if (isNaN(M) || isNaN(T) || typeof x != "string") throw Se.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!j.call(this)) {
      W = isNaN(W) ? void 0 : W;
      var $ = K(this.ctx.transform.rotation), tt = this.ctx.transform.scaleX;
      A.call(this, { text: x, x: M, y: T, scale: tt, renderingMode: "stroke", angle: $, align: this.textAlign, maxWidth: W });
    }
  }, N.prototype.measureText = function(x) {
    if (typeof x != "string") throw Se.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var M = this.pdf, T = this.pdf.internal.scaleFactor, W = M.internal.getFontSize(), $ = M.getStringUnitWidth(x) * W / M.internal.scaleFactor;
    return new function(tt) {
      var lt = (tt = tt || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return lt;
      } }), this;
    }({ width: $ *= Math.round(96 * T / 72 * 1e4) / 1e4 });
  }, N.prototype.scale = function(x, M) {
    if (isNaN(x) || isNaN(M)) throw Se.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var T = new c(x, 0, 0, M, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(T);
  }, N.prototype.rotate = function(x) {
    if (isNaN(x)) throw Se.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var M = new c(Math.cos(x), Math.sin(x), -Math.sin(x), Math.cos(x), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(M);
  }, N.prototype.translate = function(x, M) {
    if (isNaN(x) || isNaN(M)) throw Se.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var T = new c(1, 0, 0, 1, x, M);
    this.ctx.transform = this.ctx.transform.multiply(T);
  }, N.prototype.transform = function(x, M, T, W, $, tt) {
    if (isNaN(x) || isNaN(M) || isNaN(T) || isNaN(W) || isNaN($) || isNaN(tt)) throw Se.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var lt = new c(x, M, T, W, $, tt);
    this.ctx.transform = this.ctx.transform.multiply(lt);
  }, N.prototype.setTransform = function(x, M, T, W, $, tt) {
    x = isNaN(x) ? 1 : x, M = isNaN(M) ? 0 : M, T = isNaN(T) ? 0 : T, W = isNaN(W) ? 1 : W, $ = isNaN($) ? 0 : $, tt = isNaN(tt) ? 0 : tt, this.ctx.transform = new c(x, M, T, W, $, tt);
  };
  var E = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  N.prototype.drawImage = function(x, M, T, W, $, tt, lt, ut, gt) {
    var At = this.pdf.getImageProperties(x), kt = 1, St = 1, Dt = 1, I = 1;
    W !== void 0 && ut !== void 0 && (Dt = ut / W, I = gt / $, kt = At.width / W * ut / W, St = At.height / $ * gt / $), tt === void 0 && (tt = M, lt = T, M = 0, T = 0), W !== void 0 && ut === void 0 && (ut = W, gt = $), W === void 0 && ut === void 0 && (ut = At.width, gt = At.height);
    var Lt = this.ctx.transform.decompose(), ae = K(Lt.rotate.shx), Ht = new c(), yt = (Ht = (Ht = (Ht = Ht.multiply(Lt.translate)).multiply(Lt.skew)).multiply(Lt.scale)).applyToRectangle(new l(tt - M * Dt, lt - T * I, W * kt, $ * St));
    if (this.autoPaging) {
      for (var Wt, It = R.call(this, yt), zt = [], qt = 0; qt < It.length; qt += 1) zt.indexOf(It[qt]) === -1 && zt.push(It[qt]);
      Y(zt);
      for (var ve = zt[0], ue = zt[zt.length - 1], Zt = ve; Zt < ue + 1; Zt++) {
        this.pdf.setPage(Zt);
        var he = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ce = Zt === 1 ? this.posY + this.margin[0] : this.margin[0], Mt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ee = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Tt = Zt === 1 ? 0 : Mt + (Zt - 2) * ee;
        if (this.ctx.clip_path.length !== 0) {
          var qe = this.path;
          Wt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = V(Wt, this.posX + this.margin[3], -Tt + ce + this.ctx.prevPageLastElemOffset), ot.call(this, "fill", !0), this.path = qe;
        }
        var pe = JSON.parse(JSON.stringify(yt));
        pe = V([pe], this.posX + this.margin[3], -Tt + ce + this.ctx.prevPageLastElemOffset)[0];
        var se = (Zt > ve || Zt < ue) && E.call(this);
        se && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], he, ee, null).clip().discardPath()), this.pdf.addImage(x, "JPEG", pe.x, pe.y, pe.w, pe.h, null, null, ae), se && this.pdf.restoreGraphicsState();
      }
    } else this.pdf.addImage(x, "JPEG", yt.x, yt.y, yt.w, yt.h, null, null, ae);
  };
  var R = function(x, M, T) {
    var W = [];
    M = M || this.pdf.internal.pageSize.width, T = T || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var $ = this.posY + this.ctx.prevPageLastElemOffset;
    switch (x.type) {
      default:
      case "mt":
      case "lt":
        W.push(Math.floor((x.y + $) / T) + 1);
        break;
      case "arc":
        W.push(Math.floor((x.y + $ - x.radius) / T) + 1), W.push(Math.floor((x.y + $ + x.radius) / T) + 1);
        break;
      case "qct":
        var tt = st(this.ctx.lastPoint.x, this.ctx.lastPoint.y, x.x1, x.y1, x.x, x.y);
        W.push(Math.floor((tt.y + $) / T) + 1), W.push(Math.floor((tt.y + tt.h + $) / T) + 1);
        break;
      case "bct":
        var lt = xt(this.ctx.lastPoint.x, this.ctx.lastPoint.y, x.x1, x.y1, x.x2, x.y2, x.x, x.y);
        W.push(Math.floor((lt.y + $) / T) + 1), W.push(Math.floor((lt.y + lt.h + $) / T) + 1);
        break;
      case "rect":
        W.push(Math.floor((x.y + $) / T) + 1), W.push(Math.floor((x.y + x.h + $) / T) + 1);
    }
    for (var ut = 0; ut < W.length; ut += 1) for (; this.pdf.internal.getNumberOfPages() < W[ut]; ) k.call(this);
    return W;
  }, k = function() {
    var x = this.fillStyle, M = this.strokeStyle, T = this.font, W = this.lineCap, $ = this.lineWidth, tt = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = x, this.strokeStyle = M, this.font = T, this.lineCap = W, this.lineWidth = $, this.lineJoin = tt;
  }, V = function(x, M, T) {
    for (var W = 0; W < x.length; W++) switch (x[W].type) {
      case "bct":
        x[W].x2 += M, x[W].y2 += T;
      case "qct":
        x[W].x1 += M, x[W].y1 += T;
      default:
        x[W].x += M, x[W].y += T;
    }
    return x;
  }, Y = function(x) {
    return x.sort(function(M, T) {
      return M - T;
    });
  }, U = function(x, M) {
    var T = this.fillStyle, W = this.strokeStyle, $ = this.lineCap, tt = this.lineWidth, lt = Math.abs(tt * this.ctx.transform.scaleX), ut = this.lineJoin;
    if (this.autoPaging) {
      for (var gt, At, kt = JSON.parse(JSON.stringify(this.path)), St = JSON.parse(JSON.stringify(this.path)), Dt = [], I = 0; I < St.length; I++) if (St[I].x !== void 0) for (var Lt = R.call(this, St[I]), ae = 0; ae < Lt.length; ae += 1) Dt.indexOf(Lt[ae]) === -1 && Dt.push(Lt[ae]);
      for (var Ht = 0; Ht < Dt.length; Ht++) for (; this.pdf.internal.getNumberOfPages() < Dt[Ht]; ) k.call(this);
      Y(Dt);
      for (var yt = Dt[0], Wt = Dt[Dt.length - 1], It = yt; It < Wt + 1; It++) {
        this.pdf.setPage(It), this.fillStyle = T, this.strokeStyle = W, this.lineCap = $, this.lineWidth = lt, this.lineJoin = ut;
        var zt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], qt = It === 1 ? this.posY + this.margin[0] : this.margin[0], ve = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ue = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Zt = It === 1 ? 0 : ve + (It - 2) * ue;
        if (this.ctx.clip_path.length !== 0) {
          var he = this.path;
          gt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = V(gt, this.posX + this.margin[3], -Zt + qt + this.ctx.prevPageLastElemOffset), ot.call(this, x, !0), this.path = he;
        }
        if (At = JSON.parse(JSON.stringify(kt)), this.path = V(At, this.posX + this.margin[3], -Zt + qt + this.ctx.prevPageLastElemOffset), M === !1 || It === 0) {
          var ce = (It > yt || It < Wt) && E.call(this);
          ce && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], zt, ue, null).clip().discardPath()), ot.call(this, x, M), ce && this.pdf.restoreGraphicsState();
        }
        this.lineWidth = tt;
      }
      this.path = kt;
    } else this.lineWidth = lt, ot.call(this, x, M), this.lineWidth = tt;
  }, ot = function(x, M) {
    if ((x !== "stroke" || M || !j.call(this)) && (x === "stroke" || M || !p.call(this))) {
      for (var T, W, $ = [], tt = this.path, lt = 0; lt < tt.length; lt++) {
        var ut = tt[lt];
        switch (ut.type) {
          case "begin":
            $.push({ begin: !0 });
            break;
          case "close":
            $.push({ close: !0 });
            break;
          case "mt":
            $.push({ start: ut, deltas: [], abs: [] });
            break;
          case "lt":
            var gt = $.length;
            if (tt[lt - 1] && !isNaN(tt[lt - 1].x) && (T = [ut.x - tt[lt - 1].x, ut.y - tt[lt - 1].y], gt > 0)) {
              for (; gt >= 0; gt--) if ($[gt - 1].close !== !0 && $[gt - 1].begin !== !0) {
                $[gt - 1].deltas.push(T), $[gt - 1].abs.push(ut);
                break;
              }
            }
            break;
          case "bct":
            T = [ut.x1 - tt[lt - 1].x, ut.y1 - tt[lt - 1].y, ut.x2 - tt[lt - 1].x, ut.y2 - tt[lt - 1].y, ut.x - tt[lt - 1].x, ut.y - tt[lt - 1].y], $[$.length - 1].deltas.push(T);
            break;
          case "qct":
            var At = tt[lt - 1].x + 2 / 3 * (ut.x1 - tt[lt - 1].x), kt = tt[lt - 1].y + 2 / 3 * (ut.y1 - tt[lt - 1].y), St = ut.x + 2 / 3 * (ut.x1 - ut.x), Dt = ut.y + 2 / 3 * (ut.y1 - ut.y), I = ut.x, Lt = ut.y;
            T = [At - tt[lt - 1].x, kt - tt[lt - 1].y, St - tt[lt - 1].x, Dt - tt[lt - 1].y, I - tt[lt - 1].x, Lt - tt[lt - 1].y], $[$.length - 1].deltas.push(T);
            break;
          case "arc":
            $.push({ deltas: [], abs: [], arc: !0 }), Array.isArray($[$.length - 1].abs) && $[$.length - 1].abs.push(ut);
        }
      }
      W = M ? null : x === "stroke" ? "stroke" : "fill";
      for (var ae = !1, Ht = 0; Ht < $.length; Ht++) if ($[Ht].arc) for (var yt = $[Ht].abs, Wt = 0; Wt < yt.length; Wt++) {
        var It = yt[Wt];
        It.type === "arc" ? X.call(this, It.x, It.y, It.radius, It.startAngle, It.endAngle, It.counterclockwise, void 0, M, !ae) : B.call(this, It.x, It.y), ae = !0;
      }
      else if ($[Ht].close === !0) this.pdf.internal.out("h"), ae = !1;
      else if ($[Ht].begin !== !0) {
        var zt = $[Ht].start.x, qt = $[Ht].start.y;
        q.call(this, $[Ht].deltas, zt, qt), ae = !0;
      }
      W && D.call(this, W), M && H.call(this);
    }
  }, vt = function(x) {
    var M = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, T = M * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return x - T;
      case "top":
        return x + M - T;
      case "hanging":
        return x + M - 2 * T;
      case "middle":
        return x + M / 2 - T;
      default:
        return x;
    }
  }, ht = function(x) {
    return x + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  N.prototype.createLinearGradient = function() {
    var x = function() {
    };
    return x.colorStops = [], x.addColorStop = function(M, T) {
      this.colorStops.push([M, T]);
    }, x.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, x.isCanvasGradient = !0, x;
  }, N.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, N.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var X = function(x, M, T, W, $, tt, lt, ut, gt) {
    for (var At = it.call(this, T, W, $, tt), kt = 0; kt < At.length; kt++) {
      var St = At[kt];
      kt === 0 && (gt ? w.call(this, St.x1 + x, St.y1 + M) : B.call(this, St.x1 + x, St.y1 + M)), et.call(this, x, M, St.x2, St.y2, St.x3, St.y3, St.x4, St.y4);
    }
    ut ? H.call(this) : D.call(this, lt);
  }, D = function(x) {
    switch (x) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, H = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, w = function(x, M) {
    this.pdf.internal.out(t(x) + " " + i(M) + " m");
  }, A = function(x) {
    var M;
    switch (x.align) {
      case "right":
      case "end":
        M = "right";
        break;
      case "center":
        M = "center";
        break;
      default:
        M = "left";
    }
    var T, W, $, tt = this.pdf.getTextDimensions(x.text), lt = vt.call(this, x.y), ut = ht.call(this, lt) - tt.h, gt = this.ctx.transform.applyToPoint(new f(x.x, lt));
    if (this.autoPaging) {
      var At = this.ctx.transform.decompose(), kt = new c();
      kt = (kt = (kt = kt.multiply(At.translate)).multiply(At.skew)).multiply(At.scale);
      for (var St = this.ctx.transform.applyToRectangle(new l(x.x, lt, tt.w, tt.h)), Dt = kt.applyToRectangle(new l(x.x, ut, tt.w, tt.h)), I = R.call(this, Dt), Lt = [], ae = 0; ae < I.length; ae += 1) Lt.indexOf(I[ae]) === -1 && Lt.push(I[ae]);
      Y(Lt);
      for (var Ht = Lt[0], yt = Lt[Lt.length - 1], Wt = Ht; Wt < yt + 1; Wt++) {
        this.pdf.setPage(Wt);
        var It = Wt === 1 ? this.posY + this.margin[0] : this.margin[0], zt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], qt = this.pdf.internal.pageSize.height - this.margin[2], ve = qt - this.margin[0], ue = this.pdf.internal.pageSize.width - this.margin[1], Zt = ue - this.margin[3], he = Wt === 1 ? 0 : zt + (Wt - 2) * ve;
        if (this.ctx.clip_path.length !== 0) {
          var ce = this.path;
          T = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = V(T, this.posX + this.margin[3], -1 * he + It), ot.call(this, "fill", !0), this.path = ce;
        }
        var Mt = V([JSON.parse(JSON.stringify(Dt))], this.posX + this.margin[3], -he + It + this.ctx.prevPageLastElemOffset)[0];
        x.scale >= 0.01 && (W = this.pdf.internal.getFontSize(), this.pdf.setFontSize(W * x.scale), $ = this.lineWidth, this.lineWidth = $ * x.scale);
        var ee = this.autoPaging !== "text";
        if (ee || Mt.y + Mt.h <= qt) {
          if (ee || Mt.y >= It && Mt.x <= ue) {
            var Tt = ee ? x.text : this.pdf.splitTextToSize(x.text, x.maxWidth || ue - Mt.x)[0], qe = V([JSON.parse(JSON.stringify(St))], this.posX + this.margin[3], -he + It + this.ctx.prevPageLastElemOffset)[0], pe = ee && (Wt > Ht || Wt < yt) && E.call(this);
            pe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Zt, ve, null).clip().discardPath()), this.pdf.text(Tt, qe.x, qe.y, { angle: x.angle, align: M, renderingMode: x.renderingMode }), pe && this.pdf.restoreGraphicsState();
          }
        } else Mt.y < qt && (this.ctx.prevPageLastElemOffset += qt - Mt.y);
        x.scale >= 0.01 && (this.pdf.setFontSize(W), this.lineWidth = $);
      }
    } else x.scale >= 0.01 && (W = this.pdf.internal.getFontSize(), this.pdf.setFontSize(W * x.scale), $ = this.lineWidth, this.lineWidth = $ * x.scale), this.pdf.text(x.text, gt.x + this.posX, gt.y + this.posY, { angle: x.angle, align: M, renderingMode: x.renderingMode, maxWidth: x.maxWidth }), x.scale >= 0.01 && (this.pdf.setFontSize(W), this.lineWidth = $);
  }, B = function(x, M, T, W) {
    T = T || 0, W = W || 0, this.pdf.internal.out(t(x + T) + " " + i(M + W) + " l");
  }, q = function(x, M, T) {
    return this.pdf.lines(x, M, T, null, null);
  }, et = function(x, M, T, W, $, tt, lt, ut) {
    this.pdf.internal.out([e(a(T + x)), e(s(W + M)), e(a($ + x)), e(s(tt + M)), e(a(lt + x)), e(s(ut + M)), "c"].join(" "));
  }, it = function(x, M, T, W) {
    for (var $ = 2 * Math.PI, tt = Math.PI / 2; M > T; ) M -= $;
    var lt = Math.abs(T - M);
    lt < $ && W && (lt = $ - lt);
    for (var ut = [], gt = W ? -1 : 1, At = M; lt > 1e-5; ) {
      var kt = At + gt * Math.min(lt, tt);
      ut.push(at.call(this, x, At, kt)), lt -= Math.abs(kt - At), At = kt;
    }
    return ut;
  }, at = function(x, M, T) {
    var W = (T - M) / 2, $ = x * Math.cos(W), tt = x * Math.sin(W), lt = $, ut = -tt, gt = lt * lt + ut * ut, At = gt + lt * $ + ut * tt, kt = 4 / 3 * (Math.sqrt(2 * gt * At) - At) / (lt * tt - ut * $), St = lt - kt * ut, Dt = ut + kt * lt, I = St, Lt = -Dt, ae = W + M, Ht = Math.cos(ae), yt = Math.sin(ae);
    return { x1: x * Math.cos(M), y1: x * Math.sin(M), x2: St * Ht - Dt * yt, y2: St * yt + Dt * Ht, x3: I * Ht - Lt * yt, y3: I * yt + Lt * Ht, x4: x * Math.cos(T), y4: x * Math.sin(T) };
  }, K = function(x) {
    return 180 * x / Math.PI;
  }, st = function(x, M, T, W, $, tt) {
    var lt = x + 0.5 * (T - x), ut = M + 0.5 * (W - M), gt = $ + 0.5 * (T - $), At = tt + 0.5 * (W - tt), kt = Math.min(x, $, lt, gt), St = Math.max(x, $, lt, gt), Dt = Math.min(M, tt, ut, At), I = Math.max(M, tt, ut, At);
    return new l(kt, Dt, St - kt, I - Dt);
  }, xt = function(x, M, T, W, $, tt, lt, ut) {
    var gt, At, kt, St, Dt, I, Lt, ae, Ht, yt, Wt, It, zt, qt, ve = T - x, ue = W - M, Zt = $ - T, he = tt - W, ce = lt - $, Mt = ut - tt;
    for (At = 0; At < 41; At++) Ht = (Lt = (kt = x + (gt = At / 40) * ve) + gt * ((Dt = T + gt * Zt) - kt)) + gt * (Dt + gt * ($ + gt * ce - Dt) - Lt), yt = (ae = (St = M + gt * ue) + gt * ((I = W + gt * he) - St)) + gt * (I + gt * (tt + gt * Mt - I) - ae), At == 0 ? (Wt = Ht, It = yt, zt = Ht, qt = yt) : (Wt = Math.min(Wt, Ht), It = Math.min(It, yt), zt = Math.max(zt, Ht), qt = Math.max(qt, yt));
    return new l(Math.round(Wt), Math.round(It), Math.round(zt - Wt), Math.round(qt - It));
  }, ft = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var x, M, T = (x = this.ctx.lineDash, M = this.ctx.lineDashOffset, JSON.stringify({ lineDash: x, lineDashOffset: M }));
      this.prevLineDash !== T && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = T);
    }
  };
})(Rt.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = function(f) {
    var l, c, d, m, N, P, p, j, E, R;
    for (c = [], d = 0, m = (f += l = "\0\0\0\0".slice(f.length % 4 || 4)).length; m > d; d += 4) (N = (f.charCodeAt(d) << 24) + (f.charCodeAt(d + 1) << 16) + (f.charCodeAt(d + 2) << 8) + f.charCodeAt(d + 3)) !== 0 ? (P = (N = ((N = ((N = ((N = (N - (R = N % 85)) / 85) - (E = N % 85)) / 85) - (j = N % 85)) / 85) - (p = N % 85)) / 85) % 85, c.push(P + 33, p + 33, j + 33, E + 33, R + 33)) : c.push(122);
    return (function(k, V) {
      for (var Y = V; Y > 0; Y--) k.pop();
    })(c, l.length), String.fromCharCode.apply(String, c) + "~>";
  }, t = function(f) {
    var l, c, d, m, N, P = String, p = "length", j = 255, E = "charCodeAt", R = "slice", k = "replace";
    for (f[R](-2), f = f[R](0, -2)[k](/\s/g, "")[k]("z", "!!!!!"), d = [], m = 0, N = (f += l = "uuuuu"[R](f[p] % 5 || 5))[p]; N > m; m += 5) c = 52200625 * (f[E](m) - 33) + 614125 * (f[E](m + 1) - 33) + 7225 * (f[E](m + 2) - 33) + 85 * (f[E](m + 3) - 33) + (f[E](m + 4) - 33), d.push(j & c >> 24, j & c >> 16, j & c >> 8, j & c);
    return (function(V, Y) {
      for (var U = Y; U > 0; U--) V.pop();
    })(d, l[p]), P.fromCharCode.apply(P, d);
  }, i = function(f) {
    return f.split("").map(function(l) {
      return ("0" + l.charCodeAt().toString(16)).slice(-2);
    }).join("") + ">";
  }, a = function(f) {
    var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((f = f.replace(/\s/g, "")).indexOf(">") !== -1 && (f = f.substr(0, f.indexOf(">"))), f.length % 2 && (f += "0"), l.test(f) === !1) return "";
    for (var c = "", d = 0; d < f.length; d += 2) c += String.fromCharCode("0x" + (f[d] + f[d + 1]));
    return c;
  }, s = function(f) {
    for (var l = new Uint8Array(f.length), c = f.length; c--; ) l[c] = f.charCodeAt(c);
    return (l = Xo(l)).reduce(function(d, m) {
      return d + String.fromCharCode(m);
    }, "");
  };
  r.processDataByFilters = function(f, l) {
    var c = 0, d = f || "", m = [];
    for (typeof (l = l || []) == "string" && (l = [l]), c = 0; c < l.length; c += 1) switch (l[c]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        d = t(d), m.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        d = e(d), m.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        d = a(d), m.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        d = i(d), m.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        d = s(d), m.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + l[c] + '" is not implemented');
    }
    return { data: d, reverseChain: m.reverse().join(" ") };
  };
})(Rt.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  r.loadFile = function(e, t, i) {
    return (function(a, s, f) {
      s = s !== !1, f = typeof f == "function" ? f : function() {
      };
      var l = void 0;
      try {
        l = (function(c, d, m) {
          var N = new XMLHttpRequest(), P = 0, p = function(j) {
            var E = j.length, R = [], k = String.fromCharCode;
            for (P = 0; P < E; P += 1) R.push(k(255 & j.charCodeAt(P)));
            return R.join("");
          };
          if (N.open("GET", c, !d), N.overrideMimeType("text/plain; charset=x-user-defined"), d === !1 && (N.onload = function() {
            N.status === 200 ? m(p(this.responseText)) : m(void 0);
          }), N.send(null), d && N.status === 200) return p(N.responseText);
        })(a, s, f);
      } catch {
      }
      return l;
    })(e, t, i);
  }, r.allowFsRead = void 0, r.loadImageFile = r.loadFile;
})(Rt.API), (function(r) {
  function e() {
    return (Jt.html2canvas ? Promise.resolve(Jt.html2canvas) : import("./html2canvas.esm-dgT_1dIT.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load html2canvas: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  function t() {
    return (Jt.DOMPurify ? Promise.resolve(Jt.DOMPurify) : import("./purify.es-BpFm6ZGf.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load dompurify: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  var i = function(l) {
    var c = Ae(l);
    return c === "undefined" ? "undefined" : c === "string" || l instanceof String ? "string" : c === "number" || l instanceof Number ? "number" : c === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : c === "object" ? "object" : "unknown";
  }, a = function(l, c) {
    var d = document.createElement(l);
    for (var m in c.className && (d.className = c.className), c.innerHTML && c.dompurify && (d.innerHTML = c.dompurify.sanitize(c.innerHTML)), c.style) d.style[m] = c.style[m];
    return d;
  }, s = function l(c, d) {
    for (var m = c.nodeType === 3 ? document.createTextNode(c.nodeValue) : c.cloneNode(!1), N = c.firstChild; N; N = N.nextSibling) d !== !0 && N.nodeType === 1 && N.nodeName === "SCRIPT" || m.appendChild(l(N, d));
    return c.nodeType === 1 && (c.nodeName === "CANVAS" ? (m.width = c.width, m.height = c.height, m.getContext("2d").drawImage(c, 0, 0)) : c.nodeName !== "TEXTAREA" && c.nodeName !== "SELECT" || (m.value = c.value), m.addEventListener("load", function() {
      m.scrollTop = c.scrollTop, m.scrollLeft = c.scrollLeft;
    }, !0)), m;
  }, f = function l(c) {
    var d = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), m = l.convert(Promise.resolve(), d);
    return (m = m.setProgress(1, l, 1, [l])).set(c);
  };
  (f.prototype = Object.create(Promise.prototype)).constructor = f, f.convert = function(l, c) {
    return l.__proto__ = c || f.prototype, l;
  }, f.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, f.prototype.from = function(l, c) {
    return this.then(function() {
      switch (c = c || (function(d) {
        switch (i(d)) {
          case "string":
            return "string";
          case "element":
            return d.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      })(l), c) {
        case "string":
          return this.then(t).then(function(d) {
            return this.set({ src: a("div", { innerHTML: l, dompurify: d }) });
          });
        case "element":
          return this.set({ src: l });
        case "canvas":
          return this.set({ canvas: l });
        case "img":
          return this.set({ img: l });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, f.prototype.to = function(l) {
    switch (l) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, f.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var l = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, c = s(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      c.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = a("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = a("div", { className: "html2pdf__container", style: l }), this.prop.container.appendChild(c), this.prop.container.firstChild.appendChild(a("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, f.prototype.toCanvas = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(c) {
      var d = Object.assign({}, this.opt.html2canvas);
      return delete d.onrendered, c(this.prop.container, d);
    }).then(function(c) {
      (this.opt.html2canvas.onrendered || function() {
      })(c), this.prop.canvas = c, document.body.removeChild(this.prop.overlay);
    });
  }, f.prototype.toContext2d = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(c) {
      var d = this.opt.jsPDF, m = this.opt.fontFaces, N = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, P = Object.assign({ async: !0, allowTaint: !0, scale: N, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete P.onrendered, d.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, d.context2d.posX = this.opt.x, d.context2d.posY = this.opt.y, d.context2d.margin = this.opt.margin, d.context2d.fontFaces = m, m) for (var p = 0; p < m.length; ++p) {
        var j = m[p], E = j.src.find(function(R) {
          return R.format === "truetype";
        });
        E && d.addFont(E.url, j.ref.name, j.ref.style);
      }
      return P.windowHeight = P.windowHeight || 0, P.windowHeight = P.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : P.windowHeight, d.context2d.save(!0), c(this.prop.container, P);
    }).then(function(c) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(c), this.prop.canvas = c, document.body.removeChild(this.prop.overlay);
    });
  }, f.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = l;
    });
  }, f.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, f.prototype.output = function(l, c, d) {
    return (d = d || "pdf").toLowerCase() === "img" || d.toLowerCase() === "image" ? this.outputImg(l, c) : this.outputPdf(l, c);
  }, f.prototype.outputPdf = function(l, c) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(l, c);
    });
  }, f.prototype.outputImg = function(l) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (l) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + l + '" is not supported.';
      }
    });
  }, f.prototype.save = function(l) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(l ? { filename: l } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, f.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, f.prototype.set = function(l) {
    if (i(l) !== "object") return this;
    var c = Object.keys(l || {}).map(function(d) {
      if (d in f.template.prop) return function() {
        this.prop[d] = l[d];
      };
      switch (d) {
        case "margin":
          return this.setMargin.bind(this, l.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = l.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, l.pageSize);
        default:
          return function() {
            this.opt[d] = l[d];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(c);
    });
  }, f.prototype.get = function(l, c) {
    return this.then(function() {
      var d = l in f.template.prop ? this.prop[l] : this.opt[l];
      return c ? c(d) : d;
    });
  }, f.prototype.setMargin = function(l) {
    return this.then(function() {
      switch (i(l)) {
        case "number":
          l = [l, l, l, l];
        case "array":
          if (l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = l;
    }).then(this.setPageSize);
  }, f.prototype.setPageSize = function(l) {
    function c(d, m) {
      return Math.floor(d * m / 72 * 96);
    }
    return this.then(function() {
      (l = l || Rt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = { width: l.width - this.opt.margin[1] - this.opt.margin[3], height: l.height - this.opt.margin[0] - this.opt.margin[2] }, l.inner.px = { width: c(l.inner.width, l.k), height: c(l.inner.height, l.k) }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
    });
  }, f.prototype.setProgress = function(l, c, d, m) {
    return l != null && (this.progress.val = l), c != null && (this.progress.state = c), d != null && (this.progress.n = d), m != null && (this.progress.stack = m), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, f.prototype.updateProgress = function(l, c, d, m) {
    return this.setProgress(l ? this.progress.val + l : null, c || null, d ? this.progress.n + d : null, m ? this.progress.stack.concat(m) : null);
  }, f.prototype.then = function(l, c) {
    var d = this;
    return this.thenCore(l, c, function(m, N) {
      return d.updateProgress(null, null, 1, [m]), Promise.prototype.then.call(this, function(P) {
        return d.updateProgress(null, m), P;
      }).then(m, N).then(function(P) {
        return d.updateProgress(1), P;
      });
    });
  }, f.prototype.thenCore = function(l, c, d) {
    d = d || Promise.prototype.then;
    var m = this;
    l && (l = l.bind(m)), c && (c = c.bind(m));
    var N = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? m : f.convert(Object.assign({}, m), Promise.prototype), P = d.call(N, l, c);
    return f.convert(P, m.__proto__);
  }, f.prototype.thenExternal = function(l, c) {
    return Promise.prototype.then.call(this, l, c);
  }, f.prototype.thenList = function(l) {
    var c = this;
    return l.forEach(function(d) {
      c = c.thenCore(d);
    }), c;
  }, f.prototype.catch = function(l) {
    l && (l = l.bind(this));
    var c = Promise.prototype.catch.call(this, l);
    return f.convert(c, this);
  }, f.prototype.catchExternal = function(l) {
    return Promise.prototype.catch.call(this, l);
  }, f.prototype.error = function(l) {
    return this.then(function() {
      throw new Error(l);
    });
  }, f.prototype.using = f.prototype.set, f.prototype.saveAs = f.prototype.save, f.prototype.export = f.prototype.output, f.prototype.run = f.prototype.then, Rt.getPageSize = function(l, c, d) {
    if (Ae(l) === "object") {
      var m = l;
      l = m.orientation, c = m.unit || c, d = m.format || d;
    }
    c = c || "mm", d = d || "a4", l = ("" + (l || "P")).toLowerCase();
    var N, P = ("" + d).toLowerCase(), p = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (c) {
      case "pt":
        N = 1;
        break;
      case "mm":
        N = 72 / 25.4;
        break;
      case "cm":
        N = 72 / 2.54;
        break;
      case "in":
        N = 72;
        break;
      case "px":
        N = 0.75;
        break;
      case "pc":
      case "em":
        N = 12;
        break;
      case "ex":
        N = 6;
        break;
      default:
        throw "Invalid unit: " + c;
    }
    var j, E = 0, R = 0;
    if (p.hasOwnProperty(P)) E = p[P][1] / N, R = p[P][0] / N;
    else try {
      E = d[1], R = d[0];
    } catch {
      throw new Error("Invalid format: " + d);
    }
    if (l === "p" || l === "portrait") l = "p", R > E && (j = R, R = E, E = j);
    else {
      if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
      l = "l", E > R && (j = R, R = E, E = j);
    }
    return { width: R, height: E, unit: c, k: N, orientation: l };
  }, r.html = function(l, c) {
    (c = c || {}).callback = c.callback || function() {
    }, c.html2canvas = c.html2canvas || {}, c.html2canvas.canvas = c.html2canvas.canvas || this.canvas, c.jsPDF = c.jsPDF || this, c.fontFaces = c.fontFaces ? c.fontFaces.map(Ho) : null;
    var d = new f(c);
    return c.worker ? d : d.from(l).doCallback();
  };
})(Rt.API), Rt.API.addJS = function(r) {
  return Yu = r, this.internal.events.subscribe("postPutResources", function() {
    Fs = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Fs + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Vu = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + Yu + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    Fs !== void 0 && Vu !== void 0 && this.internal.out("/Names <</JavaScript " + Fs + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e;
  r.events.push(["postPutResources", function() {
    var t = this, i = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var a = t.outline.render().split(/\r\n/), s = 0; s < a.length; s++) {
      var f = a[s], l = i.exec(f);
      if (l != null) {
        var c = l[1];
        t.internal.newObjectDeferredBegin(c, !1);
      }
      t.internal.write(f);
    }
    if (this.outline.createNamedDestinations) {
      var d = this.internal.pages.length, m = [];
      for (s = 0; s < d; s++) {
        var N = t.internal.newObject();
        m.push(N);
        var P = t.internal.getPageInfo(s + 1);
        t.internal.write("<< /D[" + P.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = t.internal.newObject();
      for (t.internal.write("<< /Names [ "), s = 0; s < m.length; s++) t.internal.write("(page_" + (s + 1) + ")" + m[s] + " 0 R");
      t.internal.write(" ] >>", "endobj"), e = t.internal.newObject(), t.internal.write("<< /Dests " + p + " 0 R"), t.internal.write(">>", "endobj");
    }
  }]), r.events.push(["putCatalog", function() {
    var t = this;
    t.outline.root.children.length > 0 && (t.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && t.internal.write("/Names " + e + " 0 R"));
  }]), r.events.push(["initialized", function() {
    var t = this;
    t.outline = { createNamedDestinations: !1, root: { children: [] } }, t.outline.add = function(i, a, s) {
      var f = { title: a, options: s, children: [] };
      return i == null && (i = this.root), i.children.push(f), f;
    }, t.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, t.outline.genIds_r = function(i) {
      i.id = t.internal.newObjectDeferred();
      for (var a = 0; a < i.children.length; a++) this.genIds_r(i.children[a]);
    }, t.outline.renderRoot = function(i) {
      this.objStart(i), this.line("/Type /Outlines"), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, i)), this.objEnd();
    }, t.outline.renderItems = function(i) {
      for (var a = this.ctx.pdf.internal.getVerticalCoordinateString, s = 0; s < i.children.length; s++) {
        var f = i.children[s];
        this.objStart(f), this.line("/Title " + this.makeString(f.title)), this.line("/Parent " + this.makeRef(i)), s > 0 && this.line("/Prev " + this.makeRef(i.children[s - 1])), s < i.children.length - 1 && this.line("/Next " + this.makeRef(i.children[s + 1])), f.children.length > 0 && (this.line("/First " + this.makeRef(f.children[0])), this.line("/Last " + this.makeRef(f.children[f.children.length - 1])));
        var l = this.count = this.count_r({ count: 0 }, f);
        if (l > 0 && this.line("/Count " + l), f.options && f.options.pageNumber) {
          var c = t.internal.getPageInfo(f.options.pageNumber);
          this.line("/Dest [" + c.objId + " 0 R /XYZ 0 " + a(0) + " 0]");
        }
        this.objEnd();
      }
      for (var d = 0; d < i.children.length; d++) this.renderItems(i.children[d]);
    }, t.outline.line = function(i) {
      this.ctx.val += i + `\r
`;
    }, t.outline.makeRef = function(i) {
      return i.id + " 0 R";
    }, t.outline.makeString = function(i) {
      return "(" + t.internal.pdfEscape(i) + ")";
    }, t.outline.objStart = function(i) {
      this.ctx.val += `\r
` + i.id + ` 0 obj\r
<<\r
`;
    }, t.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, t.outline.count_r = function(i, a) {
      for (var s = 0; s < a.children.length; s++) i.count++, this.count_r(i, a.children[s]);
      return i.count;
    };
  }]);
})(Rt.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = [192, 193, 194, 195, 196, 197, 198, 199];
  r.processJPEG = function(t, i, a, s, f, l) {
    var c, d = this.decode.DCT_DECODE, m = null;
    if (typeof t == "string" || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
      switch (t = f || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, c = (function(N) {
        for (var P, p = 256 * N.charCodeAt(4) + N.charCodeAt(5), j = N.length, E = { width: 0, height: 0, numcomponents: 1 }, R = 4; R < j; R += 2) {
          if (R += p, e.indexOf(N.charCodeAt(R + 1)) !== -1) {
            P = 256 * N.charCodeAt(R + 5) + N.charCodeAt(R + 6), E = { width: 256 * N.charCodeAt(R + 7) + N.charCodeAt(R + 8), height: P, numcomponents: N.charCodeAt(R + 9) };
            break;
          }
          p = 256 * N.charCodeAt(R + 2) + N.charCodeAt(R + 3);
        }
        return E;
      })(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t), c.numcomponents) {
        case 1:
          l = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          l = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          l = this.color_spaces.DEVICE_RGB;
      }
      m = { data: t, width: c.width, height: c.height, colorSpace: l, bitsPerComponent: 8, filter: d, index: i, alias: a };
    }
    return m;
  };
})(Rt.API), Rt.API.processPNG = function(r, e, t, i) {
  if (this.__addimage__.isArrayBuffer(r) && (r = new Uint8Array(r)), this.__addimage__.isArrayBufferView(r)) {
    var a, s = Q1(r, { checkCrc: !0 }), f = s.width, l = s.height, c = s.channels, d = s.palette, m = s.depth;
    a = d && c === 1 ? (function(X) {
      for (var D = X.width, H = X.height, w = X.data, A = X.palette, B = X.depth, q = !1, et = [], it = [], at = void 0, K = !1, st = 0, xt = 0; xt < A.length; xt++) {
        var ft = Kl(A[xt], 4), x = ft[0], M = ft[1], T = ft[2], W = ft[3];
        et.push(x, M, T), W != null && (W === 0 ? (st++, it.length < 1 && it.push(xt)) : W < 255 && (K = !0));
      }
      if (K || st > 1) {
        q = !0, it = void 0;
        var $ = D * H;
        at = new Uint8Array($);
        for (var tt = new DataView(w.buffer), lt = 0; lt < $; lt++) {
          var ut = Go(tt, lt, B), gt = Kl(A[ut], 4)[3];
          at[lt] = gt;
        }
      } else st === 0 && (it = void 0);
      return { colorSpace: "Indexed", colorsPerPixel: 1, sMaskBitsPerComponent: q ? 8 : void 0, colorBytes: w, alphaBytes: at, needSMask: q, palette: et, mask: it };
    })(s) : c === 2 || c === 4 ? (function(X) {
      for (var D = X.data, H = X.width, w = X.height, A = X.channels, B = X.depth, q = A === 2 ? "DeviceGray" : "DeviceRGB", et = A - 1, it = H * w, at = et, K = it * at, st = 1 * it, xt = Math.ceil(K * B / 8), ft = Math.ceil(st * B / 8), x = new Uint8Array(xt), M = new Uint8Array(ft), T = new DataView(D.buffer), W = new DataView(x.buffer), $ = new DataView(M.buffer), tt = !1, lt = 0; lt < it; lt++) {
        for (var ut = lt * A, gt = 0; gt < at; gt++) rc(W, Go(T, ut + gt, B), lt * at + gt, B);
        var At = Go(T, ut + at, B);
        At < (1 << B) - 1 && (tt = !0), rc($, At, 1 * lt, B);
      }
      return { colorSpace: q, colorsPerPixel: et, sMaskBitsPerComponent: tt ? B : void 0, colorBytes: x, alphaBytes: M, needSMask: tt };
    })(s) : (function(X) {
      var D = X.data, H = X.channels === 1 ? "DeviceGray" : "DeviceRGB";
      return { colorSpace: H, colorsPerPixel: H === "DeviceGray" ? 1 : 3, colorBytes: D instanceof Uint16Array ? (function(w) {
        for (var A = w.length, B = new Uint8Array(2 * A), q = new DataView(B.buffer, B.byteOffset, B.byteLength), et = 0; et < A; et++) q.setUint16(2 * et, w[et], !1);
        return B;
      })(D) : D, needSMask: !1 };
    })(s);
    var N, P, p, j = a, E = j.colorSpace, R = j.colorsPerPixel, k = j.sMaskBitsPerComponent, V = j.colorBytes, Y = j.alphaBytes, U = j.needSMask, ot = j.palette, vt = j.mask, ht = null;
    return i !== Rt.API.image_compression.NONE && typeof Xo == "function" ? (ht = (function(X) {
      var D;
      switch (X) {
        case Rt.API.image_compression.FAST:
          D = 11;
          break;
        case Rt.API.image_compression.MEDIUM:
          D = 13;
          break;
        case Rt.API.image_compression.SLOW:
          D = 14;
          break;
        default:
          D = 12;
      }
      return D;
    })(i), N = this.decode.FLATE_DECODE, P = "/Predictor ".concat(ht, " /Colors ").concat(R, " /BitsPerComponent ").concat(m, " /Columns ").concat(f), r = Ku(V, Math.ceil(f * R * m / 8), R, m, i), U && (p = Ku(Y, Math.ceil(f * k / 8), 1, k, i))) : (N = void 0, P = void 0, r = V, U && (p = Y)), (this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) && (r = this.__addimage__.arrayBufferToBinaryString(r)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), { alias: t, data: r, index: e, filter: N, decodeParameters: P, transparency: vt, palette: ot, sMask: p, predictor: ht, width: f, height: l, bitsPerComponent: m, sMaskBitsPerComponent: k, colorSpace: E };
  }
}, (function(r) {
  r.processGIF89A = function(e, t, i, a) {
    var s = new y2(e), f = s.width, l = s.height, c = [];
    s.decodeAndBlitFrameRGBA(0, c);
    var d = { data: c, width: f, height: l }, m = new Vo(100).encode(d, 100);
    return r.processJPEG.call(this, m, t, i, a);
  }, r.processGIF87A = r.processGIF89A;
})(Rt.API), en.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var r = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(r);
    for (var e = 0; e < r; e++) {
      var t = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0);
      this.palette[e] = { red: a, green: i, blue: t, quad: s };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, en.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var r = "bit" + this.bitPP, e = this.width * this.height * 4;
    this.data = new Uint8Array(e), this[r]();
  } catch (t) {
    Se.log("bit decode error:" + t);
  }
}, en.prototype.bit1 = function() {
  var r, e = Math.ceil(this.width / 8), t = e % 4;
  for (r = this.height - 1; r >= 0; r--) {
    for (var i = this.bottom_up ? r : this.height - 1 - r, a = 0; a < e; a++) for (var s = this.datav.getUint8(this.pos++, !0), f = i * this.width * 4 + 8 * a * 4, l = 0; l < 8 && 8 * a + l < this.width; l++) {
      var c = this.palette[s >> 7 - l & 1];
      this.data[f + 4 * l] = c.blue, this.data[f + 4 * l + 1] = c.green, this.data[f + 4 * l + 2] = c.red, this.data[f + 4 * l + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, en.prototype.bit4 = function() {
  for (var r = Math.ceil(this.width / 2), e = r % 4, t = this.height - 1; t >= 0; t--) {
    for (var i = this.bottom_up ? t : this.height - 1 - t, a = 0; a < r; a++) {
      var s = this.datav.getUint8(this.pos++, !0), f = i * this.width * 4 + 2 * a * 4, l = s >> 4, c = 15 & s, d = this.palette[l];
      if (this.data[f] = d.blue, this.data[f + 1] = d.green, this.data[f + 2] = d.red, this.data[f + 3] = 255, 2 * a + 1 >= this.width) break;
      d = this.palette[c], this.data[f + 4] = d.blue, this.data[f + 4 + 1] = d.green, this.data[f + 4 + 2] = d.red, this.data[f + 4 + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, en.prototype.bit8 = function() {
  for (var r = this.width % 4, e = this.height - 1; e >= 0; e--) {
    for (var t = this.bottom_up ? e : this.height - 1 - e, i = 0; i < this.width; i++) {
      var a = this.datav.getUint8(this.pos++, !0), s = t * this.width * 4 + 4 * i;
      if (a < this.palette.length) {
        var f = this.palette[a];
        this.data[s] = f.red, this.data[s + 1] = f.green, this.data[s + 2] = f.blue, this.data[s + 3] = 255;
      } else this.data[s] = 255, this.data[s + 1] = 255, this.data[s + 2] = 255, this.data[s + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, en.prototype.bit15 = function() {
  for (var r = this.width % 3, e = parseInt("11111", 2), t = this.height - 1; t >= 0; t--) {
    for (var i = this.bottom_up ? t : this.height - 1 - t, a = 0; a < this.width; a++) {
      var s = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var f = (s & e) / e * 255 | 0, l = (s >> 5 & e) / e * 255 | 0, c = (s >> 10 & e) / e * 255 | 0, d = s >> 15 ? 255 : 0, m = i * this.width * 4 + 4 * a;
      this.data[m] = c, this.data[m + 1] = l, this.data[m + 2] = f, this.data[m + 3] = d;
    }
    this.pos += r;
  }
}, en.prototype.bit16 = function() {
  for (var r = this.width % 3, e = parseInt("11111", 2), t = parseInt("111111", 2), i = this.height - 1; i >= 0; i--) {
    for (var a = this.bottom_up ? i : this.height - 1 - i, s = 0; s < this.width; s++) {
      var f = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var l = (f & e) / e * 255 | 0, c = (f >> 5 & t) / t * 255 | 0, d = (f >> 11) / e * 255 | 0, m = a * this.width * 4 + 4 * s;
      this.data[m] = d, this.data[m + 1] = c, this.data[m + 2] = l, this.data[m + 3] = 255;
    }
    this.pos += r;
  }
}, en.prototype.bit24 = function() {
  for (var r = this.height - 1; r >= 0; r--) {
    for (var e = this.bottom_up ? r : this.height - 1 - r, t = 0; t < this.width; t++) {
      var i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), f = e * this.width * 4 + 4 * t;
      this.data[f] = s, this.data[f + 1] = a, this.data[f + 2] = i, this.data[f + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, en.prototype.bit32 = function() {
  for (var r = this.height - 1; r >= 0; r--) for (var e = this.bottom_up ? r : this.height - 1 - r, t = 0; t < this.width; t++) {
    var i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), f = this.datav.getUint8(this.pos++, !0), l = e * this.width * 4 + 4 * t;
    this.data[l] = s, this.data[l + 1] = a, this.data[l + 2] = i, this.data[l + 3] = f;
  }
}, en.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  r.processBMP = function(e, t, i, a) {
    var s = new en(e, !1), f = s.width, l = s.height, c = { data: s.getData(), width: f, height: l }, d = new Vo(100).encode(c, 100);
    return r.processJPEG.call(this, d, t, i, a);
  };
})(Rt.API), ic.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  r.processWEBP = function(e, t, i, a) {
    var s = new ic(e), f = s.width, l = s.height, c = { data: s.getData(), width: f, height: l }, d = new Vo(100).encode(c, 100);
    return r.processJPEG.call(this, d, t, i, a);
  };
})(Rt.API), Rt.API.processRGBA = function(r, e, t) {
  for (var i = r.data, a = i.length, s = new Uint8Array(a / 4 * 3), f = new Uint8Array(a / 4), l = 0, c = 0, d = 0; d < a; d += 4) {
    var m = i[d], N = i[d + 1], P = i[d + 2], p = i[d + 3];
    s[l++] = m, s[l++] = N, s[l++] = P, f[c++] = p;
  }
  var j = this.__addimage__.arrayBufferToBinaryString(s);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(f), data: j, index: e, alias: t, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: r.width, height: r.height };
}, Rt.API.setLanguage = function(r) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[r] !== void 0 && (this.internal.languageSettings.languageCode = r, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Ji = Rt.API, Es = Ji.getCharWidthsArray = function(r, e) {
  var t, i, a = (e = e || {}).font || this.internal.getFont(), s = e.fontSize || this.internal.getFontSize(), f = e.charSpace || this.internal.getCharSpace(), l = e.widths ? e.widths : a.metadata.Unicode.widths, c = l.fof ? l.fof : 1, d = e.kerning ? e.kerning : a.metadata.Unicode.kerning, m = d.fof ? d.fof : 1, N = e.doKerning !== !1, P = 0, p = r.length, j = 0, E = l[0] || c, R = [];
  for (t = 0; t < p; t++) i = r.charCodeAt(t), typeof a.metadata.widthOfString == "function" ? R.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(i)) + f * (1e3 / s) || 0) / 1e3) : (P = N && Ae(d[i]) === "object" && !isNaN(parseInt(d[i][j], 10)) ? d[i][j] / m : 0, R.push((l[i] || E) / c + P)), j = i;
  return R;
}, Ju = Ji.getStringUnitWidth = function(r, e) {
  var t = (e = e || {}).fontSize || this.internal.getFontSize(), i = e.font || this.internal.getFont(), a = e.charSpace || this.internal.getCharSpace();
  return Ji.processArabic && (r = Ji.processArabic(r)), typeof i.metadata.widthOfString == "function" ? i.metadata.widthOfString(r, t, a) / t : Es.apply(this, arguments).reduce(function(s, f) {
    return s + f;
  }, 0);
}, $u = function(r, e, t, i) {
  for (var a = [], s = 0, f = r.length, l = 0; s !== f && l + e[s] < t; ) l += e[s], s++;
  a.push(r.slice(0, s));
  var c = s;
  for (l = 0; s !== f; ) l + e[s] > i && (a.push(r.slice(c, s)), l = 0, c = s), l += e[s], s++;
  return c !== s && a.push(r.slice(c, s)), a;
}, Xu = function(r, e, t) {
  t || (t = {});
  var i, a, s, f, l, c, d, m = [], N = [m], P = t.textIndent || 0, p = 0, j = 0, E = r.split(" "), R = Es.apply(this, [" ", t])[0];
  if (c = t.lineIndent === -1 ? E[0].length + 2 : t.lineIndent || 0) {
    var k = Array(c).join(" "), V = [];
    E.map(function(U) {
      (U = U.split(/\s*\n/)).length > 1 ? V = V.concat(U.map(function(ot, vt) {
        return (vt && ot.length ? `
` : "") + ot;
      })) : V.push(U[0]);
    }), E = V, c = Ju.apply(this, [k, t]);
  }
  for (s = 0, f = E.length; s < f; s++) {
    var Y = 0;
    if (i = E[s], c && i[0] == `
` && (i = i.substr(1), Y = 1), P + p + (j = (a = Es.apply(this, [i, t])).reduce(function(U, ot) {
      return U + ot;
    }, 0)) > e || Y) {
      if (j > e) {
        for (l = $u.apply(this, [i, a, e - (P + p), e]), m.push(l.shift()), m = [l.pop()]; l.length; ) N.push([l.shift()]);
        j = a.slice(i.length - (m[0] ? m[0].length : 0)).reduce(function(U, ot) {
          return U + ot;
        }, 0);
      } else m = [i];
      N.push(m), P = j + c, p = R;
    } else m.push(i), P += p + j, p = R;
  }
  return d = c ? function(U, ot) {
    return (ot ? k : "") + U.join(" ");
  } : function(U) {
    return U.join(" ");
  }, N.map(d);
}, Ji.splitTextToSize = function(r, e, t) {
  var i, a = (t = t || {}).fontSize || this.internal.getFontSize(), s = (function(m) {
    if (m.widths && m.kerning) return { widths: m.widths, kerning: m.kerning };
    var N = this.internal.getFont(m.fontName, m.fontStyle), P = "Unicode";
    return N.metadata[P] ? { widths: N.metadata[P].widths || { 0: 1 }, kerning: N.metadata[P].kerning || {} } : { font: N.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, t);
  i = Array.isArray(r) ? r : String(r).split(/\r?\n/);
  var f = 1 * this.internal.scaleFactor * e / a;
  s.textIndent = t.textIndent ? 1 * t.textIndent * this.internal.scaleFactor / a : 0, s.lineIndent = t.lineIndent;
  var l, c, d = [];
  for (l = 0, c = i.length; l < c; l++) d = d.concat(Xu.apply(this, [i[l], f, s]));
  return d;
}, (function(r) {
  r.__fontmetrics__ = r.__fontmetrics__ || {};
  for (var e = "0123456789abcdef", t = "klmnopqrstuvwxyz", i = {}, a = {}, s = 0; s < 16; s++) i[t[s]] = e[s], a[e[s]] = t[s];
  var f = function(P) {
    return "0x" + parseInt(P, 10).toString(16);
  }, l = r.__fontmetrics__.compress = function(P) {
    var p, j, E, R, k = ["{"];
    for (var V in P) {
      if (p = P[V], isNaN(parseInt(V, 10)) ? j = "'" + V + "'" : (V = parseInt(V, 10), j = (j = f(V).slice(2)).slice(0, -1) + a[j.slice(-1)]), typeof p == "number") p < 0 ? (E = f(p).slice(3), R = "-") : (E = f(p).slice(2), R = ""), E = R + E.slice(0, -1) + a[E.slice(-1)];
      else {
        if (Ae(p) !== "object") throw new Error("Don't know what to do with value type " + Ae(p) + ".");
        E = l(p);
      }
      k.push(j + E);
    }
    return k.push("}"), k.join("");
  }, c = r.__fontmetrics__.uncompress = function(P) {
    if (typeof P != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var p, j, E, R, k = {}, V = 1, Y = k, U = [], ot = "", vt = "", ht = P.length - 1, X = 1; X < ht; X += 1) (R = P[X]) == "'" ? p ? (E = p.join(""), p = void 0) : p = [] : p ? p.push(R) : R == "{" ? (U.push([Y, E]), Y = {}, E = void 0) : R == "}" ? ((j = U.pop())[0][j[1]] = Y, E = void 0, Y = j[0]) : R == "-" ? V = -1 : E === void 0 ? i.hasOwnProperty(R) ? (ot += i[R], E = parseInt(ot, 16) * V, V = 1, ot = "") : ot += R : i.hasOwnProperty(R) ? (vt += i[R], Y[E] = parseInt(vt, 16) * V, V = 1, E = void 0, vt = "") : vt += R;
    return k;
  }, d = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, m = { Unicode: { Courier: d, "Courier-Bold": d, "Courier-BoldOblique": d, "Courier-Oblique": d, Helvetica: d, "Helvetica-Bold": d, "Helvetica-BoldOblique": d, "Helvetica-Oblique": d, "Times-Roman": d, "Times-Bold": d, "Times-BoldItalic": d, "Times-Italic": d } }, N = { Unicode: { "Courier-Oblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  r.events.push(["addFont", function(P) {
    var p = P.font, j = N.Unicode[p.postScriptName];
    j && (p.metadata.Unicode = {}, p.metadata.Unicode.widths = j.widths, p.metadata.Unicode.kerning = j.kerning);
    var E = m.Unicode[p.postScriptName];
    E && (p.metadata.Unicode.encoding = E, p.encoding = E.codePages[0]);
  }]);
})(Rt.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = function(t) {
    for (var i = t.length, a = new Uint8Array(i), s = 0; s < i; s++) a[s] = t.charCodeAt(s);
    return a;
  };
  r.API.events.push(["addFont", function(t) {
    var i = void 0, a = t.font, s = t.instance;
    if (!a.isStandardFont) {
      if (s === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + a.postScriptName + "').");
      if (typeof (i = s.existsFileInVFS(a.postScriptName) === !1 ? s.loadFile(a.postScriptName) : s.getFileFromVFS(a.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + a.postScriptName + "').");
      (function(f, l) {
        l = /^\x00\x01\x00\x00/.test(l) ? e(l) : e(Ms(l)), f.metadata = r.API.TTFFont.open(l), f.metadata.Unicode = f.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, f.metadata.glyIdsUsed = [0];
      })(a, i);
    }
  }]);
})(Rt), Rt.API.addSvgAsImage = function(r, e, t, i, a, s, f, l) {
  if (isNaN(e) || isNaN(t)) throw Se.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
  if (isNaN(i) || isNaN(a)) throw Se.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
  var c = document.createElement("canvas");
  c.width = i, c.height = a;
  var d = c.getContext("2d");
  d.fillStyle = "#fff", d.fillRect(0, 0, c.width, c.height);
  var m = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, N = this;
  return (Jt.canvg ? Promise.resolve(Jt.canvg) : import("./index.es-DOcwUzox.js")).catch(function(P) {
    return Promise.reject(new Error("Could not load canvg: " + P));
  }).then(function(P) {
    return P.default ? P.default : P;
  }).then(function(P) {
    return P.fromString(d, r, m);
  }, function() {
    return Promise.reject(new Error("Could not load canvg."));
  }).then(function(P) {
    return P.render(m);
  }).then(function() {
    N.addImage(c.toDataURL("image/jpeg", 1), e, t, i, a, f, l);
  });
}, Rt.API.putTotalPages = function(r) {
  var e, t = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(r, "g"), t = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(r, this.internal.getFont()), "g"), t = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var i = 1; i <= this.internal.getNumberOfPages(); i++) for (var a = 0; a < this.internal.pages[i].length; a++) this.internal.pages[i][a] = this.internal.pages[i][a].replace(e, t);
  return this;
}, Rt.API.viewerPreferences = function(r, e) {
  var t;
  r = r || {}, e = e || !1;
  var i, a, s, f = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, l = Object.keys(f), c = [], d = 0, m = 0, N = 0;
  function P(j, E) {
    var R, k = !1;
    for (R = 0; R < j.length; R += 1) j[R] === E && (k = !0);
    return k;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(f)), this.internal.viewerpreferences.isSubscribed = !1), t = this.internal.viewerpreferences.configuration, r === "reset" || e === !0) {
    var p = l.length;
    for (N = 0; N < p; N += 1) t[l[N]].value = t[l[N]].defaultValue, t[l[N]].explicitSet = !1;
  }
  if (Ae(r) === "object") {
    for (a in r) if (s = r[a], P(l, a) && s !== void 0) {
      if (t[a].type === "boolean" && typeof s == "boolean") t[a].value = s;
      else if (t[a].type === "name" && P(t[a].valueSet, s)) t[a].value = s;
      else if (t[a].type === "integer" && Number.isInteger(s)) t[a].value = s;
      else if (t[a].type === "array") {
        for (d = 0; d < s.length; d += 1) if (i = !0, s[d].length === 1 && typeof s[d][0] == "number") c.push(String(s[d] - 1));
        else if (s[d].length > 1) {
          for (m = 0; m < s[d].length; m += 1) typeof s[d][m] != "number" && (i = !1);
          i === !0 && c.push([s[d][0] - 1, s[d][1] - 1].join(" "));
        }
        t[a].value = "[" + c.join(" ") + "]";
      } else t[a].value = t[a].defaultValue;
      t[a].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var j, E = [];
    for (j in t) t[j].explicitSet === !0 && (t[j].type === "name" ? E.push("/" + j + " /" + t[j].value) : E.push("/" + j + " " + t[j].value));
    E.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + E.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = t, this;
}, /** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
(function(r) {
  var e = function() {
    var i = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', a = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), s = unescape(encodeURIComponent(i)), f = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), l = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), c = unescape(encodeURIComponent("</x:xmpmeta>")), d = s.length + f.length + l.length + a.length + c.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + d + " >>"), this.internal.write("stream"), this.internal.write(a + s + f + l + c), this.internal.write("endstream"), this.internal.write("endobj");
  }, t = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  r.addMetadata = function(i, a) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: i, namespaceuri: a || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", t), this.internal.events.subscribe("postPutResources", e)), this;
  };
})(Rt.API), (function(r) {
  var e = r.API, t = e.pdfEscape16 = function(s, f) {
    for (var l, c = f.metadata.Unicode.widths, d = ["", "0", "00", "000", "0000"], m = [""], N = 0, P = s.length; N < P; ++N) {
      if (l = f.metadata.characterToGlyph(s.charCodeAt(N)), f.metadata.glyIdsUsed.push(l), f.metadata.toUnicode[l] = s.charCodeAt(N), c.indexOf(l) == -1 && (c.push(l), c.push([parseInt(f.metadata.widthOfGlyph(l), 10)])), l == "0") return m.join("");
      l = l.toString(16), m.push(d[4 - l.length], l);
    }
    return m.join("");
  }, i = function(s) {
    var f, l, c, d, m, N, P;
    for (m = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, c = [], N = 0, P = (l = Object.keys(s).sort(function(p, j) {
      return p - j;
    })).length; N < P; N++) f = l[N], c.length >= 100 && (m += `
` + c.length + ` beginbfchar
` + c.join(`
`) + `
endbfchar`, c = []), s[f] !== void 0 && s[f] !== null && typeof s[f].toString == "function" && (d = ("0000" + s[f].toString(16)).slice(-4), f = ("0000" + (+f).toString(16)).slice(-4), c.push("<" + f + "><" + d + ">"));
    return c.length && (m += `
` + c.length + ` beginbfchar
` + c.join(`
`) + `
endbfchar
`), m + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  e.events.push(["putFont", function(s) {
    (function(f) {
      var l = f.font, c = f.out, d = f.newObject, m = f.putStream;
      if (l.metadata instanceof r.API.TTFFont && l.encoding === "Identity-H") {
        for (var N = l.metadata.Unicode.widths, P = l.metadata.subset.encode(l.metadata.glyIdsUsed, 1), p = "", j = 0; j < P.length; j++) p += String.fromCharCode(P[j]);
        var E = d();
        m({ data: p, addLength1: !0, objectId: E }), c("endobj");
        var R = d();
        m({ data: i(l.metadata.toUnicode), addLength1: !0, objectId: R }), c("endobj");
        var k = d();
        c("<<"), c("/Type /FontDescriptor"), c("/FontName /" + Xi(l.fontName)), c("/FontFile2 " + E + " 0 R"), c("/FontBBox " + r.API.PDFObject.convert(l.metadata.bbox)), c("/Flags " + l.metadata.flags), c("/StemV " + l.metadata.stemV), c("/ItalicAngle " + l.metadata.italicAngle), c("/Ascent " + l.metadata.ascender), c("/Descent " + l.metadata.decender), c("/CapHeight " + l.metadata.capHeight), c(">>"), c("endobj");
        var V = d();
        c("<<"), c("/Type /Font"), c("/BaseFont /" + Xi(l.fontName)), c("/FontDescriptor " + k + " 0 R"), c("/W " + r.API.PDFObject.convert(N)), c("/CIDToGIDMap /Identity"), c("/DW 1000"), c("/Subtype /CIDFontType2"), c("/CIDSystemInfo"), c("<<"), c("/Supplement 0"), c("/Registry (Adobe)"), c("/Ordering (" + l.encoding + ")"), c(">>"), c(">>"), c("endobj"), l.objectNumber = d(), c("<<"), c("/Type /Font"), c("/Subtype /Type0"), c("/ToUnicode " + R + " 0 R"), c("/BaseFont /" + Xi(l.fontName)), c("/Encoding /" + l.encoding), c("/DescendantFonts [" + V + " 0 R]"), c(">>"), c("endobj"), l.isAlreadyPutted = !0;
      }
    })(s);
  }]), e.events.push(["putFont", function(s) {
    (function(f) {
      var l = f.font, c = f.out, d = f.newObject, m = f.putStream;
      if (l.metadata instanceof r.API.TTFFont && l.encoding === "WinAnsiEncoding") {
        for (var N = l.metadata.rawData, P = "", p = 0; p < N.length; p++) P += String.fromCharCode(N[p]);
        var j = d();
        m({ data: P, addLength1: !0, objectId: j }), c("endobj");
        var E = d();
        m({ data: i(l.metadata.toUnicode), addLength1: !0, objectId: E }), c("endobj");
        var R = d();
        c("<<"), c("/Descent " + l.metadata.decender), c("/CapHeight " + l.metadata.capHeight), c("/StemV " + l.metadata.stemV), c("/Type /FontDescriptor"), c("/FontFile2 " + j + " 0 R"), c("/Flags 96"), c("/FontBBox " + r.API.PDFObject.convert(l.metadata.bbox)), c("/FontName /" + Xi(l.fontName)), c("/ItalicAngle " + l.metadata.italicAngle), c("/Ascent " + l.metadata.ascender), c(">>"), c("endobj"), l.objectNumber = d();
        for (var k = 0; k < l.metadata.hmtx.widths.length; k++) l.metadata.hmtx.widths[k] = parseInt(l.metadata.hmtx.widths[k] * (1e3 / l.metadata.head.unitsPerEm));
        c("<</Subtype/TrueType/Type/Font/ToUnicode " + E + " 0 R/BaseFont/" + Xi(l.fontName) + "/FontDescriptor " + R + " 0 R/Encoding/" + l.encoding + " /FirstChar 29 /LastChar 255 /Widths " + r.API.PDFObject.convert(l.metadata.hmtx.widths) + ">>"), c("endobj"), l.isAlreadyPutted = !0;
      }
    })(s);
  }]);
  var a = function(s) {
    var f, l = s.text || "", c = s.x, d = s.y, m = s.options || {}, N = s.mutex || {}, P = N.pdfEscape, p = N.activeFontKey, j = N.fonts, E = p, R = "", k = 0, V = "", Y = j[E].encoding;
    if (j[E].encoding !== "Identity-H") return { text: l, x: c, y: d, options: m, mutex: N };
    for (V = l, E = p, Array.isArray(l) && (V = l[0]), k = 0; k < V.length; k += 1) j[E].metadata.hasOwnProperty("cmap") && (f = j[E].metadata.cmap.unicode.codeMap[V[k].charCodeAt(0)]), f || V[k].charCodeAt(0) < 256 && j[E].metadata.hasOwnProperty("Unicode") ? R += V[k] : R += "";
    var U = "";
    return parseInt(E.slice(1)) < 14 || Y === "WinAnsiEncoding" ? U = P(R, E).split("").map(function(ot) {
      return ot.charCodeAt(0).toString(16);
    }).join("") : Y === "Identity-H" && (U = t(R, j[E])), N.isHex = !0, { text: U, x: c, y: d, options: m, mutex: N };
  };
  e.events.push(["postProcessText", function(s) {
    var f = s.text || "", l = [], c = { text: f, x: s.x, y: s.y, options: s.options, mutex: s.mutex };
    if (Array.isArray(f)) {
      var d = 0;
      for (d = 0; d < f.length; d += 1) Array.isArray(f[d]) && f[d].length === 3 ? l.push([a(Object.assign({}, c, { text: f[d][0] })).text, f[d][1], f[d][2]]) : l.push(a(Object.assign({}, c, { text: f[d] })).text);
      s.text = l;
    } else s.text = a(Object.assign({}, c, { text: f })).text;
  }]);
})(Rt), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(r) {
  var e = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  r.existsFileInVFS = function(t) {
    return e.call(this), this.internal.vFS[t] !== void 0;
  }, r.addFileToVFS = function(t, i) {
    return e.call(this), this.internal.vFS[t] = i, this;
  }, r.getFileFromVFS = function(t) {
    return e.call(this), this.internal.vFS[t] !== void 0 ? this.internal.vFS[t] : null;
  };
})(Rt.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
(function(r) {
  r.__bidiEngine__ = r.prototype.__bidiEngine__ = function(i) {
    var a, s, f, l, c, d, m, N = e, P = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], j = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, E = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, R = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], k = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), V = !1, Y = 0;
    this.__bidiEngine__ = {};
    var U = function(w) {
      var A = w.charCodeAt(), B = A >> 8, q = E[B];
      return q !== void 0 ? N[256 * q + (255 & A)] : B === 252 || B === 253 ? "AL" : k.test(B) ? "L" : B === 8 ? "R" : "N";
    }, ot = function(w) {
      for (var A, B = 0; B < w.length; B++) {
        if ((A = U(w.charAt(B))) === "L") return !1;
        if (A === "R") return !0;
      }
      return !1;
    }, vt = function(w, A, B, q) {
      var et, it, at, K, st = A[q];
      switch (st) {
        case "L":
        case "R":
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          V = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          V && (st = "AN");
          break;
        case "AL":
          V = !0, st = "R";
          break;
        case "WS":
        case "BN":
          st = "N";
          break;
        case "CS":
          q < 1 || q + 1 >= A.length || (et = B[q - 1]) !== "EN" && et !== "AN" || (it = A[q + 1]) !== "EN" && it !== "AN" ? st = "N" : V && (it = "AN"), st = it === et ? it : "N";
          break;
        case "ES":
          st = (et = q > 0 ? B[q - 1] : "B") === "EN" && q + 1 < A.length && A[q + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (q > 0 && B[q - 1] === "EN") {
            st = "EN";
            break;
          }
          if (V) {
            st = "N";
            break;
          }
          for (at = q + 1, K = A.length; at < K && A[at] === "ET"; ) at++;
          st = at < K && A[at] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (f && !l) {
            for (K = A.length, at = q + 1; at < K && A[at] === "NSM"; ) at++;
            if (at < K) {
              var xt = w[q], ft = xt >= 1425 && xt <= 2303 || xt === 64286;
              if (et = A[at], ft && (et === "R" || et === "AL")) {
                st = "R";
                break;
              }
            }
          }
          st = q < 1 || (et = A[q - 1]) === "B" ? "N" : B[q - 1];
          break;
        case "B":
          V = !1, a = !0, st = Y;
          break;
        case "S":
          s = !0, st = "N";
      }
      return st;
    }, ht = function(w, A, B) {
      var q = w.split("");
      return B && X(q, B, { hiLevel: Y }), q.reverse(), A && A.reverse(), q.join("");
    }, X = function(w, A, B) {
      var q, et, it, at, K, st = -1, xt = w.length, ft = 0, x = [], M = Y ? p : P, T = [];
      for (V = !1, a = !1, s = !1, et = 0; et < xt; et++) T[et] = U(w[et]);
      for (it = 0; it < xt; it++) {
        if (K = ft, x[it] = vt(w, T, x, it), q = 240 & (ft = M[K][j[x[it]]]), ft &= 15, A[it] = at = M[ft][5], q > 0) if (q === 16) {
          for (et = st; et < it; et++) A[et] = 1;
          st = -1;
        } else st = -1;
        if (M[ft][6]) st === -1 && (st = it);
        else if (st > -1) {
          for (et = st; et < it; et++) A[et] = at;
          st = -1;
        }
        T[it] === "B" && (A[it] = 0), B.hiLevel |= at;
      }
      s && (function(W, $, tt) {
        for (var lt = 0; lt < tt; lt++) if (W[lt] === "S") {
          $[lt] = Y;
          for (var ut = lt - 1; ut >= 0 && W[ut] === "WS"; ut--) $[ut] = Y;
        }
      })(T, A, xt);
    }, D = function(w, A, B, q, et) {
      if (!(et.hiLevel < w)) {
        if (w === 1 && Y === 1 && !a) return A.reverse(), void (B && B.reverse());
        for (var it, at, K, st, xt = A.length, ft = 0; ft < xt; ) {
          if (q[ft] >= w) {
            for (K = ft + 1; K < xt && q[K] >= w; ) K++;
            for (st = ft, at = K - 1; st < at; st++, at--) it = A[st], A[st] = A[at], A[at] = it, B && (it = B[st], B[st] = B[at], B[at] = it);
            ft = K;
          }
          ft++;
        }
      }
    }, H = function(w, A, B) {
      var q = w.split(""), et = { hiLevel: Y };
      return B || (B = []), X(q, B, et), (function(it, at, K) {
        if (K.hiLevel !== 0 && m) for (var st, xt = 0; xt < it.length; xt++) at[xt] === 1 && (st = R.indexOf(it[xt])) >= 0 && (it[xt] = R[st + 1]);
      })(q, B, et), D(2, q, A, B, et), D(1, q, A, B, et), q.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(w, A, B) {
      if ((function(et, it) {
        if (it) for (var at = 0; at < et.length; at++) it[at] = at;
        l === void 0 && (l = ot(et)), d === void 0 && (d = ot(et));
      })(w, A), f || !c || d) if (f && c && l ^ d) Y = l ? 1 : 0, w = ht(w, A, B);
      else if (!f && c && d) Y = l ? 1 : 0, w = H(w, A, B), w = ht(w, A);
      else if (!f || l || c || d) {
        if (f && !c && l ^ d) w = ht(w, A), l ? (Y = 0, w = H(w, A, B)) : (Y = 1, w = H(w, A, B), w = ht(w, A));
        else if (f && l && !c && d) Y = 1, w = H(w, A, B), w = ht(w, A);
        else if (!f && !c && l ^ d) {
          var q = m;
          l ? (Y = 1, w = H(w, A, B), Y = 0, m = !1, w = H(w, A, B), m = q) : (Y = 0, w = H(w, A, B), w = ht(w, A), Y = 1, m = !1, w = H(w, A, B), m = q, w = ht(w, A));
        }
      } else Y = 0, w = H(w, A, B);
      else Y = l ? 1 : 0, w = H(w, A, B);
      return w;
    }, this.__bidiEngine__.setOptions = function(w) {
      w && (f = w.isInputVisual, c = w.isOutputVisual, l = w.isInputRtl, d = w.isOutputRtl, m = w.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(i), this.__bidiEngine__;
  };
  var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], t = new r.__bidiEngine__({ isInputVisual: !0 });
  r.API.events.push(["postProcessText", function(i) {
    var a = i.text;
    i.x, i.y;
    var s = i.options || {};
    i.mutex, s.lang;
    var f = [];
    if (s.isInputVisual = typeof s.isInputVisual != "boolean" || s.isInputVisual, t.setOptions(s), Object.prototype.toString.call(a) === "[object Array]") {
      var l = 0;
      for (f = [], l = 0; l < a.length; l += 1) Object.prototype.toString.call(a[l]) === "[object Array]" ? f.push([t.doBidiReorder(a[l][0]), a[l][1], a[l][2]]) : f.push([t.doBidiReorder(a[l])]);
      i.text = f;
    } else i.text = t.doBidiReorder(a);
    t.setOptions({ isInputVisual: !0 });
  }]);
})(Rt), Rt.API.TTFFont = (function() {
  function r(e) {
    var t;
    if (this.rawData = e, t = this.contents = new ai(e), this.contents.pos = 4, t.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    t.pos = 0, this.parse(), this.subset = new j2(this), this.registerTTF();
  }
  return r.open = function(e) {
    return new r(e);
  }, r.prototype.parse = function() {
    return this.directory = new x2(this.contents), this.head = new A2(this), this.name = new P2(this), this.cmap = new Kc(this), this.toUnicode = {}, this.hhea = new N2(this), this.maxp = new I2(this), this.hmtx = new C2(this), this.post = new S2(this), this.os2 = new L2(this), this.loca = new M2(this), this.glyf = new F2(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, r.prototype.registerTTF = function() {
    var e, t, i, a, s;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var f, l, c, d;
      for (d = [], f = 0, l = (c = this.bbox).length; f < l; f++) e = c[f], d.push(Math.round(e * this.scaleFactor));
      return d;
    }).call(this), this.stemV = 0, this.post.exists ? (i = 255 & (a = this.post.italic_angle), 32768 & (t = a >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + i)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (s = this.familyClass) === 1 || s === 2 || s === 3 || s === 4 || s === 5 || s === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, r.prototype.characterToGlyph = function(e) {
    var t;
    return ((t = this.cmap.unicode) != null ? t.codeMap[e] : void 0) || 0;
  }, r.prototype.widthOfGlyph = function(e) {
    var t;
    return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t;
  }, r.prototype.widthOfString = function(e, t, i) {
    var a, s, f, l;
    for (f = 0, s = 0, l = (e = "" + e).length; 0 <= l ? s < l : s > l; s = 0 <= l ? ++s : --s) a = e.charCodeAt(s), f += this.widthOfGlyph(this.characterToGlyph(a)) + i * (1e3 / t) || 0;
    return f * (t / 1e3);
  }, r.prototype.lineHeight = function(e, t) {
    var i;
    return t == null && (t = !1), i = t ? this.lineGap : 0, (this.ascender + i - this.decender) / 1e3 * e;
  }, r;
})();
var an, ai = (function() {
  function r(e) {
    this.data = e ?? [], this.pos = 0, this.length = this.data.length;
  }
  return r.prototype.readByte = function() {
    return this.data[this.pos++];
  }, r.prototype.writeByte = function(e) {
    return this.data[this.pos++] = e;
  }, r.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, r.prototype.writeUInt32 = function(e) {
    return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, r.prototype.readInt32 = function() {
    var e;
    return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
  }, r.prototype.writeInt32 = function(e) {
    return e < 0 && (e += 4294967296), this.writeUInt32(e);
  }, r.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, r.prototype.writeUInt16 = function(e) {
    return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, r.prototype.readInt16 = function() {
    var e;
    return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
  }, r.prototype.writeInt16 = function(e) {
    return e < 0 && (e += 65536), this.writeUInt16(e);
  }, r.prototype.readString = function(e) {
    var t, i;
    for (i = [], t = 0; 0 <= e ? t < e : t > e; t = 0 <= e ? ++t : --t) i[t] = String.fromCharCode(this.readByte());
    return i.join("");
  }, r.prototype.writeString = function(e) {
    var t, i, a;
    for (a = [], t = 0, i = e.length; 0 <= i ? t < i : t > i; t = 0 <= i ? ++t : --t) a.push(this.writeByte(e.charCodeAt(t)));
    return a;
  }, r.prototype.readShort = function() {
    return this.readInt16();
  }, r.prototype.writeShort = function(e) {
    return this.writeInt16(e);
  }, r.prototype.readLongLong = function() {
    var e, t, i, a, s, f, l, c;
    return e = this.readByte(), t = this.readByte(), i = this.readByte(), a = this.readByte(), s = this.readByte(), f = this.readByte(), l = this.readByte(), c = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ i) + 4294967296 * (255 ^ a) + 16777216 * (255 ^ s) + 65536 * (255 ^ f) + 256 * (255 ^ l) + (255 ^ c) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * i + 4294967296 * a + 16777216 * s + 65536 * f + 256 * l + c;
  }, r.prototype.writeLongLong = function(e) {
    var t, i;
    return t = Math.floor(e / 4294967296), i = 4294967295 & e, this.writeByte(t >> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t), this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i);
  }, r.prototype.readInt = function() {
    return this.readInt32();
  }, r.prototype.writeInt = function(e) {
    return this.writeInt32(e);
  }, r.prototype.read = function(e) {
    var t, i;
    for (t = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i) t.push(this.readByte());
    return t;
  }, r.prototype.write = function(e) {
    var t, i, a, s;
    for (s = [], i = 0, a = e.length; i < a; i++) t = e[i], s.push(this.writeByte(t));
    return s;
  }, r;
})(), x2 = (function() {
  var r;
  function e(t) {
    var i, a, s;
    for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, a = 0, s = this.tableCount; 0 <= s ? a < s : a > s; a = 0 <= s ? ++a : --a) i = { tag: t.readString(4), checksum: t.readInt(), offset: t.readInt(), length: t.readInt() }, this.tables[i.tag] = i;
  }
  return e.prototype.encode = function(t) {
    var i, a, s, f, l, c, d, m, N, P, p, j, E;
    for (E in p = Object.keys(t).length, c = Math.log(2), N = 16 * Math.floor(Math.log(p) / c), f = Math.floor(N / c), m = 16 * p - N, (a = new ai()).writeInt(this.scalarType), a.writeShort(p), a.writeShort(N), a.writeShort(f), a.writeShort(m), s = 16 * p, d = a.pos + s, l = null, j = [], t) for (P = t[E], a.writeString(E), a.writeInt(r(P)), a.writeInt(d), a.writeInt(P.length), j = j.concat(P), E === "head" && (l = d), d += P.length; d % 4; ) j.push(0), d++;
    return a.write(j), i = 2981146554 - r(a.data), a.pos = l + 8, a.writeUInt32(i), a.data;
  }, r = function(t) {
    var i, a, s, f;
    for (t = Zc.call(t); t.length % 4; ) t.push(0);
    for (s = new ai(t), a = 0, i = 0, f = t.length; i < f; i = i += 4) a += s.readUInt32();
    return 4294967295 & a;
  }, e;
})(), _2 = {}.hasOwnProperty, bn = function(r, e) {
  for (var t in e) _2.call(e, t) && (r[t] = e[t]);
  function i() {
    this.constructor = r;
  }
  return i.prototype = e.prototype, r.prototype = new i(), r.__super__ = e.prototype, r;
};
an = (function() {
  function r(e) {
    var t;
    this.file = e, t = this.file.directory.tables[this.tag], this.exists = !!t, t && (this.offset = t.offset, this.length = t.length, this.parse(this.file.contents));
  }
  return r.prototype.parse = function() {
  }, r.prototype.encode = function() {
  }, r.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, r;
})();
var A2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "head", r.prototype.parse = function(e) {
    return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort();
  }, r.prototype.encode = function(e) {
    var t;
    return (t = new ai()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data;
  }, r;
})(), ac = (function() {
  function r(e, t) {
    var i, a, s, f, l, c, d, m, N, P, p, j, E, R, k, V, Y;
    switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), N = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (c = 0; c < 256; ++c) this.codeMap[c] = e.readByte();
        break;
      case 4:
        for (p = e.readUInt16(), P = p / 2, e.pos += 6, s = (function() {
          var U, ot;
          for (ot = [], c = U = 0; 0 <= P ? U < P : U > P; c = 0 <= P ? ++U : --U) ot.push(e.readUInt16());
          return ot;
        })(), e.pos += 2, E = (function() {
          var U, ot;
          for (ot = [], c = U = 0; 0 <= P ? U < P : U > P; c = 0 <= P ? ++U : --U) ot.push(e.readUInt16());
          return ot;
        })(), d = (function() {
          var U, ot;
          for (ot = [], c = U = 0; 0 <= P ? U < P : U > P; c = 0 <= P ? ++U : --U) ot.push(e.readUInt16());
          return ot;
        })(), m = (function() {
          var U, ot;
          for (ot = [], c = U = 0; 0 <= P ? U < P : U > P; c = 0 <= P ? ++U : --U) ot.push(e.readUInt16());
          return ot;
        })(), a = (this.length - e.pos + this.offset) / 2, l = (function() {
          var U, ot;
          for (ot = [], c = U = 0; 0 <= a ? U < a : U > a; c = 0 <= a ? ++U : --U) ot.push(e.readUInt16());
          return ot;
        })(), c = k = 0, Y = s.length; k < Y; c = ++k) for (R = s[c], i = V = j = E[c]; j <= R ? V <= R : V >= R; i = j <= R ? ++V : --V) m[c] === 0 ? f = i + d[c] : (f = l[m[c] / 2 + (i - j) - (P - c)] || 0) !== 0 && (f += d[c]), this.codeMap[i] = 65535 & f;
    }
    e.pos = N;
  }
  return r.encode = function(e, t) {
    var i, a, s, f, l, c, d, m, N, P, p, j, E, R, k, V, Y, U, ot, vt, ht, X, D, H, w, A, B, q, et, it, at, K, st, xt, ft, x, M, T, W, $, tt, lt, ut, gt, At, kt;
    switch (q = new ai(), f = Object.keys(e).sort(function(St, Dt) {
      return St - Dt;
    }), t) {
      case "macroman":
        for (E = 0, R = (function() {
          var St = [];
          for (j = 0; j < 256; ++j) St.push(0);
          return St;
        })(), V = { 0: 0 }, s = {}, et = 0, st = f.length; et < st; et++) V[ut = e[a = f[et]]] == null && (V[ut] = ++E), s[a] = { old: e[a], new: V[e[a]] }, R[a] = V[e[a]];
        return q.writeUInt16(1), q.writeUInt16(0), q.writeUInt32(12), q.writeUInt16(0), q.writeUInt16(262), q.writeUInt16(0), q.write(R), { charMap: s, subtable: q.data, maxGlyphID: E + 1 };
      case "unicode":
        for (A = [], N = [], Y = 0, V = {}, i = {}, k = d = null, it = 0, xt = f.length; it < xt; it++) V[ot = e[a = f[it]]] == null && (V[ot] = ++Y), i[a] = { old: ot, new: V[ot] }, l = V[ot] - a, k != null && l === d || (k && N.push(k), A.push(a), d = l), k = a;
        for (k && N.push(k), N.push(65535), A.push(65535), H = 2 * (D = A.length), X = 2 * Math.pow(Math.log(D) / Math.LN2, 2), P = Math.log(X / 2) / Math.LN2, ht = 2 * D - X, c = [], vt = [], p = [], j = at = 0, ft = A.length; at < ft; j = ++at) {
          if (w = A[j], m = N[j], w === 65535) {
            c.push(0), vt.push(0);
            break;
          }
          if (w - (B = i[w].new) >= 32768) for (c.push(0), vt.push(2 * (p.length + D - j)), a = K = w; w <= m ? K <= m : K >= m; a = w <= m ? ++K : --K) p.push(i[a].new);
          else c.push(B - w), vt.push(0);
        }
        for (q.writeUInt16(3), q.writeUInt16(1), q.writeUInt32(12), q.writeUInt16(4), q.writeUInt16(16 + 8 * D + 2 * p.length), q.writeUInt16(0), q.writeUInt16(H), q.writeUInt16(X), q.writeUInt16(P), q.writeUInt16(ht), tt = 0, x = N.length; tt < x; tt++) a = N[tt], q.writeUInt16(a);
        for (q.writeUInt16(0), lt = 0, M = A.length; lt < M; lt++) a = A[lt], q.writeUInt16(a);
        for (gt = 0, T = c.length; gt < T; gt++) l = c[gt], q.writeUInt16(l);
        for (At = 0, W = vt.length; At < W; At++) U = vt[At], q.writeUInt16(U);
        for (kt = 0, $ = p.length; kt < $; kt++) E = p[kt], q.writeUInt16(E);
        return { charMap: i, subtable: q.data, maxGlyphID: Y + 1 };
    }
  }, r;
})(), Kc = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "cmap", r.prototype.parse = function(e) {
    var t, i, a;
    for (e.pos = this.offset, this.version = e.readUInt16(), a = e.readUInt16(), this.tables = [], this.unicode = null, i = 0; 0 <= a ? i < a : i > a; i = 0 <= a ? ++i : --i) t = new ac(e, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
    return !0;
  }, r.encode = function(e, t) {
    var i, a;
    return t == null && (t = "macroman"), i = ac.encode(e, t), (a = new ai()).writeUInt16(0), a.writeUInt16(1), i.table = a.data.concat(i.subtable), i;
  }, r;
})(), N2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "hhea", r.prototype.parse = function(e) {
    return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16();
  }, r;
})(), L2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "OS/2", r.prototype.parse = function(e) {
    if (e.pos = this.offset, this.version = e.readUInt16(), this.averageCharWidth = e.readShort(), this.weightClass = e.readUInt16(), this.widthClass = e.readUInt16(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort(), this.ySubscriptYSize = e.readShort(), this.ySubscriptXOffset = e.readShort(), this.ySubscriptYOffset = e.readShort(), this.ySuperscriptXSize = e.readShort(), this.ySuperscriptYSize = e.readShort(), this.ySuperscriptXOffset = e.readShort(), this.ySuperscriptYOffset = e.readShort(), this.yStrikeoutSize = e.readShort(), this.yStrikeoutPosition = e.readShort(), this.familyClass = e.readShort(), this.panose = (function() {
      var t, i;
      for (i = [], t = 0; t < 10; ++t) i.push(e.readByte());
      return i;
    })(), this.charRange = (function() {
      var t, i;
      for (i = [], t = 0; t < 4; ++t) i.push(e.readInt());
      return i;
    })(), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort(), this.descent = e.readShort(), this.lineGap = e.readShort(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = (function() {
      var t, i;
      for (i = [], t = 0; t < 2; t = ++t) i.push(e.readInt());
      return i;
    })(), this.version > 1)) return this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort();
  }, r;
})(), S2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "post", r.prototype.parse = function(e) {
    var t, i, a;
    switch (e.pos = this.offset, this.format = e.readInt(), this.italicAngle = e.readInt(), this.underlinePosition = e.readShort(), this.underlineThickness = e.readShort(), this.isFixedPitch = e.readInt(), this.minMemType42 = e.readInt(), this.maxMemType42 = e.readInt(), this.minMemType1 = e.readInt(), this.maxMemType1 = e.readInt(), this.format) {
      case 65536:
      case 196608:
        break;
      case 131072:
        var s;
        for (i = e.readUInt16(), this.glyphNameIndex = [], s = 0; 0 <= i ? s < i : s > i; s = 0 <= i ? ++s : --s) this.glyphNameIndex.push(e.readUInt16());
        for (this.names = [], a = []; e.pos < this.offset + this.length; ) t = e.readByte(), a.push(this.names.push(e.readString(t)));
        return a;
      case 151552:
        return i = e.readUInt16(), this.offsets = e.read(i);
      case 262144:
        return this.map = (function() {
          var f, l, c;
          for (c = [], s = f = 0, l = this.file.maxp.numGlyphs; 0 <= l ? f < l : f > l; s = 0 <= l ? ++f : --f) c.push(e.readUInt32());
          return c;
        }).call(this);
    }
  }, r;
})(), k2 = function(r, e) {
  this.raw = r, this.length = r.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, P2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "name", r.prototype.parse = function(e) {
    var t, i, a, s, f, l, c, d, m, N, P;
    for (e.pos = this.offset, e.readShort(), t = e.readShort(), l = e.readShort(), i = [], s = 0; 0 <= t ? s < t : s > t; s = 0 <= t ? ++s : --s) i.push({ platformID: e.readShort(), encodingID: e.readShort(), languageID: e.readShort(), nameID: e.readShort(), length: e.readShort(), offset: this.offset + l + e.readShort() });
    for (c = {}, s = m = 0, N = i.length; m < N; s = ++m) a = i[s], e.pos = a.offset, d = e.readString(a.length), f = new k2(d, a), c[P = a.nameID] == null && (c[P] = []), c[a.nameID].push(f);
    this.strings = c, this.copyright = c[0], this.fontFamily = c[1], this.fontSubfamily = c[2], this.uniqueSubfamily = c[3], this.fontName = c[4], this.version = c[5];
    try {
      this.postscriptName = c[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = c[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = c[7], this.manufacturer = c[8], this.designer = c[9], this.description = c[10], this.vendorUrl = c[11], this.designerUrl = c[12], this.license = c[13], this.licenseUrl = c[14], this.preferredFamily = c[15], this.preferredSubfamily = c[17], this.compatibleFull = c[18], this.sampleText = c[19];
  }, r;
})(), I2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "maxp", r.prototype.parse = function(e) {
    return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16();
  }, r;
})(), C2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "hmtx", r.prototype.parse = function(e) {
    var t, i, a, s, f, l, c;
    for (e.pos = this.offset, this.metrics = [], t = 0, l = this.file.hhea.numberOfMetrics; 0 <= l ? t < l : t > l; t = 0 <= l ? ++t : --t) this.metrics.push({ advance: e.readUInt16(), lsb: e.readInt16() });
    for (a = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
      var d, m;
      for (m = [], t = d = 0; 0 <= a ? d < a : d > a; t = 0 <= a ? ++d : --d) m.push(e.readInt16());
      return m;
    })(), this.widths = (function() {
      var d, m, N, P;
      for (P = [], d = 0, m = (N = this.metrics).length; d < m; d++) s = N[d], P.push(s.advance);
      return P;
    }).call(this), i = this.widths[this.widths.length - 1], c = [], t = f = 0; 0 <= a ? f < a : f > a; t = 0 <= a ? ++f : --f) c.push(this.widths.push(i));
    return c;
  }, r.prototype.forGlyph = function(e) {
    return e in this.metrics ? this.metrics[e] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[e - this.metrics.length] };
  }, r;
})(), Zc = [].slice, F2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "glyf", r.prototype.parse = function() {
    return this.cache = {};
  }, r.prototype.glyphFor = function(e) {
    var t, i, a, s, f, l, c, d, m, N;
    return e in this.cache ? this.cache[e] : (s = this.file.loca, t = this.file.contents, i = s.indexOf(e), (a = s.lengthOf(e)) === 0 ? this.cache[e] = null : (t.pos = this.offset + i, f = (l = new ai(t.read(a))).readShort(), d = l.readShort(), N = l.readShort(), c = l.readShort(), m = l.readShort(), this.cache[e] = f === -1 ? new O2(l, d, N, c, m) : new E2(l, f, d, N, c, m), this.cache[e]));
  }, r.prototype.encode = function(e, t, i) {
    var a, s, f, l, c;
    for (f = [], s = [], l = 0, c = t.length; l < c; l++) a = e[t[l]], s.push(f.length), a && (f = f.concat(a.encode(i)));
    return s.push(f.length), { table: f, offsets: s };
  }, r;
})(), E2 = (function() {
  function r(e, t, i, a, s, f) {
    this.raw = e, this.numberOfContours = t, this.xMin = i, this.yMin = a, this.xMax = s, this.yMax = f, this.compound = !1;
  }
  return r.prototype.encode = function() {
    return this.raw.data;
  }, r;
})(), O2 = (function() {
  function r(e, t, i, a, s) {
    var f, l;
    for (this.raw = e, this.xMin = t, this.yMin = i, this.xMax = a, this.yMax = s, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], f = this.raw; l = f.readShort(), this.glyphOffsets.push(f.pos), this.glyphIDs.push(f.readUInt16()), 32 & l; ) f.pos += 1 & l ? 4 : 2, 128 & l ? f.pos += 8 : 64 & l ? f.pos += 4 : 8 & l && (f.pos += 2);
  }
  return r.prototype.encode = function() {
    var e, t, i;
    for (t = new ai(Zc.call(this.raw.data)), e = 0, i = this.glyphIDs.length; e < i; ++e) t.pos = this.glyphOffsets[e];
    return t.data;
  }, r;
})(), M2 = (function() {
  function r() {
    return r.__super__.constructor.apply(this, arguments);
  }
  return bn(r, an), r.prototype.tag = "loca", r.prototype.parse = function(e) {
    var t, i;
    return e.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = t === 0 ? (function() {
      var a, s;
      for (s = [], i = 0, a = this.length; i < a; i += 2) s.push(2 * e.readUInt16());
      return s;
    }).call(this) : (function() {
      var a, s;
      for (s = [], i = 0, a = this.length; i < a; i += 4) s.push(e.readUInt32());
      return s;
    }).call(this);
  }, r.prototype.indexOf = function(e) {
    return this.offsets[e];
  }, r.prototype.lengthOf = function(e) {
    return this.offsets[e + 1] - this.offsets[e];
  }, r.prototype.encode = function(e, t) {
    for (var i = new Uint32Array(this.offsets.length), a = 0, s = 0, f = 0; f < i.length; ++f) if (i[f] = a, s < t.length && t[s] == f) {
      ++s, i[f] = a;
      var l = this.offsets[f], c = this.offsets[f + 1] - l;
      c > 0 && (a += c);
    }
    for (var d = new Array(4 * i.length), m = 0; m < i.length; ++m) d[4 * m + 3] = 255 & i[m], d[4 * m + 2] = (65280 & i[m]) >> 8, d[4 * m + 1] = (16711680 & i[m]) >> 16, d[4 * m] = (4278190080 & i[m]) >> 24;
    return d;
  }, r;
})(), j2 = (function() {
  function r(e) {
    this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return r.prototype.generateCmap = function() {
    var e, t, i, a, s;
    for (t in a = this.font.cmap.tables[0].codeMap, e = {}, s = this.subset) i = s[t], e[t] = a[i];
    return e;
  }, r.prototype.glyphsFor = function(e) {
    var t, i, a, s, f, l, c;
    for (a = {}, f = 0, l = e.length; f < l; f++) a[s = e[f]] = this.font.glyf.glyphFor(s);
    for (s in t = [], a) (i = a[s]) != null && i.compound && t.push.apply(t, i.glyphIDs);
    if (t.length > 0) for (s in c = this.glyphsFor(t)) i = c[s], a[s] = i;
    return a;
  }, r.prototype.encode = function(e, t) {
    var i, a, s, f, l, c, d, m, N, P, p, j, E, R, k;
    for (a in i = Kc.encode(this.generateCmap(), "unicode"), f = this.glyphsFor(e), p = { 0: 0 }, k = i.charMap) p[(c = k[a]).old] = c.new;
    for (j in P = i.maxGlyphID, f) j in p || (p[j] = P++);
    return m = (function(V) {
      var Y, U;
      for (Y in U = {}, V) U[V[Y]] = Y;
      return U;
    })(p), N = Object.keys(m).sort(function(V, Y) {
      return V - Y;
    }), E = (function() {
      var V, Y, U;
      for (U = [], V = 0, Y = N.length; V < Y; V++) l = N[V], U.push(m[l]);
      return U;
    })(), s = this.font.glyf.encode(f, E, p), d = this.font.loca.encode(s.offsets, E), R = { cmap: this.font.cmap.raw(), glyf: s.table, loca: d, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(t) }, this.font.os2.exists && (R["OS/2"] = this.font.os2.raw()), this.font.directory.encode(R);
  }, r;
})();
Rt.API.PDFObject = (function() {
  var r;
  function e() {
  }
  return r = function(t, i) {
    return (Array(i + 1).join("0") + t).slice(-i);
  }, e.convert = function(t) {
    var i, a, s, f;
    if (Array.isArray(t)) return "[" + (function() {
      var l, c, d;
      for (d = [], l = 0, c = t.length; l < c; l++) i = t[l], d.push(e.convert(i));
      return d;
    })().join(" ") + "]";
    if (typeof t == "string") return "/" + t;
    if (t != null && t.isString) return "(" + t + ")";
    if (t instanceof Date) return "(D:" + r(t.getUTCFullYear(), 4) + r(t.getUTCMonth(), 2) + r(t.getUTCDate(), 2) + r(t.getUTCHours(), 2) + r(t.getUTCMinutes(), 2) + r(t.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(t) === "[object Object]") {
      for (a in s = ["<<"], t) f = t[a], s.push("/" + a + " " + e.convert(f));
      return s.push(">>"), s.join(`
`);
    }
    return "" + t;
  }, e;
})();
const B2 = { class: "size-full bg-slate-100 overflow-hidden" }, R2 = {
  key: 0,
  class: "size-full relative"
}, T2 = { class: "absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none" }, D2 = { class: "text-lg font-bold text-gray-800 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-200 pointer-events-auto" }, q2 = { class: "absolute bottom-3 left-3 right-3 z-10 flex gap-2 items-center" }, U2 = { class: "bg-white px-2 py-1.5 rounded-lg shadow-sm text-sm text-gray-600 border border-gray-200 truncate max-w-32" }, z2 = ["disabled"], H2 = ["viewBox"], W2 = ["x1", "y1", "x2", "y2"], G2 = ["transform", "onMousedown"], V2 = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"], Y2 = {
  fill: "white",
  "text-anchor": "middle",
  "dominant-baseline": "middle",
  "font-size": "10",
  "font-weight": "500"
}, J2 = ["y"], $2 = {
  key: 1,
  class: "size-full flex items-center justify-center"
}, Ni = 800, Li = 600, ja = 10, X2 = 80, K2 = 80, sc = 60, Z2 = /* @__PURE__ */ oc({
  __name: "View",
  props: {
    selectedResult: {},
    sendTextMessage: { type: Function },
    onUpdateResult: { type: Function }
  },
  setup(r) {
    const e = r, t = Ni / 2, i = Li / 2, a = Ea(null), s = Ea(""), f = Ea(null), l = Ea(null), c = Ea(null), d = Ba(() => {
      if (!a.value) return "";
      const H = f.value || a.value.centerNodeId, w = a.value.nodes.find((A) => A.id === H);
      return (w == null ? void 0 : w.text) || "";
    });
    Uh(
      () => e.selectedResult,
      (H) => {
        c.value || (H == null ? void 0 : H.toolName) === Th && H.data && (a.value = JSON.parse(JSON.stringify(H.data)));
      },
      { immediate: !0, deep: !0 }
    );
    function m(H) {
      var w;
      return (w = a.value) == null ? void 0 : w.nodes.find((A) => A.id === H);
    }
    function N(H) {
      if (!H) return [""];
      if (H.length <= ja) return [H];
      const w = [];
      let A = H;
      for (; A.length > 0; ) {
        if (A.length <= ja) {
          w.push(A);
          break;
        }
        if (w.push(A.slice(0, ja)), A = A.slice(ja), w.length >= 3) {
          A.length > 0 && (w[2] = w[2].slice(0, ja - 2) + "..");
          break;
        }
      }
      return w;
    }
    function P(H) {
      const w = N(H), A = Math.max(...w.map((et) => et.length)), B = Math.max(60, A * 8 + 16), q = Math.max(28, w.length * 14 + 12);
      return { w: B, h: q };
    }
    function p(H, w) {
      return -(N(H).length * 14) / 2 + 7 + w * 14;
    }
    function j(H) {
      const w = l.value;
      if (!w) return { x: 0, y: 0 };
      const A = w.getBoundingClientRect(), B = Ni / A.width, q = Li / A.height;
      return {
        x: (H.clientX - A.left) * B,
        y: (H.clientY - A.top) * q
      };
    }
    function E(H, w) {
      c.value = w.id, f.value = w.id;
    }
    function R(H) {
      if (!c.value || !a.value) return;
      const w = j(H), A = a.value.nodes.find((B) => B.id === c.value);
      if (A) {
        const B = vt(w.x, w.y);
        A.x = B.x, A.y = B.y, a.value = { ...a.value };
      }
    }
    function k() {
      c.value && e.onUpdateResult && e.selectedResult && a.value && e.onUpdateResult({
        ...e.selectedResult,
        data: a.value
      }), c.value = null;
    }
    function V() {
      var K;
      const H = s.value.trim();
      if (!H || !a.value) return;
      const w = a.value, A = f.value || w.centerNodeId;
      if (!A) return;
      const B = w.nodes.find((st) => st.id === A);
      if (!B) return;
      const q = ((K = B.children) == null ? void 0 : K.length) || 0, et = Y(B, q), it = `node_${Date.now()}`, at = {
        id: it,
        text: H,
        x: et.x,
        y: et.y,
        children: []
      };
      w.nodes.push(at), w.connections.push({ from: A, to: it }), B.children || (B.children = []), B.children.push(it), s.value = "", a.value = { ...w }, e.onUpdateResult && e.selectedResult && e.onUpdateResult({
        ...e.selectedResult,
        data: a.value
      });
    }
    function Y(H, w) {
      const A = H.x - t, B = H.y - i, q = Math.atan2(B, A), et = Math.abs(A) < 10 && Math.abs(B) < 10, it = w + 1;
      if (et) {
        const x = 2 * Math.PI * w / Math.max(it, 4) - Math.PI / 2, M = 140;
        return vt(
          t + M * Math.cos(x),
          i + M * Math.sin(x)
        );
      }
      const at = Math.PI * 0.6, K = q - at / 2, st = it > 1 ? at / it : 0, xt = K + st * w + st / 2, ft = 90;
      return vt(
        H.x + ft * Math.cos(xt),
        H.y + ft * Math.sin(xt)
      );
    }
    function U() {
      if (!a.value) return;
      const H = a.value, w = H.centerNodeId;
      if (!w) return;
      console.log("[Rebalance] Starting...", H.nodes.length, "nodes");
      const A = /* @__PURE__ */ new Map();
      for (const it of H.nodes)
        A.set(it.id, it);
      const B = A.get(w);
      if (!B) return;
      B.x = t, B.y = i;
      const q = /* @__PURE__ */ new Set([w]);
      function et(it, at) {
        const K = A.get(it);
        if (!(K != null && K.children)) return;
        const st = K.children.filter((ft) => !q.has(ft));
        if (st.length === 0) return;
        st.forEach((ft) => q.add(ft));
        const xt = at === 1 ? 140 : 90 * Math.pow(0.9, at - 2);
        if (at === 1)
          st.forEach((ft, x) => {
            const M = 2 * Math.PI * x / st.length - Math.PI / 2, T = A.get(ft);
            if (T) {
              const W = vt(
                K.x + xt * Math.cos(M),
                K.y + xt * Math.sin(M)
              );
              T.x = W.x, T.y = W.y;
            }
          });
        else {
          const ft = K.x - t, x = K.y - i, M = Math.atan2(x, ft), T = Math.PI * 0.5, W = st.length > 1 ? T / (st.length - 1) : 0, $ = M - T / 2;
          st.forEach((tt, lt) => {
            const ut = $ + W * lt, gt = A.get(tt);
            if (gt) {
              const At = vt(
                K.x + xt * Math.cos(ut),
                K.y + xt * Math.sin(ut)
              );
              gt.x = At.x, gt.y = At.y;
            }
          });
        }
        st.forEach((ft) => et(ft, at + 1));
      }
      et(w, 1), a.value = { ...H, nodes: Array.from(A.values()) }, console.log("[Rebalance] Done"), e.onUpdateResult && e.selectedResult && e.onUpdateResult({
        ...e.selectedResult,
        data: a.value
      });
    }
    function ot(H, w, A) {
      return Math.max(w, Math.min(A, H));
    }
    function vt(H, w) {
      return {
        x: ot(H, sc, Ni - sc),
        y: ot(w, X2, Li - K2)
      };
    }
    async function ht() {
      const H = l.value;
      if (!H) throw new Error("SVG not found");
      const w = document.createElement("canvas"), A = 2;
      w.width = Ni * A, w.height = Li * A;
      const B = w.getContext("2d");
      if (!B) throw new Error("Canvas context not available");
      B.fillStyle = "#f1f5f9", B.fillRect(0, 0, w.width, w.height), B.scale(A, A);
      const q = new XMLSerializer().serializeToString(H), et = new Blob([q], { type: "image/svg+xml;charset=utf-8" }), it = URL.createObjectURL(et), at = new Image();
      return await new Promise((K, st) => {
        at.onload = () => K(), at.onerror = st, at.src = it;
      }), B.drawImage(at, 0, 0, Ni, Li), URL.revokeObjectURL(it), w;
    }
    async function X() {
      var H;
      try {
        const A = (await ht()).toDataURL("image/png"), B = document.createElement("a");
        B.download = `${((H = a.value) == null ? void 0 : H.title) || "mindmap"}.png`, B.href = A, B.click();
      } catch (w) {
        console.error("PNG download failed:", w);
      }
    }
    async function D() {
      var H;
      try {
        const A = (await ht()).toDataURL("image/png"), B = new Rt({
          orientation: "landscape",
          unit: "mm",
          format: "a4"
        }), q = B.internal.pageSize.getWidth(), et = B.internal.pageSize.getHeight(), it = 10, at = q - it * 2, K = et - it * 2, st = Ni / Li;
        let xt = at, ft = xt / st;
        ft > K && (ft = K, xt = ft * st);
        const x = (q - xt) / 2, M = (et - ft) / 2;
        B.addImage(A, "PNG", x, M, xt, ft), B.save(`${((H = a.value) == null ? void 0 : H.title) || "mindmap"}.pdf`);
      } catch (w) {
        console.error("PDF download failed:", w);
      }
    }
    return (H, w) => (Mr(), jr("div", B2, [
      a.value ? (Mr(), jr("div", R2, [
        hr("div", T2, [
          hr("h2", D2, Zi(a.value.title), 1),
          hr("div", { class: "flex gap-2 pointer-events-auto" }, [
            hr("button", {
              onClick: X,
              class: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-3 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-emerald-700"
            }, " PNG "),
            hr("button", {
              onClick: D,
              class: "bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-3 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-rose-700"
            }, " PDF "),
            hr("button", {
              onClick: U,
              class: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700"
            }, " 整理 ")
          ])
        ]),
        hr("div", q2, [
          hr("span", U2, Zi(d.value), 1),
          w[1] || (w[1] = hr("span", { class: "text-gray-400" }, "→", -1)),
          zh(hr("input", {
            "onUpdate:modelValue": w[0] || (w[0] = (A) => s.value = A),
            type: "text",
            placeholder: "新しいノード...",
            class: "flex-1 px-3 py-1.5 rounded-lg border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
            onKeydown: Hh(V, ["enter"])
          }, null, 544), [
            [Wh, s.value]
          ]),
          hr("button", {
            onClick: V,
            disabled: !s.value.trim(),
            class: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-semibold transition-all border border-indigo-700 disabled:border-gray-400"
          }, " 追加 ", 8, z2)
        ]),
        (Mr(), jr("svg", {
          ref_key: "svgRef",
          ref: l,
          class: "size-full",
          viewBox: `0 0 ${Ni} ${Li}`,
          preserveAspectRatio: "xMidYMid meet",
          onMousemove: R,
          onMouseup: k,
          onMouseleave: k
        }, [
          hr("g", null, [
            (Mr(!0), jr(No, null, Lo(a.value.connections, (A) => {
              var B, q, et, it;
              return Mr(), jr("line", {
                key: `${A.from}-${A.to}`,
                x1: ((B = m(A.from)) == null ? void 0 : B.x) ?? 0,
                y1: ((q = m(A.from)) == null ? void 0 : q.y) ?? 0,
                x2: ((et = m(A.to)) == null ? void 0 : et.x) ?? 0,
                y2: ((it = m(A.to)) == null ? void 0 : it.y) ?? 0,
                stroke: "#9CA3AF",
                "stroke-width": "2"
              }, null, 8, W2);
            }), 128))
          ]),
          (Mr(!0), jr(No, null, Lo(a.value.nodes, (A) => (Mr(), jr("g", {
            key: A.id,
            transform: `translate(${A.x}, ${A.y})`,
            class: Vh(c.value === A.id ? "cursor-grabbing" : "cursor-grab"),
            onMousedown: Gh((B) => E(B, A), ["prevent"])
          }, [
            hr("rect", {
              x: -P(A.text).w / 2,
              y: -P(A.text).h / 2,
              width: P(A.text).w,
              height: P(A.text).h,
              rx: "6",
              fill: A.color || "#6366F1",
              stroke: f.value === A.id ? "#FCD34D" : "none",
              "stroke-width": f.value === A.id ? 3 : 0
            }, null, 8, V2),
            hr("text", Y2, [
              (Mr(!0), jr(No, null, Lo(N(A.text), (B, q) => (Mr(), jr("tspan", {
                key: q,
                x: "0",
                y: p(A.text, q)
              }, Zi(B), 9, J2))), 128))
            ])
          ], 42, G2))), 128))
        ], 40, H2))
      ])) : (Mr(), jr("div", $2, [...w[2] || (w[2] = [
        hr("p", { class: "text-gray-400" }, "データがありません", -1)
      ])]))
    ]));
  }
}), Q2 = { class: "p-3 bg-indigo-50 rounded-lg text-center" }, t5 = { class: "text-indigo-700 font-medium text-sm truncate" }, e5 = {
  key: 0,
  class: "text-xs text-gray-500 mt-1"
}, r5 = {
  key: 1,
  class: "text-xs text-amber-600 mt-1"
}, n5 = /* @__PURE__ */ oc({
  __name: "Preview",
  props: {
    result: {}
  },
  setup(r) {
    const e = r, t = Ba(() => e.result.data), i = Ba(() => {
      var f;
      return ((f = t.value) == null ? void 0 : f.nodes) && t.value.nodes.length > 0;
    }), a = Ba(() => {
      var f;
      return ((f = t.value) == null ? void 0 : f.title) || "Mind Map";
    }), s = Ba(() => {
      var f, l;
      return ((l = (f = t.value) == null ? void 0 : f.nodes) == null ? void 0 : l.length) || 0;
    });
    return (f, l) => (Mr(), jr("div", Q2, [
      l[0] || (l[0] = hr("div", { class: "text-2xl mb-1" }, "🧠", -1)),
      hr("div", t5, Zi(a.value), 1),
      i.value ? (Mr(), jr("div", e5, Zi(s.value) + " ideas ", 1)) : (Mr(), jr("div", r5, Zi(e.result.message || "No data"), 1))
    ]));
  }
}), i5 = {
  ...qh,
  viewComponent: Z2,
  previewComponent: n5,
  samples: Dh
}, u5 = { plugin: i5 };
export {
  Ae as _,
  n5 as a,
  Z2 as b,
  u5 as i,
  i5 as p
};
