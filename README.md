# Sound Outcomes — Website

Performance-first marketing — production website for **Sound Outcomes**, a
performance audio advertising agency and a Mynt Agency brand.

Built with **Next.js (App Router) + TypeScript**, following the same site
structure and model as the Remnant Agency site.

## Stack

- [Next.js 14](https://nextjs.org/) — App Router, React Server Components
- TypeScript (strict)
- The bespoke **Sound Outcomes design system** as global CSS (design tokens +
  kit), loaded ahead of page-specific styles
- Fonts via `next/font` (Archivo for display, Figtree for body/metrics)

## Project structure

```
src/
  app/
    layout.tsx        # <html>/<body>, fonts, global CSS imports, metadata
    page.tsx          # landing page — composes the sections
  components/          # reusable design-system primitives
    icons.tsx          # Lucide-derived icon registry (typed IconName)
    Button.tsx         # brand button (smooth-scrolls in-page hash links)
    Logo.tsx           # brand lockup
    Eyebrow.tsx        # kicker label with signal tick
    Waveform.tsx       # animated EQ motif
    Metric.tsx         # stat block
    ClientLogo.tsx     # client wordmarks (typographic placeholders)
    ScrollLink.tsx     # in-page smooth-scroll anchor
  sections/            # page sections
    Nav.tsx
    Hero.tsx           # dark hero + lead-capture form + trust strip
    LogoBanner.tsx     # client logo wall
    Channels.tsx       # three audio channels + mid-page CTA
    Attribution.tsx    # measurement capabilities
    Proof.tsx          # stats, testimonial, roster
    CloseForm.tsx      # closing lead-capture form
    Footer.tsx
  lib/
    scroll.ts          # smooth-scroll helpers
  styles/
    colors_and_type.css  # design tokens (color + type scales)
    kit.css              # shared component/layout styles
    landing.css          # page-specific styles layered over the kit
public/
  assets/              # brand SVGs (mark, waveform)
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Notes

- The two lead-capture forms (hero + close) submit to HubSpot via the Forms
  Submissions API (`src/lib/hubspot.ts`) and, on success, redirect to the
  `/thankyou` page (`src/app/thankyou`). Portal ID and form GUID default to the
  production values but can be overridden with `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
  and `NEXT_PUBLIC_HUBSPOT_FORM_GUID`.
- The five client logos (Liquid Death, LaserAway, Oats Overnight, Prenuvo, Total
  Wine & More) are typographic placeholders. Swap in the real licensed SVG
  lockups in `src/components/ClientLogo.tsx`.
