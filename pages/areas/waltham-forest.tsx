import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Waltham%20Forest";

const HERO_IMAGE = "/images/waltham-forest-hero.jpg";
const DRAWINGS_IMAGE = "/images/waltham-forest-drawings.jpg";
const PROJECT_IMAGE = "/images/waltham-forest-project.jpg";
const PROMO_IMAGE = "/images/waltham-forest-promo.jpg";

export default function WalthamForestAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Waltham Forest" });
  }

  function scrollToForm() {
    const el = document.getElementById("waltham-forest-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/waltham-forest",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/waltham-forest-hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Waltham Forest",
      "Walthamstow",
      "Leyton",
      "Leytonstone",
      "Chingford",
      "Highams Park",
      "Wood Street",
      "Blackhorse Road",
      "Upper Walthamstow",
      "South Woodford borders",
      "Whipps Cross borders",
      "Snaresbrook borders",
    ],
    description:
      "Architectural drawing services in Waltham Forest for house extensions, loft conversions, refurbishments, flat reconfigurations and building regulation packs.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Waltham Forest?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Waltham Forest can be carried out under permitted development, but some homes are affected by conservation area controls, flat status, local constraints or previous planning conditions. We review the address and advise the correct route.",
        },
      },
      {
        "@type": "Question",
        name: "Is Waltham Forest strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Waltham Forest can be more sensitive in conservation areas, on strong character streets and where roof alterations affect the front street scene. Clear drawings and a well-shaped planning proposal are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Waltham Forest Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications usually take around eight weeks after validation. Lawful Development Certificates are often around six to eight weeks, subject to workload and validation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Waltham Forest Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare the drawings, complete the forms, upload the documents, submit the application to Waltham Forest Council and respond to planning queries during the process.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Waltham Forest | Extensions, Lofts, Planning Drawings</title>
        <meta
          name="description"
          content="Architectural drawings in Waltham Forest for house extensions, loft conversions, refurbishments, planning applications and building regulation packs. Fixed fees, clear scope and fast communication."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/waltham-forest" />
        <meta property="og:title" content="Architectural Drawings in Waltham Forest | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Planning drawings, extension plans, loft conversion drawings and building regulation packages in Waltham Forest."
        />
        <meta
          property="og:image"
          content="https://www.wedrawplans.co.uk/images/waltham-forest-hero.jpg"
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
                <span className="font-semibold text-slate-900">Waltham Forest</span> area page
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
                  Waltham Forest architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Waltham Forest
                </h1>

                <p className="mt-2 text-[12px] font-medium text-slate-700">
                  Local London designers • Fixed fee guaranteed • Council-ready drawings
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  We regularly work across Waltham Forest including Walthamstow, Leyton, Leytonstone, Chingford and Highams Park, helping homeowners extend, convert lofts and improve layouts with clear planning and technical drawings.
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  Typical Waltham Forest homes include Victorian and Edwardian terraces where rear and side return extensions are popular, plus loft dormers and internal remodelling where the roof form and planning context allow.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side return extensions for terraces and family homes</li>
                  <li>• Loft conversions including dormers and hip to gable where suitable</li>
                  <li>• Flat reconfigurations, refurbishments and internal remodelling</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Walthamstow, Leyton, Leytonstone, Chingford and more</li>
                  <li>• Initial survey within 48 hours where required</li>
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

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[190px] w-full">
                    <Image
                      src={HERO_IMAGE}
                      alt="Waltham Forest house extension design"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                      Local focus
                    </p>
                    <p className="mt-2 text-[13px] text-slate-700">
                      We create clear drawing packs that help approvals move smoothly and give builders clear information to price and build.
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[12px] text-slate-600">
                  Share your postcode and a short description. We reply with a fixed fee and clear next steps.
                </p>
              </div>

              <div id="waltham-forest-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us what you want to build and we will respond with the best route and a fixed fee.
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
                      <label className="text-[11px] font-medium">Waltham Forest postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="E17 4AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "E17 4AA")}
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
                        <option>Flat reconfiguration</option>
                        <option>Building regulation pack only</option>
                        <option>Outbuilding or garden room</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief project details</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension to a terrace house, loft conversion or internal reconfiguration with planning drawings required."
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
                      Prefer WhatsApp. Send your postcode plus a short description and photos if available.
                    </p>
                  </form>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                    Fast contact
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      📞 Call {PHONE_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#1ebe57]"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Waltham Forest" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Waltham Forest
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    We produce planning and technical drawing packages for extensions, loft conversions, internal reconfiguration, refurbishments and conversion layouts across Waltham Forest.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    Common work includes open plan kitchen extensions, dormer lofts, side extensions, structural openings, and building regulation packs coordinated with structural design.
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
                    src={DRAWINGS_IMAGE}
                    alt="Architectural drawings and planning design workspace"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Floor plans, elevations and sections set out clearly, with notes that help Building Control and contractors understand the scope fast.
                    </p>
                  </div>
                </div>
              </div>

              <section className="border-b border-slate-200 bg-white py-10">
                <div className="mx-auto max-w-5xl px-0 lg:px-0">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Waltham Forest coverage and service focus
                  </h2>
                  <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                    WEDRAWPLANS support homeowners across Waltham Forest with extension plans, loft conversion drawings, planning submissions and building regulation packages.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-[#fdf8f3]">
                    <div className="relative h-[360px] md:h-[520px] w-full">
                      <Image
                        src={PROMO_IMAGE}
                        alt="Architectural drawings services across Waltham Forest including Walthamstow, Leyton, Leytonstone, Chingford and Highams Park"
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Areas we cover in Waltham Forest
                  </h3>

                  <p className="text-[13px] text-slate-700">
                    We cover Waltham Forest and surrounding residential streets, including:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Walthamstow</li>
                      <li>Leyton</li>
                      <li>Leytonstone</li>
                      <li>Wood Street</li>
                      <li>Blackhorse Road</li>
                      <li>Whipps Cross borders</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Chingford</li>
                      <li>Highams Park</li>
                      <li>Upper Walthamstow</li>
                      <li>South Woodford borders</li>
                      <li>Snaresbrook borders</li>
                      <li>Nearby residential streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular project types
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side return extensions</li>
                      <li>Wrap around and L shaped extensions</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft changes</li>
                      <li>Internal remodelling and knock throughs</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Flat layout reconfigurations</li>
                      <li>Garden studios and outbuildings</li>
                      <li>Refurbishments and layout upgrades</li>
                      <li>Change of use layouts</li>
                      <li>Small infill schemes</li>
                    </ul>
                  </div>

                  <Image
                    src={PROJECT_IMAGE}
                    alt="Completed rear extension project in London"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Permitted development limits in Waltham Forest
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your house type, location, conservation constraints, Article 4 directions and any previous planning restrictions.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 3 m deep on terrace houses</li>
                      <li>Up to 4 m on semi detached houses</li>
                      <li>Up to 6 to 8 m with Prior Approval</li>
                      <li>Maximum 4 m high for single storey</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 40 to 50 cubic metres volume</li>
                      <li>No extensions on the front roof slope</li>
                      <li>Side windows obscure glazed and fixed</li>
                      <li>External materials to be similar</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Outbuildings
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Maximum 2.5 m high near boundaries</li>
                      <li>Cannot be used as a separate dwelling</li>
                      <li>Use must be incidental to the house</li>
                      <li>Not more than 50 percent of garden area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Waltham Forest
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Drainage and construction notes</li>
                    <li>Design and access or heritage statements where needed</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Waltham Forest
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Structural layouts and coordination</li>
                    <li>Foundation and beam information</li>
                    <li>Fire safety and escape routes</li>
                    <li>Thermal build ups and insulation specs</li>
                    <li>Ventilation and extract positions</li>
                    <li>Drainage runs and manhole information</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Waltham Forest projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Waltham Forest includes conservation areas, strong Victorian and Edwardian streets, family housing and rooflines where design quality matters. We shape each scheme to fit local context so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do I need planning permission for a rear extension in Waltham Forest
                    </h3>
                    <p>
                      Not always. Many rear extensions in Waltham Forest can be carried out under permitted development, but some homes are affected by conservation area controls, flat status, local constraints or previous planning conditions. We review the address and advise the right route.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Is Waltham Forest strict with loft conversions and extensions
                    </h3>
                    <p>
                      Waltham Forest can be more sensitive in conservation areas, on strong character streets and where roof alterations affect the front street scene. Clear drawings and a well-shaped planning proposal are important.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      How long does Waltham Forest Council take to decide
                    </h3>
                    <p>
                      Householder planning applications usually take around eight weeks after validation. Lawful Development Certificates are often around six to eight weeks, subject to workload and validation.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do you manage the full application to Waltham Forest Council
                    </h3>
                    <p>
                      Yes. We prepare the drawings, complete the forms, upload the documents, submit the application to Waltham Forest Council and respond to planning queries during the process.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-[13px] font-semibold text-slate-800">
                  Prefer to speak. Call{" "}
                  <a href={PHONE_LINK} className="underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We reply with a fixed fee and recommended next steps.
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
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-plans" className="underline">
                  loft plans
                </a>{" "}
                and{" "}
                <a href="/new-build-plans" className="underline">
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
