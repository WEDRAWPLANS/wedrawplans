import Head from "next/head";
import Link from "next/link";
import PropertyCapture from "../components/PropertyCapture";

export default function MyPropertyPage() {
  return (
    <>
      <Head>
        <title>My Property | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Save your property with WEDRAWPLANS using your postcode. No quotation request or drawings required."
        />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className="min-h-screen bg-[#f8f4f0] px-4 py-8 text-slate-900 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <Link href="/" className="text-[13px] font-bold text-[#236f7b] underline underline-offset-4">
              ← WEDRAWPLANS
            </Link>
            <a href="tel:+442036548508" className="text-[13px] font-semibold text-[#36545a]">
              020 3654 8508
            </a>
          </div>

          <PropertyCapture />

          <p className="mx-auto mt-5 max-w-xl text-center text-[11px] leading-5 text-slate-500">
            This page is for fast property registration. It is separate from WEDRAWPLANS quotation and project-enquiry forms.
          </p>
        </div>
      </main>
    </>
  );
}
