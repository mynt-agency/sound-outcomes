import type { ReactNode } from "react";

/** Kicker label with a leading signal tick. */
export const Eyebrow = ({
  children,
  on = "light",
}: {
  children: ReactNode;
  on?: "light" | "dark";
}) => (
  <span className={"so-eyebrow-row " + on}>
    <span className="tick" />
    {children}
  </span>
);
