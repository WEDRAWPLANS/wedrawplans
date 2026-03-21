import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20drawings%20in%20Bexley";

export default function BexleyAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Bexley" });
  }

  function scrollToForm() {
    const el = document.getElementById("quote-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>Architectural Drawings in Bexley and Surrounding Areas</title>
        <meta
          name="description"
          content="Planning and building regulation drawings for extensions, loft conversions and new builds in Bexley, Bexleyheath, Sidcup, Welling and surrounding areas."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">

        {/* HEADER */}
        <header className="bg-white border-b border-slate-200 text-center py-6">
          <img src="/images/wedrawplans-logo.png" className="h-20 mx-auto" />
          <p className="text-[12px] tracking-[0.18em] mt-2 text-slate-600">
            ARCHITECTURAL DRAWING CONSULTANTS
          </p>

          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <a href={PHONE_LINK} className="bg-[#20243b] text-white px-5 py-2 rounded-full text-sm">
              Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_LINK} className="bg-[#25D366] text-white px-5 py-2 rounded-full text-sm">
              WhatsApp us
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">

            <div>
              <h1 className="text-[24px] font-semibold uppercase tracking-[0.12em]">
                Architectural Drawings in Bexley and Surrounding Areas
              </h1>

              <p className="mt-4 text-[14px] text-slate-700">
                We prepare planning drawings and building regulation packages for
                extensions, loft conversions and new builds across Bexley,
                Bexleyheath, Sidcup, Welling and nearby areas.
              </p>

              <ul className="mt-5 space-y-2 text-[13px]">
                <li>• House extensions and rear extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Internal layout changes</li>
                <li>• New build houses</li>
                <li>• Building regulation drawings</li>
              </ul>

              <button
                onClick={scrollToForm}
                className="mt-6 bg-[#64b7c4] text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                Request drawing fees instantly
              </button>
            </div>

            {/* FORM */}
            <div id="quote-form" className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-sm font-semibold uppercase">
                Get your fixed fee
              </h2>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">

                <input name="name" required placeholder="Your name"
                  className="w-full border-b py-2 text-sm" />

                <input name="phone" required placeholder="Phone number"
                  className="w-full border-b py-2 text-sm" />

                <input name="email" required placeholder="Email"
                  className="w-full border-b py-2 text-sm" />

                <input name="postcode" required placeholder="Postcode"
                  className="w-full border-b py-2 text-sm" />

                <select name="projectType" required className="w-full border-b py-2 text-sm">
                  <option value="">Select project type</option>
                  <option>House extension</option>
                  <option>Loft conversion</option>
                  <option>New build</option>
                  <option>Flat conversion</option>
                  <option>Garage conversion</option>
                  <option>Internal alterations</option>
                  <option>Building regulations</option>
                  <option>Planning drawings</option>
                  <option>Other</option>
                </select>

                <textarea name="details" placeholder="Project details"
                  className="w-full border p-2 text-sm"></textarea>

                <button className="w-full bg-[#64b7c4] text-white py-3 rounded-full text-sm font-semibold">
                  Get my fixed fee
                </button>

              </form>
            </div>
          </div>
        </section>

        <ServiceInternalLinks boroughName="Bexley" />

        {/* FOOTER */}
        <section className="bg-[#20243b] py-12 text-center text-white">
          <img src="/images/wedrawplans-logo.png" className="h-16 mx-auto" />

          <p className="mt-4 text-sm text-white/80">
            Architectural drawings for extensions, lofts and new builds across Bexley and surrounding areas.
          </p>

          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <a href={PHONE_LINK} className="bg-white text-[#20243b] px-5 py-2 rounded-full">
              Call {PHONE_DISPLAY}
            </a>

            <a href={WHATSAPP_LINK} className="bg-[#25D366] px-5 py-2 rounded-full">
              WhatsApp
            </a>

            <a href="mailto:info@wedrawplans.com" className="border px-5 py-2 rounded-full">
              Email
            </a>

            <a href="https://share.google/D3KId64vHtHSKPALr"
               target="_blank"
               className="border px-5 py-2 rounded-full">
              Google Profile
            </a>
          </div>

          <p className="mt-6 text-xs text-white/60">
            201 Borough High Street, London SE1 1JA
          </p>

          <p className="mt-3 text-xs text-white/40">
            © {new Date().getFullYear()} WEDRAWPLANS
          </p>
        </section>

      </div>
    </>
  );
}
