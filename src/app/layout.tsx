import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import Script from "next/script";

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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18211014839"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18211014839');
`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
