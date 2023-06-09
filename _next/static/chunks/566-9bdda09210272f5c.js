"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [566], {
        6731: function (e, i, s) {
            s.d(i, {
                ez: function () {
                    return u
                },
                os: function () {
                    return b
                },
                U0: function () {
                    return q
                },
                DH: function () {
                    return Q
                },
                LP: function () {
                    return z
                },
                o2: function () {
                    return H
                },
                m2: function () {
                    return O
                },
                $y: function () {
                    return _
                },
                Ui: function () {
                    return A
                }
            });
            var n = s(5893),
                a = s(5675),
                t = s.n(a),
                l = s(4646),
                r = s(7592),
                c = s(3547),
                o = s(8579),
                d = s(8767),
                u = function () {
                    var e = (0, d.useQuery)("information", o.H9).data;
                    return e ? (0, n.jsxs)("div", {
                        className: "grid grid-cols-2 items-center gap-7",
                        children: [(0, n.jsx)("div", {
                            className: "col-span-2 lg:col-span-1",
                            children: (0, n.jsx)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .2
                                },
                                variants: c.d,
                                className: "about-image overflow-hidden rounded-lg",
                                children: (0, n.jsxs)("div", {
                                    className: "about-image-inner fiximage relative border-10 border-primary border-opacity-20",
                                    children: [(0, n.jsx)("span", {
                                        className: "absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary"
                                    }), (0, n.jsx)("span", {
                                        className: "absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent"
                                    }), (0, n.jsx)("span", {
                                        className: "absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary"
                                    }), (0, n.jsx)("span", {
                                        className: "absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary"
                                    }), (0, n.jsx)(t(), {
                                        loader: l.XI,
                                        unoptimized: !0,
                                        src: e.largeImage,
                                        height: 422,
                                        width: 660,
                                        layout: "responsive",
                                        alt: e.fullName,
                                        placeholder: "blur",
                                        blurDataURL: "data:image/svg+xml;base64,".concat((0, l.s3)((0, l.f8)(660, 422)))
                                    })]
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "col-span-2 lg:col-span-1",
                            children: (0, n.jsxs)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .4
                                },
                                variants: c.d,
                                className: "about-content",
                                children: [(0, n.jsxs)("h3", {
                                    children: ["Hi, I am ", (0, n.jsx)("span", {
                                        className: "text-primary",
                                        children: e.fullName
                                    })]
                                }), (0, n.jsxs)("ul", {
                                    className: "styledlist",
                                    children: [e.firstName && (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["First Name", " "]
                                        }), ": ", e.firstName]
                                    }), e.lastName && (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["Last Name", " "]
                                        }), ": ", e.lastName]
                                    }), e.age && (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["Age", " "]
                                        }), ": ", e.age, " years"]
                                    }), e.nationality && (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["Nationality", " "]
                                        }), ": ", e.nationality]
                                    }), e.languages.length ? (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["Languages", " "]
                                        }), ": ", e.languages.join(", ")]
                                    }) : null, e.address && (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["Address", " "]
                                        }), ": ", e.address]
                                    }), e.freelance && (0, n.jsxs)("li", {
                                        className: "text-lg",
                                        children: [(0, n.jsxs)("strong", {
                                            className: "inline-block min-w-[120px] font-medium",
                                            children: ["Freelance", " "]
                                        }), ": ", e.freelance]
                                    })]
                                }), (0, n.jsx)("a", {
                                    href: "https://drive.google.com/file/d/1_oyZL5YyNQQ3mNIHVPkECr0sAMuMKty_/view",
                                    target: "_blank",
                                    className: "btn mt-3",
                                    children: (0, n.jsx)("span", {
                                        children: "Download Resume"
                                    })
                                })]
                            })
                        })]
                    }) : null
                },
                m = s(7294),
                x = s(965),
                p = s(8352),
                h = s(5770),
                j = s(4571),
                b = function (e) {
                    var i = e.posts,
                        s = (0, m.useState)(!1),
                        a = s[0],
                        t = s[1],
                        l = (0, m.useRef)(null);
                    (0, m.useEffect)((function () {
                        t(!0)
                    }), []);
                    var r = (0, m.useCallback)((function () {
                        l.current && l.current.swiper.slidePrev()
                    }), []),
                        c = (0, m.useCallback)((function () {
                            l.current && l.current.swiper.slideNext()
                        }), []);
                    return a ? i ? (0, n.jsxs)("div", {
                        className: "swiper-holder",
                        children: [(0, n.jsx)(p.tq, {
                            modules: [x.pt],
                            spaceBetween: 28,
                            slidesPerView: 3,
                            autoplay: {
                                delay: 5e3
                            },
                            centerInsufficientSlides: !0,
                            ref: l,
                            breakpoints: {
                                320: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                }
                            },
                            children: i && i.map((function (e, i) {
                                return (0, n.jsx)(p.o5, {
                                    children: (0, n.jsx)("div", {
                                        className: "slider-item",
                                        children: (0, n.jsx)(h.l3, {
                                            post: e
                                        })
                                    })
                                }, i)
                            }))
                        }), (0, n.jsx)("button", {
                            className: "swiper-button-prev",
                            onClick: r
                        }), (0, n.jsx)("button", {
                            className: "swiper-button-next",
                            onClick: c
                        })]
                    }) : null : (0, n.jsx)("div", {
                        className: "block py-20 text-center",
                        children: (0, n.jsx)(j.$j, {})
                    })
                },
                f = s(1664),
                v = s.n(f),
                g = s(9352),
                N = s(7536),
                w = s(5247),
                y = "service_04kr5nc",
                k = "template_8e5l1za",
                E = "hqZY_jB_-BBbsDFne";

            function I(e, i, s) {
                return i in e ? Object.defineProperty(e, i, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = s, e
            }

            function V(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var s = null != arguments[i] ? arguments[i] : {},
                        n = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), n.forEach((function (i) {
                        I(e, i, s[i])
                    }))
                }
                return e
            }
            var S = function () {
                var e = (0, m.useRef)(),
                    i = (0, m.useState)(""),
                    s = i[0],
                    a = i[1],
                    t = (0, m.useState)(""),
                    l = t[0],
                    r = t[1],
                    c = (0, N.cI)(),
                    o = c.register,
                    d = c.handleSubmit,
                    u = c.formState.errors;
                return (0, n.jsxs)("form", {
                    ref: e,
                    className: "card -mt-1.5 space-y-4 p-4 md:p-5",
                    onSubmit: d((function (i) {
                        w.ZP.sendForm(y, k, e.current, E).then((function (e) {
                            200 === e.status && e.text && (r(!1), a("Email successfully sent!"))
                        }), (function (e) {
                            a(!1), r("Something is wrong while sending the message!")
                        }))
                    })),
                    children: [(0, n.jsxs)("div", {
                        className: "inputbox",
                        children: [(0, n.jsx)("label", {
                            htmlFor: "name",
                            children: "Name"
                        }), (0, n.jsx)("input", V({
                            type: "text",
                            placeholder: "Enter your name",
                            id: "name"
                        }, o("name", {
                            required: !0
                        }))), u.name && (0, n.jsx)(n.Fragment, {
                            children: "required" === u.name.type && (0, n.jsx)("p", {
                                className: "bg-red-500 bg-opacity-5 text-center text-sm text-red-500",
                                children: "Name is required!"
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "inputbox",
                        children: [(0, n.jsx)("label", {
                            htmlFor: "email",
                            children: "Email"
                        }), (0, n.jsx)("input", V({
                            type: "email",
                            placeholder: "Enter your email address",
                            id: "email"
                        }, o("email", {
                            required: !0,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        }))), u.email && (0, n.jsxs)(n.Fragment, {
                            children: ["required" === u.email.type && (0, n.jsx)("p", {
                                className: "bg-red-500 bg-opacity-5 text-center text-sm text-red-500",
                                children: "Email is required!"
                            }), "pattern" === u.email.type && (0, n.jsx)("p", {
                                className: "bg-red-500 bg-opacity-5 text-center text-sm text-red-500",
                                children: "Invalid email address!"
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "inputbox",
                        children: [(0, n.jsx)("label", {
                            htmlFor: "subject",
                            children: "Subject"
                        }), (0, n.jsx)("input", V({
                            type: "text",
                            placeholder: "Enter subject",
                            id: "subject"
                        }, o("subject", {
                            required: !0
                        }))), u.subject && (0, n.jsx)(n.Fragment, {
                            children: "required" === u.subject.type && (0, n.jsx)("p", {
                                className: "bg-red-500 bg-opacity-5 text-center text-sm text-red-500",
                                children: "Subject is required!"
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "inputbox",
                        children: [(0, n.jsx)("label", {
                            htmlFor: "message",
                            children: "Message"
                        }), (0, n.jsx)("textarea", V({
                            placeholder: "Enter you message",
                            cols: "1",
                            rows: "5",
                            id: "message"
                        }, o("message", {
                            required: !0
                        }))), u.message && (0, n.jsx)(n.Fragment, {
                            children: "required" === u.message.type && (0, n.jsx)("p", {
                                className: "bg-red-500 bg-opacity-5 text-center text-sm text-red-500",
                                children: "Message is required!"
                            })
                        })]
                    }), !s && l && (0, n.jsx)("p", {
                        className: "bg-red-500 bg-opacity-5 text-center text-sm text-red-500",
                        children: l
                    }), !l && s && (0, n.jsx)("p", {
                        className: "bg-green-500 bg-opacity-5 text-center text-sm text-green-500",
                        children: s
                    }), (0, n.jsx)("button", {
                        type: "submit",
                        className: "btn",
                        children: (0, n.jsx)("span", {
                            children: "Send Message"
                        })
                    })]
                })
            },
                q = function () {
                    var e = (0, d.useQuery)("information", o.H9).data;
                    return e ? (0, n.jsxs)("div", {
                        className: "grid grid-cols-9 gap-7",
                        children: [(0, n.jsx)(r.E.div, {
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .4,
                                delay: .2
                            },
                            variants: c.d,
                            className: "col-span-9 lg:col-span-4",
                            children: (0, n.jsxs)("div", {
                                className: "contact-information",
                                children: [(0, n.jsx)("h4", {
                                    children: "Contact Information"
                                }), (0, n.jsx)("p", {
                                    children: "Feel free to contact me for opportunities as a Full-stack web or Cloud developer, or any other kind of discussion related to coding. I will try my best to reply you as soon as possible."
                                }), (0, n.jsx)("span", {
                                    className: "inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20"
                                }), (0, n.jsxs)("div", {
                                    className: "contact-blocks mt-5 space-y-5",
                                    children: [(0, n.jsxs)("div", {
                                        className: "contact-block card flex p-4 md:p-5",
                                        children: [(0, n.jsx)("span", {
                                            className: "icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary",
                                            children: (0, n.jsx)(g.V90, {})
                                        }), (0, n.jsxs)("div", {
                                            className: "content",
                                            children: [(0, n.jsx)("h5", {
                                                className: "mb-2",
                                                children: "Contact on phone"
                                            }), e.phoneNumbers.map((function (e, i) {
                                                return (0, n.jsx)("p", {
                                                    className: "mb-0",
                                                    children: (0, n.jsx)(v(), {
                                                        href: "tel:".concat(e.split("-").join("")),
                                                        children: (0, n.jsx)("a", {
                                                            className: "no-underline",
                                                            children: e
                                                        })
                                                    })
                                                }, i)
                                            }))]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "contact-block card flex p-4 md:p-5",
                                        children: [(0, n.jsx)("span", {
                                            className: "icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary",
                                            children: (0, n.jsx)(g.Azx, {})
                                        }), (0, n.jsxs)("div", {
                                            className: "content",
                                            children: [(0, n.jsx)("h5", {
                                                className: "mb-2",
                                                children: "Contact on mail"
                                            }), e.emailAddress.map((function (e, i) {
                                                return (0, n.jsx)("p", {
                                                    className: "mb-0",
                                                    children: (0, n.jsx)(v(), {
                                                        href: "mailto:".concat(e),
                                                        children: (0, n.jsx)("a", {
                                                            className: "no-underline",
                                                            children: e
                                                        })
                                                    })
                                                }, i)
                                            }))]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "contact-block card flex p-4 md:p-5",
                                        children: [(0, n.jsx)("span", {
                                            className: "icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary",
                                            children: (0, n.jsx)(g.F3s, {})
                                        }), (0, n.jsxs)("div", {
                                            className: "content",
                                            children: [(0, n.jsx)("h5", {
                                                className: "mb-2",
                                                children: "Contact address"
                                            }), (0, n.jsx)("p", {
                                                className: "mb-0",
                                                children: "IIIT Bhubaneswar, Khordha, Odisha, India - 751003"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(r.E.div, {
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .4,
                                delay: .4
                            },
                            variants: c.d,
                            className: "col-span-9 lg:col-span-5",
                            children: (0, n.jsx)(S, {})
                        })]
                    }) : null
                },
                C = s(6261),
                P = s(7788),
                F = s.n(P),
                Q = function (e) {
                    var i = e.blurred,
                        s = e.scroll,
                        a = void 0 === s || s,
                        u = e.typed,
                        m = void 0 === u || u,
                        x = (0, d.useQuery)("information", o.H9).data;
                    return x ? (0, n.jsxs)("div", {
                        className: "herosection relative overflow-hidden",
                        children: [!i && (0, n.jsx)("div", {
                            className: "herosection-bg absolute left-0 top-0 h-full w-full"
                        }), (0, n.jsx)("div", {
                            className: "herosection-content relative z-20 bg-grey-darken  ".concat(i ? "bg-opacity-20" : "bg-opacity-90"),
                            children: (0, n.jsxs)("div", {
                                className: "container relative mx-auto",
                                children: [(0, n.jsx)("div", {
                                    className: "flex min-h-screen w-full items-center justify-center",
                                    children: (0, n.jsxs)("div", {
                                        className: "herosection-content w-full py-20 text-center md:w-3/4",
                                        children: [(0, n.jsxs)(r.E.div, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: .4,
                                                delay: .2
                                            },
                                            variants: c.d,
                                            className: "herosection-imagewrapper relative mb-5 inline-block overflow-hidden rounded-full align-middle",
                                            children: [(0, n.jsx)("span", {
                                                className: "herosection-imageanimation absolute left-0 top-0 z-10 h-full w-full animate-spin rounded-full bg-gradient-to-tr from-primary to-transparent"
                                            }), (0, n.jsx)("div", {
                                                className: "herosection-image fiximage relative z-20 inline-block h-[150px] w-[150px] overflow-hidden rounded-full border-6 border-primary border-opacity-10 align-middle",
                                                children: (0, n.jsx)(t(), {
                                                    loader: l.XI,
                                                    unoptimized: !0,
                                                    src: x.thumbImage,
                                                    alt: x.fullName,
                                                    height: 150,
                                                    width: 150,
                                                    layout: "responsive",
                                                    placeholder: "blur",
                                                    blurDataURL: "data:image/svg+xml;base64,".concat((0, l.s3)((0, l.f8)(150, 150)))
                                                })
                                            })]
                                        }), (0, n.jsxs)(r.E.h1, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: .4,
                                                delay: .4
                                            },
                                            variants: c.d,
                                            className: "mb-5 text-heading",
                                            children: [(0, n.jsx)("span", {
                                                className: "block sm:inline",
                                                children: "Hi, I am"
                                            }), " ", m ? (0, n.jsx)(F(), {
                                                loop: !0,
                                                typeSpeed: 100,
                                                backSpeed: 20,
                                                backDelay: 2e3,
                                                strings: [x.fullName, "Full-stack Developer", "Cloud Developer"],
                                                className: "text-primary"
                                            }) : (0, n.jsx)("span", {
                                                className: "text-primary",
                                                children: x.fullName
                                            })]
                                        }), (0, n.jsx)(r.E.p, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: .4,
                                                delay: .6
                                            },
                                            variants: c.d,
                                            className: "lead mb-0",
                                            children: x.bio
                                        }), (0, n.jsx)(r.E.div, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: .4,
                                                delay: .8
                                            },
                                            variants: c.d,
                                            className: "herosection-socialicons mt-7 text-center",
                                            children: (0, n.jsx)(h.HE, {
                                                data: x.socialAddress
                                            })
                                        })]
                                    })
                                }), a ? (0, n.jsx)(r.E.div, {
                                    initial: "hidden",
                                    whileInView: "visible",
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: .4,
                                        delay: 1
                                    },
                                    variants: c.d,
                                    className: "herosection-bottom absolute left-0 top-auto bottom-10 w-full justify-between text-center",
                                    children: (0, n.jsxs)(C.rU, {
                                        activeClass: "active",
                                        to: "section-about",
                                        spy: !0,
                                        smooth: "easeInQuad",
                                        offset: -74,
                                        duration: 1e3,
                                        className: "cursor-pointer text-xs font-medium uppercase tracking-widest transition-all hover:text-primary",
                                        children: [(0, n.jsx)(g.dtO, {
                                            className: "inline animate-bounce text-base"
                                        }), (0, n.jsx)("span", {
                                            className: "pl-2",
                                            children: "Scroll Down"
                                        })]
                                    })
                                }) : null]
                            })
                        })]
                    }) : null
                },
                z = function () {
                    var e = (0, m.useState)([]),
                        i = e[0],
                        s = e[1],
                        a = (0, m.useState)(""),
                        t = a[0],
                        l = a[1],
                        c = (0, m.useState)(1),
                        u = c[0],
                        x = c[1],
                        p = (0, d.useQuery)("portfolios", o.r3).data;
                    (0, m.useEffect)((function () {
                        p && s(p.slice(0, 6))
                    }), [p]);
                    var b = (0, m.useCallback)((function (e) {
                        l(e), s("" === e ? p.slice(0, 6 * u) : p.slice(0, 6 * u).filter((function (i) {
                            return i.filters.includes(e)
                        })))
                    }), [p, u]),
                        f = (0, m.useCallback)((function () {
                            x((function (e) {
                                return e + 1
                            })), s("" === t ? p.slice(0, 6 * (u + 1)) : p.slice(0, 6 * (u + 1)).filter((function (e) {
                                return e.filters.includes(t)
                            })))
                        }), [t, p, u]);
                    return p ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(j.ej, {
                            currentFilter: t,
                            filterHandler: b
                        }), (0, n.jsx)(r.E.div, {
                            layout: !0,
                            className: "mt-12 grid grid-cols-6 gap-7",
                            children: null === i || void 0 === i ? void 0 : i.map((function (e) {
                                return (0, n.jsx)(r.E.div, {
                                    layout: !0,
                                    exit: {
                                        scale: 0
                                    },
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        duration: .4
                                    },
                                    className: "col-span-6 sm:col-span-3 lg:col-span-2",
                                    children: (0, n.jsx)(h._Y, {
                                        portfolio: e
                                    })
                                }, e.id)
                            }))
                        }), i < p ? (0, n.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, n.jsx)("button", {
                                className: "btn btn-small",
                                onClick: function () {
                                    return f()
                                },
                                children: (0, n.jsx)("span", {
                                    children: "Load More"
                                })
                            })
                        }) : null]
                    }) : null
                },
                U = function () {
                    var e = (0, d.useQuery)("education-background", o.s0).data;
                    return e ? (0, n.jsxs)("div", {
                        className: "education-timeline",
                        children: [(0, n.jsxs)("h4", {
                            children: [(0, n.jsx)(g.jGU, {
                                className: "mr-2 inline-block text-primary"
                            }), "Educational Qualification"]
                        }), null === e || void 0 === e ? void 0 : e.map((function (e, i) {
                            return (0, n.jsx)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .2 * i
                                },
                                variants: c.d,
                                className: "timeline-wrap",
                                children: (0, n.jsx)(h.jq, {
                                    timeline: e
                                })
                            }, e.id)
                        }))]
                    }) : null
                },
                D = function () {
                    var e = (0, d.useQuery)("job-experience", o.Ry).data;
                    return e ? (0, n.jsxs)("div", {
                        className: "job-experience",
                        children: [(0, n.jsxs)("h4", {
                            children: [(0, n.jsx)(g.Hgh, {
                                className: "mr-2 inline-block text-primary"
                            }), "Working Experience"]
                        }), null === e || void 0 === e ? void 0 : e.map((function (e, i) {
                            return (0, n.jsx)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .2 * i
                                },
                                variants: c.d,
                                className: "timeline-wrap",
                                children: (0, n.jsx)(h.jq, {
                                    timeline: e
                                })
                            }, e.id)
                        }))]
                    }) : null
                },
                H = function () {
                    return (0, n.jsxs)("div", {
                        className: "grid grid-cols-2 gap-14 lg:gap-7",
                        children: [(0, n.jsx)("div", {
                            className: "col-span-2 lg:col-span-1",
                            children: (0, n.jsx)(U, {})
                        }), (0, n.jsx)("div", {
                            className: "col-span-2 lg:col-span-1",
                            children: (0, n.jsx)(D, {})
                        })]
                    })
                },
                O = function () {
                    var e = (0, d.useQuery)("clientreviews", o.Vf).data,
                        i = (0, m.useRef)(null),
                        s = (0, m.useCallback)((function () {
                            i.current && i.current.swiper.slidePrev()
                        }), []),
                        a = (0, m.useCallback)((function () {
                            i.current && i.current.swiper.slideNext()
                        }), []);
                    return e ? (0, n.jsxs)("div", {
                        className: "swiper-holder",
                        children: [(0, n.jsx)(p.tq, {
                            modules: [x.pt],
                            spaceBetween: 28,
                            slidesPerView: 3,
                            autoplay: {
                                delay: 4e3
                            },
                            centerInsufficientSlides: !0,
                            ref: i,
                            breakpoints: {
                                320: {
                                    slidesPerView: 1
                                },
                                640: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                }
                            },
                            children: null === e || void 0 === e ? void 0 : e.map((function (e) {
                                return (0, n.jsx)(p.o5, {
                                    children: (0, n.jsx)("div", {
                                        className: "slider-item",
                                        children: (0, n.jsx)(h.Cq, {
                                            review: e
                                        })
                                    })
                                }, e.id)
                            }))
                        }), (0, n.jsx)("button", {
                            className: "swiper-button-prev",
                            onClick: s
                        }), (0, n.jsx)("button", {
                            className: "swiper-button-next",
                            onClick: a
                        })]
                    }) : null
                },
                _ = function () {
                    var e = (0, d.useQuery)("services", o.U2).data;
                    return e ? (0, n.jsx)("div", {
                        className: "services-wrapper grid grid-cols-3 gap-7",
                        children: null === e || void 0 === e ? void 0 : e.map((function (e, i) {
                            return (0, n.jsx)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .2 * i
                                },
                                variants: c.d,
                                className: "col-span-3 lg:col-span-1",
                                children: (0, n.jsx)(h.t6, {
                                    service: e
                                })
                            }, e.id)
                        }))
                    }) : null
                },
                L = function () {
                    var e = (0, d.useQuery)("language-skills", o.UU).data;
                    return e ? (0, n.jsx)("div", {
                        className: "grid grid-cols-2 gap-7",
                        children: null === e || void 0 === e ? void 0 : e.map((function (e, i) {
                            return (0, n.jsx)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .2 * i
                                },
                                variants: c.d,
                                className: "col-span-2 md:col-span-1",
                                children: (0, n.jsx)(h.ko, {
                                    skill: e
                                })
                            }, e.id)
                        }))
                    }) : null
                },
                R = function () {
                    var e = (0, d.useQuery)("tech-skills", o.QM).data;
                    return e ? (0, n.jsx)("div", {
                        className: "grid grid-cols-4 gap-7",
                        children: null === e || void 0 === e ? void 0 : e.map((function (e, i) {
                            return (0, n.jsx)(r.E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .4,
                                    delay: .2 * i
                                },
                                variants: c.d,
                                className: "col-span-4 sm:col-span-2 lg:col-span-1",
                                children: (0, n.jsx)(h._3, {
                                    skill: e
                                })
                            }, e.id)
                        }))
                    }) : null
                },
                A = function () {
                    return (0, n.jsxs)("div", {
                        className: "skills-wrapper",
                        children: [(0, n.jsx)(R, {}), (0, n.jsx)("div", {
                            className: "py-7"
                        }), (0, n.jsx)(L, {})]
                    })
                }
        },
        3547: function (e, i, s) {
            s.d(i, {
                d: function () {
                    return n
                }
            });
            var n = {
                visible: {
                    y: 0,
                    opacity: 1
                },
                hidden: {
                    y: 20,
                    opacity: 0
                }
            }
        }
    }
]);