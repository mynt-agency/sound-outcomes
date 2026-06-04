import type { ReactNode } from "react";

/** Tabular stat block: large numeral + label. */
export const Metric = ({
  value,
  accent,
  label,
}: {
  value: string;
  accent?: string;
  label: ReactNode;
}) => (
  <div className="metric">
    <div className="num">
      {value}
      {accent && <span className="accent">{accent}</span>}
    </div>
    <div className="lbl">{label}</div>
  </div>
);
