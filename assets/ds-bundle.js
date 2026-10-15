/* @ds-bundle: {"format":4,"namespace":"AloaDesignSystem_923007","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PillLink","sourcePath":"components/navigation/PillLink.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/typography/SectionHeading.jsx"},{"name":"Squiggle","sourcePath":"components/typography/Squiggle.jsx"}],"sourceHashes":{"components/core/Button.jsx":"20b2b4ded3ef","components/feedback/Badge.jsx":"d1d8bec78d3a","components/forms/Input.jsx":"21cc79bdd1d4","components/navigation/PillLink.jsx":"3708cae1d69f","components/surfaces/Card.jsx":"1b58630d4bda","components/typography/Eyebrow.jsx":"7e177d2fea26","components/typography/SectionHeading.jsx":"dca5de7abd6e","components/typography/Squiggle.jsx":"7b8bff1665ea","landing/about.js":"bd90152844c3","landing/case-studies.js":"1d1b25b75153","landing/contact.js":"6f566e21df48","landing/parts.js":"07f21e7d6d25","landing/sections.js":"6f82580f41a6","landing/services-detailed.js":"54ebc62e48d6","landing/services.js":"87e44f44103d","metis-site-v2/about.js":"bd90152844c3","metis-site-v2/case-studies.js":"0d6a1908b26b","metis-site-v2/contact.js":"6f566e21df48","metis-site-v2/parts.js":"d1edc292f5b8","metis-site-v2/sections.js":"57802f79639b","metis-site-v2/services.js":"8c2008343c10","site/about.js":"bd90152844c3","site/case-studies.js":"0d6a1908b26b","site/contact.js":"6f566e21df48","site/parts.js":"d1edc292f5b8","site/sections.js":"57802f79639b","site/services.js":"8c2008343c10","ui_kits/metis-marketing/parts.js":"3975d592768f","ui_kits/metis-marketing/sections.js":"207efad824f3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AloaDesignSystem_923007 = window.AloaDesignSystem_923007 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Metis Button — pill-shaped, grotesque, medium weight.
 * Primary = solid ink (near-black); secondary = light/white pill (used on photos
 * and inside coloured cards); blue = brand accent; outline & ghost for low emphasis.
 */
