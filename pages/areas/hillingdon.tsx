import Head from "next/head";
import React from "react";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Hillingdon";

const HERO_IMAGE = "/images/areas/hillingdon/hero.jpg";
const PROJECT_IMAGE_1 = "/images/areas/hillingdon/project-1.jpg";
const PROJECT_IMAGE_2 = "/images/areas/hillingdon/project-2.jpg";

export default function HillingdonPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hillingdon" });
  }

  function scrollToForm() {
    const el = document.getElementById("hillingdon-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/hillingdon",
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
      "Hillingdon",
      "Uxbridge",
      "Hayes",
      "Ruislip",
      "Ickenham",
      "West Drayton",
      "Yiewsley",
      "Hillingdon Village",
      "Ruislip Manor",
      "Ruislip Gardens",
      "Northwood borders",
      "Heathrow borders",
    ],
    description:
      "Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Hillingdon including Uxbridge, Hayes, Ruislip, Ickenham and West Drayton. Fixed fees and fast turnaround.",
    priceRange: "££",
    sameAs: ["https://twitter.com/WEDRAWPLANS"],
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission in Hillingdon",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It depends on your property and proposal. Some works can be permitted development, but constraints like conservation areas or Article 4 directions can change what is allowed. We check your address and advise the best route for your project.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with extensions and loft conversions in Hillingdon",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We produce clear planning drawings for rear and side extensions, wrap around extensions and loft conversions including dormers. We also prepare sections and notes where needed to support smoother approvals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide building regulation drawing packs",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare building regulation packs with plans, sections and key details suitable for Building Control and construction. We also coordinate with structural engineers when openings or strengthening are required.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you start",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We can usually arrange the initial survey within 48 hours, then move into drawing production once scope is agreed.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas of Hillingdon do you cover",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We cover the full borough including Uxbridge, Hayes, Ruislip, Ickenham, West Drayton and surrounding areas.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hillingdon | Extensions, Lofts, New Builds</title>
        <meta
          name="description"
          content="Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Hillingdon including Uxbridge, Hayes, Ruislip, Ickenham and West Drayton. Fixed fees, clear scope and fast communication."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/hillingdon" />
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
                <span className="font-semibold text-slate-900">Hillingdon</span> borough page
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
                  Hillingdon architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Hillingdon
                </h1>

                <p className="mt-2 text-[12px] text-slate-700">
                  Get a fixed fee quote today and book an initial survey within 48 hours
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions,
                  internal remodelling, conversions and building regulation packs across Hillingdon.
                  Clear scope, fast communication and a smooth process from start to submission.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions including wrap around layouts</li>
                  <li>• Loft conversions including dormers and hip to gable</li>
                  <li>• Internal remodelling and structural openings</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Uxbridge, Hayes, Ruislip, Ickenham, West Drayton and more</li>
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

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[190px] w-full">
                    <Image
                      src={HERO_IMAGE}
                      alt="Hillingdon home extension and loft conversion drawings"
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
                      We design schemes that suit Hillingdon streets, with accurate measured surveys, clean layouts and clear drawings to help approvals run smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div id="hillingdon-quote" className="lg:w-1/2">
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
                      <label className="text-[11px] font-medium">Hillingdon postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="UB3 1AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "UB3 1AA")}
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
                        <option>Garage conversion</option>
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
                        placeholder="For example: rear extension to a semi in Ruislip plus a dormer loft room."
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
                      Typical Hillingdon projects include rear extensions, loft conversions, internal remodelling and building regulation packs.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Hillingdon" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Hillingdon
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for extensions, loft conversions, internal alterations, outbuildings, conversions and building regulation packs across Hillingdon.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Uxbridge, Hayes, Ruislip, Ickenham, West Drayton, Yiewsley and surrounding areas near Heathrow borders.
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
                    alt="Example of architectural drawings for a Hillingdon extension"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear floor plans, elevations, sections and notes, coordinated with structural design so builders and inspectors have what they need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Hillingdon areas we cover
                  </h3>

                  <Image
                    src="/images/hillingdon-area.jpg"
                    alt="Hillingdon area map and coverage"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />

                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Hillingdon, including:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Uxbridge</li>
                      <li>Hayes</li>
                      <li>Ruislip</li>
                      <li>Ruislip Manor</li>
                      <li>Ickenham</li>
                      <li>Hillingdon Village</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>West Drayton</li>
                      <li>Yiewsley</li>
                      <li>Ruislip Gardens</li>
                      <li>Northwood borders</li>
                      <li>Heathrow borders</li>
                      <li>Local estates and streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Hillingdon
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and wrap around extensions</li>
                      <li>Side extensions and kitchen reworks</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Internal remodelling and knock throughs</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garage conversions</li>
                      <li>Outbuildings and garden rooms</li>
                      <li>Flat conversions where suitable</li>
                      <li>Refurbishment and compliance upgrades</li>
                      <li>Small infill new build schemes</li>
                    </ul>
                  </div>

                  <Image
                    src={PROJECT_IMAGE_1}
                    alt="Hillingdon project example"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
                  <div className="relative h-56 w-full">
                    <Image
                      src={PROJECT_IMAGE_2}
                      alt="Hillingdon loft and extension drawing example"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear packs for planning and building control
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      We provide drawing packs that help you obtain planning approval and move into construction with the right information.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Permitted development limits in Hillingdon
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    This is a simplified guide to common permitted development limits. Final confirmation depends on your house type, location, conservation constraints and any Article 4 directions.
                  </p>

                  <div className="grid gap-6 text-[13px] text-slate-700">
                    <div>
                      <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                        Rear extensions
                      </h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Up to 3 m deep on terraces</li>
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
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Hillingdon
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Drainage and construction notes</li>
                    <li>Statements where needed</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Hillingdon
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
                  Local planning knowledge for Hillingdon projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Hillingdon includes character roads, conservation areas and mixed suburban streets where massing, roof form and neighbour impact are assessed carefully. We shape each scheme to fit local context so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Hillingdon</h3>
                    <p>
                      Many extensions and lofts can proceed under permitted development. Flats and some conservation areas usually need planning permission. We check your address and advise the best route at the start.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial measured survey within 48 hours of instruction.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Hillingdon Council</h3>
                    <p>Yes. We handle the submission, monitor progress and respond to planning officer queries.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown correctly on the drawings.
                    </p>
                  </div>
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
