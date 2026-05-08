import { g as wr, r as $r, a as qe } from "./preloadHelper-Ceo5xg-P.js";
var Ge = {}
    , ze = {};
ze.byteLength = ut;
ze.toByteArray = at;
ze.fromByteArray = ht;
var Le = []
    , Be = []
    , it = typeof Uint8Array < "u" ? Uint8Array : Array
    , Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ke = 0, ot = Qe.length; ke < ot; ++ke)
    Le[ke] = Qe[ke],
        Be[Qe.charCodeAt(ke)] = ke;
Be[45] = 62;
Be[95] = 63;
function Hr(x) {
    var h = x.length;
    if (h % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var d = x.indexOf("=");
    d === -1 && (d = h);
    var b = d === h ? 0 : 4 - d % 4;
    return [d, b]
}
function ut(x) {
    var h = Hr(x)
        , d = h[0]
        , b = h[1];
    return (d + b) * 3 / 4 - b
}
function ft(x, h, d) {
    return (h + d) * 3 / 4 - d
}
function at(x) {
    var h, d = Hr(x), b = d[0], S = d[1], c = new it(ft(x, b, S)), y = 0, u = S > 0 ? b - 4 : b, m;
    for (m = 0; m < u; m += 4)
        h = Be[x.charCodeAt(m)] << 18 | Be[x.charCodeAt(m + 1)] << 12 | Be[x.charCodeAt(m + 2)] << 6 | Be[x.charCodeAt(m + 3)],
            c[y++] = h >> 16 & 255,
            c[y++] = h >> 8 & 255,
            c[y++] = h & 255;
    return S === 2 && (h = Be[x.charCodeAt(m)] << 2 | Be[x.charCodeAt(m + 1)] >> 4,
        c[y++] = h & 255),
        S === 1 && (h = Be[x.charCodeAt(m)] << 10 | Be[x.charCodeAt(m + 1)] << 4 | Be[x.charCodeAt(m + 2)] >> 2,
            c[y++] = h >> 8 & 255,
            c[y++] = h & 255),
        c
}
function lt(x) {
    return Le[x >> 18 & 63] + Le[x >> 12 & 63] + Le[x >> 6 & 63] + Le[x & 63]
}
function st(x, h, d) {
    for (var b, S = [], c = h; c < d; c += 3)
        b = (x[c] << 16 & 16711680) + (x[c + 1] << 8 & 65280) + (x[c + 2] & 255),
            S.push(lt(b));
    return S.join("")
}
function ht(x) {
    for (var h, d = x.length, b = d % 3, S = [], c = 16383, y = 0, u = d - b; y < u; y += c)
        S.push(st(x, y, y + c > u ? u : y + c));
    return b === 1 ? (h = x[d - 1],
        S.push(Le[h >> 2] + Le[h << 4 & 63] + "==")) : b === 2 && (h = (x[d - 2] << 8) + x[d - 1],
            S.push(Le[h >> 10] + Le[h >> 4 & 63] + Le[h << 2 & 63] + "=")),
        S.join("")
}
var gr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
gr.read = function (x, h, d, b, S) {
    var c, y, u = S * 8 - b - 1, m = (1 << u) - 1, N = m >> 1, D = -7, U = d ? S - 1 : 0, k = d ? -1 : 1, G = x[h + U];
    for (U += k,
        c = G & (1 << -D) - 1,
        G >>= -D,
        D += u; D > 0; c = c * 256 + x[h + U],
        U += k,
        D -= 8)
        ;
    for (y = c & (1 << -D) - 1,
        c >>= -D,
        D += b; D > 0; y = y * 256 + x[h + U],
        U += k,
        D -= 8)
        ;
    if (c === 0)
        c = 1 - N;
    else {
        if (c === m)
            return y ? NaN : (G ? -1 : 1) * (1 / 0);
        y = y + Math.pow(2, b),
            c = c - N
    }
    return (G ? -1 : 1) * y * Math.pow(2, c - b)
}
    ;
gr.write = function (x, h, d, b, S, c) {
    var y, u, m, N = c * 8 - S - 1, D = (1 << N) - 1, U = D >> 1, k = S === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, G = b ? 0 : c - 1, H = b ? 1 : -1, Y = h < 0 || h === 0 && 1 / h < 0 ? 1 : 0;
    for (h = Math.abs(h),
        isNaN(h) || h === 1 / 0 ? (u = isNaN(h) ? 1 : 0,
            y = D) : (y = Math.floor(Math.log(h) / Math.LN2),
                h * (m = Math.pow(2, -y)) < 1 && (y--,
                    m *= 2),
                y + U >= 1 ? h += k / m : h += k * Math.pow(2, 1 - U),
                h * m >= 2 && (y++,
                    m /= 2),
                y + U >= D ? (u = 0,
                    y = D) : y + U >= 1 ? (u = (h * m - 1) * Math.pow(2, S),
                        y = y + U) : (u = h * Math.pow(2, U - 1) * Math.pow(2, S),
                            y = 0)); S >= 8; x[d + G] = u & 255,
                            G += H,
                            u /= 256,
        S -= 8)
        ;
    for (y = y << S | u,
        N += S; N > 0; x[d + G] = y & 255,
        G += H,
        y /= 256,
        N -= 8)
        ;
    x[d + G - H] |= Y * 128
}
    ;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (x) {
    const h = ze
        , d = gr
        , b = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    x.Buffer = u,
        x.SlowBuffer = B,
        x.INSPECT_MAX_BYTES = 50;
    const S = 2147483647;
    x.kMaxLength = S,
        u.TYPED_ARRAY_SUPPORT = c(),
        !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function c() {
        try {
            const i = new Uint8Array(1)
                , e = {
                    foo: function () {
                        return 42
                    }
                };
            return Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(i, e),
                i.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(u.prototype, "parent", {
        enumerable: !0,
        get: function () {
            if (u.isBuffer(this))
                return this.buffer
        }
    }),
        Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function () {
                if (u.isBuffer(this))
                    return this.byteOffset
            }
        });
    function y(i) {
        if (i > S)
            throw new RangeError('The value "' + i + '" is invalid for option "size"');
        const e = new Uint8Array(i);
        return Object.setPrototypeOf(e, u.prototype),
            e
    }
    function u(i, e, t) {
        if (typeof i == "number") {
            if (typeof e == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return U(i)
        }
        return m(i, e, t)
    }
    u.poolSize = 8192;
    function m(i, e, t) {
        if (typeof i == "string")
            return k(i, e);
        if (ArrayBuffer.isView(i))
            return H(i);
        if (i == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
        if (te(i, ArrayBuffer) || i && te(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (te(i, SharedArrayBuffer) || i && te(i.buffer, SharedArrayBuffer)))
            return Y(i, e, t);
        if (typeof i == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        const f = i.valueOf && i.valueOf();
        if (f != null && f !== i)
            return u.from(f, e, t);
        const g = $(i);
        if (g)
            return g;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
            return u.from(i[Symbol.toPrimitive]("string"), e, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i)
    }
    u.from = function (i, e, t) {
        return m(i, e, t)
    }
        ,
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array);
    function N(i) {
        if (typeof i != "number")
            throw new TypeError('"size" argument must be of type number');
        if (i < 0)
            throw new RangeError('The value "' + i + '" is invalid for option "size"')
    }
    function D(i, e, t) {
        return N(i),
            i <= 0 ? y(i) : e !== void 0 ? typeof t == "string" ? y(i).fill(e, t) : y(i).fill(e) : y(i)
    }
    u.alloc = function (i, e, t) {
        return D(i, e, t)
    }
        ;
    function U(i) {
        return N(i),
            y(i < 0 ? 0 : E(i) | 0)
    }
    u.allocUnsafe = function (i) {
        return U(i)
    }
        ,
        u.allocUnsafeSlow = function (i) {
            return U(i)
        }
        ;
    function k(i, e) {
        if ((typeof e != "string" || e === "") && (e = "utf8"),
            !u.isEncoding(e))
            throw new TypeError("Unknown encoding: " + e);
        const t = A(i, e) | 0;
        let f = y(t);
        const g = f.write(i, e);
        return g !== t && (f = f.slice(0, g)),
            f
    }
    function G(i) {
        const e = i.length < 0 ? 0 : E(i.length) | 0
            , t = y(e);
        for (let f = 0; f < e; f += 1)
            t[f] = i[f] & 255;
        return t
    }
    function H(i) {
        if (te(i, Uint8Array)) {
            const e = new Uint8Array(i);
            return Y(e.buffer, e.byteOffset, e.byteLength)
        }
        return G(i)
    }
    function Y(i, e, t) {
        if (e < 0 || i.byteLength < e)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (i.byteLength < e + (t || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let f;
        return e === void 0 && t === void 0 ? f = new Uint8Array(i) : t === void 0 ? f = new Uint8Array(i, e) : f = new Uint8Array(i, e, t),
            Object.setPrototypeOf(f, u.prototype),
            f
    }
    function $(i) {
        if (u.isBuffer(i)) {
            const e = E(i.length) | 0
                , t = y(e);
            return t.length === 0 || i.copy(t, 0, 0, e),
                t
        }
        if (i.length !== void 0)
            return typeof i.length != "number" || pe(i.length) ? y(0) : G(i);
        if (i.type === "Buffer" && Array.isArray(i.data))
            return G(i.data)
    }
    function E(i) {
        if (i >= S)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + S.toString(16) + " bytes");
        return i | 0
    }
    function B(i) {
        return +i != i && (i = 0),
            u.alloc(+i)
    }
    u.isBuffer = function (e) {
        return e != null && e._isBuffer === !0 && e !== u.prototype
    }
        ,
        u.compare = function (e, t) {
            if (te(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
                te(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
                !u.isBuffer(e) || !u.isBuffer(t))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t)
                return 0;
            let f = e.length
                , g = t.length;
            for (let F = 0, O = Math.min(f, g); F < O; ++F)
                if (e[F] !== t[F]) {
                    f = e[F],
                        g = t[F];
                    break
                }
            return f < g ? -1 : g < f ? 1 : 0
        }
        ,
        u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }
        ,
        u.concat = function (e, t) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (e.length === 0)
                return u.alloc(0);
            let f;
            if (t === void 0)
                for (t = 0,
                    f = 0; f < e.length; ++f)
                    t += e[f].length;
            const g = u.allocUnsafe(t);
            let F = 0;
            for (f = 0; f < e.length; ++f) {
                let O = e[f];
                if (te(O, Uint8Array))
                    F + O.length > g.length ? (u.isBuffer(O) || (O = u.from(O)),
                        O.copy(g, F)) : Uint8Array.prototype.set.call(g, O, F);
                else if (u.isBuffer(O))
                    O.copy(g, F);
                else
                    throw new TypeError('"list" argument must be an Array of Buffers');
                F += O.length
            }
            return g
        }
        ;
    function A(i, e) {
        if (u.isBuffer(i))
            return i.length;
        if (ArrayBuffer.isView(i) || te(i, ArrayBuffer))
            return i.byteLength;
        if (typeof i != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
        const t = i.length
            , f = arguments.length > 2 && arguments[2] === !0;
        if (!f && t === 0)
            return 0;
        let g = !1;
        for (; ;)
            switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return t;
                case "utf8":
                case "utf-8":
                    return re(i).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return t * 2;
                case "hex":
                    return t >>> 1;
                case "base64":
                    return De(i).length;
                default:
                    if (g)
                        return f ? -1 : re(i).length;
                    e = ("" + e).toLowerCase(),
                        g = !0
            }
    }
    u.byteLength = A;
    function p(i, e, t) {
        let f = !1;
        if ((e === void 0 || e < 0) && (e = 0),
            e > this.length || ((t === void 0 || t > this.length) && (t = this.length),
                t <= 0) || (t >>>= 0,
                    e >>>= 0,
                    t <= e))
            return "";
        for (i || (i = "utf8"); ;)
            switch (i) {
                case "hex":
                    return Re(this, e, t);
                case "utf8":
                case "utf-8":
                    return Ee(this, e, t);
                case "ascii":
                    return be(this, e, t);
                case "latin1":
                case "binary":
                    return ve(this, e, t);
                case "base64":
                    return ie(this, e, t);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return Se(this, e, t);
                default:
                    if (f)
                        throw new TypeError("Unknown encoding: " + i);
                    i = (i + "").toLowerCase(),
                        f = !0
            }
    }
    u.prototype._isBuffer = !0;
    function w(i, e, t) {
        const f = i[e];
        i[e] = i[t],
            i[t] = f
    }
    u.prototype.swap16 = function () {
        const e = this.length;
        if (e % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2)
            w(this, t, t + 1);
        return this
    }
        ,
        u.prototype.swap32 = function () {
            const e = this.length;
            if (e % 4 !== 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4)
                w(this, t, t + 3),
                    w(this, t + 1, t + 2);
            return this
        }
        ,
        u.prototype.swap64 = function () {
            const e = this.length;
            if (e % 8 !== 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8)
                w(this, t, t + 7),
                    w(this, t + 1, t + 6),
                    w(this, t + 2, t + 5),
                    w(this, t + 3, t + 4);
            return this
        }
        ,
        u.prototype.toString = function () {
            const e = this.length;
            return e === 0 ? "" : arguments.length === 0 ? Ee(this, 0, e) : p.apply(this, arguments)
        }
        ,
        u.prototype.toLocaleString = u.prototype.toString,
        u.prototype.equals = function (e) {
            if (!u.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e ? !0 : u.compare(this, e) === 0
        }
        ,
        u.prototype.inspect = function () {
            let e = "";
            const t = x.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
                this.length > t && (e += " ... "),
                "<Buffer " + e + ">"
        }
        ,
        b && (u.prototype[b] = u.prototype.inspect),
        u.prototype.compare = function (e, t, f, g, F) {
            if (te(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
                !u.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (t === void 0 && (t = 0),
                f === void 0 && (f = e ? e.length : 0),
                g === void 0 && (g = 0),
                F === void 0 && (F = this.length),
                t < 0 || f > e.length || g < 0 || F > this.length)
                throw new RangeError("out of range index");
            if (g >= F && t >= f)
                return 0;
            if (g >= F)
                return -1;
            if (t >= f)
                return 1;
            if (t >>>= 0,
                f >>>= 0,
                g >>>= 0,
                F >>>= 0,
                this === e)
                return 0;
            let O = F - g
                , z = f - t;
            const oe = Math.min(O, z)
                , le = this.slice(g, F)
                , he = e.slice(t, f);
            for (let ne = 0; ne < oe; ++ne)
                if (le[ne] !== he[ne]) {
                    O = le[ne],
                        z = he[ne];
                    break
                }
            return O < z ? -1 : z < O ? 1 : 0
        }
        ;
    function R(i, e, t, f, g) {
        if (i.length === 0)
            return -1;
        if (typeof t == "string" ? (f = t,
            t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648),
            t = +t,
            pe(t) && (t = g ? 0 : i.length - 1),
            t < 0 && (t = i.length + t),
            t >= i.length) {
            if (g)
                return -1;
            t = i.length - 1
        } else if (t < 0)
            if (g)
                t = 0;
            else
                return -1;
        if (typeof e == "string" && (e = u.from(e, f)),
            u.isBuffer(e))
            return e.length === 0 ? -1 : C(i, e, t, f, g);
        if (typeof e == "number")
            return e = e & 255,
                typeof Uint8Array.prototype.indexOf == "function" ? g ? Uint8Array.prototype.indexOf.call(i, e, t) : Uint8Array.prototype.lastIndexOf.call(i, e, t) : C(i, [e], t, f, g);
        throw new TypeError("val must be string, number or Buffer")
    }
    function C(i, e, t, f, g) {
        let F = 1
            , O = i.length
            , z = e.length;
        if (f !== void 0 && (f = String(f).toLowerCase(),
            f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
            if (i.length < 2 || e.length < 2)
                return -1;
            F = 2,
                O /= 2,
                z /= 2,
                t /= 2
        }
        function oe(he, ne) {
            return F === 1 ? he[ne] : he.readUInt16BE(ne * F)
        }
        let le;
        if (g) {
            let he = -1;
            for (le = t; le < O; le++)
                if (oe(i, le) === oe(e, he === -1 ? 0 : le - he)) {
                    if (he === -1 && (he = le),
                        le - he + 1 === z)
                        return he * F
                } else
                    he !== -1 && (le -= le - he),
                        he = -1
        } else
            for (t + z > O && (t = O - z),
                le = t; le >= 0; le--) {
                let he = !0;
                for (let ne = 0; ne < z; ne++)
                    if (oe(i, le + ne) !== oe(e, ne)) {
                        he = !1;
                        break
                    }
                if (he)
                    return le
            }
        return -1
    }
    u.prototype.includes = function (e, t, f) {
        return this.indexOf(e, t, f) !== -1
    }
        ,
        u.prototype.indexOf = function (e, t, f) {
            return R(this, e, t, f, !0)
        }
        ,
        u.prototype.lastIndexOf = function (e, t, f) {
            return R(this, e, t, f, !1)
        }
        ;
    function M(i, e, t, f) {
        t = Number(t) || 0;
        const g = i.length - t;
        f ? (f = Number(f),
            f > g && (f = g)) : f = g;
        const F = e.length;
        f > F / 2 && (f = F / 2);
        let O;
        for (O = 0; O < f; ++O) {
            const z = parseInt(e.substr(O * 2, 2), 16);
            if (pe(z))
                return O;
            i[t + O] = z
        }
        return O
    }
    function W(i, e, t, f) {
        return Ne(re(e, i.length - t), i, t, f)
    }
    function V(i, e, t, f) {
        return Ne(Ie(e), i, t, f)
    }
    function Z(i, e, t, f) {
        return Ne(De(e), i, t, f)
    }
    function v(i, e, t, f) {
        return Ne(Me(e, i.length - t), i, t, f)
    }
    u.prototype.write = function (e, t, f, g) {
        if (t === void 0)
            g = "utf8",
                f = this.length,
                t = 0;
        else if (f === void 0 && typeof t == "string")
            g = t,
                f = this.length,
                t = 0;
        else if (isFinite(t))
            t = t >>> 0,
                isFinite(f) ? (f = f >>> 0,
                    g === void 0 && (g = "utf8")) : (g = f,
                        f = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const F = this.length - t;
        if ((f === void 0 || f > F) && (f = F),
            e.length > 0 && (f < 0 || t < 0) || t > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        g || (g = "utf8");
        let O = !1;
        for (; ;)
            switch (g) {
                case "hex":
                    return M(this, e, t, f);
                case "utf8":
                case "utf-8":
                    return W(this, e, t, f);
                case "ascii":
                case "latin1":
                case "binary":
                    return V(this, e, t, f);
                case "base64":
                    return Z(this, e, t, f);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return v(this, e, t, f);
                default:
                    if (O)
                        throw new TypeError("Unknown encoding: " + g);
                    g = ("" + g).toLowerCase(),
                        O = !0
            }
    }
        ,
        u.prototype.toJSON = function () {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
    function ie(i, e, t) {
        return e === 0 && t === i.length ? h.fromByteArray(i) : h.fromByteArray(i.slice(e, t))
    }
    function Ee(i, e, t) {
        t = Math.min(i.length, t);
        const f = [];
        let g = e;
        for (; g < t;) {
            const F = i[g];
            let O = null
                , z = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
            if (g + z <= t) {
                let oe, le, he, ne;
                switch (z) {
                    case 1:
                        F < 128 && (O = F);
                        break;
                    case 2:
                        oe = i[g + 1],
                            (oe & 192) === 128 && (ne = (F & 31) << 6 | oe & 63,
                                ne > 127 && (O = ne));
                        break;
                    case 3:
                        oe = i[g + 1],
                            le = i[g + 2],
                            (oe & 192) === 128 && (le & 192) === 128 && (ne = (F & 15) << 12 | (oe & 63) << 6 | le & 63,
                                ne > 2047 && (ne < 55296 || ne > 57343) && (O = ne));
                        break;
                    case 4:
                        oe = i[g + 1],
                            le = i[g + 2],
                            he = i[g + 3],
                            (oe & 192) === 128 && (le & 192) === 128 && (he & 192) === 128 && (ne = (F & 15) << 18 | (oe & 63) << 12 | (le & 63) << 6 | he & 63,
                                ne > 65535 && ne < 1114112 && (O = ne))
                }
            }
            O === null ? (O = 65533,
                z = 1) : O > 65535 && (O -= 65536,
                    f.push(O >>> 10 & 1023 | 55296),
                    O = 56320 | O & 1023),
                f.push(O),
                g += z
        }
        return _e(f)
    }
    const ge = 4096;
    function _e(i) {
        const e = i.length;
        if (e <= ge)
            return String.fromCharCode.apply(String, i);
        let t = ""
            , f = 0;
        for (; f < e;)
            t += String.fromCharCode.apply(String, i.slice(f, f += ge));
        return t
    }
    function be(i, e, t) {
        let f = "";
        t = Math.min(i.length, t);
        for (let g = e; g < t; ++g)
            f += String.fromCharCode(i[g] & 127);
        return f
    }
    function ve(i, e, t) {
        let f = "";
        t = Math.min(i.length, t);
        for (let g = e; g < t; ++g)
            f += String.fromCharCode(i[g]);
        return f
    }
    function Re(i, e, t) {
        const f = i.length;
        (!e || e < 0) && (e = 0),
            (!t || t < 0 || t > f) && (t = f);
        let g = "";
        for (let F = e; F < t; ++F)
            g += Oe[i[F]];
        return g
    }
    function Se(i, e, t) {
        const f = i.slice(e, t);
        let g = "";
        for (let F = 0; F < f.length - 1; F += 2)
            g += String.fromCharCode(f[F] + f[F + 1] * 256);
        return g
    }
    u.prototype.slice = function (e, t) {
        const f = this.length;
        e = ~~e,
            t = t === void 0 ? f : ~~t,
            e < 0 ? (e += f,
                e < 0 && (e = 0)) : e > f && (e = f),
            t < 0 ? (t += f,
                t < 0 && (t = 0)) : t > f && (t = f),
            t < e && (t = e);
        const g = this.subarray(e, t);
        return Object.setPrototypeOf(g, u.prototype),
            g
    }
        ;
    function se(i, e, t) {
        if (i % 1 !== 0 || i < 0)
            throw new RangeError("offset is not uint");
        if (i + e > t)
            throw new RangeError("Trying to access beyond buffer length")
    }
    u.prototype.readUintLE = u.prototype.readUIntLE = function (e, t, f) {
        e = e >>> 0,
            t = t >>> 0,
            f || se(e, t, this.length);
        let g = this[e]
            , F = 1
            , O = 0;
        for (; ++O < t && (F *= 256);)
            g += this[e + O] * F;
        return g
    }
        ,
        u.prototype.readUintBE = u.prototype.readUIntBE = function (e, t, f) {
            e = e >>> 0,
                t = t >>> 0,
                f || se(e, t, this.length);
            let g = this[e + --t]
                , F = 1;
            for (; t > 0 && (F *= 256);)
                g += this[e + --t] * F;
            return g
        }
        ,
        u.prototype.readUint8 = u.prototype.readUInt8 = function (e, t) {
            return e = e >>> 0,
                t || se(e, 1, this.length),
                this[e]
        }
        ,
        u.prototype.readUint16LE = u.prototype.readUInt16LE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 2, this.length),
                this[e] | this[e + 1] << 8
        }
        ,
        u.prototype.readUint16BE = u.prototype.readUInt16BE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 2, this.length),
                this[e] << 8 | this[e + 1]
        }
        ,
        u.prototype.readUint32LE = u.prototype.readUInt32LE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 4, this.length),
                (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
        }
        ,
        u.prototype.readUint32BE = u.prototype.readUInt32BE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 4, this.length),
                this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        u.prototype.readBigUInt64LE = me(function (e) {
            e = e >>> 0,
                j(e, "offset");
            const t = this[e]
                , f = this[e + 7];
            (t === void 0 || f === void 0) && K(e, this.length - 8);
            const g = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24
                , F = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + f * 2 ** 24;
            return BigInt(g) + (BigInt(F) << BigInt(32))
        }),
        u.prototype.readBigUInt64BE = me(function (e) {
            e = e >>> 0,
                j(e, "offset");
            const t = this[e]
                , f = this[e + 7];
            (t === void 0 || f === void 0) && K(e, this.length - 8);
            const g = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]
                , F = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + f;
            return (BigInt(g) << BigInt(32)) + BigInt(F)
        }),
        u.prototype.readIntLE = function (e, t, f) {
            e = e >>> 0,
                t = t >>> 0,
                f || se(e, t, this.length);
            let g = this[e]
                , F = 1
                , O = 0;
            for (; ++O < t && (F *= 256);)
                g += this[e + O] * F;
            return F *= 128,
                g >= F && (g -= Math.pow(2, 8 * t)),
                g
        }
        ,
        u.prototype.readIntBE = function (e, t, f) {
            e = e >>> 0,
                t = t >>> 0,
                f || se(e, t, this.length);
            let g = t
                , F = 1
                , O = this[e + --g];
            for (; g > 0 && (F *= 256);)
                O += this[e + --g] * F;
            return F *= 128,
                O >= F && (O -= Math.pow(2, 8 * t)),
                O
        }
        ,
        u.prototype.readInt8 = function (e, t) {
            return e = e >>> 0,
                t || se(e, 1, this.length),
                this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
        }
        ,
        u.prototype.readInt16LE = function (e, t) {
            e = e >>> 0,
                t || se(e, 2, this.length);
            const f = this[e] | this[e + 1] << 8;
            return f & 32768 ? f | 4294901760 : f
        }
        ,
        u.prototype.readInt16BE = function (e, t) {
            e = e >>> 0,
                t || se(e, 2, this.length);
            const f = this[e + 1] | this[e] << 8;
            return f & 32768 ? f | 4294901760 : f
        }
        ,
        u.prototype.readInt32LE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 4, this.length),
                this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        u.prototype.readInt32BE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 4, this.length),
                this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        u.prototype.readBigInt64LE = me(function (e) {
            e = e >>> 0,
                j(e, "offset");
            const t = this[e]
                , f = this[e + 7];
            (t === void 0 || f === void 0) && K(e, this.length - 8);
            const g = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (f << 24);
            return (BigInt(g) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
        }),
        u.prototype.readBigInt64BE = me(function (e) {
            e = e >>> 0,
                j(e, "offset");
            const t = this[e]
                , f = this[e + 7];
            (t === void 0 || f === void 0) && K(e, this.length - 8);
            const g = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
            return (BigInt(g) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + f)
        }),
        u.prototype.readFloatLE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 4, this.length),
                d.read(this, e, !0, 23, 4)
        }
        ,
        u.prototype.readFloatBE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 4, this.length),
                d.read(this, e, !1, 23, 4)
        }
        ,
        u.prototype.readDoubleLE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 8, this.length),
                d.read(this, e, !0, 52, 8)
        }
        ,
        u.prototype.readDoubleBE = function (e, t) {
            return e = e >>> 0,
                t || se(e, 8, this.length),
                d.read(this, e, !1, 52, 8)
        }
        ;
    function de(i, e, t, f, g, F) {
        if (!u.isBuffer(i))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > g || e < F)
            throw new RangeError('"value" argument is out of bounds');
        if (t + f > i.length)
            throw new RangeError("Index out of range")
    }
    u.prototype.writeUintLE = u.prototype.writeUIntLE = function (e, t, f, g) {
        if (e = +e,
            t = t >>> 0,
            f = f >>> 0,
            !g) {
            const z = Math.pow(2, 8 * f) - 1;
            de(this, e, t, f, z, 0)
        }
        let F = 1
            , O = 0;
        for (this[t] = e & 255; ++O < f && (F *= 256);)
            this[t + O] = e / F & 255;
        return t + f
    }
        ,
        u.prototype.writeUintBE = u.prototype.writeUIntBE = function (e, t, f, g) {
            if (e = +e,
                t = t >>> 0,
                f = f >>> 0,
                !g) {
                const z = Math.pow(2, 8 * f) - 1;
                de(this, e, t, f, z, 0)
            }
            let F = f - 1
                , O = 1;
            for (this[t + F] = e & 255; --F >= 0 && (O *= 256);)
                this[t + F] = e / O & 255;
            return t + f
        }
        ,
        u.prototype.writeUint8 = u.prototype.writeUInt8 = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 1, 255, 0),
                this[t] = e & 255,
                t + 1
        }
        ,
        u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 2, 65535, 0),
                this[t] = e & 255,
                this[t + 1] = e >>> 8,
                t + 2
        }
        ,
        u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 2, 65535, 0),
                this[t] = e >>> 8,
                this[t + 1] = e & 255,
                t + 2
        }
        ,
        u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 4, 4294967295, 0),
                this[t + 3] = e >>> 24,
                this[t + 2] = e >>> 16,
                this[t + 1] = e >>> 8,
                this[t] = e & 255,
                t + 4
        }
        ,
        u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 4, 4294967295, 0),
                this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = e & 255,
                t + 4
        }
        ;
    function xe(i, e, t, f, g) {
        s(e, f, g, i, t, 7);
        let F = Number(e & BigInt(4294967295));
        i[t++] = F,
            F = F >> 8,
            i[t++] = F,
            F = F >> 8,
            i[t++] = F,
            F = F >> 8,
            i[t++] = F;
        let O = Number(e >> BigInt(32) & BigInt(4294967295));
        return i[t++] = O,
            O = O >> 8,
            i[t++] = O,
            O = O >> 8,
            i[t++] = O,
            O = O >> 8,
            i[t++] = O,
            t
    }
    function Ce(i, e, t, f, g) {
        s(e, f, g, i, t, 7);
        let F = Number(e & BigInt(4294967295));
        i[t + 7] = F,
            F = F >> 8,
            i[t + 6] = F,
            F = F >> 8,
            i[t + 5] = F,
            F = F >> 8,
            i[t + 4] = F;
        let O = Number(e >> BigInt(32) & BigInt(4294967295));
        return i[t + 3] = O,
            O = O >> 8,
            i[t + 2] = O,
            O = O >> 8,
            i[t + 1] = O,
            O = O >> 8,
            i[t] = O,
            t + 8
    }
    u.prototype.writeBigUInt64LE = me(function (e, t = 0) {
        return xe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
        u.prototype.writeBigUInt64BE = me(function (e, t = 0) {
            return Ce(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }),
        u.prototype.writeIntLE = function (e, t, f, g) {
            if (e = +e,
                t = t >>> 0,
                !g) {
                const oe = Math.pow(2, 8 * f - 1);
                de(this, e, t, f, oe - 1, -oe)
            }
            let F = 0
                , O = 1
                , z = 0;
            for (this[t] = e & 255; ++F < f && (O *= 256);)
                e < 0 && z === 0 && this[t + F - 1] !== 0 && (z = 1),
                    this[t + F] = (e / O >> 0) - z & 255;
            return t + f
        }
        ,
        u.prototype.writeIntBE = function (e, t, f, g) {
            if (e = +e,
                t = t >>> 0,
                !g) {
                const oe = Math.pow(2, 8 * f - 1);
                de(this, e, t, f, oe - 1, -oe)
            }
            let F = f - 1
                , O = 1
                , z = 0;
            for (this[t + F] = e & 255; --F >= 0 && (O *= 256);)
                e < 0 && z === 0 && this[t + F + 1] !== 0 && (z = 1),
                    this[t + F] = (e / O >> 0) - z & 255;
            return t + f
        }
        ,
        u.prototype.writeInt8 = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 1, 127, -128),
                e < 0 && (e = 255 + e + 1),
                this[t] = e & 255,
                t + 1
        }
        ,
        u.prototype.writeInt16LE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 2, 32767, -32768),
                this[t] = e & 255,
                this[t + 1] = e >>> 8,
                t + 2
        }
        ,
        u.prototype.writeInt16BE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 2, 32767, -32768),
                this[t] = e >>> 8,
                this[t + 1] = e & 255,
                t + 2
        }
        ,
        u.prototype.writeInt32LE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 4, 2147483647, -2147483648),
                this[t] = e & 255,
                this[t + 1] = e >>> 8,
                this[t + 2] = e >>> 16,
                this[t + 3] = e >>> 24,
                t + 4
        }
        ,
        u.prototype.writeInt32BE = function (e, t, f) {
            return e = +e,
                t = t >>> 0,
                f || de(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = e & 255,
                t + 4
        }
        ,
        u.prototype.writeBigInt64LE = me(function (e, t = 0) {
            return xe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }),
        u.prototype.writeBigInt64BE = me(function (e, t = 0) {
            return Ce(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        });
    function Ue(i, e, t, f, g, F) {
        if (t + f > i.length)
            throw new RangeError("Index out of range");
        if (t < 0)
            throw new RangeError("Index out of range")
    }
    function T(i, e, t, f, g) {
        return e = +e,
            t = t >>> 0,
            g || Ue(i, e, t, 4),
            d.write(i, e, t, f, 23, 4),
            t + 4
    }
    u.prototype.writeFloatLE = function (e, t, f) {
        return T(this, e, t, !0, f)
    }
        ,
        u.prototype.writeFloatBE = function (e, t, f) {
            return T(this, e, t, !1, f)
        }
        ;
    function I(i, e, t, f, g) {
        return e = +e,
            t = t >>> 0,
            g || Ue(i, e, t, 8),
            d.write(i, e, t, f, 52, 8),
            t + 8
    }
    u.prototype.writeDoubleLE = function (e, t, f) {
        return I(this, e, t, !0, f)
    }
        ,
        u.prototype.writeDoubleBE = function (e, t, f) {
            return I(this, e, t, !1, f)
        }
        ,
        u.prototype.copy = function (e, t, f, g) {
            if (!u.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (f || (f = 0),
                !g && g !== 0 && (g = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                g > 0 && g < f && (g = f),
                g === f || e.length === 0 || this.length === 0)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (f < 0 || f >= this.length)
                throw new RangeError("Index out of range");
            if (g < 0)
                throw new RangeError("sourceEnd out of bounds");
            g > this.length && (g = this.length),
                e.length - t < g - f && (g = e.length - t + f);
            const F = g - f;
            return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, f, g) : Uint8Array.prototype.set.call(e, this.subarray(f, g), t),
                F
        }
        ,
        u.prototype.fill = function (e, t, f, g) {
            if (typeof e == "string") {
                if (typeof t == "string" ? (g = t,
                    t = 0,
                    f = this.length) : typeof f == "string" && (g = f,
                        f = this.length),
                    g !== void 0 && typeof g != "string")
                    throw new TypeError("encoding must be a string");
                if (typeof g == "string" && !u.isEncoding(g))
                    throw new TypeError("Unknown encoding: " + g);
                if (e.length === 1) {
                    const O = e.charCodeAt(0);
                    (g === "utf8" && O < 128 || g === "latin1") && (e = O)
                }
            } else
                typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
            if (t < 0 || this.length < t || this.length < f)
                throw new RangeError("Out of range index");
            if (f <= t)
                return this;
            t = t >>> 0,
                f = f === void 0 ? this.length : f >>> 0,
                e || (e = 0);
            let F;
            if (typeof e == "number")
                for (F = t; F < f; ++F)
                    this[F] = e;
            else {
                const O = u.isBuffer(e) ? e : u.from(e, g)
                    , z = O.length;
                if (z === 0)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (F = 0; F < f - t; ++F)
                    this[F + t] = O[F % z]
            }
            return this
        }
        ;
    const q = {};
    function X(i, e, t) {
        q[i] = class extends t {
            constructor() {
                super(),
                    Object.defineProperty(this, "message", {
                        value: e.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                    }),
                    this.name = `${this.name} [${i}]`,
                    this.stack,
                    delete this.name
            }
            get code() {
                return i
            }
            set code(g) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: g,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${i}]: ${this.message}`
            }
        }
    }
    X("ERR_BUFFER_OUT_OF_BOUNDS", function (i) {
        return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError),
        X("ERR_INVALID_ARG_TYPE", function (i, e) {
            return `The "${i}" argument must be of type number. Received type ${typeof e}`
        }, TypeError),
        X("ERR_OUT_OF_RANGE", function (i, e, t) {
            let f = `The value of "${i}" is out of range.`
                , g = t;
            return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? g = Q(String(t)) : typeof t == "bigint" && (g = String(t),
                (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (g = Q(g)),
                g += "n"),
                f += ` It must be ${e}. Received ${g}`,
                f
        }, RangeError);
    function Q(i) {
        let e = ""
            , t = i.length;
        const f = i[0] === "-" ? 1 : 0;
        for (; t >= f + 4; t -= 3)
            e = `_${i.slice(t - 3, t)}${e}`;
        return `${i.slice(0, t)}${e}`
    }
    function l(i, e, t) {
        j(e, "offset"),
            (i[e] === void 0 || i[e + t] === void 0) && K(e, i.length - (t + 1))
    }
    function s(i, e, t, f, g, F) {
        if (i > t || i < e) {
            const O = typeof e == "bigint" ? "n" : "";
            let z;
            throw e === 0 || e === BigInt(0) ? z = `>= 0${O} and < 2${O} ** ${(F + 1) * 8}${O}` : z = `>= -(2${O} ** ${(F + 1) * 8 - 1}${O}) and < 2 ** ${(F + 1) * 8 - 1}${O}`,
            new q.ERR_OUT_OF_RANGE("value", z, i)
        }
        l(f, g, F)
    }
    function j(i, e) {
        if (typeof i != "number")
            throw new q.ERR_INVALID_ARG_TYPE(e, "number", i)
    }
    function K(i, e, t) {
        throw Math.floor(i) !== i ? (j(i, t),
            new q.ERR_OUT_OF_RANGE("offset", "an integer", i)) : e < 0 ? new q.ERR_BUFFER_OUT_OF_BOUNDS : new q.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${e}`, i)
    }
    const fe = /[^+/0-9A-Za-z-_]/g;
    function J(i) {
        if (i = i.split("=")[0],
            i = i.trim().replace(fe, ""),
            i.length < 2)
            return "";
        for (; i.length % 4 !== 0;)
            i = i + "=";
        return i
    }
    function re(i, e) {
        e = e || 1 / 0;
        let t;
        const f = i.length;
        let g = null;
        const F = [];
        for (let O = 0; O < f; ++O) {
            if (t = i.charCodeAt(O),
                t > 55295 && t < 57344) {
                if (!g) {
                    if (t > 56319) {
                        (e -= 3) > -1 && F.push(239, 191, 189);
                        continue
                    } else if (O + 1 === f) {
                        (e -= 3) > -1 && F.push(239, 191, 189);
                        continue
                    }
                    g = t;
                    continue
                }
                if (t < 56320) {
                    (e -= 3) > -1 && F.push(239, 191, 189),
                        g = t;
                    continue
                }
                t = (g - 55296 << 10 | t - 56320) + 65536
            } else
                g && (e -= 3) > -1 && F.push(239, 191, 189);
            if (g = null,
                t < 128) {
                if ((e -= 1) < 0)
                    break;
                F.push(t)
            } else if (t < 2048) {
                if ((e -= 2) < 0)
                    break;
                F.push(t >> 6 | 192, t & 63 | 128)
            } else if (t < 65536) {
                if ((e -= 3) < 0)
                    break;
                F.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128)
            } else if (t < 1114112) {
                if ((e -= 4) < 0)
                    break;
                F.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return F
    }
    function Ie(i) {
        const e = [];
        for (let t = 0; t < i.length; ++t)
            e.push(i.charCodeAt(t) & 255);
        return e
    }
    function Me(i, e) {
        let t, f, g;
        const F = [];
        for (let O = 0; O < i.length && !((e -= 2) < 0); ++O)
            t = i.charCodeAt(O),
                f = t >> 8,
                g = t % 256,
                F.push(g),
                F.push(f);
        return F
    }
    function De(i) {
        return h.toByteArray(J(i))
    }
    function Ne(i, e, t, f) {
        let g;
        for (g = 0; g < f && !(g + t >= e.length || g >= i.length); ++g)
            e[g + t] = i[g];
        return g
    }
    function te(i, e) {
        return i instanceof e || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === e.name
    }
    function pe(i) {
        return i !== i
    }
    const Oe = function () {
        const i = "0123456789abcdef"
            , e = new Array(256);
        for (let t = 0; t < 16; ++t) {
            const f = t * 16;
            for (let g = 0; g < 16; ++g)
                e[f + g] = i[t] + i[g]
        }
        return e
    }();
    function me(i) {
        return typeof BigInt > "u" ? Ae : i
    }
    function Ae() {
        throw new Error("BigInt not supported")
    }
}
)(Ge);
var Gr = {};
(function (x) {
    Object.defineProperties(x, {
        __esModule: {
            value: !0
        },
        [Symbol.toStringTag]: {
            value: "Module"
        }
    });
    var h = {}
        , d = {};
    d.byteLength = D,
        d.toByteArray = k,
        d.fromByteArray = Y;
    for (var b = [], S = [], c = typeof Uint8Array < "u" ? Uint8Array : Array, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, m = y.length; u < m; ++u)
        b[u] = y[u],
            S[y.charCodeAt(u)] = u;
    S[45] = 62,
        S[95] = 63;
    function N(B) {
        var A = B.length;
        if (A % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var p = B.indexOf("=");
        p === -1 && (p = A);
        var w = p === A ? 0 : 4 - p % 4;
        return [p, w]
    }
    function D(B) {
        var A = N(B)
            , p = A[0]
            , w = A[1];
        return (p + w) * 3 / 4 - w
    }
    function U(B, A, p) {
        return (A + p) * 3 / 4 - p
    }
    function k(B) {
        var A, p = N(B), w = p[0], R = p[1], C = new c(U(B, w, R)), M = 0, W = R > 0 ? w - 4 : w, V;
        for (V = 0; V < W; V += 4)
            A = S[B.charCodeAt(V)] << 18 | S[B.charCodeAt(V + 1)] << 12 | S[B.charCodeAt(V + 2)] << 6 | S[B.charCodeAt(V + 3)],
                C[M++] = A >> 16 & 255,
                C[M++] = A >> 8 & 255,
                C[M++] = A & 255;
        return R === 2 && (A = S[B.charCodeAt(V)] << 2 | S[B.charCodeAt(V + 1)] >> 4,
            C[M++] = A & 255),
            R === 1 && (A = S[B.charCodeAt(V)] << 10 | S[B.charCodeAt(V + 1)] << 4 | S[B.charCodeAt(V + 2)] >> 2,
                C[M++] = A >> 8 & 255,
                C[M++] = A & 255),
            C
    }
    function G(B) {
        return b[B >> 18 & 63] + b[B >> 12 & 63] + b[B >> 6 & 63] + b[B & 63]
    }
    function H(B, A, p) {
        for (var w, R = [], C = A; C < p; C += 3)
            w = (B[C] << 16 & 16711680) + (B[C + 1] << 8 & 65280) + (B[C + 2] & 255),
                R.push(G(w));
        return R.join("")
    }
    function Y(B) {
        for (var A, p = B.length, w = p % 3, R = [], C = 16383, M = 0, W = p - w; M < W; M += C)
            R.push(H(B, M, M + C > W ? W : M + C));
        return w === 1 ? (A = B[p - 1],
            R.push(b[A >> 2] + b[A << 4 & 63] + "==")) : w === 2 && (A = (B[p - 2] << 8) + B[p - 1],
                R.push(b[A >> 10] + b[A >> 4 & 63] + b[A << 2 & 63] + "=")),
            R.join("")
    }
    var $ = {};
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    $.read = function (B, A, p, w, R) {
        var C, M, W = R * 8 - w - 1, V = (1 << W) - 1, Z = V >> 1, v = -7, ie = p ? R - 1 : 0, Ee = p ? -1 : 1, ge = B[A + ie];
        for (ie += Ee,
            C = ge & (1 << -v) - 1,
            ge >>= -v,
            v += W; v > 0; C = C * 256 + B[A + ie],
            ie += Ee,
            v -= 8)
            ;
        for (M = C & (1 << -v) - 1,
            C >>= -v,
            v += w; v > 0; M = M * 256 + B[A + ie],
            ie += Ee,
            v -= 8)
            ;
        if (C === 0)
            C = 1 - Z;
        else {
            if (C === V)
                return M ? NaN : (ge ? -1 : 1) * (1 / 0);
            M = M + Math.pow(2, w),
                C = C - Z
        }
        return (ge ? -1 : 1) * M * Math.pow(2, C - w)
    }
        ,
        $.write = function (B, A, p, w, R, C) {
            var M, W, V, Z = C * 8 - R - 1, v = (1 << Z) - 1, ie = v >> 1, Ee = R === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, ge = w ? 0 : C - 1, _e = w ? 1 : -1, be = A < 0 || A === 0 && 1 / A < 0 ? 1 : 0;
            for (A = Math.abs(A),
                isNaN(A) || A === 1 / 0 ? (W = isNaN(A) ? 1 : 0,
                    M = v) : (M = Math.floor(Math.log(A) / Math.LN2),
                        A * (V = Math.pow(2, -M)) < 1 && (M--,
                            V *= 2),
                        M + ie >= 1 ? A += Ee / V : A += Ee * Math.pow(2, 1 - ie),
                        A * V >= 2 && (M++,
                            V /= 2),
                        M + ie >= v ? (W = 0,
                            M = v) : M + ie >= 1 ? (W = (A * V - 1) * Math.pow(2, R),
                                M = M + ie) : (W = A * Math.pow(2, ie - 1) * Math.pow(2, R),
                                    M = 0)); R >= 8; B[p + ge] = W & 255,
                                    ge += _e,
                                    W /= 256,
                R -= 8)
                ;
            for (M = M << R | W,
                Z += R; Z > 0; B[p + ge] = M & 255,
                ge += _e,
                M /= 256,
                Z -= 8)
                ;
            B[p + ge - _e] |= be * 128
        }
        ;
    /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    (function (B) {
        const A = d
            , p = $
            , w = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        B.Buffer = v,
            B.SlowBuffer = xe,
            B.INSPECT_MAX_BYTES = 50;
        const R = 2147483647;
        B.kMaxLength = R;
        const { Uint8Array: C, ArrayBuffer: M, SharedArrayBuffer: W } = globalThis;
        v.TYPED_ARRAY_SUPPORT = V(),
            !v.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        function V() {
            try {
                const o = new C(1)
                    , r = {
                        foo: function () {
                            return 42
                        }
                    };
                return Object.setPrototypeOf(r, C.prototype),
                    Object.setPrototypeOf(o, r),
                    o.foo() === 42
            } catch {
                return !1
            }
        }
        Object.defineProperty(v.prototype, "parent", {
            enumerable: !0,
            get: function () {
                if (v.isBuffer(this))
                    return this.buffer
            }
        }),
            Object.defineProperty(v.prototype, "offset", {
                enumerable: !0,
                get: function () {
                    if (v.isBuffer(this))
                        return this.byteOffset
                }
            });
        function Z(o) {
            if (o > R)
                throw new RangeError('The value "' + o + '" is invalid for option "size"');
            const r = new C(o);
            return Object.setPrototypeOf(r, v.prototype),
                r
        }
        function v(o, r, n) {
            if (typeof o == "number") {
                if (typeof r == "string")
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return _e(o)
            }
            return ie(o, r, n)
        }
        v.poolSize = 8192;
        function ie(o, r, n) {
            if (typeof o == "string")
                return be(o, r);
            if (M.isView(o))
                return Re(o);
            if (o == null)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o);
            if (Te(o, M) || o && Te(o.buffer, M) || typeof W < "u" && (Te(o, W) || o && Te(o.buffer, W)))
                return Se(o, r, n);
            if (typeof o == "number")
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            const a = o.valueOf && o.valueOf();
            if (a != null && a !== o)
                return v.from(a, r, n);
            const _ = se(o);
            if (_)
                return _;
            if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function")
                return v.from(o[Symbol.toPrimitive]("string"), r, n);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o)
        }
        v.from = function (o, r, n) {
            return ie(o, r, n)
        }
            ,
            Object.setPrototypeOf(v.prototype, C.prototype),
            Object.setPrototypeOf(v, C);
        function Ee(o) {
            if (typeof o != "number")
                throw new TypeError('"size" argument must be of type number');
            if (o < 0)
                throw new RangeError('The value "' + o + '" is invalid for option "size"')
        }
        function ge(o, r, n) {
            return Ee(o),
                o <= 0 ? Z(o) : r !== void 0 ? typeof n == "string" ? Z(o).fill(r, n) : Z(o).fill(r) : Z(o)
        }
        v.alloc = function (o, r, n) {
            return ge(o, r, n)
        }
            ;
        function _e(o) {
            return Ee(o),
                Z(o < 0 ? 0 : de(o) | 0)
        }
        v.allocUnsafe = function (o) {
            return _e(o)
        }
            ,
            v.allocUnsafeSlow = function (o) {
                return _e(o)
            }
            ;
        function be(o, r) {
            if ((typeof r != "string" || r === "") && (r = "utf8"),
                !v.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            const n = Ce(o, r) | 0;
            let a = Z(n);
            const _ = a.write(o, r);
            return _ !== n && (a = a.slice(0, _)),
                a
        }
        function ve(o) {
            const r = o.length < 0 ? 0 : de(o.length) | 0
                , n = Z(r);
            for (let a = 0; a < r; a += 1)
                n[a] = o[a] & 255;
            return n
        }
        function Re(o) {
            if (Te(o, C)) {
                const r = new C(o);
                return Se(r.buffer, r.byteOffset, r.byteLength)
            }
            return ve(o)
        }
        function Se(o, r, n) {
            if (r < 0 || o.byteLength < r)
                throw new RangeError('"offset" is outside of buffer bounds');
            if (o.byteLength < r + (n || 0))
                throw new RangeError('"length" is outside of buffer bounds');
            let a;
            return r === void 0 && n === void 0 ? a = new C(o) : n === void 0 ? a = new C(o, r) : a = new C(o, r, n),
                Object.setPrototypeOf(a, v.prototype),
                a
        }
        function se(o) {
            if (v.isBuffer(o)) {
                const r = de(o.length) | 0
                    , n = Z(r);
                return n.length === 0 || o.copy(n, 0, 0, r),
                    n
            }
            if (o.length !== void 0)
                return typeof o.length != "number" || Je(o.length) ? Z(0) : ve(o);
            if (o.type === "Buffer" && Array.isArray(o.data))
                return ve(o.data)
        }
        function de(o) {
            if (o >= R)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + R.toString(16) + " bytes");
            return o | 0
        }
        function xe(o) {
            return +o != o && (o = 0),
                v.alloc(+o)
        }
        v.isBuffer = function (r) {
            return r != null && r._isBuffer === !0 && r !== v.prototype
        }
            ,
            v.compare = function (r, n) {
                if (Te(r, C) && (r = v.from(r, r.offset, r.byteLength)),
                    Te(n, C) && (n = v.from(n, n.offset, n.byteLength)),
                    !v.isBuffer(r) || !v.isBuffer(n))
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (r === n)
                    return 0;
                let a = r.length
                    , _ = n.length;
                for (let L = 0, P = Math.min(a, _); L < P; ++L)
                    if (r[L] !== n[L]) {
                        a = r[L],
                            _ = n[L];
                        break
                    }
                return a < _ ? -1 : _ < a ? 1 : 0
            }
            ,
            v.isEncoding = function (r) {
                switch (String(r).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }
            ,
            v.concat = function (r, n) {
                if (!Array.isArray(r))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (r.length === 0)
                    return v.alloc(0);
                let a;
                if (n === void 0)
                    for (n = 0,
                        a = 0; a < r.length; ++a)
                        n += r[a].length;
                const _ = v.allocUnsafe(n);
                let L = 0;
                for (a = 0; a < r.length; ++a) {
                    let P = r[a];
                    if (Te(P, C))
                        L + P.length > _.length ? (v.isBuffer(P) || (P = v.from(P)),
                            P.copy(_, L)) : C.prototype.set.call(_, P, L);
                    else if (v.isBuffer(P))
                        P.copy(_, L);
                    else
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    L += P.length
                }
                return _
            }
            ;
        function Ce(o, r) {
            if (v.isBuffer(o))
                return o.length;
            if (M.isView(o) || Te(o, M))
                return o.byteLength;
            if (typeof o != "string")
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o);
            const n = o.length
                , a = arguments.length > 2 && arguments[2] === !0;
            if (!a && n === 0)
                return 0;
            let _ = !1;
            for (; ;)
                switch (r) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return ne(o).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return n * 2;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return _r(o).length;
                    default:
                        if (_)
                            return a ? -1 : ne(o).length;
                        r = ("" + r).toLowerCase(),
                            _ = !0
                }
        }
        v.byteLength = Ce;
        function Ue(o, r, n) {
            let a = !1;
            if ((r === void 0 || r < 0) && (r = 0),
                r > this.length || ((n === void 0 || n > this.length) && (n = this.length),
                    n <= 0) || (n >>>= 0,
                        r >>>= 0,
                        n <= r))
                return "";
            for (o || (o = "utf8"); ;)
                switch (o) {
                    case "hex":
                        return De(this, r, n);
                    case "utf8":
                    case "utf-8":
                        return fe(this, r, n);
                    case "ascii":
                        return Ie(this, r, n);
                    case "latin1":
                    case "binary":
                        return Me(this, r, n);
                    case "base64":
                        return K(this, r, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return Ne(this, r, n);
                    default:
                        if (a)
                            throw new TypeError("Unknown encoding: " + o);
                        o = (o + "").toLowerCase(),
                            a = !0
                }
        }
        v.prototype._isBuffer = !0;
        function T(o, r, n) {
            const a = o[r];
            o[r] = o[n],
                o[n] = a
        }
        v.prototype.swap16 = function () {
            const r = this.length;
            if (r % 2 !== 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let n = 0; n < r; n += 2)
                T(this, n, n + 1);
            return this
        }
            ,
            v.prototype.swap32 = function () {
                const r = this.length;
                if (r % 4 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let n = 0; n < r; n += 4)
                    T(this, n, n + 3),
                        T(this, n + 1, n + 2);
                return this
            }
            ,
            v.prototype.swap64 = function () {
                const r = this.length;
                if (r % 8 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let n = 0; n < r; n += 8)
                    T(this, n, n + 7),
                        T(this, n + 1, n + 6),
                        T(this, n + 2, n + 5),
                        T(this, n + 3, n + 4);
                return this
            }
            ,
            v.prototype.toString = function () {
                const r = this.length;
                return r === 0 ? "" : arguments.length === 0 ? fe(this, 0, r) : Ue.apply(this, arguments)
            }
            ,
            v.prototype.toLocaleString = v.prototype.toString,
            v.prototype.equals = function (r) {
                if (!v.isBuffer(r))
                    throw new TypeError("Argument must be a Buffer");
                return this === r ? !0 : v.compare(this, r) === 0
            }
            ,
            v.prototype.inspect = function () {
                let r = "";
                const n = B.INSPECT_MAX_BYTES;
                return r = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(),
                    this.length > n && (r += " ... "),
                    "<Buffer " + r + ">"
            }
            ,
            w && (v.prototype[w] = v.prototype.inspect),
            v.prototype.compare = function (r, n, a, _, L) {
                if (Te(r, C) && (r = v.from(r, r.offset, r.byteLength)),
                    !v.isBuffer(r))
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
                if (n === void 0 && (n = 0),
                    a === void 0 && (a = r ? r.length : 0),
                    _ === void 0 && (_ = 0),
                    L === void 0 && (L = this.length),
                    n < 0 || a > r.length || _ < 0 || L > this.length)
                    throw new RangeError("out of range index");
                if (_ >= L && n >= a)
                    return 0;
                if (_ >= L)
                    return -1;
                if (n >= a)
                    return 1;
                if (n >>>= 0,
                    a >>>= 0,
                    _ >>>= 0,
                    L >>>= 0,
                    this === r)
                    return 0;
                let P = L - _
                    , ee = a - n;
                const ye = Math.min(P, ee)
                    , ce = this.slice(_, L)
                    , we = r.slice(n, a);
                for (let ae = 0; ae < ye; ++ae)
                    if (ce[ae] !== we[ae]) {
                        P = ce[ae],
                            ee = we[ae];
                        break
                    }
                return P < ee ? -1 : ee < P ? 1 : 0
            }
            ;
        function I(o, r, n, a, _) {
            if (o.length === 0)
                return -1;
            if (typeof n == "string" ? (a = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                n = +n,
                Je(n) && (n = _ ? 0 : o.length - 1),
                n < 0 && (n = o.length + n),
                n >= o.length) {
                if (_)
                    return -1;
                n = o.length - 1
            } else if (n < 0)
                if (_)
                    n = 0;
                else
                    return -1;
            if (typeof r == "string" && (r = v.from(r, a)),
                v.isBuffer(r))
                return r.length === 0 ? -1 : q(o, r, n, a, _);
            if (typeof r == "number")
                return r = r & 255,
                    typeof C.prototype.indexOf == "function" ? _ ? C.prototype.indexOf.call(o, r, n) : C.prototype.lastIndexOf.call(o, r, n) : q(o, [r], n, a, _);
            throw new TypeError("val must be string, number or Buffer")
        }
        function q(o, r, n, a, _) {
            let L = 1
                , P = o.length
                , ee = r.length;
            if (a !== void 0 && (a = String(a).toLowerCase(),
                a === "ucs2" || a === "ucs-2" || a === "utf16le" || a === "utf-16le")) {
                if (o.length < 2 || r.length < 2)
                    return -1;
                L = 2,
                    P /= 2,
                    ee /= 2,
                    n /= 2
            }
            function ye(we, ae) {
                return L === 1 ? we[ae] : we.readUInt16BE(ae * L)
            }
            let ce;
            if (_) {
                let we = -1;
                for (ce = n; ce < P; ce++)
                    if (ye(o, ce) === ye(r, we === -1 ? 0 : ce - we)) {
                        if (we === -1 && (we = ce),
                            ce - we + 1 === ee)
                            return we * L
                    } else
                        we !== -1 && (ce -= ce - we),
                            we = -1
            } else
                for (n + ee > P && (n = P - ee),
                    ce = n; ce >= 0; ce--) {
                    let we = !0;
                    for (let ae = 0; ae < ee; ae++)
                        if (ye(o, ce + ae) !== ye(r, ae)) {
                            we = !1;
                            break
                        }
                    if (we)
                        return ce
                }
            return -1
        }
        v.prototype.includes = function (r, n, a) {
            return this.indexOf(r, n, a) !== -1
        }
            ,
            v.prototype.indexOf = function (r, n, a) {
                return I(this, r, n, a, !0)
            }
            ,
            v.prototype.lastIndexOf = function (r, n, a) {
                return I(this, r, n, a, !1)
            }
            ;
        function X(o, r, n, a) {
            n = Number(n) || 0;
            const _ = o.length - n;
            a ? (a = Number(a),
                a > _ && (a = _)) : a = _;
            const L = r.length;
            a > L / 2 && (a = L / 2);
            let P;
            for (P = 0; P < a; ++P) {
                const ee = parseInt(r.substr(P * 2, 2), 16);
                if (Je(ee))
                    return P;
                o[n + P] = ee
            }
            return P
        }
        function Q(o, r, n, a) {
            return Ye(ne(r, o.length - n), o, n, a)
        }
        function l(o, r, n, a) {
            return Ye(et(r), o, n, a)
        }
        function s(o, r, n, a) {
            return Ye(_r(r), o, n, a)
        }
        function j(o, r, n, a) {
            return Ye(rt(r, o.length - n), o, n, a)
        }
        v.prototype.write = function (r, n, a, _) {
            if (n === void 0)
                _ = "utf8",
                    a = this.length,
                    n = 0;
            else if (a === void 0 && typeof n == "string")
                _ = n,
                    a = this.length,
                    n = 0;
            else if (isFinite(n))
                n = n >>> 0,
                    isFinite(a) ? (a = a >>> 0,
                        _ === void 0 && (_ = "utf8")) : (_ = a,
                            a = void 0);
            else
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            const L = this.length - n;
            if ((a === void 0 || a > L) && (a = L),
                r.length > 0 && (a < 0 || n < 0) || n > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            _ || (_ = "utf8");
            let P = !1;
            for (; ;)
                switch (_) {
                    case "hex":
                        return X(this, r, n, a);
                    case "utf8":
                    case "utf-8":
                        return Q(this, r, n, a);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return l(this, r, n, a);
                    case "base64":
                        return s(this, r, n, a);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return j(this, r, n, a);
                    default:
                        if (P)
                            throw new TypeError("Unknown encoding: " + _);
                        _ = ("" + _).toLowerCase(),
                            P = !0
                }
        }
            ,
            v.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
        function K(o, r, n) {
            return r === 0 && n === o.length ? A.fromByteArray(o) : A.fromByteArray(o.slice(r, n))
        }
        function fe(o, r, n) {
            n = Math.min(o.length, n);
            const a = [];
            let _ = r;
            for (; _ < n;) {
                const L = o[_];
                let P = null
                    , ee = L > 239 ? 4 : L > 223 ? 3 : L > 191 ? 2 : 1;
                if (_ + ee <= n) {
                    let ye, ce, we, ae;
                    switch (ee) {
                        case 1:
                            L < 128 && (P = L);
                            break;
                        case 2:
                            ye = o[_ + 1],
                                (ye & 192) === 128 && (ae = (L & 31) << 6 | ye & 63,
                                    ae > 127 && (P = ae));
                            break;
                        case 3:
                            ye = o[_ + 1],
                                ce = o[_ + 2],
                                (ye & 192) === 128 && (ce & 192) === 128 && (ae = (L & 15) << 12 | (ye & 63) << 6 | ce & 63,
                                    ae > 2047 && (ae < 55296 || ae > 57343) && (P = ae));
                            break;
                        case 4:
                            ye = o[_ + 1],
                                ce = o[_ + 2],
                                we = o[_ + 3],
                                (ye & 192) === 128 && (ce & 192) === 128 && (we & 192) === 128 && (ae = (L & 15) << 18 | (ye & 63) << 12 | (ce & 63) << 6 | we & 63,
                                    ae > 65535 && ae < 1114112 && (P = ae))
                    }
                }
                P === null ? (P = 65533,
                    ee = 1) : P > 65535 && (P -= 65536,
                        a.push(P >>> 10 & 1023 | 55296),
                        P = 56320 | P & 1023),
                    a.push(P),
                    _ += ee
            }
            return re(a)
        }
        const J = 4096;
        function re(o) {
            const r = o.length;
            if (r <= J)
                return String.fromCharCode.apply(String, o);
            let n = ""
                , a = 0;
            for (; a < r;)
                n += String.fromCharCode.apply(String, o.slice(a, a += J));
            return n
        }
        function Ie(o, r, n) {
            let a = "";
            n = Math.min(o.length, n);
            for (let _ = r; _ < n; ++_)
                a += String.fromCharCode(o[_] & 127);
            return a
        }
        function Me(o, r, n) {
            let a = "";
            n = Math.min(o.length, n);
            for (let _ = r; _ < n; ++_)
                a += String.fromCharCode(o[_]);
            return a
        }
        function De(o, r, n) {
            const a = o.length;
            (!r || r < 0) && (r = 0),
                (!n || n < 0 || n > a) && (n = a);
            let _ = "";
            for (let L = r; L < n; ++L)
                _ += tt[o[L]];
            return _
        }
        function Ne(o, r, n) {
            const a = o.slice(r, n);
            let _ = "";
            for (let L = 0; L < a.length - 1; L += 2)
                _ += String.fromCharCode(a[L] + a[L + 1] * 256);
            return _
        }
        v.prototype.slice = function (r, n) {
            const a = this.length;
            r = ~~r,
                n = n === void 0 ? a : ~~n,
                r < 0 ? (r += a,
                    r < 0 && (r = 0)) : r > a && (r = a),
                n < 0 ? (n += a,
                    n < 0 && (n = 0)) : n > a && (n = a),
                n < r && (n = r);
            const _ = this.subarray(r, n);
            return Object.setPrototypeOf(_, v.prototype),
                _
        }
            ;
        function te(o, r, n) {
            if (o % 1 !== 0 || o < 0)
                throw new RangeError("offset is not uint");
            if (o + r > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        v.prototype.readUintLE = v.prototype.readUIntLE = function (r, n, a) {
            r = r >>> 0,
                n = n >>> 0,
                a || te(r, n, this.length);
            let _ = this[r]
                , L = 1
                , P = 0;
            for (; ++P < n && (L *= 256);)
                _ += this[r + P] * L;
            return _
        }
            ,
            v.prototype.readUintBE = v.prototype.readUIntBE = function (r, n, a) {
                r = r >>> 0,
                    n = n >>> 0,
                    a || te(r, n, this.length);
                let _ = this[r + --n]
                    , L = 1;
                for (; n > 0 && (L *= 256);)
                    _ += this[r + --n] * L;
                return _
            }
            ,
            v.prototype.readUint8 = v.prototype.readUInt8 = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 1, this.length),
                    this[r]
            }
            ,
            v.prototype.readUint16LE = v.prototype.readUInt16LE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 2, this.length),
                    this[r] | this[r + 1] << 8
            }
            ,
            v.prototype.readUint16BE = v.prototype.readUInt16BE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 2, this.length),
                    this[r] << 8 | this[r + 1]
            }
            ,
            v.prototype.readUint32LE = v.prototype.readUInt32LE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 4, this.length),
                    (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216
            }
            ,
            v.prototype.readUint32BE = v.prototype.readUInt32BE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 4, this.length),
                    this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3])
            }
            ,
            v.prototype.readBigUInt64LE = Pe(function (r) {
                r = r >>> 0,
                    z(r, "offset");
                const n = this[r]
                    , a = this[r + 7];
                (n === void 0 || a === void 0) && oe(r, this.length - 8);
                const _ = n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24
                    , L = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + a * 2 ** 24;
                return BigInt(_) + (BigInt(L) << BigInt(32))
            }),
            v.prototype.readBigUInt64BE = Pe(function (r) {
                r = r >>> 0,
                    z(r, "offset");
                const n = this[r]
                    , a = this[r + 7];
                (n === void 0 || a === void 0) && oe(r, this.length - 8);
                const _ = n * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r]
                    , L = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + a;
                return (BigInt(_) << BigInt(32)) + BigInt(L)
            }),
            v.prototype.readIntLE = function (r, n, a) {
                r = r >>> 0,
                    n = n >>> 0,
                    a || te(r, n, this.length);
                let _ = this[r]
                    , L = 1
                    , P = 0;
                for (; ++P < n && (L *= 256);)
                    _ += this[r + P] * L;
                return L *= 128,
                    _ >= L && (_ -= Math.pow(2, 8 * n)),
                    _
            }
            ,
            v.prototype.readIntBE = function (r, n, a) {
                r = r >>> 0,
                    n = n >>> 0,
                    a || te(r, n, this.length);
                let _ = n
                    , L = 1
                    , P = this[r + --_];
                for (; _ > 0 && (L *= 256);)
                    P += this[r + --_] * L;
                return L *= 128,
                    P >= L && (P -= Math.pow(2, 8 * n)),
                    P
            }
            ,
            v.prototype.readInt8 = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 1, this.length),
                    this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]
            }
            ,
            v.prototype.readInt16LE = function (r, n) {
                r = r >>> 0,
                    n || te(r, 2, this.length);
                const a = this[r] | this[r + 1] << 8;
                return a & 32768 ? a | 4294901760 : a
            }
            ,
            v.prototype.readInt16BE = function (r, n) {
                r = r >>> 0,
                    n || te(r, 2, this.length);
                const a = this[r + 1] | this[r] << 8;
                return a & 32768 ? a | 4294901760 : a
            }
            ,
            v.prototype.readInt32LE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 4, this.length),
                    this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24
            }
            ,
            v.prototype.readInt32BE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 4, this.length),
                    this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]
            }
            ,
            v.prototype.readBigInt64LE = Pe(function (r) {
                r = r >>> 0,
                    z(r, "offset");
                const n = this[r]
                    , a = this[r + 7];
                (n === void 0 || a === void 0) && oe(r, this.length - 8);
                const _ = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (a << 24);
                return (BigInt(_) << BigInt(32)) + BigInt(n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24)
            }),
            v.prototype.readBigInt64BE = Pe(function (r) {
                r = r >>> 0,
                    z(r, "offset");
                const n = this[r]
                    , a = this[r + 7];
                (n === void 0 || a === void 0) && oe(r, this.length - 8);
                const _ = (n << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
                return (BigInt(_) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + a)
            }),
            v.prototype.readFloatLE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 4, this.length),
                    p.read(this, r, !0, 23, 4)
            }
            ,
            v.prototype.readFloatBE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 4, this.length),
                    p.read(this, r, !1, 23, 4)
            }
            ,
            v.prototype.readDoubleLE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 8, this.length),
                    p.read(this, r, !0, 52, 8)
            }
            ,
            v.prototype.readDoubleBE = function (r, n) {
                return r = r >>> 0,
                    n || te(r, 8, this.length),
                    p.read(this, r, !1, 52, 8)
            }
            ;
        function pe(o, r, n, a, _, L) {
            if (!v.isBuffer(o))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (r > _ || r < L)
                throw new RangeError('"value" argument is out of bounds');
            if (n + a > o.length)
                throw new RangeError("Index out of range")
        }
        v.prototype.writeUintLE = v.prototype.writeUIntLE = function (r, n, a, _) {
            if (r = +r,
                n = n >>> 0,
                a = a >>> 0,
                !_) {
                const ee = Math.pow(2, 8 * a) - 1;
                pe(this, r, n, a, ee, 0)
            }
            let L = 1
                , P = 0;
            for (this[n] = r & 255; ++P < a && (L *= 256);)
                this[n + P] = r / L & 255;
            return n + a
        }
            ,
            v.prototype.writeUintBE = v.prototype.writeUIntBE = function (r, n, a, _) {
                if (r = +r,
                    n = n >>> 0,
                    a = a >>> 0,
                    !_) {
                    const ee = Math.pow(2, 8 * a) - 1;
                    pe(this, r, n, a, ee, 0)
                }
                let L = a - 1
                    , P = 1;
                for (this[n + L] = r & 255; --L >= 0 && (P *= 256);)
                    this[n + L] = r / P & 255;
                return n + a
            }
            ,
            v.prototype.writeUint8 = v.prototype.writeUInt8 = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 1, 255, 0),
                    this[n] = r & 255,
                    n + 1
            }
            ,
            v.prototype.writeUint16LE = v.prototype.writeUInt16LE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 2, 65535, 0),
                    this[n] = r & 255,
                    this[n + 1] = r >>> 8,
                    n + 2
            }
            ,
            v.prototype.writeUint16BE = v.prototype.writeUInt16BE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 2, 65535, 0),
                    this[n] = r >>> 8,
                    this[n + 1] = r & 255,
                    n + 2
            }
            ,
            v.prototype.writeUint32LE = v.prototype.writeUInt32LE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 4, 4294967295, 0),
                    this[n + 3] = r >>> 24,
                    this[n + 2] = r >>> 16,
                    this[n + 1] = r >>> 8,
                    this[n] = r & 255,
                    n + 4
            }
            ,
            v.prototype.writeUint32BE = v.prototype.writeUInt32BE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 4, 4294967295, 0),
                    this[n] = r >>> 24,
                    this[n + 1] = r >>> 16,
                    this[n + 2] = r >>> 8,
                    this[n + 3] = r & 255,
                    n + 4
            }
            ;
        function Oe(o, r, n, a, _) {
            O(r, a, _, o, n, 7);
            let L = Number(r & BigInt(4294967295));
            o[n++] = L,
                L = L >> 8,
                o[n++] = L,
                L = L >> 8,
                o[n++] = L,
                L = L >> 8,
                o[n++] = L;
            let P = Number(r >> BigInt(32) & BigInt(4294967295));
            return o[n++] = P,
                P = P >> 8,
                o[n++] = P,
                P = P >> 8,
                o[n++] = P,
                P = P >> 8,
                o[n++] = P,
                n
        }
        function me(o, r, n, a, _) {
            O(r, a, _, o, n, 7);
            let L = Number(r & BigInt(4294967295));
            o[n + 7] = L,
                L = L >> 8,
                o[n + 6] = L,
                L = L >> 8,
                o[n + 5] = L,
                L = L >> 8,
                o[n + 4] = L;
            let P = Number(r >> BigInt(32) & BigInt(4294967295));
            return o[n + 3] = P,
                P = P >> 8,
                o[n + 2] = P,
                P = P >> 8,
                o[n + 1] = P,
                P = P >> 8,
                o[n] = P,
                n + 8
        }
        v.prototype.writeBigUInt64LE = Pe(function (r, n = 0) {
            return Oe(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"))
        }),
            v.prototype.writeBigUInt64BE = Pe(function (r, n = 0) {
                return me(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"))
            }),
            v.prototype.writeIntLE = function (r, n, a, _) {
                if (r = +r,
                    n = n >>> 0,
                    !_) {
                    const ye = Math.pow(2, 8 * a - 1);
                    pe(this, r, n, a, ye - 1, -ye)
                }
                let L = 0
                    , P = 1
                    , ee = 0;
                for (this[n] = r & 255; ++L < a && (P *= 256);)
                    r < 0 && ee === 0 && this[n + L - 1] !== 0 && (ee = 1),
                        this[n + L] = (r / P >> 0) - ee & 255;
                return n + a
            }
            ,
            v.prototype.writeIntBE = function (r, n, a, _) {
                if (r = +r,
                    n = n >>> 0,
                    !_) {
                    const ye = Math.pow(2, 8 * a - 1);
                    pe(this, r, n, a, ye - 1, -ye)
                }
                let L = a - 1
                    , P = 1
                    , ee = 0;
                for (this[n + L] = r & 255; --L >= 0 && (P *= 256);)
                    r < 0 && ee === 0 && this[n + L + 1] !== 0 && (ee = 1),
                        this[n + L] = (r / P >> 0) - ee & 255;
                return n + a
            }
            ,
            v.prototype.writeInt8 = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 1, 127, -128),
                    r < 0 && (r = 255 + r + 1),
                    this[n] = r & 255,
                    n + 1
            }
            ,
            v.prototype.writeInt16LE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 2, 32767, -32768),
                    this[n] = r & 255,
                    this[n + 1] = r >>> 8,
                    n + 2
            }
            ,
            v.prototype.writeInt16BE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 2, 32767, -32768),
                    this[n] = r >>> 8,
                    this[n + 1] = r & 255,
                    n + 2
            }
            ,
            v.prototype.writeInt32LE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 4, 2147483647, -2147483648),
                    this[n] = r & 255,
                    this[n + 1] = r >>> 8,
                    this[n + 2] = r >>> 16,
                    this[n + 3] = r >>> 24,
                    n + 4
            }
            ,
            v.prototype.writeInt32BE = function (r, n, a) {
                return r = +r,
                    n = n >>> 0,
                    a || pe(this, r, n, 4, 2147483647, -2147483648),
                    r < 0 && (r = 4294967295 + r + 1),
                    this[n] = r >>> 24,
                    this[n + 1] = r >>> 16,
                    this[n + 2] = r >>> 8,
                    this[n + 3] = r & 255,
                    n + 4
            }
            ,
            v.prototype.writeBigInt64LE = Pe(function (r, n = 0) {
                return Oe(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }),
            v.prototype.writeBigInt64BE = Pe(function (r, n = 0) {
                return me(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            });
        function Ae(o, r, n, a, _, L) {
            if (n + a > o.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function i(o, r, n, a, _) {
            return r = +r,
                n = n >>> 0,
                _ || Ae(o, r, n, 4),
                p.write(o, r, n, a, 23, 4),
                n + 4
        }
        v.prototype.writeFloatLE = function (r, n, a) {
            return i(this, r, n, !0, a)
        }
            ,
            v.prototype.writeFloatBE = function (r, n, a) {
                return i(this, r, n, !1, a)
            }
            ;
        function e(o, r, n, a, _) {
            return r = +r,
                n = n >>> 0,
                _ || Ae(o, r, n, 8),
                p.write(o, r, n, a, 52, 8),
                n + 8
        }
        v.prototype.writeDoubleLE = function (r, n, a) {
            return e(this, r, n, !0, a)
        }
            ,
            v.prototype.writeDoubleBE = function (r, n, a) {
                return e(this, r, n, !1, a)
            }
            ,
            v.prototype.copy = function (r, n, a, _) {
                if (!v.isBuffer(r))
                    throw new TypeError("argument should be a Buffer");
                if (a || (a = 0),
                    !_ && _ !== 0 && (_ = this.length),
                    n >= r.length && (n = r.length),
                    n || (n = 0),
                    _ > 0 && _ < a && (_ = a),
                    _ === a || r.length === 0 || this.length === 0)
                    return 0;
                if (n < 0)
                    throw new RangeError("targetStart out of bounds");
                if (a < 0 || a >= this.length)
                    throw new RangeError("Index out of range");
                if (_ < 0)
                    throw new RangeError("sourceEnd out of bounds");
                _ > this.length && (_ = this.length),
                    r.length - n < _ - a && (_ = r.length - n + a);
                const L = _ - a;
                return this === r && typeof C.prototype.copyWithin == "function" ? this.copyWithin(n, a, _) : C.prototype.set.call(r, this.subarray(a, _), n),
                    L
            }
            ,
            v.prototype.fill = function (r, n, a, _) {
                if (typeof r == "string") {
                    if (typeof n == "string" ? (_ = n,
                        n = 0,
                        a = this.length) : typeof a == "string" && (_ = a,
                            a = this.length),
                        _ !== void 0 && typeof _ != "string")
                        throw new TypeError("encoding must be a string");
                    if (typeof _ == "string" && !v.isEncoding(_))
                        throw new TypeError("Unknown encoding: " + _);
                    if (r.length === 1) {
                        const P = r.charCodeAt(0);
                        (_ === "utf8" && P < 128 || _ === "latin1") && (r = P)
                    }
                } else
                    typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
                if (n < 0 || this.length < n || this.length < a)
                    throw new RangeError("Out of range index");
                if (a <= n)
                    return this;
                n = n >>> 0,
                    a = a === void 0 ? this.length : a >>> 0,
                    r || (r = 0);
                let L;
                if (typeof r == "number")
                    for (L = n; L < a; ++L)
                        this[L] = r;
                else {
                    const P = v.isBuffer(r) ? r : v.from(r, _)
                        , ee = P.length;
                    if (ee === 0)
                        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
                    for (L = 0; L < a - n; ++L)
                        this[L + n] = P[L % ee]
                }
                return this
            }
            ;
        const t = {};
        function f(o, r, n) {
            t[o] = class extends n {
                constructor() {
                    super(),
                        Object.defineProperty(this, "message", {
                            value: r.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }),
                        this.name = `${this.name} [${o}]`,
                        this.stack,
                        delete this.name
                }
                get code() {
                    return o
                }
                set code(_) {
                    Object.defineProperty(this, "code", {
                        configurable: !0,
                        enumerable: !0,
                        value: _,
                        writable: !0
                    })
                }
                toString() {
                    return `${this.name} [${o}]: ${this.message}`
                }
            }
        }
        f("ERR_BUFFER_OUT_OF_BOUNDS", function (o) {
            return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        }, RangeError),
            f("ERR_INVALID_ARG_TYPE", function (o, r) {
                return `The "${o}" argument must be of type number. Received type ${typeof r}`
            }, TypeError),
            f("ERR_OUT_OF_RANGE", function (o, r, n) {
                let a = `The value of "${o}" is out of range.`
                    , _ = n;
                return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? _ = g(String(n)) : typeof n == "bigint" && (_ = String(n),
                    (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (_ = g(_)),
                    _ += "n"),
                    a += ` It must be ${r}. Received ${_}`,
                    a
            }, RangeError);
        function g(o) {
            let r = ""
                , n = o.length;
            const a = o[0] === "-" ? 1 : 0;
            for (; n >= a + 4; n -= 3)
                r = `_${o.slice(n - 3, n)}${r}`;
            return `${o.slice(0, n)}${r}`
        }
        function F(o, r, n) {
            z(r, "offset"),
                (o[r] === void 0 || o[r + n] === void 0) && oe(r, o.length - (n + 1))
        }
        function O(o, r, n, a, _, L) {
            if (o > n || o < r) {
                const P = typeof r == "bigint" ? "n" : "";
                let ee;
                throw r === 0 || r === BigInt(0) ? ee = `>= 0${P} and < 2${P} ** ${(L + 1) * 8}${P}` : ee = `>= -(2${P} ** ${(L + 1) * 8 - 1}${P}) and < 2 ** ${(L + 1) * 8 - 1}${P}`,
                new t.ERR_OUT_OF_RANGE("value", ee, o)
            }
            F(a, _, L)
        }
        function z(o, r) {
            if (typeof o != "number")
                throw new t.ERR_INVALID_ARG_TYPE(r, "number", o)
        }
        function oe(o, r, n) {
            throw Math.floor(o) !== o ? (z(o, n),
                new t.ERR_OUT_OF_RANGE("offset", "an integer", o)) : r < 0 ? new t.ERR_BUFFER_OUT_OF_BOUNDS : new t.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${r}`, o)
        }
        const le = /[^+/0-9A-Za-z-_]/g;
        function he(o) {
            if (o = o.split("=")[0],
                o = o.trim().replace(le, ""),
                o.length < 2)
                return "";
            for (; o.length % 4 !== 0;)
                o = o + "=";
            return o
        }
        function ne(o, r) {
            r = r || 1 / 0;
            let n;
            const a = o.length;
            let _ = null;
            const L = [];
            for (let P = 0; P < a; ++P) {
                if (n = o.charCodeAt(P),
                    n > 55295 && n < 57344) {
                    if (!_) {
                        if (n > 56319) {
                            (r -= 3) > -1 && L.push(239, 191, 189);
                            continue
                        } else if (P + 1 === a) {
                            (r -= 3) > -1 && L.push(239, 191, 189);
                            continue
                        }
                        _ = n;
                        continue
                    }
                    if (n < 56320) {
                        (r -= 3) > -1 && L.push(239, 191, 189),
                            _ = n;
                        continue
                    }
                    n = (_ - 55296 << 10 | n - 56320) + 65536
                } else
                    _ && (r -= 3) > -1 && L.push(239, 191, 189);
                if (_ = null,
                    n < 128) {
                    if ((r -= 1) < 0)
                        break;
                    L.push(n)
                } else if (n < 2048) {
                    if ((r -= 2) < 0)
                        break;
                    L.push(n >> 6 | 192, n & 63 | 128)
                } else if (n < 65536) {
                    if ((r -= 3) < 0)
                        break;
                    L.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128)
                } else if (n < 1114112) {
                    if ((r -= 4) < 0)
                        break;
                    L.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128)
                } else
                    throw new Error("Invalid code point")
            }
            return L
        }
        function et(o) {
            const r = [];
            for (let n = 0; n < o.length; ++n)
                r.push(o.charCodeAt(n) & 255);
            return r
        }
        function rt(o, r) {
            let n, a, _;
            const L = [];
            for (let P = 0; P < o.length && !((r -= 2) < 0); ++P)
                n = o.charCodeAt(P),
                    a = n >> 8,
                    _ = n % 256,
                    L.push(_),
                    L.push(a);
            return L
        }
        function _r(o) {
            return A.toByteArray(he(o))
        }
        function Ye(o, r, n, a) {
            let _;
            for (_ = 0; _ < a && !(_ + n >= r.length || _ >= o.length); ++_)
                r[_ + n] = o[_];
            return _
        }
        function Te(o, r) {
            return o instanceof r || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === r.name
        }
        function Je(o) {
            return o !== o
        }
        const tt = function () {
            const o = "0123456789abcdef"
                , r = new Array(256);
            for (let n = 0; n < 16; ++n) {
                const a = n * 16;
                for (let _ = 0; _ < 16; ++_)
                    r[a + _] = o[n] + o[_]
            }
            return r
        }();
        function Pe(o) {
            return typeof BigInt > "u" ? nt : o
        }
        function nt() {
            throw new Error("BigInt not supported")
        }
    }
    )(h);
    const E = h.Buffer;
    x.Blob = h.Blob,
        x.BlobOptions = h.BlobOptions,
        x.Buffer = h.Buffer,
        x.File = h.File,
        x.FileOptions = h.FileOptions,
        x.INSPECT_MAX_BYTES = h.INSPECT_MAX_BYTES,
        x.SlowBuffer = h.SlowBuffer,
        x.TranscodeEncoding = h.TranscodeEncoding,
        x.atob = h.atob,
        x.btoa = h.btoa,
        x.constants = h.constants,
        x.default = E,
        x.isAscii = h.isAscii,
        x.isUtf8 = h.isUtf8,
        x.kMaxLength = h.kMaxLength,
        x.kStringMaxLength = h.kStringMaxLength,
        x.resolveObjectURL = h.resolveObjectURL,
        x.transcode = h.transcode
}
)(Gr);
const Bt = wr(Gr);
var Yr = {};
(function (x) {
    Object.defineProperties(x, {
        __esModule: {
            value: !0
        },
        [Symbol.toStringTag]: {
            value: "Module"
        }
    });
    function h(p) {
        return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p
    }
    var d = {
        exports: {}
    }, b = d.exports = {}, S, c;
    function y() {
        throw new Error("setTimeout has not been defined")
    }
    function u() {
        throw new Error("clearTimeout has not been defined")
    }
    (function () {
        try {
            typeof setTimeout == "function" ? S = setTimeout : S = y
        } catch {
            S = y
        }
        try {
            typeof clearTimeout == "function" ? c = clearTimeout : c = u
        } catch {
            c = u
        }
    }
    )();
    function m(p) {
        if (S === setTimeout)
            return setTimeout(p, 0);
        if ((S === y || !S) && setTimeout)
            return S = setTimeout,
                setTimeout(p, 0);
        try {
            return S(p, 0)
        } catch {
            try {
                return S.call(null, p, 0)
            } catch {
                return S.call(this, p, 0)
            }
        }
    }
    function N(p) {
        if (c === clearTimeout)
            return clearTimeout(p);
        if ((c === u || !c) && clearTimeout)
            return c = clearTimeout,
                clearTimeout(p);
        try {
            return c(p)
        } catch {
            try {
                return c.call(null, p)
            } catch {
                return c.call(this, p)
            }
        }
    }
    var D = [], U = !1, k, G = -1;
    function H() {
        !U || !k || (U = !1,
            k.length ? D = k.concat(D) : G = -1,
            D.length && Y())
    }
    function Y() {
        if (!U) {
            var p = m(H);
            U = !0;
            for (var w = D.length; w;) {
                for (k = D,
                    D = []; ++G < w;)
                    k && k[G].run();
                G = -1,
                    w = D.length
            }
            k = null,
                U = !1,
                N(p)
        }
    }
    b.nextTick = function (p) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var R = 1; R < arguments.length; R++)
                w[R - 1] = arguments[R];
        D.push(new $(p, w)),
            D.length === 1 && !U && m(Y)
    }
        ;
    function $(p, w) {
        this.fun = p,
            this.array = w
    }
    $.prototype.run = function () {
        this.fun.apply(null, this.array)
    }
        ,
        b.title = "browser",
        b.browser = !0,
        b.env = {},
        b.argv = [],
        b.version = "",
        b.versions = {};
    function E() { }
    b.on = E,
        b.addListener = E,
        b.once = E,
        b.off = E,
        b.removeListener = E,
        b.removeAllListeners = E,
        b.emit = E,
        b.prependListener = E,
        b.prependOnceListener = E,
        b.listeners = function (p) {
            return []
        }
        ,
        b.binding = function (p) {
            throw new Error("process.binding is not supported")
        }
        ,
        b.cwd = function () {
            return "/"
        }
        ,
        b.chdir = function (p) {
            throw new Error("process.chdir is not supported")
        }
        ,
        b.umask = function () {
            return 0
        }
        ;
    var B = d.exports;
    const A = h(B);
    x.default = A,
        x.process = A
}
)(Yr);
const ue = wr(Yr);
function Fe(x) {
    if (typeof x != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(x))
}
function br(x, h) {
    for (var d = "", b = 0, S = -1, c = 0, y, u = 0; u <= x.length; ++u) {
        if (u < x.length)
            y = x.charCodeAt(u);
        else {
            if (y === 47)
                break;
            y = 47
        }
        if (y === 47) {
            if (!(S === u - 1 || c === 1))
                if (S !== u - 1 && c === 2) {
                    if (d.length < 2 || b !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
                        if (d.length > 2) {
                            var m = d.lastIndexOf("/");
                            if (m !== d.length - 1) {
                                m === -1 ? (d = "",
                                    b = 0) : (d = d.slice(0, m),
                                        b = d.length - 1 - d.lastIndexOf("/")),
                                    S = u,
                                    c = 0;
                                continue
                            }
                        } else if (d.length === 2 || d.length === 1) {
                            d = "",
                                b = 0,
                                S = u,
                                c = 0;
                            continue
                        }
                    }
                    h && (d.length > 0 ? d += "/.." : d = "..",
                        b = 2)
                } else
                    d.length > 0 ? d += "/" + x.slice(S + 1, u) : d = x.slice(S + 1, u),
                        b = u - S - 1;
            S = u,
                c = 0
        } else
            y === 46 && c !== -1 ? ++c : c = -1
    }
    return d
}
function ct(x, h) {
    var d = h.dir || h.root
        , b = h.base || (h.name || "") + (h.ext || "");
    return d ? d === h.root ? d + b : d + x + b : b
}
var je = {
    resolve: function () {
        for (var h = "", d = !1, b, S = arguments.length - 1; S >= -1 && !d; S--) {
            var c;
            S >= 0 ? c = arguments[S] : (b === void 0 && (b = ue.cwd()),
                c = b),
                Fe(c),
                c.length !== 0 && (h = c + "/" + h,
                    d = c.charCodeAt(0) === 47)
        }
        return h = br(h, !d),
            d ? h.length > 0 ? "/" + h : "/" : h.length > 0 ? h : "."
    },
    normalize: function (h) {
        if (Fe(h),
            h.length === 0)
            return ".";
        var d = h.charCodeAt(0) === 47
            , b = h.charCodeAt(h.length - 1) === 47;
        return h = br(h, !d),
            h.length === 0 && !d && (h = "."),
            h.length > 0 && b && (h += "/"),
            d ? "/" + h : h
    },
    isAbsolute: function (h) {
        return Fe(h),
            h.length > 0 && h.charCodeAt(0) === 47
    },
    join: function () {
        if (arguments.length === 0)
            return ".";
        for (var h, d = 0; d < arguments.length; ++d) {
            var b = arguments[d];
            Fe(b),
                b.length > 0 && (h === void 0 ? h = b : h += "/" + b)
        }
        return h === void 0 ? "." : je.normalize(h)
    },
    relative: function (h, d) {
        if (Fe(h),
            Fe(d),
            h === d || (h = je.resolve(h),
                d = je.resolve(d),
                h === d))
            return "";
        for (var b = 1; b < h.length && h.charCodeAt(b) === 47; ++b)
            ;
        for (var S = h.length, c = S - b, y = 1; y < d.length && d.charCodeAt(y) === 47; ++y)
            ;
        for (var u = d.length, m = u - y, N = c < m ? c : m, D = -1, U = 0; U <= N; ++U) {
            if (U === N) {
                if (m > N) {
                    if (d.charCodeAt(y + U) === 47)
                        return d.slice(y + U + 1);
                    if (U === 0)
                        return d.slice(y + U)
                } else
                    c > N && (h.charCodeAt(b + U) === 47 ? D = U : U === 0 && (D = 0));
                break
            }
            var k = h.charCodeAt(b + U)
                , G = d.charCodeAt(y + U);
            if (k !== G)
                break;
            k === 47 && (D = U)
        }
        var H = "";
        for (U = b + D + 1; U <= S; ++U)
            (U === S || h.charCodeAt(U) === 47) && (H.length === 0 ? H += ".." : H += "/..");
        return H.length > 0 ? H + d.slice(y + D) : (y += D,
            d.charCodeAt(y) === 47 && ++y,
            d.slice(y))
    },
    _makeLong: function (h) {
        return h
    },
    dirname: function (h) {
        if (Fe(h),
            h.length === 0)
            return ".";
        for (var d = h.charCodeAt(0), b = d === 47, S = -1, c = !0, y = h.length - 1; y >= 1; --y)
            if (d = h.charCodeAt(y),
                d === 47) {
                if (!c) {
                    S = y;
                    break
                }
            } else
                c = !1;
        return S === -1 ? b ? "/" : "." : b && S === 1 ? "//" : h.slice(0, S)
    },
    basename: function (h, d) {
        if (d !== void 0 && typeof d != "string")
            throw new TypeError('"ext" argument must be a string');
        Fe(h);
        var b = 0, S = -1, c = !0, y;
        if (d !== void 0 && d.length > 0 && d.length <= h.length) {
            if (d.length === h.length && d === h)
                return "";
            var u = d.length - 1
                , m = -1;
            for (y = h.length - 1; y >= 0; --y) {
                var N = h.charCodeAt(y);
                if (N === 47) {
                    if (!c) {
                        b = y + 1;
                        break
                    }
                } else
                    m === -1 && (c = !1,
                        m = y + 1),
                        u >= 0 && (N === d.charCodeAt(u) ? --u === -1 && (S = y) : (u = -1,
                            S = m))
            }
            return b === S ? S = m : S === -1 && (S = h.length),
                h.slice(b, S)
        } else {
            for (y = h.length - 1; y >= 0; --y)
                if (h.charCodeAt(y) === 47) {
                    if (!c) {
                        b = y + 1;
                        break
                    }
                } else
                    S === -1 && (c = !1,
                        S = y + 1);
            return S === -1 ? "" : h.slice(b, S)
        }
    },
    extname: function (h) {
        Fe(h);
        for (var d = -1, b = 0, S = -1, c = !0, y = 0, u = h.length - 1; u >= 0; --u) {
            var m = h.charCodeAt(u);
            if (m === 47) {
                if (!c) {
                    b = u + 1;
                    break
                }
                continue
            }
            S === -1 && (c = !1,
                S = u + 1),
                m === 46 ? d === -1 ? d = u : y !== 1 && (y = 1) : d !== -1 && (y = -1)
        }
        return d === -1 || S === -1 || y === 0 || y === 1 && d === S - 1 && d === b + 1 ? "" : h.slice(d, S)
    },
    format: function (h) {
        if (h === null || typeof h != "object")
            throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof h);
        return ct("/", h)
    },
    parse: function (h) {
        Fe(h);
        var d = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (h.length === 0)
            return d;
        var b = h.charCodeAt(0), S = b === 47, c;
        S ? (d.root = "/",
            c = 1) : c = 0;
        for (var y = -1, u = 0, m = -1, N = !0, D = h.length - 1, U = 0; D >= c; --D) {
            if (b = h.charCodeAt(D),
                b === 47) {
                if (!N) {
                    u = D + 1;
                    break
                }
                continue
            }
            m === -1 && (N = !1,
                m = D + 1),
                b === 46 ? y === -1 ? y = D : U !== 1 && (U = 1) : y !== -1 && (U = -1)
        }
        return y === -1 || m === -1 || U === 0 || U === 1 && y === m - 1 && y === u + 1 ? m !== -1 && (u === 0 && S ? d.base = d.name = h.slice(1, m) : d.base = d.name = h.slice(u, m)) : (u === 0 && S ? (d.name = h.slice(1, y),
            d.base = h.slice(1, m)) : (d.name = h.slice(u, y),
                d.base = h.slice(u, m)),
            d.ext = h.slice(y, m)),
            u > 0 ? d.dir = h.slice(0, u - 1) : S && (d.dir = "/"),
            d
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
je.posix = je;
var vt = je
    , Vr = {};
(function (x) {
    Object.defineProperties(x, {
        __esModule: {
            value: !0
        },
        [Symbol.toStringTag]: {
            value: "Module"
        }
    });
    const h = globalThis || void 0 || self;
    x.default = h,
        x.global = h
}
)(Vr);
const Rt = wr(Vr);
var Ze = {}
    , Ve = {
        exports: {}
    };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var xr;
function dt() {
    return xr || (xr = 1,
        function (x, h) {
            var d = Ge
                , b = d.Buffer;
            function S(y, u) {
                for (var m in y)
                    u[m] = y[m]
            }
            b.from && b.alloc && b.allocUnsafe && b.allocUnsafeSlow ? x.exports = d : (S(d, h),
                h.Buffer = c);
            function c(y, u, m) {
                return b(y, u, m)
            }
            c.prototype = Object.create(b.prototype),
                S(b, c),
                c.from = function (y, u, m) {
                    if (typeof y == "number")
                        throw new TypeError("Argument must not be a number");
                    return b(y, u, m)
                }
                ,
                c.alloc = function (y, u, m) {
                    if (typeof y != "number")
                        throw new TypeError("Argument must be a number");
                    var N = b(y);
                    return u !== void 0 ? typeof m == "string" ? N.fill(u, m) : N.fill(u) : N.fill(0),
                        N
                }
                ,
                c.allocUnsafe = function (y) {
                    if (typeof y != "number")
                        throw new TypeError("Argument must be a number");
                    return b(y)
                }
                ,
                c.allocUnsafeSlow = function (y) {
                    if (typeof y != "number")
                        throw new TypeError("Argument must be a number");
                    return d.SlowBuffer(y)
                }
        }(Ve, Ve.exports)),
        Ve.exports
}
var Br;
function vr() {
    if (Br)
        return Ze;
    Br = 1;
    var x = dt().Buffer
        , h = x.isEncoding || function (E) {
            switch (E = "" + E,
            E && E.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        }
        ;
    function d(E) {
        if (!E)
            return "utf8";
        for (var B; ;)
            switch (E) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return E;
                default:
                    if (B)
                        return;
                    E = ("" + E).toLowerCase(),
                        B = !0
            }
    }
    function b(E) {
        var B = d(E);
        if (typeof B != "string" && (x.isEncoding === h || !h(E)))
            throw new Error("Unknown encoding: " + E);
        return B || E
    }
    Ze.StringDecoder = S;
    function S(E) {
        this.encoding = b(E);
        var B;
        switch (this.encoding) {
            case "utf16le":
                this.text = U,
                    this.end = k,
                    B = 4;
                break;
            case "utf8":
                this.fillLast = m,
                    B = 4;
                break;
            case "base64":
                this.text = G,
                    this.end = H,
                    B = 3;
                break;
            default:
                this.write = Y,
                    this.end = $;
                return
        }
        this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = x.allocUnsafe(B)
    }
    S.prototype.write = function (E) {
        if (E.length === 0)
            return "";
        var B, A;
        if (this.lastNeed) {
            if (B = this.fillLast(E),
                B === void 0)
                return "";
            A = this.lastNeed,
                this.lastNeed = 0
        } else
            A = 0;
        return A < E.length ? B ? B + this.text(E, A) : this.text(E, A) : B || ""
    }
        ,
        S.prototype.end = D,
        S.prototype.text = N,
        S.prototype.fillLast = function (E) {
            if (this.lastNeed <= E.length)
                return E.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                    this.lastChar.toString(this.encoding, 0, this.lastTotal);
            E.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, E.length),
                this.lastNeed -= E.length
        }
        ;
    function c(E) {
        return E <= 127 ? 0 : E >> 5 === 6 ? 2 : E >> 4 === 14 ? 3 : E >> 3 === 30 ? 4 : E >> 6 === 2 ? -1 : -2
    }
    function y(E, B, A) {
        var p = B.length - 1;
        if (p < A)
            return 0;
        var w = c(B[p]);
        return w >= 0 ? (w > 0 && (E.lastNeed = w - 1),
            w) : --p < A || w === -2 ? 0 : (w = c(B[p]),
                w >= 0 ? (w > 0 && (E.lastNeed = w - 2),
                    w) : --p < A || w === -2 ? 0 : (w = c(B[p]),
                        w >= 0 ? (w > 0 && (w === 2 ? w = 0 : E.lastNeed = w - 3),
                            w) : 0))
    }
    function u(E, B, A) {
        if ((B[0] & 192) !== 128)
            return E.lastNeed = 0,
                "�";
        if (E.lastNeed > 1 && B.length > 1) {
            if ((B[1] & 192) !== 128)
                return E.lastNeed = 1,
                    "�";
            if (E.lastNeed > 2 && B.length > 2 && (B[2] & 192) !== 128)
                return E.lastNeed = 2,
                    "�"
        }
    }
    function m(E) {
        var B = this.lastTotal - this.lastNeed
            , A = u(this, E);
        if (A !== void 0)
            return A;
        if (this.lastNeed <= E.length)
            return E.copy(this.lastChar, B, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
        E.copy(this.lastChar, B, 0, E.length),
            this.lastNeed -= E.length
    }
    function N(E, B) {
        var A = y(this, E, B);
        if (!this.lastNeed)
            return E.toString("utf8", B);
        this.lastTotal = A;
        var p = E.length - (A - this.lastNeed);
        return E.copy(this.lastChar, 0, p),
            E.toString("utf8", B, p)
    }
    function D(E) {
        var B = E && E.length ? this.write(E) : "";
        return this.lastNeed ? B + "�" : B
    }
    function U(E, B) {
        if ((E.length - B) % 2 === 0) {
            var A = E.toString("utf16le", B);
            if (A) {
                var p = A.charCodeAt(A.length - 1);
                if (p >= 55296 && p <= 56319)
                    return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = E[E.length - 2],
                        this.lastChar[1] = E[E.length - 1],
                        A.slice(0, -1)
            }
            return A
        }
        return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = E[E.length - 1],
            E.toString("utf16le", B, E.length - 1)
    }
    function k(E) {
        var B = E && E.length ? this.write(E) : "";
        if (this.lastNeed) {
            var A = this.lastTotal - this.lastNeed;
            return B + this.lastChar.toString("utf16le", 0, A)
        }
        return B
    }
    function G(E, B) {
        var A = (E.length - B) % 3;
        return A === 0 ? E.toString("base64", B) : (this.lastNeed = 3 - A,
            this.lastTotal = 3,
            A === 1 ? this.lastChar[0] = E[E.length - 1] : (this.lastChar[0] = E[E.length - 2],
                this.lastChar[1] = E[E.length - 1]),
            E.toString("base64", B, E.length - A))
    }
    function H(E) {
        var B = E && E.length ? this.write(E) : "";
        return this.lastNeed ? B + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : B
    }
    function Y(E) {
        return E.toString(this.encoding)
    }
    function $(E) {
        return E && E.length ? this.write(E) : ""
    }
    return Ze
}
var Ke = {
    exports: {}
}, Rr;
function Er() {
    if (Rr)
        return Ke.exports;
    Rr = 1;
    var x = typeof Reflect == "object" ? Reflect : null, h = x && typeof x.apply == "function" ? x.apply : function (w, R, C) {
        return Function.prototype.apply.call(w, R, C)
    }
        , d;
    x && typeof x.ownKeys == "function" ? d = x.ownKeys : Object.getOwnPropertySymbols ? d = function (w) {
        return Object.getOwnPropertyNames(w).concat(Object.getOwnPropertySymbols(w))
    }
        : d = function (w) {
            return Object.getOwnPropertyNames(w)
        }
        ;
    function b(p) {
        console && console.warn && console.warn(p)
    }
    var S = Number.isNaN || function (w) {
        return w !== w
    }
        ;
    function c() {
        c.init.call(this)
    }
    Ke.exports = c,
        Ke.exports.once = E,
        c.EventEmitter = c,
        c.prototype._events = void 0,
        c.prototype._eventsCount = 0,
        c.prototype._maxListeners = void 0;
    var y = 10;
    function u(p) {
        if (typeof p != "function")
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof p)
    }
    Object.defineProperty(c, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return y
        },
        set: function (p) {
            if (typeof p != "number" || p < 0 || S(p))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + p + ".");
            y = p
        }
    }),
        c.init = function () {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
                this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
        }
        ,
        c.prototype.setMaxListeners = function (w) {
            if (typeof w != "number" || w < 0 || S(w))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + w + ".");
            return this._maxListeners = w,
                this
        }
        ;
    function m(p) {
        return p._maxListeners === void 0 ? c.defaultMaxListeners : p._maxListeners
    }
    c.prototype.getMaxListeners = function () {
        return m(this)
    }
        ,
        c.prototype.emit = function (w) {
            for (var R = [], C = 1; C < arguments.length; C++)
                R.push(arguments[C]);
            var M = w === "error"
                , W = this._events;
            if (W !== void 0)
                M = M && W.error === void 0;
            else if (!M)
                return !1;
            if (M) {
                var V;
                if (R.length > 0 && (V = R[0]),
                    V instanceof Error)
                    throw V;
                var Z = new Error("Unhandled error." + (V ? " (" + V.message + ")" : ""));
                throw Z.context = V,
                Z
            }
            var v = W[w];
            if (v === void 0)
                return !1;
            if (typeof v == "function")
                h(v, this, R);
            else
                for (var ie = v.length, Ee = H(v, ie), C = 0; C < ie; ++C)
                    h(Ee[C], this, R);
            return !0
        }
        ;
    function N(p, w, R, C) {
        var M, W, V;
        if (u(R),
            W = p._events,
            W === void 0 ? (W = p._events = Object.create(null),
                p._eventsCount = 0) : (W.newListener !== void 0 && (p.emit("newListener", w, R.listener ? R.listener : R),
                    W = p._events),
                    V = W[w]),
            V === void 0)
            V = W[w] = R,
                ++p._eventsCount;
        else if (typeof V == "function" ? V = W[w] = C ? [R, V] : [V, R] : C ? V.unshift(R) : V.push(R),
            M = m(p),
            M > 0 && V.length > M && !V.warned) {
            V.warned = !0;
            var Z = new Error("Possible EventEmitter memory leak detected. " + V.length + " " + String(w) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            Z.name = "MaxListenersExceededWarning",
                Z.emitter = p,
                Z.type = w,
                Z.count = V.length,
                b(Z)
        }
        return p
    }
    c.prototype.addListener = function (w, R) {
        return N(this, w, R, !1)
    }
        ,
        c.prototype.on = c.prototype.addListener,
        c.prototype.prependListener = function (w, R) {
            return N(this, w, R, !0)
        }
        ;
    function D() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function U(p, w, R) {
        var C = {
            fired: !1,
            wrapFn: void 0,
            target: p,
            type: w,
            listener: R
        }
            , M = D.bind(C);
        return M.listener = R,
            C.wrapFn = M,
            M
    }
    c.prototype.once = function (w, R) {
        return u(R),
            this.on(w, U(this, w, R)),
            this
    }
        ,
        c.prototype.prependOnceListener = function (w, R) {
            return u(R),
                this.prependListener(w, U(this, w, R)),
                this
        }
        ,
        c.prototype.removeListener = function (w, R) {
            var C, M, W, V, Z;
            if (u(R),
                M = this._events,
                M === void 0)
                return this;
            if (C = M[w],
                C === void 0)
                return this;
            if (C === R || C.listener === R)
                --this._eventsCount === 0 ? this._events = Object.create(null) : (delete M[w],
                    M.removeListener && this.emit("removeListener", w, C.listener || R));
            else if (typeof C != "function") {
                for (W = -1,
                    V = C.length - 1; V >= 0; V--)
                    if (C[V] === R || C[V].listener === R) {
                        Z = C[V].listener,
                            W = V;
                        break
                    }
                if (W < 0)
                    return this;
                W === 0 ? C.shift() : Y(C, W),
                    C.length === 1 && (M[w] = C[0]),
                    M.removeListener !== void 0 && this.emit("removeListener", w, Z || R)
            }
            return this
        }
        ,
        c.prototype.off = c.prototype.removeListener,
        c.prototype.removeAllListeners = function (w) {
            var R, C, M;
            if (C = this._events,
                C === void 0)
                return this;
            if (C.removeListener === void 0)
                return arguments.length === 0 ? (this._events = Object.create(null),
                    this._eventsCount = 0) : C[w] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete C[w]),
                    this;
            if (arguments.length === 0) {
                var W = Object.keys(C), V;
                for (M = 0; M < W.length; ++M)
                    V = W[M],
                        V !== "removeListener" && this.removeAllListeners(V);
                return this.removeAllListeners("removeListener"),
                    this._events = Object.create(null),
                    this._eventsCount = 0,
                    this
            }
            if (R = C[w],
                typeof R == "function")
                this.removeListener(w, R);
            else if (R !== void 0)
                for (M = R.length - 1; M >= 0; M--)
                    this.removeListener(w, R[M]);
            return this
        }
        ;
    function k(p, w, R) {
        var C = p._events;
        if (C === void 0)
            return [];
        var M = C[w];
        return M === void 0 ? [] : typeof M == "function" ? R ? [M.listener || M] : [M] : R ? $(M) : H(M, M.length)
    }
    c.prototype.listeners = function (w) {
        return k(this, w, !0)
    }
        ,
        c.prototype.rawListeners = function (w) {
            return k(this, w, !1)
        }
        ,
        c.listenerCount = function (p, w) {
            return typeof p.listenerCount == "function" ? p.listenerCount(w) : G.call(p, w)
        }
        ,
        c.prototype.listenerCount = G;
    function G(p) {
        var w = this._events;
        if (w !== void 0) {
            var R = w[p];
            if (typeof R == "function")
                return 1;
            if (R !== void 0)
                return R.length
        }
        return 0
    }
    c.prototype.eventNames = function () {
        return this._eventsCount > 0 ? d(this._events) : []
    }
        ;
    function H(p, w) {
        for (var R = new Array(w), C = 0; C < w; ++C)
            R[C] = p[C];
        return R
    }
    function Y(p, w) {
        for (; w + 1 < p.length; w++)
            p[w] = p[w + 1];
        p.pop()
    }
    function $(p) {
        for (var w = new Array(p.length), R = 0; R < w.length; ++R)
            w[R] = p[R].listener || p[R];
        return w
    }
    function E(p, w) {
        return new Promise(function (R, C) {
            function M(V) {
                p.removeListener(w, W),
                    C(V)
            }
            function W() {
                typeof p.removeListener == "function" && p.removeListener("error", M),
                    R([].slice.call(arguments))
            }
            A(p, w, W, {
                once: !0
            }),
                w !== "error" && B(p, M, {
                    once: !0
                })
        }
        )
    }
    function B(p, w, R) {
        typeof p.on == "function" && A(p, "error", w, R)
    }
    function A(p, w, R, C) {
        if (typeof p.on == "function")
            C.once ? p.once(w, R) : p.on(w, R);
        else if (typeof p.addEventListener == "function")
            p.addEventListener(w, function M(W) {
                C.once && p.removeEventListener(w, M),
                    R(W)
            });
        else
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof p)
    }
    return Ke.exports
}
var Xe = {
    exports: {}
}, Sr;
function $e() {
    return Sr || (Sr = 1,
        typeof Object.create == "function" ? Xe.exports = function (h, d) {
            d && (h.super_ = d,
                h.prototype = Object.create(d.prototype, {
                    constructor: {
                        value: h,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
        }
            : Xe.exports = function (h, d) {
                if (d) {
                    h.super_ = d;
                    var b = function () { };
                    b.prototype = d.prototype,
                        h.prototype = new b,
                        h.prototype.constructor = h
                }
            }
    ),
        Xe.exports
}
var er, Ir;
function Kr() {
    return Ir || (Ir = 1,
        er = Er().EventEmitter),
        er
}
var rr, Ar;
function pt() {
    if (Ar)
        return rr;
    Ar = 1;
    function x(H, Y) {
        var $ = Object.keys(H);
        if (Object.getOwnPropertySymbols) {
            var E = Object.getOwnPropertySymbols(H);
            Y && (E = E.filter(function (B) {
                return Object.getOwnPropertyDescriptor(H, B).enumerable
            })),
                $.push.apply($, E)
        }
        return $
    }
    function h(H) {
        for (var Y = 1; Y < arguments.length; Y++) {
            var $ = arguments[Y] != null ? arguments[Y] : {};
            Y % 2 ? x(Object($), !0).forEach(function (E) {
                d(H, E, $[E])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors($)) : x(Object($)).forEach(function (E) {
                Object.defineProperty(H, E, Object.getOwnPropertyDescriptor($, E))
            })
        }
        return H
    }
    function d(H, Y, $) {
        return Y = y(Y),
            Y in H ? Object.defineProperty(H, Y, {
                value: $,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : H[Y] = $,
            H
    }
    function b(H, Y) {
        if (!(H instanceof Y))
            throw new TypeError("Cannot call a class as a function")
    }
    function S(H, Y) {
        for (var $ = 0; $ < Y.length; $++) {
            var E = Y[$];
            E.enumerable = E.enumerable || !1,
                E.configurable = !0,
                "value" in E && (E.writable = !0),
                Object.defineProperty(H, y(E.key), E)
        }
    }
    function c(H, Y, $) {
        return Y && S(H.prototype, Y),
            Object.defineProperty(H, "prototype", {
                writable: !1
            }),
            H
    }
    function y(H) {
        var Y = u(H, "string");
        return typeof Y == "symbol" ? Y : String(Y)
    }
    function u(H, Y) {
        if (typeof H != "object" || H === null)
            return H;
        var $ = H[Symbol.toPrimitive];
        if ($ !== void 0) {
            var E = $.call(H, Y || "default");
            if (typeof E != "object")
                return E;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (Y === "string" ? String : Number)(H)
    }
    var m = Ge
        , N = m.Buffer
        , D = $r
        , U = D.inspect
        , k = U && U.custom || "inspect";
    function G(H, Y, $) {
        N.prototype.copy.call(H, Y, $)
    }
    return rr = function () {
        function H() {
            b(this, H),
                this.head = null,
                this.tail = null,
                this.length = 0
        }
        return c(H, [{
            key: "push",
            value: function ($) {
                var E = {
                    data: $,
                    next: null
                };
                this.length > 0 ? this.tail.next = E : this.head = E,
                    this.tail = E,
                    ++this.length
            }
        }, {
            key: "unshift",
            value: function ($) {
                var E = {
                    data: $,
                    next: this.head
                };
                this.length === 0 && (this.tail = E),
                    this.head = E,
                    ++this.length
            }
        }, {
            key: "shift",
            value: function () {
                if (this.length !== 0) {
                    var $ = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        $
                }
            }
        }, {
            key: "clear",
            value: function () {
                this.head = this.tail = null,
                    this.length = 0
            }
        }, {
            key: "join",
            value: function ($) {
                if (this.length === 0)
                    return "";
                for (var E = this.head, B = "" + E.data; E = E.next;)
                    B += $ + E.data;
                return B
            }
        }, {
            key: "concat",
            value: function ($) {
                if (this.length === 0)
                    return N.alloc(0);
                for (var E = N.allocUnsafe($ >>> 0), B = this.head, A = 0; B;)
                    G(B.data, E, A),
                        A += B.data.length,
                        B = B.next;
                return E
            }
        }, {
            key: "consume",
            value: function ($, E) {
                var B;
                return $ < this.head.data.length ? (B = this.head.data.slice(0, $),
                    this.head.data = this.head.data.slice($)) : $ === this.head.data.length ? B = this.shift() : B = E ? this._getString($) : this._getBuffer($),
                    B
            }
        }, {
            key: "first",
            value: function () {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function ($) {
                var E = this.head
                    , B = 1
                    , A = E.data;
                for ($ -= A.length; E = E.next;) {
                    var p = E.data
                        , w = $ > p.length ? p.length : $;
                    if (w === p.length ? A += p : A += p.slice(0, $),
                        $ -= w,
                        $ === 0) {
                        w === p.length ? (++B,
                            E.next ? this.head = E.next : this.head = this.tail = null) : (this.head = E,
                                E.data = p.slice(w));
                        break
                    }
                    ++B
                }
                return this.length -= B,
                    A
            }
        }, {
            key: "_getBuffer",
            value: function ($) {
                var E = N.allocUnsafe($)
                    , B = this.head
                    , A = 1;
                for (B.data.copy(E),
                    $ -= B.data.length; B = B.next;) {
                    var p = B.data
                        , w = $ > p.length ? p.length : $;
                    if (p.copy(E, E.length - $, 0, w),
                        $ -= w,
                        $ === 0) {
                        w === p.length ? (++A,
                            B.next ? this.head = B.next : this.head = this.tail = null) : (this.head = B,
                                B.data = p.slice(w));
                        break
                    }
                    ++A
                }
                return this.length -= A,
                    E
            }
        }, {
            key: k,
            value: function ($, E) {
                return U(this, h(h({}, E), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]),
            H
    }(),
        rr
}
var tr, Tr;
function Xr() {
    if (Tr)
        return tr;
    Tr = 1;
    function x(y, u) {
        var m = this
            , N = this._readableState && this._readableState.destroyed
            , D = this._writableState && this._writableState.destroyed;
        return N || D ? (u ? u(y) : y && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
            ue.nextTick(S, this, y)) : ue.nextTick(S, this, y)),
            this) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(y || null, function (U) {
                    !u && U ? m._writableState ? m._writableState.errorEmitted ? ue.nextTick(d, m) : (m._writableState.errorEmitted = !0,
                        ue.nextTick(h, m, U)) : ue.nextTick(h, m, U) : u ? (ue.nextTick(d, m),
                            u(U)) : ue.nextTick(d, m)
                }),
                this)
    }
    function h(y, u) {
        S(y, u),
            d(y)
    }
    function d(y) {
        y._writableState && !y._writableState.emitClose || y._readableState && !y._readableState.emitClose || y.emit("close")
    }
    function b() {
        this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finalCalled = !1,
                this._writableState.prefinished = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
    }
    function S(y, u) {
        y.emit("error", u)
    }
    function c(y, u) {
        var m = y._readableState
            , N = y._writableState;
        m && m.autoDestroy || N && N.autoDestroy ? y.destroy(u) : y.emit("error", u)
    }
    return tr = {
        destroy: x,
        undestroy: b,
        errorOrDestroy: c
    },
        tr
}
var nr = {}, Fr;
function He() {
    if (Fr)
        return nr;
    Fr = 1;
    function x(u, m) {
        u.prototype = Object.create(m.prototype),
            u.prototype.constructor = u,
            u.__proto__ = m
    }
    var h = {};
    function d(u, m, N) {
        N || (N = Error);
        function D(k, G, H) {
            return typeof m == "string" ? m : m(k, G, H)
        }
        var U = function (k) {
            x(G, k);
            function G(H, Y, $) {
                return k.call(this, D(H, Y, $)) || this
            }
            return G
        }(N);
        U.prototype.name = N.name,
            U.prototype.code = u,
            h[u] = U
    }
    function b(u, m) {
        if (Array.isArray(u)) {
            var N = u.length;
            return u = u.map(function (D) {
                return String(D)
            }),
                N > 2 ? "one of ".concat(m, " ").concat(u.slice(0, N - 1).join(", "), ", or ") + u[N - 1] : N === 2 ? "one of ".concat(m, " ").concat(u[0], " or ").concat(u[1]) : "of ".concat(m, " ").concat(u[0])
        } else
            return "of ".concat(m, " ").concat(String(u))
    }
    function S(u, m, N) {
        return u.substr(0, m.length) === m
    }
    function c(u, m, N) {
        return (N === void 0 || N > u.length) && (N = u.length),
            u.substring(N - m.length, N) === m
    }
    function y(u, m, N) {
        return typeof N != "number" && (N = 0),
            N + m.length > u.length ? !1 : u.indexOf(m, N) !== -1
    }
    return d("ERR_INVALID_OPT_VALUE", function (u, m) {
        return 'The value "' + m + '" is invalid for option "' + u + '"'
    }, TypeError),
        d("ERR_INVALID_ARG_TYPE", function (u, m, N) {
            var D;
            typeof m == "string" && S(m, "not ") ? (D = "must not be",
                m = m.replace(/^not /, "")) : D = "must be";
            var U;
            if (c(u, " argument"))
                U = "The ".concat(u, " ").concat(D, " ").concat(b(m, "type"));
            else {
                var k = y(u, ".") ? "property" : "argument";
                U = 'The "'.concat(u, '" ').concat(k, " ").concat(D, " ").concat(b(m, "type"))
            }
            return U += ". Received type ".concat(typeof N),
                U
        }, TypeError),
        d("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        d("ERR_METHOD_NOT_IMPLEMENTED", function (u) {
            return "The " + u + " method is not implemented"
        }),
        d("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        d("ERR_STREAM_DESTROYED", function (u) {
            return "Cannot call " + u + " after a stream was destroyed"
        }),
        d("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        d("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        d("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        d("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        d("ERR_UNKNOWN_ENCODING", function (u) {
            return "Unknown encoding: " + u
        }, TypeError),
        d("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        nr.codes = h,
        nr
}
var ir, Lr;
function zr() {
    if (Lr)
        return ir;
    Lr = 1;
    var x = He().codes.ERR_INVALID_OPT_VALUE;
    function h(b, S, c) {
        return b.highWaterMark != null ? b.highWaterMark : S ? b[c] : null
    }
    function d(b, S, c, y) {
        var u = h(S, y, c);
        if (u != null) {
            if (!(isFinite(u) && Math.floor(u) === u) || u < 0) {
                var m = y ? c : "highWaterMark";
                throw new x(m, u)
            }
            return Math.floor(u)
        }
        return b.objectMode ? 16 : 16 * 1024
    }
    return ir = {
        getHighWaterMark: d
    },
        ir
}
var or, Cr;
function yt() {
    if (Cr)
        return or;
    Cr = 1,
        or = x;
    function x(d, b) {
        if (h("noDeprecation"))
            return d;
        var S = !1;
        function c() {
            if (!S) {
                if (h("throwDeprecation"))
                    throw new Error(b);
                h("traceDeprecation") ? console.trace(b) : console.warn(b),
                    S = !0
            }
            return d.apply(this, arguments)
        }
        return c
    }
    function h(d) {
        try {
            if (!qe.localStorage)
                return !1
        } catch {
            return !1
        }
        var b = qe.localStorage[d];
        return b == null ? !1 : String(b).toLowerCase() === "true"
    }
    return or
}
var ur, Ur;
function Jr() {
    if (Ur)
        return ur;
    Ur = 1,
        ur = M;
    function x(T) {
        var I = this;
        this.next = null,
            this.entry = null,
            this.finish = function () {
                Ue(I, T)
            }
    }
    var h;
    M.WritableState = R;
    var d = {
        deprecate: yt()
    }
        , b = Kr()
        , S = Ge.Buffer
        , c = (typeof qe < "u" ? qe : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () { }
        ;
    function y(T) {
        return S.from(T)
    }
    function u(T) {
        return S.isBuffer(T) || T instanceof c
    }
    var m = Xr()
        , N = zr()
        , D = N.getHighWaterMark
        , U = He().codes
        , k = U.ERR_INVALID_ARG_TYPE
        , G = U.ERR_METHOD_NOT_IMPLEMENTED
        , H = U.ERR_MULTIPLE_CALLBACK
        , Y = U.ERR_STREAM_CANNOT_PIPE
        , $ = U.ERR_STREAM_DESTROYED
        , E = U.ERR_STREAM_NULL_VALUES
        , B = U.ERR_STREAM_WRITE_AFTER_END
        , A = U.ERR_UNKNOWN_ENCODING
        , p = m.errorOrDestroy;
    $e()(M, b);
    function w() { }
    function R(T, I, q) {
        h = h || We(),
            T = T || {},
            typeof q != "boolean" && (q = I instanceof h),
            this.objectMode = !!T.objectMode,
            q && (this.objectMode = this.objectMode || !!T.writableObjectMode),
            this.highWaterMark = D(this, T, "writableHighWaterMark", q),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
        var X = T.decodeStrings === !1;
        this.decodeStrings = !X,
            this.defaultEncoding = T.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function (Q) {
                _e(I, Q)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.emitClose = T.emitClose !== !1,
            this.autoDestroy = !!T.autoDestroy,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new x(this)
    }
    R.prototype.getBuffer = function () {
        for (var I = this.bufferedRequest, q = []; I;)
            q.push(I),
                I = I.next;
        return q
    }
        ,
        function () {
            try {
                Object.defineProperty(R.prototype, "buffer", {
                    get: d.deprecate(function () {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch { }
        }();
    var C;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (C = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(M, Symbol.hasInstance, {
            value: function (I) {
                return C.call(this, I) ? !0 : this !== M ? !1 : I && I._writableState instanceof R
            }
        })) : C = function (I) {
            return I instanceof this
        }
        ;
    function M(T) {
        h = h || We();
        var I = this instanceof h;
        if (!I && !C.call(M, this))
            return new M(T);
        this._writableState = new R(T, this, I),
            this.writable = !0,
            T && (typeof T.write == "function" && (this._write = T.write),
                typeof T.writev == "function" && (this._writev = T.writev),
                typeof T.destroy == "function" && (this._destroy = T.destroy),
                typeof T.final == "function" && (this._final = T.final)),
            b.call(this)
    }
    M.prototype.pipe = function () {
        p(this, new Y)
    }
        ;
    function W(T, I) {
        var q = new B;
        p(T, q),
            ue.nextTick(I, q)
    }
    function V(T, I, q, X) {
        var Q;
        return q === null ? Q = new E : typeof q != "string" && !I.objectMode && (Q = new k("chunk", ["string", "Buffer"], q)),
            Q ? (p(T, Q),
                ue.nextTick(X, Q),
                !1) : !0
    }
    M.prototype.write = function (T, I, q) {
        var X = this._writableState
            , Q = !1
            , l = !X.objectMode && u(T);
        return l && !S.isBuffer(T) && (T = y(T)),
            typeof I == "function" && (q = I,
                I = null),
            l ? I = "buffer" : I || (I = X.defaultEncoding),
            typeof q != "function" && (q = w),
            X.ending ? W(this, q) : (l || V(this, X, T, q)) && (X.pendingcb++,
                Q = v(this, X, l, T, I, q)),
            Q
    }
        ,
        M.prototype.cork = function () {
            this._writableState.corked++
        }
        ,
        M.prototype.uncork = function () {
            var T = this._writableState;
            T.corked && (T.corked--,
                !T.writing && !T.corked && !T.bufferProcessing && T.bufferedRequest && Re(this, T))
        }
        ,
        M.prototype.setDefaultEncoding = function (I) {
            if (typeof I == "string" && (I = I.toLowerCase()),
                !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((I + "").toLowerCase()) > -1))
                throw new A(I);
            return this._writableState.defaultEncoding = I,
                this
        }
        ,
        Object.defineProperty(M.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
                return this._writableState && this._writableState.getBuffer()
            }
        });
    function Z(T, I, q) {
        return !T.objectMode && T.decodeStrings !== !1 && typeof I == "string" && (I = S.from(I, q)),
            I
    }
    Object.defineProperty(M.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark
        }
    });
    function v(T, I, q, X, Q, l) {
        if (!q) {
            var s = Z(I, X, Q);
            X !== s && (q = !0,
                Q = "buffer",
                X = s)
        }
        var j = I.objectMode ? 1 : X.length;
        I.length += j;
        var K = I.length < I.highWaterMark;
        if (K || (I.needDrain = !0),
            I.writing || I.corked) {
            var fe = I.lastBufferedRequest;
            I.lastBufferedRequest = {
                chunk: X,
                encoding: Q,
                isBuf: q,
                callback: l,
                next: null
            },
                fe ? fe.next = I.lastBufferedRequest : I.bufferedRequest = I.lastBufferedRequest,
                I.bufferedRequestCount += 1
        } else
            ie(T, I, !1, j, X, Q, l);
        return K
    }
    function ie(T, I, q, X, Q, l, s) {
        I.writelen = X,
            I.writecb = s,
            I.writing = !0,
            I.sync = !0,
            I.destroyed ? I.onwrite(new $("write")) : q ? T._writev(Q, I.onwrite) : T._write(Q, l, I.onwrite),
            I.sync = !1
    }
    function Ee(T, I, q, X, Q) {
        --I.pendingcb,
            q ? (ue.nextTick(Q, X),
                ue.nextTick(xe, T, I),
                T._writableState.errorEmitted = !0,
                p(T, X)) : (Q(X),
                    T._writableState.errorEmitted = !0,
                    p(T, X),
                    xe(T, I))
    }
    function ge(T) {
        T.writing = !1,
            T.writecb = null,
            T.length -= T.writelen,
            T.writelen = 0
    }
    function _e(T, I) {
        var q = T._writableState
            , X = q.sync
            , Q = q.writecb;
        if (typeof Q != "function")
            throw new H;
        if (ge(q),
            I)
            Ee(T, q, X, I, Q);
        else {
            var l = Se(q) || T.destroyed;
            !l && !q.corked && !q.bufferProcessing && q.bufferedRequest && Re(T, q),
                X ? ue.nextTick(be, T, q, l, Q) : be(T, q, l, Q)
        }
    }
    function be(T, I, q, X) {
        q || ve(T, I),
            I.pendingcb--,
            X(),
            xe(T, I)
    }
    function ve(T, I) {
        I.length === 0 && I.needDrain && (I.needDrain = !1,
            T.emit("drain"))
    }
    function Re(T, I) {
        I.bufferProcessing = !0;
        var q = I.bufferedRequest;
        if (T._writev && q && q.next) {
            var X = I.bufferedRequestCount
                , Q = new Array(X)
                , l = I.corkedRequestsFree;
            l.entry = q;
            for (var s = 0, j = !0; q;)
                Q[s] = q,
                    q.isBuf || (j = !1),
                    q = q.next,
                    s += 1;
            Q.allBuffers = j,
                ie(T, I, !0, I.length, Q, "", l.finish),
                I.pendingcb++,
                I.lastBufferedRequest = null,
                l.next ? (I.corkedRequestsFree = l.next,
                    l.next = null) : I.corkedRequestsFree = new x(I),
                I.bufferedRequestCount = 0
        } else {
            for (; q;) {
                var K = q.chunk
                    , fe = q.encoding
                    , J = q.callback
                    , re = I.objectMode ? 1 : K.length;
                if (ie(T, I, !1, re, K, fe, J),
                    q = q.next,
                    I.bufferedRequestCount--,
                    I.writing)
                    break
            }
            q === null && (I.lastBufferedRequest = null)
        }
        I.bufferedRequest = q,
            I.bufferProcessing = !1
    }
    M.prototype._write = function (T, I, q) {
        q(new G("_write()"))
    }
        ,
        M.prototype._writev = null,
        M.prototype.end = function (T, I, q) {
            var X = this._writableState;
            return typeof T == "function" ? (q = T,
                T = null,
                I = null) : typeof I == "function" && (q = I,
                    I = null),
                T != null && this.write(T, I),
                X.corked && (X.corked = 1,
                    this.uncork()),
                X.ending || Ce(this, X, q),
                this
        }
        ,
        Object.defineProperty(M.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
                return this._writableState.length
            }
        });
    function Se(T) {
        return T.ending && T.length === 0 && T.bufferedRequest === null && !T.finished && !T.writing
    }
    function se(T, I) {
        T._final(function (q) {
            I.pendingcb--,
                q && p(T, q),
                I.prefinished = !0,
                T.emit("prefinish"),
                xe(T, I)
        })
    }
    function de(T, I) {
        !I.prefinished && !I.finalCalled && (typeof T._final == "function" && !I.destroyed ? (I.pendingcb++,
            I.finalCalled = !0,
            ue.nextTick(se, T, I)) : (I.prefinished = !0,
                T.emit("prefinish")))
    }
    function xe(T, I) {
        var q = Se(I);
        if (q && (de(T, I),
            I.pendingcb === 0 && (I.finished = !0,
                T.emit("finish"),
                I.autoDestroy))) {
            var X = T._readableState;
            (!X || X.autoDestroy && X.endEmitted) && T.destroy()
        }
        return q
    }
    function Ce(T, I, q) {
        I.ending = !0,
            xe(T, I),
            q && (I.finished ? ue.nextTick(q) : T.once("finish", q)),
            I.ended = !0,
            T.writable = !1
    }
    function Ue(T, I, q) {
        var X = T.entry;
        for (T.entry = null; X;) {
            var Q = X.callback;
            I.pendingcb--,
                Q(q),
                X = X.next
        }
        I.corkedRequestsFree.next = T
    }
    return Object.defineProperty(M.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function (I) {
            this._writableState && (this._writableState.destroyed = I)
        }
    }),
        M.prototype.destroy = m.destroy,
        M.prototype._undestroy = m.undestroy,
        M.prototype._destroy = function (T, I) {
            I(T)
        }
        ,
        ur
}
var fr, Mr;
function We() {
    if (Mr)
        return fr;
    Mr = 1;
    var x = Object.keys || function (N) {
        var D = [];
        for (var U in N)
            D.push(U);
        return D
    }
        ;
    fr = y;
    var h = Qr()
        , d = Jr();
    $e()(y, h);
    for (var b = x(d.prototype), S = 0; S < b.length; S++) {
        var c = b[S];
        y.prototype[c] || (y.prototype[c] = d.prototype[c])
    }
    function y(N) {
        if (!(this instanceof y))
            return new y(N);
        h.call(this, N),
            d.call(this, N),
            this.allowHalfOpen = !0,
            N && (N.readable === !1 && (this.readable = !1),
                N.writable === !1 && (this.writable = !1),
                N.allowHalfOpen === !1 && (this.allowHalfOpen = !1,
                    this.once("end", u)))
    }
    Object.defineProperty(y.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark
        }
    }),
        Object.defineProperty(y.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(y.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
                return this._writableState.length
            }
        });
    function u() {
        this._writableState.ended || ue.nextTick(m, this)
    }
    function m(N) {
        N.end()
    }
    return Object.defineProperty(y.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function (D) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = D,
                this._writableState.destroyed = D)
        }
    }),
        fr
}
var ar, Nr;
function mr() {
    if (Nr)
        return ar;
    Nr = 1;
    var x = He().codes.ERR_STREAM_PREMATURE_CLOSE;
    function h(c) {
        var y = !1;
        return function () {
            if (!y) {
                y = !0;
                for (var u = arguments.length, m = new Array(u), N = 0; N < u; N++)
                    m[N] = arguments[N];
                c.apply(this, m)
            }
        }
    }
    function d() { }
    function b(c) {
        return c.setHeader && typeof c.abort == "function"
    }
    function S(c, y, u) {
        if (typeof y == "function")
            return S(c, null, y);
        y || (y = {}),
            u = h(u || d);
        var m = y.readable || y.readable !== !1 && c.readable
            , N = y.writable || y.writable !== !1 && c.writable
            , D = function () {
                c.writable || k()
            }
            , U = c._writableState && c._writableState.finished
            , k = function () {
                N = !1,
                    U = !0,
                    m || u.call(c)
            }
            , G = c._readableState && c._readableState.endEmitted
            , H = function () {
                m = !1,
                    G = !0,
                    N || u.call(c)
            }
            , Y = function (A) {
                u.call(c, A)
            }
            , $ = function () {
                var A;
                if (m && !G)
                    return (!c._readableState || !c._readableState.ended) && (A = new x),
                        u.call(c, A);
                if (N && !U)
                    return (!c._writableState || !c._writableState.ended) && (A = new x),
                        u.call(c, A)
            }
            , E = function () {
                c.req.on("finish", k)
            };
        return b(c) ? (c.on("complete", k),
            c.on("abort", $),
            c.req ? E() : c.on("request", E)) : N && !c._writableState && (c.on("end", D),
                c.on("close", D)),
            c.on("end", H),
            c.on("finish", k),
            y.error !== !1 && c.on("error", Y),
            c.on("close", $),
            function () {
                c.removeListener("complete", k),
                    c.removeListener("abort", $),
                    c.removeListener("request", E),
                    c.req && c.req.removeListener("finish", k),
                    c.removeListener("end", D),
                    c.removeListener("close", D),
                    c.removeListener("finish", k),
                    c.removeListener("end", H),
                    c.removeListener("error", Y),
                    c.removeListener("close", $)
            }
    }
    return ar = S,
        ar
}
var lr, Or;
function wt() {
    if (Or)
        return lr;
    Or = 1;
    var x;
    function h(A, p, w) {
        return p = d(p),
            p in A ? Object.defineProperty(A, p, {
                value: w,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : A[p] = w,
            A
    }
    function d(A) {
        var p = b(A, "string");
        return typeof p == "symbol" ? p : String(p)
    }
    function b(A, p) {
        if (typeof A != "object" || A === null)
            return A;
        var w = A[Symbol.toPrimitive];
        if (w !== void 0) {
            var R = w.call(A, p || "default");
            if (typeof R != "object")
                return R;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (p === "string" ? String : Number)(A)
    }
    var S = mr()
        , c = Symbol("lastResolve")
        , y = Symbol("lastReject")
        , u = Symbol("error")
        , m = Symbol("ended")
        , N = Symbol("lastPromise")
        , D = Symbol("handlePromise")
        , U = Symbol("stream");
    function k(A, p) {
        return {
            value: A,
            done: p
        }
    }
    function G(A) {
        var p = A[c];
        if (p !== null) {
            var w = A[U].read();
            w !== null && (A[N] = null,
                A[c] = null,
                A[y] = null,
                p(k(w, !1)))
        }
    }
    function H(A) {
        ue.nextTick(G, A)
    }
    function Y(A, p) {
        return function (w, R) {
            A.then(function () {
                if (p[m]) {
                    w(k(void 0, !0));
                    return
                }
                p[D](w, R)
            }, R)
        }
    }
    var $ = Object.getPrototypeOf(function () { })
        , E = Object.setPrototypeOf((x = {
            get stream() {
                return this[U]
            },
            next: function () {
                var p = this
                    , w = this[u];
                if (w !== null)
                    return Promise.reject(w);
                if (this[m])
                    return Promise.resolve(k(void 0, !0));
                if (this[U].destroyed)
                    return new Promise(function (W, V) {
                        ue.nextTick(function () {
                            p[u] ? V(p[u]) : W(k(void 0, !0))
                        })
                    }
                    );
                var R = this[N], C;
                if (R)
                    C = new Promise(Y(R, this));
                else {
                    var M = this[U].read();
                    if (M !== null)
                        return Promise.resolve(k(M, !1));
                    C = new Promise(this[D])
                }
                return this[N] = C,
                    C
            }
        },
            h(x, Symbol.asyncIterator, function () {
                return this
            }),
            h(x, "return", function () {
                var p = this;
                return new Promise(function (w, R) {
                    p[U].destroy(null, function (C) {
                        if (C) {
                            R(C);
                            return
                        }
                        w(k(void 0, !0))
                    })
                }
                )
            }),
            x), $)
        , B = function (p) {
            var w, R = Object.create(E, (w = {},
                h(w, U, {
                    value: p,
                    writable: !0
                }),
                h(w, c, {
                    value: null,
                    writable: !0
                }),
                h(w, y, {
                    value: null,
                    writable: !0
                }),
                h(w, u, {
                    value: null,
                    writable: !0
                }),
                h(w, m, {
                    value: p._readableState.endEmitted,
                    writable: !0
                }),
                h(w, D, {
                    value: function (M, W) {
                        var V = R[U].read();
                        V ? (R[N] = null,
                            R[c] = null,
                            R[y] = null,
                            M(k(V, !1))) : (R[c] = M,
                                R[y] = W)
                    },
                    writable: !0
                }),
                w));
            return R[N] = null,
                S(p, function (C) {
                    if (C && C.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                        var M = R[y];
                        M !== null && (R[N] = null,
                            R[c] = null,
                            R[y] = null,
                            M(C)),
                            R[u] = C;
                        return
                    }
                    var W = R[c];
                    W !== null && (R[N] = null,
                        R[c] = null,
                        R[y] = null,
                        W(k(void 0, !0))),
                        R[m] = !0
                }),
                p.on("readable", H.bind(null, R)),
                R
        };
    return lr = B,
        lr
}
var sr, Pr;
function gt() {
    return Pr || (Pr = 1,
        sr = function () {
            throw new Error("Readable.from is not available in the browser")
        }
    ),
        sr
}
var hr, Dr;
function Qr() {
    if (Dr)
        return hr;
    Dr = 1,
        hr = W;
    var x;
    W.ReadableState = M,
        Er().EventEmitter;
    var h = function (s, j) {
        return s.listeners(j).length
    }
        , d = Kr()
        , b = Ge.Buffer
        , S = (typeof qe < "u" ? qe : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () { }
        ;
    function c(l) {
        return b.from(l)
    }
    function y(l) {
        return b.isBuffer(l) || l instanceof S
    }
    var u = $r, m;
    u && u.debuglog ? m = u.debuglog("stream") : m = function () { }
        ;
    var N = pt(), D = Xr(), U = zr(), k = U.getHighWaterMark, G = He().codes, H = G.ERR_INVALID_ARG_TYPE, Y = G.ERR_STREAM_PUSH_AFTER_EOF, $ = G.ERR_METHOD_NOT_IMPLEMENTED, E = G.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, B, A, p;
    $e()(W, d);
    var w = D.errorOrDestroy
        , R = ["error", "close", "destroy", "pause", "resume"];
    function C(l, s, j) {
        if (typeof l.prependListener == "function")
            return l.prependListener(s, j);
        !l._events || !l._events[s] ? l.on(s, j) : Array.isArray(l._events[s]) ? l._events[s].unshift(j) : l._events[s] = [j, l._events[s]]
    }
    function M(l, s, j) {
        x = x || We(),
            l = l || {},
            typeof j != "boolean" && (j = s instanceof x),
            this.objectMode = !!l.objectMode,
            j && (this.objectMode = this.objectMode || !!l.readableObjectMode),
            this.highWaterMark = k(this, l, "readableHighWaterMark", j),
            this.buffer = new N,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.paused = !0,
            this.emitClose = l.emitClose !== !1,
            this.autoDestroy = !!l.autoDestroy,
            this.destroyed = !1,
            this.defaultEncoding = l.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            l.encoding && (B || (B = vr().StringDecoder),
                this.decoder = new B(l.encoding),
                this.encoding = l.encoding)
    }
    function W(l) {
        if (x = x || We(),
            !(this instanceof W))
            return new W(l);
        var s = this instanceof x;
        this._readableState = new M(l, this, s),
            this.readable = !0,
            l && (typeof l.read == "function" && (this._read = l.read),
                typeof l.destroy == "function" && (this._destroy = l.destroy)),
            d.call(this)
    }
    Object.defineProperty(W.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function (s) {
            this._readableState && (this._readableState.destroyed = s)
        }
    }),
        W.prototype.destroy = D.destroy,
        W.prototype._undestroy = D.undestroy,
        W.prototype._destroy = function (l, s) {
            s(l)
        }
        ,
        W.prototype.push = function (l, s) {
            var j = this._readableState, K;
            return j.objectMode ? K = !0 : typeof l == "string" && (s = s || j.defaultEncoding,
                s !== j.encoding && (l = b.from(l, s),
                    s = ""),
                K = !0),
                V(this, l, s, !1, K)
        }
        ,
        W.prototype.unshift = function (l) {
            return V(this, l, null, !0, !1)
        }
        ;
    function V(l, s, j, K, fe) {
        m("readableAddChunk", s);
        var J = l._readableState;
        if (s === null)
            J.reading = !1,
                _e(l, J);
        else {
            var re;
            if (fe || (re = v(J, s)),
                re)
                w(l, re);
            else if (J.objectMode || s && s.length > 0)
                if (typeof s != "string" && !J.objectMode && Object.getPrototypeOf(s) !== b.prototype && (s = c(s)),
                    K)
                    J.endEmitted ? w(l, new E) : Z(l, J, s, !0);
                else if (J.ended)
                    w(l, new Y);
                else {
                    if (J.destroyed)
                        return !1;
                    J.reading = !1,
                        J.decoder && !j ? (s = J.decoder.write(s),
                            J.objectMode || s.length !== 0 ? Z(l, J, s, !1) : Re(l, J)) : Z(l, J, s, !1)
                }
            else
                K || (J.reading = !1,
                    Re(l, J))
        }
        return !J.ended && (J.length < J.highWaterMark || J.length === 0)
    }
    function Z(l, s, j, K) {
        s.flowing && s.length === 0 && !s.sync ? (s.awaitDrain = 0,
            l.emit("data", j)) : (s.length += s.objectMode ? 1 : j.length,
                K ? s.buffer.unshift(j) : s.buffer.push(j),
                s.needReadable && be(l)),
            Re(l, s)
    }
    function v(l, s) {
        var j;
        return !y(s) && typeof s != "string" && s !== void 0 && !l.objectMode && (j = new H("chunk", ["string", "Buffer", "Uint8Array"], s)),
            j
    }
    W.prototype.isPaused = function () {
        return this._readableState.flowing === !1
    }
        ,
        W.prototype.setEncoding = function (l) {
            B || (B = vr().StringDecoder);
            var s = new B(l);
            this._readableState.decoder = s,
                this._readableState.encoding = this._readableState.decoder.encoding;
            for (var j = this._readableState.buffer.head, K = ""; j !== null;)
                K += s.write(j.data),
                    j = j.next;
            return this._readableState.buffer.clear(),
                K !== "" && this._readableState.buffer.push(K),
                this._readableState.length = K.length,
                this
        }
        ;
    var ie = 1073741824;
    function Ee(l) {
        return l >= ie ? l = ie : (l--,
            l |= l >>> 1,
            l |= l >>> 2,
            l |= l >>> 4,
            l |= l >>> 8,
            l |= l >>> 16,
            l++),
            l
    }
    function ge(l, s) {
        return l <= 0 || s.length === 0 && s.ended ? 0 : s.objectMode ? 1 : l !== l ? s.flowing && s.length ? s.buffer.head.data.length : s.length : (l > s.highWaterMark && (s.highWaterMark = Ee(l)),
            l <= s.length ? l : s.ended ? s.length : (s.needReadable = !0,
                0))
    }
    W.prototype.read = function (l) {
        m("read", l),
            l = parseInt(l, 10);
        var s = this._readableState
            , j = l;
        if (l !== 0 && (s.emittedReadable = !1),
            l === 0 && s.needReadable && ((s.highWaterMark !== 0 ? s.length >= s.highWaterMark : s.length > 0) || s.ended))
            return m("read: emitReadable", s.length, s.ended),
                s.length === 0 && s.ended ? q(this) : be(this),
                null;
        if (l = ge(l, s),
            l === 0 && s.ended)
            return s.length === 0 && q(this),
                null;
        var K = s.needReadable;
        m("need readable", K),
            (s.length === 0 || s.length - l < s.highWaterMark) && (K = !0,
                m("length less than watermark", K)),
            s.ended || s.reading ? (K = !1,
                m("reading or ended", K)) : K && (m("do read"),
                    s.reading = !0,
                    s.sync = !0,
                    s.length === 0 && (s.needReadable = !0),
                    this._read(s.highWaterMark),
                    s.sync = !1,
                    s.reading || (l = ge(j, s)));
        var fe;
        return l > 0 ? fe = I(l, s) : fe = null,
            fe === null ? (s.needReadable = s.length <= s.highWaterMark,
                l = 0) : (s.length -= l,
                    s.awaitDrain = 0),
            s.length === 0 && (s.ended || (s.needReadable = !0),
                j !== l && s.ended && q(this)),
            fe !== null && this.emit("data", fe),
            fe
    }
        ;
    function _e(l, s) {
        if (m("onEofChunk"),
            !s.ended) {
            if (s.decoder) {
                var j = s.decoder.end();
                j && j.length && (s.buffer.push(j),
                    s.length += s.objectMode ? 1 : j.length)
            }
            s.ended = !0,
                s.sync ? be(l) : (s.needReadable = !1,
                    s.emittedReadable || (s.emittedReadable = !0,
                        ve(l)))
        }
    }
    function be(l) {
        var s = l._readableState;
        m("emitReadable", s.needReadable, s.emittedReadable),
            s.needReadable = !1,
            s.emittedReadable || (m("emitReadable", s.flowing),
                s.emittedReadable = !0,
                ue.nextTick(ve, l))
    }
    function ve(l) {
        var s = l._readableState;
        m("emitReadable_", s.destroyed, s.length, s.ended),
            !s.destroyed && (s.length || s.ended) && (l.emit("readable"),
                s.emittedReadable = !1),
            s.needReadable = !s.flowing && !s.ended && s.length <= s.highWaterMark,
            T(l)
    }
    function Re(l, s) {
        s.readingMore || (s.readingMore = !0,
            ue.nextTick(Se, l, s))
    }
    function Se(l, s) {
        for (; !s.reading && !s.ended && (s.length < s.highWaterMark || s.flowing && s.length === 0);) {
            var j = s.length;
            if (m("maybeReadMore read 0"),
                l.read(0),
                j === s.length)
                break
        }
        s.readingMore = !1
    }
    W.prototype._read = function (l) {
        w(this, new $("_read()"))
    }
        ,
        W.prototype.pipe = function (l, s) {
            var j = this
                , K = this._readableState;
            switch (K.pipesCount) {
                case 0:
                    K.pipes = l;
                    break;
                case 1:
                    K.pipes = [K.pipes, l];
                    break;
                default:
                    K.pipes.push(l);
                    break
            }
            K.pipesCount += 1,
                m("pipe count=%d opts=%j", K.pipesCount, s);
            var fe = (!s || s.end !== !1) && l !== ue.stdout && l !== ue.stderr
                , J = fe ? Ie : Ae;
            K.endEmitted ? ue.nextTick(J) : j.once("end", J),
                l.on("unpipe", re);
            function re(i, e) {
                m("onunpipe"),
                    i === j && e && e.hasUnpiped === !1 && (e.hasUnpiped = !0,
                        Ne())
            }
            function Ie() {
                m("onend"),
                    l.end()
            }
            var Me = se(j);
            l.on("drain", Me);
            var De = !1;
            function Ne() {
                m("cleanup"),
                    l.removeListener("close", Oe),
                    l.removeListener("finish", me),
                    l.removeListener("drain", Me),
                    l.removeListener("error", pe),
                    l.removeListener("unpipe", re),
                    j.removeListener("end", Ie),
                    j.removeListener("end", Ae),
                    j.removeListener("data", te),
                    De = !0,
                    K.awaitDrain && (!l._writableState || l._writableState.needDrain) && Me()
            }
            j.on("data", te);
            function te(i) {
                m("ondata");
                var e = l.write(i);
                m("dest.write", e),
                    e === !1 && ((K.pipesCount === 1 && K.pipes === l || K.pipesCount > 1 && Q(K.pipes, l) !== -1) && !De && (m("false write response, pause", K.awaitDrain),
                        K.awaitDrain++),
                        j.pause())
            }
            function pe(i) {
                m("onerror", i),
                    Ae(),
                    l.removeListener("error", pe),
                    h(l, "error") === 0 && w(l, i)
            }
            C(l, "error", pe);
            function Oe() {
                l.removeListener("finish", me),
                    Ae()
            }
            l.once("close", Oe);
            function me() {
                m("onfinish"),
                    l.removeListener("close", Oe),
                    Ae()
            }
            l.once("finish", me);
            function Ae() {
                m("unpipe"),
                    j.unpipe(l)
            }
            return l.emit("pipe", j),
                K.flowing || (m("pipe resume"),
                    j.resume()),
                l
        }
        ;
    function se(l) {
        return function () {
            var j = l._readableState;
            m("pipeOnDrain", j.awaitDrain),
                j.awaitDrain && j.awaitDrain--,
                j.awaitDrain === 0 && h(l, "data") && (j.flowing = !0,
                    T(l))
        }
    }
    W.prototype.unpipe = function (l) {
        var s = this._readableState
            , j = {
                hasUnpiped: !1
            };
        if (s.pipesCount === 0)
            return this;
        if (s.pipesCount === 1)
            return l && l !== s.pipes ? this : (l || (l = s.pipes),
                s.pipes = null,
                s.pipesCount = 0,
                s.flowing = !1,
                l && l.emit("unpipe", this, j),
                this);
        if (!l) {
            var K = s.pipes
                , fe = s.pipesCount;
            s.pipes = null,
                s.pipesCount = 0,
                s.flowing = !1;
            for (var J = 0; J < fe; J++)
                K[J].emit("unpipe", this, {
                    hasUnpiped: !1
                });
            return this
        }
        var re = Q(s.pipes, l);
        return re === -1 ? this : (s.pipes.splice(re, 1),
            s.pipesCount -= 1,
            s.pipesCount === 1 && (s.pipes = s.pipes[0]),
            l.emit("unpipe", this, j),
            this)
    }
        ,
        W.prototype.on = function (l, s) {
            var j = d.prototype.on.call(this, l, s)
                , K = this._readableState;
            return l === "data" ? (K.readableListening = this.listenerCount("readable") > 0,
                K.flowing !== !1 && this.resume()) : l === "readable" && !K.endEmitted && !K.readableListening && (K.readableListening = K.needReadable = !0,
                    K.flowing = !1,
                    K.emittedReadable = !1,
                    m("on readable", K.length, K.reading),
                    K.length ? be(this) : K.reading || ue.nextTick(xe, this)),
                j
        }
        ,
        W.prototype.addListener = W.prototype.on,
        W.prototype.removeListener = function (l, s) {
            var j = d.prototype.removeListener.call(this, l, s);
            return l === "readable" && ue.nextTick(de, this),
                j
        }
        ,
        W.prototype.removeAllListeners = function (l) {
            var s = d.prototype.removeAllListeners.apply(this, arguments);
            return (l === "readable" || l === void 0) && ue.nextTick(de, this),
                s
        }
        ;
    function de(l) {
        var s = l._readableState;
        s.readableListening = l.listenerCount("readable") > 0,
            s.resumeScheduled && !s.paused ? s.flowing = !0 : l.listenerCount("data") > 0 && l.resume()
    }
    function xe(l) {
        m("readable nexttick read 0"),
            l.read(0)
    }
    W.prototype.resume = function () {
        var l = this._readableState;
        return l.flowing || (m("resume"),
            l.flowing = !l.readableListening,
            Ce(this, l)),
            l.paused = !1,
            this
    }
        ;
    function Ce(l, s) {
        s.resumeScheduled || (s.resumeScheduled = !0,
            ue.nextTick(Ue, l, s))
    }
    function Ue(l, s) {
        m("resume", s.reading),
            s.reading || l.read(0),
            s.resumeScheduled = !1,
            l.emit("resume"),
            T(l),
            s.flowing && !s.reading && l.read(0)
    }
    W.prototype.pause = function () {
        return m("call pause flowing=%j", this._readableState.flowing),
            this._readableState.flowing !== !1 && (m("pause"),
                this._readableState.flowing = !1,
                this.emit("pause")),
            this._readableState.paused = !0,
            this
    }
        ;
    function T(l) {
        var s = l._readableState;
        for (m("flow", s.flowing); s.flowing && l.read() !== null;)
            ;
    }
    W.prototype.wrap = function (l) {
        var s = this
            , j = this._readableState
            , K = !1;
        l.on("end", function () {
            if (m("wrapped end"),
                j.decoder && !j.ended) {
                var re = j.decoder.end();
                re && re.length && s.push(re)
            }
            s.push(null)
        }),
            l.on("data", function (re) {
                if (m("wrapped data"),
                    j.decoder && (re = j.decoder.write(re)),
                    !(j.objectMode && re == null) && !(!j.objectMode && (!re || !re.length))) {
                    var Ie = s.push(re);
                    Ie || (K = !0,
                        l.pause())
                }
            });
        for (var fe in l)
            this[fe] === void 0 && typeof l[fe] == "function" && (this[fe] = function (Ie) {
                return function () {
                    return l[Ie].apply(l, arguments)
                }
            }(fe));
        for (var J = 0; J < R.length; J++)
            l.on(R[J], this.emit.bind(this, R[J]));
        return this._read = function (re) {
            m("wrapped _read", re),
                K && (K = !1,
                    l.resume())
        }
            ,
            this
    }
        ,
        typeof Symbol == "function" && (W.prototype[Symbol.asyncIterator] = function () {
            return A === void 0 && (A = wt()),
                A(this)
        }
        ),
        Object.defineProperty(W.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
                return this._readableState.highWaterMark
            }
        }),
        Object.defineProperty(W.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
                return this._readableState && this._readableState.buffer
            }
        }),
        Object.defineProperty(W.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
                return this._readableState.flowing
            },
            set: function (s) {
                this._readableState && (this._readableState.flowing = s)
            }
        }),
        W._fromList = I,
        Object.defineProperty(W.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
                return this._readableState.length
            }
        });
    function I(l, s) {
        if (s.length === 0)
            return null;
        var j;
        return s.objectMode ? j = s.buffer.shift() : !l || l >= s.length ? (s.decoder ? j = s.buffer.join("") : s.buffer.length === 1 ? j = s.buffer.first() : j = s.buffer.concat(s.length),
            s.buffer.clear()) : j = s.buffer.consume(l, s.decoder),
            j
    }
    function q(l) {
        var s = l._readableState;
        m("endReadable", s.endEmitted),
            s.endEmitted || (s.ended = !0,
                ue.nextTick(X, s, l))
    }
    function X(l, s) {
        if (m("endReadableNT", l.endEmitted, l.length),
            !l.endEmitted && l.length === 0 && (l.endEmitted = !0,
                s.readable = !1,
                s.emit("end"),
                l.autoDestroy)) {
            var j = s._writableState;
            (!j || j.autoDestroy && j.finished) && s.destroy()
        }
    }
    typeof Symbol == "function" && (W.from = function (l, s) {
        return p === void 0 && (p = gt()),
            p(W, l, s)
    }
    );
    function Q(l, s) {
        for (var j = 0, K = l.length; j < K; j++)
            if (l[j] === s)
                return j;
        return -1
    }
    return hr
}
var cr, kr;
function Zr() {
    if (kr)
        return cr;
    kr = 1,
        cr = u;
    var x = He().codes
        , h = x.ERR_METHOD_NOT_IMPLEMENTED
        , d = x.ERR_MULTIPLE_CALLBACK
        , b = x.ERR_TRANSFORM_ALREADY_TRANSFORMING
        , S = x.ERR_TRANSFORM_WITH_LENGTH_0
        , c = We();
    $e()(u, c);
    function y(D, U) {
        var k = this._transformState;
        k.transforming = !1;
        var G = k.writecb;
        if (G === null)
            return this.emit("error", new d);
        k.writechunk = null,
            k.writecb = null,
            U != null && this.push(U),
            G(D);
        var H = this._readableState;
        H.reading = !1,
            (H.needReadable || H.length < H.highWaterMark) && this._read(H.highWaterMark)
    }
    function u(D) {
        if (!(this instanceof u))
            return new u(D);
        c.call(this, D),
            this._transformState = {
                afterTransform: y.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            D && (typeof D.transform == "function" && (this._transform = D.transform),
                typeof D.flush == "function" && (this._flush = D.flush)),
            this.on("prefinish", m)
    }
    function m() {
        var D = this;
        typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function (U, k) {
            N(D, U, k)
        }) : N(this, null, null)
    }
    u.prototype.push = function (D, U) {
        return this._transformState.needTransform = !1,
            c.prototype.push.call(this, D, U)
    }
        ,
        u.prototype._transform = function (D, U, k) {
            k(new h("_transform()"))
        }
        ,
        u.prototype._write = function (D, U, k) {
            var G = this._transformState;
            if (G.writecb = k,
                G.writechunk = D,
                G.writeencoding = U,
                !G.transforming) {
                var H = this._readableState;
                (G.needTransform || H.needReadable || H.length < H.highWaterMark) && this._read(H.highWaterMark)
            }
        }
        ,
        u.prototype._read = function (D) {
            var U = this._transformState;
            U.writechunk !== null && !U.transforming ? (U.transforming = !0,
                this._transform(U.writechunk, U.writeencoding, U.afterTransform)) : U.needTransform = !0
        }
        ,
        u.prototype._destroy = function (D, U) {
            c.prototype._destroy.call(this, D, function (k) {
                U(k)
            })
        }
        ;
    function N(D, U, k) {
        if (U)
            return D.emit("error", U);
        if (k != null && D.push(k),
            D._writableState.length)
            throw new S;
        if (D._transformState.transforming)
            throw new b;
        return D.push(null)
    }
    return cr
}
var dr, jr;
function Et() {
    if (jr)
        return dr;
    jr = 1,
        dr = h;
    var x = Zr();
    $e()(h, x);
    function h(d) {
        if (!(this instanceof h))
            return new h(d);
        x.call(this, d)
    }
    return h.prototype._transform = function (d, b, S) {
        S(null, d)
    }
        ,
        dr
}
var pr, qr;
function mt() {
    if (qr)
        return pr;
    qr = 1;
    var x;
    function h(k) {
        var G = !1;
        return function () {
            G || (G = !0,
                k.apply(void 0, arguments))
        }
    }
    var d = He().codes
        , b = d.ERR_MISSING_ARGS
        , S = d.ERR_STREAM_DESTROYED;
    function c(k) {
        if (k)
            throw k
    }
    function y(k) {
        return k.setHeader && typeof k.abort == "function"
    }
    function u(k, G, H, Y) {
        Y = h(Y);
        var $ = !1;
        k.on("close", function () {
            $ = !0
        }),
            x === void 0 && (x = mr()),
            x(k, {
                readable: G,
                writable: H
            }, function (B) {
                if (B)
                    return Y(B);
                $ = !0,
                    Y()
            });
        var E = !1;
        return function (B) {
            if (!$ && !E) {
                if (E = !0,
                    y(k))
                    return k.abort();
                if (typeof k.destroy == "function")
                    return k.destroy();
                Y(B || new S("pipe"))
            }
        }
    }
    function m(k) {
        k()
    }
    function N(k, G) {
        return k.pipe(G)
    }
    function D(k) {
        return !k.length || typeof k[k.length - 1] != "function" ? c : k.pop()
    }
    function U() {
        for (var k = arguments.length, G = new Array(k), H = 0; H < k; H++)
            G[H] = arguments[H];
        var Y = D(G);
        if (Array.isArray(G[0]) && (G = G[0]),
            G.length < 2)
            throw new b("streams");
        var $, E = G.map(function (B, A) {
            var p = A < G.length - 1
                , w = A > 0;
            return u(B, p, w, function (R) {
                $ || ($ = R),
                    R && E.forEach(m),
                    !p && (E.forEach(m),
                        Y($))
            })
        });
        return G.reduce(N)
    }
    return pr = U,
        pr
}
var yr, Wr;
function St() {
    if (Wr)
        return yr;
    Wr = 1,
        yr = d;
    var x = Er().EventEmitter
        , h = $e();
    h(d, x),
        d.Readable = Qr(),
        d.Writable = Jr(),
        d.Duplex = We(),
        d.Transform = Zr(),
        d.PassThrough = Et(),
        d.finished = mr(),
        d.pipeline = mt(),
        d.Stream = d;
    function d() {
        x.call(this)
    }
    return d.prototype.pipe = function (b, S) {
        var c = this;
        function y(G) {
            b.writable && b.write(G) === !1 && c.pause && c.pause()
        }
        c.on("data", y);
        function u() {
            c.readable && c.resume && c.resume()
        }
        b.on("drain", u),
            !b._isStdio && (!S || S.end !== !1) && (c.on("end", N),
                c.on("close", D));
        var m = !1;
        function N() {
            m || (m = !0,
                b.end())
        }
        function D() {
            m || (m = !0,
                typeof b.destroy == "function" && b.destroy())
        }
        function U(G) {
            if (k(),
                x.listenerCount(this, "error") === 0)
                throw G
        }
        c.on("error", U),
            b.on("error", U);
        function k() {
            c.removeListener("data", y),
                b.removeListener("drain", u),
                c.removeListener("end", N),
                c.removeListener("close", D),
                c.removeListener("error", U),
                b.removeListener("error", U),
                c.removeListener("end", k),
                c.removeListener("close", k),
                b.removeListener("close", k)
        }
        return c.on("end", k),
            c.on("close", k),
            b.on("close", k),
            b.emit("pipe", c),
            b
    }
        ,
        yr
}
export { ze as a, Ge as b, St as c, vt as d, Bt as e, Rt as g, ue as p, vr as r };
//# sourceMappingURL=vendors-polyfills-COcNL8Q0.js.map
