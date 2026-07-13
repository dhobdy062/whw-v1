# Warren Hall Seller Authority Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and privately publish a responsive Warren Hall marketing site whose seller-led homepage and Market Mindset knowledge system convert qualified inquiries while building crawlable topical authority.

**Architecture:** Initialize the OpenAI Sites vinext starter, then implement a server-rendered multi-route React site. Keep Market Mindset content in one typed local module that drives the homepage feature, collection index, canonical answer pages, metadata, structured data, and sitemap so those surfaces cannot drift.

**Tech Stack:** OpenAI Sites vinext starter, React, TypeScript, Vite, CSS, Vitest, Testing Library, Cloudflare-compatible ESM output, Sites hosting.

## Global Constraints

- The approved visual direction is Seller Authority: seller valuation primary, private consultation secondary.
- Use Warren Hall, Compass, “More than $120M in closed volume over eight years,” “2026 Top 100 Triangle Real Producers,” “REALTOR® / Senior Broker,” and “Six consecutive years as a top producer at his previous firm.”
- Use the supplied portrait as the primary working image; do not use the Raleigh composite as the hero because it contains a conflicting Culture Realty mark.
- Public launch, indexing, IndexNow submission, live lead collection, real listings, testimonials, Compass-logo usage, and unapproved Instagram media remain out of scope.
- Market Mindset must include consumer, homeowner-value, Raleigh-market, and agent-growth tracks with one canonical page per answer.
- Do not emit `VideoObject` until a real visible video and required metadata exist.
- Draft answer pages remain `noindex`; the private review deployment is not the public SEO launch.
- Target WCAG 2.2 AA with keyboard access, visible focus, strong contrast, reduced motion, captions/transcripts, semantic structure, and 44px touch targets.
- Use OKLCH production colors. Reject beige editorial styling, generic brokerage templates, repetitive card grids, gradient text, glassmorphism, oversized radii, and unsupported superlatives.
- Preserve the starter's Sites Vite plugin, package manager, lockfile, and Cloudflare-compatible ESM output.

---

## Planned File Structure

- `PRODUCT.md` — approved strategic context.
- `DESIGN.md` — normative visual tokens and component rules.
- `.impeccable/design.json` — motion, breakpoints, tonal ramps, and component examples.
- `.openai/hosting.json` — Sites hosting definition created by the initializer and preserved.
- `app/layout.tsx` — site metadata, font loading, global header/footer shell.
- `app/globals.css` — OKLCH tokens, responsive layout, components, focus, and reduced motion.
- `app/page.tsx` — seller-led homepage.
- `app/about/page.tsx` — author profile and verified authority.
- `app/market-mindset/page.tsx` — crawlable collection index and topic clusters.
- `app/market-mindset/[slug]/page.tsx` — canonical answer page, metadata, and JSON-LD.
- `app/sitemap.ts` — canonical public route inventory with truthful modified dates.
- `app/robots.ts` — private-review noindex policy; change only at approved public launch.
- `app/components/site-header.tsx` — responsive navigation and mobile menu.
- `app/components/site-footer.tsx` — disclosures and private-review status.
- `app/components/market-mindset-card.tsx` — reusable question link.
- `app/components/market-mindset-answer.tsx` — answer content and related links.
- `app/data/market-mindset.ts` — typed source of truth for answer content and SEO fields.
- `public/warren-hall-top-100.png` — supplied portrait copied without alteration.
- `tests/market-mindset.test.ts` — content completeness, unique slugs, and schema eligibility.
- `tests/rendering.test.tsx` — homepage, collection, accessibility landmarks, and preview-state assertions.

---

### Task 1: Initialize Sites and Establish the Visual Foundation

**Files:**
- Create: `DESIGN.md`
- Create: `.impeccable/design.json`
- Create: `public/warren-hall-top-100.png`
- Modify: `package.json`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Delete after replacement: `app/_sites-preview/**`

**Interfaces:**
- Consumes: approved `PRODUCT.md` and design specification.
- Produces: CSS custom properties used by every route and the shared `metadata` identity.

- [ ] **Step 1: Initialize the project and keep the starter session alive**

Run the bundled Sites initializer against the workspace root once. Start the printed development command in a retained session and open the exact Local URL once in Codex. Preserve `.openai/hosting.json`, the package manager, lockfile, and existing Sites Vite plugin.

Expected: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `package.json`, and `.openai/hosting.json` exist; the starter loads at the printed Local URL.

- [ ] **Step 2: Add the test harness before product code**

