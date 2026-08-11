# Warren Realty Project — Operating Plan

## Preview Build Recovery — 2026-08-11

### Mission
Restore the Vercel preview build without changing Warren's approved website UI.

### Root Cause and Repair
Vercel detects this repository as Next.js and expects `.next`, while the
current branch still runs Vinext and emits Cloudflare/Vite output. The native
Next.js build also checked unused Cloudflare starter code. The repair restores
the native Next scripts and excludes only inactive Cloudflare support folders
from the website's TypeScript program.

### Verification
- [x] Error reproduced: Vercel requires `.next` after the Vinext build.
- [x] Native build reproduced the remaining unused `cloudflare:workers` type error.
- [x] Native build, tests, and lint pass after the scoped runtime-contract repair.
- [x] The corrected preview is committed, pushed, and reaches `READY` on Vercel.
- [x] Preview alias returns Vercel's expected private-review SSO redirect and `noindex` header.

### Governance
- Scope is limited to build contract, TypeScript exclusions, and build-output ignore rules.
- No credentials, deployment-link metadata, or production content changes are included.

## Active Mission — Warren Hall Website

### Mission
Create and publish a private-review, conversion-focused website for Warren Hall that establishes a credible Raleigh/Triangle personal brand and supports growth in move-up and luxury transactions beginning around $750,000.

### Financial Objective
Create an owned lead-generation asset that can convert seller valuation requests and qualified buyer/relocation consultations while reducing dependence on paid portals and referrals alone.

### Assumptions
- The first release is a private review URL until Warren and the brokerage approve claims, disclosures, photography, and public launch details.
- Warren Hall is the public-facing name and Compass is his verified brokerage affiliation.
- Warren's sales volume and designation claims are verified for inclusion; final public copy will preserve the user's approved wording and evidence.
- The website is a brand surface, not an IDX product or authenticated application.
- “Market Mindset” replaces the conventional blog with a collection of video questions and answers based on questions buyers, sellers, and relocating clients actually ask.
- Market Mindset also includes homeowner-value guidance and a clearly separated newer-agent growth track, with written and multimedia content structured to build topical authority for search and AI discovery.

### Task Flow
1. Confirm the primary conversion priority and approve the design direction. Completed: Seller Authority with a Market Mindset publishing system.
2. Capture the product and design context required by the selected design workflow.
3. Initialize the website and implement the approved responsive experience.
4. Apply governance controls for claims, brokerage identity, Fair Housing, consent, and asset rights.
5. Build, inspect, and verify accessibility, responsive behavior, links, and lead capture.
6. Publish a private review URL and record the verification outcome.

### Agent Roles
- Orchestration/Build Agent: owns context, design, implementation, publishing, and the audit trail; tools limited to mission-relevant local files, the Sites workflow, approved design tooling, and hosting.
- Governance Agent: performs read-only pre-execution review of permissions, claims, compliance, financial relevance, and acceptance criteria; output is a concise control checklist.
- Verification Agent: performs read-only review of the finished output against stated acceptance criteria and reports defects before completion.

### Success Criteria / Expected Deliverables
- A polished, responsive, private-review website aligned to Warren's Raleigh-native, strategic-advisor positioning.
- Clear pathways for private consultation and confidential home valuation.
- Verified Compass affiliation, sales volume, and designation proof are presented clearly without overstating market outcomes.
- A Market Mindset experience replaces a generic blog and makes video Q&A content easy to browse by audience/question.
- Individual Market Mindset answers have crawlable canonical pages, useful written depth, transcripts, authorship, related links, and applicable structured data.
- Keyboard-accessible navigation and forms, readable contrast, reduced-motion support, and mobile-safe layouts.
- A successful production build and a working hosted review URL.

### Governance Checks
- [x] Governance Agent review completed and incorporated; approved for private development only.
- [x] Compass affiliation confirmed by Don; exact brokerage-required wording and firm/license display remain part of public-launch review.
- [x] Sales-volume and designation claims confirmed by Don for inclusion; retain source evidence in the launch record.
- [x] Fair Housing and private-review privacy/consent posture reviewed; no live form, CRM submission, analytics, cookies, or personal-data collection exists.
- [ ] Supplied/Instagram photos, listing media, testimonials, logos, and third-party assets have documented publication permission.
- [x] Don supplied `warren-hall-top-100.png` in this task and approved it for the private review build.
- [x] Public release remains disabled until Warren/BIC approval; private review is clearly identified and owner-only Sites access is enabled.
- [x] Public launch, live lead submission, real listing/testimonial publication, and brokerage-logo use are excluded from the approved build scope until controls are satisfied.

