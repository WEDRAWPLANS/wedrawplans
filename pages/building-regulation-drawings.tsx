import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import SmartPlanningAssistant from "../components/SmartPlanningAssistant";
import { submitBoroughLead } from "../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/D3KId64vHtHSKPALr";
const PHONE_DISPLAY = "020 3654 8508";
const PHONE_TEL = "+442036548508";
const EMAIL = "info@wedrawplans.com";
const PAGE_URL = "https://www.wedrawplans.co.uk/building-regulation-drawings";
const PAGE_TITLE =
  "Building Regulation Drawings London | Building Control Drawings & Technical Packs | WEDRAWPLANS";
const PAGE_DESCRIPTION =
  "Building Regulation drawings in London for extensions, loft conversions, new builds, conversions and commercial projects. Detailed building control drawing packs, construction details, structural coordination and technical drawing packages prepared for Building Control review, pricing and construction.";
const HERO_IMAGE = "/images/building-regulations-hero.jpg";
const SECOND_IMAGE = "/images/building-regulations-detail.jpg";
const LOGO_IMAGE = "/images/wedrawplans-logo.png";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20Building%20Regulation%20drawings.";

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  projectType: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  projectType: "Building Regulation Drawings",
  message: "",
};

function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const serviceCards = [
  {
    title: "Extension Building Regulation drawings",
    body: "Technical packs for rear extensions, side returns, wrap around extensions, internal openings and structural alterations.",
  },
  {
    title: "Loft conversion technical drawings",
    body: "Dormers, mansards, hip to gable layouts, stair positions, roof build ups, insulation notes and fire safety coordination.",
  },
  {
    title: "New build Building Control packs",
    body: "Detailed technical information for small new build residential projects, construction sections and coordinated drawing packages.",
  },
  {
    title: "Conversion and commercial packages",
    body: "Technical drawings for change of use, flat conversions, mixed use alterations, commercial fit outs and structural reconfiguration.",
  },
];

const includedItems = [
  "General arrangement plans for the approved or proposed technical layout",
  "Existing and proposed plans where needed for clear scope comparison",
  "Sections showing wall, floor, roof, ceiling and opening construction",
  "Wall, floor and roof build ups with insulation and practical construction notes",
  "Structural engineer coordination including beams, padstones and opening references",
  "Fire safety, escape, smoke detection and protection notes relevant to the project",
  "Ventilation, drainage and services coordination notes where required",
  "Stair, guarding, headroom and access information where relevant",
  "Thermal, sound, moisture and condensation related construction notes",
  "Builder friendly information for pricing, Building Control review and site delivery",
];

const projectTypes = [
  {
    title: "House extensions",
    text: "Rear extensions, kitchen extensions, side returns and wrap around extensions where the approved design needs a clear technical construction package.",
  },
  {
    title: "Loft conversions",
    text: "Dormers, mansards, hip to gable roofs, stair layouts, roof structure changes, insulation build ups and fire safety information.",
  },
  {
    title: "Internal structural works",
    text: "Removed walls, new steel beams, enlarged openings, padstone coordination and drawings for altered internal layouts.",
  },
  {
    title: "New build houses",
    text: "Technical drawing packs for small residential new build projects, coordinated with structural and consultant information.",
  },
  {
    title: "Flat conversions",
    text: "Conversion drawings for self contained flats, internal layouts, fire separation, sound requirements and technical coordination.",
  },
  {
    title: "Commercial works",
    text: "Technical drawing support for fit outs, mixed use buildings, change of use projects and commercial building alterations.",
  },
];

const processSteps = [
  {
    title: "Step 1",
    text: "Send the approved drawings, site address, photos and a short description of what needs to be built.",
  },
  {
    title: "Step 2",
    text: "We review the technical scope and confirm what information is needed for Building Control and construction.",
  },
  {
    title: "Step 3",
    text: "We prepare the Building Regulation drawing pack with sections, build ups, notes and coordinated details.",
  },
  {
    title: "Step 4",
    text: "The pack can then support Building Control review, builder pricing and practical site coordination.",
  },
];

