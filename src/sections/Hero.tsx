"use client";

import { Icon, type IconName } from "@/components/icons";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { useLeadForm } from "@/lib/useLeadForm";

// Compact hero lead-capture form
const HeroForm = () => {
  const { data, set, onSubmit, submitting, error } = useLeadForm();

  return (
    <form className="hero-form" onSubmit={onSubmit}>
      <div className="hf-head">
        <span className="hf-tag">
          <Icon name="clock" size={14} /> Free 30-min strategy call
        </span>
        <h3>Book your audio strategy call</h3>
      </div>
      <div className="field">
        <label>Full name</label>
        <input
          type="text"
          required
          placeholder="Jordan Avery"
          value={data.name}
          onChange={set("name")}
        />
      </div>
      <div className="field">
        <label>Company</label>
        <input
          type="text"
          required
          placeholder="Acme Brands"
          value={data.company}
          onChange={set("company")}
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={data.email}
          onChange={set("email")}
        />
      </div>
      {/* Honeypot — hidden from humans; bots that fill it are silently rejected. */}
      <div className="hp-field" aria-hidden="true">
        <label>Website</label>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={set("website")}
        />
      </div>
      <Button variant="primary" icon="arrow" type="submit" full disabled={submitting}>
        {submitting ? "Sending…" : "Book your audio strategy call"}
      </Button>
      {error && <p className="hf-error">{error}</p>}
      <p className="hf-fine">
        We&apos;ll map your audio opportunity, model the upside, and show you how
        we&apos;d measure it before you spend a dollar.
      </p>
    </form>
  );
};

const TRUST_ITEMS: { icon: IconName; t: string }[] = [
  { icon: "trending", t: "$3.1B+ incremental revenue generated" },
  { icon: "target", t: "Advanced Attribution certified" },
  { icon: "handshake", t: "Partnered with Magellan.ai" },
];

export const Hero = () => (
  <header className="hero band-ink" id="top">
    <div className="hero-eq-bg" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${(i * 0.07).toFixed(2)}s`,
            height: `${12 + (Math.sin(i * 1.7) * 0.5 + 0.5) * 70}%`,
          }}
        />
      ))}
    </div>
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <Eyebrow on="dark">Performance audio advertising agency</Eyebrow>
        <h1>
          Audio advertising, engineered for <span className="hl">outcomes</span>,
          not impressions.
        </h1>
        <p className="lead">
          Sound Outcomes is the performance audio agency for brands that refuse to
          fly blind. We plan, buy, and measure Podcast, Streaming, and AM/FM radio, then prove exactly what each dollar drove.
        </p>
        <p className="sub">
          No vanity metrics. No black boxes. Just measurable revenue, from
          programmatic audio to host-read sponsorships across 1,500+ shows, every
          placement bought for return and measured to the conversion.
        </p>
        <div id="book" className="book-marker" />
      </div>
      <div className="hero-form-col">
        <HeroForm />
      </div>
    </div>
    <div className="wrap">
      <div className="trust-strip">
        {TRUST_ITEMS.map((it, i) => (
          <div className="ts-item" key={i}>
            <Icon name={it.icon} size={17} />
            <span>{it.t}</span>
          </div>
        ))}
      </div>
    </div>
  </header>
);
