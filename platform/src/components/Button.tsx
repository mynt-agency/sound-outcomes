import type { ReactNode } from "react";
import Link from "next/link";
import { Icon, type IconName } from "./icons";

type Variant = "primary" | "accent" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  icon?: IconName;
  /** Internal route ("/pricing"), hash ("#faq"), or external URL. */
  href?: string;
  type?: "button" | "submit" | "reset";
  full?: boolean;
  size?: "sm" | "lg";
  onDark?: boolean;
  className?: string;
};

/**
 * Brand button. Renders a Next.js <Link> for internal routes, a plain
 * anchor for hash/external links, or a <button> when no href is given.
 */
export const Button = ({
  variant = "primary",
  children,
  icon,
  href,
  type,
  full,
  size,
  onDark,
  className,
}: ButtonProps) => {
  const cls = [
    "so-btn",
    variant,
    full ? "full" : "",
    size || "",
    onDark ? "on-dark" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link className={cls} href={href}>
          {inner}
        </Link>
      );
    }
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} type={type || "button"}>
      {inner}
    </button>
  );
};
