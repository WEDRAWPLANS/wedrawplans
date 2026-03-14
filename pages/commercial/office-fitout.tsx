import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GBP_LINK = "https://share.google/gzouKXnSvGwtgrepx";
const PAGE_URL = "https://www.wedrawplans.co.uk/commercial/office-fitout";
const PAGE_TITLE =
  "Office Fit Out Drawings London | Office Planning & Commercial Interior Architectural Plans | WEDRAWPLANS";
const PAGE_DESCRIPTION =
  "Office fit out drawings in London for workspace redesign, commercial interior layouts, office planning applications, change of use support and Building Regulations packages. Fast initial survey within 48 hours in most cases.";
const PAGE_IMAGE = "/images/commercial-office-fitout.jpg";

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
  service: "Office Fit Out Drawings",
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

export default function CommercialOfficeFitOutPage() {
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
          name: "Do office fit out projects need architectural drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many office fit out projects need measured surveys, proposed layouts, planning drawings, Building Regulations drawings, accessibility planning and technical coordination for internal alterations and commercial compliance.",
          },
        },
        {
          "@type": "Question",
          name: "Can WEDRAWPLANS help with office layout redesign and workspace planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We prepare office fit out drawings for open plan offices, meeting rooms, reception areas, breakout spaces, staff facilities, circulation planning and commercial workspace reconfiguration across London.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also prepare residential drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to commercial office projects, WEDRAWPLANS also provides extension drawings, loft conversion drawings and new build architectural packages across London and surrounding areas.",
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
      name: "Office Fit Out Drawings",
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
        "Commercial architectural drawings for office fit outs, workspace planning, internal layouts, planning submissions and Building Regulations",
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
      event_label: "office_fitout_page_submit_attempt",
      service: "Office Fit Out Drawings",
      page_path: "/commercial/office-fitout",
      lead_source: "commercial_office_fitout_page",
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
            "Customer requested a quote for office fit out drawings.",
        ].join("\n"),
        raw: {
          pageType: "commercial",
          pageSlug: "office-fitout",
          pageUrl: PAGE_URL,
          businessName: form.businessName,
        },
      });

      trackEvent("generate_lead_success", {
        event_category: "commercial_lead",
        event_label: "office_fitout_page_submit_success",
        service: "Office Fit Out Drawings",
        page_path: "/commercial/office-fitout",
        lead_source: "commercial_office_fitout_page",
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
        event_label: "office_fitout_page_submit_error",
        service: "Office Fit Out Drawings",
        page_path: "/commercial/office-fitout",
        lead_source: "commercial_office_fitout_page",
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
          content="office fit out drawings London, office planning drawings London, commercial interior architectural drawings, workspace redesign plans, office Building Regulations drawings, office layout planning London, office refurbishment drawings, commercial workspace design"
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
                  Office Fit Out Drawings in London
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Architectural drawings for office fit outs, workspace
                  redesigns, commercial interiors, office reconfiguration and
                  planning support across London. We help landlords, businesses,
                  developers and commercial occupiers turn underperforming space
                  into efficient, compliant and professional work environments.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_get_quote",
                        page_path: "/commercial/office-fitout",
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
                        page_path: "/commercial/office-fitout",
                      })
                    }
                  >
                    Call 020 3654 8508
                  </a>

                  <a
                    href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20office%20fit%20out%20drawings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        event_category: "commercial_cta",
                        event_label: "hero_whatsapp_click",
                        page_path: "/commercial/office-fitout",
                      })
                    }
                  >
                    WhatsApp us
                  </a>
                </div>

                <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Measured surveys and existing office plans
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Proposed layouts for modern workspace planning
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Fast initial survey within 48 hours in most cases
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    Offices, studios, serviced space and mixed use buildings
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src={PAGE_IMAGE}
                  alt="Office fit out architectural drawings with detailed plans and realistic office interior visual"
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
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Office fit out drawings prepared for approval, coordination and long term workspace quality
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Businesses no longer want basic floor plans and generic layout
                sketches. They want commercial interiors that improve workflow,
                presentation, staff comfort, client experience and long term
                property value. That starts with professional architectural
                drawings that communicate the proposal clearly from the very first stage.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                WEDRAWPLANS prepares office fit out drawings for landlords,
                companies, serviced office operators, developers and commercial
                property owners across London. Whether you are reconfiguring an
                outdated office, fitting out a newly leased unit, converting
                upper floors to workspace or preparing a mixed commercial scheme,
                we help move the project from idea to approval with a strong,
                practical and commercially focused drawing package.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">What we prepare</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Measured surveys of existing commercial premises</li>
                    <li>Existing and proposed office plans</li>
                    <li>Workspace zoning and desk arrangement plans</li>
                    <li>Meeting room, reception and breakout layouts</li>
                    <li>Planning drawing packs for submission</li>
                    <li>Building Regulations support where required</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold">Project types covered</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Open plan office refurbishments</li>
                    <li>Workspace reconfiguration and internal fit outs</li>
                    <li>Serviced office and co working layouts</li>
                    <li>Commercial upper floor conversions to office use</li>
                    <li>Studio and admin space planning</li>
                    <li>Mixed use buildings with office accommodation</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Why businesses contact us for office fit out drawings
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "A commercial tenant needs a professional layout before signing off a fit out",
                  "An outdated office needs reconfiguration to improve desk space, meeting rooms and workflow",
                  "A landlord wants to reposition a tired unit for new business tenants",
                  "A mixed use property needs office accommodation properly planned and presented",
                  "A workspace concept needs measured drawings before pricing and contractor coordination",
                  "A planning or Building Regulations submission needs clean, professional and compliant drawing information",
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
                Why clients choose WEDRAWPLANS for office fit out drawings
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Efficient, professional space planning</h3>
                  <p className="mt-3 text-slate-700">
                    We prepare office layouts that help businesses organise
                    workstations, meeting rooms, reception areas, circulation
                    routes and support spaces in a practical and visually clear way.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Strong technical presentation</h3>
                  <p className="mt-3 text-slate-700">
                    Our drawing packages are prepared to communicate the proposal
                    clearly to landlords, consultants, contractors and approval
                    bodies, helping projects move forward with less confusion and
                    stronger coordination.
                  </p>
                </div>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Related architectural drawing services
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Alongside office fit out work, WEDRAWPLANS also provides
                professional drawing packages for residential extensions, loft
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
                    House extension drawings for rear extensions, side returns,
                    wrap around layouts and planning submissions.
                  </p>
                </Link>

                <Link
                  href="/loft-conversion-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">Loft conversion drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Dormers, mansards, hip to gable lofts and residential
                    planning packages.
                  </p>
                </Link>

                <Link
                  href="/new-build-plans"
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">New build drawings</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    New homes, infill plots and small development architectural
                    packages.
                  </p>
                </Link>
              </div>

              <h2 className="mt-14 text-3xl font-bold tracking-tight">
                Frequently asked questions
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Do internal office changes always need drawings?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    In many cases yes. Even where external planning is limited,
                    fit out works still benefit from measured surveys, proposed
                    layouts, technical coordination and Building Regulations
                    information. Clear drawings reduce mistakes and help the
                    project move faster.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    Can you help with reception areas, meeting rooms and staff facilities?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Yes. We prepare layouts for reception zones, desk planning,
                    staff facilities, meeting rooms, circulation, breakout spaces,
                    kitchenettes and support areas depending on the size and type
                    of office environment.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    How quickly can you start?
                  </h3>
                  <p className="mt-3 text-slate-700">
                    We can usually arrange an initial survey within 48 hours in
                    most cases, then move quickly into drawing production once
                    the access and scope are confirmed.
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
                  Get a quote for office fit out drawings
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
                      placeholder="Tell us about the office, the property type, the size of the fit out, whether you need planning permission, internal layout drawings or Building Regulations support."
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
                          page_path: "/commercial/office-fitout",
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
                          page_path: "/commercial/office-fitout",
                        })
                      }
                    >
                      info@wedrawplans.com
                    </a>
                    <a
                      href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20office%20fit%20out%20drawings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          event_category: "commercial_cta",
                          event_label: "sidebar_whatsapp_click",
                          page_path: "/commercial/office-fitout",
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
                    page_path: "/commercial/office-fitout",
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
