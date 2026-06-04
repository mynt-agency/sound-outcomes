import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { Metric } from "@/components/Metric";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Radio advertising",
  description:
    "Run radio and streaming-audio ads self-serve across iHeartRadio, Pandora, SiriusXM, TuneIn and more. Target by location and audience, launch in minutes from $250.",
};

export default function Radio() {
  return (
    <>
      <header className="page-hero band-ink">
        <div className="wrap">
          <Eyebrow on="dark"><Icon name="radio" size={14} /> Radio advertising</Eyebrow>
          <h1>Radio ads, on your terms</h1>
          <p className="lead">
            Reach listeners across the biggest streaming-radio apps, iHeartRadio,
            Pandora, SiriusXM, TuneIn and more, without the rate cards and back-and-forth.
            Set your budget, target your market, and go live.
          </p>
          <div className="hero-actions">
            <Button href="/get-started" variant="primary" size="lg" icon="rocket">
              Advertise on radio
            </Button>
            <Button href="/publishers" variant="secondary" size="lg" onDark>
              View the network
            </Button>
          </div>
        </div>
      </header>

      <section className="section band-paper">
        <div className="wrap split flip">
          <div className="split-media">
            <Eyebrow on="dark">Local to national</Eyebrow>
            <h3 style={{ color: "var(--paper-50)" }}>Reach the right market</h3>
            <ul className="feature-list">
              {[
                "Target by city, region, or nationwide",
                "Daypart scheduling for drive-time and beyond",
                "Reach cord-cutters on streaming radio",
              ].map((t) => (
                <li key={t}><Icon name="check" size={20} /><span style={{ color: "var(--paper-50)" }}>{t}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why streaming radio"
              title="The reach of radio, the control of digital"
            >
              Streaming radio brings the broad, trusted reach of AM/FM to a
              digital platform you control. Buy it yourself, target it precisely,
              and measure exactly what it drives, all from one dashboard.
            </SectionHeading>
            <div className="grid grid-3" style={{ marginTop: "var(--space-6)", gap: "var(--space-5)" }}>
              <Metric value="170M" accent="+" label="Listeners reachable" />
              <Metric value="$250" label="To start" />
              <Metric value="100" accent="%" label="Self-serve" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Get on the air this afternoon." />
    </>
  );
}
