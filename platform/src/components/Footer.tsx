import Link from "next/link";
import { Logo } from "./Logo";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/get-started", label: "Get started" },
    ],
  },
  {
    title: "Channels",
    links: [
      { href: "/podcasts", label: "Podcast ads" },
      { href: "/radio", label: "Radio ads" },
      { href: "/features", label: "Streaming audio" },
      { href: "/publishers", label: "For publishers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing & billing" },
      { href: "/get-started", label: "Contact sales" },
      { href: "/get-started", label: "Sign in" },
    ],
  },
];

export const Footer = () => (
  <footer className="so-footer">
    <div className="wrap">
      <div className="so-footer-grid">
        <div className="so-footer-brand">
          <Logo dark />
          <p>
            Self-serve audio advertising. Create, launch, and measure audio ads
            across streaming, podcasts, and radio, starting at $250 a campaign.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div className="so-footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l, i) => (
                <li key={i}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="so-footer-bottom">
        <span>© {new Date().getFullYear()} Sound Outcomes, a Mynt Agency brand. All rights reserved.</span>
        <span>Audio advertising, made simple.</span>
      </div>
    </div>
  </footer>
);
