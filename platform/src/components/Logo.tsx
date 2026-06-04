import Link from "next/link";

/** Sound Outcomes brand lockup: mark + wordmark. Links to home. */
export const Logo = ({ dark = false }: { dark?: boolean }) => (
  <Link href="/" className="so-logo" aria-label="Sound Outcomes home">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/assets/mark.svg" alt="" width={34} height={34} />
    <span
      className="so-wm"
      style={{ color: dark ? "var(--paper-50)" : "var(--ink-900)" }}
    >
      Sound
      <span style={{ color: dark ? "var(--signal-400)" : "var(--signal-600)" }}>
        Outcomes
      </span>
    </span>
  </Link>
);
