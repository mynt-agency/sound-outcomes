"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "./icons";
import { NAV_LINKS } from "@/lib/nav";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="so-nav">
      <div className="wrap so-nav-inner">
        <Logo />

        <div className="so-nav-links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="so-nav-cta">
          <Link href="/get-started" className="so-btn ghost sm desktop-only">
            Sign in
          </Link>
          <Button href="/get-started" variant="primary" size="sm" icon="arrow">
            Get started
          </Button>
          <button
            className="so-nav-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "arrow" : "sliders"} size={20} />
          </button>
        </div>
      </div>

      <div className={"so-mobile-menu" + (open ? " open" : "")}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="so-mobile-actions">
          <Button href="/get-started" variant="secondary" full>
            Sign in
          </Button>
          <Button href="/get-started" variant="primary" full icon="arrow">
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};
