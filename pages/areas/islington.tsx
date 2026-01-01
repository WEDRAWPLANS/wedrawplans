import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Islington";

export default function IslingtonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Islington" });
  }

  function scrollToForm() {
    const el = document.getElementById("islington-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/islington",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Islington",
      "Angel",
      "Upper Street",
      "Highbury",
      "Highbury Fields",
      "Canonbury",
      "Barnsbury",
      "Holloway",
      "Archway",
      "Finsbury Park (Islington side)",
      "Tufnell Park borders",
      "Old Street and City Road area",
    ],
    description:
      "Architectural drawing services in Islington for extensions, loft conversions, outbuildings, refurbishments, flat conversions and building regulations.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Islington?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Some houses can extend under permitted development, but flats and many conservation area properties require full planning permission. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Islington strict with loft conversions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Islington can be strict, especially in conservation areas and streets with strong character. Roof alterations, dormer proportions and neighbour impact are often closely reviewed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Islington Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications usually take around six to eight weeks after validation. Lawful Development Certificates normally take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Islington Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Islington Council and respond to planning officer queries.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Islington | Extensions, Lofts, New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Islington for house extensions, loft conversions, new builds and building regulation packs. Fixed fees with clear scope and fast turnaround."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/islington"
        />

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
        {/* BARNET STYLE HEADER */}
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
                Architectural Drawings for Extensions, Lofts + New Builds at an
                Affordable Fixed Cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">Islington</span>{" "}
                borough page
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
          {/* BARNET STYLE HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Islington architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and new builds in Islington
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, new builds and conversions across
                  the London Borough of Islington. Fixed fees with clear scope and
                  fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions</li>
                  <li>• Loft conversions and dormers</li>
                  <li>• Internal reconfigurations</li>
                  <li>• Flat conversions and layouts</li>
                  <li>• Roof terraces and access stairs</li>
                  <li>• Building regulation packs</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
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

                <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-slate-700">
                  <a className="underline" href={EMAIL_LINK}>
                    {EMAIL_DISPLAY}
                  </a>
                  <span className="text-slate-400">•</span>
                  <a className="underline" href={PHONE_LINK}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="islington-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build.
                    We will reply with a clear fixed fee for your drawings.
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
                      <label className="text-[11px] font-medium">Islington postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="N1 8XX"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "N1 8XX")
                        }
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
                        placeholder="For example: rear extension to a terrace with open plan kitchen, plus a rear dormer loft room."
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
                      Typical Islington projects include rear extensions, side infill
                      extensions, loft conversions, flat conversions and refurbishment
                      drawings.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES (FROM /islington) */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                Common home projects in Islington
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Islington has dense terraces, conservation streets and many properties
                with party walls. The best results come from accurate surveys, clear
                drawings and a planning approach tailored to the street.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase">Extensions</h3>
                  <p className="mt-2">
                    Rear and side infill extensions to create larger kitchens, better
                    layouts and improved links to the garden.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase">Loft conversions</h3>
                  <p className="mt-2">
                    Rear dormers, L shaped dormers and roof alterations designed with
                    neighbour impact and conservation rules in mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase">Flat conversions</h3>
                  <p className="mt-2">
                    Converting houses into flats, re planning existing layouts and
                    ensuring access, daylight, refuse and cycle storage are addressed.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase">Refurbishments</h3>
                  <p className="mt-2">
                    Internal remodelling, structural knock throughs and upgrade packs
                    coordinated for builders and Building Control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PLANNING GUIDANCE (FROM /islington) */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl consider px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                Planning guidance for Islington
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Islington is often sensitive due to conservation areas, consistent
                rear building lines and tight neighbour relationships. Clear drawings
                and a good planning narrative are key.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>• We check constraints that affect permitted development and planning</li>
                <li>• We prepare householder applications for extensions and lofts</li>
                <li>• We produce lawful development certificate drawings where applicable</li>
                <li>• We coordinate structural input for party wall and opening works</li>
              </ul>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Many Islington approvals succeed when submissions are accurate and the
                design respects neighbours, daylight and the character of the street.
              </p>
            </div>
          </section>

          {/* FEES (FROM /islington) */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                Clear fixed fees for your home project
              </h2>

              <div className="mt-5 grid md:grid-cols-3 gap-4 text-[13px]">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold">Planning drawings</h3>
                  <p className="mt-1 text-[13px] font-semibold">from £750 + VAT</p>
                  <p className="mt-2 text-[12px]">
                    Existing and proposed plans and elevations for extensions, lofts and conversions.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold">Measured surveys</h3>
                  <p className="mt-1 text-[13px] font-semibold">from £150 + VAT</p>
                  <p className="mt-2 text-[12px]">
                    On site measured surveys for accurate existing drawings.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold">Building regulation packs</h3>
                  <p className="mt-1 text-[13px] font-semibold">from £950 + VAT</p>
                  <p className="mt-2 text-[12px]">
                    Technical drawings coordinated with structural engineers.
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold hover:bg-[#4da4b4]"
              >
                Request your fixed fee
              </button>
            </div>
          </section>

          {/* FINAL CTA (FROM /islington) */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                Ready to obtain planning approval
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details using the form above and we will provide a clear fixed fee and next steps
                for your extension, loft conversion or refurbishment in Islington.
              </p>

              <div className="mt-5 flex justify-center gap-3 flex-wrap">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold hover:bg-[#4da4b4]"
                >
                  Get a quick quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] hover:bg-slate-900 hover:text-white"
                >
                  💬 WhatsApp
                </a>

                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] hover:bg-slate-900 hover:text-white"
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
