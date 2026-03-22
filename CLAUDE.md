# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Bhanu Teja Veeramachaneni. The repo has two apps:
- `app/frontend/` — React + TypeScript + Vite single-page portfolio
- `app/backend/` — FastAPI Python backend (supports local and AWS Lambda deployment)

---

## Frontend (`app/frontend/`)

### Commands

```bash
# Install dependencies (uses pnpm)
pnpm i

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Lint
pnpm run lint

# Lint + build check
pnpm run check
```

### Key Architecture

**Entry point:** `src/main.tsx` — loads runtime config from `/api/config` before rendering, then mounts `<App />`.

**Single page:** `src/pages/Index.tsx` composes the portfolio in order: `SplashScreen > ThemeProvider > Navbar > HeroSection > AboutSection > ProjectsSection > ContactSection`.

**Centralized data:** All portfolio content (personal info, skills, projects, experience, contact) lives in `src/data/portfolio.ts`. Update this file to change any displayed content without touching component code.

**Runtime config:** `src/lib/config.ts` resolves `API_BASE_URL` with priority: runtime `/api/config` endpoint > `VITE_API_BASE_URL` env var > `http://127.0.0.1:8000`. Always use `getConfig()` or `config.API_BASE_URL` (not a static import) so Lambda deployments get the correct URL.

**UI components:** All shadcn/ui components are pre-installed under `src/components/ui/`. Path alias `@/` maps to `src/`.

**Styling conventions:** Dark futuristic theme. Background `#0A0A0F`, accent indigo `#6366F1`/violet `#8B5CF6`/cyan `#06B6D4`. Cards use glassmorphism with `backdrop-blur`. Animations via Framer Motion and GSAP.

---

## Backend (`app/backend/`)

### Commands

```bash
# Run dev server (from app/backend/)
python main.py

# Run tests
pytest

# Run a single test file
pytest path/to/test_file.py

# Database migrations
alembic upgrade head
alembic revision --autogenerate -m "description"
```

### Key Architecture

**Entry point:** `main.py` — creates the FastAPI app, runs lifespan startup (DB init, mock data, admin user), and registers middleware.

**Auto-router discovery:** All files in `routers/` that expose a `router` or `admin_router` variable (APIRouter instances) are automatically discovered and registered. Just add a new file to `routers/` — no manual registration needed.

**Settings:** `core/config.py` uses pydantic-settings. Any environment variable is accessible as `settings.<lowercase_name>` (e.g., `settings.openai_api_key` reads `OPENAI_API_KEY`). Load env vars from `app/.env`.

**Database:** SQLAlchemy async with Alembic migrations. Uses asyncpg (PostgreSQL) in production and aiosqlite (SQLite) locally. Session injected via `dependencies/database.py`.

**Auth:** JWT-based auth in `core/auth.py` and `services/auth.py`. Protected routes use `dependencies/auth.py`.

**Lambda:** Set `IS_LAMBDA=true` to enable AWS Lambda mode via Mangum (`lambda_handler.py`).

**Environment:** `ENVIRONMENT=dev` enables full stack traces in error responses; production returns generic 500 messages.


## Design Philosophy
Apply the frontend-design skill for all UI/UX work:
- Production-grade, visually polished interfaces
- Avoid generic AI/template aesthetics
- Smooth, intentional animations only

## Content Architecture
- Single source of truth: `src/data/portfolio.ts`
- All text content, links, lists go in portfolio.ts only
- Never hardcode content directly into components