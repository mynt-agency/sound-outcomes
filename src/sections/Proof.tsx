import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/Eyebrow";
import { Metric } from "@/components/Metric";

const STATS: { v: string; u?: string; l: string }[] = [
  { v: "$3.1B", l: "Incremental revenue for clients" },
  { v: "82", u: "%", l: "Median discount off standard rates" },
  { v: "4", u: "x", l: "Average ROAS on evergreen campaigns" },
  { v: "1,500+", l: "Podcast shows sponsored" },
  { v: "~30", u: "%", l: "Lower effective podcast CPMs" },
  { v: "5.5+", u: "yrs", l: "Average client tenure" },
];

export const Proof = () => (
  <section className="sec band-ink-deep" id="results">
    <div className="wrap">
      <div className="sec-head">
        <Eyebrow on="dark">Backed by Mynt Agency</Eyebrow>
        <h2 style={{ color: "var(--paper-50)" }}>
          A decade of performance, now focused on audio.
        </h2>
        <p className="lead">
          Powered by Mynt Agency, with 10+ years buying and measuring performance
          media for 70+ growth brands a year. Same supply-driven buying model.
          Same obsession with outcomes. Pointed entirely at audio.
        </p>
      </div>
      <div className="proof-grid">
        {STATS.map((s) => (
          <Metric key={s.l} value={s.v} unit={s.u} label={s.l} />
        ))}
      </div>
      <div className="quote">
        <Icon name="quote" size={34} />
        <div>
          <blockquote>
            &quot;With spot-level, real-time pixel tracking and rigorous advanced
            attribution test design, I can make high-stakes decisions with low
            uncertainty.&quot;
          </blockquote>
          <cite>Paul Baumgarthuber, CMO, LaserAway</cite>
        </div>
      </div>
      <p className="proof-roster">
        Trusted by performance brands including LaserAway, DuckDuckGo, Rosetta
        Stone, 5-Hour Energy, Goli Nutrition, Orangetheory, and many more.
      </p>
    </div>
  </section>
);
