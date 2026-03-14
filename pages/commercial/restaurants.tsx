import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/Ls15n8ZAvd9D3n79k";
const PAGE_URL = "https://www.wedrawplans.co.uk/commercial/restaurants";
const PAGE_TITLE =
  "Restaurant Planning Drawings London | Restaurant & Takeaway Architectural Plans | WEDRAWPLANS";
const PAGE_DESCRIPTION =
  "Restaurant planning drawings in London for restaurants, cafes, takeaways and food premises. Architectural drawings for planning permission, shopfront changes, internal layouts, change of use and building regulations. Fast initial survey within 48 hours in most cases.";
const PAGE_IMAGE = "/images/commercial-restaurants.png";

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
  service: "Restaurant Planning Drawings",
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

export default function CommercialRestaurantsPage() {
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
          name: "Do restaurants and takeaways need planning drawings in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many restaurant, cafe and takeaway projects need architectural drawings for planning permission, change of use, shopfront changes, extraction-related submissions, internal layout revisions and Building Regulations compliance.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS help with restaurant shopfronts and internal layouts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We prepare measured surveys, existing and proposed plans, elevations, shopfront drawings and planning submission packs for food-led commercial units across London.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also provide drawings for residential projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to commercial restaurant work, WEDRAWPLANS provides extension drawings, loft conversion drawings and new build architectural packages across London and surrounding areas.",
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
      name: "Restaurant Planning Drawings",
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
        "Architectural drawings for restaurants, cafes, takeaways, food premises, shopfronts, layout planning and Building Regulations",
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
      event_label: "restaurants_page_submit_attempt",
      service: "Restaurant Planning Drawings",
      page_path: "/commercial/restaurants",
      lead_source: "commercial_restaurants_page",
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
            "Customer requested a quote for restaurant planning drawings.",
        ].join("\n"),
        raw: {
          pageType: "commercial",
          pageSlug: "restaurants",
          pageUrl: PAGE_URL,
          businessName: form.businessName,
        },
      });

      trackEvent("generate_lead_success", {
        event_category: "commercial_lead",
        event_label: "restaurants_page_submit_success",
        service: "Restaurant Planning Drawings",
        page_path: "/commercial/restaurants",
        lead_source: "commercial_restaurants_page",
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
        event_label: "restaurants_page_submit_error",
        service: "Restaurant Planning Drawings",
        page_path: "/commercial/restaurants",
        lead_source: "commercial_restaurants_page",
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
          content="restaurant planning drawings London, takeaway planning drawings London, cafe architectural drawings, restaurant shopfront drawings, food premises planning permission, change of use restaurant drawings, restaurant Building Regulations drawings, takeaway layout plans London"
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
                  Restaurant Planning Drawings in London
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Architectural drawings for restaurants, takeaways, cafes,
                  dessert bars, food-led commercial units and hospitality spaces
                  across London. We help with planning permission, shopfront
                  changes, internal layouts, change of use and Building
                  Regulations support.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_get_quote",
                        page_path: "/commercial/restaurants",
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
                        page_path: "/commercial/restaurants",
                      })
                    }
                  >
                    Call 020 3654 8508
                  </a>

                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20restaurant%20planning%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_whatsapp_click",
                        page_path: "/commercial/restaurants",
                      })
                    }
                  >
                    WhatsApp us
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Existing and proposed restaurant plans
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Change of use and planning drawing support
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Fast initial survey within 48 hours in most cases
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Restaurants, takeaways, cafes and dessert bars
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src={PAGE_IMAGE}
                  alt="Restaurant planning drawings with shopfront design and realistic 3D visual"
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
                Restaurant architectural drawings prepared for planning approval and operational clarity
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Restaurant and takeaway projects are rarely simple. Councils
                often assess layout, frontage appearance, customer flow, fire
                escape routes, access, servicing, neighbour impact and the wider
                street scene before approving a proposal. A weak drawing set can
                slow validation, trigger objections or make the whole submission
                look unconvincing.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                WEDRAWPLANS prepares commercial drawing packages for hospitality
                businesses that need a serious, professional and planning-aware
                presentation. Whether you are fitting out a new restaurant,
                upgrading an existing frontage, changing the internal layout or
                preparing a change of use application, we help move the project
                forward with clear, accurate and commercially focused drawings.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">What we prepare</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Measured surveys of existing commercial food units</li>
                    <li>Existing and proposed plans and elevations</li>
                    <li>Restaurant and takeaway layout drawings</li>
                    <li>Shopfront and frontage amendment drawings</li>
                    <li>Planning drawing packs for submission</li>
                    <li>Building Regulations support where required</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Property types covered</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Restaurants and bistros</li>
                    <li>Takeaways and fast food units</li>
                    <li>Cafes and coffee shops</li>
                    <li>Dessert bars and bakery premises</li>
                    <li>Mixed use commercial ground floors</li>
                    <li>Refits, rebrands and new operator takeovers</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Popular reasons restaurant owners contact us
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "A new operator is taking over an existing unit and needs fast planning drawings",
                  "The frontage needs redesigning to improve street appeal and branding",
                  "The internal layout is changing to suit a new food concept or service model",
                  "A change of use application is required for a hospitality-led proposal",
                  "The council has requested clearer proposed plans and elevations before validation",
                  "The business needs a professional package to move quickly toward opening",
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
                Why clients choose WEDRAWPLANS for restaurant drawings
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Planning-ready presentation</h3>
                  <p className="mt-3 text-slate-700">
                    We prepare clear existing and proposed drawings that help
                    councils, landlords and project teams understand the frontage,
                    layout and operational proposal properly from the outset.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Commercially practical layouts</h3>
                  <p className="mt-3 text-slate-700">
                    Our approach considers branding, customer flow, seating,
                    service arrangement, back-of-house requirements and day to day
                    use so the design works both on paper and in operation.
                  </p>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Related architectural drawing services
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Many of our commercial restaurant clients also own residential
                property, mixed use buildings or development sites. We also
                provide professional drawing packages for extensions, loft
                conversions and new build projects across London and surrounding
                areas.
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
                    Do I need drawings for a restaurant or takeaway fit-out?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    In many cases yes, especially if you are changing the use,
                    altering the frontage, revising the internal arrangement or
                    submitting a planning application. Accurate drawings also
                    help consultants, landlords and contractors understand the
                    proposal clearly.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help if I am taking over an existing restaurant unit?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. This is one of the most common scenarios. We can survey
                    the premises, prepare an existing drawing set and create
                    proposed drawings for the new operator layout, frontage and
                    planning strategy.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    How quickly can you start?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    We can usually arrange an initial survey within 48 hours in
                    most cases, then move quickly into drawing production once
                    access and project scope are confirmed.
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
                  Get a quote for restaurant planning drawings
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
                      placeholder="Tell us about the unit, the type of food business, whether you need planning permission, a shopfront redesign, change of use drawings or a layout package."
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
                          page_path: "/commercial/restaurants",
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
                          page_path: "/commercial/restaurants",
                        })
                      }
                    >
                      info@wedrawplans.com
                    </a>
                    <a
                      href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20restaurant%20planning%20drawings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_whatsapp_click",
                          page_path: "/commercial/restaurants",
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
                    page_path: "/commercial/restaurants",
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