Run:

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

Add these scripts to `package.json` without removing the starter scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

Expected: `npm run test -- --passWithNoTests` exits 0.

- [ ] **Step 3: Write a failing rendering test for finished-site metadata**

Create `tests/rendering.test.tsx` with:

```tsx
import { describe, expect, it } from "vitest";
import { metadata } from "../app/layout";

describe("site identity", () => {
  it("uses the finished Warren Hall metadata", () => {
    expect(metadata.title).toContain("Warren Hall");
    expect(metadata.description).toContain("Raleigh");
    expect(metadata.description).toContain("Triangle");
  });
});
```

- [ ] **Step 4: Run the test and verify the starter identity fails**

Run: `npm run test -- tests/rendering.test.tsx`

Expected: FAIL because the starter metadata does not contain the finished Warren Hall identity.

- [ ] **Step 5: Implement the design context and metadata**

Create `DESIGN.md` from the approved spec using the required six-section Impeccable format. Use these canonical OKLCH roles in both the document and `app/globals.css`:

```css
:root {
  --color-bg: oklch(1 0 0);
  --color-surface: oklch(0.965 0.004 250);
  --color-ink: oklch(0.16 0.025 255);
  --color-muted: oklch(0.43 0.025 255);
  --color-primary: oklch(0.64 0.145 68);
  --color-primary-deep: oklch(0.42 0.115 68);
  --color-compass: oklch(0.54 0.205 28);
  --color-line: oklch(0.86 0.01 255);
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --space-page: clamp(1.25rem, 4vw, 4.5rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Use a licensed catalog font that passes the Impeccable brand register's reflex-reject list. If the chosen remote font cannot be confirmed, use `Arial, Helvetica, sans-serif` for body and `Georgia, Times, serif` for display rather than inventing a dependency.

Set layout metadata to:

```tsx
export const metadata = {
  title: "Warren Hall | Raleigh & Triangle Real Estate Advisor",
  description:
    "Warren Hall is a Compass REALTOR® and Senior Broker serving Raleigh and the Triangle with clear strategy for selling, moving up, and buying high-value homes.",
};
```

Remove the temporary `codex-preview` marker, starter title/description, and `_sites-preview` import. Remove `react-loading-skeleton` if no finished component uses it, then refresh the lockfile.

- [ ] **Step 6: Copy the approved portrait and document provenance**

Copy `/var/folders/jp/4p6jtrz97fn0wwh9y83tmpt80000gn/T/codex-clipboard-ff770e0f-f69e-40a7-99c0-ad81c479826a.png` to `public/warren-hall-top-100.png`. Record in `todo.md` that Don supplied the image in this task and approved it for the private review build.

- [ ] **Step 7: Run identity tests and build**

Run:

```bash
npm run test -- tests/rendering.test.tsx
npm run build
```

Expected: test PASS; production build exits 0.

- [ ] **Step 8: Commit if the workspace is under Git**

Run `git rev-parse --is-inside-work-tree`. If true:

```bash
git add DESIGN.md .impeccable app package.json package-lock.json public/warren-hall-top-100.png tests/rendering.test.tsx
git commit -m "chore: establish Warren Hall site foundation"
```

If false, record “commit unavailable: workspace is not a Git repository” in `todo.md` and continue without initializing Git.

---

### Task 2: Build the Typed Market Mindset Content Model

**Files:**
- Create: `app/data/market-mindset.ts`
- Create: `tests/market-mindset.test.ts`

**Interfaces:**
- Produces: `MarketMindsetEntry`, `marketMindsetEntries`, `getMarketMindsetEntry(slug)`, and `getRelatedEntries(entry)`.
- Consumers: homepage, collection route, answer route, sitemap, structured data.

- [ ] **Step 1: Write failing content-contract tests**

Create `tests/market-mindset.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  getMarketMindsetEntry,
  marketMindsetEntries,
} from "../app/data/market-mindset";

