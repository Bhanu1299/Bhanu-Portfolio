# Vintage Luxury Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current dark futuristic theme (cold indigo/violet/glassmorphism) with a warm vintage-luxury aesthetic — Warm Parchment light mode + Dark Sepia dark mode — across every section of the portfolio.

**Architecture:** CSS variables drive Tailwind color tokens; new `brown.*`, `gold`, `parchment`, `sepia-bg`, `cream` tokens let components use readable utility classes instead of hardcoded hex values. ThemeProvider is upgraded from hardcoded-dark to a proper light/dark toggle persisted in localStorage. Each section component is rewritten in-place — no new section components are created.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v3 (class-based dark mode), Framer Motion, DM Serif Display + DM Sans (Google Fonts)

**Spec:** `docs/superpowers/specs/2026-04-13-vintage-luxury-theme-design.md`

---

## File Map

| Status | File | What changes |
|---|---|---|
| Modify | `app/frontend/index.html` | Add Google Fonts `<link>` |
| Modify | `app/frontend/tailwind.config.ts` | Add vintage color tokens + font families |
| Modify | `app/frontend/src/index.css` | Rewrite CSS vars, remove blob animations, add paper texture + gold-rule animation |
| Modify | `app/frontend/src/components/ThemeProvider.tsx` | Enable light/dark toggle with localStorage, default light |
| Create | `app/frontend/src/components/ThemeToggle.tsx` | Sun/moon icon toggle (replaces LightBulbToggle) |
| Delete | `app/frontend/src/components/LightBulbToggle.tsx` | No longer used |
| Modify | `app/frontend/src/components/Navbar.tsx` | Import ThemeToggle, remove indigo styles, update all colors |
| Modify | `app/frontend/src/components/HeroSection.tsx` | Remove blobs + glass, add texture + gold rule animation, new button styles |
| Modify | `app/frontend/src/components/AboutSection.tsx` | New section header pattern, warm card/badge styles |
| Modify | `app/frontend/src/components/ExperienceSection.tsx` | Remove violet accents, warm card styles |
| Modify | `app/frontend/src/components/EducationSection.tsx` | Remove cyan accents, warm card styles |
| Modify | `app/frontend/src/components/ProjectsSection.tsx` | Replace 3D flip with hover-reveal overlay, warm modal styles |
| Modify | `app/frontend/src/components/ContactSection.tsx` | Remove indigo/violet/cyan/emerald, warm form + footer |

---

## Task 1: Foundation — Fonts, Color Tokens, CSS Variables

**Files:**
- Modify: `app/frontend/index.html`
- Modify: `app/frontend/tailwind.config.ts`
- Modify: `app/frontend/src/index.css`

- [ ] **Step 1: Add Google Fonts to index.html**

Replace the `<head>` section of `app/frontend/index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='2' fill='%233d2212'/%3E%3Ctext x='16' y='22' font-size='16' font-family='Georgia,serif' font-weight='bold' text-anchor='middle' fill='%23c9a96e'%3EBT%3C/text%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bhanu Teja Veeramachaneni | Software Engineer Portfolio</title>
    <meta name="description" content="CS Master's Graduate & Software Engineer. Explore my portfolio of full-stack, ML, and cloud projects." />
    <meta name="author" content="Bhanu Teja Veeramachaneni" />
    <meta property="og:title" content="Bhanu Teja Veeramachaneni | Software Engineer Portfolio" />
    <meta property="og:description" content="CS Master's Graduate & Software Engineer. Explore my portfolio of full-stack, ML, and cloud projects." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Add vintage color tokens + font families to tailwind.config.ts**

Replace the contents of `app/frontend/tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssAspectRatio from '@tailwindcss/aspect-ratio';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // shadcn/ui CSS-variable colors (keep for UI components)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        // ── Vintage palette ──────────────────────────────────────
        parchment: '#EDE8DF',
        'sepia-bg': '#14100C',
        cream: '#d4c8b8',
        gold: {
          DEFAULT: '#c9a96e',
          dark: '#9a8060',
        },
        brown: {
          100: '#d4c8b8',
          200: '#b09070',
          300: '#9a8060',
          400: '#8a7060',
          500: '#6b5a4a',
          600: '#5e5040',
          700: '#4a3828',
          800: '#3d2212',
          900: '#1f1710',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssAspectRatio],
} satisfies Config;
```

- [ ] **Step 3: Rewrite index.css**

Replace the entire contents of `app/frontend/src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===== SPLASH SCREEN ===== */
@keyframes splash-fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.splash-animate {
  opacity: 0;
  animation: splash-fade-in 0.6s ease-out forwards;
}

