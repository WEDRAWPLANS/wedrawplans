import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
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
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

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

      <div className="min-h-screen w-screen max-w-[100vw] min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <BoroughMasterHeader boroughName={"Bexley"} />

        <main>
          <BoroughMasterHero boroughName={"Bexley"} formId={"bexley-quote"} headline={"Architectural Drawings in Bexleyheath & Bexley for Extensions, Lofts and New Builds"} />

          <ServiceInternalLinks boroughName="Bexley" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Why homeowners in Bexley work with WEDRAWPLANS
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Streets in Bexley include many traditional family houses and bungalows, and many owners choose to extend rather than move further out. Our role is to prepare drawings and information that make it easier to secure permission and for builders and engineers to work accurately.
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
                Common project types in Bexley
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The borough covers Bexleyheath, Welling, Sidcup, Erith, Crayford, Belvedere and surrounding neighbourhoods. Typical projects include:
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
                    Rear dormers, hip to gable lofts and L shaped conversions to add bedrooms and bathrooms. Stairs, headroom and fire protection are set out clearly for builders and building control.
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
                    Some side gardens and larger plots can support an extra home or pair of houses. We test layout and access, then prepare full plans and elevations for planning applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning and permitted development in Bexley
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Bexley follows its Local Plan alongside the London Plan. Many smaller extensions and lofts to houses can be carried out under permitted development, while larger schemes, conversions and new dwellings require full planning permission.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>• We check whether your property benefits from permitted development rights and whether any Article 4 directions apply.</li>
                <li>• For straightforward house extensions and lofts we can often prepare and submit a householder planning application or Lawful Development Certificate.</li>
                <li>• For flats, conversions and small new build schemes we prepare full plans, elevations and basic supporting information.</li>
                <li>• Where helpful, we can add simple diagrams to explain overlooking, daylight or privacy relationships.</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                If you are unsure whether your project in Bexley needs planning permission or can follow permitted development, we can outline the options and tailor the drawings accordingly.
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
                    You share your outline ideas using the form or by phone. For many Bexley projects we can start from your measurements and photos, and for others we arrange a measured survey.
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
                Fees and areas covered in Bexley
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Bexley follow the same structure as the rest of London, with adjustments for size and complexity. A written fixed fee proposal is provided before any drawing work starts.
              </p>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Planning drawings</h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations for extensions and lofts to houses in Bexleyheath, Welling, Sidcup, Crayford and nearby streets.
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
                  We support projects across the whole borough including Bexleyheath, Welling, Sidcup, Erith, Crayford, Belvedere and surrounding areas.
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
                Ready to move your Bexley project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and suggested next steps for your Bexley extension, loft conversion, refurbishment or small new build scheme.
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
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications, Building Regulations and small new build projects across Bexley, Bexleyheath and surrounding areas.
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