const relatedServices = [
  {
    href: "/extension-plans",
    title: "Extension drawings",
    text: "Planning and technical drawing support for rear extensions, side returns and wrap around extensions.",
  },
  {
    href: "/loft-conversion-plans",
    title: "Loft conversion drawings",
    text: "Loft drawings for dormers, mansards, hip to gable layouts and roof conversion schemes.",
  },
  {
    href: "/new-build-plans",
    title: "New build drawings",
    text: "Planning and technical drawing packages for new houses and small residential developments.",
  },
  {
    href: "/commercial/change-of-use",
    title: "Change of use drawings",
    text: "Commercial drawing support for change of use, mixed use, fit out and conversion projects.",
  },
];

const boroughLinks = [
  "Barnet",
  "Bromley",
  "Camden",
  "Croydon",
  "Ealing",
  "Harrow",
  "Lambeth",
  "Merton",
  "Richmond",
  "Southwark",
  "Wandsworth",
  "Westminster",
];

function boroughHref(name: string) {
  return `/areas/${name.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function BuildingRegulationDrawingsPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Building Regulation drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Building Regulation drawings are technical construction drawings prepared for Building Control review and the build stage. They usually include plans, sections, construction notes, build ups, structural coordination, insulation information, fire safety considerations and other details needed to show how the project is intended to comply with current regulations.",
          },
        },
        {
          "@type": "Question",
          name: "When do I need Building Regulation drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Building Regulation drawings are commonly required after planning permission or lawful development approval, and before construction starts. They are needed for extensions, loft conversions, new builds, structural alterations, conversions and many commercial projects where Building Control approval is required.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS prepare Building Regulation drawings if another designer prepared the planning drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WEDRAWPLANS can review existing planning drawings or approved drawings and prepare a separate Building Regulation drawing pack, subject to the quality and completeness of the starting information.",
          },
        },
        {
          "@type": "Question",
          name: "Do Building Regulation drawings include structural engineer coordination?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many projects require structural engineer input, and the Building Regulation package often needs to be coordinated with structural calculations, beam layouts, padstones, connection details and other structural requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS prepare Building Regulation drawings for residential and commercial projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WEDRAWPLANS prepares Building Regulation drawing packages for house extensions, loft conversions, new builds, conversions, mixed use projects and commercial developments across London and surrounding areas.",
          },
        },
      ],
    }),
    []
  );

  const serviceSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Building Regulation Drawings London",
      provider: {
        "@type": "LocalBusiness",
        name: "WEDRAWPLANS",
        url: "https://www.wedrawplans.co.uk",
        telephone: PHONE_TEL,
        email: EMAIL,
        image: LOGO_IMAGE,
        sameAs: [GBP_LINK, "https://twitter.com/WEDRAWPLANS"],
      },
      areaServed: [
        {
          "@type": "City",
          name: "London",
        },
        {
          "@type": "AdministrativeArea",
          name: "Greater London",
        },
      ],
      serviceType:
        "Building Regulation drawings, Building Control drawings, technical drawing packs and structural coordination for residential and commercial projects",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
    }),
    []
  );

  const breadcrumbSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wedrawplans.co.uk",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Building Regulation Drawings",
          item: PAGE_URL,
        },
      ],
    }),
    []
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    trackEvent("generate_lead", {
      event_category: "technical_enquiry",
      event_label: "building_regulations_page_submit_attempt",
      service: "Building Regulation Drawings",
      page_path: "/building-regulation-drawings",
      source: "building_regulations_page",
    });

    try {
      await submitBoroughLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        postcode: form.postcode,
        service: form.projectType,
        borough: "London",
        message:
          form.message ||
          "Customer requested a quote for Building Regulation drawings.",
        raw: {
          pageType: "technical",
          pageSlug: "building-regulation-drawings",
          pageUrl: PAGE_URL,
          projectType: form.projectType,
        },
      });

      trackEvent("generate_lead_success", {
        event_category: "technical_enquiry",
        event_label: "building_regulations_page_submit_success",
        service: "Building Regulation Drawings",
        page_path: "/building-regulation-drawings",
        source: "building_regulations_page",
      });

      setSubmitState({
        type: "success",
        message:
          "Thank you. Your enquiry has been sent successfully. We will review the project and get back to you shortly.",
      });
      setForm(initialFormState);
    } catch (error) {
      trackEvent("generate_lead_error", {
        event_category: "technical_enquiry",
        event_label: "building_regulations_page_submit_error",
        service: "Building Regulation Drawings",
        page_path: "/building-regulation-drawings",
        source: "building_regulations_page",
      });

      setSubmitState({
        type: "error",
        message:
          "There was a problem sending your request. Please call or WhatsApp us now on 020 3654 8508.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="building regulation drawings London, building control drawings London, building regs drawings London, technical drawing packs London, construction drawings London, extension building regulation drawings, loft conversion building regs drawings, new build building regulation drawings, structural engineer coordination London, building control plans London"
        />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={HERO_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={HERO_IMAGE} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 pb-3 pt-4 lg:px-6 lg:pt-5">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src={LOGO_IMAGE}
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain lg:h-28"
                />
              </Link>

              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Architectural Drawing Consultants
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-slate-900">
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
                <Link href="/extension-plans" className="hover:text-black">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion-plans" className="hover:text-black">
                  Loft Drawings
                </Link>
                <Link href="/new-build-plans" className="hover:text-black">
                  New Build Drawings
                </Link>
                <Link
                  href="/building-regulation-drawings"
                  className="font-semibold text-red-700 hover:text-red-800"
                >
                  Building Regulations
                </Link>
                <Link href="/areas" className="hover:text-black">
                  Areas We Cover
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#20243b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#161a2f]"
                  onClick={() =>
                    trackEvent("phone_click", {
                      event_category: "technical_cta",
                      event_label: "header_phone_click",
                      page_path: "/building-regulation-drawings",
                    })
                  }
                >
                  <span>📞</span>
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
                  onClick={() =>
                    trackEvent("whatsapp_click", {
                      event_category: "technical_cta",
                      event_label: "header_whatsapp_click",
                      page_path: "/building-regulation-drawings",
                    })
                  }
                >
                  <span>WhatsApp us now</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.04fr,0.96fr] lg:items-start">
                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                      Building Control technical drawing packs
                    </p>

                    <h1 className="mt-2 text-[24px] font-black uppercase leading-snug tracking-[0.10em] text-slate-950 sm:text-[31px] lg:text-[35px]">
                      Building Regulation Drawings in London for Extensions, Lofts, New Builds and Conversions
                    </h1>

                    <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] text-slate-800">
                      Technical plans • Construction sections • Structural coordination • Initial survey within 48 hours
                    </p>
                  </div>

                  <div className="overflow-hidden border border-slate-200 bg-white shadow-md">
                    <img
                      src={HERO_IMAGE}
                      alt="Building Regulation drawings and construction detail package for London projects"
                      className="h-[260px] w-full object-cover sm:h-[330px]"
                    />
                  </div>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS prepares Building Regulation drawings and technical drawing packs for homeowners,
                    developers, landlords and commercial clients across London and surrounding M25 areas. We help
                    turn approved planning drawings or agreed design layouts into practical construction information
                    suitable for Building Control review, builder pricing and site coordination.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    The technical stage needs more than basic plans. A strong Building Regulation package should explain
                    wall, floor and roof build ups, structural openings, insulation, fire protection, ventilation, drainage,
                    junctions and other practical details that affect how the project is built.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    Whether you are preparing a rear extension, loft conversion, new build house, conversion to flats,
                    commercial alteration or internal structural change, we can review the scope and prepare a clear
                    Building Regulation drawing package for the next stage.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <TrustPill
                      title="Clear technical scope"
                      body="We confirm the drawings and details needed before work begins."
                    />
                    <TrustPill
                      title="Buildable information"
                      body="Plans, sections and notes prepared with construction clarity."
                    />
                    <TrustPill
                      title="London wide"
                      body="Building Regulation drawing support across London and M25 areas."
                    />
                  </div>

                  <ul className="space-y-1 text-[13px] text-slate-800">
                    <li>• Extension Building Regulation drawings and Building Control packs</li>
                    <li>• Loft conversion technical drawings, stair layouts and roof build ups</li>
                    <li>• New build, conversion, commercial and mixed use technical packages</li>
                    <li>• Structural engineer coordination for beams, padstones and openings</li>
                    <li>• Construction sections, insulation notes and practical build details</li>
                    <li>• Support for London borough projects and surrounding M25 locations</li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="#quote-form"
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4]"
                      onClick={() =>
                        trackEvent("cta_click", {
                          event_category: "technical_cta",
                          event_label: "hero_quote_click",
                          page_path: "/building-regulation-drawings",
                        })
                      }
                    >
                      Request technical drawing fees
                    </a>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>💬</span>
                      <span>Send drawings on WhatsApp</span>
                    </a>

                    <a
                      href={GBP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>⭐</span>
                      <span>Google Profile</span>
                    </a>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                      Simple route to your technical pack
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-3 text-[12px] text-slate-700 sm:grid-cols-3">
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 1</div>
                        <div>Send project details and any approved drawings</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 2</div>
                        <div>We review the technical scope and information required</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 3</div>
                        <div>We prepare the Building Regulation drawing pack</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="quote-form" className="space-y-6">
                  <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Building Regulation drawing enquiry
                    </h2>
                    <p className="mt-3 text-slate-700">
                      Tell us briefly what has planning consent and what needs a
                      technical drawing pack. We will review the scope and come back
                      with a clear quote.
                    </p>

                    <form
                      className="mt-6 space-y-4"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-900"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium text-slate-900"
                          >
                            Telephone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) =>
                              setForm((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-slate-900"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) =>
                              setForm((prev) => ({ ...prev, email: e.target.value }))
                            }
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="postcode"
                          className="mb-2 block text-sm font-medium text-slate-900"
                        >
                          Site postcode
                        </label>
                        <input
                          id="postcode"
                          type="text"
                          value={form.postcode}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, postcode: e.target.value }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="projectType"
                          className="mb-2 block text-sm font-medium text-slate-900"
                        >
                          Project type
                        </label>
                        <select
                          id="projectType"
                          value={form.projectType}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              projectType: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                        >
                          <option>Building Regulation Drawings</option>
                          <option>Extension Building Regulation Drawings</option>
                          <option>Loft Conversion Building Regulation Drawings</option>
                          <option>New Build Building Regulation Drawings</option>
                          <option>Conversion Building Regulation Drawings</option>
                          <option>Commercial Building Regulation Drawings</option>
                          <option>Structural Coordination Package</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-slate-900"
                        >
                          Brief details and planning status
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, message: e.target.value }))
                          }
                          placeholder="For example: rear extension has planning approved, technical pack needed for building control submission, structural engineer already instructed, steel and insulation coordination required."
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? "Sending..." : "Get my Building Reg quote"}
                      </button>

                      {submitState.type !== "idle" ? (
                        <div
                          className={`rounded-xl p-4 text-sm ${
                            submitState.type === "success"
                              ? "bg-green-50 text-green-800 ring-1 ring-green-200"
                              : "bg-red-50 text-red-800 ring-1 ring-red-200"
                          }`}
                        >
                          {submitState.message}
                        </div>
                      ) : null}

                      <p className="text-xs leading-5 text-slate-500">
                        WEDRAWPLANS focuses on practical, buildable technical details
                        that align with structural design and building control expectations.
                      </p>
                    </form>
                  </aside>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <img
                      src={SECOND_IMAGE}
                      alt="Detailed Building Regulation construction sections and technical drawing notes"
                      className="h-[250px] w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Drawings prepared for practical construction clarity
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        A technical pack should help Building Control, structural engineers and builders understand
                        how the project is intended to be constructed, not only what the finished design looks like.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-8">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="flex flex-wrap items-center justify-center gap-2 text-[12px] font-semibold">
                <Link
                  href="/extension-plans"
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 hover:bg-[#64b7c4] hover:text-white"
                >
                  Extension drawings
                </Link>
                <Link
                  href="/loft-conversion-plans"
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 hover:bg-[#64b7c4] hover:text-white"
                >
                  Loft conversion drawings
                </Link>
                <Link
                  href="/new-build-plans"
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 hover:bg-[#64b7c4] hover:text-white"
                >
                  New build drawings
                </Link>
                <Link
                  href="/commercial/change-of-use"
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 hover:bg-[#64b7c4] hover:text-white"
                >
                  Change of use drawings
                </Link>
                <Link
                  href="/areas"
                  className="rounded-full bg-[#20243b] px-4 py-2 text-white hover:bg-black"
                >
                  London borough coverage
                </Link>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    From planning approval to technical package
                  </p>
                  <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                    Building Regulation drawings prepared for approval, pricing and the build stage
                  </h2>
                  <p className="mt-5 text-[14px] leading-7 text-slate-700">
                    Planning drawings usually show the approved appearance, layout and scale of a proposal.
                    Building Regulation drawings go further by explaining how the project is intended to be
                    constructed. They provide sections, build ups, construction notes and technical coordination
                    so the design can be reviewed and priced with more confidence.
                  </p>
                  <p className="mt-4 text-[14px] leading-7 text-slate-700">
                    This stage is especially important where there are structural openings, steel beams, flat roofs,
                    loft floors, insulation upgrades, drainage changes, fire safety requirements or complex junctions.
                    A good technical pack can reduce confusion between drawings, calculations, builder pricing and
                    Building Control comments.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {serviceCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-[18px] font-black leading-snug text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-[13px] leading-7 text-slate-700">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <img
                    src={SECOND_IMAGE}
                    alt="Building Regulation details, sections and construction notes"
                    className="h-[330px] w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    What the technical pack can include
                  </p>
                  <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                    Plans, sections, build ups and notes for Building Control and construction
                  </h2>
                  <p className="mt-5 text-[14px] leading-7 text-slate-700">
                    The exact content depends on the project, but most Building Regulation packages need a clear
                    set of coordinated drawings and written notes. The pack should make the construction approach
                    understandable to Building Control, the structural engineer, contractors and the client.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {includedItems.slice(0, 6).map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-4 text-[13px] leading-6 text-slate-700"
                      >
                        <span className="mr-2 font-black text-red-700">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {includedItems.slice(6).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-4 text-[13px] leading-6 text-slate-700"
                  >
                    <span className="mr-2 font-black text-red-700">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Projects we regularly support
                </p>
                <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                  Building Regulation drawings for residential, commercial and mixed use projects
                </h2>
                <p className="mt-5 text-[14px] leading-7 text-slate-700">
                  WEDRAWPLANS prepares technical drawing packages for a wide range of project types across London.
                  The package is adjusted to the actual scope, site conditions and construction requirements.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projectTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-[18px] font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[13px] leading-7 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    Technical coordination matters
                  </p>
                  <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                    Structural engineer coordination is central to a good Building Regulation pack
                  </h2>
                  <p className="mt-5 text-[14px] leading-7 text-slate-700">
                    Many Building Regulation packages need to align closely with structural engineer information.
                    This may include steel beams, padstones, load paths, new openings, roof alterations, floor
                    strengthening and connection details. The drawings are most useful when architectural and
                    structural information are coordinated clearly.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Beam positions and structural opening layouts",
                    "Padstone references and support logic",
                    "Floor and roof build up coordination",
                    "Structural calculations aligned with drawings",
                    "Sections through key openings and junctions",
                    "Clearer information for builders and Building Control",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-5 text-[13px] font-semibold leading-6 text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    How we move the technical stage forward
                  </p>
                  <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                    Clear process from review to Building Regulation drawing package
                  </h2>
                  <p className="mt-5 text-[14px] leading-7 text-slate-700">
                    Every project starts with a review of the available information. If planning drawings already exist,
                    we check whether they are suitable to build from or whether further coordination is needed. We then
                    agree the technical drawing scope and prepare the package in a structured way.
                  </p>
                </div>

                <div className="space-y-3">
                  {processSteps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="text-[12px] font-black uppercase tracking-[0.18em] text-red-700">
                        {step.title}
                      </div>
                      <div className="mt-2 text-[13px] leading-6 text-slate-700">
                        {step.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    Related WEDRAWPLANS services
                  </p>
                  <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                    Connect the technical package with the wider project route
                  </h2>
                  <p className="mt-5 text-[14px] leading-7 text-slate-700">
                    Many clients reach the technical stage after a planning application, lawful development certificate
                    or design review. These related services help connect Building Regulation drawings with the wider
                    WEDRAWPLANS drawing support structure.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-3xl border border-slate-200 bg-[#f8f4f0] p-6 shadow-sm hover:bg-white hover:shadow-md"
                    >
                      <h3 className="text-[18px] font-black text-slate-950">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-[13px] leading-7 text-slate-700">
                        {service.text}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#20243b] py-12 text-white">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
                    London wide technical drawing support
                  </p>
                  <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight sm:text-[32px]">
                    Building Regulation drawing services across London and surrounding areas
                  </h2>
                  <p className="mt-5 text-[14px] leading-7 text-slate-200">
                    WEDRAWPLANS supports projects across London boroughs and selected surrounding M25 locations.
                    If your project is ready for Building Control stage, send the address, drawings and project details
                    and we will review the technical route.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#quote-form"
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4]"
                    >
                      Request technical drawing fees
                    </a>
                    <Link
                      href="/areas"
                      className="rounded-full border border-slate-500 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-slate-900"
                    >
                      View areas we cover
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {boroughLinks.map((borough) => (
                    <Link
                      key={borough}
                      href={boroughHref(borough)}
                      className="rounded-2xl border border-slate-600 bg-white/5 p-4 text-[13px] font-semibold text-slate-100 hover:border-cyan-300 hover:bg-white/10"
                    >
                      {borough}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Building Regulation drawing questions
                </p>
                <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                  Frequently asked questions
                </h2>
              </div>

              <div className="mt-8 grid gap-4">
                <FaqItem
                  question="Do I need planning approval before Building Regulation drawings?"
                  answer="In many cases, the planning route comes first where permission or lawful development confirmation is required. Once the planning position is clear, the technical package can be prepared for Building Control and construction. Some internal alterations may not need planning but can still need Building Regulation approval."
                />
                <FaqItem
                  question="Can you prepare Building Regulation drawings if another designer prepared the planning drawings?"
                  answer="Yes. We can review the approved planning drawings or existing design information and prepare a separate technical package, subject to the quality and level of information available."
                />
                <FaqItem
                  question="Are Building Regulation drawings useful for builders?"
                  answer="Yes. A good technical pack should support both Building Control review and construction pricing. It gives builders clearer information on build ups, structure, sections, junctions and key details."
                />
                <FaqItem
                  question="Can you coordinate with a structural engineer?"
                  answer="Yes. Many projects require structural calculations, beams, padstones and structural notes. We can coordinate the architectural technical drawings with structural engineer information where required."
                />
                <FaqItem
                  question="How quickly can you start?"
                  answer="We can usually review the project quickly and arrange an initial survey within 48 hours in many cases, subject to access and availability. The drawing programme depends on the project size and information available."
                />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md lg:p-8">
                <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                      Ready for Building Control stage
                    </p>
                    <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-[32px]">
                      Send the project details and we will review the technical drawing scope
                    </h2>
                    <p className="mt-4 text-[14px] leading-7 text-slate-700">
                      Share the address, drawings, photos and current project stage. We will review what is available
                      and confirm the recommended next step for a Building Regulation drawing package.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="#quote-form"
                      className="rounded-full bg-[#64b7c4] px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4]"
                    >
                      Get my Building Reg quote
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-[13px] font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      WhatsApp WEDRAWPLANS
                    </a>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-[13px] font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
                <div>
                  <h2 className="text-[20px] font-black tracking-tight text-slate-950">
                    Check our Google Business Profile
                  </h2>
                  <p className="mt-2 text-[13px] leading-6 text-slate-700">
                    View the WEDRAWPLANS business profile on Google for company information before instructing
                    planning or technical drawing work.
                  </p>
                </div>

                <a
                  href={GBP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#20243b] px-6 py-3 text-[13px] font-semibold text-white hover:bg-black"
                  onClick={() =>
                    trackEvent("gbp_click", {
                      event_category: "technical_cta",
                      event_label: "bottom_gbp_click",
                      page_path: "/building-regulation-drawings",
                    })
                  }
                >
                  View Google Business Profile
                </a>
              </div>
            </div>
          </section>

          <footer className="bg-[#20243b] py-10 text-white">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
                <div>
                  <img
                    src={LOGO_IMAGE}
                    alt="WEDRAWPLANS"
                    className="h-20 w-auto object-contain"
                  />
                  <p className="mt-4 max-w-2xl text-[13px] leading-6 text-slate-200">
                    WEDRAWPLANS prepares planning drawings, Building Regulation drawings and technical drawing
                    packages for residential and commercial projects across London and surrounding M25 areas.
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-[13px] md:items-end">
                  <a href={`tel:${PHONE_TEL}`} className="font-semibold hover:text-cyan-200">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="font-semibold hover:text-cyan-200">
                    {EMAIL}
                  </a>
                  <a
                    href={GBP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-cyan-200"
                  >
                    Google Business Profile
                  </a>
                  <p className="text-[11px] text-slate-400">
                    © {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>

          <SmartPlanningAssistant boroughName="London" />
        </main>
      </div>
    </>
  );
}

function TrustPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900">
        {title}
      </div>
      <div className="mt-2 text-[12px] leading-5 text-slate-600">{body}</div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-[#f8f4f0] p-6">
      <h3 className="text-[17px] font-black leading-snug text-slate-950">
        {question}
      </h3>
      <p className="mt-3 text-[13px] leading-7 text-slate-700">{answer}</p>
    </div>
  );
}
