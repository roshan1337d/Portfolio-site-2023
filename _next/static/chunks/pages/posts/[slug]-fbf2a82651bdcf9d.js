(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [922], {
        843: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/posts/[slug]", function () {
                return t(8287)
            }])
        },
        3547: function (e, n, t) {
            "use strict";
            t.d(n, {
                d: function () {
                    return r
                }
            });
            var r = {
                visible: {
                    y: 0,
                    opacity: 1
                },
                hidden: {
                    y: 20,
                    opacity: 0
                }
            }
        },
        8287: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSG: function () {
                    return g
                }
            });
            var r = t(5893),
                s = t(9008),
                i = t.n(s),
                a = t(1664),
                l = t.n(a),
                c = t(1163),
                o = t(7592),
                d = t(7294),
                u = t(5770),
                h = t(5629),
                p = t(3547),
                m = t(4147);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function x(e) {
                return function (e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(e, n)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = !0;
            n.default = function (e) {
                var n = e.posts,
                    t = e.hasMore,
                    s = e.categories,
                    a = e.recentPosts,
                    f = (0, d.useState)(!1),
                    g = f[0],
                    j = f[1],
                    y = (0, d.useState)([]),
                    b = y[0],
                    v = y[1],
                    N = (0, c.useRouter)().query.slug;
                return (0, d.useEffect)((function () {
                    j(!0)
                }), []), (0, d.useEffect)((function () {
                    v(x(new Set(s)))
                }), [s]), g ? n ? (0, r.jsxs)(m.A, {
                    children: [(0, r.jsx)(i(), {
                        children: (0, r.jsx)("title", {
                            children: "Blogs - Roshan Dash - Web & cloud developer"
                        })
                    }), (0, r.jsx)(u.aG, {
                        title: "Blogs",
                        paths: [{
                            name: "Home",
                            link: "/"
                        }, {
                            name: "Blogs",
                            link: ""
                        }]
                    }), (0, r.jsx)("div", {
                        className: "blogs py-24 lg:py-28 xl:py-32",
                        children: (0, r.jsx)("div", {
                            className: "container mx-auto",
                            children: (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 gap-7 lg:grid-cols-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "col-span-1 lg:col-span-9",
                                    children: [(0, r.jsx)("div", {
                                        className: "grid grid-cols-2 gap-7",
                                        children: n && (null === n || void 0 === n ? void 0 : n.map((function (e, n) {
                                            return (0, r.jsx)(o.E.div, {
                                                initial: "hidden",
                                                whileInView: "visible",
                                                viewport: {
                                                    once: !0
                                                },
                                                transition: {
                                                    delay: .2 * n
                                                },
                                                variants: p.d,
                                                className: "col-span-2 sm:col-span-1",
                                                children: (0, r.jsx)(u.l3, {
                                                    post: e
                                                })
                                            }, n)
                                        })))
                                    }), (0, r.jsxs)("div", {
                                        className: "flex gap-3 pt-10 text-center",
                                        children: ["1" !== N && (0, r.jsx)(l(), {
                                            href: "/posts/".concat(String(parseInt(N) - 1)),
                                            children: (0, r.jsx)("a", {
                                                className: "btn btn-small",
                                                children: (0, r.jsx)("span", {
                                                    children: "Prev"
                                                })
                                            })
                                        }), t && (0, r.jsx)(l(), {
                                            href: "/posts/".concat(String(parseInt(N) + 1)),
                                            children: (0, r.jsx)("a", {
                                                className: "btn btn-small",
                                                children: (0, r.jsx)("span", {
                                                    children: "Next"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "col-span-1 lg:col-span-3",
                                    children: (0, r.jsxs)("div", {
                                        className: "widget sticky top-[107px] mt-8 space-y-10 lg:mt-0",
                                        children: [(0, r.jsxs)(o.E.div, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                delay: .2
                                            },
                                            variants: p.d,
                                            className: "widget widget-category card rounded p-4",
                                            children: [(0, r.jsx)("h5", {
                                                className: "border-b border-white border-opacity-20 pb-2 font-medium text-primary",
                                                children: "Categories"
                                            }), (0, r.jsx)("ul", {
                                                className: "styledlist mb-0 list-none pl-0",
                                                children: b.map((function (e, n) {
                                                    return (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(l(), {
                                                            href: "/category/".concat((0, h.qi)(e), "/1"),
                                                            children: (0, r.jsxs)("a", {
                                                                className: "clearfix hover:text-primary",
                                                                children: [e, (0, r.jsxs)("span", {
                                                                    className: "float-right",
                                                                    children: ["(", s.filter((function (n) {
                                                                        return n === e
                                                                    })).length, ")"]
                                                                })]
                                                            })
                                                        })
                                                    }, n)
                                                }))
                                            })]
                                        }), (0, r.jsxs)(o.E.div, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                delay: .4
                                            },
                                            variants: p.d,
                                            className: "widget widget-recentpost card rounded p-4",
                                            children: [(0, r.jsx)("h5", {
                                                className: "border-b border-white border-opacity-20 pb-2 font-medium text-primary",
                                                children: "Recent Posts"
                                            }), (0, r.jsx)("ul", {
                                                className: "mb-0 list-none pl-0",
                                                children: a.map((function (e, n) {
                                                    return (0, r.jsxs)("li", {
                                                        className: "mb-4 last:mb-0",
                                                        children: [(0, r.jsx)("p", {
                                                            className: "mb-0",
                                                            children: (0, r.jsx)(l(), {
                                                                href: "/postdetails/".concat(e.slug),
                                                                children: (0, r.jsxs)("a", {
                                                                    className: "text-heading no-underline hover:text-primary hover:underline",
                                                                    children: [e.title, " "]
                                                                })
                                                            })
                                                        }), (0, r.jsx)("small", {
                                                            className: "text-body",
                                                            children: "".concat(new Date(e.date).toLocaleDateString("en-us", {
                                                                month: "short"
                                                            }), " ").concat(new Date(e.date).toLocaleDateString("en-us", {
                                                                day: "2-digit"
                                                            }), ", ").concat(new Date(e.date).getFullYear({
                                                                year: "numeric"
                                                            }))
                                                        })]
                                                    }, n)
                                                }))
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                }) : null : (0, r.jsx)("p", {
                    className: "text-center",
                    children: "Loading..."
                })
            }
        }
    },
    function (e) {
        e.O(0, [937, 334, 523, 147, 774, 888, 179], (function () {
            return n = 843, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);