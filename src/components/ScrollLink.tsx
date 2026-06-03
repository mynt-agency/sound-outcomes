"use client";

import type { ReactNode } from "react";
import { scrollToId } from "@/lib/scroll";

/** In-page anchor that smooth-scrolls to `#targetId`. */
export const ScrollLink = ({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) => (
  <a href={`#${targetId}`} className={className} onClick={scrollToId(targetId)}>
    {children}
  </a>
);
