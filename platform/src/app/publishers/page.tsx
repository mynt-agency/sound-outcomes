import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { Metric } from "@/components/Metric";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { PUBLISHERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Audience network & publishers",
  description:
    "The Sound Outcomes audience network aggregates the biggest names in music, radio, and podcasting, reaching 170M+ listeners. Publishers: monetize your audio inventory.",
};

export default function Publishers() {
  return (
    <>
      <header className="page-hero band-ink">
        <div className="wrap">
          <Eyebrow on="dark">Audience network</Eyebrow>
          <h1>One network. Every major audio app.</h1>
          <p className="lead">
            We aggregate the biggest names in music, radio, and podcasting into a
            single audience network, so advertisers reach 170M+ listeners, and
            publishers fill their inventory with quality demand.
          </p>
          <div className="hero-actions">
            <Button href="/get-started" variant="primary" size="lg" icon="rocket">
              Start advertising
            </Button>
            <Button href="/get-started" variant="secondary" size="lg" onDark icon="handshake">
              Become a publisher
            </Button>
          </div>
        </div>
      </header>

      <section className="section-sm band-paper">
        <div className="wrap">
          <p className="logo-wall-note so-eyebrow">Trusted audio publishers</p>
          <div className="logo-wall">
            {PUBLISHERS.map((p) => <span className="pub" key={p}>{p}</span>)}
          </div>
        </div>
      </section>

      <section className="section band-sunken">
        <div className="wrap split">
          <div>
            <SectionHeading
              eyebrow="For advertisers"
              title="Reach almost half of US listeners in one buy"
            >
              No need to negotiate with each network. One account gives you
              programmatic access to streaming music, radio, and podcasts across
              the US and Canada, in English and Spanish.
            </SectionHeading>
            <div className="row" style={{ marginTop: "var(--space-6)" }}>
              <Button href="/get-started" variant="primary" icon="arrow">Start advertising</Button>
            </div>
          </div>
          <div className="grid grid-2" style={{ gap: "var(--space-6)" }}>
            <Metric value="170M" accent="+" label="Unique listeners" />
            <Metric value="50" accent="%" label="Of US audio reachable" />
            <Metric value="7" accent="+" label="Major networks" />
            <Metric value="2" accent="×" label="Languages" />
          </div>
        </div>
      </section>

      <section className="section band-ink">
        <div className="wrap split flip">
          <div className="split-media amber">
            <Eyebrow on="dark">For publishers</Eyebrow>
            <h3 style={{ color: "var(--paper-50)" }}>Monetize your audio inventory</h3>
            <ul className="feature-list">
              {[
                "Quality, brand-safe advertiser demand",
                "Programmatic fill with dynamic pricing",
                "Simple integration, transparent reporting",
              ].map((t) => (
                <li key={t}><Icon name="check" size={20} /><span style={{ color: "var(--paper-50)" }}>{t}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Join the network"
              title="Turn your listeners into revenue"
              onDark
            >
              Whether you run a podcast network, a streaming station, or a single
              popular show, the Sound Outcomes audience network connects you to
              advertisers ready to reach your listeners.
            </SectionHeading>
            <div className="row" style={{ marginTop: "var(--space-6)" }}>
              <Button href="/get-started" variant="primary" icon="handshake">Become a publisher</Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
