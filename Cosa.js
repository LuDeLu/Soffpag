!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 44)
}([function(t, e, n) {
    var i;
    /*!
* jQuery JavaScript Library v3.4.1
* https://jquery.com/
*
* Includes Sizzle.js
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://jquery.org/license
*
* Date: 2019-05-01T21:04Z
*/
    /*!
* jQuery JavaScript Library v3.4.1
* https://jquery.com/
*
* Includes Sizzle.js
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://jquery.org/license
*
* Date: 2019-05-01T21:04Z
*/
    !function(e, n) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return n(t)
        }
        : n(e)
    }("undefined" != typeof window ? window : this, (function(n, r) {
        "use strict";
        var s = []
          , o = n.document
          , a = Object.getPrototypeOf
          , l = s.slice
          , c = s.concat
          , u = s.push
          , h = s.indexOf
          , d = {}
          , f = d.toString
          , p = d.hasOwnProperty
          , v = p.toString
          , m = v.call(Object)
          , g = {}
          , y = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
          , b = function(t) {
            return null != t && t === t.window
        }
          , w = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function k(t, e, n) {
            var i, r, s = (n = n || o).createElement("script");
            if (s.text = t,
            e)
                for (i in w)
                    (r = e[i] || e.getAttribute && e.getAttribute(i)) && s.setAttribute(i, r);
            n.head.appendChild(s).parentNode.removeChild(s)
        }
        function C(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[f.call(t)] || "object" : typeof t
        }
        var x = function(t, e) {
            return new x.fn.init(t,e)
        }
          , $ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function _(t) {
            var e = !!t && "length"in t && t.length
              , n = C(t);
            return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        x.fn = x.prototype = {
            jquery: "3.4.1",
            constructor: x,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = x.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return x.each(this, t)
            },
            map: function(t) {
                return this.pushStack(x.map(this, (function(e, n) {
                    return t.call(e, n, e)
                }
                )))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length
                  , n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: s.sort,
            splice: s.splice
        },
        x.extend = x.fn.extend = function() {
            var t, e, n, i, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof o && (c = o,
            o = arguments[a] || {},
            a++),
            "object" == typeof o || y(o) || (o = {}),
            a === l && (o = this,
            a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        i = t[e],
                        "__proto__" !== e && o !== i && (c && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[e],
                        s = r && !Array.isArray(n) ? [] : r || x.isPlainObject(n) ? n : {},
                        r = !1,
                        o[e] = x.extend(c, s, i)) : void 0 !== i && (o[e] = i));
            return o
        }
        ,
        x.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== f.call(t) || (e = a(t)) && ("function" != typeof (n = p.call(e, "constructor") && e.constructor) || v.call(n) !== m))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function(t, e) {
                k(t, {
                    nonce: e && e.nonce
                })
            },
            each: function(t, e) {
                var n, i = 0;
                if (_(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                        ;
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i]))
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace($, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (_(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)),
                n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : h.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                    t[r++] = e[i];
                return t.length = r,
                t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, s = t.length, o = !n; r < s; r++)
                    !e(t[r], r) !== o && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r, s = 0, o = [];
                if (_(t))
                    for (i = t.length; s < i; s++)
                        null != (r = e(t[s], s, n)) && o.push(r);
                else
                    for (s in t)
                        null != (r = e(t[s], s, n)) && o.push(r);
                return c.apply([], o)
            },
            guid: 1,
            support: g
        }),
        "function" == typeof Symbol && (x.fn[Symbol.iterator] = s[Symbol.iterator]),
        x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        }
        ));
        var T = /*!
* Sizzle CSS Selector Engine v2.3.4
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2019-04-08
*/
        function(t) {
            var e, n, i, r, s, o, a, l, c, u, h, d, f, p, v, m, g, y, b, w = "sizzle" + 1 * new Date, k = t.document, C = 0, x = 0, $ = lt(), _ = lt(), T = lt(), S = lt(), A = function(t, e) {
                return t === e && (h = !0),
                0
            }, z = {}.hasOwnProperty, E = [], O = E.pop, L = E.push, P = E.push, D = E.slice, q = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e)
                        return n;
                return -1
            }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + j + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + M + "*\\]", B = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", R = new RegExp(M + "+","g"), F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), N = new RegExp("^" + M + "*," + M + "*"), W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), V = new RegExp(B), G = new RegExp("^" + j + "$"), Q = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
                bool: new RegExp("^(?:" + H + ")$","i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
            }, Y = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), nt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, st = function() {
                d()
            }, ot = wt((function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }
            ), {
                dir: "parentNode",
                next: "legend"
            });
            try {
                P.apply(E = D.call(k.childNodes), k.childNodes),
                E[k.childNodes.length].nodeType
            } catch (t) {
                P = {
                    apply: E.length ? function(t, e) {
                        L.apply(t, D.call(e))
                    }
                    : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++]; )
                            ;
                        t.length = n - 1
                    }
                }
            }
            function at(t, e, i, r) {
                var s, a, c, u, h, p, g, y = e && e.ownerDocument, C = e ? e.nodeType : 9;
                if (i = i || [],
                "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C)
                    return i;
                if (!r && ((e ? e.ownerDocument || e : k) !== f && d(e),
                e = e || f,
                v)) {
                    if (11 !== C && (h = J.exec(t)))
                        if (s = h[1]) {
                            if (9 === C) {
                                if (!(c = e.getElementById(s)))
                                    return i;
                                if (c.id === s)
                                    return i.push(c),
                                    i
                            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s)
                                return i.push(c),
                                i
                        } else {
                            if (h[2])
                                return P.apply(i, e.getElementsByTagName(t)),
                                i;
                            if ((s = h[3]) && n.getElementsByClassName && e.getElementsByClassName)
                                return P.apply(i, e.getElementsByClassName(s)),
                                i
                        }
                    if (n.qsa && !S[t + " "] && (!m || !m.test(t)) && (1 !== C || "object" !== e.nodeName.toLowerCase())) {
                        if (g = t,
                        y = e,
                        1 === C && U.test(t)) {
                            for ((u = e.getAttribute("id")) ? u = u.replace(it, rt) : e.setAttribute("id", u = w),
                            a = (p = o(t)).length; a--; )
                                p[a] = "#" + u + " " + bt(p[a]);
                            g = p.join(","),
                            y = tt.test(t) && gt(e.parentNode) || e
                        }
                        try {
                            return P.apply(i, y.querySelectorAll(g)),
                            i
                        } catch (e) {
                            S(t, !0)
                        } finally {
                            u === w && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(F, "$1"), e, i, r)
            }
            function lt() {
                var t = [];
                return function e(n, r) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
                }
            }
            function ct(t) {
                return t[w] = !0,
                t
            }
            function ut(t) {
                var e = f.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function ht(t, e) {
                for (var n = t.split("|"), r = n.length; r--; )
                    i.attrHandle[n[r]] = e
            }
            function dt(t, e) {
                var n = e && t
                  , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function ft(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function pt(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function vt(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function mt(t) {
                return ct((function(e) {
                    return e = +e,
                    ct((function(n, i) {
                        for (var r, s = t([], n.length, e), o = s.length; o--; )
                            n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                    }
                    ))
                }
                ))
            }
            function gt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in n = at.support = {},
            s = at.isXML = function(t) {
                var e = t.namespaceURI
                  , n = (t.ownerDocument || t).documentElement;
                return !Y.test(e || n && n.nodeName || "HTML")
            }
            ,
            d = at.setDocument = function(t) {
                var e, r, o = t ? t.ownerDocument || t : k;
                return o !== f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement,
                v = !s(f),
                k !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)),
                n.attributes = ut((function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }
                )),
                n.getElementsByTagName = ut((function(t) {
                    return t.appendChild(f.createComment("")),
                    !t.getElementsByTagName("*").length
                }
                )),
                n.getElementsByClassName = Z.test(f.getElementsByClassName),
                n.getById = ut((function(t) {
                    return p.appendChild(t).id = w,
                    !f.getElementsByName || !f.getElementsByName(w).length
                }
                )),
                n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && v) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }
                ) : (i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && v) {
                        var n, i, r, s = e.getElementById(t);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === t)
                                return [s];
                            for (r = e.getElementsByName(t),
                            i = 0; s = r[i++]; )
                                if ((n = s.getAttributeNode("id")) && n.value === t)
                                    return [s]
                        }
                        return []
                    }
                }
                ),
                i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var n, i = [], r = 0, s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[r++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }
                ,
                i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && v)
                        return e.getElementsByClassName(t)
                }
                ,
                g = [],
                m = [],
                (n.qsa = Z.test(f.querySelectorAll)) && (ut((function(t) {
                    p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"),
                    t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                    t.querySelectorAll(":checked").length || m.push(":checked"),
                    t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }
                )),
                ut((function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = f.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                    p.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    m.push(",.*:")
                }
                ))),
                (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ut((function(t) {
                    n.disconnectedMatch = y.call(t, "*"),
                    y.call(t, "[s!='']:x"),
                    g.push("!=", B)
                }
                )),
                m = m.length && new RegExp(m.join("|")),
                g = g.length && new RegExp(g.join("|")),
                e = Z.test(p.compareDocumentPosition),
                b = e || Z.test(p.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t
                      , i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                A = e ? function(t, e) {
                    if (t === e)
                        return h = !0,
                        0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === k && b(k, t) ? -1 : e === f || e.ownerDocument === k && b(k, e) ? 1 : u ? q(u, t) - q(u, e) : 0 : 4 & i ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return h = !0,
                        0;
                    var n, i = 0, r = t.parentNode, s = e.parentNode, o = [t], a = [e];
                    if (!r || !s)
                        return t === f ? -1 : e === f ? 1 : r ? -1 : s ? 1 : u ? q(u, t) - q(u, e) : 0;
                    if (r === s)
                        return dt(t, e);
                    for (n = t; n = n.parentNode; )
                        o.unshift(n);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (; o[i] === a[i]; )
                        i++;
                    return i ? dt(o[i], a[i]) : o[i] === k ? -1 : a[i] === k ? 1 : 0
                }
                ,
                f) : f
            }
            ,
            at.matches = function(t, e) {
                return at(t, null, null, e)
            }
            ,
            at.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== f && d(t),
                n.matchesSelector && v && !S[e + " "] && (!g || !g.test(e)) && (!m || !m.test(e)))
                    try {
                        var i = y.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (t) {
                        S(e, !0)
                    }
                return at(e, f, null, [t]).length > 0
            }
            ,
            at.contains = function(t, e) {
                return (t.ownerDocument || t) !== f && d(t),
                b(t, e)
            }
            ,
            at.attr = function(t, e) {
                (t.ownerDocument || t) !== f && d(t);
                var r = i.attrHandle[e.toLowerCase()]
                  , s = r && z.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !v) : void 0;
                return void 0 !== s ? s : n.attributes || !v ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
            }
            ,
            at.escape = function(t) {
                return (t + "").replace(it, rt)
            }
            ,
            at.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            at.uniqueSort = function(t) {
                var e, i = [], r = 0, s = 0;
                if (h = !n.detectDuplicates,
                u = !n.sortStable && t.slice(0),
                t.sort(A),
                h) {
                    for (; e = t[s++]; )
                        e === t[s] && (r = i.push(s));
                    for (; r--; )
                        t.splice(i[r], 1)
                }
                return u = null,
                t
            }
            ,
            r = at.getText = function(t) {
                var e, n = "", i = 0, s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += r(t)
                    } else if (3 === s || 4 === s)
                        return t.nodeValue
                } else
                    for (; e = t[i++]; )
                        n += r(e);
                return n
            }
            ,
            (i = at.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, nt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                        t[2] = n.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = $[t + " "];
                        return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && $(t, (function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        }
                        ))
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var r = at.attr(i, t);
                            return null == r ? "!=" === e : !e || (r += "",
                            "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var s = "nth" !== t.slice(0, 3)
                          , o = "last" !== t.slice(-4)
                          , a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, n, l) {
                            var c, u, h, d, f, p, v = s !== o ? "nextSibling" : "previousSibling", m = e.parentNode, g = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                            if (m) {
                                if (s) {
                                    for (; v; ) {
                                        for (d = e; d = d[v]; )
                                            if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
                                                return !1;
                                        p = v = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [o ? m.firstChild : m.lastChild],
                                o && y) {
                                    for (b = (f = (c = (u = (h = (d = m)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2],
                                    d = f && m.childNodes[f]; d = ++f && d && d[v] || (b = f = 0) || p.pop(); )
                                        if (1 === d.nodeType && ++b && d === e) {
                                            u[t] = [C, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (h = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === C && c[1]),
                                !1 === b)
                                    for (; (d = ++f && d && d[v] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [C, b]),
                                    d !== e)); )
                                        ;
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return r[w] ? r(e) : r.length > 1 ? (n = [t, t, "", e],
                        i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) {
                            for (var i, s = r(t, e), o = s.length; o--; )
                                t[i = q(t, s[o])] = !(n[i] = s[o])
                        }
                        )) : function(t) {
                            return r(t, 0, n)
                        }
                        ) : r
                    }
                },
                pseudos: {
                    not: ct((function(t) {
                        var e = []
                          , n = []
                          , i = a(t.replace(F, "$1"));
                        return i[w] ? ct((function(t, e, n, r) {
                            for (var s, o = i(t, null, r, []), a = t.length; a--; )
                                (s = o[a]) && (t[a] = !(e[a] = s))
                        }
                        )) : function(t, r, s) {
                            return e[0] = t,
                            i(e, null, s, n),
                            e[0] = null,
                            !n.pop()
                        }
                    }
                    )),
                    has: ct((function(t) {
                        return function(e) {
                            return at(t, e).length > 0
                        }
                    }
                    )),
                    contains: ct((function(t) {
                        return t = t.replace(et, nt),
                        function(e) {
                            return (e.textContent || r(e)).indexOf(t) > -1
                        }
                    }
                    )),
                    lang: ct((function(t) {
                        return G.test(t || "") || at.error("unsupported lang: " + t),
                        t = t.replace(et, nt).toLowerCase(),
                        function(e) {
                            var n;
                            do {
                                if (n = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }
                    )),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: vt(!1),
                    disabled: vt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return K.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: mt((function() {
                        return [0]
                    }
                    )),
                    last: mt((function(t, e) {
                        return [e - 1]
                    }
                    )),
                    eq: mt((function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }
                    )),
                    even: mt((function(t, e) {
                        for (var n = 0; n < e; n += 2)
                            t.push(n);
                        return t
                    }
                    )),
                    odd: mt((function(t, e) {
                        for (var n = 1; n < e; n += 2)
                            t.push(n);
                        return t
                    }
                    )),
                    lt: mt((function(t, e, n) {
                        for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; )
                            t.push(i);
                        return t
                    }
                    )),
                    gt: mt((function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e; )
                            t.push(i);
                        return t
                    }
                    ))
                }
            }).pseudos.nth = i.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                i.pseudos[e] = ft(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                i.pseudos[e] = pt(e);
            function yt() {}
            function bt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)
                    i += t[e].value;
                return i
            }
            function wt(t, e, n) {
                var i = e.dir
                  , r = e.next
                  , s = r || i
                  , o = n && "parentNode" === s
                  , a = x++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i]; )
                        if (1 === e.nodeType || o)
                            return t(e, n, r);
                    return !1
                }
                : function(e, n, l) {
                    var c, u, h, d = [C, a];
                    if (l) {
                        for (; e = e[i]; )
                            if ((1 === e.nodeType || o) && t(e, n, l))
                                return !0
                    } else
                        for (; e = e[i]; )
                            if (1 === e.nodeType || o)
                                if (u = (h = e[w] || (e[w] = {}))[e.uniqueID] || (h[e.uniqueID] = {}),
                                r && r === e.nodeName.toLowerCase())
                                    e = e[i] || e;
                                else {
                                    if ((c = u[s]) && c[0] === C && c[1] === a)
                                        return d[2] = c[2];
                                    if (u[s] = d,
                                    d[2] = t(e, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function kt(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--; )
                        if (!t[r](e, n, i))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function Ct(t, e, n, i, r) {
                for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)
                    (s = t[a]) && (n && !n(s, i, r) || (o.push(s),
                    c && e.push(a)));
                return o
            }
            function xt(t, e, n, i, r, s) {
                return i && !i[w] && (i = xt(i)),
                r && !r[w] && (r = xt(r, s)),
                ct((function(s, o, a, l) {
                    var c, u, h, d = [], f = [], p = o.length, v = s || function(t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++)
                            at(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []), m = !t || !s && e ? v : Ct(v, d, t, a, l), g = n ? r || (s ? t : p || i) ? [] : o : m;
                    if (n && n(m, g, a, l),
                    i)
                        for (c = Ct(g, f),
                        i(c, [], a, l),
                        u = c.length; u--; )
                            (h = c[u]) && (g[f[u]] = !(m[f[u]] = h));
                    if (s) {
                        if (r || t) {
                            if (r) {
                                for (c = [],
                                u = g.length; u--; )
                                    (h = g[u]) && c.push(m[u] = h);
                                r(null, g = [], c, l)
                            }
                            for (u = g.length; u--; )
                                (h = g[u]) && (c = r ? q(s, h) : d[u]) > -1 && (s[c] = !(o[c] = h))
                        }
                    } else
                        g = Ct(g === o ? g.splice(p, g.length) : g),
                        r ? r(null, o, g, l) : P.apply(o, g)
                }
                ))
            }
            function $t(t) {
                for (var e, n, r, s = t.length, o = i.relative[t[0].type], a = o || i.relative[" "], l = o ? 1 : 0, u = wt((function(t) {
                    return t === e
                }
                ), a, !0), h = wt((function(t) {
                    return q(e, t) > -1
                }
                ), a, !0), d = [function(t, n, i) {
                    var r = !o && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                    return e = null,
                    r
                }
                ]; l < s; l++)
                    if (n = i.relative[t[l].type])
                        d = [wt(kt(d), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                            for (r = ++l; r < s && !i.relative[t[r].type]; r++)
                                ;
                            return xt(l > 1 && kt(d), l > 1 && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(F, "$1"), n, l < r && $t(t.slice(l, r)), r < s && $t(t = t.slice(r)), r < s && bt(t))
                        }
                        d.push(n)
                    }
                return kt(d)
            }
            return yt.prototype = i.filters = i.pseudos,
            i.setFilters = new yt,
            o = at.tokenize = function(t, e) {
                var n, r, s, o, a, l, c, u = _[t + " "];
                if (u)
                    return e ? 0 : u.slice(0);
                for (a = t,
                l = [],
                c = i.preFilter; a; ) {
                    for (o in n && !(r = N.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                    l.push(s = [])),
                    n = !1,
                    (r = W.exec(a)) && (n = r.shift(),
                    s.push({
                        value: n,
                        type: r[0].replace(F, " ")
                    }),
                    a = a.slice(n.length)),
                    i.filter)
                        !(r = Q[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(),
                        s.push({
                            value: n,
                            type: o,
                            matches: r
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return e ? a.length : a ? at.error(t) : _(t, l).slice(0)
            }
            ,
            a = at.compile = function(t, e) {
                var n, r = [], s = [], a = T[t + " "];
                if (!a) {
                    for (e || (e = o(t)),
                    n = e.length; n--; )
                        (a = $t(e[n]))[w] ? r.push(a) : s.push(a);
                    (a = T(t, function(t, e) {
                        var n = e.length > 0
                          , r = t.length > 0
                          , s = function(s, o, a, l, u) {
                            var h, p, m, g = 0, y = "0", b = s && [], w = [], k = c, x = s || r && i.find.TAG("*", u), $ = C += null == k ? 1 : Math.random() || .1, _ = x.length;
                            for (u && (c = o === f || o || u); y !== _ && null != (h = x[y]); y++) {
                                if (r && h) {
                                    for (p = 0,
                                    o || h.ownerDocument === f || (d(h),
                                    a = !v); m = t[p++]; )
                                        if (m(h, o || f, a)) {
                                            l.push(h);
                                            break
                                        }
                                    u && (C = $)
                                }
                                n && ((h = !m && h) && g--,
                                s && b.push(h))
                            }
                            if (g += y,
                            n && y !== g) {
                                for (p = 0; m = e[p++]; )
                                    m(b, w, o, a);
                                if (s) {
                                    if (g > 0)
                                        for (; y--; )
                                            b[y] || w[y] || (w[y] = O.call(l));
                                    w = Ct(w)
                                }
                                P.apply(l, w),
                                u && !s && w.length > 0 && g + e.length > 1 && at.uniqueSort(l)
                            }
                            return u && (C = $,
                            c = k),
                            b
                        };
                        return n ? ct(s) : s
                    }(s, r))).selector = t
                }
                return a
            }
            ,
            l = at.select = function(t, e, n, r) {
                var s, l, c, u, h, d = "function" == typeof t && t, f = !r && o(t = d.selector || t);
                if (n = n || [],
                1 === f.length) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && v && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0]))
                            return n;
                        d && (e = e.parentNode),
                        t = t.slice(l.shift().value.length)
                    }
                    for (s = Q.needsContext.test(t) ? 0 : l.length; s-- && (c = l[s],
                    !i.relative[u = c.type]); )
                        if ((h = i.find[u]) && (r = h(c.matches[0].replace(et, nt), tt.test(l[0].type) && gt(e.parentNode) || e))) {
                            if (l.splice(s, 1),
                            !(t = r.length && bt(l)))
                                return P.apply(n, r),
                                n;
                            break
                        }
                }
                return (d || a(t, f))(r, e, !v, n, !e || tt.test(t) && gt(e.parentNode) || e),
                n
            }
            ,
            n.sortStable = w.split("").sort(A).join("") === w,
            n.detectDuplicates = !!h,
            d(),
            n.sortDetached = ut((function(t) {
                return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
            }
            )),
            ut((function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }
            )) || ht("type|href|height|width", (function(t, e, n) {
                if (!n)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }
            )),
            n.attributes && ut((function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }
            )) || ht("value", (function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }
            )),
            ut((function(t) {
                return null == t.getAttribute("disabled")
            }
            )) || ht(H, (function(t, e, n) {
                var i;
                if (!n)
                    return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }
            )),
            at
        }(n);
        x.find = T,
        x.expr = T.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.uniqueSort = x.unique = T.uniqueSort,
        x.text = T.getText,
        x.isXMLDoc = T.isXML,
        x.contains = T.contains,
        x.escapeSelector = T.escape;
        var S = function(t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (r && x(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        }
          , A = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
          , z = x.expr.match.needsContext;
        function E(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(t, e, n) {
            return y(e) ? x.grep(t, (function(t, i) {
                return !!e.call(t, i, t) !== n
            }
            )) : e.nodeType ? x.grep(t, (function(t) {
                return t === e !== n
            }
            )) : "string" != typeof e ? x.grep(t, (function(t) {
                return h.call(e, t) > -1 !== n
            }
            )) : x.filter(e, t, n)
        }
        x.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType ? x.find.matchesSelector(i, t) ? [i] : [] : x.find.matches(t, x.grep(e, (function(t) {
                return 1 === t.nodeType
            }
            )))
        }
        ,
        x.fn.extend({
            find: function(t) {
                var e, n, i = this.length, r = this;
                if ("string" != typeof t)
                    return this.pushStack(x(t).filter((function() {
                        for (e = 0; e < i; e++)
                            if (x.contains(r[e], this))
                                return !0
                    }
                    )));
                for (n = this.pushStack([]),
                e = 0; e < i; e++)
                    x.find(t, r[e], n);
                return i > 1 ? x.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(L(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(L(this, t || [], !0))
            },
            is: function(t) {
                return !!L(this, "string" == typeof t && z.test(t) ? x(t) : t || [], !1).length
            }
        });
        var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (x.fn.init = function(t, e, n) {
            var i, r;
            if (!t)
                return this;
            if (n = n || P,
            "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || !i[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof x ? e[0] : e,
                    x.merge(this, x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : o, !0)),
                    O.test(i[1]) && x.isPlainObject(e))
                        for (i in e)
                            y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (r = o.getElementById(i[2])) && (this[0] = r,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this)
        }
        ).prototype = x.fn,
        P = x(o);
        var q = /^(?:parents|prev(?:Until|All))/
          , H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function M(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        x.fn.extend({
            has: function(t) {
                var e = x(t, this)
                  , n = e.length;
                return this.filter((function() {
                    for (var t = 0; t < n; t++)
                        if (x.contains(this, e[t]))
                            return !0
                }
                ))
            },
            closest: function(t, e) {
                var n, i = 0, r = this.length, s = [], o = "string" != typeof t && x(t);
                if (!z.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? x.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? h.call(x(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        x.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return S(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return S(t, "parentNode", n)
            },
            next: function(t) {
                return M(t, "nextSibling")
            },
            prev: function(t) {
                return M(t, "previousSibling")
            },
            nextAll: function(t) {
                return S(t, "nextSibling")
            },
            prevAll: function(t) {
                return S(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return S(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return S(t, "previousSibling", n)
            },
            siblings: function(t) {
                return A((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return A(t.firstChild)
            },
            contents: function(t) {
                return void 0 !== t.contentDocument ? t.contentDocument : (E(t, "template") && (t = t.content || t),
                x.merge([], t.childNodes))
            }
        }, (function(t, e) {
            x.fn[t] = function(n, i) {
                var r = x.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = x.filter(i, r)),
                this.length > 1 && (H[t] || x.uniqueSort(r),
                q.test(t) && r.reverse()),
                this.pushStack(r)
            }
        }
        ));
        var j = /[^\x20\t\r\n\f]+/g;
        function I(t) {
            return t
        }
        function B(t) {
            throw t
        }
        function R(t, e, n, i) {
            var r;
            try {
                t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        x.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return x.each(t.match(j) || [], (function(t, n) {
                    e[n] = !0
                }
                )),
                e
            }(t) : x.extend({}, t);
            var e, n, i, r, s = [], o = [], a = -1, l = function() {
                for (r = r || t.once,
                i = e = !0; o.length; a = -1)
                    for (n = o.shift(); ++a < s.length; )
                        !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && (a = s.length,
                        n = !1);
                t.memory || (n = !1),
                e = !1,
                r && (s = n ? [] : "")
            }, c = {
                add: function() {
                    return s && (n && !e && (a = s.length - 1,
                    o.push(n)),
                    function e(n) {
                        x.each(n, (function(n, i) {
                            y(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== C(i) && e(i)
                        }
                        ))
                    }(arguments),
                    n && !e && l()),
                    this
                },
                remove: function() {
                    return x.each(arguments, (function(t, e) {
                        for (var n; (n = x.inArray(e, s, n)) > -1; )
                            s.splice(n, 1),
                            n <= a && a--
                    }
                    )),
                    this
                },
                has: function(t) {
                    return t ? x.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []),
                    this
                },
                disable: function() {
                    return r = o = [],
                    s = n = "",
                    this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = o = [],
                    n || e || (s = n = ""),
                    this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n],
                    o.push(n),
                    e || l()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return c
        }
        ,
        x.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return x.Deferred((function(n) {
                            x.each(e, (function(e, i) {
                                var r = y(t[i[4]]) && t[i[4]];
                                s[i[1]]((function() {
                                    var t = r && r.apply(this, arguments);
                                    t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                }
                                ))
                            }
                            )),
                            t = null
                        }
                        )).promise()
                    },
                    then: function(t, i, r) {
                        var s = 0;
                        function o(t, e, i, r) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(t < s)) {
                                        if ((n = i.apply(a, l)) === e.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        y(c) ? r ? c.call(n, o(s, e, I, r), o(s, e, B, r)) : (s++,
                                        c.call(n, o(s, e, I, r), o(s, e, B, r), o(s, e, I, e.notifyWith))) : (i !== I && (a = void 0,
                                        l = [n]),
                                        (r || e.resolveWith)(a, l))
                                    }
                                }
                                  , u = r ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, u.stackTrace),
                                        t + 1 >= s && (i !== B && (a = void 0,
                                        l = [n]),
                                        e.rejectWith(a, l))
                                    }
                                }
                                ;
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()),
                                n.setTimeout(u))
                            }
                        }
                        return x.Deferred((function(n) {
                            e[0][3].add(o(0, n, y(r) ? r : I, n.notifyWith)),
                            e[1][3].add(o(0, n, y(t) ? t : I)),
                            e[2][3].add(o(0, n, y(i) ? i : B))
                        }
                        )).promise()
                    },
                    promise: function(t) {
                        return null != t ? x.extend(t, r) : r
                    }
                }
                  , s = {};
                return x.each(e, (function(t, n) {
                    var o = n[2]
                      , a = n[5];
                    r[n[1]] = o.add,
                    a && o.add((function() {
                        i = a
                    }
                    ), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                    o.add(n[3].fire),
                    s[n[0]] = function() {
                        return s[n[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                    }
                    ,
                    s[n[0] + "With"] = o.fireWith
                }
                )),
                r.promise(s),
                t && t.call(s, s),
                s
            },
            when: function(t) {
                var e = arguments.length
                  , n = e
                  , i = Array(n)
                  , r = l.call(arguments)
                  , s = x.Deferred()
                  , o = function(t) {
                    return function(n) {
                        i[t] = this,
                        r[t] = arguments.length > 1 ? l.call(arguments) : n,
                        --e || s.resolveWith(i, r)
                    }
                };
                if (e <= 1 && (R(t, s.done(o(n)).resolve, s.reject, !e),
                "pending" === s.state() || y(r[n] && r[n].then)))
                    return s.then();
                for (; n--; )
                    R(r[n], o(n), s.reject);
                return s.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        x.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && F.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        x.readyException = function(t) {
            n.setTimeout((function() {
                throw t
            }
            ))
        }
        ;
        var N = x.Deferred();
        function W() {
            o.removeEventListener("DOMContentLoaded", W),
            n.removeEventListener("load", W),
            x.ready()
        }
        x.fn.ready = function(t) {
            return N.then(t).catch((function(t) {
                x.readyException(t)
            }
            )),
            this
        }
        ,
        x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0,
                !0 !== t && --x.readyWait > 0 || N.resolveWith(o, [x]))
            }
        }),
        x.ready.then = N.then,
        "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", W),
        n.addEventListener("load", W));
        var U = function(t, e, n, i, r, s, o) {
            var a = 0
              , l = t.length
              , c = null == n;
            if ("object" === C(n))
                for (a in r = !0,
                n)
                    U(t, e, a, n[a], !0, s, o);
            else if (void 0 !== i && (r = !0,
            y(i) || (o = !0),
            c && (o ? (e.call(t, i),
            e = null) : (c = e,
            e = function(t, e, n) {
                return c.call(x(t), n)
            }
            )),
            e))
                for (; a < l; a++)
                    e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
        }
          , V = /^-ms-/
          , G = /-([a-z])/g;
        function Q(t, e) {
            return e.toUpperCase()
        }
        function Y(t) {
            return t.replace(V, "ms-").replace(G, Q)
        }
        var X = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        function K() {
            this.expando = x.expando + K.uid++
        }
        K.uid = 1,
        K.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e)
                    r[Y(e)] = n;
                else
                    for (i in e)
                        r[Y(i)] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e))in i ? [e] : e.match(j) || []).length;
                        for (; n--; )
                            delete i[e[n]]
                    }
                    (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !x.isEmptyObject(e)
            }
        };
        var Z = new K
          , J = new K
          , tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , et = /[A-Z]/g;
        function nt(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(et, "-$&").toLowerCase(),
                "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {}
                    J.set(t, e, n)
                } else
                    n = void 0;
            return n
        }
        x.extend({
            hasData: function(t) {
                return J.hasData(t) || Z.hasData(t)
            },
            data: function(t, e, n) {
                return J.access(t, e, n)
            },
            removeData: function(t, e) {
                J.remove(t, e)
            },
            _data: function(t, e, n) {
                return Z.access(t, e, n)
            },
            _removeData: function(t, e) {
                Z.remove(t, e)
            }
        }),
        x.fn.extend({
            data: function(t, e) {
                var n, i, r, s = this[0], o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = J.get(s),
                    1 === s.nodeType && !Z.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--; )
                            o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = Y(i.slice(5)),
                            nt(s, i, r[i]));
                        Z.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each((function() {
                    J.set(this, t)
                }
                )) : U(this, (function(e) {
                    var n;
                    if (s && void 0 === e)
                        return void 0 !== (n = J.get(s, t)) || void 0 !== (n = nt(s, t)) ? n : void 0;
                    this.each((function() {
                        J.set(this, t, e)
                    }
                    ))
                }
                ), null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each((function() {
                    J.remove(this, t)
                }
                ))
            }
        }),
        x.extend({
            queue: function(t, e, n) {
                var i;
                if (t)
                    return e = (e || "fx") + "queue",
                    i = Z.get(t, e),
                    n && (!i || Array.isArray(n) ? i = Z.access(t, e, x.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = x.queue(t, e)
                  , i = n.length
                  , r = n.shift()
                  , s = x._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(),
                i--),
                r && ("fx" === e && n.unshift("inprogress"),
                delete s.stop,
                r.call(t, (function() {
                    x.dequeue(t, e)
                }
                ), s)),
                !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Z.get(t, n) || Z.access(t, n, {
                    empty: x.Callbacks("once memory").add((function() {
                        Z.remove(t, [e + "queue", n])
                    }
                    ))
                })
            }
        }),
        x.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                n--),
                arguments.length < n ? x.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                    var n = x.queue(this, t, e);
                    x._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t)
                }
                ))
            },
            dequeue: function(t) {
                return this.each((function() {
                    x.dequeue(this, t)
                }
                ))
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1, r = x.Deferred(), s = this, o = this.length, a = function() {
                    --i || r.resolveWith(s, [s])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; o--; )
                    (n = Z.get(s[o], t + "queueHooks")) && n.empty && (i++,
                    n.empty.add(a));
                return a(),
                r.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$","i")
          , st = ["Top", "Right", "Bottom", "Left"]
          , ot = o.documentElement
          , at = function(t) {
            return x.contains(t.ownerDocument, t)
        }
          , lt = {
            composed: !0
        };
        ot.getRootNode && (at = function(t) {
            return x.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
        }
        );
        var ct = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === x.css(t, "display")
        }
          , ut = function(t, e, n, i) {
            var r, s, o = {};
            for (s in e)
                o[s] = t.style[s],
                t.style[s] = e[s];
            for (s in r = n.apply(t, i || []),
            e)
                t.style[s] = o[s];
            return r
        };
        function ht(t, e, n, i) {
            var r, s, o = 20, a = i ? function() {
                return i.cur()
            }
            : function() {
                return x.css(t, e, "")
            }
            , l = a(), c = n && n[3] || (x.cssNumber[e] ? "" : "px"), u = t.nodeType && (x.cssNumber[e] || "px" !== c && +l) && rt.exec(x.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2,
                c = c || u[3],
                u = +l || 1; o--; )
                    x.style(t, e, u + c),
                    (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0),
                    u /= s;
                u *= 2,
                x.style(t, e, u + c),
                n = n || []
            }
            return n && (u = +u || +l || 0,
            r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = c,
            i.start = u,
            i.end = r)),
            r
        }
        var dt = {};
        function ft(t) {
            var e, n = t.ownerDocument, i = t.nodeName, r = dt[i];
            return r || (e = n.body.appendChild(n.createElement(i)),
            r = x.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === r && (r = "block"),
            dt[i] = r,
            r)
        }
        function pt(t, e) {
            for (var n, i, r = [], s = 0, o = t.length; s < o; s++)
                (i = t[s]).style && (n = i.style.display,
                e ? ("none" === n && (r[s] = Z.get(i, "display") || null,
                r[s] || (i.style.display = "")),
                "" === i.style.display && ct(i) && (r[s] = ft(i))) : "none" !== n && (r[s] = "none",
                Z.set(i, "display", n)));
            for (s = 0; s < o; s++)
                null != r[s] && (t[s].style.display = r[s]);
            return t
        }
        x.fn.extend({
            show: function() {
                return pt(this, !0)
            },
            hide: function() {
                return pt(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                    ct(this) ? x(this).show() : x(this).hide()
                }
                ))
            }
        });
        var vt = /^(?:checkbox|radio)$/i
          , mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , gt = /^$|^module$|\/(?:java|ecma)script/i
          , yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function bt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && E(t, e) ? x.merge([t], n) : n
        }
        function wt(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"))
        }
        yt.optgroup = yt.option,
        yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead,
        yt.th = yt.td;
        var kt = /<|&#?\w+;/;
        function Ct(t, e, n, i, r) {
            for (var s, o, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
                if ((s = t[f]) || 0 === s)
                    if ("object" === C(s))
                        x.merge(d, s.nodeType ? [s] : s);
                    else if (kt.test(s)) {
                        for (o = o || h.appendChild(e.createElement("div")),
                        a = (mt.exec(s) || ["", ""])[1].toLowerCase(),
                        l = yt[a] || yt._default,
                        o.innerHTML = l[1] + x.htmlPrefilter(s) + l[2],
                        u = l[0]; u--; )
                            o = o.lastChild;
                        x.merge(d, o.childNodes),
                        (o = h.firstChild).textContent = ""
                    } else
                        d.push(e.createTextNode(s));
            for (h.textContent = "",
            f = 0; s = d[f++]; )
                if (i && x.inArray(s, i) > -1)
                    r && r.push(s);
                else if (c = at(s),
                o = bt(h.appendChild(s), "script"),
                c && wt(o),
                n)
                    for (u = 0; s = o[u++]; )
                        gt.test(s.type || "") && n.push(s);
            return h
        }
        !function() {
            var t = o.createDocumentFragment().appendChild(o.createElement("div"))
              , e = o.createElement("input");
            e.setAttribute("type", "radio"),
            e.setAttribute("checked", "checked"),
            e.setAttribute("name", "t"),
            t.appendChild(e),
            g.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            g.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var xt = /^key/
          , $t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , _t = /^([^.]*)(?:\.(.+)|)/;
        function Tt() {
            return !0
        }
        function St() {
            return !1
        }
        function At(t, e) {
            return t === function() {
                try {
                    return o.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }
        function zt(t, e, n, i, r, s) {
            var o, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n,
                n = void 0),
                e)
                    zt(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == r ? (r = n,
            i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
            i = void 0) : (r = i,
            i = n,
            n = void 0)),
            !1 === r)
                r = St;
            else if (!r)
                return t;
            return 1 === s && (o = r,
            (r = function(t) {
                return x().off(t),
                o.apply(this, arguments)
            }
            ).guid = o.guid || (o.guid = x.guid++)),
            t.each((function() {
                x.event.add(this, e, r, i, n)
            }
            ))
        }
        function Et(t, e, n) {
            n ? (Z.set(t, e, !1),
            x.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var i, r, s = Z.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (s.length)
                            (x.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (s = l.call(arguments),
                        Z.set(this, e, s),
                        i = n(this, e),
                        this[e](),
                        s !== (r = Z.get(this, e)) || i ? Z.set(this, e, !1) : r = {},
                        s !== r)
                            return t.stopImmediatePropagation(),
                            t.preventDefault(),
                            r.value
                    } else
                        s.length && (Z.set(this, e, {
                            value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this)
                        }),
                        t.stopImmediatePropagation())
                }
            })) : void 0 === Z.get(t, e) && x.event.add(t, e, Tt)
        }
        x.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var s, o, a, l, c, u, h, d, f, p, v, m = Z.get(t);
                if (m)
                    for (n.handler && (n = (s = n).handler,
                    r = s.selector),
                    r && x.find.matchesSelector(ot, r),
                    n.guid || (n.guid = x.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (o = m.handle) || (o = m.handle = function(e) {
                        return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    c = (e = (e || "").match(j) || [""]).length; c--; )
                        f = v = (a = _t.exec(e[c]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        f && (h = x.event.special[f] || {},
                        f = (r ? h.delegateType : h.bindType) || f,
                        h = x.event.special[f] || {},
                        u = x.extend({
                            type: f,
                            origType: v,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && x.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, s),
                        (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                        h.setup && !1 !== h.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(f, o)),
                        h.add && (h.add.call(t, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                        r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                        x.event.global[f] = !0)
            },
            remove: function(t, e, n, i, r) {
                var s, o, a, l, c, u, h, d, f, p, v, m = Z.hasData(t) && Z.get(t);
                if (m && (l = m.events)) {
                    for (c = (e = (e || "").match(j) || [""]).length; c--; )
                        if (f = v = (a = _t.exec(e[c]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        f) {
                            for (h = x.event.special[f] || {},
                            d = l[f = (i ? h.delegateType : h.bindType) || f] || [],
                            a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            o = s = d.length; s--; )
                                u = d[s],
                                !r && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(s, 1),
                                u.selector && d.delegateCount--,
                                h.remove && h.remove.call(t, u));
                            o && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || x.removeEvent(t, f, m.handle),
                            delete l[f])
                        } else
                            for (f in l)
                                x.event.remove(t, f + e[c], n, i, !0);
                    x.isEmptyObject(l) && Z.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, r, s, o, a = x.event.fix(t), l = new Array(arguments.length), c = (Z.get(this, "events") || {})[a.type] || [], u = x.event.special[a.type] || {};
                for (l[0] = a,
                e = 1; e < arguments.length; e++)
                    l[e] = arguments[e];
                if (a.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (o = x.event.handlers.call(this, a, c),
                    e = 0; (r = o[e++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = r.elem,
                        n = 0; (s = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s,
                            a.data = s.data,
                            void 0 !== (i = ((x.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                            a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, s, o, a = [], l = e.delegateCount, c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (s = [],
                            o = {},
                            n = 0; n < l; n++)
                                void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? x(r, this).index(c) > -1 : x.find(r, this, null, [c]).length),
                                o[r] && s.push(i);
                            s.length && a.push({
                                elem: c,
                                handlers: s
                            })
                        }
                return c = this,
                l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(x.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[x.expando] ? t : new x.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return vt.test(e.type) && e.click && E(e, "input") && Et(e, "click", Tt),
                        !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return vt.test(e.type) && e.click && E(e, "input") && Et(e, "click"),
                        !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return vt.test(e.type) && e.click && E(e, "input") && Z.get(e, "click") || E(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        x.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }
        ,
        x.Event = function(t, e) {
            if (!(this instanceof x.Event))
                return new x.Event(t,e);
            t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : St,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && x.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            this[x.expando] = !0
        }
        ,
        x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: St,
            isPropagationStopped: St,
            isImmediatePropagationStopped: St,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        x.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && $t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, x.event.addProp),
        x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            x.event.special[t] = {
                setup: function() {
                    return Et(this, t, At),
                    !1
                },
                trigger: function() {
                    return Et(this, t),
                    !0
                },
                delegateType: e
            }
        }
        )),
        x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(t, e) {
            x.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget, r = t.handleObj;
                    return i && (i === this || x.contains(this, i)) || (t.type = r.origType,
                    n = r.handler.apply(this, arguments),
                    t.type = e),
                    n
                }
            }
        }
        )),
        x.fn.extend({
            on: function(t, e, n, i) {
                return zt(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return zt(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj,
                    x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof t) {
                    for (r in t)
                        this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e,
                e = void 0),
                !1 === n && (n = St),
                this.each((function() {
                    x.event.remove(this, t, n, e)
                }
                ))
            }
        });
        var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Lt = /<script|<style|<link/i
          , Pt = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function qt(t, e) {
            return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
        }
        function Ht(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function Mt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function jt(t, e) {
            var n, i, r, s, o, a, l, c;
            if (1 === e.nodeType) {
                if (Z.hasData(t) && (s = Z.access(t),
                o = Z.set(e, s),
                c = s.events))
                    for (r in delete o.handle,
                    o.events = {},
                    c)
                        for (n = 0,
                        i = c[r].length; n < i; n++)
                            x.event.add(e, r, c[r][n]);
                J.hasData(t) && (a = J.access(t),
                l = x.extend({}, a),
                J.set(e, l))
            }
        }
        function It(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && vt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
        function Bt(t, e, n, i) {
            e = c.apply([], e);
            var r, s, o, a, l, u, h = 0, d = t.length, f = d - 1, p = e[0], v = y(p);
            if (v || d > 1 && "string" == typeof p && !g.checkClone && Pt.test(p))
                return t.each((function(r) {
                    var s = t.eq(r);
                    v && (e[0] = p.call(this, r, s.html())),
                    Bt(s, e, n, i)
                }
                ));
            if (d && (s = (r = Ct(e, t[0].ownerDocument, !1, t, i)).firstChild,
            1 === r.childNodes.length && (r = s),
            s || i)) {
                for (a = (o = x.map(bt(r, "script"), Ht)).length; h < d; h++)
                    l = r,
                    h !== f && (l = x.clone(l, !0, !0),
                    a && x.merge(o, bt(l, "script"))),
                    n.call(t[h], l, h);
                if (a)
                    for (u = o[o.length - 1].ownerDocument,
                    x.map(o, Mt),
                    h = 0; h < a; h++)
                        l = o[h],
                        gt.test(l.type || "") && !Z.access(l, "globalEval") && x.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && !l.noModule && x._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }) : k(l.textContent.replace(Dt, ""), l, u))
            }
            return t
        }
        function Rt(t, e, n) {
            for (var i, r = e ? x.filter(e, t) : t, s = 0; null != (i = r[s]); s++)
                n || 1 !== i.nodeType || x.cleanData(bt(i)),
                i.parentNode && (n && at(i) && wt(bt(i, "script")),
                i.parentNode.removeChild(i));
            return t
        }
        x.extend({
            htmlPrefilter: function(t) {
                return t.replace(Ot, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, s, o, a = t.cloneNode(!0), l = at(t);
                if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t)))
                    for (o = bt(a),
                    i = 0,
                    r = (s = bt(t)).length; i < r; i++)
                        It(s[i], o[i]);
                if (e)
                    if (n)
                        for (s = s || bt(t),
                        o = o || bt(a),
                        i = 0,
                        r = s.length; i < r; i++)
                            jt(s[i], o[i]);
                    else
                        jt(t, a);
                return (o = bt(a, "script")).length > 0 && wt(o, !l && bt(t, "script")),
                a
            },
            cleanData: function(t) {
                for (var e, n, i, r = x.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (X(n)) {
                        if (e = n[Z.expando]) {
                            if (e.events)
                                for (i in e.events)
                                    r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                            n[Z.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }),
        x.fn.extend({
            detach: function(t) {
                return Rt(this, t, !0)
            },
            remove: function(t) {
                return Rt(this, t)
            },
            text: function(t) {
                return U(this, (function(t) {
                    return void 0 === t ? x.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }
                    ))
                }
                ), null, t, arguments.length)
            },
            append: function() {
                return Bt(this, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qt(this, t).appendChild(t)
                }
                ))
            },
            prepend: function() {
                return Bt(this, arguments, (function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = qt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }
                ))
            },
            before: function() {
                return Bt(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }
                ))
            },
            after: function() {
                return Bt(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }
                ))
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (x.cleanData(bt(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map((function() {
                    return x.clone(this, t, e)
                }
                ))
            },
            html: function(t) {
                return U(this, (function(t) {
                    var e = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !Lt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = x.htmlPrefilter(t);
                        try {
                            for (; n < i; n++)
                                1 === (e = this[n] || {}).nodeType && (x.cleanData(bt(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }
                ), null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Bt(this, arguments, (function(e) {
                    var n = this.parentNode;
                    x.inArray(this, t) < 0 && (x.cleanData(bt(this)),
                    n && n.replaceChild(e, this))
                }
                ), t)
            }
        }),
        x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(t, e) {
            x.fn[t] = function(t) {
                for (var n, i = [], r = x(t), s = r.length - 1, o = 0; o <= s; o++)
                    n = o === s ? this : this.clone(!0),
                    x(r[o])[e](n),
                    u.apply(i, n.get());
                return this.pushStack(i)
            }
        }
        ));
        var Ft = new RegExp("^(" + it + ")(?!px)[a-z%]+$","i")
          , Nt = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n),
            e.getComputedStyle(t)
        }
          , Wt = new RegExp(st.join("|"),"i");
        function Ut(t, e, n) {
            var i, r, s, o, a = t.style;
            return (n = n || Nt(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || at(t) || (o = x.style(t, e)),
            !g.pixelBoxStyles() && Ft.test(o) && Wt.test(e) && (i = a.width,
            r = a.minWidth,
            s = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = o,
            o = n.width,
            a.width = i,
            a.minWidth = r,
            a.maxWidth = s)),
            void 0 !== o ? o + "" : o
        }
        function Vt(t, e) {
            return {
                get: function() {
                    if (!t())
                        return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function t() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ot.appendChild(c).appendChild(u);
                    var t = n.getComputedStyle(u);
                    i = "1%" !== t.top,
                    l = 12 === e(t.marginLeft),
                    u.style.right = "60%",
                    a = 36 === e(t.right),
                    r = 36 === e(t.width),
                    u.style.position = "absolute",
                    s = 12 === e(u.offsetWidth / 3),
                    ot.removeChild(c),
                    u = null
                }
            }
            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, r, s, a, l, c = o.createElement("div"), u = o.createElement("div");
            u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            g.clearCloneStyle = "content-box" === u.style.backgroundClip,
            x.extend(g, {
                boxSizingReliable: function() {
                    return t(),
                    r
                },
                pixelBoxStyles: function() {
                    return t(),
                    a
                },
                pixelPosition: function() {
                    return t(),
                    i
                },
                reliableMarginLeft: function() {
                    return t(),
                    l
                },
                scrollboxSize: function() {
                    return t(),
                    s
                }
            }))
        }();
        var Gt = ["Webkit", "Moz", "ms"]
          , Qt = o.createElement("div").style
          , Yt = {};
        function Xt(t) {
            return x.cssProps[t] || Yt[t] || (t in Qt ? t : Yt[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--; )
                    if ((t = Gt[n] + e)in Qt)
                        return t
            }(t) || t)
        }
        var Kt = /^(none|table(?!-c[ea]).+)/
          , Zt = /^--/
          , Jt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , te = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function ee(t, e, n) {
            var i = rt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }
        function ne(t, e, n, i, r, s) {
            var o = "width" === e ? 1 : 0
              , a = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; o < 4; o += 2)
                "margin" === n && (l += x.css(t, n + st[o], !0, r)),
                i ? ("content" === n && (l -= x.css(t, "padding" + st[o], !0, r)),
                "margin" !== n && (l -= x.css(t, "border" + st[o] + "Width", !0, r))) : (l += x.css(t, "padding" + st[o], !0, r),
                "padding" !== n ? l += x.css(t, "border" + st[o] + "Width", !0, r) : a += x.css(t, "border" + st[o] + "Width", !0, r));
            return !i && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0),
            l
        }
        function ie(t, e, n) {
            var i = Nt(t)
              , r = (!g.boxSizingReliable() || n) && "border-box" === x.css(t, "boxSizing", !1, i)
              , s = r
              , o = Ut(t, e, i)
              , a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Ft.test(o)) {
                if (!n)
                    return o;
                o = "auto"
            }
            return (!g.boxSizingReliable() && r || "auto" === o || !parseFloat(o) && "inline" === x.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === x.css(t, "boxSizing", !1, i),
            (s = a in t) && (o = t[a])),
            (o = parseFloat(o) || 0) + ne(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
        }
        function re(t, e, n, i, r) {
            return new re.prototype.init(t,e,n,i,r)
        }
        x.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = Ut(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = Y(e), l = Zt.test(e), c = t.style;
                    if (l || (e = Xt(a)),
                    o = x.cssHooks[e] || x.cssHooks[a],
                    void 0 === n)
                        return o && "get"in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e];
                    "string" == (s = typeof n) && (r = rt.exec(n)) && r[1] && (n = ht(t, e, r),
                    s = "number"),
                    null != n && n == n && ("number" !== s || l || (n += r && r[3] || (x.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                    o && "set"in o && void 0 === (n = o.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var r, s, o, a = Y(e);
                return Zt.test(e) || (e = Xt(a)),
                (o = x.cssHooks[e] || x.cssHooks[a]) && "get"in o && (r = o.get(t, !0, n)),
                void 0 === r && (r = Ut(t, e, i)),
                "normal" === r && e in te && (r = te[e]),
                "" === n || n ? (s = parseFloat(r),
                !0 === n || isFinite(s) ? s || 0 : r) : r
            }
        }),
        x.each(["height", "width"], (function(t, e) {
            x.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n)
                        return !Kt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, i) : ut(t, Jt, (function() {
                            return ie(t, e, i)
                        }
                        ))
                },
                set: function(t, n, i) {
                    var r, s = Nt(t), o = !g.scrollboxSize() && "absolute" === s.position, a = (o || i) && "border-box" === x.css(t, "boxSizing", !1, s), l = i ? ne(t, e, i, a, s) : 0;
                    return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - ne(t, e, "border", !1, s) - .5)),
                    l && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n,
                    n = x.css(t, e)),
                    ee(0, n, l)
                }
            }
        }
        )),
        x.cssHooks.marginLeft = Vt(g.reliableMarginLeft, (function(t, e) {
            if (e)
                return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - ut(t, {
                    marginLeft: 0
                }, (function() {
                    return t.getBoundingClientRect().left
                }
                ))) + "px"
        }
        )),
        x.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(t, e) {
            x.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        r[t + st[i] + e] = s[i] || s[i - 2] || s[0];
                    return r
                }
            },
            "margin" !== t && (x.cssHooks[t + e].set = ee)
        }
        )),
        x.fn.extend({
            css: function(t, e) {
                return U(this, (function(t, e, n) {
                    var i, r, s = {}, o = 0;
                    if (Array.isArray(e)) {
                        for (i = Nt(t),
                        r = e.length; o < r; o++)
                            s[e[o]] = x.css(t, e[o], !1, i);
                        return s
                    }
                    return void 0 !== n ? x.style(t, e, n) : x.css(t, e)
                }
                ), t, e, arguments.length > 1)
            }
        }),
        x.Tween = re,
        re.prototype = {
            constructor: re,
            init: function(t, e, n, i, r, s) {
                this.elem = t,
                this.prop = n,
                this.easing = r || x.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = s || (x.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : re.propHooks._default.set(this),
                this
            }
        },
        re.prototype.init.prototype = re.prototype,
        re.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !x.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        re.propHooks.scrollTop = re.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        x.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        x.fx = re.prototype.init,
        x.fx.step = {};
        var se, oe, ae = /^(?:toggle|show|hide)$/, le = /queueHooks$/;
        function ce() {
            oe && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ce) : n.setTimeout(ce, x.fx.interval),
            x.fx.tick())
        }
        function ue() {
            return n.setTimeout((function() {
                se = void 0
            }
            )),
            se = Date.now()
        }
        function he(t, e) {
            var n, i = 0, r = {
                height: t
            };
            for (e = e ? 1 : 0; i < 4; i += 2 - e)
                r["margin" + (n = st[i])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t),
            r
        }
        function de(t, e, n) {
            for (var i, r = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                if (i = r[s].call(n, e, t))
                    return i
        }
        function fe(t, e, n) {
            var i, r, s = 0, o = fe.prefilters.length, a = x.Deferred().always((function() {
                delete l.elem
            }
            )), l = function() {
                if (r)
                    return !1;
                for (var e = se || ue(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++)
                    c.tweens[s].run(i);
                return a.notifyWith(t, [c, i, n]),
                i < 1 && o ? n : (o || a.notifyWith(t, [c, 1, 0]),
                a.resolveWith(t, [c]),
                !1)
            }, c = a.promise({
                elem: t,
                props: x.extend({}, e),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: se || ue(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = x.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i),
                    i
                },
                stop: function(e) {
                    var n = 0
                      , i = e ? c.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < i; n++)
                        c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]),
                    a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                    this
                }
            }), u = c.props;
            for (function(t, e) {
                var n, i, r, s, o;
                for (n in t)
                    if (r = e[i = Y(n)],
                    s = t[n],
                    Array.isArray(s) && (r = s[1],
                    s = t[n] = s[0]),
                    n !== i && (t[i] = s,
                    delete t[n]),
                    (o = x.cssHooks[i]) && "expand"in o)
                        for (n in s = o.expand(s),
                        delete t[i],
                        s)
                            n in t || (t[n] = s[n],
                            e[n] = r);
                    else
                        e[i] = r
            }(u, c.opts.specialEasing); s < o; s++)
                if (i = fe.prefilters[s].call(c, t, u, c.opts))
                    return y(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                    i;
            return x.map(u, de, c),
            y(c.opts.start) && c.opts.start.call(t, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            x.fx.timer(x.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        x.Animation = x.extend(fe, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return ht(n.elem, t, rt.exec(e), n),
                    n
                }
                ]
            },
            tweener: function(t, e) {
                y(t) ? (e = t,
                t = ["*"]) : t = t.match(j);
                for (var n, i = 0, r = t.length; i < r; i++)
                    n = t[i],
                    fe.tweeners[n] = fe.tweeners[n] || [],
                    fe.tweeners[n].unshift(e)
            },
            prefilters: [function(t, e, n) {
                var i, r, s, o, a, l, c, u, h = "width"in e || "height"in e, d = this, f = {}, p = t.style, v = t.nodeType && ct(t), m = Z.get(t, "fxshow");
                for (i in n.queue || (null == (o = x._queueHooks(t, "fx")).unqueued && (o.unqueued = 0,
                a = o.empty.fire,
                o.empty.fire = function() {
                    o.unqueued || a()
                }
                ),
                o.unqueued++,
                d.always((function() {
                    d.always((function() {
                        o.unqueued--,
                        x.queue(t, "fx").length || o.empty.fire()
                    }
                    ))
                }
                ))),
                e)
                    if (r = e[i],
                    ae.test(r)) {
                        if (delete e[i],
                        s = s || "toggle" === r,
                        r === (v ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i])
                                continue;
                            v = !0
                        }
                        f[i] = m && m[i] || x.style(t, i)
                    }
                if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f))
                    for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    null == (c = m && m.display) && (c = Z.get(t, "display")),
                    "none" === (u = x.css(t, "display")) && (c ? u = c : (pt([t], !0),
                    c = t.style.display || c,
                    u = x.css(t, "display"),
                    pt([t]))),
                    ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(t, "float") && (l || (d.done((function() {
                        p.display = c
                    }
                    )),
                    null == c && (u = p.display,
                    c = "none" === u ? "" : u)),
                    p.display = "inline-block")),
                    n.overflow && (p.overflow = "hidden",
                    d.always((function() {
                        p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                    }
                    ))),
                    l = !1,
                    f)
                        l || (m ? "hidden"in m && (v = m.hidden) : m = Z.access(t, "fxshow", {
                            display: c
                        }),
                        s && (m.hidden = !v),
                        v && pt([t], !0),
                        d.done((function() {
                            for (i in v || pt([t]),
                            Z.remove(t, "fxshow"),
                            f)
                                x.style(t, i, f[i])
                        }
                        ))),
                        l = de(v ? m[i] : 0, i, d),
                        i in m || (m[i] = l.start,
                        v && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(t, e) {
                e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
            }
        }),
        x.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? x.extend({}, t) : {
                complete: n || !n && e || y(t) && t,
                duration: t,
                easing: n && e || e && !y(e) && e
            };
            return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                y(i.old) && i.old.call(this),
                i.queue && x.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        x.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(ct).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = x.isEmptyObject(t)
                  , s = x.speed(e, n, i)
                  , o = function() {
                    var e = fe(this, x.extend({}, t), s);
                    (r || Z.get(this, "finish")) && e.stop(!0)
                };
                return o.finish = o,
                r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(n)
                };
                return "string" != typeof t && (n = e,
                e = t,
                t = void 0),
                e && !1 !== t && this.queue(t || "fx", []),
                this.each((function() {
                    var e = !0
                      , r = null != t && t + "queueHooks"
                      , s = x.timers
                      , o = Z.get(this);
                    if (r)
                        o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o)
                            o[r] && o[r].stop && le.test(r) && i(o[r]);
                    for (r = s.length; r--; )
                        s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n),
                        e = !1,
                        s.splice(r, 1));
                    !e && n || x.dequeue(this, t)
                }
                ))
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"),
                this.each((function() {
                    var e, n = Z.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], s = x.timers, o = i ? i.length : 0;
                    for (n.finish = !0,
                    x.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = s.length; e--; )
                        s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                        s.splice(e, 1));
                    for (e = 0; e < o; e++)
                        i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                }
                ))
            }
        }),
        x.each(["toggle", "show", "hide"], (function(t, e) {
            var n = x.fn[e];
            x.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(he(e, !0), t, i, r)
            }
        }
        )),
        x.each({
            slideDown: he("show"),
            slideUp: he("hide"),
            slideToggle: he("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(t, e) {
            x.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }
        )),
        x.timers = [],
        x.fx.tick = function() {
            var t, e = 0, n = x.timers;
            for (se = Date.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || x.fx.stop(),
            se = void 0
        }
        ,
        x.fx.timer = function(t) {
            x.timers.push(t),
            x.fx.start()
        }
        ,
        x.fx.interval = 13,
        x.fx.start = function() {
            oe || (oe = !0,
            ce())
        }
        ,
        x.fx.stop = function() {
            oe = null
        }
        ,
        x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        x.fn.delay = function(t, e) {
            return t = x.fx && x.fx.speeds[t] || t,
            e = e || "fx",
            this.queue(e, (function(e, i) {
                var r = n.setTimeout(e, t);
                i.stop = function() {
                    n.clearTimeout(r)
                }
            }
            ))
        }
        ,
        function() {
            var t = o.createElement("input")
              , e = o.createElement("select").appendChild(o.createElement("option"));
            t.type = "checkbox",
            g.checkOn = "" !== t.value,
            g.optSelected = e.selected,
            (t = o.createElement("input")).value = "t",
            t.type = "radio",
            g.radioValue = "t" === t.value
        }();
        var pe, ve = x.expr.attrHandle;
        x.fn.extend({
            attr: function(t, e) {
                return U(this, x.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each((function() {
                    x.removeAttr(this, t)
                }
                ))
            }
        }),
        x.extend({
            attr: function(t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === s && x.isXMLDoc(t) || (r = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? pe : void 0)),
                    void 0 !== n ? null === n ? void x.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                    n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = x.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!g.radioValue && "radio" === e && E(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0, r = e && e.match(j);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++]; )
                        t.removeAttribute(n)
            }
        }),
        pe = {
            set: function(t, e, n) {
                return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n),
                n
            }
        },
        x.each(x.expr.match.bool.source.match(/\w+/g), (function(t, e) {
            var n = ve[e] || x.find.attr;
            ve[e] = function(t, e, i) {
                var r, s, o = e.toLowerCase();
                return i || (s = ve[o],
                ve[o] = r,
                r = null != n(t, e, i) ? o : null,
                ve[o] = s),
                r
            }
        }
        ));
        var me = /^(?:input|select|textarea|button)$/i
          , ge = /^(?:a|area)$/i;
        function ye(t) {
            return (t.match(j) || []).join(" ")
        }
        function be(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function we(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(j) || []
        }
        x.fn.extend({
            prop: function(t, e) {
                return U(this, x.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each((function() {
                    delete this[x.propFix[t] || t]
                }
                ))
            }
        }),
        x.extend({
            prop: function(t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return 1 === s && x.isXMLDoc(t) || (e = x.propFix[e] || e,
                    r = x.propHooks[e]),
                    void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = x.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : me.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        g.optSelected || (x.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            x.propFix[this.toLowerCase()] = this
        }
        )),
        x.fn.extend({
            addClass: function(t) {
                var e, n, i, r, s, o, a, l = 0;
                if (y(t))
                    return this.each((function(e) {
                        x(this).addClass(t.call(this, e, be(this)))
                    }
                    ));
                if ((e = we(t)).length)
                    for (; n = this[l++]; )
                        if (r = be(n),
                        i = 1 === n.nodeType && " " + ye(r) + " ") {
                            for (o = 0; s = e[o++]; )
                                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            r !== (a = ye(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, s, o, a, l = 0;
                if (y(t))
                    return this.each((function(e) {
                        x(this).removeClass(t.call(this, e, be(this)))
                    }
                    ));
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = we(t)).length)
                    for (; n = this[l++]; )
                        if (r = be(n),
                        i = 1 === n.nodeType && " " + ye(r) + " ") {
                            for (o = 0; s = e[o++]; )
                                for (; i.indexOf(" " + s + " ") > -1; )
                                    i = i.replace(" " + s + " ", " ");
                            r !== (a = ye(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t
                  , i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each((function(n) {
                    x(this).toggleClass(t.call(this, n, be(this), e), e)
                }
                )) : this.each((function() {
                    var e, r, s, o;
                    if (i)
                        for (r = 0,
                        s = x(this),
                        o = we(t); e = o[r++]; )
                            s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else
                        void 0 !== t && "boolean" !== n || ((e = be(this)) && Z.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                }
                ))
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var ke = /\r/g;
        x.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = y(t),
                this.each((function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, x(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, (function(t) {
                        return null == t ? "" : t + ""
                    }
                    ))),
                    (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                }
                ))) : r ? (e = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ke, "") : null == n ? "" : n : void 0
            }
        }),
        x.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = x.find.attr(t, "value");
                        return null != e ? e : ye(x.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, r = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [], l = o ? s + 1 : r.length;
                        for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                            if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                if (e = x(n).val(),
                                o)
                                    return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, s = x.makeArray(e), o = r.length; o--; )
                            ((i = r[o]).selected = x.inArray(x.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1),
                        s
                    }
                }
            }
        }),
        x.each(["radio", "checkbox"], (function() {
            x.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = x.inArray(x(t).val(), e) > -1
                }
            },
            g.checkOn || (x.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        }
        )),
        g.focusin = "onfocusin"in n;
        var Ce = /^(?:focusinfocus|focusoutblur)$/
          , xe = function(t) {
            t.stopPropagation()
        };
        x.extend(x.event, {
            trigger: function(t, e, i, r) {
                var s, a, l, c, u, h, d, f, v = [i || o], m = p.call(t, "type") ? t.type : t, g = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = f = l = i = i || o,
                3 !== i.nodeType && 8 !== i.nodeType && !Ce.test(m + x.event.triggered) && (m.indexOf(".") > -1 && (m = (g = m.split(".")).shift(),
                g.sort()),
                u = m.indexOf(":") < 0 && "on" + m,
                (t = t[x.expando] ? t : new x.Event(m,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
                t.namespace = g.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = i),
                e = null == e ? [t] : x.makeArray(e, [t]),
                d = x.event.special[m] || {},
                r || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                    if (!r && !d.noBubble && !b(i)) {
                        for (c = d.delegateType || m,
                        Ce.test(c + m) || (a = a.parentNode); a; a = a.parentNode)
                            v.push(a),
                            l = a;
                        l === (i.ownerDocument || o) && v.push(l.defaultView || l.parentWindow || n)
                    }
                    for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
                        f = a,
                        t.type = s > 1 ? c : d.bindType || m,
                        (h = (Z.get(a, "events") || {})[t.type] && Z.get(a, "handle")) && h.apply(a, e),
                        (h = u && a[u]) && h.apply && X(a) && (t.result = h.apply(a, e),
                        !1 === t.result && t.preventDefault());
                    return t.type = m,
                    r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), e) || !X(i) || u && y(i[m]) && !b(i) && ((l = i[u]) && (i[u] = null),
                    x.event.triggered = m,
                    t.isPropagationStopped() && f.addEventListener(m, xe),
                    i[m](),
                    t.isPropagationStopped() && f.removeEventListener(m, xe),
                    x.event.triggered = void 0,
                    l && (i[u] = l)),
                    t.result
                }
            },
            simulate: function(t, e, n) {
                var i = x.extend(new x.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                x.event.trigger(i, null, e)
            }
        }),
        x.fn.extend({
            trigger: function(t, e) {
                return this.each((function() {
                    x.event.trigger(t, e, this)
                }
                ))
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n)
                    return x.event.trigger(t, e, n, !0)
            }
        }),
        g.focusin || x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            var n = function(t) {
                x.event.simulate(e, t.target, x.event.fix(t))
            };
            x.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , r = Z.access(i, e);
                    r || i.addEventListener(t, n, !0),
                    Z.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , r = Z.access(i, e) - 1;
                    r ? Z.access(i, e, r) : (i.removeEventListener(t, n, !0),
                    Z.remove(i, e))
                }
            }
        }
        ));
        var $e = n.location
          , _e = Date.now()
          , Te = /\?/;
        x.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t)
                return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t),
            e
        }
        ;
        var Se = /\[\]$/
          , Ae = /\r?\n/g
          , ze = /^(?:submit|button|image|reset|file)$/i
          , Ee = /^(?:input|select|textarea|keygen)/i;
        function Oe(t, e, n, i) {
            var r;
            if (Array.isArray(e))
                x.each(e, (function(e, r) {
                    n || Se.test(t) ? i(t, r) : Oe(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                }
                ));
            else if (n || "object" !== C(e))
                i(t, e);
            else
                for (r in e)
                    Oe(t + "[" + r + "]", e[r], n, i)
        }
        x.param = function(t, e) {
            var n, i = [], r = function(t, e) {
                var n = y(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == t)
                return "";
            if (Array.isArray(t) || t.jquery && !x.isPlainObject(t))
                x.each(t, (function() {
                    r(this.name, this.value)
                }
                ));
            else
                for (n in t)
                    Oe(n, t[n], e, r);
            return i.join("&")
        }
        ,
        x.fn.extend({
            serialize: function() {
                return x.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var t = x.prop(this, "elements");
                    return t ? x.makeArray(t) : this
                }
                )).filter((function() {
                    var t = this.type;
                    return this.name && !x(this).is(":disabled") && Ee.test(this.nodeName) && !ze.test(t) && (this.checked || !vt.test(t))
                }
                )).map((function(t, e) {
                    var n = x(this).val();
                    return null == n ? null : Array.isArray(n) ? x.map(n, (function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ae, "\r\n")
                        }
                    }
                    )) : {
                        name: e.name,
                        value: n.replace(Ae, "\r\n")
                    }
                }
                )).get()
            }
        });
        var Le = /%20/g
          , Pe = /#.*$/
          , De = /([?&])_=[^&]*/
          , qe = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , He = /^(?:GET|HEAD)$/
          , Me = /^\/\//
          , je = {}
          , Ie = {}
          , Be = "*/".concat("*")
          , Re = o.createElement("a");
        function Fe(t) {
            return function(e, n) {
                "string" != typeof e && (n = e,
                e = "*");
                var i, r = 0, s = e.toLowerCase().match(j) || [];
                if (y(n))
                    for (; i = s[r++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function Ne(t, e, n, i) {
            var r = {}
              , s = t === Ie;
            function o(a) {
                var l;
                return r[a] = !0,
                x.each(t[a] || [], (function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                    o(c),
                    !1)
                }
                )),
                l
            }
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }
        function We(t, e) {
            var n, i, r = x.ajaxSettings.flatOptions || {};
            for (n in e)
                void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && x.extend(!0, t, i),
            t
        }
        Re.href = $e.href,
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $e.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($e.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": x.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? We(We(t, x.ajaxSettings), e) : We(x.ajaxSettings, t)
            },
            ajaxPrefilter: Fe(je),
            ajaxTransport: Fe(Ie),
            ajax: function(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var i, r, s, a, l, c, u, h, d, f, p = x.ajaxSetup({}, e), v = p.context || p, m = p.context && (v.nodeType || v.jquery) ? x(v) : x.event, g = x.Deferred(), y = x.Callbacks("once memory"), b = p.statusCode || {}, w = {}, k = {}, C = "canceled", $ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = qe.exec(s); )
                                    a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t,
                        w[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (p.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u)
                                $.always(t[$.status]);
                            else
                                for (e in t)
                                    b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || C;
                        return i && i.abort(e),
                        _(0, e),
                        this
                    }
                };
                if (g.promise($),
                p.url = ((t || p.url || $e.href) + "").replace(Me, $e.protocol + "//"),
                p.type = e.method || e.type || p.method || p.type,
                p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""],
                null == p.crossDomain) {
                    c = o.createElement("a");
                    try {
                        c.href = p.url,
                        c.href = c.href,
                        p.crossDomain = Re.protocol + "//" + Re.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
                Ne(je, p, e, $),
                u)
                    return $;
                for (d in (h = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !He.test(p.type),
                r = p.url.replace(Pe, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Le, "+")) : (f = p.url.slice(r.length),
                p.data && (p.processData || "string" == typeof p.data) && (r += (Te.test(r) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (r = r.replace(De, "$1"),
                f = (Te.test(r) ? "&" : "?") + "_=" + _e++ + f),
                p.url = r + f),
                p.ifModified && (x.lastModified[r] && $.setRequestHeader("If-Modified-Since", x.lastModified[r]),
                x.etag[r] && $.setRequestHeader("If-None-Match", x.etag[r])),
                (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && $.setRequestHeader("Content-Type", p.contentType),
                $.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    $.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(v, $, p) || u))
                    return $.abort();
                if (C = "abort",
                y.add(p.complete),
                $.done(p.success),
                $.fail(p.error),
                i = Ne(Ie, p, e, $)) {
                    if ($.readyState = 1,
                    h && m.trigger("ajaxSend", [$, p]),
                    u)
                        return $;
                    p.async && p.timeout > 0 && (l = n.setTimeout((function() {
                        $.abort("timeout")
                    }
                    ), p.timeout));
                    try {
                        u = !1,
                        i.send(w, _)
                    } catch (t) {
                        if (u)
                            throw t;
                        _(-1, t)
                    }
                } else
                    _(-1, "No Transport");
                function _(t, e, o, a) {
                    var c, d, f, w, k, C = e;
                    u || (u = !0,
                    l && n.clearTimeout(l),
                    i = void 0,
                    s = a || "",
                    $.readyState = t > 0 ? 4 : 0,
                    c = t >= 200 && t < 300 || 304 === t,
                    o && (w = function(t, e, n) {
                        for (var i, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in a)
                                if (a[r] && a[r].test(i)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0]in n)
                            s = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    s = r;
                                    break
                                }
                                o || (o = r)
                            }
                            s = s || o
                        }
                        if (s)
                            return s !== l[0] && l.unshift(s),
                            n[s]
                    }(p, $, o)),
                    w = function(t, e, n, i) {
                        var r, s, o, a, l, c = {}, u = t.dataTypes.slice();
                        if (u[1])
                            for (o in t.converters)
                                c[o.toLowerCase()] = t.converters[o];
                        for (s = u.shift(); s; )
                            if (t.responseFields[s] && (n[t.responseFields[s]] = e),
                            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                            l = s,
                            s = u.shift())
                                if ("*" === s)
                                    s = l;
                                else if ("*" !== l && l !== s) {
                                    if (!(o = c[l + " " + s] || c["* " + s]))
                                        for (r in c)
                                            if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                !0 === o ? o = c[r] : !0 !== c[r] && (s = a[0],
                                                u.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== o)
                                        if (o && t.throws)
                                            e = o(e);
                                        else
                                            try {
                                                e = o(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: o ? t : "No conversion from " + l + " to " + s
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, w, $, c),
                    c ? (p.ifModified && ((k = $.getResponseHeader("Last-Modified")) && (x.lastModified[r] = k),
                    (k = $.getResponseHeader("etag")) && (x.etag[r] = k)),
                    204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                    d = w.data,
                    c = !(f = w.error))) : (f = C,
                    !t && C || (C = "error",
                    t < 0 && (t = 0))),
                    $.status = t,
                    $.statusText = (e || C) + "",
                    c ? g.resolveWith(v, [d, C, $]) : g.rejectWith(v, [$, C, f]),
                    $.statusCode(b),
                    b = void 0,
                    h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [$, p, c ? d : f]),
                    y.fireWith(v, [$, C]),
                    h && (m.trigger("ajaxComplete", [$, p]),
                    --x.active || x.event.trigger("ajaxStop")))
                }
                return $
            },
            getJSON: function(t, e, n) {
                return x.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return x.get(t, void 0, e, "script")
            }
        }),
        x.each(["get", "post"], (function(t, e) {
            x[e] = function(t, n, i, r) {
                return y(n) && (r = r || i,
                i = n,
                n = void 0),
                x.ajax(x.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, x.isPlainObject(t) && t))
            }
        }
        )),
        x._evalUrl = function(t, e) {
            return x.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    x.globalEval(t, e)
                }
            })
        }
        ,
        x.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])),
                e = x(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map((function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }
                )).append(this)),
                this
            },
            wrapInner: function(t) {
                return y(t) ? this.each((function(e) {
                    x(this).wrapInner(t.call(this, e))
                }
                )) : this.each((function() {
                    var e = x(this)
                      , n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                }
                ))
            },
            wrap: function(t) {
                var e = y(t);
                return this.each((function(n) {
                    x(this).wrapAll(e ? t.call(this, n) : t)
                }
                ))
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each((function() {
                    x(this).replaceWith(this.childNodes)
                }
                )),
                this
            }
        }),
        x.expr.pseudos.hidden = function(t) {
            return !x.expr.pseudos.visible(t)
        }
        ,
        x.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        x.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var Ue = {
            0: 200,
            1223: 204
        }
          , Ve = x.ajaxSettings.xhr();
        g.cors = !!Ve && "withCredentials"in Ve,
        g.ajax = Ve = !!Ve,
        x.ajaxTransport((function(t) {
            var e, i;
            if (g.cors || Ve && !t.crossDomain)
                return {
                    send: function(r, s) {
                        var o, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (o in t.xhrFields)
                                a[o] = t.xhrFields[o];
                        for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                        t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                        r)
                            a.setRequestHeader(o, r[o]);
                        e = function(t) {
                            return function() {
                                e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ue[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = e(),
                        i = a.onerror = a.ontimeout = e("error"),
                        void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout((function() {
                                e && i()
                            }
                            ))
                        }
                        ,
                        e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e)
                                throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }
        )),
        x.ajaxPrefilter((function(t) {
            t.crossDomain && (t.contents.script = !1)
        }
        )),
        x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return x.globalEval(t),
                    t
                }
            }
        }),
        x.ajaxPrefilter("script", (function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }
        )),
        x.ajaxTransport("script", (function(t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs)
                return {
                    send: function(i, r) {
                        e = x("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(),
                            n = null,
                            t && r("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        o.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        }
        ));
        var Ge = []
          , Qe = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ge.pop() || x.expando + "_" + _e++;
                return this[t] = !0,
                t
            }
        }),
        x.ajaxPrefilter("json jsonp", (function(t, e, i) {
            var r, s, o, a = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(Qe, "$1" + r) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                t.converters["script json"] = function() {
                    return o || x.error(r + " was not called"),
                    o[0]
                }
                ,
                t.dataTypes[0] = "json",
                s = n[r],
                n[r] = function() {
                    o = arguments
                }
                ,
                i.always((function() {
                    void 0 === s ? x(n).removeProp(r) : n[r] = s,
                    t[r] && (t.jsonpCallback = e.jsonpCallback,
                    Ge.push(r)),
                    o && y(s) && s(o[0]),
                    o = s = void 0
                }
                )),
                "script"
        }
        )),
        g.createHTMLDocument = function() {
            var t = o.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
            2 === t.childNodes.length
        }(),
        x.parseHTML = function(t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
            e = !1),
            e || (g.createHTMLDocument ? ((i = (e = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href,
            e.head.appendChild(i)) : e = o),
            s = !n && [],
            (r = O.exec(t)) ? [e.createElement(r[1])] : (r = Ct([t], e, s),
            s && s.length && x(s).remove(),
            x.merge([], r.childNodes)));
            var i, r, s
        }
        ,
        x.fn.load = function(t, e, n) {
            var i, r, s, o = this, a = t.indexOf(" ");
            return a > -1 && (i = ye(t.slice(a)),
            t = t.slice(0, a)),
            y(e) ? (n = e,
            e = void 0) : e && "object" == typeof e && (r = "POST"),
            o.length > 0 && x.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done((function(t) {
                s = arguments,
                o.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t)
            }
            )).always(n && function(t, e) {
                o.each((function() {
                    n.apply(this, s || [t.responseText, e, t])
                }
                ))
            }
            ),
            this
        }
        ,
        x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
            x.fn[e] = function(t) {
                return this.on(e, t)
            }
        }
        )),
        x.expr.pseudos.animated = function(t) {
            return x.grep(x.timers, (function(e) {
                return t === e.elem
            }
            )).length
        }
        ,
        x.offset = {
            setOffset: function(t, e, n) {
                var i, r, s, o, a, l, c = x.css(t, "position"), u = x(t), h = {};
                "static" === c && (t.style.position = "relative"),
                a = u.offset(),
                s = x.css(t, "top"),
                l = x.css(t, "left"),
                ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (o = (i = u.position()).top,
                r = i.left) : (o = parseFloat(s) || 0,
                r = parseFloat(l) || 0),
                y(e) && (e = e.call(t, n, x.extend({}, a))),
                null != e.top && (h.top = e.top - a.top + o),
                null != e.left && (h.left = e.left - a.left + r),
                "using"in e ? e.using.call(t, h) : u.css(h)
            }
        },
        x.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each((function(e) {
                        x.offset.setOffset(this, t, e)
                    }
                    ));
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
                n = i.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === x.css(i, "position"))
                        e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        n = i.ownerDocument,
                        t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position"); )
                            t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = x(t).offset()).top += x.css(t, "borderTopWidth", !0),
                        r.left += x.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - x.css(i, "marginTop", !0),
                        left: e.left - r.left - x.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var t = this.offsetParent; t && "static" === x.css(t, "position"); )
                        t = t.offsetParent;
                    return t || ot
                }
                ))
            }
        }),
        x.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(t, e) {
            var n = "pageYOffset" === e;
            x.fn[t] = function(i) {
                return U(this, (function(t, i, r) {
                    var s;
                    if (b(t) ? s = t : 9 === t.nodeType && (s = t.defaultView),
                    void 0 === r)
                        return s ? s[e] : t[i];
                    s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r
                }
                ), t, i, arguments.length)
            }
        }
        )),
        x.each(["top", "left"], (function(t, e) {
            x.cssHooks[e] = Vt(g.pixelPosition, (function(t, n) {
                if (n)
                    return n = Ut(t, e),
                    Ft.test(n) ? x(t).position()[e] + "px" : n
            }
            ))
        }
        )),
        x.each({
            Height: "height",
            Width: "width"
        }, (function(t, e) {
            x.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function(n, i) {
                x.fn[i] = function(r, s) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                      , a = n || (!0 === r || !0 === s ? "margin" : "border");
                    return U(this, (function(e, n, r) {
                        var s;
                        return b(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement,
                        Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? x.css(e, n, a) : x.style(e, n, r, a)
                    }
                    ), e, o ? r : void 0, o)
                }
            }
            ))
        }
        )),
        x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
            x.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }
        )),
        x.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        x.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }),
        x.proxy = function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            y(t))
                return i = l.call(arguments, 2),
                (r = function() {
                    return t.apply(e || this, i.concat(l.call(arguments)))
                }
                ).guid = t.guid = t.guid || x.guid++,
                r
        }
        ,
        x.holdReady = function(t) {
            t ? x.readyWait++ : x.ready(!0)
        }
        ,
        x.isArray = Array.isArray,
        x.parseJSON = JSON.parse,
        x.nodeName = E,
        x.isFunction = y,
        x.isWindow = b,
        x.camelCase = Y,
        x.type = C,
        x.now = Date.now,
        x.isNumeric = function(t) {
            var e = x.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        void 0 === (i = function() {
            return x
        }
        .apply(e, [])) || (t.exports = i);
        var Ye = n.jQuery
          , Xe = n.$;
        return x.noConflict = function(t) {
            return n.$ === x && (n.$ = Xe),
            t && n.jQuery === x && (n.jQuery = Ye),
            x
        }
        ,
        r || (n.jQuery = n.$ = x),
        x
    }
    ))
}
, function(t, e, n) {
    t.exports = n(57)
}
, function(t, e) {
    function n(t, e, n, i, r, s, o) {
        try {
            var a = t[s](o)
              , l = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(l) : Promise.resolve(l).then(i, r)
    }
    t.exports = function(t) {
        return function() {
            var e = this
              , i = arguments;
            return new Promise((function(r, s) {
                var o = t.apply(e, i);
                function a(t) {
                    n(o, r, s, a, l, "next", t)
                }
                function l(t) {
                    n(o, r, s, a, l, "throw", t)
                }
                a(void 0)
            }
            ))
        }
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    t.exports = function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "a", (function() {
        return o
    }
    )),
    n.d(e, "c", (function() {
        return a
    }
    ));
    var i = n(10);
    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    function s(t, e, n) {
        t && (function(t, e) {
            if (!e.__SV) {
                var n, i, r = window;
                try {
                    var s, o, a, l = r.location, c = l.hash;
                    s = function(t, e) {
                        return (o = t.match(RegExp(e + "=([^&]*)"))) ? o[1] : null
                    }
                    ,
                    c && s(c, "state") && "mpeditor" === (a = JSON.parse(decodeURIComponent(s(c, "state")))).action && (r.sessionStorage.setItem("_mpcehash", c),
                    history.replaceState(a.desiredHash || "", t.title, l.pathname + l.search))
                } catch (t) {}
                window.mixpanel = e,
                e._i = [],
                e.init = function(t, r, s) {
                    function o(t, e) {
                        var n = e.split(".");
                        2 == n.length && (t = t[n[0]],
                        e = n[1]),
                        t[e] = function() {
                            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    }
                    var a = e;
                    for (void 0 !== s ? a = e[s] = [] : s = "mixpanel",
                    a.people = a.people || [],
                    a.toString = function(t) {
                        var e = "mixpanel";
                        return "mixpanel" !== s && (e += "." + s),
                        t || (e += " (stub)"),
                        e
                    }
                    ,
                    a.people.toString = function() {
                        return a.toString(1) + ".people (stub)"
                    }
                    ,
                    n = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "),
                    i = 0; i < n.length; i++)
                        o(a, n[i]);
                    var l = "set set_once union unset remove delete".split(" ");
                    a.get_group = function() {
                        function t(t) {
                            e[t] = function() {
                                call2_args = arguments,
                                call2 = [t].concat(Array.prototype.slice.call(call2_args, 0)),
                                a.push([n, call2])
                            }
                        }
                        for (var e = {}, n = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), i = 0; i < l.length; i++)
                            t(l[i]);
                        return e
                    }
                    ,
                    e._i.push([t, r, s])
                }
                ,
                e.__SV = 1.2,
                (r = t.createElement("script")).type = "text/javascript",
                r.async = !0,
                r.src = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === t.location.protocol && "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js",
                (s = t.getElementsByTagName("script")[0]).parentNode.insertBefore(r, s)
            }
        }(document, window.mixpanel || []),
        mixpanel.init(t),
        window.addEventListener("load", (function() {
            mixpanel.register({
                platform: "web"
            }),
            e ? (mixpanel.people.set({
                isAuthenticated: !0,
                isInternational: !n
            }),
            mixpanel.track("Page load", {
                pathAndQuery: window.location.pathname + window.location.search
            })) : function() {
                var t, e = function(t, e) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, e) {
                            if (t) {
                                if ("string" == typeof t)
                                    return r(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var i = 0
                              , s = function() {};
                            return {
                                s: s,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: s
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0, l = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return a = t.done,
                            t
                        },
                        e: function(t) {
                            l = !0,
                            o = t
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw o
                            }
                        }
                    }
                }(new URLSearchParams(window.location.search).keys());
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var n = t.value;
                        if (n && n.includes("utm_"))
                            return !0
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
            }() && mixpanel.track("Page load", {
                pathAndQuery: window.location.pathname + window.location.search
            })
        }
        )))
    }
    function o(t, e, n) {
        t.click((function() {
            "1" === Object(i.b)("cookie-banner-accepted") && isAuthenticated && function(t, e) {
                mixpanel.track(t, e)
            }(e, n)
        }
        ))
    }
    var a = {
        coinPageCTAClicked: "Coin Page CTA Clicked"
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(3)
          , l = n.n(a)
          , c = n(4)
          , u = n.n(c)
          , h = function() {
            function e() {
                l()(this, e)
            }
            return u()(e, [{
                key: "asyncForEach",
                value: function() {
                    var t = o()(r.a.mark((function t(e, n) {
                        var i;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    i = 0;
                                case 1:
                                    if (!(i < e.length)) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 4,
                                    n(e[i], i, e);
                                case 4:
                                    i++,
                                    t.next = 1;
                                    break;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getQuoteSymbol",
                value: function(t) {
                    switch (t) {
                    case "BTC":
                        return "₿";
                    case "USD":
                        return "$";
                    case "USDT":
                        return "₮";
                    case "ETH":
                        return "Ξ";
                    case "EUR":
                        return "€";
                    default:
                        return "$"
                    }
                }
            }, {
                key: "priceSign",
                value: function(t) {
                    return t > 0 ? "positive" : t < 0 ? "negative" : "neutral"
                }
            }, {
                key: "splitMarketSymbol",
                value: function(t) {
                    var e = t.split("-");
                    return {
                        base: e[0],
                        quote: e[1]
                    }
                }
            }, {
                key: "numberFormat",
                value: function(t, e) {
                    if (t) {
                        var n = e.toFixed(2).toLocaleString().split(".")
                          , i = new Intl.NumberFormat("en-US").format(n[0]);
                        return "".concat(i, ".").concat(n[1])
                    }
                    if (0 === e)
                        return e.toFixed(2);
                    if (e >= 1) {
                        var r = e.toFixed(2).toLocaleString().split(".")
                          , s = new Intl.NumberFormat("en-US").format(r[0]);
                        return "".concat(s, ".").concat(r[1])
                    }
                    return e < 1 ? e.toFixed(8) : e.toFixed(2)
                }
            }, {
                key: "formatMillionNumbers",
                value: function(t, e) {
                    return e < 1e6 ? this.numberFormat(t, e) : e < 1e9 ? "".concat((e / 1e6).toFixed(2), "M") : "".concat((e / 1e9).toFixed(2), "B")
                }
            }, {
                key: "isAllowed",
                value: function(t, e, n) {
                    return "us" !== n || (t[e] ? 0 === t[e].prohibitedIn.length : void 0)
                }
            }, {
                key: "normalizePriceInUsd",
                value: function(t, e, n) {
                    var i = t["".concat(e, "-").concat(n)].lastPrice;
                    return "USD" !== n && 0 !== i && t["".concat(n, "-USD")] && (i *= t["".concat(n, "-USD")].lastPrice),
                    i
                }
            }, {
                key: "normalizeVolumeBTC",
                value: function(t, e, n, i) {
                    var r = e.quoteVolume ? parseFloat(e.quoteVolume) : 0;
                    if ("BTC" === n)
                        return 1 * e.volume;
                    if ("BTC" !== n && "BTC" !== i) {
                        if (t["".concat(i, "-BTC")]) {
                            var s = parseFloat(t["".concat(i, "-BTC")].lastPrice);
                            return r > 0 && s > 0 ? e.quoteVolume * t["".concat(i, "-BTC")].lastPrice : 0
                        }
                        if (t["BTC-".concat(i)]) {
                            var o = parseFloat(t["BTC-".concat(i)].lastPrice);
                            return r > 0 && o > 0 ? e.quoteVolume / t["BTC-".concat(i)].lastPrice : 0
                        }
                        return 0
                    }
                    return 1 * e.quoteVolume
                }
            }, {
                key: "getTotalVolume",
                value: function(t) {
                    var e = 0
                      , n = t ? Object.entries(t) : null;
                    return n && n.forEach((function(t) {
                        e += t[1].volumeBTC
                    }
                    )),
                    e
                }
            }, {
                key: "getCurrencyPermissionMarket",
                value: function(t, e) {
                    return t && e ? t["".concat(e.base, "-").concat(e.quote)] : null
                }
            }, {
                key: "getCurrencyLastPrice",
                value: function(t, e, n) {
                    return "BTC" === t ? 1 * e : n["".concat(t, "-BTC")] ? n["".concat(t, "-BTC")].lastPrice * e : n["BTC-".concat(t)] ? n["BTC-".concat(t)].lastPrice / e : 0
                }
            }, {
                key: "addTotalRow",
                value: function(e, n, i) {
                    var r = parseFloat(e)
                      , s = t("<div/>");
                    s.addClass("table-row");
                    var o = t("<div/>");
                    o.addClass("total name first-col sticky-column");
                    var a = t("<div/>");
                    a.addClass("name-details");
                    var l = t("<div/>");
                    l.addClass("symbol"),
                    l.text("Total:");
                    var c = t("<div/>");
                    c.addClass("row price");
                    var u = t("<div/>");
                    u.addClass("row market-cap");
                    var h = t("<div/>");
                    h.addClass("row volume");
                    var d = t("<p/>");
                    d.text("$".concat(this.numberFormat(!0, r)));
                    var f = t("<div/>");
                    f.addClass("row hours");
                    var p = t("<div/>");
                    p.addClass("row button-column"),
                    a.append(l),
                    o.append(a),
                    h.append(d),
                    s.append(o),
                    s.append(c),
                    "Tokenized Stocks" !== i && s.append(u),
                    s.append(h),
                    s.append(f),
                    s.append(p),
                    n.append(s)
                }
            }]),
            e
        }();
        e.a = h
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    var i = n(13)
      , r = n.n(i)
      , s = n(1)
      , o = n.n(s)
      , a = n(2)
      , l = n.n(a)
      , c = n(3)
      , u = n.n(c)
      , h = n(4)
      , d = n.n(h)
      , f = n(6)
      , p = n(8)
      , v = function() {
        function t() {
            u()(this, t),
            this.helpers = new f.a,
            this.normalizedHost = originalHost ? Object(p.d)(originalHost) : ""
        }
        return d()(t, [{
            key: "getMarketsSummaries",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = [],
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://api.".concat(this.normalizedHost, "/v3/markets/summaries"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/markets/summaries");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e.push(n);
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getMarketTickers",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = [],
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://api.".concat(this.normalizedHost, "/v3/markets/tickers"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/markets/tickers");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e.push(n);
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getCurrencies",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = [],
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://api.".concat(this.normalizedHost, "/v3/currencies"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/currencies");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e.push(n);
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getMarkets",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = [],
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://api.".concat(this.normalizedHost, "/v3/markets"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/markets");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e.push(n);
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getAuthMarketsPermissions",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = {},
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://".concat(this.normalizedHost, "/v3/account/permissions/markets"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/account/permissions/markets");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e[n.symbol] = {
                                                            view: n ? n.view : null,
                                                            buy: n ? n.buy : null,
                                                            sell: n ? n.sell : null
                                                        };
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getAnonymousMarketsPermissions",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = {},
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://api.".concat(this.normalizedHost, "/v3/anonymous/permissions/markets"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/anonymous/permissions/markets");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e[n.symbol] = {
                                                            view: n ? n.view : null,
                                                            buy: n ? n.buy : null,
                                                            sell: n ? n.sell : null
                                                        };
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getAuthInstantMarketsPermissions",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = {},
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://".concat(this.normalizedHost, "/v3/account/permissions/instant-orders"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/account/permissions/instant-orders");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e[n.symbol] = {
                                                            volatility: n.volatilityBuffer
                                                        };
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getAnonymousInstantMarketsPermissions",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n, i = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = {},
                                "" === this.normalizedHost) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                fetch("https://api.".concat(this.normalizedHost, "/v3/anonymous/permissions/instant-orders"));
                            case 4:
                                t.t0 = t.sent,
                                t.next = 10;
                                break;
                            case 7:
                                return t.next = 9,
                                fetch("/v3/anonymous/permissions/instant-orders");
                            case 9:
                                t.t0 = t.sent;
                            case 10:
                                if (!(n = t.t0).ok) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 14,
                                n.json().then((function(t) {
                                    i.helpers.asyncForEach(t, function() {
                                        var t = l()(o.a.mark((function t(n) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        e[n.symbol] = {
                                                            volatility: n.volatilityBuffer
                                                        };
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ));
                            case 14:
                                return t.abrupt("return", e);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getTickersObjetPermissions",
            value: function() {
                var t = l()(o.a.mark((function t(e) {
                    var n, i;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.getMarketTickers();
                            case 2:
                                return n = t.sent,
                                i = {},
                                t.next = 6,
                                this.helpers.asyncForEach(n, function() {
                                    var t = l()(o.a.mark((function t(e) {
                                        return o.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    i[e.symbol] = {
                                                        lastPrice: e.lastTradeRate,
                                                        base: e.symbol.split("-")[0],
                                                        quote: e.symbol.split("-")[1]
                                                    };
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 6:
                                return t.abrupt("return", i);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getTickersObjet",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.getMarketTickers();
                            case 2:
                                return e = t.sent,
                                n = {},
                                t.next = 6,
                                this.helpers.asyncForEach(e, function() {
                                    var t = l()(o.a.mark((function t(e) {
                                        return o.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    n[e.symbol] = {
                                                        lastPrice: e.lastTradeRate,
                                                        base: e.symbol.split("-")[0],
                                                        quote: e.symbol.split("-")[1]
                                                    };
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 6:
                                return t.abrupt("return", n);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getTickerDataSpecificBase",
            value: function() {
                var t = l()(o.a.mark((function t(e) {
                    var n, i;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.getTickersObjet();
                            case 2:
                                if (n = t.sent,
                                "" === e) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", null !== (i = n["".concat(e, "-USD")]) && void 0 !== i ? i : null);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getSummaryDataSpecificBase",
            value: function() {
                var t = l()(o.a.mark((function t(e) {
                    var n, i;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.getMarketsSummaries();
                            case 2:
                                return n = t.sent,
                                i = {},
                                t.next = 6,
                                this.helpers.asyncForEach(n, function() {
                                    var t = l()(o.a.mark((function t(n) {
                                        var r;
                                        return o.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    n.symbol === "".concat(e, "-USD") && (i = {
                                                        percentChange: null !== (r = n.percentChange) && void 0 !== r ? r : 0
                                                    });
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 6:
                                return t.abrupt("return", i);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getMarketsObjet",
            value: function() {
                var t = l()(o.a.mark((function t() {
                    var e, n;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.getMarkets();
                            case 2:
                                return e = t.sent,
                                n = {},
                                t.next = 6,
                                this.helpers.asyncForEach(e, function() {
                                    var t = l()(o.a.mark((function t(e) {
                                        return o.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    n[e.symbol] = {
                                                        prohibitedIn: e.prohibitedIn
                                                    };
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 6:
                                return t.abrupt("return", n);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "getAllowedMarketSummariesBasedOnPermisions",
            value: function() {
                var t = l()(o.a.mark((function t(e, n, i) {
                    var s, a, c = this;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.getMarketsSummaries();
                            case 2:
                                return s = t.sent,
                                a = {},
                                t.next = 6,
                                this.helpers.asyncForEach(s, function() {
                                    var t = l()(o.a.mark((function t(n) {
                                        var s, l, u, h, d, f, p, v, m, g, y, b;
                                        return o.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    s = n.symbol,
                                                    l = c.helpers.splitMarketSymbol(s),
                                                    i ? a[l.base] ? a[l.base].markets[s] = {
                                                        base: l.base,
                                                        quote: l.quote,
                                                        volume: n.quoteVolume,
                                                        percentChange: null !== (u = n.percentChange) && void 0 !== u ? u : 0,
                                                        view: null !== (h = i[s].view) && void 0 !== h && h,
                                                        buy: null !== (d = i[s].buy) && void 0 !== d && d,
                                                        sell: null !== (f = i[s].sell) && void 0 !== f && f,
                                                        volumeBTC: c.helpers.normalizeVolumeBTC(e, n, l.base, l.quote)
                                                    } : a[l.base] = {
                                                        markets: r()({}, s, {
                                                            base: l.base,
                                                            quote: l.quote,
                                                            volume: n.quoteVolume,
                                                            percentChange: null !== (p = n.percentChange) && void 0 !== p ? p : 0,
                                                            view: null !== (v = i[s].view) && void 0 !== v && v,
                                                            buy: null !== (m = i[s].buy) && void 0 !== m && m,
                                                            sell: null !== (g = i[s].sell) && void 0 !== g && g,
                                                            volumeBTC: c.helpers.normalizeVolumeBTC(e, n, l.base, l.quote)
                                                        })
                                                    } : a[l.base] ? a[l.base].markets[s] = {
                                                        base: l.base,
                                                        quote: l.quote,
                                                        volume: n.quoteVolume,
                                                        percentChange: null !== (y = n.percentChange) && void 0 !== y ? y : 0,
                                                        volumeBTC: c.helpers.normalizeVolumeBTC(e, n, l.base, l.quote)
                                                    } : a[l.base] = {
                                                        markets: r()({}, s, {
                                                            base: l.base,
                                                            quote: l.quote,
                                                            volume: n.quoteVolume,
                                                            percentChange: null !== (b = n.percentChange) && void 0 !== b ? b : 0,
                                                            volumeBTC: c.helpers.normalizeVolumeBTC(e, n, l.base, l.quote)
                                                        })
                                                    };
                                                case 2:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 6:
                                return t.abrupt("return", a);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e, n, i) {
                    return t.apply(this, arguments)
                }
            }()
        }]),
        t
    }();
    e.a = v
}
, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return d
    }
    )),
    n.d(e, "d", (function() {
        return f
    }
    )),
    n.d(e, "a", (function() {
        return p
    }
    )),
    n.d(e, "b", (function() {
        return m
    }
    ));
    var i = n(1)
      , r = n.n(i)
      , s = n(13)
      , o = n.n(s)
      , a = n(2)
      , l = n.n(a);
    function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function u(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return h(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
                }
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0
                  , r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, o = !0, a = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return o = t.done,
                t
            },
            e: function(t) {
                a = !0,
                s = t
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (a)
                        throw s
                }
            }
        }
    }
    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    function d(t) {
        var e = t.split("-");
        return {
            base: e[0],
            quote: e[1]
        }
    }
    function f() {
        var t = originalHost;
        return t.includes("global") ? t.replace("global.", "") : t
    }
    function p(t) {
        return v.apply(this, arguments)
    }
    function v() {
        return (v = l()(r.a.mark((function t(e) {
            var n;
            return r.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return n = [],
                        t.next = 3,
                        fetch(e).then(function() {
                            var t = l()(r.a.mark((function t(e) {
                                return r.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.ok) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 3,
                                            e.json().then((function(t) {
                                                n = t
                                            }
                                            ));
                                        case 3:
                                            t.next = 6;
                                            break;
                                        case 5:
                                            n = null;
                                        case 6:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()).catch((function() {
                            n = null
                        }
                        ));
                    case 3:
                        return t.abrupt("return", n);
                    case 4:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )))).apply(this, arguments)
    }
    function m(t, e, n, i) {
        var r, s = null, a = u(i);
        try {
            for (a.s(); !(r = a.n()).done; ) {
                var l = r.value
                  , h = t + "-" + l
                  , f = e[h]
                  , p = n[h];
                if (f)
                    return {
                        instant: !0,
                        marketPermission: p,
                        marketSymbol: h
                    };
                p && !s && (s = {
                    marketPermission: p,
                    marketSymbol: h
                })
            }
        } catch (t) {
            a.e(t)
        } finally {
            a.f()
        }
        if (s)
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach((function(e) {
                        o()(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({
                instant: !1
            }, s);
        var v = Object.entries(n).find((function(e) {
            var n = d(e[0])
              , i = e[1];
            return n.base === t && i.view
        }
        ));
        if (v) {
            var m = v[0];
            return {
                instant: !!e[m],
                marketPermission: v[1],
                marketSymbol: m
            }
        }
        return null
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }
    ));
    var i = {
        marketIndex: function(t, e) {
            return "/market/index?MarketName=".concat(t, "-").concat(e)
        },
        instantIndex: function(t, e, n) {
            return n ? "/instant?market=".concat(e, "-").concat(t, "&side=").concat(n) : "/instant?market=".concat(e, "-").concat(t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        var e = document.cookie.match("(^|;) ?" + t + "=([^;]*)(;|$)");
        return e && e.length > 2 ? e[2] : null
    }
    function r(t) {
        return document.cookie.indexOf(t) >= 0
    }
    n.d(e, "a", (function() {
        return r
    }
    )),
    n.d(e, "b", (function() {
        return i
    }
    ))
}
, function(t, e, n) {
    "use strict";
    /*!
* Glide.js v3.4.1
* (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
* Released under the MIT License.
*/
    var i = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: .5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        throttle: 10,
        direction: "ltr",
        peek: 0,
        breakpoints: {},
        classes: {
            direction: {
                ltr: "glide--ltr",
                rtl: "glide--rtl"
            },
            slider: "glide--slider",
            carousel: "glide--carousel",
            swipeable: "glide--swipeable",
            dragging: "glide--dragging",
            cloneSlide: "glide__slide--clone",
            activeNav: "glide__bullet--active",
            activeSlide: "glide__slide--active",
            disabledArrow: "glide__arrow--disabled"
        }
    };
    function r(t) {
        console.error("[Glide warn]: " + t)
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , o = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
      , a = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }()
      , l = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
      , c = function(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    };
    function u(t) {
        return parseInt(t)
    }
    function h(t) {
        return "string" == typeof t
    }
    function d(t) {
        var e = void 0 === t ? "undefined" : s(t);
        return "function" === e || "object" === e && !!t
    }
    function f(t) {
        return "function" == typeof t
    }
    function p(t) {
        return void 0 === t
    }
    function v(t) {
        return t.constructor === Array
    }
    function m(t, e, n) {
        Object.defineProperty(t, e, n)
    }
    function g(t, e) {
        var n = l({}, t, e);
        return e.hasOwnProperty("classes") && (n.classes = l({}, t.classes, e.classes),
        e.classes.hasOwnProperty("direction") && (n.classes.direction = l({}, t.classes.direction, e.classes.direction))),
        e.hasOwnProperty("breakpoints") && (n.breakpoints = l({}, t.breakpoints, e.breakpoints)),
        n
    }
    var y = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, t),
            this.events = e,
            this.hop = e.hasOwnProperty
        }
        return a(t, [{
            key: "on",
            value: function(t, e) {
                if (v(t))
                    for (var n = 0; n < t.length; n++)
                        this.on(t[n], e);
                this.hop.call(this.events, t) || (this.events[t] = []);
                var i = this.events[t].push(e) - 1;
                return {
                    remove: function() {
                        delete this.events[t][i]
                    }
                }
            }
        }, {
            key: "emit",
            value: function(t, e) {
                if (v(t))
                    for (var n = 0; n < t.length; n++)
                        this.emit(t[n], e);
                this.hop.call(this.events, t) && this.events[t].forEach((function(t) {
                    t(e || {})
                }
                ))
            }
        }]),
        t
    }()
      , b = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, t),
            this._c = {},
            this._t = [],
            this._e = new y,
            this.disabled = !1,
            this.selector = e,
            this.settings = g(i, n),
            this.index = this.settings.startAt
        }
        return a(t, [{
            key: "mount",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._e.emit("mount.before"),
                d(t) ? this._c = function(t, e, n) {
                    var i = {};
                    for (var s in e)
                        f(e[s]) ? i[s] = e[s](t, i, n) : r("Extension must be a function");
                    for (var o in i)
                        f(i[o].mount) && i[o].mount();
                    return i
                }(this, t, this._e) : r("You need to provide a object on `mount()`"),
                this._e.emit("mount.after"),
                this
            }
        }, {
            key: "mutate",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return v(t) ? this._t = t : r("You need to provide a array on `mutate()`"),
                this
            }
        }, {
            key: "update",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.settings = g(this.settings, t),
                t.hasOwnProperty("startAt") && (this.index = t.startAt),
                this._e.emit("update"),
                this
            }
        }, {
            key: "go",
            value: function(t) {
                return this._c.Run.make(t),
                this
            }
        }, {
            key: "move",
            value: function(t) {
                return this._c.Transition.disable(),
                this._c.Move.make(t),
                this
            }
        }, {
            key: "destroy",
            value: function() {
                return this._e.emit("destroy"),
                this
            }
        }, {
            key: "play",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return t && (this.settings.autoplay = t),
                this._e.emit("play"),
                this
            }
        }, {
            key: "pause",
            value: function() {
                return this._e.emit("pause"),
                this
            }
        }, {
            key: "disable",
            value: function() {
                return this.disabled = !0,
                this
            }
        }, {
            key: "enable",
            value: function() {
                return this.disabled = !1,
                this
            }
        }, {
            key: "on",
            value: function(t, e) {
                return this._e.on(t, e),
                this
            }
        }, {
            key: "isType",
            value: function(t) {
                return this.settings.type === t
            }
        }, {
            key: "settings",
            get: function() {
                return this._o
            },
            set: function(t) {
                d(t) ? this._o = t : r("Options must be an `object` instance.")
            }
        }, {
            key: "index",
            get: function() {
                return this._i
            },
            set: function(t) {
                this._i = u(t)
            }
        }, {
            key: "type",
            get: function() {
                return this.settings.type
            }
        }, {
            key: "disabled",
            get: function() {
                return this._d
            },
            set: function(t) {
                this._d = !!t
            }
        }]),
        t
    }();
    function w() {
        return (new Date).getTime()
    }
    function k(t, e, n) {
        var i = void 0
          , r = void 0
          , s = void 0
          , o = void 0
          , a = 0;
        n || (n = {});
        var l = function() {
            a = !1 === n.leading ? 0 : w(),
            i = null,
            o = t.apply(r, s),
            i || (r = s = null)
        }
          , c = function() {
            var c = w();
            a || !1 !== n.leading || (a = c);
            var u = e - (c - a);
            return r = this,
            s = arguments,
            u <= 0 || u > e ? (i && (clearTimeout(i),
            i = null),
            a = c,
            o = t.apply(r, s),
            i || (r = s = null)) : i || !1 === n.trailing || (i = setTimeout(l, u)),
            o
        };
        return c.cancel = function() {
            clearTimeout(i),
            a = 0,
            i = r = s = null
        }
        ,
        c
    }
    var C = {
        ltr: ["marginLeft", "marginRight"],
        rtl: ["marginRight", "marginLeft"]
    };
    function x(t) {
        if (t && t.parentNode) {
            for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        return []
    }
    function $(t) {
        return !!(t && t instanceof window.HTMLElement)
    }
    var _ = '[data-glide-el="track"]'
      , T = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, t),
            this.listeners = e
        }
        return a(t, [{
            key: "on",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                h(t) && (t = [t]);
                for (var r = 0; r < t.length; r++)
                    this.listeners[t[r]] = n,
                    e.addEventListener(t[r], this.listeners[t[r]], i)
            }
        }, {
            key: "off",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                h(t) && (t = [t]);
                for (var i = 0; i < t.length; i++)
                    e.removeEventListener(t[i], this.listeners[t[i]], n)
            }
        }, {
            key: "destroy",
            value: function() {
                delete this.listeners
            }
        }]),
        t
    }()
      , S = ["ltr", "rtl"]
      , A = {
        ">": "<",
        "<": ">",
        "=": "="
    };
    function z(t, e) {
        return {
            modify: function(t) {
                return e.Direction.is("rtl") ? -t : t
            }
        }
    }
    var E = !1;
    try {
        var O = Object.defineProperty({}, "passive", {
            get: function() {
                E = !0
            }
        });
        window.addEventListener("testPassive", null, O),
        window.removeEventListener("testPassive", null, O)
    } catch (t) {}
    var L = E
      , P = ["touchstart", "mousedown"]
      , D = ["touchmove", "mousemove"]
      , q = ["touchend", "touchcancel", "mouseup", "mouseleave"]
      , H = ["mousedown", "mousemove", "mouseup", "mouseleave"];
    function M(t) {
        return d(t) ? function(t) {
            return Object.keys(t).sort().reduce((function(e, n) {
                return e[n] = t[n],
                e[n],
                e
            }
            ), {})
        }(t) : (r("Breakpoints option must be an object"),
        {})
    }
    var j = {
        Html: function(t, e) {
            var n = {
                mount: function() {
                    this.root = t.selector,
                    this.track = this.root.querySelector(_),
                    this.slides = Array.prototype.slice.call(this.wrapper.children).filter((function(e) {
                        return !e.classList.contains(t.settings.classes.cloneSlide)
                    }
                    ))
                }
            };
            return m(n, "root", {
                get: function() {
                    return n._r
                },
                set: function(t) {
                    h(t) && (t = document.querySelector(t)),
                    $(t) ? n._r = t : r("Root element must be a existing Html node")
                }
            }),
            m(n, "track", {
                get: function() {
                    return n._t
                },
                set: function(t) {
                    $(t) ? n._t = t : r("Could not find track element. Please use " + _ + " attribute.")
                }
            }),
            m(n, "wrapper", {
                get: function() {
                    return n.track.children[0]
                }
            }),
            n
        },
        Translate: function(t, e, n) {
            var i = {
                set: function(n) {
                    var i = function(t, e, n) {
                        var i = [function(t, e) {
                            return {
                                modify: function(n) {
                                    return n + e.Gaps.value * t.index
                                }
                            }
                        }
                        , function(t, e) {
                            return {
                                modify: function(t) {
                                    return t + e.Clones.grow / 2
                                }
                            }
                        }
                        , function(t, e) {
                            return {
                                modify: function(n) {
                                    if (t.settings.focusAt >= 0) {
                                        var i = e.Peek.value;
                                        return d(i) ? n - i.before : n - i
                                    }
                                    return n
                                }
                            }
                        }
                        , function(t, e) {
                            return {
                                modify: function(n) {
                                    var i = e.Gaps.value
                                      , r = e.Sizes.width
                                      , s = t.settings.focusAt
                                      , o = e.Sizes.slideWidth;
                                    return "center" === s ? n - (r / 2 - o / 2) : n - o * s - i * s
                                }
                            }
                        }
                        ].concat(t._t, [z]);
                        return {
                            mutate: function(s) {
                                for (var o = 0; o < i.length; o++) {
                                    var a = i[o];
                                    f(a) && f(a().modify) ? s = a(t, e, n).modify(s) : r("Transformer should be a function that returns an object with `modify()` method")
                                }
                                return s
                            }
                        }
                    }(t, e).mutate(n);
                    e.Html.wrapper.style.transform = "translate3d(" + -1 * i + "px, 0px, 0px)"
                },
                remove: function() {
                    e.Html.wrapper.style.transform = ""
                }
            };
            return n.on("move", (function(r) {
                var s = e.Gaps.value
                  , o = e.Sizes.length
                  , a = e.Sizes.slideWidth;
                return t.isType("carousel") && e.Run.isOffset("<") ? (e.Transition.after((function() {
                    n.emit("translate.jump"),
                    i.set(a * (o - 1))
                }
                )),
                i.set(-a - s * o)) : t.isType("carousel") && e.Run.isOffset(">") ? (e.Transition.after((function() {
                    n.emit("translate.jump"),
                    i.set(0)
                }
                )),
                i.set(a * o + s * o)) : i.set(r.movement)
            }
            )),
            n.on("destroy", (function() {
                i.remove()
            }
            )),
            i
        },
        Transition: function(t, e, n) {
            var i = !1
              , r = {
                compose: function(e) {
                    var n = t.settings;
                    return i ? e + " 0ms " + n.animationTimingFunc : e + " " + this.duration + "ms " + n.animationTimingFunc
                },
                set: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                    e.Html.wrapper.style.transition = this.compose(t)
                },
                remove: function() {
                    e.Html.wrapper.style.transition = ""
                },
                after: function(t) {
                    setTimeout((function() {
                        t()
                    }
                    ), this.duration)
                },
                enable: function() {
                    i = !1,
                    this.set()
                },
                disable: function() {
                    i = !0,
                    this.set()
                }
            };
            return m(r, "duration", {
                get: function() {
                    var n = t.settings;
                    return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration
                }
            }),
            n.on("move", (function() {
                r.set()
            }
            )),
            n.on(["build.before", "resize", "translate.jump"], (function() {
                r.disable()
            }
            )),
            n.on("run", (function() {
                r.enable()
            }
            )),
            n.on("destroy", (function() {
                r.remove()
            }
            )),
            r
        },
        Direction: function(t, e, n) {
            var i = {
                mount: function() {
                    this.value = t.settings.direction
                },
                resolve: function(t) {
                    var e = t.slice(0, 1);
                    return this.is("rtl") ? t.split(e).join(A[e]) : t
                },
                is: function(t) {
                    return this.value === t
                },
                addClass: function() {
                    e.Html.root.classList.add(t.settings.classes.direction[this.value])
                },
                removeClass: function() {
                    e.Html.root.classList.remove(t.settings.classes.direction[this.value])
                }
            };
            return m(i, "value", {
                get: function() {
                    return i._v
                },
                set: function(t) {
                    S.indexOf(t) > -1 ? i._v = t : r("Direction value must be `ltr` or `rtl`")
                }
            }),
            n.on(["destroy", "update"], (function() {
                i.removeClass()
            }
            )),
            n.on("update", (function() {
                i.mount()
            }
            )),
            n.on(["build.before", "update"], (function() {
                i.addClass()
            }
            )),
            i
        },
        Peek: function(t, e, n) {
            var i = {
                mount: function() {
                    this.value = t.settings.peek
                }
            };
            return m(i, "value", {
                get: function() {
                    return i._v
                },
                set: function(t) {
                    d(t) ? (t.before = u(t.before),
                    t.after = u(t.after)) : t = u(t),
                    i._v = t
                }
            }),
            m(i, "reductor", {
                get: function() {
                    var e = i.value
                      , n = t.settings.perView;
                    return d(e) ? e.before / n + e.after / n : 2 * e / n
                }
            }),
            n.on(["resize", "update"], (function() {
                i.mount()
            }
            )),
            i
        },
        Sizes: function(t, e, n) {
            var i = {
                setupSlides: function() {
                    for (var t = this.slideWidth + "px", n = e.Html.slides, i = 0; i < n.length; i++)
                        n[i].style.width = t
                },
                setupWrapper: function(t) {
                    e.Html.wrapper.style.width = this.wrapperSize + "px"
                },
                remove: function() {
                    for (var t = e.Html.slides, n = 0; n < t.length; n++)
                        t[n].style.width = "";
                    e.Html.wrapper.style.width = ""
                }
            };
            return m(i, "length", {
                get: function() {
                    return e.Html.slides.length
                }
            }),
            m(i, "width", {
                get: function() {
                    return e.Html.root.offsetWidth
                }
            }),
            m(i, "wrapperSize", {
                get: function() {
                    return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow
                }
            }),
            m(i, "slideWidth", {
                get: function() {
                    return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor
                }
            }),
            n.on(["build.before", "resize", "update"], (function() {
                i.setupSlides(),
                i.setupWrapper()
            }
            )),
            n.on("destroy", (function() {
                i.remove()
            }
            )),
            i
        },
        Gaps: function(t, e, n) {
            var i = {
                apply: function(t) {
                    for (var n = 0, i = t.length; n < i; n++) {
                        var r = t[n].style
                          , s = e.Direction.value;
                        r[C[s][0]] = 0 !== n ? this.value / 2 + "px" : "",
                        n !== t.length - 1 ? r[C[s][1]] = this.value / 2 + "px" : r[C[s][1]] = ""
                    }
                },
                remove: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e].style;
                        i.marginLeft = "",
                        i.marginRight = ""
                    }
                }
            };
            return m(i, "value", {
                get: function() {
                    return u(t.settings.gap)
                }
            }),
            m(i, "grow", {
                get: function() {
                    return i.value * (e.Sizes.length - 1)
                }
            }),
            m(i, "reductor", {
                get: function() {
                    var e = t.settings.perView;
                    return i.value * (e - 1) / e
                }
            }),
            n.on(["build.after", "update"], k((function() {
                i.apply(e.Html.wrapper.children)
            }
            ), 30)),
            n.on("destroy", (function() {
                i.remove(e.Html.wrapper.children)
            }
            )),
            i
        },
        Move: function(t, e, n) {
            var i = {
                mount: function() {
                    this._o = 0
                },
                make: function() {
                    var t = this
                      , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.offset = i,
                    n.emit("move", {
                        movement: this.value
                    }),
                    e.Transition.after((function() {
                        n.emit("move.after", {
                            movement: t.value
                        })
                    }
                    ))
                }
            };
            return m(i, "offset", {
                get: function() {
                    return i._o
                },
                set: function(t) {
                    i._o = p(t) ? 0 : u(t)
                }
            }),
            m(i, "translate", {
                get: function() {
                    return e.Sizes.slideWidth * t.index
                }
            }),
            m(i, "value", {
                get: function() {
                    var t = this.offset
                      , n = this.translate;
                    return e.Direction.is("rtl") ? n + t : n - t
                }
            }),
            n.on(["build.before", "run"], (function() {
                i.make()
            }
            )),
            i
        },
        Clones: function(t, e, n) {
            var i = {
                mount: function() {
                    this.items = [],
                    t.isType("carousel") && (this.items = this.collect())
                },
                collect: function() {
                    for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = e.Html.slides, r = t.settings, s = r.perView, o = r.classes, a = s + +!!t.settings.peek, l = i.slice(0, a), c = i.slice(-a), u = 0; u < Math.max(1, Math.floor(s / i.length)); u++) {
                        for (var h = 0; h < l.length; h++) {
                            var d = l[h].cloneNode(!0);
                            d.classList.add(o.cloneSlide),
                            n.push(d)
                        }
                        for (var f = 0; f < c.length; f++) {
                            var p = c[f].cloneNode(!0);
                            p.classList.add(o.cloneSlide),
                            n.unshift(p)
                        }
                    }
                    return n
                },
                append: function() {
                    for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, s = Math.floor(t.length / 2), o = t.slice(0, s).reverse(), a = t.slice(s, t.length), l = e.Sizes.slideWidth + "px", c = 0; c < a.length; c++)
                        i.appendChild(a[c]);
                    for (var u = 0; u < o.length; u++)
                        i.insertBefore(o[u], r[0]);
                    for (var h = 0; h < t.length; h++)
                        t[h].style.width = l
                },
                remove: function() {
                    for (var t = this.items, n = 0; n < t.length; n++)
                        e.Html.wrapper.removeChild(t[n])
                }
            };
            return m(i, "grow", {
                get: function() {
                    return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length
                }
            }),
            n.on("update", (function() {
                i.remove(),
                i.mount(),
                i.append()
            }
            )),
            n.on("build.before", (function() {
                t.isType("carousel") && i.append()
            }
            )),
            n.on("destroy", (function() {
                i.remove()
            }
            )),
            i
        },
        Resize: function(t, e, n) {
            var i = new T
              , r = {
                mount: function() {
                    this.bind()
                },
                bind: function() {
                    i.on("resize", window, k((function() {
                        n.emit("resize")
                    }
                    ), t.settings.throttle))
                },
                unbind: function() {
                    i.off("resize", window)
                }
            };
            return n.on("destroy", (function() {
                r.unbind(),
                i.destroy()
            }
            )),
            r
        },
        Build: function(t, e, n) {
            var i = {
                mount: function() {
                    n.emit("build.before"),
                    this.typeClass(),
                    this.activeClass(),
                    n.emit("build.after")
                },
                typeClass: function() {
                    e.Html.root.classList.add(t.settings.classes[t.settings.type])
                },
                activeClass: function() {
                    var n = t.settings.classes
                      , i = e.Html.slides[t.index];
                    i && (i.classList.add(n.activeSlide),
                    x(i).forEach((function(t) {
                        t.classList.remove(n.activeSlide)
                    }
                    )))
                },
                removeClasses: function() {
                    var n = t.settings.classes;
                    e.Html.root.classList.remove(n[t.settings.type]),
                    e.Html.slides.forEach((function(t) {
                        t.classList.remove(n.activeSlide)
                    }
                    ))
                }
            };
            return n.on(["destroy", "update"], (function() {
                i.removeClasses()
            }
            )),
            n.on(["resize", "update"], (function() {
                i.mount()
            }
            )),
            n.on("move.after", (function() {
                i.activeClass()
            }
            )),
            i
        },
        Run: function(t, e, n) {
            var i = {
                mount: function() {
                    this._o = !1
                },
                make: function(i) {
                    var r = this;
                    t.disabled || (t.disable(),
                    this.move = i,
                    n.emit("run.before", this.move),
                    this.calculate(),
                    n.emit("run", this.move),
                    e.Transition.after((function() {
                        r.isStart() && n.emit("run.start", r.move),
                        r.isEnd() && n.emit("run.end", r.move),
                        (r.isOffset("<") || r.isOffset(">")) && (r._o = !1,
                        n.emit("run.offset", r.move)),
                        n.emit("run.after", r.move),
                        t.enable()
                    }
                    )))
                },
                calculate: function() {
                    var e = this.move
                      , n = this.length
                      , i = e.steps
                      , s = e.direction
                      , o = function(t) {
                        return "number" == typeof t
                    }(u(i)) && 0 !== u(i);
                    switch (s) {
                    case ">":
                        ">" === i ? t.index = n : this.isEnd() ? t.isType("slider") && !t.settings.rewind || (this._o = !0,
                        t.index = 0) : o ? t.index += Math.min(n - t.index, -u(i)) : t.index++;
                        break;
                    case "<":
                        "<" === i ? t.index = 0 : this.isStart() ? t.isType("slider") && !t.settings.rewind || (this._o = !0,
                        t.index = n) : o ? t.index -= Math.min(t.index, u(i)) : t.index--;
                        break;
                    case "=":
                        t.index = i;
                        break;
                    default:
                        r("Invalid direction pattern [" + s + i + "] has been used")
                    }
                },
                isStart: function() {
                    return 0 === t.index
                },
                isEnd: function() {
                    return t.index === this.length
                },
                isOffset: function(t) {
                    return this._o && this.move.direction === t
                }
            };
            return m(i, "move", {
                get: function() {
                    return this._m
                },
                set: function(t) {
                    var e = t.substr(1);
                    this._m = {
                        direction: t.substr(0, 1),
                        steps: e ? u(e) ? u(e) : e : 0
                    }
                }
            }),
            m(i, "length", {
                get: function() {
                    var n = t.settings
                      , i = e.Html.slides.length;
                    return t.isType("slider") && "center" !== n.focusAt && n.bound ? i - 1 - (u(n.perView) - 1) + u(n.focusAt) : i - 1
                }
            }),
            m(i, "offset", {
                get: function() {
                    return this._o
                }
            }),
            i
        },
        Swipe: function(t, e, n) {
            var i = new T
              , r = 0
              , s = 0
              , o = 0
              , a = !1
              , l = !!L && {
                passive: !0
            }
              , c = {
                mount: function() {
                    this.bindSwipeStart()
                },
                start: function(e) {
                    if (!a && !t.disabled) {
                        this.disable();
                        var i = this.touches(e);
                        r = null,
                        s = u(i.pageX),
                        o = u(i.pageY),
                        this.bindSwipeMove(),
                        this.bindSwipeEnd(),
                        n.emit("swipe.start")
                    }
                },
                move: function(i) {
                    if (!t.disabled) {
                        var a = t.settings
                          , l = a.touchAngle
                          , c = a.touchRatio
                          , h = a.classes
                          , d = this.touches(i)
                          , f = u(d.pageX) - s
                          , p = u(d.pageY) - o
                          , v = Math.abs(f << 2)
                          , m = Math.abs(p << 2)
                          , g = Math.sqrt(v + m)
                          , y = Math.sqrt(m);
                        if (!(180 * (r = Math.asin(y / g)) / Math.PI < l))
                            return !1;
                        i.stopPropagation(),
                        e.Move.make(f * function(t) {
                            return parseFloat(t)
                        }(c)),
                        e.Html.root.classList.add(h.dragging),
                        n.emit("swipe.move")
                    }
                },
                end: function(i) {
                    if (!t.disabled) {
                        var o = t.settings
                          , a = this.touches(i)
                          , l = this.threshold(i)
                          , c = a.pageX - s
                          , h = 180 * r / Math.PI
                          , d = Math.round(c / e.Sizes.slideWidth);
                        this.enable(),
                        c > l && h < o.touchAngle ? (o.perTouch && (d = Math.min(d, u(o.perTouch))),
                        e.Direction.is("rtl") && (d = -d),
                        e.Run.make(e.Direction.resolve("<" + d))) : c < -l && h < o.touchAngle ? (o.perTouch && (d = Math.max(d, -u(o.perTouch))),
                        e.Direction.is("rtl") && (d = -d),
                        e.Run.make(e.Direction.resolve(">" + d))) : e.Move.make(),
                        e.Html.root.classList.remove(o.classes.dragging),
                        this.unbindSwipeMove(),
                        this.unbindSwipeEnd(),
                        n.emit("swipe.end")
                    }
                },
                bindSwipeStart: function() {
                    var n = this
                      , r = t.settings;
                    r.swipeThreshold && i.on(P[0], e.Html.wrapper, (function(t) {
                        n.start(t)
                    }
                    ), l),
                    r.dragThreshold && i.on(P[1], e.Html.wrapper, (function(t) {
                        n.start(t)
                    }
                    ), l)
                },
                unbindSwipeStart: function() {
                    i.off(P[0], e.Html.wrapper, l),
                    i.off(P[1], e.Html.wrapper, l)
                },
                bindSwipeMove: function() {
                    var n = this;
                    i.on(D, e.Html.wrapper, k((function(t) {
                        n.move(t)
                    }
                    ), t.settings.throttle), l)
                },
                unbindSwipeMove: function() {
                    i.off(D, e.Html.wrapper, l)
                },
                bindSwipeEnd: function() {
                    var t = this;
                    i.on(q, e.Html.wrapper, (function(e) {
                        t.end(e)
                    }
                    ))
                },
                unbindSwipeEnd: function() {
                    i.off(q, e.Html.wrapper)
                },
                touches: function(t) {
                    return H.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0]
                },
                threshold: function(e) {
                    var n = t.settings;
                    return H.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold
                },
                enable: function() {
                    return a = !1,
                    e.Transition.enable(),
                    this
                },
                disable: function() {
                    return a = !0,
                    e.Transition.disable(),
                    this
                }
            };
            return n.on("build.after", (function() {
                e.Html.root.classList.add(t.settings.classes.swipeable)
            }
            )),
            n.on("destroy", (function() {
                c.unbindSwipeStart(),
                c.unbindSwipeMove(),
                c.unbindSwipeEnd(),
                i.destroy()
            }
            )),
            c
        },
        Images: function(t, e, n) {
            var i = new T
              , r = {
                mount: function() {
                    this.bind()
                },
                bind: function() {
                    i.on("dragstart", e.Html.wrapper, this.dragstart)
                },
                unbind: function() {
                    i.off("dragstart", e.Html.wrapper)
                },
                dragstart: function(t) {
                    t.preventDefault()
                }
            };
            return n.on("destroy", (function() {
                r.unbind(),
                i.destroy()
            }
            )),
            r
        },
        Anchors: function(t, e, n) {
            var i = new T
              , r = !1
              , s = !1
              , o = {
                mount: function() {
                    this._a = e.Html.wrapper.querySelectorAll("a"),
                    this.bind()
                },
                bind: function() {
                    i.on("click", e.Html.wrapper, this.click)
                },
                unbind: function() {
                    i.off("click", e.Html.wrapper)
                },
                click: function(t) {
                    s && (t.stopPropagation(),
                    t.preventDefault())
                },
                detach: function() {
                    if (s = !0,
                    !r) {
                        for (var t = 0; t < this.items.length; t++)
                            this.items[t].draggable = !1,
                            this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")),
                            this.items[t].removeAttribute("href");
                        r = !0
                    }
                    return this
                },
                attach: function() {
                    if (s = !1,
                    r) {
                        for (var t = 0; t < this.items.length; t++)
                            this.items[t].draggable = !0,
                            this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
                        r = !1
                    }
                    return this
                }
            };
            return m(o, "items", {
                get: function() {
                    return o._a
                }
            }),
            n.on("swipe.move", (function() {
                o.detach()
            }
            )),
            n.on("swipe.end", (function() {
                e.Transition.after((function() {
                    o.attach()
                }
                ))
            }
            )),
            n.on("destroy", (function() {
                o.attach(),
                o.unbind(),
                i.destroy()
            }
            )),
            o
        },
        Controls: function(t, e, n) {
            var i = new T
              , r = !!L && {
                passive: !0
            }
              , s = {
                mount: function() {
                    this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),
                    this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),
                    this.addBindings()
                },
                setActive: function() {
                    for (var t = 0; t < this._n.length; t++)
                        this.addClass(this._n[t].children)
                },
                removeActive: function() {
                    for (var t = 0; t < this._n.length; t++)
                        this.removeClass(this._n[t].children)
                },
                addClass: function(e) {
                    var n = t.settings
                      , i = e[t.index];
                    i && (i.classList.add(n.classes.activeNav),
                    x(i).forEach((function(t) {
                        t.classList.remove(n.classes.activeNav)
                    }
                    )))
                },
                removeClass: function(e) {
                    var n = e[t.index];
                    n && n.classList.remove(t.settings.classes.activeNav)
                },
                addBindings: function() {
                    for (var t = 0; t < this._c.length; t++)
                        this.bind(this._c[t].children)
                },
                removeBindings: function() {
                    for (var t = 0; t < this._c.length; t++)
                        this.unbind(this._c[t].children)
                },
                bind: function(t) {
                    for (var e = 0; e < t.length; e++)
                        i.on("click", t[e], this.click),
                        i.on("touchstart", t[e], this.click, r)
                },
                unbind: function(t) {
                    for (var e = 0; e < t.length; e++)
                        i.off(["click", "touchstart"], t[e])
                },
                click: function(t) {
                    t.preventDefault(),
                    e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))
                }
            };
            return m(s, "items", {
                get: function() {
                    return s._c
                }
            }),
            n.on(["mount.after", "move.after"], (function() {
                s.setActive()
            }
            )),
            n.on("destroy", (function() {
                s.removeBindings(),
                s.removeActive(),
                i.destroy()
            }
            )),
            s
        },
        Keyboard: function(t, e, n) {
            var i = new T
              , r = {
                mount: function() {
                    t.settings.keyboard && this.bind()
                },
                bind: function() {
                    i.on("keyup", document, this.press)
                },
                unbind: function() {
                    i.off("keyup", document)
                },
                press: function(t) {
                    39 === t.keyCode && e.Run.make(e.Direction.resolve(">")),
                    37 === t.keyCode && e.Run.make(e.Direction.resolve("<"))
                }
            };
            return n.on(["destroy", "update"], (function() {
                r.unbind()
            }
            )),
            n.on("update", (function() {
                r.mount()
            }
            )),
            n.on("destroy", (function() {
                i.destroy()
            }
            )),
            r
        },
        Autoplay: function(t, e, n) {
            var i = new T
              , r = {
                mount: function() {
                    this.start(),
                    t.settings.hoverpause && this.bind()
                },
                start: function() {
                    var n = this;
                    t.settings.autoplay && p(this._i) && (this._i = setInterval((function() {
                        n.stop(),
                        e.Run.make(">"),
                        n.start()
                    }
                    ), this.time))
                },
                stop: function() {
                    this._i = clearInterval(this._i)
                },
                bind: function() {
                    var t = this;
                    i.on("mouseover", e.Html.root, (function() {
                        t.stop()
                    }
                    )),
                    i.on("mouseout", e.Html.root, (function() {
                        t.start()
                    }
                    ))
                },
                unbind: function() {
                    i.off(["mouseover", "mouseout"], e.Html.root)
                }
            };
            return m(r, "time", {
                get: function() {
                    return u(e.Html.slides[t.index].getAttribute("data-glide-autoplay") || t.settings.autoplay)
                }
            }),
            n.on(["destroy", "update"], (function() {
                r.unbind()
            }
            )),
            n.on(["run.before", "pause", "destroy", "swipe.start", "update"], (function() {
                r.stop()
            }
            )),
            n.on(["run.after", "play", "swipe.end"], (function() {
                r.start()
            }
            )),
            n.on("update", (function() {
                r.mount()
            }
            )),
            n.on("destroy", (function() {
                i.destroy()
            }
            )),
            r
        },
        Breakpoints: function(t, e, n) {
            var i = new T
              , r = t.settings
              , s = M(r.breakpoints)
              , o = l({}, r)
              , a = {
                match: function(t) {
                    if (void 0 !== window.matchMedia)
                        for (var e in t)
                            if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches)
                                return t[e];
                    return o
                }
            };
            return l(r, a.match(s)),
            i.on("resize", window, k((function() {
                t.settings = g(r, a.match(s))
            }
            ), t.settings.throttle)),
            n.on("update", (function() {
                s = M(s),
                o = l({}, r)
            }
            )),
            n.on("destroy", (function() {
                i.off("resize", window)
            }
            )),
            a
        }
    }
      , I = function(t) {
        function e() {
            return o(this, e),
            c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, b),
        a(e, [{
            key: "mount",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function t(e, n, i) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(e);
                        return null === s ? void 0 : t(s, n, i)
                    }
                    if ("value"in r)
                        return r.value;
                    var o = r.get;
                    return void 0 !== o ? o.call(i) : void 0
                }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "mount", this).call(this, l({}, j, t))
            }
        }]),
        e
    }();
    e.a = I
}
, function(t, e, n) {
    "use strict";
    var i = n(5);
    function r(t, e, n) {
        window["ga-disable-UA-125392699-5"] = !1,
        window["ga-disable-AW-778261331"] = !1,
        function(t) {
            var e = window.dataLayer || [];
            function n() {
                e.push(arguments)
            }
            n("js", new Date),
            n("config", "UA-125392699-5"),
            n("config", "AW-778261331"),
            function(t, e, n, i, r) {
                t[i] = t[i] || [],
                t[i].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var s = e.getElementsByTagName(n)[0]
                  , o = e.createElement(n);
                o.async = !0,
                o.src = "https://www.googletagmanager.com/gtm.js?id=" + r,
                s.parentNode.insertBefore(o, s)
            }(window, document, "script", "dataLayer", t ? "GTM-PCT9HLP" : "GTM-TWL3BZ9")
        }(t),
        Object(i.b)(e, n, t)
    }
    function s() {
        window["ga-disable-UA-125392699-5"] = !0,
        window["ga-disable-AW-778261331"] = !0
    }
    n.d(e, "a", (function() {
        return s
    }
    )),
    n.d(e, "b", (function() {
        return r
    }
    ))
}
, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }
    ));
    var i = {
        singleCurrency: function(t, e) {
            return "" !== e ? "https://api.".concat(e, "/v3/currencies/").concat(t) : "https://api.bittrex.com/v3/currencies/".concat(t)
        },
        singleCurrencyStaking: function(t, e) {
            return "" !== e ? "https://api.".concat(e, "/v3/ui/staking/currencies/").concat(t) : "https://api.bittrex.com/v3/ui/staking/currencies/".concat(t)
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , r = n.n(i);
    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function l(t, e, n) {
        return e && a(t.prototype, e),
        n && a(t, n),
        t
    }
    function c(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && function(t, e) {
            (Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }(t, e)
    }
    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function h(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function d(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? h(t) : e
    }
    function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var i = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
                    ;
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        }
        )(t, e, n || t)
    }
    function p() {
        return "rtl" === r()("html").attr("dir")
    }
    function v() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, e = arguments.length > 1 ? arguments[1] : void 0, n = "", i = "0123456789abcdefghijklmnopqrstuvwxyz", r = i.length, s = 0; s < t; s++)
            n += i[Math.floor(Math.random() * r)];
        return e ? "".concat(n, "-").concat(e) : n
    }
    function m(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }
    function g(t) {
        var e, n = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend"
        }, i = document.createElement("div");
        for (var r in n)
            void 0 !== i.style[r] && (e = n[r]);
        return e || (e = setTimeout((function() {
            t.triggerHandler("transitionend", [t])
        }
        ), 1),
        "transitionend")
    }
    function y(t, e) {
        var n = "complete" === document.readyState
          , i = (n ? "_didLoad" : "load") + ".zf.util.onLoad"
          , s = function() {
            return t.triggerHandler(i)
        };
        return t && (e && t.one(i, e),
        n ? setTimeout(s) : r()(window).one("load", s)),
        i
    }
    function b(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = e.ignoreLeaveWindow
          , i = void 0 !== n && n
          , s = e.ignoreReappear
          , o = void 0 !== s && s;
        return function(e) {
            for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                s[a - 1] = arguments[a];
            var l = t.bind.apply(t, [this, e].concat(s));
            if (null !== e.relatedTarget)
                return l();
            setTimeout((function() {
                if (!i && document.hasFocus && !document.hasFocus())
                    return l();
                o || r()(document).one("mouseenter", (function(t) {
                    r()(e.currentTarget).has(t.target).length || (e.relatedTarget = t.target,
                    l())
                }
                ))
            }
            ), 0)
        }
    }
    window.matchMedia || (window.matchMedia = function() {
        var t = window.styleMedia || window.media;
        if (!t) {
            var e, n = document.createElement("style"), i = document.getElementsByTagName("script")[0];
            n.type = "text/css",
            n.id = "matchmediajs-test",
            i ? i.parentNode.insertBefore(n, i) : document.head.appendChild(n),
            e = "getComputedStyle"in window && window.getComputedStyle(n, null) || n.currentStyle,
            t = {
                matchMedium: function(t) {
                    var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return n.styleSheet ? n.styleSheet.cssText = i : n.textContent = i,
                    "1px" === e.width
                }
            }
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }());
    var w = {
        queries: [],
        current: "",
        _init: function() {
            if (!0 !== this.isInitialized) {
                this.isInitialized = !0,
                r()("meta.foundation-mq").length || r()('<meta class="foundation-mq">').appendTo(document.head);
                var t, e = r()(".foundation-mq").css("font-family");
                for (var n in t = function(t) {
                    var e = {};
                    return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? t.split("&").reduce((function(t, e) {
                        var n = e.replace(/\+/g, " ").split("=")
                          , i = n[0]
                          , r = n[1];
                        return i = decodeURIComponent(i),
                        r = void 0 === r ? null : decodeURIComponent(r),
                        t.hasOwnProperty(i) ? Array.isArray(t[i]) ? t[i].push(r) : t[i] = [t[i], r] : t[i] = r,
                        t
                    }
                    ), {}) : e
                }(e),
                this.queries = [],
                t)
                    t.hasOwnProperty(n) && this.queries.push({
                        name: n,
                        value: "only screen and (min-width: ".concat(t[n], ")")
                    });
                this.current = this._getCurrentSize(),
                this._watcher()
            }
        },
        _reInit: function() {
            this.isInitialized = !1,
            this._init()
        },
        atLeast: function(t) {
            var e = this.get(t);
            return !!e && window.matchMedia(e).matches
        },
        only: function(t) {
            return t === this._getCurrentSize()
        },
        upTo: function(t) {
            var e = this.next(t);
            return !e || !this.atLeast(e)
        },
        is: function(t) {
            var e = function(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = []
                      , i = !0
                      , r = !1
                      , s = void 0;
                    try {
                        for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value),
                        !e || n.length !== e); i = !0)
                            ;
                    } catch (t) {
                        r = !0,
                        s = t
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (r)
                                throw s
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }(t.trim().split(" ").filter((function(t) {
                return !!t.length
            }
            )), 2)
              , n = e[0]
              , i = e[1]
              , r = void 0 === i ? "" : i;
            if ("only" === r)
                return this.only(n);
            if (!r || "up" === r)
                return this.atLeast(n);
            if ("down" === r)
                return this.upTo(n);
            throw new Error('\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like "<size> <modifier>", got "'.concat(t, '".\n    '))
        },
        get: function(t) {
            for (var e in this.queries)
                if (this.queries.hasOwnProperty(e)) {
                    var n = this.queries[e];
                    if (t === n.name)
                        return n.value
                }
            return null
        },
        next: function(t) {
            var e = this
              , n = this.queries.findIndex((function(n) {
                return e._getQueryName(n) === t
            }
            ));
            if (-1 === n)
                throw new Error('\n        Unknown breakpoint "'.concat(t, '" passed to MediaQuery.next().\n        Ensure it is present in your Sass "$breakpoints" setting.\n      '));
            var i = this.queries[n + 1];
            return i ? i.name : null
        },
        _getQueryName: function(t) {
            if ("string" == typeof t)
                return t;
            if ("object" === s(t))
                return t.name;
            throw new TypeError('\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got "'.concat(t, '" (').concat(s(t), ")\n    "))
        },
        _getCurrentSize: function() {
            for (var t, e = 0; e < this.queries.length; e++) {
                var n = this.queries[e];
                window.matchMedia(n.value).matches && (t = n)
            }
            return t && this._getQueryName(t)
        },
        _watcher: function() {
            var t = this;
            r()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", (function() {
                var e = t._getCurrentSize()
                  , n = t.current;
                e !== n && (t.current = e,
                r()(window).trigger("changed.zf.mediaquery", [e, n]))
            }
            ))
        }
    }
      , k = {
        version: "6.6.1",
        _plugins: {},
        _uuids: [],
        plugin: function(t, e) {
            var n = e || C(t)
              , i = x(n);
            this._plugins[i] = this[n] = t
        },
        registerPlugin: function(t, e) {
            var n = e ? x(e) : C(t.constructor).toLowerCase();
            t.uuid = v(6, n),
            t.$element.attr("data-".concat(n)) || t.$element.attr("data-".concat(n), t.uuid),
            t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t),
            t.$element.trigger("init.zf.".concat(n)),
            this._uuids.push(t.uuid)
        },
        unregisterPlugin: function(t) {
            var e = x(C(t.$element.data("zfPlugin").constructor));
            for (var n in this._uuids.splice(this._uuids.indexOf(t.uuid), 1),
            t.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e)),
            t)
                t[n] = null
        },
        reInit: function(t) {
            var e = t instanceof r.a;
            try {
                if (e)
                    t.each((function() {
                        r()(this).data("zfPlugin")._init()
                    }
                    ));
                else {
                    var n = this;
                    ({
                        object: function(t) {
                            t.forEach((function(t) {
                                t = x(t),
                                r()("[data-" + t + "]").foundation("_init")
                            }
                            ))
                        },
                        string: function() {
                            t = x(t),
                            r()("[data-" + t + "]").foundation("_init")
                        },
                        undefined: function() {
                            this.object(Object.keys(n._plugins))
                        }
                    })[s(t)](t)
                }
            } catch (t) {
                console.error(t)
            } finally {
                return t
            }
        },
        reflow: function(t, e) {
            void 0 === e ? e = Object.keys(this._plugins) : "string" == typeof e && (e = [e]);
            var n = this;
            r.a.each(e, (function(e, i) {
                var s = n._plugins[i];
                r()(t).find("[data-" + i + "]").addBack("[data-" + i + "]").filter((function() {
                    return void 0 === r()(this).data("zfPlugin")
                }
                )).each((function() {
                    var t = r()(this)
                      , e = {
                        reflow: !0
                    };
                    t.attr("data-options") && t.attr("data-options").split(";").forEach((function(t, n) {
                        var i = t.split(":").map((function(t) {
                            return t.trim()
                        }
                        ));
                        i[0] && (e[i[0]] = function(t) {
                            return "true" === t || "false" !== t && (isNaN(1 * t) ? t : parseFloat(t))
                        }(i[1]))
                    }
                    ));
                    try {
                        t.data("zfPlugin", new s(r()(this),e))
                    } catch (t) {
                        console.error(t)
                    } finally {
                        return
                    }
                }
                ))
            }
            ))
        },
        getFnName: C,
        addToJquery: function(t) {
            return t.fn.foundation = function(e) {
                var n = s(e)
                  , i = t(".no-js");
                if (i.length && i.removeClass("no-js"),
                "undefined" === n)
                    w._init(),
                    k.reflow(this);
                else {
                    if ("string" !== n)
                        throw new TypeError("We're sorry, ".concat(n, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
                    var r = Array.prototype.slice.call(arguments, 1)
                      , o = this.data("zfPlugin");
                    if (void 0 === o || void 0 === o[e])
                        throw new ReferenceError("We're sorry, '" + e + "' is not an available method for " + (o ? C(o) : "this element") + ".");
                    1 === this.length ? o[e].apply(o, r) : this.each((function(n, i) {
                        o[e].apply(t(i).data("zfPlugin"), r)
                    }
                    ))
                }
                return this
            }
            ,
            t
        }
    };
    function C(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/.exec(t.toString());
            return e && e.length > 1 ? e[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }
    function x(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    k.util = {
        throttle: function(t, e) {
            var n = null;
            return function() {
                var i = this
                  , r = arguments;
                null === n && (n = setTimeout((function() {
                    t.apply(i, r),
                    n = null
                }
                ), e))
            }
        }
    },
    window.Foundation = k,
    function() {
        Date.now && window.Date.now || (window.Date.now = Date.now = function() {
            return (new Date).getTime()
        }
        );
        for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
            var n = t[e];
            window.requestAnimationFrame = window[n + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var i = 0;
            window.requestAnimationFrame = function(t) {
                var e = Date.now()
                  , n = Math.max(i + 16, e);
                return setTimeout((function() {
                    t(i = n)
                }
                ), n - e)
            }
            ,
            window.cancelAnimationFrame = clearTimeout
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(),
            now: function() {
                return Date.now() - this.start
            }
        })
    }(),
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1)
          , n = this
          , i = function() {}
          , r = function() {
            return n.apply(this instanceof i ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (i.prototype = this.prototype),
        r.prototype = new i,
        r
    }
    );
    var $ = {
        ImNotTouchingYou: function(t, e, n, i, r) {
            return 0 === _(t, e, n, i, r)
        },
        OverlapArea: _,
        GetDimensions: T,
        GetExplicitOffsets: function(t, e, n, i, r, s, o) {
            var a, l, c = T(t), u = e ? T(e) : null;
            switch (n) {
            case "top":
                a = u.offset.top - (c.height + r);
                break;
            case "bottom":
                a = u.offset.top + u.height + r;
                break;
            case "left":
                l = u.offset.left - (c.width + s);
                break;
            case "right":
                l = u.offset.left + u.width + s
            }
            switch (n) {
            case "top":
            case "bottom":
                switch (i) {
                case "left":
                    l = u.offset.left + s;
                    break;
                case "right":
                    l = u.offset.left - c.width + u.width - s;
                    break;
                case "center":
                    l = o ? s : u.offset.left + u.width / 2 - c.width / 2 + s
                }
                break;
            case "right":
            case "left":
                switch (i) {
                case "bottom":
                    a = u.offset.top - r + u.height - c.height;
                    break;
                case "top":
                    a = u.offset.top + r;
                    break;
                case "center":
                    a = u.offset.top + r + u.height / 2 - c.height / 2
                }
            }
            return {
                top: a,
                left: l
            }
        }
    };
    function _(t, e, n, i, r) {
        var s, o, a, l, c = T(t);
        if (e) {
            var u = T(e);
            o = u.height + u.offset.top - (c.offset.top + c.height),
            s = c.offset.top - u.offset.top,
            a = c.offset.left - u.offset.left,
            l = u.width + u.offset.left - (c.offset.left + c.width)
        } else
            o = c.windowDims.height + c.windowDims.offset.top - (c.offset.top + c.height),
            s = c.offset.top - c.windowDims.offset.top,
            a = c.offset.left - c.windowDims.offset.left,
            l = c.windowDims.width - (c.offset.left + c.width);
        return o = r ? 0 : Math.min(o, 0),
        s = Math.min(s, 0),
        a = Math.min(a, 0),
        l = Math.min(l, 0),
        n ? a + l : i ? s + o : Math.sqrt(s * s + o * o + a * a + l * l)
    }
    function T(t) {
        if ((t = t.length ? t[0] : t) === window || t === document)
            throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var e = t.getBoundingClientRect()
          , n = t.parentNode.getBoundingClientRect()
          , i = document.body.getBoundingClientRect()
          , r = window.pageYOffset
          , s = window.pageXOffset;
        return {
            width: e.width,
            height: e.height,
            offset: {
                top: e.top + r,
                left: e.left + s
            },
            parentDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: n.top + r,
                    left: n.left + s
                }
            },
            windowDims: {
                width: i.width,
                height: i.height,
                offset: {
                    top: r,
                    left: s
                }
            }
        }
    }
    function S(t, e) {
        var n = t.length;
        function i() {
            0 == --n && e()
        }
        0 === n && e(),
        t.each((function() {
            if (this.complete && void 0 !== this.naturalWidth)
                i();
            else {
                var t = new Image
                  , e = "load.zf.images error.zf.images";
                r()(t).one(e, (function t(n) {
                    r()(this).off(e, t),
                    i()
                }
                )),
                t.src = r()(this).attr("src")
            }
        }
        ))
    }
    var A = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        35: "END",
        36: "HOME",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }
      , z = {};
    function E(t) {
        return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter((function() {
            return !(!r()(this).is(":visible") || r()(this).attr("tabindex") < 0)
        }
        ))
    }
    function O(t) {
        var e = A[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
        return e = e.replace(/\W+/, ""),
        t.shiftKey && (e = "SHIFT_".concat(e)),
        t.ctrlKey && (e = "CTRL_".concat(e)),
        t.altKey && (e = "ALT_".concat(e)),
        e.replace(/_$/, "")
    }
    var L = {
        keys: function(t) {
            var e = {};
            for (var n in t)
                e[t[n]] = t[n];
            return e
        }(A),
        parseKey: O,
        handleKey: function(t, e, n) {
            var i, s = z[e], o = this.parseKey(t);
            if (!s)
                return console.warn("Component not defined!");
            if (!0 !== t.zfIsKeyHandled)
                if ((i = n[(void 0 === s.ltr ? s : p() ? r.a.extend({}, s.ltr, s.rtl) : r.a.extend({}, s.rtl, s.ltr))[o]]) && "function" == typeof i) {
                    var a = i.apply();
                    t.zfIsKeyHandled = !0,
                    (n.handled || "function" == typeof n.handled) && n.handled(a)
                } else
                    (n.unhandled || "function" == typeof n.unhandled) && n.unhandled()
        },
        findFocusable: E,
        register: function(t, e) {
            z[t] = e
        },
        trapFocus: function(t) {
            var e = E(t)
              , n = e.eq(0)
              , i = e.eq(-1);
            t.on("keydown.zf.trapfocus", (function(t) {
                t.target === i[0] && "TAB" === O(t) ? (t.preventDefault(),
                n.focus()) : t.target === n[0] && "SHIFT_TAB" === O(t) && (t.preventDefault(),
                i.focus())
            }
            ))
        },
        releaseFocus: function(t) {
            t.off("keydown.zf.trapfocus")
        }
    }
      , P = ["mui-enter", "mui-leave"]
      , D = ["mui-enter-active", "mui-leave-active"]
      , q = {
        animateIn: function(t, e, n) {
            M(!0, t, e, n)
        },
        animateOut: function(t, e, n) {
            M(!1, t, e, n)
        }
    };
    function H(t, e, n) {
        var i, r, s = null;
        if (0 === t)
            return n.apply(e),
            void e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]);
        i = window.requestAnimationFrame((function o(a) {
            s || (s = a),
            r = a - s,
            n.apply(e),
            r < t ? i = window.requestAnimationFrame(o, e) : (window.cancelAnimationFrame(i),
            e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
        }
        ))
    }
    function M(t, e, n, i) {
        if ((e = r()(e).eq(0)).length) {
            var s = t ? P[0] : P[1]
              , o = t ? D[0] : D[1];
            a(),
            e.addClass(n).css("transition", "none"),
            requestAnimationFrame((function() {
                e.addClass(s),
                t && e.show()
            }
            )),
            requestAnimationFrame((function() {
                e.css("transition", "").addClass(o)
            }
            )),
            e.one(g(e), (function() {
                t || e.hide(),
                a(),
                i && i.apply(e)
            }
            ))
        }
        function a() {
            e[0].style.transitionDuration = 0,
            e.removeClass("".concat(s, " ").concat(o, " ").concat(n))
        }
    }
    var j = {
        Feather: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            t.attr("role", "menubar");
            var n = t.find("li").attr({
                role: "menuitem"
            })
              , i = "is-".concat(e, "-submenu")
              , s = "".concat(i, "-item")
              , o = "is-".concat(e, "-submenu-parent")
              , a = "accordion" !== e;
            n.each((function() {
                var t = r()(this)
                  , n = t.children("ul");
                n.length && (t.addClass(o),
                a && (t.attr({
                    "aria-haspopup": !0,
                    "aria-label": t.children("a:first").text()
                }),
                "drilldown" === e && t.attr({
                    "aria-expanded": !1
                })),
                n.addClass("submenu ".concat(i)).attr({
                    "data-submenu": "",
                    role: "menubar"
                }),
                "drilldown" === e && n.attr({
                    "aria-hidden": !0
                })),
                t.parent("[data-submenu]").length && t.addClass("is-submenu-item ".concat(s))
            }
            ))
        },
        Burn: function(t, e) {
            var n = "is-".concat(e, "-submenu")
              , i = "".concat(n, "-item")
              , r = "is-".concat(e, "-submenu-parent");
            t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(n, " ").concat(i, " ").concat(r, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "")
        }
    };
    function I(t, e, n) {
        var i, r, s = this, o = e.duration, a = Object.keys(t.data())[0] || "timer", l = -1;
        this.isPaused = !1,
        this.restart = function() {
            l = -1,
            clearTimeout(r),
            this.start()
        }
        ,
        this.start = function() {
            this.isPaused = !1,
            clearTimeout(r),
            l = l <= 0 ? o : l,
            t.data("paused", !1),
            i = Date.now(),
            r = setTimeout((function() {
                e.infinite && s.restart(),
                n && "function" == typeof n && n()
            }
            ), l),
            t.trigger("timerstart.zf.".concat(a))
        }
        ,
        this.pause = function() {
            this.isPaused = !0,
            clearTimeout(r),
            t.data("paused", !0);
            var e = Date.now();
            l -= e - i,
            t.trigger("timerpaused.zf.".concat(a))
        }
    }
    var B, R, F, N, W = {}, U = !1, V = !1;
    function G(t) {
        if (this.removeEventListener("touchmove", Q),
        this.removeEventListener("touchend", G),
        !V) {
            var e = r.a.Event("tap", N || t);
            r()(this).trigger(e)
        }
        N = null,
        U = !1,
        V = !1
    }
    function Q(t) {
        if (r.a.spotSwipe.preventDefault && t.preventDefault(),
        U) {
            var e, n = t.touches[0].pageX, i = (t.touches[0].pageY,
            B - n);
            V = !0,
            F = (new Date).getTime() - R,
            Math.abs(i) >= r.a.spotSwipe.moveThreshold && F <= r.a.spotSwipe.timeThreshold && (e = i > 0 ? "left" : "right"),
            e && (t.preventDefault(),
            G.apply(this, arguments),
            r()(this).trigger(r.a.Event("swipe", Object.assign({}, t)), e).trigger(r.a.Event("swipe".concat(e), Object.assign({}, t))))
        }
    }
    function Y(t) {
        1 == t.touches.length && (B = t.touches[0].pageX,
        t.touches[0].pageY,
        N = t,
        U = !0,
        V = !1,
        R = (new Date).getTime(),
        this.addEventListener("touchmove", Q, !1),
        this.addEventListener("touchend", G, !1))
    }
    function X() {
        this.addEventListener && this.addEventListener("touchstart", Y, !1)
    }
    var K = function() {
        function t(e) {
            o(this, t),
            this.version = "1.0.0",
            this.enabled = "ontouchstart"in document.documentElement,
            this.preventDefault = !1,
            this.moveThreshold = 75,
            this.timeThreshold = 200,
            this.$ = e,
            this._init()
        }
        return l(t, [{
            key: "_init",
            value: function() {
                var t = this.$;
                t.event.special.swipe = {
                    setup: X
                },
                t.event.special.tap = {
                    setup: X
                },
                t.each(["left", "up", "down", "right"], (function() {
                    t.event.special["swipe".concat(this)] = {
                        setup: function() {
                            t(this).on("swipe", t.noop)
                        }
                    }
                }
                ))
            }
        }]),
        t
    }();
    W.setupSpotSwipe = function(t) {
        t.spotSwipe = new K(t)
    }
    ,
    W.setupTouchHandler = function(t) {
        t.fn.addTouch = function() {
            this.each((function(n, i) {
                t(i).bind("touchstart touchmove touchend touchcancel", (function(t) {
                    e(t)
                }
                ))
            }
            ));
            var e = function(t) {
                var e, n = t.changedTouches[0], i = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup"
                }[t.type];
                "MouseEvent"in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(i,{
                    bubbles: !0,
                    cancelable: !0,
                    screenX: n.screenX,
                    screenY: n.screenY,
                    clientX: n.clientX,
                    clientY: n.clientY
                }) : (e = document.createEvent("MouseEvent")).initMouseEvent(i, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                n.target.dispatchEvent(e)
            }
        }
    }
    ,
    W.init = function(t) {
        void 0 === t.spotSwipe && (W.setupSpotSwipe(t),
        W.setupTouchHandler(t))
    }
    ;
    var Z = function() {
        for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
            if ("".concat(t[e], "MutationObserver")in window)
                return window["".concat(t[e], "MutationObserver")];
        return !1
    }()
      , J = function(t, e) {
        t.data(e).split(" ").forEach((function(n) {
            r()("#".concat(n))["close" === e ? "trigger" : "triggerHandler"]("".concat(e, ".zf.trigger"), [t])
        }
        ))
    }
      , tt = {
        Listeners: {
            Basic: {},
            Global: {}
        },
        Initializers: {}
    };
    function et(t, e, n) {
        var i, s = Array.prototype.slice.call(arguments, 3);
        r()(window).off(e).on(e, (function(e) {
            i && clearTimeout(i),
            i = setTimeout((function() {
                n.apply(null, s)
            }
            ), t || 10)
        }
        ))
    }
    tt.Listeners.Basic = {
        openListener: function() {
            J(r()(this), "open")
        },
        closeListener: function() {
            r()(this).data("close") ? J(r()(this), "close") : r()(this).trigger("close.zf.trigger")
        },
        toggleListener: function() {
            r()(this).data("toggle") ? J(r()(this), "toggle") : r()(this).trigger("toggle.zf.trigger")
        },
        closeableListener: function(t) {
            var e = r()(this).data("closable");
            t.stopPropagation(),
            "" !== e ? q.animateOut(r()(this), e, (function() {
                r()(this).trigger("closed.zf")
            }
            )) : r()(this).fadeOut().trigger("closed.zf")
        },
        toggleFocusListener: function() {
            var t = r()(this).data("toggle-focus");
            r()("#".concat(t)).triggerHandler("toggle.zf.trigger", [r()(this)])
        }
    },
    tt.Initializers.addOpenListener = function(t) {
        t.off("click.zf.trigger", tt.Listeners.Basic.openListener),
        t.on("click.zf.trigger", "[data-open]", tt.Listeners.Basic.openListener)
    }
    ,
    tt.Initializers.addCloseListener = function(t) {
        t.off("click.zf.trigger", tt.Listeners.Basic.closeListener),
        t.on("click.zf.trigger", "[data-close]", tt.Listeners.Basic.closeListener)
    }
    ,
    tt.Initializers.addToggleListener = function(t) {
        t.off("click.zf.trigger", tt.Listeners.Basic.toggleListener),
        t.on("click.zf.trigger", "[data-toggle]", tt.Listeners.Basic.toggleListener)
    }
    ,
    tt.Initializers.addCloseableListener = function(t) {
        t.off("close.zf.trigger", tt.Listeners.Basic.closeableListener),
        t.on("close.zf.trigger", "[data-closeable], [data-closable]", tt.Listeners.Basic.closeableListener)
    }
    ,
    tt.Initializers.addToggleFocusListener = function(t) {
        t.off("focus.zf.trigger blur.zf.trigger", tt.Listeners.Basic.toggleFocusListener),
        t.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", tt.Listeners.Basic.toggleFocusListener)
    }
    ,
    tt.Listeners.Global = {
        resizeListener: function(t) {
            Z || t.each((function() {
                r()(this).triggerHandler("resizeme.zf.trigger")
            }
            )),
            t.attr("data-events", "resize")
        },
        scrollListener: function(t) {
            Z || t.each((function() {
                r()(this).triggerHandler("scrollme.zf.trigger")
            }
            )),
            t.attr("data-events", "scroll")
        },
        closeMeListener: function(t, e) {
            var n = t.namespace.split(".")[0];
            r()("[data-".concat(n, "]")).not('[data-yeti-box="'.concat(e, '"]')).each((function() {
                var t = r()(this);
                t.triggerHandler("close.zf.trigger", [t])
            }
            ))
        }
    },
    tt.Initializers.addClosemeListener = function(t) {
        var e = r()("[data-yeti-box]")
          , n = ["dropdown", "tooltip", "reveal"];
        if (t && ("string" == typeof t ? n.push(t) : "object" === s(t) && "string" == typeof t[0] ? n = n.concat(t) : console.error("Plugin names must be strings")),
        e.length) {
            var i = n.map((function(t) {
                return "closeme.zf.".concat(t)
            }
            )).join(" ");
            r()(window).off(i).on(i, tt.Listeners.Global.closeMeListener)
        }
    }
    ,
    tt.Initializers.addResizeListener = function(t) {
        var e = r()("[data-resize]");
        e.length && et(t, "resize.zf.trigger", tt.Listeners.Global.resizeListener, e)
    }
    ,
    tt.Initializers.addScrollListener = function(t) {
        var e = r()("[data-scroll]");
        e.length && et(t, "scroll.zf.trigger", tt.Listeners.Global.scrollListener, e)
    }
    ,
    tt.Initializers.addMutationEventsListener = function(t) {
        if (!Z)
            return !1;
        var e = t.find("[data-resize], [data-scroll], [data-mutate]")
          , n = function(t) {
            var e = r()(t[0].target);
            switch (t[0].type) {
            case "attributes":
                "scroll" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("scrollme.zf.trigger", [e, window.pageYOffset]),
                "resize" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("resizeme.zf.trigger", [e]),
                "style" === t[0].attributeName && (e.closest("[data-mutate]").attr("data-events", "mutate"),
                e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]));
                break;
            case "childList":
                e.closest("[data-mutate]").attr("data-events", "mutate"),
                e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]);
                break;
            default:
                return !1
            }
        };
        if (e.length)
            for (var i = 0; i <= e.length - 1; i++)
                new Z(n).observe(e[i], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"]
                })
    }
    ,
    tt.Initializers.addSimpleListeners = function() {
        var t = r()(document);
        tt.Initializers.addOpenListener(t),
        tt.Initializers.addCloseListener(t),
        tt.Initializers.addToggleListener(t),
        tt.Initializers.addCloseableListener(t),
        tt.Initializers.addToggleFocusListener(t)
    }
    ,
    tt.Initializers.addGlobalListeners = function() {
        var t = r()(document);
        tt.Initializers.addMutationEventsListener(t),
        tt.Initializers.addResizeListener(),
        tt.Initializers.addScrollListener(),
        tt.Initializers.addClosemeListener()
    }
    ,
    tt.init = function(t, e) {
        y(t(window), (function() {
            !0 !== t.triggersInitialized && (tt.Initializers.addSimpleListeners(),
            tt.Initializers.addGlobalListeners(),
            t.triggersInitialized = !0)
        }
        )),
        e && (e.Triggers = tt,
        e.IHearYou = tt.Initializers.addGlobalListeners)
    }
    ;
    var nt = function() {
        function t(e, n) {
            o(this, t),
            this._setup(e, n);
            var i = rt(this);
            this.uuid = v(6, i),
            this.$element.attr("data-".concat(i)) || this.$element.attr("data-".concat(i), this.uuid),
            this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this),
            this.$element.trigger("init.zf.".concat(i))
        }
        return l(t, [{
            key: "destroy",
            value: function() {
                this._destroy();
                var t = rt(this);
                for (var e in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t)),
                this)
                    this[e] = null
            }
        }]),
        t
    }();
    function it(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    function rt(t) {
        return void 0 !== t.constructor.name ? it(t.constructor.name) : it(t.className)
    }
    var st = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.$element = t,
                this.options = r.a.extend(!0, {}, e.defaults, this.$element.data(), n),
                this.isEnabled = !0,
                this.formnovalidate = null,
                this.className = "Abide",
                this._init()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                this.$inputs = r.a.merge(this.$element.find("input").not('[type="submit"]'), this.$element.find("textarea, select")),
                this.$submits = this.$element.find('[type="submit"]');
                var e = this.$element.find("[data-abide-error]");
                this.options.a11yAttributes && (this.$inputs.each((function(e, n) {
                    return t.addA11yAttributes(r()(n))
                }
                )),
                e.each((function(e, n) {
                    return t.addGlobalErrorA11yAttributes(r()(n))
                }
                ))),
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off(".abide").on("reset.zf.abide", (function() {
                    t.resetForm()
                }
                )).on("submit.zf.abide", (function() {
                    return t.validateForm()
                }
                )),
                this.$submits.off("click.zf.abide keydown.zf.abide").on("click.zf.abide keydown.zf.abide", (function(e) {
                    e.key && " " !== e.key && "Enter" !== e.key || (e.preventDefault(),
                    t.formnovalidate = null !== e.target.getAttribute("formnovalidate"),
                    t.$element.submit())
                }
                )),
                "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", (function(e) {
                    t.validateInput(r()(e.target))
                }
                )),
                this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", (function(e) {
                    t.validateInput(r()(e.target))
                }
                )),
                this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", (function(e) {
                    t.validateInput(r()(e.target))
                }
                ))
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "_validationIsDisabled",
            value: function() {
                return !1 === this.isEnabled || ("boolean" == typeof this.formnovalidate ? this.formnovalidate : !!this.$submits.length && null !== this.$submits[0].getAttribute("formnovalidate"))
            }
        }, {
            key: "enableValidation",
            value: function() {
                this.isEnabled = !0
            }
        }, {
            key: "disableValidation",
            value: function() {
                this.isEnabled = !1
            }
        }, {
            key: "requiredCheck",
            value: function(t) {
                if (!t.attr("required"))
                    return !0;
                var e = !0;
                switch (t[0].type) {
                case "checkbox":
                    e = t[0].checked;
                    break;
                case "select":
                case "select-one":
                case "select-multiple":
                    var n = t.find("option:selected");
                    n.length && n.val() || (e = !1);
                    break;
                default:
                    t.val() && t.val().length || (e = !1)
                }
                return e
            }
        }, {
            key: "findFormError",
            value: function(t) {
                var e = t.length ? t[0].id : ""
                  , n = t.siblings(this.options.formErrorSelector);
                return n.length || (n = t.parent().find(this.options.formErrorSelector)),
                e && (n = n.add(this.$element.find('[data-form-error-for="'.concat(e, '"]')))),
                n
            }
        }, {
            key: "findLabel",
            value: function(t) {
                var e = t[0].id
                  , n = this.$element.find('label[for="'.concat(e, '"]'));
                return n.length ? n : t.closest("label")
            }
        }, {
            key: "findRadioLabels",
            value: function(t) {
                var e = this
                  , n = t.map((function(t, n) {
                    var i = n.id
                      , s = e.$element.find('label[for="'.concat(i, '"]'));
                    return s.length || (s = r()(n).closest("label")),
                    s[0]
                }
                ));
                return r()(n)
            }
        }, {
            key: "findCheckboxLabels",
            value: function(t) {
                var e = this
                  , n = t.map((function(t, n) {
                    var i = n.id
                      , s = e.$element.find('label[for="'.concat(i, '"]'));
                    return s.length || (s = r()(n).closest("label")),
                    s[0]
                }
                ));
                return r()(n)
            }
        }, {
            key: "addErrorClasses",
            value: function(t) {
                var e = this.findLabel(t)
                  , n = this.findFormError(t);
                e.length && e.addClass(this.options.labelErrorClass),
                n.length && n.addClass(this.options.formErrorClass),
                t.addClass(this.options.inputErrorClass).attr({
                    "data-invalid": "",
                    "aria-invalid": !0
                })
            }
        }, {
            key: "addA11yAttributes",
            value: function(t) {
                var e = this.findFormError(t)
                  , n = e.filter("label")
                  , i = e.first();
                if (e.length) {
                    if (void 0 === t.attr("aria-describedby")) {
                        var s = i.attr("id");
                        void 0 === s && (s = v(6, "abide-error"),
                        i.attr("id", s)),
                        t.attr("aria-describedby", s)
                    }
                    if (n.filter("[for]").length < n.length) {
                        var o = t.attr("id");
                        void 0 === o && (o = v(6, "abide-input"),
                        t.attr("id", o)),
                        n.each((function(t, e) {
                            var n = r()(e);
                            void 0 === n.attr("for") && n.attr("for", o)
                        }
                        ))
                    }
                    e.each((function(t, e) {
                        var n = r()(e);
                        void 0 === n.attr("role") && n.attr("role", "alert")
                    }
                    )).end()
                }
            }
        }, {
            key: "addGlobalErrorA11yAttributes",
            value: function(t) {
                void 0 === t.attr("aria-live") && t.attr("aria-live", this.options.a11yErrorLevel)
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(t) {
                var e = this.$element.find(':radio[name="'.concat(t, '"]'))
                  , n = this.findRadioLabels(e)
                  , i = this.findFormError(e);
                n.length && n.removeClass(this.options.labelErrorClass),
                i.length && i.removeClass(this.options.formErrorClass),
                e.removeClass(this.options.inputErrorClass).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                })
            }
        }, {
            key: "removeCheckboxErrorClasses",
            value: function(t) {
                var e = this.$element.find(':checkbox[name="'.concat(t, '"]'))
                  , n = this.findCheckboxLabels(e)
                  , i = this.findFormError(e);
                n.length && n.removeClass(this.options.labelErrorClass),
                i.length && i.removeClass(this.options.formErrorClass),
                e.removeClass(this.options.inputErrorClass).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                })
            }
        }, {
            key: "removeErrorClasses",
            value: function(t) {
                if ("radio" == t[0].type)
                    return this.removeRadioErrorClasses(t.attr("name"));
                if ("checkbox" == t[0].type)
                    return this.removeCheckboxErrorClasses(t.attr("name"));
                var e = this.findLabel(t)
                  , n = this.findFormError(t);
                e.length && e.removeClass(this.options.labelErrorClass),
                n.length && n.removeClass(this.options.formErrorClass),
                t.removeClass(this.options.inputErrorClass).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                })
            }
        }, {
            key: "validateInput",
            value: function(t) {
                var e = this.requiredCheck(t)
                  , n = !1
                  , i = !0
                  , s = t.attr("data-validator")
                  , o = !0;
                if (this._validationIsDisabled())
                    return !0;
                if (t.is("[data-abide-ignore]") || t.is('[type="hidden"]') || t.is("[disabled]"))
                    return !0;
                switch (t[0].type) {
                case "radio":
                    n = this.validateRadio(t.attr("name"));
                    break;
                case "checkbox":
                    n = this.validateCheckbox(t.attr("name")),
                    e = !0;
                    break;
                case "select":
                case "select-one":
                case "select-multiple":
                    n = e;
                    break;
                default:
                    n = this.validateText(t)
                }
                s && (i = this.matchValidation(t, s, t.attr("required"))),
                t.attr("data-equalto") && (o = this.options.validators.equalTo(t));
                var a = -1 === [e, n, i, o].indexOf(!1)
                  , l = (a ? "valid" : "invalid") + ".zf.abide";
                if (a) {
                    var c = this.$element.find('[data-equalto="'.concat(t.attr("id"), '"]'));
                    if (c.length) {
                        var u = this;
                        c.each((function() {
                            r()(this).val() && u.validateInput(r()(this))
                        }
                        ))
                    }
                }
                return this[a ? "removeErrorClasses" : "addErrorClasses"](t),
                t.trigger(l, [t]),
                a
            }
        }, {
            key: "validateForm",
            value: function() {
                var t, e = this, n = [], i = this;
                if (this.initialized || (this.initialized = !0),
                this._validationIsDisabled())
                    return this.formnovalidate = null,
                    !0;
                this.$inputs.each((function() {
                    if ("checkbox" === r()(this)[0].type) {
                        if (r()(this).attr("name") === t)
                            return !0;
                        t = r()(this).attr("name")
                    }
                    n.push(i.validateInput(r()(this)))
                }
                ));
                var s = -1 === n.indexOf(!1);
                return this.$element.find("[data-abide-error]").each((function(t, n) {
                    var i = r()(n);
                    e.options.a11yAttributes && e.addGlobalErrorA11yAttributes(i),
                    i.css("display", s ? "none" : "block")
                }
                )),
                this.$element.trigger((s ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]),
                s
            }
        }, {
            key: "validateText",
            value: function(t, e) {
                e = e || t.attr("data-pattern") || t.attr("pattern") || t.attr("type");
                var n = t.val()
                  , i = !1;
                return n.length ? i = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(n) : e === t.attr("type") || new RegExp(e).test(n) : t.prop("required") || (i = !0),
                i
            }
        }, {
            key: "validateRadio",
            value: function(t) {
                var e = this.$element.find(':radio[name="'.concat(t, '"]'))
                  , n = !1
                  , i = !1;
                return e.each((function(t, e) {
                    r()(e).attr("required") && (i = !0)
                }
                )),
                i || (n = !0),
                n || e.each((function(t, e) {
                    r()(e).prop("checked") && (n = !0)
                }
                )),
                n
            }
        }, {
            key: "validateCheckbox",
            value: function(t) {
                var e = this
                  , n = this.$element.find(':checkbox[name="'.concat(t, '"]'))
                  , i = !1
                  , s = !1
                  , o = 1
                  , a = 0;
                return n.each((function(t, e) {
                    r()(e).attr("required") && (s = !0)
                }
                )),
                s || (i = !0),
                i || (n.each((function(t, e) {
                    r()(e).prop("checked") && a++,
                    void 0 !== r()(e).attr("data-min-required") && (o = parseInt(r()(e).attr("data-min-required")))
                }
                )),
                a >= o && (i = !0)),
                !0 !== this.initialized && o > 1 || (n.each((function(t, n) {
                    i ? e.removeErrorClasses(r()(n)) : e.addErrorClasses(r()(n))
                }
                )),
                i)
            }
        }, {
            key: "matchValidation",
            value: function(t, e, n) {
                var i = this;
                return n = !!n,
                -1 === e.split(" ").map((function(e) {
                    return i.options.validators[e](t, n, t.parent())
                }
                )).indexOf(!1)
            }
        }, {
            key: "resetForm",
            value: function() {
                var t = this.$element
                  , e = this.options;
                r()(".".concat(e.labelErrorClass), t).not("small").removeClass(e.labelErrorClass),
                r()(".".concat(e.inputErrorClass), t).not("small").removeClass(e.inputErrorClass),
                r()("".concat(e.formErrorSelector, ".").concat(e.formErrorClass)).removeClass(e.formErrorClass),
                t.find("[data-abide-error]").css("display", "none"),
                r()(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({
                    "data-invalid": null,
                    "aria-invalid": null
                }),
                r()(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                }),
                r()(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                }),
                t.trigger("formreset.zf.abide", [t])
            }
        }, {
            key: "_destroy",
            value: function() {
                var t = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"),
                this.$inputs.off(".abide").each((function() {
                    t.removeErrorClasses(r()(this))
                }
                )),
                this.$submits.off(".abide")
            }
        }]),
        e
    }();
    st.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        a11yAttributes: !0,
        a11yErrorLevel: "assertive",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            website: {
                test: function(t) {
                    return st.defaults.patterns.domain.test(t) || st.defaults.patterns.url.test(t)
                }
            }
        },
        validators: {
            equalTo: function(t, e, n) {
                return r()("#".concat(t.attr("data-equalto"))).val() === t.val()
            }
        }
    };
    var ot = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Accordion",
                this._init(),
                L.register("Accordion", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_DOWN: "next",
                    ARROW_UP: "previous"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                this._isInitializing = !0,
                this.$element.attr("role", "tablist"),
                this.$tabs = this.$element.children("[data-accordion-item]"),
                this.$tabs.attr({
                    role: "presentation"
                }),
                this.$tabs.each((function(t, e) {
                    var n = r()(e)
                      , i = n.children("[data-tab-content]")
                      , s = i[0].id || v(6, "accordion")
                      , o = e.id ? "".concat(e.id, "-label") : "".concat(s, "-label");
                    n.find("a:first").attr({
                        "aria-controls": s,
                        role: "tab",
                        id: o,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }),
                    i.attr({
                        role: "tabpanel",
                        "aria-labelledby": o,
                        "aria-hidden": !0,
                        id: s
                    })
                }
                ));
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && (this._initialAnchor = e.prev("a").attr("href"),
                this._openSingleTab(e)),
                this._checkDeepLink = function() {
                    var e = window.location.hash;
                    if (!e.length) {
                        if (t._isInitializing)
                            return;
                        t._initialAnchor && (e = t._initialAnchor)
                    }
                    var n = e && r()(e)
                      , i = e && t.$element.find('[href$="'.concat(e, '"]'));
                    n.length && i.length && (n && i && i.length ? i.parent("[data-accordion-item]").hasClass("is-active") || t._openSingleTab(n) : t._closeAllTabs(),
                    t.options.deepLinkSmudge && y(r()(window), (function() {
                        var e = t.$element.offset();
                        r()("html, body").animate({
                            scrollTop: e.top
                        }, t.options.deepLinkSmudgeDelay)
                    }
                    )),
                    t.$element.trigger("deeplink.zf.accordion", [i, n]))
                }
                ,
                this.options.deepLink && this._checkDeepLink(),
                this._events(),
                this._isInitializing = !1
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$tabs.each((function() {
                    var e = r()(this)
                      , n = e.children("[data-tab-content]");
                    n.length && e.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", (function(e) {
                        e.preventDefault(),
                        t.toggle(n)
                    }
                    )).on("keydown.zf.accordion", (function(i) {
                        L.handleKey(i, "Accordion", {
                            toggle: function() {
                                t.toggle(n)
                            },
                            next: function() {
                                var n = e.next().find("a").focus();
                                t.options.multiExpand || n.trigger("click.zf.accordion")
                            },
                            previous: function() {
                                var n = e.prev().find("a").focus();
                                t.options.multiExpand || n.trigger("click.zf.accordion")
                            },
                            handled: function() {
                                i.preventDefault()
                            }
                        })
                    }
                    ))
                }
                )),
                this.options.deepLink && r()(window).on("hashchange", this._checkDeepLink)
            }
        }, {
            key: "toggle",
            value: function(t) {
                if (t.closest("[data-accordion]").is("[disabled]"))
                    console.info("Cannot toggle an accordion that is disabled.");
                else if (t.parent().hasClass("is-active") ? this.up(t) : this.down(t),
                this.options.deepLink) {
                    var e = t.prev("a").attr("href");
                    this.options.updateHistory ? history.pushState({}, "", e) : history.replaceState({}, "", e)
                }
            }
        }, {
            key: "down",
            value: function(t) {
                t.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot call down on an accordion that is disabled.") : this.options.multiExpand ? this._openTab(t) : this._openSingleTab(t)
            }
        }, {
            key: "up",
            value: function(t) {
                if (this.$element.is("[disabled]"))
                    console.info("Cannot call up on an accordion that is disabled.");
                else {
                    var e = t.parent();
                    if (e.hasClass("is-active")) {
                        var n = e.siblings();
                        (this.options.allowAllClosed || n.hasClass("is-active")) && this._closeTab(t)
                    }
                }
            }
        }, {
            key: "_openSingleTab",
            value: function(t) {
                var e = this.$element.children(".is-active").children("[data-tab-content]");
                e.length && this._closeTab(e.not(t)),
                this._openTab(t)
            }
        }, {
            key: "_openTab",
            value: function(t) {
                var e = this
                  , n = t.parent()
                  , i = t.attr("aria-labelledby");
                t.attr("aria-hidden", !1),
                n.addClass("is-active"),
                r()("#".concat(i)).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                }),
                t.slideDown(this.options.slideSpeed, (function() {
                    e.$element.trigger("down.zf.accordion", [t])
                }
                ))
            }
        }, {
            key: "_closeTab",
            value: function(t) {
                var e = this
                  , n = t.parent()
                  , i = t.attr("aria-labelledby");
                t.attr("aria-hidden", !0),
                n.removeClass("is-active"),
                r()("#".concat(i)).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }),
                t.slideUp(this.options.slideSpeed, (function() {
                    e.$element.trigger("up.zf.accordion", [t])
                }
                ))
            }
        }, {
            key: "_closeAllTabs",
            value: function() {
                var t = this.$element.children(".is-active").children("[data-tab-content]");
                t.length && this._closeTab(t)
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""),
                this.$element.find("a").off(".zf.accordion"),
                this.options.deepLink && r()(window).off("hashchange", this._checkDeepLink)
            }
        }]),
        e
    }();
    ot.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1,
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1
    };
    var at = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "AccordionMenu",
                this._init(),
                L.register("AccordionMenu", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_RIGHT: "open",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "close",
                    ESCAPE: "closeAll"
                })
            }
        }, {
            key: "_init",
            value: function() {
                j.Feather(this.$element, "accordion");
                var t = this;
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0),
                this.$element.attr({
                    role: "tree",
                    "aria-multiselectable": this.options.multiOpen
                }),
                this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"),
                this.$menuLinks.each((function() {
                    var e = this.id || v(6, "acc-menu-link")
                      , n = r()(this)
                      , i = n.children("[data-submenu]")
                      , s = i[0].id || v(6, "acc-menu")
                      , o = i.hasClass("is-active");
                    t.options.parentLink && n.children("a").clone().prependTo(i).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>'),
                    t.options.submenuToggle ? (n.addClass("has-submenu-toggle"),
                    n.children("a").after('<button id="' + e + '" class="submenu-toggle" aria-controls="' + s + '" aria-expanded="' + o + '" title="' + t.options.submenuToggleText + '"><span class="submenu-toggle-text">' + t.options.submenuToggleText + "</span></button>")) : n.attr({
                        "aria-controls": s,
                        "aria-expanded": o,
                        id: e
                    }),
                    i.attr({
                        "aria-labelledby": e,
                        "aria-hidden": !o,
                        role: "group",
                        id: s
                    })
                }
                )),
                this.$element.find("li").attr({
                    role: "treeitem"
                });
                var e = this.$element.find(".is-active");
                e.length && (t = this,
                e.each((function() {
                    t.down(r()(this))
                }
                ))),
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.find("li").each((function() {
                    var e = r()(this).children("[data-submenu]");
                    e.length && (t.options.submenuToggle ? r()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", (function(n) {
                        t.toggle(e)
                    }
                    )) : r()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", (function(n) {
                        n.preventDefault(),
                        t.toggle(e)
                    }
                    )))
                }
                )).on("keydown.zf.accordionMenu", (function(e) {
                    var n, i, s = r()(this), o = s.parent("ul").children("li"), a = s.children("[data-submenu]");
                    o.each((function(t) {
                        if (r()(this).is(s))
                            return n = o.eq(Math.max(0, t - 1)).find("a").first(),
                            i = o.eq(Math.min(t + 1, o.length - 1)).find("a").first(),
                            r()(this).children("[data-submenu]:visible").length && (i = s.find("li:first-child").find("a").first()),
                            r()(this).is(":first-child") ? n = s.parents("li").first().find("a").first() : n.parents("li").first().children("[data-submenu]:visible").length && (n = n.parents("li").find("li:last-child").find("a").first()),
                            void (r()(this).is(":last-child") && (i = s.parents("li").first().next("li").find("a").first()))
                    }
                    )),
                    L.handleKey(e, "AccordionMenu", {
                        open: function() {
                            a.is(":hidden") && (t.down(a),
                            a.find("li").first().find("a").first().focus())
                        },
                        close: function() {
                            a.length && !a.is(":hidden") ? t.up(a) : s.parent("[data-submenu]").length && (t.up(s.parent("[data-submenu]")),
                            s.parents("li").first().find("a").first().focus())
                        },
                        up: function() {
                            return n.focus(),
                            !0
                        },
                        down: function() {
                            return i.focus(),
                            !0
                        },
                        toggle: function() {
                            return !t.options.submenuToggle && (s.children("[data-submenu]").length ? (t.toggle(s.children("[data-submenu]")),
                            !0) : void 0)
                        },
                        closeAll: function() {
                            t.hideAll()
                        },
                        handled: function(t) {
                            t && e.preventDefault()
                        }
                    })
                }
                ))
            }
        }, {
            key: "hideAll",
            value: function() {
                this.up(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "showAll",
            value: function() {
                this.down(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "toggle",
            value: function(t) {
                t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
            }
        }, {
            key: "down",
            value: function(t) {
                var e = this;
                if (!this.options.multiOpen) {
                    var n = t.parentsUntil(this.$element).add(t).add(t.find(".is-active"))
                      , i = this.$element.find(".is-active").not(n);
                    this.up(i)
                }
                t.addClass("is-active").attr({
                    "aria-hidden": !1
                }),
                this.options.submenuToggle ? t.prev(".submenu-toggle").attr({
                    "aria-expanded": !0
                }) : t.parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }),
                t.slideDown(this.options.slideSpeed, (function() {
                    e.$element.trigger("down.zf.accordionMenu", [t])
                }
                ))
            }
        }, {
            key: "up",
            value: function(t) {
                var e = this
                  , n = t.find("[data-submenu]")
                  , i = t.add(n);
                n.slideUp(0),
                i.removeClass("is-active").attr("aria-hidden", !0),
                this.options.submenuToggle ? i.prev(".submenu-toggle").attr("aria-expanded", !1) : i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1),
                t.slideUp(this.options.slideSpeed, (function() {
                    e.$element.trigger("up.zf.accordionMenu", [t])
                }
                ))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""),
                this.$element.find("a").off("click.zf.accordionMenu"),
                this.$element.find("[data-is-parent-link]").detach(),
                this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"),
                this.$element.find(".submenu-toggle").remove()),
                j.Burn(this.$element, "accordion")
            }
        }]),
        e
    }();
    at.defaults = {
        parentLink: !1,
        slideSpeed: 250,
        submenuToggle: !1,
        submenuToggleText: "Toggle menu",
        multiOpen: !0
    };
    var lt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Drilldown",
                this._init(),
                L.register("Drilldown", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close",
                    TAB: "down",
                    SHIFT_TAB: "up"
                })
            }
        }, {
            key: "_init",
            value: function() {
                j.Feather(this.$element, "drilldown"),
                this.options.autoApplyClass && this.$element.addClass("drilldown"),
                this.$element.attr({
                    role: "tree",
                    "aria-multiselectable": !1
                }),
                this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"),
                this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"),
                this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a"),
                this.$currentMenu = this.$element,
                this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || v(6, "drilldown")),
                this._prepareMenu(),
                this._registerEvents(),
                this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu",
            value: function() {
                var t = this;
                this.$submenuAnchors.each((function() {
                    var e = r()(this)
                      , n = e.parent();
                    t.options.parentLink && e.clone().prependTo(n.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'),
                    e.data("savedHref", e.attr("href")).removeAttr("href").attr("tabindex", 0),
                    e.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "group"
                    }),
                    t._events(e)
                }
                )),
                this.$submenus.each((function() {
                    var e = r()(this);
                    if (!e.find(".js-drilldown-back").length)
                        switch (t.options.backButtonPosition) {
                        case "bottom":
                            e.append(t.options.backButton);
                            break;
                        case "top":
                            e.prepend(t.options.backButton);
                            break;
                        default:
                            console.error("Unsupported backButtonPosition value '" + t.options.backButtonPosition + "'")
                        }
                    t._back(e)
                }
                )),
                this.$submenus.addClass("invisible"),
                this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"),
                this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = r()(this.options.wrapper).addClass("is-drilldown"),
                this.options.animateHeight && this.$wrapper.addClass("animate-height"),
                this.$element.wrap(this.$wrapper)),
                this.$wrapper = this.$element.parent(),
                this.$wrapper.css(this._getMaxDims())
            }
        }, {
            key: "_resize",
            value: function() {
                this.$wrapper.css({
                    "max-width": "none",
                    "min-height": "none"
                }),
                this.$wrapper.css(this._getMaxDims())
            }
        }, {
            key: "_events",
            value: function(t) {
                var e = this;
                t.off("click.zf.drilldown").on("click.zf.drilldown", (function(n) {
                    if (r()(n.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && n.preventDefault(),
                    e._show(t.parent("li")),
                    e.options.closeOnClick) {
                        var i = r()("body");
                        i.off(".zf.drilldown").on("click.zf.drilldown", (function(t) {
                            t.target === e.$element[0] || r.a.contains(e.$element[0], t.target) || (t.preventDefault(),
                            e._hideAll(),
                            i.off(".zf.drilldown"))
                        }
                        ))
                    }
                }
                ))
            }
        }, {
            key: "_registerEvents",
            value: function() {
                this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this),
                this.$element.on("open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown", this._bindHandler)),
                this.$element.on("mutateme.zf.trigger", this._resize.bind(this))
            }
        }, {
            key: "_scrollTop",
            value: function() {
                var t = this
                  , e = "" != t.options.scrollTopElement ? r()(t.options.scrollTopElement) : t.$element
                  , n = parseInt(e.offset().top + t.options.scrollTopOffset, 10);
                r()("html, body").stop(!0).animate({
                    scrollTop: n
                }, t.options.animationDuration, t.options.animationEasing, (function() {
                    this === r()("html")[0] && t.$element.trigger("scrollme.zf.drilldown")
                }
                ))
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var t = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", (function(e) {
                    var n, i, s = r()(this), o = s.parent("li").parent("ul").children("li").children("a");
                    o.each((function(t) {
                        if (r()(this).is(s))
                            return n = o.eq(Math.max(0, t - 1)),
                            void (i = o.eq(Math.min(t + 1, o.length - 1)))
                    }
                    )),
                    L.handleKey(e, "Drilldown", {
                        next: function() {
                            if (s.is(t.$submenuAnchors))
                                return t._show(s.parent("li")),
                                s.parent("li").one(g(s), (function() {
                                    s.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                                }
                                )),
                                !0
                        },
                        previous: function() {
                            return t._hide(s.parent("li").parent("ul")),
                            s.parent("li").parent("ul").one(g(s), (function() {
                                setTimeout((function() {
                                    s.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }
                                ), 1)
                            }
                            )),
                            !0
                        },
                        up: function() {
                            return n.focus(),
                            !s.is(t.$element.find("> li:first-child > a"))
                        },
                        down: function() {
                            return i.focus(),
                            !s.is(t.$element.find("> li:last-child > a"))
                        },
                        close: function() {
                            s.is(t.$element.find("> li > a")) || (t._hide(s.parent().parent()),
                            s.parent().parent().siblings("a").focus())
                        },
                        open: function() {
                            return (!t.options.parentLink || !s.attr("href")) && (s.is(t.$menuItems) ? s.is(t.$submenuAnchors) ? (t._show(s.parent("li")),
                            s.parent("li").one(g(s), (function() {
                                s.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                            }
                            )),
                            !0) : void 0 : (t._hide(s.parent("li").parent("ul")),
                            s.parent("li").parent("ul").one(g(s), (function() {
                                setTimeout((function() {
                                    s.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }
                                ), 1)
                            }
                            )),
                            !0))
                        },
                        handled: function(t) {
                            t && e.preventDefault()
                        }
                    })
                }
                ))
            }
        }, {
            key: "_hideAll",
            value: function() {
                var t = this
                  , e = this.$element.find(".is-drilldown-submenu.is-active");
                if (e.addClass("is-closing"),
                this.options.autoHeight) {
                    var n = e.parent().closest("ul").data("calcHeight");
                    this.$wrapper.css({
                        height: n
                    })
                }
                this.$element.trigger("close.zf.drilldown"),
                e.one(g(e), (function() {
                    e.removeClass("is-active is-closing"),
                    t.$element.trigger("closed.zf.drilldown")
                }
                ))
            }
        }, {
            key: "_back",
            value: function(t) {
                var e = this;
                t.off("click.zf.drilldown"),
                t.children(".js-drilldown-back").on("click.zf.drilldown", (function(n) {
                    e._hide(t);
                    var i = t.parent("li").parent("ul").parent("li");
                    i.length && e._show(i)
                }
                ))
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var t = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", (function(e) {
                    setTimeout((function() {
                        t._hideAll()
                    }
                    ), 0)
                }
                ))
            }
        }, {
            key: "_setShowSubMenuClasses",
            value: function(t, e) {
                t.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1),
                t.parent("li").attr("aria-expanded", !0),
                !0 === e && this.$element.trigger("open.zf.drilldown", [t])
            }
        }, {
            key: "_setHideSubMenuClasses",
            value: function(t, e) {
                t.removeClass("is-active").addClass("invisible").attr("aria-hidden", !0),
                t.parent("li").attr("aria-expanded", !1),
                !0 === e && t.trigger("hide.zf.drilldown", [t])
            }
        }, {
            key: "_showMenu",
            value: function(t, e) {
                var n = this;
                if (this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each((function(t) {
                    n._setHideSubMenuClasses(r()(this))
                }
                )),
                this.$currentMenu = t,
                t.is("[data-drilldown]"))
                    return !0 === e && t.find('li[role="treeitem"] > a').first().focus(),
                    void (this.options.autoHeight && this.$wrapper.css("height", t.data("calcHeight")));
                var i = t.children().first().parentsUntil("[data-drilldown]", "[data-submenu]");
                i.each((function(s) {
                    0 === s && n.options.autoHeight && n.$wrapper.css("height", r()(this).data("calcHeight"));
                    var o = s == i.length - 1;
                    !0 === o && r()(this).one(g(r()(this)), (function() {
                        !0 === e && t.find('li[role="treeitem"] > a').first().focus()
                    }
                    )),
                    n._setShowSubMenuClasses(r()(this), o)
                }
                ))
            }
        }, {
            key: "_show",
            value: function(t) {
                var e = t.children("[data-submenu]");
                t.attr("aria-expanded", !0),
                this.$currentMenu = e,
                e.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1),
                this.options.autoHeight && this.$wrapper.css({
                    height: e.data("calcHeight")
                }),
                this.$element.trigger("open.zf.drilldown", [t])
            }
        }, {
            key: "_hide",
            value: function(t) {
                this.options.autoHeight && this.$wrapper.css({
                    height: t.parent().closest("ul").data("calcHeight")
                }),
                t.parent("li").attr("aria-expanded", !1),
                t.attr("aria-hidden", !0),
                t.addClass("is-closing").one(g(t), (function() {
                    t.removeClass("is-active is-closing"),
                    t.blur().addClass("invisible")
                }
                )),
                t.trigger("hide.zf.drilldown", [t])
            }
        }, {
            key: "_getMaxDims",
            value: function() {
                var t = 0
                  , e = {}
                  , n = this;
                return this.$submenus.add(this.$element).each((function() {
                    r()(this).children("li").length;
                    var e = $.GetDimensions(this).height;
                    t = e > t ? e : t,
                    n.options.autoHeight && r()(this).data("calcHeight", e)
                }
                )),
                this.options.autoHeight ? e.height = this.$currentMenu.data("calcHeight") : e["min-height"] = "".concat(t, "px"),
                e["max-width"] = "".concat(this.$element[0].getBoundingClientRect().width, "px"),
                e
            }
        }, {
            key: "_destroy",
            value: function() {
                this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler),
                this._hideAll(),
                this.$element.off("mutateme.zf.trigger"),
                j.Burn(this.$element, "drilldown"),
                this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),
                this.$submenuAnchors.each((function() {
                    r()(this).off(".zf.drilldown")
                }
                )),
                this.$element.find("[data-is-parent-link]").detach(),
                this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"),
                this.$element.find("a").each((function() {
                    var t = r()(this);
                    t.removeAttr("tabindex"),
                    t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref")
                }
                ))
            }
        }]),
        e
    }();
    lt.defaults = {
        autoApplyClass: !0,
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        backButtonPosition: "top",
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1,
        autoHeight: !1,
        animateHeight: !1,
        scrollTop: !1,
        scrollTopElement: "",
        scrollTopOffset: 0,
        animationDuration: 500,
        animationEasing: "swing"
    };
    var ct = ["left", "right", "top", "bottom"]
      , ut = ["top", "bottom", "center"]
      , ht = ["left", "right", "center"]
      , dt = {
        left: ut,
        right: ut,
        top: ht,
        bottom: ht
    };
    function ft(t, e) {
        var n = e.indexOf(t);
        return n === e.length - 1 ? e[0] : e[n + 1]
    }
    var pt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_init",
            value: function() {
                this.triedPositions = {},
                this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position,
                this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment,
                this.originalPosition = this.position,
                this.originalAlignment = this.alignment
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                return "bottom"
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                switch (this.position) {
                case "bottom":
                case "top":
                    return p() ? "right" : "left";
                case "left":
                case "right":
                    return "bottom"
                }
            }
        }, {
            key: "_reposition",
            value: function() {
                this._alignmentsExhausted(this.position) ? (this.position = ft(this.position, ct),
                this.alignment = dt[this.position][0]) : this._realign()
            }
        }, {
            key: "_realign",
            value: function() {
                this._addTriedPosition(this.position, this.alignment),
                this.alignment = ft(this.alignment, dt[this.position])
            }
        }, {
            key: "_addTriedPosition",
            value: function(t, e) {
                this.triedPositions[t] = this.triedPositions[t] || [],
                this.triedPositions[t].push(e)
            }
        }, {
            key: "_positionsExhausted",
            value: function() {
                for (var t = !0, e = 0; e < ct.length; e++)
                    t = t && this._alignmentsExhausted(ct[e]);
                return t
            }
        }, {
            key: "_alignmentsExhausted",
            value: function(t) {
                return this.triedPositions[t] && this.triedPositions[t].length == dt[t].length
            }
        }, {
            key: "_getVOffset",
            value: function() {
                return this.options.vOffset
            }
        }, {
            key: "_getHOffset",
            value: function() {
                return this.options.hOffset
            }
        }, {
            key: "_setPosition",
            value: function(t, e, n) {
                if ("false" === t.attr("aria-expanded"))
                    return !1;
                if (this.options.allowOverlap || (this.position = this.originalPosition,
                this.alignment = this.originalAlignment),
                e.offset($.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset())),
                !this.options.allowOverlap) {
                    for (var i = 1e8, r = {
                        position: this.position,
                        alignment: this.alignment
                    }; !this._positionsExhausted(); ) {
                        var s = $.OverlapArea(e, n, !1, !1, this.options.allowBottomOverlap);
                        if (0 === s)
                            return;
                        s < i && (i = s,
                        r = {
                            position: this.position,
                            alignment: this.alignment
                        }),
                        this._reposition(),
                        e.offset($.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                    }
                    this.position = r.position,
                    this.alignment = r.alignment,
                    e.offset($.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                }
            }
        }]),
        e
    }();
    pt.defaults = {
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        vOffset: 0,
        hOffset: 0
    };
    var vt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, pt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Dropdown",
                W.init(r.a),
                tt.init(r.a),
                this._init(),
                L.register("Dropdown", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element.attr("id");
                this.$anchors = r()('[data-toggle="'.concat(t, '"]')).length ? r()('[data-toggle="'.concat(t, '"]')) : r()('[data-open="'.concat(t, '"]')),
                this.$anchors.attr({
                    "aria-controls": t,
                    "data-is-focus": !1,
                    "data-yeti-box": t,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }),
                this._setCurrentAnchor(this.$anchors.first()),
                this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null,
                void 0 === this.$element.attr("aria-labelledby") && (void 0 === this.$currentAnchor.attr("id") && this.$currentAnchor.attr("id", v(6, "dd-anchor")),
                this.$element.attr("aria-labelledby", this.$currentAnchor.attr("id"))),
                this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": t,
                    "data-resize": t
                }),
                f(u(e.prototype), "_init", this).call(this),
                this._events()
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                return t ? t[0] : "bottom"
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                var t = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
                return t ? t[1] : f(u(e.prototype), "_getDefaultAlignment", this).call(this)
            }
        }, {
            key: "_setPosition",
            value: function() {
                this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment)),
                f(u(e.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent),
                this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment))
            }
        }, {
            key: "_setCurrentAnchor",
            value: function(t) {
                this.$currentAnchor = r()(t)
            }
        }, {
            key: "_events",
            value: function() {
                var t = this
                  , e = "ontouchstart"in window || void 0 !== window.ontouchstart;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }),
                this.$anchors.off("click.zf.trigger").on("click.zf.trigger", (function(n) {
                    t._setCurrentAnchor(this),
                    (!1 === t.options.forceFollow || e && t.options.hover && !1 === t.$element.hasClass("is-open")) && n.preventDefault()
                }
                )),
                this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", (function() {
                    t._setCurrentAnchor(this);
                    var e = r()("body").data();
                    void 0 !== e.whatinput && "mouse" !== e.whatinput || (clearTimeout(t.timeout),
                    t.timeout = setTimeout((function() {
                        t.open(),
                        t.$anchors.data("hover", !0)
                    }
                    ), t.options.hoverDelay))
                }
                )).on("mouseleave.zf.dropdown", b((function() {
                    clearTimeout(t.timeout),
                    t.timeout = setTimeout((function() {
                        t.close(),
                        t.$anchors.data("hover", !1)
                    }
                    ), t.options.hoverDelay)
                }
                ))),
                this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", (function() {
                    clearTimeout(t.timeout)
                }
                )).on("mouseleave.zf.dropdown", b((function() {
                    clearTimeout(t.timeout),
                    t.timeout = setTimeout((function() {
                        t.close(),
                        t.$anchors.data("hover", !1)
                    }
                    ), t.options.hoverDelay)
                }
                )))),
                this.$anchors.add(this.$element).on("keydown.zf.dropdown", (function(e) {
                    var n = r()(this);
                    L.findFocusable(t.$element),
                    L.handleKey(e, "Dropdown", {
                        open: function() {
                            n.is(t.$anchors) && !n.is("input, textarea") && (t.open(),
                            t.$element.attr("tabindex", -1).focus(),
                            e.preventDefault())
                        },
                        close: function() {
                            t.close(),
                            t.$anchors.focus()
                        }
                    })
                }
                ))
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = r()(document.body).not(this.$element)
                  , e = this;
                t.off("click.zf.dropdown tap.zf.dropdown").on("click.zf.dropdown tap.zf.dropdown", (function(n) {
                    e.$anchors.is(n.target) || e.$anchors.find(n.target).length || e.$element.is(n.target) || e.$element.find(n.target).length || (e.close(),
                    t.off("click.zf.dropdown tap.zf.dropdown"))
                }
                ))
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")),
                this.$anchors.addClass("hover").attr({
                    "aria-expanded": !0
                }),
                this.$element.addClass("is-opening"),
                this._setPosition(),
                this.$element.removeClass("is-opening").addClass("is-open").attr({
                    "aria-hidden": !1
                }),
                this.options.autoFocus) {
                    var t = L.findFocusable(this.$element);
                    t.length && t.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(),
                this.options.trapFocus && L.trapFocus(this.$element),
                this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open"))
                    return !1;
                this.$element.removeClass("is-open").attr({
                    "aria-hidden": !0
                }),
                this.$anchors.removeClass("hover").attr("aria-expanded", !1),
                this.$element.trigger("hide.zf.dropdown", [this.$element]),
                this.options.trapFocus && L.releaseFocus(this.$element)
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchors.data("hover"))
                        return;
                    this.close()
                } else
                    this.open()
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(),
                this.$anchors.off(".zf.dropdown"),
                r()(document.body).off("click.zf.dropdown tap.zf.dropdown")
            }
        }]),
        e
    }();
    vt.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 0,
        hOffset: 0,
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1,
        forceFollow: !0
    };
    var mt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "DropdownMenu",
                W.init(r.a),
                this._init(),
                L.register("DropdownMenu", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                j.Feather(this.$element, "dropdown");
                var t = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),
                this.$menuItems = this.$element.find('[role="menuitem"]'),
                this.$tabs = this.$element.children('[role="menuitem"]'),
                this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),
                "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || p() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right",
                t.addClass("opens-left")) : (this.options.alignment = "left",
                t.addClass("opens-right")) : "right" === this.options.alignment ? t.addClass("opens-left") : t.addClass("opens-right"),
                this.changed = !1,
                this._events()
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction")
            }
        }, {
            key: "_isRtl",
            value: function() {
                return this.$element.hasClass("align-right") || p() && !this.$element.hasClass("align-left")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this
                  , e = "ontouchstart"in window || void 0 !== window.ontouchstart
                  , n = "is-dropdown-submenu-parent";
                (this.options.clickOpen || e) && this.$menuItems.on("click.zf.dropdownMenu touchstart.zf.dropdownMenu", (function(i) {
                    var s = r()(i.target).parentsUntil("ul", ".".concat(n))
                      , o = s.hasClass(n)
                      , a = "true" === s.attr("data-is-click")
                      , l = s.children(".is-dropdown-submenu");
                    if (o)
                        if (a) {
                            if (!t.options.closeOnClick || !t.options.clickOpen && !e || t.options.forceFollow && e)
                                return;
                            i.preventDefault(),
                            t._hide(s)
                        } else
                            i.preventDefault(),
                            t._show(l),
                            s.add(s.parentsUntil(t.$element, ".".concat(n))).attr("data-is-click", !0)
                }
                )),
                t.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownMenu", (function(e) {
                    r()(this).hasClass(n) || t._hide()
                }
                )),
                this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownMenu", (function(e) {
                    var i = r()(this);
                    i.hasClass(n) && (clearTimeout(i.data("_delay")),
                    i.data("_delay", setTimeout((function() {
                        t._show(i.children(".is-dropdown-submenu"))
                    }
                    ), t.options.hoverDelay)))
                }
                )).on("mouseleave.zf.dropdownmenu", b((function(e) {
                    var i = r()(this);
                    if (i.hasClass(n) && t.options.autoclose) {
                        if ("true" === i.attr("data-is-click") && t.options.clickOpen)
                            return !1;
                        clearTimeout(i.data("_delay")),
                        i.data("_delay", setTimeout((function() {
                            t._hide(i)
                        }
                        ), t.options.closingTime))
                    }
                }
                ))),
                this.$menuItems.on("keydown.zf.dropdownMenu", (function(e) {
                    var n, i, s = r()(e.target).parentsUntil("ul", '[role="menuitem"]'), o = t.$tabs.index(s) > -1, a = o ? t.$tabs : s.siblings("li").add(s);
                    a.each((function(t) {
                        if (r()(this).is(s))
                            return n = a.eq(t - 1),
                            void (i = a.eq(t + 1))
                    }
                    ));
                    var l = function() {
                        i.children("a:first").focus(),
                        e.preventDefault()
                    }
                      , c = function() {
                        n.children("a:first").focus(),
                        e.preventDefault()
                    }
                      , u = function() {
                        var n = s.children("ul.is-dropdown-submenu");
                        n.length && (t._show(n),
                        s.find("li > a:first").focus(),
                        e.preventDefault())
                    }
                      , h = function() {
                        var n = s.parent("ul").parent("li");
                        n.children("a:first").focus(),
                        t._hide(n),
                        e.preventDefault()
                    }
                      , d = {
                        open: u,
                        close: function() {
                            t._hide(t.$element),
                            t.$menuItems.eq(0).children("a").focus(),
                            e.preventDefault()
                        }
                    };
                    o ? t._isVertical() ? t._isRtl() ? r.a.extend(d, {
                        down: l,
                        up: c,
                        next: h,
                        previous: u
                    }) : r.a.extend(d, {
                        down: l,
                        up: c,
                        next: u,
                        previous: h
                    }) : t._isRtl() ? r.a.extend(d, {
                        next: c,
                        previous: l,
                        down: u,
                        up: h
                    }) : r.a.extend(d, {
                        next: l,
                        previous: c,
                        down: u,
                        up: h
                    }) : t._isRtl() ? r.a.extend(d, {
                        next: h,
                        previous: u,
                        down: l,
                        up: c
                    }) : r.a.extend(d, {
                        next: u,
                        previous: h,
                        down: l,
                        up: c
                    }),
                    L.handleKey(e, "DropdownMenu", d)
                }
                ))
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = this
                  , e = r()(document.body);
                this._removeBodyHandler(),
                e.on("click.zf.dropdownMenu tap.zf.dropdownMenu", (function(e) {
                    r()(e.target).closest(t.$element).length || (t._hide(),
                    t._removeBodyHandler())
                }
                ))
            }
        }, {
            key: "_removeBodyHandler",
            value: function() {
                r()(document.body).off("click.zf.dropdownMenu tap.zf.dropdownMenu")
            }
        }, {
            key: "_show",
            value: function(t) {
                var e = this.$tabs.index(this.$tabs.filter((function(e, n) {
                    return r()(n).find(t).length > 0
                }
                )))
                  , n = t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(n, e),
                t.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                var i = $.ImNotTouchingYou(t, null, !0);
                if (!i) {
                    var s = "left" === this.options.alignment ? "-right" : "-left"
                      , o = t.parent(".is-dropdown-submenu-parent");
                    o.removeClass("opens".concat(s)).addClass("opens-".concat(this.options.alignment)),
                    (i = $.ImNotTouchingYou(t, null, !0)) || o.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),
                    this.changed = !0
                }
                t.css("visibility", ""),
                this.options.closeOnClick && this._addBodyHandler(),
                this.$element.trigger("show.zf.dropdownMenu", [t])
            }
        }, {
            key: "_hide",
            value: function(t, e) {
                var n;
                if ((n = t && t.length ? t : void 0 !== e ? this.$tabs.not((function(t, n) {
                    return t === e
                }
                )) : this.$element).hasClass("is-active") || n.find(".is-active").length > 0) {
                    var i = n.find("li.is-active");
                    if (i.add(n).attr({
                        "data-is-click": !1
                    }).removeClass("is-active"),
                    n.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),
                    this.changed || n.find("opens-inner").length) {
                        var r = "left" === this.options.alignment ? "right" : "left";
                        n.find("li.is-dropdown-submenu-parent").add(n).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(r)),
                        this.changed = !1
                    }
                    clearTimeout(i.data("_delay")),
                    this._removeBodyHandler(),
                    this.$element.trigger("hide.zf.dropdownMenu", [n])
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownMenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),
                r()(document.body).off(".zf.dropdownMenu"),
                j.Burn(this.$element, "dropdown")
            }
        }]),
        e
    }();
    mt.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "auto",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    };
    var gt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Equalizer",
                this._init()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element.attr("data-equalizer") || ""
                  , e = this.$element.find('[data-equalizer-watch="'.concat(t, '"]'));
                w._init(),
                this.$watched = e.length ? e : this.$element.find("[data-equalizer-watch]"),
                this.$element.attr("data-resize", t || v(6, "eq")),
                this.$element.attr("data-mutate", t || v(6, "eq")),
                this.hasNested = this.$element.find("[data-equalizer]").length > 0,
                this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0,
                this.isOn = !1,
                this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var n, i = this.$element.find("img");
                this.options.equalizeOn ? (n = this._checkMQ(),
                r()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(),
                (void 0 !== n && !1 === n || void 0 === n) && (i.length ? S(i, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents",
            value: function() {
                this.isOn = !1,
                this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                    "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe",
            value: function(t) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized",
            value: function(t) {
                t.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                this._pauseEvents(),
                this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound),
                this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)),
                this.isOn = !0
            }
        }, {
            key: "_checkMQ",
            value: function() {
                var t = !w.is(this.options.equalizeOn);
                return t ? this.isOn && (this._pauseEvents(),
                this.$watched.css("height", "auto")) : this.isOn || this._events(),
                t
            }
        }, {
            key: "_killswitch",
            value: function() {}
        }, {
            key: "_reflow",
            value: function() {
                if (!this.options.equalizeOnStack && this._isStacked())
                    return this.$watched.css("height", "auto"),
                    !1;
                this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))
            }
        }, {
            key: "_isStacked",
            value: function() {
                return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights",
            value: function(t) {
                for (var e = [], n = 0, i = this.$watched.length; n < i; n++)
                    this.$watched[n].style.height = "auto",
                    e.push(this.$watched[n].offsetHeight);
                t(e)
            }
        }, {
            key: "getHeightsByRow",
            value: function(t) {
                var e = this.$watched.length ? this.$watched.first().offset().top : 0
                  , n = []
                  , i = 0;
                n[i] = [];
                for (var s = 0, o = this.$watched.length; s < o; s++) {
                    this.$watched[s].style.height = "auto";
                    var a = r()(this.$watched[s]).offset().top;
                    a != e && (n[++i] = [],
                    e = a),
                    n[i].push([this.$watched[s], this.$watched[s].offsetHeight])
                }
                for (var l = 0, c = n.length; l < c; l++) {
                    var u = r()(n[l]).map((function() {
                        return this[1]
                    }
                    )).get()
                      , h = Math.max.apply(null, u);
                    n[l].push(h)
                }
                t(n)
            }
        }, {
            key: "applyHeight",
            value: function(t) {
                var e = Math.max.apply(null, t);
                this.$element.trigger("preequalized.zf.equalizer"),
                this.$watched.css("height", e),
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function(t) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e].length
                      , s = t[e][i - 1];
                    if (i <= 2)
                        r()(t[e][0][0]).css({
                            height: "auto"
                        });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var o = 0, a = i - 1; o < a; o++)
                            r()(t[e][o][0]).css({
                                height: s
                            });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "_destroy",
            value: function() {
                this._pauseEvents(),
                this.$watched.css("height", "auto")
            }
        }]),
        e
    }();
    gt.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    };
    var yt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.rules = [],
                this.currentPath = "",
                this.className = "Interchange",
                this._init(),
                this._events()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element[0].id || v(6, "interchange");
                this.$element.attr({
                    "data-resize": t,
                    id: t
                }),
                this._parseOptions(),
                this._addBreakpoints(),
                this._generateRules(),
                this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", (function() {
                    return t._reflow()
                }
                ))
            }
        }, {
            key: "_reflow",
            value: function() {
                var t;
                for (var e in this.rules)
                    if (this.rules.hasOwnProperty(e)) {
                        var n = this.rules[e];
                        window.matchMedia(n.query).matches && (t = n)
                    }
                t && this.replace(t.path)
            }
        }, {
            key: "_parseOptions",
            value: function() {
                void 0 === this.options.type ? this.options.type = "auto" : -1 === ["auto", "src", "background", "html"].indexOf(this.options.type) && (console.log('Warning: invalid value "'.concat(this.options.type, '" for Interchange option "type"')),
                this.options.type = "auto")
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var t in w.queries)
                    if (w.queries.hasOwnProperty(t)) {
                        var n = w.queries[t];
                        e.SPECIAL_QUERIES[n.name] = n.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function(t) {
                var n, i = [];
                for (var r in n = "string" == typeof (n = this.options.rules ? this.options.rules : this.$element.data("interchange")) ? n.match(/\[.*?, .*?\]/g) : n)
                    if (n.hasOwnProperty(r)) {
                        var s = n[r].slice(1, -1).split(", ")
                          , o = s.slice(0, -1).join("")
                          , a = s[s.length - 1];
                        e.SPECIAL_QUERIES[a] && (a = e.SPECIAL_QUERIES[a]),
                        i.push({
                            path: o,
                            query: a
                        })
                    }
                this.rules = i
            }
        }, {
            key: "replace",
            value: function(t) {
                var e = this;
                if (this.currentPath !== t) {
                    var n = "replaced.zf.interchange"
                      , i = this.options.type;
                    "auto" === i && (i = "IMG" === this.$element[0].nodeName ? "src" : t.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i) ? "background" : "html"),
                    "src" === i ? this.$element.attr("src", t).on("load", (function() {
                        e.currentPath = t
                    }
                    )).trigger(n) : "background" === i ? (t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"),
                    this.$element.css({
                        "background-image": "url(" + t + ")"
                    }).trigger(n)) : "html" === i && r.a.get(t, (function(i) {
                        e.$element.html(i).trigger(n),
                        r()(i).foundation(),
                        e.currentPath = t
                    }
                    ))
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off("resizeme.zf.trigger")
            }
        }]),
        e
    }();
    yt.defaults = {
        rules: null,
        type: "auto"
    },
    yt.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    var bt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "SmoothScroll",
                this._init()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element[0].id || v(6, "smooth-scroll");
                this.$element.attr({
                    id: t
                }),
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._linkClickListener = this._handleLinkClick.bind(this),
                this.$element.on("click.zf.smoothScroll", this._linkClickListener),
                this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
            }
        }, {
            key: "_handleLinkClick",
            value: function(t) {
                var n = this;
                if (r()(t.currentTarget).is('a[href^="#"]')) {
                    var i = t.currentTarget.getAttribute("href");
                    this._inTransition = !0,
                    e.scrollToLoc(i, this.options, (function() {
                        n._inTransition = !1
                    }
                    )),
                    t.preventDefault()
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off("click.zf.smoothScroll", this._linkClickListener),
                this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
            }
        }], [{
            key: "scrollToLoc",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.defaults
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , s = r()(t);
                if (!s.length)
                    return !1;
                var o = Math.round(s.offset().top - n.threshold / 2 - n.offset);
                r()("html, body").stop(!0).animate({
                    scrollTop: o
                }, n.animationDuration, n.animationEasing, (function() {
                    "function" == typeof i && i()
                }
                ))
            }
        }]),
        e
    }();
    bt.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        offset: 0
    };
    var wt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Magellan",
                tt.init(r.a),
                this._init(),
                this.calcPoints()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element[0].id || v(6, "magellan");
                this.$targets = r()("[data-magellan-target]"),
                this.$links = this.$element.find("a"),
                this.$element.attr({
                    "data-resize": t,
                    "data-scroll": t,
                    id: t
                }),
                this.$active = r()(),
                this.scrollPos = parseInt(window.pageYOffset, 10),
                this._events()
            }
        }, {
            key: "calcPoints",
            value: function() {
                var t = this
                  , e = document.body
                  , n = document.documentElement;
                this.points = [],
                this.winHeight = Math.round(Math.max(window.innerHeight, n.clientHeight)),
                this.docHeight = Math.round(Math.max(e.scrollHeight, e.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)),
                this.$targets.each((function() {
                    var e = r()(this)
                      , n = Math.round(e.offset().top - t.options.threshold);
                    e.targetPoint = n,
                    t.points.push(n)
                }
                ))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                r()("html, body"),
                t.options.animationDuration,
                t.options.animationEasing,
                r()(window).one("load", (function() {
                    t.options.deepLinking && location.hash && t.scrollToLoc(location.hash),
                    t.calcPoints(),
                    t._updateActive()
                }
                )),
                t.onLoadListener = y(r()(window), (function() {
                    t.$element.on({
                        "resizeme.zf.trigger": t.reflow.bind(t),
                        "scrollme.zf.trigger": t._updateActive.bind(t)
                    }).on("click.zf.magellan", 'a[href^="#"]', (function(e) {
                        e.preventDefault();
                        var n = this.getAttribute("href");
                        t.scrollToLoc(n)
                    }
                    ))
                }
                )),
                this._deepLinkScroll = function(e) {
                    t.options.deepLinking && t.scrollToLoc(window.location.hash)
                }
                ,
                r()(window).on("hashchange", this._deepLinkScroll)
            }
        }, {
            key: "scrollToLoc",
            value: function(t) {
                this._inTransition = !0;
                var e = this
                  , n = {
                    animationEasing: this.options.animationEasing,
                    animationDuration: this.options.animationDuration,
                    threshold: this.options.threshold,
                    offset: this.options.offset
                };
                bt.scrollToLoc(t, n, (function() {
                    e._inTransition = !1
                }
                ))
            }
        }, {
            key: "reflow",
            value: function() {
                this.calcPoints(),
                this._updateActive()
            }
        }, {
            key: "_updateActive",
            value: function() {
                var t = this;
                if (!this._inTransition) {
                    var e, n = parseInt(window.pageYOffset, 10), i = this.scrollPos > n;
                    if (this.scrollPos = n,
                    n < this.points[0])
                        ;
                    else if (n + this.winHeight === this.docHeight)
                        e = this.points.length - 1;
                    else {
                        var s = this.points.filter((function(e, r) {
                            return e - t.options.offset - (i ? t.options.threshold : 0) <= n
                        }
                        ));
                        e = s.length ? s.length - 1 : 0
                    }
                    var o = this.$active
                      , a = "";
                    void 0 !== e ? (this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]'),
                    this.$active.length && (a = this.$active[0].getAttribute("href"))) : this.$active = r()();
                    var l = !(!this.$active.length && !o.length || this.$active.is(o))
                      , c = a !== window.location.hash;
                    if (l && (o.removeClass(this.options.activeClass),
                    this.$active.addClass(this.options.activeClass)),
                    this.options.deepLinking && c)
                        if (window.history.pushState) {
                            var u = a || window.location.pathname + window.location.search;
                            this.options.updateHistory ? window.history.pushState({}, "", u) : window.history.replaceState({}, "", u)
                        } else
                            window.location.hash = a;
                    l && this.$element.trigger("update.zf.magellan", [this.$active])
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass),
                this.options.deepLinking) {
                    var t = this.$active[0].getAttribute("href");
                    window.location.hash.replace(t, "")
                }
                r()(window).off("hashchange", this._deepLinkScroll),
                this.onLoadListener && r()(window).off(this.onLoadListener)
            }
        }]),
        e
    }();
    wt.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "is-active",
        deepLinking: !1,
        updateHistory: !1,
        offset: 0
    };
    var kt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                var i = this;
                this.className = "OffCanvas",
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.contentClasses = {
                    base: [],
                    reveal: []
                },
                this.$lastTrigger = r()(),
                this.$triggers = r()(),
                this.position = "left",
                this.$content = r()(),
                this.nested = !!this.options.nested,
                this.$sticky = r()(),
                this.isInCanvas = !1,
                r()(["push", "overlap"]).each((function(t, e) {
                    i.contentClasses.base.push("has-transition-" + e)
                }
                )),
                r()(["left", "right", "top", "bottom"]).each((function(t, e) {
                    i.contentClasses.base.push("has-position-" + e),
                    i.contentClasses.reveal.push("has-reveal-" + e)
                }
                )),
                tt.init(r.a),
                w._init(),
                this._init(),
                this._events(),
                L.register("OffCanvas", {
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"),
                this.options.contentId ? this.$content = r()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(),
                this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length,
                !0 === this.nested && (this.options.transition = "overlap",
                this.$element.removeClass("is-transition-push")),
                this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")),
                this.$triggers = r()(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t),
                this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position,
                !0 === this.options.contentOverlay) {
                    var e = document.createElement("div")
                      , n = "fixed" === r()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                    e.setAttribute("class", "js-off-canvas-overlay " + n),
                    this.$overlay = r()(e),
                    "is-overlay-fixed" === n ? r()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay)
                }
                var i = new RegExp(m(this.options.revealClass) + "([^\\s]+)","g").exec(this.$element[0].className);
                i && (this.options.isRevealed = !0,
                this.options.revealOn = this.options.revealOn || i[1]),
                !0 === this.options.isRevealed && this.options.revealOn && (this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)),
                this._setMQChecker()),
                this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime),
                this.$sticky = this.$content.find("[data-off-canvas-sticky]"),
                this.$sticky.length > 0 && "push" === this.options.transition && (this.options.contentScroll = !1);
                var s = this.$element.attr("class").match(/\bin-canvas-for-(\w+)/);
                s && 2 === s.length ? this.options.inCanvasOn = s[1] : this.options.inCanvasOn && this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn)),
                this.options.inCanvasOn && this._checkInCanvas(),
                this._removeContentClasses()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off(".zf.trigger .zf.offCanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offCanvas": this._handleKeyboard.bind(this)
                }),
                !0 === this.options.closeOnClick && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                    "click.zf.offCanvas": this.close.bind(this)
                }),
                this.options.inCanvasOn && r()(window).on("changed.zf.mediaquery", (function() {
                    t._checkInCanvas()
                }
                ))
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var t = this;
                this.onLoadListener = y(r()(window), (function() {
                    w.atLeast(t.options.revealOn) && t.reveal(!0)
                }
                )),
                r()(window).on("changed.zf.mediaquery", (function() {
                    w.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1)
                }
                ))
            }
        }, {
            key: "_checkInCanvas",
            value: function() {
                this.isInCanvas = w.atLeast(this.options.inCanvasOn),
                !0 === this.isInCanvas && this.close()
            }
        }, {
            key: "_removeContentClasses",
            value: function(t) {
                "boolean" != typeof t ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === t && this.$content.removeClass("has-reveal-".concat(this.position))
            }
        }, {
            key: "_addContentClasses",
            value: function(t) {
                this._removeContentClasses(t),
                "boolean" != typeof t ? this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position)) : !0 === t && this.$content.addClass("has-reveal-".concat(this.position))
            }
        }, {
            key: "_fixStickyElements",
            value: function() {
                this.$sticky.each((function(t, e) {
                    var n = r()(e);
                    if ("fixed" === n.css("position")) {
                        var i = parseInt(n.css("top"), 10);
                        n.data("offCanvasSticky", {
                            top: i
                        });
                        var s = r()(document).scrollTop() + i;
                        n.css({
                            top: "".concat(s, "px"),
                            width: "100%",
                            transition: "none"
                        })
                    }
                }
                ))
            }
        }, {
            key: "_unfixStickyElements",
            value: function() {
                this.$sticky.each((function(t, e) {
                    var n = r()(e)
                      , i = n.data("offCanvasSticky");
                    "object" === s(i) && (n.css({
                        top: "".concat(i.top, "px"),
                        width: "",
                        transition: ""
                    }),
                    n.data("offCanvasSticky", ""))
                }
                ))
            }
        }, {
            key: "reveal",
            value: function(t) {
                t ? (this.close(),
                this.isRevealed = !0,
                this.$element.attr("aria-hidden", "false"),
                this.$element.off("open.zf.trigger toggle.zf.trigger"),
                this.$element.removeClass("is-closed")) : (this.isRevealed = !1,
                this.$element.attr("aria-hidden", "true"),
                this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }),
                this.$element.addClass("is-closed")),
                this._addContentClasses(t)
            }
        }, {
            key: "_stopScrolling",
            value: function(t) {
                return !1
            }
        }, {
            key: "_recordScrollable",
            value: function(t) {
                this.scrollHeight !== this.clientHeight && (0 === this.scrollTop && (this.scrollTop = 1),
                this.scrollTop === this.scrollHeight - this.clientHeight && (this.scrollTop = this.scrollHeight - this.clientHeight - 1)),
                this.allowUp = this.scrollTop > 0,
                this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight,
                this.lastY = t.originalEvent.pageY
            }
        }, {
            key: "_stopScrollPropagation",
            value: function(t) {
                var e, n = t.pageY < this.lastY, i = !n;
                this.lastY = t.pageY,
                n && this.allowUp || i && this.allowDown ? (t.stopPropagation(),
                this.hasAttribute("data-off-canvas-scrollbox") && (e = this.closest("[data-off-canvas], [data-off-canvas-scrollbox-outer]"),
                this.scrollTop <= 1 && e.scrollTop > 0 ? e.scrollTop-- : this.scrollTop >= this.scrollHeight - this.clientHeight - 1 && e.scrollTop < e.scrollHeight - e.clientHeight && e.scrollTop++)) : t.preventDefault()
            }
        }, {
            key: "open",
            value: function(t, e) {
                var n = this;
                if (!(this.$element.hasClass("is-open") || this.isRevealed || this.isInCanvas)) {
                    var i = this;
                    e && (this.$lastTrigger = e),
                    "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight),
                    this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""),
                    this.$element.addClass("is-open").removeClass("is-closed"),
                    this.$triggers.attr("aria-expanded", "true"),
                    this.$element.attr("aria-hidden", "false"),
                    this.$content.addClass("is-open-" + this.position),
                    !1 === this.options.contentScroll && (r()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling),
                    this.$element.on("touchstart", this._recordScrollable),
                    this.$element.on("touchmove", this._stopScrollPropagation),
                    this.$element.on("touchstart", "[data-off-canvas-scrollbox]", this._recordScrollable),
                    this.$element.on("touchmove", "[data-off-canvas-scrollbox]", this._stopScrollPropagation)),
                    !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"),
                    !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"),
                    !0 === this.options.autoFocus && this.$element.one(g(this.$element), (function() {
                        if (i.$element.hasClass("is-open")) {
                            var t = i.$element.find("[data-autofocus]");
                            t.length ? t.eq(0).focus() : i.$element.find("a, button").eq(0).focus()
                        }
                    }
                    )),
                    !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"),
                    L.trapFocus(this.$element)),
                    "push" === this.options.transition && this._fixStickyElements(),
                    this._addContentClasses(),
                    this.$element.trigger("opened.zf.offCanvas"),
                    this.$element.one(g(this.$element), (function() {
                        n.$element.trigger("openedEnd.zf.offCanvas")
                    }
                    ))
                }
            }
        }, {
            key: "close",
            value: function(t) {
                var e = this;
                this.$element.hasClass("is-open") && !this.isRevealed && (this.$element.trigger("close.zf.offCanvas"),
                this.$element.removeClass("is-open"),
                this.$element.attr("aria-hidden", "true"),
                this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"),
                !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"),
                !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"),
                this.$triggers.attr("aria-expanded", "false"),
                this.$element.one(g(this.$element), (function(t) {
                    e.$element.addClass("is-closed"),
                    e._removeContentClasses(),
                    "push" === e.options.transition && e._unfixStickyElements(),
                    !1 === e.options.contentScroll && (r()("body").removeClass("is-off-canvas-open").off("touchmove", e._stopScrolling),
                    e.$element.off("touchstart", e._recordScrollable),
                    e.$element.off("touchmove", e._stopScrollPropagation),
                    e.$element.off("touchstart", "[data-off-canvas-scrollbox]", e._recordScrollable),
                    e.$element.off("touchmove", "[data-off-canvas-scrollbox]", e._stopScrollPropagation)),
                    !0 === e.options.trapFocus && (e.$content.removeAttr("tabindex"),
                    L.releaseFocus(e.$element)),
                    e.$element.trigger("closed.zf.offCanvas")
                }
                )))
            }
        }, {
            key: "toggle",
            value: function(t, e) {
                this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e)
            }
        }, {
            key: "_handleKeyboard",
            value: function(t) {
                var e = this;
                L.handleKey(t, "OffCanvas", {
                    close: function() {
                        return e.close(),
                        e.$lastTrigger.focus(),
                        !0
                    },
                    handled: function() {
                        t.preventDefault()
                    }
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.close(),
                this.$element.off(".zf.trigger .zf.offCanvas"),
                this.$overlay.off(".zf.offCanvas"),
                this.onLoadListener && r()(window).off(this.onLoadListener)
            }
        }]),
        e
    }();
    kt.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        inCanvasOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    };
    var Ct = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Orbit",
                W.init(r.a),
                this._init(),
                L.register("Orbit", {
                    ltr: {
                        ARROW_RIGHT: "next",
                        ARROW_LEFT: "previous"
                    },
                    rtl: {
                        ARROW_LEFT: "next",
                        ARROW_RIGHT: "previous"
                    }
                })
            }
        }, {
            key: "_init",
            value: function() {
                this._reset(),
                this.$wrapper = this.$element.find(".".concat(this.options.containerClass)),
                this.$slides = this.$element.find(".".concat(this.options.slideClass));
                var t = this.$element.find("img")
                  , e = this.$slides.filter(".is-active")
                  , n = this.$element[0].id || v(6, "orbit");
                this.$element.attr({
                    "data-resize": n,
                    id: n
                }),
                e.length || this.$slides.eq(0).addClass("is-active"),
                this.options.useMUI || this.$slides.addClass("no-motionui"),
                t.length ? S(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(),
                this.options.bullets && this._loadBullets(),
                this._events(),
                this.options.autoPlay && this.$slides.length > 1 && this.geoSync(),
                this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets",
            value: function() {
                this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find("button")
            }
        }, {
            key: "geoSync",
            value: function() {
                var t = this;
                this.timer = new I(this.$element,{
                    duration: this.options.timerDelay,
                    infinite: !1
                },(function() {
                    t.changeSlide(!0)
                }
                )),
                this.timer.start()
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                this._setWrapperHeight()
            }
        }, {
            key: "_setWrapperHeight",
            value: function(t) {
                var e, n = 0, i = 0, s = this;
                this.$slides.each((function() {
                    e = this.getBoundingClientRect().height,
                    r()(this).attr("data-slide", i),
                    /mui/g.test(r()(this)[0].className) || s.$slides.filter(".is-active")[0] === s.$slides.eq(i)[0] || r()(this).css({
                        display: "none"
                    }),
                    n = e > n ? e : n,
                    i++
                }
                )),
                i === this.$slides.length && (this.$wrapper.css({
                    height: n
                }),
                t && t(n))
            }
        }, {
            key: "_setSlideHeight",
            value: function(t) {
                this.$slides.each((function() {
                    r()(this).css("max-height", t)
                }
                ))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off(".resizeme.zf.trigger").on({
                    "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
                }),
                this.$slides.length > 1 && (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", (function(e) {
                    e.preventDefault(),
                    t.changeSlide(!0)
                }
                )).on("swiperight.zf.orbit", (function(e) {
                    e.preventDefault(),
                    t.changeSlide(!1)
                }
                )),
                this.options.autoPlay && (this.$slides.on("click.zf.orbit", (function() {
                    t.$element.data("clickedOn", !t.$element.data("clickedOn")),
                    t.timer[t.$element.data("clickedOn") ? "pause" : "start"]()
                }
                )),
                this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", (function() {
                    t.timer.pause()
                }
                )).on("mouseleave.zf.orbit", (function() {
                    t.$element.data("clickedOn") || t.timer.start()
                }
                ))),
                this.options.navButtons && this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass)).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", (function(e) {
                    e.preventDefault(),
                    t.changeSlide(r()(this).hasClass(t.options.nextClass))
                }
                )),
                this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", (function() {
                    if (/is-active/g.test(this.className))
                        return !1;
                    var e = r()(this).data("slide")
                      , n = e > t.$slides.filter(".is-active").data("slide")
                      , i = t.$slides.eq(e);
                    t.changeSlide(n, i, e)
                }
                )),
                this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", (function(e) {
                    L.handleKey(e, "Orbit", {
                        next: function() {
                            t.changeSlide(!0)
                        },
                        previous: function() {
                            t.changeSlide(!1)
                        },
                        handled: function() {
                            r()(e.target).is(t.$bullets) && t.$bullets.filter(".is-active").focus()
                        }
                    })
                }
                )))
            }
        }, {
            key: "_reset",
            value: function() {
                void 0 !== this.$slides && this.$slides.length > 1 && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),
                this.options.autoPlay && this.timer.restart(),
                this.$slides.each((function(t) {
                    r()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()
                }
                )),
                this.$slides.first().addClass("is-active").show(),
                this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]),
                this.options.bullets && this._updateBullets(0))
            }
        }, {
            key: "changeSlide",
            value: function(t, e, n) {
                if (this.$slides) {
                    var i = this.$slides.filter(".is-active").eq(0);
                    if (/mui/g.test(i[0].className))
                        return !1;
                    var r, s = this.$slides.first(), o = this.$slides.last(), a = t ? "Right" : "Left", l = t ? "Left" : "Right", c = this;
                    (r = e || (t ? this.options.infiniteWrap ? i.next(".".concat(this.options.slideClass)).length ? i.next(".".concat(this.options.slideClass)) : s : i.next(".".concat(this.options.slideClass)) : this.options.infiniteWrap ? i.prev(".".concat(this.options.slideClass)).length ? i.prev(".".concat(this.options.slideClass)) : o : i.prev(".".concat(this.options.slideClass)))).length && (this.$element.trigger("beforeslidechange.zf.orbit", [i, r]),
                    this.options.bullets && (n = n || this.$slides.index(r),
                    this._updateBullets(n)),
                    this.options.useMUI && !this.$element.is(":hidden") ? (q.animateIn(r.addClass("is-active"), this.options["animInFrom".concat(a)], (function() {
                        r.css({
                            display: "block"
                        }).attr("aria-live", "polite")
                    }
                    )),
                    q.animateOut(i.removeClass("is-active"), this.options["animOutTo".concat(l)], (function() {
                        i.removeAttr("aria-live"),
                        c.options.autoPlay && !c.timer.isPaused && c.timer.restart()
                    }
                    ))) : (i.removeClass("is-active is-in").removeAttr("aria-live").hide(),
                    r.addClass("is-active is-in").attr("aria-live", "polite").show(),
                    this.options.autoPlay && !this.timer.isPaused && this.timer.restart()),
                    this.$element.trigger("slidechange.zf.orbit", [r]))
                }
            }
        }, {
            key: "_updateBullets",
            value: function(t) {
                var e = this.$bullets.filter(".is-active")
                  , n = this.$bullets.not(".is-active")
                  , i = this.$bullets.eq(t);
                e.removeClass("is-active").blur(),
                i.addClass("is-active");
                var s = e.children("[data-slide-active-label]").last();
                if (!s.length) {
                    var o = e.children("span");
                    n.toArray().map((function(t) {
                        return r()(t).children("span").length
                    }
                    )).every((function(t) {
                        return t < o.length
                    }
                    )) && (s = o.last()).attr("data-slide-active-label", "")
                }
                s.length && (s.detach(),
                i.append(s))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()
            }
        }]),
        e
    }();
    Ct.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    };
    var xt = {
        dropdown: {
            cssClass: "dropdown",
            plugin: mt
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: lt
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: at
        }
    }
      , $t = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, e) {
                this.$element = r()(t),
                this.rules = this.$element.data("responsive-menu"),
                this.currentMq = null,
                this.currentPlugin = null,
                this.className = "ResponsiveMenu",
                this._init(),
                this._events()
            }
        }, {
            key: "_init",
            value: function() {
                if (w._init(),
                "string" == typeof this.rules) {
                    for (var t = {}, e = this.rules.split(" "), n = 0; n < e.length; n++) {
                        var i = e[n].split("-")
                          , s = i.length > 1 ? i[0] : "small"
                          , o = i.length > 1 ? i[1] : i[0];
                        null !== xt[o] && (t[s] = xt[o])
                    }
                    this.rules = t
                }
                r.a.isEmptyObject(this.rules) || this._checkMediaQueries(),
                this.$element.attr("data-mutate", this.$element.attr("data-mutate") || v(6, "responsive-menu"))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                r()(window).on("changed.zf.mediaquery", (function() {
                    t._checkMediaQueries()
                }
                ))
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var t, e = this;
                r.a.each(this.rules, (function(e) {
                    w.atLeast(e) && (t = e)
                }
                )),
                t && (this.currentPlugin instanceof this.rules[t].plugin || (r.a.each(xt, (function(t, n) {
                    e.$element.removeClass(n.cssClass)
                }
                )),
                this.$element.addClass(this.rules[t].cssClass),
                this.currentPlugin && this.currentPlugin.destroy(),
                this.currentPlugin = new this.rules[t].plugin(this.$element,{})))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.currentPlugin.destroy(),
                r()(window).off(".zf.ResponsiveMenu")
            }
        }]),
        e
    }();
    $t.defaults = {};
    var _t = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = r()(t),
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "ResponsiveToggle",
                this._init(),
                this._events()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element.data("responsive-toggle");
                if (t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),
                this.$targetMenu = r()("#".concat(t)),
                this.$toggler = this.$element.find("[data-toggle]").filter((function() {
                    var e = r()(this).data("toggle");
                    return e === t || "" === e
                }
                )),
                this.options = r.a.extend({}, this.options, this.$targetMenu.data()),
                this.options.animate) {
                    var e = this.options.animate.split(" ");
                    this.animationIn = e[0],
                    this.animationOut = e[1] || null
                }
                this._update()
            }
        }, {
            key: "_events",
            value: function() {
                this._updateMqHandler = this._update.bind(this),
                r()(window).on("changed.zf.mediaquery", this._updateMqHandler),
                this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update",
            value: function() {
                w.atLeast(this.options.hideFor) ? (this.$element.hide(),
                this.$targetMenu.show()) : (this.$element.show(),
                this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu",
            value: function() {
                var t = this;
                w.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? q.animateIn(this.$targetMenu, this.animationIn, (function() {
                    t.$element.trigger("toggled.zf.responsiveToggle"),
                    t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")
                }
                )) : q.animateOut(this.$targetMenu, this.animationOut, (function() {
                    t.$element.trigger("toggled.zf.responsiveToggle")
                }
                )) : (this.$targetMenu.toggle(0),
                this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),
                this.$element.trigger("toggled.zf.responsiveToggle")))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.responsiveToggle"),
                this.$toggler.off(".zf.responsiveToggle"),
                r()(window).off("changed.zf.mediaquery", this._updateMqHandler)
            }
        }]),
        e
    }();
    _t.defaults = {
        hideFor: "medium",
        animate: !1
    };
    var Tt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Reveal",
                this._init(),
                W.init(r.a),
                tt.init(r.a),
                L.register("Reveal", {
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                w._init(),
                this.id = this.$element.attr("id"),
                this.isActive = !1,
                this.cached = {
                    mq: w.current
                },
                this.$anchor = r()('[data-open="'.concat(this.id, '"]')).length ? r()('[data-open="'.concat(this.id, '"]')) : r()('[data-toggle="'.concat(this.id, '"]')),
                this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }),
                (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0,
                this.options.overlay = !1),
                this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)),
                this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }),
                this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(r()(this.options.appendTo)),
                this.$element.addClass("without-overlay")),
                this._events(),
                this.options.deepLink && window.location.hash === "#".concat(this.id) && (this.onLoadListener = y(r()(window), (function() {
                    return t.open()
                }
                )))
            }
        }, {
            key: "_makeOverlay",
            value: function() {
                var t = "";
                return this.options.additionalOverlayClasses && (t = " " + this.options.additionalOverlayClasses),
                r()("<div></div>").addClass("reveal-overlay" + t).appendTo(this.options.appendTo)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var t, e = this.$element.outerWidth(), n = r()(window).width(), i = this.$element.outerHeight(), s = r()(window).height(), o = null;
                t = "auto" === this.options.hOffset ? parseInt((n - e) / 2, 10) : parseInt(this.options.hOffset, 10),
                "auto" === this.options.vOffset ? o = i > s ? parseInt(Math.min(100, s / 10), 10) : parseInt((s - i) / 4, 10) : null !== this.options.vOffset && (o = parseInt(this.options.vOffset, 10)),
                null !== o && this.$element.css({
                    top: o + "px"
                }),
                this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: t + "px"
                }),
                this.$element.css({
                    margin: "0px"
                }))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this
                  , e = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(n, i) {
                        if (n.target === e.$element[0] || r()(n.target).parents("[data-closable]")[0] === i)
                            return t.close.apply(t)
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        e._updatePosition()
                    }
                }),
                this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.dropdown tap.zf.dropdown", (function(t) {
                    t.target !== e.$element[0] && !r.a.contains(e.$element[0], t.target) && r.a.contains(document, t.target) && e.close()
                }
                )),
                this.options.deepLink && r()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function(t) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "_disableScroll",
            value: function(t) {
                t = t || r()(window).scrollTop(),
                r()(document).height() > r()(window).height() && r()("html").css("top", -t)
            }
        }, {
            key: "_enableScroll",
            value: function(t) {
                t = t || parseInt(r()("html").css("top")),
                r()(document).height() > r()(window).height() && (r()("html").css("top", ""),
                r()(window).scrollTop(-t))
            }
        }, {
            key: "open",
            value: function() {
                var t = this
                  , e = "#".concat(this.id);
                this.options.deepLink && window.location.hash !== e && (window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", e) : window.history.replaceState({}, "", e) : window.location.hash = e),
                this.$activeAnchor = r()(document.activeElement).is(this.$anchor) ? r()(document.activeElement) : this.$anchor,
                this.isActive = !0,
                this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0),
                this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(),
                this._updatePosition(),
                this.$element.hide().css({
                    visibility: ""
                }),
                this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(),
                this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")),
                this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id),
                0 === r()(".reveal:visible").length && this._disableScroll();
                var n = this;
                this.options.animationIn ? (this.options.overlay && q.animateIn(this.$overlay, "fade-in"),
                q.animateIn(this.$element, this.options.animationIn, (function() {
                    t.$element && (t.focusableElements = L.findFocusable(t.$element),
                    n.$element.attr({
                        "aria-hidden": !1,
                        tabindex: -1
                    }).focus(),
                    n._addGlobalClasses(),
                    L.trapFocus(n.$element))
                }
                ))) : (this.options.overlay && this.$overlay.show(0),
                this.$element.show(this.options.showDelay)),
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(),
                L.trapFocus(this.$element),
                this._addGlobalClasses(),
                this._addGlobalListeners(),
                this.$element.trigger("open.zf.reveal")
            }
        }, {
            key: "_addGlobalClasses",
            value: function() {
                var t = function() {
                    r()("html").toggleClass("zf-has-scroll", !!(r()(document).height() > r()(window).height()))
                };
                this.$element.on("resizeme.zf.trigger.revealScrollbarListener", (function() {
                    return t()
                }
                )),
                t(),
                r()("html").addClass("is-reveal-open")
            }
        }, {
            key: "_removeGlobalClasses",
            value: function() {
                this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),
                r()("html").removeClass("is-reveal-open"),
                r()("html").removeClass("zf-has-scroll")
            }
        }, {
            key: "_addGlobalListeners",
            value: function() {
                var t = this;
                this.$element && (this.focusableElements = L.findFocusable(this.$element),
                this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || r()("body").on("click.zf.dropdown tap.zf.dropdown", (function(e) {
                    e.target !== t.$element[0] && !r.a.contains(t.$element[0], e.target) && r.a.contains(document, e.target) && t.close()
                }
                )),
                this.options.closeOnEsc && r()(window).on("keydown.zf.reveal", (function(e) {
                    L.handleKey(e, "Reveal", {
                        close: function() {
                            t.options.closeOnEsc && t.close()
                        }
                    })
                }
                )))
            }
        }, {
            key: "close",
            value: function() {
                if (!this.isActive || !this.$element.is(":visible"))
                    return !1;
                var t = this;
                function e() {
                    var e = parseInt(r()("html").css("top"));
                    0 === r()(".reveal:visible").length && t._removeGlobalClasses(),
                    L.releaseFocus(t.$element),
                    t.$element.attr("aria-hidden", !0),
                    0 === r()(".reveal:visible").length && t._enableScroll(e),
                    t.$element.trigger("closed.zf.reveal")
                }
                if (this.options.animationOut ? (this.options.overlay && q.animateOut(this.$overlay, "fade-out"),
                q.animateOut(this.$element, this.options.animationOut, e)) : (this.$element.hide(this.options.hideDelay),
                this.options.overlay ? this.$overlay.hide(0, e) : e()),
                this.options.closeOnEsc && r()(window).off("keydown.zf.reveal"),
                !this.options.overlay && this.options.closeOnClick && r()("body").off("click.zf.dropdown tap.zf.dropdown"),
                this.$element.off("keydown.zf.reveal"),
                this.options.resetOnClose && this.$element.html(this.$element.html()),
                this.isActive = !1,
                t.options.deepLink && window.location.hash === "#".concat(this.id))
                    if (window.history.replaceState) {
                        var n = window.location.pathname + window.location.search;
                        this.options.updateHistory ? window.history.pushState({}, "", n) : window.history.replaceState("", document.title, n)
                    } else
                        window.location.hash = "";
                this.$activeAnchor.focus()
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "_destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo(r()(this.options.appendTo)),
                this.$overlay.hide().off().remove()),
                this.$element.hide().off(),
                this.$anchor.off(".zf"),
                r()(window).off(".zf.reveal:".concat(this.id)),
                this.onLoadListener && r()(window).off(this.onLoadListener),
                0 === r()(".reveal:visible").length && this._removeGlobalClasses()
            }
        }]),
        e
    }();
    Tt.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        updateHistory: !1,
        appendTo: "body",
        additionalOverlayClasses: ""
    };
    var St = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Slider",
                W.init(r.a),
                tt.init(r.a),
                this._init(),
                L.register("Slider", {
                    ltr: {
                        ARROW_RIGHT: "increase",
                        ARROW_UP: "increase",
                        ARROW_DOWN: "decrease",
                        ARROW_LEFT: "decrease",
                        SHIFT_ARROW_RIGHT: "increase_fast",
                        SHIFT_ARROW_UP: "increase_fast",
                        SHIFT_ARROW_DOWN: "decrease_fast",
                        SHIFT_ARROW_LEFT: "decrease_fast",
                        HOME: "min",
                        END: "max"
                    },
                    rtl: {
                        ARROW_LEFT: "increase",
                        ARROW_RIGHT: "decrease",
                        SHIFT_ARROW_LEFT: "increase_fast",
                        SHIFT_ARROW_RIGHT: "decrease_fast"
                    }
                })
            }
        }, {
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"),
                this.handles = this.$element.find("[data-slider-handle]"),
                this.$handle = this.handles.eq(0),
                this.$input = this.inputs.length ? this.inputs.eq(0) : r()("#".concat(this.$handle.attr("aria-controls"))),
                this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0),
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0,
                this.$element.addClass(this.options.disabledClass)),
                this.inputs.length || (this.inputs = r()().add(this.$input),
                this.options.binding = !0),
                this._setInitAttr(0),
                this.handles[1] && (this.options.doubleSided = !0,
                this.$handle2 = this.handles.eq(1),
                this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : r()("#".concat(this.$handle2.attr("aria-controls"))),
                this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)),
                this._setInitAttr(1)),
                this.setHandles(),
                this._events()
            }
        }, {
            key: "setHandles",
            value: function() {
                var t = this;
                this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), (function() {
                    t._setHandlePos(t.$handle2, t.inputs.eq(1).val())
                }
                )) : this._setHandlePos(this.$handle, this.inputs.eq(0).val())
            }
        }, {
            key: "_reflow",
            value: function() {
                this.setHandles()
            }
        }, {
            key: "_pctOfBar",
            value: function(t) {
                var e = At(t - this.options.start, this.options.end - this.options.start);
                switch (this.options.positionValueFunction) {
                case "pow":
                    e = this._logTransform(e);
                    break;
                case "log":
                    e = this._powTransform(e)
                }
                return e.toFixed(2)
            }
        }, {
            key: "_value",
            value: function(t) {
                switch (this.options.positionValueFunction) {
                case "pow":
                    t = this._powTransform(t);
                    break;
                case "log":
                    t = this._logTransform(t)
                }
                return this.options.vertical ? parseFloat(this.options.end) + t * (this.options.start - this.options.end) : (this.options.end - this.options.start) * t + parseFloat(this.options.start)
            }
        }, {
            key: "_logTransform",
            value: function(t) {
                return function(t, e) {
                    return Math.log(e) / Math.log(t)
                }(this.options.nonLinearBase, t * (this.options.nonLinearBase - 1) + 1)
            }
        }, {
            key: "_powTransform",
            value: function(t) {
                return (Math.pow(this.options.nonLinearBase, t) - 1) / (this.options.nonLinearBase - 1)
            }
        }, {
            key: "_setHandlePos",
            value: function(t, e, n) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    (e = parseFloat(e)) < this.options.start ? e = this.options.start : e > this.options.end && (e = this.options.end);
                    var i = this.options.doubleSided;
                    if (i)
                        if (0 === this.handles.index(t)) {
                            var r = parseFloat(this.$handle2.attr("aria-valuenow"));
                            e = e >= r ? r - this.options.step : e
                        } else {
                            var s = parseFloat(this.$handle.attr("aria-valuenow"));
                            e = e <= s ? s + this.options.step : e
                        }
                    var o = this
                      , a = this.options.vertical
                      , l = a ? "height" : "width"
                      , c = a ? "top" : "left"
                      , u = t[0].getBoundingClientRect()[l]
                      , h = this.$element[0].getBoundingClientRect()[l]
                      , d = this._pctOfBar(e)
                      , f = (100 * At((h - u) * d, h)).toFixed(this.options.decimal);
                    e = parseFloat(e.toFixed(this.options.decimal));
                    var p = {};
                    if (this._setValues(t, e),
                    i) {
                        var v, m = 0 === this.handles.index(t), g = ~~(100 * At(u, h));
                        if (m)
                            p[c] = "".concat(f, "%"),
                            v = parseFloat(this.$handle2[0].style[c]) - f + g,
                            n && "function" == typeof n && n();
                        else {
                            var y = parseFloat(this.$handle[0].style[c]);
                            v = f - (isNaN(y) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : y) + g
                        }
                        p["min-".concat(l)] = "".concat(v, "%")
                    }
                    this.$element.one("finished.zf.animate", (function() {
                        o.$element.trigger("moved.zf.slider", [t])
                    }
                    )),
                    H(this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime, t, (function() {
                        isNaN(f) ? t.css(c, "".concat(100 * d, "%")) : t.css(c, "".concat(f, "%")),
                        o.options.doubleSided ? o.$fill.css(p) : o.$fill.css(l, "".concat(100 * d, "%"))
                    }
                    )),
                    clearTimeout(o.timeout),
                    o.timeout = setTimeout((function() {
                        o.$element.trigger("changed.zf.slider", [t])
                    }
                    ), o.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr",
            value: function(t) {
                var e = 0 === t ? this.options.initialStart : this.options.initialEnd
                  , n = this.inputs.eq(t).attr("id") || v(6, "slider");
                this.inputs.eq(t).attr({
                    id: n,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }),
                this.inputs.eq(t).val(e),
                this.handles.eq(t).attr({
                    role: "slider",
                    "aria-controls": n,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": e,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues",
            value: function(t, e) {
                var n = this.options.doubleSided ? this.handles.index(t) : 0;
                this.inputs.eq(n).val(e),
                t.attr("aria-valuenow", e)
            }
        }, {
            key: "_handleEvent",
            value: function(t, e, n) {
                var i;
                if (n)
                    i = this._adjustValue(null, n);
                else {
                    t.preventDefault();
                    var s = this.options.vertical
                      , o = s ? "height" : "width"
                      , a = s ? "top" : "left"
                      , l = s ? t.pageY : t.pageX
                      , c = (this.$handle[0].getBoundingClientRect()[o],
                    this.$element[0].getBoundingClientRect()[o])
                      , u = s ? r()(window).scrollTop() : r()(window).scrollLeft()
                      , h = this.$element.offset()[a];
                    t.clientY === t.pageY && (l += u);
                    var d, f = l - h, v = At(d = f < 0 ? 0 : f > c ? c : f, c);
                    i = this._value(v),
                    p() && !this.options.vertical && (i = this.options.end - i),
                    i = this._adjustValue(null, i),
                    e || (e = zt(this.$handle, a, d, o) <= zt(this.$handle2, a, d, o) ? this.$handle : this.$handle2)
                }
                this._setHandlePos(e, i)
            }
        }, {
            key: "_adjustValue",
            value: function(t, e) {
                var n, i, r, s, o = this.options.step, a = parseFloat(o / 2);
                return s = (r = (n = t ? parseFloat(t.attr("aria-valuenow")) : e) - (i = n >= 0 ? n % o : o + n % o)) + o,
                0 === i ? n : n = n >= r + a ? s : r
            }
        }, {
            key: "_events",
            value: function() {
                this._eventsForHandle(this.$handle),
                this.handles[1] && this._eventsForHandle(this.$handle2)
            }
        }, {
            key: "_eventsForHandle",
            value: function(t) {
                var e, n = this, i = function(t) {
                    var e = n.inputs.index(r()(this));
                    n._handleEvent(t, n.handles.eq(e), r()(this).val())
                };
                if (this.inputs.off("keyup.zf.slider").on("keyup.zf.slider", (function(t) {
                    13 == t.keyCode && i.call(this, t)
                }
                )),
                this.inputs.off("change.zf.slider").on("change.zf.slider", i),
                this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", (function(t) {
                    if (n.$element.data("dragging"))
                        return !1;
                    r()(t.target).is("[data-slider-handle]") || (n.options.doubleSided ? n._handleEvent(t) : n._handleEvent(t, n.$handle))
                }
                )),
                this.options.draggable) {
                    this.handles.addTouch();
                    var s = r()("body");
                    t.off("mousedown.zf.slider").on("mousedown.zf.slider", (function(i) {
                        t.addClass("is-dragging"),
                        n.$fill.addClass("is-dragging"),
                        n.$element.data("dragging", !0),
                        e = r()(i.currentTarget),
                        s.on("mousemove.zf.slider", (function(t) {
                            t.preventDefault(),
                            n._handleEvent(t, e)
                        }
                        )).on("mouseup.zf.slider", (function(i) {
                            n._handleEvent(i, e),
                            t.removeClass("is-dragging"),
                            n.$fill.removeClass("is-dragging"),
                            n.$element.data("dragging", !1),
                            s.off("mousemove.zf.slider mouseup.zf.slider")
                        }
                        ))
                    }
                    )).on("selectstart.zf.slider touchmove.zf.slider", (function(t) {
                        t.preventDefault()
                    }
                    ))
                }
                t.off("keydown.zf.slider").on("keydown.zf.slider", (function(t) {
                    var e, i = r()(this), s = n.options.doubleSided ? n.handles.index(i) : 0, o = parseFloat(n.inputs.eq(s).val());
                    L.handleKey(t, "Slider", {
                        decrease: function() {
                            e = o - n.options.step
                        },
                        increase: function() {
                            e = o + n.options.step
                        },
                        decrease_fast: function() {
                            e = o - 10 * n.options.step
                        },
                        increase_fast: function() {
                            e = o + 10 * n.options.step
                        },
                        min: function() {
                            e = n.options.start
                        },
                        max: function() {
                            e = n.options.end
                        },
                        handled: function() {
                            t.preventDefault(),
                            n._setHandlePos(i, e)
                        }
                    })
                }
                ))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.handles.off(".zf.slider"),
                this.inputs.off(".zf.slider"),
                this.$element.off(".zf.slider"),
                clearTimeout(this.timeout)
            }
        }]),
        e
    }();
    function At(t, e) {
        return t / e
    }
    function zt(t, e, n, i) {
        return Math.abs(t.position()[e] + t[i]() / 2 - n)
    }
    St.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500,
        nonLinearBase: 5,
        positionValueFunction: "linear"
    };
    var Et = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Sticky",
                tt.init(r.a),
                this._init()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element.parent("[data-sticky-container]")
                  , e = this.$element[0].id || v(6, "sticky")
                  , n = this;
                t.length ? this.$container = t : (this.wasWrapped = !0,
                this.$element.wrap(this.options.container),
                this.$container = this.$element.parent()),
                this.$container.addClass(this.options.containerClass),
                this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": e,
                    "data-mutate": e
                }),
                "" !== this.options.anchor && r()("#" + n.options.anchor).attr({
                    "data-mutate": e
                }),
                this.scrollCount = this.options.checkEvery,
                this.isStuck = !1,
                this.onLoadListener = y(r()(window), (function() {
                    n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height,
                    n.$container.css("height", n.containerHeight),
                    n.elemHeight = n.containerHeight,
                    "" !== n.options.anchor ? n.$anchor = r()("#" + n.options.anchor) : n._parsePoints(),
                    n._setSizes((function() {
                        var t = window.pageYOffset;
                        n._calc(!1, t),
                        n.isStuck || n._removeSticky(!(t >= n.topPoint))
                    }
                    )),
                    n._events(e.split("-").reverse().join("-"))
                }
                ))
            }
        }, {
            key: "_parsePoints",
            value: function() {
                for (var t = ["" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor], e = {}, n = 0, i = t.length; n < i && t[n]; n++) {
                    var s;
                    if ("number" == typeof t[n])
                        s = t[n];
                    else {
                        var o = t[n].split(":")
                          , a = r()("#".concat(o[0]));
                        s = a.offset().top,
                        o[1] && "bottom" === o[1].toLowerCase() && (s += a[0].getBoundingClientRect().height)
                    }
                    e[n] = s
                }
                this.points = e
            }
        }, {
            key: "_events",
            value: function(t) {
                var e = this
                  , n = this.scrollListener = "scroll.zf.".concat(t);
                this.isOn || (this.canStick && (this.isOn = !0,
                r()(window).off(n).on(n, (function(t) {
                    0 === e.scrollCount ? (e.scrollCount = e.options.checkEvery,
                    e._setSizes((function() {
                        e._calc(!1, window.pageYOffset)
                    }
                    ))) : (e.scrollCount--,
                    e._calc(!1, window.pageYOffset))
                }
                ))),
                this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", (function(n, i) {
                    e._eventsHandler(t)
                }
                )),
                this.$element.on("mutateme.zf.trigger", (function(n, i) {
                    e._eventsHandler(t)
                }
                )),
                this.$anchor && this.$anchor.on("mutateme.zf.trigger", (function(n, i) {
                    e._eventsHandler(t)
                }
                )))
            }
        }, {
            key: "_eventsHandler",
            value: function(t) {
                var e = this
                  , n = this.scrollListener = "scroll.zf.".concat(t);
                e._setSizes((function() {
                    e._calc(!1),
                    e.canStick ? e.isOn || e._events(t) : e.isOn && e._pauseListeners(n)
                }
                ))
            }
        }, {
            key: "_pauseListeners",
            value: function(t) {
                this.isOn = !1,
                r()(window).off(t),
                this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function(t, e) {
                if (t && this._setSizes(),
                !this.canStick)
                    return this.isStuck && this._removeSticky(!0),
                    !1;
                e || (e = window.pageYOffset),
                e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
            }
        }, {
            key: "_setSticky",
            value: function() {
                var t = this
                  , e = this.options.stickTo
                  , n = "top" === e ? "marginTop" : "marginBottom"
                  , i = "top" === e ? "bottom" : "top"
                  , r = {};
                r[n] = "".concat(this.options[n], "em"),
                r[e] = 0,
                r[i] = "auto",
                this.isStuck = !0,
                this.$element.removeClass("is-anchored is-at-".concat(i)).addClass("is-stuck is-at-".concat(e)).css(r).trigger("sticky.zf.stuckto:".concat(e)),
                this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", (function() {
                    t._setSizes()
                }
                ))
            }
        }, {
            key: "_removeSticky",
            value: function(t) {
                var e = this.options.stickTo
                  , n = "top" === e
                  , i = {}
                  , r = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight
                  , s = t ? "top" : "bottom";
                i[n ? "marginTop" : "marginBottom"] = 0,
                i.bottom = "auto",
                i.top = t ? 0 : r,
                this.isStuck = !1,
                this.$element.removeClass("is-stuck is-at-".concat(e)).addClass("is-anchored is-at-".concat(s)).css(i).trigger("sticky.zf.unstuckfrom:".concat(s))
            }
        }, {
            key: "_setSizes",
            value: function(t) {
                this.canStick = w.is(this.options.stickyOn),
                this.canStick || t && "function" == typeof t && t();
                var e = this.$container[0].getBoundingClientRect().width
                  , n = window.getComputedStyle(this.$container[0])
                  , i = parseInt(n["padding-left"], 10)
                  , r = parseInt(n["padding-right"], 10);
                if (this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(),
                this.$element.css({
                    "max-width": "".concat(e - i - r, "px")
                }),
                this.options.dynamicHeight || !this.containerHeight) {
                    var s = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                    s = "none" == this.$element.css("display") ? 0 : s,
                    this.$container.css("height", s),
                    this.containerHeight = s
                }
                if (this.elemHeight = this.containerHeight,
                !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                    var o = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", o)
                }
                this._setBreakPoints(this.containerHeight, (function() {
                    t && "function" == typeof t && t()
                }
                ))
            }
        }, {
            key: "_setBreakPoints",
            value: function(t, e) {
                if (!this.canStick) {
                    if (!e || "function" != typeof e)
                        return !1;
                    e()
                }
                var n = Ot(this.options.marginTop)
                  , i = Ot(this.options.marginBottom)
                  , r = this.points ? this.points[0] : this.$anchor.offset().top
                  , s = this.points ? this.points[1] : r + this.anchorHeight
                  , o = window.innerHeight;
                "top" === this.options.stickTo ? (r -= n,
                s -= t + n) : "bottom" === this.options.stickTo && (r -= o - (t + i),
                s -= o - i),
                this.topPoint = r,
                this.bottomPoint = s,
                e && "function" == typeof e && e()
            }
        }, {
            key: "_destroy",
            value: function() {
                this._removeSticky(!0),
                this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),
                this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"),
                this.scrollListener && r()(window).off(this.scrollListener),
                this.onLoadListener && r()(window).off(this.onLoadListener),
                this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                })
            }
        }]),
        e
    }();
    function Ot(t) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    }
    Et.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        dynamicHeight: !0,
        checkEvery: -1
    };
    var Lt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Tabs",
                this._init(),
                L.register("Tabs", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "previous",
                    ARROW_DOWN: "next",
                    ARROW_LEFT: "previous"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this
                  , e = this;
                if (this._isInitializing = !0,
                this.$element.attr({
                    role: "tablist"
                }),
                this.$tabTitles = this.$element.find(".".concat(this.options.linkClass)),
                this.$tabContent = r()('[data-tabs-content="'.concat(this.$element[0].id, '"]')),
                this.$tabTitles.each((function() {
                    var t = r()(this)
                      , n = t.find("a")
                      , i = t.hasClass("".concat(e.options.linkActiveClass))
                      , s = n.attr("data-tabs-target") || n[0].hash.slice(1)
                      , o = n[0].id ? n[0].id : "".concat(s, "-label")
                      , a = r()("#".concat(s));
                    t.attr({
                        role: "presentation"
                    }),
                    n.attr({
                        role: "tab",
                        "aria-controls": s,
                        "aria-selected": i,
                        id: o,
                        tabindex: i ? "0" : "-1"
                    }),
                    a.attr({
                        role: "tabpanel",
                        "aria-labelledby": o
                    }),
                    i && (e._initialAnchor = "#".concat(s)),
                    i || a.attr("aria-hidden", "true"),
                    i && e.options.autoFocus && (e.onLoadListener = y(r()(window), (function() {
                        r()("html, body").animate({
                            scrollTop: t.offset().top
                        }, e.options.deepLinkSmudgeDelay, (function() {
                            n.focus()
                        }
                        ))
                    }
                    )))
                }
                )),
                this.options.matchHeight) {
                    var n = this.$tabContent.find("img");
                    n.length ? S(n, this._setHeight.bind(this)) : this._setHeight()
                }
                this._checkDeepLink = function() {
                    var e = window.location.hash;
                    if (!e.length) {
                        if (t._isInitializing)
                            return;
                        t._initialAnchor && (e = t._initialAnchor)
                    }
                    var n = e.indexOf("#") >= 0 ? e.slice(1) : e
                      , i = n && r()("#".concat(n))
                      , s = e && t.$element.find('[href$="'.concat(e, '"],[data-tabs-target="').concat(n, '"]')).first();
                    if (i.length && s.length) {
                        if (i && i.length && s && s.length ? t.selectTab(i, !0) : t._collapse(),
                        t.options.deepLinkSmudge) {
                            var o = t.$element.offset();
                            r()("html, body").animate({
                                scrollTop: o.top
                            }, t.options.deepLinkSmudgeDelay)
                        }
                        t.$element.trigger("deeplink.zf.tabs", [s, i])
                    }
                }
                ,
                this.options.deepLink && this._checkDeepLink(),
                this._events(),
                this._isInitializing = !1
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(),
                this._addClickHandler(),
                this._setHeightMqHandler = null,
                this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this),
                r()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)),
                this.options.deepLink && r()(window).on("hashchange", this._checkDeepLink)
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var t = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", ".".concat(this.options.linkClass), (function(e) {
                    e.preventDefault(),
                    t._handleTabChange(r()(this))
                }
                ))
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var t = this;
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", (function(e) {
                    if (9 !== e.which) {
                        var n, i, s = r()(this), o = s.parent("ul").children("li");
                        o.each((function(e) {
                            r()(this).is(s) && (t.options.wrapOnKeys ? (n = 0 === e ? o.last() : o.eq(e - 1),
                            i = e === o.length - 1 ? o.first() : o.eq(e + 1)) : (n = o.eq(Math.max(0, e - 1)),
                            i = o.eq(Math.min(e + 1, o.length - 1))))
                        }
                        )),
                        L.handleKey(e, "Tabs", {
                            open: function() {
                                s.find('[role="tab"]').focus(),
                                t._handleTabChange(s)
                            },
                            previous: function() {
                                n.find('[role="tab"]').focus(),
                                t._handleTabChange(n)
                            },
                            next: function() {
                                i.find('[role="tab"]').focus(),
                                t._handleTabChange(i)
                            },
                            handled: function() {
                                e.preventDefault()
                            }
                        })
                    }
                }
                ))
            }
        }, {
            key: "_handleTabChange",
            value: function(t, e) {
                if (t.hasClass("".concat(this.options.linkActiveClass)))
                    this.options.activeCollapse && this._collapse();
                else {
                    var n = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass))
                      , i = t.find('[role="tab"]')
                      , r = i.attr("data-tabs-target")
                      , s = r && r.length ? "#".concat(r) : i[0].hash
                      , o = this.$tabContent.find(s);
                    this._collapseTab(n),
                    this._openTab(t),
                    this.options.deepLink && !e && (this.options.updateHistory ? history.pushState({}, "", s) : history.replaceState({}, "", s)),
                    this.$element.trigger("change.zf.tabs", [t, o]),
                    o.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
            }
        }, {
            key: "_openTab",
            value: function(t) {
                var e = t.find('[role="tab"]')
                  , n = e.attr("data-tabs-target") || e[0].hash.slice(1)
                  , i = this.$tabContent.find("#".concat(n));
                t.addClass("".concat(this.options.linkActiveClass)),
                e.attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }),
                i.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")
            }
        }, {
            key: "_collapseTab",
            value: function(t) {
                var e = t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
                    "aria-selected": "false",
                    tabindex: -1
                });
                r()("#".concat(e.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({
                    "aria-hidden": "true"
                })
            }
        }, {
            key: "_collapse",
            value: function() {
                var t = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
                t.length && (this._collapseTab(t),
                this.$element.trigger("collapse.zf.tabs", [t]))
            }
        }, {
            key: "selectTab",
            value: function(t, e) {
                var n, i;
                (n = "object" === s(t) ? t[0].id : t).indexOf("#") < 0 ? i = "#".concat(n) : (i = n,
                n = n.slice(1));
                var r = this.$tabTitles.has('[href$="'.concat(i, '"],[data-tabs-target="').concat(n, '"]')).first();
                this._handleTabChange(r, e)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var t = 0
                  , e = this;
                this.$tabContent.find(".".concat(this.options.panelClass)).css("height", "").each((function() {
                    var n = r()(this)
                      , i = n.hasClass("".concat(e.options.panelActiveClass));
                    i || n.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var s = this.getBoundingClientRect().height;
                    i || n.css({
                        visibility: "",
                        display: ""
                    }),
                    t = s > t ? s : t
                }
                )).css("height", "".concat(t, "px"))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(),
                this.options.matchHeight && null != this._setHeightMqHandler && r()(window).off("changed.zf.mediaquery", this._setHeightMqHandler),
                this.options.deepLink && r()(window).off("hashchange", this._checkDeepLink),
                this.onLoadListener && r()(window).off(this.onLoadListener)
            }
        }]),
        e
    }();
    Lt.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    };
    var Pt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, t.data(), n),
                this.className = "",
                this.className = "Toggler",
                tt.init(r.a),
                this._init(),
                this._events()
            }
        }, {
            key: "_init",
            value: function() {
                var t, e = this.$element[0].id, n = r()('[data-open~="'.concat(e, '"], [data-close~="').concat(e, '"], [data-toggle~="').concat(e, '"]'));
                if (this.options.animate)
                    t = this.options.animate.split(" "),
                    this.animationIn = t[0],
                    this.animationOut = t[1] || null,
                    n.attr("aria-expanded", !this.$element.is(":hidden"));
                else {
                    if ("string" != typeof (t = this.options.toggler) || !t.length)
                        throw new Error("The 'toogler' option containing the target class is required, got \"".concat(t, '"'));
                    this.className = "." === t[0] ? t.slice(1) : t,
                    n.attr("aria-expanded", this.$element.hasClass(this.className))
                }
                n.each((function(t, n) {
                    var i = r()(n)
                      , s = i.attr("aria-controls") || "";
                    new RegExp("\\b".concat(m(e), "\\b")).test(s) || i.attr("aria-controls", s ? "".concat(s, " ").concat(e) : e)
                }
                ))
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var t = this.$element.hasClass(this.className);
                t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"),
                this._updateARIA(t),
                this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var t = this;
                this.$element.is(":hidden") ? q.animateIn(this.$element, this.animationIn, (function() {
                    t._updateARIA(!0),
                    this.trigger("on.zf.toggler"),
                    this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
                )) : q.animateOut(this.$element, this.animationOut, (function() {
                    t._updateARIA(!1),
                    this.trigger("off.zf.toggler"),
                    this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
                ))
            }
        }, {
            key: "_updateARIA",
            value: function(t) {
                var e = this.$element[0].id;
                r()('[data-open="'.concat(e, '"], [data-close="').concat(e, '"], [data-toggle="').concat(e, '"]')).attr({
                    "aria-expanded": !!t
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.toggler")
            }
        }]),
        e
    }();
    Pt.defaults = {
        toggler: void 0,
        animate: !1
    };
    var Dt = function(t) {
        function e() {
            return o(this, e),
            d(this, u(e).apply(this, arguments))
        }
        return c(e, pt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = t,
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.className = "Tooltip",
                this.isActive = !1,
                this.isClick = !1,
                tt.init(r.a),
                this._init()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element.attr("aria-describedby") || v(6, "tooltip");
                this.options.tipText = this.options.tipText || this.$element.attr("title"),
                this.template = this.options.template ? r()(this.options.template) : this._buildTemplate(t),
                this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(),
                this.$element.attr({
                    title: "",
                    "aria-describedby": t,
                    "data-yeti-box": t,
                    "data-toggle": t,
                    "data-resize": t
                }).addClass(this.options.triggerClass),
                f(u(e.prototype), "_init", this).call(this),
                this._events()
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                var t = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g)
                  , e = this.$element[0].className;
                return this.$element[0]instanceof SVGElement && (e = e.baseVal),
                t ? t[0] : "top"
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                return "center"
            }
        }, {
            key: "_getHOffset",
            value: function() {
                return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset
            }
        }, {
            key: "_getVOffset",
            value: function() {
                return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset
            }
        }, {
            key: "_buildTemplate",
            value: function(t) {
                var e = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
                return r()("<div></div>").addClass(e).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: t
                })
            }
        }, {
            key: "_setPosition",
            value: function() {
                f(u(e.prototype), "_setPosition", this).call(this, this.$element, this.template)
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !w.is(this.options.showOn))
                    return !1;
                this.template.css("visibility", "hidden").show(),
                this._setPosition(),
                this.template.removeClass("top bottom left right").addClass(this.position),
                this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment),
                this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")),
                this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }),
                this.isActive = !0,
                this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, (function() {}
                )),
                this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var t = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, (function() {
                    t.isActive = !1,
                    t.isClick = !1
                }
                )),
                this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this
                  , e = "ontouchstart"in window || void 0 !== window.ontouchstart
                  , n = (this.template,
                !1);
                e && this.options.disableForTouch || (this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", (function(e) {
                    t.isActive || (t.timeout = setTimeout((function() {
                        t.show()
                    }
                    ), t.options.hoverDelay))
                }
                )).on("mouseleave.zf.tooltip", b((function(e) {
                    clearTimeout(t.timeout),
                    (!n || t.isClick && !t.options.clickOpen) && t.hide()
                }
                ))),
                e && this.$element.on("tap.zf.tooltip touchend.zf.tooltip", (function(e) {
                    t.isActive ? t.hide() : t.show()
                }
                )),
                this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", (function(e) {
                    t.isClick || (t.isClick = !0,
                    !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                }
                )) : this.$element.on("mousedown.zf.tooltip", (function(e) {
                    t.isClick = !0
                }
                )),
                this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }),
                this.$element.on("focus.zf.tooltip", (function(e) {
                    if (n = !0,
                    t.isClick)
                        return t.options.clickOpen || (n = !1),
                        !1;
                    t.show()
                }
                )).on("focusout.zf.tooltip", (function(e) {
                    n = !1,
                    t.isClick = !1,
                    t.hide()
                }
                )).on("resizeme.zf.trigger", (function() {
                    t.isActive && t._setPosition()
                }
                )))
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),
                this.template.remove()
            }
        }]),
        e
    }();
    Dt.defaults = {
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        disableForTouch: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !1,
        vOffset: 0,
        hOffset: 0,
        tooltipHeight: 14,
        tooltipWidth: 12,
        allowHtml: !1
    };
    var qt = {
        tabs: {
            cssClass: "tabs",
            plugin: Lt,
            open: function(t, e) {
                return t.selectTab(e)
            },
            close: null,
            toggle: null
        },
        accordion: {
            cssClass: "accordion",
            plugin: ot,
            open: function(t, e) {
                return t.down(r()(e))
            },
            close: function(t, e) {
                return t.up(r()(e))
            },
            toggle: function(t, e) {
                return t.toggle(r()(e))
            }
        }
    }
      , Ht = function(t) {
        function e(t, n) {
            var i;
            return o(this, e),
            d(i = d(this, u(e).call(this, t, n)), i.options.reflow && i.storezfData || h(i))
        }
        return c(e, nt),
        l(e, [{
            key: "_setup",
            value: function(t, n) {
                this.$element = r()(t),
                this.$element.data("zfPluginBase", this),
                this.options = r.a.extend({}, e.defaults, this.$element.data(), n),
                this.rules = this.$element.data("responsive-accordion-tabs"),
                this.currentMq = null,
                this.currentRule = null,
                this.currentPlugin = null,
                this.className = "ResponsiveAccordionTabs",
                this.$element.attr("id") || this.$element.attr("id", v(6, "responsiveaccordiontabs")),
                this._init(),
                this._events()
            }
        }, {
            key: "_init",
            value: function() {
                if (w._init(),
                "string" == typeof this.rules) {
                    for (var t = {}, e = this.rules.split(" "), n = 0; n < e.length; n++) {
                        var i = e[n].split("-")
                          , s = i.length > 1 ? i[0] : "small"
                          , o = i.length > 1 ? i[1] : i[0];
                        null !== qt[o] && (t[s] = qt[o])
                    }
                    this.rules = t
                }
                this._getAllOptions(),
                r.a.isEmptyObject(this.rules) || this._checkMediaQueries()
            }
        }, {
            key: "_getAllOptions",
            value: function() {
                for (var t in this.allOptions = {},
                qt)
                    if (qt.hasOwnProperty(t)) {
                        var e = qt[t];
                        try {
                            var n = r()("<ul></ul>")
                              , i = new e.plugin(n,this.options);
                            for (var s in i.options)
                                if (i.options.hasOwnProperty(s) && "zfPlugin" !== s) {
                                    var o = i.options[s];
                                    this.allOptions[s] = o
                                }
                            i.destroy()
                        } catch (t) {}
                    }
            }
        }, {
            key: "_events",
            value: function() {
                this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this),
                r()(window).on("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var t, e = this;
                r.a.each(this.rules, (function(e) {
                    w.atLeast(e) && (t = e)
                }
                )),
                t && (this.currentPlugin instanceof this.rules[t].plugin || (r.a.each(qt, (function(t, n) {
                    e.$element.removeClass(n.cssClass)
                }
                )),
                this.$element.addClass(this.rules[t].cssClass),
                this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData),
                this.currentPlugin.destroy()),
                this._handleMarkup(this.rules[t].cssClass),
                this.currentRule = this.rules[t],
                this.currentPlugin = new this.currentRule.plugin(this.$element,this.options),
                this.storezfData = this.currentPlugin.$element.data("zfPlugin")))
            }
        }, {
            key: "_handleMarkup",
            value: function(t) {
                var e = this
                  , n = "accordion"
                  , i = r()("[data-tabs-content=" + this.$element.attr("id") + "]");
                if (i.length && (n = "tabs"),
                n !== t) {
                    var s = e.allOptions.linkClass ? e.allOptions.linkClass : "tabs-title"
                      , o = e.allOptions.panelClass ? e.allOptions.panelClass : "tabs-panel";
                    this.$element.removeAttr("role");
                    var a = this.$element.children("." + s + ",[data-accordion-item]").removeClass(s).removeClass("accordion-item").removeAttr("data-accordion-item")
                      , l = a.children("a").removeClass("accordion-title");
                    if ("tabs" === n ? (i = i.children("." + o).removeClass(o).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected") : i = a.children("[data-tab-content]").removeClass("accordion-content"),
                    i.css({
                        display: "",
                        visibility: ""
                    }),
                    a.css({
                        display: "",
                        visibility: ""
                    }),
                    "accordion" === t)
                        i.each((function(t, n) {
                            r()(n).appendTo(a.get(t)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                                height: ""
                            }),
                            r()("[data-tabs-content=" + e.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + e.$element.attr("id") + '"></div>').detach(),
                            a.addClass("accordion-item").attr("data-accordion-item", ""),
                            l.addClass("accordion-title")
                        }
                        ));
                    else if ("tabs" === t) {
                        var c = r()("[data-tabs-content=" + e.$element.attr("id") + "]")
                          , u = r()("#tabs-placeholder-" + e.$element.attr("id"));
                        u.length ? (c = r()('<div class="tabs-content"></div>').insertAfter(u).attr("data-tabs-content", e.$element.attr("id")),
                        u.remove()) : c = r()('<div class="tabs-content"></div>').insertAfter(e.$element).attr("data-tabs-content", e.$element.attr("id")),
                        i.each((function(t, e) {
                            var n = r()(e).appendTo(c).addClass(o)
                              , i = l.get(t).hash.slice(1)
                              , s = r()(e).attr("id") || v(6, "accordion");
                            i !== s && ("" !== i ? r()(e).attr("id", i) : (i = s,
                            r()(e).attr("id", i),
                            r()(l.get(t)).attr("href", r()(l.get(t)).attr("href").replace("#", "") + "#" + i))),
                            r()(a.get(t)).hasClass("is-active") && n.addClass("is-active")
                        }
                        )),
                        a.addClass(s)
                    }
                }
            }
        }, {
            key: "open",
            value: function(t) {
                var e;
                if (this.currentRule && "function" == typeof this.currentRule.open)
                    return (e = this.currentRule).open.apply(e, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)))
            }
        }, {
            key: "close",
            value: function(t) {
                var e;
                if (this.currentRule && "function" == typeof this.currentRule.close)
                    return (e = this.currentRule).close.apply(e, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)))
            }
        }, {
            key: "toggle",
            value: function(t) {
                var e;
                if (this.currentRule && "function" == typeof this.currentRule.toggle)
                    return (e = this.currentRule).toggle.apply(e, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.currentPlugin && this.currentPlugin.destroy(),
                r()(window).off("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
            }
        }]),
        e
    }();
    Ht.defaults = {},
    k.addToJquery(r.a),
    k.rtl = p,
    k.GetYoDigits = v,
    k.transitionend = g,
    k.RegExpEscape = m,
    k.onLoad = y,
    k.Box = $,
    k.onImagesLoaded = S,
    k.Keyboard = L,
    k.MediaQuery = w,
    k.Motion = q,
    k.Move = H,
    k.Nest = j,
    k.Timer = I,
    W.init(r.a),
    tt.init(r.a, k),
    w._init(),
    k.plugin(st, "Abide"),
    k.plugin(ot, "Accordion"),
    k.plugin(at, "AccordionMenu"),
    k.plugin(lt, "Drilldown"),
    k.plugin(vt, "Dropdown"),
    k.plugin(mt, "DropdownMenu"),
    k.plugin(gt, "Equalizer"),
    k.plugin(yt, "Interchange"),
    k.plugin(wt, "Magellan"),
    k.plugin(kt, "OffCanvas"),
    k.plugin(Ct, "Orbit"),
    k.plugin($t, "ResponsiveMenu"),
    k.plugin(_t, "ResponsiveToggle"),
    k.plugin(Tt, "Reveal"),
    k.plugin(St, "Slider"),
    k.plugin(bt, "SmoothScroll"),
    k.plugin(Et, "Sticky"),
    k.plugin(Lt, "Tabs"),
    k.plugin(Pt, "Toggler"),
    k.plugin(Dt, "Tooltip"),
    k.plugin(Ht, "ResponsiveAccordionTabs"),
    e.a = k
}
, function(t, e, n) {
    var i = n(48)
      , r = "object" == typeof self && self && self.Object === Object && self
      , s = i || r || Function("return this")();
    t.exports = s
}
, function(t, e, n) {
    var i = n(17).Symbol;
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(20);
        e.a = function() {
            var e = t(".header");
            new i.a(e).init()
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(3)
          , r = n.n(i)
          , s = n(4)
          , o = n.n(s)
          , a = n(16)
          , l = n(21)
          , c = n.n(l)
          , u = function() {
            function e(n) {
                r()(this, e),
                this.isMobile = !1,
                this.expanded = !1,
                this.stuckCounter = 0,
                this.$body = t("body"),
                this.stuckThreshold = 2,
                this.$window = t(window),
                t(document).foundation(),
                this.inTransition = !1,
                this.$container = n,
                this.expandedClass = "expanded",
                this.hamburgerActiveClass = "active",
                this.mobileSizes = ["small", "medium"],
                this.navBar = this.$container.find(".nav-bar"),
                this.$loginItem = this.$container.find(".login"),
                this.desktopSizes = ["large", "xlarge", "xxlarge"],
                this.$mobileNavigation = this.$container.find(".mobile-menu"),
                this.$hamburguer = this.$container.find(".hamburger-container"),
                this.$mobileNavBar = this.$container.find(".mobile-nav-bar"),
                this.activeMenuItemId = this.$container.data("active-menu-item-id"),
                this.isHomePage = this.$container.data("is-homepage")
            }
            return o()(e, [{
                key: "init",
                value: function() {
                    this.bindMobileEvents(),
                    this.bindLoginRedirection(),
                    this.bindHamburgerEvents(),
                    this.bindScrollToEvents(),
                    this.handleDiscoverActiveState()
                }
            }, {
                key: "bindLoginRedirection",
                value: function() {
                    this.isHomePage || this.$loginItem.each((function(e, n) {
                        var i = t(n).find("a")
                          , r = i.prop("href")
                          , s = encodeURIComponent(window.location.pathname + window.location.search);
                        i.attr("href", "".concat(r, "?returnUrl=").concat(s))
                    }
                    ))
                }
            }, {
                key: "handleDiscoverActiveState",
                value: function() {
                    var e = t(".menu-item-".concat(this.activeMenuItemId));
                    e && e.addClass("active")
                }
            }, {
                key: "bindHamburgerEvents",
                value: function() {
                    var t = this;
                    this.$hamburguer.on("click", (function() {
                        !t.isMobile || t.expanded || t.inTransition ? t.isMobile && t.expanded && !t.inTransition ? (t.inTransition = !0,
                        t.stuckCounter = 0,
                        t.contractMenu((function() {
                            t.expanded = !1,
                            t.inTransition = !1
                        }
                        ))) : t.isMobile && !t.expanded && t.inTransition ? (t.stuckCounter += 1,
                        t.stuckCounter >= t.stuckThreshold && (t.inTransition = !1,
                        t.expanded = !t.expanded)) : !t.isMobile && t.expanded && t.contractMenu((function() {
                            t.expanded = !1,
                            t.inTransition = !1
                        }
                        )) : (t.inTransition = !0,
                        t.stuckCounter = 0,
                        t.expandMenu((function() {
                            t.expanded = !0,
                            t.inTransition = !1
                        }
                        )))
                    }
                    ))
                }
            }, {
                key: "bindMobileEvents",
                value: function() {
                    var t = this;
                    (a.a.MediaQuery.is("small only") || a.a.MediaQuery.is("medium only")) && this.enableMobile(),
                    this.$window.on("changed.zf.mediaquery", (function(e, n, i) {
                        t.desktopSizes.includes(i) && t.mobileSizes.includes(n) ? t.enableMobile() : t.mobileSizes.includes(i) && t.desktopSizes.includes(n) && t.disableMobile()
                    }
                    ))
                }
            }, {
                key: "bindScrollToEvents",
                value: function() {
                    var t = this;
                    this.$window.on("scroll", c()((function() {
                        t.$window.scrollTop() > 0 ? (t.navBar.addClass("not-at-top"),
                        t.$mobileNavBar.addClass("not-at-top")) : (t.navBar.removeClass("not-at-top"),
                        t.$mobileNavBar.removeClass("not-at-top"))
                    }
                    ), 75))
                }
            }, {
                key: "disableMobile",
                value: function() {
                    var t = this;
                    this.isMobile = !1,
                    this.contractMenu((function() {
                        t.expanded = !1,
                        t.inTransition = !1
                    }
                    ))
                }
            }, {
                key: "enableMobile",
                value: function() {
                    var t = this;
                    this.isMobile = !0,
                    this.contractMenu((function() {
                        t.expanded = !1,
                        t.inTransition = !1
                    }
                    ))
                }
            }, {
                key: "expandMenu",
                value: function(t) {
                    var e = this;
                    this.$mobileNavigation.css("display", "block"),
                    this.$mobileNavigation.unbind("webkitTransitionEnd oTransitionEnd"),
                    setTimeout((function() {
                        e.$body.css("overflow", "hidden"),
                        e.$container.addClass(e.expandedClass),
                        e.$hamburguer.addClass(e.hamburgerActiveClass)
                    }
                    ), 5),
                    this.$mobileNavigation.one("webkitTransitionEnd oTransitionEnd", (function() {
                        t()
                    }
                    ))
                }
            }, {
                key: "contractMenu",
                value: function(t) {
                    var e = this;
                    this.$mobileNavigation.unbind("webkitTransitionEnd oTransitionEnd"),
                    setTimeout((function() {
                        e.$container.removeClass(e.expandedClass),
                        e.$hamburguer.removeClass(e.hamburgerActiveClass)
                    }
                    ), 5),
                    this.$mobileNavigation.one("webkitTransitionEnd oTransitionEnd", (function() {
                        e.$mobileNavigation.hide(),
                        e.$body.css("overflow", "auto"),
                        t()
                    }
                    ))
                }
            }]),
            e
        }();
        e.a = u
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    var i = n(46)
      , r = n(15);
    t.exports = function(t, e, n) {
        var s = !0
          , o = !0;
        if ("function" != typeof t)
            throw new TypeError("Expected a function");
        return r(n) && (s = "leading"in n ? !!n.leading : s,
        o = "trailing"in n ? !!n.trailing : o),
        i(t, e, {
            leading: s,
            maxWait: e,
            trailing: o
        })
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(11);
    e.a = function() {
        var t = document.querySelector(".carousel")
          , e = document.querySelector(".text-slider");
        if (t) {
            !function() {
                var t = new i.a(".glide",{
                    type: "carousel",
                    startAt: 0,
                    perView: 1,
                    autoplay: 3e3,
                    focusAt: "center",
                    breakpoints: {
                        6e3: {
                            gap: 2e3
                        }
                    },
                    animationDuration: 1e3,
                    animationTimingFunc: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
                });
                (function(t) {
                    var e = 0
                      , n = 0
                      , i = document.querySelector(".hero-module .wrapper");
                    t.on("run.before", (function(t) {
                        ">" === t.direction ? (i.style.backgroundPositionX = "calc(".concat(50, "% + ").concat(e - 300, "px)"),
                        e -= 300) : "<" === t.direction ? (i.style.backgroundPositionX = "calc(".concat(50, "% + ").concat(e + 300, "px)"),
                        e += 300) : t.steps > n ? (i.style.backgroundPositionX = "calc(".concat(50, "% + ").concat(e - 300, "px)"),
                        e -= 300,
                        n = parseInt(t.steps)) : t.steps < n ? (i.style.backgroundPositionX = "calc(".concat(50, "% + ").concat(e + 300, "px)"),
                        e += 300,
                        n = parseInt(t.steps)) : n = parseInt(t.steps)
                    }
                    ))
                }
                )(t),
                t.mount()
            }();
            for (var n = t.querySelectorAll("img"), r = 0; r < n.length; ++r)
                n[r].addEventListener("load", (function(e) {
                    t.style.opacity = 1
                }
                ))
        }
        e && new i.a(".glide",{
            type: "carousel",
            startAt: 0,
            perView: 1,
            autoplay: 4e3,
            focusAt: "center",
            breakpoints: {
                6e3: {
                    gap: 2e3
                }
            },
            animationDuration: 1500,
            animationTimingFunc: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
        }).mount()
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(10)
      , r = n(12);
    function s(t) {
        t.classList.remove("show"),
        t.classList.add("hide")
    }
    e.a = function() {
        var t = document.querySelector(".cookie-banner");
        t && (Object(i.a)("cookie-banner-accepted") ? t.classList.add("hide") : (t.classList.add("show"),
        function(t) {
            t.querySelectorAll(".agree").forEach((function(e) {
                e.addEventListener("click", (function() {
                    document.cookie = "cookie-banner-accepted=1;max-age=31536000;path=/",
                    Object(r.b)(),
                    s(t),
                    "1" === refreshCookieBanner && location.reload()
                }
                ))
            }
            ))
        }(t),
        function(t) {
            t.querySelector(".disagree").addEventListener("click", (function() {
                document.cookie = "cookie-banner-accepted=0;max-age=31536000;path=/",
                Object(r.a)(),
                s(t)
            }
            ))
        }(t)))
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        e.a = function() {
            var e = t(".posts-list")
              , n = t(".load-more")
              , i = t(".latest-posts .button-container");
            if (n) {
                var r = e.data("page")
                  , s = e.data("max")
                  , o = e.data("category") ? e.data("category") : ""
                  , a = e.data("tag") ? e.data("tag") : ""
                  , l = e.data("is-category")
                  , c = e.data("site-url");
                r == s && i.hide(),
                n.on("click", (function(e) {
                    e.preventDefault(),
                    t.ajax({
                        type: "get",
                        dataType: "json",
                        url: "".concat(c, "/discover/get-posts"),
                        data: {
                            action: "load_more",
                            max_page: s,
                            current_page: r,
                            is_category: l,
                            category: o,
                            tag: a
                        },
                        success: function(e) {
                            e.data.forEach((function(e) {
                                t('<div class="post-card">\n                            <a href="'.concat(e.link, '" class="post-image" style="background-image: url(').concat(e.thumbnail, ')"></a>\n                            <div class="content">\n                                <p class="post-title">').concat(e.title, '</p>\n                                <div class="info-container">\n                                    <div class="date-container">\n                                        <p class="date">').concat(e.date, " , by ").concat(e.author, '</p>\n                                    </div>\n                                    <a class="read-more-anchor" href="').concat(e.link, '">Read More</a>\n                                </div>\n                                <p class="description">').concat(e.description, "</p>\n                            </div>\n                        </div>")).appendTo("#ajax-posts")
                            }
                            )),
                            (r += 1) == s && i.hide()
                        },
                        error: function(t) {
                            console.log("No more Posts!")
                        }
                    })
                }
                ))
            }
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        !function() {
            var t = document.querySelectorAll(".accordion")
              , e = document.querySelector("body");
            t.forEach((function(t, n) {
                e.classList.contains("single-launches") && 0 === n && t.classList.add("active"),
                t.querySelector(".header").addEventListener("click", (function() {
                    t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active")
                }
                ))
            }
            ))
        }()
    }
}
, function(t, e, n) {
    "use strict";
    var i = document.querySelector(".header__stores");
    function r() {
        var t = navigator.userAgent || navigator.vendor || window.opera;
        return /android/i.test(t) ? "Android" : /iPad|iPhone|iPod/.test(t) && !window.MSStream ? "iOS" : "unknown"
    }
    e.a = function() {
        i && ("Android" === r() ? i.classList.add("show-android") : "iOS" === r() && i.classList.add("show-ios"))
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        n(56),
        e.a = function() {
            appear({
                init: function() {},
                elements: function() {
                    return document.getElementsByClassName("scroll-track")
                },
                appear: function(e) {
                    t(e).addClass("in-viewport")
                },
                bounds: 50,
                reappear: !0
            })
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(6)
          , l = n(7);
        function c() {
            return (c = o()(r.a.mark((function t(e, n) {
                var i, s, o, c, h, f, p, v, m, y;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return i = new l.a,
                            s = new a.a,
                            o = {},
                            t.next = 4,
                            i.getMarketsObjet();
                        case 4:
                            if (c = t.sent,
                            !n) {
                                t.next = 11;
                                break
                            }
                            return t.next = 8,
                            i.getAuthMarketsPermissions();
                        case 8:
                            t.t0 = t.sent,
                            t.next = 14;
                            break;
                        case 11:
                            return t.next = 13,
                            i.getAnonymousMarketsPermissions();
                        case 13:
                            t.t0 = t.sent;
                        case 14:
                            if (h = t.t0,
                            !n) {
                                t.next = 21;
                                break
                            }
                            return t.next = 18,
                            i.getAuthInstantMarketsPermissions();
                        case 18:
                            t.t1 = t.sent,
                            t.next = 24;
                            break;
                        case 21:
                            return t.next = 23,
                            i.getAnonymousInstantMarketsPermissions();
                        case 23:
                            t.t1 = t.sent;
                        case 24:
                            return f = t.t1,
                            t.next = 27,
                            i.getTickersObjetPermissions(h);
                        case 27:
                            return p = t.sent,
                            t.next = 30,
                            i.getMarketsSummaries();
                        case 30:
                            return v = t.sent,
                            t.next = 33,
                            s.asyncForEach(v, (function(t) {
                                var e, n = s.splitMarketSymbol(t.symbol);
                                if ("BTC" === n.base)
                                    p[t.symbol] && c[t.symbol] && h[t.symbol].view && (o[t.symbol] = {
                                        base: n.base,
                                        quote: n.quote,
                                        market: t.symbol,
                                        BTCQuoteVolume: parseFloat(t.volume),
                                        lastPrice: p[t.symbol].lastPrice,
                                        percentChange: t.percentChange,
                                        prohibitedIn: c[t.symbol].prohibitedIn,
                                        view: h[t.symbol].view,
                                        buy: h[t.symbol].buy,
                                        sell: h[t.symbol].sell,
                                        instant: null !== (e = f[t.symbol]) && void 0 !== e && e
                                    });
                                else if ("BTC" !== n.base && "BTC" !== n.quote) {
                                    if (p["".concat(n.quote, "-BTC")]) {
                                        if (p[t.symbol] && c[t.symbol] && h[t.symbol].view) {
                                            var i, r = parseFloat(t.quoteVolume), a = parseFloat(p["".concat(n.quote, "-BTC")].lastPrice);
                                            o[t.symbol] = {
                                                base: n.base,
                                                quote: n.quote,
                                                market: t.symbol,
                                                BTCQuoteVolume: 0 !== r && 0 !== a ? r * a : 0,
                                                lastPrice: p[t.symbol].lastPrice,
                                                percentChange: t.percentChange,
                                                prohibitedIn: c[t.symbol].prohibitedIn,
                                                view: h[t.symbol].view,
                                                buy: h[t.symbol].buy,
                                                sell: h[t.symbol].sell,
                                                instant: null !== (i = f[t.symbol]) && void 0 !== i && i
                                            }
                                        }
                                    } else if (p["BTC-".concat(n.quote)] && p[t.symbol] && c[t.symbol] && h[t.symbol].view) {
                                        var l, u = parseFloat(t.quoteVolume), d = parseFloat(p["BTC-".concat(n.quote)].lastPrice);
                                        o[t.symbol] = {
                                            base: n.base,
                                            quote: n.quote,
                                            market: t.symbol,
                                            BTCQuoteVolume: 0 !== u && 0 !== d ? u / d : 0,
                                            lastPrice: p[t.symbol].lastPrice,
                                            percentChange: t.percentChange,
                                            prohibitedIn: c[t.symbol].prohibitedIn,
                                            view: h[t.symbol].view,
                                            buy: h[t.symbol].buy,
                                            sell: h[t.symbol].sell,
                                            instant: null !== (l = f[t.symbol]) && void 0 !== l && l
                                        }
                                    }
                                } else {
                                    var v;
                                    p[t.symbol] && c[t.symbol] && h[t.symbol].view && (o[t.symbol] = {
                                        base: n.base,
                                        quote: n.quote,
                                        market: t.symbol,
                                        BTCQuoteVolume: parseFloat(t.quoteVolume),
                                        lastPrice: p[t.symbol].lastPrice,
                                        percentChange: t.percentChange,
                                        prohibitedIn: c[t.symbol].prohibitedIn,
                                        view: h[t.symbol].view,
                                        buy: h[t.symbol].buy,
                                        sell: h[t.symbol].sell,
                                        instant: null !== (v = f[t.symbol]) && void 0 !== v && v
                                    })
                                }
                            }
                            ));
                        case 33:
                            return t.next = 35,
                            u(o);
                        case 35:
                            return m = t.sent,
                            t.next = 38,
                            d(m, e, s, i);
                        case 38:
                            return y = t.sent,
                            t.next = 41,
                            g(y, s);
                        case 41:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function u(t) {
            return h.apply(this, arguments)
        }
        function h() {
            return (h = o()(r.a.mark((function t(e) {
                var n, i;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            for (i in n = [],
                            e)
                                e.hasOwnProperty(i) && n.push({
                                    key: i,
                                    value: e[i]
                                });
                            return n.sort((function(t, e) {
                                return e.value.BTCQuoteVolume - t.value.BTCQuoteVolume
                            }
                            )),
                            t.abrupt("return", n);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function d(t, e, n, i) {
            return f.apply(this, arguments)
        }
        function f() {
            return (f = o()(r.a.mark((function t(e, n, i, s) {
                var a, l, c;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return a = 0,
                            l = {},
                            c = [],
                            t.next = 5,
                            i.asyncForEach(e, function() {
                                var t = o()(r.a.mark((function t(e) {
                                    var n;
                                    return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                n = e.value.base,
                                                a < 5 && !c.includes(n) && e.value.view && (l[n] = {
                                                    tickerName: e.key,
                                                    BTCQuoteVolume: e.value.BTCQuoteVolume,
                                                    lastPrice: e.value.lastPrice,
                                                    percentChange: e.value.percentChange,
                                                    buy: e.value.buy,
                                                    instant: e.value.instant
                                                },
                                                c.push(n),
                                                a++);
                                            case 2:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }());
                        case 5:
                            return t.abrupt("return", p(l, i, s));
                        case 6:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function p(t, e, n) {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = o()(r.a.mark((function t(e, n, i) {
                var s, a, l;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            i.getCurrencies();
                        case 2:
                            return s = t.sent,
                            a = {},
                            t.next = 6,
                            n.asyncForEach(s, function() {
                                var t = o()(r.a.mark((function t(n) {
                                    return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                e[n.symbol] && (a[n.symbol] = {
                                                    BTCQuoteVolume: e[n.symbol].BTCQuoteVolume,
                                                    market: e[n.symbol].tickerName,
                                                    lastPrice: e[n.symbol].lastPrice,
                                                    percentChange: e[n.symbol].percentChange,
                                                    logo: n.logoUrl,
                                                    name: n.name,
                                                    buy: e[n.symbol].buy,
                                                    instant: e[n.symbol].instant
                                                });
                                            case 1:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }());
                        case 6:
                            return t.next = 8,
                            u(a);
                        case 8:
                            return l = t.sent,
                            t.abrupt("return", l);
                        case 10:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function m(t, e) {
            return "USD" === t || "EUR" === t ? new Intl.NumberFormat("en-US",{
                currency: t
            }).format(e) : "0" !== e ? parseFloat(e.toString()).toFixed(6) : 0
        }
        function g(t, e) {
            return y.apply(this, arguments)
        }
        function y() {
            return (y = o()(r.a.mark((function e(n, i) {
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            i.asyncForEach(n, function() {
                                var e = o()(r.a.mark((function e(n) {
                                    var s, o, a, l, c, u, h, d, f, p, v, g, y, b, w, k, C, x, $, _;
                                    return r.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                s = i.splitMarketSymbol(n.value.market),
                                                o = i.getQuoteSymbol(s.quote),
                                                a = n.value.percentChange ? n.value.percentChange.replace("-", "") / 100 * n.value.lastPrice : 0,
                                                l = i.priceSign(n.value.percentChange),
                                                c = t("<a/>"),
                                                n.value.instant ? (c.attr("href", "/instant?market=".concat(s.base, "-").concat(s.quote)),
                                                c.addClass("market scroll-track")) : (c.attr("href", "/Market/Index?MarketName=".concat(s.quote, "-").concat(s.base)),
                                                c.addClass("market scroll-track")),
                                                (u = t("<div/>")).addClass("info-container"),
                                                (h = t("<div/>")).addClass("logo-container"),
                                                (d = t("<img/>")).addClass("logo-bg"),
                                                d.attr("src", n.value.logo),
                                                (f = t("<img/>")).addClass("logo"),
                                                f.attr("src", n.value.logo),
                                                (p = t("<div/>")).addClass("info"),
                                                (v = t("<div/>")).addClass("symbol-summary"),
                                                v.text(n.key),
                                                (g = t("<span/>")).addClass("currency"),
                                                g.text(s.quote),
                                                (y = t("<div/>")).addClass("name"),
                                                y.text(n.value.name),
                                                (b = t("<div/>")).addClass("price-container ".concat(l)),
                                                (w = t("<div/>")).addClass("wrapper ".concat(n.value.percentChange ? "calculable" : "no-calculable")),
                                                (k = t("<div/>")).addClass("last-price"),
                                                k.text("".concat(o).concat(m(s.quote, n.value.lastPrice))),
                                                (C = t("<div/>")).addClass("percentage-container"),
                                                (x = t("<div/>")).addClass("percentage"),
                                                x.text("".concat(n.value.percentChange ? n.value.percentChange : 0, "%")),
                                                ($ = t("<div/>")).addClass("price"),
                                                $.text("(".concat(o).concat(0 !== a ? m(s.quote, a) : 0, ")")),
                                                t("<div/>").addClass("arrow"),
                                                (_ = t("<div/>")).addClass("chevron"),
                                                h.append(d),
                                                h.append(f),
                                                u.append(h),
                                                v.append(g),
                                                p.append(y),
                                                p.append(v),
                                                u.append(p),
                                                b.append(w),
                                                b.append(_),
                                                w.append(k),
                                                w.append(C),
                                                C.append(x),
                                                C.append($),
                                                c.append(u),
                                                c.append(b),
                                                c.appendTo("#market-data");
                                            case 59:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        e.a = function() {
            var t = document.getElementById("market-data");
            if (t) {
                var e = t.dataset.location
                  , n = t.dataset.isAuth;
                e && function(t, e) {
                    c.apply(this, arguments)
                }(e, n)
            }
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    var i = n(1)
      , r = n.n(i)
      , s = n(2)
      , o = n.n(s)
      , a = n(30)
      , l = function() {
        var t = o()(r.a.mark((function t() {
            var e, n;
            return r.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        if (!(e = document.querySelector(".search-coins-module"))) {
                            t.next = 5;
                            break
                        }
                        return n = new a.a(e),
                        t.next = 5,
                        n.init();
                    case 5:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )));
        return function() {
            return t.apply(this, arguments)
        }
    }();
    e.a = l
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(3)
          , l = n.n(a)
          , c = n(4)
          , u = n.n(c)
          , h = n(6)
          , d = n(7)
          , f = function() {
            function e(t) {
                l()(this, e),
                this.$container = t,
                this.$paginate = this.$container.querySelector(".paginate"),
                this.$searchInput = this.$container.querySelector(".search-input"),
                this.wpCoins = this.$paginate ? JSON.parse(this.$paginate.dataset.sortedCoins) : "",
                this.userIsAuth = this.$paginate ? this.$paginate.dataset.userIsAuth : "",
                this.location = this.$paginate ? this.$paginate.dataset.location : "",
                this.dataCoins = {},
                this.helpers = new h.a,
                this.bittrexApi = new d.a,
                this.$filters = document.querySelectorAll(".filter-item"),
                this.$prevContainer = document.querySelector(".prev-container"),
                this.$nextContainer = document.querySelector(".next-container"),
                this.$prevArrows = this.$prevContainer.querySelectorAll(".prev"),
                this.$nextArrows = this.$nextContainer.querySelectorAll(".next"),
                this.$paginationControls = document.querySelectorAll(".arrow"),
                this.$maxNumberPage = document.querySelector(".max-page-number"),
                this.$currentPage = document.querySelector(".current-page"),
                this.$sortFilters = document.querySelectorAll(".dropdown-item"),
                this.$sortFilterCointainer = document.querySelector(".select"),
                this.chunks = [],
                this.currentData = [],
                this.filterValue = "",
                this.filterType = "",
                this.searchValue = "",
                this.maxPages = 1,
                this.currentPage = 1,
                this.categories = [],
                this.sectors = []
            }
            return u()(e, [{
                key: "init",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getCoinsData();
                                case 2:
                                    this.initialRender(),
                                    this.handleSearchInput(),
                                    this.handleClickFilters(),
                                    this.handleClickPaginationButton(),
                                    this.handleClickSortFilter();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "initialRender",
                value: function() {
                    this.sortByPrice(),
                    this.renderSortedCoins(),
                    this.paginationResponse()
                }
            }, {
                key: "getCoinsData",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e, n, i, s, o = this;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.bittrexApi.getTickersObjet();
                                case 2:
                                    return e = t.sent,
                                    t.next = 5,
                                    this.bittrexApi.getAllowedMarketSummariesBasedOnPermisions(e, this.location, !1);
                                case 5:
                                    n = t.sent,
                                    i = Object.entries(this.wpCoins),
                                    s = {},
                                    i.forEach((function(t) {
                                        var i, r, a, l, c = t[0], u = t[1], h = n[c] ? n[c].markets : "", d = Object.entries(h), f = e["BTC-USD"].lastPrice, p = o.helpers.getTotalVolume(h), v = o.helpers.getCurrencyLastPrice(c, f, e);
                                        d.length > 0 && (s[c] = {
                                            symbol: c,
                                            volume: null != p ? p : 0,
                                            price: null != v ? v : 0,
                                            name: u.name,
                                            permalink: u.permalink,
                                            logo: null !== (i = u.logo) && void 0 !== i ? i : "",
                                            tagline: null !== (r = u.tagline) && void 0 !== r ? r : "",
                                            sector: null !== (a = u.sector) && void 0 !== a ? a : "",
                                            category: null !== (l = u.category) && void 0 !== l ? l : ""
                                        },
                                        o.categories.includes(u.category) || o.categories.push(u.category),
                                        o.sectors.includes(u.sector) || o.sectors.push(u.sector))
                                    }
                                    )),
                                    this.dataCoins = s;
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "handleSearchInput",
                value: function() {
                    var t = this;
                    this.$searchInput.addEventListener("input", (function(e) {
                        t.searchValue = e.target.value.trim(),
                        "" !== e.target.value ? (t.currentPage = 1,
                        t.disableSortFilter(),
                        t.handleSearch(e.target.value)) : (t.currentPage = 1,
                        t.sortByPrice(),
                        t.renderSortedCoins(),
                        t.paginationResponse(),
                        t.enableSortFilter(),
                        t.setPriceSortFilter())
                    }
                    ))
                }
            }, {
                key: "handleSearch",
                value: function(t) {
                    var e = Object.entries(this.dataCoins).filter((function(e) {
                        return e[1].name.toLowerCase().startsWith(t.toLowerCase()) || e[1].symbol.toLowerCase().startsWith(t.toLowerCase())
                    }
                    ));
                    this.chunks = this.chunkGenerator(e, 15),
                    this.renderSortedCoins(),
                    this.paginationResponse(),
                    this.resetFilterStates(),
                    this.setAllFilter()
                }
            }, {
                key: "handleClickFilters",
                value: function() {
                    var t = this;
                    this.$filters.forEach((function(e) {
                        var n = e.dataset.filterType
                          , i = e.dataset.name;
                        "category" === n && (t.categories.includes(i) || (e.style.display = "none")),
                        "sector" === n && (t.sectors.includes(i) || (e.style.display = "none")),
                        e.addEventListener("click", (function() {
                            t.filterType = e.dataset.filterType,
                            t.filterValue = e.dataset.filterValue,
                            t.resetFilterStates(),
                            "all" === t.filterType ? (t.currentPage = 1,
                            t.sortByPrice(!1),
                            t.renderSortedCoins(),
                            t.enableSortFilter(),
                            t.setPriceSortFilter()) : "volume" === t.filterType ? (t.currentPage = 1,
                            t.sortByVolume(),
                            t.renderSortedCoins(),
                            t.disableSortFilter()) : "sector" === t.filterType ? (t.currentPage = 1,
                            t.filterBySector(),
                            t.renderSortedCoins(),
                            t.enableSortFilter(),
                            t.setPriceSortFilter()) : (t.currentPage = 1,
                            t.filterByCategory(),
                            t.renderSortedCoins(),
                            t.enableSortFilter(),
                            t.setPriceSortFilter()),
                            e.classList.add("active"),
                            t.paginationResponse()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "setAllFilter",
                value: function() {
                    this.$filters.forEach((function(t) {
                        "all" === t.dataset.filterType && "all" === t.dataset.filterValue && t.classList.add("active")
                    }
                    )),
                    this.currentFilter = "all"
                }
            }, {
                key: "deactivateSortFilter",
                value: function() {
                    this.$sortFilters.forEach((function(t) {
                        t.classList.remove("active"),
                        t.classList.add("deactivated")
                    }
                    ))
                }
            }, {
                key: "resetFilterStates",
                value: function() {
                    this.$filters.forEach((function(t) {
                        t.classList.remove("active")
                    }
                    ))
                }
            }, {
                key: "resetSortFilters",
                value: function() {
                    this.$sortFilters.forEach((function(t) {
                        t.classList.remove("active")
                    }
                    ))
                }
            }, {
                key: "handleClickSortFilter",
                value: function() {
                    var t = this;
                    this.$sortFilters.forEach((function(e) {
                        e.addEventListener("click", (function() {
                            t.resetSortFilters(),
                            e.classList.contains("price") ? (t.sortByPrice(!0),
                            t.renderSortedCoins()) : e.classList.contains("symbol") && (t.sortBySymbol(!0),
                            t.renderSortedCoins()),
                            e.classList.add("active"),
                            t.paginationResponse()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "disableSortFilter",
                value: function() {
                    this.resetSortFilters(),
                    this.$sortFilterCointainer.classList.add("disabled")
                }
            }, {
                key: "enableSortFilter",
                value: function() {
                    this.resetSortFilters(),
                    this.$sortFilterCointainer.classList.remove("disabled")
                }
            }, {
                key: "setPriceSortFilter",
                value: function() {
                    this.$sortFilters.forEach((function(t) {
                        t.classList.contains("price") && t.classList.add("active")
                    }
                    ))
                }
            }, {
                key: "chunkGenerator",
                value: function(t, e) {
                    if (!t)
                        return [];
                    var n = t.slice(0, e);
                    return n.length ? [n].concat(this.chunkGenerator(t.slice(e, t.length), e)) : t
                }
            }, {
                key: "sortByPrice",
                value: function(t) {
                    var e = t ? this.currentData : Object.entries(this.dataCoins);
                    this.currentData = e.sort((function(t, e) {
                        return e[1].price - t[1].price
                    }
                    )),
                    this.chunks = this.chunkGenerator(this.currentData, 15)
                }
            }, {
                key: "sortByVolume",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    this.currentData = t.sort((function(t, e) {
                        return e[1].volume - t[1].volume
                    }
                    )),
                    this.chunks = this.chunkGenerator(this.currentData, 15)
                }
            }, {
                key: "sortByName",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    this.currentData = t.sort((function(t, e) {
                        return e[1].name < t[1].name
                    }
                    )),
                    this.chunks = this.chunkGenerator(this.currentData, 15)
                }
            }, {
                key: "sortBySymbol",
                value: function(t) {
                    var e = t ? this.currentData : Object.entries(this.dataCoins);
                    this.currentData = e.sort((function(t, e) {
                        return t[0] > e[0] ? 1 : -1
                    }
                    )),
                    this.chunks = this.chunkGenerator(this.currentData, 15)
                }
            }, {
                key: "filterBySector",
                value: function() {
                    var t = this
                      , e = Object.entries(this.dataCoins);
                    this.currentData = e.filter((function(e) {
                        return e[1].sector.replace(/ /g, "").toLowerCase() === t.filterValue.toLowerCase()
                    }
                    )),
                    this.sortByPrice(!0),
                    this.chunks = this.chunkGenerator(this.currentData, 15)
                }
            }, {
                key: "filterByCategory",
                value: function() {
                    var t = this
                      , e = Object.entries(this.dataCoins);
                    this.currentData = e.filter((function(e) {
                        return e[1].category.replace(/ /g, "").toLowerCase() === t.filterValue.toLowerCase()
                    }
                    )),
                    this.sortByPrice(!0),
                    this.chunks = this.chunkGenerator(this.currentData, 15)
                }
            }, {
                key: "renderSortedCoins",
                value: function() {
                    var e = this.chunks[this.currentPage - 1];
                    this.maxPages = this.chunks.length,
                    t("#search-results").html(this.createCoinMarkup(e))
                }
            }, {
                key: "createCoinMarkup",
                value: function(t) {
                    var e = "";
                    return t && t.length > 0 ? t.forEach((function(t) {
                        e += '<a href="'.concat(t[1].permalink, '" class="coin-card">\n                        <div class="coin-logo-container">\n                            <img class="logo-bg" src="').concat(t[1].logo, '" alt="">\n                            <img class="logo" src="').concat(t[1].logo, '" alt="">\n                        </div>\n                        <div class="title-container">\n                            <div class="name">').concat(t[1].name, '</div>\n                            <div class="symbol">').concat(t[1].symbol, '</div>\n                        </div>\n                        <div class="tag-container">\n                            <div class="tag">').concat(t[1].tagline ? t[1].tagline : "", "</div>\n                        </div>\n                    </a>")
                    }
                    )) : e = "<div></div>",
                    e
                }
            }, {
                key: "handleClickPaginationButton",
                value: function() {
                    var t = this;
                    this.$paginationControls.forEach((function(e) {
                        e.addEventListener("click", (function() {
                            e.classList.contains("prev") ? e.classList.contains("first-page") ? (t.currentPage = 1,
                            t.renderSortedCoins()) : (t.currentPage = t.currentPage - 1,
                            t.renderSortedCoins()) : e.classList.contains("next") && (e.classList.contains("last-page") ? (t.currentPage = t.maxPages,
                            t.renderSortedCoins()) : (t.currentPage = t.currentPage + 1,
                            t.renderSortedCoins())),
                            t.paginationResponse()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "paginationResponse",
                value: function() {
                    this.$maxNumberPage.textContent = 0 !== this.maxPages ? this.maxPages.toString() : "0",
                    this.$currentPage.textContent = this.currentPage.toString(),
                    1 === this.maxPages && (this.$prevArrows.forEach((function(t) {
                        t.disabled || (t.disabled = !0)
                    }
                    )),
                    this.$nextArrows.forEach((function(t) {
                        t.disabled || (t.disabled = !0)
                    }
                    ))),
                    this.maxPages > 1 && this.currentPage > 1 && (this.$prevArrows.forEach((function(t) {
                        t.disabled && (t.disabled = !1)
                    }
                    )),
                    this.$nextArrows.forEach((function(t) {
                        t.disabled && (t.disabled = !1)
                    }
                    ))),
                    this.maxPages > 1 && 1 === this.currentPage && (this.$prevArrows.forEach((function(t) {
                        t.disabled || (t.disabled = !0)
                    }
                    )),
                    this.$nextArrows.forEach((function(t) {
                        t.disabled && (t.disabled = !1)
                    }
                    ))),
                    this.maxPages > 1 && this.maxPages === this.currentPage && (this.$prevArrows.forEach((function(t) {
                        t.disabled && (t.disabled = !1)
                    }
                    )),
                    this.$nextArrows.forEach((function(t) {
                        t.disabled || (t.disabled = !0)
                    }
                    ))),
                    0 === this.maxPages && (this.$prevArrows.forEach((function(t) {
                        t.disabled || (t.disabled = !0)
                    }
                    )),
                    this.$nextArrows.forEach((function(t) {
                        t.disabled || (t.disabled = !0)
                    }
                    )))
                }
            }]),
            e
        }();
        e.a = f
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        e.a = function() {
            var e = document.querySelector(".coin-content");
            e && (function(t) {
                window.addEventListener("scroll", (function(e) {
                    t.querySelectorAll(".content-section").forEach((function(e) {
                        var n = e.getBoundingClientRect();
                        0 > n.top - 100 && n.bottom - 100 > 0 && function(t, e) {
                            e.querySelectorAll(".menu-item").forEach((function(e) {
                                t === e.dataset.targetId ? e.classList.add("active") : e.classList.remove("active")
                            }
                            ))
                        }(e.id, t)
                    }
                    ))
                }
                ))
            }(e),
            function(e) {
                e.querySelectorAll(".menu-item").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        var n = e.target.dataset.targetId;
                        if (n) {
                            var i = document.querySelector("#".concat(n)).offsetTop + 300;
                            t("html, body").animate({
                                scrollTop: i
                            }, 1e3)
                        } else
                            t("html, body").animate({
                                scrollTop: 0
                            }, 1e3)
                    }
                    ))
                }
                ))
            }(e))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(6)
          , l = n(7)
          , c = n(5)
          , u = n(8)
          , h = n(9);
        function d(t, e) {
            return f.apply(this, arguments)
        }
        function f() {
            return (f = o()(r.a.mark((function t(e, n) {
                var i;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            i = 0;
                        case 1:
                            if (!(i < e.length)) {
                                t.next = 7;
                                break
                            }
                            return t.next = 4,
                            n(e[i], i, e);
                        case 4:
                            i++,
                            t.next = 1;
                            break;
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function p(t, e, n, i, r, s, o) {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = o()(r.a.mark((function t(e, n, i, s, a, l, c) {
                var u, h, d, f;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            i.getMarketTickers();
                        case 2:
                            return u = t.sent,
                            h = {},
                            d = [],
                            f = {},
                            t.next = 8,
                            s.asyncForEach(u, function() {
                                var t = o()(r.a.mark((function t(e) {
                                    var i, o, l;
                                    return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                o = s.splitMarketSymbol(e.symbol),
                                                h[e.symbol] = {
                                                    lastPrice: e.lastTradeRate,
                                                    view: a[e.symbol].view,
                                                    buy: a[e.symbol].buy,
                                                    sell: a[e.symbol].sell,
                                                    instant: null !== (i = c[e.symbol]) && void 0 !== i && i
                                                },
                                                o.base === n && d.push({
                                                    symbol: e.symbol,
                                                    lastPrice: e.lastTradeRate,
                                                    view: a[e.symbol].view,
                                                    buy: a[e.symbol].buy,
                                                    sell: a[e.symbol].sell,
                                                    instant: null !== (l = c[e.symbol]) && void 0 !== l && l
                                                });
                                            case 3:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }());
                        case 8:
                            return f.allObjects = h,
                            f.relatedMarkets = d,
                            t.abrupt("return", f);
                        case 11:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function m() {
            return (m = o()(r.a.mark((function t(e, n, i, s, c) {
                var u, h, f, v, m, y, b, C, $, T, S, A, z, E;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (u = new a.a,
                            h = new l.a,
                            !i) {
                                t.next = 7;
                                break
                            }
                            return t.next = 4,
                            h.getAuthMarketsPermissions();
                        case 4:
                            t.t0 = t.sent,
                            t.next = 10;
                            break;
                        case 7:
                            return t.next = 9,
                            h.getAnonymousMarketsPermissions();
                        case 9:
                            t.t0 = t.sent;
                        case 10:
                            if (f = t.t0,
                            !i) {
                                t.next = 17;
                                break
                            }
                            return t.next = 14,
                            h.getAuthInstantMarketsPermissions();
                        case 14:
                            t.t1 = t.sent,
                            t.next = 20;
                            break;
                        case 17:
                            return t.next = 19,
                            h.getAnonymousInstantMarketsPermissions();
                        case 19:
                            t.t1 = t.sent;
                        case 20:
                            return v = t.t1,
                            t.next = 23,
                            h.getMarketsObjet();
                        case 23:
                            return m = t.sent,
                            t.next = 26,
                            h.getMarketsSummaries();
                        case 26:
                            return y = t.sent,
                            b = document.getElementById("summary"),
                            C = b ? b.dataset.category : "",
                            t.next = 31,
                            p(m, e, h, u, f, s, v);
                        case 31:
                            return $ = t.sent,
                            T = parseFloat($.allObjects["BTC-USD"].lastPrice),
                            S = 0,
                            t.next = 36,
                            d(y, function() {
                                var t = o()(r.a.mark((function t(n) {
                                    var i, s, o, a, l;
                                    return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                (i = u.splitMarketSymbol(n.symbol)).base === e && ("USD" === i.quote ? (s = y.filter((function(t) {
                                                    return t.symbol === "".concat(e, "-USD")
                                                }
                                                )),
                                                S += parseFloat(s[0].quoteVolume)) : "BTC" === i.quote ? (o = y.filter((function(t) {
                                                    return t.symbol === "".concat(e, "-BTC")
                                                }
                                                )),
                                                A = parseFloat(o[0].quoteVolume) * T,
                                                S += A) : ($.allObjects["".concat(i.quote, "-BTC")] ? (a = y.filter((function(t) {
                                                    return t.symbol === "".concat(e, "-").concat(i.quote)
                                                }
                                                )),
                                                A = parseFloat(a[0].quoteVolume) * parseFloat($.allObjects["".concat(i.quote, "-BTC")].lastPrice) * T) : $.allObjects["BTC-".concat(i.quote)] ? (l = y.filter((function(t) {
                                                    return t.symbol === "".concat(e, "-").concat(i.quote)
                                                }
                                                )),
                                                A = 0 !== parseFloat($.allObjects["BTC-".concat(i.quote)].lastPrice) && T ? parseFloat(l[0].quoteVolume) / parseFloat($.allObjects["BTC-".concat(i.quote)].lastPrice) * T : 0) : A = 0,
                                                S += A));
                                            case 2:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }());
                        case 36:
                            if ("Tokenized Stocks" === C) {
                                t.next = 40;
                                break
                            }
                            t.t2 = "",
                            t.next = 43;
                            break;
                        case 40:
                            return t.next = 42,
                            k(y, e);
                        case 42:
                            t.t2 = t.sent;
                        case 43:
                            return z = t.t2,
                            t.next = 46,
                            x(e, y, $.allObjects, T);
                        case 46:
                            return E = t.sent,
                            t.next = 49,
                            g(e, $.relatedMarkets, $.allObjects, u, f);
                        case 49:
                            return w(e, f, v, c),
                            t.next = 52,
                            _(E, S, n, u, z);
                        case 52:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function g(t, e, n, i, r) {
            return y.apply(this, arguments)
        }
        function y() {
            return (y = o()(r.a.mark((function e(n, i, s, a, l) {
                var u;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (u = [],
                            a.asyncForEach(i, function() {
                                var t = o()(r.a.mark((function t(e) {
                                    var n;
                                    return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                "BTC" === (n = a.splitMarketSymbol(e.symbol)).quote ? u.push({
                                                    symbol: e.symbol,
                                                    lastPrice: e.lastPrice,
                                                    lastPriceBTC: e.lastPrice,
                                                    view: l[e.symbol].view,
                                                    buy: l[e.symbol].buy,
                                                    sell: l[e.symbol].sell,
                                                    instant: e.instant
                                                }) : s["".concat(n.quote, "-BTC")] ? u.push({
                                                    symbol: e.symbol,
                                                    lastPrice: e.lastPrice,
                                                    lastPriceBTC: s["".concat(n.quote, "-BTC")].lastPrice,
                                                    view: l[e.symbol].view,
                                                    buy: l[e.symbol].buy,
                                                    sell: l[e.symbol].sell,
                                                    instant: e.instant
                                                }) : s["BTC-".concat(n.quote)] ? u.push({
                                                    symbol: e.symbol,
                                                    lastPrice: e.lastPrice,
                                                    lastPriceBTC: 0 !== parseFloat(s["BTC-".concat(n.quote)].lastPrice) ? 1 / s["BTC-".concat(n.quote)].lastPrice : 0,
                                                    view: l[e.symbol].view,
                                                    buy: l[e.symbol].buy,
                                                    sell: l[e.symbol].sell,
                                                    instant: e.instant
                                                }) : u.push({
                                                    symbol: e.symbol,
                                                    lastPrice: e.lastPrice,
                                                    lastPriceBTC: 0,
                                                    view: l[e.symbol].view,
                                                    buy: l[e.symbol].buy,
                                                    sell: l[e.symbol].sell,
                                                    instant: e.instant
                                                });
                                            case 2:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()),
                            u.sort((function(t, e) {
                                return e.lastPriceBTC - t.lastPriceBTC
                            }
                            )),
                            !(u.length > 0)) {
                                e.next = 6;
                                break
                            }
                            return e.next = 6,
                            d(u, function() {
                                var e = o()(r.a.mark((function e(i, s) {
                                    var o, l, u, h;
                                    return r.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                s + 1 <= 4 && (o = a.splitMarketSymbol(i.symbol),
                                                (l = i.view ? t("<a/>") : t("<div/>")).addClass("market"),
                                                Object(c.a)(l, c.c.coinPageCTAClicked, {
                                                    type: "Market - ".concat(o.quote),
                                                    source: n
                                                }),
                                                i.view && (i.instant ? l.attr("href", "/instant?market=".concat(o.base, "-").concat(o.quote)) : l.attr("href", "/Market/Index?MarketName=".concat(o.quote, "-").concat(o.base))),
                                                (u = t("<div/>")).addClass("info"),
                                                u.text("".concat(o.base, "/").concat(o.quote)),
                                                (h = t("<div/>")).addClass("price"),
                                                h.text("".concat(a.getQuoteSymbol(o.quote)).concat(a.numberFormat(!1, parseFloat(i.lastPrice)))),
                                                l.append(u),
                                                l.append(h),
                                                l.appendTo("#related-markets"));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function b(e, n, i) {
            var r = Object(u.c)(e.marketSymbol)
              , s = "buy" === i
              , o = e.marketPermission.view ? t("<a/>") : t("<div/>");
            if (o.addClass("btn primary"),
            o.text(s ? "Buy Now" : "Sell Now"),
            Object(c.a)(o, c.c.coinPageCTAClicked, {
                type: s ? "Buy now" : "Sell now",
                source: n
            }),
            e.marketPermission.view) {
                var a = e.instant ? h.a.instantIndex(r.quote, r.base, i) : h.a.marketIndex(r.quote, r.base);
                o.attr("href", a)
            } else
                o.addClass("disabled");
            return o
        }
        function w(e, n, i, r) {
            var s = Object(u.b)(e, i, n, r)
              , o = t("#buy-sell-container");
            if (s) {
                var a = b(s, e, "buy")
                  , l = b(s, e, "sell");
                if (!s.marketPermission.view) {
                    var c = function() {
                        var e = t("<div/>");
                        e.addClass("warning-container");
                        var n = t("<div/>");
                        n.addClass("warning-image");
                        var i = t("<div/>");
                        return i.addClass("warning-content"),
                        i.text("This market is currently not available in your location."),
                        e.append(n),
                        e.append(i),
                        e
                    }();
                    c.appendTo(a),
                    c.clone().appendTo(l)
                }
                l.appendTo(o),
                a.appendTo(o)
            }
        }
        function k(t, e) {
            return C.apply(this, arguments)
        }
        function C() {
            return (C = o()(r.a.mark((function t(e, n) {
                var i, s, o, a;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (i = e.filter((function(t) {
                                return t.symbol === "".concat(n, "-BTC")
                            }
                            )),
                            s = e.filter((function(t) {
                                return t.symbol === "".concat(n, "-USD")
                            }
                            )),
                            !i) {
                                t.next = 6;
                                break
                            }
                            return t.abrupt("return", null !== (o = i[0].percentChange) && void 0 !== o ? o : "0");
                        case 6:
                            if (!s) {
                                t.next = 10;
                                break
                            }
                            return t.abrupt("return", null !== (a = s[0].percentChange) && void 0 !== a ? a : "0");
                        case 10:
                            return t.abrupt("return", "0");
                        case 11:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function x(t, e, n, i) {
            return $.apply(this, arguments)
        }
        function $() {
            return ($ = o()(r.a.mark((function t(e, n, i, s) {
                var o;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return 0,
                            o = "BTC" === e ? s : i["".concat(e, "-BTC")] ? 0 !== s ? parseFloat(i["".concat(e, "-BTC")].lastPrice) * s : 0 : i["BTC-".concat(e)] && 0 !== s ? parseFloat(i["BTC-".concat(e)].lastPrice) / s : 0,
                            t.abrupt("return", o);
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function _(t, e, n, i, r) {
            return T.apply(this, arguments)
        }
        function T() {
            return (T = o()(r.a.mark((function t(e, n, i, s, o) {
                var a, l, c, u, h, d, f, p;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            a = i.querySelector(".last-price"),
                            l = document.getElementById("market-cap"),
                            c = document.getElementById("quote-volume"),
                            u = document.getElementById("circulating-supply"),
                            h = document.getElementById("percentage-change"),
                            d = s.priceSign(o),
                            f = u ? u.dataset.circulatingSupply : 0,
                            p = parseFloat(f) * e,
                            a && (a.textContent = "$".concat(s.numberFormat(!1, e))),
                            c && (c.textContent = "".concat(s.formatMillionNumbers(!1, n))),
                            u && (u.textContent = "".concat(s.formatMillionNumbers(!1, f))),
                            l && (l.textContent = "".concat(s.formatMillionNumbers(!1, p))),
                            h && (h.textContent = "positive" === d ? "+".concat(o, "%") : "".concat(o, "%"),
                            h.classList.add(d));
                        case 6:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        e.a = function() {
            var t = document.querySelector(".coin-header");
            t && function(t, e, n, i, r) {
                m.apply(this, arguments)
            }(t.dataset.coinSymbol, t, t.dataset.isAuth, t.dataset.location, JSON.parse(t.dataset.quotesCurrency))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        var t = document.querySelectorAll(".read-more");
        t && function(t) {
            t.forEach((function(t) {
                var e = t.clientHeight
                  , n = t.querySelector(".shadow-container")
                  , i = n.querySelector(".show-more");
                t.classList.contains("founder") ? e < 120 ? (t.style.height = "100%",
                n.style.display = "none",
                i.style.display = "none") : i.addEventListener("click", (function() {
                    t.style.maxHeight = "100%",
                    n.style.display = "none"
                }
                )) : e < 500 ? (t.style.maxHeight = "100%",
                n.style.display = "none",
                i.style.display = "none") : i.addEventListener("click", (function() {
                    t.style.maxHeight = "100%",
                    n.style.display = "none"
                }
                ))
            }
            ))
        }(t)
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        e.a = function() {
            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && t("body").addClass("firefox")
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(3)
          , l = n.n(a)
          , c = n(4)
          , u = n.n(c)
          , h = n(6)
          , d = n(7)
          , f = n(11)
          , p = n(9)
          , v = function() {
            function e(t) {
                l()(this, e),
                this.$container = t,
                this.$paginate = this.$container.querySelector(".paginate"),
                this.$marketTable = this.$container.querySelector(".table-body"),
                this.dataCoins = {},
                this.wpCoins = this.$container ? JSON.parse(this.$container.dataset.coins) : "",
                this.selectedWpCoins = this.$container ? JSON.parse(this.$container.dataset.selectedCoins) : "",
                this.dataFilters = this.$container ? this.$container.dataset.filter : "",
                this.dataInstant = this.$container ? this.$container.dataset.instant : "",
                this.userIsAuth = !!this.$container && this.$container.dataset.userIsAuth,
                this.location = this.$container ? this.$container.dataset.location : "",
                this.learnButton = !!this.$container && this.$container.dataset.learnButton,
                this.$sortingElements = this.$container.querySelectorAll(".header-item"),
                this.carouselArrows = this.$container.querySelectorAll(".glide__arrow"),
                this.carouselShades = this.$container.querySelectorAll(".shade"),
                this.currentData = [],
                this.chunks = [],
                this.maxPages = 1,
                this.currentPage = 1,
                this.volume = 0,
                this.helpers = new h.a,
                this.bittrexApi = new d.a,
                this.direction = "up"
            }
            return u()(e, [{
                key: "init",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.fetchMarketsData();
                                case 2:
                                    return this.initialRender(),
                                    this.handleSortElementClick(),
                                    t.next = 6,
                                    this.mountCarousel();
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "initialRender",
                value: function() {
                    this.sortByVolume("up"),
                    this.renderCoins()
                }
            }, {
                key: "fetchMarketsData",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e, n, i, s, a, l, c = this;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.userIsAuth) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3,
                                    this.bittrexApi.getAuthMarketsPermissions();
                                case 3:
                                    t.t0 = t.sent,
                                    t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8,
                                    this.bittrexApi.getAnonymousMarketsPermissions();
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    if (e = t.t0,
                                    !this.userIsAuth) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 13,
                                    this.bittrexApi.getAuthInstantMarketsPermissions();
                                case 13:
                                    t.t1 = t.sent,
                                    t.next = 19;
                                    break;
                                case 16:
                                    return t.next = 18,
                                    this.bittrexApi.getAnonymousInstantMarketsPermissions();
                                case 18:
                                    t.t1 = t.sent;
                                case 19:
                                    return n = t.t1,
                                    t.next = 22,
                                    this.bittrexApi.getTickersObjet();
                                case 22:
                                    return i = t.sent,
                                    t.next = 25,
                                    this.bittrexApi.getAllowedMarketSummariesBasedOnPermisions(i, this.location, !1);
                                case 25:
                                    return s = t.sent,
                                    a = Object.entries(this.wpCoins),
                                    l = {},
                                    t.next = 30,
                                    this.helpers.asyncForEach(a, function() {
                                        var t = o()(r.a.mark((function t(o) {
                                            var a, u, h, d, f, p, v;
                                            return r.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        a = o[0],
                                                        u = o[1],
                                                        h = s[a] ? s[a].markets : null,
                                                        d = h ? c.getMainMarket(a, h) : null,
                                                        f = d ? c.helpers.normalizePriceInUsd(i, d.base, d.quote) : 0,
                                                        p = c.helpers.getTotalVolume(h),
                                                        v = c.helpers.getCurrencyPermissionMarket(e, d),
                                                        l[a] = {
                                                            symbol: a,
                                                            price: null != f ? f : 0,
                                                            marketBase: d ? d.base : "",
                                                            marketQuote: d ? d.quote : "",
                                                            volumeBTC: p,
                                                            volume: p ? p * i["BTC-USD"].lastPrice : 0,
                                                            percentChange: d ? d.percentChange : 0,
                                                            name: u.name,
                                                            logo: u.logo,
                                                            view: !!v && v.view,
                                                            buy: !!v && v.buy,
                                                            sell: !!v && v.sell,
                                                            instant: !!d && n["".concat(d.base, "-").concat(d.quote)],
                                                            percentageChangeSign: d ? c.helpers.priceSign(d.percentChange) : "neutral",
                                                            permalink: u.permalink,
                                                            marketCap: u.circulatingSupply && f ? u.circulatingSupply * f : 0
                                                        },
                                                        c.selectedWpCoins[a] && (c.selectedWpCoins[a] = l[a]),
                                                        c.volume = c.volume + p * i["BTC-USD"].lastPrice;
                                                    case 4:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }());
                                case 30:
                                    this.dataCoins = l;
                                case 31:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getMainMarket",
                value: function(t, e) {
                    if ("" !== e) {
                        var n = Object.entries(e).sort((function(t, e) {
                            return e[1].volumeBTC - t[1].volumeBTC
                        }
                        ));
                        return e["".concat(t, "-USD")] ? e["".concat(t, "-USD")] : e["".concat(t, "-BTC")] ? e["".concat(t, "-BTC")] : n.shift()[1]
                    }
                }
            }, {
                key: "handleSortElementClick",
                value: function() {
                    var t = this;
                    this.$sortingElements.forEach((function(e) {
                        e.addEventListener("click", (function(n) {
                            var i = e.dataset.filter
                              , r = n.target;
                            r.classList.contains("active") || (t.removeActiveClass(),
                            r.classList.add("active"),
                            r.classList.add("up-down")),
                            t.direction = t.directionDetection(r),
                            t.sortFilterDetection(i),
                            t.renderCoins()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "directionDetection",
                value: function(t) {
                    return t.classList.contains("up-down") ? (t.classList.remove("up-down"),
                    t.classList.add("down-up"),
                    "up") : (t.classList.remove("down-up"),
                    t.classList.add("up-down"),
                    "down")
                }
            }, {
                key: "sortFilterDetection",
                value: function(t) {
                    switch (t) {
                    case "name":
                        this.sortByName();
                        break;
                    case "price":
                        this.sortByPrice();
                        break;
                    case "volume":
                        this.sortByVolume();
                        break;
                    case "cap":
                        this.sortByMarketCap();
                        break;
                    case "change":
                        this.sortBychange()
                    }
                }
            }, {
                key: "removeActiveClass",
                value: function() {
                    this.$sortingElements.forEach((function(t) {
                        t.classList.remove("active"),
                        t.classList.remove("up-down"),
                        t.classList.remove("down-up")
                    }
                    ))
                }
            }, {
                key: "sortByName",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    "up" !== this.direction ? this.currentData = t.sort((function(t, e) {
                        return e[0] > t[0] ? 1 : -1
                    }
                    )) : this.currentData = t.sort((function(t, e) {
                        return t[0] > e[0] ? 1 : -1
                    }
                    ))
                }
            }, {
                key: "sortByPrice",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    "up" !== this.direction ? this.currentData = t.sort((function(t, e) {
                        return t[1].price - e[1].price
                    }
                    )) : this.currentData = t.sort((function(t, e) {
                        return e[1].price - t[1].price
                    }
                    ))
                }
            }, {
                key: "sortByVolume",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    "up" !== this.direction ? this.currentData = t.sort((function(t, e) {
                        return t[1].volumeBTC - e[1].volumeBTC
                    }
                    )) : this.currentData = t.sort((function(t, e) {
                        return e[1].volumeBTC - t[1].volumeBTC
                    }
                    ))
                }
            }, {
                key: "sortByMarketCap",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    "up" !== this.direction ? this.currentData = t.sort((function(t, e) {
                        return t[1].marketCap - e[1].marketCap
                    }
                    )) : this.currentData = t.sort((function(t, e) {
                        return e[1].marketCap - t[1].marketCap
                    }
                    ))
                }
            }, {
                key: "sortBychange",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    "up" !== this.direction ? this.currentData = t.sort((function(t, e) {
                        return t[1].percentChange - e[1].percentChange
                    }
                    )) : this.currentData = t.sort((function(t, e) {
                        return e[1].percentChange - t[1].percentChange
                    }
                    ))
                }
            }, {
                key: "renderCoins",
                value: function() {
                    this.createCoinMarkup(this.currentData)
                }
            }, {
                key: "createCoinMarkup",
                value: function(e) {
                    var n = this
                      , i = t(".table-body");
                    return i.html(""),
                    e && e.length > 0 ? (e.forEach((function(e) {
                        var r = e[1]
                          , s = parseFloat(r.volume)
                          , o = r.isTokenized
                          , a = parseFloat(r.price)
                          , l = t("<div/>");
                        l.addClass("table-row");
                        var c = t("<div/>");
                        c.addClass("name first-col sticky-column");
                        var u = t("<div/>");
                        u.addClass("logo-container");
                        var h = t("<img/>");
                        h.addClass("logo-bg"),
                        h.attr("src", r.logo);
                        var d = t("<img/>");
                        d.addClass("logo"),
                        d.attr("src", r.logo);
                        var f = t("<div/>");
                        f.addClass("name-details");
                        var v = t("<div/>");
                        v.addClass("symbol"),
                        v.text(r.symbol);
                        var m = t("<div/>");
                        m.addClass("currency-name"),
                        m.text(r.name);
                        var g = t("<div/>");
                        g.addClass("row price");
                        var y = t("<p/>");
                        y.text("$".concat(n.helpers.numberFormat(!0, a)));
                        var b = t("<div/>");
                        b.addClass("row market-cap");
                        var w = t("<p/>");
                        w.text("$".concat(n.helpers.formatMillionNumbers(o, r.marketCap)));
                        var k = t("<div/>");
                        k.addClass("row volume");
                        var C = t("<p/>");
                        C.text("$".concat(n.helpers.numberFormat(o, s)));
                        var x = t("<div/>");
                        x.addClass("row hours ".concat(r.percentageChangeSign));
                        var $ = t("<p/>");
                        $.text("".concat("positive" === r.percentageChangeSign ? "+" : "").concat(r.percentChange, "%"));
                        var _ = t("<div/>");
                        _.addClass("row button-column");
                        var T = r.view ? t("<a/>") : t("<div/>");
                        T.addClass("button"),
                        T.text("buy"),
                        r.view ? n.dataInstant ? T.attr("href", p.a.marketIndex(r.marketQuote, r.marketBase)) : T.attr("href", r.instant ? p.a.instantIndex(r.marketQuote, r.marketBase) : p.a.marketIndex(r.marketQuote, r.marketBase)) : T.addClass("disabled");
                        var S = t("<div/>");
                        S.addClass("warning-container");
                        var A = t("<div/>");
                        A.addClass("warning-image");
                        var z = t("<div/>");
                        if (z.addClass("warning-content"),
                        z.text("This market is currently not available in your location."),
                        u.append(h),
                        u.append(d),
                        c.append(u),
                        f.append(v),
                        f.append(m),
                        c.append(f),
                        n.learnButton) {
                            var E = t("<a/>");
                            E.attr("href", r.permalink),
                            E.addClass("button learn"),
                            E.text("learn"),
                            _.append(E)
                        }
                        _.append(T),
                        g.append(y),
                        "Tokenized Stocks" !== n.dataFilters && b.append(w),
                        k.append(C),
                        x.append($),
                        r.view || (S.append(A),
                        S.append(z),
                        T.append(S)),
                        l.append(c),
                        l.append(g),
                        "Tokenized Stocks" !== n.dataFilters && l.append(b),
                        l.append(k),
                        l.append(x),
                        l.append(_),
                        i.append(l)
                    }
                    )),
                    this.helpers.addTotalRow(this.volume, i, this.dataFilters)) : i.html(""),
                    ""
                }
            }, {
                key: "renderCarouselCoins",
                value: function() {
                    var e = o()(r.a.mark((function e(n) {
                        var i, s = this;
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    (i = Object.entries(this.selectedWpCoins)) && i.length > 0 && i.forEach((function(e) {
                                        var i = e[1]
                                          , r = (i.isTokenized,
                                        parseFloat(i.price))
                                          , o = t("<div/>");
                                        o.addClass("glide__slide");
                                        var a = i.view ? t("<a/>") : t("<div/>");
                                        a.addClass("coin-card-market"),
                                        i.view ? s.dataInstant ? a.attr("href", p.a.marketIndex(i.marketQuote, i.marketBase)) : a.attr("href", i.instant ? p.a.instantIndex(i.marketQuote, i.marketBase) : p.a.marketIndex(i.marketQuote, i.marketBase)) : a.addClass("not-allowed");
                                        var l = t("<div/>");
                                        l.addClass("logo-container");
                                        var c = t("<img/>");
                                        c.addClass("logo-bg"),
                                        c.attr("src", i.logo);
                                        var u = t("<img/>");
                                        u.addClass("logo"),
                                        u.attr("src", i.logo);
                                        var h = t("<div/>");
                                        h.addClass("paragraph name"),
                                        h.text(i.name);
                                        var d = t("<div/>");
                                        d.addClass("paragraph large medium price"),
                                        d.text("$".concat(s.helpers.numberFormat(!0, r)));
                                        var f = t("<div/>");
                                        f.addClass("paragraph large percentage ".concat(i.percentageChangeSign)),
                                        f.text("".concat("positive" === i.percentageChangeSign ? "+" : "").concat(i.percentChange, "%"));
                                        var v = t("<div/>");
                                        v.addClass("market-anchor"),
                                        v.text("Buy ".concat(i.symbol, " Now")),
                                        i.view || v.addClass("disabled");
                                        var m = t("<div/>");
                                        m.addClass("warning-container");
                                        var g = t("<div/>");
                                        g.addClass("warning-image");
                                        var y = t("<div/>");
                                        y.addClass("warning-content"),
                                        y.text("This market is currently not available in your location."),
                                        l.append(c),
                                        l.append(u),
                                        a.append(l),
                                        a.append(h),
                                        a.append(d),
                                        a.append(f),
                                        a.append(v),
                                        i.view || (m.append(g),
                                        m.append(y),
                                        v.append(m)),
                                        o.append(a),
                                        n.append(o)
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "mountCarousel",
                value: function() {
                    var e = o()(r.a.mark((function e() {
                        var n, i;
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t(".coins-carousel-module .glide__slides"),
                                    i = t(".scrollable-component"),
                                    e.next = 3,
                                    this.renderCarouselCoins(n);
                                case 3:
                                    return e.next = 5,
                                    this.renderCarouselCoins(i);
                                case 5:
                                    t(".glide__slides .glide__slide").length > 4 && this.mountCarouselParameters();
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "mountCarouselParameters",
                value: function() {
                    var t = new f.a(".glide",{
                        type: "slider",
                        startAt: 0,
                        gap: 0,
                        perView: 4,
                        focusAt: 0,
                        animationDuration: 1e3,
                        animationTimingFunc: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
                    });
                    this.swipeMultipleSlides(4, t),
                    t.mount()
                }
            }, {
                key: "swipeMultipleSlides",
                value: function(t, e) {
                    var n = this;
                    e.on("run.before", (function(e) {
                        e.steps = ">" === e.direction ? -t : t
                    }
                    )),
                    e.on("run.after", (function() {
                        n.checkGlideArrows(e.index, t)
                    }
                    ))
                }
            }, {
                key: "checkGlideArrows",
                value: function(t, e) {
                    var n = this.carouselArrows[0]
                      , i = this.carouselArrows[1]
                      , r = this.carouselShades[0]
                      , s = this.carouselShades[1];
                    t === e ? (n.disabled = !1,
                    i.disabled = !0,
                    r.classList.add("active"),
                    s.classList.remove("active")) : (n.disabled = !0,
                    i.disabled = !1,
                    s.classList.add("active"),
                    r.classList.remove("active"))
                }
            }]),
            e
        }();
        e.a = function() {
            t(".coins-markets-table").each(function() {
                var t = o()(r.a.mark((function t(e, n) {
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                new v(n).init();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }())
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(3)
          , l = n.n(a)
          , c = n(4)
          , u = n.n(c)
          , h = n(6)
          , d = n(7)
          , f = n(11)
          , p = n(5)
          , v = function() {
            function e(t) {
                l()(this, e),
                this.$container = t,
                this.dataCoins = {},
                this.wpCoins = this.$container ? JSON.parse(this.$container.dataset.coins) : "",
                this.userIsAuth = !!this.$container && this.$container.dataset.userIsAuth,
                this.currentSymbol = !!this.$container && this.$container.dataset.currentSymbol,
                this.$carouselArrows = this.$container.querySelectorAll(".glide__arrow"),
                this.$bullets = this.$container.querySelectorAll(".glide__bullet"),
                this.$leftArrow = this.$container.querySelector(".glide__arrow--left"),
                this.$rightArrow = this.$container.querySelector(".glide__arrow--right"),
                this.screenWidth = document.body.offsetWidth,
                this.glide = "",
                this.helpers = new h.a,
                this.bittrexApi = new d.a
            }
            return u()(e, [{
                key: "init",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.fetchMarketsData();
                                case 2:
                                    this.sortByPrice(),
                                    this.mountCarousel(),
                                    this.resizeDetection();
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "fetchMarketsData",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e, n, i, s, o = this;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.userIsAuth) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3,
                                    this.bittrexApi.getAuthMarketsPermissions();
                                case 3:
                                    t.t0 = t.sent,
                                    t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8,
                                    this.bittrexApi.getAnonymousMarketsPermissions();
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return e = t.t0,
                                    t.next = 12,
                                    this.bittrexApi.getTickersObjetPermissions(e);
                                case 12:
                                    n = t.sent,
                                    i = Object.entries(this.wpCoins),
                                    s = {},
                                    i.forEach((function(t) {
                                        var e = t[0]
                                          , i = t[1]
                                          , r = n["BTC-USD"].lastPrice
                                          , a = o.helpers.getCurrencyLastPrice(e, r, n);
                                        s[e] = {
                                            symbol: e,
                                            price: a,
                                            name: i.name,
                                            logo: i.logo,
                                            tagline: i.tagline,
                                            permalink: i.permalink
                                        }
                                    }
                                    )),
                                    this.dataCoins = s;
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "sortByPrice",
                value: function() {
                    var t = Object.entries(this.dataCoins);
                    this.currentData = t.sort((function(t, e) {
                        return e[1].price - t[1].price
                    }
                    ))
                }
            }, {
                key: "renderCarouselCoins",
                value: function(e) {
                    var n = this;
                    this.currentData && this.currentData.length > 0 && this.currentData.forEach((function(i) {
                        var r = i[1];
                        if (r.isTokenized,
                        n.currentSymbol !== r.symbol) {
                            var s = t("<div/>");
                            s.addClass("glide__slide");
                            var o = t("<a/>");
                            o.attr("href", r.permalink),
                            o.addClass("coin-card"),
                            Object(p.a)(o, p.c.coinPageCTAClicked, {
                                type: "Related coin",
                                source: n.currentSymbol
                            });
                            var a = t("<div/>");
                            a.addClass("coin-logo-container");
                            var l = t("<img/>");
                            l.addClass("logo-bg"),
                            l.attr("src", r.logo);
                            var c = t("<img/>");
                            c.addClass("logo"),
                            c.attr("src", r.logo);
                            var u = t("<div/>");
                            u.addClass("title-container");
                            var h = t("<div/>");
                            h.addClass("name"),
                            h.text(r.name);
                            var d = t("<div/>");
                            d.addClass("symbol"),
                            d.text(r.symbol);
                            var f = t("<div/>");
                            f.addClass("tag-container");
                            var v = t("<div/>");
                            v.addClass("tag"),
                            v.text(r.tagline),
                            a.append(l),
                            a.append(c),
                            u.append(h),
                            u.append(d),
                            f.append(v),
                            o.append(a),
                            o.append(u),
                            o.append(f),
                            s.append(o),
                            e.append(s)
                        }
                    }
                    ))
                }
            }, {
                key: "mountCarousel",
                value: function() {
                    var e = t(".related-coins .glide__slides");
                    this.renderCarouselCoins(e),
                    t(".glide__slides .glide__slide").length > 3 && this.mountCarouselParameters()
                }
            }, {
                key: "mountCarouselParameters",
                value: function(t) {
                    var e = new f.a(".glide",{
                        type: "slider",
                        startAt: 0,
                        gap: 0,
                        perView: t,
                        focusAt: 0,
                        animationDuration: 1e3,
                        animationTimingFunc: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
                    });
                    this.glide = e,
                    1 !== t && this.handleSwipeActions(e),
                    e.mount()
                }
            }, {
                key: "resizeDetection",
                value: function() {
                    var t = this;
                    this.screenWidth > 560 ? this.mountCarouselParameters(3) : this.mountCarouselParameters(1),
                    window.addEventListener("resize", (function() {
                        document.body.offsetWidth > 560 ? (t.glide.destroy(),
                        t.mountCarouselParameters(3)) : (t.glide.destroy(),
                        t.mountCarouselParameters(1))
                    }
                    ))
                }
            }, {
                key: "handleSwipeActions",
                value: function(t) {
                    var e = this;
                    t.on("run.before", (function(t) {
                        t.steps = ">" === t.direction ? -3 : 3
                    }
                    )),
                    t.on("run.after", (function() {
                        e.resetBullets(e.$bullets),
                        e.checkArrows(t.index, e.$bullets.length)
                    }
                    ))
                }
            }, {
                key: "resetBullets",
                value: function() {
                    this.$bullets.forEach((function(t) {
                        t.classList.remove("glide__bullet--active")
                    }
                    ))
                }
            }, {
                key: "checkArrows",
                value: function(t, e) {
                    var n = document.querySelector("#bullet-".concat(t < 3 ? 0 : t >= 6 ? 6 : 3));
                    2 === e ? 3 === t ? (this.$leftArrow.disabled = !1,
                    this.$rightArrow.disabled = !0) : (this.$leftArrow.disabled = !0,
                    this.$rightArrow.disabled = !1) : 3 === e && (3 === t ? (this.$leftArrow.disabled = !1,
                    this.$rightArrow.disabled = !1) : 6 === t ? (this.$leftArrow.disabled = !1,
                    this.$rightArrow.disabled = !0) : (this.$leftArrow.disabled = !0,
                    this.$rightArrow.disabled = !1)),
                    "" !== n && n.classList.add("glide__bullet--active")
                }
            }]),
            e
        }();
        e.a = function() {
            t(".related-coins").each(function() {
                var t = o()(r.a.mark((function t(e, n) {
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                new v(n).init();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }())
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(38);
        e.a = function() {
            t(".token-content-data").each((function(t, e) {
                new i.a(e).init()
            }
            ))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    var i = n(1)
      , r = n.n(i)
      , s = n(2)
      , o = n.n(s)
      , a = n(3)
      , l = n.n(a)
      , c = n(4)
      , u = n.n(c)
      , h = n(6)
      , d = n(7)
      , f = function() {
        function t(e) {
            l()(this, t),
            this.$container = e,
            this.coinSymbol = this.$container ? this.$container.dataset.tokenSymbol : "",
            this.bittrexApi = new d.a,
            this.helper = new h.a,
            this.$priceContainer = this.$container.querySelector(".coin-price"),
            this.$percentageChangeContainer = this.$container.querySelector(".coin-percentage-change"),
            this.$percentageText = this.$percentageChangeContainer.querySelector(".text")
        }
        return u()(t, [{
            key: "init",
            value: function() {
                this.getCoinData()
            }
        }, {
            key: "getCoinData",
            value: function() {
                var t = o()(r.a.mark((function t() {
                    var e, n;
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.bittrexApi.getSummaryDataSpecificBase(this.coinSymbol);
                            case 2:
                                return e = t.sent,
                                t.next = 5,
                                this.bittrexApi.getTickerDataSpecificBase(this.coinSymbol);
                            case 5:
                                n = t.sent,
                                this.renderCoinData(n.lastPrice, e.percentChange);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
        }, {
            key: "renderCoinData",
            value: function(t, e) {
                t && (this.$percentageChangeContainer.classList.add(this.helper.priceSign(e)),
                this.$priceContainer.innerText = "$".concat(this.helper.numberFormat(!1, parseFloat(t))),
                this.$percentageText.innerText = "".concat(e || 0, " % "))
            }
        }]),
        t
    }();
    e.a = f
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(3)
          , r = n.n(i)
          , s = n(4)
          , o = n.n(s)
          , a = function() {
            function e(n) {
                r()(this, e),
                this.$container = t(n),
                this.postType = this.$container.data("post-type"),
                this.$navItems = this.$container.find(".menu-item")
            }
            return o()(e, [{
                key: "init",
                value: function() {
                    this.handlePostTypeBehavior()
                }
            }, {
                key: "handlePostTypeBehavior",
                value: function() {
                    var e = this;
                    this.postType && this.$navItems.each((function(n, i) {
                        var r = t(i);
                        switch (e.postType) {
                        case "post":
                            r.hasClass("discover") && r.addClass("current-menu-item");
                            break;
                        case "coin":
                            r.hasClass("coins-tokens") && r.addClass("current-menu-item")
                        }
                    }
                    ))
                }
            }]),
            e
        }();
        e.a = function() {
            t(".discover-menu").each((function(t, e) {
                new a(e).init()
            }
            ))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(3)
          , r = n.n(i)
          , s = n(4)
          , o = n.n(s)
          , a = function() {
            function e(n) {
                r()(this, e),
                this.$container = t(n),
                this.$searchInput = this.$container.find("input"),
                this.$closeIcon = this.$container.find(".erase")
            }
            return o()(e, [{
                key: "init",
                value: function() {
                    this.handleFocus(),
                    this.handleErase(),
                    this.handleSearch(),
                    this.handlePasteEvent()
                }
            }, {
                key: "handleFocus",
                value: function() {
                    var t = this;
                    this.$searchInput.focus((function() {
                        t.$container.addClass("active")
                    }
                    )),
                    this.$searchInput.focusout((function() {
                        t.$container.removeClass("active")
                    }
                    )),
                    this.$container.click((function() {
                        t.$searchInput.focus()
                    }
                    ))
                }
            }, {
                key: "handleErase",
                value: function() {
                    var t = this;
                    this.$closeIcon.click((function() {
                        t.$searchInput.val("")
                    }
                    ))
                }
            }, {
                key: "handleSearch",
                value: function() {
                    var t = this;
                    this.$container.submit((function(e) {
                        "" === t.$searchInput.val().trim() && e.preventDefault()
                    }
                    ))
                }
            }, {
                key: "handlePasteEvent",
                value: function() {
                    this.$searchInput.on("paste", (function(e) {
                        var n = t(e.target);
                        setTimeout((function() {
                            n.val().length > 300 && n.val(n.val().substring(0, 300))
                        }
                        ), 10)
                    }
                    ))
                }
            }]),
            e
        }();
        e.a = function() {
            t(".discover-search").each((function(t, e) {
                new a(e).init()
            }
            ))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(5);
        e.a = function() {
            t(".official-link").each((function(e, n) {
                var r = t(n)
                  , s = r.data("mixpanel-source");
                s && Object(i.a)(r, i.c.coinPageCTAClicked, {
                    type: "Learn more on Messari",
                    source: s
                })
            }
            ))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(3)
          , l = n.n(a)
          , c = n(4)
          , u = n.n(c)
          , h = n(8)
          , d = n(14)
          , f = function() {
            function e(n) {
                l()(this, e),
                this.$container = t(n),
                this.$logo = this.$container.find(".logo"),
                this.$logoBg = this.$container.find(".logo-bg"),
                this.$name = this.$container.find(".name"),
                this.$apy = this.$container.find(".apy"),
                this.symbol = this.$container.data("symbol"),
                this.normalizedHostUrl = Object(h.d)(),
                this.showContainer = !1
            }
            return u()(e, [{
                key: "init",
                value: function() {
                    this.componentDisplaymentValidation()
                }
            }, {
                key: "componentDisplaymentValidation",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e, n;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.renderCurrencyInfo();
                                case 2:
                                    return e = t.sent,
                                    t.next = 5,
                                    this.renderApyMessage();
                                case 5:
                                    n = t.sent,
                                    e && n ? this.$container.show() : this.$container.hide();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "renderApyMessage",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(h.a)(d.a.singleCurrencyStaking(this.symbol, this.normalizedHostUrl));
                                case 2:
                                    return (e = t.sent) && this.$apy.text("Earn up to ".concat(100 * e.annualPercentageYield, "% ").concat(this.symbol, " rewards*")),
                                    t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "renderCurrencyInfo",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(h.a)(d.a.singleCurrency(this.symbol, this.normalizedHostUrl));
                                case 2:
                                    return (e = t.sent) && (this.$name.text(e.name),
                                    this.$logo.attr("src", e.logoUrl),
                                    this.$logoBg.attr("src", e.logoUrl)),
                                    t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            e
        }();
        e.a = function() {
            t(".staking-component").map((function(t, e) {
                new f(e).init()
            }
            ))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1)
          , r = n.n(i)
          , s = n(2)
          , o = n.n(s)
          , a = n(3)
          , l = n.n(a)
          , c = n(4)
          , u = n.n(c)
          , h = n(8)
          , d = n(14)
          , f = function() {
            function e(n) {
                l()(this, e),
                this.$container = t(n),
                this.symbol = this.$container.data("symbol"),
                this.$tokenImageContainer = this.$container.find(".image-container"),
                this.$tokenImage = this.$container.find(".token-image"),
                this.normalizedHostUrl = Object(h.d)()
            }
            return u()(e, [{
                key: "init",
                value: function() {
                    this.renderCurrencyInfo()
                }
            }, {
                key: "renderCurrencyInfo",
                value: function() {
                    var t = o()(r.a.mark((function t() {
                        var e;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(h.a)(d.a.singleCurrency(this.symbol, this.normalizedHostUrl));
                                case 2:
                                    return (e = t.sent) ? (this.$tokenImageContainer.show(),
                                    this.$tokenImage.attr("src", e.logoUrl)) : this.$tokenImageContainer.hide(),
                                    t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            e
        }();
        e.a = function() {
            t(".token-launch-header").map((function(t, e) {
                new f(e).init()
            }
            ))
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    n(45),
    t.exports = n(58)
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    function(t) {
        var e = n(19)
          , i = n(22)
          , r = n(23)
          , s = n(24)
          , o = n(25)
          , a = n(26)
          , l = n(27)
          , c = n(28)
          , u = n(29)
          , h = n(31)
          , d = n(32)
          , f = n(33)
          , p = n(34)
          , v = n(35)
          , m = n(36)
          , g = n(37)
          , y = n(39)
          , b = n(40)
          , w = n(41)
          , k = n(42)
          , C = n(43);
        t(document).ready((function() {
            Object(e.a)(),
            Object(i.a)(),
            Object(r.a)(),
            Object(s.a)(),
            Object(a.a)(),
            Object(l.a)(),
            Object(c.a)(),
            Object(u.a)(),
            Object(h.a)(),
            Object(d.a)(),
            Object(f.a)(),
            Object(p.a)(),
            Object(o.a)(),
            Object(v.a)(),
            Object(m.a)(),
            Object(g.a)(),
            Object(y.a)(),
            Object(b.a)(),
            Object(w.a)(),
            Object(k.a)(),
            Object(C.a)()
        }
        ))
    }
    .call(this, n(0))
}
, function(t, e, n) {
    var i = n(15)
      , r = n(47)
      , s = n(50)
      , o = Math.max
      , a = Math.min;
    t.exports = function(t, e, n) {
        var l, c, u, h, d, f, p = 0, v = !1, m = !1, g = !0;
        if ("function" != typeof t)
            throw new TypeError("Expected a function");
        function y(e) {
            var n = l
              , i = c;
            return l = c = void 0,
            p = e,
            h = t.apply(i, n)
        }
        function b(t) {
            var n = t - f;
            return void 0 === f || n >= e || n < 0 || m && t - p >= u
        }
        function w() {
            var t = r();
            if (b(t))
                return k(t);
            d = setTimeout(w, function(t) {
                var n = e - (t - f);
                return m ? a(n, u - (t - p)) : n
            }(t))
        }
        function k(t) {
            return d = void 0,
            g && l ? y(t) : (l = c = void 0,
            h)
        }
        function C() {
            var t = r()
              , n = b(t);
            if (l = arguments,
            c = this,
            f = t,
            n) {
                if (void 0 === d)
                    return function(t) {
                        return p = t,
                        d = setTimeout(w, e),
                        v ? y(t) : h
                    }(f);
                if (m)
                    return clearTimeout(d),
                    d = setTimeout(w, e),
                    y(f)
            }
            return void 0 === d && (d = setTimeout(w, e)),
            h
        }
        return e = s(e) || 0,
        i(n) && (v = !!n.leading,
        u = (m = "maxWait"in n) ? o(s(n.maxWait) || 0, e) : u,
        g = "trailing"in n ? !!n.trailing : g),
        C.cancel = function() {
            void 0 !== d && clearTimeout(d),
            p = 0,
            l = f = c = d = void 0
        }
        ,
        C.flush = function() {
            return void 0 === d ? h : k(r())
        }
        ,
        C
    }
}
, function(t, e, n) {
    var i = n(17);
    t.exports = function() {
        return i.Date.now()
    }
}
, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }
    ).call(this, n(49))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    var i = n(15)
      , r = n(51)
      , s = /^\s+|\s+$/g
      , o = /^[-+]0x[0-9a-f]+$/i
      , a = /^0b[01]+$/i
      , l = /^0o[0-7]+$/i
      , c = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t)
            return t;
        if (r(t))
            return NaN;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = t.replace(s, "");
        var n = a.test(t);
        return n || l.test(t) ? c(t.slice(2), n ? 2 : 8) : o.test(t) ? NaN : +t
    }
}
, function(t, e, n) {
    var i = n(52)
      , r = n(55);
    t.exports = function(t) {
        return "symbol" == typeof t || r(t) && "[object Symbol]" == i(t)
    }
}
, function(t, e, n) {
    var i = n(18)
      , r = n(53)
      , s = n(54)
      , o = i ? i.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : s(t)
    }
}
, function(t, e, n) {
    var i = n(18)
      , r = Object.prototype
      , s = r.hasOwnProperty
      , o = r.toString
      , a = i ? i.toStringTag : void 0;
    t.exports = function(t) {
        var e = s.call(t, a)
          , n = t[a];
        try {
            t[a] = void 0;
            var i = !0
        } catch (t) {}
        var r = o.call(t);
        return i && (e ? t[a] = n : delete t[a]),
        r
    }
}
, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}
, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}
, function(t, e) {
    appear = function() {
        "use strict";
        var t = null
          , e = 0
          , n = {};
        return addEventListener("scroll", (function() {
            var i = window.scrollY || window.pageYOffset;
            null != t && (n.velocity = i - t,
            n.delta = n.velocity >= 0 ? n.velocity : -1 * n.velocity),
            t = i,
            e && clearTimeout(e),
            e = setTimeout((function() {
                t = null
            }
            ), 30)
        }
        ), !1),
        function(t) {
            return function(t) {
                var e, i, r, s, o = !1, a = [], l = [], c = 0, u = 0, h = {};
                function d() {
                    n.delta < h.delta.speed && (r || (r = !0,
                    v(),
                    setTimeout((function() {
                        r = !1
                    }
                    ), h.delta.timeout))),
                    function(t, e) {
                        return function() {
                            var n = this
                              , r = arguments;
                            clearTimeout(i),
                            i = setTimeout((function() {
                                t.apply(n, r)
                            }
                            ), e)
                        }
                    }((function() {
                        v()
                    }
                    ), h.debounce)()
                }
                function f() {
                    v(),
                    addEventListener("scroll", d, !1),
                    addEventListener("resize", d, !1)
                }
                function p() {
                    removeEventListener("scroll", d, !1),
                    removeEventListener("resize", d, !1)
                }
                function v() {
                    s || (a.forEach((function(t, e) {
                        t && function(t, e) {
                            var n = t.getBoundingClientRect();
                            return n.top + n.height >= 0 && n.left + n.width >= 0 && n.bottom - n.height <= (window.innerHeight || document.documentElement.clientHeight) + e && n.right - n.width <= (window.innerWidth || document.documentElement.clientWidth) + e
                        }(t, h.bounds) ? l[e] && (l[e] = !1,
                        c++,
                        h.appear && h.appear(t),
                        h.disappear || h.reappear || (a[e] = null)) : (!1 === l[e] && (h.disappear && h.disappear(t),
                        u++,
                        h.reappear || (a[e] = null)),
                        l[e] = !0)
                    }
                    )),
                    h.reappear || h.appear && (!h.appear || c !== e) || h.disappear && (!h.disappear || u !== e) || (s = !0,
                    p(),
                    h.done && h.done()))
                }
                function m() {
                    var t;
                    if (!o && (o = !0,
                    h.init && h.init(),
                    t = "function" == typeof h.elements ? h.elements() : h.elements)) {
                        e = t.length;
                        for (var n = 0; n < e; n += 1)
                            a.push(t[n]),
                            l.push(!0);
                        f()
                    }
                }
                return function(t) {
                    return h = {
                        init: (t = t || {}).init,
                        elements: t.elements,
                        appear: t.appear,
                        disappear: t.disappear,
                        done: t.done,
                        reappear: t.reappear,
                        bounds: t.bounds || 0,
                        debounce: t.debounce || 50,
                        delta: {
                            speed: t.deltaSpeed || 50,
                            timeout: t.deltaTimeout || 500
                        }
                    },
                    addEventListener("DOMContentLoaded", m, !1),
                    "complete" !== document.readyState && "loaded" !== document.readyState && "interactive" !== document.readyState || m(),
                    {
                        trigger: function() {
                            v()
                        },
                        pause: function() {
                            p()
                        },
                        resume: function() {
                            f()
                        },
                        destroy: function() {
                            a = [],
                            i && clearTimeout(i),
                            p()
                        }
                    }
                }
            }()(t)
        }
    }()
}
, function(t, e, n) {
    var i = function(t) {
        "use strict";
        var e, n = Object.prototype, i = n.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {}, s = r.iterator || "@@iterator", o = r.asyncIterator || "@@asyncIterator", a = r.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            t[e]
        }
        try {
            l({}, "")
        } catch (t) {
            l = function(t, e, n) {
                return t[e] = n
            }
        }
        function c(t, e, n, i) {
            var r = e && e.prototype instanceof m ? e : m
              , s = Object.create(r.prototype)
              , o = new A(i || []);
            return s._invoke = function(t, e, n) {
                var i = h;
                return function(r, s) {
                    if (i === f)
                        throw new Error("Generator is already running");
                    if (i === p) {
                        if ("throw" === r)
                            throw s;
                        return E()
                    }
                    for (n.method = r,
                    n.arg = s; ; ) {
                        var o = n.delegate;
                        if (o) {
                            var a = _(o, n);
                            if (a) {
                                if (a === v)
                                    continue;
                                return a
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === h)
                                throw i = p,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        i = f;
                        var l = u(t, e, n);
                        if ("normal" === l.type) {
                            if (i = n.done ? p : d,
                            l.arg === v)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (i = p,
                        n.method = "throw",
                        n.arg = l.arg)
                    }
                }
            }(t, n, o),
            s
        }
        function u(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = c;
        var h = "suspendedStart"
          , d = "suspendedYield"
          , f = "executing"
          , p = "completed"
          , v = {};
        function m() {}
        function g() {}
        function y() {}
        var b = {};
        b[s] = function() {
            return this
        }
        ;
        var w = Object.getPrototypeOf
          , k = w && w(w(z([])));
        k && k !== n && i.call(k, s) && (b = k);
        var C = y.prototype = m.prototype = Object.create(b);
        function x(t) {
            ["next", "throw", "return"].forEach((function(e) {
                l(t, e, (function(t) {
                    return this._invoke(e, t)
                }
                ))
            }
            ))
        }
        function $(t, e) {
            var n;
            this._invoke = function(r, s) {
                function o() {
                    return new e((function(n, o) {
                        !function n(r, s, o, a) {
                            var l = u(t[r], t, s);
                            if ("throw" !== l.type) {
                                var c = l.arg
                                  , h = c.value;
                                return h && "object" == typeof h && i.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                    n("next", t, o, a)
                                }
                                ), (function(t) {
                                    n("throw", t, o, a)
                                }
                                )) : e.resolve(h).then((function(t) {
                                    c.value = t,
                                    o(c)
                                }
                                ), (function(t) {
                                    return n("throw", t, o, a)
                                }
                                ))
                            }
                            a(l.arg)
                        }(r, s, n, o)
                    }
                    ))
                }
                return n = n ? n.then(o, o) : o()
            }
        }
        function _(t, n) {
            var i = t.iterator[n.method];
            if (i === e) {
                if (n.delegate = null,
                "throw" === n.method) {
                    if (t.iterator.return && (n.method = "return",
                    n.arg = e,
                    _(t, n),
                    "throw" === n.method))
                        return v;
                    n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var r = u(i, t.iterator, n.arg);
            if ("throw" === r.type)
                return n.method = "throw",
                n.arg = r.arg,
                n.delegate = null,
                v;
            var s = r.arg;
            return s ? s.done ? (n[t.resultName] = s.value,
            n.next = t.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = e),
            n.delegate = null,
            v) : s : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            v)
        }
        function T(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function S(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function A(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(T, this),
            this.reset(!0)
        }
        function z(t) {
            if (t) {
                var n = t[s];
                if (n)
                    return n.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var r = -1
                      , o = function n() {
                        for (; ++r < t.length; )
                            if (i.call(t, r))
                                return n.value = t[r],
                                n.done = !1,
                                n;
                        return n.value = e,
                        n.done = !0,
                        n
                    };
                    return o.next = o
                }
            }
            return {
                next: E
            }
        }
        function E() {
            return {
                value: e,
                done: !0
            }
        }
        return g.prototype = C.constructor = y,
        y.constructor = g,
        g.displayName = l(y, a, "GeneratorFunction"),
        t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
            l(t, a, "GeneratorFunction")),
            t.prototype = Object.create(C),
            t
        }
        ,
        t.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        x($.prototype),
        $.prototype[o] = function() {
            return this
        }
        ,
        t.AsyncIterator = $,
        t.async = function(e, n, i, r, s) {
            void 0 === s && (s = Promise);
            var o = new $(c(e, n, i, r),s);
            return t.isGeneratorFunction(n) ? o : o.next().then((function(t) {
                return t.done ? t.value : o.next()
            }
            ))
        }
        ,
        x(C),
        l(C, a, "Generator"),
        C[s] = function() {
            return this
        }
        ,
        C.toString = function() {
            return "[object Generator]"
        }
        ,
        t.keys = function(t) {
            var e = [];
            for (var n in t)
                e.push(n);
            return e.reverse(),
            function n() {
                for (; e.length; ) {
                    var i = e.pop();
                    if (i in t)
                        return n.value = i,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        t.values = z,
        A.prototype = {
            constructor: A,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = e,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = e,
                this.tryEntries.forEach(S),
                !t)
                    for (var n in this)
                        "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var n = this;
                function r(i, r) {
                    return a.type = "throw",
                    a.arg = t,
                    n.next = i,
                    r && (n.method = "next",
                    n.arg = e),
                    !!r
                }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var o = this.tryEntries[s]
                      , a = o.completion;
                    if ("root" === o.tryLoc)
                        return r("end");
                    if (o.tryLoc <= this.prev) {
                        var l = i.call(o, "catchLoc")
                          , c = i.call(o, "finallyLoc");
                        if (l && c) {
                            if (this.prev < o.catchLoc)
                                return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc)
                                return r(o.finallyLoc)
                        } else if (l) {
                            if (this.prev < o.catchLoc)
                                return r(o.catchLoc, !0)
                        } else {
                            if (!c)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc)
                                return r(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var s = r;
                        break
                    }
                }
                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                var o = s ? s.completion : {};
                return o.type = t,
                o.arg = e,
                s ? (this.method = "next",
                this.next = s.finallyLoc,
                v) : this.complete(o)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                v
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                        return this.complete(n.completion, n.afterLoc),
                        S(n),
                        v
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var i = n.completion;
                        if ("throw" === i.type) {
                            var r = i.arg;
                            S(n)
                        }
                        return r
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, n, i) {
                return this.delegate = {
                    iterator: z(t),
                    resultName: n,
                    nextLoc: i
                },
                "next" === this.method && (this.arg = e),
                v
            }
        },
        t
    }(t.exports);
    try {
        regeneratorRuntime = i
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(i)
    }
}
, function(t, e, n) {}
]);
