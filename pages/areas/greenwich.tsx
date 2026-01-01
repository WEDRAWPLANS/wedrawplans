import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Greenwich";

export default function GreenwichAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Greenwich" });
  }

  function scrollToForm() {
    const el = document.getElementById("greenwich-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/greenwich",
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
      "Greenwich",
      "West Greenwich",
      "East Greenwich",
      "Blackheath borders",
      "Eltham",
      "Kidbrooke",
      "Charlton",
      "Woolwich",
      "Plumstead",
      "Abbey Wood",
      "Thamesmead"
    ],
    description:
      "Architectural drawing services in Greenwich for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Survey within 48 hours and full planning submission support."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Greenwich",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Greenwich can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Greenwich strict with loft conversions and extensions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Greenwich can be strict in conservation areas and on streets with strong character, especially around central Greenwich and Blackheath borders. Careful design and clear drawings are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Greenwich Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Greenwich Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Greenwich Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Greenwich | Extensions, Lofts, Building Regs</title>
        <meta
          name="description"
          content="Architectural drawings in Greenwich for extensions, loft conversions, refurbishments, outbuildings and building regulation packs. Fixed fees, clear scope, survey within 48 hours and full planning support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/greenwich" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER MATCH HOMEPAGE STYLE */}
        <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                width={420}
                height={140}
                priority
                className="h-24 w-auto object-contain"
              />

              <div className="mt-3 text-[11px] tracking-[0.18em] text-slate-600 uppercase">
                Architectural Drawing Consultants
              </div>

              <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
                Architectural Drawings for Extensions, Lofts + New Builds at an Affordable Fixed Cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">Greenwich</span> borough page
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PHONE_LINK}
                  className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
                >
                  📞 {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-medium shadow-sm hover:bg-[#1ebe57]"
                >
                  💬 <span className="hidden sm:inline">WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Greenwich architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and refurbishments in Greenwich
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawing packages across the Royal Borough of Greenwich,
                  including Greenwich, Eltham, Woolwich, Plumstead, Abbey Wood and Thamesmead.
                  Fixed fees with a clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Measured survey within 48 hours</li>
                  <li>• Planning and permitted development advice</li>
                  <li>• Conservation area awareness (Greenwich and Blackheath borders)</li>
                  <li>• Rear, side return and wrap around extensions</li>
                  <li>• Dormer lofts, hip to gable and roof alterations</li>
                  <li>• Full submission support to the council portal</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="mt-3 text-[12px] text-slate-600">
                  Typical Greenwich projects include family kitchen extensions in Eltham, loft conversions across Charlton and Plumstead,
                  and refurbishment layouts near Woolwich and Abbey Wood.
                </p>
              </div>

              {/* RIGHT FORM */}
              <div id="greenwich-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us your postcode and what you want to build. We will reply with a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Greenwich postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="SE10 9AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "SE10 9AA")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension with rooflights and new open plan kitchen, or dormer loft conversion with ensuite."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      We reply quickly with a clear fixed fee and next steps based on your location, house type and goals.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* RICH CONTENT SECTION (REWRITTEN + STRUCTURED) */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              {/* INTRO + IMAGE CARD */}
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Greenwich
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS prepares planning and building regulation drawings for rear and side extensions, loft conversions,
                    refurbishments, internal reconfiguration and outbuildings across the Royal Borough of Greenwich.
                    We help homeowners and small developers get clear drawings that support smooth approvals and accurate builder pricing.
                  </p>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      How it works
                    </h3>
                    <ol className="mt-2 list-decimal pl-5 space-y-1 text-[13px] text-slate-700">
                      <li>Send your address, postcode and a short brief</li>
                      <li>We confirm the safest route: permitted development, LDC or planning</li>
                      <li>Measured survey, then existing and proposed drawings</li>
                      <li>Submission support and revisions where needed</li>
                      <li>Upgrade to building regulations pack when ready to build</li>
                    </ol>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                    >
                      Get a quick quote
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings for a Greenwich project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings that reduce builder guesswork
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Plans, elevations and sections presented clearly, with coordination notes for structure and building regulations
                      so the quote stage is smoother and the build stage has fewer surprises.
                    </p>
                  </div>
                </div>
              </div>

              {/* AREAS + PROJECT TYPES */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Greenwich areas we cover
                  </h3>
                  <Image
                    src="/images/greenwich-area.jpg"
                    alt="Greenwich residential street"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Architectural drawings across the whole borough, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Greenwich and West Greenwich</li>
                      <li>East Greenwich</li>
                      <li>Blackheath borders</li>
                      <li>Eltham</li>
                      <li>Kidbrooke</li>
                      <li>Charlton</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Woolwich</li>
                      <li>Plumstead</li>
                      <li>Abbey Wood</li>
                      <li>Thamesmead</li>
                      <li>River front settings</li>
                      <li>Local estates and streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Greenwich
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and wrap around extensions</li>
                      <li>Side return kitchen extensions</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Knock through layouts</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Refurbishments and upgrades</li>
                      <li>Garden rooms and studios</li>
                      <li>Garage conversions</li>
                      <li>Small infill schemes</li>
                      <li>Light, access and storage improvements</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-[13px] text-slate-700">
                    <p className="font-semibold mb-1 text-slate-900">
                      Common Greenwich design priorities
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Neighbour impact and privacy</li>
                      <li>Daylight and rooflight strategy</li>
                      <li>Street character and conservation area sensitivity</li>
                      <li>Practical layouts that improve daily living</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PLANNING / PD */}
              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Planning and permitted development in Greenwich
                </h2>
                <p className="text-[13px] text-slate-700">
                  Many houses have permitted development rights, but conservation areas and character streets can make alterations more sensitive,
                  especially in and around central Greenwich and Blackheath borders. Flats and maisonettes generally require planning permission.
                  We confirm the correct route early so you can proceed with confidence.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>We check depth, height and neighbour impact</li>
                      <li>We advise on PD vs Prior Approval vs planning</li>
                      <li>Clear elevations reduce objections</li>
                      <li>We can review similar approvals nearby</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Dormer scale set by roof form and street setting</li>
                      <li>Front roof changes are typically more sensitive</li>
                      <li>Windows positioned for privacy</li>
                      <li>Stair layout planned early for space</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Refurbishments
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Better circulation, light and storage</li>
                      <li>Kitchen and open plan improvements</li>
                      <li>Energy upgrades and insulation strategy</li>
                      <li>Structure and builder notes where helpful</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PACKS */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings package
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Sections where needed for clarity</li>
                    <li>Roof plan where relevant</li>
                    <li>Location plan and block plan</li>
                    <li>Submission ready PDF set</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulations package
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Key construction details</li>
                    <li>Thermal build ups and insulation notes</li>
                    <li>Ventilation and extraction coordination</li>
                    <li>Fire safety layout notes and escape awareness</li>
                    <li>Drainage layout notes where needed</li>
                    <li>Coordination points for structural design</li>
                  </ul>
                </div>
              </div>

              {/* LOCAL KNOWLEDGE */}
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Greenwich projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Greenwich includes historic streets, conservation areas and varied housing types.
                  Strong outcomes usually come from clear massing, neighbour sensitive window placement and layouts that improve everyday living.
                  We design to fit the house and the street, not just the floor area target.
                </p>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you help with conservation area applications
                    </h3>
                    <p>
                      Yes. We prepare drawings and supporting statements for extensions and alterations in conservation areas and character streets,
                      especially around central Greenwich and Blackheath borders.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      How fast can you survey
                    </h3>
                    <p>
                      In most cases we can arrange a measured survey within forty eight hours, subject to access and location.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do you manage the full submission
                    </h3>
                    <p>
                      Yes. We submit, track and respond to planning queries through to decision, and advise on next steps after approval.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you coordinate structural calculations
                    </h3>
                    <p>
                      Yes. We coordinate with structural engineers so key beams and supports are designed properly and shown clearly for Building Control.
                    </p>
                  </div>
                </div>
              </div>

              {/* FINAL CTA */}
              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your Greenwich project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short brief. We will review it and reply with a fixed fee and recommended route.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href="mailto:info@wedrawplans.com" className="font-semibold text-emerald-300 underline">
                    info@wedrawplans.com
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow hover:bg-emerald-100"
                  >
                    Get a quick quote
                  </button>
                </div>
              </div>

              {/* INTERNAL LINKS */}
              <div className="text-[12px] text-slate-600 pt-2">
                See also{" "}
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-conversion-plans" className="underline">
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a href="/" className="underline">
                  WEDRAWPLANS home page
                </a>
                .
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
