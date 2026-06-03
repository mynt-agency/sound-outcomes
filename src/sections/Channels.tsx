import { Icon, type IconName } from "@/components/icons";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";

const CHANNELS: { icon: IconName; name: string; blurb: string; tag: string }[] = [
  {
    icon: "mic",
    name: "Podcast advertising",
    blurb:
      "90% host-read and host-endorsed ads across 1,500+ shows spanning business, health, news, comedy, and lifestyle. We handle show selection, rate negotiation, host coordination, read optimization, and reporting end to end, with competitive spend intelligence from Magellan.ai built in.",
    tag: "1,500+ shows · host-read & DAI",
  },
  {
    icon: "headphones",
    name: "Streaming audio advertising",
    blurb:
      "Targeted Spotify, Pandora, and iHeart placements, plus music streaming advertising across the open ecosystem. We run programmatic audio and direct buys side by side, choosing whichever delivers the lower effective CPM and the cleaner signal.",
    tag: "Spotify · Pandora · iHeart",
  },
  {
    icon: "radio",
    name: "AM/FM & digital radio",
    blurb:
      "Access to every radio station in the country, including SiriusXM. We blend programmatic radio and digital radio advertising with broadcast reach to extend frequency at a fraction of standard rates.",
    tag: "Local · Regional · National · SiriusXM",
  },
];

const MidCTA = ({ text, sub }: { text: string; sub: string }) => (
  <div className="mid-cta">
    <div>
      <p className="mc-text">{text}</p>
      <p className="mc-sub">{sub}</p>
    </div>
    <Button variant="primary" icon="arrow" as="a" href="#book">
      Book a strategy call
    </Button>
  </div>
);

export const Channels = () => (
  <section className="sec" id="channels">
    <div className="wrap">
      <div className="sec-head">
        <Eyebrow>Three audio channels, one performance standard</Eyebrow>
        <h2>Every audio channel that moves revenue.</h2>
        <p className="lead">
          We&apos;re channel-agnostic and outcome-obsessed. We put your budget
          where the math works, across the full digital audio landscape and
          traditional broadcast.
        </p>
      </div>
      <div className="chan-grid">
        {CHANNELS.map((c) => (
          <article className="chan-card" key={c.name}>
            <span className="cc-ico">
              <Icon name={c.icon} size={28} sw={1.6} />
            </span>
            <h3>{c.name}</h3>
            <p>{c.blurb}</p>
            <span className="cc-tag">{c.tag}</span>
          </article>
        ))}
      </div>
      <MidCTA
        text="Not sure which channel fits your funnel?"
        sub="Book a strategy call and we'll tell you straight."
      />
    </div>
  </section>
);
