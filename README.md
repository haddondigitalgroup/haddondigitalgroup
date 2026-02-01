# HaddonDigital – High-End Agency Platform

Next.js (App Router) agency site with premium dark glassmorphism UI, Supabase auth, and client dashboard.

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Backend / Auth:** Supabase (use `.env.local` for credentials)
- **Icons:** Lucide React
- **Motion:** Framer Motion

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - Copy `.env.local.example` to `.env.local` and set:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - In the Supabase SQL Editor, run the migration:
     - `supabase/migrations/001_tickets.sql`

3. **Hero video (optional)**

   - Add a file at `public/hero.mp4` (e.g. from Pexels), or
   - Set `NEXT_PUBLIC_HERO_VIDEO_URL` in `.env.local` to a full video URL.

4. **Run dev**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project structure

- **Landing:** Hero (video + glassmorphism), Reviews, Pricing (£499 / £699 / £999 / App £499, all +£19.99/mo).
- **Dashboard (`/dashboard`):** Protected; welcome message, project progress (Design → Dev → Launch), Support Hub (ticket form + ticket history from Supabase `tickets` table).
- **Auth:** Login/signup at `/login`; Supabase Auth with middleware protecting `/dashboard`.

## Conventions

- UK English, £ currency, DD/MM/YYYY dates.
- Semantic HTML5, `rel="noopener noreferrer"` on external links, descriptive `aria-label`s on social icons.
