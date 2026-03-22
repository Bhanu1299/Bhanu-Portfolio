My portfolio is at: app/frontend/src/data/portfolio.ts
ALL content changes must go in that file only. Never hardcode content in components.
Resume to link for download: docs/Bhanu_Teja_Resume.pdf



─────────────────────────────────────────
7. portfolio.ts STRUCTURE
─────────────────────────────────────────
- All content in clearly labeled exported sections with edit comments:
  // ✏️ EDIT HERE — Splash / Hero Content
  // ✏️ EDIT HERE — About Me
  // ✏️ EDIT HERE — Work Experience
  // ✏️ EDIT HERE — Education
  // ✏️ EDIT HERE — Projects
  // ✏️ EDIT HERE — Resume Path

─────────────────────────────────────────
GROUND RULES
─────────────────────────────────────────
- Follow frontend-design skill from CLAUDE.md
- If any change you already made is already implemented, then you can skip it, but only if it is exactly as per the instructions.md file.
- Production-grade, polished — no template or generic AI aesthetics
- Zero content hardcoded in components, everything through portfolio.ts
- All animations: CSS transform + opacity only, will-change: transform
- No layout-based animations anywhere
- Do not touch the existing mountain/color-shift animation on splash screen
- Liquid glass blobs must use transform/opacity only — never animate 
  width/height/top/left directly