# Portfolio Personalization + Animation Guide

## What I analyzed first
I reviewed the current frontend structure and located all places where sample identity, project data, links, assets, and animations are defined.

Core files you will edit most often:
- `app/frontend/src/components/HeroSection.tsx`
- `app/frontend/src/components/AboutSection.tsx`
- `app/frontend/src/components/ProjectsSection.tsx`
- `app/frontend/src/components/ContactSection.tsx`
- `app/frontend/src/components/Navbar.tsx`
- `app/frontend/src/components/ScrollReveal.tsx`
- `app/frontend/src/index.css`

---

## 1) Exactly where to replace sample details with your own

### A) Name, headline, roles, and hero background
**File:** `app/frontend/src/components/HeroSection.tsx`

Update these sections:
1. `roles` array (top of file) – your role titles.
2. `backgroundImage` URL in the hero parallax block – your own hero image.
3. Status text (`"CS Master's Graduate • Available for Hire"`) – your current status.
4. Name text (`"Bhanu Teja"`) – your full name.
5. Intro paragraph – your summary.
6. Hero social links (`GitHub`, `LinkedIn`, `Email`) currently set to placeholders.

---

### B) About bio, skills, and stats
**File:** `app/frontend/src/components/AboutSection.tsx`

Update:
1. `skills` array – your real stack.
2. `stats` array – your own counts (projects, years, etc.).
3. Bio paragraphs – your story, specialization, job target.

---

### C) Projects list (main portfolio content)
**File:** `app/frontend/src/components/ProjectsSection.tsx`

Update each object inside `projects`:
- `title`
- `description`
- `tags`
- `image`
- `github`
- `live`
- `featured`

Tip:
- Keep `featured: true` for your top 2–3 strongest projects.
- Set valid URLs instead of `"#"`.

---

### D) Contact info + footer links + location + resume CTA
**File:** `app/frontend/src/components/ContactSection.tsx`

Update:
1. Email link and visible email text.
2. LinkedIn link + text.
3. GitHub link + text.
4. Location text.
5. Footer copyright name/year.
6. Footer social links currently using placeholders.
7. Resume button action (currently visual only).

---

### E) Navbar label / “Open to Work” badge
**File:** `app/frontend/src/components/Navbar.tsx`

Update optional branding text and availability badge if needed.

---

## 2) Where to upload docs (resume, certificates, case studies)

### Recommended approach (simple + production-safe)
Use the Vite public folder:
- Put files in: `app/frontend/public/docs/`

Examples:
- `app/frontend/public/docs/resume.pdf`
- `app/frontend/public/docs/cert-aws.pdf`
- `app/frontend/public/docs/case-study-project-x.pdf`

Then link them in components using root-relative URLs:
- `/docs/resume.pdf`
- `/docs/cert-aws.pdf`

### How to wire resume download button
In `ContactSection.tsx`, replace the current resume `<motion.button>` with an `<a>` tag:

```tsx
<a
  href="/docs/resume.pdf"
  download
  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 inline-flex"
>
  Download Resume
</a>
```

If you want it to open in browser tab first:
- use `target="_blank" rel="noreferrer"` and remove `download`.

---

## 3) Where to upload profile/project images

### Best place
- `app/frontend/public/images/`

Examples:
- `app/frontend/public/images/hero-bg.jpg`
- `app/frontend/public/images/projects/project-1.png`
- `app/frontend/public/images/avatar.png`

Use in code as:
- `/images/hero-bg.jpg`
- `/images/projects/project-1.png`

This avoids external dependency on generated CDN links and gives you full control.

---

## 4) On-scroll animation across the site (what already exists + how to expand)

### Already implemented
The project already includes reusable on-scroll animation via:
- `app/frontend/src/components/ScrollReveal.tsx`

It supports:
- `direction`: `up | down | left | right`
- `delay`
- `duration`
- `once`

And it is already used in major sections (`About`, `Projects`, `Contact`).

### How to apply animation to any new block
Wrap your block with `ScrollReveal`:

```tsx
<ScrollReveal direction="up" delay={0.1}>
  <YourComponent />
</ScrollReveal>
```

### Suggested global animation system
- Keep current `ScrollReveal` as standard for section entrance.
- Use `motion.div` for micro-interactions (button hover, icon hover).
- Keep durations in the 0.45–0.8s range for a consistent feel.

### Optional enhancement (if you want smoother page rhythm)
Create animation presets in one file (e.g. `src/lib/animations.ts`) so every section shares the same motion language.

---

## 5) “Remove the background” — your options

You likely mean one of these:

### Option A: Remove hero image background entirely (fast)
In `HeroSection.tsx`, remove the `backgroundImage` style or set it to none, keep gradient/orbs only.

### Option B: Use transparent PNG/WebP subject cutout
1. Create a no-background image.
2. Save as `.png` or `.webp` with alpha.
3. Put in `public/images/`.
4. Use `<img src="/images/your-cutout.png" />` layered in hero.

### Option C: Remove background from your profile photo (asset prep)
Tools:
- Adobe Express Background Remover
- remove.bg
- Canva background remover
- Figma plugins (if you already use Figma)

Then optimize with TinyPNG / Squoosh.

---

## 6) Best places to get quality images/assets

### Free, high-quality sources
- Unsplash (hero/cover photography)
- Pexels (general visuals)
- Pixabay (mixed media)
- unDraw (illustrations)
- Storyset (illustrations)
- Icons: Lucide (already used), Heroicons, Tabler Icons

### Technical/portfolio visual assets
- Shots from your own deployed apps (best for authenticity)
- GitHub social preview images for repositories
- Screenshots generated from your actual running project pages

---

## 7) Small improvements I recommend (without changing your overall direction)

1. **Centralize personal data** in one config file (name, links, email, location, resume URL) and reference it in all sections.
2. **Replace all `"#"` links** with real URLs to avoid dead interactions.
3. **Make contact form functional** (currently UI-only state reset): connect to backend endpoint or service.
4. **Keep one source of truth for social links** (hero + footer + contact should be identical).

---

## 8) Can I do all this for you?
Yes. I can implement all of the following directly in the codebase:
1. Replace all sample content with your own content.
2. Add/standardize full-page on-scroll animations.
3. Remove/replace background visuals as per your preference.
4. Wire resume/docs links from `public/docs`.
5. Normalize social/contact links across all sections.

---

## 9) Proposed implementation sequence (strictly aligned with your request)
1. Content mapping and variable centralization.
2. Replace personal info, links, and project data.
3. Add docs/images into `public/docs` and `public/images` conventions.
4. Expand on-scroll animation to all remaining blocks.
5. Remove or replace background effect per your selected style.
6. QA pass for broken links, animation consistency, mobile behavior.

---

## 10) Quick checklist for you before I apply code changes
Please prepare:
- Full name + short headline
- About paragraph
- Final email / LinkedIn / GitHub / location
- 4–6 project entries (title, 1-line summary, tech, GitHub URL, live URL)
- Resume PDF file
- Hero image (or no-background profile image)

Once you confirm, I can execute everything end-to-end.
