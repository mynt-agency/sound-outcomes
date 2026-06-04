import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Audience network, precision targeting, retargeting, real-time analytics, conversion tracking with the Sound Outcomes Pixel, Hispanic targeting, and instant ad creation, all self-serve.",
};

const FEATURES: { icon: IconName; tone?: string; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Audience network",
    body: "Aggregating the biggest names in music, radio, and podcasting, the platform reaches almost half of all US listeners in a single buy.",
  },
  {
    icon: "sliders",
    title: "Precision targeting",
    body: "Target by age, gender, location, device, daypart, language, music and podcast genre, plus hundreds of interests and behavioral segments.",
  },
  {
    icon: "refresh",
    tone: "amber",
    title: "Retargeting",
    body: "Remarket to your audio ad listeners while they browse the web. Supercharge engagement in a single click.",
  },
  {
    icon: "bars",
    title: "Real-time analytics",
    body: "Gain insight into how your campaign is performing with up-to-the-minute analytics you can act on immediately.",
  },
  {
    icon: "target",
    tone: "lift",
    title: "Conversion tracking",
    body: "Go beyond clicks. The Sound Outcomes Pixel measures every ad listener who visits your website so you can optimize toward outcomes.",
  },
  {
    icon: "globe",
    title: "Hispanic targeting",
    body: "Reach listeners of the biggest names in US Hispanic media, with Spanish-language ad creative services available.",
  },
  {
    icon: "bolt",
    tone: "amber",
    title: "Instant ad creation",
    body: "Generate a free synthetic-voice spot in seconds, or get a $10 voice-actor recording with 24-hour turnaround.",
  },
  {
    icon: "dollar",
    title: "Dynamic pricing",
    body: "Real-time, bid-based pricing automatically finds the best available audience at the lowest possible rate, so you never overpay.",
  },
];

export default function Features() {
  return (
    <>
      <header className="page-hero band-ink">
        <div className="wrap">
          <Eyebrow on="dark">Features</Eyebrow>
          <h1>Tools to amplify your audio advertising</h1>
          <p className="lead">
            Everything you need to create, target, launch, and measure audio
            campaigns, in one self-serve platform built for results.
          </p>
          <div className="hero-actions">
            <Button href="/get-started" variant="primary" size="lg" icon="rocket">
              Get started free
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg" onDark>
              How it works
            </Button>
          </div>
        </div>
      </header>

      <section className="section band-paper">
        <div className="wrap">
          <div className="grid grid-4">
            {FEATURES.map((f) => (
              <div className="card hover" key={f.title}>
                <div className={"card-ico" + (f.tone ? " " + f.tone : "")}>
                  <Icon name={f.icon} size={22} />
                </div>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sunken">
        <div className="wrap split">
          <div>
            <SectionHeading
              eyebrow="The Sound Outcomes Pixel"
              title="Measure the visits your audio really drives"
            >
              Drop one lightweight tag on your site and connect listens to
              real behavior, visits, sign-ups, and purchases. Optimize live
              toward the outcomes that matter, not vanity impressions.
            </SectionHeading>
            <div className="row" style={{ marginTop: "var(--space-6)" }}>
              <Button href="/get-started" variant="primary" icon="arrow">
                Start measuring
              </Button>
            </div>
          </div>
          <div className="split-media amber">
            <Eyebrow on="dark">Attribution</Eyebrow>
            <ul className="feature-list">
              {[
                "Site-visit and conversion tracking",
                "Real-time optimization toward goals",
                "Audience insights you can re-target",
              ].map((t) => (
                <li key={t}><Icon name="check" size={20} /><span style={{ color: "var(--paper-50)" }}>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
