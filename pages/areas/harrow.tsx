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
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Harrow";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

export default function HarrowAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Harrow" });
  }

  function scrollToForm() {
    const el = document.getElementById("harrow-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/harrow",
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
      "Harrow",
      "Harrow on the Hill",
      "Harrow Weald",
      "North Harrow",
      "South Harrow",
      "West Harrow",
      "Wealdstone",
      "Rayners Lane",
      "Kenton",
      "Queensbury",
      "Pinner borders",
      "Stanmore borders",
      "Edgware borders",
    ],
    description:
      "Architectural drawings in Harrow for house extensions, loft conversions, refurbishments, garage conversions and new builds. Fixed fee planning and building regulation packs covering Harrow on the Hill, Kenton, Rayners Lane, Wealdstone and the wider borough.",
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Harrow | Extensions, Lofts & New Builds</title>
        <meta
          name="description"
          content="Architectural drawings in Harrow for house extensions, loft conversions, garage conversions, refurbishments and new builds. Fixed fee planning and building regulation packs from WEDRAWPLANS."
        />
        <meta
          name="keywords"
          content="architectural drawings Harrow, extension drawings Harrow, loft conversion drawings Harrow, planning drawings Harrow, building regulation drawings Harrow, architectural services Harrow"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/harrow" />
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

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-slate-900">
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
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-[#20243b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#161a2f]"
                >
                  <span>📞</span>
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
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
              <div className="lg:w-[56%]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Harrow architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[27px]">
                  Architectural Drawings in Harrow for Extensions, Lofts and New Builds
                </h1>

                <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] text-slate-800">
                  Fixed price • Initial survey within 48 hours • Planning and Building Regulation drawings
                </p>

                <p className="mt-4 text-[13px] leading-7 text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions, refurbishments and new build homes across the London Borough of Harrow. We focus on strong layouts, fast responses and fixed pricing so you can move from idea to permission and construction with confidence.
                </p>

                <p className="mt-3 text-[13px] leading-7 text-slate-700">
                  We regularly support homeowners across Harrow on the Hill, Kenton, Rayners Lane, Wealdstone, North Harrow, South Harrow and Harrow Weald, covering surrounding residential streets across the borough. Many local enquiries involve rear extensions, side returns, loft dormers, garage conversions and open plan internal remodelling.
                </p>

                <p className="mt-3 text-[13px] leading-7 text-slate-700">
                  Recent enquiries in Harrow include rear extensions, wraparound extensions, loft conversions and technical building regulation packs across HA1, HA2 and HA3.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <TrustPill title="Fixed drawing fees" body="Clear written pricing before work starts." />
                  <TrustPill title="Fast response" body="Same day replies on many enquiries." />
                  <TrustPill title="Borough aware" body="Prepared for real Harrow area projects." />
                </div>

                <ul className="mt-5 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear, side and wrap extensions to homes in Harrow</li>
                  <li>• Dormer and hip to gable loft conversions</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Garage conversions and outbuildings</li>
                  <li>• Small new build plots and infill housing</li>
                  <li>• Planning drawings and Building Regulation packs</li>
                  <li>• Covering Harrow on the Hill, Harrow Weald, Wealdstone, Kenton, Rayners Lane and surrounding areas</li>
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
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

                  <a
                    href={GOOGLE_BUSINESS_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                  >
                    <span>⭐</span>
                    <span>Google Profile</span>
                  </a>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[180px] w-full sm:h-[220px]">
                    <Image
                      src="/images/drawings.jpg"
                      alt="Architectural drawings and planning packs in Harrow"
                      fill
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-3 text-[12px] text-slate-600">
                    Planning drawings, elevations and technical packs for home projects across Harrow.
                  </div>
                </div>
              </div>

              <div id="harrow-quote" className="lg:w-[44%]">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Request fixed drawing fees for your Harrow project
                  </h2>
                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Tell us a little about your property in Harrow and what you plan to build. We will send a clear fixed fee for your drawings, often the same day.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Harrow postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="HA1 2AB"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.placeholder = "HA1 2AB";
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 focus:border-[#64b7c4] focus:text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">What drawings do you need</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option value="House extension drawings">House extension drawings</option>
                        <option value="Loft conversion drawings">Loft conversion drawings</option>
                        <option value="Garage conversion drawings">Garage conversion drawings</option>
                        <option value="Outbuilding or garden room drawings">Outbuilding or garden room drawings</option>
                        <option value="Internal remodelling drawings">Internal remodelling drawings</option>
                        <option value="New build house drawings">New build house drawings</option>
                        <option value="Conversion to flats drawings">Conversion to self contained flats</option>
                        <option value="Planning drawings only">Planning drawings only</option>
                        <option value="Building regulation pack only">Building regulation pack only</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description of your Harrow project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a semi detached house in Harrow with open plan kitchen and new master bedroom."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Request drawing fees instantly
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">No obligation. Same day response on most enquiries.</p>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Harrow projects include extensions, loft conversions, garage conversions and internal layout changes to family houses and bungalows.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Harrow" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Why homeowners in Harrow work with WEDRAWPLANS
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Streets in Harrow include many family houses, semis, terraces and corner plots where extra space can often be created through well planned extensions and lofts. Our role is to prepare drawings and information that make it easier to secure permission and for builders and engineers to work accurately.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-3">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Focus on domestic projects
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    We concentrate on extensions, lofts and small residential schemes, so layouts, stairs, structure and glazing are set out with planning and construction in mind from the start.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Clear communication
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    You deal directly with the designers preparing your drawings. We keep email and WhatsApp messages clear and practical so you know what is happening at each stage.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Fixed fees agreed up front
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Every project receives a written fixed fee proposal. Options for planning only, planning plus building regulation packs and further support are set out before work begins.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Common project types in Harrow
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The borough covers Harrow on the Hill, Wealdstone, North Harrow, South Harrow, Harrow Weald, Kenton, Rayners Lane and surrounding neighbourhoods. Typical projects include:
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Single and double storey extensions to enlarge kitchens, dining rooms and family spaces. We consider roof design, glazing and neighbour impact so the scheme is practical and more likely to be supported.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions and dormers
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear dormers, hip to gable lofts and roof alterations to add bedrooms and bathrooms. Stairs, headroom and fire protection are set out clearly for builders and building control.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Garage and outbuilding conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Conversion of attached and detached garages or garden rooms into usable living space, hobby rooms or offices. We plan openings, insulation and drainage so technical approval is simpler.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Small new builds and plots
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Some side plots and larger sites can support an extra home or pair of houses. We test layout and access, then prepare full plans and elevations for planning applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning and permitted development in Harrow
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Harrow follows its Local Plan alongside the London Plan. Many smaller house extensions and loft conversions can be carried out under permitted development, while larger schemes, conversions and new dwellings require full planning permission.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>• We check whether your property benefits from permitted development rights and whether any local constraints apply.</li>
                <li>• For straightforward house extensions and lofts we can often prepare and submit a householder planning application or Lawful Development Certificate.</li>
                <li>• For flats, conversions and small new build schemes we prepare full plans, elevations and basic supporting information.</li>
                <li>• Where helpful, we can add simple diagrams to explain overlooking, daylight or privacy relationships.</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                If you are unsure whether your project in Harrow needs planning permission or can follow permitted development, we can outline the options and tailor the drawings accordingly.
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Simple three step process
              </h2>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">1. Discuss and survey</h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    You share your outline ideas using the form or by phone. For many Harrow projects we can start from your measurements and photos, and for others we arrange a measured survey.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">2. Design and planning submission</h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    We prepare design options where needed and then complete full plans and elevations. Once you are happy, we submit drawings to the council and respond to plan comments.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">3. Building regulation and construction</h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    After planning approval we can prepare building regulation drawings and coordinate with a structural engineer so your chosen builder has a clear technical pack to work from.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Fees and areas covered in Harrow
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Harrow follow the same structure as the rest of London, with adjustments for size and complexity. A written fixed fee proposal is provided before any drawing work starts.
              </p>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Planning drawings</h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations for extensions and lofts in Harrow on the Hill, Kenton, Rayners Lane, Wealdstone and nearby streets.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Measured surveys</h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measured surveys where required so existing drawings accurately reflect your property before design and engineering.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Building regulation packs</h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Detailed technical drawings, sections and notes coordinated with structural engineers for building control and contractors.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="max-w-3xl text-[13px] text-slate-700">
                  We support projects across the whole borough including Harrow on the Hill, Harrow Weald, Wealdstone, North Harrow, South Harrow, West Harrow, Kenton, Rayners Lane and surrounding areas.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
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
                  <span>Google Profile</span>
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Harrow project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and suggested next steps for your Harrow extension, loft conversion, refurbishment or small new build scheme.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request drawing fees instantly
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>⭐</span>
                  <span>Google Profile</span>
                </a>
              </div>

              <p className="mt-5 text-[13px] font-medium text-slate-800">Prefer to speak. Call {PHONE_DISPLAY}</p>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#2a3050] bg-[#20243b]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">
                Architectural Drawing Consultants
              </div>

              <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/80">
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications, Building Regulations and small new build projects across Harrow and surrounding areas.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] shadow-sm hover:bg-slate-100"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  WhatsApp us
                </a>

                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Email us
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Google Profile
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-4xl gap-6 border-t border-white/10 pt-8 text-center md:grid-cols-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Phone</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={PHONE_LINK} className="hover:text-white">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Email</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={EMAIL_LINK} className="hover:text-white">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Studio</div>
                  <div className="mt-2 text-[12px] leading-6 text-white/65">
                    201 Borough High Street
                    <br />
                    London SE1 1JA
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-white/65">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/areas" className="hover:text-white">
                  Areas We Cover
                </Link>
                <Link href="/extensions" className="hover:text-white">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion" className="hover:text-white">
                  Loft Drawings
                </Link>
                <Link href="/new-build" className="hover:text-white">
                  New Build
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-white">
                  Building Regulations
                </Link>
              </div>

              <div className="mt-6 text-[11px] text-white/45">
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