/* ===== PAPER TEXTURE ===== */
.paper-texture {
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent, transparent 3px,
      rgba(139, 112, 80, 0.04) 3px, rgba(139, 112, 80, 0.04) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent, transparent 5px,
      rgba(139, 112, 80, 0.025) 5px, rgba(139, 112, 80, 0.025) 6px
    );
}

.dark .paper-texture {
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent, transparent 3px,
      rgba(80, 60, 40, 0.07) 3px, rgba(80, 60, 40, 0.07) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent, transparent 5px,
      rgba(80, 60, 40, 0.05) 5px, rgba(80, 60, 40, 0.05) 6px
    );
}

/* ===== CSS DESIGN TOKENS ===== */
@layer base {
  :root {
    /* Warm Parchment — light theme */
    --background:          38 25% 88%;   /* #EDE8DF */
    --foreground:          28 32%  9%;   /* #1f1710 */

    --card:                 0  0% 100%;
    --card-foreground:     28 32%  9%;

    --popover:              0  0% 100%;
    --popover-foreground:  28 32%  9%;

    --primary:             22 54% 15%;   /* #3d2212 espresso */
    --primary-foreground:  38 25% 88%;

    --secondary:           38 20% 83%;
    --secondary-foreground: 28 32%  9%;

    --muted:               38 18% 82%;
    --muted-foreground:    23 18% 46%;   /* #8a7060 */

    --accent:              37 45% 61%;   /* #c9a96e gold */
    --accent-foreground:   28 32%  9%;

    --destructive:          0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border:              27 28% 56%;   /* #b09070 */
    --input:               27 28% 56%;
    --ring:                37 45% 61%;   /* gold focus ring */
    --radius:              0.125rem;

    --sidebar-background:  38 25% 85%;
    --sidebar-foreground:  28 32%  9%;
    --sidebar-primary:     22 54% 15%;
    --sidebar-primary-foreground: 38 25% 88%;
    --sidebar-accent:      37 45% 61%;
    --sidebar-accent-foreground: 28 32% 9%;
    --sidebar-border:      27 28% 56%;
    --sidebar-ring:        37 45% 61%;
  }

  .dark {
    /* Dark Sepia — dark theme */
    --background:          30 25%  6%;   /* #14100C */
    --foreground:          37 18% 78%;   /* #d4c8b8 */

    --card:                30 25%  6%;
    --card-foreground:     37 18% 78%;

    --popover:             30 25%  6%;
    --popover-foreground:  37 18% 78%;

    --primary:             30 22% 49%;   /* #9a8060 */
    --primary-foreground:  30 25%  6%;

    --secondary:           27 30% 14%;
    --secondary-foreground: 37 18% 78%;

    --muted:               27 30% 14%;
    --muted-foreground:    30 22% 49%;

    --accent:              30 22% 49%;
    --accent-foreground:   30 25%  6%;

    --destructive:          0 62% 30%;
    --destructive-foreground: 0 0% 100%;

    --border:              27 30% 22%;   /* #4a3828 */
    --input:               27 30% 22%;
    --ring:                30 22% 49%;

    --sidebar-background:  27 30% 10%;
    --sidebar-foreground:  37 18% 78%;
    --sidebar-primary:     30 22% 49%;
    --sidebar-primary-foreground: 30 25% 6%;
    --sidebar-accent:      30 22% 49%;
    --sidebar-accent-foreground: 30 25% 6%;
    --sidebar-border:      27 30% 22%;
    --sidebar-ring:        30 22% 49%;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}

/* ===== THEME TRANSITIONS ===== */
*, *::before, *::after {
  transition-property: background-color, border-color, color;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

/* Exclude elements where transition causes visual glitches */
.no-transition,
.no-transition * {
  transition: none !important;
}
```

- [ ] **Step 4: Verify build passes**

```bash
cd "app/frontend" && pnpm run build
```

Expected: build completes with no TypeScript errors. If Tailwind purge warnings appear about unknown classes that's OK — they'll resolve as components are updated.

- [ ] **Step 5: Commit**

```bash
git add app/frontend/index.html app/frontend/tailwind.config.ts app/frontend/src/index.css
git commit -m "feat: add vintage color tokens, DM fonts, paper texture CSS"
```

---

## Task 2: ThemeProvider + ThemeToggle Component

**Files:**
- Modify: `app/frontend/src/components/ThemeProvider.tsx`
- Create: `app/frontend/src/components/ThemeToggle.tsx`
- Delete: `app/frontend/src/components/LightBulbToggle.tsx`

- [ ] **Step 1: Rewrite ThemeProvider.tsx**

Replace the entire contents of `app/frontend/src/components/ThemeProvider.tsx` with:

```tsx
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

- [ ] **Step 2: Create ThemeToggle.tsx**

Create `app/frontend/src/components/ThemeToggle.tsx`:

```tsx
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 text-brown-400 dark:text-brown-600 hover:text-brown-800 dark:hover:text-brown-300 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </motion.button>
  );
}
```

- [ ] **Step 3: Delete LightBulbToggle.tsx**

```bash
rm "app/frontend/src/components/LightBulbToggle.tsx"
```

- [ ] **Step 4: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes. If there are import errors referencing `LightBulbToggle`, they'll be fixed in Task 3 (Navbar). If the build fails only because of that import, that's expected — proceed to Task 3 immediately.

- [ ] **Step 5: Commit**

```bash
git add app/frontend/src/components/ThemeProvider.tsx app/frontend/src/components/ThemeToggle.tsx
git rm app/frontend/src/components/LightBulbToggle.tsx
git commit -m "feat: enable light/dark toggle, add ThemeToggle sun/moon component"
```

---

## Task 3: Navbar

**Files:**
- Modify: `app/frontend/src/components/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar.tsx**

Replace the entire contents of `app/frontend/src/components/Navbar.tsx` with:

```tsx
import { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress — gold */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold dark:bg-gold-dark z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-parchment/90 dark:bg-sepia-bg/90 border-b border-brown-200/60 dark:border-brown-700/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg text-brown-900 dark:text-cream hover:text-brown-600 dark:hover:text-brown-200 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-brown-400 dark:text-brown-600 hover:text-brown-900 dark:hover:text-cream transition-colors tracking-[0.1em] uppercase relative group"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold dark:bg-gold-dark group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            {/* Resume */}
            <motion.a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 hover:border-brown-400 dark:hover:border-brown-500 transition-all text-xs tracking-[0.08em] uppercase rounded-[2px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-3 h-3" />
              Resume
            </motion.a>

            {/* Open to work */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 border border-brown-200 dark:border-brown-700 rounded-[2px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-3 h-3 text-gold dark:text-gold-dark animate-pulse" />
              <span className="text-xs text-brown-500 dark:text-brown-400 tracking-[0.08em]">Open to Work</span>
            </motion.div>

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-brown-500 dark:text-brown-400 p-2"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <motion.div
            className="md:hidden bg-parchment/97 dark:bg-sepia-bg/97 border-b border-brown-200/60 dark:border-brown-700/60"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-brown-500 dark:text-brown-400 hover:text-brown-900 dark:hover:text-cream transition-colors py-1.5 tracking-[0.08em] uppercase"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumePath}
                download
                className="flex items-center gap-2 px-3.5 py-2 border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 transition-all text-sm w-fit rounded-[2px] tracking-[0.08em] uppercase"
                onClick={() => setIsMobileOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-brown-200 dark:border-brown-700 w-fit rounded-[2px]">
                <Sparkles className="w-3 h-3 text-gold dark:text-gold-dark animate-pulse" />
                <span className="text-xs text-brown-500 dark:text-brown-400 tracking-[0.08em]">Open to Work</span>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes with no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add app/frontend/src/components/Navbar.tsx
git commit -m "feat: restyle Navbar with vintage palette and ThemeToggle"
```

---

## Task 4: HeroSection

**Files:**
- Modify: `app/frontend/src/components/HeroSection.tsx`

- [ ] **Step 1: Rewrite HeroSection.tsx**

Replace the entire contents of `app/frontend/src/components/HeroSection.tsx` with:

```tsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 800], [0, 60]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.0, 0.0, 1.0] as [number, number, number, number] },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      {/* Warm glow — dark mode only */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bg-brown-700/0 dark:bg-brown-700/10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none bg-brown-800/0 dark:bg-brown-800/08" />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 border border-brown-200 dark:border-brown-700 mb-10 rounded-[2px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brown-400 dark:bg-brown-300 animate-pulse" />
          <span className="text-xs text-brown-400 dark:text-brown-500 tracking-[0.16em] uppercase">
            {personalInfo.statusBadge}
          </span>
        </motion.div>

        {/* Gold rule — draws in */}
        <motion.div
          className="h-px bg-gold dark:bg-gold-dark mb-8"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        />

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-[76px] leading-[1.05] font-display font-normal text-brown-900 dark:text-cream mb-5 tracking-tight"
          {...fadeUp(0.15)}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role — display italic */}
        <motion.p
          className="font-display italic text-xl sm:text-2xl text-brown-400 dark:text-brown-300 mb-6 tracking-wide"
          {...fadeUp(0.25)}
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base text-brown-500 dark:text-brown-600 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
          {...fadeUp(0.3)}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          {...fadeUp(0.4)}
        >
          <motion.button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg text-xs font-medium tracking-[0.12em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>

          <motion.a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-2 px-8 py-3.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 text-xs font-medium tracking-[0.12em] uppercase rounded-[2px] hover:border-brown-500 dark:hover:border-brown-500 transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 text-xs font-medium tracking-[0.12em] uppercase rounded-[2px] hover:border-brown-500 dark:hover:border-brown-500 transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 border border-brown-200 dark:border-brown-700 text-brown-400 dark:text-brown-600 hover:text-brown-800 dark:hover:text-cream hover:border-brown-400 dark:hover:border-brown-500 transition-all duration-300 rounded-[2px]"
              aria-label={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-4 h-4 text-brown-300 dark:text-brown-700" />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add app/frontend/src/components/HeroSection.tsx
git commit -m "feat: restyle HeroSection — parchment bg, gold rule, DM Serif, no blobs"
```

---

## Task 5: AboutSection

**Files:**
- Modify: `app/frontend/src/components/AboutSection.tsx`

- [ ] **Step 1: Rewrite AboutSection.tsx**

Replace the entire contents of `app/frontend/src/components/AboutSection.tsx` with:

```tsx
import { Code2, Cloud, Brain, Database, Terminal, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, stats as rawStats, personalInfo } from "../data/portfolio";

const statIcons = [Code2, Cloud, Brain, Database, Terminal, Globe];
const stats = rawStats.map((s, i) => ({ ...s, icon: statIcons[i] }));

function SectionHeader({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <span className="text-xs font-medium text-brown-400 dark:text-brown-600 tracking-[0.18em] uppercase">
        {label}
      </span>
      <motion.div
        className="h-px bg-gold dark:bg-gold-dark mx-auto my-3"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
        {title}
      </h2>
    </div>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-2xl font-display text-brown-900 dark:text-cream"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {value}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <SectionHeader label="About Me" title="Turning Ideas Into Reality" />
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 border border-brown-200/60 dark:border-brown-700 hover:border-gold/50 dark:hover:border-brown-600 transition-all duration-500 bg-white/40 dark:bg-white/[0.02] space-y-4 rounded-[2px]">
              {personalInfo.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-brown-500 dark:text-brown-400 leading-relaxed text-base [&_strong]:text-brown-900 dark:[&_strong]:text-cream [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="p-5 border border-brown-200/60 dark:border-brown-700 text-center hover:border-gold/50 dark:hover:border-brown-600 transition-all duration-300 h-full bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Icon className="w-5 h-5 text-gold dark:text-gold-dark mx-auto mb-2" />
                </motion.div>
                <AnimatedCounter value={value} />
                <div className="text-xs text-brown-400 dark:text-brown-600 mt-1">{label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1} direction={i < 3 ? "left" : "right"}>
              <div className="p-6 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-all duration-300 h-full bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-px h-4 bg-gold dark:bg-gold-dark" />
                  <h3 className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.14em] uppercase">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1.5 text-xs border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 hover:border-brown-400 dark:hover:border-brown-500 hover:text-brown-800 dark:hover:text-cream transition-colors cursor-default rounded-[2px]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.04 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes. Note: `SectionHeader` is defined locally — it's used only in this file. If you want to reuse it in later tasks, copy the definition (do NOT import from AboutSection).

- [ ] **Step 3: Commit**

```bash
git add app/frontend/src/components/AboutSection.tsx
git commit -m "feat: restyle AboutSection with vintage palette and section header pattern"
```

---

## Task 6: ExperienceSection

**Files:**
- Modify: `app/frontend/src/components/ExperienceSection.tsx`

- [ ] **Step 1: Read the full file first**

```bash
cat "app/frontend/src/components/ExperienceSection.tsx"
```

- [ ] **Step 2: Replace all color classes throughout the file**

Make the following targeted replacements throughout `ExperienceSection.tsx`:

| Find | Replace with |
|---|---|
| `bg-white/[0.03]` | `bg-white/30 dark:bg-white/[0.02]` |
| `bg-white/[0.045]` | `bg-white/40 dark:bg-white/[0.03]` |
| `border-white/[0.06]` | `border-brown-200/60 dark:border-brown-700` |
| `hover:border-violet-500/20` | `hover:border-gold/40 dark:hover:border-brown-600` |
| `text-white` | `text-brown-900 dark:text-cream` |
| `text-violet-300` | `text-gold dark:text-gold-dark` |
| `text-slate-400` | `text-brown-500 dark:text-brown-400` |
| `text-slate-500` | `text-brown-400 dark:text-brown-600` |
| `text-[10px] font-medium rounded-full bg-white/[0.05] text-slate-500 border border-white/[0.06]` | `text-[10px] font-medium border border-brown-200 dark:border-brown-700 text-brown-400 dark:text-brown-600 rounded-[2px]` |
| `bg-indigo-500/10 border border-indigo-500/20` | `border border-brown-200 dark:border-brown-700` |
| `text-indigo-400` | `text-gold dark:text-gold-dark` |
| `bg-violet-500/15` | `bg-gold/10 dark:bg-gold-dark/10` |

Also replace the section header block:
```tsx
<span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">
  Experience
</span>
<h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
  Work{" "}
  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
    Experience
  </span>
</h2>
```
with:
```tsx
<span className="text-xs font-medium text-brown-400 dark:text-brown-600 tracking-[0.18em] uppercase">
  Experience
</span>
<motion.div
  className="h-px bg-gold dark:bg-gold-dark mx-auto my-3"
  initial={{ width: 0 }}
  whileInView={{ width: 40 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
/>
<h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
  Work Experience
</h2>
```

Also remove any `bg-indigo-600/5`, `bg-violet-600/5` background decoration divs (the blurred circle decorations).

Add `import { motion } from "framer-motion";` if not already present.

- [ ] **Step 3: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes.

- [ ] **Step 4: Commit**

```bash
git add app/frontend/src/components/ExperienceSection.tsx
git commit -m "feat: restyle ExperienceSection with vintage palette"
```

---

## Task 7: EducationSection

**Files:**
- Modify: `app/frontend/src/components/EducationSection.tsx`

- [ ] **Step 1: Read the full file first**

```bash
cat "app/frontend/src/components/EducationSection.tsx"
```

- [ ] **Step 2: Replace all color classes throughout the file**

Make the following targeted replacements throughout `EducationSection.tsx`:

| Find | Replace with |
|---|---|
| `bg-white/[0.03]` | `bg-white/30 dark:bg-white/[0.02]` |
| `bg-white/[0.04]` | `bg-white/35 dark:bg-white/[0.025]` |
| `bg-white/[0.05]` | `bg-white/40 dark:bg-white/[0.03]` |
| `border-white/[0.06]` | `border-brown-200/60 dark:border-brown-700` |
| `border-cyan-500/25` | `border-gold/50 dark:border-brown-600` |
| `border-cyan-500/20` | `border-brown-200/60 dark:border-brown-700` |
| `border-cyan-500/30` | `border-gold/60 dark:border-brown-600` |
| `hover:border-cyan-500/20` | `hover:border-gold/40 dark:hover:border-brown-600` |
| `shadow-[0_4px_40px_rgba(6,182,212,0.08)]` | `shadow-[0_4px_20px_rgba(201,169,110,0.08)]` |
| `bg-cyan-500/10` | `bg-gold/10 dark:bg-gold-dark/10` |
| `bg-cyan-500/15` | `bg-gold/15 dark:bg-gold-dark/15` |
| `text-cyan-400` | `text-gold dark:text-gold-dark` |
| `text-cyan-300` | `text-gold dark:text-gold-dark` |
| `text-white` | `text-brown-900 dark:text-cream` |
| `text-slate-400` | `text-brown-500 dark:text-brown-400` |
| `text-slate-500` | `text-brown-400 dark:text-brown-600` |
| `rounded-2xl` | `rounded-[2px]` |
| `rounded-xl` | `rounded-[2px]` |

Replace the section header block (same pattern as Task 6):
```tsx
<span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">
  Education
</span>
<h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
  ...gradient span...
</h2>
```
with:
```tsx
<span className="text-xs font-medium text-brown-400 dark:text-brown-600 tracking-[0.18em] uppercase">
  Education
</span>
<motion.div
  className="h-px bg-gold dark:bg-gold-dark mx-auto my-3"
  initial={{ width: 0 }}
  whileInView={{ width: 40 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
/>
<h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
  Education
</h2>
```

Add `import { motion } from "framer-motion";` if not already present.

- [ ] **Step 3: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes.

- [ ] **Step 4: Commit**

```bash
git add app/frontend/src/components/EducationSection.tsx
git commit -m "feat: restyle EducationSection with vintage palette"
```

---

## Task 8: ProjectsSection — Replace 3D Flip with Hover Overlay

**Files:**
- Modify: `app/frontend/src/components/ProjectsSection.tsx`

- [ ] **Step 1: Rewrite ProjectsSection.tsx**

Replace the entire contents of `app/frontend/src/components/ProjectsSection.tsx` with:

```tsx
import { useState, useEffect } from "react";
import { Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/portfolio";

type Project = typeof projects[0];

function ProjectCard({
  project,
  delay,
  onSelect,
}: {
  project: Project;
  delay: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <motion.div
        className="relative group cursor-pointer border border-brown-200/60 dark:border-brown-700 bg-white/30 dark:bg-white/[0.02] rounded-[2px] overflow-hidden h-[280px] flex flex-col justify-between p-6"
        onClick={() => onSelect(project)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        aria-label={`${project.title} — click for details`}
      >
        {/* Bottom gold accent — CSS group hover, full-width trigger */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold dark:bg-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

        {/* Hover border color handled via Tailwind group */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 dark:group-hover:border-brown-600 transition-colors duration-300 rounded-[2px] pointer-events-none" />

        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-base font-display font-normal text-brown-900 dark:text-cream leading-snug pr-2">
              {project.title}
            </h3>
            {project.featured && (
              <span className="flex-shrink-0 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-widest border border-gold/40 dark:border-brown-600 text-gold dark:text-gold-dark rounded-[2px]">
                Featured
              </span>
            )}
          </div>
          <p className="text-brown-500 dark:text-brown-400 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] border border-brown-200 dark:border-brown-700 text-brown-400 dark:text-brown-600 rounded-[2px]"
              >
                {tag}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 text-[10px] text-brown-400 dark:text-brown-600">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
          <p className="text-[10px] text-brown-300 dark:text-brown-700 tracking-[0.08em] uppercase">
            Click for details
          </p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-brown-400 dark:text-brown-600 tracking-[0.18em] uppercase">
              Portfolio
            </span>
            <motion.div
              className="h-px bg-gold dark:bg-gold-dark mx-auto my-3"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
              Featured Projects
            </h2>
            <p className="text-brown-500 dark:text-brown-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Full-stack, ML, and cloud projects. Click any card to see full details.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 0.12}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Other */}
        {other.length > 0 && (
          <>
            <ScrollReveal>
              <p className="text-xs text-brown-400 dark:text-brown-600 uppercase tracking-[0.14em] mb-5 text-center">
                More Projects
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {other.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  delay={i * 0.1}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 z-[100] bg-brown-900/40 dark:bg-brown-900/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-[101] w-[90vw] max-w-2xl bg-parchment dark:bg-sepia-bg border border-brown-200 dark:border-brown-700 shadow-[0_24px_80px_rgba(31,23,16,0.3)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden rounded-[2px]"
              style={{ x: "-50%", y: "-50%", willChange: "transform" }}
              initial={{ opacity: 0, scale: 0.94, y: "-47%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%" }}
              exit={{ opacity: 0, scale: 0.94, y: "-47%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4 border-b border-brown-200/60 dark:border-brown-700">
                <div>
                  <h3 className="text-xl font-display font-normal text-brown-900 dark:text-cream">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.featured && (
                    <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-widest border border-gold/40 dark:border-brown-600 text-gold dark:text-gold-dark rounded-[2px]">
                      Featured
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-brown-400 dark:text-brown-600 hover:text-brown-800 dark:hover:text-cream transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <p className="text-brown-500 dark:text-brown-400 text-sm leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div>
                  <p className="text-xs text-brown-400 dark:text-brown-600 uppercase tracking-[0.12em] mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href={selectedProject.githubLink}
                    className="flex items-center gap-2 px-4 py-2 border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 hover:text-brown-800 dark:hover:text-cream hover:border-brown-400 dark:hover:border-brown-500 transition-all text-sm rounded-[2px]"
                    aria-label="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes. Note `ExternalLink` is imported but not used — remove the import if the linter flags it.

- [ ] **Step 3: Commit**

```bash
git add app/frontend/src/components/ProjectsSection.tsx
git commit -m "feat: restyle ProjectsSection — replace 3D flip with hover-reveal cards"
```

---

## Task 9: ContactSection + Footer

**Files:**
- Modify: `app/frontend/src/components/ContactSection.tsx`

- [ ] **Step 1: Rewrite ContactSection.tsx**

Replace the entire contents of `app/frontend/src/components/ContactSection.tsx` with:

```tsx
import { useState } from "react";
import { Send, Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="relative py-24 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium text-brown-400 dark:text-brown-600 tracking-[0.18em] uppercase">
                Contact
              </span>
              <motion.div
                className="h-px bg-gold dark:bg-gold-dark mx-auto my-3"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
                Let's Work Together
              </h2>
              <p className="text-brown-500 dark:text-brown-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                I'm actively looking for new opportunities. Whether you have a question
                or just want to say hi, I'll get back to you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="p-8 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-all duration-500 bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                  <h3 className="text-lg font-display font-normal text-brown-900 dark:text-cream mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-5">
                    {[
                      { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", value: personalInfo.email },
                      { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/bhanuteja1299", external: true },
                      { href: personalInfo.github, icon: Github, label: "GitHub", value: "github.com/Bhanu1299", external: true },
                    ].map(({ href, icon: Icon, label, value, external }) => (
                      <motion.a
                        key={label}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 text-brown-500 dark:text-brown-400 hover:text-brown-900 dark:hover:text-cream transition-colors group/item"
                        whileHover={{ x: 4 }}
                      >
                        <div className="p-3 border border-brown-200 dark:border-brown-700 group-hover/item:border-gold/40 dark:group-hover/item:border-brown-600 transition-colors rounded-[2px]">
                          <Icon className="w-5 h-5 text-gold dark:text-gold-dark" />
                        </div>
                        <div>
                          <div className="text-xs text-brown-400 dark:text-brown-600 mb-0.5 tracking-[0.08em] uppercase">{label}</div>
                          <div className="text-sm">{value}</div>
                        </div>
                      </motion.a>
                    ))}

                    <motion.div
                      className="flex items-center gap-4 text-brown-500 dark:text-brown-400"
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 border border-brown-200 dark:border-brown-700 rounded-[2px]">
                        <MapPin className="w-5 h-5 text-gold dark:text-gold-dark" />
                      </div>
                      <div>
                        <div className="text-xs text-brown-400 dark:text-brown-600 mb-0.5 tracking-[0.08em] uppercase">Location</div>
                        <div className="text-sm">{personalInfo.location}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Resume CTA */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="p-6 border border-brown-200/60 dark:border-brown-700 bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                  <h4 className="font-display font-normal text-brown-900 dark:text-cream mb-2">
                    Looking for my resume?
                  </h4>
                  <p className="text-brown-500 dark:text-brown-400 text-sm mb-4 leading-relaxed">
                    Download my latest resume to learn more about my experience.
                  </p>
                  <motion.a
                    href={personalInfo.resumePath}
                    download
                    className="inline-flex items-center px-6 py-2.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg text-xs font-medium tracking-[0.1em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Download Resume
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="p-8 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-all duration-500 bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label className="block text-xs font-medium text-brown-500 dark:text-brown-400 mb-2 tracking-[0.08em] uppercase">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        value={formData[id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-brown-200 dark:border-brown-700 text-brown-900 dark:text-cream placeholder-brown-300 dark:placeholder-brown-700 focus:outline-none focus:border-gold dark:focus:border-gold-dark transition-all text-sm rounded-[2px]"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-medium text-brown-500 dark:text-brown-400 mb-2 tracking-[0.08em] uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-brown-200 dark:border-brown-700 text-brown-900 dark:text-cream placeholder-brown-300 dark:placeholder-brown-700 focus:outline-none focus:border-gold dark:focus:border-gold-dark transition-all resize-none text-sm rounded-[2px]"
                      placeholder="Tell me about the opportunity or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg text-xs font-medium tracking-[0.1em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                        Message Sent ✓
                      </motion.span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-brown-200/60 dark:border-brown-700 py-8 px-6 bg-parchment dark:bg-sepia-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brown-400 dark:text-brown-600">
            {personalInfo.footerCopyright}{" "}
            <Heart className="w-3 h-3 inline text-gold dark:text-gold-dark" />
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="text-brown-400 dark:text-brown-600 hover:text-brown-800 dark:hover:text-cream transition-colors"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd "app/frontend" && pnpm run build
```

Expected: Build passes with no errors.

- [ ] **Step 3: Commit**

```bash
git add app/frontend/src/components/ContactSection.tsx
git commit -m "feat: restyle ContactSection and footer with vintage palette"
```

---

## Task 10: Final Polish — SplashScreen + Visual Verification

**Files:**
- Modify: `app/frontend/src/components/SplashScreen.tsx` (update background color)

- [ ] **Step 1: Update SplashScreen background**

Open `app/frontend/src/components/SplashScreen.tsx`. Find the background color (`#0A0A0F` or `bg-[#0A0A0F]` or similar) and replace it with `bg-parchment dark:bg-sepia-bg`. Also update any text colors from white/slate to brown-900/cream.

- [ ] **Step 2: Start dev server and do visual check**

```bash
cd "app/frontend" && pnpm run dev
```

Open `http://localhost:5173` in a browser and verify:

- [ ] Light mode loads by default (parchment background, not black)
- [ ] Toggle (☀/☽) appears in nav top-right and switches modes
- [ ] Dark mode is warm brown, not cold blue
- [ ] Hero has no floating blobs — clean paper background
- [ ] Gold horizontal rule appears above hero name
- [ ] Name is in DM Serif Display (thinner, more elegant than before)
- [ ] All section headers use the gold-rule + DM Serif Display pattern
- [ ] Project cards show hover lift + gold bottom accent (no 3D flip)
- [ ] Project modal uses parchment/sepia bg (not dark indigo)
- [ ] No indigo/violet/cyan colors visible anywhere
- [ ] Contact form inputs have brown border with gold focus ring
- [ ] Refresh while in dark mode → stays dark (localStorage persists)

- [ ] **Step 3: Run lint and build**

```bash
cd "app/frontend" && pnpm run check
```

Expected: No errors.

- [ ] **Step 4: Final commit**

```bash
git add app/frontend/src/components/SplashScreen.tsx
git commit -m "feat: complete vintage luxury theme — parchment light, sepia dark, DM Serif"
```

---

## Verification Checklist

Run these before calling the work done:

- [ ] `pnpm run check` passes (lint + TypeScript + build)
- [ ] Light mode is default on fresh load (no localStorage)
- [ ] Theme toggle persists across page refreshes
- [ ] No `text-indigo-*`, `text-violet-*`, `text-cyan-*`, `text-emerald-*`, `bg-indigo-*`, `bg-violet-*` classes remaining in any portfolio component (grep to confirm)
- [ ] Hero section has no `.hero-blob` elements in the DOM
- [ ] Gold rule animates in on hero load and on each section scroll entry
- [ ] Project cards no longer use `perspective` or `rotateY` (3D flip gone)
- [ ] Both themes look correct at mobile width (375px)

```bash
# Grep to confirm no cold colors remain in portfolio components
grep -r "indigo\|violet\|cyan\|emerald" app/frontend/src/components/ --include="*.tsx" | grep -v "ui/"
```

Expected: No matches (or only false positives from comments).
