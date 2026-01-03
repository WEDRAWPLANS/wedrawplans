import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK = "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hammersmith%20and%20Fulham";


export default function HammersmithAndFulhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hammersmith and Fulham" });
  }

  function scrollToForm() {
    const el = document.getElementById("hf-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl = "https://www.wedrawplans.co.uk/areas/hammersmith-and-fulham";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: canonicalUrl,
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
      "Hammersmith and Fulham",
      "Hammersmith",
      "Fulham",
      "Parsons Green",
      "West Kensington",
      "Barons Court",
      "Shepherds Bush",
      "White City edges",
    ],
    description:
      "Architectural drawing services in Hammersmith and Fulham for extensions, loft conversions, flat conversions, basements and building regulation packs. Initial survey within 48 hours and full planning support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide planning drawings for extensions in Hammersmith and Fulham",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare existing and proposed drawings for house extensions and advise on the best submission route for your property in Hammersmith and Fulham.",
        },
      },
      {
        "@type": "Question",
        name: "Can you produce building regulation drawings for my Hammersmith and Fulham project",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can produce a full building regulation pack including plans, sections, key details and coordinated notes for building control and contractors.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer measured surveys in Hammersmith and Fulham",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can arrange an on site measured survey when accurate existing drawings are needed to start the design properly.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I get a fixed quote",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Send your details through the form and we usually respond the same day with a clear fixed fee and next steps.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hammersmith and Fulham – Extensions, Lofts and Conversions</title>
        <meta
          name="description"
          content="Architectural drawings in Hammersmith and Fulham for extensions, loft conversions, flat conversions, basements and building regulation packs. Initial survey within 48 hours, fixed fees and full planning support."
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content="Architectural Drawings in Hammersmith and Fulham | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, basements, flat conversions and building regulation drawings across Hammersmith and Fulham. Initial survey within 48 hours."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings in Hammersmith and Fulham | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Extensions, lofts, basements and building regulation drawings across Hammersmith and Fulham. Initial survey within 48 hours."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

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
                Architectural drawing consultants
              </div>

              <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
                Architectural drawings for extensions, lofts and new builds at an affordable fixed cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">Hammersmith and Fulham</span> borough page
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
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Hammersmith and Fulham architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Hammersmith and Fulham
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawing packages across the borough,
                  including Fulham, Parsons Green, West Kensington, Barons Court and Shepherds Bush.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Initial survey within 48 hours</li>
                  <li>• Permitted development, LDC and full planning support</li>
                  <li>• Rear and side extensions for terraces and semis</li>
                  <li>• Loft conversions, dormers and mansards where policy allows</li>
                  <li>• Basement and lower ground alterations with technical detail</li>
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

              <div id="hf-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase tracking-[0.16em] font-semibold">
                    Free fixed quote for Hammersmith and Fulham projects
                  </h2>

                  <p className="text-[12px] text-slate-600 mt-1">
                    Tell us about your project and we will reply with a clear fixed fee.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="W6 0AB"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "W6 0AB")}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>Flat conversion</option>
                        <option>Basement works</option>
                        <option>New build house</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Example: rear extension to a terraced house in Fulham with loft conversion above."
                        className="w-full border border-slate-300 rounded px-2 py-2 bg-white focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#64b7c4] text-white rounded-full uppercase text-[13px] tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical projects: extensions, lofts, basements and flat conversions across Hammersmith and Fulham.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Hammersmith and Fulham" />

          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                What we help with in Hammersmith and Fulham
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                The borough includes terraces, mansion flats and modern apartments. Many homeowners extend or convert to
                maximise space and value.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/drawings.jpg" alt="Planning drawings" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Planning drawings
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Existing and proposed drawings for planning submissions and lawful development.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/hero.jpg" alt="Extensions and conversions" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Extensions and conversions
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Practical layouts, elevations and sections designed for approvals and build stage.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/drawings.jpg" alt="Building regulation packs" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Building regulation packs
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Technical packs with key details coordinated for building control and contractors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my quote
                </button>
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Hammersmith and Fulham project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and we will reply with a clear fixed fee and suggested next steps.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] text-white rounded-full text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white rounded-full text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
