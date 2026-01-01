import Head from "next/head";
import React from "react";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Islington";

export default function IslingtonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Islington" });
  }

  function scrollToForm() {
    const el = document.getElementById("islington-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/islington",
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
    areaServed: [
      "Islington",
      "Angel",
      "Upper Street",
      "Highbury",
      "Highbury Fields",
      "Canonbury",
      "Barnsbury",
      "Holloway",
      "Archway",
      "Finsbury Park (Islington side)",
      "Old Street",
      "City Road",
    ],
    description:
      "Architectural drawings in Islington for extensions, loft conversions, flat conversions, refurbishments and building regulation packs.",
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Islington | Extensions, Lofts & Planning
        </title>
        <meta
          name="description"
          content="Architectural drawings in Islington for house extensions, loft conversions, flat conversions and building regulation packs. Fixed fees and fast turnaround."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/islington"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* BARNET STYLE HEADER */}
        <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-3">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                width={420}
                height={140}
                priority
                className="h-24 w-auto object-contain"
              />
              <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-slate-600">
                Architectural Drawing Consultants
              </div>
              <div className="mt-2 max-w-3xl text-[13px] font-medium">
                Architectural Drawings for Extensions, Lofts + New Builds at an
                Affordable Fixed Cost
              </div>
            </div>
          </div>
        </header>

        {/* HERO + FORM */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8">
            {/* TEXT */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Islington architectural drawings
              </p>

              <h1 className="mt-2 text-[24px] font-semibold uppercase tracking-[0.14em]">
                Plans for extensions, lofts and conversions in Islington
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                WEDRAWPLANS prepare planning and technical drawings for house
                extensions, loft conversions, flat conversions and refurbishments
                across Islington. Fixed fees, fast response and clear advice.
              </p>

              <ul className="mt-4 space-y-1 text-[13px]">
                <li>• Rear and side extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Flat and maisonette conversions</li>
                <li>• Planning and building regulation packs</li>
                <li>• Angel, Highbury, Holloway, Archway and more</li>
              </ul>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase"
                >
                  Get a quick quote
                </button>
                <a href={PHONE_LINK} className="text-[13px] underline">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* FORM */}
            <div id="islington-quote" className="lg:w-1/2">
              <div className="bg-white p-5 rounded-2xl shadow-md">
                <h2 className="text-[14px] font-semibold uppercase">
                  Free fixed fee quote
                </h2>

                <form onSubmit={handleSubmit} className="mt-3 space-y-3">
                  <input name="name" required placeholder="Name" className="w-full border-b py-2" />
                  <input name="phone" required placeholder="Telephone" className="w-full border-b py-2" />
                  <input name="email" required placeholder="Email" className="w-full border-b py-2" />
                  <input name="postcode" required placeholder="Islington postcode" className="w-full border-b py-2" />
                  <textarea
                    name="projectDetails"
                    rows={4}
                    placeholder="Brief description of your project"
                    className="w-full border p-2"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase"
                  >
                    Get my quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* RICH CONTENT */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 space-y-8">
            <h2 className="text-[18px] font-semibold uppercase">
              Architectural drawing services in Islington
            </h2>

            <p className="text-[13px] text-slate-700">
              We design and prepare drawings for rear extensions, loft conversions,
              internal alterations, flat conversions and small infill developments
              across Islington. Our drawings are prepared to planning and building
              regulation standards so approvals and construction run smoothly.
            </p>

            <Image
              src="/images/drawings.jpg"
              alt="Islington architectural drawings"
              width={900}
              height={500}
              className="rounded-xl object-cover"
            />

            <p className="text-[13px] text-slate-700">
              Islington has many conservation areas and closely reviewed planning
              policies. We design with neighbour impact, daylight and character
              in mind to maximise approval chances.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-slate-900 text-white py-10">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-[18px] font-semibold uppercase">
              Ready to start your Islington project
            </h2>
            <p className="mt-3 text-[13px] text-slate-300">
              Submit your details for a clear fixed fee and next steps.
            </p>

            <div className="mt-5 flex justify-center gap-3 flex-wrap">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold"
              >
                Get your free quote
              </button>
              <a href={WHATSAPP_LINK} className="underline text-[13px]">
                WhatsApp
              </a>
              <a href={EMAIL_LINK} className="underline text-[13px]">
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
