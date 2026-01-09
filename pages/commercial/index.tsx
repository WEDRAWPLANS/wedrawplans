import React from "react";
import Head from "next/head";
import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20commercial%20and%20mixed%20use%20drawings%20in%20London";

const services = [
  {
    title: "Shopfronts and signage drawings",
    desc: "Planning and listed building drawing packs for new shopfronts, doors, glazing, fascias, signs and lighting.",
    href: "/commercial/shopfronts-and-signage",
  },
  {
    title: "Restaurant and cafe layouts",
    desc: "Layouts, seating plans, back of house, extraction coordination and compliance focused drawing sets.",
    href: "/commercial/restaurant-and-cafe-layouts",
  },
  {
    title: "Office fit out plans",
    desc: "Cat A and Cat B layouts, partitioning, reflected ceiling plans, schedules and compliance notes.",
    href: "/commercial/office-fit-out-plans",
  },
  {
    title: "Change of use applications (Class E, Sui Generis)",
    desc: "Change of use planning packs with supporting drawings and a clear submission strategy.",
    href: "/commercial/change-of-use-class-e",
  },
  {
    title: "Mixed use schemes above shops",
    desc: "Residential units above commercial with planning drawings, coordination and practical layouts.",
    href: "/commercial/mixed-use-above-shops",
  },
  {
    title: "Basements and plant rooms",
    desc: "Basement layouts, risers, plant rooms, ventilation strategy and compliance focused coordination.",
    href: "/commercial/basements-and-plant-rooms",
  },
  {
    title: "Fire strategy and means of escape",
    desc: "Practical fire and escape layout coordination to support Building Control and design development.",
    href: "/commercial/fire-strategy-means-of-escape",
  },
  {
    title: "Building Regulations packs",
    desc: "Building Regulations drawings and specifications tailored for commercial and mixed use projects.",
    href: "/commercial/building-regulations-packs",
  },
  {
    title: "Commercial drawings overview",
    desc: "A complete overview of how we support commercial projects across London from survey to submission.",
    href: "/commercial/commercial-drawings-overview",
  },
];

export default function CommercialIndexPage() {
  return (
    <>
      <Head>
        <title>Commercial and Mixed Use Drawings London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Commercial and mixed use drawings across London. Shopfront upgrades, restaurant layouts, office fit outs, change of use applications and Building Regulations packs."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/commercial" />
      </Head>

      <main className="min-h-screen bg-white">
        <section className="px-4 pt-10 pb-8 md:pt-14 md:pb-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-10 md:px-10 md:py-14">
              <p className="text-sm font-semibold tracking-widest text-gray-700">
                COMMERCIAL AND MIXED USE DRAWINGS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Planning and Building Regulations drawing packs for commercial projects across London
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
                WEDRAWPLANS prepare clear, council ready drawing packs for shopfront upgrades, restaurants and cafes,
                office fit outs, change of use applications, mixed use schemes and compliance focused Building Regulations
                submissions. Fixed fee quotes, fast turnaround, and a practical approach to approvals.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  WhatsApp
                </a>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Email {EMAIL_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-14">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-gray-300 hover:shadow-md"
                >
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-gray-950">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {s.desc}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-emerald-700">
                    View guidance and request a fixed fee quote
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
              <h3 className="text-xl font-extrabold text-gray-900">
                Want a fixed fee quote today
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
                Send your address, a short description of what you want to do, and any photos or sketches you already have.
                We will confirm the correct approval route and send a fixed fee quote.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  WhatsApp for a quote
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Email {EMAIL_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
