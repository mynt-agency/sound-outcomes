/** Animated EQ waveform motif (CSS-driven). */
export const Waveform = ({
  bars = 9,
  height = 56,
  className = "",
}: {
  bars?: number;
  height?: number;
  className?: string;
}) => (
  <div className={"so-eq " + className} style={{ height }}>
    {Array.from({ length: bars }).map((_, i) => (
      <span
        key={i}
        className={i === Math.floor(bars / 2) ? "amber" : ""}
        style={{ animationDelay: `${(i * 0.09).toFixed(2)}s` }}
      />
    ))}
  </div>
);
