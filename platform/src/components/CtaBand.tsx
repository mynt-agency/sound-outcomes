import { Button } from "./Button";

export const CtaBand = ({
  title = "Your first audio ad is minutes away.",
  sub = "Set a budget, upload or generate your spot, pick your audience, and launch. Starting at $250.",
}: {
  title?: string;
  sub?: string;
}) => (
  <section className="section band-ink cta-band">
    <div className="cta-eq" aria-hidden="true">
      {Array.from({ length: 48 }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${(i * 0.05).toFixed(2)}s`,
            height: `${10 + (Math.sin(i * 1.3) * 0.5 + 0.5) * 80}%`,
          }}
        />
      ))}
    </div>
    <div className="wrap">
      <div className="cta-inner">
        <div>
          <h2>{title}</h2>
          <p className="so-lead" style={{ marginTop: 14, color: "var(--ink-300)" }}>
            {sub}
          </p>
        </div>
        <div className="row">
          <Button href="/get-started" variant="primary" size="lg" icon="rocket">
            Get started free
          </Button>
          <Button href="/how-it-works" variant="secondary" size="lg" onDark>
            See how it works
          </Button>
        </div>
      </div>
    </div>
  </section>
);
