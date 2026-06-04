import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";

import "@/styles/tokens.css";
import "@/styles/kit.css";
import "@/styles/site.css";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
  title: {
    default: "Audio Advertising Made Simple | Sound Outcomes",
    template: "%s | Sound Outcomes",
  },
  description:
    "Sound Outcomes is the self-serve audio advertising platform. Create, launch, and measure audio ads on the biggest streaming, podcast, and radio apps, starting at $250 a campaign. Launch in minutes.",
  icons: { icon: "/assets/mark.svg" },
  metadataBase: new URL("https://platform.soundoutcomes.com"),
  openGraph: {
    title: "Audio Advertising Made Simple | Sound Outcomes",
    description:
      "The self-serve audio advertising platform. Reach 170M+ listeners across streaming, podcasts, and radio. Launch in minutes, starting at $250.",
    type: "website",
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
