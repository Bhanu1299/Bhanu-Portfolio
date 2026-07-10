# The Atelier Edition — Portfolio Elevation Design

**Date:** 2026-07-10
**Branch:** `worktree-elevate-classy`
**Goal:** Elevate the existing vintage-luxury portfolio from "nice template" to "how is this even possible" — while staying unmistakably classy.

## Context & Decision

The site already has a deliberate vintage-luxury identity (DM Serif Display, parchment/sepia, gold rules) merged to master. The user delegated all design decisions ("I don't care what you use, just make it classy"). Stored preferences apply: tight scroll-sync over smoothness, subtle blended visuals, no cursor-following effects, identical behavior across browsers/zoom.

**Decision: keep the identity, elevate the craft.** The concept is *a hand-set luxury print publication brought to life* — the portfolio reads like the first edition of a private press book. Every current section survives; every surface gets print-shop detailing.

## Approaches considered

1. **Full restyle to liquid-glass / modern luxe** (skill's generic suggestion) — rejected: throws away a committed identity, harder to keep classy.
2. **Polish-only pass** (spacing, shadows) — rejected: won't reach "jaw-dropping".
3. **Editorial "print edition" concept layered on the existing identity** — chosen: signature idea + craft detail, low risk of gaudy.

## Design system additions

- **Type trio, one family:** DM Serif Display (display), DM Sans (body), **DM Mono** (new — folios, index numbers, microtype labels). Cohesive, print-like.
- **Film grain:** fixed full-viewport SVG turbulence overlay at ~3–4% opacity, `pointer-events-none`. Makes every surface feel printed.
- **Hairline & corner-tick vocabulary:** cards get 1px hairlines plus small gold corner serifs (engraved-certificate corners) on hover.
- **Gold selection color, thin editorial scrollbar.**
- **Reduced motion:** `prefers-reduced-motion` disables marquee, grain shimmer, and long reveals.

## Section-by-section

- **Splash:** untouched (generative mountain scene is a deliberate prior decision).
- **Navbar:** masthead treatment — mono microtype links, active-section indicator, quieter Open-to-Work chip. Gold scroll-progress bar stays.
- **Hero:** newspaper-masthead microtype row (name / vol. / date), giant per-letter name reveal (clip-mask rise), one-time gold-foil sheen sweep across the name, small-caps role, refined CTAs, thin drawn scroll cue.
- **Section headings (shared):** chapter pattern — oversized ghost index numeral (№ 01…05) behind, mono label + gold rule, serif title revealed line-by-line through a clip mask.
- **Marquee dividers:** slow italic-serif strip between sections ("Engineering · Design · Machine Learning ·") — subtle, pausable, reduced-motion-aware.
- **About:** drop cap on the first bio paragraph, hairline stat tiles with mono numerals, skill flip-cards restyled with corner ticks.
- **Experience:** timeline gold line **draws in tight sync with scroll** (scroll-linked `scaleY`, no smoothing lag); dots ignite as the line passes them.
- **Education:** same card vocabulary, refined.
- **Projects:** mono index numbers (01, 02…), serif titles, corner-tick hover, refined editorial modal header.
- **Contact:** editorial underline-style inputs with visible small-caps labels; footer gets a serif italic sign-off ("Thank you for reading") and oversized ghost wordmark.

## Non-goals

- No content changes — `src/data/portfolio.ts` stays the single source of truth, untouched.
- No new pages, no backend changes, no cursor-followers, no scroll-jacking.

## Addendum (same day): the "wow" tier

User asked for hard-to-build showpieces most sites don't attempt ("all except the teletype"). Added:

1. **Letterpress hero** (`LetterpressName.tsx`) — a brass press roller sweeps down and prints the name: clip-path reveal in lockstep with the roller, SVG turbulence displacement for wet-ink edges that settle (animated `feDisplacementMap` scale 9→1.2), blind-deboss underlayer, deterministic per-letter baseline jitter like hand-set type.
2. **Ink-wash transitions** (`InkWash.tsx`) — sepia brush strokes with turbulence-roughened edges sweep across three chapter boundaries in exact scroll sync (direct progress → clip-path, no smoothing).
3. **Wax seal** (`WaxSeal.tsx`) — the contact form's "Seal & Send": molten oxblood wax drops with a squish, takes an embossed "BT" stamp, then the mail client opens.
4. **Ex-libris bookplate** (`ExLibris.tsx`) — engraved crest (double frame, gold corner diamonds, ringed monogram, programmatic laurel branches) that stroke-draws itself in scroll sync at the top of About. Swap the monogram group for traced portrait paths when a photo exists.
5. **The Broadsheet** (`Broadsheet.tsx`) — featured projects bound as a physical book with true 3D page turns around the spine: drag pages 1:1, click page corners, arrow keys; real-time fold shading and cast shadows follow the page angle. Desktop only; mobile keeps the card grid.

All respect `prefers-reduced-motion` (instant states, no roller/flip animation).

## Verification

`pnpm run check` clean; dev-server browser screenshots of every section in light and dark themes at desktop and 375px width.
