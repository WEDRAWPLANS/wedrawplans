import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/smrWCc4cLMJH0uakY";
const PAGE_URL = "https://www.wedrawplans.co.uk/commercial/fire-strategy";
const PAGE_TITLE =
  "Commercial Fire Strategy Drawings London | Fire Strategy Plans & Compliance Drawings | WEDRAWPLANS";
const PAGE_DESCRIPTION =
  "Commercial fire strategy drawings in London for planning submissions, Building Regulations packages, change of use schemes, mixed use developments, office fit outs, restaurant projects and basement layouts. Professional drawings prepared to support fire safety coordination, access, escape strategy and technical compliance.";
const PAGE_IMAGE = "/images/commercial-fire-strategy.jpg";

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
  service: "Commercial Fire Strategy Drawings",
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

export default function CommercialFireStrategyPage() {
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
          name: "What are commercial fire strategy drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Commercial fire strategy drawings are plans and supporting diagrams that help explain fire safety principles within a building. They can show escape routes, protected stairs, final exits, compartmentation intent, access arrangements, occupancy use and the overall fire safety logic of the scheme for coordination with consultants, Building Regulations and approval processes.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS prepare fire strategy drawings for mixed use, office, restaurant and basement projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WEDRAWPLANS can prepare architectural drawing packages that support fire strategy coordination for mixed use buildings, office fit outs, restaurant projects, commercial basements, upper floor conversions and wider reconfiguration schemes across London.",
          },
        },
        {
          "@type": "Question",
          name: "Do fire strategy drawings replace a fire engineer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Some projects require dedicated fire engineering input depending on complexity, use and approval route. WEDRAWPLANS can prepare clear architectural drawings that support fire strategy coordination and work alongside the wider consultant team where specialist input is needed.",
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
      name: "Commercial Fire Strategy Drawings",
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
        "Commercial architectural drawings for fire strategy coordination, Building Regulations support, escape planning and technical compliance",
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
      event_label: "fire_strategy_page_submit_attempt",
      service: "Commercial Fire Strategy Drawings",
      page_path: "/commercial/fire-strategy",
      lead_source: "commercial_fire_strategy_page",
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
            "Customer requested a quote for commercial fire strategy drawings.",
        ].join("\n"),
        raw: {
          pageType: "commercial",
          pageSlug: "fire-strategy",
          pageUrl: PAGE_URL,
          businessName: form.businessName,
        },
      });

      trackEvent("generate_lead_success", {
        event_category: "commercial_lead",
        event_label: "fire_strategy_page_submit_success",
        service: "Commercial Fire Strategy Drawings",
        page_path: "/commercial/fire-strategy",
        lead_source: "commercial_fire_strategy_page",
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
        event_label: "fire_strategy_page_submit_error",
        service: "Commercial Fire Strategy Drawings",
        page_path: "/commercial/fire-strategy",
        lead_source: "commercial_fire_strategy_page",
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
          content="commercial fire strategy drawings London, fire strategy plans London, fire safety drawings commercial London, fire escape drawings London, Building Regulations fire drawings London, mixed use fire strategy drawings, office fire strategy plans, restaurant fire strategy drawings, basement fire strategy drawings"
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
                  Commercial Fire Strategy Drawings in London
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Fire strategy drawings and coordinated architectural plans for
                  commercial projects across London, including mixed use schemes,
                  office fit outs, restaurant layouts, upper floor conversions,
                  commercial basements and wider Building Regulations packages.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_get_quote",
                        page_path: "/commercial/fire-strategy",
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
                        page_path: "/commercial/fire-strategy",
                      })
                    }
                  >
                    Call 020 3654 8508
                  </a>

                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20commercial%20fire%20strategy%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_whatsapp_click",
                        page_path: "/commercial/fire-strategy",
                      })
                    }
                  >
                    WhatsApp us
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Fire strategy plans and coordinated layouts
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Escape planning and Building Regulations support
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Fast initial survey within 48 hours in most cases
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Mixed use, offices, restaurants, basements and conversions
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src={PAGE_IMAGE}
                  alt="Commercial fire strategy drawings with technical plans and coordinated building layouts"
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
                href="/commercial/basements"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Basement drawings
              </Link>
              <Link
                href="/building-regulation-drawings"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                Building Regulations drawings
              </Link>
              <Link
                href="/new-build-plans"
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
              >
                New build drawings
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Fire strategy drawings prepared for safer layouts, clearer approvals and stronger technical coordination
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Fire strategy is one of the most important technical aspects of a
                commercial project because it sits at the heart of how people use
                a building safely. Escape routes, protected zones, final exits,
                travel paths, stair arrangements, compartmentation logic, access
                for management and coordination with the wider design all need to
                read clearly within the drawing package. Where the fire strategy
                is unclear, the whole proposal can become harder to assess and harder
                to progress.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                WEDRAWPLANS prepares commercial architectural drawings that help
                support fire strategy coordination across London. Whether the
                project involves a mixed use building, office fit out, restaurant
                layout, upper floor conversion, change of use proposal or a
                commercial basement, we prepare clear existing and proposed
                drawings that help the scheme read properly and support the wider
                compliance process.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Fire strategy drawings need more than labels on a plan. They need
                careful thought about how the building works in reality. That can
                include route planning, access hierarchy, protected stair logic,
                floor relationships, occupancy patterns and the way different
                parts of the building connect to one another. Our role is to make
                the underlying arrangement clear on the drawings so the project
                team can move forward with confidence.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">What we prepare</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Measured surveys where required</li>
                    <li>Existing and proposed plans to support fire strategy coordination</li>
                    <li>Escape route drawings and circulation layouts</li>
                    <li>Protected stair and final exit coordination drawings</li>
                    <li>Compartmentation intent diagrams where relevant to the scope</li>
                    <li>Mixed use and multi-level arrangement drawings</li>
                    <li>Building Regulations support drawings</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Project types covered</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Office fit outs and workspace reconfiguration</li>
                    <li>Restaurant, cafe and hospitality layouts</li>
                    <li>Mixed use commercial and residential buildings</li>
                    <li>Upper floor conversions and change of use schemes</li>
                    <li>Commercial basements and lower ground floor proposals</li>
                    <li>Development-led reconfiguration and compliance packages</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Why clients contact us for fire strategy drawing support
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "A project needs clear plans showing how escape routes and exits are arranged",
                  "A mixed use building requires a more coordinated fire strategy layout between commercial and residential parts",
                  "An office or hospitality project needs stronger technical drawings for Building Regulations coordination",
                  "A change of use proposal needs the building layout explained more clearly for approval",
                  "A basement or multi-level scheme needs better vertical and escape route clarity",
                  "A consultant team needs clean existing and proposed drawings to support the fire safety review",
                  "A landlord or developer wants a more professional package before progressing with approval",
                  "A commercial refurbishment needs the layout rationalised so the fire strategy can be understood properly",
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
                Why clients choose WEDRAWPLANS for fire strategy drawings
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Clear building arrangement on plan</h3>
                  <p className="mt-3 text-slate-700">
                    We prepare drawings that help show how the building is
                    organised, how routes move through the space and how the
                    proposal works floor by floor. That clarity is essential when
                    the wider team is reviewing fire safety principles.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Strong coordination with the wider design</h3>
                  <p className="mt-3 text-slate-700">
                    Fire strategy does not sit in isolation. It affects layout,
                    access, use, circulation and the overall arrangement of the
                    project. Our drawings help bring those elements together in a
                    way that is easier to review and coordinate.
                  </p>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Fire strategy issues we help clients address on drawings
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Escape and circulation</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Travel routes through the building</li>
                    <li>Relationship between rooms and final exits</li>
                    <li>Protected stair and corridor coordination</li>
                    <li>Movement across multiple floors</li>
                    <li>Clearer plan reading for the approval process</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Building organisation</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Mixed use building separation and access logic</li>
                    <li>Upper floor and basement relationship to the main scheme</li>
                    <li>Layout reconfiguration for safer use</li>
                    <li>Coordination with wider Building Regulations information</li>
                    <li>Technical clarity across existing and proposed plans</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Related architectural drawing services
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Fire strategy coordination often sits alongside wider commercial
                and residential drawing work. WEDRAWPLANS also provides
                architectural drawing services for shopfronts, restaurants,
                office fit outs, mixed use schemes, basements, extensions, loft
                conversions and new build projects across London and surrounding
                areas.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <Link
                  href="/commercial/change-of-use"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Change of use drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Planning drawings for office to residential, retail to
                    restaurant and wider building reconfiguration proposals.
                  </p>
                </Link>

                <Link
                  href="/commercial/mixed-use"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Mixed use drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Shop and flat arrangements, commercial and residential
                    layouts and planning-ready mixed use building packages.
                  </p>
                </Link>

                <Link
                  href="/commercial/basements"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Basement drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Commercial basement design, lower ground floor planning and
                    fit out drawings for complex below-ground space.
                  </p>
                </Link>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Frequently asked questions
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    What is the purpose of fire strategy drawings?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Their purpose is to help explain how the building is intended
                    to work from a fire safety point of view, including escape,
                    access, circulation and the overall arrangement of the scheme.
                    They support clearer technical review and project coordination.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help on mixed use and multi-level buildings?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. Mixed use and multi-level buildings often benefit from
                    particularly clear fire strategy drawings because the
                    relationships between different uses and floors need to be
                    understood properly.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can these drawings support Building Regulations coordination?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. They can form part of a wider technical package and help
                    support the Building Regulations process by making the
                    building arrangement and fire safety logic easier to review.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    How quickly can you start?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    We can usually arrange an initial survey within 48 hours in
                    most cases, then move quickly into drawing production once
                    the project scope and access are confirmed.
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
                  Get a quote for fire strategy drawings
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
                      placeholder="Tell us about the building, the commercial use, the number of floors, whether the project is mixed use, office, restaurant or basement related, and whether you need fire strategy drawings, planning support or Building Regulations coordination."
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
                          page_path: "/commercial/fire-strategy",
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
                          page_path: "/commercial/fire-strategy",
                        })
                      }
                    >
                      info@wedrawplans.com
                    </a>
                    <a
                      href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20commercial%20fire%20strategy%20drawings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_whatsapp_click",
                          page_path: "/commercial/fire-strategy",
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
                    page_path: "/commercial/fire-strategy",
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
