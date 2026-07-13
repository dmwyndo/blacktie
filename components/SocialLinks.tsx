import { site } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={className ? `social-links ${className}` : "social-links"}
    >
      <a
        className="social-link social-link--facebook"
        href={site.links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Black Tie Roofing on Facebook"
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M13.5 22v-8.2h2.75l.42-3.18H13.5V9.02c0-.92.26-1.55 1.58-1.55h1.7V4.36c-.29-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.49-4.13 4.22V10.6H7.5v3.18h2.68V22h3.32z" />
        </svg>
      </a>
      <a
        className="social-link social-link--google"
        href={site.links.google}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Black Tie Roofing on Google"
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <path
            className="google-blue"
            d="M23.2 12.2c0-.74-.06-1.28-.19-1.84H12v3.34h6.38a4.7 4.7 0 0 1-2.04 3.08v2.5h3.3c1.93-1.78 3.04-4.4 3.04-7.08z"
          />
          <path
            className="google-green"
            d="M12 24c2.7 0 4.96-.89 6.62-2.42l-3.3-2.5c-.89.6-2.04.95-3.32.95-2.55 0-4.72-1.72-5.5-4.04H3.16v2.58A12 12 0 0 0 12 24z"
          />
          <path
            className="google-yellow"
            d="M6.5 14.99A7.2 7.2 0 0 1 6.14 12c0-1.03.18-2.03.5-2.99V6.43H3.16A12 12 0 0 0 0 12c0 1.94.47 3.78 1.3 5.4l5.2-4.01z"
          />
          <path
            className="google-red"
            d="M12 4.75c1.47 0 2.48.63 3.05 1.16l2.23-2.17C16.95 1.99 14.7 1 12 1 7.7 1 3.99 3.47 2.18 7.07l5.2 4.01C8.28 8.99 9.95 4.75 12 4.75z"
          />
        </svg>
      </a>
    </div>
  );
}
