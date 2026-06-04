import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Icon } from "@/components/icons";
import { SignupForm } from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Create your free Sound Outcomes account and launch your first audio ad campaign in minutes, starting at $250. No contracts, no minimums.",
};

const POINTS = [
  { i: "rocket", t: "Launch in minutes", d: "Sign up, build, target, and go live the same day." },
  { i: "dollar", t: "Start from $250", d: "No contracts, no platform fees, any budget welcome." },
  { i: "bolt", t: "Free ad creation", d: "Generate a synthetic-voice spot in seconds at no cost." },
  { i: "bars", t: "Measure everything", d: "Real-time analytics and conversion tracking built in." },
];

export default function GetStarted() {
  return (
    <header className="page-hero band-ink" style={{ paddingBottom: "clamp(56px, 8vw, 112px)" }}>
      <div className="wrap split" style={{ alignItems: "center" }}>
        <div>
          <Eyebrow on="dark">Get started</Eyebrow>
          <h1>Your first audio ad is minutes away</h1>
          <p className="lead">
            Create a free account and launch a campaign across streaming,
            podcasts, and radio, starting at $250. No contracts, cancel anytime.
          </p>
          <ul className="feature-list" style={{ marginTop: "var(--space-6)" }}>
            {POINTS.map((p) => (
              <li key={p.t}>
                <Icon name={p.i as "rocket"} size={20} />
                <span style={{ color: "var(--paper-50)" }}>
                  <strong>{p.t}.</strong>{" "}
                  <span style={{ color: "var(--ink-300)" }}>{p.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </header>
  );
}
