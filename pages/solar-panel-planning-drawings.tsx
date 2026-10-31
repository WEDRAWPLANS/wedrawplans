import React from "react";
import Head from "next/head";
import Link from "next/link";
import LondonAreaLinks from "../components/LondonAreaLinks";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const PAGE_URL = "https://www.wedrawplans.co.uk/solar-panel-planning-drawings";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20solar%20panel%20planning%20drawings.";

export default function SolarPanelPlanningDrawingsPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Solar Panel Planning Drawings" });
  }

  function scrollToForm() {
    document.getElementById("solar-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const title = "Solar Panel Planning Drawings London | Roof Plans & Elevations | WEDRAWPLANS";
  const description =
    "Solar panel and rooftop PV planning drawings in London. Roof plans, elevations, panel layouts and dimensions for planning, permitted development, prior approval and sensitive locations.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": PAGE_URL + "#service",
    name: "Solar Panel Planning Drawings London",
    url: PAGE_URL,
    serviceType: [
      "Solar panel planning drawings",
      "Roof-mounted solar PV drawings",
      "Solar panel roof plans",
      "Solar panel elevations",
      "Solar permitted development drawings",
      "Solar prior approval drawings",
      "Solar planning application drawings",
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
      { "@type": "ListItem", position: 2, name: "Solar Panel Planning Drawings", item: PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do solar panels need planning permission in London?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many domestic solar installations can be permitted development, but the result depends on the building, roof type, siting, projection, listed or designated context and the specific installation. The domestic solar permitted development rules changed in August 2026, so current eligibility should be checked for each project.",
        },
      },
      {
        "@type": "Question",
        name: "What drawings are useful for a solar planning application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A solar planning package may include an existing and proposed roof plan, relevant elevations, panel layout, key dimensions, projection information and notes identifying associated external equipment where relevant.",
        },
      },
      {
        "@type": "Question",
        name: "Can you show manufacturer panel dimensions on the drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can coordinate manufacturer dimensions and the proposed array layout into the architectural planning drawings. The installer or MCS specialist remains responsible for electrical, performance and installation design.",
        },
      },
      {
        "@type": "Question",
        name: "Can you prepare solar drawings for conservation or sensitive locations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Where solar equipment is on a listed, conservation or otherwise sensitive site, we can prepare drawings that clearly show roof location, visibility, dimensions and the relationship to the building so the planning route can be assessed properly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover every London borough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WEDRAWPLANS provides solar panel planning drawing services across every London borough and selected surrounding M25 areas.",
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
                ROOFTOP SOLAR • PV • PLANNING DRAWINGS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Solar Panel Planning Drawings in London
              </h1>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
                Architectural planning drawings for rooftop solar and PV installations, including roof plans,
                elevations, array layouts, dimensions and planning information for permitted development,
                prior approval or full planning routes where required.
              </p>

              <ul className="mt-6 space-y-2 text-sm leading-7 text-slate-800">
                <li>• Existing and proposed roof plans</li>
                <li>• Elevations showing panel location and projection</li>
                <li>• Panel array layouts and manufacturer dimensions</li>
                <li>• Flat-roof and pitched-roof solar drawing packages</li>
                <li>• Planning, permitted development and prior approval support</li>
                <li>• Conservation and sensitive-location drawing support</li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={scrollToForm} className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700">
                  Get a fixed quote
                </button>
                <a href={PHONE_LINK} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold">
                  Call {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white">
                  WhatsApp
                </a>
              </div>
            </div>

            <div id="solar-quote" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Solar planning drawings quote</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send your postcode, roof type and what the installer proposes. We will confirm the drawing scope.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input type="hidden" name="service" value="Solar Panel Planning Drawings" />
                <input name="name" required placeholder="Name" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="phone" required placeholder="Telephone" className="w-full rounded-xl border px-4 py-3 text-sm" />
                  <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3 text-sm" />
                </div>
                <input name="postcode" required placeholder="Postcode" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <select name="projectType" defaultValue="" required className="w-full rounded-xl border px-4 py-3 text-sm">
                  <option value="" disabled>Select solar project</option>
                  <option>Roof-mounted solar on pitched roof</option>
                  <option>Solar panels on flat roof</option>
                  <option>Solar panels in conservation / sensitive location</option>
                  <option>Solar planning / prior approval drawings</option>
                  <option>Solar plus external battery / equipment drawings</option>
                  <option>Other solar planning enquiry</option>
                </select>
                <textarea name="message" rows={5} placeholder="Tell us the proposed panel quantity, roof type and any installer information you already have" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700">
                  Request my quote
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">CURRENT 2026 PLANNING CONTEXT</p>
            <h2 className="mt-2 text-2xl font-extrabold">Domestic solar permitted development rules changed in August 2026</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700">
              The permitted development rules for domestic solar equipment in England were updated on 27 August 2026,
              with transitional arrangements following the change. That makes accurate, current project-specific checking especially important.
              Many installations can still be permitted development, but roof type, projection, location, designated land and the building context can affect the route.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">What WEDRAWPLANS can show clearly for planning</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Roof plan & array layout", "The proposed panel arrangement shown accurately in relation to ridges, hips, valleys, parapets, rooflights and roof edges."],
                ["Elevations & projection", "Relevant elevations showing panel position, height and projection so the local planning authority can understand visual impact."],
                ["Manufacturer dimensions", "Panel sizes and associated external equipment dimensions can be coordinated from the manufacturer's information supplied for the project."],
                ["Flat-roof solar", "Clear drawings showing panel position and overall relationship to the roof where flat-roof planning or prior approval issues need to be considered."],
                ["Conservation & sensitive sites", "Drawings that make roof visibility, siting and the relationship to the existing building clear where additional planning scrutiny is likely."],
                ["Associated external equipment", "Where relevant to the planning package, batteries or other external equipment can be shown and dimensioned alongside the solar proposal."],
              ].map(([heading, body]) => (
                <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-extrabold">{heading}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Real WEDRAWPLANS solar-project experience</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
              WEDRAWPLANS has recent project experience involving rooftop solar planning drawings and associated external equipment in Greenwich and central London.
              Our role is the architectural and planning presentation: clear roof plans, elevations, locations and dimensions that can be assessed by the council.
              Electrical design, system performance and MCS installation design remain with the specialist solar installer.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Related drawing services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Planning Drawings", "/planning-drawings"],
                ["Permitted Development / LDC", "/lawful-development-certificate-drawings"],
                ["Garden Room & Outbuilding Plans", "/garden-room-outbuilding-plans"],
                ["Building Regulation Drawings", "/building-regulation-drawings"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-2xl border bg-slate-50 p-5 text-sm font-bold hover:bg-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LondonAreaLinks heading="Solar panel planning drawings across every London borough" />

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Solar panel planning FAQ</h2>
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
