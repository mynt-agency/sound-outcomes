import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Waveform } from "@/components/Waveform";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Thank you | Sound Outcomes",
  description:
    "Your request has been received. An audio strategist will reach out within one business day with your audio plan and measurement scope.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="thanks band-ink">
      <div className="thanks-eq" aria-hidden="true">
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

      <div className="wrap thanks-in">
        <Link
          href="/"
          className="so-logo thanks-logo"
          aria-label="Sound Outcomes — back to home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mark.svg" alt="Sound Outcomes" width={40} height={40} />
          <span className="so-wm" style={{ color: "var(--paper-50)" }}>
            Sound
            <span style={{ color: "var(--signal-400)" }}>Outcomes</span>
          </span>
        </Link>

        <span className="thanks-badge">
          <Icon name="check" size={15} /> Request received
        </span>
        <h1>You&apos;re booked in.</h1>
        <p className="thanks-lead">
          Thanks for reaching out. An audio strategist will be in touch within one
          business day with where audio fits, the upside we&apos;d expect, and
          exactly how we&apos;d measure it.
        </p>

        <Waveform bars={15} height={46} className="thanks-wave" />

        <div className="thanks-cta">
          <Button as="a" href="/" variant="primary" icon="arrow">
            Back to home
          </Button>
        </div>

        <p className="thanks-fine">
          Sound Outcomes is a performance audio agency, powered by Mynt Agency.
        </p>
      </div>
    </main>
  );
}
