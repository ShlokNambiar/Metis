#!/usr/bin/env node
/* ============================================================
   METIS static page generator.

   Emits plain static HTML into the repo — there is no runtime
   dependency, GitHub Pages serves the output directly.

   Run:  node _build/build.mjs
   ============================================================ */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..");
const SITE = "https://metisai.in";

const shell = readFileSync(join(HERE, "shell.html"), "utf8");
const frag = (name) => readFileSync(join(HERE, "content", `${name}.html`), "utf8");

/* ------------------------------------------------------------
   Notes. `status` describes the regulatory clock, which is the
   truest thing we can say about a note on Indian compliance —
   it is data, so it is set in the mono face.
   ------------------------------------------------------------ */
const NOTES = [
  {
    slug: "dpdp-sending-customer-data-to-ai-models",
    h1: "Can you send Indian customer data to OpenAI or Claude?",
    title: "Send Indian customer data to OpenAI or Claude? | METIS",
    description:
      "India's DPDP framework permits cross-border transfer unless a country is restricted — and none is. What that means for teams building AI products.",
    dateISO: "2026-08-16",
    dateHuman: "16 August 2026",
    status: { label: "Full compliance 13 May 2027", kind: "due" },
    kicker: "DPDP",
    related: [
      { href: "/services/detailed/#enterprise-ai", label: "Enterprise AI: governance, compliance and data systems we build" },
      { href: "/faq/#data", label: "FAQ: data and compliance" },
    ],
  },
  {
    slug: "trai-140-1600-series-insurance-calls",
    h1: "140 or 1600: which number series must insurance calls use?",
    title: "140 or 1600: which series must insurance calls use? | METIS",
    description:
      "TRAI restricted ordinary 10-digit numbers for commercial calling from 1 January 2026. Which series applies to renewals, and why 1600 lifts connect rates.",
    dateISO: "2026-08-16",
    dateHuman: "16 August 2026",
    status: { label: "In force since 1 Jan 2026", kind: "live" },
    kicker: "TCCCPR",
    related: [
      { href: "/services/detailed/#agentic-systems", label: "Agentic Systems: the voice and conversational agents we build" },
      { href: "/faq/#voice", label: "FAQ: AI voice and calling" },
    ],
  },
  {
    slug: "questions-before-buying-ai-calling-india",
    h1: "Ten questions to ask before buying an AI calling agent in India",
    title: "10 questions before buying an AI calling agent | METIS",
    description:
      "The questions that separate an AI voice system which survives real customers from one that does not — number series, interruptions, fallbacks and handoff.",
    dateISO: "2026-08-16",
    dateHuman: "16 August 2026",
    status: { label: "Buyer's guide", kind: "" },
    kicker: "Buying",
    related: [
      { href: "/services/detailed/#agentic-systems", label: "Agentic Systems: the voice and conversational agents we build" },
      { href: "/faq/#voice", label: "FAQ: AI voice and calling" },
    ],
  },
];

/* ---------------- helpers ---------------- */

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Plain text for JSON-LD: strip tags, decode the few entities we use, collapse space.
const plain = (html) =>
  html
    .replace(/<\/?(?:a|strong|em|b|i|code|span|time)(?=[\s>])[^>]*>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&middot;/g, "\u00b7")
    .replace(/\s+/g, " ")
    .trim();

const readingMinutes = (html) =>
  Math.max(1, Math.round(plain(html).split(/\s+/).length / 220));

/* Pull <details><summary>Q</summary><p>A</p>…</details> out of a note body so the
   FAQPage JSON-LD is generated FROM the visible copy and cannot drift from it. */
function faqFromDetails(html) {
  const out = [];
  const re = /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g;
  let m;
  while ((m = re.exec(html))) out.push({ q: plain(m[1]), a: plain(m[2]) });
  return out;
}

