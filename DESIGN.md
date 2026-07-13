---
name: Warren Hall Seller Authority
description: A precise private briefing for Raleigh and Triangle real estate decisions.
colors:
  bg: "oklch(1 0 0)"
  surface: "oklch(0.965 0.004 250)"
  ink: "oklch(0.16 0.025 255)"
  muted: "oklch(0.43 0.025 255)"
  primary: "oklch(0.64 0.145 68)"
  primary-deep: "oklch(0.42 0.115 68)"
  compass: "oklch(0.54 0.205 28)"
  line: "oklch(0.86 0.01 255)"
typography:
  display:
    fontFamily: "Georgia, Times, serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.05
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
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  sm: "0.375rem"
  md: "0.75rem"
spacing:
  page: "clamp(1.25rem, 4vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.25rem"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.25rem"
---

# Design System: Warren Hall Seller Authority

## Overview

**Creative North Star: "The Private Market Briefing"**

The system should feel like a prepared advisor setting a concise, evidence-backed briefing in front of an established Triangle homeowner. True white reading space, ink-blue structure, a controlled honey-gold accent, and Warren's approved portrait create calm authority without borrowing the costumes of generic luxury marketing.

The composition is image-led and assured, with asymmetric pacing and generous breathing room. It rejects beige editorial clichés, brokerage-template sameness, influencer performance, and card-heavy AI scaffolding. Content remains useful and visible without motion; enhancements are quiet, purposeful, and fully reduced-motion safe.

**Key Characteristics:**

- Raleigh-native confidence expressed through specificity, not superlatives.
- A committed dark-and-white structure with honey-gold reserved for decisive actions.
- Warren and verified evidence lead; property inventory does not.
- Page spacing uses the shared fluid page token and responsive layouts avoid clipped headlines.

## Colors

The palette combines true white clarity, ink-blue authority, and a controlled honey-gold proprietary accent. The frontmatter values are canonical and map directly to `app/globals.css`.

### Primary

- **Briefing Gold:** `colors.primary` marks the primary private-valuation action, selected states, and visible focus.
- **Deep Gold:** `colors.primary-deep` supplies high-contrast active states and sparing structural emphasis.

### Secondary

- **Compass Red:** `colors.compass` is reserved only for official brokerage identity requirements; it is never decorative.

### Neutral

- **True White:** `colors.bg` is the primary reading surface.
- **Quiet Blue Surface:** `colors.surface` separates long-form or collection regions without beige tinting.
- **Advisor Ink:** `colors.ink` carries headings, body copy, and dark structural sections.
- **Measured Slate:** `colors.muted` supports secondary copy while retaining readable contrast.
- **Fine Line:** `colors.line` separates content where spacing alone is insufficient.

**The Honey-Gold Rule.** Gold identifies meaningful decisions and scarce emphasis; it never washes entire reading surfaces.

**The Brokerage Identity Rule.** Compass red appears only when official identity requires it and never becomes the Warren Hall theme.

## Typography

**Display Font:** Georgia (with Times and serif fallbacks)<br>
**Body Font:** Arial (with Helvetica and sans-serif fallbacks)<br>
**Label Font:** Arial (with Helvetica and sans-serif fallbacks)

**Character:** The pairing reads as established and direct: a familiar, composed display voice with an unshowy body face. These system stacks avoid unconfirmed remote dependencies and every font on the Impeccable reflex-reject list.

### Hierarchy

- **Display** (400, fluid from 2.75rem to 6rem, 1.05): hero statements and rare campaign-scale moments.
- **Headline** (400, fluid from 2rem to 4rem, 1.08): section-defining questions and service pathways.
- **Title** (400, fluid from 1.4rem to 2rem, 1.15): individual Market Mindset questions and proof statements.
- **Body** (400, 1rem, 1.6): direct explanations capped at 72 characters per line.
- **Label** (700, 0.875rem, 0.02em): navigation and actions; sentence case is the default.

**The Speaking Distance Rule.** Display tracking never tightens beyond -0.03em, and body copy never extends beyond 72ch.

## Elevation

The system is flat by default. Depth comes from tonal changes between true white, quiet blue, and advisor ink, plus deliberate overlap with approved photography. Shadows are reserved for real interaction states and must never combine a one-pixel border with a wide decorative blur.

**The Evidence Has Weight Rule.** Hierarchy comes from content, contrast, scale, and spacing; decorative ghost cards are forbidden.

## Components

Components feel decisive, compact, and accessible. Corners are gently squared, focus is unmistakable, and every interactive target is designed for keyboard and touch use.

### Buttons

- **Shape:** Gently squared corners using `rounded.sm`.
- **Primary:** Briefing Gold with Advisor Ink text, using `components.button-primary`.
- **Secondary:** Advisor Ink with True White text, using `components.button-secondary`.
- **Hover / Focus:** Deepen color with the shared exponential ease; retain a three-pixel visible focus outline.

### Cards / Containers

- **Corner Style:** Restrained corners capped at `rounded.md`.
- **Background:** True White or Quiet Blue Surface according to reading hierarchy.
- **Shadow Strategy:** Flat at rest; a compact state shadow is allowed only when interaction requires lift.
- **Border:** Fine Line only when grouping is otherwise unclear.
- **Internal Padding:** Scales from 1.25rem on small screens to 2rem on wider screens.

### Inputs / Fields

- **Style:** True White surface, Fine Line stroke, and gently squared corners.
- **Focus:** Advisor Ink border plus Briefing Gold outline; color is never the sole indicator.
- **Error / Disabled:** Text labels and state descriptions accompany any color treatment.

### Navigation

Navigation uses concise sentence-case labels, Advisor Ink text, visible underlines or tonal changes for state, a persistent Private Valuation action, and a mobile treatment that preserves ordinary crawlable links.

### Market Mindset Item

Questions are the dominant element. Media state, concise answer summary, author/date evidence, and the canonical answer link remain visibly subordinate; identical icon-heading-text card grids are prohibited.

## Do's and Don'ts

### Do:

- **Do** lead with Warren's approved portrait and verified judgment before property inventory.
- **Do** use true white, ink-blue structure, and the canonical honey-gold roles exactly as defined in the frontmatter.
- **Do** keep every action keyboard accessible, every focus state visible, and every motion effect reduced-motion safe.
- **Do** use asymmetric pacing and concrete Raleigh/Triangle evidence to make the experience feel like a private briefing.
- **Do** reserve repeated containers for genuinely browsable Market Mindset collections.

### Don't:

- **Don't** copy List It With Liza, Compass corporate pages, or generic Luxury Presence templates.
- **Don't** use flashy mansion montages, playful influencer styling, hollow luxury language, or unsupported superlatives.
- **Don't** use beige editorial clichés, repetitive card grids, or cold brokerage-template copy.
- **Don't** use the editorial-magazine aesthetic lane of italic display serif, tiny mono labels, ruled columns, and monochromatic affectation.
- **Don't** use gradient text, decorative glassmorphism, colored side-stripe borders, diagonal stripe backgrounds, decorative grids, or sketchy SVG scenes.
- **Don't** exceed 0.75rem corner radii on cards and sections, pair a one-pixel border with a shadow blur of 16px or more, or clip long headings on small screens.
