"use client";

import { RequestInspectionButton } from "@/components/InspectionModal";
import { site } from "@/lib/site";

export function ContactSectionActions() {
  return (
    <div className="hero-ctas">
      <RequestInspectionButton className="btn on-dark solid">
        Request an inspection
      </RequestInspectionButton>
      <a className="btn on-dark ghost" href={site.phoneHref}>
        {site.phone}
      </a>
    </div>
  );
}
