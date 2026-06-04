import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import Script from "next/script";

import { RouteAnalytics } from "@/components/RouteAnalytics";

import "@/styles/colors_and_type.css";
import "@/styles/kit.css";
import "@/styles/landing.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Performance Audio Advertising Agency | Podcast, Streaming & Radio | Sound Outcomes",
  description:
    "Sound Outcomes is a performance audio advertising agency for podcast, streaming audio (Spotify, Pandora, iHeart), and AM/FM radio, with real attribution via Magellan.ai, MMM, and incrementality testing. Book a strategy call.",
  icons: { icon: "/assets/mark.svg" },
  metadataBase: new URL("https://soundoutcomes.com"),
  openGraph: {
    title: "Sound Outcomes: Performance Audio Advertising Agency",
    description:
      "Audio advertising, engineered for outcomes, not impressions. Podcast, streaming, and AM/FM radio: planned, bought, and measured to the conversion.",
    type: "website",
    url: "https://soundoutcomes.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${figtree.variable}`}>
      <body>
        {children}
        {/* Google tag (gtag.js) — Google Ads, AW-18211014839 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18211014839"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18211014839');
          `}
        </Script>
        {/* Meta Pixel Code — 1538518820993937 */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1538518820993937');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1538518820993937&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <RouteAnalytics />
      </body>
    </html>
  );
}
