import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Bexley";

const GOOGLE_BUSINESS_PROFILE_LINK =
  "https://www.google.com/maps/search/?api=1&query=WEDRAWPLANS%2C%20201%20Borough%20High%20Street%2C%20London%20SE1%201JA";

export default function BexleyAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Bexley" });
  }

  function scrollToForm() {
    const el = document.getElementById("bexley-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/bexley",
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
      "Bexley",
      "Bexleyheath",
      "Welling",
      "Sidcup",
      "Crayford",
      "Erith",
      "Belvedere",
      "Blackfen",
      "Albany Park",
    ],
    description:
      "Architectural drawings in Bexley for house extensions, loft conversions, refurbishments, garage conversions and new builds. Fixed fee planning and building regulation packs covering Bexleyheath, Welling, Sidcup, Erith and the wider borough.",
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Bexleyheath & Bexley | Extensions, Lofts & New Builds</title>
        <meta
          name="description"
          content="Architectural drawings in Bexleyheath and across Bexley for house extensions, loft conversions, garage conversions, refurbishments and new builds. Fixed fee planning and building regulation packs from WEDRAWPLANS."
        />
        <meta
          name="keywords"
          content="architectural drawings Bexley, architectural drawings Bexleyheath, extension drawings Bexley, loft conversion drawings Bexley, planning drawings Bexley, building regulation drawings Bexley"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/bexley" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 pt-4 pb-3 lg:px-6 lg:pt-5">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain lg:h-28"
                />
              </Link>

              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Architectural Drawing Consultants
              </div>

              <div className="mt-2 hidden max-w-3xl text-[13px] font-medium text-slate-800 lg:block">
                Bexleyheath and Bexley extension, loft and planning drawings with fixed pricing and fast response
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center justify-between gap-3 lg:flex-row">
              <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-slate-900">
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
                <Link href="/extensions" className="hover:text-black">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion" className="hover:text-black">
                  Loft Drawings
                </Link>
                <Link href="/new-build" className="hover:text-black">
                  New Build Drawings
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-black">
                  Building Regulations
                </Link>
                <Link href="/areas" className="hover:text-black">
                  Areas We Cover
                </Link>
              </nav>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-[#20243b] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#161a2f]"
                >
                  <span>📞</span>
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  <span>WhatsApp us now</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              <div className="lg:w-[54%]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Bexleyheath and Bexley architectural drawings
                </p>

                <h1 className="mt-2 text-[23px] font-semibold uppercase leading-snug tracking-[0.12em] text-slate-900 sm:text-[28px]">
                  Architectural Drawings in Bexleyheath & Bexley for Extensions, Lofts and New Builds
                </h1>

                <p className="mt-3 max-w-2xl text-[14px] font-medium leading-7 text-slate-800">
                  Fixed price. Fast response. Initial survey within 48 hours. Planning and Building Regulation drawings for homeowners across Bexleyheath, Welling, Sidcup, Crayford, Erith, Belvedere and nearby areas.
                </p>

                <div className="mt-4 max-w-2xl space-y-3 text-[13px] leading-7 text-slate-700">
                  <p>
                    WEDRAWPLANS prepare professional drawings for house extensions, loft conversions, garage conversions, internal remodelling and small new build projects across the London Borough of Bexley. The focus is on practical layouts, fast communication and fixed pricing so your project can move forward with confidence.
                  </p>

                  <p>
                    We regularly support homeowners near Bexleyheath Station, Welling Station, Sidcup Station, Crayford, Erith, Belvedere and surrounding residential streets. Many local enquiries involve rear extensions, side returns, dormer lofts and open plan reconfiguration to family homes.
                  </p>

                  <p>
                    Send us your plans, house photos or address on WhatsApp and we can advise quickly on the likely drawing route, planning path and next step.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <TrustPill title="Fixed pricing" body="Clear written fees before work starts." />
                  <TrustPill title="Fast turnaround" body="Quick replies and rapid survey booking." />
                  <TrustPill title="Borough aware" body="Drawings tailored for real local projects." />
                </div>

                <ul className="mt-5 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear, side and wrap around extension drawings</li>
                  <li>• Dormer, hip to gable and loft conversion drawings</li>
                  <li>• Garage conversions and garden room layouts</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Planning drawings and Building Regulation packs</li>
                  <li>• Small infill plots, conversions and new build homes</li>
                  <li>• Covering Bexleyheath, Welling, Sidcup, Crayford, Erith, Belvedere and surrounding areas</li>
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Request drawing fees instantly
                  </button>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                  >
                    <span>💬</span>
                    <span>Send photos on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[180px] w-full sm:h-[220px]">
                    <Image
                      src="/images/drawings.jpg"
                      alt="Architectural drawings and planning packs in Bexley"
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4 text-[12px] text-slate-600">
                    Planning drawings, elevations, sections and technical packs prepared for home improvement projects across Bexley and Bexleyheath.
                  </div>
                </div>
              </div>

              <div id="bexley-quote" className="lg:w-[46%]">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[15px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Request fixed drawing fees for your Bexley project
                  </h2>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Tell us what you are planning and we will send a clear fixed fee for the drawings. Many enquiries receive a same day reply.
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    <div className="rounded-full border border-[#d7e8ee] bg-[#f8fcfd] px-3 py-2 text-center text-[11px] font-medium text-slate-700">
                      ✓ Fixed pricing
                    </div>
                    <div className="rounded-full border border-[#d7e8ee] bg-[#f8fcfd] px-3 py-2 text-center text-[11px] font-medium text-slate-700">
                      ✓ Fast response
                    </div>
                    <div className="rounded-full border border-[#d7e8ee] bg-[#f8fcfd] px-3 py-2 text-center text-[11px] font-medium text-slate-700">
                      ✓ Local support
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Bexley postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="DA6 7AB"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.placeholder = "DA6 7AB";
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-2 text-[13px] text-slate-500/70 focus:border-[#64b7c4] focus:text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">What drawings do you need</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select drawing type
                        </option>
                        <option value="House extension drawings">House extension drawings</option>
                        <option value="Loft conversion drawings">Loft conversion drawings</option>
                        <option value="Garage conversion drawings">Garage conversion drawings</option>
                        <option value="Outbuilding or garden room drawings">Outbuilding or garden room drawings</option>
                        <option value="Internal remodelling drawings">Internal remodelling drawings</option>
                        <option value="New build house drawings">New build house drawings</option>
                        <option value="Conversion to flats drawings">Conversion to flats drawings</option>
                        <option value="Planning drawings only">Planning drawings only</option>
                        <option value="Building regulation pack only">Building regulation pack only</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Brief description of your Bexley project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: single storey rear extension to a semi detached house in Bexleyheath, open plan kitchen, rooflights and later Building Regulations pack."
                        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Request drawing fees instantly
                    </button>

                    <p className="text-[11px] text-slate-500">
                      No obligation. Same day response on many enquiries.
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Extensions, lofts, garage conversions, new builds and technical packs for Bexleyheath, Welling, Sidcup, Crayford, Erith and nearby areas.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Bexley" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Why homeowners in Bexley work with WEDRAWPLANS
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Bexley has a strong mix of family houses, bungalows and suburban streets where extensions and loft conversions often make more sense than moving. Our role is to prepare drawings that work for planning, work for builders and help homeowners move ahead with less friction.
              </p>

              <div className="mt-6 grid gap-5 text-[13px] md:grid-cols-3">
                <FeatureCard
                  title="Domestic project focus"
                  body="We regularly work on rear extensions, lofts, garage conversions and internal remodelling, so layouts, stairs, glazing and structure are considered from the start."
                />
                <FeatureCard
                  title="Direct communication"
                  body="You deal with the design team preparing the drawings. That keeps communication practical, quick and easier to follow throughout the project."
                />
                <FeatureCard
                  title="Fixed fees agreed up front"
                  body="Every project receives a written fee proposal. Planning only, planning plus Building Regulations and extra support can all be set out clearly before work begins."
                />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Common project types in Bexley
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The borough covers Bexleyheath, Welling, Sidcup, Erith, Crayford, Belvedere and surrounding neighbourhoods. Typical projects include:
              </p>

              <div className="mt-6 grid gap-5 text-[13px] md:grid-cols-2">
                <FeatureCard
                  title="Rear and side extensions"
                  body="Single and double storey extensions to enlarge kitchens, dining rooms and family spaces. Roof form, glazing, neighbour impact and buildability are all considered early."
                />
                <FeatureCard
                  title="Loft conversions and dormers"
                  body="Rear dormers, hip to gable lofts and loft reconfiguration to add bedrooms and bathrooms, with stairs, headroom and fire protection set out clearly."
                />
                <FeatureCard
                  title="Garage and outbuilding conversions"
                  body="Attached garages, detached garages and garden rooms converted into living areas, studies or hobby rooms with insulation, openings and drainage in mind."
                />
                <FeatureCard
                  title="Small new builds and plots"
                  body="Where plot size allows, we can support side plots, garden plots and infill opportunities with plans, elevations and clear layout thinking."
                />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning and permitted development in Bexley
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Bexley follows its Local Plan alongside the London Plan. Many smaller house extensions and loft conversions can fall under permitted development, while larger schemes, conversions and new dwellings usually require full planning permission.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>• We review whether your property is likely to benefit from permitted development rights and whether any restrictions may apply.</li>
                <li>• For straightforward extensions and lofts we can prepare drawings for a householder planning application or a Lawful Development Certificate.</li>
                <li>• For flats, conversions and small new build schemes we prepare full plans, elevations and supporting drawing material.</li>
                <li>• Where useful, we can include simple diagrams to help explain privacy, overlooking, daylight or design relationships.</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                If you are not sure whether your Bexley project needs planning permission or can proceed under permitted development, we can advise on the most suitable drawing route.
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Simple three step process
              </h2>

              <div className="mt-6 grid gap-5 text-[13px] md:grid-cols-3">
                <ProcessCard
                  title="1. Discuss and survey"
                  body="Share your ideas using the form, phone or WhatsApp. Some projects can start from photos and key measurements, while others benefit from a measured survey."
                />
                <ProcessCard
                  title="2. Design and planning submission"
                  body="We prepare the drawings, refine the layout where needed, then complete plans and elevations for submission and respond to planning comments where required."
                />
                <ProcessCard
                  title="3. Building Regulations and construction"
                  body="After planning approval we can move on to technical drawings and coordinate with structural engineers so your builder has a clearer pack to price and build from."
                />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Fees and areas covered in Bexley
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees follow the same structure as the rest of London, with adjustments for size, complexity and the level of drawing detail required. A written fixed fee proposal is provided before drawing work begins.
              </p>

              <div className="mt-6 grid gap-4 text-[13px] md:grid-cols-3">
                <FeeCard
                  title="Planning drawings"
                  price="from £750 + VAT"
                  body="Existing and proposed plans and elevations for house extensions and loft conversions across Bexleyheath, Welling, Sidcup, Crayford and nearby streets."
                />
                <FeeCard
                  title="Measured surveys"
                  price="from £150 + VAT"
                  body="On site measured surveys where needed so existing drawings accurately reflect the property before design and engineering work starts."
                />
                <FeeCard
                  title="Building Regulation packs"
                  price="from £950 + VAT"
                  body="Technical drawings, sections and construction notes coordinated with structural engineers for building control and contractors."
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-[#fdf8f3] p-5">
                <p className="max-w-3xl text-[13px] text-slate-700">
                  We support projects across the whole borough including Bexleyheath, Welling, Sidcup, Erith, Crayford, Belvedere, Blackfen, Albany Park and surrounding areas.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get fixed drawing fees
                  </button>

                  <a
                    href={GOOGLE_BUSINESS_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                  >
                    <span>⭐</span>
                    <span>Find us on Google</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Bexley project forward
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-[13px] leading-7 text-slate-700">
                Share a few details and WEDRAWPLANS will reply with fixed drawing fees and the best next step for your Bexley extension, loft conversion, refurbishment, garage conversion or small new build scheme.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request drawing fees instantly
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>⭐</span>
                  <span>Find us on Google</span>
                </a>
              </div>

              <p className="mt-5 text-[13px] font-medium text-slate-800">
                Prefer to speak now? Call {PHONE_DISPLAY}
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain"
                />
              </Link>

              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Architectural Drawing Consultants
              </div>

              <p className="mt-4 max-w-2xl text-[13px] leading-7 text-slate-700">
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications, Building Regulations and small new build projects across Bexley, Bexleyheath and surrounding areas.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-[#20243b] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#161a2f]"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  Email us
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  WhatsApp now
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  Google profile
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-4xl gap-6 border-t border-slate-200 pt-8 text-center md:grid-cols-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">Phone</div>
                  <div className="mt-2 text-[12px] text-slate-600">
                    <a href={PHONE_LINK} className="hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">Email</div>
                  <div className="mt-2 text-[12px] text-slate-600">
                    <a href={EMAIL_LINK} className="hover:underline">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">Studio</div>
                  <div className="mt-2 text-[12px] leading-6 text-slate-600">
                    201 Borough High Street
                    <br />
                    London SE1 1JA
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-slate-600">
                <Link href="/" className="hover:text-slate-900">
                  Home
                </Link>
                <Link href="/areas" className="hover:text-slate-900">
                  Areas We Cover
                </Link>
                <Link href="/extensions" className="hover:text-slate-900">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion" className="hover:text-slate-900">
                  Loft Drawings
                </Link>
                <Link href="/new-build" className="hover:text-slate-900">
                  New Build
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-slate-900">
                  Building Regulations
                </Link>
              </div>

              <div className="mt-6 text-[11px] text-slate-500">
                Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with WEDRAWPLANS"
          className="fixed bottom-4 right-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 hover:bg-[#1ebe57]"
        >
          <span className="text-xl">💬</span>
        </a>
      </div>
    </>
  );
}

function TrustPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] leading-6 text-slate-600">{body}</div>
    </div>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-7 text-slate-700">{body}</p>
    </div>
  );
}

function ProcessCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="text-[13px] font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-7 text-slate-700">{body}</p>
    </div>
  );
}

function FeeCard({ title, price, body }: { title: string; price: string; body: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold text-slate-900">{title}</h3>
      <div className="mt-1 text-[13px] font-semibold text-slate-900">{price}</div>
      <p className="mt-2 text-[12px] leading-6 text-slate-600">{body}</p>
    </div>
  );
}
