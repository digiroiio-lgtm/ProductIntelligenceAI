#!/usr/bin/env node
/**
 * Post-build site validation. Starts `next start`, fetches every route and
 * checks SEO, structure, links and claims. Exits non-zero on any failure.
 *
 * Usage: npm run build && npm run validate
 */
import { spawn } from "node:child_process";

const PORT = process.env.VALIDATE_PORT ?? "3123";
const BASE = `http://127.0.0.1:${PORT}`;
const ORIGIN = "https://productintelligenceai.com";

const INDEXABLE = [
  "/",
  "/what-is-product-intelligence",
  "/ai-product-intelligence",
  "/product-intelligence-software",
  "/product-intelligence-use-cases",
  "/product-intelligence-for-ecommerce",
];
const NOINDEX = ["/domain"];
const ALL = [...INDEXABLE, ...NOINDEX];

const BANNED_PHRASES = [
  "game-changing",
  "game changing",
  "cutting-edge",
  "cutting edge",
  "unlock the power",
  "revolutioniz",
  "supercharge",
];

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  FAIL  ${msg}`);
};
const ok = (msg) => console.log(`  ok    ${msg}`);
const check = (cond, msg) => (cond ? ok(msg) : fail(msg));

// Refuse to validate a stale server that is already listening on the port.
const alreadyUp = await fetch(`${BASE}/robots.txt`).then(() => true, () => false);
if (alreadyUp) {
  console.error(`Port ${PORT} is already in use; stop that server or set VALIDATE_PORT.`);
  process.exit(1);
}

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", PORT, "-H", "127.0.0.1"], {
  stdio: ["ignore", "pipe", "pipe"],
  detached: true, // own process group so the whole tree can be stopped
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d));
server.stderr.on("data", (d) => (serverLog += d));

async function waitForServer() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const res = await fetch(`${BASE}/robots.txt`);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start:\n${serverLog}`);
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const textOf = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );

const meta = (html, attr, name) => {
  const re = new RegExp(`<meta[^>]*${attr}="${name}"[^>]*>`, "i");
  const tag = html.match(re)?.[0];
  if (!tag) return undefined;
  const content = tag.match(/content="([^"]*)"/i)?.[1];
  return content === undefined ? undefined : decode(content);
};

async function get(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  return { status: res.status, body: await res.text(), headers: res.headers };
}

const pages = new Map();
const titles = new Map();
const descriptions = new Map();

