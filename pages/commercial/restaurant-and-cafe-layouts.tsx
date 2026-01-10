import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20restaurant%20and%20cafe%20layout%20drawings%20in%20London";

export default function RestaurantAndCafeLayoutsPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Commercial - Restaurant and cafe layouts" });
  }

  function scrollToForm() {
    const el = document.getElementById("restaurant-cafe-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/commercial/restaurant-and-cafe-layouts",
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
    areaServed: ["London"],
    description:
      "Restaurant and cafe layout drawings across London including seating layouts, back of house plans, extraction coordination and Building Regulations support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a restaurant or cafe layout change",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Internal layout changes can be acceptable without planning, but extraction, new flues, external works, shopfront changes or change of use often require approval. We confirm the correct route after a quick review.",
        },
      },
      {
        "@type": "Question",
        name: "Can you coordinate an extraction and ventilation strategy",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We coordinate layout drawings with the ventilation intent so the design is practical for installation and council review where required.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide Building Regulations drawings for commercial kitchens",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We provide compliance focused drawings and notes where required for Building Control, including fire safety considerations and escape routes where relevant.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you produce first drafts",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Once we have the measured survey or reliable dimensions, we typically produce first drafts quickly. We confirm the timeline when we review the scope.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Restaurant and Cafe Layout Drawings London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Restaurant and cafe layout drawings across London. Seating plans, back of house layouts, extraction coordination and Building Regulations support. Fixed fee quotes."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/commercial/restaurant-and-cafe-layouts"
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

      <AreaTopHeader />

      <div className="min-h-screen bg-white text-slate-900">
        <main>
          <section className="border-b border-slate-200 bg-gray-50">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-700">
                  Commercial drawings London
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Restaurant and cafe layouts that work on site and on paper
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare practical restaurant and cafe layouts across London, including seating plans,
                  back of house coordination, kitchen zones, circulation and compliance support where required.
                  Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Seating layouts, covers, circulation and accessibility checks</li>
                  <li>• Back of house planning, storage, staff areas and customer WCs</li>
                  <li>• Kitchen and servery zoning coordination</li>
                  <li>• Extraction and ventilation coordination support</li>
                  <li>• Building Regulations drawings where required</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-emerald-600 px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-emerald-700"
                  >
                    Get a quick quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="mt-4">
                  <Link href="/commercial" className="text-[13px] underline text-slate-700">
                    Back to commercial services
                  </Link>
                </div>
              </div>

              <div id="restaurant-cafe-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us about your unit and what you want to change. We will reply with a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-emerald-600 outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-emerald-600 outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-emerald-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="E1 4UN"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "E1 4UN")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-emerald-600 outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-emerald-600 outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>Restaurant layout</option>
                        <option>Cafe layout</option>
                        <option>Kitchen and servery redesign</option>
                        <option>Extraction and ventilation coordination</option>
                        <option>Change of use support</option>
                        <option>Building regulation pack</option>
                        <option>Other commercial project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: new seating layout for 40 covers with improved kitchen flow and new customer WC."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-emerald-600 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-emerald-600 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-emerald-700"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical packages include an existing survey, proposed layout plans and a submission ready PDF set.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Restaurant and cafe layout drawings
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    We produce clear layouts that balance customer experience with practical service flow. The drawings can support landlord approvals,
                    design development, contractor pricing and council submissions where needed.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    If your project includes extraction, flues, external alterations or a change of use, we will confirm the best route and tailor the pack accordingly.
                  </p>

                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-emerald-600 px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-emerald-700"
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
                    alt="Example of commercial layout drawings"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Drawings contractors can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear plans and notes to support pricing, coordination and approval discussions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Common inclusions
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Existing and proposed layout plans</li>
                      <li>Seating zones and circulation</li>
                      <li>Customer WC layouts where needed</li>
                      <li>Kitchen and servery zoning</li>
                      <li>Storage and staff areas</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Key dimensions and notes</li>
                      <li>Reflected ceiling plan if required</li>
                      <li>Extraction coordination notes</li>
                      <li>Fire and escape coordination support</li>
                      <li>Submission ready PDF set</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Approvals we support
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Landlord approval packs</li>
                      <li>Change of use submissions</li>
                      <li>External alterations where required</li>
                      <li>Planning supporting drawings</li>
                      <li>Advertisement consent if signage changes</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Building Control submissions</li>
                      <li>Fire and escape coordination</li>
                      <li>Accessibility intent layouts</li>
                      <li>Ventilation strategy support</li>
                      <li>Coordination drawings for fit out</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Commercial project illustration"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Practical guidance for approvals
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Councils often focus on extraction impact, noise, odour, hours and the visual impact of external changes. We shape the drawing pack to support a clean review.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you help even if I only have an idea</h3>
                    <p>
                      Yes. We can convert your idea into a practical layout and advise what approvals are likely required.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you include a measured survey</h3>
                    <p>
                      We confirm the best survey method after a quick review. Many projects include a measured survey as the starting point.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you support a full planning submission</h3>
                    <p>
                      Yes. We can prepare the drawings and support the submission route where planning is required.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate Building Regulations drawings</h3>
                    <p>
                      Yes. We provide Building Regulations packs where needed for fit out works and compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your fit out planning
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We reply with a fixed fee and the recommended next steps.
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
                <a href="/commercial" className="underline">
                  commercial services
                </a>
                ,{" "}
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
