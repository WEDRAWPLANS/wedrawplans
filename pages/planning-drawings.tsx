import React from "react";
import Head from "next/head";
import Link from "next/link";
import LondonAreaLinks from "../components/LondonAreaLinks";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const PAGE_URL = "https://www.wedrawplans.co.uk/planning-drawings";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20planning%20drawings.";

export default function PlanningDrawingsPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Planning Drawings London" });
  }

  function scrollToForm() {
    document.getElementById("planning-drawings-quote")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const title = "Planning Drawings London | Planning Application Plans | WEDRAWPLANS";
  const description =
    "Planning drawings in London for house extensions, loft conversions, outbuildings, conversions and new builds. Existing and proposed plans, elevations, sections and council-ready application packs across every London borough.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": PAGE_URL + "#service",
    name: "Planning Drawings London",
    url: PAGE_URL,
    serviceType: [
      "Planning drawings",
      "Planning application drawings",
      "Householder planning application drawings",
      "Existing and proposed plans",
      "Existing and proposed elevations",
      "Planning sections and roof plans",
      "Planning Portal submission support",
    ],
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://www.wedrawplans.co.uk/#business",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/",
      telephone: "+44 20 3654 8508",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "GB",
      },
    },
    areaServed: ["London", "Greater London", "M25 and surrounding areas"],
    description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Planning Drawings", item: PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What planning drawings are normally needed for a house extension?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical householder application usually needs existing and proposed floor plans and elevations, a location plan and a site or block plan. Roof plans and sections may also be required where they help explain height, roof form, levels or massing.",
        },
      },
      {
        "@type": "Question",
        name: "Can WEDRAWPLANS submit the planning application as well as prepare the drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can prepare the drawing package, coordinate the application information and submit through the Planning Portal where this is part of the agreed scope.",
        },
      },
      {
        "@type": "Question",
        name: "Do you prepare planning drawings in every London borough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WEDRAWPLANS covers every London borough and selected surrounding M25 areas for residential planning drawings, extensions, loft conversions, conversions and small development projects.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between planning drawings and Building Regulation drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Planning drawings focus on the proposal's size, appearance, layout and relationship to the site and neighbours. Building Regulation drawings are more technical and show how the work is intended to comply with Building Regulations and be constructed.",
        },
      },
      {
        "@type": "Question",
        name: "Can planning drawings also be used for a Lawful Development Certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, where the proposal is intended to rely on permitted development rights, the relevant existing and proposed drawings can form part of a Lawful Development Certificate application.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-700">
                PLANNING APPLICATION DRAWINGS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Planning Drawings in London for Homeowners and Residential Projects
              </h1>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
                WEDRAWPLANS prepares clear, council-ready planning drawing packages for house extensions,
                loft conversions, outbuildings, garage conversions, flat conversions and new build projects.
                We cover every London borough and selected surrounding M25 areas.
              </p>

              <ul className="mt-6 space-y-2 text-sm leading-7 text-slate-800">
                <li>• Existing and proposed floor plans</li>
                <li>• Existing and proposed elevations</li>
                <li>• Roof plans and sections where required</li>
                <li>• Location and block plan coordination</li>
                <li>• Householder, full planning and related application support</li>
                <li>• Planning Portal submission support where included in scope</li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700"
                >
                  Get a fixed quote
                </button>
                <a href={PHONE_LINK} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold">
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div id="planning-drawings-quote" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Planning drawings quote</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send your postcode and project type and we will confirm the most suitable drawing route.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input name="name" required placeholder="Name" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="phone" required placeholder="Telephone" className="w-full rounded-xl border px-4 py-3 text-sm" />
                  <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3 text-sm" />
                </div>
                <input name="postcode" required placeholder="Postcode" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <select name="projectType" defaultValue="" required className="w-full rounded-xl border px-4 py-3 text-sm">
                  <option value="" disabled>Select project type</option>
                  <option>House extension</option>
                  <option>Loft conversion</option>
                  <option>Outbuilding or garden room</option>
                  <option>Garage conversion</option>
                  <option>Flat conversion</option>
                  <option>New build</option>
                  <option>Other planning drawings</option>
                </select>
                <textarea name="message" rows={5} placeholder="Briefly describe what you want to build" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700">
                  Request my quote
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Planning drawing packages we prepare</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
              The exact set depends on the project and application route. We focus on giving the local planning authority
              a clear, consistent drawing package that explains the existing property, the proposed work and how the design relates to its surroundings.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["House extension planning drawings", "Rear, side return, wraparound and two-storey extension plans with the elevations and sections needed to explain the proposal clearly."],
                ["Loft conversion planning drawings", "Dormer, mansard, hip-to-gable and roof alteration drawings for planning permission or lawful development routes."],
                ["Outbuilding and garden room drawings", "Site and building drawings for garden structures where planning permission or formal confirmation is needed."],
                ["Conversion and remodelling drawings", "Existing and proposed layouts for garages, flats, HMOs and residential reconfiguration where planning controls apply."],
                ["New build planning drawings", "Plans, elevations, sections and site layouts for individual homes, infill plots and small residential development proposals."],
                ["Planning revisions and officer responses", "Updated drawings where design changes are required during the application process, subject to the agreed scope."],
              ].map(([heading, body]) => (
                <div key={heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-extrabold">{heading}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Planning permission, permitted development and Building Regulations</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border bg-white p-5">
                <h3 className="font-bold">Planning permission</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Used where the proposal needs formal planning approval. We prepare the existing and proposed drawings needed to communicate the design clearly.
                </p>
              </div>
              <div className="rounded-2xl border bg-white p-5">
                <h3 className="font-bold">Permitted development / LDC</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Some projects can rely on permitted development rights. A Lawful Development Certificate can provide formal council confirmation where appropriate.
                </p>
                <Link href="/lawful-development-certificate-drawings" className="mt-3 inline-block text-sm font-semibold text-blue-700 underline">
                  Lawful Development Certificate drawings
                </Link>
              </div>
              <div className="rounded-2xl border bg-white p-5">
                <h3 className="font-bold">Building Regulations</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Once the design route is settled, technical drawings can take the project forward for Building Control and construction.
                </p>
                <Link href="/building-regulation-drawings" className="mt-3 inline-block text-sm font-semibold text-blue-700 underline">
                  Building Regulation drawings
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Related homeowner drawing services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Extension Plans", "/extension-plans"],
                ["Loft Conversion Plans", "/loft-conversion-plans"],
                ["Building Regulation Drawings", "/building-regulation-drawings"],
                ["New Build Plans", "/new-build-plans"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-2xl border bg-slate-50 p-5 text-sm font-bold hover:bg-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LondonAreaLinks heading="Planning drawings in every London borough" />

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Planning drawings FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="rounded-2xl border bg-white p-5">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
