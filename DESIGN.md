---
name: Warren Hall Seller Authority
description: A precise private briefing for Raleigh and Triangle real estate decisions.
colors:
  bg: "oklch(0.175 0.012 255)"
  surface: "oklch(0.215 0.014 255)"
  ink: "oklch(0.95 0.012 88)"
  muted: "oklch(0.73 0.014 88)"
  primary: "oklch(0.72 0.1 78)"
  primary-deep: "oklch(0.62 0.1 78)"
  compass: "oklch(0.54 0.205 28)"
  line: "oklch(0.31 0.016 255)"
typography:
  display:
    fontFamily: "Georgia, Times, serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  sm: "0"
  md: "0"
spacing:
  page: "clamp(1.25rem, 4vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.25rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.25rem"
---

# Design System: Warren Hall Seller Authority

## Overview

**Creative North Star: "The Raleigh Ledger"**

The system should feel like a prepared advisor setting a concise, evidence-backed briefing in front of an established Triangle homeowner. Charcoal reading space, quiet graphite structure, restrained brass emphasis, and Warren's approved portrait create calm authority without borrowing the costumes of generic luxury marketing.

The composition is image-led and assured, with asymmetric pacing and generous breathing room. It rejects beige editorial clichés, brokerage-template sameness, influencer performance, and card-heavy AI scaffolding. Content remains useful and visible without motion; enhancements are quiet, purposeful, and fully reduced-motion safe.

**Key Characteristics:**

- Raleigh-native confidence expressed through specificity, not superlatives.
- A committed charcoal-and-ivory structure with brass reserved for decisive actions.
- Warren and verified evidence lead; property inventory does not.
- Page spacing uses the shared fluid page token and responsive layouts avoid clipped headlines.

## Colors

The palette combines charcoal restraint, ivory clarity, and a controlled brass proprietary accent. The frontmatter values are canonical and map directly to `app/globals.css`.

### Primary

- **Briefing Gold:** `colors.primary` marks the primary private-valuation action, selected states, and visible focus.
- **Deep Gold:** `colors.primary-deep` supplies high-contrast active states and sparing structural emphasis.

### Secondary

- **Compass Red:** `colors.compass` is reserved only for official brokerage identity requirements; it is never decorative.

### Neutral

- **Ledger Charcoal:** `colors.bg` is the primary reading surface.
- **Graphite Surface:** `colors.surface` separates long-form or collection regions.
- **Ledger Ivory:** `colors.ink` carries headings and body copy.
- **Measured Stone:** `colors.muted` supports secondary copy while retaining readable contrast.
- **Fine Rule:** `colors.line` separates content where spacing alone is insufficient.

**The Brass Rule.** Brass identifies meaningful decisions and scarce emphasis; it never washes entire reading surfaces.

**The Brokerage Identity Rule.** Compass red appears only when official identity requires it and never becomes the Warren Hall theme.

## Typography

**Display Font:** Georgia (with Times and serif fallbacks)<br>
**Body Font:** Arial (with Helvetica and sans-serif fallbacks)<br>
**Label Font:** Arial (with Helvetica and sans-serif fallbacks)

**Character:** The pairing reads as established and direct: a familiar, composed display voice with an unshowy body face. These system stacks avoid unconfirmed remote dependencies and every font on the Impeccable reflex-reject list.

### Hierarchy

- **Display** (400, fluid from 2.75rem to 6rem, 1.08): hero statements and rare campaign-scale moments.
- **Headline** (400, fluid from 2rem to 4rem, 1.08): section-defining questions and service pathways.
- **Title** (400, fluid from 1.4rem to 2rem, 1.15): individual Market Mindset questions and proof statements.
- **Body** (400, 1rem, 1.6): direct explanations capped at 72 characters per line.
- **Label** (600, 0.875rem, 0.1em): navigation and actions; sentence case is the default.

**The Speaking Distance Rule.** Display tracking never tightens beyond -0.03em, and body copy never extends beyond 72ch.

## Elevation

The system is flat by default. Depth comes from tonal changes between charcoal and graphite, plus deliberate overlap with approved photography. Shadows are reserved for real interaction states and must never combine a one-pixel border with a wide decorative blur.

**The Evidence Has Weight Rule.** Hierarchy comes from content, contrast, scale, and spacing; decorative ghost cards are forbidden.

## Components

Components feel decisive, compact, and accessible. Corners are square, focus is unmistakable, and every interactive target is designed for keyboard and touch use.

### Buttons

- **Shape:** Square, as a ledger tab or reference mark.
- **Primary:** Brass with Ledger Charcoal text, using `components.button-primary`.
- **Secondary:** Fine-rule outline with Ledger Ivory text, using `components.button-secondary`.
- **Hover / Focus:** Deepen color with the shared exponential ease; retain a three-pixel visible focus outline.

### Cards / Containers

- **Corner Style:** Square and quiet; rules, not rounding, define hierarchy.
- **Background:** Ledger Charcoal or Graphite Surface according to reading hierarchy.
- **Shadow Strategy:** Flat at rest; a compact state shadow is allowed only when interaction requires lift.
- **Border:** Fine Line only when grouping is otherwise unclear.
- **Internal Padding:** Scales from 1.25rem on small screens to 2rem on wider screens.

### Inputs / Fields

- **Style:** Graphite surface, Fine Rule stroke, and squared corners.
- **Focus:** Ledger Ivory border plus Brass outline; color is never the sole indicator.
- **Error / Disabled:** Text labels and state descriptions accompany any color treatment.

### Navigation

Navigation uses concise sentence-case labels, Advisor Ink text, visible underlines or tonal changes for state, a persistent Private Valuation action, and a mobile treatment that preserves ordinary crawlable links.

### Market Mindset Item

Questions are the dominant element. Media state, concise answer summary, author/date evidence, and the canonical answer link remain visibly subordinate; identical icon-heading-text card grids are prohibited.

## Do's and Don'ts

### Do:

- **Do** lead with Warren's approved portrait and verified judgment before property inventory.
- **Do** use charcoal, ivory structure, and the canonical brass roles exactly as defined in the frontmatter.
- **Do** keep every action keyboard accessible, every focus state visible, and every motion effect reduced-motion safe.
- **Do** use asymmetric pacing and concrete Raleigh/Triangle evidence to make the experience feel like a private briefing.
- **Do** reserve repeated containers for genuinely browsable Market Mindset collections.

### Don't:

- **Don't** copy List It With Liza, Compass corporate pages, or generic Luxury Presence templates.
- **Don't** use flashy mansion montages, playful influencer styling, hollow luxury language, or unsupported superlatives.
- **Don't** use beige editorial clichés, repetitive card grids, or cold brokerage-template copy.
- **Don't** use the editorial-magazine aesthetic lane of italic display serif, tiny mono labels, ruled columns, and monochromatic affectation.
- **Don't** use gradient text, decorative glassmorphism, colored side-stripe borders, diagonal stripe backgrounds, decorative grids, or sketchy SVG scenes.
- **Don't** round cards or sections, pair a one-pixel border with a shadow blur of 16px or more, or clip long headings on small screens.
