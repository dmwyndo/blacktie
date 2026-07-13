"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label={`${site.name} — Home`}>
          <Logo />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/#services">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#reviews">Reviews</Link>
          <a className="phone" href={site.phoneHref}>
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
