import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { Metric } from "@/components/Metric";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Podcast advertising",
  description:
    "Buy podcast ads self-serve. Reach engaged listeners across thousands of shows by genre and interest, launch in minutes, and measure results, starting at $250.",
};

const GENRES = [
  "True crime", "Comedy", "News & politics", "Sports", "Business",
  "Health & wellness", "Technology", "Society & culture", "Education",
  "Arts", "Music", "Kids & family",
];

export default function Podcasts() {
  return (
    <>
      <header className="page-hero band-ink">
        <div className="wrap">
          <Eyebrow on="dark"><Icon name="mic" size={14} /> Podcast advertising</Eyebrow>
          <h1>Buy podcast ads in minutes</h1>
          <p className="lead">
            Get your brand into the shows your customers already love. Target
            podcast listeners by genre, interest, and demographic, then launch
            across thousands of titles, no insertion orders, no waiting.
          </p>
          <div className="hero-actions">
            <Button href="/get-started" variant="primary" size="lg" icon="rocket">
              Advertise on podcasts
            </Button>
            <Button href="/pricing" variant="secondary" size="lg" onDark>
              See pricing
            </Button>
          </div>
        </div>
      </header>

      <section className="section band-paper">
        <div className="wrap split">
          <div>
            <SectionHeading
              eyebrow="Why podcasts"
              title="The most engaged audience in audio"
            >
              Podcast listeners lean in. They subscribe, they trust hosts, and
              they remember the brands they hear. Reach them programmatically
              across a vast catalog of shows, with the same self-serve control
              you get everywhere on Sound Outcomes.
            </SectionHeading>
            <ul className="feature-list" style={{ marginTop: "var(--space-5)" }}>
              {[
                "Target by podcast genre and interest",
                "Dynamic ad insertion across thousands of shows",
                "Real-time analytics and conversion tracking",
              ].map((t) => (
                <li key={t}><Icon name="check" size={20} /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="grid grid-2" style={{ gap: "var(--space-6)" }}>
            <Metric value="100M" accent="+" label="US monthly podcast listeners" />
            <Metric value="1000s" label="Of shows, one campaign" />
            <Metric value="$250" label="To get started" />
            <Metric value="5" accent="min" label="From sign-up to live" />
          </div>
        </div>
      </section>

      <section className="section band-sunken">
        <div className="wrap center">
          <SectionHeading eyebrow="Genres" title="Reach listeners by what they love" center />
          <div className="chips" style={{ justifyContent: "center", marginTop: "var(--space-6)" }}>
            {GENRES.map((g) => <span className="chip" key={g}>{g}</span>)}
          </div>
        </div>
      </section>

      <CtaBand title="Put your brand in their favorite podcast." />
    </>
  );
}
