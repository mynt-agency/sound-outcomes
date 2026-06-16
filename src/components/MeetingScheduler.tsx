"use client";

import Script from "next/script";

/**
 * Embeds the HubSpot Meetings scheduler so visitors can book their strategy
 * call directly on /thankyou — keeping them on the page where the Meta and
 * Google conversions fire (see ThankYouConversions) instead of redirecting off
 * to an external scheduler.
 *
 * The HubSpot embed script scans the DOM for `.meetings-iframe-container`
 * elements on load and swaps in the booking iframe. `afterInteractive` matches
 * the analytics scripts in layout.tsx and runs after the container has mounted.
 */
const MEETING_URL =
  "https://meetings.hubspot.com/zachery-tweddell/soundoutcomes?embed=true";

export const MeetingScheduler = () => (
  <div className="thanks-meet">
    <div className="meetings-iframe-container" data-src={MEETING_URL} />
    <Script
      src="https://static.hsappstatic.net/MeetingsEmbedCode/static/MeetingsEmbedCode.js"
      strategy="afterInteractive"
    />
    <noscript>
      <a href="https://meetings.hubspot.com/zachery-tweddell/soundoutcomes">
        Book your audio strategy call
      </a>
    </noscript>
  </div>
);
