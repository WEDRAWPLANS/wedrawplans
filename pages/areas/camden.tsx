import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Camden";

export default function CamdenAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Camden" });
  }

  function scrollToForm() {
    const el = document.getElementById("camden-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/camden",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Camden",
      "Camden Town",
      "Kentish Town",
      "Gospel Oak",
      "Hampstead borders",
      "Belsize Park",
      "Swiss Cottage borders",
      "Kings Cross",
      "St Pancras",
      "Bloomsbury",
      "Holborn",
      "Fitzrovia (Camden side)"
    ],
    description:
      "Architectural drawing services in Camden for extensions, loft conversions, flat conversions, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Camden?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Camden can be carried out under permitted development. We confirm the correct route once we review your address and building type."
        }
      },
      {
        "@type": "Question",
        name: "Is Camden strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Camden can be strict, especially in conservation areas, near Hampstead and Belsize Park, and on terraces with strong character. Good drawings and planning strategy are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Camden Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Camden Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to Camden Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Camden | Extensions, Lofts, Conversions</title>
        <meta
          name="description"
          content="Architectural drawings in Camden for extensions, loft conversions, flat conversions and building regulation packs. Fixed fees with clear scope and fast communication."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/camden" />

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
        {/* HEADER MATCH HOMEPAGE STYLE (IDENTICAL TO BARNET) */}
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
                <span className="font-semibold text-slate-900">Camden</span> borough page
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
          {/* HERO + FORM (MATCH BARNET STRUCTURE) */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Camden architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Camden
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions,
                  loft conversions, flat conversions and refurbishments across the London Borough of Camden.
                  Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions to terraces and period houses</li>
                  <li>• Loft conversions including dormers, rooflights and layout changes</li>
                  <li>• Flat and maisonette conversions and internal reconfiguration</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Camden Town, Kentish Town, Gospel Oak, Bloomsbury and more</li>
                  <li>• Same day response on most enquiries</li>
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
              </div>

              {/* RIGHT FORM */}
              <div id="camden-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build. We will reply with a clear fixed fee for your drawings.
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
                      <label className="text-[11px] font-medium">Camden postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="NW1 0AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "NW1 0AA")}
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
                      <label className="text-[11px] font-medium">
                        Brief description of your project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension to a terrace house with open plan kitchen, plus a dormer loft room."
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
                      Typical Camden projects include rear extensions, loft conversions, lower ground alterations and flat conversions.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* INTERNAL LINKS BLOCK (ONE INSERT, HUGE SEO VALUE) */}
          <ServiceInternalLinks boroughName="Camden" />

          {/* MERGED RICH CONTENT (YOUR CAMDEN CONTENT, BARNET STYLING) */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Camden
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for rear and side extensions,
                    loft conversions, internal alterations, roof terraces, flat conversions and small new developments
                    across the borough of Camden.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Camden Town, Kentish Town, Gospel Oak, Hampstead borders,
                    Belsize Park, Kings Cross, Bloomsbury, Holborn and Fitzrovia (Camden side).
                  </p>

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
                    alt="Example of architectural drawings for a Camden extension"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for complex Camden sites
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Detailed floor plans, elevations, sections and notes coordinated with structural design,
                      fire strategy and light studies so Camden planning and Building Control can understand the scheme quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Camden areas we cover
                  </h3>
                  <Image
                    src="/images/camden-area.jpg"
                    alt="Camden local area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Camden, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Camden Town NW1</li>
                      <li>Kentish Town NW5</li>
                      <li>Gospel Oak NW5</li>
                      <li>Belsize Park NW3</li>
                      <li>Hampstead borders NW3</li>
                      <li>Swiss Cottage borders NW3</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Kings Cross and St Pancras N1C</li>
                      <li>Bloomsbury WC1</li>
                      <li>Holborn WC1 and WC2</li>
                      <li>Fitzrovia (Camden side) W1T</li>
                      <li>Regents Park borders NW1</li>
                      <li>Surrounding streets and estates</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Camden
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions to terraces</li>
                      <li>Loft conversions and dormers</li>
                      <li>Internal reconfiguration and knock throughs</li>
                      <li>Flat and maisonette conversions</li>
                      <li>Small infill developments</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Basement and lower ground alterations</li>
                      <li>Roof terraces and access stairs</li>
                      <li>Garden studios and workspaces</li>
                      <li>Change of use layouts</li>
                      <li>Refurbishment and compliance upgrades</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Completed extension and loft project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
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

              <div className="text-[12px] text-slate-600 pt-2">
                See also{" "}
                <a
                  href="/extension-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  extension plans
                </a>
                ,{" "}
                <a
                  href="/loft-conversion-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a
                  href="/new-build-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  new build plans
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
