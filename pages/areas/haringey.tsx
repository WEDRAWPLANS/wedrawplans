import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Haringey() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/haringey",
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
    areaServed: [
      "Haringey",
      "Crouch End",
      "Muswell Hill",
      "Tottenham",
      "Wood Green",
      "Harringay Ladder",
      "Green Lanes",
      "Hornsey",
      "Bounds Green",
      "Highgate borders",
      "Seven Sisters",
      "Finsbury Park",
      "Alexandra Palace area"
    ],
    description:
      "Architectural drawing services in Haringey for extensions, loft conversions, flat conversions, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for an extension in Haringey?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many houses can extend under permitted development, but flats and maisonettes typically require full planning permission. We confirm the best route once we check your address and property type."
        }
      },
      {
        "@type": "Question",
        name: "Do conservation areas affect loft conversions in Haringey?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. In conservation areas and character streets, roof forms, dormer size and materials can be more sensitive. We design to match the existing street scene and prepare a clear submission pack."
        }
      },
      {
        "@type": "Question",
        name: "How long do Haringey planning decisions take?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications often take around eight weeks after validation. Lawful Development Certificates usually take several weeks depending on workload and validation speed."
        }
      },
      {
        "@type": "Question",
        name: "Can you handle the full submission to Haringey Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to the portal and respond to planning officer queries until decision."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Haringey | Extensions, Lofts, Conversions | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Haringey for house extensions, loft conversions, refurbishments and building regulation packs. Initial survey within 48 hours, clear drawings and full submission support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/haringey" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="bg-white">
        {/* Header bar - same structure as Hackney */}
        <div className="border-b">
          <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold">WEDRAWPLANS</div>
              <div className="hidden sm:block text-sm text-slate-600">
                Architectural drawing consultants
              </div>
            </div>

            <div className="text-sm text-right">
              <a href="tel:+442036548508" className="font-semibold underline">
                020 3654 8508
              </a>
              <span className="mx-2 text-slate-400">|</span>
              <a
                href="https://wa.me/442036548508"
                className="font-semibold underline"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us Chat
              </a>
            </div>
          </div>
        </div>

        {/* HERO - same structure as Hackney */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-sm text-slate-600 mb-2">Haringey borough page</p>

          <p className="text-sm font-semibold text-slate-700 mb-2">
            Haringey architectural drawings
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Plans for extensions, lofts and conversions in Haringey
          </h1>

          <p className="mt-4 text-slate-700">
            We deliver planning and building regulation drawing packages across the London
            Borough of Haringey. From terrace houses in Harringay Ladder and Hornsey to larger
            homes around Crouch End and Muswell Hill, we produce clear layouts and elevations
            that help approvals and builder pricing.
          </p>

          <ul className="mt-5 space-y-1 text-slate-700">
            <li>• Initial survey within 48 hours</li>
            <li>• Permitted development checks and Lawful Development Certificates</li>
            <li>• Full planning applications where required</li>
            <li>• Lofts, dormers, hip to gable and stair solutions</li>
            <li>• Flat conversions and internal reconfiguration strategies</li>
            <li>• Building regulation packs aligned to 2025 standards</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a quick quote
            </a>

            <div className="text-sm text-slate-700">
              Or call{" "}
              <a href="tel:+442036548508" className="font-semibold underline">
                020 3654 8508
              </a>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Areas covered include Crouch End, Muswell Hill, Hornsey, Wood Green, Tottenham,
            Seven Sisters, Bounds Green, Green Lanes, Finsbury Park and the Alexandra Palace area.
          </p>
        </section>

        {/* Quote block - same structure as Hackney */}
        <section id="quote" className="bg-slate-50 border-y">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold">Free fixed fee quote</h2>
            <p className="mt-2 text-slate-700">
              Send your postcode and a short project brief. We reply with a clear fixed fee and
              the best planning route for your property type.
            </p>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="Name"
                name="name"
              />
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="Telephone"
                name="telephone"
              />
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:col-span-2"
                placeholder="Email"
                name="email"
              />
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="Haringey postcode"
                name="postcode"
              />

              <select
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                name="projectType"
                defaultValue=""
              >
                <option value="" disabled>
                  Project type
                </option>
                <option>House extension</option>
                <option>Loft conversion</option>
                <option>Flat conversion</option>
                <option>Internal remodelling</option>
                <option>New build house</option>
                <option>Building regulation pack only</option>
                <option>Other domestic project</option>
              </select>

              <textarea
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:col-span-2"
                placeholder="Brief description of your project"
                name="brief"
                rows={4}
              />

              <button
                type="button"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get a fixed fee quote
              </button>

              <p className="sm:col-span-2 text-sm text-slate-600">
                We send a fixed fee with a clear scope, timeline, and the recommended route to approval.
              </p>
            </form>
          </div>
        </section>

        {/* Main content - same structure as Hackney */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold">Architectural drawing services in Haringey</h2>
          <p className="mt-3 text-slate-700">
            We prepare drawings for rear and side extensions, wrap around layouts, loft conversions,
            internal alterations, flat conversions and small infill development proposals in Haringey.
            Our packs are designed to be easy for planners to assess and easy for builders to price.
          </p>

          <h3 className="mt-8 text-lg font-bold">Haringey design factors that matter</h3>
          <ul className="mt-3 space-y-1 text-slate-700">
            <li>• Tight rear gardens and overlooking between neighbours</li>
            <li>• Daylight and scale on terrace streets</li>
            <li>• Boundary structure and party wall considerations</li>
            <li>• Roof changes that stay in character</li>
            <li>• Flats and conversions needing a clear planning strategy</li>
          </ul>

          <div className="mt-6">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a quick quote
            </a>
            <a
              href="https://wa.me/442036548508"
              className="ml-3 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Borough image - unique to Haringey */}
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <Image
                src="/images/areas/haringey.jpg"
                alt="Haringey residential streets and housing types"
                width={1200}
                height={800}
                className="w-full h-64 object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold">Drawings that reduce objections and delays</h3>
              <p className="mt-2 text-slate-700">
                We set out depth, height, openings, boundary relationships and neighbour impact
                clearly. A clean drawing pack reduces confusion and helps the decision move faster.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-lg font-bold">Haringey areas we cover</h3>
          <div className="mt-3 grid md:grid-cols-2 gap-6 text-slate-700">
            <ul className="space-y-1">
              <li>• Crouch End</li>
              <li>• Muswell Hill</li>
              <li>• Hornsey</li>
              <li>• Harringay Ladder</li>
              <li>• Green Lanes</li>
              <li>• Highgate borders</li>
            </ul>
            <ul className="space-y-1">
              <li>• Wood Green</li>
              <li>• Bounds Green</li>
              <li>• Seven Sisters</li>
              <li>• Tottenham</li>
              <li>• Finsbury Park</li>
              <li>• Alexandra Palace area</li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Planning and permitted development in Haringey</h2>
            <p className="mt-3 text-slate-700">
              Houses may be eligible for permitted development, but flats and maisonettes usually are not.
              Conservation and character streets can influence roof changes, dormer design and materials.
              We confirm the correct route and design accordingly.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Frequently asked questions</h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-bold">Do I need planning permission for my Haringey project</h3>
                <p className="mt-2 text-slate-700">
                  Many houses can proceed under permitted development, but the correct route depends on your
                  property type, location, and any constraints. Flats typically require full planning permission.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">How fast can you do the initial survey</h3>
                <p className="mt-2 text-slate-700">
                  We aim to arrange the initial survey within forty eight hours, subject to access and schedule.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Do you submit to Haringey Council</h3>
                <p className="mt-2 text-slate-700">
                  Yes. We submit, track progress and respond to planning queries until decision.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Can you include building regulation drawings</h3>
                <p className="mt-2 text-slate-700">
                  Yes. We produce building regulation packs and coordinate key structural requirements so Building
                  Control can approve details and your builder can price accurately.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA - same structure as Hackney */}
          <div className="mt-14 rounded-2xl bg-slate-900 text-white p-7">
            <h2 className="text-2xl font-bold">Ready to start your Haringey project</h2>
            <p className="mt-2 text-slate-200">
              Send your postcode and a short brief. We reply with a fixed fee and the recommended route for
              your extension, loft conversion or conversion project.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
              <a href="tel:+442036548508" className="font-semibold underline text-white">
                020 3654 8508
              </a>
              <a href="mailto:info@wedrawplans.com" className="font-semibold underline text-white">
                info@wedrawplans.com
              </a>
              <a
                href="#quote"
                className="sm:ml-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Get a quick quote
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              See also{" "}
              <a href="/extension-plans" className="underline text-white">
                extension plans
              </a>
              ,{" "}
              <a href="/loft-conversion-plans" className="underline text-white">
                loft conversion plans
              </a>{" "}
              and{" "}
              <a href="/" className="underline text-white">
                WEDRAWPLANS home page
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