describe("Market Mindset content", () => {
  it("ships eight unique canonical question pages", () => {
    expect(marketMindsetEntries).toHaveLength(8);
    expect(new Set(marketMindsetEntries.map((entry) => entry.slug)).size).toBe(8);
  });

  it("covers every approved audience track", () => {
    expect(new Set(marketMindsetEntries.map((entry) => entry.audience))).toEqual(
      new Set(["seller", "buyer", "homeowner", "agent"]),
    );
  });

  it("keeps draft video pages out of VideoObject eligibility", () => {
    for (const entry of marketMindsetEntries) {
      expect(entry.video.status).toBe("coming-soon");
      expect(entry.video.contentUrl).toBeUndefined();
    }
  });

  it("resolves known slugs", () => {
    expect(getMarketMindsetEntry("private-valuation-vs-online-estimate")?.audience).toBe("seller");
  });
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm run test -- tests/market-mindset.test.ts`

Expected: FAIL because `app/data/market-mindset.ts` does not exist.

- [ ] **Step 3: Implement the typed content model**

Define:

```ts
export type MarketMindsetAudience = "seller" | "buyer" | "homeowner" | "agent";

export type MarketMindsetEntry = {
  slug: string;
  question: string;
  directAnswer: string;
  sections: Array<{ heading: string; body: string }>;
  audience: MarketMindsetAudience;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  sources: Array<{ label: string; href: string }>;
  relatedSlugs: string[];
  video: {
    status: "coming-soon" | "published";
    duration?: string;
    thumbnailUrl?: string;
    contentUrl?: string;
    transcript?: string;
  };
};
```

Create exactly eight entries using the eight approved example questions. Each entry must contain a useful direct answer and at least two written sections; current-market claims must be framed as context and point to a public source. Use ISO dates and stable lowercase hyphenated slugs. Export:

```ts
export const getMarketMindsetEntry = (slug: string) =>
  marketMindsetEntries.find((entry) => entry.slug === slug);

export const getRelatedEntries = (entry: MarketMindsetEntry) =>
  entry.relatedSlugs
    .map(getMarketMindsetEntry)
    .filter((item): item is MarketMindsetEntry => Boolean(item));
```

- [ ] **Step 4: Run the content tests**

Run: `npm run test -- tests/market-mindset.test.ts`

Expected: 4 tests PASS.

- [ ] **Step 5: Commit if Git is available**

```bash
git add app/data/market-mindset.ts tests/market-mindset.test.ts
git commit -m "feat: add Market Mindset content model"
```

---

### Task 3: Implement the Shared Shell and Seller-Led Homepage

**Files:**
- Create: `app/components/site-header.tsx`
- Create: `app/components/site-footer.tsx`
- Create: `app/components/market-mindset-card.tsx`
- Modify: `app/layout.tsx`
- Replace: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendering.test.tsx`

**Interfaces:**
- Consumes: `marketMindsetEntries` and global CSS tokens.
- Produces: reusable shell and question-card link used by the collection page.

- [ ] **Step 1: Add failing homepage rendering assertions**

Extend `tests/rendering.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

it("renders the approved seller authority message", () => {
  render(<HomePage />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Raleigh|Triangle/i);
  expect(screen.getByText(/More than \$120M/i)).toBeInTheDocument();
  expect(screen.getByText(/2026 Top 100 Triangle Real Producers/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /private valuation/i })).toHaveAttribute("href", "#contact");
  expect(screen.getByRole("heading", { name: /Market Mindset/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm run test -- tests/rendering.test.tsx`

Expected: FAIL because the starter homepage lacks approved content.

- [ ] **Step 3: Implement semantic shared components**

`SiteHeader` includes a visible Warren Hall home link, desktop navigation, a native `<details>` mobile menu or keyboard-safe button implementation, and “Private Valuation.” `SiteFooter` includes Compass text affiliation, REALTOR® / Senior Broker, “Private review — inquiries are not submitted,” and Equal Housing Opportunity text. Do not render the Compass logo.

`MarketMindsetCard` accepts:

```ts
type MarketMindsetCardProps = {
  entry: MarketMindsetEntry;
};
```

It renders a real link to `/market-mindset/${entry.slug}`, the question as its heading, category, audience label, direct-answer excerpt, and “Video answer coming soon.”

- [ ] **Step 4: Implement the homepage sections**

Build the ten approved sections in order. The hero uses `/warren-hall-top-100.png` with alt text “Warren Hall, Compass REALTOR and Senior Broker, recognized among the 2026 Triangle Real Producers Top 100.” Feature four Market Mindset entries spanning seller, buyer, homeowner, and agent audiences. The contact section uses anchors and a review-state notice; it must not contain a live form.

- [ ] **Step 5: Implement responsive and motion behavior**

Use Grid only for two-dimensional hero and collection arrangements, Flexbox for navigation and one-dimensional groups, and `repeat(auto-fit, minmax(min(100%, 18rem), 1fr))` for Market Mindset cards. Add `:focus-visible` outlines with at least 3:1 contrast. Add one first-load hero choreography that enhances visible-by-default content and disable it under `prefers-reduced-motion: reduce`.

- [ ] **Step 6: Run tests and build**

Run:

```bash
npm run test -- tests/rendering.test.tsx
npm run build
```

Expected: homepage tests PASS; build exits 0.

- [ ] **Step 7: Commit if Git is available**

```bash
git add app tests/rendering.test.tsx
git commit -m "feat: build Warren Hall seller authority homepage"
```

---

### Task 4: Implement Market Mindset Collection, Answer Routes, and Search Metadata

**Files:**
- Create: `app/market-mindset/page.tsx`
- Create: `app/market-mindset/[slug]/page.tsx`
- Create: `app/components/market-mindset-answer.tsx`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `tests/market-mindset.test.ts`
- Modify: `tests/rendering.test.tsx`

**Interfaces:**
- Consumes: all exports from `app/data/market-mindset.ts`.
- Produces: canonical pages, `Article`/breadcrumb JSON-LD, sitemap records, private-preview robots policy.

- [ ] **Step 1: Add failing SEO-contract tests**

Extend `tests/market-mindset.test.ts`:

```ts
import { buildArticleJsonLd } from "../app/market-mindset/[slug]/page";

it("builds visible-content Article schema without invented video schema", () => {
  const entry = getMarketMindsetEntry("private-valuation-vs-online-estimate")!;
  const jsonLd = buildArticleJsonLd(entry, "https://example.com");
  expect(jsonLd["@type"]).toBe("Article");
  expect(jsonLd.headline).toBe(entry.question);
  expect(jsonLd.author.name).toBe("Warren Hall");
  expect(JSON.stringify(jsonLd)).not.toContain("VideoObject");
});
```

Add to `tests/rendering.test.tsx`:

```tsx
import MarketMindsetPage from "../app/market-mindset/page";

it("renders crawlable links for every Market Mindset answer", () => {
  render(<MarketMindsetPage />);
  expect(screen.getAllByRole("link", { name: /Read Warren's answer/i })).toHaveLength(8);
});
```

- [ ] **Step 2: Run tests and verify failures**

Run: `npm run test -- tests/market-mindset.test.ts tests/rendering.test.tsx`

Expected: FAIL because collection and answer routes do not exist.

- [ ] **Step 3: Implement the collection page**

Render all seven approved categories as anchored topic clusters with ordinary `<a>` links. Include a concise introduction explaining that each answer combines Warren's video perspective with written detail, transcript support, and sources. Do not hide entries behind client-only state.

- [ ] **Step 4: Implement answer route helpers and page**

Export `generateStaticParams`, `generateMetadata`, and:

```ts
export function buildArticleJsonLd(entry: MarketMindsetEntry, origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.question,
    datePublished: entry.publishedAt,
    dateModified: entry.modifiedAt,
    author: { "@type": "Person", name: "Warren Hall", url: `${origin}/about` },
    publisher: { "@type": "Organization", name: "Warren Hall Real Estate" },
    mainEntityOfPage: `${origin}/market-mindset/${entry.slug}`,
  } as const;
}
```

Render direct answer, video-coming-soon state, written sections, sources, byline/dates, related questions, and context-specific CTA. Include separate breadcrumb JSON-LD. Use `notFound()` for unknown slugs. Keep `robots: { index: false, follow: false }` for the private review.

- [ ] **Step 5: Implement sitemap and robots policy**

`app/sitemap.ts` returns `/`, `/about`, `/market-mindset`, and every answer URL with `lastModified` from the source data. `app/robots.ts` returns a private-review policy that disallows crawling. Record in code comments that public indexing requires a separate approval event.

- [ ] **Step 6: Run route tests and build**

Run:

```bash
npm run test -- tests/market-mindset.test.ts tests/rendering.test.tsx
npm run build
```

Expected: all tests PASS; every static route builds; no `VideoObject` is emitted.

- [ ] **Step 7: Commit if Git is available**

```bash
git add app/market-mindset app/components app/sitemap.ts app/robots.ts tests
git commit -m "feat: add Market Mindset publishing system"
```

---

### Task 5: Implement About, Social Preview, and Complete Content QA

**Files:**
- Create: `app/about/page.tsx`
- Create after validation: `public/og.png`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendering.test.tsx`

**Interfaces:**
- Consumes: shared shell, verified claims, approved portrait.
- Produces: author identity target for answer-page bylines and site-specific social metadata.

- [ ] **Step 1: Add a failing author-profile test**

```tsx
import AboutPage from "../app/about/page";

it("renders the verified Warren Hall author profile", () => {
  render(<AboutPage />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Warren Hall");
  expect(screen.getByText(/Compass/i)).toBeInTheDocument();
  expect(screen.getByText(/Senior Broker/i)).toBeInTheDocument();
  expect(screen.getByText(/Six consecutive years/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm run test -- tests/rendering.test.tsx`

Expected: FAIL because the About route does not exist.

- [ ] **Step 3: Implement About page**

Create a concise author profile with Warren's Raleigh-native perspective, Compass affiliation, verified volume, Top 100 recognition, Senior Broker role, six-year top-producer history, service philosophy, and a link back to Market Mindset. Avoid adding any unverified review count, listing inventory, or luxury-specialist designation.

- [ ] **Step 4: Generate exactly one finished social-preview image**

Once homepage copy and design are stable, launch one image-generation request using this brief:

```text
Create a complete 1200x630 social preview card for Warren Hall, Raleigh & Triangle Real Estate Advisor. Use the finished site's deep ink, true white, and honey-gold palette; include the exact text “Warren Hall” and “Clear strategy for Raleigh real estate.” Use the supplied Warren portrait as the human focal point. Add no brokerage logo, property listing, invented award, watermark, or extra text. The result should feel assured, local, and discerning, with generous legibility for link previews.
```

Inspect the returned image for correct text and prohibited elements. If usable, save it as `public/og.png` and add Open Graph/X metadata using an absolute URL derived from the incoming request host. Retry once only if unusable; otherwise omit `og:image`.

- [ ] **Step 5: Run complete automated checks**

Run:

```bash
npm run test
npm run build
rg -n "codex-preview|react-loading-skeleton|Culture Realty|Choice Residential|VideoObject" app package.json
```

Expected: tests PASS; build exits 0; no starter markers or conflicting brokerage names; `VideoObject` appears only in guard/test prose and not emitted JSON-LD.

- [ ] **Step 6: Commit if Git is available**

```bash
git add app public/og.png tests
git commit -m "feat: complete Warren Hall author and social identity"
```

---

### Task 6: Verification, Governance Closeout, and Private Sites Publishing

**Files:**
- Modify: `todo.md`

**Interfaces:**
- Consumes: completed production build and approved specification.
- Produces: verification record and private hosted review URL.

- [ ] **Step 1: Request independent verification**

Dispatch a read-only Verification Agent with the approved specification, this plan, the finished file list, and test/build results. Require checks for scope coverage, claim accuracy, accessibility semantics, private-review controls, Market Mindset route integrity, structured-data visibility, asset provenance, and absence of public lead collection.

Expected: verifier returns PASS or a defect list with file/line evidence.

- [ ] **Step 2: Resolve every release-blocking defect**

For each verifier defect, add or adjust a failing test when practical, implement the correction, rerun the focused test, then run:

```bash
npm run test
npm run build
```

Expected: all tests PASS; build exits 0; verifier has no unresolved release-blocking defect.

- [ ] **Step 3: Validate private-review controls**

Confirm:

```text
robots index: false
robots follow: false
no live form endpoint
no IndexNow submission
no real listing/testimonial media
no Compass logo file
no Culture Realty mark
every Market Mindset answer reachable by a normal link
every question page has a canonical path, byline, dates, direct answer, written sections, and sources
```

- [ ] **Step 4: Publish with Sites hosting**

Use the Sites hosting workflow on the validated build. Keep the development server alive until hosting completes, return the private Sites URL, then stop the retained development session.

Expected: private URL loads the finished homepage and direct Market Mindset answer URLs without build or routing errors.

- [ ] **Step 5: Record the final audit trail**

Update `todo.md` with files changed, tools used, supplied-image provenance, claims used, test/build results, verifier decision, hosted URL, remaining public-launch blockers, and final outcome. Mark the mission complete only after the private URL and direct answer routes are verified.

---

## Definition of Done

- The private Sites URL serves the seller-led homepage, About page, Market Mindset collection, and eight canonical answer pages.
- The supplied portrait and verified claims are used without conflicting brokerage marks.
- Market Mindset covers sellers, buyers, homeowners, Raleigh-market questions, and agent growth with original written depth and explicit video states.
- The private build does not collect personal information or request indexing.
- Automated tests and the production build pass.
- Independent verification finds no unresolved release-blocking defect.
- `todo.md` contains the final audit trail and remaining public-launch controls.
