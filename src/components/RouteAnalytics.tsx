"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a PageView on client-side route changes for the Meta Pixel and the
 * Google tag. The inline tags in the root layout already fire PageView on the
 * initial load, so the first run is skipped to avoid double-counting — this
 * covers SPA navigations such as the lead form redirecting to /thankyou.
 */
export const RouteAnalytics = () => {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return null;
};
