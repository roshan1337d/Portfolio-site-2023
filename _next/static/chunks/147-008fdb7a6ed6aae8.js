"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [147], {
        5770: function (e, r, t) {
            t.d(r, {
                l3: function () {
                    return u
                },
                aG: function () {
                    return z
                },
                _Y: function () {
                    return x
                },
                ko: function () {
                    return b
                },
                _3: function () {
                    return j
                },
                Cq: function () {
                    return y
                },
                t6: function () {
                    return N
                },
                HE: function () {
                    return k
                },
                jq: function () {
                    return C
                }
            });
            var n = t(5893),
                i = t(5675),
                a = t.n(i),
                l = t(1664),
                s = t.n(l),
                o = t(5629),
                c = t(4646),
                u = function (e) {
                    var r = e.post,
                        t = r.title,
                        i = r.date,
                        l = r.thumb,
                        u = r.category,
                        d = r.slug;
                    return (0, n.jsxs)("article", {
                        className: "blog card p-4 md:p-5",
                        children: [(0, n.jsxs)("div", {
                            className: "blog-top relative mb-4",
                            children: [(0, n.jsx)(s(), {
                                href: "/postdetails/".concat(d),
                                children: (0, n.jsx)("a", {
                                    className: "fiximage hover-scale block",
                                    title: t,
                                    children: (0, n.jsx)(a(), {
                                        loader: c.XI,
                                        unoptimized: !0,
                                        src: l,
                                        height: 240,
                                        width: 400,
                                        alt: "Blog Image",
                                        layout: "responsive",
                                        objectFit: "cover",
                                        placeholder: "blur",
                                        blurDataURL: "data:image/svg+xml;base64,".concat((0, c.s3)((0, c.f8)(400, 240)))
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey",
                                children: [(0, n.jsx)("span", {
                                    className: "month block text-sm uppercase leading-none",
                                    children: new Date(i).toLocaleDateString("en-us", {
                                        month: "short"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "date block text-2xl leading-none",
                                    children: new Date(i).toLocaleDateString("en-us", {
                                        day: "2-digit"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "year block text-sm leading-none",
                                    children: new Date(i).getFullYear({
                                        year: "numeric"
                                    })
                                })]
                            })]
                        }), (0, n.jsx)("h5", {
                            className: "mb-0",
                            children: (0, n.jsx)(s(), {
                                href: "/postdetails/".concat(d),
                                children: (0, n.jsx)("a", {
                                    className: " block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary",
                                    title: t,
                                    children: t
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex list-none gap-1.5 text-sm",
                            children: u.map((function (e, r) {
                                return (0, n.jsx)("span", {
                                    className: "after:content-[','] last:after:hidden",
                                    children: (0, n.jsx)(s(), {
                                        href: "/category/".concat((0, o.qi)(e), "/1"),
                                        children: (0, n.jsx)("a", {
                                            className: " hover:text-primary",
                                            children: e
                                        })
                                    })
                                }, r)
                            }))
                        })]
                    })
                },
                d = t(1129),
                p = t.n(d),
                m = t(7294),
                h = t(9352),
                f = t(779),
                x = function (e) {
                    var r = e.portfolio,
                        t = r.title,
                        i = r.subtitle,
                        l = r.coverimage,
                        o = r.imagegallery,
                        u = r.videogallery,
                        d = r.url,
                        gh = r.github,
                        x = (0, m.useState)(!1),
                        g = x[0],
                        b = x[1],
                        j = (0, m.useState)(!1),
                        v = j[0],
                        y = j[1];
                    return (0, n.jsxs)("div", {
                        className: "portfolio card hovercard group p-4 md:p-5",
                        children: [(0, n.jsxs)("div", {
                            className: "portfolio-top relative overflow-hidden",
                            children: [(0, n.jsx)("div", {
                                className: "portfolio-image fiximage blur-0 filter transition-all duration-500",
                                children: (0, n.jsx)(a(), {
                                    loader: c.XI,
                                    unoptimized: !0,
                                    src: l,
                                    height: 384,
                                    width: 550,
                                    alt: t,
                                    layout: "responsive",
                                    placeholder: "blur",
                                    blurDataURL: "data:image/svg+xml;base64,".concat((0, c.s3)((0, c.f8)(550, 384)))
                                })
                            }), (0, n.jsxs)("div", {
                                className: "portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-95 transition-all duration-500 group-hover:translate-x-0",
                                children: [o.length ? (0, n.jsx)("button", {
                                    className: "inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey",
                                    onClick: function () {
                                        return y(!0)
                                    },
                                    children: (0, n.jsx)(h.PBv, {})
                                }) : null, u.length ? (0, n.jsx)("button", {
                                    className: "inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey",
                                    onClick: function () {
                                        return b(!0)
                                    },
                                    children: (0, n.jsx)(h.yMK, {})
                                }) : null, gh ? (0, n.jsx)(s(), {
                                    href: gh,
                                    children: (0, n.jsx)("a", {
                                        target: "_blank",
                                        className: "inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey",
                                        children: (0, n.jsx)(h.uXPGH, {})
                                    })
                                }) : null, d ? (0, n.jsx)(s(), {
                                    href: d,
                                    children: (0, n.jsx)("a", {
                                        target: "_blank",
                                        className: "inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey",
                                        children: (0, n.jsx)(h.uXP, {})
                                    })
                                }) : null]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "portfolio-content mt-4",
                            children: [(0, n.jsx)("h5", {
                                className: "mb-0",
                                children: t
                            }), (0, n.jsx)("p", {
                                children: i
                            })]
                        }), o && (0, n.jsx)(f.Z, {
                            children: (0, n.jsx)(p(), {
                                toggler: v,
                                sources: o
                            })
                        }), u && (0, n.jsx)(f.Z, {
                            children: (0, n.jsx)(p(), {
                                toggler: g,
                                sources: u
                            })
                        })]
                    })
                },
                g = t(7592),
                b = function (e) {
                    var r = e.skill,
                        t = r.title,
                        i = r.percentage;
                    return (0, n.jsxs)("div", {
                        className: "progress",
                        children: [(0, n.jsxs)("h5", {
                            children: [(0, n.jsxs)("span", {
                                className: "text-primary",
                                children: ["[", i, "%]"]
                            }), " → ", t]
                        }), (0, n.jsx)("div", {
                            className: "progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20",
                            children: (0, n.jsx)(g.E.span, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 1
                                },
                                variants: {
                                    visible: {
                                        scaleX: 1,
                                        originX: 0
                                    },
                                    hidden: {
                                        scaleX: 0,
                                        originX: 0
                                    }
                                },
                                className: "progress-progress absolute left-0 top-0 h-full rounded-full bg-primary",
                                style: {
                                    width: "".concat(i, "%")
                                }
                            })
                        })]
                    })
                },
                j = function (e) {
                    var r = e.skill,
                        t = r.title,
                        i = r.percentage,
                        a = {
                            hidden: {
                                pathLength: 0,
                                opacity: 0
                            },
                            visible: {
                                pathLength: i / 100,
                                opacity: 1
                            }
                        };
                    return (0, n.jsxs)("div", {
                        className: "circleprogress card hovercard relative p-4 text-center md:p-5",
                        children: [(0, n.jsxs)("div", {
                            className: "relative mb-2 inline-block text-primary",
                            children: [(0, n.jsxs)(g.E.svg, {
                                className: "circle",
                                width: "120",
                                height: "120",
                                viewBox: "0 0 120 120",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                children: [(0, n.jsx)(g.E.circle, {
                                    className: "circlebg",
                                    cx: "60",
                                    cy: "60",
                                    r: "54",
                                    pathLength: "1",
                                    strokeLinecap: "round",
                                    strokeWidth: 12
                                }), (0, n.jsx)(g.E.circle, {
                                    cx: "60",
                                    cy: "60",
                                    r: "54",
                                    strokeLinecap: "round",
                                    strokeWidth: 12,
                                    variants: a,
                                    transition: {
                                        duration: 1
                                    }
                                })]
                            }), (0, n.jsxs)("span", {
                                className: "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body",
                                children: [i, "%"]
                            })]
                        }), (0, n.jsx)("h5", {
                            children: t
                        })]
                    })
                },
                v = t(9503),
                y = function (e) {
                    var r = e.review,
                        t = r.name,
                        i = r.meta,
                        l = r.givenreview,
                        s = r.image,
                        o = r.text;
                    return (0, n.jsxs)("div", {
                        className: "review card mt-11 p-4 md:p-5",
                        children: [(0, n.jsx)("div", {
                            className: "review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16",
                            children: (0, n.jsx)(a(), {
                                loader: c.XI,
                                unoptimized: !0,
                                src: s,
                                alt: "user image",
                                height: 80,
                                width: 80,
                                layout: "responsive",
                                placeholder: "blur",
                                blurDataURL: "data:image/svg+xml;base64,".concat((0, c.s3)((0, c.f8)(80, 80)))
                            })
                        }), (0, n.jsx)("h5", {
                            className: "mb-0",
                            children: t
                        }), (0, n.jsx)("p", {
                            className: "mb-2 text-body",
                            children: (0, n.jsx)("small", {
                                children: i
                            })
                        }), (0, n.jsx)("div", {
                            className: "review-stars mb-3",
                            children: (0, n.jsx)(v.Z, {
                                rating: Number(l),
                                starRatedColor: "#FFD233",
                                numberOfStars: 5,
                                name: "rating",
                                starSpacing: "2px",
                                starDimension: "18px"
                            })
                        }), (0, n.jsx)("p", {
                            children: o
                        })]
                    })
                },
                w = t(7098),
                N = function (e) {
                    var r = e.service,
                        t = r.title,
                        i = r.text,
                        a = r.subtitle;
                    return (0, n.jsxs)("div", {
                        className: "service card hovercard relative overflow-hidden p-4 md:p-5",
                        children: [(0, n.jsx)("h5", {
                            children: t
                        }), (0, n.jsx)("div", {
                            className: "text-primary mb-2 -mt-1",
                            children: a
                        }), (0, n.jsx)("p", {
                            children: i
                        })]
                    })
                },
                k = function (e) {
                    var r = e.data,
                        t = e.rounded;
                    return r ? (0, n.jsxs)("ul", {
                        className: "mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4",
                        children: [r.facebook && (0, n.jsx)("li", {
                            className: "inline-block align-middle",
                            children: (0, n.jsxs)("a", {
                                href: r.facebook,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ".concat(t ? "rounded-full" : "rounded"),
                                children: [(0, n.jsx)("span", {
                                    className: "front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full",
                                    children: (0, n.jsx)(h.NqZ, {
                                        className: "inline-block"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0",
                                    children: (0, n.jsx)(h.NqZ, {
                                        className: "inline-block"
                                    })
                                })]
                            })
                        }), r.twitter && (0, n.jsx)("li", {
                            className: "inline-block align-middle",
                            children: (0, n.jsxs)("a", {
                                href: r.twitter,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ".concat(t ? "rounded-full" : "rounded"),
                                children: [(0, n.jsx)("span", {
                                    className: "front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full",
                                    children: (0, n.jsx)(h.x2F, {
                                        className: "inline-block"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0",
                                    children: (0, n.jsx)(h.x2F, {
                                        className: "inline-block"
                                    })
                                })]
                            })
                        }), r.github && (0, n.jsx)("li", {
                            className: "inline-block align-middle",
                            children: (0, n.jsxs)("a", {
                                href: r.github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ".concat(t ? "rounded-full" : "rounded"),
                                children: [(0, n.jsx)("span", {
                                    className: "front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full",
                                    children: (0, n.jsx)(h.q7V, {
                                        className: "inline-block"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0",
                                    children: (0, n.jsx)(h.q7V, {
                                        className: "inline-block"
                                    })
                                })]
                            })
                        }), r.linkedin && (0, n.jsx)("li", {
                            className: "inline-block align-middle",
                            children: (0, n.jsxs)("a", {
                                href: r.linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ".concat(t ? "rounded-full" : "rounded"),
                                children: [(0, n.jsx)("span", {
                                    className: "front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full",
                                    children: (0, n.jsx)(h.tsq, {
                                        className: "inline-block"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0",
                                    children: (0, n.jsx)(h.tsq, {
                                        className: "inline-block"
                                    })
                                })]
                            })
                        }), r.resume && (0, n.jsx)("li", {
                            className: "inline-block align-middle",
                            children: (0, n.jsxs)("a", {
                                href: r.resume,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ".concat(t ? "rounded-full" : "rounded"),
                                children: [(0, n.jsx)("span", {
                                    className: "front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full",
                                    children: (0, n.jsx)(h.w6U, {
                                        className: "inline-block"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0",
                                    children: (0, n.jsx)(h.w6U, {
                                        className: "inline-block"
                                    })
                                })]
                            })
                        })]
                    }) : null
                },
                C = function (e) {
                    var r = e.timeline,
                        t = r.title,
                        i = r.meta,
                        a = r.text,
                        l = r.year;
                    return (0, n.jsxs)("div", {
                        className: "timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex",
                        children: [(0, n.jsx)("span", {
                            className: "timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0",
                            children: l
                        }), (0, n.jsxs)("div", {
                            className: "timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6",
                            children: [(0, n.jsxs)("span", {
                                className: "absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20",
                                children: [(0, n.jsx)("span", {
                                    className: "absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"
                                }), (0, n.jsx)("span", {
                                    className: "absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"
                                })]
                            }), (0, n.jsx)("h5", {
                                className: "mb-0 text-primary",
                                children: t
                            }), (0, n.jsx)("p", {
                                className: "mb-2 text-heading",
                                children: i
                            }), (0, n.jsx)("p", {
                                children: a
                            })]
                        })]
                    })
                },
                z = function (e) {
                    var r = e.title,
                        t = e.paths,
                        i = e.blurred;
                    return (0, n.jsxs)("div", {
                        className: "breadcrumb-wrap relative",
                        children: [!i && (0, n.jsx)("div", {
                            className: "breadcrumb-bg absolute left-0 top-0 h-full w-full"
                        }), (0, n.jsx)("div", {
                            className: "relative z-20 bg-grey-darken pt-[73px] ".concat(i ? "bg-opacity-20" : "bg-opacity-90"),
                            children: (0, n.jsx)("div", {
                                className: "container mx-auto",
                                children: (0, n.jsxs)("div", {
                                    className: "breadcrumb py-16 text-center lg:py-20",
                                    children: [(0, n.jsx)("h2", {
                                        className: "capitalize text-primary",
                                        children: r
                                    }), Array.isArray(t) && t.length && (0, n.jsx)("ul", {
                                        className: "mb-0 inline-flex list-none flex-wrap justify-center gap-x-2 pl-0",
                                        children: t.map((function (e) {
                                            return (0, n.jsx)("li", {
                                                className: "inline-block capitalize",
                                                children: e.link ? (0, n.jsx)(s(), {
                                                    href: e.link,
                                                    children: (0, n.jsx)("a", {
                                                        className: "text-heading hover:text-primary",
                                                        children: e.name
                                                    })
                                                }) : e.name
                                            }, e.name)
                                        }))
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        4147: function (e, r, t) {
            t.d(r, {
                A: function () {
                    return y
                },
                H: function () {
                    return I
                }
            });
            var n = t(5893),
                i = t(7592),
                a = t(7294),
                l = t(6261),
                s = t(1664),
                o = t.n(s),
                c = t(8767),
                u = t(8579),
                d = t(5770),
                p = function () {
                    var e = (0, c.useQuery)("information", u.H9).data;
                    return e ? (0, n.jsx)("footer", {
                        className: "footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter",
                        children: (0, n.jsx)("div", {
                            className: "container mx-auto",
                            children: (0, n.jsxs)("div", {
                                className: "footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap",
                                children: [(0, n.jsx)("div", {
                                    className: "w-full md:w-auto",
                                    children: (0, n.jsx)(d.HE, {
                                        data: e.socialAddress
                                    })
                                }), (0, n.jsxs)("p", {
                                    className: "mb-0 w-full md:w-auto",
                                    children: ["\xa9 ", (new Date).getFullYear(), ", All right reserved", (0, n.jsx)("span", {
                                        href: "/",
                                        children: (0, n.jsx)("a", {
                                            className: "pl-1.5 font-medium text-heading no-underline hover:text-primary",
                                            children: "Roshan Dash"
                                        })
                                    })]
                                })]
                            })
                        })
                    }) : null
                },
                m = t(9352);

            function h(e, r) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    n = (0, a.useRef)(r);
                (0, a.useEffect)((function () {
                    n.current = r
                }), [r]), (0, a.useEffect)((function () {
                    var r = function (e) {
                        return n.current(e)
                    };
                    return t.addEventListener(e, r),
                        function () {
                            return t.removeEventListener(e, r)
                        }
                }), [e, t])
            }
            var f = t(1163),
                x = function (e) {
                    var r = e.changeState,
                        t = (0, f.useRouter)(),
                        i = "/homepage2" !== t.route && "/homepage3" !== t.route,
                        a = function () {
                            r(!1)
                        };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("button", {
                            className: "btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl",
                            onClick: function () {
                                return r(!1)
                            },
                            children: (0, n.jsx)(m.eSQ, {
                                className: "inline"
                            })
                        }), (0, n.jsxs)("nav", {
                            className: "relative max-h-full w-full overflow-y-auto",
                            children: [(0, n.jsxs)("ul", {
                                className: "mb-0 list-none pl-0",
                                children: [(0, n.jsx)("li", {
                                    className: "block",
                                    children: i ? (0, n.jsx)(o(), {
                                        href: "/homepage2",
                                        children: (0, n.jsxs)("a", {
                                            className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                            onClick: function () {
                                                return a()
                                            },
                                            children: ["Home", (0, n.jsx)("span", {
                                                className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                            })]
                                        })
                                    }) : (0, n.jsxs)(l.rU, {
                                        activeClass: "text-primary",
                                        to: "section-home",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                        onClick: function () {
                                            return a()
                                        },
                                        children: ["Home", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "block",
                                    children: i ? (0, n.jsx)(o(), {
                                        href: "/homepage2",
                                        children: (0, n.jsxs)("a", {
                                            className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                            onClick: function () {
                                                return a()
                                            },
                                            children: ["About", (0, n.jsx)("span", {
                                                className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                            })]
                                        })
                                    }) : (0, n.jsxs)(l.rU, {
                                        activeClass: "text-primary",
                                        to: "section-about",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                        onClick: function () {
                                            return a()
                                        },
                                        children: ["About", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "block",
                                    children: i ? (0, n.jsx)(o(), {
                                        href: "/homepage2",
                                        children: (0, n.jsxs)("a", {
                                            className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                            onClick: function () {
                                                return a()
                                            },
                                            children: ["Resume", (0, n.jsx)("span", {
                                                className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                            })]
                                        })
                                    }) : (0, n.jsxs)(l.rU, {
                                        activeClass: "text-primary",
                                        to: "section-resume",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                        onClick: function () {
                                            return a()
                                        },
                                        children: ["Experience", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "block",
                                    children: i ? (0, n.jsx)(o(), {
                                        href: "/homepage2",
                                        children: (0, n.jsxs)("a", {
                                            className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                            onClick: function () {
                                                return a()
                                            },
                                            children: ["Works", (0, n.jsx)("span", {
                                                className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                            })]
                                        })
                                    }) : (0, n.jsxs)(l.rU, {
                                        activeClass: "text-primary",
                                        to: "section-portfolios",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                        onClick: function () {
                                            return a()
                                        },
                                        children: ["Projects", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "block",
                                    children: i ? (0, n.jsx)(o(), {
                                        href: "/homepage2",
                                        children: (0, n.jsxs)("a", {
                                            className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                            onClick: function () {
                                                return a()
                                            },
                                            children: ["Contact", (0, n.jsx)("span", {
                                                className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                            })]
                                        })
                                    }) : (0, n.jsxs)(l.rU, {
                                        activeClass: "text-primary",
                                        to: "section-contact",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                        onClick: function () {
                                            return a()
                                        },
                                        children: ["Contact", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "header-button pt-8",
                                children: (0, n.jsx)("a", {
                                    activeClass: "active",
                                    href: "https://drive.google.com/file/d/1_oyZL5YyNQQ3mNIHVPkECr0sAMuMKty_/view",
                                    target: "_blank",
                                    spy: !0,
                                    smooth: "easeInQuad",
                                    offset: -74,
                                    duration: 1e3,
                                    className: "btn btn-small",
                                    onClick: function () {
                                        return a()
                                    },
                                    children: (0, n.jsx)("span", {
                                        children: "Resume"
                                    })
                                })
                            })]
                        })]
                    })
                },
                g = function () {
                    var e = (0, f.useRouter)(),
                        r = "/homepage2" !== e.route && "/homepage3" !== e.route;
                    return (0, n.jsx)("nav", {
                        className: "flex-grow px-5 text-center",
                        children: (0, n.jsxs)("ul", {
                            className: "mb-0 inline-flex list-none gap-7 pl-0",
                            children: [(0, n.jsx)("li", {
                                className: "inline-block align-middle",
                                children: r ? (0, n.jsx)(o(), {
                                    href: "/homepage2",
                                    children: (0, n.jsxs)("a", {
                                        className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                        children: ["Home", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }) : (0, n.jsxs)(l.rU, {
                                    activeClass: "!text-primary",
                                    to: "section-home",
                                    spy: !0,
                                    smooth: "easeInQuad",
                                    offset: -74,
                                    duration: 1e3,
                                    className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                    children: ["Home", (0, n.jsx)("span", {
                                        className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                    })]
                                })
                            }), (0, n.jsx)("li", {
                                className: "inline-block align-middle",
                                children: r ? (0, n.jsx)(o(), {
                                    href: "/homepage2",
                                    children: (0, n.jsxs)("a", {
                                        className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                        children: ["About", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }) : (0, n.jsxs)(l.rU, {
                                    activeClass: "!text-primary",
                                    to: "section-about",
                                    spy: !0,
                                    smooth: "easeInQuad",
                                    offset: -74,
                                    duration: 1e3,
                                    className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                    children: ["About", (0, n.jsx)("span", {
                                        className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                    })]
                                })
                            }), (0, n.jsx)("li", {
                                className: "inline-block align-middle",
                                children: r ? (0, n.jsx)(o(), {
                                    href: "/homepage2",
                                    children: (0, n.jsxs)("a", {
                                        className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                        children: ["Experience", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }) : (0, n.jsxs)(l.rU, {
                                    activeClass: "!text-primary",
                                    to: "section-resume",
                                    spy: !0,
                                    smooth: "easeInQuad",
                                    offset: -74,
                                    duration: 1e3,
                                    className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                    children: ["Experience", (0, n.jsx)("span", {
                                        className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                    })]
                                })
                            }), (0, n.jsx)("li", {
                                className: "inline-block align-middle",
                                children: r ? (0, n.jsx)(o(), {
                                    href: "/homepage2",
                                    children: (0, n.jsxs)("a", {
                                        className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                        children: ["projects", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }) : (0, n.jsxs)(l.rU, {
                                    activeClass: "!text-primary",
                                    to: "section-portfolios",
                                    spy: !0,
                                    smooth: "easeInQuad",
                                    offset: -74,
                                    duration: 1e3,
                                    className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                    children: ["projects", (0, n.jsx)("span", {
                                        className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                    })]
                                })
                            }), (0, n.jsx)("li", {
                                className: "inline-block align-middle",
                                children: r ? (0, n.jsx)(o(), {
                                    href: "/homepage2",
                                    children: (0, n.jsxs)("a", {
                                        className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                        children: ["Contact", (0, n.jsx)("span", {
                                            className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                        })]
                                    })
                                }) : (0, n.jsxs)(l.rU, {
                                    activeClass: "!text-primary",
                                    to: "section-contact",
                                    spy: !0,
                                    smooth: "easeInQuad",
                                    offset: -74,
                                    duration: 1e3,
                                    className: "group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary",
                                    children: ["Contact", (0, n.jsx)("span", {
                                        className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                    })]
                                })
                            })]
                        })
                    })
                },
                b = t(1190),
                j = t(4571),
                v = function () {
                    var e = (0, a.useState)(!1),
                        r = e[0],
                        t = e[1],
                        s = (0, a.useState)(!1),
                        o = s[0],
                        c = s[1];
                    return h("scroll", (function () {
                        var e = window.scrollY;
                        t(e > 200)
                    })), (0, n.jsx)("header", {
                        className: "header top-0 left-0 z-50 h-auto w-full ".concat(r ? "fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter" : "absolute"),
                        children: (0, n.jsx)("div", {
                            className: "container mx-auto",
                            children: (0, n.jsxs)("div", {
                                className: "header-inner flex items-center justify-between",
                                children: [(0, n.jsx)(j.TR, {
                                    url: "/homepage2"
                                }), (0, n.jsxs)("div", {
                                    className: "header-mobilenav block lg:hidden",
                                    children: [(0, n.jsx)("button", {
                                        className: "btn btn-small btn-transparent px-3 text-3xl",
                                        onClick: function () {
                                            return c(!0)
                                        },
                                        children: (0, n.jsx)(m.B4m, {})
                                    }), (0, n.jsx)(b.M, {
                                        children: o && (0, n.jsx)(i.E.div, {
                                            initial: {
                                                translateY: "100vh"
                                            },
                                            animate: {
                                                translateY: "0px"
                                            },
                                            exit: {
                                                translateY: "-100vh"
                                            },
                                            transition: {
                                                duration: .5
                                            },
                                            className: "fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-grey p-4 text-center",
                                            children: (0, n.jsx)(x, {
                                                changeState: c
                                            })
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "header-nav hidden lg:block",
                                    children: (0, n.jsx)(g, {})
                                }), (0, n.jsx)("div", {
                                    className: "header-button hidden lg:block",
                                    children: (0, n.jsx)("a", {
                                        activeClass: "active",
                                        href: "https://drive.google.com/file/d/1_oyZL5YyNQQ3mNIHVPkECr0sAMuMKty_/view",
                                        target: "_blank",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "btn",
                                        children: (0, n.jsx)("span", {
                                            children: "Resume"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                y = function (e) {
                    var r = e.children,
                        t = e.blurred,
                        s = (0, a.useState)(!1),
                        o = s[0],
                        c = s[1],
                        u = l.ZP.animateScroll;
                    return h("scroll", (function () {
                        var e = window.scrollY;
                        c(e > 500)
                    })), (0, n.jsxs)("div", {
                        className: "wrapper relative min-h-screen w-full bg-grey ".concat(t ? "blurredBg" : ""),
                        children: [(0, n.jsx)(v, {}), (0, n.jsxs)("main", {
                            className: "page-content relative bg-grey bg-opacity-95 ".concat(t ? "backdrop-blur-lg backdrop-filter" : ""),
                            children: [(0, n.jsxs)("div", {
                                className: "bglines fixed left-0 top-0 z-20 flex h-screen w-full justify-around",
                                children: [(0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                })]
                            }), (0, n.jsx)("div", {
                                className: "sitedata relative z-30 min-h-screen",
                                children: r
                            })]
                        }), (0, n.jsx)(p, {}), (0, n.jsx)(i.E.button, {
                            initial: {
                                opacity: 0,
                                x: 1e3
                            },
                            animate: {
                                opacity: o ? 1 : 0,
                                x: o ? 0 : 1e3
                            },
                            className: "btn fixed bottom-12 left-auto top-auto right-7 z-30 rounded-full p-2.5 text-xl",
                            onClick: function () {
                                return u.scrollToTop()
                            },
                            children: (0, n.jsx)(m.gcy, {})
                        })]
                    })
                },
                w = function (e) {
                    var r = e.fullMenuHandler;
                    return (0, n.jsxs)("ul", {
                        className: "fullscreen-menulist pl-0 mb-0 flex h-screen items-center justify-between",
                        children: [(0, n.jsx)("li", {
                            className: "section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5",
                            children: (0, n.jsx)(o(), {
                                href: "/homepage1",
                                children: (0, n.jsx)("a", {
                                    className: "flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary",
                                    onClick: function (e) {
                                        return r(!1)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "fullmenuitem rotate-180",
                                        children: "Home"
                                    })
                                })
                            })
                        }), (0, n.jsx)("li", {
                            className: "section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5",
                            children: (0, n.jsx)(o(), {
                                href: "/about",
                                children: (0, n.jsx)("a", {
                                    className: "flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary",
                                    onClick: function (e) {
                                        return r(!1)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "fullmenuitem rotate-180",
                                        children: "About"
                                    })
                                })
                            })
                        }), (0, n.jsx)("li", {
                            className: "section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5",
                            children: (0, n.jsx)(o(), {
                                href: "/resume",
                                children: (0, n.jsx)("a", {
                                    className: "flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary",
                                    onClick: function (e) {
                                        return r(!1)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "fullmenuitem rotate-180",
                                        children: "Resume"
                                    })
                                })
                            })
                        }), (0, n.jsx)("li", {
                            className: "section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5",
                            children: (0, n.jsx)(o(), {
                                href: "/works",
                                children: (0, n.jsx)("a", {
                                    className: "flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary",
                                    onClick: function (e) {
                                        return r(!1)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "fullmenuitem rotate-180",
                                        children: "Works"
                                    })
                                })
                            })
                        }), (0, n.jsx)("li", {
                            className: "section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5",
                            children: (0, n.jsx)(o(), {
                                href: "/posts/1",
                                children: (0, n.jsx)("a", {
                                    className: "flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary",
                                    onClick: function (e) {
                                        return r(!1)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "fullmenuitem rotate-180",
                                        children: "Blogs"
                                    })
                                })
                            })
                        }), (0, n.jsx)("li", {
                            className: "section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5",
                            children: (0, n.jsx)(o(), {
                                href: "/contact",
                                children: (0, n.jsx)("a", {
                                    className: "flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary",
                                    onClick: function (e) {
                                        return r(!1)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "fullmenuitem rotate-180",
                                        children: "Contact"
                                    })
                                })
                            })
                        })]
                    })
                },
                N = function (e) {
                    var r = e.fullMenuHandler;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("button", {
                            className: "btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl",
                            onClick: function (e) {
                                return r(!1)
                            },
                            children: (0, n.jsx)(m.eSQ, {
                                className: "inline"
                            })
                        }), (0, n.jsxs)("div", {
                            className: "sidenavmobile flex h-full flex-col justify-between p-7 text-center",
                            children: [(0, n.jsx)(j.TR, {
                                url: "/homepage1"
                            }), (0, n.jsx)("nav", {
                                className: "sidenav-mobilmenu relative max-h-full w-full overflow-y-auto",
                                children: (0, n.jsxs)("ul", {
                                    className: "mb-0 list-none pl-0",
                                    children: [(0, n.jsx)("li", {
                                        className: "block",
                                        children: (0, n.jsx)(o(), {
                                            href: "/homepage1",
                                            children: (0, n.jsxs)("a", {
                                                className: "group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                                onClick: function (e) {
                                                    return r(!1)
                                                },
                                                children: ["Home", (0, n.jsx)("span", {
                                                    className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: "block",
                                        children: (0, n.jsx)(o(), {
                                            href: "/about",
                                            children: (0, n.jsxs)("a", {
                                                className: "group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                                onClick: function (e) {
                                                    return r(!1)
                                                },
                                                children: ["About", (0, n.jsx)("span", {
                                                    className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: "block",
                                        children: (0, n.jsx)(o(), {
                                            href: "/resume",
                                            children: (0, n.jsxs)("a", {
                                                className: "group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                                onClick: function (e) {
                                                    return r(!1)
                                                },
                                                children: ["Resume", (0, n.jsx)("span", {
                                                    className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: "block",
                                        children: (0, n.jsx)(o(), {
                                            href: "/works",
                                            children: (0, n.jsxs)("a", {
                                                className: "group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                                onClick: function (e) {
                                                    return r(!1)
                                                },
                                                children: ["Works", (0, n.jsx)("span", {
                                                    className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: "block",
                                        children: (0, n.jsx)(o(), {
                                            href: "/posts/1",
                                            children: (0, n.jsxs)("a", {
                                                className: "group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                                onClick: function (e) {
                                                    return r(!1)
                                                },
                                                children: ["Blogs", (0, n.jsx)("span", {
                                                    className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: "block",
                                        children: (0, n.jsx)(o(), {
                                            href: "/contact",
                                            children: (0, n.jsxs)("a", {
                                                className: "group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary",
                                                onClick: function (e) {
                                                    return r(!1)
                                                },
                                                children: ["Contact", (0, n.jsx)("span", {
                                                    className: "absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), (0, n.jsxs)("p", {
                                className: "",
                                children: [(0, n.jsxs)("span", {
                                    className: "whitespace-nowrap",
                                    children: ["\xa9 ", (new Date).getFullYear(), " "]
                                }), (0, n.jsx)(o(), {
                                    href: "/",
                                    children: (0, n.jsx)("a", {
                                        className: "font-medium text-heading no-underline hover:text-primary",
                                        children: "Roshan Dash"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                k = t(5675),
                C = t.n(k),
                z = t(4646),
                H = function (e) {
                    var r = e.fullMenu,
                        t = e.fullMenuHandler,
                        i = (0, c.useQuery)("information", u.H9).data;
                    return i ? (0, n.jsxs)("div", {
                        className: "sidemenu fixed left-0 top-0 z-40 hidden h-screen w-20 flex-wrap justify-between overflow-hidden border-r border-white border-opacity-10 bg-grey-darken py-8 text-center lg:flex",
                        children: [(0, n.jsx)("div", {
                            className: "h-[40%] w-full",
                            children: (0, n.jsx)(o(), {
                                href: "/homepage1",
                                children: (0, n.jsx)("a", {
                                    className: "herosection-image fiximage relative z-20 inline-block h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-primary align-middle",
                                    children: (0, n.jsx)(C(), {
                                        loader: z.XI,
                                        unoptimized: !0,
                                        src: i.thumbImage,
                                        alt: i.fullName,
                                        height: 60,
                                        width: 60,
                                        layout: "responsive",
                                        priority: !0
                                    })
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex h-20 w-full basis-[80px] items-center justify-center",
                            children: (0, n.jsx)("button", {
                                className: "inline-block w-auto border-0 p-0 text-center align-middle text-4xl leading-none",
                                onClick: function () {
                                    return t(!r)
                                },
                                children: r ? (0, n.jsx)(m.eSQ, {}) : (0, n.jsx)(m.B4m, {})
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex h-[40%] w-full items-end justify-center self-end",
                            children: (0, n.jsxs)("p", {
                                className: "copyrightvertical rotate-180 text-left",
                                children: [(0, n.jsxs)("span", {
                                    className: "whitespace-nowrap",
                                    children: ["\xa9 ", (new Date).getFullYear(), " "]
                                }), (0, n.jsx)(o(), {
                                    href: "/",
                                    children: (0, n.jsx)("a", {
                                        className: "block font-medium text-heading no-underline hover:text-primary lg:inline",
                                        children: "Roshan Dash"
                                    })
                                })]
                            })
                        })]
                    }) : null
                },
                I = function (e) {
                    var r = e.children,
                        t = e.blurred,
                        l = (0, a.useState)(!1),
                        s = l[0],
                        o = l[1],
                        c = (0, a.useState)(!1),
                        u = c[0],
                        d = c[1];
                    return (0, n.jsxs)("div", {
                        className: "wrapper relative min-h-screen w-full bg-grey ".concat(t ? "blurredBg" : ""),
                        children: [(0, n.jsx)("button", {
                            className: "mobilemenu-trigger fixed left-0 top-[50vh] z-[60] block h-10 min-h-0 w-8 rounded-tl-none rounded-bl-none border-0 bg-primary bg-opacity-20 p-0 text-3xl text-primary lg:hidden",
                            onClick: function (e) {
                                return d(!0)
                            },
                            children: (0, n.jsx)(m.nzV, {})
                        }), (0, n.jsx)(H, {
                            fullMenu: s,
                            fullMobileMenu: u,
                            fullMobileMenuHandler: d,
                            fullMenuHandler: o
                        }), (0, n.jsx)(b.M, {
                            children: s && (0, n.jsx)(i.E.div, {
                                initial: {
                                    y: "100vh"
                                },
                                animate: {
                                    y: "0px"
                                },
                                exit: {
                                    y: "-100vh"
                                },
                                transition: {
                                    duration: .5
                                },
                                className: "fullscreen-menu fixed left-20 top-0 z-40 hidden min-h-screen bg-grey lg:block",
                                children: (0, n.jsx)(w, {
                                    fullMenuHandler: o
                                })
                            })
                        }), (0, n.jsx)(b.M, {
                            children: u && (0, n.jsx)(i.E.div, {
                                initial: {
                                    translateY: "100vh"
                                },
                                animate: {
                                    translateY: "0px"
                                },
                                exit: {
                                    translateY: "-100vh"
                                },
                                transition: {
                                    duration: .5
                                },
                                className: "fixed left-0 top-0 z-[70] block h-screen w-screen bg-grey-darken lg:hidden",
                                children: (0, n.jsx)(N, {
                                    fullMenuHandler: d
                                })
                            })
                        }), (0, n.jsxs)("main", {
                            className: "page-content relative ml-0 bg-grey bg-opacity-95 lg:ml-20 ".concat(t ? "backdrop-blur-lg backdrop-filter" : ""),
                            children: [(0, n.jsxs)("div", {
                                className: "bglines fixed left-auto right-0 top-0 z-20 flex h-screen w-full justify-around",
                                children: [(0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                }), (0, n.jsx)("span", {
                                    className: "border-r border-white border-opacity-5"
                                })]
                            }), (0, n.jsx)("div", {
                                className: "sitedata relative z-30 flex min-h-screen items-center justify-center",
                                children: (0, n.jsx)("div", {
                                    className: "w-full",
                                    children: r
                                })
                            })]
                        })]
                    })
                }
        },
        9009: function (e, r, t) {
            var n = t(5893),
                i = t(7294),
                a = t(3944),
                l = t(3532);
            r.Z = function (e) {
                var r = e.title,
                    t = e.slug,
                    s = (0, i.useState)(!1),
                    o = s[0],
                    c = s[1];
                return (0, i.useEffect)((function () {
                    c(!0)
                }), []), o ? (0, n.jsx)(a.qw, {
                    shortname: "taylor-3",
                    config: {
                        url: "./",
                        identifier: t,
                        title: r
                    }
                }) : (0, n.jsx)("div", {
                    className: "block py-20 text-center",
                    children: (0, n.jsx)(l.Z, {})
                })
            }
        },
        3532: function (e, r, t) {
            var n = t(5893);
            r.Z = function () {
                return (0, n.jsxs)("div", {
                    className: "spinner relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white border-opacity-20",
                    children: [(0, n.jsx)("span", {
                        className: "relative z-20 text-sm uppercase tracking-wider",
                        children: "Loading"
                    }), (0, n.jsx)("span", {
                        className: "absolute z-10 h-full w-full animate-spin rounded-full border-l-2 border-t-2 border-white border-opacity-50 bg-grey-lighten"
                    })]
                })
            }
        },
        4571: function (e, r, t) {
            t.d(r, {
                TR: function () {
                    return l
                },
                ej: function () {
                    return c
                },
                OT: function () {
                    return d
                },
                $j: function () {
                    return p.Z
                }
            });
            var n = t(5893),
                i = t(1664),
                a = t.n(i),
                l = function (e) {
                    var r = e.url,
                        t = void 0 === r ? "/" : r,
                        i = e.text,
                        l = void 0 !== i && i;
                    return (0, n.jsx)("div", {
                        children: (0, n.jsx)("a", {
                            className: "sitelogo py-2",
                            children: l ? (0, n.jsx)("span", {
                                className: "text-4xl font-bold uppercase leading-none text-primary",
                                children: "Bieber"
                            }) : (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("img", {
                                    className: "h-8 max-h-full w-auto",
                                    src: "/images/logo.png",
                                    alt: "Bieber"
                                })
                            })
                        })
                    })
                },
                s = t(8767),
                o = t(8579),
                c = function (e) {
                    var r = e.currentFilter,
                        t = e.filterHandler,
                        i = (0, s.useQuery)("portfolio-filters", o.ez).data;
                    return i ? (0, n.jsxs)("div", {
                        className: "portfolio-filters flex flex-wrap justify-center gap-4",
                        children: [(0, n.jsx)("button", {
                            className: "btn btn-small ".concat("" === r ? "" : "btn-transparent"),
                            onClick: function () {
                                return t("")
                            },
                            children: (0, n.jsx)("span", {
                                children: "All"
                            })
                        }), null === i || void 0 === i ? void 0 : i.map((function (e) {
                            return (0, n.jsx)("button", {
                                className: "btn btn-small ".concat(r === e.value ? "before:invisible" : "btn-transparent"),
                                onClick: function () {
                                    return t(e.value)
                                },
                                children: (0, n.jsx)("span", {
                                    children: e.title
                                })
                            }, e.id)
                        }))]
                    }) : null
                },
                u = t(2141),
                d = function (e) {
                    var r = e.title,
                        t = e.watermark,
                        i = e.animated,
                        a = void 0 === i || i,
                        l = (0, u.YT)({
                            translateX: a ? [-200, 200] : null,
                            easing: "easeInOut"
                        });
                    return (0, n.jsxs)("div", {
                        className: "section-heading relative overflow-hidden pb-14 text-center",
                        children: [(0, n.jsx)("h2", {
                            className: "relative z-10 mb-2 uppercase",
                            children: r
                        }), (0, n.jsx)("span", {
                            className: "relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20",
                            children: (0, n.jsx)("span", {
                                className: "absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"
                            })
                        }), (0, n.jsx)("span", {
                            ref: l.ref,
                            className: "pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5",
                            children: t
                        })]
                    })
                },
                p = t(3532);
            t(9009)
        },
        8579: function (e, r, t) {
            t.d(r, {
                Vf: function () {
                    return g
                },
                s0: function () {
                    return x
                },
                H9: function () {
                    return c
                },
                Ry: function () {
                    return f
                },
                UU: function () {
                    return p
                },
                ez: function () {
                    return m
                },
                r3: function () {
                    return h
                },
                U2: function () {
                    return u
                },
                QM: function () {
                    return d
                }
            });
            var n = t(4051),
                i = t.n(n),
                a = t(9669),
                l = t.n(a)().create({
                    baseURL: "./api",
                    headers: {
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
                        "Content-Type": "application/json"
                    }
                });

            function s(e, r, t, n, i, a, l) {
                try {
                    var s = e[a](l),
                        o = s.value
                } catch (c) {
                    return void t(c)
                }
                s.done ? r(o) : Promise.resolve(o).then(n, i)
            }

            function o(e) {
                return function () {
                    var r = this,
                        t = arguments;
                    return new Promise((function (n, i) {
                        var a = e.apply(r, t);

                        function l(e) {
                            s(a, n, i, l, o, "next", e)
                        }

                        function o(e) {
                            s(a, n, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var c = function () {
                var e = o(i().mark((function e() {
                    var r;
                    return i().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, l.get("/information.json");
                            case 2:
                                return r = e.sent, e.abrupt("return", r.data);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(),
                u = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/services.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/techskills.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/languageskills.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/portfoliofilters.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/portfolios.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/jobexperience.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/educationbackground.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function () {
                    var e = o(i().mark((function e() {
                        var r;
                        return i().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.get("/clientsreview.json");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
        },
        5629: function (e, r, t) {
            t.d(r, {
                qi: function () {
                    return n
                }
            });
            var n = function (e) {
                return e.split(" ").join("-").toLowerCase()
            }
        },
        4646: function (e, r, t) {
            t.d(r, {
                XI: function () {
                    return a
                },
                f8: function () {
                    return n
                },
                s3: function () {
                    return i
                }
            });
            var n = function (e, r) {
                return '\n<svg width="'.concat(e, '" height="').concat(r, '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient id="g">\n            <stop stop-color="#ededed" offset="20%" />\n            <stop stop-color="#e5e5e5" offset="50%" />\n            <stop stop-color="#dadada" offset="70%" />\n        </linearGradient>\n    </defs>\n    <rect width="').concat(e, '" height="').concat(r, '" fill="#1a2c38" />\n    <rect id="r" width="').concat(e, '" height="').concat(r, '" fill="url(#g)" fill-opacity="0.1" />\n    <animate xlink:href="#r" attributeName="x" from="-').concat(e, '" to="').concat(e, '" dur="1s" repeatCount="indefinite"  />\n</svg>')
            },
                i = function (e) {
                    return window.btoa(e)
                },
                a = function (e) {
                    return e
                }
        }
    }
]);