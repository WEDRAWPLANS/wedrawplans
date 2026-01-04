import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Westminster";

export default function WestminsterAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Westminster" });
  }

  function scrollToForm() {
    const el = document.getElementById("westminster-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wedrawplans.co.uk/areas/westminster#business",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/westminster",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Westminster",
      "Marylebone",
      "Fitzrovia (Westminster side)",
      "Pimlico",
      "Victoria",
      "Maida Vale",
      "Bayswater",
      "Soho",
      "Mayfair",
      "St James",
      "Knightsbridge (Westminster side)",
      "Paddington",
      "Lancaster Gate",
    ],
    description:
      "Architectural drawing services in Westminster for flat refurbishments, internal remodelling, listed buildings, extensions, roof alterations and building regulation packs. Survey within 48 hours and full planning submission support.",
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.wedrawplans.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Westminster",
        item: "https://www.wedrawplans.co.uk/areas/westminster",
      },
    ],
  };

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.wedrawplans.co.uk/areas/westminster#service",
    name: "Architectural drawings in Westminster",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.wedrawplans.co.uk/areas/westminster#business",
    },
    areaServed: "City of Westminster",
    serviceType: [
      "Planning drawings",
      "Listed building consent drawings",
      "Conservation area applications",
      "Building regulation drawings",
      "Measured survey",
      "Flat refurbishment drawings",
    ],
    description:
      "Planning, listed building and building regulation drawing packages for Westminster homes and flats, including refurbishments, internal reconfiguration, extensions and roof alterations where policy allows.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need permission for a flat refurbishment in Westminster",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Often internal alterations do not need planning permission, but works in listed buildings can need listed building consent and there can be leaseholder or freeholder requirements. We confirm the safest route after reviewing your address and scope.",
        },
      },
      {
        "@type": "Question",
        name: "Are roof terraces and roof alterations difficult in Westminster",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "They can be. Westminster has strict policies in many locations and heritage settings. Careful design, clear drawings and early advice improves the chances of a smoother process.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Westminster City Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal and respond to planning officer queries through to decision.",
        },
      },
      {
        "@type": "Question",
        name: "What drawings do I get for building regulations",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A coordinated package typically includes plans, elevations, sections, key construction details and notes for compliance, with coordination points for structure, ventilation, insulation and drainage so contractors can price and build correctly.",
        },
      },
    ],
  };

  const visibleFaq = [
    {
      q: "Do I need permission for a flat refurbishment in Westminster",
      a: "Often internal alterations do not need planning permission, but works in listed buildings can need listed building consent and there can be leaseholder or freeholder requirements. We confirm the safest route after reviewing your address and scope.",
    },
    {
      q: "Are roof terraces and roof alterations difficult in Westminster",
      a: "They can be. Westminster has strict policies in many locations and heritage settings. Careful design, clear drawings and early advice improves the chances of a smoother process.",
    },
    {
      q: "Do you manage the full application to Westminster City Council",
      a: "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal and respond to planning officer queries through to decision.",
    },
    {
      q: "What drawings do I get for building regulations",
      a: "A coordinated package typically includes plans, elevations, sections, key construction details and notes for compliance, with coordination points for structure, ventilation, insulation and drainage so contractors can price and build correctly.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Westminster | Flats, Refurbishments, Building
          Regs
        </title>
        <meta
          name="description"
          content="Architectural drawings in Westminster for flat refurbishments, internal remodelling, listed buildings, extensions, roof alterations and building regulation packs. Fixed fees, clear scope, survey within 48 hours and full planning support."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/westminster"
        />

        <meta
          property="og:title"
          content="Architectural Drawings Westminster | WEDRAWPLANS"
        />
        <meta
          property="og:description"
          content="Flats, refurbishments, listed building support, extensions and building regulation drawings in Westminster. Survey within 48 hours and full planning support."
        />
        <meta
          property="og:url"
          content="https://www.wedrawplans.co.uk/areas/westminster"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.wedrawplans.co.uk/images/drawings.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Architectural Drawings Westminster | WEDRAWPLANS"
        />
        <meta
          name="twitter:description"
          content="Flat refurbishments, listed building support, roof alterations and building regulation drawings in Westminster. Survey within 48 hours and fixed fees."
        />
        <meta
          name="twitter:image"
          content="https://www.wedrawplans.co.uk/images/drawings.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <AreaTopHeader />

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col gap-6 px-4 py-8 lg:flex-row lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Westminster architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px]">
                  Plans for flats, refurbishments and building regs in Westminster
                </h1>

                <p className="mt-2 text-[12px] font-semibold text-slate-800">
                  Local London designers • Fixed fee guaranteed • Council-ready
                  drawings
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for flat
                  refurbishments, internal remodelling, extensions and roof
                  alterations across Westminster. Many projects involve listed
                  buildings or conservation areas, so we keep drawings clear,
                  policy aware and submission ready.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Flat refurbishments and reconfiguration layouts</li>
                  <li>• Listed building and conservation area applications</li>
                  <li>• Roof alterations and terraces where policy allows</li>
                  <li>• Mews houses and townhouse internal remodelling</li>
                  <li>• Building regulation packs for contractors and inspectors</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a
                    href={PHONE_LINK}
                    className="text-[13px] underline text-slate-800"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div id="westminster-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your flat or building and what you plan
                    to change. We will reply with a clear fixed fee for your
                    drawings.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 space-y-3 text-[13px]"
                  >
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Westminster postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="W1U 3AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value &&
                          (e.target.placeholder = "W1U 3AA")
                        }
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 outline-none focus:border-[#64b7c4] focus:text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Project type
                      </label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>Flat refurbishment / reconfiguration</option>
                        <option>Internal remodelling only</option>
                        <option>House extension</option>
                        <option>Roof alteration / roof terrace</option>
                        <option>Listed building / conservation area</option>
                        <option>Building regulation pack only</option>
                        <option>Other residential project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: reconfigure a two bedroom flat in Marylebone, new kitchen layout and improved living space. Property in a conservation area."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 outline-none focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Westminster projects include flat refurbishments,
                      internal reconfigurations, roof alterations and technical
                      packs, often within listed buildings or conservation areas.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Westminster" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-6">
              <div className="grid items-start gap-10 md:grid-cols-[1.7fr,1.3fr]">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Westminster
                  </h2>

                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS prepare drawing packages for refurbishments,
                    internal remodelling, selective extensions and roof works
                    across Westminster. We keep documentation structured and
                    clear, which helps freeholder coordination, contractor
                    pricing and council submissions.
                  </p>

                  <p className="text-[13px] text-slate-700">
                    We cover Marylebone, Mayfair, Soho, Pimlico, Victoria, Maida
                    Vale, Bayswater, Paddington and nearby streets within the
                    borough.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                    >
                      Get a quick quote
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings for a Westminster refurbishment"
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover md:h-56"
                  />
                  <div className="space-y-2 p-5">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for approvals and contractors
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Plans, elevations and sections presented clearly, with
                      coordination notes for structure and building regulations
                      so the quote stage is smoother and the build stage has
                      fewer surprises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Westminster areas we cover
                  </h3>
                  <Image
                    src="/images/westminster-area.jpg"
                    alt="Westminster local area"
                    width={800}
                    height={500}
                    className="mb-3 rounded-xl object-cover"
                  />
                  <p className="text-[13px] text-slate-700">
                    Architectural drawings across the whole borough, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Marylebone</li>
                      <li>Fitzrovia (Westminster side)</li>
                      <li>Mayfair</li>
                      <li>Soho</li>
                      <li>Pimlico</li>
                      <li>Victoria</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Maida Vale</li>
                      <li>Bayswater</li>
                      <li>Paddington</li>
                      <li>St James</li>
                      <li>Lancaster Gate</li>
                      <li>Local streets and estates</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Westminster
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Flat refurbishments and upgrades</li>
                      <li>Internal reconfiguration layouts</li>
                      <li>Kitchen and bathroom remodelling</li>
                      <li>Lighting and storage improvements</li>
                      <li>Leaseholder coordination packs</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Listed building consent drawings</li>
                      <li>Conservation area applications</li>
                      <li>Selective extensions where policy allows</li>
                      <li>Roof alterations and terraces</li>
                      <li>Building regulation packs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  What is different about Westminster approvals
                </h2>
                <p className="text-[13px] text-slate-700">
                  Westminster contains a high proportion of listed buildings,
                  conservation areas and tightly controlled streetscapes. Many
                  projects are internal refurbishments, but even internal work
                  can involve listed building consent. Roof terraces, roof
                  extensions and external alterations are often more sensitive.
                  We confirm the safest route early so you can proceed with
                  confidence.
                </p>

                <div className="grid gap-8 text-[13px] text-slate-700 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Flats and mansion blocks
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Freeholder and management approvals may apply</li>
                      <li>Noise and structure matters are closely reviewed</li>
                      <li>Fire strategy coordination can be important</li>
                      <li>Clear drawings reduce delays</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Listed buildings
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Listed building consent may be required</li>
                      <li>Materials and details can be restricted</li>
                      <li>Heritage sensitive drawings are important</li>
                      <li>Documentation helps approval confidence</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Roof works
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Terraces and views can be sensitive</li>
                      <li>Overlooking and privacy assessed</li>
                      <li>Design needs to respect street character</li>
                      <li>Early advice reduces redesign risk</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning and listed building drawings
                  </h3>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Existing and proposed plans and elevations</li>
                    <li>Sections where needed for clarity</li>
                    <li>Roof plans and key details where relevant</li>
                    <li>Supporting notes where helpful</li>
                    <li>Submission ready PDF set</li>
                    <li>Support with council portal submission</li>
                  </ul>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings
                  </h3>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Plans, sections and coordinated construction notes</li>
                    <li>Fire safety and escape awareness</li>
                    <li>Thermal build ups and insulation notes</li>
                    <li>Ventilation and extract coordination</li>
                    <li>Drainage layout notes where needed</li>
                    <li>Structural coordination points</li>
                  </ul>
                </div>
              </div>

              <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
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

              <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:p-8">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your Westminster project
                  </h2>
                  <p className="mt-2 text-[13px] text-slate-300">
                    Send your postcode and a short description. We review and
                    reply with a fixed fee and recommended next steps.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a
                    href={PHONE_LINK}
                    className="font-semibold text-emerald-300 underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href="mailto:info@wedrawplans.com"
                    className="font-semibold text-emerald-300 underline"
                  >
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

              <div className="pt-2 text-[12px] text-slate-600">
                See also{" "}
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-conversion-plans" className="underline">
                  loft conversion plans
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
