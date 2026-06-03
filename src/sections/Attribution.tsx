import { Icon, type IconName } from "@/components/icons";
import { Eyebrow } from "@/components/Eyebrow";
import { Waveform } from "@/components/Waveform";
import { Button } from "@/components/Button";

const ATTR_CAPS: { icon: IconName; t: string; d: string }[] = [
  {
    icon: "spark",
    t: "Magellan.ai partnership",
    d: "Competitive podcast spend intelligence and detection — so we buy where the proven performance is.",
  },
  {
    icon: "layers",
    t: "Media Mix Modeling (MMM)",
    d: "We quantify audio's contribution alongside every other channel in your mix.",
  },
  {
    icon: "target",
    t: "Causal attribution & incrementality",
    d: "Geo-holdouts and matched-market tests that isolate true incremental lift — not correlation.",
  },
  {
    icon: "link",
    t: "Pixel, promo code & vanity-URL tracking",
    d: "Spot-level signal across podcast, streaming, and radio, triangulated for confidence.",
  },
];

export const Attribution = () => (
  <section className="sec band-ink" id="attribution">
    <div className="wrap">
      <div className="sec-head">
        <Eyebrow on="dark">Audio attribution, done right</Eyebrow>
        <h2 style={{ color: "var(--paper-50)" }}>
          If we can&apos;t measure it, we won&apos;t sell it.
        </h2>
        <p className="lead">
          Audio&apos;s reputation problem is measurement. We solved for it first.
          Sound Outcomes is built on rigorous, transparent attribution — so you
          know what&apos;s actually driving growth versus what&apos;s merely
          getting credit.
        </p>
      </div>
      <div className="attr-grid">
        {ATTR_CAPS.map((c) => (
          <div className="attr-cap" key={c.t}>
            <span className="ac-ico">
              <Icon name={c.icon} size={22} />
            </span>
            <div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="attr-result">
        <Waveform bars={9} height={34} />
        <p>
          The result: you make high-stakes budget decisions with{" "}
          <b>low uncertainty</b>. That&apos;s the whole point of performance audio.
        </p>
        <Button variant="primary" icon="arrow" as="a" href="#book">
          See your measurement plan
        </Button>
      </div>
    </div>
  </section>
);
