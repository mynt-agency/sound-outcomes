import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start audio advertising from $250 per campaign. Dynamic, bid-based pricing means you only pay what's needed to reach your goals. No contracts, no setup fees.",
};

const PLANS = [
  {
    plan: "Starter",
    amt: "$250",
    unit: "/ campaign",
    desc: "Test the waters and get your first spot on air.",
    cta: "Start a campaign",
    variant: "secondary" as const,
    featured: false,
    features: [
      "$250 minimum budget",
      "Full audience network access",
      "Free AI ad creation",
      "Standard targeting options",
      "Real-time analytics",
    ],
  },
  {
    plan: "Growth",
    amt: "Dynamic",
    unit: "bid-based",
    desc: "Scale spend across channels with smart, automated bidding.",
    cta: "Get started free",
    variant: "primary" as const,
    featured: true,
    features: [
      "Everything in Starter",
      "Dynamic, bid-based pricing",
      "Advanced & behavioral targeting",
      "Retargeting across the web",
      "Conversion tracking (Pixel)",
      "$10 voice-actor recordings",
    ],
  },
  {
    plan: "Scale",
    amt: "Custom",
    unit: "talk to us",
    desc: "High-volume advertisers and agencies running always-on audio.",
    cta: "Contact sales",
    variant: "secondary" as const,
    featured: false,
    features: [
      "Everything in Growth",
      "Volume pricing & priority delivery",
      "Multi-account management",
      "Hispanic & Spanish creative services",
      "Dedicated support",
    ],
  },
];

const FAQS = [
  {
    q: "How much does it cost to start?",
    a: "You can launch a campaign for as little as $250. There are no setup fees, no contracts, and no long-term commitment, you only fund the campaigns you choose to run.",
  },
  {
    q: "How does dynamic pricing work?",
    a: "Our real-time, bid-based model automatically adjusts to marketplace demand to find the best available audience at the lowest possible rate. You never overpay, you only pay what's needed to reach your goals.",
  },
  {
    q: "Do I need my own audio ad?",
    a: "No. Generate a free synthetic-voice spot in seconds, or have real voice actors record one for $10 with a 24-hour turnaround. You can also upload a finished ad you already have.",
  },
  {
    q: "What does my budget actually buy?",
    a: "Your budget is spent delivering your ad to the audience you target across our network of streaming, podcast, and radio publishers. You can pause, adjust, or stop a campaign at any time.",
  },
  {
    q: "Can I measure results?",
    a: "Yes. You get real-time analytics, and the Sound Outcomes Pixel measures site visits and conversions driven by your audio, so you can optimize toward outcomes.",
  },
];

export default function Pricing() {
  return (
    <>
      <header className="page-hero band-ink">
        <div className="wrap center">
          <Eyebrow on="dark">Pricing</Eyebrow>
          <h1>Audio advertising from $250</h1>
          <p className="lead mx-auto" style={{ marginInline: "auto" }}>
            Work with any budget. Dynamic, bid-based pricing means you only ever
            pay what&apos;s needed to reach your goals, never a fixed rate card.
          </p>
        </div>
      </header>

      <section className="section band-paper">
        <div className="wrap">
          <div className="price-grid">
            {PLANS.map((p) => (
              <div className={"card price-card" + (p.featured ? " featured" : "")} key={p.plan}>
                <span className="plan">{p.plan}</span>
                <div className="amt">
                  {p.amt} <small>{p.unit}</small>
                </div>
                <p className="desc">{p.desc}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}><Icon name="check" size={18} /><span>{f}</span></li>
                  ))}
                </ul>
                <Button href="/get-started" variant={p.variant} full icon="arrow">
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>
          <p className="fine center" style={{ marginTop: "var(--space-6)" }}>
            Prices in USD. Campaign minimums start at $250 ($300 CAD). No setup or
            platform fees.
          </p>
        </div>
      </section>

      <section className="section band-sunken">
        <div className="wrap split">
          <div>
            <SectionHeading
              eyebrow="Dynamic pricing"
              title="Automated bidding, built for audio"
            >
              Instead of fixed costs, our adaptive system bids in real time and
              optimizes your campaign to deliver clicks, visits, or awareness at
              maximum efficiency. You&apos;ll never overpay, only what&apos;s
              needed to reach your goals.
            </SectionHeading>
          </div>
          <div className="grid grid-2" style={{ gap: "var(--space-5)" }}>
            {[
              { i: "dollar", t: "Lowest available rate", d: "Bid-based pricing finds the best price for the best audience." },
              { i: "gauge", t: "Goal-optimized", d: "Spend flows to clicks, visits, or awareness automatically." },
              { i: "refresh", t: "Always adapting", d: "Adjusts to marketplace demand in real time." },
              { i: "shield", t: "No overpaying", d: "You only ever pay what's needed to hit your goals." },
            ].map((b) => (
              <div className="card" key={b.t}>
                <div className="card-ico"><Icon name={b.i as "dollar"} size={20} /></div>
                <h4>{b.t}</h4>
                <p style={{ fontSize: "var(--text-sm)" }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-paper">
        <div className="wrap">
          <SectionHeading eyebrow="FAQ" title="Pricing questions, answered" center />
          <div className="faq" style={{ marginTop: "var(--space-7)" }}>
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Launch your first campaign for $250." />
    </>
  );
}
