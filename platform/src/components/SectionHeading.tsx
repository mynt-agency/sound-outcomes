import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export const SectionHeading = ({
  eyebrow,
  title,
  children,
  center = false,
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  onDark?: boolean;
}) => (
  <div className={"sec-head" + (center ? " center" : "")}>
    {eyebrow && <Eyebrow on={onDark ? "dark" : "light"}>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>
);
