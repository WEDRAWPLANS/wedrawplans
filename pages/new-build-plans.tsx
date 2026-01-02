import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20new%20build%20planning%20drawings%2C%20structural%20engineering%20and%20town%20planning%20support";

export default function NewBuildPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "New Build Plans" });
  }

  function scrollToForm() {
    const el = document.getElementById("newbuild-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const pageTitle =
    "New Build Planning Drawings, Structural Engineering & Town Planning – WEDRAWPLANS";
  const pageDescription =
    "New build planning drawings and full design service including structural engineering and town planning support. Single dwellings and small developments across London, Outer London and M25. Fixed fees and coordinated approvals.";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/new-build-plans",
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
    areaServed: "London, Outer London and M25",
    description:
      "New build planning drawings with structural engineering and town planning services. Full design packages for residential new builds and small developments."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What drawings are required for a new build planning application",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "New build planning applications typically require existing and proposed plans, elevations, sections, site layout, design and access statement, and sometimes supporting technical information. We prepare a complete planning-ready pack."
        }
      },
      {
        "@type": "Question",
        name: "Is a structural engineer required for a new build",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. New build developments require structural calculations and coordinated structural design. We include structural engineering services so the drawings and calculations align for Building Control."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide town planning services",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We provide town planning support including strategy advice, policy assessment, submission coordination and responses to planning officer queries."
        }
      },
      {
        "@type": "Question",
        name: "Do you work outside London",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We cover Inner London, Outer London and areas around the M25, including commuter towns and surrounding boroughs."
        }
      },
      {
        "@type": "Question",
        name: "Can you design single houses and small developments",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We work on single dwelling houses, replacement dwellings, backland developments and small residential schemes."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/new-build-plans"
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

      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold tracking-[0.3em] text-rose-600">
                NEW BUILD DESIGN AND PLANNING
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                New Build Planning Drawings with Structural Engineering and Town Planning
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
                WEDRAWPLANS provides a complete new build design service including
                planning drawings, structural engineering and town planning support.
                We work on single new build houses and small residential developments
                across London, Outer London and areas around the M25.
              </p>

              <ul className="mt-6 space-y-2 text-slate-800">
                <li>Full planning drawing packages</li>
                <li>Structural engineering and calculations included</li>
                <li>Town planning strategy and submission support</li>
                <li>Single dwellings and small developments</li>
                <li>London, Outer London and M25 coverage</li>
                <li>Clear fixed fees and professional coordination</li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700"
                >
                  Get my new build quote
                </button>

                <a
                  href={PHONE_LINK}
                  className="text-sm font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-6 rounded-2xl border bg-white p-5">
                <div className="text-sm font-semibold">
                  Planning strategy matters on new builds
                </div>
                <div className="mt-1 text-sm text-slate-700">
                  New builds are heavily assessed by councils. Massing, layout,
                  scale, amenity, highways, and policy compliance must be presented
                  clearly. Our drawings and planning approach are designed to reduce
                  refusal risk.
                </div>
              </div>
            </div>

            {/* FORM */}
            <div
              id="newbuild-quote"
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-extrabold">
                Free fixed new build quote
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Request a fixed quote for new build planning drawings, structural
                engineering and town planning support.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    name="phone"
                    placeholder="Telephone"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                  />
                </div>

                <input
                  name="postcode"
                  placeholder="Site postcode"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />

                <select
                  name="projectType"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select new build type
                  </option>
                  <option>Single dwelling house</option>
                  <option>Replacement dwelling</option>
                  <option>Backland development</option>
                  <option>Small residential scheme</option>
                  <option>Other / not sure</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Briefly describe your new build proposal"
                  rows={5}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white"
                >
                  Get my quote
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CONTENT BLOCKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-extrabold">
              Complete new build design service under one roof
            </h2>
            <p className="mt-3 max-w-4xl text-slate-700">
              New build projects require coordination across multiple disciplines.
              We provide a joined-up service so planning drawings, structural
              engineering and planning strategy work together. This reduces delays,
              contradictions and costly redesigns.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border p-6">
                <strong>Planning drawings</strong>
                <p className="mt-2 text-sm text-slate-700">
                  Existing context drawings, proposed plans, elevations, sections,
                  site layout and presentation drawings designed for council review.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <strong>Structural engineering included</strong>
                <p className="mt-2 text-sm text-slate-700">
                  Structural design and calculations coordinated with the drawings,
                  suitable for Building Control and construction.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <strong>Town planning support</strong>
                <p className="mt-2 text-sm text-slate-700">
                  Policy assessment, planning strategy advice, submission support
                  and responses to planning officer comments.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <strong>London and Outer London coverage</strong>
                <p className="mt-2 text-sm text-slate-700">
                  Experience working with London boroughs and surrounding councils
                  across the M25.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-12 text-white">
            <h2 className="text-2xl font-extrabold">
              Start your new build project with confidence
            </h2>
            <p className="mt-3 max-w-3xl text-slate-200">
              Get a complete new build design package including planning drawings,
              structural engineering and town planning support. Serving London,
              Outer London and the M25.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900"
              >
                Get my quote
              </button>
              <a
                href={PHONE_LINK}
                className="rounded-full border border-white px-6 py-3 text-sm font-extrabold text-white"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
