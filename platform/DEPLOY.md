# Deploying the platform site to `go.soundoutcomes.com` (Vercel)

This app lives in the **`platform/`** subdirectory of the repo. The repo root
contains a *different* Next.js app (the Sound Outcomes agency site), so the
Vercel project for this site must point its **Root Directory at `platform/`**.

## 1. Create the Vercel project

1. Vercel → **Add New… → Project**.
2. Import the GitHub repo **`mynt-agency/sound-outcomes`**.
3. In the configuration screen, set **Root Directory = `platform`**
   (click *Edit* next to Root Directory and choose the `platform` folder).
4. Framework Preset should auto-detect **Next.js**. Leave the defaults:
   - Build command: `next build` (default)
   - Output: handled by the Next.js preset
   - Install command: `npm install` (default)
5. **Production Branch:** set to the branch you want live. Once PR #12 is
   merged, that's `main`. (Until then you can deploy the
   `claude/modest-cori-5xpRQ` branch as a preview.)
6. Click **Deploy**. You'll get a `*.vercel.app` URL to verify the build.

> Note: because two Next.js apps share one repo, you ideally want **two
> separate Vercel projects** — one with Root Directory `/` (agency site) and
> one with Root Directory `platform/` (this site). They deploy independently.

## 2. Add the custom domain

1. Open the new project → **Settings → Domains**.
2. Add **`go.soundoutcomes.com`** and follow the verification prompt.
3. Vercel will show the DNS record to create (see next step).

## 3. DNS (in the soundoutcomes.com DNS provider)

Add the record Vercel shows. For a subdomain this is almost always a CNAME:

| Type  | Name (host) | Value                  | TTL  |
| ----- | ----------- | ---------------------- | ---- |
| CNAME | `go`        | `cname.vercel-dns.com` | Auto |

(If your DNS is managed at Cloudflare, set the record to **DNS only / grey
cloud** so Vercel can issue the TLS certificate. Use the exact target Vercel
displays — it occasionally differs.)

Propagation + automatic SSL usually completes within a few minutes to an hour.
Once verified, `https://go.soundoutcomes.com` serves this site.

## 4. (Optional) Environment & analytics

- No environment variables are required for the marketing site to build/run.
- This site does **not** include the agency site's Google tag. Add your own
  analytics/measurement ID before launch if you want tracking here.

## CLI alternative

If deploying with the Vercel CLI instead of the dashboard, run from `platform/`:

```bash
cd platform
vercel link          # create/link the project
vercel --prod        # production deploy
vercel domains add go.soundoutcomes.com
```

This requires Vercel network access and an authenticated token in the
environment — not available from the Claude Code web sandbox, so run it from a
machine that can reach vercel.com.
