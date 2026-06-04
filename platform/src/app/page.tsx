import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { Metric } from "@/components/Metric";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { PUBLISHERS, STEPS } from "@/lib/content";

const TARGETS = [
  "Age", "Gender", "Location", "Device", "Language", "Music genre",
  "Podcast genre", "Daypart", "Interests", "Behavioral segments",
  "Hispanic audiences", "Retargeting",
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <header className="hero band-ink">
        <div className="hero-eq-bg" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              style={{
                animationDelay: `${(i * 0.06).toFixed(2)}s`,
                height: `${12 + (Math.sin(i * 1.7) * 0.5 + 0.5) * 70}%`,
              }}
            />
          ))}
        </div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow on="dark">Self-serve audio advertising</Eyebrow>
            <h1>
              Audio advertising, <span className="hl">made simple.</span>
            </h1>
            <p className="lead">
              Create, launch, and measure audio ads on the biggest streaming,
              podcast, and radio apps. Reach 170M+ listeners, set your own
              budget, and go live in minutes, starting at just $250.
            </p>
            <div className="hero-actions">
              <Button href="/get-started" variant="primary" size="lg" icon="rocket">
                Get started free
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg" onDark>
                See how it works
              </Button>
            </div>
            <div className="hero-sub">
              <span>No contracts</span>
              <span className="dot" />
              <span>Launch in minutes</span>
              <span className="dot" />
              <span>Free AI ad creation</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="builder" aria-hidden="true">
              <div className="builder-bar">
                <div className="dots"><span /><span /><span /></div>
                <span className="ttl">New campaign</span>
              </div>
              <div className="builder-step done">
                <span className="n"><Icon name="check" size={15} /></span>
                <span className="lbl">Budget &amp; schedule</span>
                <span className="val">$500 · 14 days</span>
              </div>
              <div className="builder-step done">
                <span className="n"><Icon name="check" size={15} /></span>
                <span className="lbl">Audio ad</span>
                <span className="val">0:30 spot</span>
              </div>
              <div className="builder-step">
                <span className="n">3</span>
                <span className="lbl">Audience</span>
                <span className="val">A25–54 · Podcasts</span>
              </div>
              <div className="builder-launch">
                <span>Estimated reach</span>
                <span className="amt">312K – 410K</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- LOGO WALL ---------- */}
      <section className="section-sm band-paper">
        <div className="wrap">
          <p className="logo-wall-note so-eyebrow">
            One platform. Every major audio network.
          </p>
          <div className="logo-wall">
            {PUBLISHERS.map((p) => (
              <span className="pub" key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="section band-sunken" id="how">
        <div className="wrap">
          <SectionHeading
            eyebrow="As easy as 1 · 2 · 3"
            title="Launch an audio campaign in minutes"
            center
          >
            We eliminated the salespeople and the studio. Build, buy, and run
            audio ads yourself, no media agency required.
          </SectionHeading>

          <div className="grid grid-3 steps" style={{ marginTop: "var(--space-8)" }}>
            {STEPS.map((s, i) => (
              <div className="step-card" key={s.title}>
                <span className="step-n">{i + 1}</span>
                <div className="card-ico"><Icon name={s.icon} size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="row center" style={{ marginTop: "var(--space-7)" }}>
            <Button href="/get-started" variant="primary" icon="arrow">
              Build your first ad
            </Button>
            <Button href="/how-it-works" variant="ghost">
              Walk through every step
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- REACH / AUDIENCE NETWORK ---------- */}
      <section className="section band-ink">
        <div className="wrap split">
          <div>
            <SectionHeading
              eyebrow="Audience network"
              title="Half of all US listeners, in one buy"
              onDark
            >
              By aggregating the biggest names in music, radio, and podcasting,
              Sound Outcomes puts your message in front of over 170 million
              unique listeners across the US and Canada, in English and Spanish.
            </SectionHeading>
            <div className="row" style={{ marginTop: "var(--space-6)" }}>
              <Button href="/publishers" variant="primary" icon="arrow">
                Explore the network
              </Button>
            </div>
          </div>
          <div className="grid grid-2" style={{ gap: "var(--space-6)" }}>
            <Metric value="170M" accent="+" label="Unique monthly listeners" />
            <Metric value="50" accent="%" label="Of all US audio listeners reachable" />
            <Metric value="2" accent="×" label="Languages — English &amp; Spanish" />
            <Metric value="5" accent="min" label="From sign-up to live campaign" />
          </div>
        </div>
      </section>

      {/* ---------- TARGETING ---------- */}
      <section className="section band-paper">
        <div className="wrap split flip">
          <div className="split-media">
            <Eyebrow on="dark">Precision targeting</Eyebrow>
            <h3 style={{ color: "var(--paper-50)" }}>Reach exactly who you want</h3>
            <div className="chips" style={{ marginTop: "var(--space-4)" }}>
              {TARGETS.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Targeting"
              title="From broad reach to a single segment"
            >
              Tune your audience with basics like location, age, gender, device,
              and daypart, then go deeper with music and podcast genres,
              interests, and behavioral segments. Retarget listeners across the
              web in a single click.
            </SectionHeading>
            <ul className="feature-list" style={{ marginTop: "var(--space-5)" }}>
              {[
                "Hundreds of interest and behavioral segments",
                "Dedicated Hispanic and Spanish-language targeting",
                "Retarget ad listeners as they browse the web",
              ].map((f) => (
                <li key={f}>
                  <Icon name="check" size={20} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CREATIVE OPTIONS ---------- */}
      <section className="section band-sunken">
        <div className="wrap">
          <SectionHeading
            eyebrow="Ad creation"
            title="Don't have an ad? You will in seconds."
            center
          >
            Three ways to get a professional audio spot, no studio, no producer,
            no waiting.
          </SectionHeading>
          <div className="grid grid-3" style={{ marginTop: "var(--space-7)" }}>
            <div className="card hover">
              <div className="card-ico"><Icon name="bolt" size={22} /></div>
              <h3>Free AI spot</h3>
              <p>
                Type your script and generate an on-demand, synthetic-voice ad in
                a matter of seconds. Free, unlimited revisions.
              </p>
            </div>
            <div className="card hover">
              <div className="card-ico amber"><Icon name="mic" size={22} /></div>
              <h3>$10 studio recording</h3>
              <p>
                Have your spot read by real, professional voice actors with a
                24-hour turnaround, for just $10.
              </p>
            </div>
            <div className="card hover">
              <div className="card-ico lift"><Icon name="upload" size={22} /></div>
              <h3>Bring your own</h3>
              <p>
                Already have a spot? Upload your finished audio and launch it
                across the network right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ANALYTICS / PIXEL ---------- */}
      <section className="section band-paper">
        <div className="wrap split">
          <div>
            <SectionHeading
              eyebrow="Measurement"
              title="See what your audio actually drives"
            >
              Go beyond impressions. Track real-time performance and measure every
              listener who visits your site with the Sound Outcomes Pixel, so you
              can optimize toward clicks, visits, and conversions, not guesswork.
            </SectionHeading>
            <ul className="feature-list" style={{ marginTop: "var(--space-5)" }}>
              {[
                "Up-to-the-minute campaign analytics",
                "Conversion tracking with the Sound Outcomes Pixel",
                "Dynamic, bid-based pricing for the best available rate",
              ].map((f) => (
                <li key={f}>
                  <Icon name="check" size={20} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="row" style={{ marginTop: "var(--space-6)" }}>
              <Button href="/features" variant="primary" icon="arrow">
                See all features
              </Button>
            </div>
          </div>
          <div className="split-media amber">
            <Eyebrow on="dark">Live dashboard</Eyebrow>
            <div className="grid grid-2" style={{ gap: "var(--space-5)" }}>
              <Metric value="318K" label="Impressions delivered" />
              <Metric value="2.4" accent="%" label="Click-through rate" />
              <Metric value="6,210" label="Site visits driven" />
              <Metric value="$0.018" label="Avg. cost per listen" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PRICING TEASER ---------- */}
      <section className="section band-sunken">
        <div className="wrap center">
          <SectionHeading
            eyebrow="Pricing"
            title="Start from $250. Pay only for what works."
            center
          >
            Dynamic, real-time pricing automatically bids for the best available
            audience, so you never overpay. Work with any budget.
          </SectionHeading>
          <div className="row center" style={{ marginTop: "var(--space-6)" }}>
            <Button href="/pricing" variant="primary" size="lg" icon="arrow">
              See pricing
            </Button>
            <Button href="/get-started" variant="secondary" size="lg">
              Get started free
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <CtaBand />
    </>
  );
}
