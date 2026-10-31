import React from "react";
import Head from "next/head";
import Link from "next/link";
import LondonAreaLinks from "../components/LondonAreaLinks";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const PAGE_URL = "https://www.wedrawplans.co.uk/lawful-development-certificate-drawings";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20drawings%20for%20a%20Lawful%20Development%20Certificate%20or%20permitted%20development%20project.";

export default function LawfulDevelopmentCertificateDrawingsPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Lawful Development Certificate Drawings" });
  }

  function scrollToForm() {
    document.getElementById("ldc-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const title = "Lawful Development Certificate Drawings London | Permitted Development Plans | WEDRAWPLANS";
  const description =
    "Lawful Development Certificate and permitted development drawings in London for extensions, loft conversions, roof alterations and outbuildings. Council-ready existing and proposed plans across every London borough.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": PAGE_URL + "#service",
    name: "Lawful Development Certificate Drawings",
    url: PAGE_URL,
    serviceType: [
      "Lawful Development Certificate drawings",
      "Permitted development drawings",
      "Certificate of Lawfulness plans",
      "Extension permitted development drawings",
      "Loft conversion permitted development drawings",
      "Existing and proposed plans and elevations",
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
      { "@type": "ListItem", position: 2, name: "Lawful Development Certificate Drawings", item: PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Lawful Development Certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Lawful Development Certificate is a formal decision from the local planning authority confirming whether a proposed or existing use or development is lawful for planning purposes. It is commonly used where homeowners want formal confirmation that work falls within permitted development rights.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need drawings for a Lawful Development Certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clear drawings are normally important because the council needs enough information to assess dimensions, roof form, location and the relationship between the existing property and the proposed works. The exact information depends on the project.",
        },
      },
      {
        "@type": "Question",
        name: "Can WEDRAWPLANS prepare permitted development drawings for extensions and loft conversions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We prepare existing and proposed drawings for rear extensions, loft conversions, roof alterations and other homeowner projects where permitted development rights may apply.",
        },
      },
      {
        "@type": "Question",
        name: "Does a Lawful Development Certificate replace Building Regulations approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Planning law and Building Regulations are separate systems. A project can be lawful in planning terms and still require Building Regulations approval and technical drawings before construction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover every London borough for Lawful Development Certificate drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WEDRAWPLANS covers every London borough and selected surrounding M25 locations for permitted development and Lawful Development Certificate drawing packages.",
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
                PERMITTED DEVELOPMENT & CERTIFICATE OF LAWFULNESS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Lawful Development Certificate Drawings in London
              </h1>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
                If your extension, loft conversion or other home project is intended to fall within permitted development,
                WEDRAWPLANS can prepare the existing and proposed drawings needed to present the scheme clearly to the council
                and support a Lawful Development Certificate application.
              </p>

              <ul className="mt-6 space-y-2 text-sm leading-7 text-slate-800">
                <li>• Existing and proposed floor plans</li>
                <li>• Existing and proposed elevations</li>
                <li>• Roof plans and sections where relevant</li>
                <li>• Key dimensions needed to explain the proposal</li>
                <li>• Extension, loft and roof alteration drawing packages</li>
                <li>• Every London borough covered</li>
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

            <div id="ldc-quote" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Permitted development / LDC quote</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send the postcode and a short description. We will confirm the drawing scope and the likely application route.
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
                  <option>Rear extension</option>
                  <option>Loft conversion</option>
                  <option>Roof alteration</option>
                  <option>Outbuilding or garden room</option>
                  <option>Existing work / retrospective lawfulness</option>
                  <option>Other permitted development enquiry</option>
                </select>
                <textarea name="message" rows={5} placeholder="Briefly describe the proposed or existing work" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700">
                  Request my quote
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Home projects commonly considered under permitted development</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
              Whether permitted development rights apply depends on the property, the proposal, previous alterations and local restrictions.
              We do not assume a project qualifies: the address and design need to be checked before the route is relied upon.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Rear extensions", "Single-storey rear additions can sometimes fall within permitted development limits, subject to the detailed rules and the property's planning history."],
                ["Loft conversions and dormers", "Many houses can use permitted development rights for certain roof extensions, but volume, position, height, materials and other limitations matter."],
                ["Hip-to-gable roof alterations", "Some side roof alterations may be possible under permitted development, depending on the house and how the proposal meets the relevant limitations."],
                ["Rooflights", "Roof windows may be permitted development where the relevant projection, position and other requirements are satisfied."],
                ["Outbuildings", "Garden buildings can sometimes be permitted development where their use, position, height and site coverage comply with the applicable limits."],
                ["Existing work and lawfulness", "For completed work, a different evidence-based lawful development route may apply. The required drawings and evidence depend on the circumstances."],
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
            <h2 className="text-2xl font-extrabold">What the drawings need to demonstrate</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["The existing property", "Accurate existing plans and elevations establish the house before the work and help the council understand the baseline."],
                ["The proposed dimensions", "Key depths, heights, roof changes and other dimensions should be clear enough for the council to compare the proposal with the relevant planning rules."],
                ["The relationship to the original house", "Permitted development rules often depend on the original dwelling and previous additions, so the drawing set needs to communicate that relationship clearly."],
                ["The correct planning route", "If permitted development is not the right route, we can instead prepare planning drawings for a householder or other planning application where appropriate."],
              ].map(([heading, body]) => (
                <div key={heading} className="rounded-2xl border bg-white p-5">
                  <h3 className="font-bold">{heading}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Related drawing services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Garden Room & Outbuilding Plans", "/garden-room-outbuilding-plans"],
                ["Solar Panel Planning Drawings", "/solar-panel-planning-drawings"],
                ["Planning Drawings", "/planning-drawings"],
                ["Extension Plans", "/extension-plans"],
                ["Loft Conversion Plans", "/loft-conversion-plans"],
                ["Building Regulation Drawings", "/building-regulation-drawings"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-2xl border bg-slate-50 p-5 text-sm font-bold hover:bg-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LondonAreaLinks heading="Permitted development and Lawful Development Certificate drawings across London" />

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Lawful Development Certificate FAQ</h2>
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
