import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Newham";

export default function NewhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Newham" });
  }

  function scrollToForm() {
    const el = document.getElementById("newham-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/newham",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Newham",
      "East Ham",
      "West Ham",
      "Upton Park",
      "Plaistow",
      "Forest Gate",
      "Manor Park",
      "Canning Town",
      "Custom House",
      "Stratford",
      "Maryland",
      "Beckton",
    ],
    description:
      "Architectural drawing services in Newham for extensions, loft conversions, flat conversions, HMOs, outbuildings and building regulation plans.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Newham",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Some rear extensions in Newham can be done under permitted development. We confirm the right route after we review your address, property type and what has been done before.",
        },
      },
      {
        "@type": "Question",
        name: "Is Newham strict with loft conversions, HMOs and extensions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Newham is careful with HMOs, flat conversions and larger extensions, especially where parking, amenity space and overcrowding are concerns. Clear drawings and a solid planning case are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Newham Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder applications are commonly around six to eight weeks after validation. Lawful Development Certificates often take around four to six weeks depending on validation and workload.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Newham Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to Newham Council and respond to planning officer queries through to decision.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Newham – Extensions, Lofts, HMOs and Planning
        </title>
        <meta
          name="description"
          content="Architectural drawings in Newham for extensions, loft conversions, HMOs, flat conversions and building regulation packs. Initial survey within 48 hours and full planning support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/newham" />

        <meta property="og:title" content="Architectural Drawings in Newham | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, HMOs, flat conversions and building regs packs across Newham. Initial survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/newham" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="relative bg-emerald-900 text-white overflow-hidden">
          {/* FIX: next/image fill must have a relative parent with size */}
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
            <div className="relative w-full h-full">
              <Image
                src="/images/drawings.jpg"
                alt="Architectural drawings for Newham extensions and lofts"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • NEWHAM
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Newham
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Newham for extensions, loft conversions, HMOs,
              flat conversions, outbuildings and building regulation packs. We prepare drawings
              aligned with Newham Council expectations and current Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Initial survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with HMOs and flat conversions</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Newham policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Newham projects include rear and wrap extensions in East Ham and Forest
                  Gate, loft conversions in Manor Park and Plaistow, and HMO or flat conversion
                  layouts around Stratford, Upton Park and Canning Town.
                </p>
              </div>

              <div className="space-y-2 text-sm text-right md:text-left">
                <p className="text-xs text-emerald-100">Talk to us</p>
                <p className="text-sm text-white">
                  Phone{" "}
                  <a href={PHONE_LINK} className="font-semibold text-white underline">
                    +44 20 3654 8508
                  </a>
                </p>
                <p className="text-sm text-white">
                  Email{" "}
                  <a href="mailto:info@wedrawplans.com" className="font-semibold text-white underline">
                    info@wedrawplans.com
                  </a>
                </p>

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="mt-3 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition"
                >
                  Get your free quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-14 space-y-14">
          {/* FORM */}
          <div
            id="newham-quote"
            className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 md:p-8"
          >
            <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-start">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Free fixed quote for your Newham project</h2>
                <p className="text-sm text-slate-700">
                  Tell us the address and what you want to build. We will reply with a clear fixed fee
                  and the best route, permitted development, lawful development certificate or planning.
                </p>
                <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
                  <li>Extensions and lofts to houses</li>
                  <li>Flat conversions and HMO layouts</li>
                  <li>Building regulation packs and tender drawings</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-600">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600">Phone</label>
                    <input
                      name="phone"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600">Postcode</label>
                  <input
                    name="postcode"
                    required
                    placeholder="E6, E7, E12, E13, E15, E16"
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600">Project type</label>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="Rear extension">Rear extension</option>
                    <option value="Side or wrap extension">Side or wrap extension</option>
                    <option value="Loft conversion">Loft conversion</option>
                    <option value="Flat conversion">Flat conversion</option>
                    <option value="HMO layout">HMO layout</option>
                    <option value="Outbuilding / garden room">Outbuilding / garden room</option>
                    <option value="Building regulation pack">Building regulation pack</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600">Brief description</label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    placeholder="For example: rear extension to terraced house in East Ham with new open plan kitchen"
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition"
                >
                  Get my fixed quote
                </button>

                <p className="text-xs text-slate-500">
                  Or WhatsApp us:{" "}
                  <a className="underline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    message WEDRAWPLANS
                  </a>
                </p>
              </form>
            </div>
          </div>

          {/* INTRO + DRAWINGS CARD */}
          <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Architectural drawing services in Newham</h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares planning and building regulation drawings across Newham, including
                East Ham, West Ham, Upton Park, Plaistow, Forest Gate, Manor Park, Stratford, Beckton,
                Canning Town and Custom House.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We are experienced with tight plots, shared boundaries, HMO layout rules and daylight
                and amenity standards, so your submission is clear and council ready.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Newham project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">Validation ready drawings</h3>
                <p className="text-sm text-slate-700">
                  Clear plans, elevations, sections and notes so planners, builders and building control
                  can review quickly with fewer questions.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Newham areas we cover</h3>
              <Image
                src="/images/newham-area.jpg"
                alt="Newham area street scene"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Drawings across the borough of Newham, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>East Ham</li>
                  <li>West Ham</li>
                  <li>Upton Park</li>
                  <li>Plaistow</li>
                  <li>Forest Gate</li>
                  <li>Manor Park</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Canning Town</li>
                  <li>Custom House</li>
                  <li>Stratford</li>
                  <li>Maryland</li>
                  <li>Beckton</li>
                  <li>Royal Docks fringe</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Newham</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and wrap extensions</li>
                  <li>Side infill extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal remodelling</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Flat conversions</li>
                  <li>HMO layouts</li>
                  <li>Outbuildings and garden rooms</li>
                  <li>Shop to residential layouts</li>
                  <li>Small infill schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Planning and permitted development in Newham</h2>
            <p className="text-sm text-slate-700">
              Many houses have permitted development rights, but flat conversions and HMOs normally need
              full planning permission and may also require licensing compliance. We confirm the correct
              route and advise what evidence is needed so your submission is not delayed.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">House extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>PD checks for previous extensions</li>
                  <li>Neighbour and daylight impacts reviewed</li>
                  <li>Sections used to explain height</li>
                  <li>Clear boundary and visibility notes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Dormer design to suit roof form</li>
                  <li>Overlooking managed with window strategy</li>
                  <li>Volume and set back considerations</li>
                  <li>Fire escape and stairs considered early</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">HMOs and conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Room sizes and amenity standards</li>
                  <li>Fire safety and protected routes</li>
                  <li>Refuse, cycle and storage planning</li>
                  <li>Parking and transport impacts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">Planning drawings for Newham</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof plans and external layouts</li>
                <li>Block plans and location plans</li>
                <li>Statements where required</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">Building regulation drawings for Newham</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and coordination</li>
                <li>Thermal build ups and insulation notes</li>
                <li>Fire protection and escape strategy</li>
                <li>Ventilation and extracts</li>
                <li>Acoustics between rooms and units</li>
                <li>Drainage layouts and construction notes</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">Can you help with HMO and flat conversion layouts</h3>
                <p>
                  Yes. We prepare layouts for HMOs and flat conversions to meet space and fire standards,
                  and we help you understand what planning and licensing steps may apply.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">How fast can you start in Newham</h3>
                <p>In most cases we can arrange an initial survey within 48 hours, subject to access.</p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">Do you manage submissions to Newham Council</h3>
                <p>Yes. We can prepare, submit and support the application through to decision.</p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">Can you do building regs after planning</h3>
                <p>
                  Yes. We provide building regulation packs with key details and coordination, ready for
                  building control and construction pricing.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Ready to start your Newham project</h2>
              <p className="text-sm text-slate-300">
                Send your address and a short description. We will reply with a fixed quote and the best
                submission route.
              </p>
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                +44 20 3654 8508
              </a>
              <a href="mailto:info@wedrawplans.com" className="font-semibold text-emerald-300 underline">
                info@wedrawplans.com
              </a>
              <button
                type="button"
                onClick={scrollToForm}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-100"
              >
                Get your free quote
              </button>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="text-xs text-slate-500 pt-4">
            <p>
              See also:{" "}
              <a href="/extension-plans" className="underline text-emerald-700">
                House extension drawings
              </a>
              ,{" "}
              <a href="/loft-conversion-plans" className="underline text-emerald-700">
                Loft conversion drawings
              </a>{" "}
              and{" "}
              <a href="/" className="underline text-emerald-700">
                WEDRAWPLANS home page
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
