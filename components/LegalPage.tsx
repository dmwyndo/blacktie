import type { ReactNode } from "react";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main id="top" className="legal-page">
      <section className="legal-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1 className="display legal-title">{title}</h1>
        </div>
      </section>
      <section className="legal-content">
        <div className="wrap legal-prose">{children}</div>
      </section>
    </main>
  );
}
