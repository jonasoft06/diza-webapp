---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface Brief: Landing Page

**Mode:** Persuade — a visitor (student, teacher, or parent evaluating Diza) decides and acts.

**Status:** Direction approved by the user. Do not re-propose palette, typography, or structure; this brief is binding for implementation, not a proposal to revisit.

This surface inherits every rule in DESIGN.md (One Accent Rule, No-Gradient Rule, Warm Shadow Rule, no nested cards, Playfair Display for headlines / Karla for everything else). This brief adds only the page-specific composition decisions that don't belong in the global system.

## Section order (fixed)

1. **Header / Nav**
2. **Hero**
3. **Cómo funciona** — 3 steps in floating cards with a translucent vino shadow (DESIGN.md's Warm Shadow Rule, applied here as three peer cards, not nested).
4. **Bloque de valor** — a single combined card (not a grid of separate cards) with a subtle vino/dorado tint. One card, one accent tint — do not split into multiple cards or reintroduce a second competing hue.
5. **Para maestros** — staggered/offset layout (not a mirrored two-column grid; content and supporting visual are offset from each other).
6. **FAQ** — fixed 2x3 grid (2 columns × 3 rows, or the responsive equivalent that preserves a 2-column reading grid on desktop).
7. **Privacidad**
8. **Footer** — exactly two static states, `tinta` (#2b1f1a) background. "Static states" means no hover-driven color shifts beyond what DESIGN.md already allows (e.g. link hover using dorado is fine; the footer itself doesn't need its own motion system).

## Background rule for this surface

Use `--papel-landing` (#f5efe1) as the landing's base background rather than the general `--papel` (#f7f0e2), per the token split already defined in DESIGN.md/globals.css.

## What this brief does not decide

Exact spacing scale, breakpoints, and pixel-level card padding are left to implementation, following DESIGN.md's Primera Edición Rule (generous whitespace) rather than a prescribed grid — but the section order, card treatments, and background above are fixed and should not be changed without the user revisiting this brief.
