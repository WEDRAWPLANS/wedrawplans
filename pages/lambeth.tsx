import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Lambeth";

export default function Lambeth() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Lambeth" });
  }

  function scrollToForm() {
    const el = document.getElementById("lambeth-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/lambeth",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Lambeth",
      "Clapham",
      "Brixton",
      "Streatham",
      "Norwood",
      "Vauxhall",
      "Waterloo",
      "Kennington borders",
      "Herne Hill"
    ],
    description:
      "Architectural drawing services in Lambeth for extensions, loft conversions, flat conversions, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Lambeth?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Lambeth can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Lambeth strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Lambeth can be strict in conservation areas and on key streets in Clapham, Brixton and near the river. Clear drawings and a strong planning case are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Lambeth Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Lambeth Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Lambeth Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Lambeth | Extensions and Lofts | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Lambeth for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Fast surveys, clear drawings and full planning support with Lambeth Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/lambeth" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            <div>
              <div className="text-lg font-semibold tracking-[0.2em] uppercase">
                WEDRAWPLANS
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Architectural drawing consultants
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-[#1ebe57]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-slate-200 bg-emerald-900 text-white">
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
            <Image
              src="/images/drawings.jpg"
              alt="Architectural drawings for Lambeth extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 py-10 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-100">
                  WEDRAWPLANS • Lambeth
                </p>

                <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                  Architectural Drawings in Lambeth
                </h1>

                <p className="mt-4 max-w-3xl text-sm md:text-base text-emerald-50">
                  Architectural drawing services in Clapham, Brixton, Streatham, Norwood,
                  Vauxhall, Waterloo and across Lambeth. We prepare drawings for
                  extensions, loft conversions, flat conversions and outbuildings, aligned
                  with Lambeth Council guidance and current Building Regulations.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
                  <ul className="space-y-1 list-disc pl-4 text-emerald-50">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with basements and split levels</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4 text-emerald-50">
                    <li>Drawings tailored to Lambeth policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-4 text-xs text-emerald-100">
                  Typical Lambeth projects include rear and wrap extensions in
                  Streatham and Norwood, loft conversions in Clapham and Brixton, and
                  refurbishments and flat layouts near Vauxhall and Waterloo.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition"
                  >
                    Get your free Lambeth quote
                  </button>

                  <a
                    href={PHONE_LINK}
                    className="text-sm font-medium text-white underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div id="lambeth-quote">
                <div className="rounded-2xl bg-white p-5 shadow-xl">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-2 text-[13px] text-slate-700">
                    Tell us a little about your property and what you plan to build. We will
                    reply with a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                    <div>
                      <label className="text-[11px] font-medium text-slate-900">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-2 focus:border-emerald-700 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-medium text-slate-900">Telephone</label>
                        <input
                          name="phone"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-2 focus:border-emerald-700 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-900">Email</label>
                        <input
                          name="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-2 focus:border-emerald-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-900">Lambeth postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW2 1AA"
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-2 focus:border-emerald-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-900">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-2 focus:border-emerald-700 focus:outline-none"
                      >
                        <option value="" disabled>Select one</option>
                        <option>Extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-900">Brief description of your project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        className="w-full rounded border border-slate-300 px-2 py-2 focus:border-emerald-700 focus:outline-none"
                        placeholder="Tell us about your Lambeth project…"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-emerald-800 px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-emerald-700"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[12px] text-slate-600">
                      No obligation. Same-day response on most enquiries.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-5xl px-4 py-14 lg:px-6 space-y-14">
          <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Architectural drawing services in Lambeth
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                loft conversions, flat conversions, refurbishments and outbuildings
                across the London Borough of Lambeth.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Clapham, Brixton, Streatham, Norwood, Vauxhall,
                Waterloo and Herne Hill, with drawings designed for terraces, semis,
                townhouses and flats.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Lambeth project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Drawings for period and modern Lambeth homes
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections that suit Victorian terraces,
                  inter war semis and modern apartments common across Lambeth.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Lambeth areas we cover</h3>
              <Image
                src="/images/lambeth-area.jpg"
                alt="Lambeth residential street"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Lambeth, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Clapham</li>
                  <li>Brixton</li>
                  <li>Streatham</li>
                  <li>West Norwood</li>
                  <li>Tulse Hill</li>
                  <li>Herne Hill</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Vauxhall</li>
                  <li>Waterloo</li>
                  <li>Oval and Kennington borders</li>
                  <li>Stockwell</li>
                  <li>Local estates and streets</li>
                  <li>River and urban locations</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Lambeth</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and wrap extensions</li>
                  <li>Side return kitchen extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal reconfiguration and knock throughs</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Flat conversions and layout upgrades</li>
                  <li>Outbuildings and garden rooms</li>
                  <li>Garage conversions</li>
                  <li>Basement waterproofing and fit out</li>
                  <li>Improved light, storage and flow</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Lambeth
            </h2>
            <p className="text-sm text-slate-700">
              Many Lambeth houses have permitted development rights, but conservation
              areas and character streets often require a full planning application.
              Flats and maisonettes always need planning permission. We confirm the
              correct route at the start so you know what is realistic.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typical depths around 3 to 4 metres under PD</li>
                  <li>Larger schemes via Prior Approval or planning</li>
                  <li>Impact on neighbours and gardens assessed</li>
                  <li>We review similar approvals nearby</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof changes tightly controlled</li>
                  <li>Dormer size guided by roof and context</li>
                  <li>Side windows normally obscure and high level</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flats and conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No permitted development rights for flats</li>
                  <li>Full planning permission required</li>
                  <li>Space and amenity standards must be met</li>
                  <li>We design layouts to London Plan standards</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Lambeth
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof and terrace layouts</li>
                <li>Block plans and location plans</li>
                <li>Design and access or heritage statements where needed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Lambeth
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire strategy and escape routes</li>
                <li>Thermal build ups and insulation specification</li>
                <li>Acoustic performance between homes and flats</li>
                <li>Ventilation, extracts and comfort</li>
                <li>Drainage and technical notes for contractors</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Lambeth projects
            </h2>
            <p className="text-sm text-emerald-900">
              Lambeth includes busy high streets, quiet terraces and conservation
              areas. We design schemes that work with local character while improving
              layouts, circulation, light and value.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with flat conversions in Lambeth?
                </h3>
                <p>
                  Yes. We prepare layouts and drawings for flat conversions in
                  Clapham, Brixton, Streatham and other parts of Lambeth, designed to
                  meet space, light and amenity standards.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Lambeth?
                </h3>
                <p>
                  In most cases we can arrange the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage the planning submission to Lambeth Council?
                </h3>
                <p>
                  Yes. We manage the full application, upload documents and respond to
                  planner comments through to decision.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations?
                </h3>
                <p>
                  We work with structural engineers so that beams, supports and load
                  bearing elements are clearly designed and shown on the plans.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Lambeth project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                flat conversion or refurbishment you have in mind. We will review it
                and provide a fixed quote the same day.
              </p>
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <a
                href={PHONE_LINK}
                className="font-semibold text-emerald-300 underline"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href="mailto:info@wedrawplans.com"
                className="font-semibold text-emerald-300 underline"
              >
                info@wedrawplans.com
              </a>
              <button
                onClick={scrollToForm}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-100"
              >
                Get your free Lambeth quote
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4">
            <p>
              See also{" "}
              <a href="/extension-plans" className="underline text-emerald-700">
                House extension drawings
              </a>
              ,{" "}
              <a
                href="/loft-conversion-plans"
                className="underline text-emerald-700"
              >
                Loft conversion drawings
              </a>
              {" "}and{" "}
              <a href="/" className="underline text-emerald-700">
                WEDRAWPLANS home page
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
