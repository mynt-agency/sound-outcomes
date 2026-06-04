import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Launch an audio ad campaign in three simple steps: set your budget and schedule, add your audio, and choose your audience. Live in minutes, starting at $250.",
};

const STEP_DETAIL = [
  [
    "Pick any budget from $250 and up",
    "Set start and end dates, or run always-on",
    "No contracts, cancel or adjust anytime",
  ],
  [
    "Generate a free AI spot in seconds",
    "Or get a $10 voice-actor recording in 24 hours",
    "Or upload a finished ad you already have",
  ],
  [
    "Target by age, gender, location, and device",
    "Layer in genre, interests, and behavioral segments",
    "Preview estimated reach, then launch instantly",
  ],
];

export default function HowItWorks() {
  return (
    <>
      <header className="page-hero band-ink">
        <div className="wrap">
          <Eyebrow on="dark">How it works</Eyebrow>
          <h1>From idea to on-air in three steps</h1>
          <p className="lead">
            We removed the salespeople, the studio, and the wait. Sound Outcomes
            is a self-serve platform, so you create, buy, and run audio ads
            yourself, and go live in minutes.
          </p>
          <div className="hero-actions">
            <Button href="/get-started" variant="primary" size="lg" icon="rocket">
              Get started free
            </Button>
            <Button href="/pricing" variant="secondary" size="lg" onDark>
              See pricing
            </Button>
          </div>
        </div>
      </header>

      <section className="section band-paper">
        <div className="wrap stack" style={{ gap: "var(--space-8)" }}>
          {STEPS.map((s, i) => (
            <div
              className={"split" + (i % 2 === 1 ? " flip" : "")}
              key={s.title}
            >
              <div className="split-media">
                <div className="card-ico"><Icon name={s.icon} size={26} /></div>
                <span
                  className="step-n"
                  style={{ position: "static", color: "var(--signal-300)" }}
                >
                  0{i + 1}
                </span>
                <h3 style={{ color: "var(--paper-50)" }}>{s.title}</h3>
              </div>
              <div>
                <Eyebrow>Step 0{i + 1}</Eyebrow>
                <h2 style={{ marginTop: 12 }}>{s.title}</h2>
                <p className="so-lead" style={{ marginTop: 14 }}>{s.body}</p>
                <ul className="feature-list" style={{ marginTop: "var(--space-5)" }}>
                  {STEP_DETAIL[i].map((d) => (
                    <li key={d}><Icon name="check" size={20} /><span>{d}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section band-sunken">
        <div className="wrap center">
          <SectionHeading
            eyebrow="Why self-serve"
            title="Everything an audio agency does, without the agency"
            center
          >
            Full control, transparent pricing, and real-time results, in a tool
            simple enough to use on your lunch break.
          </SectionHeading>
          <div className="grid grid-4" style={{ marginTop: "var(--space-7)" }}>
            {[
              { i: "clock", t: "Launch in minutes" },
              { i: "dollar", t: "From $250, no contracts" },
              { i: "bars", t: "Real-time analytics" },
              { i: "globe", t: "170M+ listeners" },
            ].map((b) => (
              <div className="card center" key={b.t}>
                <div className="card-ico" style={{ marginInline: "auto" }}>
                  <Icon name={b.i as "clock"} size={22} />
                </div>
                <h4>{b.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
