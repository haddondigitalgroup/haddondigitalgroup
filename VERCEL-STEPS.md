# Vercel deployment – step by step

Follow these in order.

---

## Part 1: Add environment variables (so the build passes)

1. Open your browser and go to **https://vercel.com**.
2. Log in if needed.
3. Click your project name (**haddondigitalgroup-c3lt** or similar).
4. In the top menu, click **Settings**.
5. In the left sidebar, click **Environment Variables**.
6. You will add **3 variables**. For each one:
   - Type the **Key** (name) in the first box.
   - Type or paste the **Value** in the second box (from your `.env.local` file).
   - Leave the environment as **Production** (tick Production).
   - Click **Save**.

   **Variable 1**
   - **Key:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** Open your project folder → open `.env.local` → copy the value after `NEXT_PUBLIC_SUPABASE_URL=` (starts with `https://`)
   - Click **Save**.

   **Variable 2**
   - **Key:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** From `.env.local`, copy the value after `NEXT_PUBLIC_SUPABASE_ANON_KEY=` (long string starting with `eyJ...`)
   - Click **Save**.

   **Variable 3**
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://www.haddondigitalgroup.com`
   - Click **Save**.

7. You should now see all 3 variables listed under Environment Variables.

---

## Part 2: Redeploy (run a new build with the env vars)

8. In the top menu of your Vercel project, click **Deployments**.
9. Find the **latest deployment** (top of the list). It will say "Failed" or "Error".
10. Click the **three dots (⋮)** on the right of that deployment.
11. Click **Redeploy**.
12. In the popup, leave everything as is and click **Redeploy** again.
13. Wait 1–2 minutes. The status will change from "Building" to **"Ready"** (with a green tick) when it succeeds.
14. Click **Visit** (or the project URL) to open your live site.

---

## Part 3: Use your own domain (optional, do after Part 2 works)

15. In the top menu, click **Settings** again.
16. In the left sidebar, click **Domains**.
17. Under "Add", type: `www.haddondigitalgroup.com` and press Enter (or click Add).
18. Add a second domain: `haddondigitalgroup.com`.
19. Vercel will show **DNS records** (e.g. CNAME for www, A for root). Keep this page open.
20. Log in to **IONOS** → **Domains** → click **Manage** next to haddondigitalgroup.com.
21. Open **DNS** or **Manage DNS**.
22. Add the records exactly as Vercel shows (e.g. CNAME `www` → `cname.vercel-dns.com`, A record for root).
23. Save. Wait 10–60 minutes. Your site will then be live at **https://www.haddondigitalgroup.com**.

---

**Summary:** Part 1 adds the env vars, Part 2 redeploys so the build succeeds, Part 3 connects your domain.
