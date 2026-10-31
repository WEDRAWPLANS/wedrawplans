import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LondonAreaLinks from "../components/LondonAreaLinks";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const PAGE_URL = "https://www.wedrawplans.co.uk/garden-room-outbuilding-plans";
const HERO_IMAGE = "/images/barnet-project-outbuilding.jpg";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20garden%20room%2C%20garden%20studio%20or%20outbuilding%20planning%20drawings.";

export default function GardenRoomOutbuildingPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Garden Room / Outbuilding Plans" });
  }

  function scrollToForm() {
    document.getElementById("garden-outbuilding-quote")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const title =
    "Garden Room & Outbuilding Planning Drawings London | Garden Studio Plans | WEDRAWPLANS";
  const description =
    "Garden room, garden studio, garden office and outbuilding planning drawings across London. Permitted development, Lawful Development Certificate, retrospective and planning application drawing packs from WEDRAWPLANS.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": PAGE_URL + "#service",
    name: "Garden Room and Outbuilding Planning Drawings",
    url: PAGE_URL,
    serviceType: [
      "Garden room planning drawings",
      "Garden studio drawings",
      "Garden office planning drawings",
      "Outbuilding planning drawings",
      "Permitted development drawings",
      "Lawful Development Certificate drawings",
      "Retrospective outbuilding drawings",
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
      { "@type": "ListItem", position: 2, name: "Garden Room & Outbuilding Plans", item: PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a garden room or outbuilding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many houses can use permitted development rights for certain outbuildings, but the rules depend on location, height, position, site coverage, use, previous restrictions and whether the property is a house rather than a flat or maisonette. We check the project route before relying on permitted development.",
        },
      },
      {
        "@type": "Question",
        name: "Can WEDRAWPLANS prepare drawings for a Lawful Development Certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Where an outbuilding is intended to rely on permitted development rights, we can prepare the existing and proposed drawings needed to support a Lawful Development Certificate application.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with a retrospective garden outbuilding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can prepare measured existing drawings and advise on the appropriate planning or lawfulness route for an outbuilding that has already been built. The correct application type depends on the facts of the case.",
        },
      },
      {
        "@type": "Question",
        name: "Can a garden room be used as a separate dwelling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A separate self-contained dwelling is not treated in the same way as an incidental domestic outbuilding. Use is important, so any proposal involving independent living accommodation should be reviewed carefully before relying on permitted development rights.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover every London borough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WEDRAWPLANS provides garden room, garden studio and outbuilding drawing services across every London borough and selected surrounding M25 areas.",
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
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center lg:py-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-700">
                GARDEN ROOMS • GARDEN STUDIOS • OUTBUILDINGS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Garden Room & Outbuilding Planning Drawings in London
              </h1>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
                Planning drawings for garden rooms, garden studios, garden offices, home gyms,
                summerhouses and other domestic outbuildings. We prepare the right drawing package
                for permitted development, Lawful Development Certificate, full planning or retrospective routes.
              </p>

              <ul className="mt-6 space-y-2 text-sm leading-7 text-slate-800">
                <li>• Existing and proposed site plans and floor plans</li>
                <li>• Elevations, sections and roof information where required</li>
                <li>• Key height, boundary and footprint dimensions</li>
                <li>• Permitted development and Lawful Development Certificate drawings</li>
                <li>• Retrospective outbuilding drawing packages</li>
                <li>• Every London borough covered</li>
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

            <div id="garden-outbuilding-quote" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Garden room / outbuilding quote</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send the postcode and intended use. We will confirm the drawing scope and likely planning route.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input type="hidden" name="service" value="Garden Room / Outbuilding Planning Drawings" />
                <input name="name" required placeholder="Name" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="phone" required placeholder="Telephone" className="w-full rounded-xl border px-4 py-3 text-sm" />
                  <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3 text-sm" />
                </div>
                <input name="postcode" required placeholder="Postcode" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <select name="projectType" defaultValue="" required className="w-full rounded-xl border px-4 py-3 text-sm">
                  <option value="" disabled>Select project</option>
                  <option>Garden room</option>
                  <option>Garden studio</option>
                  <option>Garden office</option>
                  <option>Home gym outbuilding</option>
                  <option>Summerhouse / ancillary outbuilding</option>
                  <option>Retrospective existing outbuilding</option>
                  <option>Other garden building</option>
                </select>
                <textarea name="message" rows={5} placeholder="Tell us the approximate size and intended use" className="w-full rounded-xl border px-4 py-3 text-sm" />
                <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700">
                  Request my quote
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <Image
                  src={HERO_IMAGE}
                  alt="Approved WEDRAWPLANS outbuilding and garden room project showcase in Barnet"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">REAL WEDRAWPLANS PROJECT EXPERIENCE</p>
                <h2 className="mt-2 text-2xl font-extrabold">Approved outbuilding project experience in Barnet</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Our Barnet area page already showcases a genuine approved outbuilding and garden room project.
                  That experience now supports this dedicated London-wide service page, giving homeowners a direct route
                  from searches such as garden studio plans, outbuilding planning drawings and garden room permitted development.
                </p>
                <Link href="/areas/barnet" className="mt-4 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4">
                  View our Barnet architectural drawing page
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">The planning route depends on the building and its use</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
              Outbuildings can be permitted development for houses when all relevant limits and conditions are met.
              Height, position, boundary distance, site coverage, designated land, listed-building context and intended use can all affect the route.
              Flats and maisonettes do not have the same householder permitted development allowances.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Garden rooms & studios", "Drawings for general leisure, hobby and ancillary domestic spaces, with the planning route checked against the property and proposal."],
                ["Garden offices", "A home office can raise use questions depending on how it operates. We prepare drawings and help identify the appropriate planning route."],
                ["Home gyms", "Popular rear-garden projects where dimensions, boundary relationships and use need to be presented clearly."],
                ["Retrospective outbuildings", "Measured existing drawings for structures already built, with the correct retrospective planning or lawfulness route considered."],
                ["LDC / permitted development", "Where the proposal relies on permitted development rights, clear drawings can support a Lawful Development Certificate application."],
                ["Full planning applications", "Where permitted development does not apply, we can prepare the planning drawing package for submission."],
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
            <h2 className="text-2xl font-extrabold">Related homeowner drawing services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Planning Drawings", "/planning-drawings"],
                ["Permitted Development / LDC", "/lawful-development-certificate-drawings"],
                ["Building Regulation Drawings", "/building-regulation-drawings"],
                ["Solar Panel Planning Drawings", "/solar-panel-planning-drawings"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-2xl border bg-slate-50 p-5 text-sm font-bold hover:bg-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LondonAreaLinks heading="Garden room and outbuilding drawings across every London borough" />

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">Garden room & outbuilding FAQ</h2>
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
