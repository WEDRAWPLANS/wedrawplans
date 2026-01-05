import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20architectural%20drawings%20in%20Hertfordshire";

const HERO_IMAGE = "/image/hertfordshire-hero.jpg";
const IMAGE_1 = "/image/hertfordshire-project-1.jpg";
const IMAGE_2 = "/image/hertfordshire-project-2.jpg";
const IMAGE_3 = "/image/hertfordshire-project-3.jpg";
const IMAGE_4 = "/image/hertfordshire-project-4.jpg";
const IMAGE_5 = "/image/hertfordshire-project-5.jpg";

function getFallbackCandidates(src: string) {
  const lower = src.toLowerCase();
  const candidates = [src];
  if (lower.endsWith(".jpg")) {
    candidates.push(src.slice(0, -4) + ".jpeg");
    candidates.push(src.slice(0, -4) + ".png");
    candidates.push(src.slice(0, -4) + ".webp");
  } else if (lower.endsWith(".jpeg")) {
    candidates.push(src.slice(0, -5) + ".jpg");
    candidates.push(src.slice(0, -5) + ".png");
    candidates.push(src.slice(0, -5) + ".webp");
  } else if (lower.endsWith(".png")) {
    candidates.push(src.slice(0, -4) + ".jpg");
    candidates.push(src.slice(0, -4) + ".jpeg");
    candidates.push(src.slice(0, -4) + ".webp");
  } else if (lower.endsWith(".webp")) {
    candidates.push(src.slice(0, -5) + ".jpg");
    candidates.push(src.slice(0, -5) + ".jpeg");
    candidates.push(src.slice(0, -5) + ".png");
  } else {
    candidates.push(src + ".jpg", src + ".png", src + ".webp");
  }
  return Array.from(new Set(candidates));
}

function FillImage({
  src,
  alt,
  eager,
}: {
  src: string;
  alt: string;
  eager?: boolean;
}) {
  const candidates = useMemo(() => getFallbackCandidates(src), [src]);
  const [idx, setIdx] = useState(0);

  return (
    <img
      src={candidates[idx]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => {
        if (idx < candidates.length - 1) setIdx((v) => v + 1);
      }}
    />
  );
}