### Verification Status
- [x] Prior strategy, proposal, and operating context inspected.
- [x] Brand register identified as a marketing website.
- [x] Seller Authority design direction approved.
- [x] PRODUCT.md and written design specification created.
- [x] Revised specification approved by Don on July 13, 2026.
- [x] Executable implementation plan created.
- [x] Task 1 Sites foundation and production-build verification complete.
- [x] Task 2 typed Market Mindset content model implemented and independently approved.
- [x] Task 3 shared shell and seller-led homepage implemented; automated gates and independent review passed.
- [x] Task 4 Market Mindset collection, eight canonical answer routes, search metadata, Article/Breadcrumb structured data, sitemap, and robots policy implemented and independently approved.
- [x] Task 5 About page, social metadata, and one inspected 1200x630 generated preview image implemented.
- [x] Full approved-site implementation complete.
- [x] Full experience verification complete: 16/16 tests, lint, production build, desktop/mobile browser checks, 44px target measurements, link flow, image delivery, and independent release audit passed.
- [x] Governance closeout passed for private hosting and remains a no-go for public launch.
- [x] Private review URL published and verified: https://warren-hall-raleigh.donchalant.chatgpt.site

### Open Issues
- Public launch remains blocked pending Warren/BIC approval, exact brokerage and license disclosure, documentary marketing support for claims, public-use rights for the supplied portrait/award badge and generated preview, approved domain/contact/CRM/privacy language, Fair Housing advertising review, source refresh, and an explicit indexing decision.
- Sites is owner-only and public-by-link only after an authorized viewer signs in; robots/noindex reduce discovery but do not replace access control.
- Dependency audit findings remain to be patched or formally risk-accepted before public launch; the current private review has no user-input, database, or external-fetch path.

### Final Outcome
Completed July 13, 2026. The seller-led homepage, About page, Market Mindset collection, and eight answer pages were built with the supplied Warren portrait and the approved Compass, volume, Top 100, Senior Broker, and six-year producer claims. One generated 1200x630 social card was inspected and saved without a brokerage logo, listing, invented award, watermark, or extra text. Implementation used the Sites, Impeccable, image-generation, Playwright, and in-app browser workflows plus scoped build, verification, governance, and review agents. Final checks passed with 16/16 tests, clean lint, a successful production build, clean desktop/mobile browser behavior, correct 44px targets, owner-only private access, disabled lead submission, no VideoObject for draft media, no IndexNow, and no conflicting brokerage assets. Hosted verification returned HTTP 200 for the homepage, About, collection, a direct answer, robots, sitemap, portrait, and social preview; canonical, schema, robots, and all 11 sitemap URLs use the real Sites origin with no `.example` fallback.

## Mission
Build a credible, luxury-positioned online presence for a Raleigh-area real estate agent, starting with a conversion-focused website and then adding a repeatable content and lead-generation engine for Instagram, TikTok/Reels, and Pinterest.

## Financial objective
Create a durable source of qualified buyer and seller conversations in the $750,000+ segment, reduce dependence on referrals alone, and make the agent's marketing assets reusable across listings and neighborhoods.

## Plan

1. Confirm positioning, brokerage, service area, credentials, proof points, target neighborhoods, and preferred lead response process.
2. Create the Phase 1 website: brand direction, copy, SEO foundations, lead capture, scheduling, market/area pages, seller and buyer calls to action, analytics, and compliance review.
3. Build a 30-day content system: content pillars, templates, filming prompts, approval workflow, and a publishing calendar.
4. Launch the first social channels and repurpose each approved content unit for Instagram, TikTok/Reels, and Pinterest.
5. Measure qualified inquiries, booked consultations, seller valuation requests, content reach, and cost per lead; improve after the first 30 days of live data.

## Governance checklist

- Confirm Broker-in-Charge approval before advertising brokerage services or listings.
- Display the affiliated brokerage/firm name in website and social ad creative.
- Obtain written owner/listing permission before publishing property marketing.
- Include required broker identity/license information where applicable.
- Use only approved MLS, listing, photography, music, and third-party assets.
- Add Fair Housing and privacy/consent review to the website and lead forms.
- Do not claim “luxury,” “top producer,” sales volume, or designations without documentation.

## Success criteria

- Website is live, mobile-friendly, indexed, measurable, and produces a test lead successfully.
- Agent can approve a weekly content batch without editing every post from scratch.
- At least three content formats are ready for cross-platform repurposing.
- Every published asset has a clear CTA and an owner/firm/compliance status.
- Phase 1 has a baseline dashboard and a 30-day optimization backlog.

## Verification status