/* Same idea for the FAQ page, whose shape is <div class="metis-q"><h3>Q</h3><p>A</p>… */
function faqFromBlocks(html) {
  const out = [];
  const re = /<div class="metis-q">\s*<h3>([\s\S]*?)<\/h3>([\s\S]*?)<\/div>/g;
  let m;
  while ((m = re.exec(html))) out.push({ q: plain(m[1]), a: plain(m[2]) });
  return out;
}

const ld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const ORG = {
  "@type": "Organization",
  name: "METIS",
  url: `${SITE}/`,
  logo: { "@type": "ImageObject", url: `${SITE}/icons/metis-logo-512.png` },
};

function crumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

function render({ title, description, canonical, ogType, ogTitle, jsonld, main, headExtra }) {
  return shell
    .replace(/\{\{TITLE\}\}/g, esc(title))
    .replace(/\{\{OG_TITLE\}\}/g, esc(ogTitle ?? title))
    .replace(/\{\{DESCRIPTION\}\}/g, esc(description))
    .replace(/\{\{CANONICAL\}\}/g, canonical)
    .replace(/\{\{OG_TYPE\}\}/g, ogType)
    .replace(/\{\{JSONLD\}\}/g, jsonld)
    .replace(/\{\{HEAD_EXTRA\}\}/g, headExtra ?? "")
    .replace(/\{\{MAIN\}\}/g, main);
}

function emit(relPath, html) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html, "utf8");
  console.log(`  ${relPath}  (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
}

const statusTag = (s) =>
  s.label
    ? `<span class="metis-status${s.kind ? ` metis-status--${s.kind}` : ""}">${esc(s.label)}</span>`
    : "";

/* ---------------- notes ---------------- */

console.log("\nNotes:");
const built = [];

for (const n of NOTES) {
  const body = frag(n.slug);
  const faq = faqFromDetails(body);
  const readMin = readingMinutes(body);
  const url = `${SITE}/blog/${n.slug}/`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: n.h1,
    description: n.description,
    datePublished: n.dateISO,
    dateModified: n.dateISO,
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE}/icons/og-card.png`,
    author: ORG,
    publisher: ORG,
    isPartOf: { "@type": "Blog", "@id": `${SITE}/blog/#blog`, name: "Notes" },
  };

  const blocks = [ld(article)];
  if (faq.length) {
    blocks.push(
      ld({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })
    );
  }
  blocks.push(
    ld(
      crumbs([
        { name: "Home", url: `${SITE}/` },
        { name: "Notes", url: `${SITE}/blog/` },
        { name: n.h1, url },
      ])
    )
  );

  const main = `<main id="metis-main" class="metis-article">
  <div class="metis-article-head">
    <nav aria-label="Breadcrumb" style="font-family: var(--font-sans); font-size: var(--fs-sm); color: var(--text-faint);">
      <a href="/blog/" style="color: var(--text-faint); text-decoration: none;">Notes</a>
      <span aria-hidden="true"> / </span><span>${esc(n.kicker)}</span>
    </nav>
    <h1>${esc(n.h1)}</h1>
    <div class="metis-article-byline">
      <b>METIS</b><span aria-hidden="true">&middot;</span>
      <time datetime="${n.dateISO}">${n.dateHuman}</time><span aria-hidden="true">&middot;</span>
      <span>${readMin} min read</span>
      ${statusTag(n.status)}
    </div>
  </div>
  <div class="metis-article-body">
${body}
    <aside class="metis-related" aria-labelledby="metis-related-h">
      <h2 id="metis-related-h">Keep reading</h2>
      <ul>
${NOTES.filter((o) => o.slug !== n.slug)
  .map((o) => `        <li><a href="/blog/${o.slug}/">${esc(o.h1)}</a></li>`)
  .concat(n.related.map((r) => `        <li><a href="${r.href}">${esc(r.label)}</a></li>`))
  .join("\n")}
      </ul>
    </aside>
    <div class="metis-article-cta">
      <p class="metis-serif">Building this yourself? We already run it in production.</p>
      <a class="metis-btn metis-btn--primary metis-btn--md" href="/contact/">Talk to us</a>
    </div>
  </div>
  <div class="metis-article-footer-space"></div>
</main>`;

  emit(
    `blog/${n.slug}/index.html`,
    render({
      title: n.title,
      ogTitle: n.h1,
      description: n.description,
      canonical: url,
      ogType: "article",
      jsonld: blocks.join("\n"),
      main,
    })
  );

  built.push({ ...n, readMin, url, faqCount: faq.length });
}

