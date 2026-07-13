import Image from "next/image";
import { Bowtie } from "@/components/Bowtie";
import { Loc8NearMeBadge } from "@/components/Loc8NearMeBadge";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

function TrustBadge({
  badge,
}: {
  badge: (typeof site.trustBadges)[number];
}) {
  if ("key" in badge && badge.key === "loc8nearme") {
    return (
      <div className="trust-badge-item trust-badge-item--loc8">
        <Loc8NearMeBadge />
      </div>
    );
  }

  if (!("src" in badge)) return null;

  const image = (
    <Image
      src={badge.src}
      alt={badge.label}
      width={badge.width}
      height={badge.height}
      className="trust-badge-img"
      sizes="(max-width: 820px) 40vw, 200px"
    />
  );

  return (
    <div className="trust-badge-item">
      {"href" in badge && badge.href ? (
        <a
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={badge.label}
        >
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <Reveal className="sect-head trust-head">
          <p className="eyebrow">
            <Bowtie />
            Trusted locally
          </p>
          <h2 className="display trust-headline">
            <span className="trust-headline-desktop">
              <span className="trust-headline-line">Recognition you</span>
              <br aria-hidden />
              <span className="trust-headline-line">can verify.</span>
            </span>
            <span className="trust-headline-mobile">
              <span className="trust-headline-line">Recognition</span>
              <br aria-hidden />
              <span className="trust-headline-line">you can verify.</span>
            </span>
          </h2>
          <p className="trust-lead">{site.trustCopy}</p>
        </Reveal>

        <div
          className="trust-badge-grid reveal in"
          role="group"
          aria-label="Awards and accreditation"
        >
          {site.trustBadges.map((badge) => (
            <TrustBadge
              key={"key" in badge ? badge.key : badge.label}
              badge={badge}
            />
          ))}
        </div>

        <Reveal className="trust-points">
          {site.trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </Reveal>

        <Reveal className="trust-social">
          <p>Find us online</p>
          <SocialLinks className="trust-social-links" />
        </Reveal>
      </div>
    </section>
  );
}