function validatePage(path, html, { indexable }) {
  console.log(`\n${path}`);
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  check(h1s.length === 1, `exactly one H1 (found ${h1s.length})`);

  // heading hierarchy: never jump more than one level deeper
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  let prev = 0;
  let skipped = false;
  for (const level of levels) {
    if (level > prev + 1) skipped = true;
    prev = level;
  }
  check(!skipped, "heading hierarchy has no skipped levels");

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  check(title.length > 0 && title.length <= 70, `title present, ≤70 chars (${title.length}): "${title}"`);
  const desc = meta(html, "name", "description") ?? "";
  check(desc.length >= 100 && desc.length <= 170, `description 100–170 chars (${desc.length})`);
  if (indexable) {
    check(!titles.has(title), "title is unique");
    check(!descriptions.has(desc), "description is unique");
    titles.set(title, path);
    descriptions.set(desc, path);
  }

  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1];
  const expectedCanonical = path === "/" ? ORIGIN : `${ORIGIN}${path}`;
  check(canonical === expectedCanonical, `canonical is ${expectedCanonical} (got ${canonical})`);

  for (const prop of ["og:title", "og:description", "og:image", "og:url", "og:type"]) {
    check(Boolean(meta(html, "property", prop)), `${prop} present`);
  }
  check(meta(html, "property", "og:image") === `${ORIGIN}/og-image.png`, "og:image is absolute production URL");
  check(meta(html, "property", "og:url") === expectedCanonical, "og:url matches canonical");
  check(meta(html, "name", "twitter:card") === "summary_large_image", "twitter:card present");
  for (const prop of ["twitter:title", "twitter:description", "twitter:image"]) {
    check(Boolean(meta(html, "name", prop)), `${prop} present`);
  }

  const robots = meta(html, "name", "robots");
  if (indexable) {
    check(!robots || !/noindex/i.test(robots), `indexable (robots: ${robots ?? "default"})`);
  } else {
    check(/noindex/i.test(robots ?? "") && /follow/i.test(robots ?? "") && !/nofollow/i.test(robots ?? ""), `robots is noindex, follow (got ${robots})`);
  }

  // domain-sale banner (sitewide)
  check(html.includes("ProductIntelligenceAI.com is available for acquisition") && html.includes("View Domain Details"), "banner desktop copy present");
  check(html.includes("This domain is for sale"), "banner mobile copy present");
  check(/<aside[^>]*class="sale-banner"/.test(html), "banner rendered as aside.sale-banner");

  // nav + footer
  check(html.includes('aria-label="Primary"'), "primary navigation present");
  check(html.includes("does not represent a commercial software service"), "footer disclaimer present");

  // definition word count
  const def = html.match(/data-definition[^>]*>([\s\S]*?)<\/p>/)?.[1];
  if (def && indexable) {
    const words = textOf(def).split(/\s+/).filter(Boolean).length;
    check(words >= 40 && words <= 80, `definition is 40–80 words (${words})`);
  } else if (!def && indexable) {
    fail("missing data-definition box");
  }

  // banned language
  const text = textOf(html).toLowerCase();
  for (const phrase of BANNED_PHRASES) check(!text.includes(phrase), `no banned phrase "${phrase}"`);

  // structured data
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (indexable || path === "/") {
    check(blocks.length === 1, "one JSON-LD block");
    for (const block of blocks) {
      let data;
      try {
        data = JSON.parse(block[1]);
      } catch (e) {
        fail(`JSON-LD parses (${e.message})`);
        continue;
      }
      ok("JSON-LD parses");
      const graph = data["@graph"] ?? [data];
      const types = graph.map((n) => n["@type"]);
      ok(`JSON-LD types: ${types.join(", ")}`);
      check(!JSON.stringify(data).match(/aggregateRating|"review"|Person|telephone|address|sameAs|logo|founder/), "no fabricated entity fields in JSON-LD");
      const visible = textOf(html);
      for (const node of graph) {
        if (node["@type"] === "BreadcrumbList") {
          for (const item of node.itemListElement) {
            check(visible.includes(item.name), `breadcrumb "${item.name}" is visible`);
          }
        }
        if (node["@type"] === "FAQPage") {
          for (const q of node.mainEntity) {
            check(visible.includes(q.name) && visible.includes(q.acceptedAnswer.text), `FAQ visible: "${q.name}"`);
          }
        }
        if (node["@type"] === "Article") {
          check(node.headline === decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]+>/g, "")), "Article headline matches H1");
        }
        if (node["@type"] === "WebPage") {
          check(node.url === expectedCanonical, "WebPage url matches canonical");
        }
      }
    }
  } else {
    check(blocks.length === 0, "no JSON-LD on noindex page");
  }

  const words = textOf(html.match(/<main[\s\S]*<\/main>/)?.[0] ?? "").split(/\s+/).filter(Boolean).length;
  console.log(`  info  main content ≈ ${words} words`);
  pages.set(path, { html, words });
}

