import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/Dhc3KZyM5vjARGCmf";
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
      name: "Building Regulation Drawings",
      provider: {
        "@type": "LocalBusiness",
        name: "WEDRAWPLANS",
        url: "https://www.wedrawplans.co.uk",
        telephone: "+44 20 3654 8508",
        email: "info@wedrawplans.com",
      },
      areaServed: {
        "@type": "City",
        name: "London",
      },
      serviceType:
        "Building Regulation drawings, building control drawings, technical drawing packs and structural coordination for residential and commercial projects",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
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
      </Head>

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={LOGO_IMAGE}
                alt="WEDRAWPLANS logo"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="tel:+442036548508"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                020 3654 8508
              </a>
              <a
                href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20Building%20Regulation%20drawings."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </header>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-red-700">
                  Technical Drawing Packages
                </p>
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Building Regulation Drawings in London
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  Detailed Building Regulation drawings for extensions, loft
                  conversions, new builds, conversions and commercial projects.
                  We prepare technical drawing packs for building control
                  approval, construction pricing and on site delivery, with clear
                  structural coordination and practical build information.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
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
                    href="tel:+442036548508"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("phone_click", {
                        event_category: "technical_cta",
                        event_label: "hero_phone_click",
                        page_path: "/building-regulation-drawings",
                      })
                    }
                  >
                    Call 020 3654 8508
                  </a>

                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20Building%20Regulation%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        event_category: "technical_cta",
                        event_label: "hero_whatsapp_click",
                        page_path: "/building-regulation-drawings",
                      })
                    }
                  >
                    WhatsApp us
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Detailed plans, sections and construction notes",
                    "Building control submission support",
                    "Structural engineer coordination",
                    "Residential and commercial technical packages",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

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
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link
                href="/extension-plans"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Extension drawings
              </Link>
              <Link
                href="/loft-conversion-plans"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Loft conversion drawings
              </Link>
              <Link
                href="/new-build-plans"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                New build drawings
              </Link>
              <Link
                href="/commercial/change-of-use"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Change of use drawings
              </Link>
              <Link
                href="/commercial/mixed-use"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Mixed use drawings
              </Link>
              <Link
                href="/commercial/fire-strategy"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Fire strategy drawings
              </Link>
              <Link
                href="/commercial/basements"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Basement drawings
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Building Regulation drawings prepared for approval, pricing and the build stage
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  A Building Regulation package is where the project becomes
                  technically real. Planning drawings often show what the project
                  looks like in principle. Building Regulation drawings go much
                  further by showing how the work is intended to be built, how
                  key elements come together and how the proposal is expected to
                  meet building control requirements.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  WEDRAWPLANS prepares detailed technical drawing packs for
                  residential and commercial projects across London. These packs
                  are designed to help with building control approval, structural
                  coordination, contractor pricing and construction on site. The
                  aim is always to provide a clear, practical and professionally
                  organised set of drawings that moves the project forward.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  This service is especially important for extensions, loft
                  conversions, new builds, internal structural alterations,
                  conversions and commercial schemes where the technical pack
                  needs to coordinate with structural engineer input, fire
                  safety, thermal performance, sound requirements, drainage or
                  other construction details.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
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
            <h2 className="text-3xl font-bold tracking-tight">
              What is included in a Building Regulation drawing pack
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
              The exact content depends on the project, but a strong Building
              Regulation pack will usually include a coordinated set of drawings
              and notes that allow building control and the wider team to
              understand how the work is intended to be constructed.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <ul className="space-y-3 text-slate-700">
                  <li>General arrangement plans at key levels</li>
                  <li>Demolition and proposed construction information where needed</li>
                  <li>Cross sections and long sections with build ups</li>
                  <li>Wall, floor and roof build up notes</li>
                  <li>Insulation, thermal and condensation risk related notes</li>
                  <li>Fire protection and escape information relevant to the scope</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <ul className="space-y-3 text-slate-700">
                  <li>Structural engineer coordination and beam references</li>
                  <li>Opening details, junction details and key construction notes</li>
                  <li>Drainage and basic external works information where relevant</li>
                  <li>Stair, headroom and guarding related notes where applicable</li>
                  <li>Sound and ventilation related notes depending on the project</li>
                  <li>Project-specific technical items that need build clarity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src={HERO_IMAGE}
                  alt="Building Regulation project delivery and completed construction example"
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Why clients instruct WEDRAWPLANS for Building Regulation drawings
                </h2>

                <div className="mt-8 grid gap-4">
                  {[
                    "They already have planning approval and need the technical package for building control",
                    "They need a drawing set that builders and structural engineers can work from clearly",
                    "They want a practical pack that deals with junctions, sections, build ups and structural coordination properly",
                    "They need a more professional technical package before construction pricing starts",
                    "They want a single team to help move the project from planning stage into technical stage",
                    "They need clear information for extensions, lofts, conversions, new builds or commercial alterations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 p-5 text-slate-700"
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
            <h2 className="text-3xl font-bold tracking-tight">
              Projects we cover
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">House extensions</h3>
                <p className="mt-3 text-slate-700">
                  Rear extensions, side returns, wrap around extensions and
                  larger alterations that need detailed technical coordination.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">Loft conversions</h3>
                <p className="mt-3 text-slate-700">
                  Dormers, mansards, hip to gable conversions, stairs,
                  headroom coordination and roof structure related detailing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">New builds</h3>
                <p className="mt-3 text-slate-700">
                  Full technical drawing packs for new houses and small
                  developments, coordinated with wider consultant information.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">Commercial projects</h3>
                <p className="mt-3 text-slate-700">
                  Change of use projects, mixed use schemes, office fit outs,
                  structural alterations and other technical commercial packages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Structural engineering coordination matters
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
              Many Building Regulation packages need to align closely with
              structural engineer information. That may include steel beams,
              padstones, new openings, roof alterations, floor strengthening,
              connection details and other structural elements. A technical pack
              works best when the drawings and structural design speak to each
              other clearly. This is a major part of why clients instruct us.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">Typical coordination items</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>Beam positions and opening layouts</li>
                  <li>Padstone references and structural support logic</li>
                  <li>Floor and roof structure changes</li>
                  <li>Junction details around structural work</li>
                  <li>Coordination between architectural and structural intent</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">Why that helps the project</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>Clearer building control submission</li>
                  <li>Better understanding for builders on site</li>
                  <li>Less confusion during pricing and construction</li>
                  <li>Stronger technical consistency across the full package</li>
                  <li>More confidence in the build stage information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Related drawing services
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
              Clients looking for Building Regulation drawings often also need
              planning drawings, conversion drawings or commercial technical
              support. WEDRAWPLANS provides a wide range of architectural
              drawing services across London and surrounding areas.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/extension-plans"
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">Extension drawings</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Planning drawings for rear extensions, side return layouts and
                  wrap around extension schemes.
                </p>
              </Link>

              <Link
                href="/loft-conversion-plans"
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">Loft conversion drawings</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Planning drawings for dormers, mansards, hip to gable lofts
                  and wider roof conversion schemes.
                </p>
              </Link>

              <Link
                href="/commercial/change-of-use"
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">Change of use drawings</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Commercial and mixed use planning drawings for reconfiguration,
                  conversions and building improvement projects.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently asked questions
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">
                  Do I need planning approval before Building Regulation drawings?
                </h3>
                <p className="mt-3 text-slate-700">
                  In many cases yes, the planning route comes first where it is
                  required. Once the planning position is clear, the technical
                  package can then be prepared for building control and the build stage.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">
                  Can you prepare Building Regulation drawings if another company did the planning drawings?
                </h3>
                <p className="mt-3 text-slate-700">
                  Yes. We can review the approved planning information and prepare
                  a separate Building Regulation package based on the agreed scheme,
                  subject to the level of information available.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">
                  Are these drawings useful for builders as well as building control?
                </h3>
                <p className="mt-3 text-slate-700">
                  Yes. A good technical pack should help both the approval process
                  and the construction process by giving clearer information for
                  pricing, coordination and site work.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">
                  How quickly can you start?
                </h3>
                <p className="mt-3 text-slate-700">
                  We can usually review the project quickly and arrange an initial
                  survey within 48 hours in most cases, then move into the technical
                  drawing stage once the scope and starting information are confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Ready to move into the technical stage
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Send your planning drawings and let us build the technical pack properly
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  If your planning drawings are approved and you are ready to
                  move toward building control, pricing or construction, send us
                  the project details and we will review the technical scope and
                  come back with a clear next step.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-cyan-400"
                  >
                    Get my Building Reg quote
                  </a>
                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20Building%20Regulation%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-4 text-base font-semibold text-white transition hover:border-slate-400 hover:bg-slate-800"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-5">
                  <h3 className="text-lg font-semibold">Extensions</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Rear extensions, side returns, wrap around extensions and structural openings.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-5">
                  <h3 className="text-lg font-semibold">Loft conversions</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Dormers, mansards, stairs, roof alterations and technical junctions.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-5">
                  <h3 className="text-lg font-semibold">New builds</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Full technical packs for houses and small development schemes.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-5">
                  <h3 className="text-lg font-semibold">Commercial works</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Change of use, mixed use, fit outs and structural commercial packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Check our Google Business Profile
                </h2>
                <p className="mt-3 max-w-3xl text-slate-700">
                  View our business profile on Google.
                </p>
              </div>

              <a
                href={GBP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-black"
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
      </main>
    </>
  );
}