export default function HertfordshireAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hertfordshire" });
  }

  function scrollToForm() {
    const el = document.getElementById("hertfordshire-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl = "https://www.wedrawplans.co.uk/areas/hertfordshire";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: canonicalUrl,
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/image/hertfordshire-hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Hertfordshire",
      "Broxbourne",
      "Cheshunt",
      "Waltham Cross",
      "Potters Bar",
      "Borehamwood",
      "Bushey",
      "Watford",
      "St Albans",
      "Harpenden",
      "Hemel Hempstead",
      "Welwyn Garden City",
      "Hatfield",
      "Hoddesdon",
      "Bishops Stortford",
      "Hertford",
      "Ware",
      "Rickmansworth",
      "Chorleywood",
      "Radlett",
      "Berkhamsted",
      "Tring",
    ],
    priceRange: "££",
  };

  const faqItems = [
    {
      question: "What drawings do I need for a house extension in Hertfordshire",
      answer:
        "Most homeowners start with existing and proposed plans, elevations, and a site location plan. If your project needs Building Regulations approval, you will also need a detailed Building Regulations drawing set and supporting details. We guide you through what is needed based on your property and scope.",
    },
    {
      question: "Can you handle planning drawings and Building Regulations drawings",
      answer:
        "Yes. We can produce planning drawing packages and Building Regulations drawing packages. Many clients start with planning and then upgrade to Building Regulations once the scheme is agreed.",
    },
    {
      question: "Do you work across all Hertfordshire towns",
      answer:
        "Yes. We cover Hertfordshire widely, including Broxbourne, Cheshunt, Waltham Cross, Potters Bar, Borehamwood, St Albans, Watford, Hemel Hempstead, Welwyn Hatfield, and nearby areas.",
    },
    {
      question: "How do you get the measurements for my property",
      answer:
        "We can work from a survey, existing drawings, or we can arrange an initial survey where needed. The aim is accurate, council ready drawings that match the property and the proposed scope.",
    },
    {
      question: "Can you advise if my project is likely to need planning permission",
      answer:
        "We can provide guidance based on the scope, constraints, and local planning context. Final decisions rest with the Local Planning Authority, but we help you choose a clear route and a robust drawing package.",
    },
    {
      question: "How quickly can I get a quote",
      answer:
        "Send your postcode and a short description of the works. We will review and respond quickly with clear next steps and a quote for the drawing package that fits your project.",
    },
  ];

  const faqPageJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const heroSlides = useMemo(
    () => [
      { src: HERO_IMAGE, alt: "Architectural drawings and planning support in Hertfordshire" },
      { src: IMAGE_1, alt: "Hertfordshire extension example" },
      { src: IMAGE_2, alt: "Hertfordshire loft conversion example" },
      { src: IMAGE_5, alt: "Residential design support in Hertfordshire" },
    ],
    []
  );

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, [heroSlides.length]);

  function prevSlide() {
    setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  }

  function nextSlide() {
    setSlide((s) => (s + 1) % heroSlides.length);
  }

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hertfordshire – Planning and Building Regulations Packages</title>
        <meta
          name="description"
          content="WEDRAWPLANS provides architectural drawings in Hertfordshire for house extensions, loft conversions, refurbishments, and residential projects. Planning drawings and Building Regulations drawing packages with clear guidance and fast quotes."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Architectural Drawings in Hertfordshire | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Planning drawings and Building Regulations drawing packages across Hertfordshire. Extensions, loft conversions, refurbishments, and residential projects with a clear process and fast quotes."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJson) }} />
      </Head>

      <div className="min-h-screen bg-white">
        <AreaTopHeader />

        <main>
          <section className="relative">
            <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[620px]">
              <div className="absolute inset-0">
                {heroSlides.map((s, i) => (
                  <div
                    key={s.src + i}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`}
                  >
                    <FillImage src={s.src} alt={s.alt} eager={i === 0} />
                  </div>
                ))}
                <div className="absolute inset-0 bg-black/45" />
              </div>

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
                  <div className="max-w-3xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
                      Planning and Building Regulation Drawings for Hertfordshire and nearby areas
                    </p>
                    <h1 className="mt-3 text-[26px] font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-[36px] lg:text-[44px]">
                      Architectural Drawings in Hertfordshire
                    </h1>
                    <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                      Clear, council ready drawing packages for extensions, loft conversions, refurbishments, and residential
                      projects. If you want a fast quote, send your postcode and a short description of the works and we will
                      guide you to the right package.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={scrollToForm}
                        className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:bg-red-800"
                      >
                        Get a fast quote
                      </button>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <a
                          href={PHONE_LINK}
                          className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-[13px] font-semibold text-white backdrop-blur transition hover:bg-white/15"
                        >
                          Call {PHONE_DISPLAY}
                        </a>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-[13px] font-semibold text-white backdrop-blur transition hover:bg-white/15"
                        >
                          WhatsApp us
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                        <p className="text-[12px] font-semibold text-white">Planning drawings</p>
                        <p className="mt-1 text-[12px] text-white/80">
                          Existing and proposed plans, elevations, and site plans prepared for submission.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                        <p className="text-[12px] font-semibold text-white">Building Regulations</p>
                        <p className="mt-1 text-[12px] text-white/80">
                          Detailed drawing sets suitable for Building Control review and construction.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                        <p className="text-[12px] font-semibold text-white">Clear process</p>
                        <p className="mt-1 text-[12px] text-white/80">
                          Step by step support from first outline to final drawings and coordination.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous image"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next image"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                      >
                        ›
                      </button>
                      <div className="flex items-center gap-2">
                        {heroSlides.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Go to image ${i + 1}`}
                            onClick={() => setSlide(i)}
                            className={`h-2.5 w-2.5 rounded-full transition ${i === slide ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Hertfordshire" />

          <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">
                  Built for homeowners and residential projects
                </p>
                <h2 className="mt-2 text-[20px] font-semibold uppercase leading-snug tracking-[0.04em] text-gray-900 sm:text-[22px]">
                  A Hertfordshire focused drawing service that keeps things simple
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-700">
                  If you are planning an extension, loft conversion, refurbishment, or a residential scheme in Hertfordshire,
                  the fastest route to progress is a strong set of drawings that are clear, accurate, and ready for review. We
                  produce planning drawing packages and Building Regulations drawing packages, and we help you understand what
                  is needed at each stage so you can move forward without delays.
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-700">
                  Our approach is practical. We focus on the drawing detail that planning teams and Building Control teams
                  expect to see, and we present it in a clean layout that is easy to review. That means fewer back and forth
                  questions, clearer decisions, and a smoother next step into quotations and construction.
                </p>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">Quick quote checklist</h3>
                  <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-gray-700">
                    <li>• Your postcode and the town</li>
                    <li>• A short description of the works you want to do</li>
                    <li>• Any constraints you know about, such as conservation areas</li>
                    <li>• Photos or existing drawings if you have them</li>
                  </ul>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-black"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      WhatsApp message
                    </a>
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      Request a quote
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative h-[190px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:h-[220px]">
                  <FillImage src={IMAGE_1} alt="Hertfordshire extension drawing example" />
                </div>
                <div className="relative h-[190px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:h-[220px]">
                  <FillImage src={IMAGE_2} alt="Hertfordshire loft conversion drawing example" />
                </div>
                <div className="relative h-[190px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:h-[220px]">
                  <FillImage src={IMAGE_3} alt="Hertfordshire planning drawing set example" />
                </div>
                <div className="relative h-[190px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:h-[220px]">
                  <FillImage src={IMAGE_4} alt="Hertfordshire building regulations drawing example" />
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">Planning drawings</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                    Existing and proposed plans, elevations, and supporting drawings prepared to a clean presentation standard.
                    We help you pick the right level of detail based on your project.
                  </p>
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">
                    Building Regulations packages
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                    Detailed drawings and key notes that are suitable for Building Control review. This is the set that
                    contractors and consultants rely on for pricing and delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">
                    Residential project support
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                    From early outline options through to a coordinated set, we keep decisions clear and we focus on drawing
                    clarity so the next step is simple.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">Coverage across the county</p>
                <h2 className="mt-2 text-[20px] font-semibold uppercase leading-snug tracking-[0.04em] text-gray-900 sm:text-[22px]">
                  Areas we support across Hertfordshire
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-700">
                  Hertfordshire has a wide mix of property styles and neighbourhoods, from family homes that need more space to
                  period properties that need careful detailing. We can support projects across the county and we also cover
                  nearby London border areas where many homeowners need a clear planning and Building Regulations route.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-[12px] font-semibold text-gray-900">South and South East Hertfordshire</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                      Broxbourne, Cheshunt, Waltham Cross, Hoddesdon, Ware, Hertford, Potters Bar.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-[12px] font-semibold text-gray-900">West Hertfordshire</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                      Watford, Bushey, Rickmansworth, Chorleywood, Hemel Hempstead, Berkhamsted, Tring.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-[12px] font-semibold text-gray-900">St Albans and surrounding</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                      St Albans, Harpenden, Radlett, London Colney, Wheathampstead, Redbourn.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-[12px] font-semibold text-gray-900">Welwyn Hatfield and North</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                      Welwyn Garden City, Hatfield, Stevenage, Hitchin, Letchworth, Bishops Stortford.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">
                    Border areas and nearby London links
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                    If your home sits near the Hertfordshire and London boundary, you may find similar design needs and similar
                    pressure on space. Many homeowners compare options across nearby areas, so we keep guidance clear and we help
                    you choose a drawing package that supports planning and Building Regulations effectively.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="/areas/enfield"
                      className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 text-[12px] font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      Enfield
                    </a>
                    <a
                      href="/areas/barnet"
                      className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 text-[12px] font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      Barnet
                    </a>
                    <a
                      href="/areas/haringey"
                      className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 text-[12px] font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      Haringey
                    </a>
                    <a
                      href="/areas/camden"
                      className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 text-[12px] font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      Camden
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative h-[240px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:h-[320px] lg:h-[380px]">
                  <FillImage src={IMAGE_5} alt="Residential design support in Hertfordshire" />
                </div>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">Popular project types</p>
                  <h3 className="mt-2 text-[16px] font-semibold uppercase tracking-[0.04em] text-gray-900">
                    What we often draw in Hertfordshire
                  </h3>
                  <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-gray-700">
                    <li>• Rear extensions and kitchen family space upgrades</li>
                    <li>• Side extensions and wrap around extensions</li>
                    <li>• Loft conversions, dormers, and roof alterations</li>
                    <li>• Internal reconfiguration and refurbishment layouts</li>
                    <li>• Garage conversions and home office spaces</li>
                    <li>• Residential conversions and small development schemes</li>
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">
                    A clear process from first idea to ready drawings
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <p className="text-[12px] font-semibold text-gray-900">1. Outline and scope</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                        You share your postcode and goals. We advise the best drawing package and next steps.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <p className="text-[12px] font-semibold text-gray-900">2. Existing plans</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                        We build accurate existing drawings from survey data or available information.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <p className="text-[12px] font-semibold text-gray-900">3. Proposed design</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                        We develop a clear proposed scheme and produce the drawings in a clean layout.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <p className="text-[12px] font-semibold text-gray-900">4. Submission ready</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                        We finalise and provide the files for submission, then support the next step to Build Regs if needed.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-red-800"
                    >
                      Request a quote
                    </button>
                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">FAQs</p>
              <h2 className="mt-2 text-[20px] font-semibold uppercase leading-snug tracking-[0.04em] text-gray-900 sm:text-[22px]">
                Questions homeowners ask before starting
              </h2>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {faqItems.map((f) => (
                  <div key={f.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-900">{f.question}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-gray-700">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="hertfordshire-quote" className="bg-white scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">Get a fast quote</p>
                  <h2 className="mt-2 text-[20px] font-semibold uppercase leading-snug tracking-[0.04em] text-gray-900 sm:text-[22px]">
                    Tell us your postcode and what you want to build
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-gray-700">
                    Share your Hertfordshire postcode and a short description of the works. If you have photos or existing
                    drawings, include them. We will guide you to the right drawing package and confirm a quote with clear next
                    steps.
                  </p>

                  <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <p className="text-[12px] font-semibold text-gray-900">Prefer to speak first</p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={PHONE_LINK}
                        className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-black"
                      >
                        Call {PHONE_DISPLAY}
                      </a>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-100"
                      >
                        WhatsApp message
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[12px] font-semibold text-gray-900">Full name</label>
                      <input
                        name="name"
                        required
                        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-[14px] outline-none transition focus:border-gray-900"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="text-[12px] font-semibold text-gray-900">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-[14px] outline-none transition focus:border-gray-900"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-[12px] font-semibold text-gray-900">Phone</label>
                      <input
                        name="phone"
                        required
                        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-[14px] outline-none transition focus:border-gray-900"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="text-[12px] font-semibold text-gray-900">Postcode</label>
                      <input
                        name="postcode"
                        required
                        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-[14px] outline-none transition focus:border-gray-900"
                        placeholder="Your postcode"
                      />
                    </div>

                    <div>
                      <label className="text-[12px] font-semibold text-gray-900">Service</label>
                      <select
                        name="service"
                        required
                        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-[14px] outline-none transition focus:border-gray-900"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="House extension plans">House extension plans</option>
                        <option value="Loft conversion plans">Loft conversion plans</option>
                        <option value="Planning drawings">Planning drawings</option>
                        <option value="Building regulations drawings">Building regulations drawings</option>
                        <option value="Refurbishment and internal alterations">Refurbishment and internal alterations</option>
                        <option value="Conversion or development">Conversion or development</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[12px] font-semibold text-gray-900">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-[14px] outline-none transition focus:border-gray-900"
                        placeholder="Tell us what you want to do. Include key sizes or goals if you know them."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-red-700 px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:bg-red-800"
                    >
                      Send request
                    </button>

                    <p className="text-[12px] leading-relaxed text-gray-600">
                      By submitting this form, you agree that we can contact you about your drawing request. We only use your
                      details for this enquiry.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
                  <div className="lg:col-span-2">
                    <h2 className="text-[18px] font-semibold uppercase tracking-[0.04em] text-gray-900">
                      Architectural drawings for Hertfordshire projects
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-700">
                      If you are ready to start, send your postcode and a short description of the works. We will advise the
                      best package and provide a clear quote with next steps.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-black"
                    >
                      Get a quote
                    </button>
                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-[13px] font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
