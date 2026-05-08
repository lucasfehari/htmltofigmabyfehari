import { d as L, H as x, E as O, _ as U, k as P } from "./vendors-common-Lh1ryj9n.js";
var D = {};
function h(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t
}
function K(t, e, r) {
    var o, u = /(?:\?([^#]*))?(#.*)?$/, c = t.match(u), i = {};
    if (c && c[1])
        for (var f = c[1].split("&"), s = 0; s < f.length; s++) {
            var m = f[s].split("=");
            i[decodeURIComponent(m[0])] = decodeURIComponent(m.slice(1).join("="))
        }
    t = d(t.replace(u, "")),
        e = d(e || "");
    for (var $ = Math.max(t.length, e.length), a = 0; a < $; a++)
        if (e[a] && e[a].charAt(0) === ":") {
            var v = e[a].replace(/(^:|[+*?]+$)/g, "")
                , l = (e[a].match(/[+*?]+$/) || D)[0] || ""
                , y = ~l.indexOf("+")
                , k = ~l.indexOf("*")
                , b = t[a] || "";
            if (!b && !k && (l.indexOf("?") < 0 || y)) {
                o = !1;
                break
            }
            if (i[v] = decodeURIComponent(b),
                y || k) {
                i[v] = t.slice(a).map(decodeURIComponent).join("/");
                break
            }
        } else if (e[a] !== t[a]) {
            o = !1;
            break
        }
    return (r.default === !0 || o !== !1) && i
}
function M(t, e) {
    return t.rank < e.rank ? 1 : t.rank > e.rank ? -1 : t.index - e.index
}
function W(t, e) {
    return t.index = e,
        t.rank = function (r) {
            return r.props.default ? 0 : d(r.props.path).map(j).join("")
        }(t),
        t.props
}
function d(t) {
    return t.replace(/(^\/+|\/+$)/g, "").split("/")
}
function j(t) {
    return t.charAt(0) == ":" ? 1 + "*+?".indexOf(t.charAt(t.length - 1)) || 4 : 5
}
var w = {}
    , p = []
    , C = []
    , n = null
    , R = {
        url: g()
    }
    , E = L(R);
function g() {
    var t;
    return "" + ((t = n && n.location ? n.location : n && n.getCurrentLocation ? n.getCurrentLocation() : typeof location < "u" ? location : w).pathname || "") + (t.search || "")
}
function S(t, e) {
    return e === void 0 && (e = !1),
        typeof t != "string" && t.url && (e = t.replace,
            t = t.url),
        function (r) {
            for (var o = p.length; o--;)
                if (p[o].canRoute(r))
                    return !0;
            return !1
        }(t) && function (r, o) {
            o === void 0 && (o = "push"),
                n && n[o] ? n[o](r) : typeof history < "u" && history[o + "State"] && history[o + "State"](null, null, r)
        }(t, e ? "replace" : "push"),
        I(t)
}
function I(t) {
    for (var e = !1, r = 0; r < p.length; r++)
        p[r].routeTo(t) && (e = !0);
    return e
}
function T(t) {
    if (t && t.getAttribute) {
        var e = t.getAttribute("href")
            , r = t.getAttribute("target");
        if (e && e.match(/^\//g) && (!r || r.match(/^_?self$/i)))
            return S(e)
    }
}
function N(t) {
    return t.stopImmediatePropagation && t.stopImmediatePropagation(),
        t.stopPropagation && t.stopPropagation(),
        t.preventDefault(),
        !1
}
function _(t) {
    if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || t.button)) {
        var e = t.target;
        do
            if (e.localName === "a" && e.getAttribute("href")) {
                if (e.hasAttribute("data-native") || e.hasAttribute("native"))
                    return;
                if (T(e))
                    return N(t)
            }
        while (e = e.parentNode)
    }
}
var A = !1;
function G(t) {
    t.history && (n = t.history),
        this.state = {
            url: t.url || g()
        }
}
h(G.prototype = new P, {
    shouldComponentUpdate: function (t) {
        return t.static !== !0 || t.url !== this.props.url || t.onChange !== this.props.onChange
    },
    canRoute: function (t) {
        var e = x(this.props.children);
        return this.g(e, t) !== void 0
    },
    routeTo: function (t) {
        this.setState({
            url: t
        });
        var e = this.canRoute(t);
        return this.p || this.forceUpdate(),
            e
    },
    componentWillMount: function () {
        this.p = !0
    },
    componentDidMount: function () {
        var t = this;
        A || (A = !0,
            n || addEventListener("popstate", function () {
                I(g())
            }),
            addEventListener("click", _)),
            p.push(this),
            n && (this.u = n.listen(function (e) {
                var r = e.location || e;
                t.routeTo("" + (r.pathname || "") + (r.search || ""))
            })),
            this.p = !1
    },
    componentWillUnmount: function () {
        typeof this.u == "function" && this.u(),
            p.splice(p.indexOf(this), 1)
    },
    componentWillUpdate: function () {
        this.p = !0
    },
    componentDidUpdate: function () {
        this.p = !1
    },
    g: function (t, e) {
        t = t.filter(W).sort(M);
        for (var r = 0; r < t.length; r++) {
            var o = t[r]
                , u = K(e, o.props.path, o.props);
            if (u)
                return [o, u]
        }
    },
    render: function (t, e) {
        var r, o, u = t.onChange, c = e.url, i = this.c, f = this.g(x(t.children), c);
        if (f && (o = O(f[0], h(h({
            url: c,
            matches: r = f[1]
        }, r), {
            key: void 0,
            ref: void 0
        }))),
            c !== (i && i.url)) {
            h(R, i = this.c = {
                url: c,
                previous: i && i.url,
                current: o,
                path: o ? o.props.path : null,
                matches: r
            }),
                i.router = this,
                i.active = o ? [o] : [];
            for (var s = C.length; s--;)
                C[s]({});
            typeof u == "function" && u(i)
        }
        return U(E.Provider, {
            value: i
        }, o)
    }
});
var q = function (t) {
    return U(t.component, t)
};
export { S as $, G as D, q as L };
//# sourceMappingURL=vendors-index-CN_eaSbc.js.map