const CSS = `
.metis-btn{
  --_bg: var(--metis-ink); --_fg: #fff; --_bd: transparent;
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  font-family:var(--font-sans); font-weight:var(--fw-medium);
  letter-spacing:-0.01em; line-height:1; white-space:nowrap;
  border-radius:var(--radius-pill); border:1.5px solid var(--_bd);
  background:var(--_bg); color:var(--_fg); cursor:pointer;
  text-decoration:none; -webkit-appearance:none;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.metis-btn:hover{ text-decoration:none; }
.metis-btn:active{ transform:scale(var(--press-scale)); }
.metis-btn[disabled]{ opacity:.45; cursor:not-allowed; }
.metis-btn__arrow{ transition:transform var(--dur-base) var(--ease-out); }
.metis-btn:hover .metis-btn__arrow{ transform:translateX(3px); }

/* sizes */
.metis-btn--sm{ font-size:var(--fs-sm); padding:9px 18px; }
.metis-btn--md{ font-size:var(--fs-body); padding:13px 26px; }
.metis-btn--lg{ font-size:1.0625rem; padding:16px 34px; }

/* variants */
.metis-btn--primary{ --_bg:var(--metis-ink); --_fg:#fff; }
.metis-btn--primary:hover{ --_bg:#000; box-shadow:var(--shadow-md); }
.metis-btn--blue{ --_bg:var(--metis-blue); --_fg:#fff; }
.metis-btn--blue:hover{ --_bg:var(--metis-blue-600); box-shadow:var(--shadow-md); }
.metis-btn--secondary{ --_bg:#fff; --_fg:var(--metis-ink); box-shadow:var(--shadow-sm); }
.metis-btn--secondary:hover{ --_bg:var(--metis-grey-100); }
.metis-btn--outline{ --_bg:transparent; --_fg:var(--metis-ink); --_bd:var(--metis-ink); }
.metis-btn--outline:hover{ --_bg:var(--metis-ink); --_fg:#fff; }
.metis-btn--ghost{ --_bg:transparent; --_fg:var(--metis-ink); }
.metis-btn--ghost:hover{ --_bg:var(--metis-grey-100); }
/* translucent light pill for use over dark photography (hero "Learn More") */
.metis-btn--glass{ --_bg:rgba(255,255,255,0.16); --_fg:#fff; -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px); }
.metis-btn--glass:hover{ --_bg:rgba(255,255,255,0.26); }
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-metis", "button");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  href,
  disabled = false,
  className = "",
  ...rest
}) {
  useCss();
  const cls = `metis-btn metis-btn--${variant} metis-btn--${size} ${className}`.trim();
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("svg", {
    className: "metis-btn__arrow",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Metis Badge — tiny pill label. Solid ink ("COMING SOON"), a "live" status pill
 * with a pulsing dot, or a soft neutral chip.
 */
const CSS = `
.metis-badge{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-sans); font-weight:var(--fw-semibold);
  font-size:var(--fs-xs); letter-spacing:.04em; line-height:1;
  padding:6px 12px; border-radius:var(--radius-pill); text-transform:uppercase;
}
.metis-badge--ink{ background:var(--metis-ink); color:#fff; }
.metis-badge--soft{ background:var(--metis-grey-100); color:var(--metis-grey-700); }
.metis-badge--blue{ background:var(--metis-blue-100); color:var(--metis-blue-600); }
.metis-badge--orange{ background:var(--metis-orange-100); color:var(--metis-orange-600); }
.metis-badge--live{ background:var(--metis-ink); color:#fff; text-transform:none; letter-spacing:0; }
.metis-badge__dot{ width:7px; height:7px; border-radius:50%; background:var(--metis-green);
  box-shadow:0 0 0 0 rgba(87,201,124,.6); animation:metis-pulse 1.8s var(--ease-out) infinite; }
@keyframes metis-pulse{ 70%{ box-shadow:0 0 0 6px rgba(87,201,124,0);} 100%{ box-shadow:0 0 0 0 rgba(87,201,124,0);} }
@media (prefers-reduced-motion: reduce){ .metis-badge__dot{ animation:none; } }
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Badge({
  children,
  variant = "ink",
  live = false,
  className = "",
  ...rest
}) {
  useCss();
  const v = live ? "live" : variant;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `metis-badge metis-badge--${v} ${className}`.trim()
  }, rest), live && /*#__PURE__*/React.createElement("span", {
    className: "metis-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Metis Input — rounded pill/box field. Standalone, or with an inline trailing button
 * for the email-capture pattern ("Enter your email" + "Notify Me").
 */
const CSS = `
.metis-field{ display:flex; align-items:stretch; gap:8px; width:100%; }
.metis-field--attached{ background:#fff; border:1.5px solid var(--metis-grey-300);
  border-radius:var(--radius-pill); padding:5px 5px 5px 4px; gap:0; align-items:center; }
.metis-input{
  flex:1; min-width:0; font-family:var(--font-sans); font-size:var(--fs-body);
  color:var(--metis-ink); background:#fff; border:1.5px solid var(--metis-grey-300);
  border-radius:var(--radius-pill); padding:13px 20px; outline:none;
  transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.metis-input::placeholder{ color:var(--metis-grey-400); }
.metis-input:focus{ border-color:var(--metis-blue); box-shadow:0 0 0 3px var(--metis-blue-100); }
.metis-field--attached .metis-input{ border:none; box-shadow:none; padding:11px 20px; }
.metis-field--attached:focus-within{ border-color:var(--metis-blue); box-shadow:0 0 0 3px var(--metis-blue-100); }
.metis-field__btn{
  flex:none; font-family:var(--font-sans); font-weight:var(--fw-medium); font-size:var(--fs-sm);
  background:var(--metis-ink); color:#fff; border:none; border-radius:var(--radius-pill);
  padding:11px 22px; cursor:pointer; transition:transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.metis-field__btn:hover{ background:#000; }
.metis-field__btn:active{ transform:scale(var(--press-scale)); }
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Input({
  type = "text",
  placeholder = "",
  buttonLabel,
  onSubmit,
  className = "",
  defaultValue,
  ...rest
}) {
  useCss();
  const [val, setVal] = useState(defaultValue || "");
  if (buttonLabel) {
    return /*#__PURE__*/React.createElement("form", {
      className: `metis-field metis-field--attached ${className}`.trim(),
      onSubmit: e => {
        e.preventDefault();
        onSubmit && onSubmit(val);
      }
    }, /*#__PURE__*/React.createElement("input", _extends({
      className: "metis-input",
      type: type,
      placeholder: placeholder,
      value: val,
      onChange: e => setVal(e.target.value)
    }, rest)), /*#__PURE__*/React.createElement("button", {
      className: "metis-field__btn",
      type: "submit"
    }, buttonLabel));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `metis-input ${className}`.trim(),
    type: type,
    placeholder: placeholder,
    value: val,
    onChange: e => setVal(e.target.value)
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PillLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PillLink — the arrow call-to-action used on cards ("View resource →") and inline
 * ("View all webinars →"). `pill` renders a light rounded pill (works on dark cards);
 * `text` renders an inline muted link. Arrow nudges right on hover.
 */
const CSS = `
.metis-plink{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--font-sans); font-weight:var(--fw-medium); line-height:1;
  text-decoration:none; cursor:pointer; transition:all var(--dur-base) var(--ease-out);
}
.metis-plink:hover{ text-decoration:none; }
.metis-plink svg{ transition:transform var(--dur-base) var(--ease-out); }
.metis-plink:hover svg{ transform:translateX(3px); }
.metis-plink--pill{ background:#fff; color:var(--metis-ink); padding:10px 18px;
  border-radius:var(--radius-pill); font-size:var(--fs-sm); box-shadow:var(--shadow-sm); }
.metis-plink--pill:hover{ background:var(--metis-grey-100); }
.metis-plink--text{ color:var(--text-muted); font-size:var(--fs-sm); }
.metis-plink--text:hover{ color:var(--metis-ink); }
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function PillLink({
  children,
  variant = "pill",
  href = "#",
  className = "",
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("a", _extends({
    className: `metis-plink metis-plink--${variant} ${className}`.trim(),
    href: href
  }, rest), children, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })));
}
Object.assign(__ds_scope, { PillLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PillLink.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Metis Card — the workhorse rounded surface. `tone` picks the brand palette
 * (white / cream / ink / orange / rust / green / lavender / lime / grey), text colour
 * auto-adapts for dark tones. `dots` overlays the signature halftone (corner-fade by
 * default). `interactive` adds hover-lift + shadow. Big soft radius.
 */
const CSS = `
.metis-card{ position:relative; border-radius:var(--radius-lg); overflow:hidden;
  padding:var(--space-8); background:var(--metis-white); color:var(--text-body);
  transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.metis-card > *{ position:relative; z-index:1; }
.metis-card__dots{ position:absolute; inset:0; z-index:0; pointer-events:none;
  background-image:radial-gradient(var(--_dot,rgba(16,14,12,.16)) 1.4px, transparent 2px);
  background-size:14px 14px; }
.metis-card__dots--fade{
  -webkit-mask-image:radial-gradient(130% 130% at 100% 100%, #000 0%, transparent 60%);
          mask-image:radial-gradient(130% 130% at 100% 100%, #000 0%, transparent 60%); }
.metis-card--interactive{ cursor:pointer; }
.metis-card--interactive:hover{ transform:translateY(var(--hover-lift)); box-shadow:var(--shadow-lg); }

.metis-card--white{ background:#fff; color:var(--text-body); box-shadow:var(--shadow-md); }
.metis-card--grey{ background:var(--metis-grey-100); color:var(--text-body); }
.metis-card--cream{ background:var(--metis-cream); color:var(--metis-grey-700); }
.metis-card--ink{ background:var(--metis-ink); color:#fff; --_dot:rgba(255,255,255,.24); }
.metis-card--orange{ background:var(--metis-orange); color:#fff; --_dot:rgba(255,255,255,.34); }
.metis-card--rust{ background:var(--metis-rust); color:#fff; --_dot:rgba(255,255,255,.3); }
.metis-card--green{ background:var(--metis-green); color:#0e2a17; --_dot:rgba(14,42,23,.22); }
.metis-card--lavender{ background:var(--metis-lavender); color:var(--metis-ink); --_dot:rgba(28,28,30,.18); }
.metis-card--lime{ background:var(--metis-lime); color:#2a3411; --_dot:rgba(42,52,17,.2); }
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Card({
  children,
  tone = "white",
  dots = false,
  dotsFade = true,
  interactive = false,
  className = "",
  style,
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `metis-card metis-card--${tone} ${interactive ? "metis-card--interactive" : ""} ${className}`.trim(),
    style: style
  }, rest), dots && /*#__PURE__*/React.createElement("div", {
    className: `metis-card__dots ${dotsFade ? "metis-card__dots--fade" : ""}`,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase, letter-spaced section label. Orange by default (the "RESOURCES" / "FAQ" eyebrow). */
function Eyebrow({
  children,
  color,
  as: Tag = "p",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `metis-eyebrow ${className}`.trim(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: color || "var(--eyebrow)",
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — the centered marketing block header: orange eyebrow, a big
 * grotesque title, and a muted intro paragraph. Set align="left" for left-aligned use.
 */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  eyebrowColor,
  className = "",
  style,
  ...rest
}) {
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("header", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: centered ? "center" : "flex-start",
      textAlign: centered ? "center" : "left",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: eyebrowColor
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      maxWidth: "18ch",
      margin: 0
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-muted)",
      maxWidth: centered ? "var(--measure-narrow)" : "var(--measure)",
      margin: 0
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/typography/Squiggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Squiggle — the signature hand-drawn blue underline. Implemented as a
 * left-to-right clip reveal of a fixed-size repeating wave: the wave tile lives
 * as a background-image on an inner element whose width animates 0 → 100% inside
 * an overflow-hidden track. This reads as the line being drawn, is immune to
 * viewport / font-load timing, and can never leave a partial stub (no dash math).
 *
 * Variants:
 *   • default   — draws itself once it scrolls into view.
 *   • permanent — renders already-drawn on load (use in short/hero copy that may
 *                 sit above the fold, or when you don't want a reveal).
 *   • thin      — fixes the wave track to 12px instead of scaling with font-size,
 *                 so it stays delicate under very large display headings.
 * Respects prefers-reduced-motion (shows fully drawn, no animation).
 */
const TILE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='8' viewBox='0 0 24 8'%3E%3Cpath d='M0 5 Q 6 1 12 5 T 24 5' fill='none' stroke='%231C46FF' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E\")";
const CSS = `
.metis-squig{ position:relative; white-space:nowrap; }
.metis-squig__u{ position:absolute; left:0; bottom:-0.30em; width:100%; height:0.42em;
  overflow:hidden; pointer-events:none; }
.metis-squig__f{ display:block; height:100%; width:0; background-image:${TILE};
  background-repeat:repeat-x; background-position:left center; background-size:auto 100%;
  transition:width .62s var(--ease-out); }
.metis-squig.is-drawn .metis-squig__f{ width:100%; }
.metis-squig--thin .metis-squig__u{ height:12px; bottom:-8px; }
@media (prefers-reduced-motion: reduce){
  .metis-squig__f{ transition:none !important; width:100% !important; }
}
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Squiggle({
  children,
  className = "",
  permanent = false,
  thin = false,
  ...rest
}) {
  useCss();
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (permanent) {
      el.classList.add("is-drawn");
      return;
    }
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-drawn");
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add("is-drawn");
          io.disconnect();
        }
      });
    }, {
      threshold: 0,
      rootMargin: "0px 0px -25% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, [permanent]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: `metis-squig ${thin ? "metis-squig--thin " : ""}${permanent ? "is-drawn " : ""}${className}`.trim()
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "metis-squig__u",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metis-squig__f"
  })));
}
Object.assign(__ds_scope, { Squiggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Squiggle.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PillLink = __ds_scope.PillLink;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Squiggle = __ds_scope.Squiggle;

})();
