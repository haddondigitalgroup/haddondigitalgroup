# Two separate websites – Haddon Digital Group & Artisan Turkish Barber

This repo currently serves **one site per deploy**. The codebase was updated so that **Haddon Digital Group** is the default site when you deploy.

## Current setup (this repo)

- **Default site:** **Haddon Digital Group** (haddondigitalgroup.com)
  - Layout, homepage, blog, get-started, pricing, and footer/header are for Haddon.
- **Artisan Turkish Barber** code is still in the repo (`src/components/artisan-barber/`, `src/lib/artisan-barber.ts`) but is **not** used on the homepage or in the root layout.

## Running two separate live sites

You need **two separate deployments** (e.g. two Vercel projects):

1. **Haddon Digital Group**
   - **Repo:** This repo (or a copy that only has Haddon).
   - **Vercel project:** e.g. `haddondigitalgroup`
   - **Domain:** haddondigitalgroup.com (and www)
   - **Deploy:** Push to main (or run `vercel --prod`) – the app will show Haddon.

2. **Artisan Turkish Barber**
   - **Option A – Second repo:** Copy this repo, switch the default back to Artisan (restore Artisan `layout.tsx` and `page.tsx`), remove Haddon-only pages if you like, and connect that repo to a **new** Vercel project with domain artisanturkishbarber.co.uk.
   - **Option B – Same repo, two projects:** Use two Vercel projects from this repo (e.g. one from `main`, one from a branch like `artisan` where the default is Artisan). Set each project’s domain to the correct site.

## Switching this repo back to Artisan (for an Artisan-only deploy)

If this repo is used only for Artisan Turkish Barber:

1. In `src/app/layout.tsx`: restore Artisan metadata, `ArtisanWhatsAppCTA`, and `siteUrl` = artisanturkishbarber.co.uk.
2. In `src/app/page.tsx`: restore the Artisan homepage (LocalBusinessSchema, ArtisanHeader, HeroSection, OpeningHours, ServiceMenu, etc.).

## Summary

- **Haddon Digital Group** and **Artisan Turkish Barber** are two separate businesses and should have two separate deployments and domains.
- This repo is currently set up so a deploy from it serves **Haddon Digital Group**.
- To have both live, use two Vercel projects (and optionally two repos or two branches) as above.
