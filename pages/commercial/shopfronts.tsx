import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/xOwhyM90bNTj0iWf9";
const PAGE_URL = "https://www.wedrawplans.co.uk/commercial/shopfronts";
const PAGE_TITLE =
  "Commercial Shopfront Drawings London | Shopfront Design, Planning Permission & Building Regulations | WEDRAWPLANS";
const PAGE_DESCRIPTION =
  "Commercial shopfront drawings in London for planning permission, signage design, retail refurbishments, restaurant fronts, salon fronts, cafe fronts, change of use projects and Building Regulations packages. Fast initial survey within 48 hours in most cases.";
const PAGE_IMAGE = "/images/commercial-shopfront.jpg";

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
  service: "Commercial Shopfront Drawings",
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

export default function CommercialShopfrontDrawingsPage() {
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
          name: "Do I need planning permission for a new shopfront in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many shopfront changes do require planning permission, especially in conservation areas, on prominent high streets, where materials, fascia details, glazing patterns, signage or lighting are changing materially. WEDRAWPLANS prepares existing and proposed drawings to support the application properly.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS help with restaurant, takeaway and cafe fronts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We prepare commercial drawings for restaurants, takeaways, cafes, salons, offices, mixed use buildings and retail units, including shopfront alterations, signage layout and supporting planning packs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also provide drawings for residential projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to commercial work, WEDRAWPLANS provides drawings for house extensions, loft conversions and new build developments across London and surrounding areas.",
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
      name: "Commercial Shopfront Drawings",
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
        "Commercial architectural drawings for shopfronts, signage, planning permission and building regulations",
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
      event_label: "shopfront_page_submit_attempt",
      service: "Commercial Shopfront Drawings",
      page_path: "/commercial/shopfronts",
      lead_source: "commercial_shopfront_page",
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
            "Customer requested a quote for commercial shopfront drawings.",
        ].join("\n"),
        raw: {
          pageType: "commercial",
          pageSlug: "shopfronts",
          pageUrl: PAGE_URL,
          businessName: form.businessName,
        },
      });

      trackEvent("generate_lead_success", {
        event_category: "commercial_lead",
        event_label: "shopfront_page_submit_success",
        service: "Commercial Shopfront Drawings",
        page_path: "/commercial/shopfronts",
        lead_source: "commercial_shopfront_page",
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
        event_label: "shopfront_page_submit_error",
        service: "Commercial Shopfront Drawings",
        page_path: "/commercial/shopfronts",
        lead_source: "commercial_shopfront_page",
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
          content="commercial shopfront drawings London, shopfront design London, shopfront planning permission London, retail unit architectural drawings, restaurant shopfront drawings, takeaway shopfront design, fascia signage drawings, commercial planning drawings London, building regulations drawings commercial"
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
                  Commercial Shopfront Drawings in London
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Planning drawings, measured surveys and design support for
                  retail shopfronts, restaurant fronts, cafe units, salons,
                  mixed use ground floors and commercial refurbishments across
                  London and surrounding areas.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_get_quote",
                        page_path: "/commercial/shopfronts",
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
                        page_path: "/commercial/shopfronts",
                      })
                    }
                  >
                    Call 020 3654 8508
                  </a>

                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20commercial%20shopfront%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_whatsapp_click",
                        page_path: "/commercial/shopfronts",
                      })
                    }
                  >
                    WhatsApp us
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Existing and proposed elevations
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Planning drawings for councils across London
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Fast initial survey within 48 hours in most cases
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Retail, restaurants, cafes, salons and offices
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src={PAGE_IMAGE}
                  alt="Commercial shopfront architectural drawings with front elevation and 3D visual"
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
              <Link
                href="/areas"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Areas covered
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Shopfront planning drawings prepared to strengthen presentation,
                planning quality and first impressions
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                A commercial shopfront is one of the most important visual
                elements of a business premises. It shapes how the unit is seen
                from the street, how clearly the business is presented, and how
                the building contributes to the wider character of the parade or
                town centre. Councils often look closely at materials, fascia
                proportions, glazing patterns, signage, lighting and the overall
                visual impact of the proposal before granting approval.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                That is why generic sketch work is rarely enough. A good
                shopfront proposal needs professional measured drawings, a clear
                understanding of the existing frontage and a carefully prepared
                set of proposed elevations that explain the design properly.
                WEDRAWPLANS prepares strong, planning-ready shopfront drawing
                packages for commercial clients across London.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                We work with shop owners, landlords, restaurant operators,
                takeaway businesses, salon owners, office occupiers and mixed use
                property owners who need a new frontage, a cleaner street
                presence, a rebrand, a change of materials or a better quality
                planning submission. Whether the goal is approval, improvement of
                the unit, or a more professional public image, our drawings are
                prepared to help the project move forward with clarity.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">What we prepare</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Measured surveys of the existing frontage</li>
                    <li>Existing and proposed plans and elevations</li>
                    <li>Shopfront design options and signage layouts</li>
                    <li>Planning drawing packages for submission</li>
                    <li>Design support for materials and visual appearance</li>
                    <li>Building Regulations support where required</li>
                    <li>Coordination where structural alterations are involved</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Property types covered</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Retail shops and high street units</li>
                    <li>Restaurants, cafes and takeaways</li>
                    <li>Barbers, salons and beauty premises</li>
                    <li>Office frontages and entrance upgrades</li>
                    <li>Mixed use ground floor commercial units</li>
                    <li>Refurbishments, rebrands and frontage upgrades</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Why businesses choose WEDRAWPLANS for shopfront drawings
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">
                    Clear planning-ready presentation
                  </h3>
                  <p className="mt-3 text-slate-700">
                    We prepare clean, accurate existing and proposed drawings
                    that help councils, landlords and project teams understand
                    the proposal clearly from the outset. This improves the
                    overall presentation of the scheme and reduces confusion
                    during review.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">
                    Strong balance of design and commercial practicality
                  </h3>
                  <p className="mt-3 text-slate-700">
                    A good shopfront must do more than look attractive. It also
                    needs to work for the business, reflect the brand, respect
                    the character of the street and support day to day use. Our
                    drawings are prepared with that full picture in mind.
                  </p>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Typical reasons clients contact us for shopfront drawings
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "A new business tenant needs a rebrand and replacement fascia",
                  "The owner wants a cleaner and more modern frontage with better proportions",
                  "A restaurant or takeaway needs a stronger frontage package for planning",
                  "A mixed use building needs the ground floor commercial frontage redesigned",
                  "An older unit requires improvement before reletting or sale",
                  "The council has requested clear existing and proposed elevations before validation",
                  "A business wants to improve visibility and presentation on a busy high street",
                  "A landlord wants a better quality frontage to suit a new occupier",
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
                Shopfront design considerations we help clients address
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Visual quality</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Fascia depth and overall proportions</li>
                    <li>Glazing arrangement and mullion design</li>
                    <li>Material selection and finish consistency</li>
                    <li>Relationship with neighbouring units</li>
                    <li>Traditional or contemporary frontage character</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Operational practicality</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Entrance positioning and access</li>
                    <li>Visibility of the business from the street</li>
                    <li>Signage zones and branding arrangement</li>
                    <li>Security shutter coordination where relevant</li>
                    <li>Fit with the internal layout and business use</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Related architectural drawing services
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Many of our commercial clients also own residential property,
                mixed use buildings or development sites. We also provide
                professional drawing packages for extensions, loft conversions
                and new build projects across London and surrounding areas.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <Link
                  href="/extension-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Extension drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    House extension planning drawings, rear extensions, side
                    return schemes and wrap around layouts.
                  </p>
                </Link>

                <Link
                  href="/loft-conversion-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Loft conversion drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Dormers, mansards, hip to gable conversions and loft planning packs.
                  </p>
                </Link>

                <Link
                  href="/new-build-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">New build drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    New homes, infill plots and small development architectural packages.
                  </p>
                </Link>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Frequently asked questions
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Do shopfront changes always need planning permission?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Not always, but many do. Conservation areas, listed
                    settings, prominent high streets, material changes to fascia
                    design, glazing arrangement, colours, signage or lighting can
                    all trigger planning requirements. We assess the proposal and
                    prepare the right drawing package for submission.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help with restaurants and takeaway frontages?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. Restaurant, cafe and takeaway frontages are a major part
                    of our commercial drawing work, especially where external
                    appearance, branding, ventilation implications and street
                    scene quality are important.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help if the frontage is part of a mixed use building?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. We regularly prepare drawings for mixed use buildings
                    where the ground floor commercial frontage needs to be
                    upgraded while still working well with the upper residential
                    parts of the property.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    How quickly can you start?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    We can usually arrange an initial survey within 48 hours in
                    most cases, then move quickly into drawing production and
                    quote support depending on complexity and access.
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
                  Get a quote for commercial shopfront drawings
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
                      placeholder="Tell us what you want to change, the property type, whether the unit is retail, restaurant, cafe or salon, and whether you need planning permission or Building Regulations drawings."
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
                          page_path: "/commercial/shopfronts",
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
                          page_path: "/commercial/shopfronts",
                        })
                      }
                    >
                      info@wedrawplans.com
                    </a>
                    <a
                      href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20commercial%20shopfront%20drawings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_whatsapp_click",
                          page_path: "/commercial/shopfronts",
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
                    page_path: "/commercial/shopfronts",
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
