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
  "Building Regulation drawings in London for extensions, loft conversions, new builds, conversions and commercial projects. Detailed building control drawing packs, construction details, structural coordination and technical drawing packages prepared for approval and build stage.";
const HERO_IMAGE = "/images/building-regulations-hero.jpg";
const SECOND_IMAGE = "/images/building-regulations-detail.jpg";
const LOGO_IMAGE = "/images/wedrawplans-logo.png";

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

const navLinks = [
  { href: "/extension-plans", label: "Extensions" },
  { href: "/loft-conversion-plans", label: "Lofts" },
  { href: "/new-build-plans", label: "New Builds" },
  { href: "/commercial/change-of-use", label: "Commercial" },
  { href: "/areas", label: "Areas" },
];

const quickServices = [
  {
    href: "/extension-plans",
    title: "Extension drawings",
    text: "Planning and Building Regulation drawing support for rear, side return and wrap around extensions.",
  },
  {
    href: "/loft-conversion-plans",
    title: "Loft conversion drawings",
    text: "Technical drawing support for dormers, mansards, hip to gable lofts and roof alterations.",
  },
  {
    href: "/new-build-plans",
    title: "New build drawings",
    text: "Planning and technical drawing packages for new houses and small residential schemes.",
  },
  {
    href: "/commercial/change-of-use",
    title: "Change of use drawings",
    text: "Commercial and mixed use drawing support for change of use, fit out and conversion projects.",
  },
];

const technicalPackItems = [
  "Existing and proposed technical plans where required",
  "Detailed proposed floor plans and roof information",
  "Sections showing wall, floor and roof build ups",
  "Construction notes for Building Control review",
  "Insulation, thermal and condensation related notes",
  "Fire safety, escape and protection notes relevant to the scope",
  "Ventilation, drainage and services coordination where applicable",
  "Structural engineer coordination, beam references and opening notes",
  "Junction information for walls, roofs, floors and structural openings",
  "Technical drawing information suitable for pricing and construction coordination",
];

