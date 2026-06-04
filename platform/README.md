# Sound Outcomes — Platform (self-serve audio advertising)

A standalone marketing site for **Sound Outcomes Platform**, the self-serve
audio advertising product (an AudioGo-style model) under the Sound Outcomes /
Mynt Agency brand.

> **Separate codebase.** This app is intentionally isolated from the existing
> Sound Outcomes *agency* site at the repo root (`/src`). It has its own
> `package.json`, dependencies, build, and design-token copy, and shares no
> code with the agency site. Changes here do not affect the agency pages.

Built with **Next.js 14 (App Router) + TypeScript**, reusing the Sound Outcomes
brand identity (Archivo + Figtree, the Ink/Signal/Amber palette) but
repositioned from a done-for-you agency to a self-serve platform.

## Pages

| Route            | Purpose                                                        |
| ---------------- | ------------------------------------------------------------- |
| `/`              | Home — hero + builder preview, network reach, 1-2-3 flow, targeting, ad creation, measurement, pricing teaser |
| `/how-it-works`  | The three-step campaign flow in depth                         |
| `/features`      | Audience network, targeting, retargeting, analytics, Pixel, Hispanic targeting, dynamic pricing |
| `/pricing`       | Plans, dynamic bid-based pricing, FAQ ($250 minimum)          |
| `/podcasts`      | Podcast advertising landing page                              |
| `/radio`         | Radio & streaming-audio advertising landing page              |
| `/publishers`    | Audience network (advertisers) + monetization (publishers)    |
| `/get-started`   | Account-creation / lead-capture form                          |

## Project structure

```
platform/
  src/
    app/                 # App Router pages (one folder per route)
      layout.tsx         # <html>/<body>, fonts, global CSS, Nav + Footer
      page.tsx           # home
      how-it-works/ ...  # interior routes
    components/          # design-system primitives + sections
      icons.tsx Button.tsx Eyebrow.tsx Waveform.tsx Metric.tsx Logo.tsx
      Nav.tsx Footer.tsx SignupForm.tsx SectionHeading.tsx CtaBand.tsx
    lib/
      nav.ts             # nav link data
      content.ts         # shared marketing copy (steps, publishers, stats)
    styles/
      tokens.css         # design tokens (color + type)
      kit.css            # reset + shared component styles
      site.css           # page-specific styles
  public/assets/         # brand mark
```

## Develop

```bash
cd platform
npm install
npm run dev      # http://localhost:3001
```

The dev/start scripts use port **3001** so this can run alongside the agency
site (port 3000) without a conflict.

## Build

```bash
npm run build
npm run start
```

## Notes

- **Marketing site only.** The two forms (`SignupForm`) render a client-side
  confirmation on submit. Wire them to your auth/CRM endpoint when ready.
- Publisher names (Spotify, iHeartRadio, Pandora, etc.) are typographic
  placeholders referencing the audio networks; swap in licensed lockups before
  any production launch.
- Copy is original and brand-neutral. It mirrors the *structure* of a self-serve
  audio platform without copying another company's name or wording.
```
