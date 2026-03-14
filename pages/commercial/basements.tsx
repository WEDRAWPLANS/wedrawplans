import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/ehN4CchP9EPaKSq5p";
const PAGE_URL = "https://www.wedrawplans.co.uk/commercial/basements";
const PAGE_TITLE =
  "Commercial Basement Drawings London | Basement Design, Planning & Fit Out Drawings | WEDRAWPLANS";
const PAGE_DESCRIPTION =
  "Commercial basement drawings in London for basement design, fit out layouts, lower ground floor planning, hospitality basements, office basements, retail storage, light wells, pavement lights, access improvements and Building Regulations support. Fast initial survey within 48 hours in most cases.";
const PAGE_IMAGE = "/images/commercial-basements.jpg";

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  businessName: string;
  service: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  businessName: "",
  service: "Commercial Basement Drawings",
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

export default function CommercialBasementsPage() {
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
          name: "Do commercial basement projects need architectural drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Commercial basement projects usually need accurate measured surveys, proposed layouts, planning drawings, access strategy drawings and Building Regulations information, especially where the basement is being converted, extended, reconfigured, fitted out or linked to a new commercial use.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS help with light wells, pavement lights and basement daylight improvements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WEDRAWPLANS can prepare drawings that include light wells, pavement lights, external light areas, access adjustments and design proposals that improve basement usability, layout quality and natural light potential, subject to planning and technical constraints.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare drawings for hospitality, office and mixed use basements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WEDRAWPLANS prepares basement drawings for hospitality spaces, storage areas, office basements, mixed use properties, ancillary commercial space and lower ground floor reconfiguration projects across London.",
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
      name: "Commercial Basement Drawings",
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
        "Commercial architectural drawings for basement planning, basement conversions, lower ground floor layouts, fit out design, light wells, pavement lights and Building Regulations support",
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
      event_category: "commercial_lead",
      event_label: "commercial_basements_page_submit_attempt",
      service: "Commercial Basement Drawings",
      page_path: "/commercial/basements",
      lead_source: "commercial_basements_page",
    });

    try {
      await submitBoroughLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        postcode: form.postcode,
        service: form.service,
        borough: "Commercial",
        message: [
          `Business name: ${form.businessName || "Not provided"}`,
          "",
          form.message ||
            "Customer requested a quote for commercial basement drawings.",
        ].join("\n"),
        raw: {
          pageType: "commercial",
          pageSlug: "basements",
          pageUrl: PAGE_URL,
          businessName: form.businessName,
        },
      });

      trackEvent("generate_lead_success", {
        event_category: "commercial_lead",
        event_label: "commercial_basements_page_submit_success",
        service: "Commercial Basement Drawings",
        page_path: "/commercial/basements",
        lead_source: "commercial_basements_page",
      });

      setSubmitState({
        type: "success",
        message:
          "Thank you. Your request has been sent successfully. We will get back to you shortly.",
      });
      setForm(initialFormState);
    } catch (error) {
      trackEvent("generate_lead_error", {
        event_category: "commercial_lead",
        event_label: "commercial_basements_page_submit_error",
        service: "Commercial Basement Drawings",
        page_path: "/commercial/basements",
        lead_source: "commercial_basements_page",
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
          content="commercial basement drawings London, basement design London, basement planning drawings London, basement fit out drawings, lower ground floor conversion drawings, light well drawings London, pavement light drawings London, basement layout plans London, commercial basement architectural drawings, Building Regulations basement drawings London"
        />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={PAGE_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={PAGE_IMAGE} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Commercial Architectural Drawings
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Commercial Basement Drawings in London
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Architectural drawings for commercial basements, lower ground
                  floor conversions, basement fit outs, hospitality basements,
                  office basements, storage reconfiguration, light wells,
                  pavement lights and mixed use basement projects across London.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_get_quote",
                        page_path: "/commercial/basements",
                      })
                    }
                  >
                    Get a quote
                  </a>

                  <a
                    href="tel:+442036548508"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("phone_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_phone_click",
                        page_path: "/commercial/basements",
                      })
                    }
                  >
                    Call 020 3654 8508
                  </a>

                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20commercial%20basement%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_whatsapp_click",
                        page_path: "/commercial/basements",
                      })
                    }
                  >
                    WhatsApp us
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Existing and proposed basement drawings
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Basement fit out and lower ground floor planning support
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Fast initial survey within 48 hours in most cases
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Hospitality, offices, retail storage, mixed use and ancillary spaces
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src={PAGE_IMAGE}
                  alt="Commercial basement architectural drawings with detailed technical plans and realistic basement interior visual"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link
                href="/commercial"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Commercial overview
              </Link>
              <Link
                href="/commercial/shopfronts"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Shopfront drawings
              </Link>
              <Link
                href="/commercial/restaurants"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Restaurant drawings
              </Link>
              <Link
                href="/commercial/office-fitout"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Office fit out drawings
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
                href="/building-regulation-drawings"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Building Regulations drawings
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Commercial basement drawings prepared for planning quality, fit out performance and long term value
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Basement work can unlock major value in a property, but it also
                brings more complexity than many above ground projects. Access,
                escape, servicing, ventilation, layout efficiency, waterproofing
                coordination, natural light, ceiling height and day to day use
                all matter. A weak basement drawing package can make the proposal
                feel risky or underdeveloped. A strong package can transform how
                the space is understood from the start.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                WEDRAWPLANS prepares commercial basement drawings for landlords,
                investors, developers, restaurant operators, office occupiers and
                mixed use property owners across London. Whether you are planning
                a new basement insertion, reconfiguring an existing lower ground
                floor, fitting out a commercial basement, improving natural light
                through light wells or pavement lights, or reorganising the space
                for storage, hospitality, office or support use, we help present
                the scheme clearly and professionally.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Basement design is not only about drawing rooms below ground. It
                is about creating a space that works in reality. That means
                thinking about the route in and out, how people move through the
                space, how light reaches the interior, how the basement supports
                the wider building and how the layout can be made commercially
                useful and attractive. Our drawings are prepared with that wider
                view in mind.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">What we prepare</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Measured surveys of existing basements and lower ground floors</li>
                    <li>Existing and proposed basement plans and layouts</li>
                    <li>Commercial fit out drawings and reconfiguration layouts</li>
                    <li>Planning drawing packs for submission</li>
                    <li>Light well and pavement light design drawings where required</li>
                    <li>Sections and vertical relationship drawings</li>
                    <li>Building Regulations support where relevant</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Project types covered</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Hospitality basements and back of house layouts</li>
                    <li>Office basements and lower ground floor workspace planning</li>
                    <li>Retail storage and ancillary basement accommodation</li>
                    <li>Mixed use lower ground floor reconfiguration</li>
                    <li>New basement insertion planning proposals</li>
                    <li>Investment-led basement improvement schemes</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Why clients contact us for basement projects
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "A basement is underused and needs a proper design strategy to support a stronger commercial use",
                  "A restaurant or hospitality business needs a lower ground floor planned as part of a wider operating layout",
                  "A landlord wants to improve property value by upgrading or reorganising basement accommodation",
                  "A commercial premises needs storage, staff, service or customer support space below ground level",
                  "A project requires new light wells or pavement lights to improve natural light to the basement",
                  "A planning consultant needs accurate existing and proposed drawings before a basement scheme can move forward",
                  "A developer wants a professional package for a commercially complex lower ground floor proposal",
                  "A mixed use building needs the basement to work better with the floors above",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-5 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Why clients choose WEDRAWPLANS for basement drawings
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Basement design with practical thinking</h3>
                  <p className="mt-3 text-slate-700">
                    A good basement layout must work operationally, not just
                    visually. We prepare drawings with attention to circulation,
                    access, usable floor area, vertical connections and the
                    practical demands of the intended commercial use.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Clear presentation for planning and coordination</h3>
                  <p className="mt-3 text-slate-700">
                    Our drawing packages help councils, landlords, consultants
                    and project teams understand the basement proposal clearly,
                    including how it relates to the building above and how the
                    space is intended to function once complete.
                  </p>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Basement design issues we help clients address
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Layout and usability</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Access into and out of the basement</li>
                    <li>Relationship between basement and ground floor</li>
                    <li>Commercial layout efficiency and room arrangement</li>
                    <li>Functional use of lower ground floor accommodation</li>
                    <li>Integration with storage, staff or service requirements</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Light and environmental quality</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Light wells and external light areas</li>
                    <li>Pavement lights and daylight improvement options</li>
                    <li>Basement frontage or rear light access where possible</li>
                    <li>Relationship of openings to the wider design</li>
                    <li>Improvement of internal amenity and user experience</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Related architectural drawing services
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Many basement clients also own residential property, mixed use
                buildings or wider development sites. WEDRAWPLANS also provides
                architectural drawing services for extensions, loft conversions,
                new build projects and other commercial planning work across
                London and surrounding areas.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <Link
                  href="/extension-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Extension drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    House extension planning drawings, rear extensions, side
                    return layouts and wrap around schemes.
                  </p>
                </Link>

                <Link
                  href="/loft-conversion-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Loft conversion drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Dormers, mansards, hip to gable lofts and planning packages
                    for residential properties.
                  </p>
                </Link>

                <Link
                  href="/new-build-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">New build drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    New homes, infill development plots and small new build
                    architectural packages.
                  </p>
                </Link>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Frequently asked questions
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Do commercial basement projects always need planning drawings?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    In most meaningful cases, yes. Basements often involve
                    layout complexity, access issues, level changes, vertical
                    coordination and wider use questions. Clear measured drawings
                    and proposed layouts are essential to explain the scheme properly.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help with light wells and pavement lights?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. Where relevant to the scheme, we can prepare drawings
                    that include light wells, pavement lights and other design
                    features intended to improve light and usability to basement spaces.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help with basement fit out design as well as new basement proposals?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. We can assist with both the fit out and reconfiguration
                    of existing basements and with drawing packages for wider
                    basement development proposals, depending on the property and scope.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    How quickly can you start?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    We can usually arrange an initial survey within 48 hours in
                    most cases, then move quickly into drawing production once
                    access and scope are confirmed.
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-6 lg:self-start">
              <div
                id="quote-form"
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold tracking-tight">
                  Get a quote for commercial basement drawings
                </h2>
                <p className="mt-3 text-slate-700">
                  Send us your details and we will review the project and come
                  back to you quickly.
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
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
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="postcode"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Postcode
                    </label>
                    <input
                      id="postcode"
                      type="text"
                      value={form.postcode}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, postcode: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Business name
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      value={form.businessName}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          businessName: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Tell us about the basement, whether it is existing or proposed, the current and intended use, the property type, whether you need light wells or pavement lights, and whether you need planning drawings, fit out layouts or Building Regulations support."
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Request my quote"}
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
                </form>

                <div className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <h3 className="text-lg font-semibold">Prefer to talk now?</h3>
                  <div className="mt-4 grid gap-3">
                    <a
                      href="tel:+442036548508"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("phone_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_phone_click",
                          page_path: "/commercial/basements",
                        })
                      }
                    >
                      Call 020 3654 8508
                    </a>
                    <a
                      href="mailto:info@wedrawplans.com"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("email_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_email_click",
                          page_path: "/commercial/basements",
                        })
                      }
                    >
                      info@wedrawplans.com
                    </a>
                    <a
                      href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20commercial%20basement%20drawings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_whatsapp_click",
                          page_path: "/commercial/basements",
                        })
                      }
                    >
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </div>
            </aside>
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
                    event_category: "commercial_cta",
                    event_label: "bottom_gbp_click",
                    page_path: "/commercial/basements",
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