/* ---------------- notes index ---------------- */

const cards = built
  .map(
    (n) => `      <a href="/blog/${n.slug}/" class="metis-card">
        <div class="metis-card-meta">
          <time datetime="${n.dateISO}">${n.dateHuman}</time>
          <span aria-hidden="true">&middot;</span><span>${n.readMin} min read</span>
          ${statusTag(n.status)}
        </div>
        <h2>${esc(n.h1)}</h2>
        <p>${esc(n.description)}</p>
        <span class="metis-card-go">Read the note &rarr;</span>
      </a>`
  )
  .join("\n");

const indexMain = `<main id="metis-main" class="metis-article" style="max-width: 840px;">
  <div class="metis-article-head">
    <p class="metis-eyebrow" style="margin: 0;">Writing from METIS</p>
    <h1>Notes</h1>
    <p style="font-family: var(--font-sans); font-size: var(--fs-lead); line-height: 1.55; color: var(--text-muted); margin: 0 0 8px; max-width: 54ch;">Practical answers on AI voice agents, customer data and what the rules in India actually say &mdash; written by the team running this in production.</p>
  </div>
  <div class="metis-cards">
${cards}
  </div>
  <p class="metis-notes-more">Want the short version of how we work? See <a href="/services/">what we build</a>, <a href="/services/detailed/">every service in detail</a>, or <a href="/faq/">the FAQ</a>.</p>
  <div class="metis-article-footer-space"></div>
</main>`;

const indexStyles = `<style data-metis="cards">
  .metis-cards { border-top: 1px solid var(--border-hair); margin-top: 30px; }
  .metis-card {
    display: block; text-decoration: none; padding: 30px 0;
    border-bottom: 1px solid var(--border-hair);
    transition: opacity var(--dur-base) var(--ease-out);
  }
  .metis-card:hover { opacity: .72; }
  .metis-card:hover h2 { color: var(--metis-blue); }
  .metis-card-meta {
    display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px;
    font-family: var(--font-sans); font-size: var(--fs-sm);
    color: var(--text-faint); margin: 0 0 12px;
  }
  .metis-card h2 {
    font-family: var(--font-sans); font-weight: 600; font-size: 1.5rem;
    letter-spacing: -0.022em; line-height: 1.18; color: var(--text-strong);
    margin: 0 0 10px; transition: color var(--dur-base) var(--ease-out);
  }
  .metis-card p {
    font-family: var(--font-sans); font-size: var(--fs-body); line-height: 1.55;
    color: var(--text-muted); margin: 0; max-width: 64ch;
  }
  .metis-notes-more {
    font-family: var(--font-sans); font-size: var(--fs-body); line-height: 1.6;
    color: var(--text-muted); margin: 30px 0 0;
  }
  .metis-notes-more a { color: var(--metis-blue); text-decoration: none; font-weight: 500; }
  .metis-notes-more a:hover { text-decoration: underline; }
  .metis-card-go {
    display: inline-block; margin-top: 15px; font-family: var(--font-sans);
    font-size: var(--fs-sm); font-weight: 600; color: var(--metis-blue);
  }
</style>`;

