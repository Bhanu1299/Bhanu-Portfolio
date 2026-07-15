# Content Redesign — "The Question" (2026-07-15)

## Goal

Make the site read like a person, not a resume. The visual design (Atelier
Edition folio) already promises craft and story; the words must deliver it.
Design/layout unchanged — this is a words-only redesign.

## The narrative spine

A kid in Eluru wondering how a machine understands us — any language, any
command — grows into an engineer whose signature move is automating tedious
work until it disappears. Every project is that same instinct. The journey:
Eluru (first spark) → VIT-AP Amaravati (first real systems) → Hyderabad
(first production code, real stakes) → Buffalo (the leap that went global).

## Voice rules

- First person. Plain sentences. Quiet confidence ("understated craftsman"
  with storyteller warmth).
- Banned: *architected, engineered, spearheaded, leveraged, passionate*.
- Numbers stay, but inside sentences — never as trophies.
- Layered for two readers: the first sentence of every block stands alone
  for a 30-second skimmer; depth follows for engineers.
- Personal glimpses allowed (basketball, psychological horror films,
  unplanned travel), professional core.
- Patent referenced plainly: "contributed to a patent-awarded healthcare AI
  system" — no invented numbers or titles.

## Section-by-section

### Hero (`personalInfo`)
- `statusBadge`: unchanged (recruiter signal).
- `tagline`: → "A kid in Eluru once wondered how a machine could understand
  us — any language, any command. The question never left. These days it
  looks like production backends, GenAI pipelines, and agents that make
  tedious work disappear."
- New `craftLine` field: "I automate the tedious until it disappears."
  (replaces hardcoded "Shipping production-grade systems" in HeroSection).

### About
- **Body paragraphs: KEPT AS-IS for now** — a story rewrite was drafted and
  is pending the user's approval (draft lives in the conversation; swap is a
  single edit to `bio[]` if approved).
- Section title: "Turning Ideas Into Reality" → "Turning Questions Into
  Systems" (works with either body).

### Experience
- Blurb → "Two teams trusted me with production. Both times: unknowns going
  in, shipped anyway. Click any card to expand."
- All bullets rewritten as human sentences, same facts and numbers.
  Pattern: what I did → what it meant, e.g. "Deployments took 40 minutes
  and a checklist; I got them to 10 with GitHub Actions."

### Education
- School corrected: Vellore Institute of Technology → **VIT-AP University,
  Amaravati**. GPA stays, stated as-is.
- Blurb and activities lose committee-speak; UB activities note projects
  built "on nights and weekends alongside full coursework."

### Projects (Broadsheet + mobile cards)
- Featured 4 open with the itch, then the build (all tech specifics kept):
  - **Aria** — "a second brain that just handles things — hotkey, speak,
    done"; name explained (responsive, present, quietly capable).
  - **Career Intelligence Agent** — born mid-job-search, decision fatigue
    and all; built the agent instead of trusting shaky judgment under
    pressure.
  - **GenAI Workflow Platform** — kills pipeline busywork (the repeated
    custom backend script).
  - **Multimodal RAG** — kills digging through mixed-format docs by hand.
- Archive 9: lighter pass — human first sentence, resume filler removed
  ("designed with accessibility and scalability in mind" etc.), technical
  meat kept.
- Repo links stay `#` (real links coming later from user).

### Contact
- Blurb → honest positioning: open to strong engineering roles, GenAI/AI-ML
  leaning; "if you're building something real, I'd like to hear about it."
- Resume card → "Prefer the formal version?" / "Same facts, fewer stories —
  the one-page edition for your files."

### Microcopy
- Footer → "© 2026 Bhanu Teja — written, designed, and built by hand."
- Splash, marquee, specimen-sheet captions: unchanged (already in voice).
- Stats: unchanged (YAGNI).

## Architecture

- All rewritten strings live in `src/data/portfolio.ts` (project rule:
  single source of truth). Strings currently hardcoded in components that
  this redesign rewrites (hero craft line; section heading titles/blurbs in
  About/Experience/Education/Projects/Contact; contact resume card) migrate
  into a new `sectionCopy` export in portfolio.ts, and components read from
  it. Strings NOT rewritten stay where they are — no wholesale migration.

## Verification

`pnpm run check` clean; production preview loaded in browser; every
rewritten section visually inspected (both themes not required — copy only).
