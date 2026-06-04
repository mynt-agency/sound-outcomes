"use client";

import { useEffect, useRef } from "react";

/**
 * Fires conversion events when the thank-you page is shown after a successful
 * lead-form submission. /thankyou is only reached post-submit, so a single
 * conversion per view is the intended behavior; the ref guards against React's
 * development double-invoke.
 */
export const ThankYouConversions = () => {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Meta Pixel — standard Lead event.
    window.fbq?.("track", "Lead");

    // Google Ads conversion — pending the conversion label (the part after the
    // slash) for the "Submit lead form" (Website) action, e.g.:
    // window.gtag?.("event", "conversion", {
    //   send_to: "AW-18211014839/XXXXXXXX",
    // });
  }, []);

  return null;
};
