import "./preloadHelper-Ceo5xg-P.js";
import { p as process, g as global, e as e$3 } from "./vendors-polyfills-COcNL8Q0.js";
var n$1, l$3, u$3, i$2, o$2, r$1, f$3, e$2, c$2, s$3, a$2, h$2 = {}, v$4 = [], p$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y$2 = Array.isArray;
function d$3(ne, ee) {
    for (var te in ee)
        ne[te] = ee[te];
    return ne
}
function w$3(ne) {
    ne && ne.parentNode && ne.parentNode.removeChild(ne)
}
function _$2(ne, ee, te) {
    var re, ie, se, ae = {};
    for (se in ee)
        se == "key" ? re = ee[se] : se == "ref" ? ie = ee[se] : ae[se] = ee[se];
    if (arguments.length > 2 && (ae.children = arguments.length > 3 ? n$1.call(arguments, 2) : te),
        typeof ne == "function" && ne.defaultProps != null)
        for (se in ne.defaultProps)
            ae[se] === void 0 && (ae[se] = ne.defaultProps[se]);
    return g$3(ne, ae, re, ie, null)
}
function g$3(ne, ee, te, re, ie) {
    var se = {
        type: ne,
        props: ee,
        key: te,
        ref: re,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: ie ?? ++u$3,
        __i: -1,
        __u: 0
    };
    return ie == null && l$3.vnode != null && l$3.vnode(se),
        se
}
function m$1() {
    return {
        current: null
    }
}
function b$2(ne) {
    return ne.children
}
function k$2(ne, ee) {
    this.props = ne,
        this.context = ee
}
function x$3(ne, ee) {
    if (ee == null)
        return ne.__ ? x$3(ne.__, ne.__i + 1) : null;
    for (var te; ee < ne.__k.length; ee++)
        if ((te = ne.__k[ee]) != null && te.__e != null)
            return te.__e;
    return typeof ne.type == "function" ? x$3(ne) : null
}
function C$3(ne) {
    var ee, te;
    if ((ne = ne.__) != null && ne.__c != null) {
        for (ne.__e = ne.__c.base = null,
            ee = 0; ee < ne.__k.length; ee++)
            if ((te = ne.__k[ee]) != null && te.__e != null) {
                ne.__e = ne.__c.base = te.__e;
                break
            }
        return C$3(ne)
    }
}
function S$1(ne) {
    (!ne.__d && (ne.__d = !0) && i$2.push(ne) && !M$2.__r++ || o$2 !== l$3.debounceRendering) && ((o$2 = l$3.debounceRendering) || r$1)(M$2)
}
function M$2() {
    var ne, ee, te, re, ie, se, ae, ce;
    for (i$2.sort(f$3); ne = i$2.shift();)
        ne.__d && (ee = i$2.length,
            re = void 0,
            se = (ie = (te = ne).__v).__e,
            ae = [],
            ce = [],
            te.__P && ((re = d$3({}, ie)).__v = ie.__v + 1,
                l$3.vnode && l$3.vnode(re),
                O$2(te.__P, re, ie, te.__n, te.__P.namespaceURI, 32 & ie.__u ? [se] : null, ae, se ?? x$3(ie), !!(32 & ie.__u), ce),
                re.__v = ie.__v,
                re.__.__k[re.__i] = re,
                j$2(ae, re, ce),
                re.__e != se && C$3(re)),
            i$2.length > ee && i$2.sort(f$3));
    M$2.__r = 0
}
function P$2(ne, ee, te, re, ie, se, ae, ce, le, he, de) {
    var fe, Re, Pe, we, Se, be = re && re.__k || v$4, De = ee.length;
    for (te.__d = le,
        $$1(te, ee, be),
        le = te.__d,
        fe = 0; fe < De; fe++)
        (Pe = te.__k[fe]) != null && (Re = Pe.__i === -1 ? h$2 : be[Pe.__i] || h$2,
            Pe.__i = fe,
            O$2(ne, Pe, Re, ie, se, ae, ce, le, he, de),
            we = Pe.__e,
            Pe.ref && Re.ref != Pe.ref && (Re.ref && N$2(Re.ref, null, Pe),
                de.push(Pe.ref, Pe.__c || we, Pe)),
            Se == null && we != null && (Se = we),
            65536 & Pe.__u || Re.__k === Pe.__k ? le = I$1(Pe, le, ne) : typeof Pe.type == "function" && Pe.__d !== void 0 ? le = Pe.__d : we && (le = we.nextSibling),
            Pe.__d = void 0,
            Pe.__u &= -196609);
    te.__d = le,
        te.__e = Se
}
function $$1(ne, ee, te) {
    var re, ie, se, ae, ce, le = ee.length, he = te.length, de = he, fe = 0;
    for (ne.__k = [],
        re = 0; re < le; re++)
        (ie = ee[re]) != null && typeof ie != "boolean" && typeof ie != "function" ? (ae = re + fe,
            (ie = ne.__k[re] = typeof ie == "string" || typeof ie == "number" || typeof ie == "bigint" || ie.constructor == String ? g$3(null, ie, null, null, null) : y$2(ie) ? g$3(b$2, {
                children: ie
            }, null, null, null) : ie.constructor === void 0 && ie.__b > 0 ? g$3(ie.type, ie.props, ie.key, ie.ref ? ie.ref : null, ie.__v) : ie).__ = ne,
            ie.__b = ne.__b + 1,
            se = null,
            (ce = ie.__i = L$1(ie, te, ae, de)) !== -1 && (de--,
                (se = te[ce]) && (se.__u |= 131072)),
            se == null || se.__v === null ? (ce == -1 && fe--,
                typeof ie.type != "function" && (ie.__u |= 65536)) : ce !== ae && (ce == ae - 1 ? fe-- : ce == ae + 1 ? fe++ : (ce > ae ? fe-- : fe++,
                    ie.__u |= 65536))) : ie = ne.__k[re] = null;
    if (de)
        for (re = 0; re < he; re++)
            (se = te[re]) != null && !(131072 & se.__u) && (se.__e == ne.__d && (ne.__d = x$3(se)),
                V$1(se, se))
}
function I$1(ne, ee, te) {
    var re, ie;
    if (typeof ne.type == "function") {
        for (re = ne.__k,
            ie = 0; re && ie < re.length; ie++)
            re[ie] && (re[ie].__ = ne,
                ee = I$1(re[ie], ee, te));
        return ee
    }
    ne.__e != ee && (ee && ne.type && !te.contains(ee) && (ee = x$3(ne)),
        te.insertBefore(ne.__e, ee || null),
        ee = ne.__e);
    do
        ee = ee && ee.nextSibling;
    while (ee != null && ee.nodeType === 8);
    return ee
}
function H$1(ne, ee) {
    return ee = ee || [],
        ne == null || typeof ne == "boolean" || (y$2(ne) ? ne.some(function (te) {
            H$1(te, ee)
        }) : ee.push(ne)),
        ee
}
function L$1(ne, ee, te, re) {
    var ie = ne.key
        , se = ne.type
        , ae = te - 1
        , ce = te + 1
        , le = ee[te];
    if (le === null || le && ie == le.key && se === le.type && !(131072 & le.__u))
        return te;
    if (re > (le != null && !(131072 & le.__u) ? 1 : 0))
        for (; ae >= 0 || ce < ee.length;) {
            if (ae >= 0) {
                if ((le = ee[ae]) && !(131072 & le.__u) && ie == le.key && se === le.type)
                    return ae;
                ae--
            }
            if (ce < ee.length) {
                if ((le = ee[ce]) && !(131072 & le.__u) && ie == le.key && se === le.type)
                    return ce;
                ce++
            }
        }
    return -1
}
function T$2(ne, ee, te) {
    ee[0] === "-" ? ne.setProperty(ee, te ?? "") : ne[ee] = te == null ? "" : typeof te != "number" || p$3.test(ee) ? te : te + "px"
}
function A$2(ne, ee, te, re, ie) {
    var se;
    e: if (ee === "style")
        if (typeof te == "string")
            ne.style.cssText = te;
        else {
            if (typeof re == "string" && (ne.style.cssText = re = ""),
                re)
                for (ee in re)
                    te && ee in te || T$2(ne.style, ee, "");
            if (te)
                for (ee in te)
                    re && te[ee] === re[ee] || T$2(ne.style, ee, te[ee])
        }
    else if (ee[0] === "o" && ee[1] === "n")
        se = ee !== (ee = ee.replace(/(PointerCapture)$|Capture$/i, "$1")),
            ee = ee.toLowerCase() in ne || ee === "onFocusOut" || ee === "onFocusIn" ? ee.toLowerCase().slice(2) : ee.slice(2),
            ne.l || (ne.l = {}),
            ne.l[ee + se] = te,
            te ? re ? te.u = re.u : (te.u = e$2,
                ne.addEventListener(ee, se ? s$3 : c$2, se)) : ne.removeEventListener(ee, se ? s$3 : c$2, se);
    else {
        if (ie == "http://www.w3.org/2000/svg")
            ee = ee.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (ee != "width" && ee != "height" && ee != "href" && ee != "list" && ee != "form" && ee != "tabIndex" && ee != "download" && ee != "rowSpan" && ee != "colSpan" && ee != "role" && ee != "popover" && ee in ne)
            try {
                ne[ee] = te ?? "";
                break e
            } catch { }
        typeof te == "function" || (te == null || te === !1 && ee[4] !== "-" ? ne.removeAttribute(ee) : ne.setAttribute(ee, ee == "popover" && te == 1 ? "" : te))
    }
}
function F$3(ne) {
    return function (ee) {
        if (this.l) {
            var te = this.l[ee.type + ne];
            if (ee.t == null)
                ee.t = e$2++;
            else if (ee.t < te.u)
                return;
            return te(l$3.event ? l$3.event(ee) : ee)
        }
    }
}
function O$2(ne, ee, te, re, ie, se, ae, ce, le, he) {
    var de, fe, Re, Pe, we, Se, be, De, ke, Me, Ne, $e, Oe, Ie, ge, Te, Ae = ee.type;
    if (ee.constructor !== void 0)
        return null;
    128 & te.__u && (le = !!(32 & te.__u),
        se = [ce = ee.__e = te.__e]),
        (de = l$3.__b) && de(ee);
    e: if (typeof Ae == "function")
        try {
            if (De = ee.props,
                ke = "prototype" in Ae && Ae.prototype.render,
                Me = (de = Ae.contextType) && re[de.__c],
                Ne = de ? Me ? Me.props.value : de.__ : re,
                te.__c ? be = (fe = ee.__c = te.__c).__ = fe.__E : (ke ? ee.__c = fe = new Ae(De, Ne) : (ee.__c = fe = new k$2(De, Ne),
                    fe.constructor = Ae,
                    fe.render = q$3),
                    Me && Me.sub(fe),
                    fe.props = De,
                    fe.state || (fe.state = {}),
                    fe.context = Ne,
                    fe.__n = re,
                    Re = fe.__d = !0,
                    fe.__h = [],
                    fe._sb = []),
                ke && fe.__s == null && (fe.__s = fe.state),
                ke && Ae.getDerivedStateFromProps != null && (fe.__s == fe.state && (fe.__s = d$3({}, fe.__s)),
                    d$3(fe.__s, Ae.getDerivedStateFromProps(De, fe.__s))),
                Pe = fe.props,
                we = fe.state,
                fe.__v = ee,
                Re)
                ke && Ae.getDerivedStateFromProps == null && fe.componentWillMount != null && fe.componentWillMount(),
                    ke && fe.componentDidMount != null && fe.__h.push(fe.componentDidMount);
            else {
                if (ke && Ae.getDerivedStateFromProps == null && De !== Pe && fe.componentWillReceiveProps != null && fe.componentWillReceiveProps(De, Ne),
                    !fe.__e && (fe.shouldComponentUpdate != null && fe.shouldComponentUpdate(De, fe.__s, Ne) === !1 || ee.__v === te.__v)) {
                    for (ee.__v !== te.__v && (fe.props = De,
                        fe.state = fe.__s,
                        fe.__d = !1),
                        ee.__e = te.__e,
                        ee.__k = te.__k,
                        ee.__k.some(function (ye) {
                            ye && (ye.__ = ee)
                        }),
                        $e = 0; $e < fe._sb.length; $e++)
                        fe.__h.push(fe._sb[$e]);
                    fe._sb = [],
                        fe.__h.length && ae.push(fe);
                    break e
                }
                fe.componentWillUpdate != null && fe.componentWillUpdate(De, fe.__s, Ne),
                    ke && fe.componentDidUpdate != null && fe.__h.push(function () {
                        fe.componentDidUpdate(Pe, we, Se)
                    })
            }
            if (fe.context = Ne,
                fe.props = De,
                fe.__P = ne,
                fe.__e = !1,
                Oe = l$3.__r,
                Ie = 0,
                ke) {
                for (fe.state = fe.__s,
                    fe.__d = !1,
                    Oe && Oe(ee),
                    de = fe.render(fe.props, fe.state, fe.context),
                    ge = 0; ge < fe._sb.length; ge++)
                    fe.__h.push(fe._sb[ge]);
                fe._sb = []
            } else
                do
                    fe.__d = !1,
                        Oe && Oe(ee),
                        de = fe.render(fe.props, fe.state, fe.context),
                        fe.state = fe.__s;
                while (fe.__d && ++Ie < 25);
            fe.state = fe.__s,
                fe.getChildContext != null && (re = d$3(d$3({}, re), fe.getChildContext())),
                ke && !Re && fe.getSnapshotBeforeUpdate != null && (Se = fe.getSnapshotBeforeUpdate(Pe, we)),
                P$2(ne, y$2(Te = de != null && de.type === b$2 && de.key == null ? de.props.children : de) ? Te : [Te], ee, te, re, ie, se, ae, ce, le, he),
                fe.base = ee.__e,
                ee.__u &= -161,
                fe.__h.length && ae.push(fe),
                be && (fe.__E = fe.__ = null)
        } catch (ye) {
            if (ee.__v = null,
                le || se != null) {
                for (ee.__u |= le ? 160 : 128; ce && ce.nodeType === 8 && ce.nextSibling;)
                    ce = ce.nextSibling;
                se[se.indexOf(ce)] = null,
                    ee.__e = ce
            } else
                ee.__e = te.__e,
                    ee.__k = te.__k;
            l$3.__e(ye, ee, te)
        }
    else
        se == null && ee.__v === te.__v ? (ee.__k = te.__k,
            ee.__e = te.__e) : ee.__e = z$2(te.__e, ee, te, re, ie, se, ae, le, he);
    (de = l$3.diffed) && de(ee)
}
function j$2(ne, ee, te) {
    ee.__d = void 0;
    for (var re = 0; re < te.length; re++)
        N$2(te[re], te[++re], te[++re]);
    l$3.__c && l$3.__c(ee, ne),
        ne.some(function (ie) {
            try {
                ne = ie.__h,
                    ie.__h = [],
                    ne.some(function (se) {
                        se.call(ie)
                    })
            } catch (se) {
                l$3.__e(se, ie.__v)
            }
        })
}
function z$2(ne, ee, te, re, ie, se, ae, ce, le) {
    var he, de, fe, Re, Pe, we, Se, be = te.props, De = ee.props, ke = ee.type;
    if (ke === "svg" ? ie = "http://www.w3.org/2000/svg" : ke === "math" ? ie = "http://www.w3.org/1998/Math/MathML" : ie || (ie = "http://www.w3.org/1999/xhtml"),
        se != null) {
        for (he = 0; he < se.length; he++)
            if ((Pe = se[he]) && "setAttribute" in Pe == !!ke && (ke ? Pe.localName === ke : Pe.nodeType === 3)) {
                ne = Pe,
                    se[he] = null;
                break
            }
    }
    if (ne == null) {
        if (ke === null)
            return document.createTextNode(De);
        ne = document.createElementNS(ie, ke, De.is && De),
            ce && (l$3.__m && l$3.__m(ee, se),
                ce = !1),
            se = null
    }
    if (ke === null)
        be === De || ce && ne.data === De || (ne.data = De);
    else {
        if (se = se && n$1.call(ne.childNodes),
            be = te.props || h$2,
            !ce && se != null)
            for (be = {},
                he = 0; he < ne.attributes.length; he++)
                be[(Pe = ne.attributes[he]).name] = Pe.value;
        for (he in be)
            if (Pe = be[he],
                he != "children") {
                if (he == "dangerouslySetInnerHTML")
                    fe = Pe;
                else if (!(he in De)) {
                    if (he == "value" && "defaultValue" in De || he == "checked" && "defaultChecked" in De)
                        continue;
                    A$2(ne, he, null, Pe, ie)
                }
            }
        for (he in De)
            Pe = De[he],
                he == "children" ? Re = Pe : he == "dangerouslySetInnerHTML" ? de = Pe : he == "value" ? we = Pe : he == "checked" ? Se = Pe : ce && typeof Pe != "function" || be[he] === Pe || A$2(ne, he, Pe, be[he], ie);
        if (de)
            ce || fe && (de.__html === fe.__html || de.__html === ne.innerHTML) || (ne.innerHTML = de.__html),
                ee.__k = [];
        else if (fe && (ne.innerHTML = ""),
            P$2(ne, y$2(Re) ? Re : [Re], ee, te, re, ke === "foreignObject" ? "http://www.w3.org/1999/xhtml" : ie, se, ae, se ? se[0] : te.__k && x$3(te, 0), ce, le),
            se != null)
            for (he = se.length; he--;)
                w$3(se[he]);
        ce || (he = "value",
            ke === "progress" && we == null ? ne.removeAttribute("value") : we !== void 0 && (we !== ne[he] || ke === "progress" && !we || ke === "option" && we !== be[he]) && A$2(ne, he, we, be[he], ie),
            he = "checked",
            Se !== void 0 && Se !== ne[he] && A$2(ne, he, Se, be[he], ie))
    }
    return ne
}
function N$2(ne, ee, te) {
    try {
        if (typeof ne == "function") {
            var re = typeof ne.__u == "function";
            re && ne.__u(),
                re && ee == null || (ne.__u = ne(ee))
        } else
            ne.current = ee
    } catch (ie) {
        l$3.__e(ie, te)
    }
}
function V$1(ne, ee, te) {
    var re, ie;
    if (l$3.unmount && l$3.unmount(ne),
        (re = ne.ref) && (re.current && re.current !== ne.__e || N$2(re, null, ee)),
        (re = ne.__c) != null) {
        if (re.componentWillUnmount)
            try {
                re.componentWillUnmount()
            } catch (se) {
                l$3.__e(se, ee)
            }
        re.base = re.__P = null
    }
    if (re = ne.__k)
        for (ie = 0; ie < re.length; ie++)
            re[ie] && V$1(re[ie], ee, te || typeof ne.type != "function");
    te || w$3(ne.__e),
        ne.__c = ne.__ = ne.__e = ne.__d = void 0
}
function q$3(ne, ee, te) {
    return this.constructor(ne, te)
}
function B$3(ne, ee, te) {
    var re, ie, se, ae;
    l$3.__ && l$3.__(ne, ee),
        ie = (re = typeof te == "function") ? null : te && te.__k || ee.__k,
        se = [],
        ae = [],
        O$2(ee, ne = (!re && te || ee).__k = _$2(b$2, null, [ne]), ie || h$2, h$2, ee.namespaceURI, !re && te ? [te] : ie ? null : ee.firstChild ? n$1.call(ee.childNodes) : null, se, !re && te ? te : ie ? ie.__e : ee.firstChild, re, ae),
        j$2(se, ne, ae)
}
function D$3(ne, ee) {
    B$3(ne, ee, D$3)
}
function E$2(ne, ee, te) {
    var re, ie, se, ae, ce = d$3({}, ne.props);
    for (se in ne.type && ne.type.defaultProps && (ae = ne.type.defaultProps),
        ee)
        se == "key" ? re = ee[se] : se == "ref" ? ie = ee[se] : ce[se] = ee[se] === void 0 && ae !== void 0 ? ae[se] : ee[se];
    return arguments.length > 2 && (ce.children = arguments.length > 3 ? n$1.call(arguments, 2) : te),
        g$3(ne.type, ce, re || ne.key, ie || ne.ref, null)
}
function G$1(ne, ee) {
    var te = {
        __c: ee = "__cC" + a$2++,
        __: ne,
        Consumer: function (re, ie) {
            return re.children(ie)
        },
        Provider: function (re) {
            var ie, se;
            return this.getChildContext || (ie = new Set,
                (se = {})[ee] = this,
                this.getChildContext = function () {
                    return se
                }
                ,
                this.componentWillUnmount = function () {
                    ie = null
                }
                ,
                this.shouldComponentUpdate = function (ae) {
                    this.props.value !== ae.value && ie.forEach(function (ce) {
                        ce.__e = !0,
                            S$1(ce)
                    })
                }
                ,
                this.sub = function (ae) {
                    ie.add(ae);
                    var ce = ae.componentWillUnmount;
                    ae.componentWillUnmount = function () {
                        ie && ie.delete(ae),
                            ce && ce.call(ae)
                    }
                }
            ),
                re.children
        }
    };
    return te.Provider.__ = te.Consumer.contextType = te
}
n$1 = v$4.slice,
    l$3 = {
        __e: function (ne, ee, te, re) {
            for (var ie, se, ae; ee = ee.__;)
                if ((ie = ee.__c) && !ie.__)
                    try {
                        if ((se = ie.constructor) && se.getDerivedStateFromError != null && (ie.setState(se.getDerivedStateFromError(ne)),
                            ae = ie.__d),
                            ie.componentDidCatch != null && (ie.componentDidCatch(ne, re || {}),
                                ae = ie.__d),
                            ae)
                            return ie.__E = ie
                    } catch (ce) {
                        ne = ce
                    }
            throw ne
        }
    },
    u$3 = 0,
    k$2.prototype.setState = function (ne, ee) {
        var te;
        te = this.__s != null && this.__s !== this.state ? this.__s : this.__s = d$3({}, this.state),
            typeof ne == "function" && (ne = ne(d$3({}, te), this.props)),
            ne && d$3(te, ne),
            ne != null && this.__v && (ee && this._sb.push(ee),
                S$1(this))
    }
    ,
    k$2.prototype.forceUpdate = function (ne) {
        this.__v && (this.__e = !0,
            ne && this.__h.push(ne),
            S$1(this))
    }
    ,
    k$2.prototype.render = b$2,
    i$2 = [],
    r$1 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    f$3 = function (ne, ee) {
        return ne.__v.__b - ee.__v.__b
    }
    ,
    M$2.__r = 0,
    e$2 = 0,
    c$2 = F$3(!1),
    s$3 = F$3(!0),
    a$2 = 0;
var t$1, r, u$2, i$1, o$1 = 0, f$2 = [], c$1 = l$3, e$1 = c$1.__b, a$1 = c$1.__r, v$3 = c$1.diffed, l$2 = c$1.__c, m = c$1.unmount, s$2 = c$1.__;
function d$2(ne, ee) {
    c$1.__h && c$1.__h(r, ne, o$1 || ee),
        o$1 = 0;
    var te = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return ne >= te.__.length && te.__.push({}),
        te.__[ne]
}
function h$1(ne) {
    return o$1 = 1,
        p$2(D$2, ne)
}
function p$2(ne, ee, te) {
    var re = d$2(t$1++, 2);
    if (re.t = ne,
        !re.__c && (re.__ = [te ? te(ee) : D$2(void 0, ee), function (ce) {
            var le = re.__N ? re.__N[0] : re.__[0]
                , he = re.t(le, ce);
            le !== he && (re.__N = [he, re.__[1]],
                re.__c.setState({}))
        }
        ],
            re.__c = r,
            !r.u)) {
        var ie = function (ce, le, he) {
            if (!re.__c.__H)
                return !0;
            var de = re.__c.__H.__.filter(function (Re) {
                return !!Re.__c
            });
            if (de.every(function (Re) {
                return !Re.__N
            }))
                return !se || se.call(this, ce, le, he);
            var fe = !1;
            return de.forEach(function (Re) {
                if (Re.__N) {
                    var Pe = Re.__[0];
                    Re.__ = Re.__N,
                        Re.__N = void 0,
                        Pe !== Re.__[0] && (fe = !0)
                }
            }),
                !(!fe && re.__c.props === ce) && (!se || se.call(this, ce, le, he))
        };
        r.u = !0;
        var se = r.shouldComponentUpdate
            , ae = r.componentWillUpdate;
        r.componentWillUpdate = function (ce, le, he) {
            if (this.__e) {
                var de = se;
                se = void 0,
                    ie(ce, le, he),
                    se = de
            }
            ae && ae.call(this, ce, le, he)
        }
            ,
            r.shouldComponentUpdate = ie
    }
    return re.__N || re.__
}
function y$1(ne, ee) {
    var te = d$2(t$1++, 3);
    !c$1.__s && C$2(te.__H, ee) && (te.__ = ne,
        te.i = ee,
        r.__H.__h.push(te))
}
function _$1(ne, ee) {
    var te = d$2(t$1++, 4);
    !c$1.__s && C$2(te.__H, ee) && (te.__ = ne,
        te.i = ee,
        r.__h.push(te))
}
function A$1(ne) {
    return o$1 = 5,
        T$1(function () {
            return {
                current: ne
            }
        }, [])
}
function F$2(ne, ee, te) {
    o$1 = 6,
        _$1(function () {
            return typeof ne == "function" ? (ne(ee()),
                function () {
                    return ne(null)
                }
            ) : ne ? (ne.current = ee(),
                function () {
                    return ne.current = null
                }
            ) : void 0
        }, te == null ? te : te.concat(ne))
}
function T$1(ne, ee) {
    var te = d$2(t$1++, 7);
    return C$2(te.__H, ee) && (te.__ = ne(),
        te.__H = ee,
        te.__h = ne),
        te.__
}
function q$2(ne, ee) {
    return o$1 = 8,
        T$1(function () {
            return ne
        }, ee)
}
function x$2(ne) {
    var ee = r.context[ne.__c]
        , te = d$2(t$1++, 9);
    return te.c = ne,
        ee ? (te.__ == null && (te.__ = !0,
            ee.sub(r)),
            ee.props.value) : ne.__
}
function P$1(ne, ee) {
    c$1.useDebugValue && c$1.useDebugValue(ee ? ee(ne) : ne)
}
function g$2() {
    var ne = d$2(t$1++, 11);
    if (!ne.__) {
        for (var ee = r.__v; ee !== null && !ee.__m && ee.__ !== null;)
            ee = ee.__;
        var te = ee.__m || (ee.__m = [0, 0]);
        ne.__ = "P" + te[0] + "-" + te[1]++
    }
    return ne.__
}
function j$1() {
    for (var ne; ne = f$2.shift();)
        if (ne.__P && ne.__H)
            try {
                ne.__H.__h.forEach(z$1),
                    ne.__H.__h.forEach(B$2),
                    ne.__H.__h = []
            } catch (ee) {
                ne.__H.__h = [],
                    c$1.__e(ee, ne.__v)
            }
}
c$1.__b = function (ne) {
    r = null,
        e$1 && e$1(ne)
}
    ,
    c$1.__ = function (ne, ee) {
        ne && ee.__k && ee.__k.__m && (ne.__m = ee.__k.__m),
            s$2 && s$2(ne, ee)
    }
    ,
    c$1.__r = function (ne) {
        a$1 && a$1(ne),
            t$1 = 0;
        var ee = (r = ne.__c).__H;
        ee && (u$2 === r ? (ee.__h = [],
            r.__h = [],
            ee.__.forEach(function (te) {
                te.__N && (te.__ = te.__N),
                    te.i = te.__N = void 0
            })) : (ee.__h.forEach(z$1),
                ee.__h.forEach(B$2),
                ee.__h = [],
                t$1 = 0)),
            u$2 = r
    }
    ,
    c$1.diffed = function (ne) {
        v$3 && v$3(ne);
        var ee = ne.__c;
        ee && ee.__H && (ee.__H.__h.length && (f$2.push(ee) !== 1 && i$1 === c$1.requestAnimationFrame || ((i$1 = c$1.requestAnimationFrame) || w$2)(j$1)),
            ee.__H.__.forEach(function (te) {
                te.i && (te.__H = te.i),
                    te.i = void 0
            })),
            u$2 = r = null
    }
    ,
    c$1.__c = function (ne, ee) {
        ee.some(function (te) {
            try {
                te.__h.forEach(z$1),
                    te.__h = te.__h.filter(function (re) {
                        return !re.__ || B$2(re)
                    })
            } catch (re) {
                ee.some(function (ie) {
                    ie.__h && (ie.__h = [])
                }),
                    ee = [],
                    c$1.__e(re, te.__v)
            }
        }),
            l$2 && l$2(ne, ee)
    }
    ,
    c$1.unmount = function (ne) {
        m && m(ne);
        var ee, te = ne.__c;
        te && te.__H && (te.__H.__.forEach(function (re) {
            try {
                z$1(re)
            } catch (ie) {
                ee = ie
            }
        }),
            te.__H = void 0,
            ee && c$1.__e(ee, te.__v))
    }
    ;
var k$1 = typeof requestAnimationFrame == "function";
function w$2(ne) {
    var ee, te = function () {
        clearTimeout(re),
            k$1 && cancelAnimationFrame(ee),
            setTimeout(ne)
    }, re = setTimeout(te, 100);
    k$1 && (ee = requestAnimationFrame(te))
}
function z$1(ne) {
    var ee = r
        , te = ne.__c;
    typeof te == "function" && (ne.__c = void 0,
        te()),
        r = ee
}
function B$2(ne) {
    var ee = r;
    ne.__c = ne.__(),
        r = ee
}
function C$2(ne, ee) {
    return !ne || ne.length !== ee.length || ee.some(function (te, re) {
        return te !== ne[re]
    })
}
function D$2(ne, ee) {
    return typeof ee == "function" ? ee(ne) : ee
}
function g$1(ne, ee) {
    for (var te in ne)
        if (te !== "__source" && !(te in ee))
            return !0;
    for (var re in ee)
        if (re !== "__source" && ne[re] !== ee[re])
            return !0;
    return !1
}
function E$1(ne, ee) {
    this.props = ne,
        this.context = ee
}
function C$1(ne, ee) {
    function te(ie) {
        var se = this.props.ref
            , ae = se == ie.ref;
        return !ae && se && (se.call ? se(null) : se.current = null),
            ee ? !ee(this.props, ie) || !ae : g$1(this.props, ie)
    }
    function re(ie) {
        return this.shouldComponentUpdate = te,
            _$2(ne, ie)
    }
    return re.displayName = "Memo(" + (ne.displayName || ne.name) + ")",
        re.prototype.isReactComponent = !0,
        re.__f = !0,
        re
}
(E$1.prototype = new k$2).isPureReactComponent = !0,
    E$1.prototype.shouldComponentUpdate = function (ne, ee) {
        return g$1(this.props, ne) || g$1(this.state, ee)
    }
    ;
var x$1 = l$3.__b;
l$3.__b = function (ne) {
    ne.type && ne.type.__f && ne.ref && (ne.props.ref = ne.ref,
        ne.ref = null),
        x$1 && x$1(ne)
}
    ;
var R = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function w$1(ne) {
    function ee(te) {
        if (!("ref" in te))
            return ne(te, null);
        var re = te.ref;
        delete te.ref;
        var ie = ne(te, re);
        return te.ref = re,
            ie
    }
    return ee.$$typeof = R,
        ee.render = ee,
        ee.prototype.isReactComponent = ee.__f = !0,
        ee.displayName = "ForwardRef(" + (ne.displayName || ne.name) + ")",
        ee
}
var k = function (ne, ee) {
    return ne == null ? null : H$1(H$1(ne).map(ee))
}
    , I = {
        map: k,
        forEach: k,
        count: function (ne) {
            return ne ? H$1(ne).length : 0
        },
        only: function (ne) {
            var ee = H$1(ne);
            if (ee.length !== 1)
                throw "Children.only";
            return ee[0]
        },
        toArray: H$1
    }
    , N$1 = l$3.__e;
l$3.__e = function (ne, ee, te, re) {
    if (ne.then) {
        for (var ie, se = ee; se = se.__;)
            if ((ie = se.__c) && ie.__c)
                return ee.__e == null && (ee.__e = te.__e,
                    ee.__k = te.__k),
                    ie.__c(ne, ee)
    }
    N$1(ne, ee, te, re)
}
    ;
var M$1 = l$3.unmount;
function T(ne, ee, te) {
    return ne && (ne.__c && ne.__c.__H && (ne.__c.__H.__.forEach(function (re) {
        typeof re.__c == "function" && re.__c()
    }),
        ne.__c.__H = null),
        (ne = function (re, ie) {
            for (var se in ie)
                re[se] = ie[se];
            return re
        }({}, ne)).__c != null && (ne.__c.__P === te && (ne.__c.__P = ee),
            ne.__c = null),
        ne.__k = ne.__k && ne.__k.map(function (re) {
            return T(re, ee, te)
        })),
        ne
}
function A(ne, ee, te) {
    return ne && te && (ne.__v = null,
        ne.__k = ne.__k && ne.__k.map(function (re) {
            return A(re, ee, te)
        }),
        ne.__c && ne.__c.__P === ee && (ne.__e && te.appendChild(ne.__e),
            ne.__c.__e = !0,
            ne.__c.__P = te)),
        ne
}
function D$1() {
    this.__u = 0,
        this.t = null,
        this.__b = null
}
function L(ne) {
    var ee = ne.__.__c;
    return ee && ee.__a && ee.__a(ne)
}
function O$1(ne) {
    var ee, te, re;
    function ie(se) {
        if (ee || (ee = ne()).then(function (ae) {
            te = ae.default || ae
        }, function (ae) {
            re = ae
        }),
            re)
            throw re;
        if (!te)
            throw ee;
        return _$2(te, se)
    }
    return ie.displayName = "Lazy",
        ie.__f = !0,
        ie
}
function F$1() {
    this.u = null,
        this.o = null
}
l$3.unmount = function (ne) {
    var ee = ne.__c;
    ee && ee.__R && ee.__R(),
        ee && 32 & ne.__u && (ne.type = null),
        M$1 && M$1(ne)
}
    ,
    (D$1.prototype = new k$2).__c = function (ne, ee) {
        var te = ee.__c
            , re = this;
        re.t == null && (re.t = []),
            re.t.push(te);
        var ie = L(re.__v)
            , se = !1
            , ae = function () {
                se || (se = !0,
                    te.__R = null,
                    ie ? ie(ce) : ce())
            };
        te.__R = ae;
        var ce = function () {
            if (!--re.__u) {
                if (re.state.__a) {
                    var le = re.state.__a;
                    re.__v.__k[0] = A(le, le.__c.__P, le.__c.__O)
                }
                var he;
                for (re.setState({
                    __a: re.__b = null
                }); he = re.t.pop();)
                    he.forceUpdate()
            }
        };
        re.__u++ || 32 & ee.__u || re.setState({
            __a: re.__b = re.__v.__k[0]
        }),
            ne.then(ae, ae)
    }
    ,
    D$1.prototype.componentWillUnmount = function () {
        this.t = []
    }
    ,
    D$1.prototype.render = function (ne, ee) {
        if (this.__b) {
            if (this.__v.__k) {
                var te = document.createElement("div")
                    , re = this.__v.__k[0].__c;
                this.__v.__k[0] = T(this.__b, te, re.__O = re.__P)
            }
            this.__b = null
        }
        var ie = ee.__a && _$2(b$2, null, ne.fallback);
        return ie && (ie.__u &= -33),
            [_$2(b$2, null, ee.__a ? null : ne.children), ie]
    }
    ;
var U$1 = function (ne, ee, te) {
    if (++te[1] === te[0] && ne.o.delete(ee),
        ne.props.revealOrder && (ne.props.revealOrder[0] !== "t" || !ne.o.size))
        for (te = ne.u; te;) {
            for (; te.length > 3;)
                te.pop()();
            if (te[1] < te[0])
                break;
            ne.u = te = te[2]
        }
};
function V(ne) {
    return this.getChildContext = function () {
        return ne.context
    }
        ,
        ne.children
}
function W(ne) {
    var ee = this
        , te = ne.i;
    ee.componentWillUnmount = function () {
        B$3(null, ee.l),
            ee.l = null,
            ee.i = null
    }
        ,
        ee.i && ee.i !== te && ee.componentWillUnmount(),
        ee.l || (ee.i = te,
            ee.l = {
                nodeType: 1,
                parentNode: te,
                childNodes: [],
                contains: function () {
                    return !0
                },
                appendChild: function (re) {
                    this.childNodes.push(re),
                        ee.i.appendChild(re)
                },
                insertBefore: function (re, ie) {
                    this.childNodes.push(re),
                        ee.i.appendChild(re)
                },
                removeChild: function (re) {
                    this.childNodes.splice(this.childNodes.indexOf(re) >>> 1, 1),
                        ee.i.removeChild(re)
                }
            }),
        B$3(_$2(V, {
            context: ee.context
        }, ne.__v), ee.l)
}
function P(ne, ee) {
    var te = _$2(W, {
        __v: ne,
        i: ee
    });
    return te.containerInfo = ee,
        te
}
(F$1.prototype = new k$2).__a = function (ne) {
    var ee = this
        , te = L(ee.__v)
        , re = ee.o.get(ne);
    return re[0]++,
        function (ie) {
            var se = function () {
                ee.props.revealOrder ? (re.push(ie),
                    U$1(ee, ne, re)) : ie()
            };
            te ? te(se) : se()
        }
}
    ,
    F$1.prototype.render = function (ne) {
        this.u = null,
            this.o = new Map;
        var ee = H$1(ne.children);
        ne.revealOrder && ne.revealOrder[0] === "b" && ee.reverse();
        for (var te = ee.length; te--;)
            this.o.set(ee[te], this.u = [1, 0, this.u]);
        return ne.children
    }
    ,
    F$1.prototype.componentDidUpdate = F$1.prototype.componentDidMount = function () {
        var ne = this;
        this.o.forEach(function (ee, te) {
            U$1(ne, te, ee)
        })
    }
    ;
var j = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103
    , z = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
    , B$1 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
    , H = /[A-Z0-9]/g
    , Z = typeof document < "u"
    , Y = function (ne) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(ne)
    };
function $(ne, ee, te) {
    return ee.__k == null && (ee.textContent = ""),
        B$3(ne, ee),
        typeof te == "function" && te(),
        ne ? ne.__c : null
}
function q$1(ne, ee, te) {
    return D$3(ne, ee),
        typeof te == "function" && te(),
        ne ? ne.__c : null
}
k$2.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (ne) {
        Object.defineProperty(k$2.prototype, ne, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + ne]
            },
            set: function (ee) {
                Object.defineProperty(this, ne, {
                    configurable: !0,
                    writable: !0,
                    value: ee
                })
            }
        })
    });
var G = l$3.event;
function J() { }
function K() {
    return this.cancelBubble
}
function Q() {
    return this.defaultPrevented
}
l$3.event = function (ne) {
    return G && (ne = G(ne)),
        ne.persist = J,
        ne.isPropagationStopped = K,
        ne.isDefaultPrevented = Q,
        ne.nativeEvent = ne
}
    ;
var X, nn$1 = {
    enumerable: !1,
    configurable: !0,
    get: function () {
        return this.class
    }
}, tn$1 = l$3.vnode;
l$3.vnode = function (ne) {
    typeof ne.type == "string" && function (ee) {
        var te = ee.props
            , re = ee.type
            , ie = {}
            , se = re.indexOf("-") === -1;
        for (var ae in te) {
            var ce = te[ae];
            if (!(ae === "value" && "defaultValue" in te && ce == null || Z && ae === "children" && re === "noscript" || ae === "class" || ae === "className")) {
                var le = ae.toLowerCase();
                ae === "defaultValue" && "value" in te && te.value == null ? ae = "value" : ae === "download" && ce === !0 ? ce = "" : le === "translate" && ce === "no" ? ce = !1 : le[0] === "o" && le[1] === "n" ? le === "ondoubleclick" ? ae = "ondblclick" : le !== "onchange" || re !== "input" && re !== "textarea" || Y(te.type) ? le === "onfocus" ? ae = "onfocusin" : le === "onblur" ? ae = "onfocusout" : B$1.test(ae) && (ae = le) : le = ae = "oninput" : se && z.test(ae) ? ae = ae.replace(H, "-$&").toLowerCase() : ce === null && (ce = void 0),
                    le === "oninput" && ie[ae = le] && (ae = "oninputCapture"),
                    ie[ae] = ce
            }
        }
        re == "select" && ie.multiple && Array.isArray(ie.value) && (ie.value = H$1(te.children).forEach(function (he) {
            he.props.selected = ie.value.indexOf(he.props.value) != -1
        })),
            re == "select" && ie.defaultValue != null && (ie.value = H$1(te.children).forEach(function (he) {
                he.props.selected = ie.multiple ? ie.defaultValue.indexOf(he.props.value) != -1 : ie.defaultValue == he.props.value
            })),
            te.class && !te.className ? (ie.class = te.class,
                Object.defineProperty(ie, "className", nn$1)) : (te.className && !te.class || te.class && te.className) && (ie.class = ie.className = te.className),
            ee.props = ie
    }(ne),
        ne.$$typeof = j,
        tn$1 && tn$1(ne)
}
    ;
var en$1 = l$3.__r;
l$3.__r = function (ne) {
    en$1 && en$1(ne),
        X = ne.__c
}
    ;
var rn$1 = l$3.diffed;
l$3.diffed = function (ne) {
    rn$1 && rn$1(ne);
    var ee = ne.props
        , te = ne.__e;
    te != null && ne.type === "textarea" && "value" in ee && ee.value !== te.value && (te.value = ee.value == null ? "" : ee.value),
        X = null
}
    ;
var un = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function (ne) {
                return X.__n[ne.__c].props.value
            },
            useCallback: q$2,
            useContext: x$2,
            useDebugValue: P$1,
            useDeferredValue: _n$1,
            useEffect: y$1,
            useId: g$2,
            useImperativeHandle: F$2,
            useInsertionEffect: Sn,
            useLayoutEffect: _$1,
            useMemo: T$1,
            useReducer: p$2,
            useRef: A$1,
            useState: h$1,
            useSyncExternalStore: En,
            useTransition: bn
        }
    }
};
function cn(ne) {
    return _$2.bind(null, ne)
}
function fn(ne) {
    return !!ne && ne.$$typeof === j
}
function ln(ne) {
    return fn(ne) && ne.type === b$2
}
function an(ne) {
    return !!ne && !!ne.displayName && (typeof ne.displayName == "string" || ne.displayName instanceof String) && ne.displayName.startsWith("Memo(")
}
function sn(ne) {
    return fn(ne) ? E$2.apply(null, arguments) : ne
}
function hn(ne) {
    return !!ne.__k && (B$3(null, ne),
        !0)
}
function vn(ne) {
    return ne && (ne.base || ne.nodeType === 1 && ne) || null
}
var dn = function (ne, ee) {
    return ne(ee)
}
    , pn = function (ne, ee) {
        return ne(ee)
    }
    , mn = b$2;
function yn(ne) {
    ne()
}
function _n$1(ne) {
    return ne
}
function bn() {
    return [!1, yn]
}
var Sn = _$1
    , gn = fn;
function En(ne, ee) {
    var te = ee()
        , re = h$1({
            h: {
                __: te,
                v: ee
            }
        })
        , ie = re[0].h
        , se = re[1];
    return _$1(function () {
        ie.__ = te,
            ie.v = ee,
            Cn(ie) && se({
                h: ie
            })
    }, [ne, te, ee]),
        y$1(function () {
            return Cn(ie) && se({
                h: ie
            }),
                ne(function () {
                    Cn(ie) && se({
                        h: ie
                    })
                })
        }, [ne]),
        te
}
function Cn(ne) {
    var ee, te, re = ne.v, ie = ne.__;
    try {
        var se = re();
        return !((ee = ie) === (te = se) && (ee !== 0 || 1 / ee == 1 / te) || ee != ee && te != te)
    } catch {
        return !0
    }
}
var xn = {
    useState: h$1,
    useId: g$2,
    useReducer: p$2,
    useEffect: y$1,
    useLayoutEffect: _$1,
    useInsertionEffect: Sn,
    useTransition: bn,
    useDeferredValue: _n$1,
    useSyncExternalStore: En,
    startTransition: yn,
    useRef: A$1,
    useImperativeHandle: F$2,
    useMemo: T$1,
    useCallback: q$2,
    useContext: x$2,
    useDebugValue: P$1,
    version: "18.3.1",
    Children: I,
    render: $,
    hydrate: q$1,
    unmountComponentAtNode: hn,
    createPortal: P,
    createElement: _$2,
    createContext: G$1,
    createFactory: cn,
    cloneElement: sn,
    createRef: m$1,
    Fragment: b$2,
    isValidElement: fn,
    isElement: gn,
    isFragment: ln,
    isMemo: an,
    findDOMNode: vn,
    Component: k$2,
    PureComponent: E$1,
    memo: C$1,
    forwardRef: w$1,
    flushSync: pn,
    unstable_batchedUpdates: dn,
    StrictMode: mn,
    Suspense: D$1,
    SuspenseList: F$1,
    lazy: O$1,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: un
}
    , f$1 = 0;
function u$1(ne, ee, te, re, ie, se) {
    ee || (ee = {});
    var ae, ce, le = ee;
    "ref" in ee && (ae = ee.ref,
        delete ee.ref);
    var he = {
        type: ne,
        props: le,
        key: te,
        ref: ae,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --f$1,
        __i: -1,
        __u: 0,
        __source: ie,
        __self: se
    };
    if (typeof ne == "function" && (ae = ne.defaultProps))
        for (ce in ae)
            le[ce] === void 0 && (le[ce] = ae[ce]);
    return l$3.vnode && l$3.vnode(he),
        he
}
const eventHandlers = {};
let currentId = 0;
function on$1(ne, ee) {
    const te = `${currentId}`;
    return currentId += 1,
        eventHandlers[te] = {
            handler: ee,
            name: ne
        },
        function () {
            delete eventHandlers[te]
        }
}
function once(ne, ee) {
    let te = !1;
    const re = on$1(ne, function (...ie) {
        te !== !0 && (te = !0,
            re(),
            ee(...ie))
    });
    return re
}
function invokeEventHandler(ne, ee) {
    for (const te in eventHandlers)
        eventHandlers[te].name === ne && eventHandlers[te].handler.apply(null, ee)
}
typeof window > "u" ? figma.ui.onmessage = function ([ne, ...ee]) {
    invokeEventHandler(ne, ee)
}
    : window.addEventListener("message", function (ne) {
        if (typeof ne.data.pluginMessage > "u")
            return;
        const [ee, ...te] = ne.data.pluginMessage;
        invokeEventHandler(ee, te)
    });
const MIXED_NUMBER = 999999999999999
    , MIXED_STRING = "999999999999999"
    , floatOperandRegex = /^-?\d*(?:\.\d*)?$/
    , integerOperandRegex = /^-?\d*$/
    , operatorRegex = /[+\-*/]/
    , operatorSuffixRegex = /[+\-*/]$/
    , numbersRegex = /\d/
    , invalidCharactersRegex = /[^\d.+\-*/]/;
function evaluateNumericExpression(value) {
    return value === "" || numbersRegex.test(value) === !1 || invalidCharactersRegex.test(value) === !0 ? null : operatorRegex.test(value) === !0 ? operatorSuffixRegex.test(value) === !0 ? eval(value.substring(0, value.length - 1)) : eval(value) : parseFloat(value)
}
function isValidNumericInput(ne, ee = {
    integersOnly: !1
}) {
    const te = (ne[0] === "-" ? ne.substring(1) : ne).split(operatorRegex);
    let re = -1;
    for (; ++re < te.length;) {
        const ie = te[re];
        if (ie === "" && re !== te.length - 1 || (ee.integersOnly === !0 ? integerOperandRegex : floatOperandRegex).test(ie) === !1)
            return !1
    }
    return !0
}
function pluralize(ne, ee, te) {
    return ne === 1 ? ee : typeof te > "u" ? `${ee}s` : te
}
var i = Symbol.for("preact-signals");
function t() {
    if (s$1 > 1)
        s$1--;
    else {
        for (var ne, ee = !1; h !== void 0;) {
            var te = h;
            for (h = void 0,
                f++; te !== void 0;) {
                var re = te.o;
                if (te.o = void 0,
                    te.f &= -3,
                    !(8 & te.f) && c(te))
                    try {
                        te.c()
                    } catch (ie) {
                        ee || (ne = ie,
                            ee = !0)
                    }
                te = re
            }
        }
        if (f = 0,
            s$1--,
            ee)
            throw ne
    }
}
var o = void 0;
function n(ne) {
    var ee = o;
    o = void 0;
    try {
        return ne()
    } finally {
        o = ee
    }
}
var h = void 0
    , s$1 = 0
    , f = 0
    , v$2 = 0;
function e(ne) {
    if (o !== void 0) {
        var ee = ne.n;
        if (ee === void 0 || ee.t !== o)
            return ee = {
                i: 0,
                S: ne,
                p: o.s,
                n: void 0,
                t: o,
                e: void 0,
                x: void 0,
                r: ee
            },
                o.s !== void 0 && (o.s.n = ee),
                o.s = ee,
                ne.n = ee,
                32 & o.f && ne.S(ee),
                ee;
        if (ee.i === -1)
            return ee.i = 0,
                ee.n !== void 0 && (ee.n.p = ee.p,
                    ee.p !== void 0 && (ee.p.n = ee.n),
                    ee.p = o.s,
                    ee.n = void 0,
                    o.s.n = ee,
                    o.s = ee),
                ee
    }
}
function u(ne, ee) {
    this.v = ne,
        this.i = 0,
        this.n = void 0,
        this.t = void 0,
        this.W = ee?.watched,
        this.Z = ee?.unwatched,
        this.name = ee?.name
}
u.prototype.brand = i;
u.prototype.h = function () {
    return !0
}
    ;
u.prototype.S = function (ne) {
    var ee = this
        , te = this.t;
    te !== ne && ne.e === void 0 && (ne.x = te,
        this.t = ne,
        te !== void 0 ? te.e = ne : n(function () {
            var re;
            (re = ee.W) == null || re.call(ee)
        }))
}
    ;
u.prototype.U = function (ne) {
    var ee = this;
    if (this.t !== void 0) {
        var te = ne.e
            , re = ne.x;
        te !== void 0 && (te.x = re,
            ne.e = void 0),
            re !== void 0 && (re.e = te,
                ne.x = void 0),
            ne === this.t && (this.t = re,
                re === void 0 && n(function () {
                    var ie;
                    (ie = ee.Z) == null || ie.call(ee)
                }))
    }
}
    ;
u.prototype.subscribe = function (ne) {
    var ee = this;
    return E(function () {
        var te = ee.value
            , re = o;
        o = void 0;
        try {
            ne(te)
        } finally {
            o = re
        }
    }, {
        name: "sub"
    })
}
    ;
u.prototype.valueOf = function () {
    return this.value
}
    ;
u.prototype.toString = function () {
    return this.value + ""
}
    ;
u.prototype.toJSON = function () {
    return this.value
}
    ;
u.prototype.peek = function () {
    var ne = o;
    o = void 0;
    try {
        return this.value
    } finally {
        o = ne
    }
}
    ;
Object.defineProperty(u.prototype, "value", {
    get: function () {
        var ne = e(this);
        return ne !== void 0 && (ne.i = this.i),
            this.v
    },
    set: function (ne) {
        if (ne !== this.v) {
            if (f > 100)
                throw new Error("Cycle detected");
            this.v = ne,
                this.i++,
                v$2++,
                s$1++;
            try {
                for (var ee = this.t; ee !== void 0; ee = ee.x)
                    ee.t.N()
            } finally {
                t()
            }
        }
    }
});
function d$1(ne, ee) {
    return new u(ne, ee)
}
function c(ne) {
    for (var ee = ne.s; ee !== void 0; ee = ee.n)
        if (ee.S.i !== ee.i || !ee.S.h() || ee.S.i !== ee.i)
            return !0;
    return !1
}
function a(ne) {
    for (var ee = ne.s; ee !== void 0; ee = ee.n) {
        var te = ee.S.n;
        if (te !== void 0 && (ee.r = te),
            ee.S.n = ee,
            ee.i = -1,
            ee.n === void 0) {
            ne.s = ee;
            break
        }
    }
}
function l$1(ne) {
    for (var ee = ne.s, te = void 0; ee !== void 0;) {
        var re = ee.p;
        ee.i === -1 ? (ee.S.U(ee),
            re !== void 0 && (re.n = ee.n),
            ee.n !== void 0 && (ee.n.p = re)) : te = ee,
            ee.S.n = ee.r,
            ee.r !== void 0 && (ee.r = void 0),
            ee = re
    }
    ne.s = te
}
function y(ne, ee) {
    u.call(this, void 0),
        this.x = ne,
        this.s = void 0,
        this.g = v$2 - 1,
        this.f = 4,
        this.W = ee?.watched,
        this.Z = ee?.unwatched,
        this.name = ee?.name
}
y.prototype = new u;
y.prototype.h = function () {
    if (this.f &= -3,
        1 & this.f)
        return !1;
    if ((36 & this.f) == 32 || (this.f &= -5,
        this.g === v$2))
        return !0;
    if (this.g = v$2,
        this.f |= 1,
        this.i > 0 && !c(this))
        return this.f &= -2,
            !0;
    var ne = o;
    try {
        a(this),
            o = this;
        var ee = this.x();
        (16 & this.f || this.v !== ee || this.i === 0) && (this.v = ee,
            this.f &= -17,
            this.i++)
    } catch (te) {
        this.v = te,
            this.f |= 16,
            this.i++
    }
    return o = ne,
        l$1(this),
        this.f &= -2,
        !0
}
    ;
y.prototype.S = function (ne) {
    if (this.t === void 0) {
        this.f |= 36;
        for (var ee = this.s; ee !== void 0; ee = ee.n)
            ee.S.S(ee)
    }
    u.prototype.S.call(this, ne)
}
    ;
y.prototype.U = function (ne) {
    if (this.t !== void 0 && (u.prototype.U.call(this, ne),
        this.t === void 0)) {
        this.f &= -33;
        for (var ee = this.s; ee !== void 0; ee = ee.n)
            ee.S.U(ee)
    }
}
    ;
y.prototype.N = function () {
    if (!(2 & this.f)) {
        this.f |= 6;
        for (var ne = this.t; ne !== void 0; ne = ne.x)
            ne.t.N()
    }
}
    ;
Object.defineProperty(y.prototype, "value", {
    get: function () {
        if (1 & this.f)
            throw new Error("Cycle detected");
        var ne = e(this);
        if (this.h(),
            ne !== void 0 && (ne.i = this.i),
            16 & this.f)
            throw this.v;
        return this.v
    }
});
function w(ne, ee) {
    return new y(ne, ee)
}
function _(ne) {
    var ee = ne.u;
    if (ne.u = void 0,
        typeof ee == "function") {
        s$1++;
        var te = o;
        o = void 0;
        try {
            ee()
        } catch (re) {
            throw ne.f &= -2,
            ne.f |= 8,
            b$1(ne),
            re
        } finally {
            o = te,
                t()
        }
    }
}
function b$1(ne) {
    for (var ee = ne.s; ee !== void 0; ee = ee.n)
        ee.S.U(ee);
    ne.x = void 0,
        ne.s = void 0,
        _(ne)
}
function g(ne) {
    if (o !== this)
        throw new Error("Out-of-order effect");
    l$1(this),
        o = ne,
        this.f &= -2,
        8 & this.f && b$1(this),
        t()
}
function p$1(ne, ee) {
    this.x = ne,
        this.u = void 0,
        this.s = void 0,
        this.o = void 0,
        this.f = 32,
        this.name = ee?.name
}
p$1.prototype.c = function () {
    var ne = this.S();
    try {
        if (8 & this.f || this.x === void 0)
            return;
        var ee = this.x();
        typeof ee == "function" && (this.u = ee)
    } finally {
        ne()
    }
}
    ;
p$1.prototype.S = function () {
    if (1 & this.f)
        throw new Error("Cycle detected");
    this.f |= 1,
        this.f &= -9,
        _(this),
        a(this),
        s$1++;
    var ne = o;
    return o = this,
        g.bind(this, ne)
}
    ;
p$1.prototype.N = function () {
    2 & this.f || (this.f |= 2,
        this.o = h,
        h = this)
}
    ;
p$1.prototype.d = function () {
    this.f |= 8,
        1 & this.f || b$1(this)
}
    ;
p$1.prototype.dispose = function () {
    this.d()
}
    ;
function E(ne, ee) {
    var te = new p$1(ne, ee);
    try {
        te.c()
    } catch (ie) {
        throw te.d(),
        ie
    }
    var re = te.d.bind(te);
    return re[Symbol.dispose] = re,
        re
}
var v$1;
function s(ne, ee) {
    l$3[ne] = ee.bind(null, l$3[ne] || function () { }
    )
}
function l(ne) {
    v$1 && v$1(),
        v$1 = ne && ne.S()
}
function d(ne) {
    var ee = this
        , te = ne.data
        , re = useSignal(te);
    re.value = te;
    var ie = T$1(function () {
        for (var se = ee.__v; se = se.__;)
            if (se.__c) {
                se.__c.__$f |= 4;
                break
            }
        return ee.__$u.c = function () {
            ee.base.data = ie.peek()
        }
            ,
            w(function () {
                var ae = re.value.value;
                return ae === 0 ? 0 : ae === !0 ? "" : ae || ""
            })
    }, []);
    return ie.value
}
d.displayName = "_st";
Object.defineProperties(u.prototype, {
    constructor: {
        configurable: !0,
        value: void 0
    },
    type: {
        configurable: !0,
        value: d
    },
    props: {
        configurable: !0,
        get: function () {
            return {
                data: this
            }
        }
    },
    __b: {
        configurable: !0,
        value: 1
    }
});
s("__b", function (ne, ee) {
    if (typeof ee.type == "string") {
        var te, re = ee.props;
        for (var ie in re)
            if (ie !== "children") {
                var se = re[ie];
                se instanceof u && (te || (ee.__np = te = {}),
                    te[ie] = se,
                    re[ie] = se.peek())
            }
    }
    ne(ee)
});
s("__r", function (ne, ee) {
    l();
    var te, re = ee.__c;
    re && (re.__$f &= -2,
        (te = re.__$u) === void 0 && (re.__$u = te = function (ie) {
            var se;
            return E(function () {
                se = this
            }),
                se.c = function () {
                    re.__$f |= 1,
                        re.setState({})
                }
                ,
                se
        }())),
        l(te),
        ne(ee)
});
s("__e", function (ne, ee, te, re) {
    l(),
        ne(ee, te, re)
});
s("diffed", function (ne, ee) {
    l();
    var te;
    if (typeof ee.type == "string" && (te = ee.__e)) {
        var re = ee.__np
            , ie = ee.props;
        if (re) {
            var se = te.U;
            if (se)
                for (var ae in se) {
                    var ce = se[ae];
                    ce !== void 0 && !(ae in re) && (ce.d(),
                        se[ae] = void 0)
                }
            else
                te.U = se = {};
            for (var le in re) {
                var he = se[le]
                    , de = re[le];
                he === void 0 ? (he = p(te, le, de, ie),
                    se[le] = he) : he.o(de, ie)
            }
        }
    }
    ne(ee)
});
function p(ne, ee, te, re) {
    var ie = ee in ne && ne.ownerSVGElement === void 0
        , se = d$1(te);
    return {
        o: function (ae, ce) {
            se.value = ae,
                re = ce
        },
        d: E(function () {
            var ae = se.value.value;
            re[ee] !== ae && (re[ee] = ae,
                ie ? ne[ee] = ae : ae ? ne.setAttribute(ee, ae) : ne.removeAttribute(ee))
        })
    }
}
s("unmount", function (ne, ee) {
    if (typeof ee.type == "string") {
        var te = ee.__e;
        if (te) {
            var re = te.U;
            if (re) {
                te.U = void 0;
                for (var ie in re) {
                    var se = re[ie];
                    se && se.d()
                }
            }
        }
    } else {
        var ae = ee.__c;
        if (ae) {
            var ce = ae.__$u;
            ce && (ae.__$u = void 0,
                ce.d())
        }
    }
    ne(ee)
});
s("__h", function (ne, ee, te, re) {
    re < 3 && (ee.__$f |= 2),
        ne(ee, te, re)
});
k$2.prototype.shouldComponentUpdate = function (ne, ee) {
    var te = this.__$u;
    if (!(te && te.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
        return !0;
    for (var re in ee)
        return !0;
    for (var ie in ne)
        if (ie !== "__source" && ne[ie] !== this.props[ie])
            return !0;
    for (var se in this.props)
        if (!(se in ne))
            return !0;
    return !1
}
    ;
function useSignal(ne) {
    return T$1(function () {
        return d$1(ne)
    }, [])
}
function useSignalEffect(ne) {
    var ee = A$1(ne);
    ee.current = ne,
        y$1(function () {
            return E(function () {
                return ee.current()
            })
        }, [])
}
function createClassName(ne) {
    return ne.filter(function (ee) {
        return ee !== null
    }).join(" ")
}
const loadingIndicator$1 = "_loadingIndicator_pl5c3_1"
    , svg = "_svg_pl5c3_8"
    , rotating = "_rotating_pl5c3_1"
    , styles$c = {
        loadingIndicator: loadingIndicator$1,
        svg,
        rotating
    };
function LoadingIndicator({ color: ne, ...ee }) {
    return _$2("div", {
        ...ee,
        class: styles$c.loadingIndicator
    }, _$2("svg", {
        class: styles$c.svg,
        style: typeof ne > "u" ? void 0 : {
            fill: `var(--figma-color-icon-${ne})`
        }
    }, _$2("path", {
        d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z"
    })))
}
const button = "_button_5fxgc_1"
    , fullWidth$1 = "_fullWidth_5fxgc_7"
    , disabled$4 = "_disabled_5fxgc_17"
    , danger = "_danger_5fxgc_44"
    , secondary = "_secondary_5fxgc_56"
    , loadingIndicator = "_loadingIndicator_5fxgc_86"
    , children$3 = "_children_5fxgc_122"
    , loading = "_loading_5fxgc_86"
    , buttonStyles = {
        button,
        fullWidth: fullWidth$1,
        disabled: disabled$4,
        default: "_default_5fxgc_29",
        danger,
        secondary,
        loadingIndicator,
        children: children$3,
        loading
    };
function Button({ children: ne, danger: ee = !1, disabled: te = !1, fullWidth: re = !1, loading: ie = !1, onClick: se, propagateEscapeKeyDown: ae = !0, secondary: ce = !1, ...le }) {
    const he = q$2(function (de) {
        de.key === "Escape" && (ae === !1 && de.stopPropagation(),
            de.currentTarget.blur())
    }, [ae]);
    return _$2("div", {
        class: createClassName([buttonStyles.button, ce === !0 ? buttonStyles.secondary : buttonStyles.default, ee === !0 ? buttonStyles.danger : null, re === !0 ? buttonStyles.fullWidth : null, te === !0 ? buttonStyles.disabled : null, ie === !0 ? buttonStyles.loading : null])
    }, ie === !0 ? _$2("div", {
        class: buttonStyles.loadingIndicator
    }, _$2(LoadingIndicator, null)) : null, _$2("button", {
        ...le,
        disabled: te === !0,
        onClick: te === !0 || ie === !0 ? void 0 : se,
        onKeyDown: te === !0 || ie === !0 ? void 0 : he,
        tabIndex: te === !0 ? -1 : 0
    }, _$2("div", {
        class: buttonStyles.children
    }, ne)))
}
const icon$3 = "_icon_13804_1"
    , styles$b = {
        icon: icon$3
    };
function createIcon(ne, ee) {
    const { width: te, height: re } = ee;
    return function ({ color: se, ...ae }) {
        return _$2("svg", {
            ...ae,
            class: styles$b.icon,
            height: re,
            style: typeof se > "u" ? void 0 : {
                fill: `var(--figma-color-icon-${se})`
            },
            width: te,
            xmlns: "http://www.w3.org/2000/svg"
        }, _$2("path", {
            "clip-rule": "evenodd",
            d: ne,
            "fill-rule": "evenodd"
        }))
    }
}
const IconControlCheckboxChecked12 = createIcon("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z", {
    height: 12,
    width: 12
})
    , checkbox = "_checkbox_1a43f_1"
    , input$5 = "_input_1a43f_6"
    , disabled$3 = "_disabled_1a43f_18"
    , fill = "_fill_1a43f_22"
    , border$2 = "_border_1a43f_23"
    , checkIcon$1 = "_checkIcon_1a43f_60"
    , children$2 = "_children_1a43f_67"
    , styles$a = {
        checkbox,
        input: input$5,
        disabled: disabled$3,
        fill,
        border: border$2,
        checkIcon: checkIcon$1,
        children: children$2
    };
function Checkbox({ children: ne, disabled: ee = !1, name: te, onChange: re = function () { }
    , onValueChange: ie = function () { }
    , propagateEscapeKeyDown: se = !0, value: ae = !1, ...ce }) {
    const le = q$2(function (de) {
        const fe = de.currentTarget.checked;
        ie(fe, te),
            re(de)
    }, [te, re, ie])
        , he = q$2(function (de) {
            de.key === "Escape" && (se === !1 && de.stopPropagation(),
                de.currentTarget.blur())
        }, [se]);
    return _$2("label", {
        class: createClassName([styles$a.checkbox, ee === !0 ? styles$a.disabled : null])
    }, _$2("input", {
        ...ce,
        checked: ae === !0,
        class: styles$a.input,
        disabled: ee === !0,
        name: te,
        onChange: le,
        onKeyDown: he,
        tabIndex: ee === !0 ? -1 : 0,
        type: "checkbox"
    }), _$2("div", {
        class: styles$a.fill
    }, ae === !0 ? _$2("div", {
        class: styles$a.checkIcon
    }, _$2(IconControlCheckboxChecked12, null)) : null), _$2("div", {
        class: styles$a.border
    }), _$2("div", {
        class: styles$a.children
    }, ne))
}
const divider = "_divider_m18ta_1"
    , styles$9 = {
        divider
    };
function Divider(ne) {
    return _$2("hr", {
        ...ne,
        class: styles$9.divider
    })
}
const menu$1 = "_menu_fzd4u_1"
    , hidden = "_hidden_fzd4u_17"
    , displayNone = "_displayNone_fzd4u_22"
    , optionHeader = "_optionHeader_fzd4u_33"
    , optionValue = "_optionValue_fzd4u_34"
    , optionValueSelected = "_optionValueSelected_fzd4u_49"
    , optionValueDisabled = "_optionValueDisabled_fzd4u_52"
    , optionSeparator = "_optionSeparator_fzd4u_56"
    , input$4 = "_input_fzd4u_63"
    , checkIcon = "_checkIcon_fzd4u_74"
    , menuStyles = {
        menu: menu$1,
        hidden,
        displayNone,
        optionHeader,
        optionValue,
        optionValueSelected,
        optionValueDisabled,
        optionSeparator,
        input: input$4,
        checkIcon
    };
function getCurrentFromRef(ne) {
    if (ne.current === null)
        throw new Error("`ref.current` is `undefined`");
    return ne.current
}
function useMouseDownOutside(ne) {
    const { ref: ee, onMouseDownOutside: te } = ne;
    y$1(function () {
        function re() {
            te()
        }
        function ie(se) {
            const ae = getCurrentFromRef(ee);
            ae === se.target || ae.contains(se.target) || te()
        }
        return window.addEventListener("blur", re),
            window.addEventListener("mousedown", ie),
            function () {
                window.removeEventListener("blur", re),
                    window.removeEventListener("mousedown", ie)
            }
    }, [ee, te])
}
function useScrollableMenu(ne) {
    const { itemIdDataAttributeName: ee, menuElementRef: te, selectedId: re, setSelectedId: ie } = ne
        , se = q$2(function () {
            return Array.from(getCurrentFromRef(te).querySelectorAll(`[${ee}]`)).filter(function (de) {
                return de.hasAttribute("disabled") === !1
            })
        }, [ee, te])
        , ae = q$2(function (de) {
            if (de === null)
                return -1;
            const fe = se().findIndex(function (Re) {
                return Re.getAttribute(ee) === de
            });
            if (fe === -1)
                throw new Error("Invariant violation");
            return fe
        }, [se, ee])
        , ce = q$2(function (de) {
            const fe = se()
                , Re = ae(de)
                , Pe = fe[Re]
                , we = getCurrentFromRef(te)
                , Se = we.scrollTop
                , be = computeRelativeOffsetTop(Pe, we);
            if (be < Se) {
                we.scrollTop = be;
                return
            }
            const De = be + Pe.offsetHeight;
            De > we.scrollTop + we.offsetHeight && (we.scrollTop = De - we.offsetHeight)
        }, [ae, se, te])
        , le = q$2(function (de) {
            const fe = de.key;
            if (fe === "ArrowDown" || fe === "ArrowUp") {
                const Re = se()
                    , Pe = ae(re);
                let we;
                fe === "ArrowDown" ? we = Pe === -1 || Pe === Re.length - 1 ? 0 : Pe + 1 : we = Pe === -1 || Pe === 0 ? Re.length - 1 : Pe - 1;
                const be = Re[we].getAttribute(ee);
                ie(be),
                    ce(be)
            }
        }, [se, ae, ee, ie, re, ce]);
    return {
        handleScrollableMenuItemMouseMove: q$2(function (de) {
            const fe = de.currentTarget.getAttribute(ee);
            fe !== re && ie(fe)
        }, [ee, re, ie]),
        handleScrollableMenuKeyDown: le
    }
}
function computeRelativeOffsetTop(ne, ee) {
    let te = ne
        , re = 0;
    for (; te !== ee;) {
        if (re += te.offsetTop,
            te.parentElement === null)
            throw new Error("`element.parentElement` is `null`");
        te = te.parentElement
    }
    return re
}
const IconControlChevronDown8 = createIcon("m3.64641 6.35352-3-3 .70711-.70711 2.64644 2.64645 2.64645-2.64645.70711.70711-3 3-.35356.35355-.35355-.35355Z", {
    height: 8,
    width: 8
})
    , IconMenuCheckmarkChecked16 = createIcon("M13.2069 5.20724 7.70688 10.7072l-.70711.7072-.70711-.7072-3-2.99996 1.41422-1.41421 2.29289 2.29289 4.79293-4.79289 1.4142 1.41421Z", {
        height: 16,
        width: 16
    })
    , dropdown = "_dropdown_fox14_1"
    , disabled$2 = "_disabled_fox14_12"
    , icon$2 = "_icon_fox14_21"
    , empty = "_empty_fox14_33"
    , value$1 = "_value_fox14_37"
    , hasIcon$1 = "_hasIcon_fox14_51"
    , placeholder = "_placeholder_fox14_55"
    , chevronIcon = "_chevronIcon_fox14_59"
    , border$1 = "_border_fox14_70"
    , hasBorder$1 = "_hasBorder_fox14_79"
    , underline$1 = "_underline_fox14_84"
    , menu = "_menu_fox14_97"
    , dropdownStyles = {
        dropdown,
        disabled: disabled$2,
        icon: icon$2,
        empty,
        value: value$1,
        hasIcon: hasIcon$1,
        placeholder,
        chevronIcon,
        border: border$1,
        hasBorder: hasBorder$1,
        underline: underline$1,
        menu
    }
    , INVALID_ID = null
    , ITEM_ID_DATA_ATTRIBUTE_NAME$1 = "data-dropdown-item-id"
    , VIEWPORT_MARGIN = 16;
function updateMenuElementLayout(ne, ee, te, re) {
    const ie = window.innerWidth - 2 * VIEWPORT_MARGIN
        , se = window.innerHeight - 2 * VIEWPORT_MARGIN;
    ee.style.maxWidth = `${ie}px`,
        ee.style.maxHeight = `${se}px`;
    const ae = getSelectedLabelElement(ee, te)
        , ce = ne.getBoundingClientRect()
        , le = re.getBoundingClientRect()
        , he = ee.offsetHeight === se;
    ee.style.minWidth = `${ce.width}px`;
    const de = computeMenuElementLeft({
        menuWidth: ee.offsetWidth,
        rootLeft: ce.left
    }) + (ce.left - le.left)
        , fe = computeMenuElementTop({
            isScrollable: he,
            menuHeight: ee.offsetHeight,
            rootHeight: ne.offsetHeight,
            rootTop: ce.top,
            selectedTop: ae === null ? null : ae.offsetTop
        }) + (ce.top - le.top);
    ee.style.left = `${de}px`,
        ee.style.top = `${fe}px`,
        ae !== null && he === !0 && (ee.scrollTop = computeMenuElementScrollTop({
            menuHeight: ee.offsetHeight,
            menuScrollHeight: ee.scrollHeight,
            menuTop: ee.getBoundingClientRect().top,
            rootHeight: ne.offsetHeight,
            rootTop: ce.top,
            selectedHeight: ae.offsetHeight,
            selectedTop: ae.offsetTop
        }))
}
function getSelectedLabelElement(ne, ee) {
    if (ee === INVALID_ID)
        return null;
    const te = ne.querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME$1}='${ee}']`);
    if (te === null)
        throw new Error("Invariant violation");
    const re = te.parentElement;
    if (re === null)
        throw new Error("Invariant violation");
    return re
}
function computeMenuElementLeft(ne) {
    const { rootLeft: ee, menuWidth: te } = ne;
    if (ee <= VIEWPORT_MARGIN)
        return negate(ee) + VIEWPORT_MARGIN;
    const re = negate(ee + te - (window.innerWidth - VIEWPORT_MARGIN));
    return Math.min(re, 0)
}
function computeMenuElementTop(ne) {
    const ee = window.innerHeight
        , { isScrollable: te, menuHeight: re, rootHeight: ie, rootTop: se, selectedTop: ae } = ne;
    if (se <= VIEWPORT_MARGIN)
        return negate(se) + VIEWPORT_MARGIN;
    if (se + ie >= ee - VIEWPORT_MARGIN)
        return negate(se - (ee - VIEWPORT_MARGIN - re));
    const ce = negate(se - VIEWPORT_MARGIN)
        , le = ee - VIEWPORT_MARGIN - re - se;
    if (ae === null || te === !0) {
        const he = Math.min(negate((re - ie) / 2), 0);
        return restrictToRange(he, ce, le)
    }
    return restrictToRange(negate(ae), ce, le)
}
function computeMenuElementScrollTop(ne) {
    const ee = window.innerHeight
        , { menuHeight: te, menuScrollHeight: re, menuTop: ie, rootHeight: se, rootTop: ae, selectedTop: ce, selectedHeight: le } = ne
        , he = 0
        , de = re - te;
    return ae <= ie ? restrictToRange(ce, he, de) : ae + se >= ee - VIEWPORT_MARGIN ? restrictToRange(ce + le - te, he, de) : restrictToRange(ce - ae + ie, he, de)
}
function negate(ne) {
    return -1 * ne
}
function restrictToRange(ne, ee, te) {
    return Math.min(Math.max(ne, ee), te)
}
function Dropdown({ disabled: ne = !1, icon: ee, name: te, options: re, onChange: ie = function () { }
    , onValueChange: se = function () { }
    , placeholder: ae, value: ce, variant: le, ...he }) {
    if (typeof ee == "string" && ee.length !== 1)
        throw new Error(`String \`icon\` must be a single character: ${ee}`);
    const de = A$1(null)
        , fe = A$1(null)
        , [Re, Pe] = h$1(!1)
        , we = findOptionIndexByValue(re, ce);
    if (ce !== null && we === -1)
        throw new Error(`Invalid \`value\`: ${ce}`);
    const [Se, be] = h$1(we === -1 ? INVALID_ID : `${we}`)
        , De = typeof re[we] > "u" ? "" : getDropdownOptionValue(re[we])
        , { handleScrollableMenuKeyDown: ke, handleScrollableMenuItemMouseMove: Me } = useScrollableMenu({
            itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME$1,
            menuElementRef: fe,
            selectedId: Se,
            setSelectedId: be
        })
        , Ne = q$2(function () {
            Pe(!1),
                be(INVALID_ID),
                getCurrentFromRef(de).blur()
        }, [])
        , $e = q$2(function (Ee) {
            const me = getCurrentFromRef(de)
                , xe = getCurrentFromRef(fe);
            updateMenuElementLayout(me, xe, Ee, document.documentElement)
        }, [])
        , Oe = q$2(function () {
            if (Re === !0)
                return;
            if (Pe(!0),
                ce === null) {
                $e(Se);
                return
            }
            const Ee = findOptionIndexByValue(re, ce);
            if (Ee === -1)
                throw new Error(`Invalid \`value\`: ${ce}`);
            const me = `${Ee}`;
            be(me),
                $e(me)
        }, [re, Se, $e, ce, Re])
        , Ie = q$2(function (Ee) {
            if (Ee.key === "Escape" || Ee.key === "Tab") {
                Ne();
                return
            }
            if (Ee.key === "Enter") {
                if (Se !== INVALID_ID) {
                    const me = getCurrentFromRef(fe).querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME$1}='${Se}']`);
                    if (me === null)
                        throw new Error("Invariant violation");
                    me.checked = !0;
                    const xe = document.createEvent("Event");
                    xe.initEvent("change", !0, !0),
                        me.dispatchEvent(xe)
                }
                Ne();
                return
            }
            ke(Ee)
        }, [ke, Se, Ne])
        , ge = q$2(function (Ee) {
            Re !== !1 && (Ee.preventDefault(),
                Ne())
        }, [Re, Ne])
        , Te = q$2(function (Ee) {
            Ee.stopPropagation()
        }, [])
        , Ae = q$2(function (Ee) {
            const me = Ee.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME$1)
                , He = re[parseInt(me, 10)].value;
            se(He, te),
                ie(Ee),
                Ne()
        }, [te, ie, se, re, Ne])
        , ye = q$2(function () {
            Re !== !1 && Ne()
        }, [Re, Ne]);
    return useMouseDownOutside({
        onMouseDownOutside: ye,
        ref: de
    }),
        _$2("div", {
            ...he,
            ref: de,
            class: createClassName([dropdownStyles.dropdown, typeof le > "u" ? null : le === "border" ? dropdownStyles.hasBorder : null, typeof ee > "u" ? null : dropdownStyles.hasIcon, ne === !0 ? dropdownStyles.disabled : null]),
            onFocus: Oe,
            onKeyDown: ne === !0 ? void 0 : Ie,
            onMouseDown: ge,
            tabIndex: ne === !0 ? -1 : 0
        }, typeof ee > "u" ? null : _$2("div", {
            class: dropdownStyles.icon
        }, ee), ce === null ? typeof ae > "u" ? _$2("div", {
            class: dropdownStyles.empty
        }) : _$2("div", {
            class: createClassName([dropdownStyles.value, dropdownStyles.placeholder])
        }, ae) : _$2("div", {
            class: dropdownStyles.value
        }, De), _$2("div", {
            class: dropdownStyles.chevronIcon
        }, _$2(IconControlChevronDown8, null)), le === "underline" ? _$2("div", {
            class: dropdownStyles.underline
        }) : null, _$2("div", {
            class: dropdownStyles.border
        }), P(_$2("div", {
            ref: fe,
            class: createClassName([menuStyles.menu, dropdownStyles.menu, ne === !0 || Re === !1 ? menuStyles.hidden : null]),
            onMouseDown: Te
        }, re.map(function (Ee, me) {
            return "separator" in Ee ? _$2("hr", {
                key: me,
                class: menuStyles.optionSeparator
            }) : "header" in Ee ? _$2("h1", {
                key: me,
                class: menuStyles.optionHeader
            }, Ee.header) : _$2("label", {
                key: me,
                class: createClassName([menuStyles.optionValue, Ee.disabled === !0 ? menuStyles.optionValueDisabled : null, Ee.disabled !== !0 && `${me}` === Se ? menuStyles.optionValueSelected : null])
            }, _$2("input", {
                checked: ce === Ee.value,
                class: menuStyles.input,
                disabled: Ee.disabled === !0,
                name: te,
                onChange: ce === Ee.value ? void 0 : Ae,
                onClick: ce === Ee.value ? Ne : void 0,
                onMouseMove: Me,
                tabIndex: -1,
                type: "radio",
                value: `${Ee.value}`,
                [ITEM_ID_DATA_ATTRIBUTE_NAME$1]: `${me}`
            }), Ee.value === ce ? _$2("div", {
                class: menuStyles.checkIcon
            }, _$2(IconMenuCheckmarkChecked16, null)) : null, typeof Ee.text > "u" ? Ee.value : Ee.text)
        })), document.body))
}
function getDropdownOptionValue(ne) {
    if ("text" in ne)
        return ne.text;
    if ("value" in ne)
        return ne.value;
    throw new Error("Invariant violation")
}
function findOptionIndexByValue(ne, ee) {
    if (ee === null)
        return -1;
    let te = 0;
    for (const re of ne) {
        if ("value" in re && re.value === ee)
            return te;
        te += 1
    }
    return -1
}
const iconButton = "_iconButton_1bkfg_1"
    , icon$1 = "_icon_1bkfg_1"
    , styles$8 = {
        iconButton,
        icon: icon$1
    };
function IconButton({ children: ne, disabled: ee = !1, onClick: te, propagateEscapeKeyDown: re = !0, ...ie }) {
    const se = q$2(function (ae) {
        ae.key === "Escape" && (re === !1 && ae.stopPropagation(),
            ae.currentTarget.blur())
    }, [re]);
    return _$2("button", {
        ...ie,
        class: styles$8.iconButton,
        disabled: ee === !0,
        onClick: ee === !0 ? void 0 : te,
        onKeyDown: ee === !0 ? void 0 : se,
        tabIndex: ee === !0 ? -1 : 0
    }, _$2("div", {
        class: styles$8.icon
    }, ne))
}
const IconCross32 = createIcon("m16 15.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071L16 16.7073l-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071L16 15.293Z", {
    height: 32,
    width: 32
})
    , text = "_text_mh6mm_1"
    , numeric = "_numeric_mh6mm_15"
    , left = "_left_mh6mm_19"
    , center = "_center_mh6mm_22"
    , right = "_right_mh6mm_25"
    , styles$7 = {
        text,
        numeric,
        left,
        center,
        right
    };
function Text({ align: ne = "left", children: ee, numeric: te = !1, ...re }) {
    return _$2("div", {
        ...re,
        class: createClassName([styles$7.text, styles$7[ne], te === !0 ? styles$7.numeric : null])
    }, ee)
}
const extraSmall$2 = "_extraSmall_dpsd3_1"
    , child$1 = "_child_dpsd3_1"
    , small$2 = "_small_dpsd3_4"
    , medium$2 = "_medium_dpsd3_7"
    , large$2 = "_large_dpsd3_10"
    , extraLarge$2 = "_extraLarge_dpsd3_13"
    , styles$6 = {
        extraSmall: extraSmall$2,
        child: child$1,
        small: small$2,
        medium: medium$2,
        large: large$2,
        extraLarge: extraLarge$2
    };
function Stack({ children: ne, space: ee, ...te }) {
    return _$2("div", {
        ...te,
        class: styles$6[ee]
    }, H$1(ne).map(function (re, ie) {
        return _$2("div", {
            key: ie,
            class: styles$6.child
        }, re)
    }))
}
const tabs = "_tabs_61qsz_1"
    , label = "_label_61qsz_9"
    , input$3 = "_input_61qsz_17"
    , value = "_value_61qsz_23"
    , children$1 = "_children_61qsz_28"
    , styles$5 = {
        tabs,
        label,
        input: input$3,
        value,
        children: children$1
    }
    , ITEM_ID_DATA_ATTRIBUTE_NAME = "data-tabs-item-id";
function Tabs({ name: ne, onChange: ee = function () { }
    , onValueChange: te = function () { }
    , options: re, propagateEscapeKeyDown: ie = !0, value: se, ...ae }) {
    const ce = q$2(function (de) {
        const fe = de.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME)
            , Re = re[parseInt(fe, 10)].value;
        te(Re, ne),
            ee(de)
    }, [ne, ee, te, re])
        , le = q$2(function (de) {
            de.key === "Escape" && (ie === !1 && de.stopPropagation(),
                de.currentTarget.blur())
        }, [ie])
        , he = re.find(function (de) {
            return de.value === se
        });
    return _$2(b$2, null, _$2("div", {
        class: styles$5.tabs
    }, re.map(function (de, fe) {
        return _$2("label", {
            key: fe,
            class: styles$5.label
        }, _$2("input", {
            ...ae,
            checked: se === de.value,
            class: styles$5.input,
            name: ne,
            onChange: ce,
            onKeyDown: le,
            tabIndex: 0,
            type: "radio",
            value: de.value,
            [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${fe}`
        }), _$2("div", {
            class: styles$5.value
        }, de.value))
    })), typeof he > "u" ? null : _$2("div", {
        class: styles$5.children
    }, he.children))
}
function isKeyCodeCharacterGenerating(ne) {
    return ne === 32 || ne >= 48 && ne <= 57 || ne >= 65 && ne <= 90 || ne >= 96 && ne <= 105 || ne >= 186 && ne <= 192 || ne >= 219 && ne <= 222
}
const EMPTY_STRING$2 = "";
function RawTextbox({ disabled: ne = !1, name: ee, onInput: te = function () { }
    , onValueInput: re = function () { }
    , password: ie = !1, placeholder: se, propagateEscapeKeyDown: ae = !0, revertOnEscapeKeyDown: ce = !1, spellCheck: le = !1, validateOnBlur: he, value: de, ...fe }) {
    const Re = A$1(null)
        , Pe = A$1(!1)
        , [we, Se] = h$1(EMPTY_STRING$2)
        , be = q$2(function (Oe) {
            const Ie = getCurrentFromRef(Re);
            Ie.value = Oe;
            const ge = document.createEvent("Event");
            ge.initEvent("input", !0, !0),
                Ie.dispatchEvent(ge)
        }, [])
        , De = q$2(function () {
            if (Pe.current === !0) {
                Pe.current = !1;
                return
            }
            if (typeof he < "u") {
                const Oe = he(de);
                if (typeof Oe == "string") {
                    be(Oe),
                        Se(EMPTY_STRING$2);
                    return
                }
                if (Oe === !1) {
                    de !== we && be(we),
                        Se(EMPTY_STRING$2);
                    return
                }
            }
            Se(EMPTY_STRING$2)
        }, [we, be, he, de])
        , ke = q$2(function (Oe) {
            Se(de),
                Oe.currentTarget.select()
        }, [de])
        , Me = q$2(function (Oe) {
            re(Oe.currentTarget.value, ee),
                te(Oe)
        }, [ee, te, re])
        , Ne = q$2(function (Oe) {
            const Ie = Oe.key;
            if (Ie === "Escape") {
                ae === !1 && Oe.stopPropagation(),
                    ce === !0 && (Pe.current = !0,
                        be(we),
                        Se(EMPTY_STRING$2)),
                    Oe.currentTarget.blur();
                return
            }
            if (Ie === "Enter") {
                Oe.currentTarget.blur();
                return
            }
            de === MIXED_STRING && isKeyCodeCharacterGenerating(Oe.keyCode) === !1 && (Oe.preventDefault(),
                Oe.currentTarget.select())
        }, [we, ae, ce, be, de])
        , $e = q$2(function (Oe) {
            de === MIXED_STRING && Oe.preventDefault()
        }, [de]);
    return _$2("input", {
        ...fe,
        ref: Re,
        disabled: ne === !0,
        name: ee,
        onBlur: De,
        onFocus: ke,
        onInput: Me,
        onKeyDown: Ne,
        onMouseUp: $e,
        placeholder: se,
        spellcheck: le,
        tabIndex: ne === !0 ? -1 : 0,
        type: ie === !0 ? "password" : "text",
        value: de === MIXED_STRING ? "Mixed" : de
    })
}
const textbox = "_textbox_sir3b_1"
    , input$2 = "_input_sir3b_9"
    , disabled$1 = "_disabled_sir3b_17"
    , hasIcon = "_hasIcon_sir3b_21"
    , icon = "_icon_sir3b_29"
    , border = "_border_sir3b_49"
    , hasBorder = "_hasBorder_sir3b_59"
    , underline = "_underline_sir3b_70"
    , textboxStyles = {
        textbox,
        input: input$2,
        disabled: disabled$1,
        hasIcon,
        icon,
        border,
        hasBorder,
        underline
    };
function Textbox({ icon: ne, variant: ee, ...te }) {
    if (typeof ne == "string" && ne.length !== 1)
        throw new Error(`String \`icon\` must be a single character: ${ne}`);
    return _$2("div", {
        class: createClassName([textboxStyles.textbox, typeof ee > "u" ? null : ee === "border" ? textboxStyles.hasBorder : null, typeof ne > "u" ? null : textboxStyles.hasIcon, te.disabled === !0 ? textboxStyles.disabled : null])
    }, _$2(RawTextbox, {
        ...te,
        class: textboxStyles.input
    }), typeof ne > "u" ? null : _$2("div", {
        class: textboxStyles.icon
    }, ne), _$2("div", {
        class: textboxStyles.border
    }), ee === "underline" ? _$2("div", {
        class: textboxStyles.underline
    }) : null)
}
function computeNextValue(ne, ee) {
    const te = ne.value
        , re = ne.selectionStart
        , ie = ne.selectionEnd;
    return `${te.substring(0, re === null ? 0 : re)}${ee}${te.substring(ie === null ? 0 : ie)}`
}
const EMPTY_STRING$1 = ""
    , fractionalPartRegex = /\.([^.]+)/
    , nonDigitRegex = /[^\d.]/;
function formatEvaluatedValue(ne, ee, te) {
    if (ne === null)
        return EMPTY_STRING$1;
    const re = countSignificantFigures(nonDigitRegex.test(ee) === !0 ? `${ne}` : ee);
    return appendSuffix(formatSignificantFigures(ne, re), te)
}
function countSignificantFigures(ne) {
    const ee = fractionalPartRegex.exec(ne);
    return ee === null ? 0 : ee[1].length
}
function formatSignificantFigures(ne, ee) {
    if (ee === 0)
        return `${ne}`;
    const te = fractionalPartRegex.exec(`${ne}`);
    if (te === null)
        return `${ne}.${"0".repeat(ee)}`;
    const re = te[1]
        , ie = ee - re.length;
    return `${ne}${"0".repeat(ie)}`
}
function appendSuffix(ne, ee) {
    return typeof ee > "u" ? ne : ne === EMPTY_STRING$1 ? EMPTY_STRING$1 : `${ne}${ee}`
}
const FRACTION_DIGITS = 3
    , EMPTY_STRING = "";
function RawTextboxNumeric({ disabled: ne = !1, incrementBig: ee = 10, incrementSmall: te = 1, integer: re = !1, maximum: ie, minimum: se, name: ae, onInput: ce = function () { }
    , onNumericValueInput: le = function () { }
    , onValueInput: he = function () { }
    , placeholder: de, propagateEscapeKeyDown: fe = !0, revertOnEscapeKeyDown: Re = !1, suffix: Pe, validateOnBlur: we, value: Se, ...be }) {
    if (typeof se < "u" && typeof ie < "u" && se >= ie)
        throw new Error("`minimum` must be less than `maximum`");
    const De = A$1(null)
        , ke = A$1(!1)
        , [Me, Ne] = h$1(EMPTY_STRING)
        , $e = q$2(function (Ee) {
            const me = getCurrentFromRef(De);
            me.value = Ee;
            const xe = document.createEvent("Event");
            xe.initEvent("input", !0, !0),
                me.dispatchEvent(xe)
        }, [])
        , Oe = q$2(function () {
            if (ke.current === !0) {
                ke.current = !1;
                return
            }
            if (typeof we < "u") {
                const Ee = evaluateValue(Se, Pe)
                    , me = we(Ee);
                if (typeof me == "number") {
                    $e(formatEvaluatedValue(me, Se, Pe)),
                        Ne(EMPTY_STRING);
                    return
                }
                if (me === null) {
                    $e(EMPTY_STRING),
                        Ne(EMPTY_STRING);
                    return
                }
                if (me === !1) {
                    Se !== Me && $e(Me),
                        Ne(EMPTY_STRING);
                    return
                }
            }
            if (typeof Pe < "u" && Se === Pe) {
                $e(EMPTY_STRING),
                    Ne(EMPTY_STRING);
                return
            }
            if (Se !== EMPTY_STRING && Se !== MIXED_STRING) {
                const Ee = evaluateValue(Se, Pe)
                    , me = formatEvaluatedValue(Ee, Se, Pe);
                Se !== me && $e(me)
            }
            Ne(EMPTY_STRING)
        }, [Me, $e, Pe, we, Se])
        , Ie = q$2(function (Ee) {
            Ne(Se),
                Ee.currentTarget.select()
        }, [Se])
        , ge = q$2(function (Ee) {
            ce(Ee);
            const me = Ee.currentTarget.value;
            he(me, ae);
            const xe = evaluateValue(me, Pe);
            le(xe, ae)
        }, [ae, ce, le, he, Pe])
        , Te = q$2(function (Ee) {
            const me = Ee.key;
            if (me === "Escape") {
                fe === !1 && Ee.stopPropagation(),
                    Re === !0 && (ke.current = !0,
                        $e(Me),
                        Ne(EMPTY_STRING)),
                    Ee.currentTarget.blur();
                return
            }
            if (me === "Enter") {
                Ee.currentTarget.blur();
                return
            }
            const xe = Ee.currentTarget;
            if (me === "ArrowDown" || me === "ArrowUp") {
                const He = Ee.shiftKey === !0 ? ee : te;
                if (Se === EMPTY_STRING || Se === MIXED_STRING) {
                    Ee.preventDefault();
                    const xt = function () {
                        return typeof se < "u" && se > 0 ? se : typeof ie < "u" && ie < 0 ? ie : 0
                    }()
                        , nr = restrictValue(evaluateValueWithDelta(xt, me === "ArrowDown" ? -1 * He : He), se, ie)
                        , Bn = formatEvaluatedValue(nr, Se, Pe);
                    xe.value = Bn,
                        xe.select(),
                        ge(Ee);
                    return
                }
                const Xe = evaluateValue(Se, Pe);
                if (Xe === null)
                    throw new Error("Invariant violation");
                Ee.preventDefault();
                const tr = restrictValue(evaluateValueWithDelta(Xe, me === "ArrowDown" ? -1 * He : He), se, ie)
                    , Vt = formatEvaluatedValue(tr, Se, Pe);
                if (Vt === Se)
                    return;
                xe.value = Vt,
                    xe.select(),
                    ge(Ee);
                return
            }
            if (!(Ee.ctrlKey === !0 || Ee.metaKey === !0) && isKeyCodeCharacterGenerating(Ee.keyCode) === !0) {
                const He = trimSuffix(Se === MIXED_STRING ? Ee.key : computeNextValue(xe, Ee.key), Pe);
                if (isValidNumericInput(He, {
                    integersOnly: re
                }) === !1) {
                    Ee.preventDefault();
                    return
                }
                if (typeof se > "u" && typeof ie > "u")
                    return;
                const Xe = evaluateNumericExpression(He);
                if (Xe === null)
                    return;
                (typeof se < "u" && Xe < se || typeof ie < "u" && Xe > ie) && Ee.preventDefault()
            }
        }, [ge, ee, te, re, ie, se, Me, fe, Re, $e, Pe, Se])
        , Ae = q$2(function (Ee) {
            Se === MIXED_STRING && Ee.preventDefault()
        }, [Se])
        , ye = q$2(function (Ee) {
            if (Ee.clipboardData === null)
                throw new Error("`event.clipboardData` is `null`");
            const me = trimSuffix(computeNextValue(Ee.currentTarget, Ee.clipboardData.getData("Text")), Pe);
            isValidNumericInput(me, {
                integersOnly: re
            }) === !1 && Ee.preventDefault()
        }, [re, Pe]);
    return _$2("input", {
        ...be,
        ref: De,
        disabled: ne === !0,
        name: ae,
        onBlur: Oe,
        onFocus: Ie,
        onInput: ge,
        onKeyDown: Te,
        onMouseUp: Ae,
        onPaste: ye,
        placeholder: de,
        spellcheck: !1,
        tabIndex: ne === !0 ? -1 : 0,
        type: "text",
        value: Se === MIXED_STRING ? "Mixed" : Se
    })
}
function restrictValue(ne, ee, te) {
    return typeof ee < "u" ? typeof te < "u" ? Math.min(Math.max(ne, ee), te) : Math.max(ne, ee) : typeof te < "u" ? Math.min(ne, te) : ne
}
function evaluateValue(ne, ee) {
    return ne === MIXED_STRING ? MIXED_NUMBER : ne === EMPTY_STRING ? null : evaluateNumericExpression(trimSuffix(ne, ee))
}
function evaluateValueWithDelta(ne, ee) {
    return parseFloat((ne + ee).toFixed(FRACTION_DIGITS))
}
function trimSuffix(ne, ee) {
    return typeof ee > "u" ? ne : ne.replace(new RegExp(`${ee}$`), EMPTY_STRING)
}
const input$1 = "_input_1byj7_1"
    , textboxNumericStyles = {
        input: input$1
    };
function TextboxNumeric({ icon: ne, variant: ee, ...te }) {
    if (typeof ne == "string" && ne.length !== 1)
        throw new Error(`String \`icon\` must be a single character: ${ne}`);
    return _$2("div", {
        class: createClassName([textboxStyles.textbox, typeof ee > "u" ? null : ee === "border" ? textboxStyles.hasBorder : null, typeof ne > "u" ? null : textboxStyles.hasIcon, te.disabled === !0 ? textboxStyles.disabled : null])
    }, _$2(RawTextboxNumeric, {
        ...te,
        class: createClassName([textboxStyles.input, textboxNumericStyles.input])
    }), typeof ne > "u" ? null : _$2("div", {
        class: textboxStyles.icon
    }, ne), _$2("div", {
        class: textboxStyles.border
    }), ee === "underline" ? _$2("div", {
        class: textboxStyles.underline
    }) : null)
}
const toggle = "_toggle_1rqu7_1"
    , input = "_input_1rqu7_6"
    , disabled = "_disabled_1rqu7_18"
    , box = "_box_1rqu7_22"
    , children = "_children_1rqu7_69"
    , styles$4 = {
        toggle,
        input,
        disabled,
        box,
        switch: "_switch_1rqu7_46",
        children
    };
function Toggle({ children: ne, disabled: ee = !1, name: te, onChange: re = function () { }
    , onValueChange: ie = function () { }
    , propagateEscapeKeyDown: se = !0, value: ae = !1, ...ce }) {
    const le = q$2(function (de) {
        const fe = de.currentTarget.checked;
        ie(fe, te),
            re(de)
    }, [te, re, ie])
        , he = q$2(function (de) {
            de.key === "Escape" && (se === !1 && de.stopPropagation(),
                de.currentTarget.blur())
        }, [se]);
    return _$2("label", {
        class: createClassName([styles$4.toggle, ee === !0 ? styles$4.disabled : null])
    }, _$2("input", {
        ...ce,
        checked: ae === !0,
        class: styles$4.input,
        disabled: ee === !0,
        name: te,
        onChange: le,
        onKeyDown: he,
        tabIndex: ee === !0 ? -1 : 0,
        type: "checkbox"
    }), _$2("div", {
        class: styles$4.box
    }), _$2("div", {
        class: styles$4.switch
    }), _$2("div", {
        class: styles$4.children
    }, ne))
}
const IconChevronDown16 = createIcon("m7.646 9.708-3-3L5.354 6 8 8.647 10.646 6l.708.708-3 3-.354.353-.354-.353Z", {
    height: 16,
    width: 16
})
    , IconCircleHelp16 = createIcon("M13 8c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5Zm1 0c0 3.313-2.686 6-6 6s-6-2.687-6-6 2.686-6 6-6 6 2.687 6 6Zm-6.512.383c-.088.216-.133.506-.133.87h1l.016-.237c.029-.256.142-.478.34-.668l.316-.301c.248-.24.421-.457.52-.652.099-.198.148-.408.148-.63 0-.486-.152-.863-.457-1.128-.304-.268-.733-.403-1.285-.403-.547 0-.98.141-1.297.422-.315.281-.475.67-.48 1.168h1.133c.003-.147.035-.272.093-.374.024-.042.053-.08.086-.114.062-.063.134-.11.217-.14.075-.027.157-.04.248-.04.406 0 .61.22.61.66 0 .075-.01.148-.031.22-.02.067-.048.133-.087.198-.078.13-.235.301-.472.512-.235.209-.396.42-.485.637Zm-.07 1.64c-.117.112-.176.256-.176.43 0 .172.058.314.172.426.117.112.27.168.461.168.12 0 .227-.023.317-.068.052-.026.098-.06.14-.1.117-.112.176-.254.176-.426 0-.174-.06-.318-.18-.43-.117-.114-.268-.171-.453-.171-.094 0-.18.015-.258.044-.074.029-.14.071-.199.127Z", {
        height: 16,
        width: 16
    })
    , bold = "_bold_72210_1"
    , styles$3 = {
        bold
    };
function Bold({ children: ne, ...ee }) {
    return _$2("strong", {
        ...ee,
        class: styles$3.bold
    }, ne)
}
const link = "_link_xe0wi_1"
    , fullWidth = "_fullWidth_xe0wi_15"
    , styles$2 = {
        link,
        fullWidth
    };
function Link({ children: ne, fullWidth: ee = !1, href: te, target: re, ...ie }) {
    return _$2("a", {
        ...ie,
        class: createClassName([styles$2.link, ee === !0 ? styles$2.fullWidth : null]),
        href: te,
        target: typeof re > "u" ? void 0 : re
    }, ne)
}
const extraSmall$1 = "_extraSmall_1oe77_1"
    , small$1 = "_small_1oe77_4"
    , medium$1 = "_medium_1oe77_7"
    , large$1 = "_large_1oe77_10"
    , extraLarge$1 = "_extraLarge_1oe77_13"
    , styles$1 = {
        extraSmall: extraSmall$1,
        small: small$1,
        medium: medium$1,
        large: large$1,
        extraLarge: extraLarge$1
    };
function Container({ space: ne, ...ee }) {
    return _$2("div", {
        ...ee,
        class: styles$1[ne]
    })
}
const extraSmall = "_extraSmall_zc4n0_1"
    , small = "_small_zc4n0_4"
    , medium = "_medium_zc4n0_7"
    , large = "_large_zc4n0_10"
    , extraLarge = "_extraLarge_zc4n0_13"
    , styles = {
        extraSmall,
        small,
        medium,
        large,
        extraLarge
    };
function VerticalSpace({ space: ne, ...ee }) {
    return _$2("div", {
        ...ee,
        class: styles[ne]
    })
}
var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
    , IconContext = xn.createContext && xn.createContext(DefaultContext)
    , _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(ne, ee) {
    if (ne == null)
        return {};
    var te = _objectWithoutPropertiesLoose(ne, ee), re, ie;
    if (Object.getOwnPropertySymbols) {
        var se = Object.getOwnPropertySymbols(ne);
        for (ie = 0; ie < se.length; ie++)
            re = se[ie],
                !(ee.indexOf(re) >= 0) && Object.prototype.propertyIsEnumerable.call(ne, re) && (te[re] = ne[re])
    }
    return te
}
function _objectWithoutPropertiesLoose(ne, ee) {
    if (ne == null)
        return {};
    var te = {};
    for (var re in ne)
        if (Object.prototype.hasOwnProperty.call(ne, re)) {
            if (ee.indexOf(re) >= 0)
                continue;
            te[re] = ne[re]
        }
    return te
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (ne) {
        for (var ee = 1; ee < arguments.length; ee++) {
            var te = arguments[ee];
            for (var re in te)
                Object.prototype.hasOwnProperty.call(te, re) && (ne[re] = te[re])
        }
        return ne
    }
        ,
        _extends.apply(this, arguments)
}
function ownKeys(ne, ee) {
    var te = Object.keys(ne);
    if (Object.getOwnPropertySymbols) {
        var re = Object.getOwnPropertySymbols(ne);
        ee && (re = re.filter(function (ie) {
            return Object.getOwnPropertyDescriptor(ne, ie).enumerable
        })),
            te.push.apply(te, re)
    }
    return te
}
function _objectSpread(ne) {
    for (var ee = 1; ee < arguments.length; ee++) {
        var te = arguments[ee] != null ? arguments[ee] : {};
        ee % 2 ? ownKeys(Object(te), !0).forEach(function (re) {
            _defineProperty(ne, re, te[re])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ne, Object.getOwnPropertyDescriptors(te)) : ownKeys(Object(te)).forEach(function (re) {
            Object.defineProperty(ne, re, Object.getOwnPropertyDescriptor(te, re))
        })
    }
    return ne
}
function _defineProperty(ne, ee, te) {
    return ee = _toPropertyKey(ee),
        ee in ne ? Object.defineProperty(ne, ee, {
            value: te,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : ne[ee] = te,
        ne
}
function _toPropertyKey(ne) {
    var ee = _toPrimitive(ne, "string");
    return typeof ee == "symbol" ? ee : ee + ""
}
function _toPrimitive(ne, ee) {
    if (typeof ne != "object" || !ne)
        return ne;
    var te = ne[Symbol.toPrimitive];
    if (te !== void 0) {
        var re = te.call(ne, ee || "default");
        if (typeof re != "object")
            return re;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (ee === "string" ? String : Number)(ne)
}
function Tree2Element(ne) {
    return ne && ne.map((ee, te) => xn.createElement(ee.tag, _objectSpread({
        key: te
    }, ee.attr), Tree2Element(ee.child)))
}
function GenIcon(ne) {
    return ee => xn.createElement(IconBase, _extends({
        attr: _objectSpread({}, ne.attr)
    }, ee), Tree2Element(ne.child))
}
function IconBase(ne) {
    var ee = te => {
        var { attr: re, size: ie, title: se } = ne, ae = _objectWithoutProperties(ne, _excluded), ce = ie || te.size || "1em", le;
        return te.className && (le = te.className),
            ne.className && (le = (le ? le + " " : "") + ne.className),
            xn.createElement("svg", _extends({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, te.attr, re, ae, {
                className: le,
                style: _objectSpread(_objectSpread({
                    color: ne.color || te.color
                }, te.style), ne.style),
                height: ce,
                width: ce,
                xmlns: "http://www.w3.org/2000/svg"
            }), se && xn.createElement("title", null, se), ne.children)
    }
        ;
    return IconContext !== void 0 ? xn.createElement(IconContext.Consumer, null, te => ee(te)) : ee(DefaultContext)
}
function MdDeleteOutline(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
            },
            child: []
        }]
    })(ne)
}
function MdDelete(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            },
            child: []
        }]
    })(ne)
}
function MdLogin(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
            },
            child: []
        }]
    })(ne)
}
function MdLogout(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
            },
            child: []
        }]
    })(ne)
}
function MdEmail(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
            },
            child: []
        }]
    })(ne)
}
function MdKey(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
            },
            child: []
        }]
    })(ne)
}
function MdMailOutline(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
            },
            child: []
        }]
    })(ne)
}
function MdContentCopy(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            },
            child: []
        }]
    })(ne)
}
function MdCheck(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
            },
            child: []
        }]
    })(ne)
}
function MdClose(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            },
            child: []
        }]
    })(ne)
}
function MdMoreHoriz(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            },
            child: []
        }]
    })(ne)
}
function MdOutlineArrowRightAlt(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
            },
            child: []
        }]
    })(ne)
}
function MdOutlineHelpOutline(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
            },
            child: []
        }]
    })(ne)
}
const getDefaultsFromPostinstall = () => { }
    ;
var define_process_env_default = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (ne) {
    const ee = [];
    let te = 0;
    for (let re = 0; re < ne.length; re++) {
        let ie = ne.charCodeAt(re);
        ie < 128 ? ee[te++] = ie : ie < 2048 ? (ee[te++] = ie >> 6 | 192,
            ee[te++] = ie & 63 | 128) : (ie & 64512) === 55296 && re + 1 < ne.length && (ne.charCodeAt(re + 1) & 64512) === 56320 ? (ie = 65536 + ((ie & 1023) << 10) + (ne.charCodeAt(++re) & 1023),
                ee[te++] = ie >> 18 | 240,
                ee[te++] = ie >> 12 & 63 | 128,
                ee[te++] = ie >> 6 & 63 | 128,
                ee[te++] = ie & 63 | 128) : (ee[te++] = ie >> 12 | 224,
                    ee[te++] = ie >> 6 & 63 | 128,
                    ee[te++] = ie & 63 | 128)
    }
    return ee
}
    , byteArrayToString = function (ne) {
        const ee = [];
        let te = 0
            , re = 0;
        for (; te < ne.length;) {
            const ie = ne[te++];
            if (ie < 128)
                ee[re++] = String.fromCharCode(ie);
            else if (ie > 191 && ie < 224) {
                const se = ne[te++];
                ee[re++] = String.fromCharCode((ie & 31) << 6 | se & 63)
            } else if (ie > 239 && ie < 365) {
                const se = ne[te++]
                    , ae = ne[te++]
                    , ce = ne[te++]
                    , le = ((ie & 7) << 18 | (se & 63) << 12 | (ae & 63) << 6 | ce & 63) - 65536;
                ee[re++] = String.fromCharCode(55296 + (le >> 10)),
                    ee[re++] = String.fromCharCode(56320 + (le & 1023))
            } else {
                const se = ne[te++]
                    , ae = ne[te++];
                ee[re++] = String.fromCharCode((ie & 15) << 12 | (se & 63) << 6 | ae & 63)
            }
        }
        return ee.join("")
    }
    , base64 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(ne, ee) {
            if (!Array.isArray(ne))
                throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const te = ee ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
                , re = [];
            for (let ie = 0; ie < ne.length; ie += 3) {
                const se = ne[ie]
                    , ae = ie + 1 < ne.length
                    , ce = ae ? ne[ie + 1] : 0
                    , le = ie + 2 < ne.length
                    , he = le ? ne[ie + 2] : 0
                    , de = se >> 2
                    , fe = (se & 3) << 4 | ce >> 4;
                let Re = (ce & 15) << 2 | he >> 6
                    , Pe = he & 63;
                le || (Pe = 64,
                    ae || (Re = 64)),
                    re.push(te[de], te[fe], te[Re], te[Pe])
            }
            return re.join("")
        },
        encodeString(ne, ee) {
            return this.HAS_NATIVE_SUPPORT && !ee ? btoa(ne) : this.encodeByteArray(stringToByteArray$1(ne), ee)
        },
        decodeString(ne, ee) {
            return this.HAS_NATIVE_SUPPORT && !ee ? atob(ne) : byteArrayToString(this.decodeStringToByteArray(ne, ee))
        },
        decodeStringToByteArray(ne, ee) {
            this.init_();
            const te = ee ? this.charToByteMapWebSafe_ : this.charToByteMap_
                , re = [];
            for (let ie = 0; ie < ne.length;) {
                const se = te[ne.charAt(ie++)]
                    , ce = ie < ne.length ? te[ne.charAt(ie)] : 0;
                ++ie;
                const he = ie < ne.length ? te[ne.charAt(ie)] : 64;
                ++ie;
                const fe = ie < ne.length ? te[ne.charAt(ie)] : 64;
                if (++ie,
                    se == null || ce == null || he == null || fe == null)
                    throw new DecodeBase64StringError;
                const Re = se << 2 | ce >> 4;
                if (re.push(Re),
                    he !== 64) {
                    const Pe = ce << 4 & 240 | he >> 2;
                    if (re.push(Pe),
                        fe !== 64) {
                        const we = he << 6 & 192 | fe;
                        re.push(we)
                    }
                }
            }
            return re
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                for (let ne = 0; ne < this.ENCODED_VALS.length; ne++)
                    this.byteToCharMap_[ne] = this.ENCODED_VALS.charAt(ne),
                        this.charToByteMap_[this.byteToCharMap_[ne]] = ne,
                        this.byteToCharMapWebSafe_[ne] = this.ENCODED_VALS_WEBSAFE.charAt(ne),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[ne]] = ne,
                        ne >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(ne)] = ne,
                            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(ne)] = ne)
            }
        }
    };
class DecodeBase64StringError extends Error {
    constructor() {
        super(...arguments),
            this.name = "DecodeBase64StringError"
    }
}
const base64Encode = function (ne) {
    const ee = stringToByteArray$1(ne);
    return base64.encodeByteArray(ee, !0)
}
    , base64urlEncodeWithoutPadding = function (ne) {
        return base64Encode(ne).replace(/\./g, "")
    }
    , base64Decode = function (ne) {
        try {
            return base64.decodeString(ne, !0)
        } catch (ee) {
            console.error("base64Decode failed: ", ee)
        }
        return null
    };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getGlobal() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__
    , getDefaultsFromEnvVariable = () => {
        if (typeof process > "u" || typeof define_process_env_default > "u")
            return;
        const ne = define_process_env_default.__FIREBASE_DEFAULTS__;
        if (ne)
            return JSON.parse(ne)
    }
    , getDefaultsFromCookie = () => {
        if (typeof document > "u")
            return;
        let ne;
        try {
            ne = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const ee = ne && base64Decode(ne[1]);
        return ee && JSON.parse(ee)
    }
    , getDefaults = () => {
        try {
            return getDefaultsFromPostinstall() || getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie()
        } catch (ne) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${ne}`);
            return
        }
    }
    , getDefaultEmulatorHost = ne => getDefaults()?.emulatorHosts?.[ne]
    , getDefaultEmulatorHostnameAndPort = ne => {
        const ee = getDefaultEmulatorHost(ne);
        if (!ee)
            return;
        const te = ee.lastIndexOf(":");
        if (te <= 0 || te + 1 === ee.length)
            throw new Error(`Invalid host ${ee} with no separate hostname and port!`);
        const re = parseInt(ee.substring(te + 1), 10);
        return ee[0] === "[" ? [ee.substring(1, te - 1), re] : [ee.substring(0, te), re]
    }
    , getDefaultAppConfig = () => getDefaults()?.config
    , getExperimentalSetting = ne => getDefaults()?.[`_${ne}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { }
            ,
            this.resolve = () => { }
            ,
            this.promise = new Promise((ee, te) => {
                this.resolve = ee,
                    this.reject = te
            }
            )
    }
    wrapCallback(ee) {
        return (te, re) => {
            te ? this.reject(te) : this.resolve(re),
                typeof ee == "function" && (this.promise.catch(() => { }
                ),
                    ee.length === 1 ? ee(te) : ee(te, re))
        }
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(ne, ee) {
    if (ne.uid)
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    const te = {
        alg: "none",
        type: "JWT"
    }
        , re = ee || "demo-project"
        , ie = ne.iat || 0
        , se = ne.sub || ne.user_id;
    if (!se)
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const ae = {
        iss: `https://securetoken.google.com/${re}`,
        aud: re,
        iat: ie,
        exp: ie + 3600,
        auth_time: ie,
        sub: se,
        user_id: se,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        },
        ...ne
    }
        , ce = "";
    return [base64urlEncodeWithoutPadding(JSON.stringify(te)), base64urlEncodeWithoutPadding(JSON.stringify(ae)), ce].join(".")
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUA() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function isMobileCordova() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())
}
function isNode() {
    const ne = getDefaults()?.forceEnvironment;
    if (ne === "node")
        return !0;
    if (ne === "browser")
        return !1;
    try {
        return Object.prototype.toString.call(global.process) === "[object process]"
    } catch {
        return !1
    }
}
function isCloudflareWorker() {
    return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"
}
function isBrowserExtension() {
    const ne = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof ne == "object" && ne.id !== void 0
}
function isReactNative() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function isIE() {
    const ne = getUA();
    return ne.indexOf("MSIE ") >= 0 || ne.indexOf("Trident/") >= 0
}
function isSafari() {
    return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
}
function isIndexedDBAvailable() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function validateIndexedDBOpenable() {
    return new Promise((ne, ee) => {
        try {
            let te = !0;
            const re = "validate-browser-context-for-indexeddb-analytics-module"
                , ie = self.indexedDB.open(re);
            ie.onsuccess = () => {
                ie.result.close(),
                    te || self.indexedDB.deleteDatabase(re),
                    ne(!0)
            }
                ,
                ie.onupgradeneeded = () => {
                    te = !1
                }
                ,
                ie.onerror = () => {
                    ee(ie.error?.message || "")
                }
        } catch (te) {
            ee(te)
        }
    }
    )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_NAME = "FirebaseError";
class FirebaseError extends Error {
    constructor(ee, te, re) {
        super(te),
            this.code = ee,
            this.customData = re,
            this.name = ERROR_NAME,
            Object.setPrototypeOf(this, FirebaseError.prototype),
            Error.captureStackTrace && Error.captureStackTrace(this, ErrorFactory.prototype.create)
    }
}
class ErrorFactory {
    constructor(ee, te, re) {
        this.service = ee,
            this.serviceName = te,
            this.errors = re
    }
    create(ee, ...te) {
        const re = te[0] || {}
            , ie = `${this.service}/${ee}`
            , se = this.errors[ee]
            , ae = se ? replaceTemplate(se, re) : "Error"
            , ce = `${this.serviceName}: ${ae} (${ie}).`;
        return new FirebaseError(ie, ce, re)
    }
}
function replaceTemplate(ne, ee) {
    return ne.replace(PATTERN, (te, re) => {
        const ie = ee[re];
        return ie != null ? String(ie) : `<${re}?>`
    }
    )
}
const PATTERN = /\{\$([^}]+)}/g;
function isEmpty$1(ne) {
    for (const ee in ne)
        if (Object.prototype.hasOwnProperty.call(ne, ee))
            return !1;
    return !0
}
function deepEqual(ne, ee) {
    if (ne === ee)
        return !0;
    const te = Object.keys(ne)
        , re = Object.keys(ee);
    for (const ie of te) {
        if (!re.includes(ie))
            return !1;
        const se = ne[ie]
            , ae = ee[ie];
        if (isObject(se) && isObject(ae)) {
            if (!deepEqual(se, ae))
                return !1
        } else if (se !== ae)
            return !1
    }
    for (const ie of re)
        if (!te.includes(ie))
            return !1;
    return !0
}
function isObject(ne) {
    return ne !== null && typeof ne == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function querystring(ne) {
    const ee = [];
    for (const [te, re] of Object.entries(ne))
        Array.isArray(re) ? re.forEach(ie => {
            ee.push(encodeURIComponent(te) + "=" + encodeURIComponent(ie))
        }
        ) : ee.push(encodeURIComponent(te) + "=" + encodeURIComponent(re));
    return ee.length ? "&" + ee.join("&") : ""
}
function querystringDecode(ne) {
    const ee = {};
    return ne.replace(/^\?/, "").split("&").forEach(re => {
        if (re) {
            const [ie, se] = re.split("=");
            ee[decodeURIComponent(ie)] = decodeURIComponent(se)
        }
    }
    ),
        ee
}
function extractQuerystring(ne) {
    const ee = ne.indexOf("?");
    if (!ee)
        return "";
    const te = ne.indexOf("#", ee);
    return ne.substring(ee, te > 0 ? te : void 0)
}
function createSubscribe(ne, ee) {
    const te = new ObserverProxy(ne, ee);
    return te.subscribe.bind(te)
}
class ObserverProxy {
    constructor(ee, te) {
        this.observers = [],
            this.unsubscribes = [],
            this.observerCount = 0,
            this.task = Promise.resolve(),
            this.finalized = !1,
            this.onNoObservers = te,
            this.task.then(() => {
                ee(this)
            }
            ).catch(re => {
                this.error(re)
            }
            )
    }
    next(ee) {
        this.forEachObserver(te => {
            te.next(ee)
        }
        )
    }
    error(ee) {
        this.forEachObserver(te => {
            te.error(ee)
        }
        ),
            this.close(ee)
    }
    complete() {
        this.forEachObserver(ee => {
            ee.complete()
        }
        ),
            this.close()
    }
    subscribe(ee, te, re) {
        let ie;
        if (ee === void 0 && te === void 0 && re === void 0)
            throw new Error("Missing Observer.");
        implementsAnyMethods(ee, ["next", "error", "complete"]) ? ie = ee : ie = {
            next: ee,
            error: te,
            complete: re
        },
            ie.next === void 0 && (ie.next = noop),
            ie.error === void 0 && (ie.error = noop),
            ie.complete === void 0 && (ie.complete = noop);
        const se = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? ie.error(this.finalError) : ie.complete()
            } catch { }
        }
        ),
            this.observers.push(ie),
            se
    }
    unsubscribeOne(ee) {
        this.observers === void 0 || this.observers[ee] === void 0 || (delete this.observers[ee],
            this.observerCount -= 1,
            this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(ee) {
        if (!this.finalized)
            for (let te = 0; te < this.observers.length; te++)
                this.sendOne(te, ee)
    }
    sendOne(ee, te) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[ee] !== void 0)
                try {
                    te(this.observers[ee])
                } catch (re) {
                    typeof console < "u" && console.error && console.error(re)
                }
        }
        )
    }
    close(ee) {
        this.finalized || (this.finalized = !0,
            ee !== void 0 && (this.finalError = ee),
            this.task.then(() => {
                this.observers = void 0,
                    this.onNoObservers = void 0
            }
            ))
    }
}
function implementsAnyMethods(ne, ee) {
    if (typeof ne != "object" || ne === null)
        return !1;
    for (const te of ee)
        if (te in ne && typeof ne[te] == "function")
            return !0;
    return !1
}
function noop() { }
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(ne) {
    return ne && ne._delegate ? ne._delegate : ne
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isCloudWorkstation(ne) {
    try {
        return (ne.startsWith("http://") || ne.startsWith("https://") ? new URL(ne).hostname : ne).endsWith(".cloudworkstations.dev")
    } catch {
        return !1
    }
}
async function pingServer(ne) {
    return (await fetch(ne, {
        credentials: "include"
    })).ok
}
class Component {
    constructor(ee, te, re) {
        this.name = ee,
            this.instanceFactory = te,
            this.type = re,
            this.multipleInstances = !1,
            this.serviceProps = {},
            this.instantiationMode = "LAZY",
            this.onInstanceCreated = null
    }
    setInstantiationMode(ee) {
        return this.instantiationMode = ee,
            this
    }
    setMultipleInstances(ee) {
        return this.multipleInstances = ee,
            this
    }
    setServiceProps(ee) {
        return this.serviceProps = ee,
            this
    }
    setInstanceCreatedCallback(ee) {
        return this.onInstanceCreated = ee,
            this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Provider {
    constructor(ee, te) {
        this.name = ee,
            this.container = te,
            this.component = null,
            this.instances = new Map,
            this.instancesDeferred = new Map,
            this.instancesOptions = new Map,
            this.onInitCallbacks = new Map
    }
    get(ee) {
        const te = this.normalizeInstanceIdentifier(ee);
        if (!this.instancesDeferred.has(te)) {
            const re = new Deferred;
            if (this.instancesDeferred.set(te, re),
                this.isInitialized(te) || this.shouldAutoInitialize())
                try {
                    const ie = this.getOrInitializeService({
                        instanceIdentifier: te
                    });
                    ie && re.resolve(ie)
                } catch { }
        }
        return this.instancesDeferred.get(te).promise
    }
    getImmediate(ee) {
        const te = this.normalizeInstanceIdentifier(ee?.identifier)
            , re = ee?.optional ?? !1;
        if (this.isInitialized(te) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: te
                })
            } catch (ie) {
                if (re)
                    return null;
                throw ie
            }
        else {
            if (re)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(ee) {
        if (ee.name !== this.name)
            throw Error(`Mismatching Component ${ee.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = ee,
            !!this.shouldAutoInitialize()) {
            if (isComponentEager(ee))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: DEFAULT_ENTRY_NAME$1
                    })
                } catch { }
            for (const [te, re] of this.instancesDeferred.entries()) {
                const ie = this.normalizeInstanceIdentifier(te);
                try {
                    const se = this.getOrInitializeService({
                        instanceIdentifier: ie
                    });
                    re.resolve(se)
                } catch { }
            }
        }
    }
    clearInstance(ee = DEFAULT_ENTRY_NAME$1) {
        this.instancesDeferred.delete(ee),
            this.instancesOptions.delete(ee),
            this.instances.delete(ee)
    }
    async delete() {
        const ee = Array.from(this.instances.values());
        await Promise.all([...ee.filter(te => "INTERNAL" in te).map(te => te.INTERNAL.delete()), ...ee.filter(te => "_delete" in te).map(te => te._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(ee = DEFAULT_ENTRY_NAME$1) {
        return this.instances.has(ee)
    }
    getOptions(ee = DEFAULT_ENTRY_NAME$1) {
        return this.instancesOptions.get(ee) || {}
    }
    initialize(ee = {}) {
        const { options: te = {} } = ee
            , re = this.normalizeInstanceIdentifier(ee.instanceIdentifier);
        if (this.isInitialized(re))
            throw Error(`${this.name}(${re}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const ie = this.getOrInitializeService({
            instanceIdentifier: re,
            options: te
        });
        for (const [se, ae] of this.instancesDeferred.entries()) {
            const ce = this.normalizeInstanceIdentifier(se);
            re === ce && ae.resolve(ie)
        }
        return ie
    }
    onInit(ee, te) {
        const re = this.normalizeInstanceIdentifier(te)
            , ie = this.onInitCallbacks.get(re) ?? new Set;
        ie.add(ee),
            this.onInitCallbacks.set(re, ie);
        const se = this.instances.get(re);
        return se && ee(se, re),
            () => {
                ie.delete(ee)
            }
    }
    invokeOnInitCallbacks(ee, te) {
        const re = this.onInitCallbacks.get(te);
        if (re)
            for (const ie of re)
                try {
                    ie(ee, te)
                } catch { }
    }
    getOrInitializeService({ instanceIdentifier: ee, options: te = {} }) {
        let re = this.instances.get(ee);
        if (!re && this.component && (re = this.component.instanceFactory(this.container, {
            instanceIdentifier: normalizeIdentifierForFactory(ee),
            options: te
        }),
            this.instances.set(ee, re),
            this.instancesOptions.set(ee, te),
            this.invokeOnInitCallbacks(re, ee),
            this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, ee, re)
            } catch { }
        return re || null
    }
    normalizeInstanceIdentifier(ee = DEFAULT_ENTRY_NAME$1) {
        return this.component ? this.component.multipleInstances ? ee : DEFAULT_ENTRY_NAME$1 : ee
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function normalizeIdentifierForFactory(ne) {
    return ne === DEFAULT_ENTRY_NAME$1 ? void 0 : ne
}
function isComponentEager(ne) {
    return ne.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ComponentContainer {
    constructor(ee) {
        this.name = ee,
            this.providers = new Map
    }
    addComponent(ee) {
        const te = this.getProvider(ee.name);
        if (te.isComponentSet())
            throw new Error(`Component ${ee.name} has already been registered with ${this.name}`);
        te.setComponent(ee)
    }
    addOrOverwriteComponent(ee) {
        this.getProvider(ee.name).isComponentSet() && this.providers.delete(ee.name),
            this.addComponent(ee)
    }
    getProvider(ee) {
        if (this.providers.has(ee))
            return this.providers.get(ee);
        const te = new Provider(ee, this);
        return this.providers.set(ee, te),
            te
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LogLevel;
(function (ne) {
    ne[ne.DEBUG = 0] = "DEBUG",
        ne[ne.VERBOSE = 1] = "VERBOSE",
        ne[ne.INFO = 2] = "INFO",
        ne[ne.WARN = 3] = "WARN",
        ne[ne.ERROR = 4] = "ERROR",
        ne[ne.SILENT = 5] = "SILENT"
}
)(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    debug: LogLevel.DEBUG,
    verbose: LogLevel.VERBOSE,
    info: LogLevel.INFO,
    warn: LogLevel.WARN,
    error: LogLevel.ERROR,
    silent: LogLevel.SILENT
}
    , defaultLogLevel = LogLevel.INFO
    , ConsoleMethod = {
        [LogLevel.DEBUG]: "log",
        [LogLevel.VERBOSE]: "log",
        [LogLevel.INFO]: "info",
        [LogLevel.WARN]: "warn",
        [LogLevel.ERROR]: "error"
    }
    , defaultLogHandler = (ne, ee, ...te) => {
        if (ee < ne.logLevel)
            return;
        const re = new Date().toISOString()
            , ie = ConsoleMethod[ee];
        if (ie)
            console[ie](`[${re}]  ${ne.name}:`, ...te);
        else
            throw new Error(`Attempted to log a message with an invalid logType (value: ${ee})`)
    }
    ;
class Logger {
    constructor(ee) {
        this.name = ee,
            this._logLevel = defaultLogLevel,
            this._logHandler = defaultLogHandler,
            this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(ee) {
        if (!(ee in LogLevel))
            throw new TypeError(`Invalid value "${ee}" assigned to \`logLevel\``);
        this._logLevel = ee
    }
    setLogLevel(ee) {
        this._logLevel = typeof ee == "string" ? levelStringToEnum[ee] : ee
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(ee) {
        if (typeof ee != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = ee
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(ee) {
        this._userLogHandler = ee
    }
    debug(...ee) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...ee),
            this._logHandler(this, LogLevel.DEBUG, ...ee)
    }
    log(...ee) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...ee),
            this._logHandler(this, LogLevel.VERBOSE, ...ee)
    }
    info(...ee) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...ee),
            this._logHandler(this, LogLevel.INFO, ...ee)
    }
    warn(...ee) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...ee),
            this._logHandler(this, LogLevel.WARN, ...ee)
    }
    error(...ee) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...ee),
            this._logHandler(this, LogLevel.ERROR, ...ee)
    }
}
const instanceOfAny = (ne, ee) => ee.some(te => ne instanceof te);
let idbProxyableTypes, cursorAdvanceMethods;
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const cursorRequestMap = new WeakMap
    , transactionDoneMap = new WeakMap
    , transactionStoreNamesMap = new WeakMap
    , transformCache = new WeakMap
    , reverseTransformCache = new WeakMap;
function promisifyRequest(ne) {
    const ee = new Promise((te, re) => {
        const ie = () => {
            ne.removeEventListener("success", se),
                ne.removeEventListener("error", ae)
        }
            , se = () => {
                te(wrap(ne.result)),
                    ie()
            }
            , ae = () => {
                re(ne.error),
                    ie()
            }
            ;
        ne.addEventListener("success", se),
            ne.addEventListener("error", ae)
    }
    );
    return ee.then(te => {
        te instanceof IDBCursor && cursorRequestMap.set(te, ne)
    }
    ).catch(() => { }
    ),
        reverseTransformCache.set(ee, ne),
        ee
}
function cacheDonePromiseForTransaction(ne) {
    if (transactionDoneMap.has(ne))
        return;
    const ee = new Promise((te, re) => {
        const ie = () => {
            ne.removeEventListener("complete", se),
                ne.removeEventListener("error", ae),
                ne.removeEventListener("abort", ae)
        }
            , se = () => {
                te(),
                    ie()
            }
            , ae = () => {
                re(ne.error || new DOMException("AbortError", "AbortError")),
                    ie()
            }
            ;
        ne.addEventListener("complete", se),
            ne.addEventListener("error", ae),
            ne.addEventListener("abort", ae)
    }
    );
    transactionDoneMap.set(ne, ee)
}
let idbProxyTraps = {
    get(ne, ee, te) {
        if (ne instanceof IDBTransaction) {
            if (ee === "done")
                return transactionDoneMap.get(ne);
            if (ee === "objectStoreNames")
                return ne.objectStoreNames || transactionStoreNamesMap.get(ne);
            if (ee === "store")
                return te.objectStoreNames[1] ? void 0 : te.objectStore(te.objectStoreNames[0])
        }
        return wrap(ne[ee])
    },
    set(ne, ee, te) {
        return ne[ee] = te,
            !0
    },
    has(ne, ee) {
        return ne instanceof IDBTransaction && (ee === "done" || ee === "store") ? !0 : ee in ne
    }
};
function replaceTraps(ne) {
    idbProxyTraps = ne(idbProxyTraps)
}
function wrapFunction(ne) {
    return ne === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (ee, ...te) {
        const re = ne.call(unwrap(this), ee, ...te);
        return transactionStoreNamesMap.set(re, ee.sort ? ee.sort() : [ee]),
            wrap(re)
    }
        : getCursorAdvanceMethods().includes(ne) ? function (...ee) {
            return ne.apply(unwrap(this), ee),
                wrap(cursorRequestMap.get(this))
        }
            : function (...ee) {
                return wrap(ne.apply(unwrap(this), ee))
            }
}
function transformCachableValue(ne) {
    return typeof ne == "function" ? wrapFunction(ne) : (ne instanceof IDBTransaction && cacheDonePromiseForTransaction(ne),
        instanceOfAny(ne, getIdbProxyableTypes()) ? new Proxy(ne, idbProxyTraps) : ne)
}
function wrap(ne) {
    if (ne instanceof IDBRequest)
        return promisifyRequest(ne);
    if (transformCache.has(ne))
        return transformCache.get(ne);
    const ee = transformCachableValue(ne);
    return ee !== ne && (transformCache.set(ne, ee),
        reverseTransformCache.set(ee, ne)),
        ee
}
const unwrap = ne => reverseTransformCache.get(ne);
function openDB(ne, ee, { blocked: te, upgrade: re, blocking: ie, terminated: se } = {}) {
    const ae = indexedDB.open(ne, ee)
        , ce = wrap(ae);
    return re && ae.addEventListener("upgradeneeded", le => {
        re(wrap(ae.result), le.oldVersion, le.newVersion, wrap(ae.transaction), le)
    }
    ),
        te && ae.addEventListener("blocked", le => te(le.oldVersion, le.newVersion, le)),
        ce.then(le => {
            se && le.addEventListener("close", () => se()),
                ie && le.addEventListener("versionchange", he => ie(he.oldVersion, he.newVersion, he))
        }
        ).catch(() => { }
        ),
        ce
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"]
    , writeMethods = ["put", "add", "delete", "clear"]
    , cachedMethods = new Map;
function getMethod(ne, ee) {
    if (!(ne instanceof IDBDatabase && !(ee in ne) && typeof ee == "string"))
        return;
    if (cachedMethods.get(ee))
        return cachedMethods.get(ee);
    const te = ee.replace(/FromIndex$/, "")
        , re = ee !== te
        , ie = writeMethods.includes(te);
    if (!(te in (re ? IDBIndex : IDBObjectStore).prototype) || !(ie || readMethods.includes(te)))
        return;
    const se = async function (ae, ...ce) {
        const le = this.transaction(ae, ie ? "readwrite" : "readonly");
        let he = le.store;
        return re && (he = he.index(ce.shift())),
            (await Promise.all([he[te](...ce), ie && le.done]))[0]
    };
    return cachedMethods.set(ee, se),
        se
}
replaceTraps(ne => ({
    ...ne,
    get: (ee, te, re) => getMethod(ee, te) || ne.get(ee, te, re),
    has: (ee, te) => !!getMethod(ee, te) || ne.has(ee, te)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(ee) {
        this.container = ee
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(te => {
            if (isVersionServiceProvider(te)) {
                const re = te.getImmediate();
                return `${re.library}/${re.version}`
            } else
                return null
        }
        ).filter(te => te).join(" ")
    }
}
function isVersionServiceProvider(ne) {
    return ne.getComponent()?.type === "VERSION"
}
const name$q = "@firebase/app"
    , version$1$1 = "0.14.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new Logger("@firebase/app")
    , name$p = "@firebase/app-compat"
    , name$o = "@firebase/analytics-compat"
    , name$n = "@firebase/analytics"
    , name$m = "@firebase/app-check-compat"
    , name$l = "@firebase/app-check"
    , name$k = "@firebase/auth"
    , name$j = "@firebase/auth-compat"
    , name$i = "@firebase/database"
    , name$h = "@firebase/data-connect"
    , name$g = "@firebase/database-compat"
    , name$f = "@firebase/functions"
    , name$e = "@firebase/functions-compat"
    , name$d = "@firebase/installations"
    , name$c = "@firebase/installations-compat"
    , name$b = "@firebase/messaging"
    , name$a = "@firebase/messaging-compat"
    , name$9 = "@firebase/performance"
    , name$8 = "@firebase/performance-compat"
    , name$7 = "@firebase/remote-config"
    , name$6 = "@firebase/remote-config-compat"
    , name$5 = "@firebase/storage"
    , name$4 = "@firebase/storage-compat"
    , name$3 = "@firebase/firestore"
    , name$2$1 = "@firebase/ai"
    , name$1$1 = "@firebase/firestore-compat"
    , name$r = "firebase"
    , version$3 = "12.11.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = "[DEFAULT]"
    , PLATFORM_LOG_STRING = {
        [name$q]: "fire-core",
        [name$p]: "fire-core-compat",
        [name$n]: "fire-analytics",
        [name$o]: "fire-analytics-compat",
        [name$l]: "fire-app-check",
        [name$m]: "fire-app-check-compat",
        [name$k]: "fire-auth",
        [name$j]: "fire-auth-compat",
        [name$i]: "fire-rtdb",
        [name$h]: "fire-data-connect",
        [name$g]: "fire-rtdb-compat",
        [name$f]: "fire-fn",
        [name$e]: "fire-fn-compat",
        [name$d]: "fire-iid",
        [name$c]: "fire-iid-compat",
        [name$b]: "fire-fcm",
        [name$a]: "fire-fcm-compat",
        [name$9]: "fire-perf",
        [name$8]: "fire-perf-compat",
        [name$7]: "fire-rc",
        [name$6]: "fire-rc-compat",
        [name$5]: "fire-gcs",
        [name$4]: "fire-gcs-compat",
        [name$3]: "fire-fst",
        [name$1$1]: "fire-fst-compat",
        [name$2$1]: "fire-vertex",
        "fire-js": "fire-js",
        [name$r]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _apps = new Map
    , _serverApps = new Map
    , _components = new Map;
function _addComponent(ne, ee) {
    try {
        ne.container.addComponent(ee)
    } catch (te) {
        logger.debug(`Component ${ee.name} failed to register with FirebaseApp ${ne.name}`, te)
    }
}
function _registerComponent(ne) {
    const ee = ne.name;
    if (_components.has(ee))
        return logger.debug(`There were multiple attempts to register component ${ee}.`),
            !1;
    _components.set(ee, ne);
    for (const te of _apps.values())
        _addComponent(te, ne);
    for (const te of _serverApps.values())
        _addComponent(te, ne);
    return !0
}
function _getProvider(ne, ee) {
    const te = ne.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return te && te.triggerHeartbeat(),
        ne.container.getProvider(ee)
}
function _isFirebaseServerApp(ne) {
    return ne == null ? !1 : ne.settings !== void 0
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}
    , ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(ee, te, re) {
        this._isDeleted = !1,
            this._options = {
                ...ee
            },
            this._config = {
                ...te
            },
            this._name = te.name,
            this._automaticDataCollectionEnabled = te.automaticDataCollectionEnabled,
            this._container = re,
            this.container.addComponent(new Component("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
            this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(ee) {
        this.checkDestroyed(),
            this._automaticDataCollectionEnabled = ee
    }
    get name() {
        return this.checkDestroyed(),
            this._name
    }
    get options() {
        return this.checkDestroyed(),
            this._options
    }
    get config() {
        return this.checkDestroyed(),
            this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(ee) {
        this._isDeleted = ee
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw ERROR_FACTORY.create("app-deleted", {
                appName: this._name
            })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SDK_VERSION = version$3;
function initializeApp(ne, ee = {}) {
    let te = ne;
    typeof ee != "object" && (ee = {
        name: ee
    });
    const re = {
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: !0,
        ...ee
    }
        , ie = re.name;
    if (typeof ie != "string" || !ie)
        throw ERROR_FACTORY.create("bad-app-name", {
            appName: String(ie)
        });
    if (te || (te = getDefaultAppConfig()),
        !te)
        throw ERROR_FACTORY.create("no-options");
    const se = _apps.get(ie);
    if (se) {
        if (deepEqual(te, se.options) && deepEqual(re, se.config))
            return se;
        throw ERROR_FACTORY.create("duplicate-app", {
            appName: ie
        })
    }
    const ae = new ComponentContainer(ie);
    for (const le of _components.values())
        ae.addComponent(le);
    const ce = new FirebaseAppImpl(te, re, ae);
    return _apps.set(ie, ce),
        ce
}
function getApp(ne = DEFAULT_ENTRY_NAME) {
    const ee = _apps.get(ne);
    if (!ee && ne === DEFAULT_ENTRY_NAME && getDefaultAppConfig())
        return initializeApp();
    if (!ee)
        throw ERROR_FACTORY.create("no-app", {
            appName: ne
        });
    return ee
}
function registerVersion(ne, ee, te) {
    let re = PLATFORM_LOG_STRING[ne] ?? ne;
    te && (re += `-${te}`);
    const ie = re.match(/\s|\//)
        , se = ee.match(/\s|\//);
    if (ie || se) {
        const ae = [`Unable to register library "${re}" with version "${ee}":`];
        ie && ae.push(`library name "${re}" contains illegal characters (whitespace or "/")`),
            ie && se && ae.push("and"),
            se && ae.push(`version name "${ee}" contains illegal characters (whitespace or "/")`),
            logger.warn(ae.join(" "));
        return
    }
    _registerComponent(new Component(`${re}-version`, () => ({
        library: re,
        version: ee
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME$1 = "firebase-heartbeat-database"
    , DB_VERSION$1 = 1
    , STORE_NAME = "firebase-heartbeat-store";
let dbPromise = null;
function getDbPromise() {
    return dbPromise || (dbPromise = openDB(DB_NAME$1, DB_VERSION$1, {
        upgrade: (ne, ee) => {
            switch (ee) {
                case 0:
                    try {
                        ne.createObjectStore(STORE_NAME)
                    } catch (te) {
                        console.warn(te)
                    }
            }
        }
    }).catch(ne => {
        throw ERROR_FACTORY.create("idb-open", {
            originalErrorMessage: ne.message
        })
    }
    )),
        dbPromise
}
async function readHeartbeatsFromIndexedDB(ne) {
    try {
        const te = (await getDbPromise()).transaction(STORE_NAME)
            , re = await te.objectStore(STORE_NAME).get(computeKey(ne));
        return await te.done,
            re
    } catch (ee) {
        if (ee instanceof FirebaseError)
            logger.warn(ee.message);
        else {
            const te = ERROR_FACTORY.create("idb-get", {
                originalErrorMessage: ee?.message
            });
            logger.warn(te.message)
        }
    }
}
async function writeHeartbeatsToIndexedDB(ne, ee) {
    try {
        const re = (await getDbPromise()).transaction(STORE_NAME, "readwrite");
        await re.objectStore(STORE_NAME).put(ee, computeKey(ne)),
            await re.done
    } catch (te) {
        if (te instanceof FirebaseError)
            logger.warn(te.message);
        else {
            const re = ERROR_FACTORY.create("idb-set", {
                originalErrorMessage: te?.message
            });
            logger.warn(re.message)
        }
    }
}
function computeKey(ne) {
    return `${ne.name}!${ne.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024
    , MAX_NUM_STORED_HEARTBEATS = 30;
class HeartbeatServiceImpl {
    constructor(ee) {
        this.container = ee,
            this._heartbeatsCache = null;
        const te = this.container.getProvider("app").getImmediate();
        this._storage = new HeartbeatStorageImpl(te),
            this._heartbeatsCachePromise = this._storage.read().then(re => (this._heartbeatsCache = re,
                re))
    }
    async triggerHeartbeat() {
        try {
            const te = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
                , re = getUTCDateString();
            if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise,
                this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === re || this._heartbeatsCache.heartbeats.some(ie => ie.date === re))
                return;
            if (this._heartbeatsCache.heartbeats.push({
                date: re,
                agent: te
            }),
                this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
                const ie = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
                this._heartbeatsCache.heartbeats.splice(ie, 1)
            }
            return this._storage.overwrite(this._heartbeatsCache)
        } catch (ee) {
            logger.warn(ee)
        }
    }
    async getHeartbeatsHeader() {
        try {
            if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
                this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0)
                return "";
            const ee = getUTCDateString()
                , { heartbeatsToSend: te, unsentEntries: re } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats)
                , ie = base64urlEncodeWithoutPadding(JSON.stringify({
                    version: 2,
                    heartbeats: te
                }));
            return this._heartbeatsCache.lastSentHeartbeatDate = ee,
                re.length > 0 ? (this._heartbeatsCache.heartbeats = re,
                    await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
                        this._storage.overwrite(this._heartbeatsCache)),
                ie
        } catch (ee) {
            return logger.warn(ee),
                ""
        }
    }
}
function getUTCDateString() {
    return new Date().toISOString().substring(0, 10)
}
function extractHeartbeatsForHeader(ne, ee = MAX_HEADER_BYTES) {
    const te = [];
    let re = ne.slice();
    for (const ie of ne) {
        const se = te.find(ae => ae.agent === ie.agent);
        if (se) {
            if (se.dates.push(ie.date),
                countBytes(te) > ee) {
                se.dates.pop();
                break
            }
        } else if (te.push({
            agent: ie.agent,
            dates: [ie.date]
        }),
            countBytes(te) > ee) {
            te.pop();
            break
        }
        re = re.slice(1)
    }
    return {
        heartbeatsToSend: te,
        unsentEntries: re
    }
}
class HeartbeatStorageImpl {
    constructor(ee) {
        this.app = ee,
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return isIndexedDBAvailable() ? validateIndexedDBOpenable().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const te = await readHeartbeatsFromIndexedDB(this.app);
            return te?.heartbeats ? te : {
                heartbeats: []
            }
        } else
            return {
                heartbeats: []
            }
    }
    async overwrite(ee) {
        if (await this._canUseIndexedDBPromise) {
            const re = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: ee.lastSentHeartbeatDate ?? re.lastSentHeartbeatDate,
                heartbeats: ee.heartbeats
            })
        } else
            return
    }
    async add(ee) {
        if (await this._canUseIndexedDBPromise) {
            const re = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: ee.lastSentHeartbeatDate ?? re.lastSentHeartbeatDate,
                heartbeats: [...re.heartbeats, ...ee.heartbeats]
            })
        } else
            return
    }
}
function countBytes(ne) {
    return base64urlEncodeWithoutPadding(JSON.stringify({
        version: 2,
        heartbeats: ne
    })).length
}
function getEarliestHeartbeatIdx(ne) {
    if (ne.length === 0)
        return -1;
    let ee = 0
        , te = ne[0].date;
    for (let re = 1; re < ne.length; re++)
        ne[re].date < te && (te = ne[re].date,
            ee = re);
    return ee
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(ne) {
    _registerComponent(new Component("platform-logger", ee => new PlatformLoggerServiceImpl(ee), "PRIVATE")),
        _registerComponent(new Component("heartbeat", ee => new HeartbeatServiceImpl(ee), "PRIVATE")),
        registerVersion(name$q, version$1$1, ne),
        registerVersion(name$q, version$1$1, "esm2020"),
        registerVersion("fire-js", "")
}
registerCoreComponents("");
function _prodErrorMap() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const prodErrorMap = _prodErrorMap
    , _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logClient = new Logger("@firebase/auth");
function _logWarn(ne, ...ee) {
    logClient.logLevel <= LogLevel.WARN && logClient.warn(`Auth (${SDK_VERSION}): ${ne}`, ...ee)
}
function _logError(ne, ...ee) {
    logClient.logLevel <= LogLevel.ERROR && logClient.error(`Auth (${SDK_VERSION}): ${ne}`, ...ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _fail(ne, ...ee) {
    throw createErrorInternal(ne, ...ee)
}
function _createError(ne, ...ee) {
    return createErrorInternal(ne, ...ee)
}
function _errorWithCustomMessage(ne, ee, te) {
    const re = {
        ...prodErrorMap(),
        [ee]: te
    };
    return new ErrorFactory("auth", "Firebase", re).create(ee, {
        appName: ne.name
    })
}
function _serverAppCurrentUserOperationNotSupportedError(ne) {
    return _errorWithCustomMessage(ne, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
}
function _assertInstanceOf(ne, ee, te) {
    const re = te;
    if (!(ee instanceof re))
        throw re.name !== ee.constructor.name && _fail(ne, "argument-error"),
        _errorWithCustomMessage(ne, "argument-error", `Type of ${ee.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}
function createErrorInternal(ne, ...ee) {
    if (typeof ne != "string") {
        const te = ee[0]
            , re = [...ee.slice(1)];
        return re[0] && (re[0].appName = ne.name),
            ne._errorFactory.create(te, ...re)
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(ne, ...ee)
}
function _assert(ne, ee, ...te) {
    if (!ne)
        throw createErrorInternal(ee, ...te)
}
function debugFail(ne) {
    const ee = "INTERNAL ASSERTION FAILED: " + ne;
    throw _logError(ee),
    new Error(ee)
}
function debugAssert(ne, ee) {
    ne || debugFail(ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getCurrentUrl() {
    return typeof self < "u" && self.location?.href || ""
}
function _isHttpOrHttps() {
    return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:"
}
function _getCurrentScheme() {
    return typeof self < "u" && self.location?.protocol || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _isOnline() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator) ? navigator.onLine : !0
}
function _getUserLanguage() {
    if (typeof navigator > "u")
        return null;
    const ne = navigator;
    return ne.languages && ne.languages[0] || ne.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Delay {
    constructor(ee, te) {
        this.shortDelay = ee,
            this.longDelay = te,
            debugAssert(te > ee, "Short delay should be less than long delay!"),
            this.isMobile = isMobileCordova() || isReactNative()
    }
    get() {
        return _isOnline() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _emulatorUrl(ne, ee) {
    debugAssert(ne.emulator, "Emulator should always be set here");
    const { url: te } = ne.emulator;
    return ee ? `${te}${ee.startsWith("/") ? ee.slice(1) : ee}` : te
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FetchProvider {
    static initialize(ee, te, re) {
        this.fetchImpl = ee,
            te && (this.headersImpl = te),
            re && (this.responseImpl = re)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers" in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response" in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SERVER_ERROR_MAP = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const CookieAuthProxiedEndpoints = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"]
    , DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(ne, ee) {
    return ne.tenantId && !ee.tenantId ? {
        ...ee,
        tenantId: ne.tenantId
    } : ee
}
async function _performApiRequest(ne, ee, te, re, ie = {}) {
    return _performFetchWithErrorHandling(ne, ie, async () => {
        let se = {}
            , ae = {};
        re && (ee === "GET" ? ae = re : se = {
            body: JSON.stringify(re)
        });
        const ce = querystring({
            key: ne.config.apiKey,
            ...ae
        }).slice(1)
            , le = await ne._getAdditionalHeaders();
        le["Content-Type"] = "application/json",
            ne.languageCode && (le["X-Firebase-Locale"] = ne.languageCode);
        const he = {
            method: ee,
            headers: le,
            ...se
        };
        return isCloudflareWorker() || (he.referrerPolicy = "no-referrer"),
            ne.emulatorConfig && isCloudWorkstation(ne.emulatorConfig.host) && (he.credentials = "include"),
            FetchProvider.fetch()(await _getFinalTarget(ne, ne.config.apiHost, te, ce), he)
    }
    )
}
async function _performFetchWithErrorHandling(ne, ee, te) {
    ne._canInitEmulator = !1;
    const re = {
        ...SERVER_ERROR_MAP,
        ...ee
    };
    try {
        const ie = new NetworkTimeout(ne)
            , se = await Promise.race([te(), ie.promise]);
        ie.clearNetworkTimeout();
        const ae = await se.json();
        if ("needConfirmation" in ae)
            throw _makeTaggedError(ne, "account-exists-with-different-credential", ae);
        if (se.ok && !("errorMessage" in ae))
            return ae;
        {
            const ce = se.ok ? ae.errorMessage : ae.error.message
                , [le, he] = ce.split(" : ");
            if (le === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw _makeTaggedError(ne, "credential-already-in-use", ae);
            if (le === "EMAIL_EXISTS")
                throw _makeTaggedError(ne, "email-already-in-use", ae);
            if (le === "USER_DISABLED")
                throw _makeTaggedError(ne, "user-disabled", ae);
            const de = re[le] || le.toLowerCase().replace(/[_\s]+/g, "-");
            if (he)
                throw _errorWithCustomMessage(ne, de, he);
            _fail(ne, de)
        }
    } catch (ie) {
        if (ie instanceof FirebaseError)
            throw ie;
        _fail(ne, "network-request-failed", {
            message: String(ie)
        })
    }
}
async function _performSignInRequest(ne, ee, te, re, ie = {}) {
    const se = await _performApiRequest(ne, ee, te, re, ie);
    return "mfaPendingCredential" in se && _fail(ne, "multi-factor-auth-required", {
        _serverResponse: se
    }),
        se
}
async function _getFinalTarget(ne, ee, te, re) {
    const ie = `${ee}${te}?${re}`
        , se = ne
        , ae = se.config.emulator ? _emulatorUrl(ne.config, ie) : `${ne.config.apiScheme}://${ie}`;
    return CookieAuthProxiedEndpoints.includes(te) && (await se._persistenceManagerAvailable,
        se._getPersistenceType() === "COOKIE") ? se._getPersistence()._getFinalTarget(ae).toString() : ae
}
function _parseEnforcementState(ne) {
    switch (ne) {
        case "ENFORCE":
            return "ENFORCE";
        case "AUDIT":
            return "AUDIT";
        case "OFF":
            return "OFF";
        default:
            return "ENFORCEMENT_STATE_UNSPECIFIED"
    }
}
class NetworkTimeout {
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
    constructor(ee) {
        this.auth = ee,
            this.timer = null,
            this.promise = new Promise((te, re) => {
                this.timer = setTimeout(() => re(_createError(this.auth, "network-request-failed")), DEFAULT_API_TIMEOUT_MS.get())
            }
            )
    }
}
function _makeTaggedError(ne, ee, te) {
    const re = {
        appName: ne.name
    };
    te.email && (re.email = te.email),
        te.phoneNumber && (re.phoneNumber = te.phoneNumber);
    const ie = _createError(ne, ee, re);
    return ie.customData._tokenResponse = te,
        ie
}
function isEnterprise(ne) {
    return ne !== void 0 && ne.enterprise !== void 0
}
class RecaptchaConfig {
    constructor(ee) {
        if (this.siteKey = "",
            this.recaptchaEnforcementState = [],
            ee.recaptchaKey === void 0)
            throw new Error("recaptchaKey undefined");
        this.siteKey = ee.recaptchaKey.split("/")[3],
            this.recaptchaEnforcementState = ee.recaptchaEnforcementState
    }
    getProviderEnforcementState(ee) {
        if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
            return null;
        for (const te of this.recaptchaEnforcementState)
            if (te.provider && te.provider === ee)
                return _parseEnforcementState(te.enforcementState);
        return null
    }
    isProviderEnabled(ee) {
        return this.getProviderEnforcementState(ee) === "ENFORCE" || this.getProviderEnforcementState(ee) === "AUDIT"
    }
    isAnyProviderEnabled() {
        return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER")
    }
}
async function getRecaptchaConfig(ne, ee) {
    return _performApiRequest(ne, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(ne, ee))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function deleteAccount(ne, ee) {
    return _performApiRequest(ne, "POST", "/v1/accounts:delete", ee)
}
async function getAccountInfo(ne, ee) {
    return _performApiRequest(ne, "POST", "/v1/accounts:lookup", ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function utcTimestampToDateString(ne) {
    if (ne)
        try {
            const ee = new Date(Number(ne));
            if (!isNaN(ee.getTime()))
                return ee.toUTCString()
        } catch { }
}
async function getIdTokenResult(ne, ee = !1) {
    const te = getModularInstance(ne)
        , re = await te.getIdToken(ee)
        , ie = _parseToken(re);
    _assert(ie && ie.exp && ie.auth_time && ie.iat, te.auth, "internal-error");
    const se = typeof ie.firebase == "object" ? ie.firebase : void 0
        , ae = se?.sign_in_provider;
    return {
        claims: ie,
        token: re,
        authTime: utcTimestampToDateString(secondsStringToMilliseconds(ie.auth_time)),
        issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(ie.iat)),
        expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(ie.exp)),
        signInProvider: ae || null,
        signInSecondFactor: se?.sign_in_second_factor || null
    }
}
function secondsStringToMilliseconds(ne) {
    return Number(ne) * 1e3
}
function _parseToken(ne) {
    const [ee, te, re] = ne.split(".");
    if (ee === void 0 || te === void 0 || re === void 0)
        return _logError("JWT malformed, contained fewer than 3 sections"),
            null;
    try {
        const ie = base64Decode(te);
        return ie ? JSON.parse(ie) : (_logError("Failed to decode base64 JWT payload"),
            null)
    } catch (ie) {
        return _logError("Caught error parsing JWT payload as JSON", ie?.toString()),
            null
    }
}
function _tokenExpiresIn(ne) {
    const ee = _parseToken(ne);
    return _assert(ee, "internal-error"),
        _assert(typeof ee.exp < "u", "internal-error"),
        _assert(typeof ee.iat < "u", "internal-error"),
        Number(ee.exp) - Number(ee.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _logoutIfInvalidated(ne, ee, te = !1) {
    if (te)
        return ee;
    try {
        return await ee
    } catch (re) {
        throw re instanceof FirebaseError && isUserInvalidated(re) && ne.auth.currentUser === ne && await ne.auth.signOut(),
        re
    }
}
function isUserInvalidated({ code: ne }) {
    return ne === "auth/user-disabled" || ne === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ProactiveRefresh {
    constructor(ee) {
        this.user = ee,
            this.isRunning = !1,
            this.timerId = null,
            this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
            this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
            this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(ee) {
        if (ee) {
            const te = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
                te
        } else {
            this.errorBackoff = 3e4;
            const re = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
            return Math.max(0, re)
        }
    }
    schedule(ee = !1) {
        if (!this.isRunning)
            return;
        const te = this.getInterval(ee);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
            , te)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (ee) {
            ee?.code === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UserMetadata {
    constructor(ee, te) {
        this.createdAt = ee,
            this.lastLoginAt = te,
            this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt),
            this.creationTime = utcTimestampToDateString(this.createdAt)
    }
    _copy(ee) {
        this.createdAt = ee.createdAt,
            this.lastLoginAt = ee.lastLoginAt,
            this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _reloadWithoutSaving(ne) {
    const ee = ne.auth
        , te = await ne.getIdToken()
        , re = await _logoutIfInvalidated(ne, getAccountInfo(ee, {
            idToken: te
        }));
    _assert(re?.users.length, ee, "internal-error");
    const ie = re.users[0];
    ne._notifyReloadListener(ie);
    const se = ie.providerUserInfo?.length ? extractProviderData(ie.providerUserInfo) : []
        , ae = mergeProviderData(ne.providerData, se)
        , ce = ne.isAnonymous
        , le = !(ne.email && ie.passwordHash) && !ae?.length
        , he = ce ? le : !1
        , de = {
            uid: ie.localId,
            displayName: ie.displayName || null,
            photoURL: ie.photoUrl || null,
            email: ie.email || null,
            emailVerified: ie.emailVerified || !1,
            phoneNumber: ie.phoneNumber || null,
            tenantId: ie.tenantId || null,
            providerData: ae,
            metadata: new UserMetadata(ie.createdAt, ie.lastLoginAt),
            isAnonymous: he
        };
    Object.assign(ne, de)
}
async function reload(ne) {
    const ee = getModularInstance(ne);
    await _reloadWithoutSaving(ee),
        await ee.auth._persistUserIfCurrent(ee),
        ee.auth._notifyListenersIfCurrent(ee)
}
function mergeProviderData(ne, ee) {
    return [...ne.filter(re => !ee.some(ie => ie.providerId === re.providerId)), ...ee]
}
function extractProviderData(ne) {
    return ne.map(({ providerId: ee, ...te }) => ({
        providerId: ee,
        uid: te.rawId || "",
        displayName: te.displayName || null,
        email: te.email || null,
        phoneNumber: te.phoneNumber || null,
        photoURL: te.photoUrl || null
    }))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function requestStsToken(ne, ee) {
    const te = await _performFetchWithErrorHandling(ne, {}, async () => {
        const re = querystring({
            grant_type: "refresh_token",
            refresh_token: ee
        }).slice(1)
            , { tokenApiHost: ie, apiKey: se } = ne.config
            , ae = await _getFinalTarget(ne, ie, "/v1/token", `key=${se}`)
            , ce = await ne._getAdditionalHeaders();
        ce["Content-Type"] = "application/x-www-form-urlencoded";
        const le = {
            method: "POST",
            headers: ce,
            body: re
        };
        return ne.emulatorConfig && isCloudWorkstation(ne.emulatorConfig.host) && (le.credentials = "include"),
            FetchProvider.fetch()(ae, le)
    }
    );
    return {
        accessToken: te.access_token,
        expiresIn: te.expires_in,
        refreshToken: te.refresh_token
    }
}
async function revokeToken(ne, ee) {
    return _performApiRequest(ne, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(ne, ee))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class StsTokenManager {
    constructor() {
        this.refreshToken = null,
            this.accessToken = null,
            this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(ee) {
        _assert(ee.idToken, "internal-error"),
            _assert(typeof ee.idToken < "u", "internal-error"),
            _assert(typeof ee.refreshToken < "u", "internal-error");
        const te = "expiresIn" in ee && typeof ee.expiresIn < "u" ? Number(ee.expiresIn) : _tokenExpiresIn(ee.idToken);
        this.updateTokensAndExpiration(ee.idToken, ee.refreshToken, te)
    }
    updateFromIdToken(ee) {
        _assert(ee.length !== 0, "internal-error");
        const te = _tokenExpiresIn(ee);
        this.updateTokensAndExpiration(ee, null, te)
    }
    async getToken(ee, te = !1) {
        return !te && this.accessToken && !this.isExpired ? this.accessToken : (_assert(this.refreshToken, ee, "user-token-expired"),
            this.refreshToken ? (await this.refresh(ee, this.refreshToken),
                this.accessToken) : null)
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(ee, te) {
        const { accessToken: re, refreshToken: ie, expiresIn: se } = await requestStsToken(ee, te);
        this.updateTokensAndExpiration(re, ie, Number(se))
    }
    updateTokensAndExpiration(ee, te, re) {
        this.refreshToken = te || null,
            this.accessToken = ee || null,
            this.expirationTime = Date.now() + re * 1e3
    }
    static fromJSON(ee, te) {
        const { refreshToken: re, accessToken: ie, expirationTime: se } = te
            , ae = new StsTokenManager;
        return re && (_assert(typeof re == "string", "internal-error", {
            appName: ee
        }),
            ae.refreshToken = re),
            ie && (_assert(typeof ie == "string", "internal-error", {
                appName: ee
            }),
                ae.accessToken = ie),
            se && (_assert(typeof se == "number", "internal-error", {
                appName: ee
            }),
                ae.expirationTime = se),
            ae
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(ee) {
        this.accessToken = ee.accessToken,
            this.refreshToken = ee.refreshToken,
            this.expirationTime = ee.expirationTime
    }
    _clone() {
        return Object.assign(new StsTokenManager, this.toJSON())
    }
    _performRefresh() {
        return debugFail("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function assertStringOrUndefined(ne, ee) {
    _assert(typeof ne == "string" || typeof ne > "u", "internal-error", {
        appName: ee
    })
}
class UserImpl {
    constructor({ uid: ee, auth: te, stsTokenManager: re, ...ie }) {
        this.providerId = "firebase",
            this.proactiveRefresh = new ProactiveRefresh(this),
            this.reloadUserInfo = null,
            this.reloadListener = null,
            this.uid = ee,
            this.auth = te,
            this.stsTokenManager = re,
            this.accessToken = re.accessToken,
            this.displayName = ie.displayName || null,
            this.email = ie.email || null,
            this.emailVerified = ie.emailVerified || !1,
            this.phoneNumber = ie.phoneNumber || null,
            this.photoURL = ie.photoURL || null,
            this.isAnonymous = ie.isAnonymous || !1,
            this.tenantId = ie.tenantId || null,
            this.providerData = ie.providerData ? [...ie.providerData] : [],
            this.metadata = new UserMetadata(ie.createdAt || void 0, ie.lastLoginAt || void 0)
    }
    async getIdToken(ee) {
        const te = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, ee));
        return _assert(te, this.auth, "internal-error"),
            this.accessToken !== te && (this.accessToken = te,
                await this.auth._persistUserIfCurrent(this),
                this.auth._notifyListenersIfCurrent(this)),
            te
    }
    getIdTokenResult(ee) {
        return getIdTokenResult(this, ee)
    }
    reload() {
        return reload(this)
    }
    _assign(ee) {
        this !== ee && (_assert(this.uid === ee.uid, this.auth, "internal-error"),
            this.displayName = ee.displayName,
            this.photoURL = ee.photoURL,
            this.email = ee.email,
            this.emailVerified = ee.emailVerified,
            this.phoneNumber = ee.phoneNumber,
            this.isAnonymous = ee.isAnonymous,
            this.tenantId = ee.tenantId,
            this.providerData = ee.providerData.map(te => ({
                ...te
            })),
            this.metadata._copy(ee.metadata),
            this.stsTokenManager._assign(ee.stsTokenManager))
    }
    _clone(ee) {
        const te = new UserImpl({
            ...this,
            auth: ee,
            stsTokenManager: this.stsTokenManager._clone()
        });
        return te.metadata._copy(this.metadata),
            te
    }
    _onReload(ee) {
        _assert(!this.reloadListener, this.auth, "internal-error"),
            this.reloadListener = ee,
            this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
                this.reloadUserInfo = null)
    }
    _notifyReloadListener(ee) {
        this.reloadListener ? this.reloadListener(ee) : this.reloadUserInfo = ee
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(ee, te = !1) {
        let re = !1;
        ee.idToken && ee.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(ee),
            re = !0),
            te && await _reloadWithoutSaving(this),
            await this.auth._persistUserIfCurrent(this),
            re && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        if (_isFirebaseServerApp(this.auth.app))
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
        const ee = await this.getIdToken();
        return await _logoutIfInvalidated(this, deleteAccount(this.auth, {
            idToken: ee
        })),
            this.stsTokenManager.clearRefreshToken(),
            this.auth.signOut()
    }
    toJSON() {
        return {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(ee => ({
                ...ee
            })),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
            ...this.metadata.toJSON(),
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        }
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(ee, te) {
        const re = te.displayName ?? void 0
            , ie = te.email ?? void 0
            , se = te.phoneNumber ?? void 0
            , ae = te.photoURL ?? void 0
            , ce = te.tenantId ?? void 0
            , le = te._redirectEventId ?? void 0
            , he = te.createdAt ?? void 0
            , de = te.lastLoginAt ?? void 0
            , { uid: fe, emailVerified: Re, isAnonymous: Pe, providerData: we, stsTokenManager: Se } = te;
        _assert(fe && Se, ee, "internal-error");
        const be = StsTokenManager.fromJSON(this.name, Se);
        _assert(typeof fe == "string", ee, "internal-error"),
            assertStringOrUndefined(re, ee.name),
            assertStringOrUndefined(ie, ee.name),
            _assert(typeof Re == "boolean", ee, "internal-error"),
            _assert(typeof Pe == "boolean", ee, "internal-error"),
            assertStringOrUndefined(se, ee.name),
            assertStringOrUndefined(ae, ee.name),
            assertStringOrUndefined(ce, ee.name),
            assertStringOrUndefined(le, ee.name),
            assertStringOrUndefined(he, ee.name),
            assertStringOrUndefined(de, ee.name);
        const De = new UserImpl({
            uid: fe,
            auth: ee,
            email: ie,
            emailVerified: Re,
            displayName: re,
            isAnonymous: Pe,
            photoURL: ae,
            phoneNumber: se,
            tenantId: ce,
            stsTokenManager: be,
            createdAt: he,
            lastLoginAt: de
        });
        return we && Array.isArray(we) && (De.providerData = we.map(ke => ({
            ...ke
        }))),
            le && (De._redirectEventId = le),
            De
    }
    static async _fromIdTokenResponse(ee, te, re = !1) {
        const ie = new StsTokenManager;
        ie.updateFromServerResponse(te);
        const se = new UserImpl({
            uid: te.localId,
            auth: ee,
            stsTokenManager: ie,
            isAnonymous: re
        });
        return await _reloadWithoutSaving(se),
            se
    }
    static async _fromGetAccountInfoResponse(ee, te, re) {
        const ie = te.users[0];
        _assert(ie.localId !== void 0, "internal-error");
        const se = ie.providerUserInfo !== void 0 ? extractProviderData(ie.providerUserInfo) : []
            , ae = !(ie.email && ie.passwordHash) && !se?.length
            , ce = new StsTokenManager;
        ce.updateFromIdToken(re);
        const le = new UserImpl({
            uid: ie.localId,
            auth: ee,
            stsTokenManager: ce,
            isAnonymous: ae
        })
            , he = {
                uid: ie.localId,
                displayName: ie.displayName || null,
                photoURL: ie.photoUrl || null,
                email: ie.email || null,
                emailVerified: ie.emailVerified || !1,
                phoneNumber: ie.phoneNumber || null,
                tenantId: ie.tenantId || null,
                providerData: se,
                metadata: new UserMetadata(ie.createdAt, ie.lastLoginAt),
                isAnonymous: !(ie.email && ie.passwordHash) && !se?.length
            };
        return Object.assign(le, he),
            le
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const instanceCache = new Map;
function _getInstance(ne) {
    debugAssert(ne instanceof Function, "Expected a class definition");
    let ee = instanceCache.get(ne);
    return ee ? (debugAssert(ee instanceof ne, "Instance stored in cache mismatched with class"),
        ee) : (ee = new ne,
            instanceCache.set(ne, ee),
            ee)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class InMemoryPersistence {
    constructor() {
        this.type = "NONE",
            this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(ee, te) {
        this.storage[ee] = te
    }
    async _get(ee) {
        const te = this.storage[ee];
        return te === void 0 ? null : te
    }
    async _remove(ee) {
        delete this.storage[ee]
    }
    _addListener(ee, te) { }
    _removeListener(ee, te) { }
}
InMemoryPersistence.type = "NONE";
const inMemoryPersistence = InMemoryPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _persistenceKeyName(ne, ee, te) {
    return `firebase:${ne}:${ee}:${te}`
}
class PersistenceUserManager {
    constructor(ee, te, re) {
        this.persistence = ee,
            this.auth = te,
            this.userKey = re;
        const { config: ie, name: se } = this.auth;
        this.fullUserKey = _persistenceKeyName(this.userKey, ie.apiKey, se),
            this.fullPersistenceKey = _persistenceKeyName("persistence", ie.apiKey, se),
            this.boundEventHandler = te._onStorageEvent.bind(te),
            this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(ee) {
        return this.persistence._set(this.fullUserKey, ee.toJSON())
    }
    async getCurrentUser() {
        const ee = await this.persistence._get(this.fullUserKey);
        if (!ee)
            return null;
        if (typeof ee == "string") {
            const te = await getAccountInfo(this.auth, {
                idToken: ee
            }).catch(() => { }
            );
            return te ? UserImpl._fromGetAccountInfoResponse(this.auth, te, ee) : null
        }
        return UserImpl._fromJSON(this.auth, ee)
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(ee) {
        if (this.persistence === ee)
            return;
        const te = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
            this.persistence = ee,
            te)
            return this.setCurrentUser(te)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(ee, te, re = "authUser") {
        if (!te.length)
            return new PersistenceUserManager(_getInstance(inMemoryPersistence), ee, re);
        const ie = (await Promise.all(te.map(async he => {
            if (await he._isAvailable())
                return he
        }
        ))).filter(he => he);
        let se = ie[0] || _getInstance(inMemoryPersistence);
        const ae = _persistenceKeyName(re, ee.config.apiKey, ee.name);
        let ce = null;
        for (const he of te)
            try {
                const de = await he._get(ae);
                if (de) {
                    let fe;
                    if (typeof de == "string") {
                        const Re = await getAccountInfo(ee, {
                            idToken: de
                        }).catch(() => { }
                        );
                        if (!Re)
                            break;
                        fe = await UserImpl._fromGetAccountInfoResponse(ee, Re, de)
                    } else
                        fe = UserImpl._fromJSON(ee, de);
                    he !== se && (ce = fe),
                        se = he;
                    break
                }
            } catch { }
        const le = ie.filter(he => he._shouldAllowMigration);
        return !se._shouldAllowMigration || !le.length ? new PersistenceUserManager(se, ee, re) : (se = le[0],
            ce && await se._set(ae, ce.toJSON()),
            await Promise.all(te.map(async he => {
                if (he !== se)
                    try {
                        await he._remove(ae)
                    } catch { }
            }
            )),
            new PersistenceUserManager(se, ee, re))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getBrowserName(ne) {
    const ee = ne.toLowerCase();
    if (ee.includes("opera/") || ee.includes("opr/") || ee.includes("opios/"))
        return "Opera";
    if (_isIEMobile(ee))
        return "IEMobile";
    if (ee.includes("msie") || ee.includes("trident/"))
        return "IE";
    if (ee.includes("edge/"))
        return "Edge";
    if (_isFirefox(ee))
        return "Firefox";
    if (ee.includes("silk/"))
        return "Silk";
    if (_isBlackBerry(ee))
        return "Blackberry";
    if (_isWebOS(ee))
        return "Webos";
    if (_isSafari(ee))
        return "Safari";
    if ((ee.includes("chrome/") || _isChromeIOS(ee)) && !ee.includes("edge/"))
        return "Chrome";
    if (_isAndroid(ee))
        return "Android";
    {
        const te = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
            , re = ne.match(te);
        if (re?.length === 2)
            return re[1]
    }
    return "Other"
}
function _isFirefox(ne = getUA()) {
    return /firefox\//i.test(ne)
}
function _isSafari(ne = getUA()) {
    const ee = ne.toLowerCase();
    return ee.includes("safari/") && !ee.includes("chrome/") && !ee.includes("crios/") && !ee.includes("android")
}
function _isChromeIOS(ne = getUA()) {
    return /crios\//i.test(ne)
}
function _isIEMobile(ne = getUA()) {
    return /iemobile/i.test(ne)
}
function _isAndroid(ne = getUA()) {
    return /android/i.test(ne)
}
function _isBlackBerry(ne = getUA()) {
    return /blackberry/i.test(ne)
}
function _isWebOS(ne = getUA()) {
    return /webos/i.test(ne)
}
function _isIOS(ne = getUA()) {
    return /iphone|ipad|ipod/i.test(ne) || /macintosh/i.test(ne) && /mobile/i.test(ne)
}
function _isIOSStandalone(ne = getUA()) {
    return _isIOS(ne) && !!window.navigator?.standalone
}
function _isIE10() {
    return isIE() && document.documentMode === 10
}
function _isMobileBrowser(ne = getUA()) {
    return _isIOS(ne) || _isAndroid(ne) || _isWebOS(ne) || _isBlackBerry(ne) || /windows phone/i.test(ne) || _isIEMobile(ne)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getClientVersion(ne, ee = []) {
    let te;
    switch (ne) {
        case "Browser":
            te = _getBrowserName(getUA());
            break;
        case "Worker":
            te = `${_getBrowserName(getUA())}-${ne}`;
            break;
        default:
            te = ne
    }
    const re = ee.length ? ee.join(",") : "FirebaseCore-web";
    return `${te}/JsCore/${SDK_VERSION}/${re}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthMiddlewareQueue {
    constructor(ee) {
        this.auth = ee,
            this.queue = []
    }
    pushCallback(ee, te) {
        const re = se => new Promise((ae, ce) => {
            try {
                const le = ee(se);
                ae(le)
            } catch (le) {
                ce(le)
            }
        }
        );
        re.onAbort = te,
            this.queue.push(re);
        const ie = this.queue.length - 1;
        return () => {
            this.queue[ie] = () => Promise.resolve()
        }
    }
    async runMiddleware(ee) {
        if (this.auth.currentUser === ee)
            return;
        const te = [];
        try {
            for (const re of this.queue)
                await re(ee),
                    re.onAbort && te.push(re.onAbort)
        } catch (re) {
            te.reverse();
            for (const ie of te)
                try {
                    ie()
                } catch { }
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: re?.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _getPasswordPolicy(ne, ee = {}) {
    return _performApiRequest(ne, "GET", "/v2/passwordPolicy", _addTidIfNecessary(ne, ee))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MINIMUM_MIN_PASSWORD_LENGTH = 6;
class PasswordPolicyImpl {
    constructor(ee) {
        const te = ee.customStrengthOptions;
        this.customStrengthOptions = {},
            this.customStrengthOptions.minPasswordLength = te.minPasswordLength ?? MINIMUM_MIN_PASSWORD_LENGTH,
            te.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = te.maxPasswordLength),
            te.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = te.containsLowercaseCharacter),
            te.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = te.containsUppercaseCharacter),
            te.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = te.containsNumericCharacter),
            te.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = te.containsNonAlphanumericCharacter),
            this.enforcementState = ee.enforcementState,
            this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
            this.allowedNonAlphanumericCharacters = ee.allowedNonAlphanumericCharacters?.join("") ?? "",
            this.forceUpgradeOnSignin = ee.forceUpgradeOnSignin ?? !1,
            this.schemaVersion = ee.schemaVersion
    }
    validatePassword(ee) {
        const te = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(ee, te),
            this.validatePasswordCharacterOptions(ee, te),
            te.isValid && (te.isValid = te.meetsMinPasswordLength ?? !0),
            te.isValid && (te.isValid = te.meetsMaxPasswordLength ?? !0),
            te.isValid && (te.isValid = te.containsLowercaseLetter ?? !0),
            te.isValid && (te.isValid = te.containsUppercaseLetter ?? !0),
            te.isValid && (te.isValid = te.containsNumericCharacter ?? !0),
            te.isValid && (te.isValid = te.containsNonAlphanumericCharacter ?? !0),
            te
    }
    validatePasswordLengthOptions(ee, te) {
        const re = this.customStrengthOptions.minPasswordLength
            , ie = this.customStrengthOptions.maxPasswordLength;
        re && (te.meetsMinPasswordLength = ee.length >= re),
            ie && (te.meetsMaxPasswordLength = ee.length <= ie)
    }
    validatePasswordCharacterOptions(ee, te) {
        this.updatePasswordCharacterOptionsStatuses(te, !1, !1, !1, !1);
        let re;
        for (let ie = 0; ie < ee.length; ie++)
            re = ee.charAt(ie),
                this.updatePasswordCharacterOptionsStatuses(te, re >= "a" && re <= "z", re >= "A" && re <= "Z", re >= "0" && re <= "9", this.allowedNonAlphanumericCharacters.includes(re))
    }
    updatePasswordCharacterOptionsStatuses(ee, te, re, ie, se) {
        this.customStrengthOptions.containsLowercaseLetter && (ee.containsLowercaseLetter || (ee.containsLowercaseLetter = te)),
            this.customStrengthOptions.containsUppercaseLetter && (ee.containsUppercaseLetter || (ee.containsUppercaseLetter = re)),
            this.customStrengthOptions.containsNumericCharacter && (ee.containsNumericCharacter || (ee.containsNumericCharacter = ie)),
            this.customStrengthOptions.containsNonAlphanumericCharacter && (ee.containsNonAlphanumericCharacter || (ee.containsNonAlphanumericCharacter = se))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthImpl {
    constructor(ee, te, re, ie) {
        this.app = ee,
            this.heartbeatServiceProvider = te,
            this.appCheckServiceProvider = re,
            this.config = ie,
            this.currentUser = null,
            this.emulatorConfig = null,
            this.operations = Promise.resolve(),
            this.authStateSubscription = new Subscription(this),
            this.idTokenSubscription = new Subscription(this),
            this.beforeStateQueue = new AuthMiddlewareQueue(this),
            this.redirectUser = null,
            this.isProactiveRefreshEnabled = !1,
            this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
            this._canInitEmulator = !0,
            this._isInitialized = !1,
            this._deleted = !1,
            this._initializationPromise = null,
            this._popupRedirectResolver = null,
            this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY,
            this._agentRecaptchaConfig = null,
            this._tenantRecaptchaConfigs = {},
            this._projectPasswordPolicy = null,
            this._tenantPasswordPolicies = {},
            this._resolvePersistenceManagerAvailable = void 0,
            this.lastNotifiedUid = void 0,
            this.languageCode = null,
            this.tenantId = null,
            this.settings = {
                appVerificationDisabledForTesting: !1
            },
            this.frameworks = [],
            this.name = ee.name,
            this.clientVersion = ie.sdkClientVersion,
            this._persistenceManagerAvailable = new Promise(se => this._resolvePersistenceManagerAvailable = se)
    }
    _initializeWithPersistence(ee, te) {
        return te && (this._popupRedirectResolver = _getInstance(te)),
            this._initializationPromise = this.queue(async () => {
                if (!this._deleted && (this.persistenceManager = await PersistenceUserManager.create(this, ee),
                    this._resolvePersistenceManagerAvailable?.(),
                    !this._deleted)) {
                    if (this._popupRedirectResolver?._shouldInitProactively)
                        try {
                            await this._popupRedirectResolver._initialize(this)
                        } catch { }
                    await this.initializeCurrentUser(te),
                        this.lastNotifiedUid = this.currentUser?.uid || null,
                        !this._deleted && (this._isInitialized = !0)
                }
            }
            ),
            this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        const ee = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !ee)) {
            if (this.currentUser && ee && this.currentUser.uid === ee.uid) {
                this._currentUser._assign(ee),
                    await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(ee, !0)
        }
    }
    async initializeCurrentUserFromIdToken(ee) {
        try {
            const te = await getAccountInfo(this, {
                idToken: ee
            })
                , re = await UserImpl._fromGetAccountInfoResponse(this, te, ee);
            await this.directlySetCurrentUser(re)
        } catch (te) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", te),
                await this.directlySetCurrentUser(null)
        }
    }
    async initializeCurrentUser(ee) {
        if (_isFirebaseServerApp(this.app)) {
            const se = this.app.settings.authIdToken;
            return se ? new Promise(ae => {
                setTimeout(() => this.initializeCurrentUserFromIdToken(se).then(ae, ae))
            }
            ) : this.directlySetCurrentUser(null)
        }
        const te = await this.assertedPersistence.getCurrentUser();
        let re = te
            , ie = !1;
        if (ee && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const se = this.redirectUser?._redirectEventId
                , ae = re?._redirectEventId
                , ce = await this.tryRedirectSignIn(ee);
            (!se || se === ae) && ce?.user && (re = ce.user,
                ie = !0)
        }
        if (!re)
            return this.directlySetCurrentUser(null);
        if (!re._redirectEventId) {
            if (ie)
                try {
                    await this.beforeStateQueue.runMiddleware(re)
                } catch (se) {
                    re = te,
                        this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(se))
                }
            return re ? this.reloadAndSetCurrentUserOrClear(re) : this.directlySetCurrentUser(null)
        }
        return _assert(this._popupRedirectResolver, this, "argument-error"),
            await this.getOrInitRedirectPersistenceManager(),
            this.redirectUser && this.redirectUser._redirectEventId === re._redirectEventId ? this.directlySetCurrentUser(re) : this.reloadAndSetCurrentUserOrClear(re)
    }
    async tryRedirectSignIn(ee) {
        let te = null;
        try {
            te = await this._popupRedirectResolver._completeRedirectFn(this, ee, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return te
    }
    async reloadAndSetCurrentUserOrClear(ee) {
        try {
            await _reloadWithoutSaving(ee)
        } catch (te) {
            if (te?.code !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(ee)
    }
    useDeviceLanguage() {
        this.languageCode = _getUserLanguage()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(ee) {
        if (_isFirebaseServerApp(this.app))
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
        const te = ee ? getModularInstance(ee) : null;
        return te && _assert(te.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
            this._updateCurrentUser(te && te._clone(this))
    }
    async _updateCurrentUser(ee, te = !1) {
        if (!this._deleted)
            return ee && _assert(this.tenantId === ee.tenantId, this, "tenant-id-mismatch"),
                te || await this.beforeStateQueue.runMiddleware(ee),
                this.queue(async () => {
                    await this.directlySetCurrentUser(ee),
                        this.notifyAuthListeners()
                }
                )
    }
    async signOut() {
        return _isFirebaseServerApp(this.app) ? Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)) : (await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
            this._updateCurrentUser(null, !0))
    }
    setPersistence(ee) {
        return _isFirebaseServerApp(this.app) ? Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)) : this.queue(async () => {
            await this.assertedPersistence.setPersistence(_getInstance(ee))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(ee) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const te = this._getPasswordPolicyInternal();
        return te.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : te.validatePassword(ee)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const ee = await _getPasswordPolicy(this)
            , te = new PasswordPolicyImpl(ee);
        this.tenantId === null ? this._projectPasswordPolicy = te : this._tenantPasswordPolicies[this.tenantId] = te
    }
    _getPersistenceType() {
        return this.assertedPersistence.persistence.type
    }
    _getPersistence() {
        return this.assertedPersistence.persistence
    }
    _updateErrorMap(ee) {
        this._errorFactory = new ErrorFactory("auth", "Firebase", ee())
    }
    onAuthStateChanged(ee, te, re) {
        return this.registerStateListener(this.authStateSubscription, ee, te, re)
    }
    beforeAuthStateChanged(ee, te) {
        return this.beforeStateQueue.pushCallback(ee, te)
    }
    onIdTokenChanged(ee, te, re) {
        return this.registerStateListener(this.idTokenSubscription, ee, te, re)
    }
    authStateReady() {
        return new Promise((ee, te) => {
            if (this.currentUser)
                ee();
            else {
                const re = this.onAuthStateChanged(() => {
                    re(),
                        ee()
                }
                    , te)
            }
        }
        )
    }
    async revokeAccessToken(ee) {
        if (this.currentUser) {
            const te = await this.currentUser.getIdToken()
                , re = {
                    providerId: "apple.com",
                    tokenType: "ACCESS_TOKEN",
                    token: ee,
                    idToken: te
                };
            this.tenantId != null && (re.tenantId = this.tenantId),
                await revokeToken(this, re)
        }
    }
    toJSON() {
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: this._currentUser?.toJSON()
        }
    }
    async _setRedirectUser(ee, te) {
        const re = await this.getOrInitRedirectPersistenceManager(te);
        return ee === null ? re.removeCurrentUser() : re.setCurrentUser(ee)
    }
    async getOrInitRedirectPersistenceManager(ee) {
        if (!this.redirectPersistenceManager) {
            const te = ee && _getInstance(ee) || this._popupRedirectResolver;
            _assert(te, this, "argument-error"),
                this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(te._redirectPersistence)], "redirectUser"),
                this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(ee) {
        return this._isInitialized && await this.queue(async () => { }
        ),
            this._currentUser?._redirectEventId === ee ? this._currentUser : this.redirectUser?._redirectEventId === ee ? this.redirectUser : null
    }
    async _persistUserIfCurrent(ee) {
        if (ee === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(ee))
    }
    _notifyListenersIfCurrent(ee) {
        ee === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
            this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
            this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        const ee = this.currentUser?.uid ?? null;
        this.lastNotifiedUid !== ee && (this.lastNotifiedUid = ee,
            this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(ee, te, re, ie) {
        if (this._deleted)
            return () => { }
                ;
        const se = typeof te == "function" ? te : te.next.bind(te);
        let ae = !1;
        const ce = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (_assert(ce, this, "internal-error"),
            ce.then(() => {
                ae || se(this.currentUser)
            }
            ),
            typeof te == "function") {
            const le = ee.addObserver(te, re, ie);
            return () => {
                ae = !0,
                    le()
            }
        } else {
            const le = ee.addObserver(te);
            return () => {
                ae = !0,
                    le()
            }
        }
    }
    async directlySetCurrentUser(ee) {
        this.currentUser && this.currentUser !== ee && this._currentUser._stopProactiveRefresh(),
            ee && this.isProactiveRefreshEnabled && ee._startProactiveRefresh(),
            this.currentUser = ee,
            ee ? await this.assertedPersistence.setCurrentUser(ee) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(ee) {
        return this.operations = this.operations.then(ee, ee),
            this.operations
    }
    get assertedPersistence() {
        return _assert(this.persistenceManager, this, "internal-error"),
            this.persistenceManager
    }
    _logFramework(ee) {
        !ee || this.frameworks.includes(ee) || (this.frameworks.push(ee),
            this.frameworks.sort(),
            this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        const ee = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (ee["X-Firebase-gmpid"] = this.app.options.appId);
        const te = await this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })?.getHeartbeatsHeader();
        te && (ee["X-Firebase-Client"] = te);
        const re = await this._getAppCheckToken();
        return re && (ee["X-Firebase-AppCheck"] = re),
            ee
    }
    async _getAppCheckToken() {
        if (_isFirebaseServerApp(this.app) && this.app.settings.appCheckToken)
            return this.app.settings.appCheckToken;
        const ee = await this.appCheckServiceProvider.getImmediate({
            optional: !0
        })?.getToken();
        return ee?.error && _logWarn(`Error while retrieving App Check token: ${ee.error}`),
            ee?.token
    }
}
function _castAuth(ne) {
    return getModularInstance(ne)
}
class Subscription {
    constructor(ee) {
        this.auth = ee,
            this.observer = null,
            this.addObserver = createSubscribe(te => this.observer = te)
    }
    get next() {
        return _assert(this.observer, this.auth, "internal-error"),
            this.observer.next.bind(this.observer)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let externalJSProvider = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function _setExternalJSProvider(ne) {
    externalJSProvider = ne
}
function _loadJS(ne) {
    return externalJSProvider.loadJS(ne)
}
function _recaptchaEnterpriseScriptUrl() {
    return externalJSProvider.recaptchaEnterpriseScript
}
function _gapiScriptUrl() {
    return externalJSProvider.gapiScript
}
function _generateCallbackName(ne) {
    return `__${ne}${Math.floor(Math.random() * 1e6)}`
}
class MockGreCAPTCHATopLevel {
    constructor() {
        this.enterprise = new MockGreCAPTCHA
    }
    ready(ee) {
        ee()
    }
    execute(ee, te) {
        return Promise.resolve("token")
    }
    render(ee, te) {
        return ""
    }
}
class MockGreCAPTCHA {
    ready(ee) {
        ee()
    }
    execute(ee, te) {
        return Promise.resolve("token")
    }
    render(ee, te) {
        return ""
    }
}
const RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise"
    , FAKE_TOKEN = "NO_RECAPTCHA";
class RecaptchaEnterpriseVerifier {
    constructor(ee) {
        this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE,
            this.auth = _castAuth(ee)
    }
    async verify(ee = "verify", te = !1) {
        async function re(se) {
            if (!te) {
                if (se.tenantId == null && se._agentRecaptchaConfig != null)
                    return se._agentRecaptchaConfig.siteKey;
                if (se.tenantId != null && se._tenantRecaptchaConfigs[se.tenantId] !== void 0)
                    return se._tenantRecaptchaConfigs[se.tenantId].siteKey
            }
            return new Promise(async (ae, ce) => {
                getRecaptchaConfig(se, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                }).then(le => {
                    if (le.recaptchaKey === void 0)
                        ce(new Error("recaptcha Enterprise site key undefined"));
                    else {
                        const he = new RecaptchaConfig(le);
                        return se.tenantId == null ? se._agentRecaptchaConfig = he : se._tenantRecaptchaConfigs[se.tenantId] = he,
                            ae(he.siteKey)
                    }
                }
                ).catch(le => {
                    ce(le)
                }
                )
            }
            )
        }
        function ie(se, ae, ce) {
            const le = window.grecaptcha;
            isEnterprise(le) ? le.enterprise.ready(() => {
                le.enterprise.execute(se, {
                    action: ee
                }).then(he => {
                    ae(he)
                }
                ).catch(() => {
                    ae(FAKE_TOKEN)
                }
                )
            }
            ) : ce(Error("No reCAPTCHA enterprise script loaded."))
        }
        return this.auth.settings.appVerificationDisabledForTesting ? new MockGreCAPTCHATopLevel().execute("siteKey", {
            action: "verify"
        }) : new Promise((se, ae) => {
            re(this.auth).then(ce => {
                if (!te && isEnterprise(window.grecaptcha))
                    ie(ce, se, ae);
                else {
                    if (typeof window > "u") {
                        ae(new Error("RecaptchaVerifier is only supported in browser"));
                        return
                    }
                    let le = _recaptchaEnterpriseScriptUrl();
                    le.length !== 0 && (le += ce),
                        _loadJS(le).then(() => {
                            ie(ce, se, ae)
                        }
                        ).catch(he => {
                            ae(he)
                        }
                        )
                }
            }
            ).catch(ce => {
                ae(ce)
            }
            )
        }
        )
    }
}
async function injectRecaptchaFields(ne, ee, te, re = !1, ie = !1) {
    const se = new RecaptchaEnterpriseVerifier(ne);
    let ae;
    if (ie)
        ae = FAKE_TOKEN;
    else
        try {
            ae = await se.verify(te)
        } catch {
            ae = await se.verify(te, !0)
        }
    const ce = {
        ...ee
    };
    if (te === "mfaSmsEnrollment" || te === "mfaSmsSignIn") {
        if ("phoneEnrollmentInfo" in ce) {
            const le = ce.phoneEnrollmentInfo.phoneNumber
                , he = ce.phoneEnrollmentInfo.recaptchaToken;
            Object.assign(ce, {
                phoneEnrollmentInfo: {
                    phoneNumber: le,
                    recaptchaToken: he,
                    captchaResponse: ae,
                    clientType: "CLIENT_TYPE_WEB",
                    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                }
            })
        } else if ("phoneSignInInfo" in ce) {
            const le = ce.phoneSignInInfo.recaptchaToken;
            Object.assign(ce, {
                phoneSignInInfo: {
                    recaptchaToken: le,
                    captchaResponse: ae,
                    clientType: "CLIENT_TYPE_WEB",
                    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                }
            })
        }
        return ce
    }
    return re ? Object.assign(ce, {
        captchaResp: ae
    }) : Object.assign(ce, {
        captchaResponse: ae
    }),
        Object.assign(ce, {
            clientType: "CLIENT_TYPE_WEB"
        }),
        Object.assign(ce, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
        }),
        ce
}
async function handleRecaptchaFlow(ne, ee, te, re, ie) {
    if (ne._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
        const se = await injectRecaptchaFields(ne, ee, te, te === "getOobCode");
        return re(ne, se)
    } else
        return re(ne, ee).catch(async se => {
            if (se.code === "auth/missing-recaptcha-token") {
                console.log(`${te} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
                const ae = await injectRecaptchaFields(ne, ee, te, te === "getOobCode");
                return re(ne, ae)
            } else
                return Promise.reject(se)
        }
        )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function initializeAuth(ne, ee) {
    const te = _getProvider(ne, "auth");
    if (te.isInitialized()) {
        const ie = te.getImmediate()
            , se = te.getOptions();
        if (deepEqual(se, ee ?? {}))
            return ie;
        _fail(ie, "already-initialized")
    }
    return te.initialize({
        options: ee
    })
}
function _initializeAuthInstance(ne, ee) {
    const te = ee?.persistence || []
        , re = (Array.isArray(te) ? te : [te]).map(_getInstance);
    ee?.errorMap && ne._updateErrorMap(ee.errorMap),
        ne._initializeWithPersistence(re, ee?.popupRedirectResolver)
}
function connectAuthEmulator(ne, ee, te) {
    const re = _castAuth(ne);
    _assert(/^https?:\/\//.test(ee), re, "invalid-emulator-scheme");
    const ie = !!te?.disableWarnings
        , se = extractProtocol(ee)
        , { host: ae, port: ce } = extractHostAndPort(ee)
        , le = ce === null ? "" : `:${ce}`
        , he = {
            url: `${se}//${ae}${le}/`
        }
        , de = Object.freeze({
            host: ae,
            port: ce,
            protocol: se.replace(":", ""),
            options: Object.freeze({
                disableWarnings: ie
            })
        });
    if (!re._canInitEmulator) {
        _assert(re.config.emulator && re.emulatorConfig, re, "emulator-config-failed"),
            _assert(deepEqual(he, re.config.emulator) && deepEqual(de, re.emulatorConfig), re, "emulator-config-failed");
        return
    }
    re.config.emulator = he,
        re.emulatorConfig = de,
        re.settings.appVerificationDisabledForTesting = !0,
        isCloudWorkstation(ae) ? pingServer(`${se}//${ae}${le}`) : ie || emitEmulatorWarning()
}
function extractProtocol(ne) {
    const ee = ne.indexOf(":");
    return ee < 0 ? "" : ne.substr(0, ee + 1)
}
function extractHostAndPort(ne) {
    const ee = extractProtocol(ne)
        , te = /(\/\/)?([^?#/]+)/.exec(ne.substr(ee.length));
    if (!te)
        return {
            host: "",
            port: null
        };
    const re = te[2].split("@").pop() || ""
        , ie = /^(\[[^\]]+\])(:|$)/.exec(re);
    if (ie) {
        const se = ie[1];
        return {
            host: se,
            port: parsePort(re.substr(se.length + 1))
        }
    } else {
        const [se, ae] = re.split(":");
        return {
            host: se,
            port: parsePort(ae)
        }
    }
}
function parsePort(ne) {
    if (!ne)
        return null;
    const ee = Number(ne);
    return isNaN(ee) ? null : ee
}
function emitEmulatorWarning() {
    function ne() {
        const ee = document.createElement("p")
            , te = ee.style;
        ee.innerText = "Running in emulator mode. Do not use with production credentials.",
            te.position = "fixed",
            te.width = "100%",
            te.backgroundColor = "#ffffff",
            te.border = ".1em solid #000000",
            te.color = "#b50000",
            te.bottom = "0px",
            te.left = "0px",
            te.margin = "0px",
            te.zIndex = "10000",
            te.textAlign = "center",
            ee.classList.add("firebase-emulator-warning"),
            document.body.appendChild(ee)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
        typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", ne) : ne())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthCredential {
    constructor(ee, te) {
        this.providerId = ee,
            this.signInMethod = te
    }
    toJSON() {
        return debugFail("not implemented")
    }
    _getIdTokenResponse(ee) {
        return debugFail("not implemented")
    }
    _linkToIdToken(ee, te) {
        return debugFail("not implemented")
    }
    _getReauthenticationResolver(ee) {
        return debugFail("not implemented")
    }
}
async function linkEmailPassword(ne, ee) {
    return _performApiRequest(ne, "POST", "/v1/accounts:signUp", ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithPassword(ne, ee) {
    return _performSignInRequest(ne, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(ne, ee))
}
async function sendOobCode(ne, ee) {
    return _performApiRequest(ne, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(ne, ee))
}
async function sendSignInLinkToEmail$1(ne, ee) {
    return sendOobCode(ne, ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithEmailLink$1(ne, ee) {
    return _performSignInRequest(ne, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(ne, ee))
}
async function signInWithEmailLinkForLinking(ne, ee) {
    return _performSignInRequest(ne, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(ne, ee))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EmailAuthCredential extends AuthCredential {
    constructor(ee, te, re, ie = null) {
        super("password", re),
            this._email = ee,
            this._password = te,
            this._tenantId = ie
    }
    static _fromEmailAndPassword(ee, te) {
        return new EmailAuthCredential(ee, te, "password")
    }
    static _fromEmailAndCode(ee, te, re = null) {
        return new EmailAuthCredential(ee, te, "emailLink", re)
    }
    toJSON() {
        return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
        }
    }
    static fromJSON(ee) {
        const te = typeof ee == "string" ? JSON.parse(ee) : ee;
        if (te?.email && te?.password) {
            if (te.signInMethod === "password")
                return this._fromEmailAndPassword(te.email, te.password);
            if (te.signInMethod === "emailLink")
                return this._fromEmailAndCode(te.email, te.password, te.tenantId)
        }
        return null
    }
    async _getIdTokenResponse(ee) {
        switch (this.signInMethod) {
            case "password":
                const te = {
                    returnSecureToken: !0,
                    email: this._email,
                    password: this._password,
                    clientType: "CLIENT_TYPE_WEB"
                };
                return handleRecaptchaFlow(ee, te, "signInWithPassword", signInWithPassword);
            case "emailLink":
                return signInWithEmailLink$1(ee, {
                    email: this._email,
                    oobCode: this._password
                });
            default:
                _fail(ee, "internal-error")
        }
    }
    async _linkToIdToken(ee, te) {
        switch (this.signInMethod) {
            case "password":
                const re = {
                    idToken: te,
                    returnSecureToken: !0,
                    email: this._email,
                    password: this._password,
                    clientType: "CLIENT_TYPE_WEB"
                };
                return handleRecaptchaFlow(ee, re, "signUpPassword", linkEmailPassword);
            case "emailLink":
                return signInWithEmailLinkForLinking(ee, {
                    idToken: te,
                    email: this._email,
                    oobCode: this._password
                });
            default:
                _fail(ee, "internal-error")
        }
    }
    _getReauthenticationResolver(ee) {
        return this._getIdTokenResponse(ee)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithIdp(ne, ee) {
    return _performSignInRequest(ne, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(ne, ee))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IDP_REQUEST_URI$1 = "http://localhost";
class OAuthCredential extends AuthCredential {
    constructor() {
        super(...arguments),
            this.pendingToken = null
    }
    static _fromParams(ee) {
        const te = new OAuthCredential(ee.providerId, ee.signInMethod);
        return ee.idToken || ee.accessToken ? (ee.idToken && (te.idToken = ee.idToken),
            ee.accessToken && (te.accessToken = ee.accessToken),
            ee.nonce && !ee.pendingToken && (te.nonce = ee.nonce),
            ee.pendingToken && (te.pendingToken = ee.pendingToken)) : ee.oauthToken && ee.oauthTokenSecret ? (te.accessToken = ee.oauthToken,
                te.secret = ee.oauthTokenSecret) : _fail("argument-error"),
            te
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(ee) {
        const te = typeof ee == "string" ? JSON.parse(ee) : ee
            , { providerId: re, signInMethod: ie, ...se } = te;
        if (!re || !ie)
            return null;
        const ae = new OAuthCredential(re, ie);
        return ae.idToken = se.idToken || void 0,
            ae.accessToken = se.accessToken || void 0,
            ae.secret = se.secret,
            ae.nonce = se.nonce,
            ae.pendingToken = se.pendingToken || null,
            ae
    }
    _getIdTokenResponse(ee) {
        const te = this.buildRequest();
        return signInWithIdp(ee, te)
    }
    _linkToIdToken(ee, te) {
        const re = this.buildRequest();
        return re.idToken = te,
            signInWithIdp(ee, re)
    }
    _getReauthenticationResolver(ee) {
        const te = this.buildRequest();
        return te.autoCreate = !1,
            signInWithIdp(ee, te)
    }
    buildRequest() {
        const ee = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            ee.pendingToken = this.pendingToken;
        else {
            const te = {};
            this.idToken && (te.id_token = this.idToken),
                this.accessToken && (te.access_token = this.accessToken),
                this.secret && (te.oauth_token_secret = this.secret),
                te.providerId = this.providerId,
                this.nonce && !this.pendingToken && (te.nonce = this.nonce),
                ee.postBody = querystring(te)
        }
        return ee
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function parseMode(ne) {
    switch (ne) {
        case "recoverEmail":
            return "RECOVER_EMAIL";
        case "resetPassword":
            return "PASSWORD_RESET";
        case "signIn":
            return "EMAIL_SIGNIN";
        case "verifyEmail":
            return "VERIFY_EMAIL";
        case "verifyAndChangeEmail":
            return "VERIFY_AND_CHANGE_EMAIL";
        case "revertSecondFactorAddition":
            return "REVERT_SECOND_FACTOR_ADDITION";
        default:
            return null
    }
}
function parseDeepLink(ne) {
    const ee = querystringDecode(extractQuerystring(ne)).link
        , te = ee ? querystringDecode(extractQuerystring(ee)).deep_link_id : null
        , re = querystringDecode(extractQuerystring(ne)).deep_link_id;
    return (re ? querystringDecode(extractQuerystring(re)).link : null) || re || te || ee || ne
}
class ActionCodeURL {
    constructor(ee) {
        const te = querystringDecode(extractQuerystring(ee))
            , re = te.apiKey ?? null
            , ie = te.oobCode ?? null
            , se = parseMode(te.mode ?? null);
        _assert(re && ie && se, "argument-error"),
            this.apiKey = re,
            this.operation = se,
            this.code = ie,
            this.continueUrl = te.continueUrl ?? null,
            this.languageCode = te.lang ?? null,
            this.tenantId = te.tenantId ?? null
    }
    static parseLink(ee) {
        const te = parseDeepLink(ee);
        try {
            return new ActionCodeURL(te)
        } catch {
            return null
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EmailAuthProvider {
    constructor() {
        this.providerId = EmailAuthProvider.PROVIDER_ID
    }
    static credential(ee, te) {
        return EmailAuthCredential._fromEmailAndPassword(ee, te)
    }
    static credentialWithLink(ee, te) {
        const re = ActionCodeURL.parseLink(te);
        return _assert(re, "argument-error"),
            EmailAuthCredential._fromEmailAndCode(ee, re.code, re.tenantId)
    }
}
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FederatedAuthProvider {
    constructor(ee) {
        this.providerId = ee,
            this.defaultLanguageCode = null,
            this.customParameters = {}
    }
    setDefaultLanguage(ee) {
        this.defaultLanguageCode = ee
    }
    setCustomParameters(ee) {
        return this.customParameters = ee,
            this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BaseOAuthProvider extends FederatedAuthProvider {
    constructor() {
        super(...arguments),
            this.scopes = []
    }
    addScope(ee) {
        return this.scopes.includes(ee) || this.scopes.push(ee),
            this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FacebookAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("facebook.com")
    }
    static credential(ee) {
        return OAuthCredential._fromParams({
            providerId: FacebookAuthProvider.PROVIDER_ID,
            signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken: ee
        })
    }
    static credentialFromResult(ee) {
        return FacebookAuthProvider.credentialFromTaggedObject(ee)
    }
    static credentialFromError(ee) {
        return FacebookAuthProvider.credentialFromTaggedObject(ee.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: ee }) {
        if (!ee || !("oauthAccessToken" in ee) || !ee.oauthAccessToken)
            return null;
        try {
            return FacebookAuthProvider.credential(ee.oauthAccessToken)
        } catch {
            return null
        }
    }
}
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GoogleAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("google.com"),
            this.addScope("profile")
    }
    static credential(ee, te) {
        return OAuthCredential._fromParams({
            providerId: GoogleAuthProvider.PROVIDER_ID,
            signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken: ee,
            accessToken: te
        })
    }
    static credentialFromResult(ee) {
        return GoogleAuthProvider.credentialFromTaggedObject(ee)
    }
    static credentialFromError(ee) {
        return GoogleAuthProvider.credentialFromTaggedObject(ee.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: ee }) {
        if (!ee)
            return null;
        const { oauthIdToken: te, oauthAccessToken: re } = ee;
        if (!te && !re)
            return null;
        try {
            return GoogleAuthProvider.credential(te, re)
        } catch {
            return null
        }
    }
}
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GithubAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("github.com")
    }
    static credential(ee) {
        return OAuthCredential._fromParams({
            providerId: GithubAuthProvider.PROVIDER_ID,
            signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken: ee
        })
    }
    static credentialFromResult(ee) {
        return GithubAuthProvider.credentialFromTaggedObject(ee)
    }
    static credentialFromError(ee) {
        return GithubAuthProvider.credentialFromTaggedObject(ee.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: ee }) {
        if (!ee || !("oauthAccessToken" in ee) || !ee.oauthAccessToken)
            return null;
        try {
            return GithubAuthProvider.credential(ee.oauthAccessToken)
        } catch {
            return null
        }
    }
}
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TwitterAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("twitter.com")
    }
    static credential(ee, te) {
        return OAuthCredential._fromParams({
            providerId: TwitterAuthProvider.PROVIDER_ID,
            signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: ee,
            oauthTokenSecret: te
        })
    }
    static credentialFromResult(ee) {
        return TwitterAuthProvider.credentialFromTaggedObject(ee)
    }
    static credentialFromError(ee) {
        return TwitterAuthProvider.credentialFromTaggedObject(ee.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: ee }) {
        if (!ee)
            return null;
        const { oauthAccessToken: te, oauthTokenSecret: re } = ee;
        if (!te || !re)
            return null;
        try {
            return TwitterAuthProvider.credential(te, re)
        } catch {
            return null
        }
    }
}
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UserCredentialImpl {
    constructor(ee) {
        this.user = ee.user,
            this.providerId = ee.providerId,
            this._tokenResponse = ee._tokenResponse,
            this.operationType = ee.operationType
    }
    static async _fromIdTokenResponse(ee, te, re, ie = !1) {
        const se = await UserImpl._fromIdTokenResponse(ee, re, ie)
            , ae = providerIdForResponse(re);
        return new UserCredentialImpl({
            user: se,
            providerId: ae,
            _tokenResponse: re,
            operationType: te
        })
    }
    static async _forOperation(ee, te, re) {
        await ee._updateTokensIfNecessary(re, !0);
        const ie = providerIdForResponse(re);
        return new UserCredentialImpl({
            user: ee,
            providerId: ie,
            _tokenResponse: re,
            operationType: te
        })
    }
}
function providerIdForResponse(ne) {
    return ne.providerId ? ne.providerId : "phoneNumber" in ne ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MultiFactorError extends FirebaseError {
    constructor(ee, te, re, ie) {
        super(te.code, te.message),
            this.operationType = re,
            this.user = ie,
            Object.setPrototypeOf(this, MultiFactorError.prototype),
            this.customData = {
                appName: ee.name,
                tenantId: ee.tenantId ?? void 0,
                _serverResponse: te.customData._serverResponse,
                operationType: re
            }
    }
    static _fromErrorAndOperation(ee, te, re, ie) {
        return new MultiFactorError(ee, te, re, ie)
    }
}
function _processCredentialSavingMfaContextIfNecessary(ne, ee, te, re) {
    return (ee === "reauthenticate" ? te._getReauthenticationResolver(ne) : te._getIdTokenResponse(ne)).catch(se => {
        throw se.code === "auth/multi-factor-auth-required" ? MultiFactorError._fromErrorAndOperation(ne, se, ee, re) : se
    }
    )
}
async function _link$1(ne, ee, te = !1) {
    const re = await _logoutIfInvalidated(ne, ee._linkToIdToken(ne.auth, await ne.getIdToken()), te);
    return UserCredentialImpl._forOperation(ne, "link", re)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _reauthenticate(ne, ee, te = !1) {
    const { auth: re } = ne;
    if (_isFirebaseServerApp(re.app))
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(re));
    const ie = "reauthenticate";
    try {
        const se = await _logoutIfInvalidated(ne, _processCredentialSavingMfaContextIfNecessary(re, ie, ee, ne), te);
        _assert(se.idToken, re, "internal-error");
        const ae = _parseToken(se.idToken);
        _assert(ae, re, "internal-error");
        const { sub: ce } = ae;
        return _assert(ne.uid === ce, re, "user-mismatch"),
            UserCredentialImpl._forOperation(ne, ie, se)
    } catch (se) {
        throw se?.code === "auth/user-not-found" && _fail(re, "user-mismatch"),
        se
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _signInWithCredential(ne, ee, te = !1) {
    if (_isFirebaseServerApp(ne.app))
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(ne));
    const re = "signIn"
        , ie = await _processCredentialSavingMfaContextIfNecessary(ne, re, ee)
        , se = await UserCredentialImpl._fromIdTokenResponse(ne, re, ie);
    return te || await ne._updateCurrentUser(se.user),
        se
}
async function signInWithCredential(ne, ee) {
    return _signInWithCredential(_castAuth(ne), ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithCustomToken$1(ne, ee) {
    return _performSignInRequest(ne, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(ne, ee))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithCustomToken(ne, ee) {
    if (_isFirebaseServerApp(ne.app))
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(ne));
    const te = _castAuth(ne)
        , re = await signInWithCustomToken$1(te, {
            token: ee,
            returnSecureToken: !0
        })
        , ie = await UserCredentialImpl._fromIdTokenResponse(te, "signIn", re);
    return await te._updateCurrentUser(ie.user),
        ie
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _setActionCodeSettingsOnRequest(ne, ee, te) {
    _assert(te.url?.length > 0, ne, "invalid-continue-uri"),
        _assert(typeof te.dynamicLinkDomain > "u" || te.dynamicLinkDomain.length > 0, ne, "invalid-dynamic-link-domain"),
        _assert(typeof te.linkDomain > "u" || te.linkDomain.length > 0, ne, "invalid-hosting-link-domain"),
        ee.continueUrl = te.url,
        ee.dynamicLinkDomain = te.dynamicLinkDomain,
        ee.linkDomain = te.linkDomain,
        ee.canHandleCodeInApp = te.handleCodeInApp,
        te.iOS && (_assert(te.iOS.bundleId.length > 0, ne, "missing-ios-bundle-id"),
            ee.iOSBundleId = te.iOS.bundleId),
        te.android && (_assert(te.android.packageName.length > 0, ne, "missing-android-pkg-name"),
            ee.androidInstallApp = te.android.installApp,
            ee.androidMinimumVersionCode = te.android.minimumVersion,
            ee.androidPackageName = te.android.packageName)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function sendSignInLinkToEmail(ne, ee, te) {
    const re = _castAuth(ne)
        , ie = {
            requestType: "EMAIL_SIGNIN",
            email: ee,
            clientType: "CLIENT_TYPE_WEB"
        };
    function se(ae, ce) {
        _assert(ce.handleCodeInApp, re, "argument-error"),
            ce && _setActionCodeSettingsOnRequest(re, ae, ce)
    }
    se(ie, te),
        await handleRecaptchaFlow(re, ie, "getOobCode", sendSignInLinkToEmail$1)
}
function isSignInWithEmailLink(ne, ee) {
    return ActionCodeURL.parseLink(ee)?.operation === "EMAIL_SIGNIN"
}
async function signInWithEmailLink(ne, ee, te) {
    if (_isFirebaseServerApp(ne.app))
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(ne));
    const re = getModularInstance(ne)
        , ie = EmailAuthProvider.credentialWithLink(ee, te || _getCurrentUrl());
    return _assert(ie._tenantId === (re.tenantId || null), re, "tenant-id-mismatch"),
        signInWithCredential(re, ie)
}
function onIdTokenChanged(ne, ee, te, re) {
    return getModularInstance(ne).onIdTokenChanged(ee, te, re)
}
function beforeAuthStateChanged(ne, ee, te) {
    return getModularInstance(ne).beforeAuthStateChanged(ee, te)
}
function onAuthStateChanged(ne, ee, te, re) {
    return getModularInstance(ne).onAuthStateChanged(ee, te, re)
}
function signOut(ne) {
    return getModularInstance(ne).signOut()
}
const STORAGE_AVAILABLE_KEY = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BrowserPersistenceClass {
    constructor(ee, te) {
        this.storageRetriever = ee,
            this.type = te
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(STORAGE_AVAILABLE_KEY, "1"),
                this.storage.removeItem(STORAGE_AVAILABLE_KEY),
                Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(ee, te) {
        return this.storage.setItem(ee, JSON.stringify(te)),
            Promise.resolve()
    }
    _get(ee) {
        const te = this.storage.getItem(ee);
        return Promise.resolve(te ? JSON.parse(te) : null)
    }
    _remove(ee) {
        return this.storage.removeItem(ee),
            Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _POLLING_INTERVAL_MS$1 = 1e3
    , IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
class BrowserLocalPersistence extends BrowserPersistenceClass {
    constructor() {
        super(() => window.localStorage, "LOCAL"),
            this.boundEventHandler = (ee, te) => this.onStorageEvent(ee, te),
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.fallbackToPolling = _isMobileBrowser(),
            this._shouldAllowMigration = !0
    }
    forAllChangedKeys(ee) {
        for (const te of Object.keys(this.listeners)) {
            const re = this.storage.getItem(te)
                , ie = this.localCache[te];
            re !== ie && ee(te, ie, re)
        }
    }
    onStorageEvent(ee, te = !1) {
        if (!ee.key) {
            this.forAllChangedKeys((ae, ce, le) => {
                this.notifyListeners(ae, le)
            }
            );
            return
        }
        const re = ee.key;
        te ? this.detachListener() : this.stopPolling();
        const ie = () => {
            const ae = this.storage.getItem(re);
            !te && this.localCache[re] === ae || this.notifyListeners(re, ae)
        }
            , se = this.storage.getItem(re);
        _isIE10() && se !== ee.newValue && ee.newValue !== ee.oldValue ? setTimeout(ie, IE10_LOCAL_STORAGE_SYNC_DELAY) : ie()
    }
    notifyListeners(ee, te) {
        this.localCache[ee] = te;
        const re = this.listeners[ee];
        if (re)
            for (const ie of Array.from(re))
                ie(te && JSON.parse(te))
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(() => {
                this.forAllChangedKeys((ee, te, re) => {
                    this.onStorageEvent(new StorageEvent("storage", {
                        key: ee,
                        oldValue: te,
                        newValue: re
                    }), !0)
                }
                )
            }
                , _POLLING_INTERVAL_MS$1)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(ee, te) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
            this.listeners[ee] || (this.listeners[ee] = new Set,
                this.localCache[ee] = this.storage.getItem(ee)),
            this.listeners[ee].add(te)
    }
    _removeListener(ee, te) {
        this.listeners[ee] && (this.listeners[ee].delete(te),
            this.listeners[ee].size === 0 && delete this.listeners[ee]),
            Object.keys(this.listeners).length === 0 && (this.detachListener(),
                this.stopPolling())
    }
    async _set(ee, te) {
        await super._set(ee, te),
            this.localCache[ee] = JSON.stringify(te)
    }
    async _get(ee) {
        const te = await super._get(ee);
        return this.localCache[ee] = JSON.stringify(te),
            te
    }
    async _remove(ee) {
        await super._remove(ee),
            delete this.localCache[ee]
    }
}
BrowserLocalPersistence.type = "LOCAL";
const browserLocalPersistence = BrowserLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BrowserSessionPersistence extends BrowserPersistenceClass {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(ee, te) { }
    _removeListener(ee, te) { }
}
BrowserSessionPersistence.type = "SESSION";
const browserSessionPersistence = BrowserSessionPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _allSettled(ne) {
    return Promise.all(ne.map(async ee => {
        try {
            return {
                fulfilled: !0,
                value: await ee
            }
        } catch (te) {
            return {
                fulfilled: !1,
                reason: te
            }
        }
    }
    ))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Receiver {
    constructor(ee) {
        this.eventTarget = ee,
            this.handlersMap = {},
            this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(ee) {
        const te = this.receivers.find(ie => ie.isListeningto(ee));
        if (te)
            return te;
        const re = new Receiver(ee);
        return this.receivers.push(re),
            re
    }
    isListeningto(ee) {
        return this.eventTarget === ee
    }
    async handleEvent(ee) {
        const te = ee
            , { eventId: re, eventType: ie, data: se } = te.data
            , ae = this.handlersMap[ie];
        if (!ae?.size)
            return;
        te.ports[0].postMessage({
            status: "ack",
            eventId: re,
            eventType: ie
        });
        const ce = Array.from(ae).map(async he => he(te.origin, se))
            , le = await _allSettled(ce);
        te.ports[0].postMessage({
            status: "done",
            eventId: re,
            eventType: ie,
            response: le
        })
    }
    _subscribe(ee, te) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
            this.handlersMap[ee] || (this.handlersMap[ee] = new Set),
            this.handlersMap[ee].add(te)
    }
    _unsubscribe(ee, te) {
        this.handlersMap[ee] && te && this.handlersMap[ee].delete(te),
            (!te || this.handlersMap[ee].size === 0) && delete this.handlersMap[ee],
            Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
Receiver.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _generateEventId(ne = "", ee = 10) {
    let te = "";
    for (let re = 0; re < ee; re++)
        te += Math.floor(Math.random() * 10);
    return ne + te
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sender {
    constructor(ee) {
        this.target = ee,
            this.handlers = new Set
    }
    removeMessageHandler(ee) {
        ee.messageChannel && (ee.messageChannel.port1.removeEventListener("message", ee.onMessage),
            ee.messageChannel.port1.close()),
            this.handlers.delete(ee)
    }
    async _send(ee, te, re = 50) {
        const ie = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!ie)
            throw new Error("connection_unavailable");
        let se, ae;
        return new Promise((ce, le) => {
            const he = _generateEventId("", 20);
            ie.port1.start();
            const de = setTimeout(() => {
                le(new Error("unsupported_event"))
            }
                , re);
            ae = {
                messageChannel: ie,
                onMessage(fe) {
                    const Re = fe;
                    if (Re.data.eventId === he)
                        switch (Re.data.status) {
                            case "ack":
                                clearTimeout(de),
                                    se = setTimeout(() => {
                                        le(new Error("timeout"))
                                    }
                                        , 3e3);
                                break;
                            case "done":
                                clearTimeout(se),
                                    ce(Re.data.response);
                                break;
                            default:
                                clearTimeout(de),
                                    clearTimeout(se),
                                    le(new Error("invalid_response"));
                                break
                        }
                }
            },
                this.handlers.add(ae),
                ie.port1.addEventListener("message", ae.onMessage),
                this.target.postMessage({
                    eventType: ee,
                    eventId: he,
                    data: te
                }, [ie.port2])
        }
        ).finally(() => {
            ae && this.removeMessageHandler(ae)
        }
        )
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _window() {
    return window
}
function _setWindowLocation(ne) {
    _window().location.href = ne
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _isWorker() {
    return typeof _window().WorkerGlobalScope < "u" && typeof _window().importScripts == "function"
}
async function _getActiveServiceWorker() {
    if (!navigator?.serviceWorker)
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function _getServiceWorkerController() {
    return navigator?.serviceWorker?.controller || null
}
function _getWorkerGlobalScope() {
    return _isWorker() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = "firebaseLocalStorageDb"
    , DB_VERSION = 1
    , DB_OBJECTSTORE_NAME = "firebaseLocalStorage"
    , DB_DATA_KEYPATH = "fbase_key";
class DBPromise {
    constructor(ee) {
        this.request = ee
    }
    toPromise() {
        return new Promise((ee, te) => {
            this.request.addEventListener("success", () => {
                ee(this.request.result)
            }
            ),
                this.request.addEventListener("error", () => {
                    te(this.request.error)
                }
                )
        }
        )
    }
}
function getObjectStore(ne, ee) {
    return ne.transaction([DB_OBJECTSTORE_NAME], ee ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME)
}
function _deleteDatabase() {
    const ne = indexedDB.deleteDatabase(DB_NAME);
    return new DBPromise(ne).toPromise()
}
function _openDatabase() {
    const ne = indexedDB.open(DB_NAME, DB_VERSION);
    return new Promise((ee, te) => {
        ne.addEventListener("error", () => {
            te(ne.error)
        }
        ),
            ne.addEventListener("upgradeneeded", () => {
                const re = ne.result;
                try {
                    re.createObjectStore(DB_OBJECTSTORE_NAME, {
                        keyPath: DB_DATA_KEYPATH
                    })
                } catch (ie) {
                    te(ie)
                }
            }
            ),
            ne.addEventListener("success", async () => {
                const re = ne.result;
                re.objectStoreNames.contains(DB_OBJECTSTORE_NAME) ? ee(re) : (re.close(),
                    await _deleteDatabase(),
                    ee(await _openDatabase()))
            }
            )
    }
    )
}
async function _putObject(ne, ee, te) {
    const re = getObjectStore(ne, !0).put({
        [DB_DATA_KEYPATH]: ee,
        value: te
    });
    return new DBPromise(re).toPromise()
}
async function getObject(ne, ee) {
    const te = getObjectStore(ne, !1).get(ee)
        , re = await new DBPromise(te).toPromise();
    return re === void 0 ? null : re.value
}
function _deleteObject(ne, ee) {
    const te = getObjectStore(ne, !0).delete(ee);
    return new DBPromise(te).toPromise()
}
const _POLLING_INTERVAL_MS = 800
    , _TRANSACTION_RETRY_COUNT = 3;
class IndexedDBLocalPersistence {
    constructor() {
        this.type = "LOCAL",
            this._shouldAllowMigration = !0,
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.pendingWrites = 0,
            this.receiver = null,
            this.sender = null,
            this.serviceWorkerReceiverAvailable = !1,
            this.activeServiceWorker = null,
            this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => { }
                , () => { }
            )
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await _openDatabase(),
            this.db)
    }
    async _withRetries(ee) {
        let te = 0;
        for (; ;)
            try {
                const re = await this._openDb();
                return await ee(re)
            } catch (re) {
                if (te++ > _TRANSACTION_RETRY_COUNT)
                    throw re;
                this.db && (this.db.close(),
                    this.db = void 0)
            }
    }
    async initializeServiceWorkerMessaging() {
        return _isWorker() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = Receiver._getInstance(_getWorkerGlobalScope()),
            this.receiver._subscribe("keyChanged", async (ee, te) => ({
                keyProcessed: (await this._poll()).includes(te.key)
            })),
            this.receiver._subscribe("ping", async (ee, te) => ["keyChanged"])
    }
    async initializeSender() {
        if (this.activeServiceWorker = await _getActiveServiceWorker(),
            !this.activeServiceWorker)
            return;
        this.sender = new Sender(this.activeServiceWorker);
        const ee = await this.sender._send("ping", {}, 800);
        ee && ee[0]?.fulfilled && ee[0]?.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(ee) {
        if (!(!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: ee
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch { }
    }
    async _isAvailable() {
        try {
            if (!indexedDB)
                return !1;
            const ee = await _openDatabase();
            return await _putObject(ee, STORAGE_AVAILABLE_KEY, "1"),
                await _deleteObject(ee, STORAGE_AVAILABLE_KEY),
                !0
        } catch { }
        return !1
    }
    async _withPendingWrite(ee) {
        this.pendingWrites++;
        try {
            await ee()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(ee, te) {
        return this._withPendingWrite(async () => (await this._withRetries(re => _putObject(re, ee, te)),
            this.localCache[ee] = te,
            this.notifyServiceWorker(ee)))
    }
    async _get(ee) {
        const te = await this._withRetries(re => getObject(re, ee));
        return this.localCache[ee] = te,
            te
    }
    async _remove(ee) {
        return this._withPendingWrite(async () => (await this._withRetries(te => _deleteObject(te, ee)),
            delete this.localCache[ee],
            this.notifyServiceWorker(ee)))
    }
    async _poll() {
        const ee = await this._withRetries(ie => {
            const se = getObjectStore(ie, !1).getAll();
            return new DBPromise(se).toPromise()
        }
        );
        if (!ee)
            return [];
        if (this.pendingWrites !== 0)
            return [];
        const te = []
            , re = new Set;
        if (ee.length !== 0)
            for (const { fbase_key: ie, value: se } of ee)
                re.add(ie),
                    JSON.stringify(this.localCache[ie]) !== JSON.stringify(se) && (this.notifyListeners(ie, se),
                        te.push(ie));
        for (const ie of Object.keys(this.localCache))
            this.localCache[ie] && !re.has(ie) && (this.notifyListeners(ie, null),
                te.push(ie));
        return te
    }
    notifyListeners(ee, te) {
        this.localCache[ee] = te;
        const re = this.listeners[ee];
        if (re)
            for (const ie of Array.from(re))
                ie(te)
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    _addListener(ee, te) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
            this.listeners[ee] || (this.listeners[ee] = new Set,
                this._get(ee)),
            this.listeners[ee].add(te)
    }
    _removeListener(ee, te) {
        this.listeners[ee] && (this.listeners[ee].delete(te),
            this.listeners[ee].size === 0 && delete this.listeners[ee]),
            Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
IndexedDBLocalPersistence.type = "LOCAL";
const indexedDBLocalPersistence = IndexedDBLocalPersistence;
new Delay(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _withDefaultResolver(ne, ee) {
    return ee ? _getInstance(ee) : (_assert(ne._popupRedirectResolver, ne, "argument-error"),
        ne._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IdpCredential extends AuthCredential {
    constructor(ee) {
        super("custom", "custom"),
            this.params = ee
    }
    _getIdTokenResponse(ee) {
        return signInWithIdp(ee, this._buildIdpRequest())
    }
    _linkToIdToken(ee, te) {
        return signInWithIdp(ee, this._buildIdpRequest(te))
    }
    _getReauthenticationResolver(ee) {
        return signInWithIdp(ee, this._buildIdpRequest())
    }
    _buildIdpRequest(ee) {
        const te = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return ee && (te.idToken = ee),
            te
    }
}
function _signIn(ne) {
    return _signInWithCredential(ne.auth, new IdpCredential(ne), ne.bypassAuthState)
}
function _reauth(ne) {
    const { auth: ee, user: te } = ne;
    return _assert(te, ee, "internal-error"),
        _reauthenticate(te, new IdpCredential(ne), ne.bypassAuthState)
}
async function _link(ne) {
    const { auth: ee, user: te } = ne;
    return _assert(te, ee, "internal-error"),
        _link$1(te, new IdpCredential(ne), ne.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AbstractPopupRedirectOperation {
    constructor(ee, te, re, ie, se = !1) {
        this.auth = ee,
            this.resolver = re,
            this.user = ie,
            this.bypassAuthState = se,
            this.pendingPromise = null,
            this.eventManager = null,
            this.filter = Array.isArray(te) ? te : [te]
    }
    execute() {
        return new Promise(async (ee, te) => {
            this.pendingPromise = {
                resolve: ee,
                reject: te
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                    await this.onExecution(),
                    this.eventManager.registerConsumer(this)
            } catch (re) {
                this.reject(re)
            }
        }
        )
    }
    async onAuthEvent(ee) {
        const { urlResponse: te, sessionId: re, postBody: ie, tenantId: se, error: ae, type: ce } = ee;
        if (ae) {
            this.reject(ae);
            return
        }
        const le = {
            auth: this.auth,
            requestUri: te,
            sessionId: re,
            tenantId: se || void 0,
            postBody: ie || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(ce)(le))
        } catch (he) {
            this.reject(he)
        }
    }
    onError(ee) {
        this.reject(ee)
    }
    getIdpTask(ee) {
        switch (ee) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return _signIn;
            case "linkViaPopup":
            case "linkViaRedirect":
                return _link;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return _reauth;
            default:
                _fail(this.auth, "internal-error")
        }
    }
    resolve(ee) {
        debugAssert(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.resolve(ee),
            this.unregisterAndCleanUp()
    }
    reject(ee) {
        debugAssert(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.reject(ee),
            this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
            this.pendingPromise = null,
            this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(ne, ee, te) {
    if (_isFirebaseServerApp(ne.app))
        return Promise.reject(_createError(ne, "operation-not-supported-in-this-environment"));
    const re = _castAuth(ne);
    _assertInstanceOf(ne, ee, FederatedAuthProvider);
    const ie = _withDefaultResolver(re, te);
    return new PopupOperation(re, "signInViaPopup", ee, ie).executeNotNull()
}
class PopupOperation extends AbstractPopupRedirectOperation {
    constructor(ee, te, re, ie, se) {
        super(ee, te, ie, se),
            this.provider = re,
            this.authWindow = null,
            this.pollId = null,
            PopupOperation.currentPopupAction && PopupOperation.currentPopupAction.cancel(),
            PopupOperation.currentPopupAction = this
    }
    async executeNotNull() {
        const ee = await this.execute();
        return _assert(ee, this.auth, "internal-error"),
            ee
    }
    async onExecution() {
        debugAssert(this.filter.length === 1, "Popup operations only handle one event");
        const ee = _generateEventId();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], ee),
            this.authWindow.associatedEvent = ee,
            this.resolver._originValidation(this.auth).catch(te => {
                this.reject(te)
            }
            ),
            this.resolver._isIframeWebStorageSupported(this.auth, te => {
                te || this.reject(_createError(this.auth, "web-storage-unsupported"))
            }
            ),
            this.pollUserCancellation()
    }
    get eventId() {
        return this.authWindow?.associatedEvent || null
    }
    cancel() {
        this.reject(_createError(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
            this.pollId && window.clearTimeout(this.pollId),
            this.authWindow = null,
            this.pollId = null,
            PopupOperation.currentPopupAction = null
    }
    pollUserCancellation() {
        const ee = () => {
            if (this.authWindow?.window?.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null,
                        this.reject(_createError(this.auth, "popup-closed-by-user"))
                }
                    , 8e3);
                return
            }
            this.pollId = window.setTimeout(ee, _POLL_WINDOW_CLOSE_TIMEOUT.get())
        }
            ;
        ee()
    }
}
PopupOperation.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_REDIRECT_KEY = "pendingRedirect"
    , redirectOutcomeMap = new Map;
class RedirectAction extends AbstractPopupRedirectOperation {
    constructor(ee, te, re = !1) {
        super(ee, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], te, void 0, re),
            this.eventId = null
    }
    async execute() {
        let ee = redirectOutcomeMap.get(this.auth._key());
        if (!ee) {
            try {
                const re = await _getAndClearPendingRedirectStatus(this.resolver, this.auth) ? await super.execute() : null;
                ee = () => Promise.resolve(re)
            } catch (te) {
                ee = () => Promise.reject(te)
            }
            redirectOutcomeMap.set(this.auth._key(), ee)
        }
        return this.bypassAuthState || redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null)),
            ee()
    }
    async onAuthEvent(ee) {
        if (ee.type === "signInViaRedirect")
            return super.onAuthEvent(ee);
        if (ee.type === "unknown") {
            this.resolve(null);
            return
        }
        if (ee.eventId) {
            const te = await this.auth._redirectUserForId(ee.eventId);
            if (te)
                return this.user = te,
                    super.onAuthEvent(ee);
            this.resolve(null)
        }
    }
    async onExecution() { }
    cleanUp() { }
}
async function _getAndClearPendingRedirectStatus(ne, ee) {
    const te = pendingRedirectKey(ee)
        , re = resolverPersistence(ne);
    if (!await re._isAvailable())
        return !1;
    const ie = await re._get(te) === "true";
    return await re._remove(te),
        ie
}
async function _setPendingRedirectStatus(ne, ee) {
    return resolverPersistence(ne)._set(pendingRedirectKey(ee), "true")
}
function _overrideRedirectResult(ne, ee) {
    redirectOutcomeMap.set(ne._key(), ee)
}
function resolverPersistence(ne) {
    return _getInstance(ne._redirectPersistence)
}
function pendingRedirectKey(ne) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, ne.config.apiKey, ne.name)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function signInWithRedirect(ne, ee, te) {
    return _signInWithRedirect(ne, ee, te)
}
async function _signInWithRedirect(ne, ee, te) {
    if (_isFirebaseServerApp(ne.app))
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(ne));
    const re = _castAuth(ne);
    _assertInstanceOf(ne, ee, FederatedAuthProvider),
        await re._initializationPromise;
    const ie = _withDefaultResolver(re, te);
    return await _setPendingRedirectStatus(ie, re),
        ie._openRedirect(re, ee, "signInViaRedirect")
}
async function _getRedirectResult(ne, ee, te = !1) {
    if (_isFirebaseServerApp(ne.app))
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(ne));
    const re = _castAuth(ne)
        , ie = _withDefaultResolver(re, ee)
        , ae = await new RedirectAction(re, ie, te).execute();
    return ae && !te && (delete ae.user._redirectEventId,
        await re._persistUserIfCurrent(ae.user),
        await re._setRedirectUser(null, ee)),
        ae
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
class AuthEventManager {
    constructor(ee) {
        this.auth = ee,
            this.cachedEventUids = new Set,
            this.consumers = new Set,
            this.queuedRedirectEvent = null,
            this.hasHandledPotentialRedirect = !1,
            this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(ee) {
        this.consumers.add(ee),
            this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, ee) && (this.sendToConsumer(this.queuedRedirectEvent, ee),
                this.saveEventToCache(this.queuedRedirectEvent),
                this.queuedRedirectEvent = null)
    }
    unregisterConsumer(ee) {
        this.consumers.delete(ee)
    }
    onEvent(ee) {
        if (this.hasEventBeenHandled(ee))
            return !1;
        let te = !1;
        return this.consumers.forEach(re => {
            this.isEventForConsumer(ee, re) && (te = !0,
                this.sendToConsumer(ee, re),
                this.saveEventToCache(ee))
        }
        ),
            this.hasHandledPotentialRedirect || !isRedirectEvent(ee) || (this.hasHandledPotentialRedirect = !0,
                te || (this.queuedRedirectEvent = ee,
                    te = !0)),
            te
    }
    sendToConsumer(ee, te) {
        if (ee.error && !isNullRedirectEvent(ee)) {
            const re = ee.error.code?.split("auth/")[1] || "internal-error";
            te.onError(_createError(this.auth, re))
        } else
            te.onAuthEvent(ee)
    }
    isEventForConsumer(ee, te) {
        const re = te.eventId === null || !!ee.eventId && ee.eventId === te.eventId;
        return te.filter.includes(ee.type) && re
    }
    hasEventBeenHandled(ee) {
        return Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS && this.cachedEventUids.clear(),
            this.cachedEventUids.has(eventUid(ee))
    }
    saveEventToCache(ee) {
        this.cachedEventUids.add(eventUid(ee)),
            this.lastProcessedEventTime = Date.now()
    }
}
function eventUid(ne) {
    return [ne.type, ne.eventId, ne.sessionId, ne.tenantId].filter(ee => ee).join("-")
}
function isNullRedirectEvent({ type: ne, error: ee }) {
    return ne === "unknown" && ee?.code === "auth/no-auth-event"
}
function isRedirectEvent(ne) {
    switch (ne.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return isNullRedirectEvent(ne);
        default:
            return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _getProjectConfig(ne, ee = {}) {
    return _performApiRequest(ne, "GET", "/v1/projects", ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    , HTTP_REGEX = /^https?/;
async function _validateOrigin(ne) {
    if (ne.config.emulator)
        return;
    const { authorizedDomains: ee } = await _getProjectConfig(ne);
    for (const te of ee)
        try {
            if (matchDomain(te))
                return
        } catch { }
    _fail(ne, "unauthorized-domain")
}
function matchDomain(ne) {
    const ee = _getCurrentUrl()
        , { protocol: te, hostname: re } = new URL(ee);
    if (ne.startsWith("chrome-extension://")) {
        const ae = new URL(ne);
        return ae.hostname === "" && re === "" ? te === "chrome-extension:" && ne.replace("chrome-extension://", "") === ee.replace("chrome-extension://", "") : te === "chrome-extension:" && ae.hostname === re
    }
    if (!HTTP_REGEX.test(te))
        return !1;
    if (IP_ADDRESS_REGEX.test(ne))
        return re === ne;
    const ie = ne.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + ie + "|" + ie + ")$", "i").test(re)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
    const ne = _window().___jsl;
    if (ne?.H) {
        for (const ee of Object.keys(ne.H))
            if (ne.H[ee].r = ne.H[ee].r || [],
                ne.H[ee].L = ne.H[ee].L || [],
                ne.H[ee].r = [...ne.H[ee].L],
                ne.CP)
                for (let te = 0; te < ne.CP.length; te++)
                    ne.CP[te] = null
    }
}
function loadGapi(ne) {
    return new Promise((ee, te) => {
        function re() {
            resetUnloadedGapiModules(),
                gapi.load("gapi.iframes", {
                    callback: () => {
                        ee(gapi.iframes.getContext())
                    }
                    ,
                    ontimeout: () => {
                        resetUnloadedGapiModules(),
                            te(_createError(ne, "network-request-failed"))
                    }
                    ,
                    timeout: NETWORK_TIMEOUT.get()
                })
        }
        if (_window().gapi?.iframes?.Iframe)
            ee(gapi.iframes.getContext());
        else if (_window().gapi?.load)
            re();
        else {
            const ie = _generateCallbackName("iframefcb");
            return _window()[ie] = () => {
                gapi.load ? re() : te(_createError(ne, "network-request-failed"))
            }
                ,
                _loadJS(`${_gapiScriptUrl()}?onload=${ie}`).catch(se => te(se))
        }
    }
    ).catch(ee => {
        throw cachedGApiLoader = null,
        ee
    }
    )
}
let cachedGApiLoader = null;
function _loadGapi(ne) {
    return cachedGApiLoader = cachedGApiLoader || loadGapi(ne),
        cachedGApiLoader
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PING_TIMEOUT = new Delay(5e3, 15e3)
    , IFRAME_PATH = "__/auth/iframe"
    , EMULATED_IFRAME_PATH = "emulator/auth/iframe"
    , IFRAME_ATTRIBUTES = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    }
    , EID_FROM_APIHOST = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function getIframeUrl(ne) {
    const ee = ne.config;
    _assert(ee.authDomain, ne, "auth-domain-config-required");
    const te = ee.emulator ? _emulatorUrl(ee, EMULATED_IFRAME_PATH) : `https://${ne.config.authDomain}/${IFRAME_PATH}`
        , re = {
            apiKey: ee.apiKey,
            appName: ne.name,
            v: SDK_VERSION
        }
        , ie = EID_FROM_APIHOST.get(ne.config.apiHost);
    ie && (re.eid = ie);
    const se = ne._getFrameworks();
    return se.length && (re.fw = se.join(",")),
        `${te}?${querystring(re).slice(1)}`
}
async function _openIframe(ne) {
    const ee = await _loadGapi(ne)
        , te = _window().gapi;
    return _assert(te, ne, "internal-error"),
        ee.open({
            where: document.body,
            url: getIframeUrl(ne),
            messageHandlersFilter: te.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: IFRAME_ATTRIBUTES,
            dontclear: !0
        }, re => new Promise(async (ie, se) => {
            await re.restyle({
                setHideOnLeave: !1
            });
            const ae = _createError(ne, "network-request-failed")
                , ce = _window().setTimeout(() => {
                    se(ae)
                }
                    , PING_TIMEOUT.get());
            function le() {
                _window().clearTimeout(ce),
                    ie(re)
            }
            re.ping(le).then(le, () => {
                se(ae)
            }
            )
        }
        ))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_POPUP_OPTIONS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
    , DEFAULT_WIDTH = 500
    , DEFAULT_HEIGHT = 600
    , TARGET_BLANK = "_blank"
    , FIREFOX_EMPTY_URL = "http://localhost";
class AuthPopup {
    constructor(ee) {
        this.window = ee,
            this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch { }
    }
}
function _open(ne, ee, te, re = DEFAULT_WIDTH, ie = DEFAULT_HEIGHT) {
    const se = Math.max((window.screen.availHeight - ie) / 2, 0).toString()
        , ae = Math.max((window.screen.availWidth - re) / 2, 0).toString();
    let ce = "";
    const le = {
        ...BASE_POPUP_OPTIONS,
        width: re.toString(),
        height: ie.toString(),
        top: se,
        left: ae
    }
        , he = getUA().toLowerCase();
    te && (ce = _isChromeIOS(he) ? TARGET_BLANK : te),
        _isFirefox(he) && (ee = ee || FIREFOX_EMPTY_URL,
            le.scrollbars = "yes");
    const de = Object.entries(le).reduce((Re, [Pe, we]) => `${Re}${Pe}=${we},`, "");
    if (_isIOSStandalone(he) && ce !== "_self")
        return openAsNewWindowIOS(ee || "", ce),
            new AuthPopup(null);
    const fe = window.open(ee || "", ce, de);
    _assert(fe, ne, "popup-blocked");
    try {
        fe.focus()
    } catch { }
    return new AuthPopup(fe)
}
function openAsNewWindowIOS(ne, ee) {
    const te = document.createElement("a");
    te.href = ne,
        te.target = ee;
    const re = document.createEvent("MouseEvent");
    re.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
        te.dispatchEvent(re)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WIDGET_PATH = "__/auth/handler"
    , EMULATOR_WIDGET_PATH = "emulator/auth/handler"
    , FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(ne, ee, te, re, ie, se) {
    _assert(ne.config.authDomain, ne, "auth-domain-config-required"),
        _assert(ne.config.apiKey, ne, "invalid-api-key");
    const ae = {
        apiKey: ne.config.apiKey,
        appName: ne.name,
        authType: te,
        redirectUrl: re,
        v: SDK_VERSION,
        eventId: ie
    };
    if (ee instanceof FederatedAuthProvider) {
        ee.setDefaultLanguage(ne.languageCode),
            ae.providerId = ee.providerId || "",
            isEmpty$1(ee.getCustomParameters()) || (ae.customParameters = JSON.stringify(ee.getCustomParameters()));
        for (const [de, fe] of Object.entries({}))
            ae[de] = fe
    }
    if (ee instanceof BaseOAuthProvider) {
        const de = ee.getScopes().filter(fe => fe !== "");
        de.length > 0 && (ae.scopes = de.join(","))
    }
    ne.tenantId && (ae.tid = ne.tenantId);
    const ce = ae;
    for (const de of Object.keys(ce))
        ce[de] === void 0 && delete ce[de];
    const le = await ne._getAppCheckToken()
        , he = le ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(le)}` : "";
    return `${getHandlerBase(ne)}?${querystring(ce).slice(1)}${he}`
}
function getHandlerBase({ config: ne }) {
    return ne.emulator ? _emulatorUrl(ne, EMULATOR_WIDGET_PATH) : `https://${ne.authDomain}/${WIDGET_PATH}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
class BrowserPopupRedirectResolver {
    constructor() {
        this.eventManagers = {},
            this.iframes = {},
            this.originValidationPromises = {},
            this._redirectPersistence = browserSessionPersistence,
            this._completeRedirectFn = _getRedirectResult,
            this._overrideRedirectResult = _overrideRedirectResult
    }
    async _openPopup(ee, te, re, ie) {
        debugAssert(this.eventManagers[ee._key()]?.manager, "_initialize() not called before _openPopup()");
        const se = await _getRedirectUrl(ee, te, re, _getCurrentUrl(), ie);
        return _open(ee, se, _generateEventId())
    }
    async _openRedirect(ee, te, re, ie) {
        await this._originValidation(ee);
        const se = await _getRedirectUrl(ee, te, re, _getCurrentUrl(), ie);
        return _setWindowLocation(se),
            new Promise(() => { }
            )
    }
    _initialize(ee) {
        const te = ee._key();
        if (this.eventManagers[te]) {
            const { manager: ie, promise: se } = this.eventManagers[te];
            return ie ? Promise.resolve(ie) : (debugAssert(se, "If manager is not set, promise should be"),
                se)
        }
        const re = this.initAndGetManager(ee);
        return this.eventManagers[te] = {
            promise: re
        },
            re.catch(() => {
                delete this.eventManagers[te]
            }
            ),
            re
    }
    async initAndGetManager(ee) {
        const te = await _openIframe(ee)
            , re = new AuthEventManager(ee);
        return te.register("authEvent", ie => (_assert(ie?.authEvent, ee, "invalid-auth-event"),
        {
            status: re.onEvent(ie.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
            this.eventManagers[ee._key()] = {
                manager: re
            },
            this.iframes[ee._key()] = te,
            re
    }
    _isIframeWebStorageSupported(ee, te) {
        this.iframes[ee._key()].send(WEB_STORAGE_SUPPORT_KEY, {
            type: WEB_STORAGE_SUPPORT_KEY
        }, ie => {
            const se = ie?.[0]?.[WEB_STORAGE_SUPPORT_KEY];
            se !== void 0 && te(!!se),
                _fail(ee, "internal-error")
        }
            , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(ee) {
        const te = ee._key();
        return this.originValidationPromises[te] || (this.originValidationPromises[te] = _validateOrigin(ee)),
            this.originValidationPromises[te]
    }
    get _shouldInitProactively() {
        return _isMobileBrowser() || _isSafari() || _isIOS()
    }
}
const browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var name$2 = "@firebase/auth"
    , version$2 = "1.12.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthInterop {
    constructor(ee) {
        this.auth = ee,
            this.internalListeners = new Map
    }
    getUid() {
        return this.assertAuthConfigured(),
            this.auth.currentUser?.uid || null
    }
    async getToken(ee) {
        return this.assertAuthConfigured(),
            await this.auth._initializationPromise,
            this.auth.currentUser ? {
                accessToken: await this.auth.currentUser.getIdToken(ee)
            } : null
    }
    addAuthTokenListener(ee) {
        if (this.assertAuthConfigured(),
            this.internalListeners.has(ee))
            return;
        const te = this.auth.onIdTokenChanged(re => {
            ee(re?.stsTokenManager.accessToken || null)
        }
        );
        this.internalListeners.set(ee, te),
            this.updateProactiveRefresh()
    }
    removeAuthTokenListener(ee) {
        this.assertAuthConfigured();
        const te = this.internalListeners.get(ee);
        te && (this.internalListeners.delete(ee),
            te(),
            this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getVersionForPlatform(ne) {
    switch (ne) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        case "WebExtension":
            return "web-extension";
        default:
            return
    }
}
function registerAuth(ne) {
    _registerComponent(new Component("auth", (ee, { options: te }) => {
        const re = ee.getProvider("app").getImmediate()
            , ie = ee.getProvider("heartbeat")
            , se = ee.getProvider("app-check-internal")
            , { apiKey: ae, authDomain: ce } = re.options;
        _assert(ae && !ae.includes(":"), "invalid-api-key", {
            appName: re.name
        });
        const le = {
            apiKey: ae,
            authDomain: ce,
            clientPlatform: ne,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: _getClientVersion(ne)
        }
            , he = new AuthImpl(re, ie, se, le);
        return _initializeAuthInstance(he, te),
            he
    }
        , "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((ee, te, re) => {
            ee.getProvider("auth-internal").initialize()
        }
        )),
        _registerComponent(new Component("auth-internal", ee => {
            const te = _castAuth(ee.getProvider("auth").getImmediate());
            return (re => new AuthInterop(re))(te)
        }
            , "PRIVATE").setInstantiationMode("EXPLICIT")),
        registerVersion(name$2, version$2, getVersionForPlatform(ne)),
        registerVersion(name$2, version$2, "esm2020")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60
    , authIdTokenMaxAge = getExperimentalSetting("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
let lastPostedIdToken = null;
const mintCookieFactory = ne => async ee => {
    const te = ee && await ee.getIdTokenResult()
        , re = te && (new Date().getTime() - Date.parse(te.issuedAtTime)) / 1e3;
    if (re && re > authIdTokenMaxAge)
        return;
    const ie = te?.token;
    lastPostedIdToken !== ie && (lastPostedIdToken = ie,
        await fetch(ne, {
            method: ie ? "POST" : "DELETE",
            headers: ie ? {
                Authorization: `Bearer ${ie}`
            } : {}
        }))
}
    ;
function getAuth(ne = getApp()) {
    const ee = _getProvider(ne, "auth");
    if (ee.isInitialized())
        return ee.getImmediate();
    const te = initializeAuth(ne, {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
    })
        , re = getExperimentalSetting("authTokenSyncURL");
    if (re && typeof isSecureContext == "boolean" && isSecureContext) {
        const se = new URL(re, location.origin);
        if (location.origin === se.origin) {
            const ae = mintCookieFactory(se.toString());
            beforeAuthStateChanged(te, ae, () => ae(te.currentUser)),
                onIdTokenChanged(te, ce => ae(ce))
        }
    }
    const ie = getDefaultEmulatorHost("auth");
    return ie && connectAuthEmulator(te, `http://${ie}`),
        te
}
function getScriptParentElement() {
    return document.getElementsByTagName("head")?.[0] ?? document
}
_setExternalJSProvider({
    loadJS(ne) {
        return new Promise((ee, te) => {
            const re = document.createElement("script");
            re.setAttribute("src", ne),
                re.onload = ee,
                re.onerror = ie => {
                    const se = _createError("internal-error");
                    se.customData = ie,
                        te(se)
                }
                ,
                re.type = "text/javascript",
                re.charset = "UTF-8",
                getScriptParentElement().appendChild(re)
        }
        )
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
registerAuth("Browser");
var name$1 = "firebase"
    , version$1 = "12.11.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(name$1, version$1, "app");
var commonjsGlobal$1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var Integer, Md5;
(function () {
    var ne;
    /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    function ee(Ie, ge) {
        function Te() { }
        Te.prototype = ge.prototype,
            Ie.F = ge.prototype,
            Ie.prototype = new Te,
            Ie.prototype.constructor = Ie,
            Ie.D = function (Ae, ye, Ee) {
                for (var me = Array(arguments.length - 2), xe = 2; xe < arguments.length; xe++)
                    me[xe - 2] = arguments[xe];
                return ge.prototype[ye].apply(Ae, me)
            }
    }
    function te() {
        this.blockSize = -1
    }
    function re() {
        this.blockSize = -1,
            this.blockSize = 64,
            this.g = Array(4),
            this.C = Array(this.blockSize),
            this.o = this.h = 0,
            this.u()
    }
    ee(re, te),
        re.prototype.u = function () {
            this.g[0] = 1732584193,
                this.g[1] = 4023233417,
                this.g[2] = 2562383102,
                this.g[3] = 271733878,
                this.o = this.h = 0
        }
        ;
    function ie(Ie, ge, Te) {
        Te || (Te = 0);
        const Ae = Array(16);
        if (typeof ge == "string")
            for (var ye = 0; ye < 16; ++ye)
                Ae[ye] = ge.charCodeAt(Te++) | ge.charCodeAt(Te++) << 8 | ge.charCodeAt(Te++) << 16 | ge.charCodeAt(Te++) << 24;
        else
            for (ye = 0; ye < 16; ++ye)
                Ae[ye] = ge[Te++] | ge[Te++] << 8 | ge[Te++] << 16 | ge[Te++] << 24;
        ge = Ie.g[0],
            Te = Ie.g[1],
            ye = Ie.g[2];
        let Ee = Ie.g[3], me;
        me = ge + (Ee ^ Te & (ye ^ Ee)) + Ae[0] + 3614090360 & 4294967295,
            ge = Te + (me << 7 & 4294967295 | me >>> 25),
            me = Ee + (ye ^ ge & (Te ^ ye)) + Ae[1] + 3905402710 & 4294967295,
            Ee = ge + (me << 12 & 4294967295 | me >>> 20),
            me = ye + (Te ^ Ee & (ge ^ Te)) + Ae[2] + 606105819 & 4294967295,
            ye = Ee + (me << 17 & 4294967295 | me >>> 15),
            me = Te + (ge ^ ye & (Ee ^ ge)) + Ae[3] + 3250441966 & 4294967295,
            Te = ye + (me << 22 & 4294967295 | me >>> 10),
            me = ge + (Ee ^ Te & (ye ^ Ee)) + Ae[4] + 4118548399 & 4294967295,
            ge = Te + (me << 7 & 4294967295 | me >>> 25),
            me = Ee + (ye ^ ge & (Te ^ ye)) + Ae[5] + 1200080426 & 4294967295,
            Ee = ge + (me << 12 & 4294967295 | me >>> 20),
            me = ye + (Te ^ Ee & (ge ^ Te)) + Ae[6] + 2821735955 & 4294967295,
            ye = Ee + (me << 17 & 4294967295 | me >>> 15),
            me = Te + (ge ^ ye & (Ee ^ ge)) + Ae[7] + 4249261313 & 4294967295,
            Te = ye + (me << 22 & 4294967295 | me >>> 10),
            me = ge + (Ee ^ Te & (ye ^ Ee)) + Ae[8] + 1770035416 & 4294967295,
            ge = Te + (me << 7 & 4294967295 | me >>> 25),
            me = Ee + (ye ^ ge & (Te ^ ye)) + Ae[9] + 2336552879 & 4294967295,
            Ee = ge + (me << 12 & 4294967295 | me >>> 20),
            me = ye + (Te ^ Ee & (ge ^ Te)) + Ae[10] + 4294925233 & 4294967295,
            ye = Ee + (me << 17 & 4294967295 | me >>> 15),
            me = Te + (ge ^ ye & (Ee ^ ge)) + Ae[11] + 2304563134 & 4294967295,
            Te = ye + (me << 22 & 4294967295 | me >>> 10),
            me = ge + (Ee ^ Te & (ye ^ Ee)) + Ae[12] + 1804603682 & 4294967295,
            ge = Te + (me << 7 & 4294967295 | me >>> 25),
            me = Ee + (ye ^ ge & (Te ^ ye)) + Ae[13] + 4254626195 & 4294967295,
            Ee = ge + (me << 12 & 4294967295 | me >>> 20),
            me = ye + (Te ^ Ee & (ge ^ Te)) + Ae[14] + 2792965006 & 4294967295,
            ye = Ee + (me << 17 & 4294967295 | me >>> 15),
            me = Te + (ge ^ ye & (Ee ^ ge)) + Ae[15] + 1236535329 & 4294967295,
            Te = ye + (me << 22 & 4294967295 | me >>> 10),
            me = ge + (ye ^ Ee & (Te ^ ye)) + Ae[1] + 4129170786 & 4294967295,
            ge = Te + (me << 5 & 4294967295 | me >>> 27),
            me = Ee + (Te ^ ye & (ge ^ Te)) + Ae[6] + 3225465664 & 4294967295,
            Ee = ge + (me << 9 & 4294967295 | me >>> 23),
            me = ye + (ge ^ Te & (Ee ^ ge)) + Ae[11] + 643717713 & 4294967295,
            ye = Ee + (me << 14 & 4294967295 | me >>> 18),
            me = Te + (Ee ^ ge & (ye ^ Ee)) + Ae[0] + 3921069994 & 4294967295,
            Te = ye + (me << 20 & 4294967295 | me >>> 12),
            me = ge + (ye ^ Ee & (Te ^ ye)) + Ae[5] + 3593408605 & 4294967295,
            ge = Te + (me << 5 & 4294967295 | me >>> 27),
            me = Ee + (Te ^ ye & (ge ^ Te)) + Ae[10] + 38016083 & 4294967295,
            Ee = ge + (me << 9 & 4294967295 | me >>> 23),
            me = ye + (ge ^ Te & (Ee ^ ge)) + Ae[15] + 3634488961 & 4294967295,
            ye = Ee + (me << 14 & 4294967295 | me >>> 18),
            me = Te + (Ee ^ ge & (ye ^ Ee)) + Ae[4] + 3889429448 & 4294967295,
            Te = ye + (me << 20 & 4294967295 | me >>> 12),
            me = ge + (ye ^ Ee & (Te ^ ye)) + Ae[9] + 568446438 & 4294967295,
            ge = Te + (me << 5 & 4294967295 | me >>> 27),
            me = Ee + (Te ^ ye & (ge ^ Te)) + Ae[14] + 3275163606 & 4294967295,
            Ee = ge + (me << 9 & 4294967295 | me >>> 23),
            me = ye + (ge ^ Te & (Ee ^ ge)) + Ae[3] + 4107603335 & 4294967295,
            ye = Ee + (me << 14 & 4294967295 | me >>> 18),
            me = Te + (Ee ^ ge & (ye ^ Ee)) + Ae[8] + 1163531501 & 4294967295,
            Te = ye + (me << 20 & 4294967295 | me >>> 12),
            me = ge + (ye ^ Ee & (Te ^ ye)) + Ae[13] + 2850285829 & 4294967295,
            ge = Te + (me << 5 & 4294967295 | me >>> 27),
            me = Ee + (Te ^ ye & (ge ^ Te)) + Ae[2] + 4243563512 & 4294967295,
            Ee = ge + (me << 9 & 4294967295 | me >>> 23),
            me = ye + (ge ^ Te & (Ee ^ ge)) + Ae[7] + 1735328473 & 4294967295,
            ye = Ee + (me << 14 & 4294967295 | me >>> 18),
            me = Te + (Ee ^ ge & (ye ^ Ee)) + Ae[12] + 2368359562 & 4294967295,
            Te = ye + (me << 20 & 4294967295 | me >>> 12),
            me = ge + (Te ^ ye ^ Ee) + Ae[5] + 4294588738 & 4294967295,
            ge = Te + (me << 4 & 4294967295 | me >>> 28),
            me = Ee + (ge ^ Te ^ ye) + Ae[8] + 2272392833 & 4294967295,
            Ee = ge + (me << 11 & 4294967295 | me >>> 21),
            me = ye + (Ee ^ ge ^ Te) + Ae[11] + 1839030562 & 4294967295,
            ye = Ee + (me << 16 & 4294967295 | me >>> 16),
            me = Te + (ye ^ Ee ^ ge) + Ae[14] + 4259657740 & 4294967295,
            Te = ye + (me << 23 & 4294967295 | me >>> 9),
            me = ge + (Te ^ ye ^ Ee) + Ae[1] + 2763975236 & 4294967295,
            ge = Te + (me << 4 & 4294967295 | me >>> 28),
            me = Ee + (ge ^ Te ^ ye) + Ae[4] + 1272893353 & 4294967295,
            Ee = ge + (me << 11 & 4294967295 | me >>> 21),
            me = ye + (Ee ^ ge ^ Te) + Ae[7] + 4139469664 & 4294967295,
            ye = Ee + (me << 16 & 4294967295 | me >>> 16),
            me = Te + (ye ^ Ee ^ ge) + Ae[10] + 3200236656 & 4294967295,
            Te = ye + (me << 23 & 4294967295 | me >>> 9),
            me = ge + (Te ^ ye ^ Ee) + Ae[13] + 681279174 & 4294967295,
            ge = Te + (me << 4 & 4294967295 | me >>> 28),
            me = Ee + (ge ^ Te ^ ye) + Ae[0] + 3936430074 & 4294967295,
            Ee = ge + (me << 11 & 4294967295 | me >>> 21),
            me = ye + (Ee ^ ge ^ Te) + Ae[3] + 3572445317 & 4294967295,
            ye = Ee + (me << 16 & 4294967295 | me >>> 16),
            me = Te + (ye ^ Ee ^ ge) + Ae[6] + 76029189 & 4294967295,
            Te = ye + (me << 23 & 4294967295 | me >>> 9),
            me = ge + (Te ^ ye ^ Ee) + Ae[9] + 3654602809 & 4294967295,
            ge = Te + (me << 4 & 4294967295 | me >>> 28),
            me = Ee + (ge ^ Te ^ ye) + Ae[12] + 3873151461 & 4294967295,
            Ee = ge + (me << 11 & 4294967295 | me >>> 21),
            me = ye + (Ee ^ ge ^ Te) + Ae[15] + 530742520 & 4294967295,
            ye = Ee + (me << 16 & 4294967295 | me >>> 16),
            me = Te + (ye ^ Ee ^ ge) + Ae[2] + 3299628645 & 4294967295,
            Te = ye + (me << 23 & 4294967295 | me >>> 9),
            me = ge + (ye ^ (Te | ~Ee)) + Ae[0] + 4096336452 & 4294967295,
            ge = Te + (me << 6 & 4294967295 | me >>> 26),
            me = Ee + (Te ^ (ge | ~ye)) + Ae[7] + 1126891415 & 4294967295,
            Ee = ge + (me << 10 & 4294967295 | me >>> 22),
            me = ye + (ge ^ (Ee | ~Te)) + Ae[14] + 2878612391 & 4294967295,
            ye = Ee + (me << 15 & 4294967295 | me >>> 17),
            me = Te + (Ee ^ (ye | ~ge)) + Ae[5] + 4237533241 & 4294967295,
            Te = ye + (me << 21 & 4294967295 | me >>> 11),
            me = ge + (ye ^ (Te | ~Ee)) + Ae[12] + 1700485571 & 4294967295,
            ge = Te + (me << 6 & 4294967295 | me >>> 26),
            me = Ee + (Te ^ (ge | ~ye)) + Ae[3] + 2399980690 & 4294967295,
            Ee = ge + (me << 10 & 4294967295 | me >>> 22),
            me = ye + (ge ^ (Ee | ~Te)) + Ae[10] + 4293915773 & 4294967295,
            ye = Ee + (me << 15 & 4294967295 | me >>> 17),
            me = Te + (Ee ^ (ye | ~ge)) + Ae[1] + 2240044497 & 4294967295,
            Te = ye + (me << 21 & 4294967295 | me >>> 11),
            me = ge + (ye ^ (Te | ~Ee)) + Ae[8] + 1873313359 & 4294967295,
            ge = Te + (me << 6 & 4294967295 | me >>> 26),
            me = Ee + (Te ^ (ge | ~ye)) + Ae[15] + 4264355552 & 4294967295,
            Ee = ge + (me << 10 & 4294967295 | me >>> 22),
            me = ye + (ge ^ (Ee | ~Te)) + Ae[6] + 2734768916 & 4294967295,
            ye = Ee + (me << 15 & 4294967295 | me >>> 17),
            me = Te + (Ee ^ (ye | ~ge)) + Ae[13] + 1309151649 & 4294967295,
            Te = ye + (me << 21 & 4294967295 | me >>> 11),
            me = ge + (ye ^ (Te | ~Ee)) + Ae[4] + 4149444226 & 4294967295,
            ge = Te + (me << 6 & 4294967295 | me >>> 26),
            me = Ee + (Te ^ (ge | ~ye)) + Ae[11] + 3174756917 & 4294967295,
            Ee = ge + (me << 10 & 4294967295 | me >>> 22),
            me = ye + (ge ^ (Ee | ~Te)) + Ae[2] + 718787259 & 4294967295,
            ye = Ee + (me << 15 & 4294967295 | me >>> 17),
            me = Te + (Ee ^ (ye | ~ge)) + Ae[9] + 3951481745 & 4294967295,
            Ie.g[0] = Ie.g[0] + ge & 4294967295,
            Ie.g[1] = Ie.g[1] + (ye + (me << 21 & 4294967295 | me >>> 11)) & 4294967295,
            Ie.g[2] = Ie.g[2] + ye & 4294967295,
            Ie.g[3] = Ie.g[3] + Ee & 4294967295
    }
    re.prototype.v = function (Ie, ge) {
        ge === void 0 && (ge = Ie.length);
        const Te = ge - this.blockSize
            , Ae = this.C;
        let ye = this.h
            , Ee = 0;
        for (; Ee < ge;) {
            if (ye == 0)
                for (; Ee <= Te;)
                    ie(this, Ie, Ee),
                        Ee += this.blockSize;
            if (typeof Ie == "string") {
                for (; Ee < ge;)
                    if (Ae[ye++] = Ie.charCodeAt(Ee++),
                        ye == this.blockSize) {
                        ie(this, Ae),
                            ye = 0;
                        break
                    }
            } else
                for (; Ee < ge;)
                    if (Ae[ye++] = Ie[Ee++],
                        ye == this.blockSize) {
                        ie(this, Ae),
                            ye = 0;
                        break
                    }
        }
        this.h = ye,
            this.o += ge
    }
        ,
        re.prototype.A = function () {
            var Ie = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
            Ie[0] = 128;
            for (var ge = 1; ge < Ie.length - 8; ++ge)
                Ie[ge] = 0;
            ge = this.o * 8;
            for (var Te = Ie.length - 8; Te < Ie.length; ++Te)
                Ie[Te] = ge & 255,
                    ge /= 256;
            for (this.v(Ie),
                Ie = Array(16),
                ge = 0,
                Te = 0; Te < 4; ++Te)
                for (let Ae = 0; Ae < 32; Ae += 8)
                    Ie[ge++] = this.g[Te] >>> Ae & 255;
            return Ie
        }
        ;
    function se(Ie, ge) {
        var Te = ce;
        return Object.prototype.hasOwnProperty.call(Te, Ie) ? Te[Ie] : Te[Ie] = ge(Ie)
    }
    function ae(Ie, ge) {
        this.h = ge;
        const Te = [];
        let Ae = !0;
        for (let ye = Ie.length - 1; ye >= 0; ye--) {
            const Ee = Ie[ye] | 0;
            Ae && Ee == ge || (Te[ye] = Ee,
                Ae = !1)
        }
        this.g = Te
    }
    var ce = {};
    function le(Ie) {
        return -128 <= Ie && Ie < 128 ? se(Ie, function (ge) {
            return new ae([ge | 0], ge < 0 ? -1 : 0)
        }) : new ae([Ie | 0], Ie < 0 ? -1 : 0)
    }
    function he(Ie) {
        if (isNaN(Ie) || !isFinite(Ie))
            return fe;
        if (Ie < 0)
            return be(he(-Ie));
        const ge = [];
        let Te = 1;
        for (let Ae = 0; Ie >= Te; Ae++)
            ge[Ae] = Ie / Te | 0,
                Te *= 4294967296;
        return new ae(ge, 0)
    }
    function de(Ie, ge) {
        if (Ie.length == 0)
            throw Error("number format error: empty string");
        if (ge = ge || 10,
            ge < 2 || 36 < ge)
            throw Error("radix out of range: " + ge);
        if (Ie.charAt(0) == "-")
            return be(de(Ie.substring(1), ge));
        if (Ie.indexOf("-") >= 0)
            throw Error('number format error: interior "-" character');
        const Te = he(Math.pow(ge, 8));
        let Ae = fe;
        for (let Ee = 0; Ee < Ie.length; Ee += 8) {
            var ye = Math.min(8, Ie.length - Ee);
            const me = parseInt(Ie.substring(Ee, Ee + ye), ge);
            ye < 8 ? (ye = he(Math.pow(ge, ye)),
                Ae = Ae.j(ye).add(he(me))) : (Ae = Ae.j(Te),
                    Ae = Ae.add(he(me)))
        }
        return Ae
    }
    var fe = le(0)
        , Re = le(1)
        , Pe = le(16777216);
    ne = ae.prototype,
        ne.m = function () {
            if (Se(this))
                return -be(this).m();
            let Ie = 0
                , ge = 1;
            for (let Te = 0; Te < this.g.length; Te++) {
                const Ae = this.i(Te);
                Ie += (Ae >= 0 ? Ae : 4294967296 + Ae) * ge,
                    ge *= 4294967296
            }
            return Ie
        }
        ,
        ne.toString = function (Ie) {
            if (Ie = Ie || 10,
                Ie < 2 || 36 < Ie)
                throw Error("radix out of range: " + Ie);
            if (we(this))
                return "0";
            if (Se(this))
                return "-" + be(this).toString(Ie);
            const ge = he(Math.pow(Ie, 6));
            var Te = this;
            let Ae = "";
            for (; ;) {
                const ye = Ne(Te, ge).g;
                Te = De(Te, ye.j(ge));
                let Ee = ((Te.g.length > 0 ? Te.g[0] : Te.h) >>> 0).toString(Ie);
                if (Te = ye,
                    we(Te))
                    return Ee + Ae;
                for (; Ee.length < 6;)
                    Ee = "0" + Ee;
                Ae = Ee + Ae
            }
        }
        ,
        ne.i = function (Ie) {
            return Ie < 0 ? 0 : Ie < this.g.length ? this.g[Ie] : this.h
        }
        ;
    function we(Ie) {
        if (Ie.h != 0)
            return !1;
        for (let ge = 0; ge < Ie.g.length; ge++)
            if (Ie.g[ge] != 0)
                return !1;
        return !0
    }
    function Se(Ie) {
        return Ie.h == -1
    }
    ne.l = function (Ie) {
        return Ie = De(this, Ie),
            Se(Ie) ? -1 : we(Ie) ? 0 : 1
    }
        ;
    function be(Ie) {
        const ge = Ie.g.length
            , Te = [];
        for (let Ae = 0; Ae < ge; Ae++)
            Te[Ae] = ~Ie.g[Ae];
        return new ae(Te, ~Ie.h).add(Re)
    }
    ne.abs = function () {
        return Se(this) ? be(this) : this
    }
        ,
        ne.add = function (Ie) {
            const ge = Math.max(this.g.length, Ie.g.length)
                , Te = [];
            let Ae = 0;
            for (let ye = 0; ye <= ge; ye++) {
                let Ee = Ae + (this.i(ye) & 65535) + (Ie.i(ye) & 65535)
                    , me = (Ee >>> 16) + (this.i(ye) >>> 16) + (Ie.i(ye) >>> 16);
                Ae = me >>> 16,
                    Ee &= 65535,
                    me &= 65535,
                    Te[ye] = me << 16 | Ee
            }
            return new ae(Te, Te[Te.length - 1] & -2147483648 ? -1 : 0)
        }
        ;
    function De(Ie, ge) {
        return Ie.add(be(ge))
    }
    ne.j = function (Ie) {
        if (we(this) || we(Ie))
            return fe;
        if (Se(this))
            return Se(Ie) ? be(this).j(be(Ie)) : be(be(this).j(Ie));
        if (Se(Ie))
            return be(this.j(be(Ie)));
        if (this.l(Pe) < 0 && Ie.l(Pe) < 0)
            return he(this.m() * Ie.m());
        const ge = this.g.length + Ie.g.length
            , Te = [];
        for (var Ae = 0; Ae < 2 * ge; Ae++)
            Te[Ae] = 0;
        for (Ae = 0; Ae < this.g.length; Ae++)
            for (let ye = 0; ye < Ie.g.length; ye++) {
                const Ee = this.i(Ae) >>> 16
                    , me = this.i(Ae) & 65535
                    , xe = Ie.i(ye) >>> 16
                    , He = Ie.i(ye) & 65535;
                Te[2 * Ae + 2 * ye] += me * He,
                    ke(Te, 2 * Ae + 2 * ye),
                    Te[2 * Ae + 2 * ye + 1] += Ee * He,
                    ke(Te, 2 * Ae + 2 * ye + 1),
                    Te[2 * Ae + 2 * ye + 1] += me * xe,
                    ke(Te, 2 * Ae + 2 * ye + 1),
                    Te[2 * Ae + 2 * ye + 2] += Ee * xe,
                    ke(Te, 2 * Ae + 2 * ye + 2)
            }
        for (Ie = 0; Ie < ge; Ie++)
            Te[Ie] = Te[2 * Ie + 1] << 16 | Te[2 * Ie];
        for (Ie = ge; Ie < 2 * ge; Ie++)
            Te[Ie] = 0;
        return new ae(Te, 0)
    }
        ;
    function ke(Ie, ge) {
        for (; (Ie[ge] & 65535) != Ie[ge];)
            Ie[ge + 1] += Ie[ge] >>> 16,
                Ie[ge] &= 65535,
                ge++
    }
    function Me(Ie, ge) {
        this.g = Ie,
            this.h = ge
    }
    function Ne(Ie, ge) {
        if (we(ge))
            throw Error("division by zero");
        if (we(Ie))
            return new Me(fe, fe);
        if (Se(Ie))
            return ge = Ne(be(Ie), ge),
                new Me(be(ge.g), be(ge.h));
        if (Se(ge))
            return ge = Ne(Ie, be(ge)),
                new Me(be(ge.g), ge.h);
        if (Ie.g.length > 30) {
            if (Se(Ie) || Se(ge))
                throw Error("slowDivide_ only works with positive integers.");
            for (var Te = Re, Ae = ge; Ae.l(Ie) <= 0;)
                Te = $e(Te),
                    Ae = $e(Ae);
            var ye = Oe(Te, 1)
                , Ee = Oe(Ae, 1);
            for (Ae = Oe(Ae, 2),
                Te = Oe(Te, 2); !we(Ae);) {
                var me = Ee.add(Ae);
                me.l(Ie) <= 0 && (ye = ye.add(Te),
                    Ee = me),
                    Ae = Oe(Ae, 1),
                    Te = Oe(Te, 1)
            }
            return ge = De(Ie, ye.j(ge)),
                new Me(ye, ge)
        }
        for (ye = fe; Ie.l(ge) >= 0;) {
            for (Te = Math.max(1, Math.floor(Ie.m() / ge.m())),
                Ae = Math.ceil(Math.log(Te) / Math.LN2),
                Ae = Ae <= 48 ? 1 : Math.pow(2, Ae - 48),
                Ee = he(Te),
                me = Ee.j(ge); Se(me) || me.l(Ie) > 0;)
                Te -= Ae,
                    Ee = he(Te),
                    me = Ee.j(ge);
            we(Ee) && (Ee = Re),
                ye = ye.add(Ee),
                Ie = De(Ie, me)
        }
        return new Me(ye, Ie)
    }
    ne.B = function (Ie) {
        return Ne(this, Ie).h
    }
        ,
        ne.and = function (Ie) {
            const ge = Math.max(this.g.length, Ie.g.length)
                , Te = [];
            for (let Ae = 0; Ae < ge; Ae++)
                Te[Ae] = this.i(Ae) & Ie.i(Ae);
            return new ae(Te, this.h & Ie.h)
        }
        ,
        ne.or = function (Ie) {
            const ge = Math.max(this.g.length, Ie.g.length)
                , Te = [];
            for (let Ae = 0; Ae < ge; Ae++)
                Te[Ae] = this.i(Ae) | Ie.i(Ae);
            return new ae(Te, this.h | Ie.h)
        }
        ,
        ne.xor = function (Ie) {
            const ge = Math.max(this.g.length, Ie.g.length)
                , Te = [];
            for (let Ae = 0; Ae < ge; Ae++)
                Te[Ae] = this.i(Ae) ^ Ie.i(Ae);
            return new ae(Te, this.h ^ Ie.h)
        }
        ;
    function $e(Ie) {
        const ge = Ie.g.length + 1
            , Te = [];
        for (let Ae = 0; Ae < ge; Ae++)
            Te[Ae] = Ie.i(Ae) << 1 | Ie.i(Ae - 1) >>> 31;
        return new ae(Te, Ie.h)
    }
    function Oe(Ie, ge) {
        const Te = ge >> 5;
        ge %= 32;
        const Ae = Ie.g.length - Te
            , ye = [];
        for (let Ee = 0; Ee < Ae; Ee++)
            ye[Ee] = ge > 0 ? Ie.i(Ee + Te) >>> ge | Ie.i(Ee + Te + 1) << 32 - ge : Ie.i(Ee + Te);
        return new ae(ye, Ie.h)
    }
    re.prototype.digest = re.prototype.A,
        re.prototype.reset = re.prototype.u,
        re.prototype.update = re.prototype.v,
        Md5 = re,
        ae.prototype.add = ae.prototype.add,
        ae.prototype.multiply = ae.prototype.j,
        ae.prototype.modulo = ae.prototype.B,
        ae.prototype.compare = ae.prototype.l,
        ae.prototype.toNumber = ae.prototype.m,
        ae.prototype.toString = ae.prototype.toString,
        ae.prototype.getBits = ae.prototype.i,
        ae.fromNumber = he,
        ae.fromString = de,
        Integer = ae
}
).apply(typeof commonjsGlobal$1 < "u" ? commonjsGlobal$1 : typeof self < "u" ? self : typeof window < "u" ? window : {});
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var XhrIo, WebChannel, EventType, ErrorCode$1, Stat, Event, getStatEventTarget, createWebChannelTransport;
(function () {
    var ne, ee = Object.defineProperty;
    function te(oe) {
        oe = [typeof globalThis == "object" && globalThis, oe, typeof window == "object" && window, typeof self == "object" && self, typeof commonjsGlobal == "object" && commonjsGlobal];
        for (var ue = 0; ue < oe.length; ++ue) {
            var _e = oe[ue];
            if (_e && _e.Math == Math)
                return _e
        }
        throw Error("Cannot find global object")
    }
    var re = te(this);
    function ie(oe, ue) {
        if (ue)
            e: {
                var _e = re;
                oe = oe.split(".");
                for (var pe = 0; pe < oe.length - 1; pe++) {
                    var ve = oe[pe];
                    if (!(ve in _e))
                        break e;
                    _e = _e[ve]
                }
                oe = oe[oe.length - 1],
                    pe = _e[oe],
                    ue = ue(pe),
                    ue != pe && ue != null && ee(_e, oe, {
                        configurable: !0,
                        writable: !0,
                        value: ue
                    })
            }
    }
    ie("Symbol.dispose", function (oe) {
        return oe || Symbol("Symbol.dispose")
    }),
        ie("Array.prototype.values", function (oe) {
            return oe || function () {
                return this[Symbol.iterator]()
            }
        }),
        ie("Object.entries", function (oe) {
            return oe || function (ue) {
                var _e = [], pe;
                for (pe in ue)
                    Object.prototype.hasOwnProperty.call(ue, pe) && _e.push([pe, ue[pe]]);
                return _e
            }
        });
    /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var se = se || {}
        , ae = this || self;
    function ce(oe) {
        var ue = typeof oe;
        return ue == "object" && oe != null || ue == "function"
    }
    function le(oe, ue, _e) {
        return oe.call.apply(oe.bind, arguments)
    }
    function he(oe, ue, _e) {
        return he = le,
            he.apply(null, arguments)
    }
    function de(oe, ue) {
        var _e = Array.prototype.slice.call(arguments, 1);
        return function () {
            var pe = _e.slice();
            return pe.push.apply(pe, arguments),
                oe.apply(this, pe)
        }
    }
    function fe(oe, ue) {
        function _e() { }
        _e.prototype = ue.prototype,
            oe.Z = ue.prototype,
            oe.prototype = new _e,
            oe.prototype.constructor = oe,
            oe.Ob = function (pe, ve, Ve) {
                for (var Ce = Array(arguments.length - 2), Le = 2; Le < arguments.length; Le++)
                    Ce[Le - 2] = arguments[Le];
                return ue.prototype[ve].apply(pe, Ce)
            }
    }
    var Re = typeof AsyncContext < "u" && typeof AsyncContext.Snapshot == "function" ? oe => oe && AsyncContext.Snapshot.wrap(oe) : oe => oe;
    function Pe(oe) {
        const ue = oe.length;
        if (ue > 0) {
            const _e = Array(ue);
            for (let pe = 0; pe < ue; pe++)
                _e[pe] = oe[pe];
            return _e
        }
        return []
    }
    function we(oe, ue) {
        for (let pe = 1; pe < arguments.length; pe++) {
            const ve = arguments[pe];
            var _e = typeof ve;
            if (_e = _e != "object" ? _e : ve ? Array.isArray(ve) ? "array" : _e : "null",
                _e == "array" || _e == "object" && typeof ve.length == "number") {
                _e = oe.length || 0;
                const Ve = ve.length || 0;
                oe.length = _e + Ve;
                for (let Ce = 0; Ce < Ve; Ce++)
                    oe[_e + Ce] = ve[Ce]
            } else
                oe.push(ve)
        }
    }
    class Se {
        constructor(ue, _e) {
            this.i = ue,
                this.j = _e,
                this.h = 0,
                this.g = null
        }
        get() {
            let ue;
            return this.h > 0 ? (this.h--,
                ue = this.g,
                this.g = ue.next,
                ue.next = null) : ue = this.i(),
                ue
        }
    }
    function be(oe) {
        ae.setTimeout(() => {
            throw oe
        }
            , 0)
    }
    function De() {
        var oe = Ie;
        let ue = null;
        return oe.g && (ue = oe.g,
            oe.g = oe.g.next,
            oe.g || (oe.h = null),
            ue.next = null),
            ue
    }
    class ke {
        constructor() {
            this.h = this.g = null
        }
        add(ue, _e) {
            const pe = Me.get();
            pe.set(ue, _e),
                this.h ? this.h.next = pe : this.g = pe,
                this.h = pe
        }
    }
    var Me = new Se(() => new Ne, oe => oe.reset());
    class Ne {
        constructor() {
            this.next = this.g = this.h = null
        }
        set(ue, _e) {
            this.h = ue,
                this.g = _e,
                this.next = null
        }
        reset() {
            this.next = this.g = this.h = null
        }
    }
    let $e, Oe = !1, Ie = new ke, ge = () => {
        const oe = Promise.resolve(void 0);
        $e = () => {
            oe.then(Te)
        }
    }
        ;
    function Te() {
        for (var oe; oe = De();) {
            try {
                oe.h.call(oe.g)
            } catch (_e) {
                be(_e)
            }
            var ue = Me;
            ue.j(oe),
                ue.h < 100 && (ue.h++,
                    oe.next = ue.g,
                    ue.g = oe)
        }
        Oe = !1
    }
    function Ae() {
        this.u = this.u,
            this.C = this.C
    }
    Ae.prototype.u = !1,
        Ae.prototype.dispose = function () {
            this.u || (this.u = !0,
                this.N())
        }
        ,
        Ae.prototype[Symbol.dispose] = function () {
            this.dispose()
        }
        ,
        Ae.prototype.N = function () {
            if (this.C)
                for (; this.C.length;)
                    this.C.shift()()
        }
        ;
    function ye(oe, ue) {
        this.type = oe,
            this.g = this.target = ue,
            this.defaultPrevented = !1
    }
    ye.prototype.h = function () {
        this.defaultPrevented = !0
    }
        ;
    var Ee = function () {
        if (!ae.addEventListener || !Object.defineProperty)
            return !1;
        var oe = !1
            , ue = Object.defineProperty({}, "passive", {
                get: function () {
                    oe = !0
                }
            });
        try {
            const _e = () => { }
                ;
            ae.addEventListener("test", _e, ue),
                ae.removeEventListener("test", _e, ue)
        } catch { }
        return oe
    }();
    function me(oe) {
        return /^[\s\xa0]*$/.test(oe)
    }
    function xe(oe, ue) {
        ye.call(this, oe ? oe.type : ""),
            this.relatedTarget = this.g = this.target = null,
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
            this.key = "",
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
            this.state = null,
            this.pointerId = 0,
            this.pointerType = "",
            this.i = null,
            oe && this.init(oe, ue)
    }
    fe(xe, ye),
        xe.prototype.init = function (oe, ue) {
            const _e = this.type = oe.type
                , pe = oe.changedTouches && oe.changedTouches.length ? oe.changedTouches[0] : null;
            this.target = oe.target || oe.srcElement,
                this.g = ue,
                ue = oe.relatedTarget,
                ue || (_e == "mouseover" ? ue = oe.fromElement : _e == "mouseout" && (ue = oe.toElement)),
                this.relatedTarget = ue,
                pe ? (this.clientX = pe.clientX !== void 0 ? pe.clientX : pe.pageX,
                    this.clientY = pe.clientY !== void 0 ? pe.clientY : pe.pageY,
                    this.screenX = pe.screenX || 0,
                    this.screenY = pe.screenY || 0) : (this.clientX = oe.clientX !== void 0 ? oe.clientX : oe.pageX,
                        this.clientY = oe.clientY !== void 0 ? oe.clientY : oe.pageY,
                        this.screenX = oe.screenX || 0,
                        this.screenY = oe.screenY || 0),
                this.button = oe.button,
                this.key = oe.key || "",
                this.ctrlKey = oe.ctrlKey,
                this.altKey = oe.altKey,
                this.shiftKey = oe.shiftKey,
                this.metaKey = oe.metaKey,
                this.pointerId = oe.pointerId || 0,
                this.pointerType = oe.pointerType,
                this.state = oe.state,
                this.i = oe,
                oe.defaultPrevented && xe.Z.h.call(this)
        }
        ,
        xe.prototype.h = function () {
            xe.Z.h.call(this);
            const oe = this.i;
            oe.preventDefault ? oe.preventDefault() : oe.returnValue = !1
        }
        ;
    var He = "closure_listenable_" + (Math.random() * 1e6 | 0)
        , Xe = 0;
    function tr(oe, ue, _e, pe, ve) {
        this.listener = oe,
            this.proxy = null,
            this.src = ue,
            this.type = _e,
            this.capture = !!pe,
            this.ha = ve,
            this.key = ++Xe,
            this.da = this.fa = !1
    }
    function Vt(oe) {
        oe.da = !0,
            oe.listener = null,
            oe.proxy = null,
            oe.src = null,
            oe.ha = null
    }
    function xt(oe, ue, _e) {
        for (const pe in oe)
            ue.call(_e, oe[pe], pe, oe)
    }
    function nr(oe, ue) {
        for (const _e in oe)
            ue.call(void 0, oe[_e], _e, oe)
    }
    function Bn(oe) {
        const ue = {};
        for (const _e in oe)
            ue[_e] = oe[_e];
        return ue
    }
    const wr = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Sr(oe, ue) {
        let _e, pe;
        for (let ve = 1; ve < arguments.length; ve++) {
            pe = arguments[ve];
            for (_e in pe)
                oe[_e] = pe[_e];
            for (let Ve = 0; Ve < wr.length; Ve++)
                _e = wr[Ve],
                    Object.prototype.hasOwnProperty.call(pe, _e) && (oe[_e] = pe[_e])
        }
    }
    function qn(oe) {
        this.src = oe,
            this.g = {},
            this.h = 0
    }
    qn.prototype.add = function (oe, ue, _e, pe, ve) {
        const Ve = oe.toString();
        oe = this.g[Ve],
            oe || (oe = this.g[Ve] = [],
                this.h++);
        const Ce = ir(oe, ue, pe, ve);
        return Ce > -1 ? (ue = oe[Ce],
            _e || (ue.fa = !1)) : (ue = new tr(ue, this.src, Ve, !!pe, ve),
                ue.fa = _e,
                oe.push(ue)),
            ue
    }
        ;
    function rr(oe, ue) {
        const _e = ue.type;
        if (_e in oe.g) {
            var pe = oe.g[_e], ve = Array.prototype.indexOf.call(pe, ue, void 0), Ve;
            (Ve = ve >= 0) && Array.prototype.splice.call(pe, ve, 1),
                Ve && (Vt(ue),
                    oe.g[_e].length == 0 && (delete oe.g[_e],
                        oe.h--))
        }
    }
    function ir(oe, ue, _e, pe) {
        for (let ve = 0; ve < oe.length; ++ve) {
            const Ve = oe[ve];
            if (!Ve.da && Ve.listener == ue && Ve.capture == !!_e && Ve.ha == pe)
                return ve
        }
        return -1
    }
    var sr = "closure_lm_" + (Math.random() * 1e6 | 0)
        , or = {};
    function br(oe, ue, _e, pe, ve) {
        if (Array.isArray(ue)) {
            for (let Ve = 0; Ve < ue.length; Ve++)
                br(oe, ue[Ve], _e, pe, ve);
            return null
        }
        return _e = kr(_e),
            oe && oe[He] ? oe.J(ue, _e, ce(pe) ? !!pe.capture : !!pe, ve) : wi(oe, ue, _e, !1, pe, ve)
    }
    function wi(oe, ue, _e, pe, ve, Ve) {
        if (!ue)
            throw Error("Invalid event type");
        const Ce = ce(ve) ? !!ve.capture : !!ve;
        let Le = cr(oe);
        if (Le || (oe[sr] = Le = new qn(oe)),
            _e = Le.add(ue, _e, pe, Ce, Ve),
            _e.proxy)
            return _e;
        if (pe = Si(),
            _e.proxy = pe,
            pe.src = oe,
            pe.listener = _e,
            oe.addEventListener)
            Ee || (ve = Ce),
                ve === void 0 && (ve = !1),
                oe.addEventListener(ue.toString(), pe, ve);
        else if (oe.attachEvent)
            oe.attachEvent(Dr(ue.toString()), pe);
        else if (oe.addListener && oe.removeListener)
            oe.addListener(pe);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        return _e
    }
    function Si() {
        function oe(_e) {
            return ue.call(oe.src, oe.listener, _e)
        }
        const ue = bi;
        return oe
    }
    function Cr(oe, ue, _e, pe, ve) {
        if (Array.isArray(ue))
            for (var Ve = 0; Ve < ue.length; Ve++)
                Cr(oe, ue[Ve], _e, pe, ve);
        else
            pe = ce(pe) ? !!pe.capture : !!pe,
                _e = kr(_e),
                oe && oe[He] ? (oe = oe.i,
                    Ve = String(ue).toString(),
                    Ve in oe.g && (ue = oe.g[Ve],
                        _e = ir(ue, _e, pe, ve),
                        _e > -1 && (Vt(ue[_e]),
                            Array.prototype.splice.call(ue, _e, 1),
                            ue.length == 0 && (delete oe.g[Ve],
                                oe.h--)))) : oe && (oe = cr(oe)) && (ue = oe.g[ue.toString()],
                                    oe = -1,
                                    ue && (oe = ir(ue, _e, pe, ve)),
                                    (_e = oe > -1 ? ue[oe] : null) && ar(_e))
    }
    function ar(oe) {
        if (typeof oe != "number" && oe && !oe.da) {
            var ue = oe.src;
            if (ue && ue[He])
                rr(ue.i, oe);
            else {
                var _e = oe.type
                    , pe = oe.proxy;
                ue.removeEventListener ? ue.removeEventListener(_e, pe, oe.capture) : ue.detachEvent ? ue.detachEvent(Dr(_e), pe) : ue.addListener && ue.removeListener && ue.removeListener(pe),
                    (_e = cr(ue)) ? (rr(_e, oe),
                        _e.h == 0 && (_e.src = null,
                            ue[sr] = null)) : Vt(oe)
            }
        }
    }
    function Dr(oe) {
        return oe in or ? or[oe] : or[oe] = "on" + oe
    }
    function bi(oe, ue) {
        if (oe.da)
            oe = !0;
        else {
            ue = new xe(ue, this);
            const _e = oe.listener
                , pe = oe.ha || oe.src;
            oe.fa && ar(oe),
                oe = _e.call(pe, ue)
        }
        return oe
    }
    function cr(oe) {
        return oe = oe[sr],
            oe instanceof qn ? oe : null
    }
    var ur = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
    function kr(oe) {
        return typeof oe == "function" ? oe : (oe[ur] || (oe[ur] = function (ue) {
            return oe.handleEvent(ue)
        }
        ),
            oe[ur])
    }
    function je() {
        Ae.call(this),
            this.i = new qn(this),
            this.M = this,
            this.G = null
    }
    fe(je, Ae),
        je.prototype[He] = !0,
        je.prototype.removeEventListener = function (oe, ue, _e, pe) {
            Cr(this, oe, ue, _e, pe)
        }
        ;
    function ze(oe, ue) {
        var _e, pe = oe.G;
        if (pe)
            for (_e = []; pe; pe = pe.G)
                _e.push(pe);
        if (oe = oe.M,
            pe = ue.type || ue,
            typeof ue == "string")
            ue = new ye(ue, oe);
        else if (ue instanceof ye)
            ue.target = ue.target || oe;
        else {
            var ve = ue;
            ue = new ye(pe, oe),
                Sr(ue, ve)
        }
        ve = !0;
        let Ve, Ce;
        if (_e)
            for (Ce = _e.length - 1; Ce >= 0; Ce--)
                Ve = ue.g = _e[Ce],
                    ve = Wn(Ve, pe, !0, ue) && ve;
        if (Ve = ue.g = oe,
            ve = Wn(Ve, pe, !0, ue) && ve,
            ve = Wn(Ve, pe, !1, ue) && ve,
            _e)
            for (Ce = 0; Ce < _e.length; Ce++)
                Ve = ue.g = _e[Ce],
                    ve = Wn(Ve, pe, !1, ue) && ve
    }
    je.prototype.N = function () {
        if (je.Z.N.call(this),
            this.i) {
            var oe = this.i;
            for (const ue in oe.g) {
                const _e = oe.g[ue];
                for (let pe = 0; pe < _e.length; pe++)
                    Vt(_e[pe]);
                delete oe.g[ue],
                    oe.h--
            }
        }
        this.G = null
    }
        ,
        je.prototype.J = function (oe, ue, _e, pe) {
            return this.i.add(String(oe), ue, !1, _e, pe)
        }
        ,
        je.prototype.K = function (oe, ue, _e, pe) {
            return this.i.add(String(oe), ue, !0, _e, pe)
        }
        ;
    function Wn(oe, ue, _e, pe) {
        if (ue = oe.i.g[String(ue)],
            !ue)
            return !0;
        ue = ue.concat();
        let ve = !0;
        for (let Ve = 0; Ve < ue.length; ++Ve) {
            const Ce = ue[Ve];
            if (Ce && !Ce.da && Ce.capture == _e) {
                const Le = Ce.listener
                    , qe = Ce.ha || Ce.src;
                Ce.fa && rr(oe.i, Ce),
                    ve = Le.call(qe, pe) !== !1 && ve
            }
        }
        return ve && !pe.defaultPrevented
    }
    function Ci(oe, ue) {
        if (typeof oe != "function")
            if (oe && typeof oe.handleEvent == "function")
                oe = he(oe.handleEvent, oe);
            else
                throw Error("Invalid listener argument");
        return Number(ue) > 2147483647 ? -1 : ae.setTimeout(oe, ue || 0)
    }
    function Nr(oe) {
        oe.g = Ci(() => {
            oe.g = null,
                oe.i && (oe.i = !1,
                    Nr(oe))
        }
            , oe.l);
        const ue = oe.h;
        oe.h = null,
            oe.m.apply(null, ue)
    }
    class Di extends Ae {
        constructor(ue, _e) {
            super(),
                this.m = ue,
                this.l = _e,
                this.h = null,
                this.i = !1,
                this.g = null
        }
        j(ue) {
            this.h = arguments,
                this.g ? this.i = !0 : Nr(this)
        }
        N() {
            super.N(),
                this.g && (ae.clearTimeout(this.g),
                    this.g = null,
                    this.i = !1,
                    this.h = null)
        }
    }
    function Tn(oe) {
        Ae.call(this),
            this.h = oe,
            this.g = {}
    }
    fe(Tn, Ae);
    var Or = [];
    function Mr(oe) {
        xt(oe.g, function (ue, _e) {
            this.g.hasOwnProperty(_e) && ar(ue)
        }, oe),
            oe.g = {}
    }
    Tn.prototype.N = function () {
        Tn.Z.N.call(this),
            Mr(this)
    }
        ,
        Tn.prototype.handleEvent = function () {
            throw Error("EventHandler.handleEvent not implemented")
        }
        ;
    var lr = ae.JSON.stringify
        , ki = ae.JSON.parse
        , Ni = class {
            stringify(oe) {
                return ae.JSON.stringify(oe, void 0)
            }
            parse(oe) {
                return ae.JSON.parse(oe, void 0)
            }
        }
        ;
    function Lr() { }
    function $r() { }
    var In = {
        OPEN: "a",
        hb: "b",
        ERROR: "c",
        tb: "d"
    };
    function hr() {
        ye.call(this, "d")
    }
    fe(hr, ye);
    function _r() {
        ye.call(this, "c")
    }
    fe(_r, ye);
    var wt = {}
        , xr = null;
    function Hn() {
        return xr = xr || new je
    }
    wt.Ia = "serverreachability";
    function Fr(oe) {
        ye.call(this, wt.Ia, oe)
    }
    fe(Fr, ye);
    function An(oe) {
        const ue = Hn();
        ze(ue, new Fr(ue))
    }
    wt.STAT_EVENT = "statevent";
    function Ur(oe, ue) {
        ye.call(this, wt.STAT_EVENT, oe),
            this.stat = ue
    }
    fe(Ur, ye);
    function Ge(oe) {
        const ue = Hn();
        ze(ue, new Ur(ue, oe))
    }
    wt.Ja = "timingevent";
    function Br(oe, ue) {
        ye.call(this, wt.Ja, oe),
            this.size = ue
    }
    fe(Br, ye);
    function Rn(oe, ue) {
        if (typeof oe != "function")
            throw Error("Fn must not be null and must be a function");
        return ae.setTimeout(function () {
            oe()
        }, ue)
    }
    function Pn() {
        this.g = !0
    }
    Pn.prototype.ua = function () {
        this.g = !1
    }
        ;
    function Oi(oe, ue, _e, pe, ve, Ve) {
        oe.info(function () {
            if (oe.g)
                if (Ve) {
                    var Ce = ""
                        , Le = Ve.split("&");
                    for (let Fe = 0; Fe < Le.length; Fe++) {
                        var qe = Le[Fe].split("=");
                        if (qe.length > 1) {
                            const We = qe[0];
                            qe = qe[1];
                            const Je = We.split("_");
                            Ce = Je.length >= 2 && Je[1] == "type" ? Ce + (We + "=" + qe + "&") : Ce + (We + "=redacted&")
                        }
                    }
                } else
                    Ce = null;
            else
                Ce = Ve;
            return "XMLHTTP REQ (" + pe + ") [attempt " + ve + "]: " + ue + `
` + _e + `
` + Ce
        })
    }
    function Mi(oe, ue, _e, pe, ve, Ve, Ce) {
        oe.info(function () {
            return "XMLHTTP RESP (" + pe + ") [ attempt " + ve + "]: " + ue + `
` + _e + `
` + Ve + " " + Ce
        })
    }
    function Ft(oe, ue, _e, pe) {
        oe.info(function () {
            return "XMLHTTP TEXT (" + ue + "): " + $i(oe, _e) + (pe ? " " + pe : "")
        })
    }
    function Li(oe, ue) {
        oe.info(function () {
            return "TIMEOUT: " + ue
        })
    }
    Pn.prototype.info = function () { }
        ;
    function $i(oe, ue) {
        if (!oe.g)
            return ue;
        if (!ue)
            return null;
        try {
            const Ve = JSON.parse(ue);
            if (Ve) {
                for (oe = 0; oe < Ve.length; oe++)
                    if (Array.isArray(Ve[oe])) {
                        var _e = Ve[oe];
                        if (!(_e.length < 2)) {
                            var pe = _e[1];
                            if (Array.isArray(pe) && !(pe.length < 1)) {
                                var ve = pe[0];
                                if (ve != "noop" && ve != "stop" && ve != "close")
                                    for (let Ce = 1; Ce < pe.length; Ce++)
                                        pe[Ce] = ""
                            }
                        }
                    }
            }
            return lr(Ve)
        } catch {
            return ue
        }
    }
    var jn = {
        NO_ERROR: 0,
        cb: 1,
        qb: 2,
        pb: 3,
        kb: 4,
        ob: 5,
        rb: 6,
        Ga: 7,
        TIMEOUT: 8,
        ub: 9
    }, qr = {
        ib: "complete",
        Fb: "success",
        ERROR: "error",
        Ga: "abort",
        xb: "ready",
        yb: "readystatechange",
        TIMEOUT: "timeout",
        sb: "incrementaldata",
        wb: "progress",
        lb: "downloadprogress",
        Nb: "uploadprogress"
    }, Wr;
    function dr() { }
    fe(dr, Lr),
        dr.prototype.g = function () {
            return new XMLHttpRequest
        }
        ,
        Wr = new dr;
    function Vn(oe) {
        return encodeURIComponent(String(oe))
    }
    function xi(oe) {
        var ue = 1;
        oe = oe.split(":");
        const _e = [];
        for (; ue > 0 && oe.length;)
            _e.push(oe.shift()),
                ue--;
        return oe.length && _e.push(oe.join(":")),
            _e
    }
    function Ze(oe, ue, _e, pe) {
        this.j = oe,
            this.i = ue,
            this.l = _e,
            this.S = pe || 1,
            this.V = new Tn(this),
            this.H = 45e3,
            this.J = null,
            this.o = !1,
            this.u = this.B = this.A = this.M = this.F = this.T = this.D = null,
            this.G = [],
            this.g = null,
            this.C = 0,
            this.m = this.v = null,
            this.X = -1,
            this.K = !1,
            this.P = 0,
            this.O = null,
            this.W = this.L = this.U = this.R = !1,
            this.h = new Hr
    }
    function Hr() {
        this.i = null,
            this.g = "",
            this.h = !1
    }
    var jr = {}
        , fr = {};
    function pr(oe, ue, _e) {
        oe.M = 1,
            oe.A = Gn(Qe(ue)),
            oe.u = _e,
            oe.R = !0,
            zr(oe, null)
    }
    function zr(oe, ue) {
        oe.F = Date.now(),
            zn(oe),
            oe.B = Qe(oe.A);
        var _e = oe.B
            , pe = oe.S;
        Array.isArray(pe) || (pe = [String(pe)]),
            si(_e.i, "t", pe),
            oe.C = 0,
            _e = oe.j.L,
            oe.h = new Hr,
            oe.g = Ri(oe.j, _e ? ue : null, !oe.u),
            oe.P > 0 && (oe.O = new Di(he(oe.Y, oe, oe.g), oe.P)),
            ue = oe.V,
            _e = oe.g,
            pe = oe.ba;
        var ve = "readystatechange";
        Array.isArray(ve) || (ve && (Or[0] = ve.toString()),
            ve = Or);
        for (let Ve = 0; Ve < ve.length; Ve++) {
            const Ce = br(_e, ve[Ve], pe || ue.handleEvent, !1, ue.h || ue);
            if (!Ce)
                break;
            ue.g[Ce.key] = Ce
        }
        ue = oe.J ? Bn(oe.J) : {},
            oe.u ? (oe.v || (oe.v = "POST"),
                ue["Content-Type"] = "application/x-www-form-urlencoded",
                oe.g.ea(oe.B, oe.v, oe.u, ue)) : (oe.v = "GET",
                    oe.g.ea(oe.B, oe.v, null, ue)),
            An(),
            Oi(oe.i, oe.v, oe.B, oe.l, oe.S, oe.u)
    }
    Ze.prototype.ba = function (oe) {
        oe = oe.target;
        const ue = this.O;
        ue && pt(oe) == 3 ? ue.j() : this.Y(oe)
    }
        ,
        Ze.prototype.Y = function (oe) {
            try {
                if (oe == this.g)
                    e: {
                        const Le = pt(this.g)
                            , qe = this.g.ya()
                            , Fe = this.g.ca();
                        if (!(Le < 3) && (Le != 3 || this.g && (this.h.h || this.g.la() || _i(this.g)))) {
                            this.K || Le != 4 || qe == 7 || (qe == 8 || Fe <= 0 ? An(3) : An(2)),
                                mr(this);
                            var ue = this.g.ca();
                            this.X = ue;
                            var _e = Fi(this);
                            if (this.o = ue == 200,
                                Mi(this.i, this.v, this.B, this.l, this.S, Le, ue),
                                this.o) {
                                if (this.U && !this.L) {
                                    t: {
                                        if (this.g) {
                                            var pe, ve = this.g;
                                            if ((pe = ve.g ? ve.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !me(pe)) {
                                                var Ve = pe;
                                                break t
                                            }
                                        }
                                        Ve = null
                                    }
                                    if (oe = Ve)
                                        Ft(this.i, this.l, oe, "Initial handshake response via X-HTTP-Initial-Response"),
                                            this.L = !0,
                                            gr(this, oe);
                                    else {
                                        this.o = !1,
                                            this.m = 3,
                                            Ge(12),
                                            kt(this),
                                            wn(this);
                                        break e
                                    }
                                }
                                if (this.R) {
                                    oe = !0;
                                    let We;
                                    for (; !this.K && this.C < _e.length;)
                                        if (We = Ui(this, _e),
                                            We == fr) {
                                            Le == 4 && (this.m = 4,
                                                Ge(14),
                                                oe = !1),
                                                Ft(this.i, this.l, null, "[Incomplete Response]");
                                            break
                                        } else if (We == jr) {
                                            this.m = 4,
                                                Ge(15),
                                                Ft(this.i, this.l, _e, "[Invalid Chunk]"),
                                                oe = !1;
                                            break
                                        } else
                                            Ft(this.i, this.l, We, null),
                                                gr(this, We);
                                    if (Gr(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C),
                                        this.C = 0),
                                        Le != 4 || _e.length != 0 || this.h.h || (this.m = 1,
                                            Ge(16),
                                            oe = !1),
                                        this.o = this.o && oe,
                                        !oe)
                                        Ft(this.i, this.l, _e, "[Invalid Chunked Response]"),
                                            kt(this),
                                            wn(this);
                                    else if (_e.length > 0 && !this.W) {
                                        this.W = !0;
                                        var Ce = this.j;
                                        Ce.g == this && Ce.aa && !Ce.P && (Ce.j.info("Great, no buffering proxy detected. Bytes received: " + _e.length),
                                            vr(Ce),
                                            Ce.P = !0,
                                            Ge(11))
                                    }
                                } else
                                    Ft(this.i, this.l, _e, null),
                                        gr(this, _e);
                                Le == 4 && kt(this),
                                    this.o && !this.K && (Le == 4 ? Ti(this.j, this) : (this.o = !1,
                                        zn(this)))
                            } else
                                es(this.g),
                                    ue == 400 && _e.indexOf("Unknown SID") > 0 ? (this.m = 3,
                                        Ge(12)) : (this.m = 0,
                                            Ge(13)),
                                    kt(this),
                                    wn(this)
                        }
                    }
            } catch { } finally { }
        }
        ;
    function Fi(oe) {
        if (!Gr(oe))
            return oe.g.la();
        const ue = _i(oe.g);
        if (ue === "")
            return "";
        let _e = "";
        const pe = ue.length
            , ve = pt(oe.g) == 4;
        if (!oe.h.i) {
            if (typeof TextDecoder > "u")
                return kt(oe),
                    wn(oe),
                    "";
            oe.h.i = new ae.TextDecoder
        }
        for (let Ve = 0; Ve < pe; Ve++)
            oe.h.h = !0,
                _e += oe.h.i.decode(ue[Ve], {
                    stream: !(ve && Ve == pe - 1)
                });
        return ue.length = 0,
            oe.h.g += _e,
            oe.C = 0,
            oe.h.g
    }
    function Gr(oe) {
        return oe.g ? oe.v == "GET" && oe.M != 2 && oe.j.Aa : !1
    }
    function Ui(oe, ue) {
        var _e = oe.C
            , pe = ue.indexOf(`
`, _e);
        return pe == -1 ? fr : (_e = Number(ue.substring(_e, pe)),
            isNaN(_e) ? jr : (pe += 1,
                pe + _e > ue.length ? fr : (ue = ue.slice(pe, pe + _e),
                    oe.C = pe + _e,
                    ue)))
    }
    Ze.prototype.cancel = function () {
        this.K = !0,
            kt(this)
    }
        ;
    function zn(oe) {
        oe.T = Date.now() + oe.H,
            Kr(oe, oe.H)
    }
    function Kr(oe, ue) {
        if (oe.D != null)
            throw Error("WatchDog timer not null");
        oe.D = Rn(he(oe.aa, oe), ue)
    }
    function mr(oe) {
        oe.D && (ae.clearTimeout(oe.D),
            oe.D = null)
    }
    Ze.prototype.aa = function () {
        this.D = null;
        const oe = Date.now();
        oe - this.T >= 0 ? (Li(this.i, this.B),
            this.M != 2 && (An(),
                Ge(17)),
            kt(this),
            this.m = 2,
            wn(this)) : Kr(this, this.T - oe)
    }
        ;
    function wn(oe) {
        oe.j.I == 0 || oe.K || Ti(oe.j, oe)
    }
    function kt(oe) {
        mr(oe);
        var ue = oe.O;
        ue && typeof ue.dispose == "function" && ue.dispose(),
            oe.O = null,
            Mr(oe.V),
            oe.g && (ue = oe.g,
                oe.g = null,
                ue.abort(),
                ue.dispose())
    }
    function gr(oe, ue) {
        try {
            var _e = oe.j;
            if (_e.I != 0 && (_e.g == oe || Er(_e.h, oe))) {
                if (!oe.L && Er(_e.h, oe) && _e.I == 3) {
                    try {
                        var pe = _e.Ba.g.parse(ue)
                    } catch {
                        pe = null
                    }
                    if (Array.isArray(pe) && pe.length == 3) {
                        var ve = pe;
                        if (ve[0] == 0) {
                            e: if (!_e.v) {
                                if (_e.g)
                                    if (_e.g.F + 3e3 < oe.F)
                                        Xn(_e),
                                            Yn(_e);
                                    else
                                        break e;
                                Pr(_e),
                                    Ge(18)
                            }
                        } else
                            _e.xa = ve[1],
                                0 < _e.xa - _e.K && ve[2] < 37500 && _e.F && _e.A == 0 && !_e.C && (_e.C = Rn(he(_e.Va, _e), 6e3));
                        Jr(_e.h) <= 1 && _e.ta && (_e.ta = void 0)
                    } else
                        Mt(_e, 11)
                } else if ((oe.L || _e.g == oe) && Xn(_e),
                    !me(ue))
                    for (ve = _e.Ba.g.parse(ue),
                        ue = 0; ue < ve.length; ue++) {
                        let Fe = ve[ue];
                        const We = Fe[0];
                        if (!(We <= _e.K))
                            if (_e.K = We,
                                Fe = Fe[1],
                                _e.I == 2)
                                if (Fe[0] == "c") {
                                    _e.M = Fe[1],
                                        _e.ba = Fe[2];
                                    const Je = Fe[3];
                                    Je != null && (_e.ka = Je,
                                        _e.j.info("VER=" + _e.ka));
                                    const Lt = Fe[4];
                                    Lt != null && (_e.za = Lt,
                                        _e.j.info("SVER=" + _e.za));
                                    const yt = Fe[5];
                                    yt != null && typeof yt == "number" && yt > 0 && (pe = 1.5 * yt,
                                        _e.O = pe,
                                        _e.j.info("backChannelRequestTimeoutMs_=" + pe)),
                                        pe = _e;
                                    const vt = oe.g;
                                    if (vt) {
                                        const er = vt.g ? vt.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                        if (er) {
                                            var Ve = pe.h;
                                            Ve.g || er.indexOf("spdy") == -1 && er.indexOf("quic") == -1 && er.indexOf("h2") == -1 || (Ve.j = Ve.l,
                                                Ve.g = new Set,
                                                Ve.h && (Tr(Ve, Ve.h),
                                                    Ve.h = null))
                                        }
                                        if (pe.G) {
                                            const Vr = vt.g ? vt.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                            Vr && (pe.wa = Vr,
                                                Ue(pe.J, pe.G, Vr))
                                        }
                                    }
                                    _e.I = 3,
                                        _e.l && _e.l.ra(),
                                        _e.aa && (_e.T = Date.now() - oe.F,
                                            _e.j.info("Handshake RTT: " + _e.T + "ms")),
                                        pe = _e;
                                    var Ce = oe;
                                    if (pe.na = Ai(pe, pe.L ? pe.ba : null, pe.W),
                                        Ce.L) {
                                        Xr(pe.h, Ce);
                                        var Le = Ce
                                            , qe = pe.O;
                                        qe && (Le.H = qe),
                                            Le.D && (mr(Le),
                                                zn(Le)),
                                            pe.g = Ce
                                    } else
                                        gi(pe);
                                    _e.i.length > 0 && Jn(_e)
                                } else
                                    Fe[0] != "stop" && Fe[0] != "close" || Mt(_e, 7);
                            else
                                _e.I == 3 && (Fe[0] == "stop" || Fe[0] == "close" ? Fe[0] == "stop" ? Mt(_e, 7) : Rr(_e) : Fe[0] != "noop" && _e.l && _e.l.qa(Fe),
                                    _e.A = 0)
                    }
            }
            An(4)
        } catch { }
    }
    var Bi = class {
        constructor(oe, ue) {
            this.g = oe,
                this.map = ue
        }
    }
        ;
    function Qr(oe) {
        this.l = oe || 10,
            ae.PerformanceNavigationTiming ? (oe = ae.performance.getEntriesByType("navigation"),
                oe = oe.length > 0 && (oe[0].nextHopProtocol == "hq" || oe[0].nextHopProtocol == "h2")) : oe = !!(ae.chrome && ae.chrome.loadTimes && ae.chrome.loadTimes() && ae.chrome.loadTimes().wasFetchedViaSpdy),
            this.j = oe ? this.l : 1,
            this.g = null,
            this.j > 1 && (this.g = new Set),
            this.h = null,
            this.i = []
    }
    function Yr(oe) {
        return oe.h ? !0 : oe.g ? oe.g.size >= oe.j : !1
    }
    function Jr(oe) {
        return oe.h ? 1 : oe.g ? oe.g.size : 0
    }
    function Er(oe, ue) {
        return oe.h ? oe.h == ue : oe.g ? oe.g.has(ue) : !1
    }
    function Tr(oe, ue) {
        oe.g ? oe.g.add(ue) : oe.h = ue
    }
    function Xr(oe, ue) {
        oe.h && oe.h == ue ? oe.h = null : oe.g && oe.g.has(ue) && oe.g.delete(ue)
    }
    Qr.prototype.cancel = function () {
        if (this.i = Zr(this),
            this.h)
            this.h.cancel(),
                this.h = null;
        else if (this.g && this.g.size !== 0) {
            for (const oe of this.g.values())
                oe.cancel();
            this.g.clear()
        }
    }
        ;
    function Zr(oe) {
        if (oe.h != null)
            return oe.i.concat(oe.h.G);
        if (oe.g != null && oe.g.size !== 0) {
            let ue = oe.i;
            for (const _e of oe.g.values())
                ue = ue.concat(_e.G);
            return ue
        }
        return Pe(oe.i)
    }
    var ei = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function qi(oe, ue) {
        if (oe) {
            oe = oe.split("&");
            for (let _e = 0; _e < oe.length; _e++) {
                const pe = oe[_e].indexOf("=");
                let ve, Ve = null;
                pe >= 0 ? (ve = oe[_e].substring(0, pe),
                    Ve = oe[_e].substring(pe + 1)) : ve = oe[_e],
                    ue(ve, Ve ? decodeURIComponent(Ve.replace(/\+/g, " ")) : "")
            }
        }
    }
    function ct(oe) {
        this.g = this.o = this.j = "",
            this.u = null,
            this.m = this.h = "",
            this.l = !1;
        let ue;
        oe instanceof ct ? (this.l = oe.l,
            Dn(this, oe.j),
            this.o = oe.o,
            this.g = oe.g,
            kn(this, oe.u),
            this.h = oe.h,
            Ir(this, oi(oe.i)),
            this.m = oe.m) : oe && (ue = String(oe).match(ei)) ? (this.l = !1,
                Dn(this, ue[1] || "", !0),
                this.o = Nn(ue[2] || ""),
                this.g = Nn(ue[3] || "", !0),
                kn(this, ue[4]),
                this.h = Nn(ue[5] || "", !0),
                Ir(this, ue[6] || "", !0),
                this.m = Nn(ue[7] || "")) : (this.l = !1,
                    this.i = new Mn(null, this.l))
    }
    ct.prototype.toString = function () {
        const oe = [];
        var ue = this.j;
        ue && oe.push(On(ue, ti, !0), ":");
        var _e = this.g;
        return (_e || ue == "file") && (oe.push("//"),
            (ue = this.o) && oe.push(On(ue, ti, !0), "@"),
            oe.push(Vn(_e).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            _e = this.u,
            _e != null && oe.push(":", String(_e))),
            (_e = this.h) && (this.g && _e.charAt(0) != "/" && oe.push("/"),
                oe.push(On(_e, _e.charAt(0) == "/" ? ji : Hi, !0))),
            (_e = this.i.toString()) && oe.push("?", _e),
            (_e = this.m) && oe.push("#", On(_e, Gi)),
            oe.join("")
    }
        ,
        ct.prototype.resolve = function (oe) {
            const ue = Qe(this);
            let _e = !!oe.j;
            _e ? Dn(ue, oe.j) : _e = !!oe.o,
                _e ? ue.o = oe.o : _e = !!oe.g,
                _e ? ue.g = oe.g : _e = oe.u != null;
            var pe = oe.h;
            if (_e)
                kn(ue, oe.u);
            else if (_e = !!oe.h) {
                if (pe.charAt(0) != "/")
                    if (this.g && !this.h)
                        pe = "/" + pe;
                    else {
                        var ve = ue.h.lastIndexOf("/");
                        ve != -1 && (pe = ue.h.slice(0, ve + 1) + pe)
                    }
                if (ve = pe,
                    ve == ".." || ve == ".")
                    pe = "";
                else if (ve.indexOf("./") != -1 || ve.indexOf("/.") != -1) {
                    pe = ve.lastIndexOf("/", 0) == 0,
                        ve = ve.split("/");
                    const Ve = [];
                    for (let Ce = 0; Ce < ve.length;) {
                        const Le = ve[Ce++];
                        Le == "." ? pe && Ce == ve.length && Ve.push("") : Le == ".." ? ((Ve.length > 1 || Ve.length == 1 && Ve[0] != "") && Ve.pop(),
                            pe && Ce == ve.length && Ve.push("")) : (Ve.push(Le),
                                pe = !0)
                    }
                    pe = Ve.join("/")
                } else
                    pe = ve
            }
            return _e ? ue.h = pe : _e = oe.i.toString() !== "",
                _e ? Ir(ue, oi(oe.i)) : _e = !!oe.m,
                _e && (ue.m = oe.m),
                ue
        }
        ;
    function Qe(oe) {
        return new ct(oe)
    }
    function Dn(oe, ue, _e) {
        oe.j = _e ? Nn(ue, !0) : ue,
            oe.j && (oe.j = oe.j.replace(/:$/, ""))
    }
    function kn(oe, ue) {
        if (ue) {
            if (ue = Number(ue),
                isNaN(ue) || ue < 0)
                throw Error("Bad port number " + ue);
            oe.u = ue
        } else
            oe.u = null
    }
    function Ir(oe, ue, _e) {
        ue instanceof Mn ? (oe.i = ue,
            Ki(oe.i, oe.l)) : (_e || (ue = On(ue, zi)),
                oe.i = new Mn(ue, oe.l))
    }
    function Ue(oe, ue, _e) {
        oe.i.set(ue, _e)
    }
    function Gn(oe) {
        return Ue(oe, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)),
            oe
    }
    function Nn(oe, ue) {
        return oe ? ue ? decodeURI(oe.replace(/%25/g, "%2525")) : decodeURIComponent(oe) : ""
    }
    function On(oe, ue, _e) {
        return typeof oe == "string" ? (oe = encodeURI(oe).replace(ue, Wi),
            _e && (oe = oe.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            oe) : null
    }
    function Wi(oe) {
        return oe = oe.charCodeAt(0),
            "%" + (oe >> 4 & 15).toString(16) + (oe & 15).toString(16)
    }
    var ti = /[#\/\?@]/g
        , Hi = /[#\?:]/g
        , ji = /[#\?]/g
        , zi = /[#\?@]/g
        , Gi = /#/g;
    function Mn(oe, ue) {
        this.h = this.g = null,
            this.i = oe || null,
            this.j = !!ue
    }
    function Ot(oe) {
        oe.g || (oe.g = new Map,
            oe.h = 0,
            oe.i && qi(oe.i, function (ue, _e) {
                oe.add(decodeURIComponent(ue.replace(/\+/g, " ")), _e)
            }))
    }
    ne = Mn.prototype,
        ne.add = function (oe, ue) {
            Ot(this),
                this.i = null,
                oe = qt(this, oe);
            let _e = this.g.get(oe);
            return _e || this.g.set(oe, _e = []),
                _e.push(ue),
                this.h += 1,
                this
        }
        ;
    function ni(oe, ue) {
        Ot(oe),
            ue = qt(oe, ue),
            oe.g.has(ue) && (oe.i = null,
                oe.h -= oe.g.get(ue).length,
                oe.g.delete(ue))
    }
    function ri(oe, ue) {
        return Ot(oe),
            ue = qt(oe, ue),
            oe.g.has(ue)
    }
    ne.forEach = function (oe, ue) {
        Ot(this),
            this.g.forEach(function (_e, pe) {
                _e.forEach(function (ve) {
                    oe.call(ue, ve, pe, this)
                }, this)
            }, this)
    }
        ;
    function ii(oe, ue) {
        Ot(oe);
        let _e = [];
        if (typeof ue == "string")
            ri(oe, ue) && (_e = _e.concat(oe.g.get(qt(oe, ue))));
        else
            for (oe = Array.from(oe.g.values()),
                ue = 0; ue < oe.length; ue++)
                _e = _e.concat(oe[ue]);
        return _e
    }
    ne.set = function (oe, ue) {
        return Ot(this),
            this.i = null,
            oe = qt(this, oe),
            ri(this, oe) && (this.h -= this.g.get(oe).length),
            this.g.set(oe, [ue]),
            this.h += 1,
            this
    }
        ,
        ne.get = function (oe, ue) {
            return oe ? (oe = ii(this, oe),
                oe.length > 0 ? String(oe[0]) : ue) : ue
        }
        ;
    function si(oe, ue, _e) {
        ni(oe, ue),
            _e.length > 0 && (oe.i = null,
                oe.g.set(qt(oe, ue), Pe(_e)),
                oe.h += _e.length)
    }
    ne.toString = function () {
        if (this.i)
            return this.i;
        if (!this.g)
            return "";
        const oe = []
            , ue = Array.from(this.g.keys());
        for (let pe = 0; pe < ue.length; pe++) {
            var _e = ue[pe];
            const ve = Vn(_e);
            _e = ii(this, _e);
            for (let Ve = 0; Ve < _e.length; Ve++) {
                let Ce = ve;
                _e[Ve] !== "" && (Ce += "=" + Vn(_e[Ve])),
                    oe.push(Ce)
            }
        }
        return this.i = oe.join("&")
    }
        ;
    function oi(oe) {
        const ue = new Mn;
        return ue.i = oe.i,
            oe.g && (ue.g = new Map(oe.g),
                ue.h = oe.h),
            ue
    }
    function qt(oe, ue) {
        return ue = String(ue),
            oe.j && (ue = ue.toLowerCase()),
            ue
    }
    function Ki(oe, ue) {
        ue && !oe.j && (Ot(oe),
            oe.i = null,
            oe.g.forEach(function (_e, pe) {
                const ve = pe.toLowerCase();
                pe != ve && (ni(this, pe),
                    si(this, ve, _e))
            }, oe)),
            oe.j = ue
    }
    function Qi(oe, ue) {
        const _e = new Pn;
        if (ae.Image) {
            const pe = new Image;
            pe.onload = de(lt, _e, "TestLoadImage: loaded", !0, ue, pe),
                pe.onerror = de(lt, _e, "TestLoadImage: error", !1, ue, pe),
                pe.onabort = de(lt, _e, "TestLoadImage: abort", !1, ue, pe),
                pe.ontimeout = de(lt, _e, "TestLoadImage: timeout", !1, ue, pe),
                ae.setTimeout(function () {
                    pe.ontimeout && pe.ontimeout()
                }, 1e4),
                pe.src = oe
        } else
            ue(!1)
    }
    function Yi(oe, ue) {
        const _e = new Pn
            , pe = new AbortController
            , ve = setTimeout(() => {
                pe.abort(),
                    lt(_e, "TestPingServer: timeout", !1, ue)
            }
                , 1e4);
        fetch(oe, {
            signal: pe.signal
        }).then(Ve => {
            clearTimeout(ve),
                Ve.ok ? lt(_e, "TestPingServer: ok", !0, ue) : lt(_e, "TestPingServer: server error", !1, ue)
        }
        ).catch(() => {
            clearTimeout(ve),
                lt(_e, "TestPingServer: error", !1, ue)
        }
        )
    }
    function lt(oe, ue, _e, pe, ve) {
        try {
            ve && (ve.onload = null,
                ve.onerror = null,
                ve.onabort = null,
                ve.ontimeout = null),
                pe(_e)
        } catch { }
    }
    function Ji() {
        this.g = new Ni
    }
    function yr(oe) {
        this.i = oe.Sb || null,
            this.h = oe.ab || !1
    }
    fe(yr, Lr),
        yr.prototype.g = function () {
            return new Kn(this.i, this.h)
        }
        ;
    function Kn(oe, ue) {
        je.call(this),
            this.H = oe,
            this.o = ue,
            this.m = void 0,
            this.status = this.readyState = 0,
            this.responseType = this.responseText = this.response = this.statusText = "",
            this.onreadystatechange = null,
            this.A = new Headers,
            this.h = null,
            this.F = "GET",
            this.D = "",
            this.g = !1,
            this.B = this.j = this.l = null,
            this.v = new AbortController
    }
    fe(Kn, je),
        ne = Kn.prototype,
        ne.open = function (oe, ue) {
            if (this.readyState != 0)
                throw this.abort(),
                Error("Error reopening a connection");
            this.F = oe,
                this.D = ue,
                this.readyState = 1,
                $n(this)
        }
        ,
        ne.send = function (oe) {
            if (this.readyState != 1)
                throw this.abort(),
                Error("need to call open() first. ");
            if (this.v.signal.aborted)
                throw this.abort(),
                Error("Request was aborted.");
            this.g = !0;
            const ue = {
                headers: this.A,
                method: this.F,
                credentials: this.m,
                cache: void 0,
                signal: this.v.signal
            };
            oe && (ue.body = oe),
                (this.H || ae).fetch(new Request(this.D, ue)).then(this.Pa.bind(this), this.ga.bind(this))
        }
        ,
        ne.abort = function () {
            this.response = this.responseText = "",
                this.A = new Headers,
                this.status = 0,
                this.v.abort(),
                this.j && this.j.cancel("Request was aborted.").catch(() => { }
                ),
                this.readyState >= 1 && this.g && this.readyState != 4 && (this.g = !1,
                    Ln(this)),
                this.readyState = 0
        }
        ,
        ne.Pa = function (oe) {
            if (this.g && (this.l = oe,
                this.h || (this.status = this.l.status,
                    this.statusText = this.l.statusText,
                    this.h = oe.headers,
                    this.readyState = 2,
                    $n(this)),
                this.g && (this.readyState = 3,
                    $n(this),
                    this.g)))
                if (this.responseType === "arraybuffer")
                    oe.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
                else if (typeof ae.ReadableStream < "u" && "body" in oe) {
                    if (this.j = oe.body.getReader(),
                        this.o) {
                        if (this.responseType)
                            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                        this.response = []
                    } else
                        this.response = this.responseText = "",
                            this.B = new TextDecoder;
                    ai(this)
                } else
                    oe.text().then(this.Oa.bind(this), this.ga.bind(this))
        }
        ;
    function ai(oe) {
        oe.j.read().then(oe.Ma.bind(oe)).catch(oe.ga.bind(oe))
    }
    ne.Ma = function (oe) {
        if (this.g) {
            if (this.o && oe.value)
                this.response.push(oe.value);
            else if (!this.o) {
                var ue = oe.value ? oe.value : new Uint8Array(0);
                (ue = this.B.decode(ue, {
                    stream: !oe.done
                })) && (this.response = this.responseText += ue)
            }
            oe.done ? Ln(this) : $n(this),
                this.readyState == 3 && ai(this)
        }
    }
        ,
        ne.Oa = function (oe) {
            this.g && (this.response = this.responseText = oe,
                Ln(this))
        }
        ,
        ne.Na = function (oe) {
            this.g && (this.response = oe,
                Ln(this))
        }
        ,
        ne.ga = function () {
            this.g && Ln(this)
        }
        ;
    function Ln(oe) {
        oe.readyState = 4,
            oe.l = null,
            oe.j = null,
            oe.B = null,
            $n(oe)
    }
    ne.setRequestHeader = function (oe, ue) {
        this.A.append(oe, ue)
    }
        ,
        ne.getResponseHeader = function (oe) {
            return this.h && this.h.get(oe.toLowerCase()) || ""
        }
        ,
        ne.getAllResponseHeaders = function () {
            if (!this.h)
                return "";
            const oe = []
                , ue = this.h.entries();
            for (var _e = ue.next(); !_e.done;)
                _e = _e.value,
                    oe.push(_e[0] + ": " + _e[1]),
                    _e = ue.next();
            return oe.join(`\r
`)
        }
        ;
    function $n(oe) {
        oe.onreadystatechange && oe.onreadystatechange.call(oe)
    }
    Object.defineProperty(Kn.prototype, "withCredentials", {
        get: function () {
            return this.m === "include"
        },
        set: function (oe) {
            this.m = oe ? "include" : "same-origin"
        }
    });
    function ci(oe) {
        let ue = "";
        return xt(oe, function (_e, pe) {
            ue += pe,
                ue += ":",
                ue += _e,
                ue += `\r
`
        }),
            ue
    }
    function Ar(oe, ue, _e) {
        e: {
            for (pe in _e) {
                var pe = !1;
                break e
            }
            pe = !0
        }
        pe || (_e = ci(_e),
            typeof oe == "string" ? _e != null && Vn(_e) : Ue(oe, ue, _e))
    }
    function Be(oe) {
        je.call(this),
            this.headers = new Map,
            this.L = oe || null,
            this.h = !1,
            this.g = null,
            this.D = "",
            this.o = 0,
            this.l = "",
            this.j = this.B = this.v = this.A = !1,
            this.m = null,
            this.F = "",
            this.H = !1
    }
    fe(Be, je);
    var Xi = /^https?$/i
        , Zi = ["POST", "PUT"];
    ne = Be.prototype,
        ne.Fa = function (oe) {
            this.H = oe
        }
        ,
        ne.ea = function (oe, ue, _e, pe) {
            if (this.g)
                throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + oe);
            ue = ue ? ue.toUpperCase() : "GET",
                this.D = oe,
                this.l = "",
                this.o = 0,
                this.A = !1,
                this.h = !0,
                this.g = this.L ? this.L.g() : Wr.g(),
                this.g.onreadystatechange = Re(he(this.Ca, this));
            try {
                this.B = !0,
                    this.g.open(ue, String(oe), !0),
                    this.B = !1
            } catch (Ve) {
                ui(this, Ve);
                return
            }
            if (oe = _e || "",
                _e = new Map(this.headers),
                pe)
                if (Object.getPrototypeOf(pe) === Object.prototype)
                    for (var ve in pe)
                        _e.set(ve, pe[ve]);
                else if (typeof pe.keys == "function" && typeof pe.get == "function")
                    for (const Ve of pe.keys())
                        _e.set(Ve, pe.get(Ve));
                else
                    throw Error("Unknown input type for opt_headers: " + String(pe));
            pe = Array.from(_e.keys()).find(Ve => Ve.toLowerCase() == "content-type"),
                ve = ae.FormData && oe instanceof ae.FormData,
                !(Array.prototype.indexOf.call(Zi, ue, void 0) >= 0) || pe || ve || _e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            for (const [Ve, Ce] of _e)
                this.g.setRequestHeader(Ve, Ce);
            this.F && (this.g.responseType = this.F),
                "withCredentials" in this.g && this.g.withCredentials !== this.H && (this.g.withCredentials = this.H);
            try {
                this.m && (clearTimeout(this.m),
                    this.m = null),
                    this.v = !0,
                    this.g.send(oe),
                    this.v = !1
            } catch (Ve) {
                ui(this, Ve)
            }
        }
        ;
    function ui(oe, ue) {
        oe.h = !1,
            oe.g && (oe.j = !0,
                oe.g.abort(),
                oe.j = !1),
            oe.l = ue,
            oe.o = 5,
            li(oe),
            Qn(oe)
    }
    function li(oe) {
        oe.A || (oe.A = !0,
            ze(oe, "complete"),
            ze(oe, "error"))
    }
    ne.abort = function (oe) {
        this.g && this.h && (this.h = !1,
            this.j = !0,
            this.g.abort(),
            this.j = !1,
            this.o = oe || 7,
            ze(this, "complete"),
            ze(this, "abort"),
            Qn(this))
    }
        ,
        ne.N = function () {
            this.g && (this.h && (this.h = !1,
                this.j = !0,
                this.g.abort(),
                this.j = !1),
                Qn(this, !0)),
                Be.Z.N.call(this)
        }
        ,
        ne.Ca = function () {
            this.u || (this.B || this.v || this.j ? hi(this) : this.Xa())
        }
        ,
        ne.Xa = function () {
            hi(this)
        }
        ;
    function hi(oe) {
        if (oe.h && typeof se < "u") {
            if (oe.v && pt(oe) == 4)
                setTimeout(oe.Ca.bind(oe), 0);
            else if (ze(oe, "readystatechange"),
                pt(oe) == 4) {
                oe.h = !1;
                try {
                    const Ve = oe.ca();
                    e: switch (Ve) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var ue = !0;
                            break e;
                        default:
                            ue = !1
                    }
                    var _e;
                    if (!(_e = ue)) {
                        var pe;
                        if (pe = Ve === 0) {
                            let Ce = String(oe.D).match(ei)[1] || null;
                            !Ce && ae.self && ae.self.location && (Ce = ae.self.location.protocol.slice(0, -1)),
                                pe = !Xi.test(Ce ? Ce.toLowerCase() : "")
                        }
                        _e = pe
                    }
                    if (_e)
                        ze(oe, "complete"),
                            ze(oe, "success");
                    else {
                        oe.o = 6;
                        try {
                            var ve = pt(oe) > 2 ? oe.g.statusText : ""
                        } catch {
                            ve = ""
                        }
                        oe.l = ve + " [" + oe.ca() + "]",
                            li(oe)
                    }
                } finally {
                    Qn(oe)
                }
            }
        }
    }
    function Qn(oe, ue) {
        if (oe.g) {
            oe.m && (clearTimeout(oe.m),
                oe.m = null);
            const _e = oe.g;
            oe.g = null,
                ue || ze(oe, "ready");
            try {
                _e.onreadystatechange = null
            } catch { }
        }
    }
    ne.isActive = function () {
        return !!this.g
    }
        ;
    function pt(oe) {
        return oe.g ? oe.g.readyState : 0
    }
    ne.ca = function () {
        try {
            return pt(this) > 2 ? this.g.status : -1
        } catch {
            return -1
        }
    }
        ,
        ne.la = function () {
            try {
                return this.g ? this.g.responseText : ""
            } catch {
                return ""
            }
        }
        ,
        ne.La = function (oe) {
            if (this.g) {
                var ue = this.g.responseText;
                return oe && ue.indexOf(oe) == 0 && (ue = ue.substring(oe.length)),
                    ki(ue)
            }
        }
        ;
    function _i(oe) {
        try {
            if (!oe.g)
                return null;
            if ("response" in oe.g)
                return oe.g.response;
            switch (oe.F) {
                case "":
                case "text":
                    return oe.g.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in oe.g)
                        return oe.g.mozResponseArrayBuffer
            }
            return null
        } catch {
            return null
        }
    }
    function es(oe) {
        const ue = {};
        oe = (oe.g && pt(oe) >= 2 && oe.g.getAllResponseHeaders() || "").split(`\r
`);
        for (let pe = 0; pe < oe.length; pe++) {
            if (me(oe[pe]))
                continue;
            var _e = xi(oe[pe]);
            const ve = _e[0];
            if (_e = _e[1],
                typeof _e != "string")
                continue;
            _e = _e.trim();
            const Ve = ue[ve] || [];
            ue[ve] = Ve,
                Ve.push(_e)
        }
        nr(ue, function (pe) {
            return pe.join(", ")
        })
    }
    ne.ya = function () {
        return this.o
    }
        ,
        ne.Ha = function () {
            return typeof this.l == "string" ? this.l : String(this.l)
        }
        ;
    function Fn(oe, ue, _e) {
        return _e && _e.internalChannelParams && _e.internalChannelParams[oe] || ue
    }
    function di(oe) {
        this.za = 0,
            this.i = [],
            this.j = new Pn,
            this.ba = this.na = this.J = this.W = this.g = this.wa = this.G = this.H = this.u = this.U = this.o = null,
            this.Ya = this.V = 0,
            this.Sa = Fn("failFast", !1, oe),
            this.F = this.C = this.v = this.m = this.l = null,
            this.X = !0,
            this.xa = this.K = -1,
            this.Y = this.A = this.D = 0,
            this.Qa = Fn("baseRetryDelayMs", 5e3, oe),
            this.Za = Fn("retryDelaySeedMs", 1e4, oe),
            this.Ta = Fn("forwardChannelMaxRetries", 2, oe),
            this.va = Fn("forwardChannelRequestTimeoutMs", 2e4, oe),
            this.ma = oe && oe.xmlHttpFactory || void 0,
            this.Ua = oe && oe.Rb || void 0,
            this.Aa = oe && oe.useFetchStreams || !1,
            this.O = void 0,
            this.L = oe && oe.supportsCrossDomainXhr || !1,
            this.M = "",
            this.h = new Qr(oe && oe.concurrentRequestLimit),
            this.Ba = new Ji,
            this.S = oe && oe.fastHandshake || !1,
            this.R = oe && oe.encodeInitMessageHeaders || !1,
            this.S && this.R && (this.R = !1),
            this.Ra = oe && oe.Pb || !1,
            oe && oe.ua && this.j.ua(),
            oe && oe.forceLongPolling && (this.X = !1),
            this.aa = !this.S && this.X && oe && oe.detectBufferingProxy || !1,
            this.ia = void 0,
            oe && oe.longPollingTimeout && oe.longPollingTimeout > 0 && (this.ia = oe.longPollingTimeout),
            this.ta = void 0,
            this.T = 0,
            this.P = !1,
            this.ja = this.B = null
    }
    ne = di.prototype,
        ne.ka = 8,
        ne.I = 1,
        ne.connect = function (oe, ue, _e, pe) {
            Ge(0),
                this.W = oe,
                this.H = ue || {},
                _e && pe !== void 0 && (this.H.OSID = _e,
                    this.H.OAID = pe),
                this.F = this.X,
                this.J = Ai(this, null, this.W),
                Jn(this)
        }
        ;
    function Rr(oe) {
        if (fi(oe),
            oe.I == 3) {
            var ue = oe.V++
                , _e = Qe(oe.J);
            if (Ue(_e, "SID", oe.M),
                Ue(_e, "RID", ue),
                Ue(_e, "TYPE", "terminate"),
                Un(oe, _e),
                ue = new Ze(oe, oe.j, ue),
                ue.M = 2,
                ue.A = Gn(Qe(_e)),
                _e = !1,
                ae.navigator && ae.navigator.sendBeacon)
                try {
                    _e = ae.navigator.sendBeacon(ue.A.toString(), "")
                } catch { }
            !_e && ae.Image && (new Image().src = ue.A,
                _e = !0),
                _e || (ue.g = Ri(ue.j, null),
                    ue.g.ea(ue.A)),
                ue.F = Date.now(),
                zn(ue)
        }
        yi(oe)
    }
    function Yn(oe) {
        oe.g && (vr(oe),
            oe.g.cancel(),
            oe.g = null)
    }
    function fi(oe) {
        Yn(oe),
            oe.v && (ae.clearTimeout(oe.v),
                oe.v = null),
            Xn(oe),
            oe.h.cancel(),
            oe.m && (typeof oe.m == "number" && ae.clearTimeout(oe.m),
                oe.m = null)
    }
    function Jn(oe) {
        if (!Yr(oe.h) && !oe.m) {
            oe.m = !0;
            var ue = oe.Ea;
            $e || ge(),
                Oe || ($e(),
                    Oe = !0),
                Ie.add(ue, oe),
                oe.D = 0
        }
    }
    function ts(oe, ue) {
        return Jr(oe.h) >= oe.h.j - (oe.m ? 1 : 0) ? !1 : oe.m ? (oe.i = ue.G.concat(oe.i),
            !0) : oe.I == 1 || oe.I == 2 || oe.D >= (oe.Sa ? 0 : oe.Ta) ? !1 : (oe.m = Rn(he(oe.Ea, oe, ue), Ii(oe, oe.D)),
                oe.D++,
                !0)
    }
    ne.Ea = function (oe) {
        if (this.m)
            if (this.m = null,
                this.I == 1) {
                if (!oe) {
                    this.V = Math.floor(Math.random() * 1e5),
                        oe = this.V++;
                    const ve = new Ze(this, this.j, oe);
                    let Ve = this.o;
                    if (this.U && (Ve ? (Ve = Bn(Ve),
                        Sr(Ve, this.U)) : Ve = this.U),
                        this.u !== null || this.R || (ve.J = Ve,
                            Ve = null),
                        this.S)
                        e: {
                            for (var ue = 0, _e = 0; _e < this.i.length; _e++) {
                                t: {
                                    var pe = this.i[_e];
                                    if ("__data__" in pe.map && (pe = pe.map.__data__,
                                        typeof pe == "string")) {
                                        pe = pe.length;
                                        break t
                                    }
                                    pe = void 0
                                }
                                if (pe === void 0)
                                    break;
                                if (ue += pe,
                                    ue > 4096) {
                                    ue = _e;
                                    break e
                                }
                                if (ue === 4096 || _e === this.i.length - 1) {
                                    ue = _e + 1;
                                    break e
                                }
                            }
                            ue = 1e3
                        }
                    else
                        ue = 1e3;
                    ue = mi(this, ve, ue),
                        _e = Qe(this.J),
                        Ue(_e, "RID", oe),
                        Ue(_e, "CVER", 22),
                        this.G && Ue(_e, "X-HTTP-Session-Id", this.G),
                        Un(this, _e),
                        Ve && (this.R ? ue = "headers=" + Vn(ci(Ve)) + "&" + ue : this.u && Ar(_e, this.u, Ve)),
                        Tr(this.h, ve),
                        this.Ra && Ue(_e, "TYPE", "init"),
                        this.S ? (Ue(_e, "$req", ue),
                            Ue(_e, "SID", "null"),
                            ve.U = !0,
                            pr(ve, _e, null)) : pr(ve, _e, ue),
                        this.I = 2
                }
            } else
                this.I == 3 && (oe ? pi(this, oe) : this.i.length == 0 || Yr(this.h) || pi(this))
    }
        ;
    function pi(oe, ue) {
        var _e;
        ue ? _e = ue.l : _e = oe.V++;
        const pe = Qe(oe.J);
        Ue(pe, "SID", oe.M),
            Ue(pe, "RID", _e),
            Ue(pe, "AID", oe.K),
            Un(oe, pe),
            oe.u && oe.o && Ar(pe, oe.u, oe.o),
            _e = new Ze(oe, oe.j, _e, oe.D + 1),
            oe.u === null && (_e.J = oe.o),
            ue && (oe.i = ue.G.concat(oe.i)),
            ue = mi(oe, _e, 1e3),
            _e.H = Math.round(oe.va * .5) + Math.round(oe.va * .5 * Math.random()),
            Tr(oe.h, _e),
            pr(_e, pe, ue)
    }
    function Un(oe, ue) {
        oe.H && xt(oe.H, function (_e, pe) {
            Ue(ue, pe, _e)
        }),
            oe.l && xt({}, function (_e, pe) {
                Ue(ue, pe, _e)
            })
    }
    function mi(oe, ue, _e) {
        _e = Math.min(oe.i.length, _e);
        const pe = oe.l ? he(oe.l.Ka, oe.l, oe) : null;
        e: {
            var ve = oe.i;
            let Le = -1;
            for (; ;) {
                const qe = ["count=" + _e];
                Le == -1 ? _e > 0 ? (Le = ve[0].g,
                    qe.push("ofs=" + Le)) : Le = 0 : qe.push("ofs=" + Le);
                let Fe = !0;
                for (let We = 0; We < _e; We++) {
                    var Ve = ve[We].g;
                    const Je = ve[We].map;
                    if (Ve -= Le,
                        Ve < 0)
                        Le = Math.max(0, ve[We].g - 100),
                            Fe = !1;
                    else
                        try {
                            Ve = "req" + Ve + "_" || "";
                            try {
                                var Ce = Je instanceof Map ? Je : Object.entries(Je);
                                for (const [Lt, yt] of Ce) {
                                    let vt = yt;
                                    ce(yt) && (vt = lr(yt)),
                                        qe.push(Ve + Lt + "=" + encodeURIComponent(vt))
                                }
                            } catch (Lt) {
                                throw qe.push(Ve + "type=" + encodeURIComponent("_badmap")),
                                Lt
                            }
                        } catch {
                            pe && pe(Je)
                        }
                }
                if (Fe) {
                    Ce = qe.join("&");
                    break e
                }
            }
            Ce = void 0
        }
        return oe = oe.i.splice(0, _e),
            ue.G = oe,
            Ce
    }
    function gi(oe) {
        if (!oe.g && !oe.v) {
            oe.Y = 1;
            var ue = oe.Da;
            $e || ge(),
                Oe || ($e(),
                    Oe = !0),
                Ie.add(ue, oe),
                oe.A = 0
        }
    }
    function Pr(oe) {
        return oe.g || oe.v || oe.A >= 3 ? !1 : (oe.Y++,
            oe.v = Rn(he(oe.Da, oe), Ii(oe, oe.A)),
            oe.A++,
            !0)
    }
    ne.Da = function () {
        if (this.v = null,
            Ei(this),
            this.aa && !(this.P || this.g == null || this.T <= 0)) {
            var oe = 4 * this.T;
            this.j.info("BP detection timer enabled: " + oe),
                this.B = Rn(he(this.Wa, this), oe)
        }
    }
        ,
        ne.Wa = function () {
            this.B && (this.B = null,
                this.j.info("BP detection timeout reached."),
                this.j.info("Buffering proxy detected and switch to long-polling!"),
                this.F = !1,
                this.P = !0,
                Ge(10),
                Yn(this),
                Ei(this))
        }
        ;
    function vr(oe) {
        oe.B != null && (ae.clearTimeout(oe.B),
            oe.B = null)
    }
    function Ei(oe) {
        oe.g = new Ze(oe, oe.j, "rpc", oe.Y),
            oe.u === null && (oe.g.J = oe.o),
            oe.g.P = 0;
        var ue = Qe(oe.na);
        Ue(ue, "RID", "rpc"),
            Ue(ue, "SID", oe.M),
            Ue(ue, "AID", oe.K),
            Ue(ue, "CI", oe.F ? "0" : "1"),
            !oe.F && oe.ia && Ue(ue, "TO", oe.ia),
            Ue(ue, "TYPE", "xmlhttp"),
            Un(oe, ue),
            oe.u && oe.o && Ar(ue, oe.u, oe.o),
            oe.O && (oe.g.H = oe.O);
        var _e = oe.g;
        oe = oe.ba,
            _e.M = 1,
            _e.A = Gn(Qe(ue)),
            _e.u = null,
            _e.R = !0,
            zr(_e, oe)
    }
    ne.Va = function () {
        this.C != null && (this.C = null,
            Yn(this),
            Pr(this),
            Ge(19))
    }
        ;
    function Xn(oe) {
        oe.C != null && (ae.clearTimeout(oe.C),
            oe.C = null)
    }
    function Ti(oe, ue) {
        var _e = null;
        if (oe.g == ue) {
            Xn(oe),
                vr(oe),
                oe.g = null;
            var pe = 2
        } else if (Er(oe.h, ue))
            _e = ue.G,
                Xr(oe.h, ue),
                pe = 1;
        else
            return;
        if (oe.I != 0) {
            if (ue.o)
                if (pe == 1) {
                    _e = ue.u ? ue.u.length : 0,
                        ue = Date.now() - ue.F;
                    var ve = oe.D;
                    pe = Hn(),
                        ze(pe, new Br(pe, _e)),
                        Jn(oe)
                } else
                    gi(oe);
            else if (ve = ue.m,
                ve == 3 || ve == 0 && ue.X > 0 || !(pe == 1 && ts(oe, ue) || pe == 2 && Pr(oe)))
                switch (_e && _e.length > 0 && (ue = oe.h,
                    ue.i = ue.i.concat(_e)),
                ve) {
                    case 1:
                        Mt(oe, 5);
                        break;
                    case 4:
                        Mt(oe, 10);
                        break;
                    case 3:
                        Mt(oe, 6);
                        break;
                    default:
                        Mt(oe, 2)
                }
        }
    }
    function Ii(oe, ue) {
        let _e = oe.Qa + Math.floor(Math.random() * oe.Za);
        return oe.isActive() || (_e *= 2),
            _e * ue
    }
    function Mt(oe, ue) {
        if (oe.j.info("Error code " + ue),
            ue == 2) {
            var _e = he(oe.bb, oe)
                , pe = oe.Ua;
            const ve = !pe;
            pe = new ct(pe || "//www.google.com/images/cleardot.gif"),
                ae.location && ae.location.protocol == "http" || Dn(pe, "https"),
                Gn(pe),
                ve ? Qi(pe.toString(), _e) : Yi(pe.toString(), _e)
        } else
            Ge(2);
        oe.I = 0,
            oe.l && oe.l.pa(ue),
            yi(oe),
            fi(oe)
    }
    ne.bb = function (oe) {
        oe ? (this.j.info("Successfully pinged google.com"),
            Ge(2)) : (this.j.info("Failed to ping google.com"),
                Ge(1))
    }
        ;
    function yi(oe) {
        if (oe.I = 0,
            oe.ja = [],
            oe.l) {
            const ue = Zr(oe.h);
            (ue.length != 0 || oe.i.length != 0) && (we(oe.ja, ue),
                we(oe.ja, oe.i),
                oe.h.i.length = 0,
                Pe(oe.i),
                oe.i.length = 0),
                oe.l.oa()
        }
    }
    function Ai(oe, ue, _e) {
        var pe = _e instanceof ct ? Qe(_e) : new ct(_e);
        if (pe.g != "")
            ue && (pe.g = ue + "." + pe.g),
                kn(pe, pe.u);
        else {
            var ve = ae.location;
            pe = ve.protocol,
                ue = ue ? ue + "." + ve.hostname : ve.hostname,
                ve = +ve.port;
            const Ve = new ct(null);
            pe && Dn(Ve, pe),
                ue && (Ve.g = ue),
                ve && kn(Ve, ve),
                _e && (Ve.h = _e),
                pe = Ve
        }
        return _e = oe.G,
            ue = oe.wa,
            _e && ue && Ue(pe, _e, ue),
            Ue(pe, "VER", oe.ka),
            Un(oe, pe),
            pe
    }
    function Ri(oe, ue, _e) {
        if (ue && !oe.L)
            throw Error("Can't create secondary domain capable XhrIo object.");
        return ue = oe.Aa && !oe.ma ? new Be(new yr({
            ab: _e
        })) : new Be(oe.ma),
            ue.Fa(oe.L),
            ue
    }
    ne.isActive = function () {
        return !!this.l && this.l.isActive(this)
    }
        ;
    function Pi() { }
    ne = Pi.prototype,
        ne.ra = function () { }
        ,
        ne.qa = function () { }
        ,
        ne.pa = function () { }
        ,
        ne.oa = function () { }
        ,
        ne.isActive = function () {
            return !0
        }
        ,
        ne.Ka = function () { }
        ;
    function Zn() { }
    Zn.prototype.g = function (oe, ue) {
        return new Ke(oe, ue)
    }
        ;
    function Ke(oe, ue) {
        je.call(this),
            this.g = new di(ue),
            this.l = oe,
            this.h = ue && ue.messageUrlParams || null,
            oe = ue && ue.messageHeaders || null,
            ue && ue.clientProtocolHeaderRequired && (oe ? oe["X-Client-Protocol"] = "webchannel" : oe = {
                "X-Client-Protocol": "webchannel"
            }),
            this.g.o = oe,
            oe = ue && ue.initMessageHeaders || null,
            ue && ue.messageContentType && (oe ? oe["X-WebChannel-Content-Type"] = ue.messageContentType : oe = {
                "X-WebChannel-Content-Type": ue.messageContentType
            }),
            ue && ue.sa && (oe ? oe["X-WebChannel-Client-Profile"] = ue.sa : oe = {
                "X-WebChannel-Client-Profile": ue.sa
            }),
            this.g.U = oe,
            (oe = ue && ue.Qb) && !me(oe) && (this.g.u = oe),
            this.A = ue && ue.supportsCrossDomainXhr || !1,
            this.v = ue && ue.sendRawJson || !1,
            (ue = ue && ue.httpSessionIdParam) && !me(ue) && (this.g.G = ue,
                oe = this.h,
                oe !== null && ue in oe && (oe = this.h,
                    ue in oe && delete oe[ue])),
            this.j = new Kt(this)
    }
    fe(Ke, je),
        Ke.prototype.m = function () {
            this.g.l = this.j,
                this.A && (this.g.L = !0),
                this.g.connect(this.l, this.h || void 0)
        }
        ,
        Ke.prototype.close = function () {
            Rr(this.g)
        }
        ,
        Ke.prototype.o = function (oe) {
            var ue = this.g;
            if (typeof oe == "string") {
                var _e = {};
                _e.__data__ = oe,
                    oe = _e
            } else
                this.v && (_e = {},
                    _e.__data__ = lr(oe),
                    oe = _e);
            ue.i.push(new Bi(ue.Ya++, oe)),
                ue.I == 3 && Jn(ue)
        }
        ,
        Ke.prototype.N = function () {
            this.g.l = null,
                delete this.j,
                Rr(this.g),
                delete this.g,
                Ke.Z.N.call(this)
        }
        ;
    function vi(oe) {
        hr.call(this),
            oe.__headers__ && (this.headers = oe.__headers__,
                this.statusCode = oe.__status__,
                delete oe.__headers__,
                delete oe.__status__);
        var ue = oe.__sm__;
        if (ue) {
            e: {
                for (const _e in ue) {
                    oe = _e;
                    break e
                }
                oe = void 0
            }
            (this.i = oe) && (oe = this.i,
                ue = ue !== null && oe in ue ? ue[oe] : void 0),
                this.data = ue
        } else
            this.data = oe
    }
    fe(vi, hr);
    function Vi() {
        _r.call(this),
            this.status = 1
    }
    fe(Vi, _r);
    function Kt(oe) {
        this.g = oe
    }
    fe(Kt, Pi),
        Kt.prototype.ra = function () {
            ze(this.g, "a")
        }
        ,
        Kt.prototype.qa = function (oe) {
            ze(this.g, new vi(oe))
        }
        ,
        Kt.prototype.pa = function (oe) {
            ze(this.g, new Vi)
        }
        ,
        Kt.prototype.oa = function () {
            ze(this.g, "b")
        }
        ,
        Zn.prototype.createWebChannel = Zn.prototype.g,
        Ke.prototype.send = Ke.prototype.o,
        Ke.prototype.open = Ke.prototype.m,
        Ke.prototype.close = Ke.prototype.close,
        createWebChannelTransport = function () {
            return new Zn
        }
        ,
        getStatEventTarget = function () {
            return Hn()
        }
        ,
        Event = wt,
        Stat = {
            jb: 0,
            mb: 1,
            nb: 2,
            Hb: 3,
            Mb: 4,
            Jb: 5,
            Kb: 6,
            Ib: 7,
            Gb: 8,
            Lb: 9,
            PROXY: 10,
            NOPROXY: 11,
            Eb: 12,
            Ab: 13,
            Bb: 14,
            zb: 15,
            Cb: 16,
            Db: 17,
            fb: 18,
            eb: 19,
            gb: 20
        },
        jn.NO_ERROR = 0,
        jn.TIMEOUT = 8,
        jn.HTTP_ERROR = 6,
        ErrorCode$1 = jn,
        qr.COMPLETE = "complete",
        EventType = qr,
        $r.EventType = In,
        In.OPEN = "a",
        In.CLOSE = "b",
        In.ERROR = "c",
        In.MESSAGE = "d",
        je.prototype.listen = je.prototype.J,
        WebChannel = $r,
        Be.prototype.listenOnce = Be.prototype.K,
        Be.prototype.getLastError = Be.prototype.Ha,
        Be.prototype.getLastErrorCode = Be.prototype.ya,
        Be.prototype.getStatus = Be.prototype.ca,
        Be.prototype.getResponseJson = Be.prototype.La,
        Be.prototype.getResponseText = Be.prototype.la,
        Be.prototype.send = Be.prototype.ea,
        Be.prototype.setWithCredentials = Be.prototype.Fa,
        XhrIo = Be
}
).apply(typeof commonjsGlobal < "u" ? commonjsGlobal : typeof self < "u" ? self : typeof window < "u" ? window : {});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class User {
    constructor(ee) {
        this.uid = ee
    }
    isAuthenticated() {
        return this.uid != null
    }
    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
    }
    isEqual(ee) {
        return ee.uid === this.uid
    }
}
User.UNAUTHENTICATED = new User(null),
    User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"),
    User.FIRST_PARTY = new User("first-party-uid"),
    User.MOCK_USER = new User("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let b = "12.11.0";
function __PRIVATE_setSDKVersion(ne) {
    b = ne
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S = new Logger("@firebase/firestore");
function __PRIVATE_getLogLevel() {
    return S.logLevel
}
function __PRIVATE_logDebug(ne, ...ee) {
    if (S.logLevel <= LogLevel.DEBUG) {
        const te = ee.map(__PRIVATE_argToString);
        S.debug(`Firestore (${b}): ${ne}`, ...te)
    }
}
function __PRIVATE_logError(ne, ...ee) {
    if (S.logLevel <= LogLevel.ERROR) {
        const te = ee.map(__PRIVATE_argToString);
        S.error(`Firestore (${b}): ${ne}`, ...te)
    }
}
function __PRIVATE_logWarn(ne, ...ee) {
    if (S.logLevel <= LogLevel.WARN) {
        const te = ee.map(__PRIVATE_argToString);
        S.warn(`Firestore (${b}): ${ne}`, ...te)
    }
}
function __PRIVATE_argToString(ne) {
    if (typeof ne == "string")
        return ne;
    try {
        return function (te) {
            return JSON.stringify(te)
        }(ne)
    } catch {
        return ne
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fail(ne, ee, te) {
    let re = "Unexpected state";
    typeof ee == "string" ? re = ee : te = ee,
        __PRIVATE__fail(ne, re, te)
}
function __PRIVATE__fail(ne, ee, te) {
    let re = `FIRESTORE (${b}) INTERNAL ASSERTION FAILED: ${ee} (ID: ${ne.toString(16)})`;
    if (te !== void 0)
        try {
            re += " CONTEXT: " + JSON.stringify(te)
        } catch {
            re += " CONTEXT: " + te
        }
    throw __PRIVATE_logError(re),
    new Error(re)
}
function __PRIVATE_hardAssert(ne, ee, te, re) {
    let ie = "Unexpected state";
    typeof te == "string" ? ie = te : re = te,
        ne || __PRIVATE__fail(ee, ie, re)
}
function __PRIVATE_debugCast(ne, ee) {
    return ne
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss"
};
class FirestoreError extends FirebaseError {
    constructor(ee, te) {
        super(ee, te),
            this.code = ee,
            this.message = te,
            this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_Deferred {
    constructor() {
        this.promise = new Promise((ee, te) => {
            this.resolve = ee,
                this.reject = te
        }
        )
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_OAuthToken {
    constructor(ee, te) {
        this.user = te,
            this.type = "OAuth",
            this.headers = new Map,
            this.headers.set("Authorization", `Bearer ${ee}`)
    }
}
class __PRIVATE_EmptyAuthCredentialsProvider {
    getToken() {
        return Promise.resolve(null)
    }
    invalidateToken() { }
    start(ee, te) {
        ee.enqueueRetryable(() => te(User.UNAUTHENTICATED))
    }
    shutdown() { }
}
class __PRIVATE_EmulatorAuthCredentialsProvider {
    constructor(ee) {
        this.token = ee,
            this.changeListener = null
    }
    getToken() {
        return Promise.resolve(this.token)
    }
    invalidateToken() { }
    start(ee, te) {
        this.changeListener = te,
            ee.enqueueRetryable(() => te(this.token.user))
    }
    shutdown() {
        this.changeListener = null
    }
}
class __PRIVATE_FirebaseAuthCredentialsProvider {
    constructor(ee) {
        this.t = ee,
            this.currentUser = User.UNAUTHENTICATED,
            this.i = 0,
            this.forceRefresh = !1,
            this.auth = null
    }
    start(ee, te) {
        __PRIVATE_hardAssert(this.o === void 0, 42304);
        let re = this.i;
        const ie = le => this.i !== re ? (re = this.i,
            te(le)) : Promise.resolve();
        let se = new __PRIVATE_Deferred;
        this.o = () => {
            this.i++,
                this.currentUser = this.u(),
                se.resolve(),
                se = new __PRIVATE_Deferred,
                ee.enqueueRetryable(() => ie(this.currentUser))
        }
            ;
        const ae = () => {
            const le = se;
            ee.enqueueRetryable(async () => {
                await le.promise,
                    await ie(this.currentUser)
            }
            )
        }
            , ce = le => {
                __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"),
                    this.auth = le,
                    this.o && (this.auth.addAuthTokenListener(this.o),
                        ae())
            }
            ;
        this.t.onInit(le => ce(le)),
            setTimeout(() => {
                if (!this.auth) {
                    const le = this.t.getImmediate({
                        optional: !0
                    });
                    le ? ce(le) : (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
                        se.resolve(),
                        se = new __PRIVATE_Deferred)
                }
            }
                , 0),
            ae()
    }
    getToken() {
        const ee = this.i
            , te = this.forceRefresh;
        return this.forceRefresh = !1,
            this.auth ? this.auth.getToken(te).then(re => this.i !== ee ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."),
                this.getToken()) : re ? (__PRIVATE_hardAssert(typeof re.accessToken == "string", 31837, {
                    l: re
                }),
                    new __PRIVATE_OAuthToken(re.accessToken, this.currentUser)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
            this.o = void 0
    }
    u() {
        const ee = this.auth && this.auth.getUid();
        return __PRIVATE_hardAssert(ee === null || typeof ee == "string", 2055, {
            h: ee
        }),
            new User(ee)
    }
}
class __PRIVATE_FirstPartyToken {
    constructor(ee, te, re) {
        this.P = ee,
            this.T = te,
            this.I = re,
            this.type = "FirstParty",
            this.user = User.FIRST_PARTY,
            this.R = new Map
    }
    A() {
        return this.I ? this.I() : null
    }
    get headers() {
        this.R.set("X-Goog-AuthUser", this.P);
        const ee = this.A();
        return ee && this.R.set("Authorization", ee),
            this.T && this.R.set("X-Goog-Iam-Authorization-Token", this.T),
            this.R
    }
}
class __PRIVATE_FirstPartyAuthCredentialsProvider {
    constructor(ee, te, re) {
        this.P = ee,
            this.T = te,
            this.I = re
    }
    getToken() {
        return Promise.resolve(new __PRIVATE_FirstPartyToken(this.P, this.T, this.I))
    }
    start(ee, te) {
        ee.enqueueRetryable(() => te(User.FIRST_PARTY))
    }
    shutdown() { }
    invalidateToken() { }
}
class AppCheckToken {
    constructor(ee) {
        this.value = ee,
            this.type = "AppCheck",
            this.headers = new Map,
            ee && ee.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
    }
}
class __PRIVATE_FirebaseAppCheckTokenProvider {
    constructor(ee, te) {
        this.V = te,
            this.forceRefresh = !1,
            this.appCheck = null,
            this.m = null,
            this.p = null,
            _isFirebaseServerApp(ee) && ee.settings.appCheckToken && (this.p = ee.settings.appCheckToken)
    }
    start(ee, te) {
        __PRIVATE_hardAssert(this.o === void 0, 3512);
        const re = se => {
            se.error != null && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${se.error.message}`);
            const ae = se.token !== this.m;
            return this.m = se.token,
                __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${ae ? "new" : "existing"} token.`),
                ae ? te(se.token) : Promise.resolve()
        }
            ;
        this.o = se => {
            ee.enqueueRetryable(() => re(se))
        }
            ;
        const ie = se => {
            __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"),
                this.appCheck = se,
                this.o && this.appCheck.addTokenListener(this.o)
        }
            ;
        this.V.onInit(se => ie(se)),
            setTimeout(() => {
                if (!this.appCheck) {
                    const se = this.V.getImmediate({
                        optional: !0
                    });
                    se ? ie(se) : __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
                }
            }
                , 0)
    }
    getToken() {
        if (this.p)
            return Promise.resolve(new AppCheckToken(this.p));
        const ee = this.forceRefresh;
        return this.forceRefresh = !1,
            this.appCheck ? this.appCheck.getToken(ee).then(te => te ? (__PRIVATE_hardAssert(typeof te.token == "string", 44558, {
                tokenResult: te
            }),
                this.m = te.token,
                new AppCheckToken(te.token)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
            this.o = void 0
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_randomBytes(ne) {
    const ee = typeof self < "u" && (self.crypto || self.msCrypto)
        , te = new Uint8Array(ne);
    if (ee && typeof ee.getRandomValues == "function")
        ee.getRandomValues(te);
    else
        for (let re = 0; re < ne; re++)
            te[re] = Math.floor(256 * Math.random());
    return te
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_AutoId {
    static newId() {
        const ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            , te = 62 * Math.floor(4.129032258064516);
        let re = "";
        for (; re.length < 20;) {
            const ie = __PRIVATE_randomBytes(40);
            for (let se = 0; se < ie.length; ++se)
                re.length < 20 && ie[se] < te && (re += ee.charAt(ie[se] % 62))
        }
        return re
    }
}
function __PRIVATE_primitiveComparator(ne, ee) {
    return ne < ee ? -1 : ne > ee ? 1 : 0
}
function __PRIVATE_compareUtf8Strings(ne, ee) {
    const te = Math.min(ne.length, ee.length);
    for (let re = 0; re < te; re++) {
        const ie = ne.charAt(re)
            , se = ee.charAt(re);
        if (ie !== se)
            return __PRIVATE_isSurrogate(ie) === __PRIVATE_isSurrogate(se) ? __PRIVATE_primitiveComparator(ie, se) : __PRIVATE_isSurrogate(ie) ? 1 : -1
    }
    return __PRIVATE_primitiveComparator(ne.length, ee.length)
}
const C = 55296
    , v = 57343;
function __PRIVATE_isSurrogate(ne) {
    const ee = ne.charCodeAt(0);
    return ee >= C && ee <= v
}
function __PRIVATE_arrayEquals(ne, ee, te) {
    return ne.length === ee.length && ne.every((re, ie) => te(re, ee[ie]))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F = "__name__";
class BasePath {
    constructor(ee, te, re) {
        te === void 0 ? te = 0 : te > ee.length && fail(637, {
            offset: te,
            range: ee.length
        }),
            re === void 0 ? re = ee.length - te : re > ee.length - te && fail(1746, {
                length: re,
                range: ee.length - te
            }),
            this.segments = ee,
            this.offset = te,
            this.len = re
    }
    get length() {
        return this.len
    }
    isEqual(ee) {
        return BasePath.comparator(this, ee) === 0
    }
    child(ee) {
        const te = this.segments.slice(this.offset, this.limit());
        return ee instanceof BasePath ? ee.forEach(re => {
            te.push(re)
        }
        ) : te.push(ee),
            this.construct(te)
    }
    limit() {
        return this.offset + this.length
    }
    popFirst(ee) {
        return ee = ee === void 0 ? 1 : ee,
            this.construct(this.segments, this.offset + ee, this.length - ee)
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1)
    }
    firstSegment() {
        return this.segments[this.offset]
    }
    lastSegment() {
        return this.get(this.length - 1)
    }
    get(ee) {
        return this.segments[this.offset + ee]
    }
    isEmpty() {
        return this.length === 0
    }
    isPrefixOf(ee) {
        if (ee.length < this.length)
            return !1;
        for (let te = 0; te < this.length; te++)
            if (this.get(te) !== ee.get(te))
                return !1;
        return !0
    }
    isImmediateParentOf(ee) {
        if (this.length + 1 !== ee.length)
            return !1;
        for (let te = 0; te < this.length; te++)
            if (this.get(te) !== ee.get(te))
                return !1;
        return !0
    }
    forEach(ee) {
        for (let te = this.offset, re = this.limit(); te < re; te++)
            ee(this.segments[te])
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit())
    }
    static comparator(ee, te) {
        const re = Math.min(ee.length, te.length);
        for (let ie = 0; ie < re; ie++) {
            const se = BasePath.compareSegments(ee.get(ie), te.get(ie));
            if (se !== 0)
                return se
        }
        return __PRIVATE_primitiveComparator(ee.length, te.length)
    }
    static compareSegments(ee, te) {
        const re = BasePath.isNumericId(ee)
            , ie = BasePath.isNumericId(te);
        return re && !ie ? -1 : !re && ie ? 1 : re && ie ? BasePath.extractNumericId(ee).compare(BasePath.extractNumericId(te)) : __PRIVATE_compareUtf8Strings(ee, te)
    }
    static isNumericId(ee) {
        return ee.startsWith("__id") && ee.endsWith("__")
    }
    static extractNumericId(ee) {
        return Integer.fromString(ee.substring(4, ee.length - 2))
    }
}
class ResourcePath extends BasePath {
    construct(ee, te, re) {
        return new ResourcePath(ee, te, re)
    }
    canonicalString() {
        return this.toArray().join("/")
    }
    toString() {
        return this.canonicalString()
    }
    toUriEncodedString() {
        return this.toArray().map(encodeURIComponent).join("/")
    }
    static fromString(...ee) {
        const te = [];
        for (const re of ee) {
            if (re.indexOf("//") >= 0)
                throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid segment (${re}). Paths must not contain // in them.`);
            te.push(...re.split("/").filter(ie => ie.length > 0))
        }
        return new ResourcePath(te)
    }
    static emptyPath() {
        return new ResourcePath([])
    }
}
const M = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class FieldPath$1 extends BasePath {
    construct(ee, te, re) {
        return new FieldPath$1(ee, te, re)
    }
    static isValidIdentifier(ee) {
        return M.test(ee)
    }
    canonicalString() {
        return this.toArray().map(ee => (ee = ee.replace(/\\/g, "\\\\").replace(/`/g, "\\`"),
            FieldPath$1.isValidIdentifier(ee) || (ee = "`" + ee + "`"),
            ee)).join(".")
    }
    toString() {
        return this.canonicalString()
    }
    isKeyField() {
        return this.length === 1 && this.get(0) === F
    }
    static keyField() {
        return new FieldPath$1([F])
    }
    static fromServerFormat(ee) {
        const te = [];
        let re = ""
            , ie = 0;
        const se = () => {
            if (re.length === 0)
                throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid field path (${ee}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            te.push(re),
                re = ""
        }
            ;
        let ae = !1;
        for (; ie < ee.length;) {
            const ce = ee[ie];
            if (ce === "\\") {
                if (ie + 1 === ee.length)
                    throw new FirestoreError(D.INVALID_ARGUMENT, "Path has trailing escape character: " + ee);
                const le = ee[ie + 1];
                if (le !== "\\" && le !== "." && le !== "`")
                    throw new FirestoreError(D.INVALID_ARGUMENT, "Path has invalid escape sequence: " + ee);
                re += le,
                    ie += 2
            } else
                ce === "`" ? (ae = !ae,
                    ie++) : ce !== "." || ae ? (re += ce,
                        ie++) : (se(),
                            ie++)
        }
        if (se(),
            ae)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Unterminated ` in path: " + ee);
        return new FieldPath$1(te)
    }
    static emptyPath() {
        return new FieldPath$1([])
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DocumentKey {
    constructor(ee) {
        this.path = ee
    }
    static fromPath(ee) {
        return new DocumentKey(ResourcePath.fromString(ee))
    }
    static fromName(ee) {
        return new DocumentKey(ResourcePath.fromString(ee).popFirst(5))
    }
    static empty() {
        return new DocumentKey(ResourcePath.emptyPath())
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment()
    }
    hasCollectionId(ee) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === ee
    }
    getCollectionGroup() {
        return this.path.get(this.path.length - 2)
    }
    getCollectionPath() {
        return this.path.popLast()
    }
    isEqual(ee) {
        return ee !== null && ResourcePath.comparator(this.path, ee.path) === 0
    }
    toString() {
        return this.path.toString()
    }
    static comparator(ee, te) {
        return ResourcePath.comparator(ee.path, te.path)
    }
    static isDocumentKey(ee) {
        return ee.length % 2 == 0
    }
    static fromSegments(ee) {
        return new DocumentKey(new ResourcePath(ee.slice()))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_validateNonEmptyArgument(ne, ee, te) {
    if (!te)
        throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${ne}() cannot be called with an empty ${ee}.`)
}
function __PRIVATE_validateIsNotUsedTogether(ne, ee, te, re) {
    if (ee === !0 && re === !0)
        throw new FirestoreError(D.INVALID_ARGUMENT, `${ne} and ${te} cannot be used together.`)
}
function __PRIVATE_validateDocumentPath(ne) {
    if (!DocumentKey.isDocumentKey(ne))
        throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${ne} has ${ne.length}.`)
}
function __PRIVATE_validateCollectionPath(ne) {
    if (DocumentKey.isDocumentKey(ne))
        throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${ne} has ${ne.length}.`)
}
function __PRIVATE_isPlainObject(ne) {
    return typeof ne == "object" && ne !== null && (Object.getPrototypeOf(ne) === Object.prototype || Object.getPrototypeOf(ne) === null)
}
function __PRIVATE_valueDescription(ne) {
    if (ne === void 0)
        return "undefined";
    if (ne === null)
        return "null";
    if (typeof ne == "string")
        return ne.length > 20 && (ne = `${ne.substring(0, 20)}...`),
            JSON.stringify(ne);
    if (typeof ne == "number" || typeof ne == "boolean")
        return "" + ne;
    if (typeof ne == "object") {
        if (ne instanceof Array)
            return "an array";
        {
            const ee = function (re) {
                return re.constructor ? re.constructor.name : null
            }(ne);
            return ee ? `a custom ${ee} object` : "an object"
        }
    }
    return typeof ne == "function" ? "a function" : fail(12329, {
        type: typeof ne
    })
}
function __PRIVATE_cast(ne, ee) {
    if ("_delegate" in ne && (ne = ne._delegate),
        !(ne instanceof ee)) {
        if (ee.name === ne.constructor.name)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const te = __PRIVATE_valueDescription(ne);
            throw new FirestoreError(D.INVALID_ARGUMENT, `Expected type '${ee.name}', but it was: ${te}`)
        }
    }
    return ne
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function property(ne, ee) {
    const te = {
        typeString: ne
    };
    return ee && (te.value = ee),
        te
}
function __PRIVATE_validateJSON(ne, ee) {
    if (!__PRIVATE_isPlainObject(ne))
        throw new FirestoreError(D.INVALID_ARGUMENT, "JSON must be an object");
    let te;
    for (const re in ee)
        if (ee[re]) {
            const ie = ee[re].typeString
                , se = "value" in ee[re] ? {
                    value: ee[re].value
                } : void 0;
            if (!(re in ne)) {
                te = `JSON missing required field: '${re}'`;
                break
            }
            const ae = ne[re];
            if (ie && typeof ae !== ie) {
                te = `JSON field '${re}' must be a ${ie}.`;
                break
            }
            if (se !== void 0 && ae !== se.value) {
                te = `Expected '${re}' field to equal '${se.value}'`;
                break
            }
        }
    if (te)
        throw new FirestoreError(D.INVALID_ARGUMENT, te);
    return !0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x = -62135596800
    , O = 1e6;
class Timestamp {
    static now() {
        return Timestamp.fromMillis(Date.now())
    }
    static fromDate(ee) {
        return Timestamp.fromMillis(ee.getTime())
    }
    static fromMillis(ee) {
        const te = Math.floor(ee / 1e3)
            , re = Math.floor((ee - 1e3 * te) * O);
        return new Timestamp(te, re)
    }
    constructor(ee, te) {
        if (this.seconds = ee,
            this.nanoseconds = te,
            te < 0)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + te);
        if (te >= 1e9)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + te);
        if (ee < x)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + ee);
        if (ee >= 253402300800)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + ee)
    }
    toDate() {
        return new Date(this.toMillis())
    }
    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / O
    }
    _compareTo(ee) {
        return this.seconds === ee.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, ee.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, ee.seconds)
    }
    isEqual(ee) {
        return ee.seconds === this.seconds && ee.nanoseconds === this.nanoseconds
    }
    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
    }
    toJSON() {
        return {
            type: Timestamp._jsonSchemaVersion,
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        }
    }
    static fromJSON(ee) {
        if (__PRIVATE_validateJSON(ee, Timestamp._jsonSchema))
            return new Timestamp(ee.seconds, ee.nanoseconds)
    }
    valueOf() {
        const ee = this.seconds - x;
        return String(ee).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
    }
}
Timestamp._jsonSchemaVersion = "firestore/timestamp/1.0",
    Timestamp._jsonSchema = {
        type: property("string", Timestamp._jsonSchemaVersion),
        seconds: property("number"),
        nanoseconds: property("number")
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SnapshotVersion {
    static fromTimestamp(ee) {
        return new SnapshotVersion(ee)
    }
    static min() {
        return new SnapshotVersion(new Timestamp(0, 0))
    }
    static max() {
        return new SnapshotVersion(new Timestamp(253402300799, 999999999))
    }
    constructor(ee) {
        this.timestamp = ee
    }
    compareTo(ee) {
        return this.timestamp._compareTo(ee.timestamp)
    }
    isEqual(ee) {
        return this.timestamp.isEqual(ee.timestamp)
    }
    toMicroseconds() {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")"
    }
    toTimestamp() {
        return this.timestamp
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N = -1;
function __PRIVATE_newIndexOffsetSuccessorFromReadTime(ne, ee) {
    const te = ne.toTimestamp().seconds
        , re = ne.toTimestamp().nanoseconds + 1
        , ie = SnapshotVersion.fromTimestamp(re === 1e9 ? new Timestamp(te + 1, 0) : new Timestamp(te, re));
    return new IndexOffset(ie, DocumentKey.empty(), ee)
}
function __PRIVATE_newIndexOffsetFromDocument(ne) {
    return new IndexOffset(ne.readTime, ne.key, N)
}
class IndexOffset {
    constructor(ee, te, re) {
        this.readTime = ee,
            this.documentKey = te,
            this.largestBatchId = re
    }
    static min() {
        return new IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), N)
    }
    static max() {
        return new IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), N)
    }
}
function __PRIVATE_indexOffsetComparator(ne, ee) {
    let te = ne.readTime.compareTo(ee.readTime);
    return te !== 0 ? te : (te = DocumentKey.comparator(ne.documentKey, ee.documentKey),
        te !== 0 ? te : __PRIVATE_primitiveComparator(ne.largestBatchId, ee.largestBatchId))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class PersistenceTransaction {
    constructor() {
        this.onCommittedListeners = []
    }
    addOnCommittedListener(ee) {
        this.onCommittedListeners.push(ee)
    }
    raiseOnCommittedEvent() {
        this.onCommittedListeners.forEach(ee => ee())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function __PRIVATE_ignoreIfPrimaryLeaseLoss(ne) {
    if (ne.code !== D.FAILED_PRECONDITION || ne.message !== B)
        throw ne;
    __PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease")
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PersistencePromise {
    constructor(ee) {
        this.nextCallback = null,
            this.catchCallback = null,
            this.result = void 0,
            this.error = void 0,
            this.isDone = !1,
            this.callbackAttached = !1,
            ee(te => {
                this.isDone = !0,
                    this.result = te,
                    this.nextCallback && this.nextCallback(te)
            }
                , te => {
                    this.isDone = !0,
                        this.error = te,
                        this.catchCallback && this.catchCallback(te)
                }
            )
    }
    catch(ee) {
        return this.next(void 0, ee)
    }
    next(ee, te) {
        return this.callbackAttached && fail(59440),
            this.callbackAttached = !0,
            this.isDone ? this.error ? this.wrapFailure(te, this.error) : this.wrapSuccess(ee, this.result) : new PersistencePromise((re, ie) => {
                this.nextCallback = se => {
                    this.wrapSuccess(ee, se).next(re, ie)
                }
                    ,
                    this.catchCallback = se => {
                        this.wrapFailure(te, se).next(re, ie)
                    }
            }
            )
    }
    toPromise() {
        return new Promise((ee, te) => {
            this.next(ee, te)
        }
        )
    }
    wrapUserFunction(ee) {
        try {
            const te = ee();
            return te instanceof PersistencePromise ? te : PersistencePromise.resolve(te)
        } catch (te) {
            return PersistencePromise.reject(te)
        }
    }
    wrapSuccess(ee, te) {
        return ee ? this.wrapUserFunction(() => ee(te)) : PersistencePromise.resolve(te)
    }
    wrapFailure(ee, te) {
        return ee ? this.wrapUserFunction(() => ee(te)) : PersistencePromise.reject(te)
    }
    static resolve(ee) {
        return new PersistencePromise((te, re) => {
            te(ee)
        }
        )
    }
    static reject(ee) {
        return new PersistencePromise((te, re) => {
            re(ee)
        }
        )
    }
    static waitFor(ee) {
        return new PersistencePromise((te, re) => {
            let ie = 0
                , se = 0
                , ae = !1;
            ee.forEach(ce => {
                ++ie,
                    ce.next(() => {
                        ++se,
                            ae && se === ie && te()
                    }
                        , le => re(le))
            }
            ),
                ae = !0,
                se === ie && te()
        }
        )
    }
    static or(ee) {
        let te = PersistencePromise.resolve(!1);
        for (const re of ee)
            te = te.next(ie => ie ? PersistencePromise.resolve(ie) : re());
        return te
    }
    static forEach(ee, te) {
        const re = [];
        return ee.forEach((ie, se) => {
            re.push(te.call(this, ie, se))
        }
        ),
            this.waitFor(re)
    }
    static mapArray(ee, te) {
        return new PersistencePromise((re, ie) => {
            const se = ee.length
                , ae = new Array(se);
            let ce = 0;
            for (let le = 0; le < se; le++) {
                const he = le;
                te(ee[he]).next(de => {
                    ae[he] = de,
                        ++ce,
                        ce === se && re(ae)
                }
                    , de => ie(de))
            }
        }
        )
    }
    static doWhile(ee, te) {
        return new PersistencePromise((re, ie) => {
            const se = () => {
                ee() === !0 ? te().next(() => {
                    se()
                }
                    , ie) : re()
            }
                ;
            se()
        }
        )
    }
}
function __PRIVATE_getAndroidVersion(ne) {
    const ee = ne.match(/Android ([\d.]+)/i)
        , te = ee ? ee[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(te)
}
function __PRIVATE_isIndexedDbTransactionError(ne) {
    return ne.name === "IndexedDbTransactionError"
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_ListenSequence {
    constructor(ee, te) {
        this.previousValue = ee,
            te && (te.sequenceNumberHandler = re => this.ae(re),
                this.ue = re => te.writeSequenceNumber(re))
    }
    ae(ee) {
        return this.previousValue = Math.max(ee, this.previousValue),
            this.previousValue
    }
    next() {
        const ee = ++this.previousValue;
        return this.ue && this.ue(ee),
            ee
    }
}
__PRIVATE_ListenSequence.ce = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q = -1;
function __PRIVATE_isNullOrUndefined(ne) {
    return ne == null
}
function __PRIVATE_isNegativeZero(ne) {
    return ne === 0 && 1 / ne == -1 / 0
}
function isSafeInteger(ne) {
    return typeof ne == "number" && Number.isInteger(ne) && !__PRIVATE_isNegativeZero(ne) && ne <= Number.MAX_SAFE_INTEGER && ne >= Number.MIN_SAFE_INTEGER
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U = "";
function __PRIVATE_encodeResourcePath(ne) {
    let ee = "";
    for (let te = 0; te < ne.length; te++)
        ee.length > 0 && (ee = __PRIVATE_encodeSeparator(ee)),
            ee = __PRIVATE_encodeSegment(ne.get(te), ee);
    return __PRIVATE_encodeSeparator(ee)
}
function __PRIVATE_encodeSegment(ne, ee) {
    let te = ee;
    const re = ne.length;
    for (let ie = 0; ie < re; ie++) {
        const se = ne.charAt(ie);
        switch (se) {
            case "\0":
                te += "";
                break;
            case U:
                te += "";
                break;
            default:
                te += se
        }
    }
    return te
}
function __PRIVATE_encodeSeparator(ne) {
    return ne + U + ""
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_objectSize(ne) {
    let ee = 0;
    for (const te in ne)
        Object.prototype.hasOwnProperty.call(ne, te) && ee++;
    return ee
}
function forEach(ne, ee) {
    for (const te in ne)
        Object.prototype.hasOwnProperty.call(ne, te) && ee(te, ne[te])
}
function isEmpty(ne) {
    for (const ee in ne)
        if (Object.prototype.hasOwnProperty.call(ne, ee))
            return !1;
    return !0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SortedMap {
    constructor(ee, te) {
        this.comparator = ee,
            this.root = te || LLRBNode.EMPTY
    }
    insert(ee, te) {
        return new SortedMap(this.comparator, this.root.insert(ee, te, this.comparator).copy(null, null, LLRBNode.BLACK, null, null))
    }
    remove(ee) {
        return new SortedMap(this.comparator, this.root.remove(ee, this.comparator).copy(null, null, LLRBNode.BLACK, null, null))
    }
    get(ee) {
        let te = this.root;
        for (; !te.isEmpty();) {
            const re = this.comparator(ee, te.key);
            if (re === 0)
                return te.value;
            re < 0 ? te = te.left : re > 0 && (te = te.right)
        }
        return null
    }
    indexOf(ee) {
        let te = 0
            , re = this.root;
        for (; !re.isEmpty();) {
            const ie = this.comparator(ee, re.key);
            if (ie === 0)
                return te + re.left.size;
            ie < 0 ? re = re.left : (te += re.left.size + 1,
                re = re.right)
        }
        return -1
    }
    isEmpty() {
        return this.root.isEmpty()
    }
    get size() {
        return this.root.size
    }
    minKey() {
        return this.root.minKey()
    }
    maxKey() {
        return this.root.maxKey()
    }
    inorderTraversal(ee) {
        return this.root.inorderTraversal(ee)
    }
    forEach(ee) {
        this.inorderTraversal((te, re) => (ee(te, re),
            !1))
    }
    toString() {
        const ee = [];
        return this.inorderTraversal((te, re) => (ee.push(`${te}:${re}`),
            !1)),
            `{${ee.join(", ")}}`
    }
    reverseTraversal(ee) {
        return this.root.reverseTraversal(ee)
    }
    getIterator() {
        return new SortedMapIterator(this.root, null, this.comparator, !1)
    }
    getIteratorFrom(ee) {
        return new SortedMapIterator(this.root, ee, this.comparator, !1)
    }
    getReverseIterator() {
        return new SortedMapIterator(this.root, null, this.comparator, !0)
    }
    getReverseIteratorFrom(ee) {
        return new SortedMapIterator(this.root, ee, this.comparator, !0)
    }
}
class SortedMapIterator {
    constructor(ee, te, re, ie) {
        this.isReverse = ie,
            this.nodeStack = [];
        let se = 1;
        for (; !ee.isEmpty();)
            if (se = te ? re(ee.key, te) : 1,
                te && ie && (se *= -1),
                se < 0)
                ee = this.isReverse ? ee.left : ee.right;
            else {
                if (se === 0) {
                    this.nodeStack.push(ee);
                    break
                }
                this.nodeStack.push(ee),
                    ee = this.isReverse ? ee.right : ee.left
            }
    }
    getNext() {
        let ee = this.nodeStack.pop();
        const te = {
            key: ee.key,
            value: ee.value
        };
        if (this.isReverse)
            for (ee = ee.left; !ee.isEmpty();)
                this.nodeStack.push(ee),
                    ee = ee.right;
        else
            for (ee = ee.right; !ee.isEmpty();)
                this.nodeStack.push(ee),
                    ee = ee.left;
        return te
    }
    hasNext() {
        return this.nodeStack.length > 0
    }
    peek() {
        if (this.nodeStack.length === 0)
            return null;
        const ee = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: ee.key,
            value: ee.value
        }
    }
}
class LLRBNode {
    constructor(ee, te, re, ie, se) {
        this.key = ee,
            this.value = te,
            this.color = re ?? LLRBNode.RED,
            this.left = ie ?? LLRBNode.EMPTY,
            this.right = se ?? LLRBNode.EMPTY,
            this.size = this.left.size + 1 + this.right.size
    }
    copy(ee, te, re, ie, se) {
        return new LLRBNode(ee ?? this.key, te ?? this.value, re ?? this.color, ie ?? this.left, se ?? this.right)
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(ee) {
        return this.left.inorderTraversal(ee) || ee(this.key, this.value) || this.right.inorderTraversal(ee)
    }
    reverseTraversal(ee) {
        return this.right.reverseTraversal(ee) || ee(this.key, this.value) || this.left.reverseTraversal(ee)
    }
    min() {
        return this.left.isEmpty() ? this : this.left.min()
    }
    minKey() {
        return this.min().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(ee, te, re) {
        let ie = this;
        const se = re(ee, ie.key);
        return ie = se < 0 ? ie.copy(null, null, null, ie.left.insert(ee, te, re), null) : se === 0 ? ie.copy(null, te, null, null, null) : ie.copy(null, null, null, null, ie.right.insert(ee, te, re)),
            ie.fixUp()
    }
    removeMin() {
        if (this.left.isEmpty())
            return LLRBNode.EMPTY;
        let ee = this;
        return ee.left.isRed() || ee.left.left.isRed() || (ee = ee.moveRedLeft()),
            ee = ee.copy(null, null, null, ee.left.removeMin(), null),
            ee.fixUp()
    }
    remove(ee, te) {
        let re, ie = this;
        if (te(ee, ie.key) < 0)
            ie.left.isEmpty() || ie.left.isRed() || ie.left.left.isRed() || (ie = ie.moveRedLeft()),
                ie = ie.copy(null, null, null, ie.left.remove(ee, te), null);
        else {
            if (ie.left.isRed() && (ie = ie.rotateRight()),
                ie.right.isEmpty() || ie.right.isRed() || ie.right.left.isRed() || (ie = ie.moveRedRight()),
                te(ee, ie.key) === 0) {
                if (ie.right.isEmpty())
                    return LLRBNode.EMPTY;
                re = ie.right.min(),
                    ie = ie.copy(re.key, re.value, null, null, ie.right.removeMin())
            }
            ie = ie.copy(null, null, null, null, ie.right.remove(ee, te))
        }
        return ie.fixUp()
    }
    isRed() {
        return this.color
    }
    fixUp() {
        let ee = this;
        return ee.right.isRed() && !ee.left.isRed() && (ee = ee.rotateLeft()),
            ee.left.isRed() && ee.left.left.isRed() && (ee = ee.rotateRight()),
            ee.left.isRed() && ee.right.isRed() && (ee = ee.colorFlip()),
            ee
    }
    moveRedLeft() {
        let ee = this.colorFlip();
        return ee.right.left.isRed() && (ee = ee.copy(null, null, null, null, ee.right.rotateRight()),
            ee = ee.rotateLeft(),
            ee = ee.colorFlip()),
            ee
    }
    moveRedRight() {
        let ee = this.colorFlip();
        return ee.left.left.isRed() && (ee = ee.rotateRight(),
            ee = ee.colorFlip()),
            ee
    }
    rotateLeft() {
        const ee = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, ee, null)
    }
    rotateRight() {
        const ee = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, ee)
    }
    colorFlip() {
        const ee = this.left.copy(null, null, !this.left.color, null, null)
            , te = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, ee, te)
    }
    checkMaxDepth() {
        const ee = this.check();
        return Math.pow(2, ee) <= this.size + 1
    }
    check() {
        if (this.isRed() && this.left.isRed())
            throw fail(43730, {
                key: this.key,
                value: this.value
            });
        if (this.right.isRed())
            throw fail(14113, {
                key: this.key,
                value: this.value
            });
        const ee = this.left.check();
        if (ee !== this.right.check())
            throw fail(27949);
        return ee + (this.isRed() ? 0 : 1)
    }
}
LLRBNode.EMPTY = null,
    LLRBNode.RED = !0,
    LLRBNode.BLACK = !1;
LLRBNode.EMPTY = new class {
    constructor() {
        this.size = 0
    }
    get key() {
        throw fail(57766)
    }
    get value() {
        throw fail(16141)
    }
    get color() {
        throw fail(16727)
    }
    get left() {
        throw fail(29726)
    }
    get right() {
        throw fail(36894)
    }
    copy(ee, te, re, ie, se) {
        return this
    }
    insert(ee, te, re) {
        return new LLRBNode(ee, te)
    }
    remove(ee, te) {
        return this
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(ee) {
        return !1
    }
    reverseTraversal(ee) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    isRed() {
        return !1
    }
    checkMaxDepth() {
        return !0
    }
    check() {
        return 0
    }
}
    ;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SortedSet {
    constructor(ee) {
        this.comparator = ee,
            this.data = new SortedMap(this.comparator)
    }
    has(ee) {
        return this.data.get(ee) !== null
    }
    first() {
        return this.data.minKey()
    }
    last() {
        return this.data.maxKey()
    }
    get size() {
        return this.data.size
    }
    indexOf(ee) {
        return this.data.indexOf(ee)
    }
    forEach(ee) {
        this.data.inorderTraversal((te, re) => (ee(te),
            !1))
    }
    forEachInRange(ee, te) {
        const re = this.data.getIteratorFrom(ee[0]);
        for (; re.hasNext();) {
            const ie = re.getNext();
            if (this.comparator(ie.key, ee[1]) >= 0)
                return;
            te(ie.key)
        }
    }
    forEachWhile(ee, te) {
        let re;
        for (re = te !== void 0 ? this.data.getIteratorFrom(te) : this.data.getIterator(); re.hasNext();)
            if (!ee(re.getNext().key))
                return
    }
    firstAfterOrEqual(ee) {
        const te = this.data.getIteratorFrom(ee);
        return te.hasNext() ? te.getNext().key : null
    }
    getIterator() {
        return new SortedSetIterator(this.data.getIterator())
    }
    getIteratorFrom(ee) {
        return new SortedSetIterator(this.data.getIteratorFrom(ee))
    }
    add(ee) {
        return this.copy(this.data.remove(ee).insert(ee, !0))
    }
    delete(ee) {
        return this.has(ee) ? this.copy(this.data.remove(ee)) : this
    }
    isEmpty() {
        return this.data.isEmpty()
    }
    unionWith(ee) {
        let te = this;
        return te.size < ee.size && (te = ee,
            ee = this),
            ee.forEach(re => {
                te = te.add(re)
            }
            ),
            te
    }
    isEqual(ee) {
        if (!(ee instanceof SortedSet) || this.size !== ee.size)
            return !1;
        const te = this.data.getIterator()
            , re = ee.data.getIterator();
        for (; te.hasNext();) {
            const ie = te.getNext().key
                , se = re.getNext().key;
            if (this.comparator(ie, se) !== 0)
                return !1
        }
        return !0
    }
    toArray() {
        const ee = [];
        return this.forEach(te => {
            ee.push(te)
        }
        ),
            ee
    }
    toString() {
        const ee = [];
        return this.forEach(te => ee.push(te)),
            "SortedSet(" + ee.toString() + ")"
    }
    copy(ee) {
        const te = new SortedSet(this.comparator);
        return te.data = ee,
            te
    }
}
class SortedSetIterator {
    constructor(ee) {
        this.iter = ee
    }
    getNext() {
        return this.iter.getNext().key
    }
    hasNext() {
        return this.iter.hasNext()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FieldMask {
    constructor(ee) {
        this.fields = ee,
            ee.sort(FieldPath$1.comparator)
    }
    static empty() {
        return new FieldMask([])
    }
    unionWith(ee) {
        let te = new SortedSet(FieldPath$1.comparator);
        for (const re of this.fields)
            te = te.add(re);
        for (const re of ee)
            te = te.add(re);
        return new FieldMask(te.toArray())
    }
    covers(ee) {
        for (const te of this.fields)
            if (te.isPrefixOf(ee))
                return !0;
        return !1
    }
    isEqual(ee) {
        return __PRIVATE_arrayEquals(this.fields, ee.fields, (te, re) => te.isEqual(re))
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_Base64DecodeError extends Error {
    constructor() {
        super(...arguments),
            this.name = "Base64DecodeError"
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ByteString {
    constructor(ee) {
        this.binaryString = ee
    }
    static fromBase64String(ee) {
        const te = function (ie) {
            try {
                return atob(ie)
            } catch (se) {
                throw typeof DOMException < "u" && se instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + se) : se
            }
        }(ee);
        return new ByteString(te)
    }
    static fromUint8Array(ee) {
        const te = function (ie) {
            let se = "";
            for (let ae = 0; ae < ie.length; ++ae)
                se += String.fromCharCode(ie[ae]);
            return se
        }(ee);
        return new ByteString(te)
    }
    [Symbol.iterator]() {
        let ee = 0;
        return {
            next: () => ee < this.binaryString.length ? {
                value: this.binaryString.charCodeAt(ee++),
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    toBase64() {
        return function (te) {
            return btoa(te)
        }(this.binaryString)
    }
    toUint8Array() {
        return function (te) {
            const re = new Uint8Array(te.length);
            for (let ie = 0; ie < te.length; ie++)
                re[ie] = te.charCodeAt(ie);
            return re
        }(this.binaryString)
    }
    approximateByteSize() {
        return 2 * this.binaryString.length
    }
    compareTo(ee) {
        return __PRIVATE_primitiveComparator(this.binaryString, ee.binaryString)
    }
    isEqual(ee) {
        return this.binaryString === ee.binaryString
    }
}
ByteString.EMPTY_BYTE_STRING = new ByteString("");
const Ye = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(ne) {
    if (__PRIVATE_hardAssert(!!ne, 39018),
        typeof ne == "string") {
        let ee = 0;
        const te = Ye.exec(ne);
        if (__PRIVATE_hardAssert(!!te, 46558, {
            timestamp: ne
        }),
            te[1]) {
            let ie = te[1];
            ie = (ie + "000000000").substr(0, 9),
                ee = Number(ie)
        }
        const re = new Date(ne);
        return {
            seconds: Math.floor(re.getTime() / 1e3),
            nanos: ee
        }
    }
    return {
        seconds: __PRIVATE_normalizeNumber(ne.seconds),
        nanos: __PRIVATE_normalizeNumber(ne.nanos)
    }
}
function __PRIVATE_normalizeNumber(ne) {
    return typeof ne == "number" ? ne : typeof ne == "string" ? Number(ne) : 0
}
function __PRIVATE_normalizeByteString(ne) {
    return typeof ne == "string" ? ByteString.fromBase64String(ne) : ByteString.fromUint8Array(ne)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et = "server_timestamp"
    , tt = "__type__"
    , nt = "__previous_value__"
    , rt = "__local_write_time__";
function __PRIVATE_isServerTimestamp(ne) {
    return (ne?.mapValue?.fields || {})[tt]?.stringValue === et
}
function __PRIVATE_getPreviousValue(ne) {
    const ee = ne.mapValue.fields[nt];
    return __PRIVATE_isServerTimestamp(ee) ? __PRIVATE_getPreviousValue(ee) : ee
}
function __PRIVATE_getLocalWriteTime(ne) {
    const ee = __PRIVATE_normalizeTimestamp(ne.mapValue.fields[rt].timestampValue);
    return new Timestamp(ee.seconds, ee.nanos)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DatabaseInfo {
    constructor(ee, te, re, ie, se, ae, ce, le, he, de, fe) {
        this.databaseId = ee,
            this.appId = te,
            this.persistenceKey = re,
            this.host = ie,
            this.ssl = se,
            this.forceLongPolling = ae,
            this.autoDetectLongPolling = ce,
            this.longPollingOptions = le,
            this.useFetchStreams = he,
            this.isUsingEmulator = de,
            this.apiKey = fe
    }
}
const it = "(default)";
class DatabaseId {
    constructor(ee, te) {
        this.projectId = ee,
            this.database = te || it
    }
    static empty() {
        return new DatabaseId("", "")
    }
    get isDefaultDatabase() {
        return this.database === it
    }
    isEqual(ee) {
        return ee instanceof DatabaseId && ee.projectId === this.projectId && ee.database === this.database
    }
}
function __PRIVATE_databaseIdFromApp(ne, ee) {
    if (!Object.prototype.hasOwnProperty.apply(ne.options, ["projectId"]))
        throw new FirestoreError(D.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
    return new DatabaseId(ne.options.projectId, ee)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const st = "__type__"
    , ot = "__max__"
    , _t = {
        mapValue: {
            fields: {
                __type__: {
                    stringValue: ot
                }
            }
        }
    }
    , at = "__vector__"
    , ut = "value";
function __PRIVATE_typeOrder(ne) {
    return "nullValue" in ne ? 0 : "booleanValue" in ne ? 1 : "integerValue" in ne || "doubleValue" in ne ? 2 : "timestampValue" in ne ? 3 : "stringValue" in ne ? 5 : "bytesValue" in ne ? 6 : "referenceValue" in ne ? 7 : "geoPointValue" in ne ? 8 : "arrayValue" in ne ? 9 : "mapValue" in ne ? __PRIVATE_isServerTimestamp(ne) ? 4 : __PRIVATE_isMaxValue(ne) ? 9007199254740991 : __PRIVATE_isVectorValue(ne) ? 10 : 11 : fail(28295, {
        value: ne
    })
}
function __PRIVATE_valueEquals(ne, ee) {
    if (ne === ee)
        return !0;
    const te = __PRIVATE_typeOrder(ne);
    if (te !== __PRIVATE_typeOrder(ee))
        return !1;
    switch (te) {
        case 0:
        case 9007199254740991:
            return !0;
        case 1:
            return ne.booleanValue === ee.booleanValue;
        case 4:
            return __PRIVATE_getLocalWriteTime(ne).isEqual(__PRIVATE_getLocalWriteTime(ee));
        case 3:
            return function (ie, se) {
                if (typeof ie.timestampValue == "string" && typeof se.timestampValue == "string" && ie.timestampValue.length === se.timestampValue.length)
                    return ie.timestampValue === se.timestampValue;
                const ae = __PRIVATE_normalizeTimestamp(ie.timestampValue)
                    , ce = __PRIVATE_normalizeTimestamp(se.timestampValue);
                return ae.seconds === ce.seconds && ae.nanos === ce.nanos
            }(ne, ee);
        case 5:
            return ne.stringValue === ee.stringValue;
        case 6:
            return function (ie, se) {
                return __PRIVATE_normalizeByteString(ie.bytesValue).isEqual(__PRIVATE_normalizeByteString(se.bytesValue))
            }(ne, ee);
        case 7:
            return ne.referenceValue === ee.referenceValue;
        case 8:
            return function (ie, se) {
                return __PRIVATE_normalizeNumber(ie.geoPointValue.latitude) === __PRIVATE_normalizeNumber(se.geoPointValue.latitude) && __PRIVATE_normalizeNumber(ie.geoPointValue.longitude) === __PRIVATE_normalizeNumber(se.geoPointValue.longitude)
            }(ne, ee);
        case 2:
            return function (ie, se) {
                if ("integerValue" in ie && "integerValue" in se)
                    return __PRIVATE_normalizeNumber(ie.integerValue) === __PRIVATE_normalizeNumber(se.integerValue);
                if ("doubleValue" in ie && "doubleValue" in se) {
                    const ae = __PRIVATE_normalizeNumber(ie.doubleValue)
                        , ce = __PRIVATE_normalizeNumber(se.doubleValue);
                    return ae === ce ? __PRIVATE_isNegativeZero(ae) === __PRIVATE_isNegativeZero(ce) : isNaN(ae) && isNaN(ce)
                }
                return !1
            }(ne, ee);
        case 9:
            return __PRIVATE_arrayEquals(ne.arrayValue.values || [], ee.arrayValue.values || [], __PRIVATE_valueEquals);
        case 10:
        case 11:
            return function (ie, se) {
                const ae = ie.mapValue.fields || {}
                    , ce = se.mapValue.fields || {};
                if (__PRIVATE_objectSize(ae) !== __PRIVATE_objectSize(ce))
                    return !1;
                for (const le in ae)
                    if (ae.hasOwnProperty(le) && (ce[le] === void 0 || !__PRIVATE_valueEquals(ae[le], ce[le])))
                        return !1;
                return !0
            }(ne, ee);
        default:
            return fail(52216, {
                left: ne
            })
    }
}
function __PRIVATE_arrayValueContains(ne, ee) {
    return (ne.values || []).find(te => __PRIVATE_valueEquals(te, ee)) !== void 0
}
function __PRIVATE_valueCompare(ne, ee) {
    if (ne === ee)
        return 0;
    const te = __PRIVATE_typeOrder(ne)
        , re = __PRIVATE_typeOrder(ee);
    if (te !== re)
        return __PRIVATE_primitiveComparator(te, re);
    switch (te) {
        case 0:
        case 9007199254740991:
            return 0;
        case 1:
            return __PRIVATE_primitiveComparator(ne.booleanValue, ee.booleanValue);
        case 2:
            return function (se, ae) {
                const ce = __PRIVATE_normalizeNumber(se.integerValue || se.doubleValue)
                    , le = __PRIVATE_normalizeNumber(ae.integerValue || ae.doubleValue);
                return ce < le ? -1 : ce > le ? 1 : ce === le ? 0 : isNaN(ce) ? isNaN(le) ? 0 : -1 : 1
            }(ne, ee);
        case 3:
            return __PRIVATE_compareTimestamps(ne.timestampValue, ee.timestampValue);
        case 4:
            return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(ne), __PRIVATE_getLocalWriteTime(ee));
        case 5:
            return __PRIVATE_compareUtf8Strings(ne.stringValue, ee.stringValue);
        case 6:
            return function (se, ae) {
                const ce = __PRIVATE_normalizeByteString(se)
                    , le = __PRIVATE_normalizeByteString(ae);
                return ce.compareTo(le)
            }(ne.bytesValue, ee.bytesValue);
        case 7:
            return function (se, ae) {
                const ce = se.split("/")
                    , le = ae.split("/");
                for (let he = 0; he < ce.length && he < le.length; he++) {
                    const de = __PRIVATE_primitiveComparator(ce[he], le[he]);
                    if (de !== 0)
                        return de
                }
                return __PRIVATE_primitiveComparator(ce.length, le.length)
            }(ne.referenceValue, ee.referenceValue);
        case 8:
            return function (se, ae) {
                const ce = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(se.latitude), __PRIVATE_normalizeNumber(ae.latitude));
                return ce !== 0 ? ce : __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(se.longitude), __PRIVATE_normalizeNumber(ae.longitude))
            }(ne.geoPointValue, ee.geoPointValue);
        case 9:
            return __PRIVATE_compareArrays(ne.arrayValue, ee.arrayValue);
        case 10:
            return function (se, ae) {
                const ce = se.fields || {}
                    , le = ae.fields || {}
                    , he = ce[ut]?.arrayValue
                    , de = le[ut]?.arrayValue
                    , fe = __PRIVATE_primitiveComparator(he?.values?.length || 0, de?.values?.length || 0);
                return fe !== 0 ? fe : __PRIVATE_compareArrays(he, de)
            }(ne.mapValue, ee.mapValue);
        case 11:
            return function (se, ae) {
                if (se === _t.mapValue && ae === _t.mapValue)
                    return 0;
                if (se === _t.mapValue)
                    return 1;
                if (ae === _t.mapValue)
                    return -1;
                const ce = se.fields || {}
                    , le = Object.keys(ce)
                    , he = ae.fields || {}
                    , de = Object.keys(he);
                le.sort(),
                    de.sort();
                for (let fe = 0; fe < le.length && fe < de.length; ++fe) {
                    const Re = __PRIVATE_compareUtf8Strings(le[fe], de[fe]);
                    if (Re !== 0)
                        return Re;
                    const Pe = __PRIVATE_valueCompare(ce[le[fe]], he[de[fe]]);
                    if (Pe !== 0)
                        return Pe
                }
                return __PRIVATE_primitiveComparator(le.length, de.length)
            }(ne.mapValue, ee.mapValue);
        default:
            throw fail(23264, {
                he: te
            })
    }
}
function __PRIVATE_compareTimestamps(ne, ee) {
    if (typeof ne == "string" && typeof ee == "string" && ne.length === ee.length)
        return __PRIVATE_primitiveComparator(ne, ee);
    const te = __PRIVATE_normalizeTimestamp(ne)
        , re = __PRIVATE_normalizeTimestamp(ee)
        , ie = __PRIVATE_primitiveComparator(te.seconds, re.seconds);
    return ie !== 0 ? ie : __PRIVATE_primitiveComparator(te.nanos, re.nanos)
}
function __PRIVATE_compareArrays(ne, ee) {
    const te = ne.values || []
        , re = ee.values || [];
    for (let ie = 0; ie < te.length && ie < re.length; ++ie) {
        const se = __PRIVATE_valueCompare(te[ie], re[ie]);
        if (se)
            return se
    }
    return __PRIVATE_primitiveComparator(te.length, re.length)
}
function canonicalId(ne) {
    return __PRIVATE_canonifyValue(ne)
}
function __PRIVATE_canonifyValue(ne) {
    return "nullValue" in ne ? "null" : "booleanValue" in ne ? "" + ne.booleanValue : "integerValue" in ne ? "" + ne.integerValue : "doubleValue" in ne ? "" + ne.doubleValue : "timestampValue" in ne ? function (te) {
        const re = __PRIVATE_normalizeTimestamp(te);
        return `time(${re.seconds},${re.nanos})`
    }(ne.timestampValue) : "stringValue" in ne ? ne.stringValue : "bytesValue" in ne ? function (te) {
        return __PRIVATE_normalizeByteString(te).toBase64()
    }(ne.bytesValue) : "referenceValue" in ne ? function (te) {
        return DocumentKey.fromName(te).toString()
    }(ne.referenceValue) : "geoPointValue" in ne ? function (te) {
        return `geo(${te.latitude},${te.longitude})`
    }(ne.geoPointValue) : "arrayValue" in ne ? function (te) {
        let re = "["
            , ie = !0;
        for (const se of te.values || [])
            ie ? ie = !1 : re += ",",
                re += __PRIVATE_canonifyValue(se);
        return re + "]"
    }(ne.arrayValue) : "mapValue" in ne ? function (te) {
        const re = Object.keys(te.fields || {}).sort();
        let ie = "{"
            , se = !0;
        for (const ae of re)
            se ? se = !1 : ie += ",",
                ie += `${ae}:${__PRIVATE_canonifyValue(te.fields[ae])}`;
        return ie + "}"
    }(ne.mapValue) : fail(61005, {
        value: ne
    })
}
function __PRIVATE_estimateByteSize(ne) {
    switch (__PRIVATE_typeOrder(ne)) {
        case 0:
        case 1:
            return 4;
        case 2:
            return 8;
        case 3:
        case 8:
            return 16;
        case 4:
            const ee = __PRIVATE_getPreviousValue(ne);
            return ee ? 16 + __PRIVATE_estimateByteSize(ee) : 16;
        case 5:
            return 2 * ne.stringValue.length;
        case 6:
            return __PRIVATE_normalizeByteString(ne.bytesValue).approximateByteSize();
        case 7:
            return ne.referenceValue.length;
        case 9:
            return function (re) {
                return (re.values || []).reduce((ie, se) => ie + __PRIVATE_estimateByteSize(se), 0)
            }(ne.arrayValue);
        case 10:
        case 11:
            return function (re) {
                let ie = 0;
                return forEach(re.fields, (se, ae) => {
                    ie += se.length + __PRIVATE_estimateByteSize(ae)
                }
                ),
                    ie
            }(ne.mapValue);
        default:
            throw fail(13486, {
                value: ne
            })
    }
}
function __PRIVATE_refValue(ne, ee) {
    return {
        referenceValue: `projects/${ne.projectId}/databases/${ne.database}/documents/${ee.path.canonicalString()}`
    }
}
function isInteger(ne) {
    return !!ne && "integerValue" in ne
}
function isArray(ne) {
    return !!ne && "arrayValue" in ne
}
function __PRIVATE_isNullValue(ne) {
    return !!ne && "nullValue" in ne
}
function __PRIVATE_isNanValue(ne) {
    return !!ne && "doubleValue" in ne && isNaN(Number(ne.doubleValue))
}
function __PRIVATE_isMapValue(ne) {
    return !!ne && "mapValue" in ne
}
function __PRIVATE_isVectorValue(ne) {
    return (ne?.mapValue?.fields || {})[st]?.stringValue === at
}
function __PRIVATE_deepClone(ne) {
    if (ne.geoPointValue)
        return {
            geoPointValue: {
                ...ne.geoPointValue
            }
        };
    if (ne.timestampValue && typeof ne.timestampValue == "object")
        return {
            timestampValue: {
                ...ne.timestampValue
            }
        };
    if (ne.mapValue) {
        const ee = {
            mapValue: {
                fields: {}
            }
        };
        return forEach(ne.mapValue.fields, (te, re) => ee.mapValue.fields[te] = __PRIVATE_deepClone(re)),
            ee
    }
    if (ne.arrayValue) {
        const ee = {
            arrayValue: {
                values: []
            }
        };
        for (let te = 0; te < (ne.arrayValue.values || []).length; ++te)
            ee.arrayValue.values[te] = __PRIVATE_deepClone(ne.arrayValue.values[te]);
        return ee
    }
    return {
        ...ne
    }
}
function __PRIVATE_isMaxValue(ne) {
    return (((ne.mapValue || {}).fields || {}).__type__ || {}).stringValue === ot
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ObjectValue {
    constructor(ee) {
        this.value = ee
    }
    static empty() {
        return new ObjectValue({
            mapValue: {}
        })
    }
    field(ee) {
        if (ee.isEmpty())
            return this.value;
        {
            let te = this.value;
            for (let re = 0; re < ee.length - 1; ++re)
                if (te = (te.mapValue.fields || {})[ee.get(re)],
                    !__PRIVATE_isMapValue(te))
                    return null;
            return te = (te.mapValue.fields || {})[ee.lastSegment()],
                te || null
        }
    }
    set(ee, te) {
        this.getFieldsMap(ee.popLast())[ee.lastSegment()] = __PRIVATE_deepClone(te)
    }
    setAll(ee) {
        let te = FieldPath$1.emptyPath()
            , re = {}
            , ie = [];
        ee.forEach((ae, ce) => {
            if (!te.isImmediateParentOf(ce)) {
                const le = this.getFieldsMap(te);
                this.applyChanges(le, re, ie),
                    re = {},
                    ie = [],
                    te = ce.popLast()
            }
            ae ? re[ce.lastSegment()] = __PRIVATE_deepClone(ae) : ie.push(ce.lastSegment())
        }
        );
        const se = this.getFieldsMap(te);
        this.applyChanges(se, re, ie)
    }
    delete(ee) {
        const te = this.field(ee.popLast());
        __PRIVATE_isMapValue(te) && te.mapValue.fields && delete te.mapValue.fields[ee.lastSegment()]
    }
    isEqual(ee) {
        return __PRIVATE_valueEquals(this.value, ee.value)
    }
    getFieldsMap(ee) {
        let te = this.value;
        te.mapValue.fields || (te.mapValue = {
            fields: {}
        });
        for (let re = 0; re < ee.length; ++re) {
            let ie = te.mapValue.fields[ee.get(re)];
            __PRIVATE_isMapValue(ie) && ie.mapValue.fields || (ie = {
                mapValue: {
                    fields: {}
                }
            },
                te.mapValue.fields[ee.get(re)] = ie),
                te = ie
        }
        return te.mapValue.fields
    }
    applyChanges(ee, te, re) {
        forEach(te, (ie, se) => ee[ie] = se);
        for (const ie of re)
            delete ee[ie]
    }
    clone() {
        return new ObjectValue(__PRIVATE_deepClone(this.value))
    }
}
function __PRIVATE_extractFieldMask(ne) {
    const ee = [];
    return forEach(ne.fields, (te, re) => {
        const ie = new FieldPath$1([te]);
        if (__PRIVATE_isMapValue(re)) {
            const se = __PRIVATE_extractFieldMask(re.mapValue).fields;
            if (se.length === 0)
                ee.push(ie);
            else
                for (const ae of se)
                    ee.push(ie.child(ae))
        } else
            ee.push(ie)
    }
    ),
        new FieldMask(ee)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MutableDocument {
    constructor(ee, te, re, ie, se, ae, ce) {
        this.key = ee,
            this.documentType = te,
            this.version = re,
            this.readTime = ie,
            this.createTime = se,
            this.data = ae,
            this.documentState = ce
    }
    static newInvalidDocument(ee) {
        return new MutableDocument(ee, 0, SnapshotVersion.min(), SnapshotVersion.min(), SnapshotVersion.min(), ObjectValue.empty(), 0)
    }
    static newFoundDocument(ee, te, re, ie) {
        return new MutableDocument(ee, 1, te, SnapshotVersion.min(), re, ie, 0)
    }
    static newNoDocument(ee, te) {
        return new MutableDocument(ee, 2, te, SnapshotVersion.min(), SnapshotVersion.min(), ObjectValue.empty(), 0)
    }
    static newUnknownDocument(ee, te) {
        return new MutableDocument(ee, 3, te, SnapshotVersion.min(), SnapshotVersion.min(), ObjectValue.empty(), 2)
    }
    convertToFoundDocument(ee, te) {
        return !this.createTime.isEqual(SnapshotVersion.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = ee),
            this.version = ee,
            this.documentType = 1,
            this.data = te,
            this.documentState = 0,
            this
    }
    convertToNoDocument(ee) {
        return this.version = ee,
            this.documentType = 2,
            this.data = ObjectValue.empty(),
            this.documentState = 0,
            this
    }
    convertToUnknownDocument(ee) {
        return this.version = ee,
            this.documentType = 3,
            this.data = ObjectValue.empty(),
            this.documentState = 2,
            this
    }
    setHasCommittedMutations() {
        return this.documentState = 2,
            this
    }
    setHasLocalMutations() {
        return this.documentState = 1,
            this.version = SnapshotVersion.min(),
            this
    }
    setReadTime(ee) {
        return this.readTime = ee,
            this
    }
    get hasLocalMutations() {
        return this.documentState === 1
    }
    get hasCommittedMutations() {
        return this.documentState === 2
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations
    }
    isValidDocument() {
        return this.documentType !== 0
    }
    isFoundDocument() {
        return this.documentType === 1
    }
    isNoDocument() {
        return this.documentType === 2
    }
    isUnknownDocument() {
        return this.documentType === 3
    }
    isEqual(ee) {
        return ee instanceof MutableDocument && this.key.isEqual(ee.key) && this.version.isEqual(ee.version) && this.documentType === ee.documentType && this.documentState === ee.documentState && this.data.isEqual(ee.data)
    }
    mutableCopy() {
        return new MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState)
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bound {
    constructor(ee, te) {
        this.position = ee,
            this.inclusive = te
    }
}
function __PRIVATE_boundCompareToDocument(ne, ee, te) {
    let re = 0;
    for (let ie = 0; ie < ne.position.length; ie++) {
        const se = ee[ie]
            , ae = ne.position[ie];
        if (se.field.isKeyField() ? re = DocumentKey.comparator(DocumentKey.fromName(ae.referenceValue), te.key) : re = __PRIVATE_valueCompare(ae, te.data.field(se.field)),
            se.dir === "desc" && (re *= -1),
            re !== 0)
            break
    }
    return re
}
function __PRIVATE_boundEquals(ne, ee) {
    if (ne === null)
        return ee === null;
    if (ee === null || ne.inclusive !== ee.inclusive || ne.position.length !== ee.position.length)
        return !1;
    for (let te = 0; te < ne.position.length; te++)
        if (!__PRIVATE_valueEquals(ne.position[te], ee.position[te]))
            return !1;
    return !0
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OrderBy {
    constructor(ee, te = "asc") {
        this.field = ee,
            this.dir = te
    }
}
function __PRIVATE_orderByEquals(ne, ee) {
    return ne.dir === ee.dir && ne.field.isEqual(ee.field)
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Filter {
}
class FieldFilter extends Filter {
    constructor(ee, te, re) {
        super(),
            this.field = ee,
            this.op = te,
            this.value = re
    }
    static create(ee, te, re) {
        return ee.isKeyField() ? te === "in" || te === "not-in" ? this.createKeyFieldInFilter(ee, te, re) : new __PRIVATE_KeyFieldFilter(ee, te, re) : te === "array-contains" ? new __PRIVATE_ArrayContainsFilter(ee, re) : te === "in" ? new __PRIVATE_InFilter(ee, re) : te === "not-in" ? new __PRIVATE_NotInFilter(ee, re) : te === "array-contains-any" ? new __PRIVATE_ArrayContainsAnyFilter(ee, re) : new FieldFilter(ee, te, re)
    }
    static createKeyFieldInFilter(ee, te, re) {
        return te === "in" ? new __PRIVATE_KeyFieldInFilter(ee, re) : new __PRIVATE_KeyFieldNotInFilter(ee, re)
    }
    matches(ee) {
        const te = ee.data.field(this.field);
        return this.op === "!=" ? te !== null && te.nullValue === void 0 && this.matchesComparison(__PRIVATE_valueCompare(te, this.value)) : te !== null && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(te) && this.matchesComparison(__PRIVATE_valueCompare(te, this.value))
    }
    matchesComparison(ee) {
        switch (this.op) {
            case "<":
                return ee < 0;
            case "<=":
                return ee <= 0;
            case "==":
                return ee === 0;
            case "!=":
                return ee !== 0;
            case ">":
                return ee > 0;
            case ">=":
                return ee >= 0;
            default:
                return fail(47266, {
                    operator: this.op
                })
        }
    }
    isInequality() {
        return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
    }
    getFlattenedFilters() {
        return [this]
    }
    getFilters() {
        return [this]
    }
}
class CompositeFilter extends Filter {
    constructor(ee, te) {
        super(),
            this.filters = ee,
            this.op = te,
            this.Pe = null
    }
    static create(ee, te) {
        return new CompositeFilter(ee, te)
    }
    matches(ee) {
        return __PRIVATE_compositeFilterIsConjunction(this) ? this.filters.find(te => !te.matches(ee)) === void 0 : this.filters.find(te => te.matches(ee)) !== void 0
    }
    getFlattenedFilters() {
        return this.Pe !== null || (this.Pe = this.filters.reduce((ee, te) => ee.concat(te.getFlattenedFilters()), [])),
            this.Pe
    }
    getFilters() {
        return Object.assign([], this.filters)
    }
}
function __PRIVATE_compositeFilterIsConjunction(ne) {
    return ne.op === "and"
}
function __PRIVATE_compositeFilterIsFlatConjunction(ne) {
    return __PRIVATE_compositeFilterIsFlat(ne) && __PRIVATE_compositeFilterIsConjunction(ne)
}
function __PRIVATE_compositeFilterIsFlat(ne) {
    for (const ee of ne.filters)
        if (ee instanceof CompositeFilter)
            return !1;
    return !0
}
function __PRIVATE_canonifyFilter(ne) {
    if (ne instanceof FieldFilter)
        return ne.field.canonicalString() + ne.op.toString() + canonicalId(ne.value);
    if (__PRIVATE_compositeFilterIsFlatConjunction(ne))
        return ne.filters.map(ee => __PRIVATE_canonifyFilter(ee)).join(",");
    {
        const ee = ne.filters.map(te => __PRIVATE_canonifyFilter(te)).join(",");
        return `${ne.op}(${ee})`
    }
}
function __PRIVATE_filterEquals(ne, ee) {
    return ne instanceof FieldFilter ? function (re, ie) {
        return ie instanceof FieldFilter && re.op === ie.op && re.field.isEqual(ie.field) && __PRIVATE_valueEquals(re.value, ie.value)
    }(ne, ee) : ne instanceof CompositeFilter ? function (re, ie) {
        return ie instanceof CompositeFilter && re.op === ie.op && re.filters.length === ie.filters.length ? re.filters.reduce((se, ae, ce) => se && __PRIVATE_filterEquals(ae, ie.filters[ce]), !0) : !1
    }(ne, ee) : void fail(19439)
}
function __PRIVATE_stringifyFilter(ne) {
    return ne instanceof FieldFilter ? function (te) {
        return `${te.field.canonicalString()} ${te.op} ${canonicalId(te.value)}`
    }(ne) : ne instanceof CompositeFilter ? function (te) {
        return te.op.toString() + " {" + te.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}"
    }(ne) : "Filter"
}
class __PRIVATE_KeyFieldFilter extends FieldFilter {
    constructor(ee, te, re) {
        super(ee, te, re),
            this.key = DocumentKey.fromName(re.referenceValue)
    }
    matches(ee) {
        const te = DocumentKey.comparator(ee.key, this.key);
        return this.matchesComparison(te)
    }
}
class __PRIVATE_KeyFieldInFilter extends FieldFilter {
    constructor(ee, te) {
        super(ee, "in", te),
            this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", te)
    }
    matches(ee) {
        return this.keys.some(te => te.isEqual(ee.key))
    }
}
class __PRIVATE_KeyFieldNotInFilter extends FieldFilter {
    constructor(ee, te) {
        super(ee, "not-in", te),
            this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", te)
    }
    matches(ee) {
        return !this.keys.some(te => te.isEqual(ee.key))
    }
}
function __PRIVATE_extractDocumentKeysFromArrayValue(ne, ee) {
    return (ee.arrayValue?.values || []).map(te => DocumentKey.fromName(te.referenceValue))
}
class __PRIVATE_ArrayContainsFilter extends FieldFilter {
    constructor(ee, te) {
        super(ee, "array-contains", te)
    }
    matches(ee) {
        const te = ee.data.field(this.field);
        return isArray(te) && __PRIVATE_arrayValueContains(te.arrayValue, this.value)
    }
}
class __PRIVATE_InFilter extends FieldFilter {
    constructor(ee, te) {
        super(ee, "in", te)
    }
    matches(ee) {
        const te = ee.data.field(this.field);
        return te !== null && __PRIVATE_arrayValueContains(this.value.arrayValue, te)
    }
}
class __PRIVATE_NotInFilter extends FieldFilter {
    constructor(ee, te) {
        super(ee, "not-in", te)
    }
    matches(ee) {
        if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        }))
            return !1;
        const te = ee.data.field(this.field);
        return te !== null && te.nullValue === void 0 && !__PRIVATE_arrayValueContains(this.value.arrayValue, te)
    }
}
class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter {
    constructor(ee, te) {
        super(ee, "array-contains-any", te)
    }
    matches(ee) {
        const te = ee.data.field(this.field);
        return !(!isArray(te) || !te.arrayValue.values) && te.arrayValue.values.some(re => __PRIVATE_arrayValueContains(this.value.arrayValue, re))
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_TargetImpl {
    constructor(ee, te = null, re = [], ie = [], se = null, ae = null, ce = null) {
        this.path = ee,
            this.collectionGroup = te,
            this.orderBy = re,
            this.filters = ie,
            this.limit = se,
            this.startAt = ae,
            this.endAt = ce,
            this.Te = null
    }
}
function __PRIVATE_newTarget(ne, ee = null, te = [], re = [], ie = null, se = null, ae = null) {
    return new __PRIVATE_TargetImpl(ne, ee, te, re, ie, se, ae)
}
function __PRIVATE_canonifyTarget(ne) {
    const ee = __PRIVATE_debugCast(ne);
    if (ee.Te === null) {
        let te = ee.path.canonicalString();
        ee.collectionGroup !== null && (te += "|cg:" + ee.collectionGroup),
            te += "|f:",
            te += ee.filters.map(re => __PRIVATE_canonifyFilter(re)).join(","),
            te += "|ob:",
            te += ee.orderBy.map(re => function (se) {
                return se.field.canonicalString() + se.dir
            }(re)).join(","),
            __PRIVATE_isNullOrUndefined(ee.limit) || (te += "|l:",
                te += ee.limit),
            ee.startAt && (te += "|lb:",
                te += ee.startAt.inclusive ? "b:" : "a:",
                te += ee.startAt.position.map(re => canonicalId(re)).join(",")),
            ee.endAt && (te += "|ub:",
                te += ee.endAt.inclusive ? "a:" : "b:",
                te += ee.endAt.position.map(re => canonicalId(re)).join(",")),
            ee.Te = te
    }
    return ee.Te
}
function __PRIVATE_targetEquals(ne, ee) {
    if (ne.limit !== ee.limit || ne.orderBy.length !== ee.orderBy.length)
        return !1;
    for (let te = 0; te < ne.orderBy.length; te++)
        if (!__PRIVATE_orderByEquals(ne.orderBy[te], ee.orderBy[te]))
            return !1;
    if (ne.filters.length !== ee.filters.length)
        return !1;
    for (let te = 0; te < ne.filters.length; te++)
        if (!__PRIVATE_filterEquals(ne.filters[te], ee.filters[te]))
            return !1;
    return ne.collectionGroup === ee.collectionGroup && !!ne.path.isEqual(ee.path) && !!__PRIVATE_boundEquals(ne.startAt, ee.startAt) && __PRIVATE_boundEquals(ne.endAt, ee.endAt)
}
function __PRIVATE_targetIsDocumentTarget(ne) {
    return DocumentKey.isDocumentKey(ne.path) && ne.collectionGroup === null && ne.filters.length === 0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_QueryImpl {
    constructor(ee, te = null, re = [], ie = [], se = null, ae = "F", ce = null, le = null) {
        this.path = ee,
            this.collectionGroup = te,
            this.explicitOrderBy = re,
            this.filters = ie,
            this.limit = se,
            this.limitType = ae,
            this.startAt = ce,
            this.endAt = le,
            this.Ee = null,
            this.Ie = null,
            this.Re = null,
            this.startAt,
            this.endAt
    }
}
function __PRIVATE_newQuery(ne, ee, te, re, ie, se, ae, ce) {
    return new __PRIVATE_QueryImpl(ne, ee, te, re, ie, se, ae, ce)
}
function __PRIVATE_newQueryForPath(ne) {
    return new __PRIVATE_QueryImpl(ne)
}
function __PRIVATE_queryMatchesAllDocuments(ne) {
    return ne.filters.length === 0 && ne.limit === null && ne.startAt == null && ne.endAt == null && (ne.explicitOrderBy.length === 0 || ne.explicitOrderBy.length === 1 && ne.explicitOrderBy[0].field.isKeyField())
}
function __PRIVATE_isDocumentQuery$1(ne) {
    return DocumentKey.isDocumentKey(ne.path) && ne.collectionGroup === null && ne.filters.length === 0
}
function __PRIVATE_isCollectionGroupQuery(ne) {
    return ne.collectionGroup !== null
}
function __PRIVATE_queryNormalizedOrderBy(ne) {
    const ee = __PRIVATE_debugCast(ne);
    if (ee.Ee === null) {
        ee.Ee = [];
        const te = new Set;
        for (const se of ee.explicitOrderBy)
            ee.Ee.push(se),
                te.add(se.field.canonicalString());
        const re = ee.explicitOrderBy.length > 0 ? ee.explicitOrderBy[ee.explicitOrderBy.length - 1].dir : "asc";
        (function (ae) {
            let ce = new SortedSet(FieldPath$1.comparator);
            return ae.filters.forEach(le => {
                le.getFlattenedFilters().forEach(he => {
                    he.isInequality() && (ce = ce.add(he.field))
                }
                )
            }
            ),
                ce
        }
        )(ee).forEach(se => {
            te.has(se.canonicalString()) || se.isKeyField() || ee.Ee.push(new OrderBy(se, re))
        }
        ),
            te.has(FieldPath$1.keyField().canonicalString()) || ee.Ee.push(new OrderBy(FieldPath$1.keyField(), re))
    }
    return ee.Ee
}
function __PRIVATE_queryToTarget(ne) {
    const ee = __PRIVATE_debugCast(ne);
    return ee.Ie || (ee.Ie = __PRIVATE__queryToTarget(ee, __PRIVATE_queryNormalizedOrderBy(ne))),
        ee.Ie
}
function __PRIVATE__queryToTarget(ne, ee) {
    if (ne.limitType === "F")
        return __PRIVATE_newTarget(ne.path, ne.collectionGroup, ee, ne.filters, ne.limit, ne.startAt, ne.endAt);
    {
        ee = ee.map(ie => {
            const se = ie.dir === "desc" ? "asc" : "desc";
            return new OrderBy(ie.field, se)
        }
        );
        const te = ne.endAt ? new Bound(ne.endAt.position, ne.endAt.inclusive) : null
            , re = ne.startAt ? new Bound(ne.startAt.position, ne.startAt.inclusive) : null;
        return __PRIVATE_newTarget(ne.path, ne.collectionGroup, ee, ne.filters, ne.limit, te, re)
    }
}
function __PRIVATE_queryWithAddedFilter(ne, ee) {
    const te = ne.filters.concat([ee]);
    return new __PRIVATE_QueryImpl(ne.path, ne.collectionGroup, ne.explicitOrderBy.slice(), te, ne.limit, ne.limitType, ne.startAt, ne.endAt)
}
function __PRIVATE_queryWithAddedOrderBy(ne, ee) {
    const te = ne.explicitOrderBy.concat([ee]);
    return new __PRIVATE_QueryImpl(ne.path, ne.collectionGroup, te, ne.filters.slice(), ne.limit, ne.limitType, ne.startAt, ne.endAt)
}
function __PRIVATE_queryWithLimit(ne, ee, te) {
    return new __PRIVATE_QueryImpl(ne.path, ne.collectionGroup, ne.explicitOrderBy.slice(), ne.filters.slice(), ee, te, ne.startAt, ne.endAt)
}
function __PRIVATE_queryEquals(ne, ee) {
    return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(ne), __PRIVATE_queryToTarget(ee)) && ne.limitType === ee.limitType
}
function __PRIVATE_canonifyQuery(ne) {
    return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(ne))}|lt:${ne.limitType}`
}
function __PRIVATE_stringifyQuery(ne) {
    return `Query(target=${function (te) {
        let re = te.path.canonicalString();
        return te.collectionGroup !== null && (re += " collectionGroup=" + te.collectionGroup),
            te.filters.length > 0 && (re += `, filters: [${te.filters.map(ie => __PRIVATE_stringifyFilter(ie)).join(", ")}]`),
            __PRIVATE_isNullOrUndefined(te.limit) || (re += ", limit: " + te.limit),
            te.orderBy.length > 0 && (re += `, orderBy: [${te.orderBy.map(ie => function (ae) {
                return `${ae.field.canonicalString()} (${ae.dir})`
            }(ie)).join(", ")}]`),
            te.startAt && (re += ", startAt: ",
                re += te.startAt.inclusive ? "b:" : "a:",
                re += te.startAt.position.map(ie => canonicalId(ie)).join(",")),
            te.endAt && (re += ", endAt: ",
                re += te.endAt.inclusive ? "a:" : "b:",
                re += te.endAt.position.map(ie => canonicalId(ie)).join(",")),
            `Target(${re})`
    }(__PRIVATE_queryToTarget(ne))}; limitType=${ne.limitType})`
}
function __PRIVATE_queryMatches(ne, ee) {
    return ee.isFoundDocument() && function (re, ie) {
        const se = ie.key.path;
        return re.collectionGroup !== null ? ie.key.hasCollectionId(re.collectionGroup) && re.path.isPrefixOf(se) : DocumentKey.isDocumentKey(re.path) ? re.path.isEqual(se) : re.path.isImmediateParentOf(se)
    }(ne, ee) && function (re, ie) {
        for (const se of __PRIVATE_queryNormalizedOrderBy(re))
            if (!se.field.isKeyField() && ie.data.field(se.field) === null)
                return !1;
        return !0
    }(ne, ee) && function (re, ie) {
        for (const se of re.filters)
            if (!se.matches(ie))
                return !1;
        return !0
    }(ne, ee) && function (re, ie) {
        return !(re.startAt && !function (ae, ce, le) {
            const he = __PRIVATE_boundCompareToDocument(ae, ce, le);
            return ae.inclusive ? he <= 0 : he < 0
        }(re.startAt, __PRIVATE_queryNormalizedOrderBy(re), ie) || re.endAt && !function (ae, ce, le) {
            const he = __PRIVATE_boundCompareToDocument(ae, ce, le);
            return ae.inclusive ? he >= 0 : he > 0
        }(re.endAt, __PRIVATE_queryNormalizedOrderBy(re), ie))
    }(ne, ee)
}
function __PRIVATE_queryCollectionGroup(ne) {
    return ne.collectionGroup || (ne.path.length % 2 == 1 ? ne.path.lastSegment() : ne.path.get(ne.path.length - 2))
}
function __PRIVATE_newQueryComparator(ne) {
    return (ee, te) => {
        let re = !1;
        for (const ie of __PRIVATE_queryNormalizedOrderBy(ne)) {
            const se = __PRIVATE_compareDocs(ie, ee, te);
            if (se !== 0)
                return se;
            re = re || ie.field.isKeyField()
        }
        return 0
    }
}
function __PRIVATE_compareDocs(ne, ee, te) {
    const re = ne.field.isKeyField() ? DocumentKey.comparator(ee.key, te.key) : function (se, ae, ce) {
        const le = ae.data.field(se)
            , he = ce.data.field(se);
        return le !== null && he !== null ? __PRIVATE_valueCompare(le, he) : fail(42886)
    }(ne.field, ee, te);
    switch (ne.dir) {
        case "asc":
            return re;
        case "desc":
            return -1 * re;
        default:
            return fail(19790, {
                direction: ne.dir
            })
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ObjectMap {
    constructor(ee, te) {
        this.mapKeyFn = ee,
            this.equalsFn = te,
            this.inner = {},
            this.innerSize = 0
    }
    get(ee) {
        const te = this.mapKeyFn(ee)
            , re = this.inner[te];
        if (re !== void 0) {
            for (const [ie, se] of re)
                if (this.equalsFn(ie, ee))
                    return se
        }
    }
    has(ee) {
        return this.get(ee) !== void 0
    }
    set(ee, te) {
        const re = this.mapKeyFn(ee)
            , ie = this.inner[re];
        if (ie === void 0)
            return this.inner[re] = [[ee, te]],
                void this.innerSize++;
        for (let se = 0; se < ie.length; se++)
            if (this.equalsFn(ie[se][0], ee))
                return void (ie[se] = [ee, te]);
        ie.push([ee, te]),
            this.innerSize++
    }
    delete(ee) {
        const te = this.mapKeyFn(ee)
            , re = this.inner[te];
        if (re === void 0)
            return !1;
        for (let ie = 0; ie < re.length; ie++)
            if (this.equalsFn(re[ie][0], ee))
                return re.length === 1 ? delete this.inner[te] : re.splice(ie, 1),
                    this.innerSize--,
                    !0;
        return !1
    }
    forEach(ee) {
        forEach(this.inner, (te, re) => {
            for (const [ie, se] of re)
                ee(ie, se)
        }
        )
    }
    isEmpty() {
        return isEmpty(this.inner)
    }
    size() {
        return this.innerSize
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht = new SortedMap(DocumentKey.comparator);
function __PRIVATE_mutableDocumentMap() {
    return ht
}
const Pt = new SortedMap(DocumentKey.comparator);
function documentMap(...ne) {
    let ee = Pt;
    for (const te of ne)
        ee = ee.insert(te.key, te);
    return ee
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(ne) {
    let ee = Pt;
    return ne.forEach((te, re) => ee = ee.insert(te, re.overlayedDocument)),
        ee
}
function __PRIVATE_newOverlayMap() {
    return __PRIVATE_newDocumentKeyMap()
}
function __PRIVATE_newMutationMap() {
    return __PRIVATE_newDocumentKeyMap()
}
function __PRIVATE_newDocumentKeyMap() {
    return new ObjectMap(ne => ne.toString(), (ne, ee) => ne.isEqual(ee))
}
const Tt = new SortedMap(DocumentKey.comparator)
    , It = new SortedSet(DocumentKey.comparator);
function __PRIVATE_documentKeySet(...ne) {
    let ee = It;
    for (const te of ne)
        ee = ee.add(te);
    return ee
}
const Et = new SortedSet(__PRIVATE_primitiveComparator);
function __PRIVATE_targetIdSet() {
    return Et
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_toDouble(ne, ee) {
    if (ne.useProto3Json) {
        if (isNaN(ee))
            return {
                doubleValue: "NaN"
            };
        if (ee === 1 / 0)
            return {
                doubleValue: "Infinity"
            };
        if (ee === -1 / 0)
            return {
                doubleValue: "-Infinity"
            }
    }
    return {
        doubleValue: __PRIVATE_isNegativeZero(ee) ? "-0" : ee
    }
}
function __PRIVATE_toInteger(ne) {
    return {
        integerValue: "" + ne
    }
}
function toNumber(ne, ee) {
    return isSafeInteger(ee) ? __PRIVATE_toInteger(ee) : __PRIVATE_toDouble(ne, ee)
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TransformOperation {
    constructor() {
        this._ = void 0
    }
}
function __PRIVATE_applyTransformOperationToLocalView(ne, ee, te) {
    return ne instanceof __PRIVATE_ServerTimestampTransform ? function (ie, se) {
        const ae = {
            fields: {
                [tt]: {
                    stringValue: et
                },
                [rt]: {
                    timestampValue: {
                        seconds: ie.seconds,
                        nanos: ie.nanoseconds
                    }
                }
            }
        };
        return se && __PRIVATE_isServerTimestamp(se) && (se = __PRIVATE_getPreviousValue(se)),
            se && (ae.fields[nt] = se),
        {
            mapValue: ae
        }
    }(te, ee) : ne instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(ne, ee) : ne instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(ne, ee) : function (ie, se) {
        const ae = __PRIVATE_computeTransformOperationBaseValue(ie, se)
            , ce = asNumber(ae) + asNumber(ie.Ae);
        return isInteger(ae) && isInteger(ie.Ae) ? __PRIVATE_toInteger(ce) : __PRIVATE_toDouble(ie.serializer, ce)
    }(ne, ee)
}
function __PRIVATE_applyTransformOperationToRemoteDocument(ne, ee, te) {
    return ne instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(ne, ee) : ne instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(ne, ee) : te
}
function __PRIVATE_computeTransformOperationBaseValue(ne, ee) {
    return ne instanceof __PRIVATE_NumericIncrementTransformOperation ? function (re) {
        return isInteger(re) || function (se) {
            return !!se && "doubleValue" in se
        }(re)
    }(ee) ? ee : {
        integerValue: 0
    } : null
}
class __PRIVATE_ServerTimestampTransform extends TransformOperation {
}
class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation {
    constructor(ee) {
        super(),
            this.elements = ee
    }
}
function __PRIVATE_applyArrayUnionTransformOperation(ne, ee) {
    const te = __PRIVATE_coercedFieldValuesArray(ee);
    for (const re of ne.elements)
        te.some(ie => __PRIVATE_valueEquals(ie, re)) || te.push(re);
    return {
        arrayValue: {
            values: te
        }
    }
}
class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation {
    constructor(ee) {
        super(),
            this.elements = ee
    }
}
function __PRIVATE_applyArrayRemoveTransformOperation(ne, ee) {
    let te = __PRIVATE_coercedFieldValuesArray(ee);
    for (const re of ne.elements)
        te = te.filter(ie => !__PRIVATE_valueEquals(ie, re));
    return {
        arrayValue: {
            values: te
        }
    }
}
class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation {
    constructor(ee, te) {
        super(),
            this.serializer = ee,
            this.Ae = te
    }
}
function asNumber(ne) {
    return __PRIVATE_normalizeNumber(ne.integerValue || ne.doubleValue)
}
function __PRIVATE_coercedFieldValuesArray(ne) {
    return isArray(ne) && ne.arrayValue.values ? ne.arrayValue.values.slice() : []
}
function __PRIVATE_fieldTransformEquals(ne, ee) {
    return ne.field.isEqual(ee.field) && function (re, ie) {
        return re instanceof __PRIVATE_ArrayUnionTransformOperation && ie instanceof __PRIVATE_ArrayUnionTransformOperation || re instanceof __PRIVATE_ArrayRemoveTransformOperation && ie instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(re.elements, ie.elements, __PRIVATE_valueEquals) : re instanceof __PRIVATE_NumericIncrementTransformOperation && ie instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(re.Ae, ie.Ae) : re instanceof __PRIVATE_ServerTimestampTransform && ie instanceof __PRIVATE_ServerTimestampTransform
    }(ne.transform, ee.transform)
}
class MutationResult {
    constructor(ee, te) {
        this.version = ee,
            this.transformResults = te
    }
}
class Precondition {
    constructor(ee, te) {
        this.updateTime = ee,
            this.exists = te
    }
    static none() {
        return new Precondition
    }
    static exists(ee) {
        return new Precondition(void 0, ee)
    }
    static updateTime(ee) {
        return new Precondition(ee)
    }
    get isNone() {
        return this.updateTime === void 0 && this.exists === void 0
    }
    isEqual(ee) {
        return this.exists === ee.exists && (this.updateTime ? !!ee.updateTime && this.updateTime.isEqual(ee.updateTime) : !ee.updateTime)
    }
}
function __PRIVATE_preconditionIsValidForDocument(ne, ee) {
    return ne.updateTime !== void 0 ? ee.isFoundDocument() && ee.version.isEqual(ne.updateTime) : ne.exists === void 0 || ne.exists === ee.isFoundDocument()
}
class Mutation {
}
function __PRIVATE_calculateOverlayMutation(ne, ee) {
    if (!ne.hasLocalMutations || ee && ee.fields.length === 0)
        return null;
    if (ee === null)
        return ne.isNoDocument() ? new __PRIVATE_DeleteMutation(ne.key, Precondition.none()) : new __PRIVATE_SetMutation(ne.key, ne.data, Precondition.none());
    {
        const te = ne.data
            , re = ObjectValue.empty();
        let ie = new SortedSet(FieldPath$1.comparator);
        for (let se of ee.fields)
            if (!ie.has(se)) {
                let ae = te.field(se);
                ae === null && se.length > 1 && (se = se.popLast(),
                    ae = te.field(se)),
                    ae === null ? re.delete(se) : re.set(se, ae),
                    ie = ie.add(se)
            }
        return new __PRIVATE_PatchMutation(ne.key, re, new FieldMask(ie.toArray()), Precondition.none())
    }
}
function __PRIVATE_mutationApplyToRemoteDocument(ne, ee, te) {
    ne instanceof __PRIVATE_SetMutation ? function (ie, se, ae) {
        const ce = ie.value.clone()
            , le = __PRIVATE_serverTransformResults(ie.fieldTransforms, se, ae.transformResults);
        ce.setAll(le),
            se.convertToFoundDocument(ae.version, ce).setHasCommittedMutations()
    }(ne, ee, te) : ne instanceof __PRIVATE_PatchMutation ? function (ie, se, ae) {
        if (!__PRIVATE_preconditionIsValidForDocument(ie.precondition, se))
            return void se.convertToUnknownDocument(ae.version);
        const ce = __PRIVATE_serverTransformResults(ie.fieldTransforms, se, ae.transformResults)
            , le = se.data;
        le.setAll(__PRIVATE_getPatch(ie)),
            le.setAll(ce),
            se.convertToFoundDocument(ae.version, le).setHasCommittedMutations()
    }(ne, ee, te) : function (ie, se, ae) {
        se.convertToNoDocument(ae.version).setHasCommittedMutations()
    }(0, ee, te)
}
function __PRIVATE_mutationApplyToLocalView(ne, ee, te, re) {
    return ne instanceof __PRIVATE_SetMutation ? function (se, ae, ce, le) {
        if (!__PRIVATE_preconditionIsValidForDocument(se.precondition, ae))
            return ce;
        const he = se.value.clone()
            , de = __PRIVATE_localTransformResults(se.fieldTransforms, le, ae);
        return he.setAll(de),
            ae.convertToFoundDocument(ae.version, he).setHasLocalMutations(),
            null
    }(ne, ee, te, re) : ne instanceof __PRIVATE_PatchMutation ? function (se, ae, ce, le) {
        if (!__PRIVATE_preconditionIsValidForDocument(se.precondition, ae))
            return ce;
        const he = __PRIVATE_localTransformResults(se.fieldTransforms, le, ae)
            , de = ae.data;
        return de.setAll(__PRIVATE_getPatch(se)),
            de.setAll(he),
            ae.convertToFoundDocument(ae.version, de).setHasLocalMutations(),
            ce === null ? null : ce.unionWith(se.fieldMask.fields).unionWith(se.fieldTransforms.map(fe => fe.field))
    }(ne, ee, te, re) : function (se, ae, ce) {
        return __PRIVATE_preconditionIsValidForDocument(se.precondition, ae) ? (ae.convertToNoDocument(ae.version).setHasLocalMutations(),
            null) : ce
    }(ne, ee, te)
}
function __PRIVATE_mutationExtractBaseValue(ne, ee) {
    let te = null;
    for (const re of ne.fieldTransforms) {
        const ie = ee.data.field(re.field)
            , se = __PRIVATE_computeTransformOperationBaseValue(re.transform, ie || null);
        se != null && (te === null && (te = ObjectValue.empty()),
            te.set(re.field, se))
    }
    return te || null
}
function __PRIVATE_mutationEquals(ne, ee) {
    return ne.type === ee.type && !!ne.key.isEqual(ee.key) && !!ne.precondition.isEqual(ee.precondition) && !!function (re, ie) {
        return re === void 0 && ie === void 0 || !(!re || !ie) && __PRIVATE_arrayEquals(re, ie, (se, ae) => __PRIVATE_fieldTransformEquals(se, ae))
    }(ne.fieldTransforms, ee.fieldTransforms) && (ne.type === 0 ? ne.value.isEqual(ee.value) : ne.type !== 1 || ne.data.isEqual(ee.data) && ne.fieldMask.isEqual(ee.fieldMask))
}
class __PRIVATE_SetMutation extends Mutation {
    constructor(ee, te, re, ie = []) {
        super(),
            this.key = ee,
            this.value = te,
            this.precondition = re,
            this.fieldTransforms = ie,
            this.type = 0
    }
    getFieldMask() {
        return null
    }
}
class __PRIVATE_PatchMutation extends Mutation {
    constructor(ee, te, re, ie, se = []) {
        super(),
            this.key = ee,
            this.data = te,
            this.fieldMask = re,
            this.precondition = ie,
            this.fieldTransforms = se,
            this.type = 1
    }
    getFieldMask() {
        return this.fieldMask
    }
}
function __PRIVATE_getPatch(ne) {
    const ee = new Map;
    return ne.fieldMask.fields.forEach(te => {
        if (!te.isEmpty()) {
            const re = ne.data.field(te);
            ee.set(te, re)
        }
    }
    ),
        ee
}
function __PRIVATE_serverTransformResults(ne, ee, te) {
    const re = new Map;
    __PRIVATE_hardAssert(ne.length === te.length, 32656, {
        Ve: te.length,
        de: ne.length
    });
    for (let ie = 0; ie < te.length; ie++) {
        const se = ne[ie]
            , ae = se.transform
            , ce = ee.data.field(se.field);
        re.set(se.field, __PRIVATE_applyTransformOperationToRemoteDocument(ae, ce, te[ie]))
    }
    return re
}
function __PRIVATE_localTransformResults(ne, ee, te) {
    const re = new Map;
    for (const ie of ne) {
        const se = ie.transform
            , ae = te.data.field(ie.field);
        re.set(ie.field, __PRIVATE_applyTransformOperationToLocalView(se, ae, ee))
    }
    return re
}
class __PRIVATE_DeleteMutation extends Mutation {
    constructor(ee, te) {
        super(),
            this.key = ee,
            this.precondition = te,
            this.type = 2,
            this.fieldTransforms = []
    }
    getFieldMask() {
        return null
    }
}
class __PRIVATE_VerifyMutation extends Mutation {
    constructor(ee, te) {
        super(),
            this.key = ee,
            this.precondition = te,
            this.type = 3,
            this.fieldTransforms = []
    }
    getFieldMask() {
        return null
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MutationBatch {
    constructor(ee, te, re, ie) {
        this.batchId = ee,
            this.localWriteTime = te,
            this.baseMutations = re,
            this.mutations = ie
    }
    applyToRemoteDocument(ee, te) {
        const re = te.mutationResults;
        for (let ie = 0; ie < this.mutations.length; ie++) {
            const se = this.mutations[ie];
            se.key.isEqual(ee.key) && __PRIVATE_mutationApplyToRemoteDocument(se, ee, re[ie])
        }
    }
    applyToLocalView(ee, te) {
        for (const re of this.baseMutations)
            re.key.isEqual(ee.key) && (te = __PRIVATE_mutationApplyToLocalView(re, ee, te, this.localWriteTime));
        for (const re of this.mutations)
            re.key.isEqual(ee.key) && (te = __PRIVATE_mutationApplyToLocalView(re, ee, te, this.localWriteTime));
        return te
    }
    applyToLocalDocumentSet(ee, te) {
        const re = __PRIVATE_newMutationMap();
        return this.mutations.forEach(ie => {
            const se = ee.get(ie.key)
                , ae = se.overlayedDocument;
            let ce = this.applyToLocalView(ae, se.mutatedFields);
            ce = te.has(ie.key) ? null : ce;
            const le = __PRIVATE_calculateOverlayMutation(ae, ce);
            le !== null && re.set(ie.key, le),
                ae.isValidDocument() || ae.convertToNoDocument(SnapshotVersion.min())
        }
        ),
            re
    }
    keys() {
        return this.mutations.reduce((ee, te) => ee.add(te.key), __PRIVATE_documentKeySet())
    }
    isEqual(ee) {
        return this.batchId === ee.batchId && __PRIVATE_arrayEquals(this.mutations, ee.mutations, (te, re) => __PRIVATE_mutationEquals(te, re)) && __PRIVATE_arrayEquals(this.baseMutations, ee.baseMutations, (te, re) => __PRIVATE_mutationEquals(te, re))
    }
}
class MutationBatchResult {
    constructor(ee, te, re, ie) {
        this.batch = ee,
            this.commitVersion = te,
            this.mutationResults = re,
            this.docVersions = ie
    }
    static from(ee, te, re) {
        __PRIVATE_hardAssert(ee.mutations.length === re.length, 58842, {
            me: ee.mutations.length,
            fe: re.length
        });
        let ie = function () {
            return Tt
        }();
        const se = ee.mutations;
        for (let ae = 0; ae < se.length; ae++)
            ie = ie.insert(se[ae].key, re[ae].version);
        return new MutationBatchResult(ee, te, re, ie)
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Overlay {
    constructor(ee, te) {
        this.largestBatchId = ee,
            this.mutation = te
    }
    getKey() {
        return this.mutation.key
    }
    isEqual(ee) {
        return ee !== null && this.mutation === ee.mutation
    }
    toString() {
        return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ExistenceFilter {
    constructor(ee, te) {
        this.count = ee,
            this.unchangedNames = te
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt, At;
function __PRIVATE_isPermanentError(ne) {
    switch (ne) {
        case D.OK:
            return fail(64938);
        case D.CANCELLED:
        case D.UNKNOWN:
        case D.DEADLINE_EXCEEDED:
        case D.RESOURCE_EXHAUSTED:
        case D.INTERNAL:
        case D.UNAVAILABLE:
        case D.UNAUTHENTICATED:
            return !1;
        case D.INVALID_ARGUMENT:
        case D.NOT_FOUND:
        case D.ALREADY_EXISTS:
        case D.PERMISSION_DENIED:
        case D.FAILED_PRECONDITION:
        case D.ABORTED:
        case D.OUT_OF_RANGE:
        case D.UNIMPLEMENTED:
        case D.DATA_LOSS:
            return !0;
        default:
            return fail(15467, {
                code: ne
            })
    }
}
function __PRIVATE_mapCodeFromRpcCode(ne) {
    if (ne === void 0)
        return __PRIVATE_logError("GRPC error has no .code"),
            D.UNKNOWN;
    switch (ne) {
        case Rt.OK:
            return D.OK;
        case Rt.CANCELLED:
            return D.CANCELLED;
        case Rt.UNKNOWN:
            return D.UNKNOWN;
        case Rt.DEADLINE_EXCEEDED:
            return D.DEADLINE_EXCEEDED;
        case Rt.RESOURCE_EXHAUSTED:
            return D.RESOURCE_EXHAUSTED;
        case Rt.INTERNAL:
            return D.INTERNAL;
        case Rt.UNAVAILABLE:
            return D.UNAVAILABLE;
        case Rt.UNAUTHENTICATED:
            return D.UNAUTHENTICATED;
        case Rt.INVALID_ARGUMENT:
            return D.INVALID_ARGUMENT;
        case Rt.NOT_FOUND:
            return D.NOT_FOUND;
        case Rt.ALREADY_EXISTS:
            return D.ALREADY_EXISTS;
        case Rt.PERMISSION_DENIED:
            return D.PERMISSION_DENIED;
        case Rt.FAILED_PRECONDITION:
            return D.FAILED_PRECONDITION;
        case Rt.ABORTED:
            return D.ABORTED;
        case Rt.OUT_OF_RANGE:
            return D.OUT_OF_RANGE;
        case Rt.UNIMPLEMENTED:
            return D.UNIMPLEMENTED;
        case Rt.DATA_LOSS:
            return D.DATA_LOSS;
        default:
            return fail(39323, {
                code: ne
            })
    }
}
(At = Rt || (Rt = {}))[At.OK = 0] = "OK",
    At[At.CANCELLED = 1] = "CANCELLED",
    At[At.UNKNOWN = 2] = "UNKNOWN",
    At[At.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT",
    At[At.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED",
    At[At.NOT_FOUND = 5] = "NOT_FOUND",
    At[At.ALREADY_EXISTS = 6] = "ALREADY_EXISTS",
    At[At.PERMISSION_DENIED = 7] = "PERMISSION_DENIED",
    At[At.UNAUTHENTICATED = 16] = "UNAUTHENTICATED",
    At[At.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED",
    At[At.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION",
    At[At.ABORTED = 10] = "ABORTED",
    At[At.OUT_OF_RANGE = 11] = "OUT_OF_RANGE",
    At[At.UNIMPLEMENTED = 12] = "UNIMPLEMENTED",
    At[At.INTERNAL = 13] = "INTERNAL",
    At[At.UNAVAILABLE = 14] = "UNAVAILABLE",
    At[At.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_newTextEncoder() {
    return new TextEncoder
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt = new Integer([4294967295, 4294967295], 0);
function __PRIVATE_getMd5HashValue(ne) {
    const ee = __PRIVATE_newTextEncoder().encode(ne)
        , te = new Md5;
    return te.update(ee),
        new Uint8Array(te.digest())
}
function __PRIVATE_get64BitUints(ne) {
    const ee = new DataView(ne.buffer)
        , te = ee.getUint32(0, !0)
        , re = ee.getUint32(4, !0)
        , ie = ee.getUint32(8, !0)
        , se = ee.getUint32(12, !0);
    return [new Integer([te, re], 0), new Integer([ie, se], 0)]
}
class BloomFilter {
    constructor(ee, te, re) {
        if (this.bitmap = ee,
            this.padding = te,
            this.hashCount = re,
            te < 0 || te >= 8)
            throw new __PRIVATE_BloomFilterError(`Invalid padding: ${te}`);
        if (re < 0)
            throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${re}`);
        if (ee.length > 0 && this.hashCount === 0)
            throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${re}`);
        if (ee.length === 0 && te !== 0)
            throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${te}`);
        this.ge = 8 * ee.length - te,
            this.pe = Integer.fromNumber(this.ge)
    }
    ye(ee, te, re) {
        let ie = ee.add(te.multiply(Integer.fromNumber(re)));
        return ie.compare(dt) === 1 && (ie = new Integer([ie.getBits(0), ie.getBits(1)], 0)),
            ie.modulo(this.pe).toNumber()
    }
    we(ee) {
        return !!(this.bitmap[Math.floor(ee / 8)] & 1 << ee % 8)
    }
    mightContain(ee) {
        if (this.ge === 0)
            return !1;
        const te = __PRIVATE_getMd5HashValue(ee)
            , [re, ie] = __PRIVATE_get64BitUints(te);
        for (let se = 0; se < this.hashCount; se++) {
            const ae = this.ye(re, ie, se);
            if (!this.we(ae))
                return !1
        }
        return !0
    }
    static create(ee, te, re) {
        const ie = ee % 8 == 0 ? 0 : 8 - ee % 8
            , se = new Uint8Array(Math.ceil(ee / 8))
            , ae = new BloomFilter(se, ie, te);
        return re.forEach(ce => ae.insert(ce)),
            ae
    }
    insert(ee) {
        if (this.ge === 0)
            return;
        const te = __PRIVATE_getMd5HashValue(ee)
            , [re, ie] = __PRIVATE_get64BitUints(te);
        for (let se = 0; se < this.hashCount; se++) {
            const ae = this.ye(re, ie, se);
            this.Se(ae)
        }
    }
    Se(ee) {
        const te = Math.floor(ee / 8)
            , re = ee % 8;
        this.bitmap[te] |= 1 << re
    }
}
class __PRIVATE_BloomFilterError extends Error {
    constructor() {
        super(...arguments),
            this.name = "BloomFilterError"
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RemoteEvent {
    constructor(ee, te, re, ie, se) {
        this.snapshotVersion = ee,
            this.targetChanges = te,
            this.targetMismatches = re,
            this.documentUpdates = ie,
            this.resolvedLimboDocuments = se
    }
    static createSynthesizedRemoteEventForCurrentChange(ee, te, re) {
        const ie = new Map;
        return ie.set(ee, TargetChange.createSynthesizedTargetChangeForCurrentChange(ee, te, re)),
            new RemoteEvent(SnapshotVersion.min(), ie, new SortedMap(__PRIVATE_primitiveComparator), __PRIVATE_mutableDocumentMap(), __PRIVATE_documentKeySet())
    }
}
class TargetChange {
    constructor(ee, te, re, ie, se) {
        this.resumeToken = ee,
            this.current = te,
            this.addedDocuments = re,
            this.modifiedDocuments = ie,
            this.removedDocuments = se
    }
    static createSynthesizedTargetChangeForCurrentChange(ee, te, re) {
        return new TargetChange(re, te, __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_DocumentWatchChange {
    constructor(ee, te, re, ie) {
        this.be = ee,
            this.removedTargetIds = te,
            this.key = re,
            this.De = ie
    }
}
class __PRIVATE_ExistenceFilterChange {
    constructor(ee, te) {
        this.targetId = ee,
            this.Ce = te
    }
}
class __PRIVATE_WatchTargetChange {
    constructor(ee, te, re = ByteString.EMPTY_BYTE_STRING, ie = null) {
        this.state = ee,
            this.targetIds = te,
            this.resumeToken = re,
            this.cause = ie
    }
}
class __PRIVATE_TargetState {
    constructor() {
        this.ve = 0,
            this.Fe = __PRIVATE_snapshotChangesMap(),
            this.Me = ByteString.EMPTY_BYTE_STRING,
            this.xe = !1,
            this.Oe = !0
    }
    get current() {
        return this.xe
    }
    get resumeToken() {
        return this.Me
    }
    get Ne() {
        return this.ve !== 0
    }
    get Be() {
        return this.Oe
    }
    Le(ee) {
        ee.approximateByteSize() > 0 && (this.Oe = !0,
            this.Me = ee)
    }
    ke() {
        let ee = __PRIVATE_documentKeySet()
            , te = __PRIVATE_documentKeySet()
            , re = __PRIVATE_documentKeySet();
        return this.Fe.forEach((ie, se) => {
            switch (se) {
                case 0:
                    ee = ee.add(ie);
                    break;
                case 2:
                    te = te.add(ie);
                    break;
                case 1:
                    re = re.add(ie);
                    break;
                default:
                    fail(38017, {
                        changeType: se
                    })
            }
        }
        ),
            new TargetChange(this.Me, this.xe, ee, te, re)
    }
    qe() {
        this.Oe = !1,
            this.Fe = __PRIVATE_snapshotChangesMap()
    }
    Ke(ee, te) {
        this.Oe = !0,
            this.Fe = this.Fe.insert(ee, te)
    }
    Ue(ee) {
        this.Oe = !0,
            this.Fe = this.Fe.remove(ee)
    }
    $e() {
        this.ve += 1
    }
    We() {
        this.ve -= 1,
            __PRIVATE_hardAssert(this.ve >= 0, 3241, {
                ve: this.ve
            })
    }
    Qe() {
        this.Oe = !0,
            this.xe = !0
    }
}
class __PRIVATE_WatchChangeAggregator {
    constructor(ee) {
        this.Ge = ee,
            this.ze = new Map,
            this.je = __PRIVATE_mutableDocumentMap(),
            this.Je = __PRIVATE_documentTargetMap(),
            this.He = __PRIVATE_documentTargetMap(),
            this.Ze = new SortedMap(__PRIVATE_primitiveComparator)
    }
    Xe(ee) {
        for (const te of ee.be)
            ee.De && ee.De.isFoundDocument() ? this.Ye(te, ee.De) : this.et(te, ee.key, ee.De);
        for (const te of ee.removedTargetIds)
            this.et(te, ee.key, ee.De)
    }
    tt(ee) {
        this.forEachTarget(ee, te => {
            const re = this.nt(te);
            switch (ee.state) {
                case 0:
                    this.rt(te) && re.Le(ee.resumeToken);
                    break;
                case 1:
                    re.We(),
                        re.Ne || re.qe(),
                        re.Le(ee.resumeToken);
                    break;
                case 2:
                    re.We(),
                        re.Ne || this.removeTarget(te);
                    break;
                case 3:
                    this.rt(te) && (re.Qe(),
                        re.Le(ee.resumeToken));
                    break;
                case 4:
                    this.rt(te) && (this.it(te),
                        re.Le(ee.resumeToken));
                    break;
                default:
                    fail(56790, {
                        state: ee.state
                    })
            }
        }
        )
    }
    forEachTarget(ee, te) {
        ee.targetIds.length > 0 ? ee.targetIds.forEach(te) : this.ze.forEach((re, ie) => {
            this.rt(ie) && te(ie)
        }
        )
    }
    st(ee) {
        const te = ee.targetId
            , re = ee.Ce.count
            , ie = this.ot(te);
        if (ie) {
            const se = ie.target;
            if (__PRIVATE_targetIsDocumentTarget(se))
                if (re === 0) {
                    const ae = new DocumentKey(se.path);
                    this.et(te, ae, MutableDocument.newNoDocument(ae, SnapshotVersion.min()))
                } else
                    __PRIVATE_hardAssert(re === 1, 20013, {
                        expectedCount: re
                    });
            else {
                const ae = this._t(te);
                if (ae !== re) {
                    const ce = this.ut(ee)
                        , le = ce ? this.ct(ce, ee, ae) : 1;
                    if (le !== 0) {
                        this.it(te);
                        const he = le === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
                        this.Ze = this.Ze.insert(te, he)
                    }
                }
            }
        }
    }
    ut(ee) {
        const te = ee.Ce.unchangedNames;
        if (!te || !te.bits)
            return null;
        const { bits: { bitmap: re = "", padding: ie = 0 }, hashCount: se = 0 } = te;
        let ae, ce;
        try {
            ae = __PRIVATE_normalizeByteString(re).toUint8Array()
        } catch (le) {
            if (le instanceof __PRIVATE_Base64DecodeError)
                return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed (" + le.message + "); ignoring the bloom filter and falling back to full re-query."),
                    null;
            throw le
        }
        try {
            ce = new BloomFilter(ae, ie, se)
        } catch (le) {
            return __PRIVATE_logWarn(le instanceof __PRIVATE_BloomFilterError ? "BloomFilter error: " : "Applying bloom filter failed: ", le),
                null
        }
        return ce.ge === 0 ? null : ce
    }
    ct(ee, te, re) {
        return te.Ce.count === re - this.Pt(ee, te.targetId) ? 0 : 2
    }
    Pt(ee, te) {
        const re = this.Ge.getRemoteKeysForTarget(te);
        let ie = 0;
        return re.forEach(se => {
            const ae = this.Ge.ht()
                , ce = `projects/${ae.projectId}/databases/${ae.database}/documents/${se.path.canonicalString()}`;
            ee.mightContain(ce) || (this.et(te, se, null),
                ie++)
        }
        ),
            ie
    }
    Tt(ee) {
        const te = new Map;
        this.ze.forEach((se, ae) => {
            const ce = this.ot(ae);
            if (ce) {
                if (se.current && __PRIVATE_targetIsDocumentTarget(ce.target)) {
                    const le = new DocumentKey(ce.target.path);
                    this.Et(le).has(ae) || this.It(ae, le) || this.et(ae, le, MutableDocument.newNoDocument(le, ee))
                }
                se.Be && (te.set(ae, se.ke()),
                    se.qe())
            }
        }
        );
        let re = __PRIVATE_documentKeySet();
        this.He.forEach((se, ae) => {
            let ce = !0;
            ae.forEachWhile(le => {
                const he = this.ot(le);
                return !he || he.purpose === "TargetPurposeLimboResolution" || (ce = !1,
                    !1)
            }
            ),
                ce && (re = re.add(se))
        }
        ),
            this.je.forEach((se, ae) => ae.setReadTime(ee));
        const ie = new RemoteEvent(ee, te, this.Ze, this.je, re);
        return this.je = __PRIVATE_mutableDocumentMap(),
            this.Je = __PRIVATE_documentTargetMap(),
            this.He = __PRIVATE_documentTargetMap(),
            this.Ze = new SortedMap(__PRIVATE_primitiveComparator),
            ie
    }
    Ye(ee, te) {
        if (!this.rt(ee))
            return;
        const re = this.It(ee, te.key) ? 2 : 0;
        this.nt(ee).Ke(te.key, re),
            this.je = this.je.insert(te.key, te),
            this.Je = this.Je.insert(te.key, this.Et(te.key).add(ee)),
            this.He = this.He.insert(te.key, this.Rt(te.key).add(ee))
    }
    et(ee, te, re) {
        if (!this.rt(ee))
            return;
        const ie = this.nt(ee);
        this.It(ee, te) ? ie.Ke(te, 1) : ie.Ue(te),
            this.He = this.He.insert(te, this.Rt(te).delete(ee)),
            this.He = this.He.insert(te, this.Rt(te).add(ee)),
            re && (this.je = this.je.insert(te, re))
    }
    removeTarget(ee) {
        this.ze.delete(ee)
    }
    _t(ee) {
        const te = this.nt(ee).ke();
        return this.Ge.getRemoteKeysForTarget(ee).size + te.addedDocuments.size - te.removedDocuments.size
    }
    $e(ee) {
        this.nt(ee).$e()
    }
    nt(ee) {
        let te = this.ze.get(ee);
        return te || (te = new __PRIVATE_TargetState,
            this.ze.set(ee, te)),
            te
    }
    Rt(ee) {
        let te = this.He.get(ee);
        return te || (te = new SortedSet(__PRIVATE_primitiveComparator),
            this.He = this.He.insert(ee, te)),
            te
    }
    Et(ee) {
        let te = this.Je.get(ee);
        return te || (te = new SortedSet(__PRIVATE_primitiveComparator),
            this.Je = this.Je.insert(ee, te)),
            te
    }
    rt(ee) {
        const te = this.ot(ee) !== null;
        return te || __PRIVATE_logDebug("WatchChangeAggregator", "Detected inactive target", ee),
            te
    }
    ot(ee) {
        const te = this.ze.get(ee);
        return te && te.Ne ? null : this.Ge.At(ee)
    }
    it(ee) {
        this.ze.set(ee, new __PRIVATE_TargetState),
            this.Ge.getRemoteKeysForTarget(ee).forEach(te => {
                this.et(ee, te, null)
            }
            )
    }
    It(ee, te) {
        return this.Ge.getRemoteKeysForTarget(ee).has(te)
    }
}
function __PRIVATE_documentTargetMap() {
    return new SortedMap(DocumentKey.comparator)
}
function __PRIVATE_snapshotChangesMap() {
    return new SortedMap(DocumentKey.comparator)
}
const mt = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}
    , ft = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    }
    , gt = {
        and: "AND",
        or: "OR"
    };
class JsonProtoSerializer {
    constructor(ee, te) {
        this.databaseId = ee,
            this.useProto3Json = te
    }
}
function __PRIVATE_toInt32Proto(ne, ee) {
    return ne.useProto3Json || __PRIVATE_isNullOrUndefined(ee) ? ee : {
        value: ee
    }
}
function toTimestamp(ne, ee) {
    return ne.useProto3Json ? `${new Date(1e3 * ee.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + ee.nanoseconds).slice(-9)}Z` : {
        seconds: "" + ee.seconds,
        nanos: ee.nanoseconds
    }
}
function __PRIVATE_toBytes(ne, ee) {
    return ne.useProto3Json ? ee.toBase64() : ee.toUint8Array()
}
function __PRIVATE_toVersion(ne, ee) {
    return toTimestamp(ne, ee.toTimestamp())
}
function __PRIVATE_fromVersion(ne) {
    return __PRIVATE_hardAssert(!!ne, 49232),
        SnapshotVersion.fromTimestamp(function (te) {
            const re = __PRIVATE_normalizeTimestamp(te);
            return new Timestamp(re.seconds, re.nanos)
        }(ne))
}
function __PRIVATE_toResourceName(ne, ee) {
    return __PRIVATE_toResourcePath(ne, ee).canonicalString()
}
function __PRIVATE_toResourcePath(ne, ee) {
    const te = function (ie) {
        return new ResourcePath(["projects", ie.projectId, "databases", ie.database])
    }(ne).child("documents");
    return ee === void 0 ? te : te.child(ee)
}
function __PRIVATE_fromResourceName(ne) {
    const ee = ResourcePath.fromString(ne);
    return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(ee), 10190, {
        key: ee.toString()
    }),
        ee
}
function __PRIVATE_toName(ne, ee) {
    return __PRIVATE_toResourceName(ne.databaseId, ee.path)
}
function fromName(ne, ee) {
    const te = __PRIVATE_fromResourceName(ee);
    if (te.get(1) !== ne.databaseId.projectId)
        throw new FirestoreError(D.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + te.get(1) + " vs " + ne.databaseId.projectId);
    if (te.get(3) !== ne.databaseId.database)
        throw new FirestoreError(D.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + te.get(3) + " vs " + ne.databaseId.database);
    return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(te))
}
function __PRIVATE_toQueryPath(ne, ee) {
    return __PRIVATE_toResourceName(ne.databaseId, ee)
}
function __PRIVATE_fromQueryPath(ne) {
    const ee = __PRIVATE_fromResourceName(ne);
    return ee.length === 4 ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(ee)
}
function __PRIVATE_getEncodedDatabaseId(ne) {
    return new ResourcePath(["projects", ne.databaseId.projectId, "databases", ne.databaseId.database]).canonicalString()
}
function __PRIVATE_extractLocalPathFromResourceName(ne) {
    return __PRIVATE_hardAssert(ne.length > 4 && ne.get(4) === "documents", 29091, {
        key: ne.toString()
    }),
        ne.popFirst(5)
}
function __PRIVATE_toMutationDocument(ne, ee, te) {
    return {
        name: __PRIVATE_toName(ne, ee),
        fields: te.value.mapValue.fields
    }
}
function __PRIVATE_fromWatchChange(ne, ee) {
    let te;
    if ("targetChange" in ee) {
        ee.targetChange;
        const re = function (he) {
            return he === "NO_CHANGE" ? 0 : he === "ADD" ? 1 : he === "REMOVE" ? 2 : he === "CURRENT" ? 3 : he === "RESET" ? 4 : fail(39313, {
                state: he
            })
        }(ee.targetChange.targetChangeType || "NO_CHANGE")
            , ie = ee.targetChange.targetIds || []
            , se = function (he, de) {
                return he.useProto3Json ? (__PRIVATE_hardAssert(de === void 0 || typeof de == "string", 58123),
                    ByteString.fromBase64String(de || "")) : (__PRIVATE_hardAssert(de === void 0 || de instanceof e$3 || de instanceof Uint8Array, 16193),
                        ByteString.fromUint8Array(de || new Uint8Array))
            }(ne, ee.targetChange.resumeToken)
            , ae = ee.targetChange.cause
            , ce = ae && function (he) {
                const de = he.code === void 0 ? D.UNKNOWN : __PRIVATE_mapCodeFromRpcCode(he.code);
                return new FirestoreError(de, he.message || "")
            }(ae);
        te = new __PRIVATE_WatchTargetChange(re, ie, se, ce || null)
    } else if ("documentChange" in ee) {
        ee.documentChange;
        const re = ee.documentChange;
        re.document,
            re.document.name,
            re.document.updateTime;
        const ie = fromName(ne, re.document.name)
            , se = __PRIVATE_fromVersion(re.document.updateTime)
            , ae = re.document.createTime ? __PRIVATE_fromVersion(re.document.createTime) : SnapshotVersion.min()
            , ce = new ObjectValue({
                mapValue: {
                    fields: re.document.fields
                }
            })
            , le = MutableDocument.newFoundDocument(ie, se, ae, ce)
            , he = re.targetIds || []
            , de = re.removedTargetIds || [];
        te = new __PRIVATE_DocumentWatchChange(he, de, le.key, le)
    } else if ("documentDelete" in ee) {
        ee.documentDelete;
        const re = ee.documentDelete;
        re.document;
        const ie = fromName(ne, re.document)
            , se = re.readTime ? __PRIVATE_fromVersion(re.readTime) : SnapshotVersion.min()
            , ae = MutableDocument.newNoDocument(ie, se)
            , ce = re.removedTargetIds || [];
        te = new __PRIVATE_DocumentWatchChange([], ce, ae.key, ae)
    } else if ("documentRemove" in ee) {
        ee.documentRemove;
        const re = ee.documentRemove;
        re.document;
        const ie = fromName(ne, re.document)
            , se = re.removedTargetIds || [];
        te = new __PRIVATE_DocumentWatchChange([], se, ie, null)
    } else {
        if (!("filter" in ee))
            return fail(11601, {
                Vt: ee
            });
        {
            ee.filter;
            const re = ee.filter;
            re.targetId;
            const { count: ie = 0, unchangedNames: se } = re
                , ae = new ExistenceFilter(ie, se)
                , ce = re.targetId;
            te = new __PRIVATE_ExistenceFilterChange(ce, ae)
        }
    }
    return te
}
function toMutation(ne, ee) {
    let te;
    if (ee instanceof __PRIVATE_SetMutation)
        te = {
            update: __PRIVATE_toMutationDocument(ne, ee.key, ee.value)
        };
    else if (ee instanceof __PRIVATE_DeleteMutation)
        te = {
            delete: __PRIVATE_toName(ne, ee.key)
        };
    else if (ee instanceof __PRIVATE_PatchMutation)
        te = {
            update: __PRIVATE_toMutationDocument(ne, ee.key, ee.data),
            updateMask: __PRIVATE_toDocumentMask(ee.fieldMask)
        };
    else {
        if (!(ee instanceof __PRIVATE_VerifyMutation))
            return fail(16599, {
                dt: ee.type
            });
        te = {
            verify: __PRIVATE_toName(ne, ee.key)
        }
    }
    return ee.fieldTransforms.length > 0 && (te.updateTransforms = ee.fieldTransforms.map(re => function (se, ae) {
        const ce = ae.transform;
        if (ce instanceof __PRIVATE_ServerTimestampTransform)
            return {
                fieldPath: ae.field.canonicalString(),
                setToServerValue: "REQUEST_TIME"
            };
        if (ce instanceof __PRIVATE_ArrayUnionTransformOperation)
            return {
                fieldPath: ae.field.canonicalString(),
                appendMissingElements: {
                    values: ce.elements
                }
            };
        if (ce instanceof __PRIVATE_ArrayRemoveTransformOperation)
            return {
                fieldPath: ae.field.canonicalString(),
                removeAllFromArray: {
                    values: ce.elements
                }
            };
        if (ce instanceof __PRIVATE_NumericIncrementTransformOperation)
            return {
                fieldPath: ae.field.canonicalString(),
                increment: ce.Ae
            };
        throw fail(20930, {
            transform: ae.transform
        })
    }(0, re))),
        ee.precondition.isNone || (te.currentDocument = function (ie, se) {
            return se.updateTime !== void 0 ? {
                updateTime: __PRIVATE_toVersion(ie, se.updateTime)
            } : se.exists !== void 0 ? {
                exists: se.exists
            } : fail(27497)
        }(ne, ee.precondition)),
        te
}
function __PRIVATE_fromWriteResults(ne, ee) {
    return ne && ne.length > 0 ? (__PRIVATE_hardAssert(ee !== void 0, 14353),
        ne.map(te => function (ie, se) {
            let ae = ie.updateTime ? __PRIVATE_fromVersion(ie.updateTime) : __PRIVATE_fromVersion(se);
            return ae.isEqual(SnapshotVersion.min()) && (ae = __PRIVATE_fromVersion(se)),
                new MutationResult(ae, ie.transformResults || [])
        }(te, ee))) : []
}
function __PRIVATE_toDocumentsTarget(ne, ee) {
    return {
        documents: [__PRIVATE_toQueryPath(ne, ee.path)]
    }
}
function __PRIVATE_toQueryTarget(ne, ee) {
    const te = {
        structuredQuery: {}
    }
        , re = ee.path;
    let ie;
    ee.collectionGroup !== null ? (ie = re,
        te.structuredQuery.from = [{
            collectionId: ee.collectionGroup,
            allDescendants: !0
        }]) : (ie = re.popLast(),
            te.structuredQuery.from = [{
                collectionId: re.lastSegment()
            }]),
        te.parent = __PRIVATE_toQueryPath(ne, ie);
    const se = function (he) {
        if (he.length !== 0)
            return __PRIVATE_toFilter(CompositeFilter.create(he, "and"))
    }(ee.filters);
    se && (te.structuredQuery.where = se);
    const ae = function (he) {
        if (he.length !== 0)
            return he.map(de => function (Re) {
                return {
                    field: __PRIVATE_toFieldPathReference(Re.field),
                    direction: __PRIVATE_toDirection(Re.dir)
                }
            }(de))
    }(ee.orderBy);
    ae && (te.structuredQuery.orderBy = ae);
    const ce = __PRIVATE_toInt32Proto(ne, ee.limit);
    return ce !== null && (te.structuredQuery.limit = ce),
        ee.startAt && (te.structuredQuery.startAt = function (he) {
            return {
                before: he.inclusive,
                values: he.position
            }
        }(ee.startAt)),
        ee.endAt && (te.structuredQuery.endAt = function (he) {
            return {
                before: !he.inclusive,
                values: he.position
            }
        }(ee.endAt)),
    {
        ft: te,
        parent: ie
    }
}
function __PRIVATE_convertQueryTargetToQuery(ne) {
    let ee = __PRIVATE_fromQueryPath(ne.parent);
    const te = ne.structuredQuery
        , re = te.from ? te.from.length : 0;
    let ie = null;
    if (re > 0) {
        __PRIVATE_hardAssert(re === 1, 65062);
        const de = te.from[0];
        de.allDescendants ? ie = de.collectionId : ee = ee.child(de.collectionId)
    }
    let se = [];
    te.where && (se = function (fe) {
        const Re = __PRIVATE_fromFilter(fe);
        return Re instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(Re) ? Re.getFilters() : [Re]
    }(te.where));
    let ae = [];
    te.orderBy && (ae = function (fe) {
        return fe.map(Re => function (we) {
            return new OrderBy(__PRIVATE_fromFieldPathReference(we.field), function (be) {
                switch (be) {
                    case "ASCENDING":
                        return "asc";
                    case "DESCENDING":
                        return "desc";
                    default:
                        return
                }
            }(we.direction))
        }(Re))
    }(te.orderBy));
    let ce = null;
    te.limit && (ce = function (fe) {
        let Re;
        return Re = typeof fe == "object" ? fe.value : fe,
            __PRIVATE_isNullOrUndefined(Re) ? null : Re
    }(te.limit));
    let le = null;
    te.startAt && (le = function (fe) {
        const Re = !!fe.before
            , Pe = fe.values || [];
        return new Bound(Pe, Re)
    }(te.startAt));
    let he = null;
    return te.endAt && (he = function (fe) {
        const Re = !fe.before
            , Pe = fe.values || [];
        return new Bound(Pe, Re)
    }(te.endAt)),
        __PRIVATE_newQuery(ee, ie, ae, se, ce, "F", le, he)
}
function __PRIVATE_toListenRequestLabels(ne, ee) {
    const te = function (ie) {
        switch (ie) {
            case "TargetPurposeListen":
                return null;
            case "TargetPurposeExistenceFilterMismatch":
                return "existence-filter-mismatch";
            case "TargetPurposeExistenceFilterMismatchBloom":
                return "existence-filter-mismatch-bloom";
            case "TargetPurposeLimboResolution":
                return "limbo-document";
            default:
                return fail(28987, {
                    purpose: ie
                })
        }
    }(ee.purpose);
    return te == null ? null : {
        "goog-listen-tags": te
    }
}
function __PRIVATE_fromFilter(ne) {
    return ne.unaryFilter !== void 0 ? function (te) {
        switch (te.unaryFilter.op) {
            case "IS_NAN":
                const re = __PRIVATE_fromFieldPathReference(te.unaryFilter.field);
                return FieldFilter.create(re, "==", {
                    doubleValue: NaN
                });
            case "IS_NULL":
                const ie = __PRIVATE_fromFieldPathReference(te.unaryFilter.field);
                return FieldFilter.create(ie, "==", {
                    nullValue: "NULL_VALUE"
                });
            case "IS_NOT_NAN":
                const se = __PRIVATE_fromFieldPathReference(te.unaryFilter.field);
                return FieldFilter.create(se, "!=", {
                    doubleValue: NaN
                });
            case "IS_NOT_NULL":
                const ae = __PRIVATE_fromFieldPathReference(te.unaryFilter.field);
                return FieldFilter.create(ae, "!=", {
                    nullValue: "NULL_VALUE"
                });
            case "OPERATOR_UNSPECIFIED":
                return fail(61313);
            default:
                return fail(60726)
        }
    }(ne) : ne.fieldFilter !== void 0 ? function (te) {
        return FieldFilter.create(__PRIVATE_fromFieldPathReference(te.fieldFilter.field), function (ie) {
            switch (ie) {
                case "EQUAL":
                    return "==";
                case "NOT_EQUAL":
                    return "!=";
                case "GREATER_THAN":
                    return ">";
                case "GREATER_THAN_OR_EQUAL":
                    return ">=";
                case "LESS_THAN":
                    return "<";
                case "LESS_THAN_OR_EQUAL":
                    return "<=";
                case "ARRAY_CONTAINS":
                    return "array-contains";
                case "IN":
                    return "in";
                case "NOT_IN":
                    return "not-in";
                case "ARRAY_CONTAINS_ANY":
                    return "array-contains-any";
                case "OPERATOR_UNSPECIFIED":
                    return fail(58110);
                default:
                    return fail(50506)
            }
        }(te.fieldFilter.op), te.fieldFilter.value)
    }(ne) : ne.compositeFilter !== void 0 ? function (te) {
        return CompositeFilter.create(te.compositeFilter.filters.map(re => __PRIVATE_fromFilter(re)), function (ie) {
            switch (ie) {
                case "AND":
                    return "and";
                case "OR":
                    return "or";
                default:
                    return fail(1026)
            }
        }(te.compositeFilter.op))
    }(ne) : fail(30097, {
        filter: ne
    })
}
function __PRIVATE_toDirection(ne) {
    return mt[ne]
}
function __PRIVATE_toOperatorName(ne) {
    return ft[ne]
}
function __PRIVATE_toCompositeOperatorName(ne) {
    return gt[ne]
}
function __PRIVATE_toFieldPathReference(ne) {
    return {
        fieldPath: ne.canonicalString()
    }
}
function __PRIVATE_fromFieldPathReference(ne) {
    return FieldPath$1.fromServerFormat(ne.fieldPath)
}
function __PRIVATE_toFilter(ne) {
    return ne instanceof FieldFilter ? function (te) {
        if (te.op === "==") {
            if (__PRIVATE_isNanValue(te.value))
                return {
                    unaryFilter: {
                        field: __PRIVATE_toFieldPathReference(te.field),
                        op: "IS_NAN"
                    }
                };
            if (__PRIVATE_isNullValue(te.value))
                return {
                    unaryFilter: {
                        field: __PRIVATE_toFieldPathReference(te.field),
                        op: "IS_NULL"
                    }
                }
        } else if (te.op === "!=") {
            if (__PRIVATE_isNanValue(te.value))
                return {
                    unaryFilter: {
                        field: __PRIVATE_toFieldPathReference(te.field),
                        op: "IS_NOT_NAN"
                    }
                };
            if (__PRIVATE_isNullValue(te.value))
                return {
                    unaryFilter: {
                        field: __PRIVATE_toFieldPathReference(te.field),
                        op: "IS_NOT_NULL"
                    }
                }
        }
        return {
            fieldFilter: {
                field: __PRIVATE_toFieldPathReference(te.field),
                op: __PRIVATE_toOperatorName(te.op),
                value: te.value
            }
        }
    }(ne) : ne instanceof CompositeFilter ? function (te) {
        const re = te.getFilters().map(ie => __PRIVATE_toFilter(ie));
        return re.length === 1 ? re[0] : {
            compositeFilter: {
                op: __PRIVATE_toCompositeOperatorName(te.op),
                filters: re
            }
        }
    }(ne) : fail(54877, {
        filter: ne
    })
}
function __PRIVATE_toDocumentMask(ne) {
    const ee = [];
    return ne.fields.forEach(te => ee.push(te.canonicalString())),
    {
        fieldPaths: ee
    }
}
function __PRIVATE_isValidResourceName(ne) {
    return ne.length >= 4 && ne.get(0) === "projects" && ne.get(2) === "databases"
}
function __PRIVATE_isProtoValueSerializable(ne) {
    return !!ne && typeof ne._toProto == "function" && ne._protoValueType === "ProtoValue"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TargetData {
    constructor(ee, te, re, ie, se = SnapshotVersion.min(), ae = SnapshotVersion.min(), ce = ByteString.EMPTY_BYTE_STRING, le = null) {
        this.target = ee,
            this.targetId = te,
            this.purpose = re,
            this.sequenceNumber = ie,
            this.snapshotVersion = se,
            this.lastLimboFreeSnapshotVersion = ae,
            this.resumeToken = ce,
            this.expectedCount = le
    }
    withSequenceNumber(ee) {
        return new TargetData(this.target, this.targetId, this.purpose, ee, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount)
    }
    withResumeToken(ee, te) {
        return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, te, this.lastLimboFreeSnapshotVersion, ee, null)
    }
    withExpectedCount(ee) {
        return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, ee)
    }
    withLastLimboFreeSnapshotVersion(ee) {
        return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, ee, this.resumeToken, this.expectedCount)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_LocalSerializer {
    constructor(ee) {
        this.yt = ee
    }
}
function __PRIVATE_fromBundledQuery(ne) {
    const ee = __PRIVATE_convertQueryTargetToQuery({
        parent: ne.parent,
        structuredQuery: ne.structuredQuery
    });
    return ne.limitType === "LAST" ? __PRIVATE_queryWithLimit(ee, ee.limit, "L") : ee
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryIndexManager {
    constructor() {
        this.bn = new __PRIVATE_MemoryCollectionParentIndex
    }
    addToCollectionParentIndex(ee, te) {
        return this.bn.add(te),
            PersistencePromise.resolve()
    }
    getCollectionParents(ee, te) {
        return PersistencePromise.resolve(this.bn.getEntries(te))
    }
    addFieldIndex(ee, te) {
        return PersistencePromise.resolve()
    }
    deleteFieldIndex(ee, te) {
        return PersistencePromise.resolve()
    }
    deleteAllFieldIndexes(ee) {
        return PersistencePromise.resolve()
    }
    createTargetIndexes(ee, te) {
        return PersistencePromise.resolve()
    }
    getDocumentsMatchingTarget(ee, te) {
        return PersistencePromise.resolve(null)
    }
    getIndexType(ee, te) {
        return PersistencePromise.resolve(0)
    }
    getFieldIndexes(ee, te) {
        return PersistencePromise.resolve([])
    }
    getNextCollectionGroupToUpdate(ee) {
        return PersistencePromise.resolve(null)
    }
    getMinOffset(ee, te) {
        return PersistencePromise.resolve(IndexOffset.min())
    }
    getMinOffsetFromCollectionGroup(ee, te) {
        return PersistencePromise.resolve(IndexOffset.min())
    }
    updateCollectionGroup(ee, te, re) {
        return PersistencePromise.resolve()
    }
    updateIndexEntries(ee, te) {
        return PersistencePromise.resolve()
    }
}
class __PRIVATE_MemoryCollectionParentIndex {
    constructor() {
        this.index = {}
    }
    add(ee) {
        const te = ee.lastSegment()
            , re = ee.popLast()
            , ie = this.index[te] || new SortedSet(ResourcePath.comparator)
            , se = !ie.has(re);
        return this.index[te] = ie.add(re),
            se
    }
    has(ee) {
        const te = ee.lastSegment()
            , re = ee.popLast()
            , ie = this.index[te];
        return ie && ie.has(re)
    }
    getEntries(ee) {
        return (this.index[ee] || new SortedSet(ResourcePath.comparator)).toArray()
    }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
}
    , St = 41943040;
class LruParams {
    static withCacheSize(ee) {
        return new LruParams(ee, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
    }
    constructor(ee, te, re) {
        this.cacheSizeCollectionThreshold = ee,
            this.percentileToCollect = te,
            this.maximumSequenceNumbersToCollect = re
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
LruParams.DEFAULT_COLLECTION_PERCENTILE = 10,
    LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3,
    LruParams.DEFAULT = new LruParams(St, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),
    LruParams.DISABLED = new LruParams(-1, 0, 0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_TargetIdGenerator {
    constructor(ee) {
        this.sr = ee
    }
    next() {
        return this.sr += 2,
            this.sr
    }
    static _r() {
        return new __PRIVATE_TargetIdGenerator(0)
    }
    static ar() {
        return new __PRIVATE_TargetIdGenerator(-1)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt = "LruGarbageCollector"
    , Ct = 1048576;
function __PRIVATE_bufferEntryComparator([ne, ee], [te, re]) {
    const ie = __PRIVATE_primitiveComparator(ne, te);
    return ie === 0 ? __PRIVATE_primitiveComparator(ee, re) : ie
}
class __PRIVATE_RollingSequenceNumberBuffer {
    constructor(ee) {
        this.Pr = ee,
            this.buffer = new SortedSet(__PRIVATE_bufferEntryComparator),
            this.Tr = 0
    }
    Er() {
        return ++this.Tr
    }
    Ir(ee) {
        const te = [ee, this.Er()];
        if (this.buffer.size < this.Pr)
            this.buffer = this.buffer.add(te);
        else {
            const re = this.buffer.last();
            __PRIVATE_bufferEntryComparator(te, re) < 0 && (this.buffer = this.buffer.delete(re).add(te))
        }
    }
    get maxValue() {
        return this.buffer.last()[0]
    }
}
class __PRIVATE_LruScheduler {
    constructor(ee, te, re) {
        this.garbageCollector = ee,
            this.asyncQueue = te,
            this.localStore = re,
            this.Rr = null
    }
    start() {
        this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 && this.Ar(6e4)
    }
    stop() {
        this.Rr && (this.Rr.cancel(),
            this.Rr = null)
    }
    get started() {
        return this.Rr !== null
    }
    Ar(ee) {
        __PRIVATE_logDebug(Dt, `Garbage collection scheduled in ${ee}ms`),
            this.Rr = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", ee, async () => {
                this.Rr = null;
                try {
                    await this.localStore.collectGarbage(this.garbageCollector)
                } catch (te) {
                    __PRIVATE_isIndexedDbTransactionError(te) ? __PRIVATE_logDebug(Dt, "Ignoring IndexedDB error during garbage collection: ", te) : await __PRIVATE_ignoreIfPrimaryLeaseLoss(te)
                }
                await this.Ar(3e5)
            }
            )
    }
}
class __PRIVATE_LruGarbageCollectorImpl {
    constructor(ee, te) {
        this.Vr = ee,
            this.params = te
    }
    calculateTargetCount(ee, te) {
        return this.Vr.dr(ee).next(re => Math.floor(te / 100 * re))
    }
    nthSequenceNumber(ee, te) {
        if (te === 0)
            return PersistencePromise.resolve(__PRIVATE_ListenSequence.ce);
        const re = new __PRIVATE_RollingSequenceNumberBuffer(te);
        return this.Vr.forEachTarget(ee, ie => re.Ir(ie.sequenceNumber)).next(() => this.Vr.mr(ee, ie => re.Ir(ie))).next(() => re.maxValue)
    }
    removeTargets(ee, te, re) {
        return this.Vr.removeTargets(ee, te, re)
    }
    removeOrphanedDocuments(ee, te) {
        return this.Vr.removeOrphanedDocuments(ee, te)
    }
    collect(ee, te) {
        return this.params.cacheSizeCollectionThreshold === -1 ? (__PRIVATE_logDebug("LruGarbageCollector", "Garbage collection skipped; disabled"),
            PersistencePromise.resolve(bt)) : this.getCacheSize(ee).next(re => re < this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", `Garbage collection skipped; Cache size ${re} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),
                bt) : this.gr(ee, te))
    }
    getCacheSize(ee) {
        return this.Vr.getCacheSize(ee)
    }
    gr(ee, te) {
        let re, ie, se, ae, ce, le, he;
        const de = Date.now();
        return this.calculateTargetCount(ee, this.params.percentileToCollect).next(fe => (fe > this.params.maximumSequenceNumbersToCollect ? (__PRIVATE_logDebug("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${fe}`),
            ie = this.params.maximumSequenceNumbersToCollect) : ie = fe,
            ae = Date.now(),
            this.nthSequenceNumber(ee, ie))).next(fe => (re = fe,
                ce = Date.now(),
                this.removeTargets(ee, re, te))).next(fe => (se = fe,
                    le = Date.now(),
                    this.removeOrphanedDocuments(ee, re))).next(fe => (he = Date.now(),
                        __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${ae - de}ms
	Determined least recently used ${ie} in ` + (ce - ae) + `ms
	Removed ${se} targets in ` + (le - ce) + `ms
	Removed ${fe} documents in ` + (he - le) + `ms
Total Duration: ${he - de}ms`),
                        PersistencePromise.resolve({
                            didRun: !0,
                            sequenceNumbersCollected: ie,
                            targetsRemoved: se,
                            documentsRemoved: fe
                        })))
    }
}
function __PRIVATE_newLruGarbageCollector(ne, ee) {
    return new __PRIVATE_LruGarbageCollectorImpl(ne, ee)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RemoteDocumentChangeBuffer {
    constructor() {
        this.changes = new ObjectMap(ee => ee.toString(), (ee, te) => ee.isEqual(te)),
            this.changesApplied = !1
    }
    addEntry(ee) {
        this.assertNotApplied(),
            this.changes.set(ee.key, ee)
    }
    removeEntry(ee, te) {
        this.assertNotApplied(),
            this.changes.set(ee, MutableDocument.newInvalidDocument(ee).setReadTime(te))
    }
    getEntry(ee, te) {
        this.assertNotApplied();
        const re = this.changes.get(te);
        return re !== void 0 ? PersistencePromise.resolve(re) : this.getFromCache(ee, te)
    }
    getEntries(ee, te) {
        return this.getAllFromCache(ee, te)
    }
    apply(ee) {
        return this.assertNotApplied(),
            this.changesApplied = !0,
            this.applyChanges(ee)
    }
    assertNotApplied() { }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OverlayedDocument {
    constructor(ee, te) {
        this.overlayedDocument = ee,
            this.mutatedFields = te
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class LocalDocumentsView {
    constructor(ee, te, re, ie) {
        this.remoteDocumentCache = ee,
            this.mutationQueue = te,
            this.documentOverlayCache = re,
            this.indexManager = ie
    }
    getDocument(ee, te) {
        let re = null;
        return this.documentOverlayCache.getOverlay(ee, te).next(ie => (re = ie,
            this.remoteDocumentCache.getEntry(ee, te))).next(ie => (re !== null && __PRIVATE_mutationApplyToLocalView(re.mutation, ie, FieldMask.empty(), Timestamp.now()),
                ie))
    }
    getDocuments(ee, te) {
        return this.remoteDocumentCache.getEntries(ee, te).next(re => this.getLocalViewOfDocuments(ee, re, __PRIVATE_documentKeySet()).next(() => re))
    }
    getLocalViewOfDocuments(ee, te, re = __PRIVATE_documentKeySet()) {
        const ie = __PRIVATE_newOverlayMap();
        return this.populateOverlays(ee, ie, te).next(() => this.computeViews(ee, te, ie, re).next(se => {
            let ae = documentMap();
            return se.forEach((ce, le) => {
                ae = ae.insert(ce, le.overlayedDocument)
            }
            ),
                ae
        }
        ))
    }
    getOverlayedDocuments(ee, te) {
        const re = __PRIVATE_newOverlayMap();
        return this.populateOverlays(ee, re, te).next(() => this.computeViews(ee, te, re, __PRIVATE_documentKeySet()))
    }
    populateOverlays(ee, te, re) {
        const ie = [];
        return re.forEach(se => {
            te.has(se) || ie.push(se)
        }
        ),
            this.documentOverlayCache.getOverlays(ee, ie).next(se => {
                se.forEach((ae, ce) => {
                    te.set(ae, ce)
                }
                )
            }
            )
    }
    computeViews(ee, te, re, ie) {
        let se = __PRIVATE_mutableDocumentMap();
        const ae = __PRIVATE_newDocumentKeyMap()
            , ce = function () {
                return __PRIVATE_newDocumentKeyMap()
            }();
        return te.forEach((le, he) => {
            const de = re.get(he.key);
            ie.has(he.key) && (de === void 0 || de.mutation instanceof __PRIVATE_PatchMutation) ? se = se.insert(he.key, he) : de !== void 0 ? (ae.set(he.key, de.mutation.getFieldMask()),
                __PRIVATE_mutationApplyToLocalView(de.mutation, he, de.mutation.getFieldMask(), Timestamp.now())) : ae.set(he.key, FieldMask.empty())
        }
        ),
            this.recalculateAndSaveOverlays(ee, se).next(le => (le.forEach((he, de) => ae.set(he, de)),
                te.forEach((he, de) => ce.set(he, new OverlayedDocument(de, ae.get(he) ?? null))),
                ce))
    }
    recalculateAndSaveOverlays(ee, te) {
        const re = __PRIVATE_newDocumentKeyMap();
        let ie = new SortedMap((ae, ce) => ae - ce)
            , se = __PRIVATE_documentKeySet();
        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(ee, te).next(ae => {
            for (const ce of ae)
                ce.keys().forEach(le => {
                    const he = te.get(le);
                    if (he === null)
                        return;
                    let de = re.get(le) || FieldMask.empty();
                    de = ce.applyToLocalView(he, de),
                        re.set(le, de);
                    const fe = (ie.get(ce.batchId) || __PRIVATE_documentKeySet()).add(le);
                    ie = ie.insert(ce.batchId, fe)
                }
                )
        }
        ).next(() => {
            const ae = []
                , ce = ie.getReverseIterator();
            for (; ce.hasNext();) {
                const le = ce.getNext()
                    , he = le.key
                    , de = le.value
                    , fe = __PRIVATE_newMutationMap();
                de.forEach(Re => {
                    if (!se.has(Re)) {
                        const Pe = __PRIVATE_calculateOverlayMutation(te.get(Re), re.get(Re));
                        Pe !== null && fe.set(Re, Pe),
                            se = se.add(Re)
                    }
                }
                ),
                    ae.push(this.documentOverlayCache.saveOverlays(ee, he, fe))
            }
            return PersistencePromise.waitFor(ae)
        }
        ).next(() => re)
    }
    recalculateAndSaveOverlaysForDocumentKeys(ee, te) {
        return this.remoteDocumentCache.getEntries(ee, te).next(re => this.recalculateAndSaveOverlays(ee, re))
    }
    getDocumentsMatchingQuery(ee, te, re, ie) {
        return __PRIVATE_isDocumentQuery$1(te) ? this.getDocumentsMatchingDocumentQuery(ee, te.path) : __PRIVATE_isCollectionGroupQuery(te) ? this.getDocumentsMatchingCollectionGroupQuery(ee, te, re, ie) : this.getDocumentsMatchingCollectionQuery(ee, te, re, ie)
    }
    getNextDocuments(ee, te, re, ie) {
        return this.remoteDocumentCache.getAllFromCollectionGroup(ee, te, re, ie).next(se => {
            const ae = ie - se.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(ee, te, re.largestBatchId, ie - se.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
            let ce = N
                , le = se;
            return ae.next(he => PersistencePromise.forEach(he, (de, fe) => (ce < fe.largestBatchId && (ce = fe.largestBatchId),
                se.get(de) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(ee, de).next(Re => {
                    le = le.insert(de, Re)
                }
                ))).next(() => this.populateOverlays(ee, he, se)).next(() => this.computeViews(ee, le, he, __PRIVATE_documentKeySet())).next(de => ({
                    batchId: ce,
                    changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(de)
                })))
        }
        )
    }
    getDocumentsMatchingDocumentQuery(ee, te) {
        return this.getDocument(ee, new DocumentKey(te)).next(re => {
            let ie = documentMap();
            return re.isFoundDocument() && (ie = ie.insert(re.key, re)),
                ie
        }
        )
    }
    getDocumentsMatchingCollectionGroupQuery(ee, te, re, ie) {
        const se = te.collectionGroup;
        let ae = documentMap();
        return this.indexManager.getCollectionParents(ee, se).next(ce => PersistencePromise.forEach(ce, le => {
            const he = function (fe, Re) {
                return new __PRIVATE_QueryImpl(Re, null, fe.explicitOrderBy.slice(), fe.filters.slice(), fe.limit, fe.limitType, fe.startAt, fe.endAt)
            }(te, le.child(se));
            return this.getDocumentsMatchingCollectionQuery(ee, he, re, ie).next(de => {
                de.forEach((fe, Re) => {
                    ae = ae.insert(fe, Re)
                }
                )
            }
            )
        }
        ).next(() => ae))
    }
    getDocumentsMatchingCollectionQuery(ee, te, re, ie) {
        let se;
        return this.documentOverlayCache.getOverlaysForCollection(ee, te.path, re.largestBatchId).next(ae => (se = ae,
            this.remoteDocumentCache.getDocumentsMatchingQuery(ee, te, re, se, ie))).next(ae => {
                se.forEach((le, he) => {
                    const de = he.getKey();
                    ae.get(de) === null && (ae = ae.insert(de, MutableDocument.newInvalidDocument(de)))
                }
                );
                let ce = documentMap();
                return ae.forEach((le, he) => {
                    const de = se.get(le);
                    de !== void 0 && __PRIVATE_mutationApplyToLocalView(de.mutation, he, FieldMask.empty(), Timestamp.now()),
                        __PRIVATE_queryMatches(te, he) && (ce = ce.insert(le, he))
                }
                ),
                    ce
            }
            )
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryBundleCache {
    constructor(ee) {
        this.serializer = ee,
            this.Nr = new Map,
            this.Br = new Map
    }
    getBundleMetadata(ee, te) {
        return PersistencePromise.resolve(this.Nr.get(te))
    }
    saveBundleMetadata(ee, te) {
        return this.Nr.set(te.id, function (ie) {
            return {
                id: ie.id,
                version: ie.version,
                createTime: __PRIVATE_fromVersion(ie.createTime)
            }
        }(te)),
            PersistencePromise.resolve()
    }
    getNamedQuery(ee, te) {
        return PersistencePromise.resolve(this.Br.get(te))
    }
    saveNamedQuery(ee, te) {
        return this.Br.set(te.name, function (ie) {
            return {
                name: ie.name,
                query: __PRIVATE_fromBundledQuery(ie.bundledQuery),
                readTime: __PRIVATE_fromVersion(ie.readTime)
            }
        }(te)),
            PersistencePromise.resolve()
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryDocumentOverlayCache {
    constructor() {
        this.overlays = new SortedMap(DocumentKey.comparator),
            this.Lr = new Map
    }
    getOverlay(ee, te) {
        return PersistencePromise.resolve(this.overlays.get(te))
    }
    getOverlays(ee, te) {
        const re = __PRIVATE_newOverlayMap();
        return PersistencePromise.forEach(te, ie => this.getOverlay(ee, ie).next(se => {
            se !== null && re.set(ie, se)
        }
        )).next(() => re)
    }
    saveOverlays(ee, te, re) {
        return re.forEach((ie, se) => {
            this.St(ee, te, se)
        }
        ),
            PersistencePromise.resolve()
    }
    removeOverlaysForBatchId(ee, te, re) {
        const ie = this.Lr.get(re);
        return ie !== void 0 && (ie.forEach(se => this.overlays = this.overlays.remove(se)),
            this.Lr.delete(re)),
            PersistencePromise.resolve()
    }
    getOverlaysForCollection(ee, te, re) {
        const ie = __PRIVATE_newOverlayMap()
            , se = te.length + 1
            , ae = new DocumentKey(te.child(""))
            , ce = this.overlays.getIteratorFrom(ae);
        for (; ce.hasNext();) {
            const le = ce.getNext().value
                , he = le.getKey();
            if (!te.isPrefixOf(he.path))
                break;
            he.path.length === se && le.largestBatchId > re && ie.set(le.getKey(), le)
        }
        return PersistencePromise.resolve(ie)
    }
    getOverlaysForCollectionGroup(ee, te, re, ie) {
        let se = new SortedMap((he, de) => he - de);
        const ae = this.overlays.getIterator();
        for (; ae.hasNext();) {
            const he = ae.getNext().value;
            if (he.getKey().getCollectionGroup() === te && he.largestBatchId > re) {
                let de = se.get(he.largestBatchId);
                de === null && (de = __PRIVATE_newOverlayMap(),
                    se = se.insert(he.largestBatchId, de)),
                    de.set(he.getKey(), he)
            }
        }
        const ce = __PRIVATE_newOverlayMap()
            , le = se.getIterator();
        for (; le.hasNext() && (le.getNext().value.forEach((he, de) => ce.set(he, de)),
            !(ce.size() >= ie));)
            ;
        return PersistencePromise.resolve(ce)
    }
    St(ee, te, re) {
        const ie = this.overlays.get(re.key);
        if (ie !== null) {
            const ae = this.Lr.get(ie.largestBatchId).delete(re.key);
            this.Lr.set(ie.largestBatchId, ae)
        }
        this.overlays = this.overlays.insert(re.key, new Overlay(te, re));
        let se = this.Lr.get(te);
        se === void 0 && (se = __PRIVATE_documentKeySet(),
            this.Lr.set(te, se)),
            this.Lr.set(te, se.add(re.key))
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryGlobalsCache {
    constructor() {
        this.sessionToken = ByteString.EMPTY_BYTE_STRING
    }
    getSessionToken(ee) {
        return PersistencePromise.resolve(this.sessionToken)
    }
    setSessionToken(ee, te) {
        return this.sessionToken = te,
            PersistencePromise.resolve()
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_ReferenceSet {
    constructor() {
        this.kr = new SortedSet(__PRIVATE_DocReference.qr),
            this.Kr = new SortedSet(__PRIVATE_DocReference.Ur)
    }
    isEmpty() {
        return this.kr.isEmpty()
    }
    addReference(ee, te) {
        const re = new __PRIVATE_DocReference(ee, te);
        this.kr = this.kr.add(re),
            this.Kr = this.Kr.add(re)
    }
    $r(ee, te) {
        ee.forEach(re => this.addReference(re, te))
    }
    removeReference(ee, te) {
        this.Wr(new __PRIVATE_DocReference(ee, te))
    }
    Qr(ee, te) {
        ee.forEach(re => this.removeReference(re, te))
    }
    Gr(ee) {
        const te = new DocumentKey(new ResourcePath([]))
            , re = new __PRIVATE_DocReference(te, ee)
            , ie = new __PRIVATE_DocReference(te, ee + 1)
            , se = [];
        return this.Kr.forEachInRange([re, ie], ae => {
            this.Wr(ae),
                se.push(ae.key)
        }
        ),
            se
    }
    zr() {
        this.kr.forEach(ee => this.Wr(ee))
    }
    Wr(ee) {
        this.kr = this.kr.delete(ee),
            this.Kr = this.Kr.delete(ee)
    }
    jr(ee) {
        const te = new DocumentKey(new ResourcePath([]))
            , re = new __PRIVATE_DocReference(te, ee)
            , ie = new __PRIVATE_DocReference(te, ee + 1);
        let se = __PRIVATE_documentKeySet();
        return this.Kr.forEachInRange([re, ie], ae => {
            se = se.add(ae.key)
        }
        ),
            se
    }
    containsKey(ee) {
        const te = new __PRIVATE_DocReference(ee, 0)
            , re = this.kr.firstAfterOrEqual(te);
        return re !== null && ee.isEqual(re.key)
    }
}
class __PRIVATE_DocReference {
    constructor(ee, te) {
        this.key = ee,
            this.Jr = te
    }
    static qr(ee, te) {
        return DocumentKey.comparator(ee.key, te.key) || __PRIVATE_primitiveComparator(ee.Jr, te.Jr)
    }
    static Ur(ee, te) {
        return __PRIVATE_primitiveComparator(ee.Jr, te.Jr) || DocumentKey.comparator(ee.key, te.key)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryMutationQueue {
    constructor(ee, te) {
        this.indexManager = ee,
            this.referenceDelegate = te,
            this.mutationQueue = [],
            this.Yn = 1,
            this.Hr = new SortedSet(__PRIVATE_DocReference.qr)
    }
    checkEmpty(ee) {
        return PersistencePromise.resolve(this.mutationQueue.length === 0)
    }
    addMutationBatch(ee, te, re, ie) {
        const se = this.Yn;
        this.Yn++,
            this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
        const ae = new MutationBatch(se, te, re, ie);
        this.mutationQueue.push(ae);
        for (const ce of ie)
            this.Hr = this.Hr.add(new __PRIVATE_DocReference(ce.key, se)),
                this.indexManager.addToCollectionParentIndex(ee, ce.key.path.popLast());
        return PersistencePromise.resolve(ae)
    }
    lookupMutationBatch(ee, te) {
        return PersistencePromise.resolve(this.Zr(te))
    }
    getNextMutationBatchAfterBatchId(ee, te) {
        const re = te + 1
            , ie = this.Xr(re)
            , se = ie < 0 ? 0 : ie;
        return PersistencePromise.resolve(this.mutationQueue.length > se ? this.mutationQueue[se] : null)
    }
    getHighestUnacknowledgedBatchId() {
        return PersistencePromise.resolve(this.mutationQueue.length === 0 ? q : this.Yn - 1)
    }
    getAllMutationBatches(ee) {
        return PersistencePromise.resolve(this.mutationQueue.slice())
    }
    getAllMutationBatchesAffectingDocumentKey(ee, te) {
        const re = new __PRIVATE_DocReference(te, 0)
            , ie = new __PRIVATE_DocReference(te, Number.POSITIVE_INFINITY)
            , se = [];
        return this.Hr.forEachInRange([re, ie], ae => {
            const ce = this.Zr(ae.Jr);
            se.push(ce)
        }
        ),
            PersistencePromise.resolve(se)
    }
    getAllMutationBatchesAffectingDocumentKeys(ee, te) {
        let re = new SortedSet(__PRIVATE_primitiveComparator);
        return te.forEach(ie => {
            const se = new __PRIVATE_DocReference(ie, 0)
                , ae = new __PRIVATE_DocReference(ie, Number.POSITIVE_INFINITY);
            this.Hr.forEachInRange([se, ae], ce => {
                re = re.add(ce.Jr)
            }
            )
        }
        ),
            PersistencePromise.resolve(this.Yr(re))
    }
    getAllMutationBatchesAffectingQuery(ee, te) {
        const re = te.path
            , ie = re.length + 1;
        let se = re;
        DocumentKey.isDocumentKey(se) || (se = se.child(""));
        const ae = new __PRIVATE_DocReference(new DocumentKey(se), 0);
        let ce = new SortedSet(__PRIVATE_primitiveComparator);
        return this.Hr.forEachWhile(le => {
            const he = le.key.path;
            return !!re.isPrefixOf(he) && (he.length === ie && (ce = ce.add(le.Jr)),
                !0)
        }
            , ae),
            PersistencePromise.resolve(this.Yr(ce))
    }
    Yr(ee) {
        const te = [];
        return ee.forEach(re => {
            const ie = this.Zr(re);
            ie !== null && te.push(ie)
        }
        ),
            te
    }
    removeMutationBatch(ee, te) {
        __PRIVATE_hardAssert(this.ei(te.batchId, "removed") === 0, 55003),
            this.mutationQueue.shift();
        let re = this.Hr;
        return PersistencePromise.forEach(te.mutations, ie => {
            const se = new __PRIVATE_DocReference(ie.key, te.batchId);
            return re = re.delete(se),
                this.referenceDelegate.markPotentiallyOrphaned(ee, ie.key)
        }
        ).next(() => {
            this.Hr = re
        }
        )
    }
    nr(ee) { }
    containsKey(ee, te) {
        const re = new __PRIVATE_DocReference(te, 0)
            , ie = this.Hr.firstAfterOrEqual(re);
        return PersistencePromise.resolve(te.isEqual(ie && ie.key))
    }
    performConsistencyCheck(ee) {
        return this.mutationQueue.length,
            PersistencePromise.resolve()
    }
    ei(ee, te) {
        return this.Xr(ee)
    }
    Xr(ee) {
        return this.mutationQueue.length === 0 ? 0 : ee - this.mutationQueue[0].batchId
    }
    Zr(ee) {
        const te = this.Xr(ee);
        return te < 0 || te >= this.mutationQueue.length ? null : this.mutationQueue[te]
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryRemoteDocumentCacheImpl {
    constructor(ee) {
        this.ti = ee,
            this.docs = function () {
                return new SortedMap(DocumentKey.comparator)
            }(),
            this.size = 0
    }
    setIndexManager(ee) {
        this.indexManager = ee
    }
    addEntry(ee, te) {
        const re = te.key
            , ie = this.docs.get(re)
            , se = ie ? ie.size : 0
            , ae = this.ti(te);
        return this.docs = this.docs.insert(re, {
            document: te.mutableCopy(),
            size: ae
        }),
            this.size += ae - se,
            this.indexManager.addToCollectionParentIndex(ee, re.path.popLast())
    }
    removeEntry(ee) {
        const te = this.docs.get(ee);
        te && (this.docs = this.docs.remove(ee),
            this.size -= te.size)
    }
    getEntry(ee, te) {
        const re = this.docs.get(te);
        return PersistencePromise.resolve(re ? re.document.mutableCopy() : MutableDocument.newInvalidDocument(te))
    }
    getEntries(ee, te) {
        let re = __PRIVATE_mutableDocumentMap();
        return te.forEach(ie => {
            const se = this.docs.get(ie);
            re = re.insert(ie, se ? se.document.mutableCopy() : MutableDocument.newInvalidDocument(ie))
        }
        ),
            PersistencePromise.resolve(re)
    }
    getDocumentsMatchingQuery(ee, te, re, ie) {
        let se = __PRIVATE_mutableDocumentMap();
        const ae = te.path
            , ce = new DocumentKey(ae.child("__id-9223372036854775808__"))
            , le = this.docs.getIteratorFrom(ce);
        for (; le.hasNext();) {
            const { key: he, value: { document: de } } = le.getNext();
            if (!ae.isPrefixOf(he.path))
                break;
            he.path.length > ae.length + 1 || __PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(de), re) <= 0 || (ie.has(de.key) || __PRIVATE_queryMatches(te, de)) && (se = se.insert(de.key, de.mutableCopy()))
        }
        return PersistencePromise.resolve(se)
    }
    getAllFromCollectionGroup(ee, te, re, ie) {
        fail(9500)
    }
    ni(ee, te) {
        return PersistencePromise.forEach(this.docs, re => te(re))
    }
    newChangeBuffer(ee) {
        return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this)
    }
    getSize(ee) {
        return PersistencePromise.resolve(this.size)
    }
}
class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer {
    constructor(ee) {
        super(),
            this.Mr = ee
    }
    applyChanges(ee) {
        const te = [];
        return this.changes.forEach((re, ie) => {
            ie.isValidDocument() ? te.push(this.Mr.addEntry(ee, ie)) : this.Mr.removeEntry(re)
        }
        ),
            PersistencePromise.waitFor(te)
    }
    getFromCache(ee, te) {
        return this.Mr.getEntry(ee, te)
    }
    getAllFromCache(ee, te) {
        return this.Mr.getEntries(ee, te)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryTargetCache {
    constructor(ee) {
        this.persistence = ee,
            this.ri = new ObjectMap(te => __PRIVATE_canonifyTarget(te), __PRIVATE_targetEquals),
            this.lastRemoteSnapshotVersion = SnapshotVersion.min(),
            this.highestTargetId = 0,
            this.ii = 0,
            this.si = new __PRIVATE_ReferenceSet,
            this.targetCount = 0,
            this.oi = __PRIVATE_TargetIdGenerator._r()
    }
    forEachTarget(ee, te) {
        return this.ri.forEach((re, ie) => te(ie)),
            PersistencePromise.resolve()
    }
    getLastRemoteSnapshotVersion(ee) {
        return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)
    }
    getHighestSequenceNumber(ee) {
        return PersistencePromise.resolve(this.ii)
    }
    allocateTargetId(ee) {
        return this.highestTargetId = this.oi.next(),
            PersistencePromise.resolve(this.highestTargetId)
    }
    setTargetsMetadata(ee, te, re) {
        return re && (this.lastRemoteSnapshotVersion = re),
            te > this.ii && (this.ii = te),
            PersistencePromise.resolve()
    }
    lr(ee) {
        this.ri.set(ee.target, ee);
        const te = ee.targetId;
        te > this.highestTargetId && (this.oi = new __PRIVATE_TargetIdGenerator(te),
            this.highestTargetId = te),
            ee.sequenceNumber > this.ii && (this.ii = ee.sequenceNumber)
    }
    addTargetData(ee, te) {
        return this.lr(te),
            this.targetCount += 1,
            PersistencePromise.resolve()
    }
    updateTargetData(ee, te) {
        return this.lr(te),
            PersistencePromise.resolve()
    }
    removeTargetData(ee, te) {
        return this.ri.delete(te.target),
            this.si.Gr(te.targetId),
            this.targetCount -= 1,
            PersistencePromise.resolve()
    }
    removeTargets(ee, te, re) {
        let ie = 0;
        const se = [];
        return this.ri.forEach((ae, ce) => {
            ce.sequenceNumber <= te && re.get(ce.targetId) === null && (this.ri.delete(ae),
                se.push(this.removeMatchingKeysForTargetId(ee, ce.targetId)),
                ie++)
        }
        ),
            PersistencePromise.waitFor(se).next(() => ie)
    }
    getTargetCount(ee) {
        return PersistencePromise.resolve(this.targetCount)
    }
    getTargetData(ee, te) {
        const re = this.ri.get(te) || null;
        return PersistencePromise.resolve(re)
    }
    addMatchingKeys(ee, te, re) {
        return this.si.$r(te, re),
            PersistencePromise.resolve()
    }
    removeMatchingKeys(ee, te, re) {
        this.si.Qr(te, re);
        const ie = this.persistence.referenceDelegate
            , se = [];
        return ie && te.forEach(ae => {
            se.push(ie.markPotentiallyOrphaned(ee, ae))
        }
        ),
            PersistencePromise.waitFor(se)
    }
    removeMatchingKeysForTargetId(ee, te) {
        return this.si.Gr(te),
            PersistencePromise.resolve()
    }
    getMatchingKeysForTargetId(ee, te) {
        const re = this.si.jr(te);
        return PersistencePromise.resolve(re)
    }
    containsKey(ee, te) {
        return PersistencePromise.resolve(this.si.containsKey(te))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_MemoryPersistence {
    constructor(ee, te) {
        this._i = {},
            this.overlays = {},
            this.ai = new __PRIVATE_ListenSequence(0),
            this.ui = !1,
            this.ui = !0,
            this.ci = new __PRIVATE_MemoryGlobalsCache,
            this.referenceDelegate = ee(this),
            this.li = new __PRIVATE_MemoryTargetCache(this),
            this.indexManager = new __PRIVATE_MemoryIndexManager,
            this.remoteDocumentCache = function (ie) {
                return new __PRIVATE_MemoryRemoteDocumentCacheImpl(ie)
            }(re => this.referenceDelegate.hi(re)),
            this.serializer = new __PRIVATE_LocalSerializer(te),
            this.Pi = new __PRIVATE_MemoryBundleCache(this.serializer)
    }
    start() {
        return Promise.resolve()
    }
    shutdown() {
        return this.ui = !1,
            Promise.resolve()
    }
    get started() {
        return this.ui
    }
    setDatabaseDeletedListener() { }
    setNetworkEnabled() { }
    getIndexManager(ee) {
        return this.indexManager
    }
    getDocumentOverlayCache(ee) {
        let te = this.overlays[ee.toKey()];
        return te || (te = new __PRIVATE_MemoryDocumentOverlayCache,
            this.overlays[ee.toKey()] = te),
            te
    }
    getMutationQueue(ee, te) {
        let re = this._i[ee.toKey()];
        return re || (re = new __PRIVATE_MemoryMutationQueue(te, this.referenceDelegate),
            this._i[ee.toKey()] = re),
            re
    }
    getGlobalsCache() {
        return this.ci
    }
    getTargetCache() {
        return this.li
    }
    getRemoteDocumentCache() {
        return this.remoteDocumentCache
    }
    getBundleCache() {
        return this.Pi
    }
    runTransaction(ee, te, re) {
        __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", ee);
        const ie = new __PRIVATE_MemoryTransaction(this.ai.next());
        return this.referenceDelegate.Ti(),
            re(ie).next(se => this.referenceDelegate.Ei(ie).next(() => se)).toPromise().then(se => (ie.raiseOnCommittedEvent(),
                se))
    }
    Ii(ee, te) {
        return PersistencePromise.or(Object.values(this._i).map(re => () => re.containsKey(ee, te)))
    }
}
class __PRIVATE_MemoryTransaction extends PersistenceTransaction {
    constructor(ee) {
        super(),
            this.currentSequenceNumber = ee
    }
}
class __PRIVATE_MemoryEagerDelegate {
    constructor(ee) {
        this.persistence = ee,
            this.Ri = new __PRIVATE_ReferenceSet,
            this.Ai = null
    }
    static Vi(ee) {
        return new __PRIVATE_MemoryEagerDelegate(ee)
    }
    get di() {
        if (this.Ai)
            return this.Ai;
        throw fail(60996)
    }
    addReference(ee, te, re) {
        return this.Ri.addReference(re, te),
            this.di.delete(re.toString()),
            PersistencePromise.resolve()
    }
    removeReference(ee, te, re) {
        return this.Ri.removeReference(re, te),
            this.di.add(re.toString()),
            PersistencePromise.resolve()
    }
    markPotentiallyOrphaned(ee, te) {
        return this.di.add(te.toString()),
            PersistencePromise.resolve()
    }
    removeTarget(ee, te) {
        this.Ri.Gr(te.targetId).forEach(ie => this.di.add(ie.toString()));
        const re = this.persistence.getTargetCache();
        return re.getMatchingKeysForTargetId(ee, te.targetId).next(ie => {
            ie.forEach(se => this.di.add(se.toString()))
        }
        ).next(() => re.removeTargetData(ee, te))
    }
    Ti() {
        this.Ai = new Set
    }
    Ei(ee) {
        const te = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        return PersistencePromise.forEach(this.di, re => {
            const ie = DocumentKey.fromPath(re);
            return this.mi(ee, ie).next(se => {
                se || te.removeEntry(ie, SnapshotVersion.min())
            }
            )
        }
        ).next(() => (this.Ai = null,
            te.apply(ee)))
    }
    updateLimboDocument(ee, te) {
        return this.mi(ee, te).next(re => {
            re ? this.di.delete(te.toString()) : this.di.add(te.toString())
        }
        )
    }
    hi(ee) {
        return 0
    }
    mi(ee, te) {
        return PersistencePromise.or([() => PersistencePromise.resolve(this.Ri.containsKey(te)), () => this.persistence.getTargetCache().containsKey(ee, te), () => this.persistence.Ii(ee, te)])
    }
}
class __PRIVATE_MemoryLruDelegate {
    constructor(ee, te) {
        this.persistence = ee,
            this.fi = new ObjectMap(re => __PRIVATE_encodeResourcePath(re.path), (re, ie) => re.isEqual(ie)),
            this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, te)
    }
    static Vi(ee, te) {
        return new __PRIVATE_MemoryLruDelegate(ee, te)
    }
    Ti() { }
    Ei(ee) {
        return PersistencePromise.resolve()
    }
    forEachTarget(ee, te) {
        return this.persistence.getTargetCache().forEachTarget(ee, te)
    }
    dr(ee) {
        const te = this.pr(ee);
        return this.persistence.getTargetCache().getTargetCount(ee).next(re => te.next(ie => re + ie))
    }
    pr(ee) {
        let te = 0;
        return this.mr(ee, re => {
            te++
        }
        ).next(() => te)
    }
    mr(ee, te) {
        return PersistencePromise.forEach(this.fi, (re, ie) => this.wr(ee, re, ie).next(se => se ? PersistencePromise.resolve() : te(ie)))
    }
    removeTargets(ee, te, re) {
        return this.persistence.getTargetCache().removeTargets(ee, te, re)
    }
    removeOrphanedDocuments(ee, te) {
        let re = 0;
        const ie = this.persistence.getRemoteDocumentCache()
            , se = ie.newChangeBuffer();
        return ie.ni(ee, ae => this.wr(ee, ae, te).next(ce => {
            ce || (re++,
                se.removeEntry(ae, SnapshotVersion.min()))
        }
        )).next(() => se.apply(ee)).next(() => re)
    }
    markPotentiallyOrphaned(ee, te) {
        return this.fi.set(te, ee.currentSequenceNumber),
            PersistencePromise.resolve()
    }
    removeTarget(ee, te) {
        const re = te.withSequenceNumber(ee.currentSequenceNumber);
        return this.persistence.getTargetCache().updateTargetData(ee, re)
    }
    addReference(ee, te, re) {
        return this.fi.set(re, ee.currentSequenceNumber),
            PersistencePromise.resolve()
    }
    removeReference(ee, te, re) {
        return this.fi.set(re, ee.currentSequenceNumber),
            PersistencePromise.resolve()
    }
    updateLimboDocument(ee, te) {
        return this.fi.set(te, ee.currentSequenceNumber),
            PersistencePromise.resolve()
    }
    hi(ee) {
        let te = ee.key.toString().length;
        return ee.isFoundDocument() && (te += __PRIVATE_estimateByteSize(ee.data.value)),
            te
    }
    wr(ee, te, re) {
        return PersistencePromise.or([() => this.persistence.Ii(ee, te), () => this.persistence.getTargetCache().containsKey(ee, te), () => {
            const ie = this.fi.get(te);
            return PersistencePromise.resolve(ie !== void 0 && ie > re)
        }
        ])
    }
    getCacheSize(ee) {
        return this.persistence.getRemoteDocumentCache().getSize(ee)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_LocalViewChanges {
    constructor(ee, te, re, ie) {
        this.targetId = ee,
            this.fromCache = te,
            this.Ts = re,
            this.Es = ie
    }
    static Is(ee, te) {
        let re = __PRIVATE_documentKeySet()
            , ie = __PRIVATE_documentKeySet();
        for (const se of te.docChanges)
            switch (se.type) {
                case 0:
                    re = re.add(se.doc.key);
                    break;
                case 1:
                    ie = ie.add(se.doc.key)
            }
        return new __PRIVATE_LocalViewChanges(ee, te.fromCache, re, ie)
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class QueryContext {
    constructor() {
        this._documentReadCount = 0
    }
    get documentReadCount() {
        return this._documentReadCount
    }
    incrementDocumentReadCount(ee) {
        this._documentReadCount += ee
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_QueryEngine {
    constructor() {
        this.Rs = !1,
            this.As = !1,
            this.Vs = 100,
            this.ds = function () {
                return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4
            }()
    }
    initialize(ee, te) {
        this.fs = ee,
            this.indexManager = te,
            this.Rs = !0
    }
    getDocumentsMatchingQuery(ee, te, re, ie) {
        const se = {
            result: null
        };
        return this.gs(ee, te).next(ae => {
            se.result = ae
        }
        ).next(() => {
            if (!se.result)
                return this.ps(ee, te, ie, re).next(ae => {
                    se.result = ae
                }
                )
        }
        ).next(() => {
            if (se.result)
                return;
            const ae = new QueryContext;
            return this.ys(ee, te, ae).next(ce => {
                if (se.result = ce,
                    this.As)
                    return this.ws(ee, te, ae, ce.size)
            }
            )
        }
        ).next(() => se.result)
    }
    ws(ee, te, re, ie) {
        return re.documentReadCount < this.Vs ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(te), "since it only creates cache indexes for collection contains", "more than or equal to", this.Vs, "documents"),
            PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(te), "scans", re.documentReadCount, "local documents and returns", ie, "documents as results."),
                re.documentReadCount > this.ds * ie ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(te), "as using cache indexes may help improve performance."),
                    this.indexManager.createTargetIndexes(ee, __PRIVATE_queryToTarget(te))) : PersistencePromise.resolve())
    }
    gs(ee, te) {
        if (__PRIVATE_queryMatchesAllDocuments(te))
            return PersistencePromise.resolve(null);
        let re = __PRIVATE_queryToTarget(te);
        return this.indexManager.getIndexType(ee, re).next(ie => ie === 0 ? null : (te.limit !== null && ie === 1 && (te = __PRIVATE_queryWithLimit(te, null, "F"),
            re = __PRIVATE_queryToTarget(te)),
            this.indexManager.getDocumentsMatchingTarget(ee, re).next(se => {
                const ae = __PRIVATE_documentKeySet(...se);
                return this.fs.getDocuments(ee, ae).next(ce => this.indexManager.getMinOffset(ee, re).next(le => {
                    const he = this.Ss(te, ce);
                    return this.bs(te, he, ae, le.readTime) ? this.gs(ee, __PRIVATE_queryWithLimit(te, null, "F")) : this.Ds(ee, he, te, le)
                }
                ))
            }
            )))
    }
    ps(ee, te, re, ie) {
        return __PRIVATE_queryMatchesAllDocuments(te) || ie.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.fs.getDocuments(ee, re).next(se => {
            const ae = this.Ss(te, se);
            return this.bs(te, ae, re, ie) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", ie.toString(), __PRIVATE_stringifyQuery(te)),
                this.Ds(ee, ae, te, __PRIVATE_newIndexOffsetSuccessorFromReadTime(ie, N)).next(ce => ce))
        }
        )
    }
    Ss(ee, te) {
        let re = new SortedSet(__PRIVATE_newQueryComparator(ee));
        return te.forEach((ie, se) => {
            __PRIVATE_queryMatches(ee, se) && (re = re.add(se))
        }
        ),
            re
    }
    bs(ee, te, re, ie) {
        if (ee.limit === null)
            return !1;
        if (re.size !== te.size)
            return !0;
        const se = ee.limitType === "F" ? te.last() : te.first();
        return !!se && (se.hasPendingWrites || se.version.compareTo(ie) > 0)
    }
    ys(ee, te, re) {
        return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(te)),
            this.fs.getDocumentsMatchingQuery(ee, te, IndexOffset.min(), re)
    }
    Ds(ee, te, re, ie) {
        return this.fs.getDocumentsMatchingQuery(ee, re, ie).next(se => (te.forEach(ae => {
            se = se.insert(ae.key, ae)
        }
        ),
            se))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt = "LocalStore"
    , Bt = 3e8;
class __PRIVATE_LocalStoreImpl {
    constructor(ee, te, re, ie) {
        this.persistence = ee,
            this.Cs = te,
            this.serializer = ie,
            this.vs = new SortedMap(__PRIVATE_primitiveComparator),
            this.Fs = new ObjectMap(se => __PRIVATE_canonifyTarget(se), __PRIVATE_targetEquals),
            this.Ms = new Map,
            this.xs = ee.getRemoteDocumentCache(),
            this.li = ee.getTargetCache(),
            this.Pi = ee.getBundleCache(),
            this.Os(re)
    }
    Os(ee) {
        this.documentOverlayCache = this.persistence.getDocumentOverlayCache(ee),
            this.indexManager = this.persistence.getIndexManager(ee),
            this.mutationQueue = this.persistence.getMutationQueue(ee, this.indexManager),
            this.localDocuments = new LocalDocumentsView(this.xs, this.mutationQueue, this.documentOverlayCache, this.indexManager),
            this.xs.setIndexManager(this.indexManager),
            this.Cs.initialize(this.localDocuments, this.indexManager)
    }
    collectGarbage(ee) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", te => ee.collect(te, this.vs))
    }
}
function __PRIVATE_newLocalStore(ne, ee, te, re) {
    return new __PRIVATE_LocalStoreImpl(ne, ee, te, re)
}
async function __PRIVATE_localStoreHandleUserChange(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    return await te.persistence.runTransaction("Handle user change", "readonly", re => {
        let ie;
        return te.mutationQueue.getAllMutationBatches(re).next(se => (ie = se,
            te.Os(ee),
            te.mutationQueue.getAllMutationBatches(re))).next(se => {
                const ae = []
                    , ce = [];
                let le = __PRIVATE_documentKeySet();
                for (const he of ie) {
                    ae.push(he.batchId);
                    for (const de of he.mutations)
                        le = le.add(de.key)
                }
                for (const he of se) {
                    ce.push(he.batchId);
                    for (const de of he.mutations)
                        le = le.add(de.key)
                }
                return te.localDocuments.getDocuments(re, le).next(he => ({
                    Ns: he,
                    removedBatchIds: ae,
                    addedBatchIds: ce
                }))
            }
            )
    }
    )
}
function __PRIVATE_localStoreAcknowledgeBatch(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    return te.persistence.runTransaction("Acknowledge batch", "readwrite-primary", re => {
        const ie = ee.batch.keys()
            , se = te.xs.newChangeBuffer({
                trackRemovals: !0
            });
        return function (ce, le, he, de) {
            const fe = he.batch
                , Re = fe.keys();
            let Pe = PersistencePromise.resolve();
            return Re.forEach(we => {
                Pe = Pe.next(() => de.getEntry(le, we)).next(Se => {
                    const be = he.docVersions.get(we);
                    __PRIVATE_hardAssert(be !== null, 48541),
                        Se.version.compareTo(be) < 0 && (fe.applyToRemoteDocument(Se, he),
                            Se.isValidDocument() && (Se.setReadTime(he.commitVersion),
                                de.addEntry(Se)))
                }
                )
            }
            ),
                Pe.next(() => ce.mutationQueue.removeMutationBatch(le, fe))
        }(te, re, ee, se).next(() => se.apply(re)).next(() => te.mutationQueue.performConsistencyCheck(re)).next(() => te.documentOverlayCache.removeOverlaysForBatchId(re, ie, ee.batch.batchId)).next(() => te.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(re, function (ce) {
            let le = __PRIVATE_documentKeySet();
            for (let he = 0; he < ce.mutationResults.length; ++he)
                ce.mutationResults[he].transformResults.length > 0 && (le = le.add(ce.batch.mutations[he].key));
            return le
        }(ee))).next(() => te.localDocuments.getDocuments(re, ie))
    }
    )
}
function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(ne) {
    const ee = __PRIVATE_debugCast(ne);
    return ee.persistence.runTransaction("Get last remote snapshot version", "readonly", te => ee.li.getLastRemoteSnapshotVersion(te))
}
function __PRIVATE_localStoreApplyRemoteEventToLocalCache(ne, ee) {
    const te = __PRIVATE_debugCast(ne)
        , re = ee.snapshotVersion;
    let ie = te.vs;
    return te.persistence.runTransaction("Apply remote event", "readwrite-primary", se => {
        const ae = te.xs.newChangeBuffer({
            trackRemovals: !0
        });
        ie = te.vs;
        const ce = [];
        ee.targetChanges.forEach((de, fe) => {
            const Re = ie.get(fe);
            if (!Re)
                return;
            ce.push(te.li.removeMatchingKeys(se, de.removedDocuments, fe).next(() => te.li.addMatchingKeys(se, de.addedDocuments, fe)));
            let Pe = Re.withSequenceNumber(se.currentSequenceNumber);
            ee.targetMismatches.get(fe) !== null ? Pe = Pe.withResumeToken(ByteString.EMPTY_BYTE_STRING, SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()) : de.resumeToken.approximateByteSize() > 0 && (Pe = Pe.withResumeToken(de.resumeToken, re)),
                ie = ie.insert(fe, Pe),
                function (Se, be, De) {
                    return Se.resumeToken.approximateByteSize() === 0 || be.snapshotVersion.toMicroseconds() - Se.snapshotVersion.toMicroseconds() >= Bt ? !0 : De.addedDocuments.size + De.modifiedDocuments.size + De.removedDocuments.size > 0
                }(Re, Pe, de) && ce.push(te.li.updateTargetData(se, Pe))
        }
        );
        let le = __PRIVATE_mutableDocumentMap()
            , he = __PRIVATE_documentKeySet();
        if (ee.documentUpdates.forEach(de => {
            ee.resolvedLimboDocuments.has(de) && ce.push(te.persistence.referenceDelegate.updateLimboDocument(se, de))
        }
        ),
            ce.push(__PRIVATE_populateDocumentChangeBuffer(se, ae, ee.documentUpdates).next(de => {
                le = de.Bs,
                    he = de.Ls
            }
            )),
            !re.isEqual(SnapshotVersion.min())) {
            const de = te.li.getLastRemoteSnapshotVersion(se).next(fe => te.li.setTargetsMetadata(se, se.currentSequenceNumber, re));
            ce.push(de)
        }
        return PersistencePromise.waitFor(ce).next(() => ae.apply(se)).next(() => te.localDocuments.getLocalViewOfDocuments(se, le, he)).next(() => le)
    }
    ).then(se => (te.vs = ie,
        se))
}
function __PRIVATE_populateDocumentChangeBuffer(ne, ee, te) {
    let re = __PRIVATE_documentKeySet()
        , ie = __PRIVATE_documentKeySet();
    return te.forEach(se => re = re.add(se)),
        ee.getEntries(ne, re).next(se => {
            let ae = __PRIVATE_mutableDocumentMap();
            return te.forEach((ce, le) => {
                const he = se.get(ce);
                le.isFoundDocument() !== he.isFoundDocument() && (ie = ie.add(ce)),
                    le.isNoDocument() && le.version.isEqual(SnapshotVersion.min()) ? (ee.removeEntry(ce, le.readTime),
                        ae = ae.insert(ce, le)) : !he.isValidDocument() || le.version.compareTo(he.version) > 0 || le.version.compareTo(he.version) === 0 && he.hasPendingWrites ? (ee.addEntry(le),
                            ae = ae.insert(ce, le)) : __PRIVATE_logDebug(Nt, "Ignoring outdated watch update for ", ce, ". Current version:", he.version, " Watch version:", le.version)
            }
            ),
            {
                Bs: ae,
                Ls: ie
            }
        }
        )
}
function __PRIVATE_localStoreGetNextMutationBatch(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    return te.persistence.runTransaction("Get next mutation batch", "readonly", re => (ee === void 0 && (ee = q),
        te.mutationQueue.getNextMutationBatchAfterBatchId(re, ee)))
}
function __PRIVATE_localStoreAllocateTarget(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    return te.persistence.runTransaction("Allocate target", "readwrite", re => {
        let ie;
        return te.li.getTargetData(re, ee).next(se => se ? (ie = se,
            PersistencePromise.resolve(ie)) : te.li.allocateTargetId(re).next(ae => (ie = new TargetData(ee, ae, "TargetPurposeListen", re.currentSequenceNumber),
                te.li.addTargetData(re, ie).next(() => ie))))
    }
    ).then(re => {
        const ie = te.vs.get(re.targetId);
        return (ie === null || re.snapshotVersion.compareTo(ie.snapshotVersion) > 0) && (te.vs = te.vs.insert(re.targetId, re),
            te.Fs.set(ee, re.targetId)),
            re
    }
    )
}
async function __PRIVATE_localStoreReleaseTarget(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne)
        , ie = re.vs.get(ee)
        , se = te ? "readwrite" : "readwrite-primary";
    try {
        te || await re.persistence.runTransaction("Release target", se, ae => re.persistence.referenceDelegate.removeTarget(ae, ie))
    } catch (ae) {
        if (!__PRIVATE_isIndexedDbTransactionError(ae))
            throw ae;
        __PRIVATE_logDebug(Nt, `Failed to update sequence numbers for target ${ee}: ${ae}`)
    }
    re.vs = re.vs.remove(ee),
        re.Fs.delete(ie.target)
}
function __PRIVATE_localStoreExecuteQuery(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne);
    let ie = SnapshotVersion.min()
        , se = __PRIVATE_documentKeySet();
    return re.persistence.runTransaction("Execute query", "readwrite", ae => function (le, he, de) {
        const fe = __PRIVATE_debugCast(le)
            , Re = fe.Fs.get(de);
        return Re !== void 0 ? PersistencePromise.resolve(fe.vs.get(Re)) : fe.li.getTargetData(he, de)
    }(re, ae, __PRIVATE_queryToTarget(ee)).next(ce => {
        if (ce)
            return ie = ce.lastLimboFreeSnapshotVersion,
                re.li.getMatchingKeysForTargetId(ae, ce.targetId).next(le => {
                    se = le
                }
                )
    }
    ).next(() => re.Cs.getDocumentsMatchingQuery(ae, ee, te ? ie : SnapshotVersion.min(), te ? se : __PRIVATE_documentKeySet())).next(ce => (__PRIVATE_setMaxReadTime(re, __PRIVATE_queryCollectionGroup(ee), ce),
    {
        documents: ce,
        ks: se
    })))
}
function __PRIVATE_setMaxReadTime(ne, ee, te) {
    let re = ne.Ms.get(ee) || SnapshotVersion.min();
    te.forEach((ie, se) => {
        se.readTime.compareTo(re) > 0 && (re = se.readTime)
    }
    ),
        ne.Ms.set(ee, re)
}
class __PRIVATE_LocalClientState {
    constructor() {
        this.activeTargetIds = __PRIVATE_targetIdSet()
    }
    Qs(ee) {
        this.activeTargetIds = this.activeTargetIds.add(ee)
    }
    Gs(ee) {
        this.activeTargetIds = this.activeTargetIds.delete(ee)
    }
    Ws() {
        const ee = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(ee)
    }
}
class __PRIVATE_MemorySharedClientState {
    constructor() {
        this.vo = new __PRIVATE_LocalClientState,
            this.Fo = {},
            this.onlineStateHandler = null,
            this.sequenceNumberHandler = null
    }
    addPendingMutation(ee) { }
    updateMutationState(ee, te, re) { }
    addLocalQueryTarget(ee, te = !0) {
        return te && this.vo.Qs(ee),
            this.Fo[ee] || "not-current"
    }
    updateQueryState(ee, te, re) {
        this.Fo[ee] = te
    }
    removeLocalQueryTarget(ee) {
        this.vo.Gs(ee)
    }
    isLocalQueryTarget(ee) {
        return this.vo.activeTargetIds.has(ee)
    }
    clearQueryState(ee) {
        delete this.Fo[ee]
    }
    getAllActiveQueryTargets() {
        return this.vo.activeTargetIds
    }
    isActiveQueryTarget(ee) {
        return this.vo.activeTargetIds.has(ee)
    }
    start() {
        return this.vo = new __PRIVATE_LocalClientState,
            Promise.resolve()
    }
    handleUserChange(ee, te, re) { }
    setOnlineState(ee) { }
    shutdown() { }
    writeSequenceNumber(ee) { }
    notifyBundleLoaded(ee) { }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_NoopConnectivityMonitor {
    Mo(ee) { }
    shutdown() { }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut$1 = "ConnectivityMonitor";
class __PRIVATE_BrowserConnectivityMonitor {
    constructor() {
        this.xo = () => this.Oo(),
            this.No = () => this.Bo(),
            this.Lo = [],
            this.ko()
    }
    Mo(ee) {
        this.Lo.push(ee)
    }
    shutdown() {
        window.removeEventListener("online", this.xo),
            window.removeEventListener("offline", this.No)
    }
    ko() {
        window.addEventListener("online", this.xo),
            window.addEventListener("offline", this.No)
    }
    Oo() {
        __PRIVATE_logDebug(Ut$1, "Network connectivity changed: AVAILABLE");
        for (const ee of this.Lo)
            ee(0)
    }
    Bo() {
        __PRIVATE_logDebug(Ut$1, "Network connectivity changed: UNAVAILABLE");
        for (const ee of this.Lo)
            ee(1)
    }
    static v() {
        return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $t = null;
function __PRIVATE_generateUniqueDebugId() {
    return $t === null ? $t = function () {
        return 268435456 + Math.round(2147483648 * Math.random())
    }() : $t++,
        "0x" + $t.toString(16)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wt = "RestConnection"
    , Qt = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery",
        RunAggregationQuery: "runAggregationQuery",
        ExecutePipeline: "executePipeline"
    };
class __PRIVATE_RestConnection {
    get qo() {
        return !1
    }
    constructor(ee) {
        this.databaseInfo = ee,
            this.databaseId = ee.databaseId;
        const te = ee.ssl ? "https" : "http"
            , re = encodeURIComponent(this.databaseId.projectId)
            , ie = encodeURIComponent(this.databaseId.database);
        this.Ko = te + "://" + ee.host,
            this.Uo = `projects/${re}/databases/${ie}`,
            this.$o = this.databaseId.database === it ? `project_id=${re}` : `project_id=${re}&database_id=${ie}`
    }
    Wo(ee, te, re, ie, se) {
        const ae = __PRIVATE_generateUniqueDebugId()
            , ce = this.Qo(ee, te.toUriEncodedString());
        __PRIVATE_logDebug(Wt, `Sending RPC '${ee}' ${ae}:`, ce, re);
        const le = {
            "google-cloud-resource-prefix": this.Uo,
            "x-goog-request-params": this.$o
        };
        this.Go(le, ie, se);
        const { host: he } = new URL(ce)
            , de = isCloudWorkstation(he);
        return this.zo(ee, ce, le, re, de).then(fe => (__PRIVATE_logDebug(Wt, `Received RPC '${ee}' ${ae}: `, fe),
            fe), fe => {
                throw __PRIVATE_logWarn(Wt, `RPC '${ee}' ${ae} failed with error: `, fe, "url: ", ce, "request:", re),
                fe
            }
        )
    }
    jo(ee, te, re, ie, se, ae) {
        return this.Wo(ee, te, re, ie, se)
    }
    Go(ee, te, re) {
        ee["X-Goog-Api-Client"] = function () {
            return "gl-js/ fire/" + b
        }(),
            ee["Content-Type"] = "text/plain",
            this.databaseInfo.appId && (ee["X-Firebase-GMPID"] = this.databaseInfo.appId),
            te && te.headers.forEach((ie, se) => ee[se] = ie),
            re && re.headers.forEach((ie, se) => ee[se] = ie)
    }
    Qo(ee, te) {
        const re = Qt[ee];
        let ie = `${this.Ko}/v1/${te}:${re}`;
        return this.databaseInfo.apiKey && (ie = `${ie}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),
            ie
    }
    terminate() { }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_StreamBridge {
    constructor(ee) {
        this.Jo = ee.Jo,
            this.Ho = ee.Ho
    }
    Zo(ee) {
        this.Xo = ee
    }
    Yo(ee) {
        this.e_ = ee
    }
    t_(ee) {
        this.n_ = ee
    }
    onMessage(ee) {
        this.r_ = ee
    }
    close() {
        this.Ho()
    }
    send(ee) {
        this.Jo(ee)
    }
    i_() {
        this.Xo()
    }
    s_() {
        this.e_()
    }
    o_(ee) {
        this.n_(ee)
    }
    __(ee) {
        this.r_(ee)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt = "WebChannelConnection"
    , __PRIVATE_unguardedEventListen = (ne, ee, te) => {
        ne.listen(ee, re => {
            try {
                te(re)
            } catch (ie) {
                setTimeout(() => {
                    throw ie
                }
                    , 0)
            }
        }
        )
    }
    ;
class __PRIVATE_WebChannelConnection extends __PRIVATE_RestConnection {
    constructor(ee) {
        super(ee),
            this.a_ = [],
            this.forceLongPolling = ee.forceLongPolling,
            this.autoDetectLongPolling = ee.autoDetectLongPolling,
            this.useFetchStreams = ee.useFetchStreams,
            this.longPollingOptions = ee.longPollingOptions
    }
    static u_() {
        if (!__PRIVATE_WebChannelConnection.c_) {
            const ee = getStatEventTarget();
            __PRIVATE_unguardedEventListen(ee, Event.STAT_EVENT, te => {
                te.stat === Stat.PROXY ? __PRIVATE_logDebug(Gt, "STAT_EVENT: detected buffering proxy") : te.stat === Stat.NOPROXY && __PRIVATE_logDebug(Gt, "STAT_EVENT: detected no buffering proxy")
            }
            ),
                __PRIVATE_WebChannelConnection.c_ = !0
        }
    }
    zo(ee, te, re, ie, se) {
        const ae = __PRIVATE_generateUniqueDebugId();
        return new Promise((ce, le) => {
            const he = new XhrIo;
            he.setWithCredentials(!0),
                he.listenOnce(EventType.COMPLETE, () => {
                    try {
                        switch (he.getLastErrorCode()) {
                            case ErrorCode$1.NO_ERROR:
                                const fe = he.getResponseJson();
                                __PRIVATE_logDebug(Gt, `XHR for RPC '${ee}' ${ae} received:`, JSON.stringify(fe)),
                                    ce(fe);
                                break;
                            case ErrorCode$1.TIMEOUT:
                                __PRIVATE_logDebug(Gt, `RPC '${ee}' ${ae} timed out`),
                                    le(new FirestoreError(D.DEADLINE_EXCEEDED, "Request time out"));
                                break;
                            case ErrorCode$1.HTTP_ERROR:
                                const Re = he.getStatus();
                                if (__PRIVATE_logDebug(Gt, `RPC '${ee}' ${ae} failed with status:`, Re, "response text:", he.getResponseText()),
                                    Re > 0) {
                                    let Pe = he.getResponseJson();
                                    Array.isArray(Pe) && (Pe = Pe[0]);
                                    const we = Pe?.error;
                                    if (we && we.status && we.message) {
                                        const Se = function (De) {
                                            const ke = De.toLowerCase().replace(/_/g, "-");
                                            return Object.values(D).indexOf(ke) >= 0 ? ke : D.UNKNOWN
                                        }(we.status);
                                        le(new FirestoreError(Se, we.message))
                                    } else
                                        le(new FirestoreError(D.UNKNOWN, "Server responded with status " + he.getStatus()))
                                } else
                                    le(new FirestoreError(D.UNAVAILABLE, "Connection failed."));
                                break;
                            default:
                                fail(9055, {
                                    l_: ee,
                                    streamId: ae,
                                    h_: he.getLastErrorCode(),
                                    P_: he.getLastError()
                                })
                        }
                    } finally {
                        __PRIVATE_logDebug(Gt, `RPC '${ee}' ${ae} completed.`)
                    }
                }
                );
            const de = JSON.stringify(ie);
            __PRIVATE_logDebug(Gt, `RPC '${ee}' ${ae} sending request:`, ie),
                he.send(te, "POST", de, re, 15)
        }
        )
    }
    T_(ee, te, re) {
        const ie = __PRIVATE_generateUniqueDebugId()
            , se = [this.Ko, "/", "google.firestore.v1.Firestore", "/", ee, "/channel"]
            , ae = this.createWebChannelTransport()
            , ce = {
                httpSessionIdParam: "gsessionid",
                initMessageHeaders: {},
                messageUrlParams: {
                    database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: {
                    forwardChannelRequestTimeoutMs: 6e5
                },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.autoDetectLongPolling
            }
            , le = this.longPollingOptions.timeoutSeconds;
        le !== void 0 && (ce.longPollingTimeout = Math.round(1e3 * le)),
            this.useFetchStreams && (ce.useFetchStreams = !0),
            this.Go(ce.initMessageHeaders, te, re),
            ce.encodeInitMessageHeaders = !0;
        const he = se.join("");
        __PRIVATE_logDebug(Gt, `Creating RPC '${ee}' stream ${ie}: ${he}`, ce);
        const de = ae.createWebChannel(he, ce);
        this.E_(de);
        let fe = !1
            , Re = !1;
        const Pe = new __PRIVATE_StreamBridge({
            Jo: we => {
                Re ? __PRIVATE_logDebug(Gt, `Not sending because RPC '${ee}' stream ${ie} is closed:`, we) : (fe || (__PRIVATE_logDebug(Gt, `Opening RPC '${ee}' stream ${ie} transport.`),
                    de.open(),
                    fe = !0),
                    __PRIVATE_logDebug(Gt, `RPC '${ee}' stream ${ie} sending:`, we),
                    de.send(we))
            }
            ,
            Ho: () => de.close()
        });
        return __PRIVATE_unguardedEventListen(de, WebChannel.EventType.OPEN, () => {
            Re || (__PRIVATE_logDebug(Gt, `RPC '${ee}' stream ${ie} transport opened.`),
                Pe.i_())
        }
        ),
            __PRIVATE_unguardedEventListen(de, WebChannel.EventType.CLOSE, () => {
                Re || (Re = !0,
                    __PRIVATE_logDebug(Gt, `RPC '${ee}' stream ${ie} transport closed`),
                    Pe.o_(),
                    this.I_(de))
            }
            ),
            __PRIVATE_unguardedEventListen(de, WebChannel.EventType.ERROR, we => {
                Re || (Re = !0,
                    __PRIVATE_logWarn(Gt, `RPC '${ee}' stream ${ie} transport errored. Name:`, we.name, "Message:", we.message),
                    Pe.o_(new FirestoreError(D.UNAVAILABLE, "The operation could not be completed")))
            }
            ),
            __PRIVATE_unguardedEventListen(de, WebChannel.EventType.MESSAGE, we => {
                if (!Re) {
                    const Se = we.data[0];
                    __PRIVATE_hardAssert(!!Se, 16349);
                    const be = Se
                        , De = be?.error || be[0]?.error;
                    if (De) {
                        __PRIVATE_logDebug(Gt, `RPC '${ee}' stream ${ie} received error:`, De);
                        const ke = De.status;
                        let Me = function (Oe) {
                            const Ie = Rt[Oe];
                            if (Ie !== void 0)
                                return __PRIVATE_mapCodeFromRpcCode(Ie)
                        }(ke)
                            , Ne = De.message;
                        ke === "NOT_FOUND" && Ne.includes("database") && Ne.includes("does not exist") && Ne.includes(this.databaseId.database) && __PRIVATE_logWarn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),
                            Me === void 0 && (Me = D.INTERNAL,
                                Ne = "Unknown error status: " + ke + " with message " + De.message),
                            Re = !0,
                            Pe.o_(new FirestoreError(Me, Ne)),
                            de.close()
                    } else
                        __PRIVATE_logDebug(Gt, `RPC '${ee}' stream ${ie} received:`, Se),
                            Pe.__(Se)
                }
            }
            ),
            __PRIVATE_WebChannelConnection.u_(),
            setTimeout(() => {
                Pe.s_()
            }
                , 0),
            Pe
    }
    terminate() {
        this.a_.forEach(ee => ee.close()),
            this.a_ = []
    }
    E_(ee) {
        this.a_.push(ee)
    }
    I_(ee) {
        this.a_ = this.a_.filter(te => te === ee)
    }
    Go(ee, te, re) {
        super.Go(ee, te, re),
            this.databaseInfo.apiKey && (ee["x-goog-api-key"] = this.databaseInfo.apiKey)
    }
    createWebChannelTransport() {
        return createWebChannelTransport()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_newConnection(ne) {
    return new __PRIVATE_WebChannelConnection(ne)
}
function getDocument() {
    return typeof document < "u" ? document : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_newSerializer(ne) {
    return new JsonProtoSerializer(ne, !0)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
__PRIVATE_WebChannelConnection.c_ = !1;
class __PRIVATE_ExponentialBackoff {
    constructor(ee, te, re = 1e3, ie = 1.5, se = 6e4) {
        this.Ci = ee,
            this.timerId = te,
            this.R_ = re,
            this.A_ = ie,
            this.V_ = se,
            this.d_ = 0,
            this.m_ = null,
            this.f_ = Date.now(),
            this.reset()
    }
    reset() {
        this.d_ = 0
    }
    g_() {
        this.d_ = this.V_
    }
    p_(ee) {
        this.cancel();
        const te = Math.floor(this.d_ + this.y_())
            , re = Math.max(0, Date.now() - this.f_)
            , ie = Math.max(0, te - re);
        ie > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${ie} ms (base delay: ${this.d_} ms, delay with jitter: ${te} ms, last attempt: ${re} ms ago)`),
            this.m_ = this.Ci.enqueueAfterDelay(this.timerId, ie, () => (this.f_ = Date.now(),
                ee())),
            this.d_ *= this.A_,
            this.d_ < this.R_ && (this.d_ = this.R_),
            this.d_ > this.V_ && (this.d_ = this.V_)
    }
    w_() {
        this.m_ !== null && (this.m_.skipDelay(),
            this.m_ = null)
    }
    cancel() {
        this.m_ !== null && (this.m_.cancel(),
            this.m_ = null)
    }
    y_() {
        return (Math.random() - .5) * this.d_
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zt = "PersistentStream";
class __PRIVATE_PersistentStream {
    constructor(ee, te, re, ie, se, ae, ce, le) {
        this.Ci = ee,
            this.S_ = re,
            this.b_ = ie,
            this.connection = se,
            this.authCredentialsProvider = ae,
            this.appCheckCredentialsProvider = ce,
            this.listener = le,
            this.state = 0,
            this.D_ = 0,
            this.C_ = null,
            this.v_ = null,
            this.stream = null,
            this.F_ = 0,
            this.M_ = new __PRIVATE_ExponentialBackoff(ee, te)
    }
    x_() {
        return this.state === 1 || this.state === 5 || this.O_()
    }
    O_() {
        return this.state === 2 || this.state === 3
    }
    start() {
        this.F_ = 0,
            this.state !== 4 ? this.auth() : this.N_()
    }
    async stop() {
        this.x_() && await this.close(0)
    }
    B_() {
        this.state = 0,
            this.M_.reset()
    }
    L_() {
        this.O_() && this.C_ === null && (this.C_ = this.Ci.enqueueAfterDelay(this.S_, 6e4, () => this.k_()))
    }
    q_(ee) {
        this.K_(),
            this.stream.send(ee)
    }
    async k_() {
        if (this.O_())
            return this.close(0)
    }
    K_() {
        this.C_ && (this.C_.cancel(),
            this.C_ = null)
    }
    U_() {
        this.v_ && (this.v_.cancel(),
            this.v_ = null)
    }
    async close(ee, te) {
        this.K_(),
            this.U_(),
            this.M_.cancel(),
            this.D_++,
            ee !== 4 ? this.M_.reset() : te && te.code === D.RESOURCE_EXHAUSTED ? (__PRIVATE_logError(te.toString()),
                __PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."),
                this.M_.g_()) : te && te.code === D.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(),
                    this.appCheckCredentialsProvider.invalidateToken()),
            this.stream !== null && (this.W_(),
                this.stream.close(),
                this.stream = null),
            this.state = ee,
            await this.listener.t_(te)
    }
    W_() { }
    auth() {
        this.state = 1;
        const ee = this.Q_(this.D_)
            , te = this.D_;
        Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([re, ie]) => {
            this.D_ === te && this.G_(re, ie)
        }
            , re => {
                ee(() => {
                    const ie = new FirestoreError(D.UNKNOWN, "Fetching auth token failed: " + re.message);
                    return this.z_(ie)
                }
                )
            }
        )
    }
    G_(ee, te) {
        const re = this.Q_(this.D_);
        this.stream = this.j_(ee, te),
            this.stream.Zo(() => {
                re(() => this.listener.Zo())
            }
            ),
            this.stream.Yo(() => {
                re(() => (this.state = 2,
                    this.v_ = this.Ci.enqueueAfterDelay(this.b_, 1e4, () => (this.O_() && (this.state = 3),
                        Promise.resolve())),
                    this.listener.Yo()))
            }
            ),
            this.stream.t_(ie => {
                re(() => this.z_(ie))
            }
            ),
            this.stream.onMessage(ie => {
                re(() => ++this.F_ == 1 ? this.J_(ie) : this.onNext(ie))
            }
            )
    }
    N_() {
        this.state = 5,
            this.M_.p_(async () => {
                this.state = 0,
                    this.start()
            }
            )
    }
    z_(ee) {
        return __PRIVATE_logDebug(zt, `close with error: ${ee}`),
            this.stream = null,
            this.close(4, ee)
    }
    Q_(ee) {
        return te => {
            this.Ci.enqueueAndForget(() => this.D_ === ee ? te() : (__PRIVATE_logDebug(zt, "stream callback skipped by getCloseGuardedDispatcher."),
                Promise.resolve()))
        }
    }
}
class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream {
    constructor(ee, te, re, ie, se, ae) {
        super(ee, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", te, re, ie, ae),
            this.serializer = se
    }
    j_(ee, te) {
        return this.connection.T_("Listen", ee, te)
    }
    J_(ee) {
        return this.onNext(ee)
    }
    onNext(ee) {
        this.M_.reset();
        const te = __PRIVATE_fromWatchChange(this.serializer, ee)
            , re = function (se) {
                if (!("targetChange" in se))
                    return SnapshotVersion.min();
                const ae = se.targetChange;
                return ae.targetIds && ae.targetIds.length ? SnapshotVersion.min() : ae.readTime ? __PRIVATE_fromVersion(ae.readTime) : SnapshotVersion.min()
            }(ee);
        return this.listener.H_(te, re)
    }
    Z_(ee) {
        const te = {};
        te.database = __PRIVATE_getEncodedDatabaseId(this.serializer),
            te.addTarget = function (se, ae) {
                let ce;
                const le = ae.target;
                if (ce = __PRIVATE_targetIsDocumentTarget(le) ? {
                    documents: __PRIVATE_toDocumentsTarget(se, le)
                } : {
                    query: __PRIVATE_toQueryTarget(se, le).ft
                },
                    ce.targetId = ae.targetId,
                    ae.resumeToken.approximateByteSize() > 0) {
                    ce.resumeToken = __PRIVATE_toBytes(se, ae.resumeToken);
                    const he = __PRIVATE_toInt32Proto(se, ae.expectedCount);
                    he !== null && (ce.expectedCount = he)
                } else if (ae.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
                    ce.readTime = toTimestamp(se, ae.snapshotVersion.toTimestamp());
                    const he = __PRIVATE_toInt32Proto(se, ae.expectedCount);
                    he !== null && (ce.expectedCount = he)
                }
                return ce
            }(this.serializer, ee);
        const re = __PRIVATE_toListenRequestLabels(this.serializer, ee);
        re && (te.labels = re),
            this.q_(te)
    }
    X_(ee) {
        const te = {};
        te.database = __PRIVATE_getEncodedDatabaseId(this.serializer),
            te.removeTarget = ee,
            this.q_(te)
    }
}
class __PRIVATE_PersistentWriteStream extends __PRIVATE_PersistentStream {
    constructor(ee, te, re, ie, se, ae) {
        super(ee, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", te, re, ie, ae),
            this.serializer = se
    }
    get Y_() {
        return this.F_ > 0
    }
    start() {
        this.lastStreamToken = void 0,
            super.start()
    }
    W_() {
        this.Y_ && this.ea([])
    }
    j_(ee, te) {
        return this.connection.T_("Write", ee, te)
    }
    J_(ee) {
        return __PRIVATE_hardAssert(!!ee.streamToken, 31322),
            this.lastStreamToken = ee.streamToken,
            __PRIVATE_hardAssert(!ee.writeResults || ee.writeResults.length === 0, 55816),
            this.listener.ta()
    }
    onNext(ee) {
        __PRIVATE_hardAssert(!!ee.streamToken, 12678),
            this.lastStreamToken = ee.streamToken,
            this.M_.reset();
        const te = __PRIVATE_fromWriteResults(ee.writeResults, ee.commitTime)
            , re = __PRIVATE_fromVersion(ee.commitTime);
        return this.listener.na(re, te)
    }
    ra() {
        const ee = {};
        ee.database = __PRIVATE_getEncodedDatabaseId(this.serializer),
            this.q_(ee)
    }
    ea(ee) {
        const te = {
            streamToken: this.lastStreamToken,
            writes: ee.map(re => toMutation(this.serializer, re))
        };
        this.q_(te)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Datastore {
}
class __PRIVATE_DatastoreImpl extends Datastore {
    constructor(ee, te, re, ie) {
        super(),
            this.authCredentials = ee,
            this.appCheckCredentials = te,
            this.connection = re,
            this.serializer = ie,
            this.ia = !1
    }
    sa() {
        if (this.ia)
            throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.")
    }
    Wo(ee, te, re, ie) {
        return this.sa(),
            Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([se, ae]) => this.connection.Wo(ee, __PRIVATE_toResourcePath(te, re), ie, se, ae)).catch(se => {
                throw se.name === "FirebaseError" ? (se.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(),
                    this.appCheckCredentials.invalidateToken()),
                    se) : new FirestoreError(D.UNKNOWN, se.toString())
            }
            )
    }
    jo(ee, te, re, ie, se) {
        return this.sa(),
            Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([ae, ce]) => this.connection.jo(ee, __PRIVATE_toResourcePath(te, re), ie, ae, ce, se)).catch(ae => {
                throw ae.name === "FirebaseError" ? (ae.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(),
                    this.appCheckCredentials.invalidateToken()),
                    ae) : new FirestoreError(D.UNKNOWN, ae.toString())
            }
            )
    }
    terminate() {
        this.ia = !0,
            this.connection.terminate()
    }
}
function __PRIVATE_newDatastore(ne, ee, te, re) {
    return new __PRIVATE_DatastoreImpl(ne, ee, te, re)
}
class __PRIVATE_OnlineStateTracker {
    constructor(ee, te) {
        this.asyncQueue = ee,
            this.onlineStateHandler = te,
            this.state = "Unknown",
            this.oa = 0,
            this._a = null,
            this.aa = !0
    }
    ua() {
        this.oa === 0 && (this.ca("Unknown"),
            this._a = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this._a = null,
                this.la("Backend didn't respond within 10 seconds."),
                this.ca("Offline"),
                Promise.resolve())))
    }
    ha(ee) {
        this.state === "Online" ? this.ca("Unknown") : (this.oa++,
            this.oa >= 1 && (this.Pa(),
                this.la(`Connection failed 1 times. Most recent error: ${ee.toString()}`),
                this.ca("Offline")))
    }
    set(ee) {
        this.Pa(),
            this.oa = 0,
            ee === "Online" && (this.aa = !1),
            this.ca(ee)
    }
    ca(ee) {
        ee !== this.state && (this.state = ee,
            this.onlineStateHandler(ee))
    }
    la(ee) {
        const te = `Could not reach Cloud Firestore backend. ${ee}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.aa ? (__PRIVATE_logError(te),
            this.aa = !1) : __PRIVATE_logDebug("OnlineStateTracker", te)
    }
    Pa() {
        this._a !== null && (this._a.cancel(),
            this._a = null)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jt = "RemoteStore";
class __PRIVATE_RemoteStoreImpl {
    constructor(ee, te, re, ie, se) {
        this.localStore = ee,
            this.datastore = te,
            this.asyncQueue = re,
            this.remoteSyncer = {},
            this.Ta = [],
            this.Ea = new Map,
            this.Ia = new Set,
            this.Ra = [],
            this.Aa = se,
            this.Aa.Mo(ae => {
                re.enqueueAndForget(async () => {
                    __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug(jt, "Restarting streams for network reachability change."),
                        await async function (le) {
                            const he = __PRIVATE_debugCast(le);
                            he.Ia.add(4),
                                await __PRIVATE_disableNetworkInternal(he),
                                he.Va.set("Unknown"),
                                he.Ia.delete(4),
                                await __PRIVATE_enableNetworkInternal(he)
                        }(this))
                }
                )
            }
            ),
            this.Va = new __PRIVATE_OnlineStateTracker(re, ie)
    }
}
async function __PRIVATE_enableNetworkInternal(ne) {
    if (__PRIVATE_canUseNetwork(ne))
        for (const ee of ne.Ra)
            await ee(!0)
}
async function __PRIVATE_disableNetworkInternal(ne) {
    for (const ee of ne.Ra)
        await ee(!1)
}
function __PRIVATE_remoteStoreListen(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    te.Ea.has(ee.targetId) || (te.Ea.set(ee.targetId, ee),
        __PRIVATE_shouldStartWatchStream(te) ? __PRIVATE_startWatchStream(te) : __PRIVATE_ensureWatchStream(te).O_() && __PRIVATE_sendWatchRequest(te, ee))
}
function __PRIVATE_remoteStoreUnlisten(ne, ee) {
    const te = __PRIVATE_debugCast(ne)
        , re = __PRIVATE_ensureWatchStream(te);
    te.Ea.delete(ee),
        re.O_() && __PRIVATE_sendUnwatchRequest(te, ee),
        te.Ea.size === 0 && (re.O_() ? re.L_() : __PRIVATE_canUseNetwork(te) && te.Va.set("Unknown"))
}
function __PRIVATE_sendWatchRequest(ne, ee) {
    if (ne.da.$e(ee.targetId),
        ee.resumeToken.approximateByteSize() > 0 || ee.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
        const te = ne.remoteSyncer.getRemoteKeysForTarget(ee.targetId).size;
        ee = ee.withExpectedCount(te)
    }
    __PRIVATE_ensureWatchStream(ne).Z_(ee)
}
function __PRIVATE_sendUnwatchRequest(ne, ee) {
    ne.da.$e(ee),
        __PRIVATE_ensureWatchStream(ne).X_(ee)
}
function __PRIVATE_startWatchStream(ne) {
    ne.da = new __PRIVATE_WatchChangeAggregator({
        getRemoteKeysForTarget: ee => ne.remoteSyncer.getRemoteKeysForTarget(ee),
        At: ee => ne.Ea.get(ee) || null,
        ht: () => ne.datastore.serializer.databaseId
    }),
        __PRIVATE_ensureWatchStream(ne).start(),
        ne.Va.ua()
}
function __PRIVATE_shouldStartWatchStream(ne) {
    return __PRIVATE_canUseNetwork(ne) && !__PRIVATE_ensureWatchStream(ne).x_() && ne.Ea.size > 0
}
function __PRIVATE_canUseNetwork(ne) {
    return __PRIVATE_debugCast(ne).Ia.size === 0
}
function __PRIVATE_cleanUpWatchStreamState(ne) {
    ne.da = void 0
}
async function __PRIVATE_onWatchStreamConnected(ne) {
    ne.Va.set("Online")
}
async function __PRIVATE_onWatchStreamOpen(ne) {
    ne.Ea.forEach((ee, te) => {
        __PRIVATE_sendWatchRequest(ne, ee)
    }
    )
}
async function __PRIVATE_onWatchStreamClose(ne, ee) {
    __PRIVATE_cleanUpWatchStreamState(ne),
        __PRIVATE_shouldStartWatchStream(ne) ? (ne.Va.ha(ee),
            __PRIVATE_startWatchStream(ne)) : ne.Va.set("Unknown")
}
async function __PRIVATE_onWatchStreamChange(ne, ee, te) {
    if (ne.Va.set("Online"),
        ee instanceof __PRIVATE_WatchTargetChange && ee.state === 2 && ee.cause)
        try {
            await async function (ie, se) {
                const ae = se.cause;
                for (const ce of se.targetIds)
                    ie.Ea.has(ce) && (await ie.remoteSyncer.rejectListen(ce, ae),
                        ie.Ea.delete(ce),
                        ie.da.removeTarget(ce))
            }(ne, ee)
        } catch (re) {
            __PRIVATE_logDebug(jt, "Failed to remove targets %s: %s ", ee.targetIds.join(","), re),
                await __PRIVATE_disableNetworkUntilRecovery(ne, re)
        }
    else if (ee instanceof __PRIVATE_DocumentWatchChange ? ne.da.Xe(ee) : ee instanceof __PRIVATE_ExistenceFilterChange ? ne.da.st(ee) : ne.da.tt(ee),
        !te.isEqual(SnapshotVersion.min()))
        try {
            const re = await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(ne.localStore);
            te.compareTo(re) >= 0 && await function (se, ae) {
                const ce = se.da.Tt(ae);
                return ce.targetChanges.forEach((le, he) => {
                    if (le.resumeToken.approximateByteSize() > 0) {
                        const de = se.Ea.get(he);
                        de && se.Ea.set(he, de.withResumeToken(le.resumeToken, ae))
                    }
                }
                ),
                    ce.targetMismatches.forEach((le, he) => {
                        const de = se.Ea.get(le);
                        if (!de)
                            return;
                        se.Ea.set(le, de.withResumeToken(ByteString.EMPTY_BYTE_STRING, de.snapshotVersion)),
                            __PRIVATE_sendUnwatchRequest(se, le);
                        const fe = new TargetData(de.target, le, he, de.sequenceNumber);
                        __PRIVATE_sendWatchRequest(se, fe)
                    }
                    ),
                    se.remoteSyncer.applyRemoteEvent(ce)
            }(ne, te)
        } catch (re) {
            __PRIVATE_logDebug(jt, "Failed to raise snapshot:", re),
                await __PRIVATE_disableNetworkUntilRecovery(ne, re)
        }
}
async function __PRIVATE_disableNetworkUntilRecovery(ne, ee, te) {
    if (!__PRIVATE_isIndexedDbTransactionError(ee))
        throw ee;
    ne.Ia.add(1),
        await __PRIVATE_disableNetworkInternal(ne),
        ne.Va.set("Offline"),
        te || (te = () => __PRIVATE_localStoreGetLastRemoteSnapshotVersion(ne.localStore)),
        ne.asyncQueue.enqueueRetryable(async () => {
            __PRIVATE_logDebug(jt, "Retrying IndexedDB access"),
                await te(),
                ne.Ia.delete(1),
                await __PRIVATE_enableNetworkInternal(ne)
        }
        )
}
function __PRIVATE_executeWithRecovery(ne, ee) {
    return ee().catch(te => __PRIVATE_disableNetworkUntilRecovery(ne, te, ee))
}
async function __PRIVATE_fillWritePipeline(ne) {
    const ee = __PRIVATE_debugCast(ne)
        , te = __PRIVATE_ensureWriteStream(ee);
    let re = ee.Ta.length > 0 ? ee.Ta[ee.Ta.length - 1].batchId : q;
    for (; __PRIVATE_canAddToWritePipeline(ee);)
        try {
            const ie = await __PRIVATE_localStoreGetNextMutationBatch(ee.localStore, re);
            if (ie === null) {
                ee.Ta.length === 0 && te.L_();
                break
            }
            re = ie.batchId,
                __PRIVATE_addToWritePipeline(ee, ie)
        } catch (ie) {
            await __PRIVATE_disableNetworkUntilRecovery(ee, ie)
        }
    __PRIVATE_shouldStartWriteStream(ee) && __PRIVATE_startWriteStream(ee)
}
function __PRIVATE_canAddToWritePipeline(ne) {
    return __PRIVATE_canUseNetwork(ne) && ne.Ta.length < 10
}
function __PRIVATE_addToWritePipeline(ne, ee) {
    ne.Ta.push(ee);
    const te = __PRIVATE_ensureWriteStream(ne);
    te.O_() && te.Y_ && te.ea(ee.mutations)
}
function __PRIVATE_shouldStartWriteStream(ne) {
    return __PRIVATE_canUseNetwork(ne) && !__PRIVATE_ensureWriteStream(ne).x_() && ne.Ta.length > 0
}
function __PRIVATE_startWriteStream(ne) {
    __PRIVATE_ensureWriteStream(ne).start()
}
async function __PRIVATE_onWriteStreamOpen(ne) {
    __PRIVATE_ensureWriteStream(ne).ra()
}
async function __PRIVATE_onWriteHandshakeComplete(ne) {
    const ee = __PRIVATE_ensureWriteStream(ne);
    for (const te of ne.Ta)
        ee.ea(te.mutations)
}
async function __PRIVATE_onMutationResult(ne, ee, te) {
    const re = ne.Ta.shift()
        , ie = MutationBatchResult.from(re, ee, te);
    await __PRIVATE_executeWithRecovery(ne, () => ne.remoteSyncer.applySuccessfulWrite(ie)),
        await __PRIVATE_fillWritePipeline(ne)
}
async function __PRIVATE_onWriteStreamClose(ne, ee) {
    ee && __PRIVATE_ensureWriteStream(ne).Y_ && await async function (re, ie) {
        if (function (ae) {
            return __PRIVATE_isPermanentError(ae) && ae !== D.ABORTED
        }(ie.code)) {
            const se = re.Ta.shift();
            __PRIVATE_ensureWriteStream(re).B_(),
                await __PRIVATE_executeWithRecovery(re, () => re.remoteSyncer.rejectFailedWrite(se.batchId, ie)),
                await __PRIVATE_fillWritePipeline(re)
        }
    }(ne, ee),
        __PRIVATE_shouldStartWriteStream(ne) && __PRIVATE_startWriteStream(ne)
}
async function __PRIVATE_remoteStoreHandleCredentialChange(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    te.asyncQueue.verifyOperationInProgress(),
        __PRIVATE_logDebug(jt, "RemoteStore received new credentials");
    const re = __PRIVATE_canUseNetwork(te);
    te.Ia.add(3),
        await __PRIVATE_disableNetworkInternal(te),
        re && te.Va.set("Unknown"),
        await te.remoteSyncer.handleCredentialChange(ee),
        te.Ia.delete(3),
        await __PRIVATE_enableNetworkInternal(te)
}
async function __PRIVATE_remoteStoreApplyPrimaryState(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    ee ? (te.Ia.delete(2),
        await __PRIVATE_enableNetworkInternal(te)) : ee || (te.Ia.add(2),
            await __PRIVATE_disableNetworkInternal(te),
            te.Va.set("Unknown"))
}
function __PRIVATE_ensureWatchStream(ne) {
    return ne.ma || (ne.ma = function (te, re, ie) {
        const se = __PRIVATE_debugCast(te);
        return se.sa(),
            new __PRIVATE_PersistentListenStream(re, se.connection, se.authCredentials, se.appCheckCredentials, se.serializer, ie)
    }(ne.datastore, ne.asyncQueue, {
        Zo: __PRIVATE_onWatchStreamConnected.bind(null, ne),
        Yo: __PRIVATE_onWatchStreamOpen.bind(null, ne),
        t_: __PRIVATE_onWatchStreamClose.bind(null, ne),
        H_: __PRIVATE_onWatchStreamChange.bind(null, ne)
    }),
        ne.Ra.push(async ee => {
            ee ? (ne.ma.B_(),
                __PRIVATE_shouldStartWatchStream(ne) ? __PRIVATE_startWatchStream(ne) : ne.Va.set("Unknown")) : (await ne.ma.stop(),
                    __PRIVATE_cleanUpWatchStreamState(ne))
        }
        )),
        ne.ma
}
function __PRIVATE_ensureWriteStream(ne) {
    return ne.fa || (ne.fa = function (te, re, ie) {
        const se = __PRIVATE_debugCast(te);
        return se.sa(),
            new __PRIVATE_PersistentWriteStream(re, se.connection, se.authCredentials, se.appCheckCredentials, se.serializer, ie)
    }(ne.datastore, ne.asyncQueue, {
        Zo: () => Promise.resolve(),
        Yo: __PRIVATE_onWriteStreamOpen.bind(null, ne),
        t_: __PRIVATE_onWriteStreamClose.bind(null, ne),
        ta: __PRIVATE_onWriteHandshakeComplete.bind(null, ne),
        na: __PRIVATE_onMutationResult.bind(null, ne)
    }),
        ne.Ra.push(async ee => {
            ee ? (ne.fa.B_(),
                await __PRIVATE_fillWritePipeline(ne)) : (await ne.fa.stop(),
                    ne.Ta.length > 0 && (__PRIVATE_logDebug(jt, `Stopping write stream with ${ne.Ta.length} pending writes`),
                        ne.Ta = []))
        }
        )),
        ne.fa
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DelayedOperation {
    constructor(ee, te, re, ie, se) {
        this.asyncQueue = ee,
            this.timerId = te,
            this.targetTimeMs = re,
            this.op = ie,
            this.removalCallback = se,
            this.deferred = new __PRIVATE_Deferred,
            this.then = this.deferred.promise.then.bind(this.deferred.promise),
            this.deferred.promise.catch(ae => { }
            )
    }
    get promise() {
        return this.deferred.promise
    }
    static createAndSchedule(ee, te, re, ie, se) {
        const ae = Date.now() + re
            , ce = new DelayedOperation(ee, te, ae, ie, se);
        return ce.start(re),
            ce
    }
    start(ee) {
        this.timerHandle = setTimeout(() => this.handleDelayElapsed(), ee)
    }
    skipDelay() {
        return this.handleDelayElapsed()
    }
    cancel(ee) {
        this.timerHandle !== null && (this.clearTimeout(),
            this.deferred.reject(new FirestoreError(D.CANCELLED, "Operation cancelled" + (ee ? ": " + ee : ""))))
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(),
            this.op().then(ee => this.deferred.resolve(ee))) : Promise.resolve())
    }
    clearTimeout() {
        this.timerHandle !== null && (this.removalCallback(this),
            clearTimeout(this.timerHandle),
            this.timerHandle = null)
    }
}
function __PRIVATE_wrapInUserErrorIfRecoverable(ne, ee) {
    if (__PRIVATE_logError("AsyncQueue", `${ee}: ${ne}`),
        __PRIVATE_isIndexedDbTransactionError(ne))
        return new FirestoreError(D.UNAVAILABLE, `${ee}: ${ne}`);
    throw ne
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DocumentSet {
    static emptySet(ee) {
        return new DocumentSet(ee.comparator)
    }
    constructor(ee) {
        this.comparator = ee ? (te, re) => ee(te, re) || DocumentKey.comparator(te.key, re.key) : (te, re) => DocumentKey.comparator(te.key, re.key),
            this.keyedMap = documentMap(),
            this.sortedSet = new SortedMap(this.comparator)
    }
    has(ee) {
        return this.keyedMap.get(ee) != null
    }
    get(ee) {
        return this.keyedMap.get(ee)
    }
    first() {
        return this.sortedSet.minKey()
    }
    last() {
        return this.sortedSet.maxKey()
    }
    isEmpty() {
        return this.sortedSet.isEmpty()
    }
    indexOf(ee) {
        const te = this.keyedMap.get(ee);
        return te ? this.sortedSet.indexOf(te) : -1
    }
    get size() {
        return this.sortedSet.size
    }
    forEach(ee) {
        this.sortedSet.inorderTraversal((te, re) => (ee(te),
            !1))
    }
    add(ee) {
        const te = this.delete(ee.key);
        return te.copy(te.keyedMap.insert(ee.key, ee), te.sortedSet.insert(ee, null))
    }
    delete(ee) {
        const te = this.get(ee);
        return te ? this.copy(this.keyedMap.remove(ee), this.sortedSet.remove(te)) : this
    }
    isEqual(ee) {
        if (!(ee instanceof DocumentSet) || this.size !== ee.size)
            return !1;
        const te = this.sortedSet.getIterator()
            , re = ee.sortedSet.getIterator();
        for (; te.hasNext();) {
            const ie = te.getNext().key
                , se = re.getNext().key;
            if (!ie.isEqual(se))
                return !1
        }
        return !0
    }
    toString() {
        const ee = [];
        return this.forEach(te => {
            ee.push(te.toString())
        }
        ),
            ee.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + ee.join(`  
`) + `
)`
    }
    copy(ee, te) {
        const re = new DocumentSet;
        return re.comparator = this.comparator,
            re.keyedMap = ee,
            re.sortedSet = te,
            re
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_DocumentChangeSet {
    constructor() {
        this.ga = new SortedMap(DocumentKey.comparator)
    }
    track(ee) {
        const te = ee.doc.key
            , re = this.ga.get(te);
        re ? ee.type !== 0 && re.type === 3 ? this.ga = this.ga.insert(te, ee) : ee.type === 3 && re.type !== 1 ? this.ga = this.ga.insert(te, {
            type: re.type,
            doc: ee.doc
        }) : ee.type === 2 && re.type === 2 ? this.ga = this.ga.insert(te, {
            type: 2,
            doc: ee.doc
        }) : ee.type === 2 && re.type === 0 ? this.ga = this.ga.insert(te, {
            type: 0,
            doc: ee.doc
        }) : ee.type === 1 && re.type === 0 ? this.ga = this.ga.remove(te) : ee.type === 1 && re.type === 2 ? this.ga = this.ga.insert(te, {
            type: 1,
            doc: re.doc
        }) : ee.type === 0 && re.type === 1 ? this.ga = this.ga.insert(te, {
            type: 2,
            doc: ee.doc
        }) : fail(63341, {
            Vt: ee,
            pa: re
        }) : this.ga = this.ga.insert(te, ee)
    }
    ya() {
        const ee = [];
        return this.ga.inorderTraversal((te, re) => {
            ee.push(re)
        }
        ),
            ee
    }
}
class ViewSnapshot {
    constructor(ee, te, re, ie, se, ae, ce, le, he) {
        this.query = ee,
            this.docs = te,
            this.oldDocs = re,
            this.docChanges = ie,
            this.mutatedKeys = se,
            this.fromCache = ae,
            this.syncStateChanged = ce,
            this.excludesMetadataChanges = le,
            this.hasCachedResults = he
    }
    static fromInitialDocuments(ee, te, re, ie, se) {
        const ae = [];
        return te.forEach(ce => {
            ae.push({
                type: 0,
                doc: ce
            })
        }
        ),
            new ViewSnapshot(ee, te, DocumentSet.emptySet(te), ae, re, ie, !0, !1, se)
    }
    get hasPendingWrites() {
        return !this.mutatedKeys.isEmpty()
    }
    isEqual(ee) {
        if (!(this.fromCache === ee.fromCache && this.hasCachedResults === ee.hasCachedResults && this.syncStateChanged === ee.syncStateChanged && this.mutatedKeys.isEqual(ee.mutatedKeys) && __PRIVATE_queryEquals(this.query, ee.query) && this.docs.isEqual(ee.docs) && this.oldDocs.isEqual(ee.oldDocs)))
            return !1;
        const te = this.docChanges
            , re = ee.docChanges;
        if (te.length !== re.length)
            return !1;
        for (let ie = 0; ie < te.length; ie++)
            if (te[ie].type !== re[ie].type || !te[ie].doc.isEqual(re[ie].doc))
                return !1;
        return !0
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_QueryListenersInfo {
    constructor() {
        this.wa = void 0,
            this.Sa = []
    }
    ba() {
        return this.Sa.some(ee => ee.Da())
    }
}
class __PRIVATE_EventManagerImpl {
    constructor() {
        this.queries = __PRIVATE_newQueriesObjectMap(),
            this.onlineState = "Unknown",
            this.Ca = new Set
    }
    terminate() {
        (function (te, re) {
            const ie = __PRIVATE_debugCast(te)
                , se = ie.queries;
            ie.queries = __PRIVATE_newQueriesObjectMap(),
                se.forEach((ae, ce) => {
                    for (const le of ce.Sa)
                        le.onError(re)
                }
                )
        }
        )(this, new FirestoreError(D.ABORTED, "Firestore shutting down"))
    }
}
function __PRIVATE_newQueriesObjectMap() {
    return new ObjectMap(ne => __PRIVATE_canonifyQuery(ne), __PRIVATE_queryEquals)
}
async function __PRIVATE_eventManagerListen(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    let re = 3;
    const ie = ee.query;
    let se = te.queries.get(ie);
    se ? !se.ba() && ee.Da() && (re = 2) : (se = new __PRIVATE_QueryListenersInfo,
        re = ee.Da() ? 0 : 1);
    try {
        switch (re) {
            case 0:
                se.wa = await te.onListen(ie, !0);
                break;
            case 1:
                se.wa = await te.onListen(ie, !1);
                break;
            case 2:
                await te.onFirstRemoteStoreListen(ie)
        }
    } catch (ae) {
        const ce = __PRIVATE_wrapInUserErrorIfRecoverable(ae, `Initialization of query '${__PRIVATE_stringifyQuery(ee.query)}' failed`);
        return void ee.onError(ce)
    }
    te.queries.set(ie, se),
        se.Sa.push(ee),
        ee.va(te.onlineState),
        se.wa && ee.Fa(se.wa) && __PRIVATE_raiseSnapshotsInSyncEvent(te)
}
async function __PRIVATE_eventManagerUnlisten(ne, ee) {
    const te = __PRIVATE_debugCast(ne)
        , re = ee.query;
    let ie = 3;
    const se = te.queries.get(re);
    if (se) {
        const ae = se.Sa.indexOf(ee);
        ae >= 0 && (se.Sa.splice(ae, 1),
            se.Sa.length === 0 ? ie = ee.Da() ? 0 : 1 : !se.ba() && ee.Da() && (ie = 2))
    }
    switch (ie) {
        case 0:
            return te.queries.delete(re),
                te.onUnlisten(re, !0);
        case 1:
            return te.queries.delete(re),
                te.onUnlisten(re, !1);
        case 2:
            return te.onLastRemoteStoreUnlisten(re);
        default:
            return
    }
}
function __PRIVATE_eventManagerOnWatchChange(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    let re = !1;
    for (const ie of ee) {
        const se = ie.query
            , ae = te.queries.get(se);
        if (ae) {
            for (const ce of ae.Sa)
                ce.Fa(ie) && (re = !0);
            ae.wa = ie
        }
    }
    re && __PRIVATE_raiseSnapshotsInSyncEvent(te)
}
function __PRIVATE_eventManagerOnWatchError(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne)
        , ie = re.queries.get(ee);
    if (ie)
        for (const se of ie.Sa)
            se.onError(te);
    re.queries.delete(ee)
}
function __PRIVATE_raiseSnapshotsInSyncEvent(ne) {
    ne.Ca.forEach(ee => {
        ee.next()
    }
    )
}
var Ht$1, Jt;
(Jt = Ht$1 || (Ht$1 = {})).Ma = "default",
    Jt.Cache = "cache";
class __PRIVATE_QueryListener {
    constructor(ee, te, re) {
        this.query = ee,
            this.xa = te,
            this.Oa = !1,
            this.Na = null,
            this.onlineState = "Unknown",
            this.options = re || {}
    }
    Fa(ee) {
        if (!this.options.includeMetadataChanges) {
            const re = [];
            for (const ie of ee.docChanges)
                ie.type !== 3 && re.push(ie);
            ee = new ViewSnapshot(ee.query, ee.docs, ee.oldDocs, re, ee.mutatedKeys, ee.fromCache, ee.syncStateChanged, !0, ee.hasCachedResults)
        }
        let te = !1;
        return this.Oa ? this.Ba(ee) && (this.xa.next(ee),
            te = !0) : this.La(ee, this.onlineState) && (this.ka(ee),
                te = !0),
            this.Na = ee,
            te
    }
    onError(ee) {
        this.xa.error(ee)
    }
    va(ee) {
        this.onlineState = ee;
        let te = !1;
        return this.Na && !this.Oa && this.La(this.Na, ee) && (this.ka(this.Na),
            te = !0),
            te
    }
    La(ee, te) {
        if (!ee.fromCache || !this.Da())
            return !0;
        const re = te !== "Offline";
        return (!this.options.qa || !re) && (!ee.docs.isEmpty() || ee.hasCachedResults || te === "Offline")
    }
    Ba(ee) {
        if (ee.docChanges.length > 0)
            return !0;
        const te = this.Na && this.Na.hasPendingWrites !== ee.hasPendingWrites;
        return !(!ee.syncStateChanged && !te) && this.options.includeMetadataChanges === !0
    }
    ka(ee) {
        ee = ViewSnapshot.fromInitialDocuments(ee.query, ee.docs, ee.mutatedKeys, ee.fromCache, ee.hasCachedResults),
            this.Oa = !0,
            this.xa.next(ee)
    }
    Da() {
        return this.options.source !== Ht$1.Cache
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_AddedLimboDocument {
    constructor(ee) {
        this.key = ee
    }
}
class __PRIVATE_RemovedLimboDocument {
    constructor(ee) {
        this.key = ee
    }
}
class __PRIVATE_View {
    constructor(ee, te) {
        this.query = ee,
            this.Za = te,
            this.Xa = null,
            this.hasCachedResults = !1,
            this.current = !1,
            this.Ya = __PRIVATE_documentKeySet(),
            this.mutatedKeys = __PRIVATE_documentKeySet(),
            this.eu = __PRIVATE_newQueryComparator(ee),
            this.tu = new DocumentSet(this.eu)
    }
    get nu() {
        return this.Za
    }
    ru(ee, te) {
        const re = te ? te.iu : new __PRIVATE_DocumentChangeSet
            , ie = te ? te.tu : this.tu;
        let se = te ? te.mutatedKeys : this.mutatedKeys
            , ae = ie
            , ce = !1;
        const le = this.query.limitType === "F" && ie.size === this.query.limit ? ie.last() : null
            , he = this.query.limitType === "L" && ie.size === this.query.limit ? ie.first() : null;
        if (ee.inorderTraversal((de, fe) => {
            const Re = ie.get(de)
                , Pe = __PRIVATE_queryMatches(this.query, fe) ? fe : null
                , we = !!Re && this.mutatedKeys.has(Re.key)
                , Se = !!Pe && (Pe.hasLocalMutations || this.mutatedKeys.has(Pe.key) && Pe.hasCommittedMutations);
            let be = !1;
            Re && Pe ? Re.data.isEqual(Pe.data) ? we !== Se && (re.track({
                type: 3,
                doc: Pe
            }),
                be = !0) : this.su(Re, Pe) || (re.track({
                    type: 2,
                    doc: Pe
                }),
                    be = !0,
                    (le && this.eu(Pe, le) > 0 || he && this.eu(Pe, he) < 0) && (ce = !0)) : !Re && Pe ? (re.track({
                        type: 0,
                        doc: Pe
                    }),
                        be = !0) : Re && !Pe && (re.track({
                            type: 1,
                            doc: Re
                        }),
                            be = !0,
                            (le || he) && (ce = !0)),
                be && (Pe ? (ae = ae.add(Pe),
                    se = Se ? se.add(de) : se.delete(de)) : (ae = ae.delete(de),
                        se = se.delete(de)))
        }
        ),
            this.query.limit !== null)
            for (; ae.size > this.query.limit;) {
                const de = this.query.limitType === "F" ? ae.last() : ae.first();
                ae = ae.delete(de.key),
                    se = se.delete(de.key),
                    re.track({
                        type: 1,
                        doc: de
                    })
            }
        return {
            tu: ae,
            iu: re,
            bs: ce,
            mutatedKeys: se
        }
    }
    su(ee, te) {
        return ee.hasLocalMutations && te.hasCommittedMutations && !te.hasLocalMutations
    }
    applyChanges(ee, te, re, ie) {
        const se = this.tu;
        this.tu = ee.tu,
            this.mutatedKeys = ee.mutatedKeys;
        const ae = ee.iu.ya();
        ae.sort((de, fe) => function (Pe, we) {
            const Se = be => {
                switch (be) {
                    case 0:
                        return 1;
                    case 2:
                    case 3:
                        return 2;
                    case 1:
                        return 0;
                    default:
                        return fail(20277, {
                            Vt: be
                        })
                }
            }
                ;
            return Se(Pe) - Se(we)
        }(de.type, fe.type) || this.eu(de.doc, fe.doc)),
            this.ou(re),
            ie = ie ?? !1;
        const ce = te && !ie ? this._u() : []
            , le = this.Ya.size === 0 && this.current && !ie ? 1 : 0
            , he = le !== this.Xa;
        return this.Xa = le,
            ae.length !== 0 || he ? {
                snapshot: new ViewSnapshot(this.query, ee.tu, se, ae, ee.mutatedKeys, le === 0, he, !1, !!re && re.resumeToken.approximateByteSize() > 0),
                au: ce
            } : {
                au: ce
            }
    }
    va(ee) {
        return this.current && ee === "Offline" ? (this.current = !1,
            this.applyChanges({
                tu: this.tu,
                iu: new __PRIVATE_DocumentChangeSet,
                mutatedKeys: this.mutatedKeys,
                bs: !1
            }, !1)) : {
            au: []
        }
    }
    uu(ee) {
        return !this.Za.has(ee) && !!this.tu.has(ee) && !this.tu.get(ee).hasLocalMutations
    }
    ou(ee) {
        ee && (ee.addedDocuments.forEach(te => this.Za = this.Za.add(te)),
            ee.modifiedDocuments.forEach(te => { }
            ),
            ee.removedDocuments.forEach(te => this.Za = this.Za.delete(te)),
            this.current = ee.current)
    }
    _u() {
        if (!this.current)
            return [];
        const ee = this.Ya;
        this.Ya = __PRIVATE_documentKeySet(),
            this.tu.forEach(re => {
                this.uu(re.key) && (this.Ya = this.Ya.add(re.key))
            }
            );
        const te = [];
        return ee.forEach(re => {
            this.Ya.has(re) || te.push(new __PRIVATE_RemovedLimboDocument(re))
        }
        ),
            this.Ya.forEach(re => {
                ee.has(re) || te.push(new __PRIVATE_AddedLimboDocument(re))
            }
            ),
            te
    }
    cu(ee) {
        this.Za = ee.ks,
            this.Ya = __PRIVATE_documentKeySet();
        const te = this.ru(ee.documents);
        return this.applyChanges(te, !0)
    }
    lu() {
        return ViewSnapshot.fromInitialDocuments(this.query, this.tu, this.mutatedKeys, this.Xa === 0, this.hasCachedResults)
    }
}
const Zt = "SyncEngine";
class __PRIVATE_QueryView {
    constructor(ee, te, re) {
        this.query = ee,
            this.targetId = te,
            this.view = re
    }
}
class LimboResolution {
    constructor(ee) {
        this.key = ee,
            this.hu = !1
    }
}
class __PRIVATE_SyncEngineImpl {
    constructor(ee, te, re, ie, se, ae) {
        this.localStore = ee,
            this.remoteStore = te,
            this.eventManager = re,
            this.sharedClientState = ie,
            this.currentUser = se,
            this.maxConcurrentLimboResolutions = ae,
            this.Pu = {},
            this.Tu = new ObjectMap(ce => __PRIVATE_canonifyQuery(ce), __PRIVATE_queryEquals),
            this.Eu = new Map,
            this.Iu = new Set,
            this.Ru = new SortedMap(DocumentKey.comparator),
            this.Au = new Map,
            this.Vu = new __PRIVATE_ReferenceSet,
            this.du = {},
            this.mu = new Map,
            this.fu = __PRIVATE_TargetIdGenerator.ar(),
            this.onlineState = "Unknown",
            this.gu = void 0
    }
    get isPrimaryClient() {
        return this.gu === !0
    }
}
async function __PRIVATE_syncEngineListen(ne, ee, te = !0) {
    const re = __PRIVATE_ensureWatchCallbacks(ne);
    let ie;
    const se = re.Tu.get(ee);
    return se ? (re.sharedClientState.addLocalQueryTarget(se.targetId),
        ie = se.view.lu()) : ie = await __PRIVATE_allocateTargetAndMaybeListen(re, ee, te, !0),
        ie
}
async function __PRIVATE_triggerRemoteStoreListen(ne, ee) {
    const te = __PRIVATE_ensureWatchCallbacks(ne);
    await __PRIVATE_allocateTargetAndMaybeListen(te, ee, !0, !1)
}
async function __PRIVATE_allocateTargetAndMaybeListen(ne, ee, te, re) {
    const ie = await __PRIVATE_localStoreAllocateTarget(ne.localStore, __PRIVATE_queryToTarget(ee))
        , se = ie.targetId
        , ae = ne.sharedClientState.addLocalQueryTarget(se, te);
    let ce;
    return re && (ce = await __PRIVATE_initializeViewAndComputeSnapshot(ne, ee, se, ae === "current", ie.resumeToken)),
        ne.isPrimaryClient && te && __PRIVATE_remoteStoreListen(ne.remoteStore, ie),
        ce
}
async function __PRIVATE_initializeViewAndComputeSnapshot(ne, ee, te, re, ie) {
    ne.pu = (fe, Re, Pe) => async function (Se, be, De, ke) {
        let Me = be.view.ru(De);
        Me.bs && (Me = await __PRIVATE_localStoreExecuteQuery(Se.localStore, be.query, !1).then(({ documents: Ie }) => be.view.ru(Ie, Me)));
        const Ne = ke && ke.targetChanges.get(be.targetId)
            , $e = ke && ke.targetMismatches.get(be.targetId) != null
            , Oe = be.view.applyChanges(Me, Se.isPrimaryClient, Ne, $e);
        return __PRIVATE_updateTrackedLimbos(Se, be.targetId, Oe.au),
            Oe.snapshot
    }(ne, fe, Re, Pe);
    const se = await __PRIVATE_localStoreExecuteQuery(ne.localStore, ee, !0)
        , ae = new __PRIVATE_View(ee, se.ks)
        , ce = ae.ru(se.documents)
        , le = TargetChange.createSynthesizedTargetChangeForCurrentChange(te, re && ne.onlineState !== "Offline", ie)
        , he = ae.applyChanges(ce, ne.isPrimaryClient, le);
    __PRIVATE_updateTrackedLimbos(ne, te, he.au);
    const de = new __PRIVATE_QueryView(ee, te, ae);
    return ne.Tu.set(ee, de),
        ne.Eu.has(te) ? ne.Eu.get(te).push(ee) : ne.Eu.set(te, [ee]),
        he.snapshot
}
async function __PRIVATE_syncEngineUnlisten(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne)
        , ie = re.Tu.get(ee)
        , se = re.Eu.get(ie.targetId);
    if (se.length > 1)
        return re.Eu.set(ie.targetId, se.filter(ae => !__PRIVATE_queryEquals(ae, ee))),
            void re.Tu.delete(ee);
    re.isPrimaryClient ? (re.sharedClientState.removeLocalQueryTarget(ie.targetId),
        re.sharedClientState.isActiveQueryTarget(ie.targetId) || await __PRIVATE_localStoreReleaseTarget(re.localStore, ie.targetId, !1).then(() => {
            re.sharedClientState.clearQueryState(ie.targetId),
                te && __PRIVATE_remoteStoreUnlisten(re.remoteStore, ie.targetId),
                __PRIVATE_removeAndCleanupTarget(re, ie.targetId)
        }
        ).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)) : (__PRIVATE_removeAndCleanupTarget(re, ie.targetId),
            await __PRIVATE_localStoreReleaseTarget(re.localStore, ie.targetId, !0))
}
async function __PRIVATE_triggerRemoteStoreUnlisten(ne, ee) {
    const te = __PRIVATE_debugCast(ne)
        , re = te.Tu.get(ee)
        , ie = te.Eu.get(re.targetId);
    te.isPrimaryClient && ie.length === 1 && (te.sharedClientState.removeLocalQueryTarget(re.targetId),
        __PRIVATE_remoteStoreUnlisten(te.remoteStore, re.targetId))
}
async function __PRIVATE_syncEngineWrite(ne, ee, te) {
    const re = __PRIVATE_syncEngineEnsureWriteCallbacks(ne);
    try {
        const ie = await function (ae, ce) {
            const le = __PRIVATE_debugCast(ae)
                , he = Timestamp.now()
                , de = ce.reduce((Pe, we) => Pe.add(we.key), __PRIVATE_documentKeySet());
            let fe, Re;
            return le.persistence.runTransaction("Locally write mutations", "readwrite", Pe => {
                let we = __PRIVATE_mutableDocumentMap()
                    , Se = __PRIVATE_documentKeySet();
                return le.xs.getEntries(Pe, de).next(be => {
                    we = be,
                        we.forEach((De, ke) => {
                            ke.isValidDocument() || (Se = Se.add(De))
                        }
                        )
                }
                ).next(() => le.localDocuments.getOverlayedDocuments(Pe, we)).next(be => {
                    fe = be;
                    const De = [];
                    for (const ke of ce) {
                        const Me = __PRIVATE_mutationExtractBaseValue(ke, fe.get(ke.key).overlayedDocument);
                        Me != null && De.push(new __PRIVATE_PatchMutation(ke.key, Me, __PRIVATE_extractFieldMask(Me.value.mapValue), Precondition.exists(!0)))
                    }
                    return le.mutationQueue.addMutationBatch(Pe, he, De, ce)
                }
                ).next(be => {
                    Re = be;
                    const De = be.applyToLocalDocumentSet(fe, Se);
                    return le.documentOverlayCache.saveOverlays(Pe, be.batchId, De)
                }
                )
            }
            ).then(() => ({
                batchId: Re.batchId,
                changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(fe)
            }))
        }(re.localStore, ee);
        re.sharedClientState.addPendingMutation(ie.batchId),
            function (ae, ce, le) {
                let he = ae.du[ae.currentUser.toKey()];
                he || (he = new SortedMap(__PRIVATE_primitiveComparator)),
                    he = he.insert(ce, le),
                    ae.du[ae.currentUser.toKey()] = he
            }(re, ie.batchId, te),
            await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(re, ie.changes),
            await __PRIVATE_fillWritePipeline(re.remoteStore)
    } catch (ie) {
        const se = __PRIVATE_wrapInUserErrorIfRecoverable(ie, "Failed to persist write");
        te.reject(se)
    }
}
async function __PRIVATE_syncEngineApplyRemoteEvent(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    try {
        const re = await __PRIVATE_localStoreApplyRemoteEventToLocalCache(te.localStore, ee);
        ee.targetChanges.forEach((ie, se) => {
            const ae = te.Au.get(se);
            ae && (__PRIVATE_hardAssert(ie.addedDocuments.size + ie.modifiedDocuments.size + ie.removedDocuments.size <= 1, 22616),
                ie.addedDocuments.size > 0 ? ae.hu = !0 : ie.modifiedDocuments.size > 0 ? __PRIVATE_hardAssert(ae.hu, 14607) : ie.removedDocuments.size > 0 && (__PRIVATE_hardAssert(ae.hu, 42227),
                    ae.hu = !1))
        }
        ),
            await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(te, re, ee)
    } catch (re) {
        await __PRIVATE_ignoreIfPrimaryLeaseLoss(re)
    }
}
function __PRIVATE_syncEngineApplyOnlineStateChange(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne);
    if (re.isPrimaryClient && te === 0 || !re.isPrimaryClient && te === 1) {
        const ie = [];
        re.Tu.forEach((se, ae) => {
            const ce = ae.view.va(ee);
            ce.snapshot && ie.push(ce.snapshot)
        }
        ),
            function (ae, ce) {
                const le = __PRIVATE_debugCast(ae);
                le.onlineState = ce;
                let he = !1;
                le.queries.forEach((de, fe) => {
                    for (const Re of fe.Sa)
                        Re.va(ce) && (he = !0)
                }
                ),
                    he && __PRIVATE_raiseSnapshotsInSyncEvent(le)
            }(re.eventManager, ee),
            ie.length && re.Pu.H_(ie),
            re.onlineState = ee,
            re.isPrimaryClient && re.sharedClientState.setOnlineState(ee)
    }
}
async function __PRIVATE_syncEngineRejectListen(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne);
    re.sharedClientState.updateQueryState(ee, "rejected", te);
    const ie = re.Au.get(ee)
        , se = ie && ie.key;
    if (se) {
        let ae = new SortedMap(DocumentKey.comparator);
        ae = ae.insert(se, MutableDocument.newNoDocument(se, SnapshotVersion.min()));
        const ce = __PRIVATE_documentKeySet().add(se)
            , le = new RemoteEvent(SnapshotVersion.min(), new Map, new SortedMap(__PRIVATE_primitiveComparator), ae, ce);
        await __PRIVATE_syncEngineApplyRemoteEvent(re, le),
            re.Ru = re.Ru.remove(se),
            re.Au.delete(ee),
            __PRIVATE_pumpEnqueuedLimboResolutions(re)
    } else
        await __PRIVATE_localStoreReleaseTarget(re.localStore, ee, !1).then(() => __PRIVATE_removeAndCleanupTarget(re, ee, te)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)
}
async function __PRIVATE_syncEngineApplySuccessfulWrite(ne, ee) {
    const te = __PRIVATE_debugCast(ne)
        , re = ee.batch.batchId;
    try {
        const ie = await __PRIVATE_localStoreAcknowledgeBatch(te.localStore, ee);
        __PRIVATE_processUserCallback(te, re, null),
            __PRIVATE_triggerPendingWritesCallbacks(te, re),
            te.sharedClientState.updateMutationState(re, "acknowledged"),
            await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(te, ie)
    } catch (ie) {
        await __PRIVATE_ignoreIfPrimaryLeaseLoss(ie)
    }
}
async function __PRIVATE_syncEngineRejectFailedWrite(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne);
    try {
        const ie = await function (ae, ce) {
            const le = __PRIVATE_debugCast(ae);
            return le.persistence.runTransaction("Reject batch", "readwrite-primary", he => {
                let de;
                return le.mutationQueue.lookupMutationBatch(he, ce).next(fe => (__PRIVATE_hardAssert(fe !== null, 37113),
                    de = fe.keys(),
                    le.mutationQueue.removeMutationBatch(he, fe))).next(() => le.mutationQueue.performConsistencyCheck(he)).next(() => le.documentOverlayCache.removeOverlaysForBatchId(he, de, ce)).next(() => le.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(he, de)).next(() => le.localDocuments.getDocuments(he, de))
            }
            )
        }(re.localStore, ee);
        __PRIVATE_processUserCallback(re, ee, te),
            __PRIVATE_triggerPendingWritesCallbacks(re, ee),
            re.sharedClientState.updateMutationState(ee, "rejected", te),
            await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(re, ie)
    } catch (ie) {
        await __PRIVATE_ignoreIfPrimaryLeaseLoss(ie)
    }
}
function __PRIVATE_triggerPendingWritesCallbacks(ne, ee) {
    (ne.mu.get(ee) || []).forEach(te => {
        te.resolve()
    }
    ),
        ne.mu.delete(ee)
}
function __PRIVATE_processUserCallback(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne);
    let ie = re.du[re.currentUser.toKey()];
    if (ie) {
        const se = ie.get(ee);
        se && (te ? se.reject(te) : se.resolve(),
            ie = ie.remove(ee)),
            re.du[re.currentUser.toKey()] = ie
    }
}
function __PRIVATE_removeAndCleanupTarget(ne, ee, te = null) {
    ne.sharedClientState.removeLocalQueryTarget(ee);
    for (const re of ne.Eu.get(ee))
        ne.Tu.delete(re),
            te && ne.Pu.yu(re, te);
    ne.Eu.delete(ee),
        ne.isPrimaryClient && ne.Vu.Gr(ee).forEach(re => {
            ne.Vu.containsKey(re) || __PRIVATE_removeLimboTarget(ne, re)
        }
        )
}
function __PRIVATE_removeLimboTarget(ne, ee) {
    ne.Iu.delete(ee.path.canonicalString());
    const te = ne.Ru.get(ee);
    te !== null && (__PRIVATE_remoteStoreUnlisten(ne.remoteStore, te),
        ne.Ru = ne.Ru.remove(ee),
        ne.Au.delete(te),
        __PRIVATE_pumpEnqueuedLimboResolutions(ne))
}
function __PRIVATE_updateTrackedLimbos(ne, ee, te) {
    for (const re of te)
        re instanceof __PRIVATE_AddedLimboDocument ? (ne.Vu.addReference(re.key, ee),
            __PRIVATE_trackLimboChange(ne, re)) : re instanceof __PRIVATE_RemovedLimboDocument ? (__PRIVATE_logDebug(Zt, "Document no longer in limbo: " + re.key),
                ne.Vu.removeReference(re.key, ee),
                ne.Vu.containsKey(re.key) || __PRIVATE_removeLimboTarget(ne, re.key)) : fail(19791, {
                    wu: re
                })
}
function __PRIVATE_trackLimboChange(ne, ee) {
    const te = ee.key
        , re = te.path.canonicalString();
    ne.Ru.get(te) || ne.Iu.has(re) || (__PRIVATE_logDebug(Zt, "New document in limbo: " + te),
        ne.Iu.add(re),
        __PRIVATE_pumpEnqueuedLimboResolutions(ne))
}
function __PRIVATE_pumpEnqueuedLimboResolutions(ne) {
    for (; ne.Iu.size > 0 && ne.Ru.size < ne.maxConcurrentLimboResolutions;) {
        const ee = ne.Iu.values().next().value;
        ne.Iu.delete(ee);
        const te = new DocumentKey(ResourcePath.fromString(ee))
            , re = ne.fu.next();
        ne.Au.set(re, new LimboResolution(te)),
            ne.Ru = ne.Ru.insert(te, re),
            __PRIVATE_remoteStoreListen(ne.remoteStore, new TargetData(__PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(te.path)), re, "TargetPurposeLimboResolution", __PRIVATE_ListenSequence.ce))
    }
}
async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(ne, ee, te) {
    const re = __PRIVATE_debugCast(ne)
        , ie = []
        , se = []
        , ae = [];
    re.Tu.isEmpty() || (re.Tu.forEach((ce, le) => {
        ae.push(re.pu(le, ee, te).then(he => {
            if ((he || te) && re.isPrimaryClient) {
                const de = he ? !he.fromCache : te?.targetChanges.get(le.targetId)?.current;
                re.sharedClientState.updateQueryState(le.targetId, de ? "current" : "not-current")
            }
            if (he) {
                ie.push(he);
                const de = __PRIVATE_LocalViewChanges.Is(le.targetId, he);
                se.push(de)
            }
        }
        ))
    }
    ),
        await Promise.all(ae),
        re.Pu.H_(ie),
        await async function (le, he) {
            const de = __PRIVATE_debugCast(le);
            try {
                await de.persistence.runTransaction("notifyLocalViewChanges", "readwrite", fe => PersistencePromise.forEach(he, Re => PersistencePromise.forEach(Re.Ts, Pe => de.persistence.referenceDelegate.addReference(fe, Re.targetId, Pe)).next(() => PersistencePromise.forEach(Re.Es, Pe => de.persistence.referenceDelegate.removeReference(fe, Re.targetId, Pe)))))
            } catch (fe) {
                if (!__PRIVATE_isIndexedDbTransactionError(fe))
                    throw fe;
                __PRIVATE_logDebug(Nt, "Failed to update sequence numbers: " + fe)
            }
            for (const fe of he) {
                const Re = fe.targetId;
                if (!fe.fromCache) {
                    const Pe = de.vs.get(Re)
                        , we = Pe.snapshotVersion
                        , Se = Pe.withLastLimboFreeSnapshotVersion(we);
                    de.vs = de.vs.insert(Re, Se)
                }
            }
        }(re.localStore, se))
}
async function __PRIVATE_syncEngineHandleCredentialChange(ne, ee) {
    const te = __PRIVATE_debugCast(ne);
    if (!te.currentUser.isEqual(ee)) {
        __PRIVATE_logDebug(Zt, "User change. New user:", ee.toKey());
        const re = await __PRIVATE_localStoreHandleUserChange(te.localStore, ee);
        te.currentUser = ee,
            function (se, ae) {
                se.mu.forEach(ce => {
                    ce.forEach(le => {
                        le.reject(new FirestoreError(D.CANCELLED, ae))
                    }
                    )
                }
                ),
                    se.mu.clear()
            }(te, "'waitForPendingWrites' promise is rejected due to a user change."),
            te.sharedClientState.handleUserChange(ee, re.removedBatchIds, re.addedBatchIds),
            await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(te, re.Ns)
    }
}
function __PRIVATE_syncEngineGetRemoteKeysForTarget(ne, ee) {
    const te = __PRIVATE_debugCast(ne)
        , re = te.Au.get(ee);
    if (re && re.hu)
        return __PRIVATE_documentKeySet().add(re.key);
    {
        let ie = __PRIVATE_documentKeySet();
        const se = te.Eu.get(ee);
        if (!se)
            return ie;
        for (const ae of se) {
            const ce = te.Tu.get(ae);
            ie = ie.unionWith(ce.view.nu)
        }
        return ie
    }
}
function __PRIVATE_ensureWatchCallbacks(ne) {
    const ee = __PRIVATE_debugCast(ne);
    return ee.remoteStore.remoteSyncer.applyRemoteEvent = __PRIVATE_syncEngineApplyRemoteEvent.bind(null, ee),
        ee.remoteStore.remoteSyncer.getRemoteKeysForTarget = __PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null, ee),
        ee.remoteStore.remoteSyncer.rejectListen = __PRIVATE_syncEngineRejectListen.bind(null, ee),
        ee.Pu.H_ = __PRIVATE_eventManagerOnWatchChange.bind(null, ee.eventManager),
        ee.Pu.yu = __PRIVATE_eventManagerOnWatchError.bind(null, ee.eventManager),
        ee
}
function __PRIVATE_syncEngineEnsureWriteCallbacks(ne) {
    const ee = __PRIVATE_debugCast(ne);
    return ee.remoteStore.remoteSyncer.applySuccessfulWrite = __PRIVATE_syncEngineApplySuccessfulWrite.bind(null, ee),
        ee.remoteStore.remoteSyncer.rejectFailedWrite = __PRIVATE_syncEngineRejectFailedWrite.bind(null, ee),
        ee
}
class __PRIVATE_MemoryOfflineComponentProvider {
    constructor() {
        this.kind = "memory",
            this.synchronizeTabs = !1
    }
    async initialize(ee) {
        this.serializer = __PRIVATE_newSerializer(ee.databaseInfo.databaseId),
            this.sharedClientState = this.Du(ee),
            this.persistence = this.Cu(ee),
            await this.persistence.start(),
            this.localStore = this.vu(ee),
            this.gcScheduler = this.Fu(ee, this.localStore),
            this.indexBackfillerScheduler = this.Mu(ee, this.localStore)
    }
    Fu(ee, te) {
        return null
    }
    Mu(ee, te) {
        return null
    }
    vu(ee) {
        return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine, ee.initialUser, this.serializer)
    }
    Cu(ee) {
        return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Vi, this.serializer)
    }
    Du(ee) {
        return new __PRIVATE_MemorySharedClientState
    }
    async terminate() {
        this.gcScheduler?.stop(),
            this.indexBackfillerScheduler?.stop(),
            this.sharedClientState.shutdown(),
            await this.persistence.shutdown()
    }
}
__PRIVATE_MemoryOfflineComponentProvider.provider = {
    build: () => new __PRIVATE_MemoryOfflineComponentProvider
};
class __PRIVATE_LruGcMemoryOfflineComponentProvider extends __PRIVATE_MemoryOfflineComponentProvider {
    constructor(ee) {
        super(),
            this.cacheSizeBytes = ee
    }
    Fu(ee, te) {
        __PRIVATE_hardAssert(this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate, 46915);
        const re = this.persistence.referenceDelegate.garbageCollector;
        return new __PRIVATE_LruScheduler(re, ee.asyncQueue, te)
    }
    Cu(ee) {
        const te = this.cacheSizeBytes !== void 0 ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
        return new __PRIVATE_MemoryPersistence(re => __PRIVATE_MemoryLruDelegate.Vi(re, te), this.serializer)
    }
}
class OnlineComponentProvider {
    async initialize(ee, te) {
        this.localStore || (this.localStore = ee.localStore,
            this.sharedClientState = ee.sharedClientState,
            this.datastore = this.createDatastore(te),
            this.remoteStore = this.createRemoteStore(te),
            this.eventManager = this.createEventManager(te),
            this.syncEngine = this.createSyncEngine(te, !ee.synchronizeTabs),
            this.sharedClientState.onlineStateHandler = re => __PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine, re, 1),
            this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine),
            await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient))
    }
    createEventManager(ee) {
        return function () {
            return new __PRIVATE_EventManagerImpl
        }()
    }
    createDatastore(ee) {
        const te = __PRIVATE_newSerializer(ee.databaseInfo.databaseId)
            , re = __PRIVATE_newConnection(ee.databaseInfo);
        return __PRIVATE_newDatastore(ee.authCredentials, ee.appCheckCredentials, re, te)
    }
    createRemoteStore(ee) {
        return function (re, ie, se, ae, ce) {
            return new __PRIVATE_RemoteStoreImpl(re, ie, se, ae, ce)
        }(this.localStore, this.datastore, ee.asyncQueue, te => __PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine, te, 0), function () {
            return __PRIVATE_BrowserConnectivityMonitor.v() ? new __PRIVATE_BrowserConnectivityMonitor : new __PRIVATE_NoopConnectivityMonitor
        }())
    }
    createSyncEngine(ee, te) {
        return function (ie, se, ae, ce, le, he, de) {
            const fe = new __PRIVATE_SyncEngineImpl(ie, se, ae, ce, le, he);
            return de && (fe.gu = !0),
                fe
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, ee.initialUser, ee.maxConcurrentLimboResolutions, te)
    }
    async terminate() {
        await async function (te) {
            const re = __PRIVATE_debugCast(te);
            __PRIVATE_logDebug(jt, "RemoteStore shutting down."),
                re.Ia.add(5),
                await __PRIVATE_disableNetworkInternal(re),
                re.Aa.shutdown(),
                re.Va.set("Unknown")
        }(this.remoteStore),
            this.datastore?.terminate(),
            this.eventManager?.terminate()
    }
}
OnlineComponentProvider.provider = {
    build: () => new OnlineComponentProvider
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_AsyncObserver {
    constructor(ee) {
        this.observer = ee,
            this.muted = !1
    }
    next(ee) {
        this.muted || this.observer.next && this.Ou(this.observer.next, ee)
    }
    error(ee) {
        this.muted || (this.observer.error ? this.Ou(this.observer.error, ee) : __PRIVATE_logError("Uncaught Error in snapshot listener:", ee.toString()))
    }
    Nu() {
        this.muted = !0
    }
    Ou(ee, te) {
        setTimeout(() => {
            this.muted || ee(te)
        }
            , 0)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt = "FirestoreClient";
class FirestoreClient {
    constructor(ee, te, re, ie, se) {
        this.authCredentials = ee,
            this.appCheckCredentials = te,
            this.asyncQueue = re,
            this._databaseInfo = ie,
            this.user = User.UNAUTHENTICATED,
            this.clientId = __PRIVATE_AutoId.newId(),
            this.authCredentialListener = () => Promise.resolve(),
            this.appCheckCredentialListener = () => Promise.resolve(),
            this._uninitializedComponentsProvider = se,
            this.authCredentials.start(re, async ae => {
                __PRIVATE_logDebug(Xt, "Received user=", ae.uid),
                    await this.authCredentialListener(ae),
                    this.user = ae
            }
            ),
            this.appCheckCredentials.start(re, ae => (__PRIVATE_logDebug(Xt, "Received new app check token=", ae),
                this.appCheckCredentialListener(ae, this.user)))
    }
    get configuration() {
        return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this._databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
        }
    }
    setCredentialChangeListener(ee) {
        this.authCredentialListener = ee
    }
    setAppCheckTokenChangeListener(ee) {
        this.appCheckCredentialListener = ee
    }
    terminate() {
        this.asyncQueue.enterRestrictedMode();
        const ee = new __PRIVATE_Deferred;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
            try {
                this._onlineComponents && await this._onlineComponents.terminate(),
                    this._offlineComponents && await this._offlineComponents.terminate(),
                    this.authCredentials.shutdown(),
                    this.appCheckCredentials.shutdown(),
                    ee.resolve()
            } catch (te) {
                const re = __PRIVATE_wrapInUserErrorIfRecoverable(te, "Failed to shutdown persistence");
                ee.reject(re)
            }
        }
        ),
            ee.promise
    }
}
async function __PRIVATE_setOfflineComponentProvider(ne, ee) {
    ne.asyncQueue.verifyOperationInProgress(),
        __PRIVATE_logDebug(Xt, "Initializing OfflineComponentProvider");
    const te = ne.configuration;
    await ee.initialize(te);
    let re = te.initialUser;
    ne.setCredentialChangeListener(async ie => {
        re.isEqual(ie) || (await __PRIVATE_localStoreHandleUserChange(ee.localStore, ie),
            re = ie)
    }
    ),
        ee.persistence.setDatabaseDeletedListener(() => ne.terminate()),
        ne._offlineComponents = ee
}
async function __PRIVATE_setOnlineComponentProvider(ne, ee) {
    ne.asyncQueue.verifyOperationInProgress();
    const te = await __PRIVATE_ensureOfflineComponents(ne);
    __PRIVATE_logDebug(Xt, "Initializing OnlineComponentProvider"),
        await ee.initialize(te, ne.configuration),
        ne.setCredentialChangeListener(re => __PRIVATE_remoteStoreHandleCredentialChange(ee.remoteStore, re)),
        ne.setAppCheckTokenChangeListener((re, ie) => __PRIVATE_remoteStoreHandleCredentialChange(ee.remoteStore, ie)),
        ne._onlineComponents = ee
}
async function __PRIVATE_ensureOfflineComponents(ne) {
    if (!ne._offlineComponents)
        if (ne._uninitializedComponentsProvider) {
            __PRIVATE_logDebug(Xt, "Using user provided OfflineComponentProvider");
            try {
                await __PRIVATE_setOfflineComponentProvider(ne, ne._uninitializedComponentsProvider._offline)
            } catch (ee) {
                const te = ee;
                if (!function (ie) {
                    return ie.name === "FirebaseError" ? ie.code === D.FAILED_PRECONDITION || ie.code === D.UNIMPLEMENTED : !(typeof DOMException < "u" && ie instanceof DOMException) || ie.code === 22 || ie.code === 20 || ie.code === 11
                }(te))
                    throw te;
                __PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: " + te),
                    await __PRIVATE_setOfflineComponentProvider(ne, new __PRIVATE_MemoryOfflineComponentProvider)
            }
        } else
            __PRIVATE_logDebug(Xt, "Using default OfflineComponentProvider"),
                await __PRIVATE_setOfflineComponentProvider(ne, new __PRIVATE_LruGcMemoryOfflineComponentProvider(void 0));
    return ne._offlineComponents
}
async function __PRIVATE_ensureOnlineComponents(ne) {
    return ne._onlineComponents || (ne._uninitializedComponentsProvider ? (__PRIVATE_logDebug(Xt, "Using user provided OnlineComponentProvider"),
        await __PRIVATE_setOnlineComponentProvider(ne, ne._uninitializedComponentsProvider._online)) : (__PRIVATE_logDebug(Xt, "Using default OnlineComponentProvider"),
            await __PRIVATE_setOnlineComponentProvider(ne, new OnlineComponentProvider))),
        ne._onlineComponents
}
function __PRIVATE_getSyncEngine(ne) {
    return __PRIVATE_ensureOnlineComponents(ne).then(ee => ee.syncEngine)
}
async function __PRIVATE_getEventManager(ne) {
    const ee = await __PRIVATE_ensureOnlineComponents(ne)
        , te = ee.eventManager;
    return te.onListen = __PRIVATE_syncEngineListen.bind(null, ee.syncEngine),
        te.onUnlisten = __PRIVATE_syncEngineUnlisten.bind(null, ee.syncEngine),
        te.onFirstRemoteStoreListen = __PRIVATE_triggerRemoteStoreListen.bind(null, ee.syncEngine),
        te.onLastRemoteStoreUnlisten = __PRIVATE_triggerRemoteStoreUnlisten.bind(null, ee.syncEngine),
        te
}
function __PRIVATE_firestoreClientListen(ne, ee, te, re) {
    const ie = new __PRIVATE_AsyncObserver(re)
        , se = new __PRIVATE_QueryListener(ee, ie, te);
    return ne.asyncQueue.enqueueAndForget(async () => __PRIVATE_eventManagerListen(await __PRIVATE_getEventManager(ne), se)),
        () => {
            ie.Nu(),
                ne.asyncQueue.enqueueAndForget(async () => __PRIVATE_eventManagerUnlisten(await __PRIVATE_getEventManager(ne), se))
        }
}
function __PRIVATE_firestoreClientWrite(ne, ee) {
    const te = new __PRIVATE_Deferred;
    return ne.asyncQueue.enqueueAndForget(async () => __PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(ne), ee, te)),
        te.promise
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_cloneLongPollingOptions(ne) {
    const ee = {};
    return ne.timeoutSeconds !== void 0 && (ee.timeoutSeconds = ne.timeoutSeconds),
        ee
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt = "ComponentProvider"
    , en = new Map;
function __PRIVATE_makeDatabaseInfo(ne, ee, te, re, ie) {
    return new DatabaseInfo(ne, ee, te, ie.host, ie.ssl, ie.experimentalForceLongPolling, ie.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(ie.experimentalLongPollingOptions), ie.useFetchStreams, ie.isUsingEmulator, re)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn = "firestore.googleapis.com"
    , nn = !0;
class FirestoreSettingsImpl {
    constructor(ee) {
        if (ee.host === void 0) {
            if (ee.ssl !== void 0)
                throw new FirestoreError(D.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = tn,
                this.ssl = nn
        } else
            this.host = ee.host,
                this.ssl = ee.ssl ?? nn;
        if (this.isUsingEmulator = ee.emulatorOptions !== void 0,
            this.credentials = ee.credentials,
            this.ignoreUndefinedProperties = !!ee.ignoreUndefinedProperties,
            this.localCache = ee.localCache,
            ee.cacheSizeBytes === void 0)
            this.cacheSizeBytes = St;
        else {
            if (ee.cacheSizeBytes !== -1 && ee.cacheSizeBytes < Ct)
                throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = ee.cacheSizeBytes
        }
        __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", ee.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", ee.experimentalAutoDetectLongPolling),
            this.experimentalForceLongPolling = !!ee.experimentalForceLongPolling,
            this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : ee.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!ee.experimentalAutoDetectLongPolling,
            this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(ee.experimentalLongPollingOptions ?? {}),
            function (re) {
                if (re.timeoutSeconds !== void 0) {
                    if (isNaN(re.timeoutSeconds))
                        throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${re.timeoutSeconds} (must not be NaN)`);
                    if (re.timeoutSeconds < 5)
                        throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${re.timeoutSeconds} (minimum allowed value is 5)`);
                    if (re.timeoutSeconds > 30)
                        throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${re.timeoutSeconds} (maximum allowed value is 30)`)
                }
            }(this.experimentalLongPollingOptions),
            this.useFetchStreams = !!ee.useFetchStreams
    }
    isEqual(ee) {
        return this.host === ee.host && this.ssl === ee.ssl && this.credentials === ee.credentials && this.cacheSizeBytes === ee.cacheSizeBytes && this.experimentalForceLongPolling === ee.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === ee.experimentalAutoDetectLongPolling && function (re, ie) {
            return re.timeoutSeconds === ie.timeoutSeconds
        }(this.experimentalLongPollingOptions, ee.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === ee.ignoreUndefinedProperties && this.useFetchStreams === ee.useFetchStreams
    }
}
class Firestore$1 {
    constructor(ee, te, re, ie) {
        this._authCredentials = ee,
            this._appCheckCredentials = te,
            this._databaseId = re,
            this._app = ie,
            this.type = "firestore-lite",
            this._persistenceKey = "(lite)",
            this._settings = new FirestoreSettingsImpl({}),
            this._settingsFrozen = !1,
            this._emulatorOptions = {},
            this._terminateTask = "notTerminated"
    }
    get app() {
        if (!this._app)
            throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app
    }
    get _initialized() {
        return this._settingsFrozen
    }
    get _terminated() {
        return this._terminateTask !== "notTerminated"
    }
    _setSettings(ee) {
        if (this._settingsFrozen)
            throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new FirestoreSettingsImpl(ee),
            this._emulatorOptions = ee.emulatorOptions || {},
            ee.credentials !== void 0 && (this._authCredentials = function (re) {
                if (!re)
                    return new __PRIVATE_EmptyAuthCredentialsProvider;
                switch (re.type) {
                    case "firstParty":
                        return new __PRIVATE_FirstPartyAuthCredentialsProvider(re.sessionIndex || "0", re.iamToken || null, re.authTokenFactory || null);
                    case "provider":
                        return re.client;
                    default:
                        throw new FirestoreError(D.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
                }
            }(ee.credentials))
    }
    _getSettings() {
        return this._settings
    }
    _getEmulatorOptions() {
        return this._emulatorOptions
    }
    _freezeSettings() {
        return this._settingsFrozen = !0,
            this._settings
    }
    _delete() {
        return this._terminateTask === "notTerminated" && (this._terminateTask = this._terminate()),
            this._terminateTask
    }
    async _restart() {
        this._terminateTask === "notTerminated" ? await this._terminate() : this._terminateTask = "notTerminated"
    }
    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        }
    }
    _terminate() {
        return function (te) {
            const re = en.get(te);
            re && (__PRIVATE_logDebug(Yt, "Removing Datastore"),
                en.delete(te),
                re.terminate())
        }(this),
            Promise.resolve()
    }
}
function connectFirestoreEmulator(ne, ee, te, re = {}) {
    ne = __PRIVATE_cast(ne, Firestore$1);
    const ie = isCloudWorkstation(ee)
        , se = ne._getSettings()
        , ae = {
            ...se,
            emulatorOptions: ne._getEmulatorOptions()
        }
        , ce = `${ee}:${te}`;
    ie && pingServer(`https://${ce}`),
        se.host !== tn && se.host !== ce && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
    const le = {
        ...se,
        host: ce,
        ssl: ie,
        emulatorOptions: re
    };
    if (!deepEqual(le, ae) && (ne._setSettings(le),
        re.mockUserToken)) {
        let he, de;
        if (typeof re.mockUserToken == "string")
            he = re.mockUserToken,
                de = User.MOCK_USER;
        else {
            he = createMockUserToken(re.mockUserToken, ne._app?.options.projectId);
            const fe = re.mockUserToken.sub || re.mockUserToken.user_id;
            if (!fe)
                throw new FirestoreError(D.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
            de = new User(fe)
        }
        ne._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(he, de))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Query {
    constructor(ee, te, re) {
        this.converter = te,
            this._query = re,
            this.type = "query",
            this.firestore = ee
    }
    withConverter(ee) {
        return new Query(this.firestore, ee, this._query)
    }
}
class DocumentReference {
    constructor(ee, te, re) {
        this.converter = te,
            this._key = re,
            this.type = "document",
            this.firestore = ee
    }
    get _path() {
        return this._key.path
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get path() {
        return this._key.path.canonicalString()
    }
    get parent() {
        return new CollectionReference(this.firestore, this.converter, this._key.path.popLast())
    }
    withConverter(ee) {
        return new DocumentReference(this.firestore, ee, this._key)
    }
    toJSON() {
        return {
            type: DocumentReference._jsonSchemaVersion,
            referencePath: this._key.toString()
        }
    }
    static fromJSON(ee, te, re) {
        if (__PRIVATE_validateJSON(te, DocumentReference._jsonSchema))
            return new DocumentReference(ee, re || null, new DocumentKey(ResourcePath.fromString(te.referencePath)))
    }
}
DocumentReference._jsonSchemaVersion = "firestore/documentReference/1.0",
    DocumentReference._jsonSchema = {
        type: property("string", DocumentReference._jsonSchemaVersion),
        referencePath: property("string")
    };
class CollectionReference extends Query {
    constructor(ee, te, re) {
        super(ee, te, __PRIVATE_newQueryForPath(re)),
            this._path = re,
            this.type = "collection"
    }
    get id() {
        return this._query.path.lastSegment()
    }
    get path() {
        return this._query.path.canonicalString()
    }
    get parent() {
        const ee = this._path.popLast();
        return ee.isEmpty() ? null : new DocumentReference(this.firestore, null, new DocumentKey(ee))
    }
    withConverter(ee) {
        return new CollectionReference(this.firestore, ee, this._path)
    }
}
function collection(ne, ee, ...te) {
    if (ne = getModularInstance(ne),
        __PRIVATE_validateNonEmptyArgument("collection", "path", ee),
        ne instanceof Firestore$1) {
        const re = ResourcePath.fromString(ee, ...te);
        return __PRIVATE_validateCollectionPath(re),
            new CollectionReference(ne, null, re)
    }
    {
        if (!(ne instanceof DocumentReference || ne instanceof CollectionReference))
            throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const re = ne._path.child(ResourcePath.fromString(ee, ...te));
        return __PRIVATE_validateCollectionPath(re),
            new CollectionReference(ne.firestore, null, re)
    }
}
function doc(ne, ee, ...te) {
    if (ne = getModularInstance(ne),
        arguments.length === 1 && (ee = __PRIVATE_AutoId.newId()),
        __PRIVATE_validateNonEmptyArgument("doc", "path", ee),
        ne instanceof Firestore$1) {
        const re = ResourcePath.fromString(ee, ...te);
        return __PRIVATE_validateDocumentPath(re),
            new DocumentReference(ne, null, new DocumentKey(re))
    }
    {
        if (!(ne instanceof DocumentReference || ne instanceof CollectionReference))
            throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const re = ne._path.child(ResourcePath.fromString(ee, ...te));
        return __PRIVATE_validateDocumentPath(re),
            new DocumentReference(ne.firestore, ne instanceof CollectionReference ? ne.converter : null, new DocumentKey(re))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn = "AsyncQueue";
class __PRIVATE_AsyncQueueImpl {
    constructor(ee = Promise.resolve()) {
        this.Yu = [],
            this.ec = !1,
            this.tc = [],
            this.nc = null,
            this.rc = !1,
            this.sc = !1,
            this.oc = [],
            this.M_ = new __PRIVATE_ExponentialBackoff(this, "async_queue_retry"),
            this._c = () => {
                const re = getDocument();
                re && __PRIVATE_logDebug(rn, "Visibility state changed to " + re.visibilityState),
                    this.M_.w_()
            }
            ,
            this.ac = ee;
        const te = getDocument();
        te && typeof te.addEventListener == "function" && te.addEventListener("visibilitychange", this._c)
    }
    get isShuttingDown() {
        return this.ec
    }
    enqueueAndForget(ee) {
        this.enqueue(ee)
    }
    enqueueAndForgetEvenWhileRestricted(ee) {
        this.uc(),
            this.cc(ee)
    }
    enterRestrictedMode(ee) {
        if (!this.ec) {
            this.ec = !0,
                this.sc = ee || !1;
            const te = getDocument();
            te && typeof te.removeEventListener == "function" && te.removeEventListener("visibilitychange", this._c)
        }
    }
    enqueue(ee) {
        if (this.uc(),
            this.ec)
            return new Promise(() => { }
            );
        const te = new __PRIVATE_Deferred;
        return this.cc(() => this.ec && this.sc ? Promise.resolve() : (ee().then(te.resolve, te.reject),
            te.promise)).then(() => te.promise)
    }
    enqueueRetryable(ee) {
        this.enqueueAndForget(() => (this.Yu.push(ee),
            this.lc()))
    }
    async lc() {
        if (this.Yu.length !== 0) {
            try {
                await this.Yu[0](),
                    this.Yu.shift(),
                    this.M_.reset()
            } catch (ee) {
                if (!__PRIVATE_isIndexedDbTransactionError(ee))
                    throw ee;
                __PRIVATE_logDebug(rn, "Operation failed with retryable error: " + ee)
            }
            this.Yu.length > 0 && this.M_.p_(() => this.lc())
        }
    }
    cc(ee) {
        const te = this.ac.then(() => (this.rc = !0,
            ee().catch(re => {
                throw this.nc = re,
                this.rc = !1,
                __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", __PRIVATE_getMessageOrStack(re)),
                re
            }
            ).then(re => (this.rc = !1,
                re))));
        return this.ac = te,
            te
    }
    enqueueAfterDelay(ee, te, re) {
        this.uc(),
            this.oc.indexOf(ee) > -1 && (te = 0);
        const ie = DelayedOperation.createAndSchedule(this, ee, te, re, se => this.hc(se));
        return this.tc.push(ie),
            ie
    }
    uc() {
        this.nc && fail(47125, {
            Pc: __PRIVATE_getMessageOrStack(this.nc)
        })
    }
    verifyOperationInProgress() { }
    async Tc() {
        let ee;
        do
            ee = this.ac,
                await ee;
        while (ee !== this.ac)
    }
    Ec(ee) {
        for (const te of this.tc)
            if (te.timerId === ee)
                return !0;
        return !1
    }
    Ic(ee) {
        return this.Tc().then(() => {
            this.tc.sort((te, re) => te.targetTimeMs - re.targetTimeMs);
            for (const te of this.tc)
                if (te.skipDelay(),
                    ee !== "all" && te.timerId === ee)
                    break;
            return this.Tc()
        }
        )
    }
    Rc(ee) {
        this.oc.push(ee)
    }
    hc(ee) {
        const te = this.tc.indexOf(ee);
        this.tc.splice(te, 1)
    }
}
function __PRIVATE_getMessageOrStack(ne) {
    let ee = ne.message || "";
    return ne.stack && (ee = ne.stack.includes(ne.message) ? ne.stack : ne.message + `
` + ne.stack),
        ee
}
class Firestore extends Firestore$1 {
    constructor(ee, te, re, ie) {
        super(ee, te, re, ie),
            this.type = "firestore",
            this._queue = new __PRIVATE_AsyncQueueImpl,
            this._persistenceKey = ie?.name || "[DEFAULT]"
    }
    async _terminate() {
        if (this._firestoreClient) {
            const ee = this._firestoreClient.terminate();
            this._queue = new __PRIVATE_AsyncQueueImpl(ee),
                this._firestoreClient = void 0,
                await ee
        }
    }
}
function initializeFirestore(ne, ee, te) {
    te || (te = it);
    const re = _getProvider(ne, "firestore");
    if (re.isInitialized(te)) {
        const ie = re.getImmediate({
            identifier: te
        })
            , se = re.getOptions(te);
        if (deepEqual(se, ee))
            return ie;
        throw new FirestoreError(D.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")
    }
    if (ee.cacheSizeBytes !== void 0 && ee.localCache !== void 0)
        throw new FirestoreError(D.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");
    if (ee.cacheSizeBytes !== void 0 && ee.cacheSizeBytes !== -1 && ee.cacheSizeBytes < Ct)
        throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
    return ee.host && isCloudWorkstation(ee.host) && pingServer(ee.host),
        re.initialize({
            options: ee,
            instanceIdentifier: te
        })
}
function getFirestore(ne, ee) {
    const te = getApp()
        , re = it
        , ie = _getProvider(te, "firestore").getImmediate({
            identifier: re
        });
    if (!ie._initialized) {
        const se = getDefaultEmulatorHostnameAndPort("firestore");
        se && connectFirestoreEmulator(ie, ...se)
    }
    return ie
}
function ensureFirestoreConfigured(ne) {
    if (ne._terminated)
        throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
    return ne._firestoreClient || __PRIVATE_configureFirestore(ne),
        ne._firestoreClient
}
function __PRIVATE_configureFirestore(ne) {
    const ee = ne._freezeSettings()
        , te = __PRIVATE_makeDatabaseInfo(ne._databaseId, ne._app?.options.appId || "", ne._persistenceKey, ne._app?.options.apiKey, ee);
    ne._componentsProvider || ee.localCache?._offlineComponentProvider && ee.localCache?._onlineComponentProvider && (ne._componentsProvider = {
        _offline: ee.localCache._offlineComponentProvider,
        _online: ee.localCache._onlineComponentProvider
    }),
        ne._firestoreClient = new FirestoreClient(ne._authCredentials, ne._appCheckCredentials, ne._queue, te, ne._componentsProvider && function (ie) {
            const se = ie?._online.build();
            return {
                _offline: ie?._offline.build(se),
                _online: se
            }
        }(ne._componentsProvider))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bytes {
    constructor(ee) {
        this._byteString = ee
    }
    static fromBase64String(ee) {
        try {
            return new Bytes(ByteString.fromBase64String(ee))
        } catch (te) {
            throw new FirestoreError(D.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + te)
        }
    }
    static fromUint8Array(ee) {
        return new Bytes(ByteString.fromUint8Array(ee))
    }
    toBase64() {
        return this._byteString.toBase64()
    }
    toUint8Array() {
        return this._byteString.toUint8Array()
    }
    toString() {
        return "Bytes(base64: " + this.toBase64() + ")"
    }
    isEqual(ee) {
        return this._byteString.isEqual(ee._byteString)
    }
    toJSON() {
        return {
            type: Bytes._jsonSchemaVersion,
            bytes: this.toBase64()
        }
    }
    static fromJSON(ee) {
        if (__PRIVATE_validateJSON(ee, Bytes._jsonSchema))
            return Bytes.fromBase64String(ee.bytes)
    }
}
Bytes._jsonSchemaVersion = "firestore/bytes/1.0",
    Bytes._jsonSchema = {
        type: property("string", Bytes._jsonSchemaVersion),
        bytes: property("string")
    };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FieldPath {
    constructor(...ee) {
        for (let te = 0; te < ee.length; ++te)
            if (ee[te].length === 0)
                throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new FieldPath$1(ee)
    }
    isEqual(ee) {
        return this._internalPath.isEqual(ee._internalPath)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FieldValue {
    constructor(ee) {
        this._methodName = ee
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GeoPoint {
    constructor(ee, te) {
        if (!isFinite(ee) || ee < -90 || ee > 90)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + ee);
        if (!isFinite(te) || te < -180 || te > 180)
            throw new FirestoreError(D.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + te);
        this._lat = ee,
            this._long = te
    }
    get latitude() {
        return this._lat
    }
    get longitude() {
        return this._long
    }
    isEqual(ee) {
        return this._lat === ee._lat && this._long === ee._long
    }
    _compareTo(ee) {
        return __PRIVATE_primitiveComparator(this._lat, ee._lat) || __PRIVATE_primitiveComparator(this._long, ee._long)
    }
    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long,
            type: GeoPoint._jsonSchemaVersion
        }
    }
    static fromJSON(ee) {
        if (__PRIVATE_validateJSON(ee, GeoPoint._jsonSchema))
            return new GeoPoint(ee.latitude, ee.longitude)
    }
}
GeoPoint._jsonSchemaVersion = "firestore/geoPoint/1.0",
    GeoPoint._jsonSchema = {
        type: property("string", GeoPoint._jsonSchemaVersion),
        latitude: property("number"),
        longitude: property("number")
    };
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class VectorValue {
    constructor(ee) {
        this._values = (ee || []).map(te => te)
    }
    toArray() {
        return this._values.map(ee => ee)
    }
    isEqual(ee) {
        return function (re, ie) {
            if (re.length !== ie.length)
                return !1;
            for (let se = 0; se < re.length; ++se)
                if (re[se] !== ie[se])
                    return !1;
            return !0
        }(this._values, ee._values)
    }
    toJSON() {
        return {
            type: VectorValue._jsonSchemaVersion,
            vectorValues: this._values
        }
    }
    static fromJSON(ee) {
        if (__PRIVATE_validateJSON(ee, VectorValue._jsonSchema)) {
            if (Array.isArray(ee.vectorValues) && ee.vectorValues.every(te => typeof te == "number"))
                return new VectorValue(ee.vectorValues);
            throw new FirestoreError(D.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array")
        }
    }
}
VectorValue._jsonSchemaVersion = "firestore/vectorValue/1.0",
    VectorValue._jsonSchema = {
        type: property("string", VectorValue._jsonSchemaVersion),
        vectorValues: property("object")
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on = /^__.*__$/;
class ParsedSetData {
    constructor(ee, te, re) {
        this.data = ee,
            this.fieldMask = te,
            this.fieldTransforms = re
    }
    toMutation(ee, te) {
        return this.fieldMask !== null ? new __PRIVATE_PatchMutation(ee, this.data, this.fieldMask, te, this.fieldTransforms) : new __PRIVATE_SetMutation(ee, this.data, te, this.fieldTransforms)
    }
}
class ParsedUpdateData {
    constructor(ee, te, re) {
        this.data = ee,
            this.fieldMask = te,
            this.fieldTransforms = re
    }
    toMutation(ee, te) {
        return new __PRIVATE_PatchMutation(ee, this.data, this.fieldMask, te, this.fieldTransforms)
    }
}
function __PRIVATE_isWrite(ne) {
    switch (ne) {
        case 0:
        case 2:
        case 1:
            return !0;
        case 3:
        case 4:
            return !1;
        default:
            throw fail(40011, {
                dataSource: ne
            })
    }
}
class __PRIVATE_ParseContextImpl {
    constructor(ee, te, re, ie, se, ae) {
        this.settings = ee,
            this.databaseId = te,
            this.serializer = re,
            this.ignoreUndefinedProperties = ie,
            se === void 0 && this.Ac(),
            this.fieldTransforms = se || [],
            this.fieldMask = ae || []
    }
    get path() {
        return this.settings.path
    }
    get dataSource() {
        return this.settings.dataSource
    }
    i(ee) {
        return new __PRIVATE_ParseContextImpl({
            ...this.settings,
            ...ee
        }, this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
    }
    dc(ee) {
        const te = this.path?.child(ee)
            , re = this.i({
                path: te,
                arrayElement: !1
            });
        return re.mc(ee),
            re
    }
    fc(ee) {
        const te = this.path?.child(ee)
            , re = this.i({
                path: te,
                arrayElement: !1
            });
        return re.Ac(),
            re
    }
    gc(ee) {
        return this.i({
            path: void 0,
            arrayElement: !0
        })
    }
    yc(ee) {
        return __PRIVATE_createError(ee, this.settings.methodName, this.settings.hasConverter || !1, this.path, this.settings.targetDoc)
    }
    contains(ee) {
        return this.fieldMask.find(te => ee.isPrefixOf(te)) !== void 0 || this.fieldTransforms.find(te => ee.isPrefixOf(te.field)) !== void 0
    }
    Ac() {
        if (this.path)
            for (let ee = 0; ee < this.path.length; ee++)
                this.mc(this.path.get(ee))
    }
    mc(ee) {
        if (ee.length === 0)
            throw this.yc("Document fields must not be empty");
        if (__PRIVATE_isWrite(this.dataSource) && on.test(ee))
            throw this.yc('Document fields cannot begin and end with "__"')
    }
}
class __PRIVATE_UserDataReader {
    constructor(ee, te, re) {
        this.databaseId = ee,
            this.ignoreUndefinedProperties = te,
            this.serializer = re || __PRIVATE_newSerializer(ee)
    }
    A(ee, te, re, ie = !1) {
        return new __PRIVATE_ParseContextImpl({
            dataSource: ee,
            methodName: te,
            targetDoc: re,
            path: FieldPath$1.emptyPath(),
            arrayElement: !1,
            hasConverter: ie
        }, this.databaseId, this.serializer, this.ignoreUndefinedProperties)
    }
}
function __PRIVATE_newUserDataReader(ne) {
    const ee = ne._freezeSettings()
        , te = __PRIVATE_newSerializer(ne._databaseId);
    return new __PRIVATE_UserDataReader(ne._databaseId, !!ee.ignoreUndefinedProperties, te)
}
function __PRIVATE_parseSetData(ne, ee, te, re, ie, se = {}) {
    const ae = ne.A(se.merge || se.mergeFields ? 2 : 0, ee, te, ie);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", ae, re);
    const ce = __PRIVATE_parseObject(re, ae);
    let le, he;
    if (se.merge)
        le = new FieldMask(ae.fieldMask),
            he = ae.fieldTransforms;
    else if (se.mergeFields) {
        const de = [];
        for (const fe of se.mergeFields) {
            const Re = __PRIVATE_fieldPathFromArgument(ee, fe, te);
            if (!ae.contains(Re))
                throw new FirestoreError(D.INVALID_ARGUMENT, `Field '${Re}' is specified in your field mask but missing from your input data.`);
            __PRIVATE_fieldMaskContains(de, Re) || de.push(Re)
        }
        le = new FieldMask(de),
            he = ae.fieldTransforms.filter(fe => le.covers(fe.field))
    } else
        le = null,
            he = ae.fieldTransforms;
    return new ParsedSetData(new ObjectValue(ce), le, he)
}
class __PRIVATE_DeleteFieldValueImpl extends FieldValue {
    _toFieldTransform(ee) {
        if (ee.dataSource !== 2)
            throw ee.dataSource === 1 ? ee.yc(`${this._methodName}() can only appear at the top level of your update data`) : ee.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
        return ee.fieldMask.push(ee.path),
            null
    }
    isEqual(ee) {
        return ee instanceof __PRIVATE_DeleteFieldValueImpl
    }
}
function __PRIVATE_parseUpdateData(ne, ee, te, re) {
    const ie = ne.A(1, ee, te);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", ie, re);
    const se = []
        , ae = ObjectValue.empty();
    forEach(re, (le, he) => {
        const de = __PRIVATE_fieldPathFromDotSeparatedString(ee, le, te);
        he = getModularInstance(he);
        const fe = ie.fc(de);
        if (he instanceof __PRIVATE_DeleteFieldValueImpl)
            se.push(de);
        else {
            const Re = __PRIVATE_parseData(he, fe);
            Re != null && (se.push(de),
                ae.set(de, Re))
        }
    }
    );
    const ce = new FieldMask(se);
    return new ParsedUpdateData(ae, ce, ie.fieldTransforms)
}
function __PRIVATE_parseUpdateVarargs(ne, ee, te, re, ie, se) {
    const ae = ne.A(1, ee, te)
        , ce = [__PRIVATE_fieldPathFromArgument(ee, re, te)]
        , le = [ie];
    if (se.length % 2 != 0)
        throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${ee}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let Re = 0; Re < se.length; Re += 2)
        ce.push(__PRIVATE_fieldPathFromArgument(ee, se[Re])),
            le.push(se[Re + 1]);
    const he = []
        , de = ObjectValue.empty();
    for (let Re = ce.length - 1; Re >= 0; --Re)
        if (!__PRIVATE_fieldMaskContains(he, ce[Re])) {
            const Pe = ce[Re];
            let we = le[Re];
            we = getModularInstance(we);
            const Se = ae.fc(Pe);
            if (we instanceof __PRIVATE_DeleteFieldValueImpl)
                he.push(Pe);
            else {
                const be = __PRIVATE_parseData(we, Se);
                be != null && (he.push(Pe),
                    de.set(Pe, be))
            }
        }
    const fe = new FieldMask(he);
    return new ParsedUpdateData(de, fe, ae.fieldTransforms)
}
function __PRIVATE_parseQueryValue(ne, ee, te, re = !1) {
    return __PRIVATE_parseData(te, ne.A(re ? 4 : 3, ee))
}
function __PRIVATE_parseData(ne, ee) {
    if (__PRIVATE_looksLikeJsonObject(ne = getModularInstance(ne)))
        return __PRIVATE_validatePlainObject("Unsupported field value:", ee, ne),
            __PRIVATE_parseObject(ne, ee);
    if (ne instanceof FieldValue)
        return function (re, ie) {
            if (!__PRIVATE_isWrite(ie.dataSource))
                throw ie.yc(`${re._methodName}() can only be used with update() and set()`);
            if (!ie.path)
                throw ie.yc(`${re._methodName}() is not currently supported inside arrays`);
            const se = re._toFieldTransform(ie);
            se && ie.fieldTransforms.push(se)
        }(ne, ee),
            null;
    if (ne === void 0 && ee.ignoreUndefinedProperties)
        return null;
    if (ee.path && ee.fieldMask.push(ee.path),
        ne instanceof Array) {
        if (ee.settings.arrayElement && ee.dataSource !== 4)
            throw ee.yc("Nested arrays are not supported");
        return function (re, ie) {
            const se = [];
            let ae = 0;
            for (const ce of re) {
                let le = __PRIVATE_parseData(ce, ie.gc(ae));
                le == null && (le = {
                    nullValue: "NULL_VALUE"
                }),
                    se.push(le),
                    ae++
            }
            return {
                arrayValue: {
                    values: se
                }
            }
        }(ne, ee)
    }
    return function (re, ie) {
        if ((re = getModularInstance(re)) === null)
            return {
                nullValue: "NULL_VALUE"
            };
        if (typeof re == "number")
            return toNumber(ie.serializer, re);
        if (typeof re == "boolean")
            return {
                booleanValue: re
            };
        if (typeof re == "string")
            return {
                stringValue: re
            };
        if (re instanceof Date) {
            const se = Timestamp.fromDate(re);
            return {
                timestampValue: toTimestamp(ie.serializer, se)
            }
        }
        if (re instanceof Timestamp) {
            const se = new Timestamp(re.seconds, 1e3 * Math.floor(re.nanoseconds / 1e3));
            return {
                timestampValue: toTimestamp(ie.serializer, se)
            }
        }
        if (re instanceof GeoPoint)
            return {
                geoPointValue: {
                    latitude: re.latitude,
                    longitude: re.longitude
                }
            };
        if (re instanceof Bytes)
            return {
                bytesValue: __PRIVATE_toBytes(ie.serializer, re._byteString)
            };
        if (re instanceof DocumentReference) {
            const se = ie.databaseId
                , ae = re.firestore._databaseId;
            if (!ae.isEqual(se))
                throw ie.yc(`Document reference is for database ${ae.projectId}/${ae.database} but should be for database ${se.projectId}/${se.database}`);
            return {
                referenceValue: __PRIVATE_toResourceName(re.firestore._databaseId || ie.databaseId, re._key.path)
            }
        }
        if (re instanceof VectorValue)
            return function (ae, ce) {
                const le = ae instanceof VectorValue ? ae.toArray() : ae;
                return {
                    mapValue: {
                        fields: {
                            [st]: {
                                stringValue: at
                            },
                            [ut]: {
                                arrayValue: {
                                    values: le.map(de => {
                                        if (typeof de != "number")
                                            throw ce.yc("VectorValues must only contain numeric values.");
                                        return __PRIVATE_toDouble(ce.serializer, de)
                                    }
                                    )
                                }
                            }
                        }
                    }
                }
            }(re, ie);
        if (__PRIVATE_isProtoValueSerializable(re))
            return re._toProto(ie.serializer);
        throw ie.yc(`Unsupported field value: ${__PRIVATE_valueDescription(re)}`)
    }(ne, ee)
}
function __PRIVATE_parseObject(ne, ee) {
    const te = {};
    return isEmpty(ne) ? ee.path && ee.path.length > 0 && ee.fieldMask.push(ee.path) : forEach(ne, (re, ie) => {
        const se = __PRIVATE_parseData(ie, ee.dc(re));
        se != null && (te[re] = se)
    }
    ),
    {
        mapValue: {
            fields: te
        }
    }
}
function __PRIVATE_looksLikeJsonObject(ne) {
    return !(typeof ne != "object" || ne === null || ne instanceof Array || ne instanceof Date || ne instanceof Timestamp || ne instanceof GeoPoint || ne instanceof Bytes || ne instanceof DocumentReference || ne instanceof FieldValue || ne instanceof VectorValue || __PRIVATE_isProtoValueSerializable(ne))
}
function __PRIVATE_validatePlainObject(ne, ee, te) {
    if (!__PRIVATE_looksLikeJsonObject(te) || !__PRIVATE_isPlainObject(te)) {
        const re = __PRIVATE_valueDescription(te);
        throw re === "an object" ? ee.yc(ne + " a custom object") : ee.yc(ne + " " + re)
    }
}
function __PRIVATE_fieldPathFromArgument(ne, ee, te) {
    if ((ee = getModularInstance(ee)) instanceof FieldPath)
        return ee._internalPath;
    if (typeof ee == "string")
        return __PRIVATE_fieldPathFromDotSeparatedString(ne, ee);
    throw __PRIVATE_createError("Field path arguments must be of type string or ", ne, !1, void 0, te)
}
const _n = new RegExp("[~\\*/\\[\\]]");
function __PRIVATE_fieldPathFromDotSeparatedString(ne, ee, te) {
    if (ee.search(_n) >= 0)
        throw __PRIVATE_createError(`Invalid field path (${ee}). Paths must not contain '~', '*', '/', '[', or ']'`, ne, !1, void 0, te);
    try {
        return new FieldPath(...ee.split("."))._internalPath
    } catch {
        throw __PRIVATE_createError(`Invalid field path (${ee}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, ne, !1, void 0, te)
    }
}
function __PRIVATE_createError(ne, ee, te, re, ie) {
    const se = re && !re.isEmpty()
        , ae = ie !== void 0;
    let ce = `Function ${ee}() called with invalid data`;
    te && (ce += " (via `toFirestore()`)"),
        ce += ". ";
    let le = "";
    return (se || ae) && (le += " (found",
        se && (le += ` in field ${re}`),
        ae && (le += ` in document ${ie}`),
        le += ")"),
        new FirestoreError(D.INVALID_ARGUMENT, ce + ne + le)
}
function __PRIVATE_fieldMaskContains(ne, ee) {
    return ne.some(te => te.isEqual(ee))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AbstractUserDataWriter {
    convertValue(ee, te = "none") {
        switch (__PRIVATE_typeOrder(ee)) {
            case 0:
                return null;
            case 1:
                return ee.booleanValue;
            case 2:
                return __PRIVATE_normalizeNumber(ee.integerValue || ee.doubleValue);
            case 3:
                return this.convertTimestamp(ee.timestampValue);
            case 4:
                return this.convertServerTimestamp(ee, te);
            case 5:
                return ee.stringValue;
            case 6:
                return this.convertBytes(__PRIVATE_normalizeByteString(ee.bytesValue));
            case 7:
                return this.convertReference(ee.referenceValue);
            case 8:
                return this.convertGeoPoint(ee.geoPointValue);
            case 9:
                return this.convertArray(ee.arrayValue, te);
            case 11:
                return this.convertObject(ee.mapValue, te);
            case 10:
                return this.convertVectorValue(ee.mapValue);
            default:
                throw fail(62114, {
                    value: ee
                })
        }
    }
    convertObject(ee, te) {
        return this.convertObjectMap(ee.fields, te)
    }
    convertObjectMap(ee, te = "none") {
        const re = {};
        return forEach(ee, (ie, se) => {
            re[ie] = this.convertValue(se, te)
        }
        ),
            re
    }
    convertVectorValue(ee) {
        const te = ee.fields?.[ut].arrayValue?.values?.map(re => __PRIVATE_normalizeNumber(re.doubleValue));
        return new VectorValue(te)
    }
    convertGeoPoint(ee) {
        return new GeoPoint(__PRIVATE_normalizeNumber(ee.latitude), __PRIVATE_normalizeNumber(ee.longitude))
    }
    convertArray(ee, te) {
        return (ee.values || []).map(re => this.convertValue(re, te))
    }
    convertServerTimestamp(ee, te) {
        switch (te) {
            case "previous":
                const re = __PRIVATE_getPreviousValue(ee);
                return re == null ? null : this.convertValue(re, te);
            case "estimate":
                return this.convertTimestamp(__PRIVATE_getLocalWriteTime(ee));
            default:
                return null
        }
    }
    convertTimestamp(ee) {
        const te = __PRIVATE_normalizeTimestamp(ee);
        return new Timestamp(te.seconds, te.nanos)
    }
    convertDocumentKey(ee, te) {
        const re = ResourcePath.fromString(ee);
        __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(re), 9688, {
            name: ee
        });
        const ie = new DatabaseId(re.get(1), re.get(3))
            , se = new DocumentKey(re.popFirst(5));
        return ie.isEqual(te) || __PRIVATE_logError(`Document ${se} contains a document reference within a different database (${ie.projectId}/${ie.database}) which is not supported. It will be treated as a reference in the current database (${te.projectId}/${te.database}) instead.`),
            se
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter {
    constructor(ee) {
        super(),
            this.firestore = ee
    }
    convertBytes(ee) {
        return new Bytes(ee)
    }
    convertReference(ee) {
        const te = this.convertDocumentKey(ee, this.firestore._databaseId);
        return new DocumentReference(this.firestore, null, te)
    }
}
const Ut = "@firebase/firestore"
    , Ht = "4.13.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_isPartialObserver(ne) {
    return function (te, re) {
        if (typeof te != "object" || te === null)
            return !1;
        const ie = te;
        for (const se of re)
            if (se in ie && typeof ie[se] == "function")
                return !0;
        return !1
    }(ne, ["next", "error", "complete"])
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DocumentSnapshot$1 {
    constructor(ee, te, re, ie, se) {
        this._firestore = ee,
            this._userDataWriter = te,
            this._key = re,
            this._document = ie,
            this._converter = se
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get ref() {
        return new DocumentReference(this._firestore, this._converter, this._key)
    }
    exists() {
        return this._document !== null
    }
    data() {
        if (this._document) {
            if (this._converter) {
                const ee = new QueryDocumentSnapshot$1(this._firestore, this._userDataWriter, this._key, this._document, null);
                return this._converter.fromFirestore(ee)
            }
            return this._userDataWriter.convertValue(this._document.data.value)
        }
    }
    _fieldsProto() {
        return this._document?.data.clone().value.mapValue.fields ?? void 0
    }
    get(ee) {
        if (this._document) {
            const te = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", ee));
            if (te !== null)
                return this._userDataWriter.convertValue(te)
        }
    }
}
class QueryDocumentSnapshot$1 extends DocumentSnapshot$1 {
    data() {
        return super.data()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __PRIVATE_validateHasExplicitOrderByForLimitToLast(ne) {
    if (ne.limitType === "L" && ne.explicitOrderBy.length === 0)
        throw new FirestoreError(D.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
}
class AppliableConstraint {
}
class QueryConstraint extends AppliableConstraint {
}
function query(ne, ee, ...te) {
    let re = [];
    ee instanceof AppliableConstraint && re.push(ee),
        re = re.concat(te),
        function (se) {
            const ae = se.filter(le => le instanceof QueryCompositeFilterConstraint).length
                , ce = se.filter(le => le instanceof QueryFieldFilterConstraint).length;
            if (ae > 1 || ae > 0 && ce > 0)
                throw new FirestoreError(D.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")
        }(re);
    for (const ie of re)
        ne = ie._apply(ne);
    return ne
}
class QueryFieldFilterConstraint extends QueryConstraint {
    constructor(ee, te, re) {
        super(),
            this._field = ee,
            this._op = te,
            this._value = re,
            this.type = "where"
    }
    static _create(ee, te, re) {
        return new QueryFieldFilterConstraint(ee, te, re)
    }
    _apply(ee) {
        const te = this._parse(ee);
        return __PRIVATE_validateNewFieldFilter(ee._query, te),
            new Query(ee.firestore, ee.converter, __PRIVATE_queryWithAddedFilter(ee._query, te))
    }
    _parse(ee) {
        const te = __PRIVATE_newUserDataReader(ee.firestore);
        return function (se, ae, ce, le, he, de, fe) {
            let Re;
            if (he.isKeyField()) {
                if (de === "array-contains" || de === "array-contains-any")
                    throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid Query. You can't perform '${de}' queries on documentId().`);
                if (de === "in" || de === "not-in") {
                    __PRIVATE_validateDisjunctiveFilterElements(fe, de);
                    const we = [];
                    for (const Se of fe)
                        we.push(__PRIVATE_parseDocumentIdValue(le, se, Se));
                    Re = {
                        arrayValue: {
                            values: we
                        }
                    }
                } else
                    Re = __PRIVATE_parseDocumentIdValue(le, se, fe)
            } else
                de !== "in" && de !== "not-in" && de !== "array-contains-any" || __PRIVATE_validateDisjunctiveFilterElements(fe, de),
                    Re = __PRIVATE_parseQueryValue(ce, ae, fe, de === "in" || de === "not-in");
            return FieldFilter.create(he, de, Re)
        }(ee._query, "where", te, ee.firestore._databaseId, this._field, this._op, this._value)
    }
}
class QueryCompositeFilterConstraint extends AppliableConstraint {
    constructor(ee, te) {
        super(),
            this.type = ee,
            this._queryConstraints = te
    }
    static _create(ee, te) {
        return new QueryCompositeFilterConstraint(ee, te)
    }
    _parse(ee) {
        const te = this._queryConstraints.map(re => re._parse(ee)).filter(re => re.getFilters().length > 0);
        return te.length === 1 ? te[0] : CompositeFilter.create(te, this._getOperator())
    }
    _apply(ee) {
        const te = this._parse(ee);
        return te.getFilters().length === 0 ? ee : (function (ie, se) {
            let ae = ie;
            const ce = se.getFlattenedFilters();
            for (const le of ce)
                __PRIVATE_validateNewFieldFilter(ae, le),
                    ae = __PRIVATE_queryWithAddedFilter(ae, le)
        }(ee._query, te),
            new Query(ee.firestore, ee.converter, __PRIVATE_queryWithAddedFilter(ee._query, te)))
    }
    _getQueryConstraints() {
        return this._queryConstraints
    }
    _getOperator() {
        return this.type === "and" ? "and" : "or"
    }
}
class QueryOrderByConstraint extends QueryConstraint {
    constructor(ee, te) {
        super(),
            this._field = ee,
            this._direction = te,
            this.type = "orderBy"
    }
    static _create(ee, te) {
        return new QueryOrderByConstraint(ee, te)
    }
    _apply(ee) {
        const te = function (ie, se, ae) {
            if (ie.startAt !== null)
                throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (ie.endAt !== null)
                throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            return new OrderBy(se, ae)
        }(ee._query, this._field, this._direction);
        return new Query(ee.firestore, ee.converter, __PRIVATE_queryWithAddedOrderBy(ee._query, te))
    }
}
function orderBy(ne, ee = "asc") {
    const te = ee
        , re = __PRIVATE_fieldPathFromArgument("orderBy", ne);
    return QueryOrderByConstraint._create(re, te)
}
function __PRIVATE_parseDocumentIdValue(ne, ee, te) {
    if (typeof (te = getModularInstance(te)) == "string") {
        if (te === "")
            throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!__PRIVATE_isCollectionGroupQuery(ee) && te.indexOf("/") !== -1)
            throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${te}' contains a '/' character.`);
        const re = ee.path.child(ResourcePath.fromString(te));
        if (!DocumentKey.isDocumentKey(re))
            throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${re}' is not because it has an odd number of segments (${re.length}).`);
        return __PRIVATE_refValue(ne, new DocumentKey(re))
    }
    if (te instanceof DocumentReference)
        return __PRIVATE_refValue(ne, te._key);
    throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(te)}.`)
}
function __PRIVATE_validateDisjunctiveFilterElements(ne, ee) {
    if (!Array.isArray(ne) || ne.length === 0)
        throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${ee.toString()}' filters.`)
}
function __PRIVATE_validateNewFieldFilter(ne, ee) {
    const te = function (ie, se) {
        for (const ae of ie)
            for (const ce of ae.getFlattenedFilters())
                if (se.indexOf(ce.op) >= 0)
                    return ce.op;
        return null
    }(ne.filters, function (ie) {
        switch (ie) {
            case "!=":
                return ["!=", "not-in"];
            case "array-contains-any":
            case "in":
                return ["not-in"];
            case "not-in":
                return ["array-contains-any", "in", "not-in", "!="];
            default:
                return []
        }
    }(ee.op));
    if (te !== null)
        throw te === ee.op ? new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${ee.op.toString()}' filter.`) : new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You cannot use '${ee.op.toString()}' filters with '${te.toString()}' filters.`)
}
function __PRIVATE_applyFirestoreDataConverter(ne, ee, te) {
    let re;
    return re = ne ? te && (te.merge || te.mergeFields) ? ne.toFirestore(ee, te) : ne.toFirestore(ee) : ee,
        re
}
class SnapshotMetadata {
    constructor(ee, te) {
        this.hasPendingWrites = ee,
            this.fromCache = te
    }
    isEqual(ee) {
        return this.hasPendingWrites === ee.hasPendingWrites && this.fromCache === ee.fromCache
    }
}
class DocumentSnapshot extends DocumentSnapshot$1 {
    constructor(ee, te, re, ie, se, ae) {
        super(ee, te, re, ie, ae),
            this._firestore = ee,
            this._firestoreImpl = ee,
            this.metadata = se
    }
    exists() {
        return super.exists()
    }
    data(ee = {}) {
        if (this._document) {
            if (this._converter) {
                const te = new QueryDocumentSnapshot(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                return this._converter.fromFirestore(te, ee)
            }
            return this._userDataWriter.convertValue(this._document.data.value, ee.serverTimestamps)
        }
    }
    get(ee, te = {}) {
        if (this._document) {
            const re = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", ee));
            if (re !== null)
                return this._userDataWriter.convertValue(re, te.serverTimestamps)
        }
    }
    toJSON() {
        if (this.metadata.hasPendingWrites)
            throw new FirestoreError(D.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
        const ee = this._document
            , te = {};
        return te.type = DocumentSnapshot._jsonSchemaVersion,
            te.bundle = "",
            te.bundleSource = "DocumentSnapshot",
            te.bundleName = this._key.toString(),
            !ee || !ee.isValidDocument() || !ee.isFoundDocument() ? te : (this._userDataWriter.convertObjectMap(ee.data.value.mapValue.fields, "previous"),
                te.bundle = (this._firestore,
                    this.ref.path,
                    "NOT SUPPORTED"),
                te)
    }
}
DocumentSnapshot._jsonSchemaVersion = "firestore/documentSnapshot/1.0",
    DocumentSnapshot._jsonSchema = {
        type: property("string", DocumentSnapshot._jsonSchemaVersion),
        bundleSource: property("string", "DocumentSnapshot"),
        bundleName: property("string"),
        bundle: property("string")
    };
class QueryDocumentSnapshot extends DocumentSnapshot {
    data(ee = {}) {
        return super.data(ee)
    }
}
class QuerySnapshot {
    constructor(ee, te, re, ie) {
        this._firestore = ee,
            this._userDataWriter = te,
            this._snapshot = ie,
            this.metadata = new SnapshotMetadata(ie.hasPendingWrites, ie.fromCache),
            this.query = re
    }
    get docs() {
        const ee = [];
        return this.forEach(te => ee.push(te)),
            ee
    }
    get size() {
        return this._snapshot.docs.size
    }
    get empty() {
        return this.size === 0
    }
    forEach(ee, te) {
        this._snapshot.docs.forEach(re => {
            ee.call(te, new QueryDocumentSnapshot(this._firestore, this._userDataWriter, re.key, re, new SnapshotMetadata(this._snapshot.mutatedKeys.has(re.key), this._snapshot.fromCache), this.query.converter))
        }
        )
    }
    docChanges(ee = {}) {
        const te = !!ee.includeMetadataChanges;
        if (te && this._snapshot.excludesMetadataChanges)
            throw new FirestoreError(D.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === te || (this._cachedChanges = function (ie, se) {
            if (ie._snapshot.oldDocs.isEmpty()) {
                let ae = 0;
                return ie._snapshot.docChanges.map(ce => {
                    const le = new QueryDocumentSnapshot(ie._firestore, ie._userDataWriter, ce.doc.key, ce.doc, new SnapshotMetadata(ie._snapshot.mutatedKeys.has(ce.doc.key), ie._snapshot.fromCache), ie.query.converter);
                    return ce.doc,
                    {
                        type: "added",
                        doc: le,
                        oldIndex: -1,
                        newIndex: ae++
                    }
                }
                )
            }
            {
                let ae = ie._snapshot.oldDocs;
                return ie._snapshot.docChanges.filter(ce => se || ce.type !== 3).map(ce => {
                    const le = new QueryDocumentSnapshot(ie._firestore, ie._userDataWriter, ce.doc.key, ce.doc, new SnapshotMetadata(ie._snapshot.mutatedKeys.has(ce.doc.key), ie._snapshot.fromCache), ie.query.converter);
                    let he = -1
                        , de = -1;
                    return ce.type !== 0 && (he = ae.indexOf(ce.doc.key),
                        ae = ae.delete(ce.doc.key)),
                        ce.type !== 1 && (ae = ae.add(ce.doc),
                            de = ae.indexOf(ce.doc.key)),
                    {
                        type: __PRIVATE_resultChangeType(ce.type),
                        doc: le,
                        oldIndex: he,
                        newIndex: de
                    }
                }
                )
            }
        }(this, te),
            this._cachedChangesIncludeMetadataChanges = te),
            this._cachedChanges
    }
    toJSON() {
        if (this.metadata.hasPendingWrites)
            throw new FirestoreError(D.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
        const ee = {};
        ee.type = QuerySnapshot._jsonSchemaVersion,
            ee.bundleSource = "QuerySnapshot",
            ee.bundleName = __PRIVATE_AutoId.newId(),
            this._firestore._databaseId.database,
            this._firestore._databaseId.projectId;
        const te = []
            , re = []
            , ie = [];
        return this.docs.forEach(se => {
            se._document !== null && (te.push(se._document),
                re.push(this._userDataWriter.convertObjectMap(se._document.data.value.mapValue.fields, "previous")),
                ie.push(se.ref.path))
        }
        ),
            ee.bundle = (this._firestore,
                this.query._query,
                ee.bundleName,
                "NOT SUPPORTED"),
            ee
    }
}
function __PRIVATE_resultChangeType(ne) {
    switch (ne) {
        case 0:
            return "added";
        case 2:
        case 3:
            return "modified";
        case 1:
            return "removed";
        default:
            return fail(61501, {
                type: ne
            })
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
QuerySnapshot._jsonSchemaVersion = "firestore/querySnapshot/1.0",
    QuerySnapshot._jsonSchema = {
        type: property("string", QuerySnapshot._jsonSchemaVersion),
        bundleSource: property("string", "QuerySnapshot"),
        bundleName: property("string"),
        bundle: property("string")
    };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class WriteBatch {
    constructor(ee, te) {
        this._firestore = ee,
            this._commitHandler = te,
            this._mutations = [],
            this._committed = !1,
            this._dataReader = __PRIVATE_newUserDataReader(ee)
    }
    set(ee, te, re) {
        this._verifyNotCommitted();
        const ie = __PRIVATE_validateReference(ee, this._firestore)
            , se = __PRIVATE_applyFirestoreDataConverter(ie.converter, te, re)
            , ae = __PRIVATE_parseSetData(this._dataReader, "WriteBatch.set", ie._key, se, ie.converter !== null, re);
        return this._mutations.push(ae.toMutation(ie._key, Precondition.none())),
            this
    }
    update(ee, te, re, ...ie) {
        this._verifyNotCommitted();
        const se = __PRIVATE_validateReference(ee, this._firestore);
        let ae;
        return ae = typeof (te = getModularInstance(te)) == "string" || te instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "WriteBatch.update", se._key, te, re, ie) : __PRIVATE_parseUpdateData(this._dataReader, "WriteBatch.update", se._key, te),
            this._mutations.push(ae.toMutation(se._key, Precondition.exists(!0))),
            this
    }
    delete(ee) {
        this._verifyNotCommitted();
        const te = __PRIVATE_validateReference(ee, this._firestore);
        return this._mutations = this._mutations.concat(new __PRIVATE_DeleteMutation(te._key, Precondition.none())),
            this
    }
    commit() {
        return this._verifyNotCommitted(),
            this._committed = !0,
            this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve()
    }
    _verifyNotCommitted() {
        if (this._committed)
            throw new FirestoreError(D.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
    }
}
function __PRIVATE_validateReference(ne, ee) {
    if ((ne = getModularInstance(ne)).firestore !== ee)
        throw new FirestoreError(D.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return ne
}
function onSnapshot(ne, ...ee) {
    ne = getModularInstance(ne);
    let te = {
        includeMetadataChanges: !1,
        source: "default"
    }
        , re = 0;
    typeof ee[re] != "object" || __PRIVATE_isPartialObserver(ee[re]) || (te = ee[re++]);
    const ie = {
        includeMetadataChanges: te.includeMetadataChanges,
        source: te.source
    };
    if (__PRIVATE_isPartialObserver(ee[re])) {
        const he = ee[re];
        ee[re] = he.next?.bind(he),
            ee[re + 1] = he.error?.bind(he),
            ee[re + 2] = he.complete?.bind(he)
    }
    let se, ae, ce;
    if (ne instanceof DocumentReference)
        ae = __PRIVATE_cast(ne.firestore, Firestore),
            ce = __PRIVATE_newQueryForPath(ne._key.path),
            se = {
                next: he => {
                    ee[re] && ee[re](__PRIVATE_convertToDocSnapshot(ae, ne, he))
                }
                ,
                error: ee[re + 1],
                complete: ee[re + 2]
            };
    else {
        const he = __PRIVATE_cast(ne, Query);
        ae = __PRIVATE_cast(he.firestore, Firestore),
            ce = he._query;
        const de = new __PRIVATE_ExpUserDataWriter(ae);
        se = {
            next: fe => {
                ee[re] && ee[re](new QuerySnapshot(ae, de, he, fe))
            }
            ,
            error: ee[re + 1],
            complete: ee[re + 2]
        },
            __PRIVATE_validateHasExplicitOrderByForLimitToLast(ne._query)
    }
    const le = ensureFirestoreConfigured(ae);
    return __PRIVATE_firestoreClientListen(le, ce, ie, se)
}
function executeWrite(ne, ee) {
    const te = ensureFirestoreConfigured(ne);
    return __PRIVATE_firestoreClientWrite(te, ee)
}
function __PRIVATE_convertToDocSnapshot(ne, ee, te) {
    const re = te.docs.get(ee._key)
        , ie = new __PRIVATE_ExpUserDataWriter(ne);
    return new DocumentSnapshot(ne, ie, ee._key, re, new SnapshotMetadata(te.hasPendingWrites, te.fromCache), ee.converter)
}
function writeBatch(ne) {
    return ne = __PRIVATE_cast(ne, Firestore),
        ensureFirestoreConfigured(ne),
        new WriteBatch(ne, ee => executeWrite(ne, ee))
}
(function ne(ee, te = !0) {
    __PRIVATE_setSDKVersion(SDK_VERSION),
        _registerComponent(new Component("firestore", (re, { instanceIdentifier: ie, options: se }) => {
            const ae = re.getProvider("app").getImmediate()
                , ce = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(re.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(ae, re.getProvider("app-check-internal")), __PRIVATE_databaseIdFromApp(ae, ie), ae);
            return se = {
                useFetchStreams: te,
                ...se
            },
                ce._setSettings(se),
                ce
        }
            , "PUBLIC").setMultipleInstances(!0)),
        registerVersion(Ut, Ht, ee),
        registerVersion(Ut, Ht, "esm2020")
}
)();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_HOST = "firebasestorage.googleapis.com"
    , CONFIG_STORAGE_BUCKET_KEY = "storageBucket"
    , DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3
    , DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class StorageError extends FirebaseError {
    constructor(ee, te, re = 0) {
        super(prependCode(ee), `Firebase Storage: ${te} (${prependCode(ee)})`),
            this.status_ = re,
            this.customData = {
                serverResponse: null
            },
            this._baseMessage = this.message,
            Object.setPrototypeOf(this, StorageError.prototype)
    }
    get status() {
        return this.status_
    }
    set status(ee) {
        this.status_ = ee
    }
    _codeEquals(ee) {
        return prependCode(ee) === this.code
    }
    get serverResponse() {
        return this.customData.serverResponse
    }
    set serverResponse(ee) {
        this.customData.serverResponse = ee,
            this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage
    }
}
var StorageErrorCode;
(function (ne) {
    ne.UNKNOWN = "unknown",
        ne.OBJECT_NOT_FOUND = "object-not-found",
        ne.BUCKET_NOT_FOUND = "bucket-not-found",
        ne.PROJECT_NOT_FOUND = "project-not-found",
        ne.QUOTA_EXCEEDED = "quota-exceeded",
        ne.UNAUTHENTICATED = "unauthenticated",
        ne.UNAUTHORIZED = "unauthorized",
        ne.UNAUTHORIZED_APP = "unauthorized-app",
        ne.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded",
        ne.INVALID_CHECKSUM = "invalid-checksum",
        ne.CANCELED = "canceled",
        ne.INVALID_EVENT_NAME = "invalid-event-name",
        ne.INVALID_URL = "invalid-url",
        ne.INVALID_DEFAULT_BUCKET = "invalid-default-bucket",
        ne.NO_DEFAULT_BUCKET = "no-default-bucket",
        ne.CANNOT_SLICE_BLOB = "cannot-slice-blob",
        ne.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size",
        ne.NO_DOWNLOAD_URL = "no-download-url",
        ne.INVALID_ARGUMENT = "invalid-argument",
        ne.INVALID_ARGUMENT_COUNT = "invalid-argument-count",
        ne.APP_DELETED = "app-deleted",
        ne.INVALID_ROOT_OPERATION = "invalid-root-operation",
        ne.INVALID_FORMAT = "invalid-format",
        ne.INTERNAL_ERROR = "internal-error",
        ne.UNSUPPORTED_ENVIRONMENT = "unsupported-environment"
}
)(StorageErrorCode || (StorageErrorCode = {}));
function prependCode(ne) {
    return "storage/" + ne
}
function unknown() {
    const ne = "An unknown error occurred, please check the error payload for server response.";
    return new StorageError(StorageErrorCode.UNKNOWN, ne)
}
function objectNotFound(ne) {
    return new StorageError(StorageErrorCode.OBJECT_NOT_FOUND, "Object '" + ne + "' does not exist.")
}
function quotaExceeded(ne) {
    return new StorageError(StorageErrorCode.QUOTA_EXCEEDED, "Quota for bucket '" + ne + "' exceeded, please view quota on https://firebase.google.com/pricing/.")
}
function unauthenticated() {
    const ne = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new StorageError(StorageErrorCode.UNAUTHENTICATED, ne)
}
function unauthorizedApp() {
    return new StorageError(StorageErrorCode.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.")
}
function unauthorized(ne) {
    return new StorageError(StorageErrorCode.UNAUTHORIZED, "User does not have permission to access '" + ne + "'.")
}
function retryLimitExceeded() {
    return new StorageError(StorageErrorCode.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")
}
function canceled() {
    return new StorageError(StorageErrorCode.CANCELED, "User canceled the upload/download.")
}
function invalidUrl(ne) {
    return new StorageError(StorageErrorCode.INVALID_URL, "Invalid URL '" + ne + "'.")
}
function invalidDefaultBucket(ne) {
    return new StorageError(StorageErrorCode.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + ne + "'.")
}
function noDefaultBucket() {
    return new StorageError(StorageErrorCode.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?")
}
function invalidArgument(ne) {
    return new StorageError(StorageErrorCode.INVALID_ARGUMENT, ne)
}
function appDeleted() {
    return new StorageError(StorageErrorCode.APP_DELETED, "The Firebase app was deleted.")
}
function invalidRootOperation(ne) {
    return new StorageError(StorageErrorCode.INVALID_ROOT_OPERATION, "The operation '" + ne + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")
}
function internalError(ne) {
    throw new StorageError(StorageErrorCode.INTERNAL_ERROR, "Internal error: " + ne)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Location {
    constructor(ee, te) {
        this.bucket = ee,
            this.path_ = te
    }
    get path() {
        return this.path_
    }
    get isRoot() {
        return this.path.length === 0
    }
    fullServerUrl() {
        const ee = encodeURIComponent;
        return "/b/" + ee(this.bucket) + "/o/" + ee(this.path)
    }
    bucketOnlyServerUrl() {
        return "/b/" + encodeURIComponent(this.bucket) + "/o"
    }
    static makeFromBucketSpec(ee, te) {
        let re;
        try {
            re = Location.makeFromUrl(ee, te)
        } catch {
            return new Location(ee, "")
        }
        if (re.path === "")
            return re;
        throw invalidDefaultBucket(ee)
    }
    static makeFromUrl(ee, te) {
        let re = null;
        const ie = "([A-Za-z0-9.\\-_]+)";
        function se(Ne) {
            Ne.path.charAt(Ne.path.length - 1) === "/" && (Ne.path_ = Ne.path_.slice(0, -1))
        }
        const ae = "(/(.*))?$"
            , ce = new RegExp("^gs://" + ie + ae, "i")
            , le = {
                bucket: 1,
                path: 3
            };
        function he(Ne) {
            Ne.path_ = decodeURIComponent(Ne.path)
        }
        const de = "v[A-Za-z0-9_]+"
            , fe = te.replace(/[.]/g, "\\.")
            , Re = "(/([^?#]*).*)?$"
            , Pe = new RegExp(`^https?://${fe}/${de}/b/${ie}/o${Re}`, "i")
            , we = {
                bucket: 1,
                path: 3
            }
            , Se = te === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : te
            , be = "([^?#]*)"
            , De = new RegExp(`^https?://${Se}/${ie}/${be}`, "i")
            , Me = [{
                regex: ce,
                indices: le,
                postModify: se
            }, {
                regex: Pe,
                indices: we,
                postModify: he
            }, {
                regex: De,
                indices: {
                    bucket: 1,
                    path: 2
                },
                postModify: he
            }];
        for (let Ne = 0; Ne < Me.length; Ne++) {
            const $e = Me[Ne]
                , Oe = $e.regex.exec(ee);
            if (Oe) {
                const Ie = Oe[$e.indices.bucket];
                let ge = Oe[$e.indices.path];
                ge || (ge = ""),
                    re = new Location(Ie, ge),
                    $e.postModify(re);
                break
            }
        }
        if (re == null)
            throw invalidUrl(ee);
        return re
    }
}
class FailRequest {
    constructor(ee) {
        this.promise_ = Promise.reject(ee)
    }
    getPromise() {
        return this.promise_
    }
    cancel(ee = !1) { }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function start(ne, ee, te) {
    let re = 1
        , ie = null
        , se = null
        , ae = !1
        , ce = 0;
    function le() {
        return ce === 2
    }
    let he = !1;
    function de(...be) {
        he || (he = !0,
            ee.apply(null, be))
    }
    function fe(be) {
        ie = setTimeout(() => {
            ie = null,
                ne(Pe, le())
        }
            , be)
    }
    function Re() {
        se && clearTimeout(se)
    }
    function Pe(be, ...De) {
        if (he) {
            Re();
            return
        }
        if (be) {
            Re(),
                de.call(null, be, ...De);
            return
        }
        if (le() || ae) {
            Re(),
                de.call(null, be, ...De);
            return
        }
        re < 64 && (re *= 2);
        let Me;
        ce === 1 ? (ce = 2,
            Me = 0) : Me = (re + Math.random()) * 1e3,
            fe(Me)
    }
    let we = !1;
    function Se(be) {
        we || (we = !0,
            Re(),
            !he && (ie !== null ? (be || (ce = 2),
                clearTimeout(ie),
                fe(0)) : be || (ce = 1)))
    }
    return fe(0),
        se = setTimeout(() => {
            ae = !0,
                Se(!0)
        }
            , te),
        Se
}
function stop(ne) {
    ne(!1)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isJustDef(ne) {
    return ne !== void 0
}
function validateNumber(ne, ee, te, re) {
    if (re < ee)
        throw invalidArgument(`Invalid value for '${ne}'. Expected ${ee} or greater.`);
    if (re > te)
        throw invalidArgument(`Invalid value for '${ne}'. Expected ${te} or less.`)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(ne, ee, te) {
    let re = ee;
    return te == null && (re = `https://${ee}`),
        `${te}://${re}/v0${ne}`
}
function makeQueryString(ne) {
    const ee = encodeURIComponent;
    let te = "?";
    for (const re in ne)
        if (ne.hasOwnProperty(re)) {
            const ie = ee(re) + "=" + ee(ne[re]);
            te = te + ie + "&"
        }
    return te = te.slice(0, -1),
        te
}
var ErrorCode;
(function (ne) {
    ne[ne.NO_ERROR = 0] = "NO_ERROR",
        ne[ne.NETWORK_ERROR = 1] = "NETWORK_ERROR",
        ne[ne.ABORT = 2] = "ABORT"
}
)(ErrorCode || (ErrorCode = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isRetryStatusCode(ne, ee) {
    const te = ne >= 500 && ne < 600
        , ie = [408, 429].indexOf(ne) !== -1
        , se = ee.indexOf(ne) !== -1;
    return te || ie || se
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NetworkRequest {
    constructor(ee, te, re, ie, se, ae, ce, le, he, de, fe, Re = !0, Pe = !1) {
        this.url_ = ee,
            this.method_ = te,
            this.headers_ = re,
            this.body_ = ie,
            this.successCodes_ = se,
            this.additionalRetryCodes_ = ae,
            this.callback_ = ce,
            this.errorCallback_ = le,
            this.timeout_ = he,
            this.progressCallback_ = de,
            this.connectionFactory_ = fe,
            this.retry = Re,
            this.isUsingEmulator = Pe,
            this.pendingConnection_ = null,
            this.backoffId_ = null,
            this.canceled_ = !1,
            this.appDelete_ = !1,
            this.promise_ = new Promise((we, Se) => {
                this.resolve_ = we,
                    this.reject_ = Se,
                    this.start_()
            }
            )
    }
    start_() {
        const ee = (re, ie) => {
            if (ie) {
                re(!1, new RequestEndStatus(!1, null, !0));
                return
            }
            const se = this.connectionFactory_();
            this.pendingConnection_ = se;
            const ae = ce => {
                const le = ce.loaded
                    , he = ce.lengthComputable ? ce.total : -1;
                this.progressCallback_ !== null && this.progressCallback_(le, he)
            }
                ;
            this.progressCallback_ !== null && se.addUploadProgressListener(ae),
                se.send(this.url_, this.method_, this.isUsingEmulator, this.body_, this.headers_).then(() => {
                    this.progressCallback_ !== null && se.removeUploadProgressListener(ae),
                        this.pendingConnection_ = null;
                    const ce = se.getErrorCode() === ErrorCode.NO_ERROR
                        , le = se.getStatus();
                    if (!ce || isRetryStatusCode(le, this.additionalRetryCodes_) && this.retry) {
                        const de = se.getErrorCode() === ErrorCode.ABORT;
                        re(!1, new RequestEndStatus(!1, null, de));
                        return
                    }
                    const he = this.successCodes_.indexOf(le) !== -1;
                    re(!0, new RequestEndStatus(he, se))
                }
                )
        }
            , te = (re, ie) => {
                const se = this.resolve_
                    , ae = this.reject_
                    , ce = ie.connection;
                if (ie.wasSuccessCode)
                    try {
                        const le = this.callback_(ce, ce.getResponse());
                        isJustDef(le) ? se(le) : se()
                    } catch (le) {
                        ae(le)
                    }
                else if (ce !== null) {
                    const le = unknown();
                    le.serverResponse = ce.getErrorText(),
                        this.errorCallback_ ? ae(this.errorCallback_(ce, le)) : ae(le)
                } else if (ie.canceled) {
                    const le = this.appDelete_ ? appDeleted() : canceled();
                    ae(le)
                } else {
                    const le = retryLimitExceeded();
                    ae(le)
                }
            }
            ;
        this.canceled_ ? te(!1, new RequestEndStatus(!1, null, !0)) : this.backoffId_ = start(ee, te, this.timeout_)
    }
    getPromise() {
        return this.promise_
    }
    cancel(ee) {
        this.canceled_ = !0,
            this.appDelete_ = ee || !1,
            this.backoffId_ !== null && stop(this.backoffId_),
            this.pendingConnection_ !== null && this.pendingConnection_.abort()
    }
}
class RequestEndStatus {
    constructor(ee, te, re) {
        this.wasSuccessCode = ee,
            this.connection = te,
            this.canceled = !!re
    }
}
function addAuthHeader_(ne, ee) {
    ee !== null && ee.length > 0 && (ne.Authorization = "Firebase " + ee)
}
function addVersionHeader_(ne, ee) {
    ne["X-Firebase-Storage-Version"] = "webjs/" + (ee ?? "AppManager")
}
function addGmpidHeader_(ne, ee) {
    ee && (ne["X-Firebase-GMPID"] = ee)
}
function addAppCheckHeader_(ne, ee) {
    ee !== null && (ne["X-Firebase-AppCheck"] = ee)
}
function makeRequest(ne, ee, te, re, ie, se, ae = !0, ce = !1) {
    const le = makeQueryString(ne.urlParams)
        , he = ne.url + le
        , de = Object.assign({}, ne.headers);
    return addGmpidHeader_(de, ee),
        addAuthHeader_(de, te),
        addVersionHeader_(de, se),
        addAppCheckHeader_(de, re),
        new NetworkRequest(he, ne.method, de, ne.body, ne.successCodes, ne.additionalRetryCodes, ne.handler, ne.errorHandler, ne.timeout, ne.progressCallback, ie, ae, ce)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function parent(ne) {
    if (ne.length === 0)
        return null;
    const ee = ne.lastIndexOf("/");
    return ee === -1 ? "" : ne.slice(0, ee)
}
function child(ne, ee) {
    const te = ee.split("/").filter(re => re.length > 0).join("/");
    return ne.length === 0 ? te : ne + "/" + te
}
function lastComponent(ne) {
    const ee = ne.lastIndexOf("/", ne.length - 2);
    return ee === -1 ? ne : ne.slice(ee + 1)
}
class RequestInfo {
    constructor(ee, te, re, ie) {
        this.url = ee,
            this.method = te,
            this.handler = re,
            this.timeout = ie,
            this.urlParams = {},
            this.headers = {},
            this.body = null,
            this.errorHandler = null,
            this.progressCallback = null,
            this.successCodes = [200],
            this.additionalRetryCodes = []
    }
}
function sharedErrorHandler(ne) {
    function ee(te, re) {
        let ie;
        return te.getStatus() === 401 ? te.getErrorText().includes("Firebase App Check token is invalid") ? ie = unauthorizedApp() : ie = unauthenticated() : te.getStatus() === 402 ? ie = quotaExceeded(ne.bucket) : te.getStatus() === 403 ? ie = unauthorized(ne.path) : ie = re,
            ie.status = te.getStatus(),
            ie.serverResponse = re.serverResponse,
            ie
    }
    return ee
}
function objectErrorHandler(ne) {
    const ee = sharedErrorHandler(ne);
    function te(re, ie) {
        let se = ee(re, ie);
        return re.getStatus() === 404 && (se = objectNotFound(ne.path)),
            se.serverResponse = ie.serverResponse,
            se
    }
    return te
}
function getBytes$1(ne, ee, te) {
    const re = ee.fullServerUrl()
        , ie = makeUrl(re, ne.host, ne._protocol) + "?alt=media"
        , se = "GET"
        , ae = ne.maxOperationRetryTime
        , ce = new RequestInfo(ie, se, (le, he) => he, ae);
    return ce.errorHandler = objectErrorHandler(ee),
        ce
}
class XhrConnection {
    constructor() {
        this.sent_ = !1,
            this.xhr_ = new XMLHttpRequest,
            this.initXhr(),
            this.errorCode_ = ErrorCode.NO_ERROR,
            this.sendPromise_ = new Promise(ee => {
                this.xhr_.addEventListener("abort", () => {
                    this.errorCode_ = ErrorCode.ABORT,
                        ee()
                }
                ),
                    this.xhr_.addEventListener("error", () => {
                        this.errorCode_ = ErrorCode.NETWORK_ERROR,
                            ee()
                    }
                    ),
                    this.xhr_.addEventListener("load", () => {
                        ee()
                    }
                    )
            }
            )
    }
    send(ee, te, re, ie, se) {
        if (this.sent_)
            throw internalError("cannot .send() more than once");
        if (isCloudWorkstation(ee) && re && (this.xhr_.withCredentials = !0),
            this.sent_ = !0,
            this.xhr_.open(te, ee, !0),
            se !== void 0)
            for (const ae in se)
                se.hasOwnProperty(ae) && this.xhr_.setRequestHeader(ae, se[ae].toString());
        return ie !== void 0 ? this.xhr_.send(ie) : this.xhr_.send(),
            this.sendPromise_
    }
    getErrorCode() {
        if (!this.sent_)
            throw internalError("cannot .getErrorCode() before sending");
        return this.errorCode_
    }
    getStatus() {
        if (!this.sent_)
            throw internalError("cannot .getStatus() before sending");
        try {
            return this.xhr_.status
        } catch {
            return -1
        }
    }
    getResponse() {
        if (!this.sent_)
            throw internalError("cannot .getResponse() before sending");
        return this.xhr_.response
    }
    getErrorText() {
        if (!this.sent_)
            throw internalError("cannot .getErrorText() before sending");
        return this.xhr_.statusText
    }
    abort() {
        this.xhr_.abort()
    }
    getResponseHeader(ee) {
        return this.xhr_.getResponseHeader(ee)
    }
    addUploadProgressListener(ee) {
        this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", ee)
    }
    removeUploadProgressListener(ee) {
        this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", ee)
    }
}
class XhrBytesConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = "arraybuffer"
    }
}
function newBytesConnection() {
    return new XhrBytesConnection
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Reference {
    constructor(ee, te) {
        this._service = ee,
            te instanceof Location ? this._location = te : this._location = Location.makeFromUrl(te, ee.host)
    }
    toString() {
        return "gs://" + this._location.bucket + "/" + this._location.path
    }
    _newRef(ee, te) {
        return new Reference(ee, te)
    }
    get root() {
        const ee = new Location(this._location.bucket, "");
        return this._newRef(this._service, ee)
    }
    get bucket() {
        return this._location.bucket
    }
    get fullPath() {
        return this._location.path
    }
    get name() {
        return lastComponent(this._location.path)
    }
    get storage() {
        return this._service
    }
    get parent() {
        const ee = parent(this._location.path);
        if (ee === null)
            return null;
        const te = new Location(this._location.bucket, ee);
        return new Reference(this._service, te)
    }
    _throwIfRoot(ee) {
        if (this._location.path === "")
            throw invalidRootOperation(ee)
    }
}
function getBytesInternal(ne, ee) {
    ne._throwIfRoot("getBytes");
    const te = getBytes$1(ne.storage, ne._location);
    return ne.storage.makeRequestWithTokens(te, newBytesConnection).then(re => re)
}
function _getChild$1(ne, ee) {
    const te = child(ne._location.path, ee)
        , re = new Location(ne._location.bucket, te);
    return new Reference(ne.storage, re)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isUrl(ne) {
    return /^[A-Za-z]+:\/\//.test(ne)
}
function refFromURL(ne, ee) {
    return new Reference(ne, ee)
}
function refFromPath(ne, ee) {
    if (ne instanceof FirebaseStorageImpl) {
        const te = ne;
        if (te._bucket == null)
            throw noDefaultBucket();
        const re = new Reference(te, te._bucket);
        return ee != null ? refFromPath(re, ee) : re
    } else
        return ee !== void 0 ? _getChild$1(ne, ee) : ne
}
function ref$1(ne, ee) {
    if (ee && isUrl(ee)) {
        if (ne instanceof FirebaseStorageImpl)
            return refFromURL(ne, ee);
        throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.")
    } else
        return refFromPath(ne, ee)
}
function extractBucket(ne, ee) {
    const te = ee?.[CONFIG_STORAGE_BUCKET_KEY];
    return te == null ? null : Location.makeFromBucketSpec(te, ne)
}
function connectStorageEmulator$1(ne, ee, te, re = {}) {
    ne.host = `${ee}:${te}`;
    const ie = isCloudWorkstation(ee);
    ie && pingServer(`https://${ne.host}/b`),
        ne._isUsingEmulator = !0,
        ne._protocol = ie ? "https" : "http";
    const { mockUserToken: se } = re;
    se && (ne._overrideAuthToken = typeof se == "string" ? se : createMockUserToken(se, ne.app.options.projectId))
}
class FirebaseStorageImpl {
    constructor(ee, te, re, ie, se, ae = !1) {
        this.app = ee,
            this._authProvider = te,
            this._appCheckProvider = re,
            this._url = ie,
            this._firebaseVersion = se,
            this._isUsingEmulator = ae,
            this._bucket = null,
            this._host = DEFAULT_HOST,
            this._protocol = "https",
            this._appId = null,
            this._deleted = !1,
            this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME,
            this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME,
            this._requests = new Set,
            ie != null ? this._bucket = Location.makeFromBucketSpec(ie, this._host) : this._bucket = extractBucket(this._host, this.app.options)
    }
    get host() {
        return this._host
    }
    set host(ee) {
        this._host = ee,
            this._url != null ? this._bucket = Location.makeFromBucketSpec(this._url, ee) : this._bucket = extractBucket(ee, this.app.options)
    }
    get maxUploadRetryTime() {
        return this._maxUploadRetryTime
    }
    set maxUploadRetryTime(ee) {
        validateNumber("time", 0, Number.POSITIVE_INFINITY, ee),
            this._maxUploadRetryTime = ee
    }
    get maxOperationRetryTime() {
        return this._maxOperationRetryTime
    }
    set maxOperationRetryTime(ee) {
        validateNumber("time", 0, Number.POSITIVE_INFINITY, ee),
            this._maxOperationRetryTime = ee
    }
    async _getAuthToken() {
        if (this._overrideAuthToken)
            return this._overrideAuthToken;
        const ee = this._authProvider.getImmediate({
            optional: !0
        });
        if (ee) {
            const te = await ee.getToken();
            if (te !== null)
                return te.accessToken
        }
        return null
    }
    async _getAppCheckToken() {
        if (_isFirebaseServerApp(this.app) && this.app.settings.appCheckToken)
            return this.app.settings.appCheckToken;
        const ee = this._appCheckProvider.getImmediate({
            optional: !0
        });
        return ee ? (await ee.getToken()).token : null
    }
    _delete() {
        return this._deleted || (this._deleted = !0,
            this._requests.forEach(ee => ee.cancel()),
            this._requests.clear()),
            Promise.resolve()
    }
    _makeStorageReference(ee) {
        return new Reference(this, ee)
    }
    _makeRequest(ee, te, re, ie, se = !0) {
        if (this._deleted)
            return new FailRequest(appDeleted());
        {
            const ae = makeRequest(ee, this._appId, re, ie, te, this._firebaseVersion, se, this._isUsingEmulator);
            return this._requests.add(ae),
                ae.getPromise().then(() => this._requests.delete(ae), () => this._requests.delete(ae)),
                ae
        }
    }
    async makeRequestWithTokens(ee, te) {
        const [re, ie] = await Promise.all([this._getAuthToken(), this._getAppCheckToken()]);
        return this._makeRequest(ee, te, re, ie).getPromise()
    }
}
const name = "@firebase/storage"
    , version = "0.14.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const STORAGE_TYPE = "storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBytes(ne, ee) {
    return ne = getModularInstance(ne),
        getBytesInternal(ne)
}
function ref(ne, ee) {
    return ne = getModularInstance(ne),
        ref$1(ne, ee)
}
function getStorage(ne = getApp(), ee) {
    ne = getModularInstance(ne);
    const re = _getProvider(ne, STORAGE_TYPE).getImmediate({
        identifier: ee
    })
        , ie = getDefaultEmulatorHostnameAndPort("storage");
    return ie && connectStorageEmulator(re, ...ie),
        re
}
function connectStorageEmulator(ne, ee, te, re = {}) {
    connectStorageEmulator$1(ne, ee, te, re)
}
function factory(ne, { instanceIdentifier: ee }) {
    const te = ne.getProvider("app").getImmediate()
        , re = ne.getProvider("auth-internal")
        , ie = ne.getProvider("app-check-internal");
    return new FirebaseStorageImpl(te, re, ie, ee, SDK_VERSION)
}
function registerStorage() {
    _registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC").setMultipleInstances(!0)),
        registerVersion(name, version, ""),
        registerVersion(name, version, "esm2020")
}
registerStorage();
function PiFigmaLogo(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 256 256",
            fill: "currentColor"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H144V40h24A24,24,0,0,1,192,64ZM72,64A24,24,0,0,1,96,40h32V88H96A24,24,0,0,1,72,64Zm24,88a24,24,0,0,1,0-48h32v48H96Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,168,152Z"
            },
            child: []
        }]
    })(ne)
}
function PiGoogleLogo(ne) {
    return GenIcon({
        tag: "svg",
        attr: {
            viewBox: "0 0 256 256",
            fill: "currentColor"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"
            },
            child: []
        }]
    })(ne)
}
export { onSnapshot as $, A$1 as A, Bold as B, w as C, Divider as D, E$2 as E, F$2 as F, GenIcon as G, H$1 as H, IconCircleHelp16 as I, Checkbox as J, pluralize as K, Link as L, MdCheck as M, T$1 as N, O$1 as O, P, Container as Q, onAuthStateChanged as R, Stack as S, Text as T, signInWithCustomToken as U, VerticalSpace as V, writeBatch as W, getFirestore as X, doc as Y, collection as Z, _$2 as _, useMouseDownOutside as a, query as a0, orderBy as a1, MdOutlineHelpOutline as a2, MdKey as a3, MdLogout as a4, MdEmail as a5, E$1 as a6, MdDeleteOutline as a7, x$2 as a8, TextboxNumeric as a9, PiGoogleLogo as aA, MdMailOutline as aB, Dropdown as aa, useSignal as ab, MdLogin as ac, MdDelete as ad, getStorage as ae, getBytes as af, ref as ag, MdMoreHoriz as ah, Tabs as ai, MdContentCopy as aj, MdClose as ak, GoogleAuthProvider as al, isSignInWithEmailLink as am, signInWithEmailLink as an, sendSignInLinkToEmail as ao, signInWithPopup as ap, signInWithRedirect as aq, signOut as ar, on$1 as as, initializeApp as at, initializeFirestore as au, getAuth as av, connectAuthEmulator as aw, connectFirestoreEmulator as ax, connectStorageEmulator as ay, PiFigmaLogo as az, u$1 as b, createClassName as c, G$1 as d, B$3 as e, b$2 as f, getCurrentFromRef as g, h$1 as h, D$1 as i, _$1 as j, k$2 as k, d$1 as l, useSignalEffect as m, IconChevronDown16 as n, Textbox as o, Button as p, q$2 as q, IconButton as r, IconCross32 as s, once as t, useScrollableMenu as u, LoadingIndicator as v, w$1 as w, MdOutlineArrowRightAlt as x, y$1 as y, Toggle as z };
//# sourceMappingURL=vendors-common-Lh1ryj9n.js.map
