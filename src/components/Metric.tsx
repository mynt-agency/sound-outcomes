/** A single stat block: big tabular numeral + caption. */
export const Metric = ({
  value,
  unit,
  label,
}: {
  value: string;
  unit?: string;
  label: string;
}) => (
  <div className="so-stat">
    <div className="m">
      {value}
      {unit && <span className="u">{unit}</span>}
    </div>
    <div className="cap">{label}</div>
  </div>
);
