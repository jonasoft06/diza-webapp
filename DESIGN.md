---
name: Diza
description: Tutor académico de IA para bachillerato mexicano, anclado al libro físico.
colors:
  vino: "#8a3b2e"
  dorado: "#b8862e"
  papel: "#f7f0e2"
  papel-landing: "#f5efe1"
  tinta: "#2b1f1a"
  tinta-secundaria: "#5c5044"
  tinta-terciaria: "#9c9082"
  borde: "#e6d7bd"
  dorado-texto: "#8a5e1a"
  tinta-terciaria-texto: "#6b6155"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 700
  display-medium:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 600
  body:
    fontFamily: "Karla, system-ui, sans-serif"
    fontWeight: 400
  body-medium:
    fontFamily: "Karla, system-ui, sans-serif"
    fontWeight: 500
  body-strong:
    fontFamily: "Karla, system-ui, sans-serif"
    fontWeight: 600
components:
  button-primary:
    backgroundColor: "{colors.vino}"
    textColor: "{colors.papel}"
  button-primary-hover:
    backgroundColor: "{colors.dorado}"
    textColor: "{colors.papel}"
---

# Design System: Diza

## Overview

**Creative North Star: "La Magia del Libro"**

Diza es editorial y cálida, no infantil ni gamificada, y no fría ni corporativa. Existe para servir al libro físico, no para competir con él en pantalla: la interfaz se comporta como un objeto editorial bien hecho — papel, tinta, un acento cálido de vino y oro — no como un panel de producto SaaS ni como una app educativa animada para niños.

Confirmed visual rejections: gamified/childish treatments (colorful icon bubbles, playful mascots, bright multi-color palettes) and cold/corporate treatments (gradients, generic SaaS card grids, blue-and-gray tech aesthetics).

**Key Characteristics:**
- Editorial warmth over tech coldness or playful gamification.
- One accent color doing work per screen; restraint is the signature, not decoration.
- Generous whitespace over dense, gadget-like UI.
- Depth communicated through warm, tinted shadows and layout, never through gradients or icon bubbles.

## Colors

The palette reads as an old book's materials — paper, ink, wine, gold — rather than a product's UI kit.

### Primary
- **Vino** (`#8a3b2e`): the brand color and primary CTA. Carries the one-accent-per-screen weight; used sparingly and deliberately, not as a background wash.

### Secondary
- **Dorado** (`#b8862e`): accent, reserved for hover/active states on the primary CTA and for small moments of emphasis. Never a second competing hero color alongside vino on the same screen.

### Neutral
- **Papel** (`#f7f0e2`): general background.
- **Papel Landing** (`#f5efe1`): background specific to the landing page.
- **Tinta** (`#2b1f1a`): primary text color.
- **Tinta Secundaria** (`#5c5044`): secondary text (supporting copy, captions).
- **Tinta Terciaria** (`#9c9082`): tertiary text (metadata, least emphasis).
- **Borde** (`#e6d7bd`): borders and dividers, always warm-toned, never cool gray.

