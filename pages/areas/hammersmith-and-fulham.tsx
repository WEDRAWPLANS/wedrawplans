import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hackney";

export default function HackneyAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hackney" });
  }

  function scrollToForm() {
    const el = document.getElementById("hackney-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl = "https://www.wedrawplans.co.uk/areas/hackney";

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
      "Hackney",
      "Hackney Central",
      "Dalston",
      "Stoke Newington",
      "Clapton",
      "Homerton",
      "Haggerston",
      "Hoxton",
      "Shoreditch",
      "De Beauvoir",
      "London Fields",
    ],
    description:
      "Architectural drawing services in Hackney for extensions, loft conversions, flat conversions and building regulation plans. Initial survey within 48 hours and full planning support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Hackney",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Some rear extensions can be permitted development, but this depends on the property type and constraints. We confirm the correct route after checking your address and proposal.",
        },
      },
      {
        "@type": "Question",
        name: "Is Hackney strict with loft conversions and extensions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hackney can be strict in conservation areas and where streets have strong character. A clear design, accurate drawings and a well prepared submission pack improves outcomes.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Hackney Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications often take around 8 weeks after validation. Lawful Development Certificates can be quicker, depending on workload and validation timing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Hackney Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, support documents and can submit to the council portal, then respond to planning officer queries if needed.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hackney – Extensions, Lofts and Conversions</title>
        <meta
          name="description"
          content="Architectural drawings in Hackney for extensions, loft conversions, flat conversions and building regulation packs. Initial survey within 48 hours, clear drawings and full planning support."
        />
        <link rel="canonical" href={canonicalUrl} />
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
        {/* HEADER */}
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
                <span className="font-semibold text-slate-900">Hackney</span> borough page
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
          {/* HERO */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Hackney architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Hackney
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawing packages across Hackney,
                  including Dalston, Stoke Newington, Clapton, Homerton, Hoxton and Shoreditch.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Initial survey within 48 hours</li>
                  <li>• Permitted development, LDC and full planning support</li>
                  <li>• Extensions, loft conversions and internal remodelling</li>
                  <li>• Flats and maisonettes supported with planning strategy</li>
                  <li>• Building regulation packs for construction</li>
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
              <div id="hackney-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase tracking-[0.16em] font-semibold">
                    Free fixed quote for Hackney projects
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
                        placeholder="E8 1AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "E8 1AA")}
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
                        placeholder="Example: rear extension with loft conversion"
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
                      Typical projects: extensions, lofts, flat conversions and building regulation packs across Hackney.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Hackney" />

          {/* AREAS + IMAGES */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Areas of Hackney covered
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                We support projects throughout the borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Hackney Central</li>
                <li>• Dalston</li>
                <li>• Stoke Newington</li>
                <li>• Clapton</li>
                <li>• Homerton</li>
                <li>• Hoxton and Shoreditch edges</li>
              </ul>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image
                      src="/images/drawings.jpg"
                      alt="Architectural drawings and planning documents"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Planning drawings
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Clear existing and proposed drawings for submissions and lawful development.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image
                      src="/images/hero.jpg"
                      alt="Home extension and refurbishment design work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Extensions and lofts
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Practical layouts and elevations designed for approvals and construction.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image
                      src="/images/hackney-area.jpg"
                      alt="Hackney area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Local knowledge
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Experience with terrace streets, flats and constraints across Hackney.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[13px] max-w-3xl text-slate-700">
                We can work remotely or arrange a measured survey when accurate existing drawings are needed.
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Hackney project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and we will reply with a clear fixed fee and next steps.
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
