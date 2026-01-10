import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import AreaTopHeader from "../../components/AreaTopHeader";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20City%20of%20London";

export default function CityOfLondonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "City of London" });
  }

  function scrollToForm() {
    const el = document.getElementById("city-of-london-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/city-of-london",
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
      "City of London",
      "Bank",
      "Barbican",
      "St Paul's",
      "Moorgate",
      "Liverpool Street",
      "Farringdon borders",
      "Aldgate borders",
      "Cannon Street",
      "Mansion House",
      "Monument"
    ],
    description:
      "Architectural drawing services in the City of London for extensions, loft conversions, flat conversions, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for works in the City of London?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Often yes. The City has many listed buildings, conservation areas and tighter controls. We confirm the correct route once we review your address, building status and the scope of works."
        }
      },
      {
        "@type": "Question",
        name: "Is the City of London strict with alterations and conversions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It can be strict, particularly for heritage assets, roofline changes and visible external alterations. A clear strategy and well coordinated drawings help the application process run smoother."
        }
      },
      {
        "@type": "Question",
        name: "How long does the City of London take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Planning timescales vary by proposal type, but many applications follow the standard determination period after validation. We guide you on realistic timings once we confirm the submission route."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to the City of London?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to the relevant portal and respond to planning officer queries."
        }
      }
    ]
  };

  const visibleFaq = [
    {
      q: "Do I need planning permission for works in the City of London?",
      a: "Often yes. The City has many listed buildings, conservation areas and tighter controls. We confirm the correct route once we review your address, building status and the scope of works."
    },
    {
      q: "Is the City of London strict with alterations and conversions?",
      a: "It can be strict, particularly for heritage assets, roofline changes and visible external alterations. A clear strategy and well coordinated drawings help the application process run smoother."
    },
    {
      q: "How long does the City of London take to decide?",
      a: "Planning timescales vary by proposal type, but many applications follow the standard determination period after validation. We guide you on realistic timings once we confirm the submission route."
    },
    {
      q: "Do you manage the full application to the City of London?",
      a: "Yes. We prepare drawings, complete the forms, upload documents, submit to the relevant portal and respond to planning officer queries."
    }
  ];

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in City of London | Alterations, Conversions, Refurbishments
        </title>
        <meta
          name="description"
          content="Architectural drawings in the City of London for refurbishments, alterations, conversions and building regulation packs. Fixed fees with clear scope and fast communication."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/city-of-london"
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
        <AreaTopHeader />

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  City of London architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for refurbishments, alterations and conversions in the City of London
                </h1>

                <p className="mt-2 text-[12px] font-semibold text-slate-800">
                  Local London designers • Fixed fee guaranteed • Council-ready drawings
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for refurbishments, internal alterations,
                  conversions and compliance packs across the City of London. Fixed fees with clear scope and fast
                  communication. Close to Bank, Liverpool Street and Moorgate stations, with projects also covering
                  St Pauls and Barbican streets.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Internal alterations, reconfiguration and fit out drawings</li>
                  <li>• Change of use layouts and conversion feasibility</li>
                  <li>• Shopfront and frontage proposals where applicable</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Bank, Barbican, St Pauls, Moorgate and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <p className="mt-4 text-[13px] text-slate-700">
                  Recent projects in City of London include rear extensions, side returns and loft conversions across EC1, EC2, EC3 and EC4.
                </p>

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

              <div id="city-of-london-quote" className="lg:w-1/2">
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
                      <label className="text-[11px] font-medium">City of London postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="EC2V 7HH"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "EC2V 7HH")}
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
                        placeholder="For example: internal refurbishment with layout changes, or a conversion with new partitions and compliance upgrades."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-600 mt-2">
                      No obligation. Same-day response on most enquiries.
                    </p>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical City of London projects include refurbishments, internal alterations, conversions and compliance packs.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="City of London" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in the City of London
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for refurbishments, internal alterations,
                    conversions and compliance upgrades across the City of London.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Bank, Barbican, St Pauls, Moorgate, Liverpool Street and surrounding streets
                    across EC1, EC2, EC3 and EC4.
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
                    alt="Example of architectural drawings for a City of London project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for complex City sites
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Detailed plans, elevations, sections and notes coordinated with compliance requirements so planning
                      and Building Control can understand the scheme quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    City of London areas we cover
                  </h3>
                  <Image
                    src="/images/cityoflondon-area.jpg"
                    alt="City of London local area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole City of London, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Bank EC2</li>
                      <li>Moorgate EC2</li>
                      <li>Liverpool Street EC2</li>
                      <li>Barbican EC1</li>
                      <li>St Pauls EC4</li>
                      <li>Farringdon borders EC1</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Mansion House EC4</li>
                      <li>Cannon Street EC4</li>
                      <li>Monument EC3</li>
                      <li>Aldgate borders EC3</li>
                      <li>St Pancras borders</li>
                      <li>Surrounding streets and estates</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in the City
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Internal alterations and reconfiguration</li>
                      <li>Refurbishment and compliance upgrades</li>
                      <li>Change of use layouts and feasibility</li>
                      <li>Small extensions where applicable</li>
                      <li>Building regulation packs</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Shopfront and frontage drawings</li>
                      <li>Fire and access coordination</li>
                      <li>Survey and measured drawings</li>
                      <li>Planning submissions support</li>
                      <li>Technical coordination drawings</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Completed refurbishment project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions in City of London
                </h2>

                <div className="mt-6 space-y-5">
                  {visibleFaq.map((item) => (
                    <div
                      key={item.q}
                      className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-[13px] font-semibold text-slate-900">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-[13px] text-slate-700">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
                  </p>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Prefer to speak. Call 020 3654 8508
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