### Text-Safe Variants
Verified via WCAG contrast calculation (`/impeccable audit` + `/impeccable critique`, 2026-09-11): `dorado` and `tinta-terciaria` fail 4.5:1 AA whenever used as text or as a background under light text (dorado as nav-link hover text and as the primary CTA's hover background; tinta-terciaria in three small-text uses). Rather than lightening the brief's approved values, each got a same-hue, darker-only text-safe twin, used exclusively where the original would fail as text:

- **Dorado Texto** (`#8a5e1a`): use only where `dorado` would be text, or a background under light (`papel`) text — e.g. nav-link hover, primary CTA hover background. Never used for decorative/non-text elements; those keep `dorado` (`#b8862e`).
- **Tinta Terciaria Texto** (`#6b6155`): use only where `tinta-terciaria` would be actual text — e.g. small captions, uppercase labels. `tinta-terciaria` itself is reserved for non-text/decorative use only, since every current text use of it failed AA.

### Named Rules
**The One Accent Rule.** Vino is the only primary accent on a given screen; dorado only appears as its hover/active response, never as an independent second accent competing for attention.

**The No-Gradient Rule.** No gradients anywhere in the system, on backgrounds, buttons, or cards. Color transitions happen through tinted shadows, layout, and typography, not through blended color fills.

**The Text-Safe Twin Rule.** `dorado` and `tinta-terciaria` are decorative-strength colors, not guaranteed text colors. Any new use of either as text, or as a background under light text, must use its `-texto` twin (`dorado-texto`, `tinta-terciaria-texto`) instead of the original, unless a fresh contrast check confirms the original passes 4.5:1 in that exact pairing.

## Typography

**Display Font:** Playfair Display (weights 600/700), with a serif fallback (Georgia).
**Body Font:** Karla (weights 400/500/600), with a system-ui sans-serif fallback.

**Character:** A serif editorial display paired with a clean, humanist sans body — the pairing of a printed book's title page with its well-set running text, not a tech product's marketing headline with its UI font.

### Hierarchy
- **Display** (700, Playfair Display): section and hero headlines.
- **Display Medium** (600, Playfair Display): sub-headlines, card/step titles where a serif moment is warranted.
- **Body Strong** (600, Karla): UI labels, button text, emphasis within body copy.
- **Body Medium** (500, Karla): secondary UI text, nav items.
- **Body** (400, Karla): running copy, descriptions.

### Named Rules
**The Serif-Only-For-Meaning Rule.** Playfair Display is reserved for headlines and titles that carry editorial weight; body copy, UI labels, and navigation always stay in Karla. Never use the display serif for dense text or small UI chrome.

## Layout

Generous whitespace is a first-class decision, not leftover space. Sections breathe rather than stack tightly; density is intentionally low to keep the "well-made book" feeling rather than a product-dashboard density.

### Named Rules
**The Primera Edición Rule.** Every screen behaves like a first edition of a well-made book: one accent, generous margins and section spacing, and nothing decorative that doesn't carry meaning. This is the system's Apple-style restraint constraint — it applies to every new section, not just the landing page.

## Elevation & Depth

Depth is conveyed through warm, brand-tinted shadows, not neutral/black drop shadows and not gradients. Floating or elevated surfaces cast a translucent vino-tinted shadow rather than a generic gray one, so elevation itself carries the brand's warmth.

### Shadow Vocabulary
- **Vino ambient shadow** (translucent, low-opacity `vino` tint, e.g. `rgba(138, 59, 46, 0.12–0.18)`): used under floating/elevated cards to signal depth without introducing a cold, neutral shadow color.

### Named Rules
**The Warm Shadow Rule.** Any elevated surface's shadow is a translucent tint of vino, never a neutral black/gray shadow and never a gradient.

## Shapes

No nested cards inside cards, anywhere in the system: a card is a single bounded surface, not a container for further bounded surfaces. Where content needs internal grouping, use spacing and typography hierarchy instead of a card-in-a-card.

## Components

### Buttons
Two variants, both fully rounded (`rounded-full`) pills — no square or barely-rounded button anywhere in the system.
- **Primary** (`variant="primary"`): `vino` background, `papel` text. Reserved for the one highest-stakes action on a screen.
- **Secondary** (`variant="secondary"`): transparent background, `vino` border and text. For a lower-stakes or returning-user action alongside a primary.
- **Hover:** primary hovers to `dorado-texto` background (not `dorado` — see the Text-Safe Twin Rule); secondary hovers to a faint `vino` tint (`vino/5`) background. Never a gradient.
- **Disabled:** standard reduced opacity, no separate disabled color.
- **Sizes:** `sm` (nav-level CTAs) and `lg` (primary hero-level CTAs).

### Cards
Two variants; both are single bounded surfaces (the Shapes section's no-nested-cards rule applies).
- **Flat** (`variant="flat"`): white background, no shadow. For content that sits directly on the page background without needing to signal elevation.
- **Raised** (`variant="raised"`): white background plus the Warm Shadow Rule's vino-tinted translucent shadow. For anything meant to read as floating above the page (proof cards, chat bubbles, floating step cards).
- Corner radius and internal padding are set per usage via `className`, not fixed by the component, since realized cards in this system range from `rounded-md` (a small overlapping detail card) to `rounded-2xl` (a chat bubble) — the variant governs elevation, not shape.

## Do's and Don'ts

### Do:
- **Do** use vino as the only primary CTA color, with dorado strictly as its hover/active state.
- **Do** keep one accent color doing work per screen.
- **Do** use generous whitespace between and within sections (the Primera Edición Rule).
- **Do** use warm, vino-tinted translucent shadows for elevation, never neutral or black shadows.
- **Do** reserve Playfair Display for headlines/titles and Karla for everything else.

### Don't:
- **Don't** use gradients anywhere in the system.
- **Don't** use generic icons inside colored bubbles (a gamified/childish pattern this brand explicitly rejects).
- **Don't** nest cards inside cards.
- **Don't** introduce a cold/corporate register (blue-gray SaaS palettes, dense dashboard chrome) — the brand is editorial and warm, not corporate.
- **Don't** introduce a playful/gamified register (mascots, bright multi-color accents, childish iconography) — the audience is bachillerato-age students and teachers, not children.
