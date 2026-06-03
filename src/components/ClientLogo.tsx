import type { ReactNode } from "react";

/**
 * Client logo wordmarks — typographic placeholders for real brand vectors,
 * rendered monochrome for a clean "trusted by" wall. Swap with real SVG
 * lockups when licensed files are available.
 */
const MARKS: Record<string, ReactNode> = {
  "Liquid Death": <span className="cl-mark cl-death">LIQUID&nbsp;DEATH</span>,
  LaserAway: (
    <span className="cl-mark cl-laser">
      Laser<b>Away</b>
    </span>
  ),
  "Oats Overnight": (
    <span className="cl-mark cl-oats">
      oats<span className="dot">·</span>overnight
    </span>
  ),
  Prenuvo: <span className="cl-mark cl-prenuvo">prenuvo</span>,
  "Total Wine & More": (
    <span className="cl-mark cl-totalwine">
      TOTAL WINE <span className="amp">&amp;</span> MORE
    </span>
  ),
};

export const ClientLogo = ({ name }: { name: string }) => (
  <span className="client-logo" title={name}>
    {MARKS[name]}
  </span>
);