async function validateLinks() {
  console.log("\nInternal links");
  const seen = new Set();
  for (const [path, { html }] of pages) {
    for (const m of html.matchAll(/<a [^>]*href="([^"]+)"/g)) {
      const href = decode(m[1]);
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const [pathname, hash] = href.split("#");
      const target = pathname || path;
      const key = `${target}#${hash ?? ""}`;
      if (seen.has(key)) continue;
      seen.add(key);
      if (!pages.has(target)) {
        const res = await get(target);
        check(res.status === 200, `${path} → ${href} resolves (${res.status})`);
        continue;
      }
      if (hash) {
        const targetHtml = pages.get(target).html;
        check(new RegExp(`id="${hash}"`).test(targetHtml), `${path} → ${href} anchor exists`);
      }
    }
  }
  ok(`${seen.size} unique internal link targets checked`);

  // every pillar page must be linked from the homepage and from each other pillar
  const hrefsOf = (p) =>
    new Set([...pages.get(p).html.matchAll(/<a [^>]*href="(\/[^"#]*)/g)].map((m) => m[1]));
  for (const target of INDEXABLE.slice(1)) {
    check(hrefsOf("/").has(target), `homepage links to ${target}`);
    for (const source of INDEXABLE.slice(1)) {
      if (source !== target) check(hrefsOf(source).has(target), `${source} links to ${target}`);
    }
  }
}

async function validateCrawlFiles() {
  console.log("\nsitemap.xml / robots.txt / 404");
  const sitemap = await get("/sitemap.xml");
  check(sitemap.status === 200, "sitemap.xml returns 200");
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check(locs.length === INDEXABLE.length, `sitemap lists ${INDEXABLE.length} URLs (found ${locs.length})`);
  for (const p of INDEXABLE) {
    check(locs.includes(p === "/" ? ORIGIN : `${ORIGIN}${p}`), `sitemap includes ${p}`);
  }
  check(!locs.some((l) => l.includes("/domain")), "sitemap excludes /domain");

  const robots = await get("/robots.txt");
  check(robots.status === 200, "robots.txt returns 200");
  check(/User-Agent: \*/i.test(robots.body) && /Allow: \//i.test(robots.body), "robots allows all crawlers");
  check(!/Disallow:\s*\S/i.test(robots.body), "robots has no Disallow rules");
  check(robots.body.includes(`Sitemap: ${ORIGIN}/sitemap.xml`), "robots references sitemap");

  const nf = await get("/does-not-exist");
  check(nf.status === 404, "unknown route returns 404");
  check(nf.body.includes("This domain is for sale"), "404 page shows banner");
  check(/<h1[^>]*>Page not found<\/h1>/.test(nf.body), "404 page has H1");
  check(/noindex/i.test(nf.body), "404 page is noindex");

  const icon = await get("/icon.svg");
  check(icon.status === 200, "favicon (icon.svg) resolves");
  const og = await get("/og-image.png");
  check(og.status === 200 && og.headers.get("content-type") === "image/png", "og-image.png resolves");
}

function validateConfigFlags() {
  console.log("\nEnvironment-driven config");
  const home = pages.get("/").html;
  const gaExpected = process.env.NEXT_PUBLIC_GA_ID;
  const gscExpected = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const saleExpected = process.env.NEXT_PUBLIC_DOMAIN_SALE_URL;
  const hasGa = home.includes("googletagmanager.com/gtag/js");
  check(hasGa === Boolean(gaExpected), `GA4 script ${gaExpected ? "present (env set)" : "absent (env unset)"}`);
  if (gaExpected) check(home.includes(`id=${gaExpected}`), "GA4 uses configured ID");
  const gsc = meta(home, "name", "google-site-verification");
  check(gscExpected ? gsc === gscExpected : gsc === undefined, `Google verification meta ${gscExpected ? "present" : "absent"} as configured`);
  const bannerHref = home.match(/<aside[^>]*class="sale-banner"[\s\S]*?<a[^>]*href="([^"]+)"/)?.[1];
  check(bannerHref === (saleExpected || "/domain"), `banner href is ${saleExpected || "/domain"} (got ${bannerHref})`);
}

try {
  await waitForServer();
  for (const path of ALL) {
    const res = await get(path);
    console.log(`\n${path} → ${res.status}`);
    if (res.status !== 200) {
      fail(`${path} returned ${res.status}`);
      continue;
    }
    validatePage(path, res.body, { indexable: INDEXABLE.includes(path) });
  }
  await validateLinks();
  await validateCrawlFiles();
  validateConfigFlags();
} catch (error) {
  fail(String(error));
} finally {
  try {
    process.kill(-server.pid);
  } catch {
    server.kill();
  }
}

console.log(failures === 0 ? "\nAll checks passed." : `\n${failures} check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
