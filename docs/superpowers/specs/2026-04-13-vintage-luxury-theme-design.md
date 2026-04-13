# Vintage Luxury Theme Redesign

**Date:** 2026-04-13  
**Status:** Approved

## Context

The current portfolio uses a dark futuristic theme (#0A0A0F background, indigo/violet/cyan accents, glassmorphism, floating gradient blobs). The goal is to replace it entirely with a warm, vintage-luxury aesthetic — minimal, easy on the eye, impressive at first glance, and rich without being loud. Both a light and dark mode must be supported, sharing the same warm color DNA.

---

## Color System

### Light Theme — Warm Parchment

| Token | Value | Usage |
|---|---|---|
| `--background` | `#EDE8DF` | Page background |
| `--foreground` | `#1f1710` | Primary text |
| `--text-secondary` | `#6b5a4a` | Body copy, descriptions |
| `--text-muted` | `#8a7060` | Nav links, labels, captions |
| `--accent` | `#3d2212` | CTA buttons (filled), strong accents |
| `--gold` | `#c9a96e` | Divider rules, hover borders, highlights |
| `--border` | `#b09070` | Card borders, section separators |
| `--card-bg` | `rgba(255,255,255,0.35)` | Card surfaces |
| `--texture` | paper grain (CSS repeating-linear-gradient) | Hero + card backgrounds |

### Dark Theme — Dark Sepia

| Token | Value | Usage |
|---|---|---|
| `--background` | `#14100C` | Page background |
| `--foreground` | `#d4c8b8` | Primary text |
| `--text-secondary` | `#9a8060` | Body copy, descriptions |
| `--text-muted` | `#5e5040` | Nav links, labels, captions |
| `--accent` | `#9a8060` | CTA buttons (filled) |
| `--gold` | `#9a8060` | Accents |
| `--border` | `#4a3828` | Card borders, dividers |
| `--card-bg` | `rgba(255,255,255,0.03)` | Card surfaces |
| `--glow` | `rgba(154,128,96,0.12)` | Subtle radial warm glow (hero only) |

**Removed entirely:** all indigo (`#6366F1`), violet (`#8B5CF6`), cyan (`#06B6D4`), emerald, amber.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Hero name | DM Serif Display | 400 | ~76px desktop, ~48px mobile |
| Section headers | DM Serif Display | 400 | ~48px desktop |
| Role / tagline | DM Serif Display | 400 italic | |
| Body copy | DM Sans | 300 | `line-height: 1.75` |
| UI / nav / buttons | DM Sans | 400–500 | |
| Section labels | DM Sans | 500 | `letter-spacing: 0.18em`, uppercase |
| Nav links | DM Sans | 400 | `letter-spacing: 0.12em`, uppercase |

**Google Fonts import:** `DM Serif Display` (ital 0;1) + `DM Sans` (wght 300;400;500)

**Removed:** system font stack, gradient text clip effects.

---

## Component Specs

### Navbar
- Transparent until scroll, then solid `--background` with `border-bottom: 1px solid --border`
- No backdrop blur
- Logo: DM Serif Display, `--foreground`
- Nav links: DM Sans small-caps, `--text-muted`, underline slide-in on hover
- Theme toggle: small sun (☀) / moon (☽) icon, right-aligned, `--text-muted` color. Replaces the light bulb toggle entirely.
- Progress bar: single color `--gold`, no gradient

### Hero Section
- Background: `--background` + paper texture overlay
- Layout: centered, vertical stack
- Gold horizontal rule (40px wide, 1px) above the name — animates width 0→40px on entry
- Name: DM Serif Display, `--foreground`
- Role: DM Serif Display italic, `--text-muted`
- Tagline: DM Sans light, `--text-secondary`
- CTA buttons:
  - Primary: `background: --accent`, `color: --background`, `border-radius: 2px`
  - Secondary: `border: 1px solid --border`, `color: --text-muted`, transparent bg
- **Remove:** floating gradient blobs, glassmorphism overlay, animated gradient background

### Cards (Projects, Experience)
- Background: `--card-bg`
- Border: `1px solid --border`
- On hover: border-color shifts to `--gold`, subtle lift (`translateY(-4px)`)
- Bottom accent: `3px solid --gold` animates in on hover (height 0→3px)
- **Replace** 3D card flip with clean slide-up overlay: on hover, a translucent `--background/90` panel slides up from the bottom with project details
- No glassmorphism, no backdrop-blur on cards

### Section Headers
- Pattern: small-caps muted label + gold rule (40px) + DM Serif Display headline
- Gold rule animates width 0→40px on scroll entry (Framer Motion)

### Skill Badges / Tags
- Border: `1px solid --border`
- Text: `--text-muted`
- Background: transparent
- No colored accent backgrounds

### Contact Section
- Same parchment/sepia background, no special treatment
- Input borders: `--border`, focus ring `--gold`

---

## Animations

### Keep
- Scroll-triggered fade-in + translateY (Framer Motion `whileInView`)
- Staggered list reveals (children delayed by 0.05s each)
- Card hover lift (`translateY(-4px)`, spring)
- Button hover state transitions

### Remove
- Floating animated blob backgrounds
- Animated gradient background shifts
- 3D card flip animation
- Light bulb pull-string animation
- GSAP parallax (replace with simpler Framer Motion scroll transform)

### Add
- Gold rule draw animation on section entry (`width: 0 → 40px`, 0.4s ease-out)
- Card bottom accent slide-in on hover (`scaleX: 0 → 1` from left)
- Subtle hero texture parallax on scroll (`y: 0 → -20px` via useScroll)

---

## Files to Modify

| File | Change |
|---|---|
| `src/index.css` | Replace all CSS variables with new color tokens; add paper texture utility; add Google Fonts import |
| `tailwind.config.ts` | Update color mappings to new tokens |
| `src/components/ThemeProvider.tsx` | Enable proper light/dark toggle (currently hardcoded dark) |
| `src/components/Navbar.tsx` | Replace light bulb toggle with sun/moon icon; restyle nav colors |
| `src/components/LightBulbToggle.tsx` | Replace with new `ThemeToggle.tsx` component |
| `src/components/HeroSection.tsx` | Remove blobs, glassmorphism; add texture, gold rule, new button styles |
| `src/components/AboutSection.tsx` | Restyle with new tokens |
| `src/components/ProjectsSection.tsx` | Replace 3D flip with slide-up overlay; restyle cards |
| `src/components/ContactSection.tsx` | Restyle with new tokens |
| `src/pages/Index.tsx` | No structural changes needed |
| `src/data/portfolio.ts` | No changes needed |

---

## Out of Scope

- Portfolio content (copy, projects, links) — unchanged
- Backend / API — unchanged
- Section structure and order — unchanged
- Routing — unchanged
