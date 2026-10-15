#!/usr/bin/env node
/* ============================================================
   Adds "Notes" (/blog/) and "FAQ" (/faq/) to the nav and footer
   of the six pre-existing pages.

   Those pages render through React UMD via createRoot(), which
   REPLACES the pre-rendered markup — so both layers must change:
     1. the JSX arrays  (what renders after JS boots)
     2. the pre-rendered HTML (what non-JS crawlers actually read)

   Most AI crawlers do not execute JavaScript, so layer 2 is the
   one that decides whether these pages are discoverable at all.

   Idempotent: re-running makes no further change.
   Revert with: git checkout -- <files>
   ============================================================ */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const PAGES = [
  "index.html",
  "about/index.html",
  "services/index.html",
  "services/detailed/index.html",
  "contact/index.html",
  "portfolio/index.html",
];

const NEW = [
  { label: "Notes", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
];

const navAnchor = (l, h) =>
  `<a href="${h}" class="metis-nav-link" style="display: flex; align-items: center; gap: 5px; color: var(--text-strong); font-family: var(--font-sans); font-weight: 500; font-size: var(--fs-sm); text-decoration: none;"><span style="position: relative; display: inline-block;">${l}<span class="metis-nav-u" aria-hidden="true"><span class="metis-nav-f"></span></span></span></a>`;

const footAnchor = (l, h) =>
  `<a href="${h}" style="color: var(--metis-grey-700); text-decoration: none; font-size: var(--fs-body); font-weight: 500;">${l}</a>`;

const mobAnchor = (l, h) =>
  `<a href="${h}" style="color: var(--text-strong); text-decoration: none;">${l}</a>`;

/* These files carry FIVE NAV declarations across separate babel blocks, in
   two different formattings and two different line endings (CRLF and LF).
   A plain string match silently catches only some of them and the header
   nav then renders from whichever one survives — so the JSX rules are
   regexes tolerant of both. `re` rules use replace(); `find` rules are
   literal. Every rule reports its hit count for verification. */
const RULES = [
  {
    // Compact single-line form:  { label: "Contact us", href: "/contact/" },];
    name: "NAV compact",
    re: /\{ label: "Contact us", href: "\/contact\/" \},\]/g,
    to:
      NEW.map((n) => `{ label: "${n.label}", href: "${n.href}" }, `).join("") +
      `{ label: "Contact us", href: "/contact/" },]`,
    optional: true,
  },
  {
    // Expanded form, either line ending:
    //   }, {
    //     label: "Contact us",
    //     href: "/contact/"
    //   }];
    name: "NAV expanded",
    re: /\}, \{(\r?\n)  label: "Contact us",\1  href: "\/contact\/"\1\}\]/g,
    to: (_m, nl) =>
      NEW.map(
        (n) => `}, {${nl}  label: "${n.label}",${nl}  href: "${n.href}"${nl}`
      ).join("") + `}, {${nl}  label: "Contact us",${nl}  href: "/contact/"${nl}}]`,
    optional: true,
  },
  {
    name: "FOOTER_LINKS",
    re: /const FOOTER_LINKS = \["Services", "About us", "Contact us"\]/g,
    to: `const FOOTER_LINKS = ["Services", "About us", "Notes", "FAQ", "Contact us"]`,
    optional: true,
  },
  {
    name: "FOOTER_HREFS",
    re: /"About us": "\/about\/", "Contact us": "\/contact\/" \}/g,
    to: `"About us": "/about/", "Notes": "/blog/", "FAQ": "/faq/", "Contact us": "/contact/" }`,
    optional: true,
  },
  {
    name: "static header nav",
    find: navAnchor("Contact us", "/contact/"),
    ins: NEW.map((n) => navAnchor(n.label, n.href)).join(""),
  },
  {
    name: "static footer nav",
    find: footAnchor("Contact us", "/contact/"),
    ins: NEW.map((n) => footAnchor(n.label, n.href)).join(""),
  },
  {
    // React renders the mobile menu only when it is open, so it is absent
    // from the pre-rendered HTML. The NAV array above already drives it.
    name: "static mobile menu",
    find: mobAnchor("Contact us", "/contact/"),
    ins: NEW.map((n) => mobAnchor(n.label, n.href)).join(""),
    optional: true,
  },
];

const splitAll = (hay, needle) => hay.split(needle);
let hadFailure = false;

for (const page of PAGES) {
  const path = join(ROOT, page);
  let html;
  try {
    html = readFileSync(path, "utf8");
  } catch {
    console.log(`  SKIP  ${page} (not found)`);
    continue;
  }

  // Idempotency guard: the NAV patterns still match after insertion, so a
  // second run would duplicate the links.
  if (html.includes(`href: "/faq/"`) || html.includes(`"FAQ": "/faq/"`)) {
    console.log(`  --    ${page}  already linked, skipped`);
    continue;
  }

  const report = [];
  for (const r of RULES) {
    let hits = 0;
    if (r.re) {
      hits = (html.match(r.re) || []).length;
      if (hits) html = html.replace(r.re, r.to);
    } else {
      const parts = splitAll(html, r.find);
      hits = parts.length - 1;
      if (hits) {
        html = r.replaceWith
          ? parts.join(r.replaceWith)
          : parts.join(r.ins + r.find);
      }
    }
    if (hits === 0 && !r.optional) {
      hadFailure = true;
      report.push(`${r.name}:0!`);
    } else {
      report.push(`${r.name}:${hits}`);
    }
  }

  writeFileSync(path, html, "utf8");
  console.log(`  OK    ${page}  ${report.join("  ")}`);
}

console.log(
  hadFailure
    ? "\n  ! at least one marker was not found — inspect before trusting the result\n"
    : "\n  all markers matched\n"
);
