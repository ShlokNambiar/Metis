;(function () {
/* Metis marketing kit — shared assets + NavBar + Footer + LogoCloud.
   Loaded via <script type="text/babel">; assigns to window so index.html + sections can use them.
   NOTE: image/video assets are hot-linked from Metis's own CDN (see assets/README.md). */
const {
  useState
} = React;
const A = window.AloaDesignSystem_923007;
const METIS = {
  logo: "https://aloa.co/_astro/aloa_logo_2.BiY2zpWK.png",
  heroVideo: "https://media.aloa.co/videos/hero/aloa-video.mp4",
  offerings: {
    agents: "https://aloa.co/_astro/offerings-agents.Dky5RimF.webp",
    automation: "https://aloa.co/_astro/offerings-automation.CcnPFODQ.webp",
    prototypes: "https://aloa.co/_astro/offerings-prototypes.DH3HhVdI.webp",
    apps: "https://aloa.co/_astro/offerings-apps.CY0Ny_ZY.webp",
    hipaa: "https://aloa.co/_astro/offerings-hipaa.fbkoPHw4.webp"
  },
  clients: ["1.Bhk2G6HT", "2.hBZMo3oj", "3.DFDIdSjo", "4.BQkgMrKo", "5.DXdwrVf5", "6.mwE4G8ES", "7.v3tsrUMS", "8.BXU0CYNN", "9.Cb2Sv5m1", "10.Rl-6MpE4", "11.CqHSmMG9", "12.BzzgRAwT", "13.Cxylptnn", "14.CY9-Bg_I"].map(h => `https://aloa.co/_astro/${h}.webp`),
  /* intrinsic px size of each client logo (same order); used for width/height attrs */
  clientDims: [[354,60],[255,54],[176,81],[139,68],[277,69],[120,73],[139,49],[272,72],[415,74],[193,76],[230,87],[181,70],[208,63],[260,70]]
};
window.METIS = METIS;

/* Metis logo lockup — network mark + wordmark. */
function MetisLogo({
  size = 26,
  mark = "var(--metis-blue)",
  word = "var(--text-strong)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.34
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: mark,
    strokeWidth: "6.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "50",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "79",
    y2: "41"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "70",
    y2: "78"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "26",
    y2: "70"
  })), /*#__PURE__*/React.createElement("g", {
    fill: mark
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "20",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "79",
    cy: "41",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "78",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "26",
    cy: "70",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "10.5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      fontSize: size * 0.6,
      color: word,
      lineHeight: 1
    }
  }, "Metis", /*#__PURE__*/React.createElement("svg", {
    className: "metis-logo-draw-svg",
    viewBox: "0 0 128 6",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      width: "100%",
      height: "0.4em",
      bottom: "-0.42em",
      overflow: "visible",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    className: "metis-logo-draw",
    pathLength: "100",
    d: "M0 4 C 3 0.5,5 0.5,8 3 S 13 5.5,16 2 S 21 0.5,24 3 S 29 5.5,32 2 S 37 0.5,40 3 S 45 5.5,48 2 S 53 0.5,56 3 S 61 5.5,64 2 S 69 0.5,72 3 S 77 5.5,80 2 S 85 0.5,88 3 S 93 5.5,96 2 S 101 0.5,104 3 S 109 5.5,112 2 S 117 0.5,120 3 S 125 5.5,128 2",
    fill: "none",
    stroke: "#1c46ff",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke",
    style: {
      strokeDasharray: 100,
      strokeDashoffset: 100,
      transition: "stroke-dashoffset .5s var(--ease-out)"
    }
  }))));
}
window.MetisLogo = MetisLogo;
const NAV = [{
  label: "Services",
  href: "/services/"
}, {
  label: "About us",
  href: "/about/"
}, {
  label: "Notes",
  href: "/blog/"
}, {
  label: "FAQ",
  href: "/faq/"
}, {
  label: "Contact us",
  href: "/contact/"
}];
function NavBar({
  home = "#top",
  active = ""
}) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("metis-theme") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "";
    try {
      localStorage.setItem("metis-theme", theme);
    } catch (e) {}
  }, [theme]);
  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark");
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--metis-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "metis-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 78,
      maxWidth: 1200,
      marginInline: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: home,
    className: "metis-logo-link",
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(MetisLogo, {
    size: 38
  })), /*#__PURE__*/React.createElement("nav", {
    className: "metis-nav-desktop",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 34
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    className: "metis-nav-link",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      color: active === n.label ? "var(--metis-blue)" : "var(--text-strong)",
      fontFamily: "var(--font-sans)",
      fontWeight: active === n.label ? 600 : 500,
      fontSize: "var(--fs-sm)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, n.label, /*#__PURE__*/React.createElement("span", {
    className: "metis-nav-u",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metis-nav-f"
  }))), n.caret && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-label": "Toggle theme",
    title: "Toggle theme",
    style: {
      width: 40,
      height: 40,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--metis-grey-300)",
      background: "transparent",
      color: "var(--text-strong)",
      cursor: "pointer",
      padding: 0
    }
  }, theme === "dark" ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "metis-nav-cta"
  }, /*#__PURE__*/React.createElement(A.Button, {
    variant: "primary",
    size: "sm",
    href: "/contact/"
  }, "Work With Us")), /*#__PURE__*/React.createElement("button", {
    className: "metis-nav-burger",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    style: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-strong)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "metis-container",
    style: {
      paddingBottom: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      borderTop: "1px solid var(--metis-grey-200)",
      paddingTop: 18
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: {
      color: "var(--text-strong)",
      fontWeight: 500,
      textDecoration: "none",
      fontSize: 18
    }
  }, n.label)), /*#__PURE__*/React.createElement(A.Button, {
    variant: "primary",
    size: "md",
    href: "/contact/"
  }, "Work With Us")));
}
function LogoCloud() {
  return /*#__PURE__*/React.createElement("section", {
    className: "metis-container",
    style: {
      paddingTop: "var(--section-y-tight)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      maxWidth: "58ch",
      margin: "0 auto 40px",
      color: "var(--metis-grey-500)",
      fontSize: "var(--fs-lead)",
      lineHeight: 1.5
    }
  }, "For ", /*#__PURE__*/React.createElement(A.Squiggle, {
    permanent: true
  }, "three years"), ", we've partnered with 25+ clients across finance, healthcare, real estate, manufacturing, and more, delivering custom software that drives real results."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "38px 52px",
      opacity: .62
    }
  }, METIS.clients.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    className: "metis-client-logo",
    src: src,
    alt: "",
    width: METIS.clientDims[i][0],
    height: METIS.clientDims[i][1],
    style: {
      height: 26,
      width: "auto",
      filter: "grayscale(1)",
      objectFit: "contain"
    }
  }))));
}
const FOOTER_LINKS = ["Services", "Services in detail", "About us", "Notes", "FAQ", "Contact us"];
const FOOTER_HREFS = {
  "Services": "/services/",
  "Services in detail": "/services/detailed/",
  "About us": "/about/",
  "Notes": "/blog/",
  "FAQ": "/faq/",
  "Contact us": "/contact/"
};
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "metis-container metis-footer",
    style: {
      paddingTop: "var(--section-y)",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--metis-cream)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(32px,5vw,72px)",
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "metis-dots metis-dots--fade",
    style: {
      position: "absolute",
      inset: 0,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "metis-serif",
    style: {
      fontSize: "var(--fs-serif-xl)",
      lineHeight: 1.16,
      maxWidth: "12ch",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "We build AI that earns its place in your business, and grows with your team."), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Footer",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minWidth: 160
    }
  }, FOOTER_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: FOOTER_HREFS[l] || "#",
    style: {
      color: "var(--metis-grey-700)",
      textDecoration: "none",
      fontSize: "var(--fs-body)",
      fontWeight: 500
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "metis-footer-base",
    style: {
      position: "relative",
      zIndex: 1,
      marginTop: 48,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px 24px"
    }
  }, /*#__PURE__*/React.createElement(MetisLogo, {
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, "© 2026 METIS", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      margin: "0 10px"
    }
  }, "·"), /*#__PURE__*/React.createElement("a", {
    href: "/privacy/",
    style: {
      color: "var(--text-muted)",
      textDecoration: "none",
      fontWeight: 500
    }
  }, "Privacy policy")))));
}
Object.assign(window, {
  NavBar,
  LogoCloud,
  Footer,
  MetisLogo
});
})();