- Raleigh market and competitor/creator research completed July 9, 2026.
- Warren Hall public-profile review completed July 10, 2026: Choice Residential Real Estate, Raleigh native, 5.0 public rating, 55 reviews, 41 reported sales in the previous 12 months, 207 reported total sales, approximately 10 years of experience, and public transaction range up to approximately $1.9M. Confirm all claims with Warren/BIC before publication.
- Direct conversation review completed July 10, 2026: Warren reports Compass as his current brokerage, top-producer status at his previous firm for six years, and more than $120M in volume over eight years. Treat these as client-reported until documented and approved for marketing use.
- Website reference reviewed July 10, 2026: Warren likes listitwithliza.com; capture its personal-brand voice, service pathways, proof sections, local content, home search, valuation CTA, and lead-form structure while creating distinct Warren branding.
- Client-facing proposal created July 10, 2026 in editable DOCX and shareable PDF formats; seven-page render QA completed successfully.
- Proposal revised July 10, 2026 to include Warren's interest in AI videos, training content, lead-generation concepts, and a longer-term platform path inspired by the Carolina Insurance Advisors work; revised seven-page render QA completed successfully.
- Commercial model revised July 13, 2026: $1,200 discounted setup, $750/month fixed platform/marketing fee for months 1–3, and a documented 90-day review to adjust the fixed fee based on engagement, lead quality, attributable opportunity, business impact, and workload; no percentage-of-commission formula.
- Website, social handles, brokerage details, budget, and lead-response process remain to be confirmed.
- Preliminary pricing below is a planning estimate, not a vendor quote.

## Open issues

- Agent name, brand name, brokerage, service radius, existing photography/video, CRM, and domain are unknown.
- Need to decide whether the site needs IDX search in Phase 1 or can launch with curated listings and lead capture first.
- Need legal/BIC approval before publishing listing-specific content.
- Need Warren to confirm the correct primary brand name, current Compass wording, license/award/volume claims, and preferred service-area focus.
- Need to scope an AI/video pilot with explicit approval, disclosure, usage rights, and monthly maintenance boundaries.
- Need to approve the visual direction against the Liza reference: refined, editorial, warm, local, and strategic rather than copied or overly playful.
# Mission: Triangle Luxury Market Trends Report

## Mission
Create a presentation-ready market trend and analysis report for Warren Realty that turns current Triangle and Raleigh luxury-market evidence into a persuasive, source-traceable case for a differentiated digital marketing and relocation-content strategy.

## Financial Objective
Support higher-value listing acquisition and relocation-buyer conversion in the $800K-$2M segment by proving why premium marketing, neighborhood authority, and remote-buyer enablement matter in a balanced market.

## Assumptions
- Primary audience: Warren Realty decision-makers and prospective luxury-seller stakeholders.
- Deliverable: local PowerPoint using the selected retained Market Trends Report template.
- User-provided claims are inputs, but time-sensitive or material figures require source verification or clear qualification.

## Task Flow
1. Inspect the retained template and presentation-authoring requirements.
2. Verify the supplied market claims against primary or credible current sources.
3. Define the narrative, slide-to-template frame map, and source notes.
4. Obtain governance review and incorporate required controls.
5. Clone the retained slides and edit inherited objects only.
6. Render, inspect every slide, test overflow/placeholders, and run fidelity checks.
7. Deliver the verified PPTX and record the outcome.

## Agent Roles
- Orchestration/Authoring Agent: build the narrative and deck using the template and presentation skill; tools limited to local files, research, and artifact-tool; success is a coherent, editable, sourced PPTX; verified through renders, slide tests, XML placeholder checks, and template-fidelity checks.
- Governance Agent: read-only review of scope, sourcing, fair-housing risk, permissions, and acceptance criteria; output is a checklist; verified by incorporation into this file and final QA.

## Success Criteria / Expected Deliverables
- One editable PowerPoint in `outputs/`.
- Retained template remains unchanged and is the only visual system used.
- Claims are traceable to cited sources; no invented market data.
- Narrative covers market balance, luxury conditions, buyer profile, three competitive gaps, personas, and recommended response.
- No unintended overlaps, clipping, unresolved placeholders, or broken template chrome.

## Governance Checks
- [x] Least privilege: only mission-relevant local files, public sources, and slide tooling accessed.
- [x] Source dates and geographic definitions are explicit; conflicting metrics are not blended without explanation.
- [x] Buyer/persona language avoids protected-class targeting and neighborhood steering.
- [x] Tax, development, and market forecasts are presented as context, not guarantees.
- [x] Template source remains unchanged; output is a distinct file.
- [x] All material metrics have visible or notes-level provenance.
- [x] Recommendations do not promise revenue, sale speed, or price premiums without client-specific evidence.
- [x] Unsupported claims are omitted or labeled as third-party analysis.

## Verification Status
- [x] Selected template skill and retained PPTX identified.
- [x] Presentation content and template-following rules read.
- [x] Governance review complete.
- [x] Source verification complete; unsupported April figures omitted.
- [x] Template frame map validated.
- [x] Final PPTX rendered and visually reviewed slide by slide.
- [x] Overflow, placeholder, and template-fidelity checks passed.

## Open Issues
- None. Third-party luxury metrics are labeled; all-market and luxury geographies remain separate.

## Final Outcome
Completed: `outputs/triangle-luxury-market-trends-report-2026.pptx` created as a seven-slide, editable, source-noted deck. The retained template was unchanged. Validation passed for frame-map integrity, slide overflow, full-size visual review, empty-placeholder XML checks, template fidelity, and PPTX archive integrity.