console.log("\nIndex:");
emit(
  "blog/index.html",
  render({
    title: "Notes on AI, compliance and voice agents in India | METIS",
    ogTitle: "Notes | METIS",
    description:
      "Practical writing on AI voice agents, India's DPDP and TCCCPR rules, and what building this actually involves — from a team running it in production.",
    canonical: `${SITE}/blog/`,
    ogType: "website",
    jsonld: [
      ld({
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${SITE}/blog/#blog`,
        name: "Notes",
        description: "Writing on AI voice agents, compliance and product work in India.",
        url: `${SITE}/blog/`,
        inLanguage: "en-IN",
        publisher: ORG,
        blogPost: built.map((n) => ({
          "@type": "BlogPosting",
          headline: n.h1,
          description: n.description,
          datePublished: n.dateISO,
          url: n.url,
        })),
      }),
      ld(crumbs([{ name: "Home", url: `${SITE}/` }, { name: "Notes", url: `${SITE}/blog/` }])),
    ].join("\n"),
    main: indexMain,
    headExtra: indexStyles,
  })
);

/* ---------------- FAQ page ---------------- */

const faqBody = frag("faq");
const faqItems = faqFromBlocks(faqBody);

const faqStyles = `<style data-metis="faqpage">
  .metis-faqpage { max-width: 1080px; margin-inline: auto; padding-inline: 24px; }
  .metis-faqpage-head { padding-top: clamp(40px, 6vh, 72px); max-width: 720px; }
  .metis-faqpage-head h1 {
    font-family: var(--font-sans); font-weight: 600;
    font-size: clamp(2rem, 4vw, 3.1rem); line-height: 1.06;
    letter-spacing: -0.028em; color: var(--text-strong); margin: 18px 0 18px;
  }
  .metis-faqpage-lede {
    font-family: var(--font-sans); font-size: var(--fs-lead); line-height: 1.55;
    color: var(--text-muted); margin: 0; max-width: 54ch;
  }
  .metis-faqpage-lede a { color: var(--metis-blue); text-decoration: none; font-weight: 500; }
  .metis-faqpage-lede a:hover { text-decoration: underline; }
  .metis-faqpage-stamp {
    font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-faint);
    margin: 20px 0 0;
  }

  .metis-faqpage-grid { display: block; margin-top: 46px; }

  .metis-faqpage-nav { display: none; }
  .metis-faqpage-navk {
    font-family: var(--font-mono); font-size: 0.6875rem; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--text-faint); margin: 0 0 14px;
  }
  .metis-faqpage-nav a {
    display: block; font-family: var(--font-sans); font-size: var(--fs-sm);
    font-weight: 500; color: var(--text-muted); text-decoration: none;
    padding: 7px 0 7px 14px; border-left: 2px solid var(--border-hair);
    transition: color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
  }
  .metis-faqpage-nav a:hover { color: var(--metis-blue); border-left-color: var(--metis-blue); }

  .metis-qsec { padding-top: 8px; scroll-margin-top: 96px; }
  .metis-qsec + .metis-qsec { margin-top: 62px; }
  .metis-qsec > h2 {
    font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--metis-blue);
    margin: 0 0 26px; padding-bottom: 14px; border-bottom: 1px solid var(--border-hair);
  }
  .metis-q { padding: 0 0 34px; max-width: 66ch; }
  .metis-q h3 {
    font-family: var(--font-sans); font-weight: 600; font-size: 1.2rem;
    letter-spacing: -0.015em; line-height: 1.3; color: var(--text-strong);
    margin: 0 0 12px;
  }
  .metis-q p {
    font-family: var(--font-sans); font-size: var(--fs-body); line-height: 1.62;
    color: var(--text-muted); margin: 0 0 12px;
  }
  /* The serif answer is the sentence an AI engine lifts. Marking it
     typographically is the whole point — do not merge with the body copy.
     Selector must out-specify .metis-q p (0-1-1), hence the qualified form. */
  .metis-q p.metis-a {
    font-family: var(--font-serif); font-size: 1.24rem; line-height: 1.42;
    color: var(--text-strong); margin: 0 0 14px;
  }
  .metis-q p:last-child { margin-bottom: 0; }
  .metis-q a { color: var(--metis-blue); text-decoration: none; font-weight: 500; }
  .metis-q a:hover { text-decoration: underline; }

  @media (min-width: 940px) {
    .metis-faqpage-grid { display: grid; grid-template-columns: 210px minmax(0, 1fr); gap: 64px; }
    .metis-faqpage-nav { display: block; position: sticky; top: 104px; align-self: start; }
  }
</style>`;

