import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link
              className="foot-brand"
              href="/"
              aria-label={`${site.name} — Home`}
            >
              <Logo />
            </Link>
            <SocialLinks className="foot-social" />
          </div>
          <div className="foot-meta">
            {site.locations}
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="foot-meta">
            Residential · Commercial · Storm response
            <br />
            Free on-site estimates
          </div>
        </div>
        <div className="foot-legal">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <nav className="foot-legal-links" aria-label="Legal">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