const projectTypes = [
  {
    title: "House extensions",
    text: "Rear extensions, side returns, wrap around extensions, kitchen extensions and larger internal alterations that need technical build information.",
  },
  {
    title: "Loft conversions",
    text: "Dormers, mansards, hip to gable conversions, stairs, headroom checks, roof structure coordination and fire escape information.",
  },
  {
    title: "New builds",
    text: "Technical drawing packages for new houses and small developments, coordinated with structural and consultant information.",
  },
  {
    title: "Conversions",
    text: "Flat conversions, mixed use changes, internal reconfiguration and structural alteration projects requiring Building Control information.",
  },
  {
    title: "Commercial works",
    text: "Change of use, shop fit out, office alteration, restaurant, mixed use and small commercial technical drawing packages.",
  },
  {
    title: "Structural alterations",
    text: "New openings, steel beams, padstones, removed walls, roof changes and technical coordination with structural calculations.",
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
            text: "Building Regulation drawings are technical construction drawings prepared for building control approval and for the build stage. They usually include plans, sections, notes, build ups, structural coordination, insulation information, fire safety considerations and other construction details needed to show how the project is intended to comply with current regulations.",
          },
        },
        {
          "@type": "Question",
          name: "When do I need Building Regulation drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Building Regulation drawings are commonly required after planning permission or lawful development approval, and before construction starts. They are needed for extensions, loft conversions, new builds, structural alterations, conversions and many commercial projects where building control approval is required.",
          },
        },
        {
          "@type": "Question",
          name: "Do Building Regulation drawings include structural engineer coordination?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many projects require structural engineer input, and the Building Regulation package often needs to be coordinated with structural calculations, beam layouts, padstones, connection details and other structural requirements so the final technical pack is suitable for approval and construction.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS prepare Building Regulation drawings for both residential and commercial projects?",
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
        "Building Regulation drawings, building control drawings, technical drawing packs and structural coordination for residential and commercial projects",
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
      event_category: "technical_lead",
      event_label: "building_regulations_page_submit_attempt",
      service: "Building Regulation Drawings",
      page_path: "/building-regulation-drawings",
      lead_source: "building_regulations_page",
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
        event_category: "technical_lead",
        event_label: "building_regulations_page_submit_success",
        service: "Building Regulation Drawings",
        page_path: "/building-regulation-drawings",
        lead_source: "building_regulations_page",
      });

      setSubmitState({
        type: "success",
        message:
          "Thank you. Your enquiry has been sent successfully. We will review the project and get back to you shortly.",
      });
      setForm(initialFormState);
    } catch (error) {
      trackEvent("generate_lead_error", {
        event_category: "technical_lead",
        event_label: "building_regulations_page_submit_error",
        service: "Building Regulation Drawings",
        page_path: "/building-regulation-drawings",
        lead_source: "building_regulations_page",
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
          content="building regulation drawings London, building control drawings London, building regs drawings London, technical drawing packs London, construction drawings London, extension building regulation drawings, loft conversion building regs drawings, new build building regulation drawings, structural engineer coordination London"
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

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3" aria-label="WEDRAWPLANS home">
              <img
                src={LOGO_IMAGE}
                alt="WEDRAWPLANS logo"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-red-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-red-700 hover:text-red-700 sm:inline-flex"
                onClick={() =>
                  trackEvent("phone_click", {
                    event_category: "technical_cta",
                    event_label: "header_phone_click",
                    page_path: "/building-regulation-drawings",
                  })
                }
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20Building%20Regulation%20drawings."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-600"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    event_category: "technical_cta",
                    event_label: "header_whatsapp_click",
                    page_path: "/building-regulation-drawings",
                  })
                }
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.10),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_34%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div>
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-red-700 ring-1 ring-red-100">
                    Building Control Technical Packs
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-700 ring-1 ring-slate-200">
                    London and M25
                  </span>
                </div>

                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Building Regulation Drawings in London
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
                  Detailed technical drawing packs for extensions, loft conversions,
                  new builds, conversions and commercial projects. WEDRAWPLANS
                  prepares Building Regulation drawings for Building Control review,
                  contractor pricing and the construction stage.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Technical plans, sections and build ups",
                    "Structural engineer coordination",
                    "Building Control submission support",
                    "Residential and commercial drawing packs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm font-bold text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-700/20 transition hover:bg-red-800"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_category: "technical_cta",
                        event_label: "hero_get_quote",
                        page_path: "/building-regulation-drawings",
                      })
                    }
                  >
                    Get my Building Reg quote
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-red-700 hover:text-red-700"
                    onClick={() =>
                      trackEvent("phone_click", {
                        event_category: "technical_cta",
                        event_label: "hero_phone_click",
                        page_path: "/building-regulation-drawings",
                      })
                    }
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                    Technical stage clarity
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    Planning drawings show the approved design. Building Regulation
                    drawings explain how the project is intended to be built, with
                    clear construction notes, sections, build ups and coordination
                    for approval and site delivery.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
                <h2 className="text-2xl font-bold tracking-tight">
                  Building Regulation drawing enquiry
                </h2>
                <p className="mt-3 text-slate-700">
                  Tell us briefly what has planning consent and what needs a
                  technical drawing pack. We will review the scope and come back
                  with a clear quote.
                </p>

                <form
                  id="quote-form"
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
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 text-sm font-bold">
              {quickServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-red-50 hover:text-red-700"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/areas"
                className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-black"
              >
                London borough coverage
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">
                  From planning approval to technical pack
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Building Regulation drawings prepared for approval, pricing and construction coordination
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  A Building Regulation package is where the design becomes a
                  technical construction document. Planning drawings usually show
                  the approved appearance and layout. Building Regulation drawings
                  go further by setting out how the work is intended to be built,
                  how key elements meet, and how the scheme is expected to satisfy
                  Building Control requirements.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  WEDRAWPLANS prepares technical drawing packs for London projects
                  where clients need clear information for Building Control,
                  structural coordination, contractor pricing and site delivery.
                  The aim is to provide a strong, practical and well organised
                  drawing set that helps move the project from approval stage into
                  the build stage.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src={SECOND_IMAGE}
                  alt="Detailed Building Regulation construction drawings and technical details"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">
                Technical drawing content
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What is usually included in a Building Regulation drawing pack
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                The exact content depends on the project scope, existing building
                and structural requirements. A strong technical pack usually
                combines coordinated plans, sections, notes and construction
                details so Building Control and the wider project team can
                understand how the work is intended to be carried out.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {technicalPackItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
                >
                  <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-sm font-black text-red-700">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src={HERO_IMAGE}
                  alt="Building Regulation project delivery and construction drawing package"
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">
                  Why technical coordination matters
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Structural engineering coordination is central to a good Building Reg pack
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  Many projects need to align closely with structural engineer
                  information. This may include steel beams, padstones, new
                  openings, roof alterations, floor strengthening, connection
                  details and other structural elements. The technical drawing
                  pack works best when the architectural drawings and structural
                  design are clearly coordinated.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Beam positions and opening layouts",
                    "Padstone and support references",
                    "Floor and roof structure changes",
                    "Junction details around structural work",
                    "Builder friendly technical clarity",
                    "Clearer Building Control submission",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-bold text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">
                Project types covered
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Building Regulation drawings for residential, commercial and mixed use work
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                We prepare technical drawing packages for a wide range of London
                projects, from domestic extensions and loft conversions through
                to commercial alterations, conversions and small developments.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">
                  Related WEDRAWPLANS services
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Connect the technical package with the rest of the project
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  Clients often need Building Regulation drawings after planning,
                  permitted development, lawful development or a design route has
                  been agreed. These related pages help connect the technical
                  stage with the wider WEDRAWPLANS service structure.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {quickServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-red-200 hover:bg-red-50 hover:shadow-md"
                  >
                    <h3 className="text-lg font-black text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {service.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
                  London borough coverage
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Building Regulation drawing support across London and surrounding areas
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  WEDRAWPLANS supports homeowners, developers, landlords and
                  commercial clients across London. If your project has reached
                  technical stage, we can review the available information and
                  advise what is needed for a clear Building Regulation package.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-6 py-4 text-base font-bold text-white transition hover:bg-cyan-400"
                  >
                    Request a technical drawing quote
                  </a>
                  <Link
                    href="/areas"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 px-6 py-4 text-base font-bold text-white transition hover:border-slate-400 hover:bg-slate-900"
                  >
                    View London areas
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {boroughLinks.map((borough) => (
                  <Link
                    key={borough}
                    href={boroughHref(borough)}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-white"
                  >
                    {borough}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Building Regulation drawing questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">
                  Do I need planning approval before Building Regulation drawings?
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  In many cases the planning route comes first where it is
                  required. Once the planning position is clear, the technical
                  package can be prepared for Building Control and the build stage.
                  Some internal works may not need planning, but can still need
                  Building Regulation approval.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">
                  Can you prepare Building Regulation drawings if another company prepared the planning drawings?
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Yes. We can review the approved planning information and prepare
                  a separate technical package based on the agreed scheme, subject
                  to the quality and level of information available.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">
                  Are these drawings useful for builders as well as Building Control?
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Yes. A good technical pack should help both the approval process
                  and the construction process by giving clearer information for
                  pricing, coordination and site work.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">
                  How quickly can you start?
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  We can usually review the project quickly and arrange an initial
                  survey within 48 hours in most cases, then move into the technical
                  drawing stage once the scope and starting information are confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-red-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-100">
                  Ready for Building Control stage
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Send your planning drawings and we will review the technical scope
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-red-50">
                  If your project is approved, close to approval, or ready for
                  technical coordination, send us the details. We will review what
                  is available and confirm the next step for the Building Regulation
                  drawing package.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-black text-red-700 transition hover:bg-red-50"
                >
                  Get my Building Reg quote
                </a>
                <a
                  href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20Building%20Regulation%20drawings."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-red-200 px-6 py-4 text-base font-black text-white transition hover:bg-red-800"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-red-200 px-6 py-4 text-base font-black text-white transition hover:bg-red-800"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  Check our Google Business Profile
                </h2>
                <p className="mt-3 max-w-3xl text-slate-700">
                  View the WEDRAWPLANS business profile on Google for company
                  information and client confidence before instructing technical
                  drawing work.
                </p>
              </div>

              <a
                href={GBP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-base font-black text-white transition hover:bg-black"
                onClick={() =>
                  trackEvent("gbp_click", {
                    event_category: "technical_cta",
                    event_label: "bottom_gbp_click",
                    page_path: "/building-regulation-drawings",
                  })
                }
              >
                View our Google Business Profile
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <img
                  src={LOGO_IMAGE}
                  alt="WEDRAWPLANS logo"
                  className="h-11 w-auto object-contain brightness-0 invert"
                />
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                  WEDRAWPLANS prepares planning drawings, Building Regulation
                  drawings and technical drawing packages for residential and
                  commercial projects across London and surrounding M25 areas.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-lg font-black text-white hover:text-cyan-300"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-bold text-slate-300 hover:text-white"
                >
                  {EMAIL}
                </a>
                <p className="text-xs text-slate-500">
                  © {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>

        <SmartPlanningAssistant boroughName="London" />
      </main>
    </>
  );
}
