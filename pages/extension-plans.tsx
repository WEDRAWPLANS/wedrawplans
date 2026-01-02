import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20quote%20for%20house%20extension%20planning%20drawings";

export default function ExtensionPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Extension Plans" });
  }

  function scrollToForm() {
    const el = document.getElementById("extension-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/extension-plans",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: "Greater London and M25",
    description:
      "House extension planning drawings in London with clear fixed fees. Rear extensions, side return, wrap around and double storey extensions. Measured survey where required. Covering all London boroughs and the M25."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a house extension in London",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some extensions can be permitted development, others need full planning permission. It depends on size, location, property type, conservation constraints, and previous permissions. We help you choose the right route before drawings are finalised."
        }
      },
      {
        "@type": "Question",
        name: "How much do house extension planning drawings cost",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Fixed fees typically apply based on the type and complexity of the extension. Our fixed fees start from £750 and include a clear scope so you know exactly what you are getting."
        }
      },
      {
        "@type": "Question",
        name: "What drawings are needed for a planning application",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most planning submissions include existing and proposed floor plans and elevations, plus a location plan and block plan. Sections and roof plans can be required depending on the proposal and council expectations."
        }
      },
      {
        "@type": "Question",
        name: "How fast can you produce extension drawings",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Timing depends on survey needs and complexity. After initial details are received, we plan the fastest route and keep communication clear through each step."
        }
      },
      {
        "@type": "Question",
        name: "Do you cover all London boroughs",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. WEDRAWPLANS covers every London borough and areas around the M25. We handle council ready drawing packs and guide you through submission."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide Building Regulations drawings as well",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can provide a full Building Regulations drawing pack after planning, or in parallel where appropriate, depending on your project programme."
        }
      },
      {
        "@type": "Question",
        name: "What causes house extension applications to get refused",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Refusals often relate to scale, depth, neighbour impact, daylight and overshadowing, poor massing, weak justification, and unclear drawings. We design and present drawings to make compliance easy to assess."
        }
      },
      {
        "@type": "Question",
        name: "Can you help with permitted development and Lawful Development Certificates",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. If your extension is permitted development, we can prepare drawings and support the process for a Lawful Development Certificate so your project has formal confirmation."
        }
      }
    ]
  };

  const pageTitle =
    "House Extension Plans London | Fixed Fee Planning Drawings – WEDRAWPLANS";
  const pageDescription =
    "House extension planning drawings in London with clear fixed fees. Rear extensions, side return, wrap around and double storey extensions. Measured survey where required. Covering all London boroughs and the M25.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/extension-plans"
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

      {/* No custom header here. Global header will display automatically like Barnet. */}
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO + FORM */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
            <div>
              <div className="text-xs font-semibold tracking-[0.3em] text-rose-600">
                HOUSE EXTENSION PLANNING DRAWINGS
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                House Extension Plans in London at Clear Fixed Fees
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
                Professional planning drawings for rear, side return, wrap around
                and double storey extensions. WEDRAWPLANS produces council ready
                drawings with strong planning logic and clear communication.
              </p>

              <ul className="mt-6 space-y-2 text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Fixed fee from £750</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Measured survey where needed</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Planning and Building Regulations packs available</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>All London boroughs and M25 covered</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Same day response on most enquiries</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Phone, email and WhatsApp support</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700"
                >
                  Get my fixed quote
                </button>

                <a
                  href={PHONE_LINK}
                  className="text-sm font-semibold underline underline-offset-4"
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-6 rounded-2xl border bg-white p-5">
                <div className="text-sm font-semibold">
                  Want faster replies
                </div>
                <div className="mt-1 text-sm text-slate-700">
                  Use WhatsApp and attach photos if you want.
                </div>
                <div className="mt-3">
                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
                  >
                    WhatsApp us now
                  </a>
                </div>
              </div>
            </div>

            <div
              id="extension-quote"
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-extrabold tracking-tight">
                Free fixed extension quote
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Share a few details about your extension and receive a clear
                fixed fee for your drawings.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    name="phone"
                    placeholder="Telephone"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                </div>

                <input
                  name="postcode"
                  placeholder="Postcode"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <select
                  name="extensionType"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select extension type
                  </option>
                  <option>Rear extension</option>
                  <option>Side return extension</option>
                  <option>Wrap around extension</option>
                  <option>Double storey extension</option>
                  <option>Single storey extension</option>
                  <option>Other house extension</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us briefly about your project"
                  rows={5}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                >
                  Get my quote
                </button>

                <div className="text-xs text-slate-500">
                  Popular: rear kitchen extensions, side returns, wrap around and
                  double storey extensions.
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-wrap gap-2">
              {[
                ["Included in the pack", "#included"],
                ["Why applications fail", "#refusals"],
                ["Extension types", "#types"],
                ["Planning vs permitted development", "#planning"],
                ["Process", "#process"],
                ["FAQ", "#faq"]
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border bg-white px-4 py-2 text-xs font-semibold hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section id="included" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              What is included in your extension drawing pack
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Your pack is designed for council submission and clear assessment.
              We provide drawings that planning officers can review quickly and
              confidently, plus support to refine the proposal before submission.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Measured survey and existing drawings",
                  d:
                    "Accurate existing plans and elevations are the foundation. Where needed we carry out a measured survey to produce reliable base drawings."
                },
                {
                  t: "Proposed drawings for planning",
                  d:
                    "Proposed floor plans and elevations to show what you are building, how it looks, and how it relates to the existing house."
                },
                {
                  t: "Location plan and block plan",
                  d:
                    "Standard plans required for planning submission to identify the site and its context."
                },
                {
                  t: "Sections and roof plans where required",
                  d:
                    "Where the extension affects height, roof form, or massing, we prepare sections and roof plans to make the proposal clear."
                },
                {
                  t: "Revision support before submission",
                  d:
                    "Most projects need refinement. We help you adjust layout, doors, glazing, and design details to strengthen the planning outcome."
                },
                {
                  t: "Building Regulations pack available",
                  d:
                    "After planning we can prepare Building Regulations drawings, suitable for Building Control and construction coordination."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border p-5">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold">
                Want a fixed quote now
              </div>
              <div className="mt-1 text-sm text-slate-700">
                Hit the button and jump straight to the quote form.
              </div>
              <div className="mt-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700"
                >
                  Get my fixed quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* REFUSALS */}
        <section id="refusals" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Why house extension applications get refused in London
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Many refusals happen because drawings do not communicate compliance
              clearly. A good design still needs drawings that demonstrate scale,
              neighbour impact, daylight, and the relationship to the existing
              building.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Excessive depth and overdevelopment",
                  d:
                    "Extensions that push too far into the garden can be seen as overdevelopment. We design proportions that feel reasonable in planning terms."
                },
                {
                  t: "Daylight and overshadowing impact",
                  d:
                    "Councils focus on neighbour impact. We design with massing, projections, and glazing position in mind."
                },
                {
                  t: "Scale, height, and roof form",
                  d:
                    "Height changes can trigger refusal. We present roof design and massing so the proposal reads clearly and proportionally."
                },
                {
                  t: "Poor justification and unclear drawings",
                  d:
                    "If officers cannot quickly assess the proposal, risk goes up. We create clean, consistent drawings that are easy to review."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border bg-white p-5">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <div className="text-sm font-extrabold">
                Planning officer reality
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                Officers are busy. They want clear drawings, consistent
                dimensions, legible elevations, and a proposal that shows you
                have considered neighbours and character. Our packs are built to
                reduce friction and increase confidence at review stage.
              </div>
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section id="types" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Types of house extensions we design
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              We work across London on terraced houses, semis, detached homes,
              and flats. We design extensions that match the property, reduce
              planning risk, and maximise usable space.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Rear extensions",
                  d:
                    "Rear extensions are a popular way to create open plan kitchen and dining space. We balance internal gain with planning depth expectations, glazing placement, and neighbour impact."
                },
                {
                  t: "Side return extensions",
                  d:
                    "Side return extensions are common in Victorian houses. We maximise width and layout while respecting boundaries, daylight, and the overall character of the terrace."
                },
                {
                  t: "Wrap around extensions",
                  d:
                    "Wrap around extensions combine rear and side for major space gain. They need careful massing and strong presentation so officers can assess quickly."
                },
                {
                  t: "Double storey extensions",
                  d:
                    "Double storey extensions provide significant area but need sensitive scale control. We consider overlooking, roof relationships, and planning policy alignment."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={scrollToForm}
                      className="rounded-full bg-sky-600 px-5 py-2 text-xs font-bold text-white hover:bg-sky-700"
                    >
                      Get a fixed quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANNING */}
        <section id="planning" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Planning permission vs permitted development
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6">
                <div className="text-sm font-extrabold">
                  Permitted development route
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Some extensions can be built under permitted development, but
                  you still need accurate drawings and careful rule checks.
                  Many homeowners choose a Lawful Development Certificate for
                  formal confirmation.
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <div className="text-sm font-extrabold">
                  Full planning route
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  If your extension exceeds PD limits or your property has
                  restrictions, full planning is required. We produce council
                  ready packs and guide you through submission requirements.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-white p-6">
              <div className="text-sm font-extrabold">
                London specific planning factors that matter
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Conservation areas and character considerations</li>
                <li>Neighbour amenity, daylight, privacy, and outlook</li>
                <li>Materials and rear elevation treatment</li>
                <li>Roof form, parapets, height relationships</li>
                <li>Previous extensions and cumulative impact</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_LINK}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600"
              >
                WhatsApp us
              </a>
              <button
                onClick={scrollToForm}
                className="rounded-full border px-6 py-3 text-sm font-bold hover:bg-slate-100"
              >
                Get my fixed quote
              </button>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Our extension drawing process
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  n: "1",
                  t: "Enquiry and fixed quote",
                  d:
                    "You tell us the address, extension type, and what you want to achieve. We provide a clear fixed quote and advise the best planning route."
                },
                {
                  n: "2",
                  t: "Survey and existing drawings",
                  d:
                    "We complete a measured survey where needed, then prepare accurate existing plans and elevations as the foundation for design."
                },
                {
                  n: "3",
                  t: "Proposed drawings and submission pack",
                  d:
                    "We design the proposed extension and refine it with you, then prepare the planning ready drawing pack for submission."
                }
              ].map((x) => (
                <div key={x.n} className="rounded-2xl border p-6">
                  <div className="text-xs font-bold text-slate-500">
                    STEP {x.n}
                  </div>
                  <div className="mt-1 text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold">
                If you want speed, do this
              </div>
              <div className="mt-2 text-sm text-slate-700">
                Send your postcode and a quick description on WhatsApp. We can
                respond fast and guide you to the right pack.
              </div>
              <div className="mt-4">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              House extension plans FAQ
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  q: "Do I need planning permission",
                  a:
                    "It depends on size and restrictions. Some projects are permitted development, others need full planning. We check the correct route before drawings are finalised."
                },
                {
                  q: "What is included in planning drawings",
                  a:
                    "Typically existing and proposed plans and elevations plus location and block plans. Sections and roof plans can be included when required."
                },
                {
                  q: "Do you handle conservation areas",
                  a:
                    "Yes. We design and present drawings with character and policy in mind so officers can assess quickly and confidently."
                },
                {
                  q: "Do you offer Building Regulations packs",
                  a:
                    "Yes. We can provide Building Regulations drawings after planning or alongside, depending on programme and needs."
                },
                {
                  q: "How do you improve approval chances",
                  a:
                    "Clear drawings, sensible massing, neighbour impact awareness, and planning logic presented cleanly. Our packs are built for planning officer review."
                },
                {
                  q: "How do I start",
                  a:
                    "Use the quote form, call, or WhatsApp. Send your postcode and extension type and we will advise the best pack and fixed fee."
                }
              ].map((x) => (
                <div key={x.q} className="rounded-2xl border bg-white p-6">
                  <div className="text-sm font-extrabold">{x.q}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              Get a fixed quote for your house extension plans
            </h2>
            <p className="mt-3 max-w-3xl text-slate-200">
              We provide professional house extension planning drawings across
              London and the M25. Call, WhatsApp, or submit the quote form and we
              will guide you fast.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_LINK}
                className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white hover:bg-emerald-600"
              >
                WhatsApp us
              </a>
              <button
                onClick={scrollToForm}
                className="rounded-full border border-white px-6 py-3 text-sm font-extrabold text-white hover:bg-white hover:text-slate-900"
              >
                Get my fixed quote
              </button>
            </div>

            <div className="mt-6 text-xs text-slate-300">
              Serving all London boroughs and areas around the M25.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
