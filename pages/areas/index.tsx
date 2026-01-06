import React from "react";
import Head from "next/head";
import Image from "next/image";
import AreaTopHeader from "../../components/AreaTopHeader";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20fee%20quote%20for%20architectural%20drawings%20in%20London";

type LinkItem = { name: string; href: string };

function toAreaHref(name: string) {
  return `/areas/${name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/,/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()}`;
}

function initialsForBadge(name: string) {
  const cleaned = name
    .replace("City of London", "City")
    .replace("Kensington and Chelsea", "Kensington")
    .replace("Hammersmith and Fulham", "Hammersmith")
    .replace("Barking and Dagenham", "Barking")
    .trim();
  const parts = cleaned.split(" ").filter(Boolean);
  const first = parts[0]?.[0] || "L";
  const second = parts[1]?.[0] || parts[0]?.[1] || "D";
  return `${first}${second}`.toUpperCase();
}

export default function AreasIndexPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "London and M25" });
  }

  function scrollToForm() {
    const el = document.getElementById("areas-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const boroughNames = [
    "Barking and Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "City of London",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith and Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington and Chelsea",
    "Kingston upon Thames",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
  ];

  const boroughLinks: LinkItem[] = boroughNames.map((n) => ({
    name: n,
    href: toAreaHref(n),
  }));

  const countyLinks: LinkItem[] = [
    { name: "Hertfordshire", href: "/areas/hertfordshire" },
    { name: "Essex", href: "/areas/essex" },
    { name: "Surrey", href: "/areas/surrey" },
    { name: "Kent", href: "/areas/kent" },
    { name: "Buckinghamshire", href: "/areas/buckinghamshire" },
  ];

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas",
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
    areaServed: ["London", "Greater London", "M25 area", ...boroughNames],
    description:
      "Architectural drawings across London and the M25 for extensions, loft conversions, refurbishments, flat conversions and building regulation drawing packages.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission in London",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many extensions and lofts can proceed under permitted development. We confirm the correct route once we review your address, house type and any local constraints.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you arrange an initial measured survey",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to access and location.",
        },
      },
      {
        "@type": "Question",
        name: "Do you submit to the local council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can prepare drawings, complete forms, upload documents and submit through the Planning Portal, then support planning officer queries until a decision is issued.",
        },
      },
      {
        "@type": "Question",
        name: "Can you coordinate structural design",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We coordinate with structural engineers so beams, load paths and supporting details are shown correctly on the drawings.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings Across London and the M25 | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings across every London borough and the surrounding M25 area. Explore borough pages, core services and request a fixed fee quote."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas" />
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
            <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    London coverage hub
                  </p>

                  <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                    Architectural drawings across London and the M25
                  </h1>

                  <p className="mt-3 text-[13px] text-slate-700">
                    WEDRAWPLANS prepare planning drawings and Building Regulations drawing packages for extensions, loft
                    conversions, refurbishments, flat conversions and small new builds across every London borough and
                    surrounding M25 locations. Use this page to select your borough, explore services and request a fixed
                    fee quote.
                  </p>

                  <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                    <li>• House extensions including wrap around layouts</li>
                    <li>• Loft conversions including dormers and mansards</li>
                    <li>• Flat conversions, refurbishments and layout redesign</li>
                    <li>• Planning drawings and Building Regulations packs</li>
                    <li>• Coordination with structural engineers where required</li>
                    <li>• Initial survey within 48 hours in most cases</li>
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

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>

                  <div className="mt-7 rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                    <Image
                      src="/images/hero.jpg"
                      alt="Architectural drawings and design support across London"
                      width={1200}
                      height={700}
                      className="object-cover w-full h-44 sm:h-52"
                    />
                    <div className="p-5 space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                        London wide drawing packages
                      </div>
                      <div className="text-[13px] text-slate-700">
                        Clear drawings that support smooth submissions, stronger decisions and builder pricing without confusion.
                      </div>
                    </div>
                  </div>
                </div>

                <div id="areas-quote" className="lg:pl-2">
                  <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100">
                    <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                      Free fixed fee quote
                    </h2>

                    <p className="mt-1 text-[12px] text-slate-600">
                      Tell us your postcode and a short description. We reply with a clear fixed fee and next steps.
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
                        <label className="text-[11px] font-medium">Postcode</label>
                        <input
                          name="postcode"
                          required
                          placeholder="SW1A 1AA"
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => !e.target.value && (e.target.placeholder = "SW1A 1AA")}
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
                        <label className="text-[11px] font-medium">Brief description of your project</label>
                        <textarea
                          name="projectDetails"
                          rows={4}
                          placeholder="For example: rear extension and loft conversion with open plan kitchen"
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
                        Add borough name if helpful. We cover all London boroughs plus key M25 locations.
                      </p>
                    </form>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      What happens next
                    </div>
                    <ul className="mt-2 space-y-1 text-[13px] text-slate-700">
                      <li>• We review your postcode and project notes</li>
                      <li>• We reply with fixed fee and clear scope</li>
                      <li>• We arrange survey and start drawings</li>
                      <li>• We support submission and next steps</li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                    <Image
                      src="/images/drawings.jpg"
                      alt="Example of architectural drawings"
                      width={1200}
                      height={700}
                      className="object-cover w-full h-40 sm:h-44"
                    />
                    <div className="p-5 space-y-2">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                        Practical drawings builders can price from
                      </div>
                      <div className="text-[13px] text-slate-700">
                        Clear plans, elevations and notes structured for tendering and Building Control checks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="London" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold text-slate-900">Start with the right drawing package</h2>
              <p className="mt-2 max-w-4xl text-[14px] text-slate-700">
                Browse the main service pages below to understand scope, typical drawings and what is included, then select
                your borough further down for local guidance and your direct enquiry route.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <a
                  href="/extension-plans"
                  className="group rounded-2xl border border-slate-200 bg-[#f8f4f0] p-6 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[16px] font-semibold text-slate-900">Extension Plans</div>
                    <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 group-hover:border-[#64b7c4]">
                      Extensions
                    </div>
                  </div>
                  <div className="mt-3 text-[14px] text-slate-700">
                    Planning drawings and Building Regulations packages for single storey, double storey and wrap around extensions.
                  </div>
                  <div className="mt-5 text-[14px] font-medium text-blue-700 underline underline-offset-4 group-hover:text-blue-800">
                    View Extension Plans
                  </div>
                </a>

                <a
                  href="/loft-conversion-plans"
                  className="group rounded-2xl border border-slate-200 bg-[#f8f4f0] p-6 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[16px] font-semibold text-slate-900">Loft Conversion Plans</div>
                    <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 group-hover:border-[#64b7c4]">
                      Lofts
                    </div>
                  </div>
                  <div className="mt-3 text-[14px] text-slate-700">
                    Dormer, mansard and hip to gable loft designs with drawings suitable for planning and Building Control.
                  </div>
                  <div className="mt-5 text-[14px] font-medium text-blue-700 underline underline-offset-4 group-hover:text-blue-800">
                    View Loft Plans
                  </div>
                </a>

                <a
                  href="/new-build-plans"
                  className="group rounded-2xl border border-slate-200 bg-[#f8f4f0] p-6 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[16px] font-semibold text-slate-900">New Build Plans</div>
                    <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 group-hover:border-[#64b7c4]">
                      New builds
                    </div>
                  </div>
                  <div className="mt-3 text-[14px] text-slate-700">
                    New build planning drawings with coordinated technical information for tendering, compliance and construction.
                  </div>
                  <div className="mt-5 text-[14px] font-medium text-blue-700 underline underline-offset-4 group-hover:text-blue-800">
                    View New Build Plans
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold text-slate-900">Full London borough directory</h2>
              <p className="mt-2 max-w-4xl text-[14px] text-slate-700">
                Every borough below is clickable. Select your borough to view the dedicated local page and request a fixed fee quote.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {boroughLinks.map((b) => (
                  <a
                    key={b.name}
                    href={b.href}
                    className="group rounded-2xl border border-slate-200 bg-[#fdf8f3] p-4 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-[12px] font-semibold text-slate-900 group-hover:border-[#64b7c4]">
                        {initialsForBadge(b.name)}
                      </div>
                      <div className="text-[14px] font-semibold text-slate-900">{b.name}</div>
                    </div>
                    <div className="mt-3 text-[13px] text-slate-700">
                      View borough page and request a fixed fee quote.
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                <Image
                  src="/images/area.jpg"
                  alt="London and M25 coverage"
                  width={1200}
                  height={700}
                  className="object-cover w-full h-44 sm:h-52"
                />
                <div className="p-6 space-y-2">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    London plus surrounding M25 locations
                  </div>
                  <div className="text-[14px] text-slate-700">
                    If you are close to the boundary, choose the borough page that matches your council. If unsure, send your postcode and we confirm.
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-[20px] font-semibold text-slate-900">Surrounding M25 locations</h2>
                <p className="mt-2 max-w-4xl text-[14px] text-slate-700">
                  We also support projects just outside London where planning demand is high. Select a county page below if your property is outside Greater London.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {countyLinks.map((c) => (
                    <a
                      key={c.name}
                      href={c.href}
                      className="rounded-xl border border-slate-200 bg-[#fdf8f3] px-4 py-3 text-[13px] font-medium text-slate-900 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-7 space-y-3">
                <h2 className="text-[20px] font-semibold text-emerald-900">Local planning knowledge for London projects</h2>
                <p className="text-[14px] text-emerald-900">
                  London includes conservation areas, listed buildings, Article 4 directions and detailed design guidance in many locations.
                  We shape each scheme to suit policy, street context and neighbour impact so approval chances are as strong as possible.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-[20px] font-semibold text-slate-900">Frequently asked questions</h2>

                <div className="mt-6 grid md:grid-cols-2 gap-6 text-[14px] text-slate-700">
                  <div className="space-y-2 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in London</h3>
                    <p>
                      Many extensions and lofts can proceed under permitted development, but constraints vary by borough. We review your address and confirm the correct route at the start.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>
                      In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to access and location.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">Do you submit to the local council</h3>
                    <p>
                      Yes. We handle submission through the Planning Portal and respond to planning officer queries, with clear updates through the process.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams, load paths and supporting details are shown correctly on the drawings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[20px] font-semibold tracking-[0.06em] uppercase">Ready to start your project</h2>
                  <p className="text-[14px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
                  </p>
                </div>

                <div className="flex flex-col space-y-2 text-[14px]">
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

              <div className="text-[12px] text-slate-600 pt-6">
                See also{" "}
                <a href="/extension-plans" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-conversion-plans" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a href="/new-build-plans" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">
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
