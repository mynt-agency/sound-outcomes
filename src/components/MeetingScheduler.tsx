"use client";

import { useEffect, useRef } from "react";

const MEETING_SRC =
  "https://meetings.hubspot.com/zachery-tweddell/soundoutcomes?embed=true";

/**
 * Embeds the HubSpot Meetings scheduler on /thankyou so visitors book their
 * strategy call in place — keeping them on the page where the Meta and Google
 * conversions fire (see ThankYouConversions) instead of redirecting off to an
 * external scheduler.
 *
 * We render the iframe directly rather than using HubSpot's MeetingsEmbedCode.js
 * loader: that loader scans for `.meetings-iframe-container` once on load and
 * doesn't reliably initialize after Next's client-side navigation to /thankyou,
 * which left an empty (white) container. A direct iframe always loads; the
 * postMessage listener below grows the frame as the scheduler advances through
 * its steps, and the CSS min-height keeps it usable if that message never fires.
 */
export const MeetingScheduler = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.origin.includes("hubspot.com")) return;
      const data = e.data as { meetingsFrameHeight?: number; height?: number };
      const h = data?.meetingsFrameHeight ?? data?.height;
      if (ref.current && typeof h === "number" && h > 0) {
        ref.current.style.height = `${h}px`;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="thanks-meet">
      <iframe
        ref={ref}
        src={MEETING_SRC}
        title="Book your audio strategy call"
        width="100%"
        height={720}
      />
    </div>
  );
};
