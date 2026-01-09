import React from "react";
import Head from "next/head";
import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20fee%20quote%20for%20shopfront%20and%20signage%20drawings%20in%20London";

export default function ShopfrontsAndSignagePage() {
  return (
    <>
      <Head>
        <title>Shopfront and Signage Drawings London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Shopfront and signage drawings across London. Planning and listed building packs for shopfront upgrades, new doors, glazing, fascias, signs and lighting."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/commercial/shopfronts-and-signage"
        />
      </Head>

      <main className="min-h-screen bg-white">
        <section className="px-4 pt-10 pb-8 md:pt-14 md:pb-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-center justify-between gap-4">
              <Link href="/commercial" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                Back to commercial services
              </Link>
              <div className="hidden sm:flex gap-3">
                <a href={PHONE_LINK} className="text-sm font-semibold text-gray-900 hover:text-black">
                  Call {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-gray-200 bg-gray-50 px-6 py-10 md:px-10 md:py-14">
              <p className="text-sm font-semibold tracking-widest text-gray-700">
                SHOPFRONTS AND SIGNAGE DRAWINGS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Planning ready shopfront packs for councils, landlords and building control
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
                We prepare shopfront upgrade drawings for retail units, cafes, takeaways and mixed use buildings across London.
                This includes new doors, glazing, framing, fascias, signage, lighting and external finishes. If the building is listed
                or in a conservation area we align the proposal with heritage expectations and prepare a clear submission pack.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Request a fixed fee quote
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black"
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

        <section className="px-4 pb-14">
          <div className="mx-auto w-full max-w-6xl grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-gray-900">What we produce</h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700 list-disc pl-5">
                  <li>Existing and proposed elevations showing full shopfront design</li>
                  <li>Plan layout where required to show relationship to the building frontage</li>
                  <li>Typical sections through glazing, framing, thresholds and signage zone</li>
                  <li>Materials and finishes schedule, colour references, and lighting notes</li>
                  <li>Door and glazing specification notes aligned with approvals</li>
                  <li>Submission ready PDFs with a clear drawing index</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-gray-900">Approvals we support</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm font-bold text-gray-900">Planning permission</p>
                    <p className="mt-2 text-sm text-gray-700">
                      Used where the council controls design, appearance, signage zones, lighting, shutters and external alterations.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm font-bold text-gray-900">Listed Building Consent</p>
                    <p className="mt-2 text-sm text-gray-700">
                      For listed properties. We focus on heritage sensitive details and a clear justification for changes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm font-bold text-gray-900">Advertisement consent</p>
                    <p className="mt-2 text-sm text-gray-700">
                      For fascia signs, projecting signs, illuminated signage and other advertisement elements.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm font-bold text-gray-900">Building Regulations support</p>
                    <p className="mt-2 text-sm text-gray-700">
                      Where door widths, access, thresholds and glazing safety requirements need to be demonstrated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-gray-900">Process and timeframes</h2>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 list-decimal pl-5">
                  <li>Quick intake call and document review including lease and landlord requirements if relevant</li>
                  <li>Site survey or photo measurement method depending on complexity and access</li>
                  <li>Draft drawings issued for review, then final submission set prepared</li>
                  <li>Submission support and follow up for council queries where required</li>
                </ol>
                <p className="mt-4 text-sm text-gray-700">
                  Typical turnaround for first drafts is fast once survey is complete. Fixed fee is confirmed after we review the scope and approval route.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-gray-900">What we need from you</h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700 list-disc pl-5">
                  <li>Address and postcode</li>
                  <li>Photos of the frontage and the street context</li>
                  <li>Any landlord or centre management guidance if the unit is inside a parade or estate</li>
                  <li>Any sketch of your preferred look and any brand signage dimensions</li>
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="text-lg font-extrabold text-gray-900">Request a fixed fee quote</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Send your address, photos, and a short description of what you want to change. We will confirm the likely approval route and provide a fixed fee.
                </p>
                <div className="mt-6 grid gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    WhatsApp now
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

              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-extrabold text-gray-900">Common questions</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Do I need planning for a shopfront upgrade</p>
                    <p className="mt-1 text-sm text-gray-700">
                      Often yes, especially if you change the appearance, glazing layout, signage, illumination or add shutters.
                      We confirm the best route after a quick review.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">What if the building is listed</p>
                    <p className="mt-1 text-sm text-gray-700">
                      Listed Building Consent may be required. We focus on heritage appropriate detailing and clear drawings.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Can you help with landlord packs</p>
                    <p className="mt-1 text-sm text-gray-700">
                      Yes. Many landlords want a clear drawing set to approve the frontage design before works begin.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
