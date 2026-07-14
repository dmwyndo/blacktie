import Image from "next/image";
import Link from "next/link";
import { Bowtie } from "@/components/Bowtie";
import { Reveal } from "@/components/Reveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { TrustSection } from "@/components/TrustSection";
import { site } from "@/lib/site";

const whyItems = [
  {
    title: "Honest assessments",
    body: "We tell you what you need — and what you don’t. If your roof is fine, we’ll say so.",
  },
  {
    title: "Insurance advocacy",
    body: "Hail and storm claims are part of our everyday work. We meet with adjusters, document the scope, and help you get covered for what’s actually damaged.",
  },
  {
    title: "Clean installs",
    body: "Quality materials, careful crews, and a cleanup so thorough neighbors ask if anyone was even there.",
  },
  {
    title: "Local teams",
    body: "Owned by Kyler Ellison and Curry Austin, with dedicated branches in Fort Worth, Tyler, and San Angelo.",
  },
] as const;

const services = [
  {
    key: "res",
    tag: "Residential",
    title: "Your home, handled",
    body: "New roofs, replacements, emergency repairs, gutters, and exterior touch-ups after storms.",
    image:
      "https://images.unsplash.com/photo-1744975748338-d226c7535d49?auto=format&fit=crop&w=1600&q=80",
    alt: "Residential rooftops with shingle and tile roofs under a clear blue sky",
  },
  {
    key: "com",
    tag: "Commercial",
    title: "Built for business",
    body: "TPO, PVC, modified bitumen, metal, and more for retail, multifamily, medical, schools, and industrial properties.",
    image:
      "https://images.unsplash.com/photo-1679382915249-489422f49eb3?auto=format&fit=crop&w=1200&q=80",
    alt: "Standing seam metal roof against a blue sky",
  },
  {
    key: "storm",
    tag: "Storm response",
    title: "When the weather hits",
    body: "Leak stops, shingle replacement, and full restorations when North Texas weather hits.",
    image:
      "https://images.unsplash.com/photo-1634853982486-c06f0e17940f?auto=format&fit=crop&w=2000&q=80",
    alt: "Rain pouring onto a wet asphalt shingle roof",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Inspect",
    body: "Free on-site assessment of your roof and related exterior damage.",
  },
  {
    n: "02",
    title: "Plan",
    body: "Clear scope, product options, and insurance coordination when needed.",
  },
  {
    n: "03",
    title: "Install",
    body: "Professional crews, quality materials, and on-site oversight.",
  },
  {
    n: "04",
    title: "Finish",
    body: "Thorough cleanup and warranty-backed workmanship.",
  },
] as const;

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-img">
          <Image
            src="https://images.unsplash.com/photo-1566071634551-224a639a1c7d?auto=format&fit=crop&w=2200&q=80"
            alt="A residential home with a dark asphalt shingle roof"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <p className="hero-brandline">
          White-glove roofing · Est. experience 28 yrs
        </p>
        <div className="wrap hero-inner">
          <div className="hero-top">
            <p className="eyebrow">{site.areas}</p>
            <h1 className="display">
              <span className="hero-title-line">Roofing</span>{" "}
              <br className="hero-title-break" aria-hidden />
              <span className="hero-title-phrase">
                done right<span className="dot">.</span>
              </span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p>
              From the first inspection to the final cleanup, we handle your roof
              — and your insurance claim — with the care your home or business
              deserves.
            </p>
            <aside className="hero-trust" aria-label="Our promise">
              <p>{site.trustCopy}</p>
            </aside>
            <div className="hero-ctas">
              <Link className="btn on-dark solid" href="#contact">
                Get a free inspection
              </Link>
              <a className="btn on-dark ghost" href={site.phoneHref}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro-grid">
          <Reveal className="stat">
            <div className="num">
              12<span>+</span>
            </div>
            <div className="label">Years on Texas roofs</div>
          </Reveal>
          <Reveal className="intro-copy">
            <h2>
              North Texas weather is hard on roofs. Black&nbsp;Tie Roofing makes
              the fix straightforward.
            </h2>
            <p>
              We install, replace, and repair residential and commercial roofs
              across the Dallas–Fort Worth Metroplex, Tyler, and San Angelo.
              With more than 28 years of experience, we walk you through product
              choices, coordinate with your insurance adjuster when storm damage
              is involved, and leave your property cleaner than we found it.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustSection />

      <section className="why">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Why Black Tie</p>
            <h2 className="display">
              White-glove roofing,
              <br />
              without the runaround.
            </h2>
          </Reveal>
          <div className="why-list">
            {whyItems.map((item) => (
              <Reveal key={item.title} className="why-item">
                <Bowtie />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Services</p>
            <h2 className="display">
              Homes and businesses.
              <br />
              Flat roofs and steep slopes.
            </h2>
          </Reveal>
          <div className="svc-grid">
            {services.map((svc) => (
              <Reveal key={svc.key} as="article" className={`svc ${svc.key}`}>
                <div className="ph">
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    fill
                    sizes={
                      svc.key === "storm"
                        ? "100vw"
                        : "(max-width: 820px) 100vw, 50vw"
                    }
                  />
                </div>
                <div className="svc-body">
                  <p className="tag">{svc.tag}</p>
                  <h3>{svc.title}</h3>
                  <p>{svc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="svc-ctas">
            <Link className="btn on-dark solid" href="#contact">
              See residential services
            </Link>
            <Link className="btn on-dark ghost" href="/commercial">
              See commercial services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="process" id="process">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Process</p>
            <h2 className="display">How we work</h2>
          </Reveal>
          <Reveal className="steps">
            {steps.map((step) => (
              <div className="step" key={step.n}>
                <span className="n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="closing" id="contact">
        <div className="bg">
          <Image
            src="https://images.unsplash.com/photo-1605450099279-533bd3ce379a?auto=format&fit=crop&w=2200&q=80"
            alt=""
            fill
            sizes="100vw"
            aria-hidden
          />
        </div>
        <Reveal className="wrap">
          <Bowtie />
          <h2 className="display">Ready when you are.</h2>
          <p>
            Schedule a free inspection or call us — we’ll make the next step
            clear.
          </p>
          <div className="hero-ctas">
            <a className="btn on-dark solid" href={site.phoneHref}>
              Request an inspection
            </a>
            <a className="btn on-dark ghost" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
