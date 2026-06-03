"use client";

import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";
import { scrollToId } from "@/lib/scroll";

type Variant = "primary" | "accent" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  icon?: IconName;
  /** Render as an anchor instead of a button. */
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  full?: boolean;
  className?: string;
  disabled?: boolean;
};

/**
 * Brand button. When rendered as an anchor with an in-page hash href
 * (e.g. `#book`), clicking smooth-scrolls to that section.
 */
export const Button = ({
  variant = "primary",
  children,
  icon,
  as = "button",
  href,
  type,
  full,
  className,
  disabled,
}: ButtonProps) => {
  const cls =
    "so-btn " + variant + (full ? " full" : "") + (className ? " " + className : "");
  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (as === "a") {
    const targetId = href && href.startsWith("#") ? href.slice(1) : null;
    return (
      <a
        className={cls}
        href={href || "#"}
        onClick={targetId ? scrollToId(targetId) : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} type={type || "button"} disabled={disabled}>
      {inner}
    </button>
  );
};
