# Getting haddondigitalgroup.com Online

Your Next.js site is built and ready. Because it uses **Server Actions** (dashboard support tickets), **API routes** (contact/leads), and **middleware** (auth), it must run on a **Node.js host**, not static-only web space.

## Recommended: Deploy with Vercel (free)

1. **Push your project to GitHub** (if not already):
   - Create a repo at github.com, then in your project folder:
   - `git init` (if needed), `git add .`, `git commit -m "Ready for deploy"`, `git remote add origin <your-repo-url>`, `git push -u origin main`

2. **Import on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
   - Click **Add New… → Project** and import your GitHub repo.
   - Leave **Framework Preset** as Next.js. Click **Deploy**.

3. **Add environment variables** (in Vercel: Project → Settings → Environment Variables):
   - Copy from your local `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_SITE_URL` = `https://www.haddondigitalgroup.com`
   - Add any other vars your app uses (e.g. for API routes).

4. **Add your domain**:
   - In Vercel: Project → **Settings → Domains**.
   - Add `haddondigitalgroup.com` and `www.haddondigitalgroup.com`.
   - Vercel will show the DNS records you need.

5. **Point your domain to Vercel** (wherever your domain is registered, e.g. IONOS):
   - For **www**: Add a **CNAME** record: `www` → `cname.vercel-dns.com`.
   - For **apex (haddondigitalgroup.com)**: Add the **A** records Vercel shows (e.g. `76.76.21.21`).
   - Wait for DNS to propagate (minutes to a few hours).

After DNS propagates, your site will be live at **https://www.haddondigitalgroup.com** and **https://haddondigitalgroup.com**.

---

## If you only have IONOS static web space

Static export is **not** possible with this project as-is (Server Actions and API routes require a server). Options:

- **Use Vercel** (above) and keep your domain on IONOS—only DNS is changed to point to Vercel; you don’t host the files on IONOS.
- Or **move the domain** to a provider that supports connecting to Vercel/Netlify (many do).

---

## After going live

- Ensure **public/og-image.png** exists (1200×630) for social previews.
- Confirm footer social links in `src/components/landing/Footer.tsx` point to your real profiles.
- Set **NEXT_PUBLIC_SITE_URL** to `https://www.haddondigitalgroup.com` in production so metadata and canonical URLs are correct.