console.log("\nFAQ:");
emit(
  "faq/index.html",
  render({
    title: "FAQ | METIS — AI voice agents and India's rules",
    ogTitle: "Questions we get asked | METIS",
    description:
      "Straight answers on how METIS works, what AI voice agents can realistically do, where your customer data goes, and what India's rules require.",
    canonical: `${SITE}/faq/`,
    ogType: "website",
    jsonld: [
      ld({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "en-IN",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
      ld(crumbs([{ name: "Home", url: `${SITE}/` }, { name: "FAQ", url: `${SITE}/faq/` }])),
    ].join("\n"),
    main: faqBody,
    headExtra: faqStyles,
  })
);

/* ---------------- privacy ---------------- */

const privacyBody = frag("privacy");
const privacyMain = `<main id="metis-main" class="metis-article">
  <div class="metis-article-head">
    <p class="metis-eyebrow" style="margin: 0;">Privacy</p>
    <h1>Privacy policy</h1>
    <div class="metis-article-byline">
      <b>METIS</b><span aria-hidden="true">&middot;</span>
      <span>metisai.in</span><span aria-hidden="true">&middot;</span>
      <span>Updated <time datetime="2026-10-15">15 October 2026</time></span>
    </div>
  </div>
  <div class="metis-article-body">
${privacyBody}
  </div>
  <div class="metis-article-footer-space"></div>
</main>`;

console.log("\nPrivacy:");
emit(
  "privacy/index.html",
  render({
    title: "Privacy policy | METIS",
    ogTitle: "Privacy policy | METIS",
    description:
      "What metisai.in collects (Google Analytics and contact-form details), why, who processes it, how long it is kept, and your rights under India's DPDP Act.",
    canonical: `${SITE}/privacy/`,
    ogType: "website",
    jsonld: [
      ld({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy policy",
        url: `${SITE}/privacy/`,
        inLanguage: "en-IN",
        dateModified: "2026-10-15",
        publisher: ORG,
      }),
      ld(crumbs([{ name: "Home", url: `${SITE}/` }, { name: "Privacy policy", url: `${SITE}/privacy/` }])),
    ].join("\n"),
    main: privacyMain,
    headExtra: `<style data-metis="privacy">
  .metis-article-body code { font-family: var(--font-mono); font-size: 0.88em; }
</style>`,
  })
);

/* ---------------- sitemap ---------------- */

// lastmod = the date each page's published HTML last changed (git log -1 of the
// output file). Every indexable page changed on 2026-10-15 (SEO/AEO pass: GA4,
// footer + internal links, JSON-LD). Bump the matching entry when a page changes.
const SEO_PASS = "2026-10-15";
const urls = [
  { loc: `${SITE}/`, mod: SEO_PASS },
  { loc: `${SITE}/services/`, mod: SEO_PASS },
  { loc: `${SITE}/services/detailed/`, mod: SEO_PASS },
  { loc: `${SITE}/about/`, mod: SEO_PASS },
  { loc: `${SITE}/contact/`, mod: SEO_PASS },
  { loc: `${SITE}/faq/`, mod: SEO_PASS },
  { loc: `${SITE}/blog/`, mod: SEO_PASS },
  { loc: `${SITE}/privacy/`, mod: SEO_PASS },
  ...built.map((n) => ({ loc: n.url, mod: n.lastmod || SEO_PASS })),
];

emit(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.mod}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`
);

console.log(
  `\nDone. ${built.length} notes, ${faqItems.length} FAQ answers, ` +
    `${built.reduce((a, n) => a + n.faqCount, 0)} in-article questions, ${urls.length} sitemap URLs.\n`
);
