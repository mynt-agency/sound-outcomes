/**
 * Client logos for the "trusted by" wall. Each brand's real logo is
 * height-normalized via a per-brand class (see .cl-* rules in landing.css)
 * to optically balance their differing aspect ratios.
 */
type Logo = { src: string; cls: string };

const LOGOS: Record<string, Logo> = {
  "Liquid Death": { src: "/assets/Liquid-Death-Emblem.png", cls: "cl-death" },
  LaserAway: { src: "/assets/laseraway_580_x_580_vlf.webp", cls: "cl-laser" },
  "Oats Overnight": { src: "/assets/oats.png", cls: "cl-oats" },
  Prenuvo: { src: "/assets/Prenuvo-sRGB-Wordmark-Teal-L.png", cls: "cl-prenuvo" },
  "Total Wine & More": {
    src: "/assets/Total_Wine__More_logo-1024x227.webp",
    cls: "cl-totalwine",
  },
};

export const ClientLogo = ({ name }: { name: string }) => {
  const logo = LOGOS[name];
  if (!logo) return null;
  return (
    <span className={`client-logo ${logo.cls}`} title={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo.src} alt={`${name} logo`} loading="lazy" />
    </span>
  );
};
