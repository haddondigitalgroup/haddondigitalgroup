# Get haddondigitalgroup.com Online – Simple Checklist

Two ways to get your site live. Pick **one**.

---

## Option A: Deploy via Vercel website (needs code on GitHub first)

### Step 1: Push your code to GitHub

1. Open **Terminal** (or Cursor’s terminal) and run:
   ```bash
   cd "/Users/garethhaddon/Desktop/Haddon Digital Group/Haddon Digital Group"
   git push -u origin main
   ```
2. When asked for **username**: your GitHub username (e.g. `haddondigitalgroup`).
3. When asked for **password**: paste a **GitHub Personal Access Token** (not your GitHub password).
   - Create one: https://github.com/settings/tokens → **Generate new token (classic)** → tick **repo** → copy the token.
4. If the push succeeds, your code is on GitHub. Go to Step 2.

### Step 2: Deploy on Vercel

1. Go to **https://vercel.com** and sign in (e.g. “Continue with GitHub”).
2. Click **Add New…** → **Project**.
3. Under “Import Git Repository”, select **haddondigitalgroup/haddondigitalgroup**. Click **Import**.
4. Leave **Framework Preset** as Next.js. Click **Deploy**.
5. Wait for the build to finish. You’ll get a URL like `haddon-digital-xxx.vercel.app`.

### Step 3: Add env vars and your domain

1. In Vercel: open your project → **Settings** → **Environment Variables**.
2. Add (from your `.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` = `https://www.haddondigitalgroup.com`
3. **Settings** → **Domains** → Add:
   - `haddondigitalgroup.com`
   - `www.haddondigitalgroup.com`
4. Vercel will show the DNS records you need.

### Step 4: Point IONOS to Vercel

1. Log in to **IONOS** → **Domains** → **Manage** for haddondigitalgroup.com.
2. Open **DNS** or **Manage DNS**.
3. Add the records Vercel shows, e.g.:
   - **CNAME**: `www` → `cname.vercel-dns.com`
   - **A**: `@` (or leave host empty) → `76.76.21.21`
4. Save. Wait 5–60 minutes for DNS to update.

Your site will then be live at **https://www.haddondigitalgroup.com**.

---

## Option B: Deploy without GitHub (Vercel CLI)

If you can’t get `git push` to work, you can deploy straight from your Mac:

1. Install Vercel CLI (one time):
   ```bash
   npm install -g vercel
   ```
2. In your project folder:
   ```bash
   cd "/Users/garethhaddon/Desktop/Haddon Digital Group/Haddon Digital Group"
   vercel login
   ```
   (Follow the browser login.)
3. Deploy:
   ```bash
   vercel
   ```
   Answer the prompts (defaults are usually fine). You’ll get a live URL.
4. To use your own domain later: in the Vercel dashboard, open the project → **Settings** → **Domains** → add haddondigitalgroup.com and www, then set the same DNS records in IONOS as in Option A, Step 4.

---

## Where people usually get stuck

| Problem | Fix |
|--------|-----|
| **Git push: 401 / Authentication failed** | Use a **Personal Access Token** as the password, not your GitHub password. Create at https://github.com/settings/tokens (scope: **repo**). |
| **Git push: “could not read Username”** | Run `git push` in your **own** Terminal or Cursor terminal so it can prompt you; don’t rely on a script that can’t ask for credentials. |
| **Domain still shows “not used” on IONOS** | After adding DNS records, wait 10–60 minutes. Then in Vercel → Domains, check that the domain is “Verified”. |
| **Site works on vercel.app but not on haddondigitalgroup.com** | DNS not updated yet, or records wrong. Double‑check the A and CNAME values in IONOS match exactly what Vercel shows. |

---

## Quick test

- After Option A Step 2 or Option B Step 3, open the `.vercel.app` URL. If you see your site, the deploy worked; the rest is domain and DNS.
