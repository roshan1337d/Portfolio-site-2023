(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [383], {
        7429: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/postdetails/[slug]", function () {
                return s(5724)
            }])
        },
        5724: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function () {
                    return b
                }
            });
            var a = s(5893),
                n = s(7294),
                i = s(9008),
                l = s.n(i),
                r = s(1163),
                c = s(7441),
                o = s(5675),
                d = s.n(o),
                u = s(1664),
                m = s.n(u),
                h = s(5629),
                x = s(4646),
                p = s(5770),
                f = s(4147),
                g = s(4571),
                j = s(9009),
                b = !0;
            t.default = function (e) {
                var t = e.title,
                    s = e.date,
                    i = e.cover,
                    o = e.category,
                    u = e.content,
                    b = (0, n.useState)(!1),
                    v = b[0],
                    N = b[1],
                    y = (0, r.useRouter)().query.slug;
                return (0, n.useEffect)((function () {
                    N(!0)
                }), []), v ? (0, a.jsxs)(f.A, {
                    children: [(0, a.jsx)(l(), {
                        children: (0, a.jsxs)("title", {
                            children: [t, " - Roshan Dash - Web & cloud developer"]
                        })
                    }), (0, a.jsx)(p.aG, {
                        title: t,
                        paths: [{
                            name: "Home",
                            link: "/"
                        }, {
                            name: "Blogs",
                            link: "/posts/1"
                        }, {
                            name: t,
                            link: ""
                        }]
                    }), (0, a.jsx)("div", {
                        className: "single-post py-24 lg:py-28 xl:py-32",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto",
                            children: [(0, a.jsxs)("div", {
                                className: "post-header mb-8",
                                children: [(0, a.jsx)("div", {
                                    className: "fiximage mb-5 overflow-hidden rounded border border-white border-opacity-20",
                                    children: (0, a.jsx)(d(), {
                                        loader: x.XI,
                                        unoptimized: !0,
                                        src: i,
                                        height: 650,
                                        width: 1350,
                                        alt: "Blog Image",
                                        layout: "responsive",
                                        objectFit: "cover",
                                        placeholder: "blur",
                                        blurDataURL: "data:image/svg+xml;base64,".concat((0, x.s3)((0, x.f8)(1350, 650)))
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-wrap justify-between gap-x-4",
                                    children: [(0, a.jsxs)("div", {
                                        className: "mb-0 flex gap-2 text-heading",
                                        children: ["Category :", " ", (0, a.jsx)("div", {
                                            className: "inline-flex list-none gap-1.5",
                                            children: o.map((function (e, t) {
                                                return (0, a.jsx)("span", {
                                                    className: "after:content-[','] last:after:hidden",
                                                    children: (0, a.jsx)(m(), {
                                                        href: "/category/".concat((0, h.qi)(e), "/1"),
                                                        children: (0, a.jsx)("a", {
                                                            className: "text-body hover:text-primary",
                                                            children: e
                                                        })
                                                    })
                                                }, t)
                                            }))
                                        })]
                                    }), (0, a.jsxs)("p", {
                                        className: "mb-0 text-heading",
                                        children: ["Published on :", (0, a.jsx)("span", {
                                            className: "ml-1.5 text-body",
                                            children: "".concat(new Date(s).toLocaleDateString("en-us", {
                                                month: "short"
                                            }), " ").concat(new Date(s).toLocaleDateString("en-us", {
                                                day: "2-digit"
                                            }), ", ").concat(new Date(s).getFullYear({
                                                year: "numeric"
                                            }))
                                        })]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "post-body mt-4",
                                dangerouslySetInnerHTML: {
                                    __html: (0, c.TU)(u)
                                }
                            }), (0, a.jsx)("div", {
                                className: "post-comments mt-8",
                                children: (0, a.jsx)(j.Z, {
                                    title: t,
                                    slug: y
                                })
                            })]
                        })
                    })]
                }) : (0, a.jsx)("div", {
                    className: "block py-20 text-center",
                    children: (0, a.jsx)(g.$j, {})
                })
            }
        }
    },
    function (e) {
        e.O(0, [937, 334, 523, 441, 147, 774, 888, 179], (function () {
            return t = 7429, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);