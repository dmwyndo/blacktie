import Link from "next/link";
import { site } from "@/lib/site";

export function Loc8NearMeBadge() {
  return (
    <Link
      className="loc8-badge"
      href={site.links.loc8nearme}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Loc8NearMe Recommends Black Tie Roofing and Construction"
    >
      <span className="loc8-badge-brand" aria-hidden>
        Black Tie Roofing and Construction
      </span>
    </Link>
  );
}
