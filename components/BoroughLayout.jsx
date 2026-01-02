import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans";

export default function BoroughLayout({
  title,
  description,
  canonical,
  ldJsonObjects = [],
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {ldJsonObjects.map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
      </Head>

      <main className="bg-slate-50">
        {/* GLOBAL BOROUGH HEADER (ONE PLACE FIXES ALL BOROUGHS) */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-4 lg:px-6">
            {/* Logo row */}
            <div className="flex flex-col items-center text-center">
              <Link href="/" aria-label="Go to homepage" className="inline-block">
                <Image
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  width={420}
                  height={140}
                  className="h-24 w-auto object-contain"
                  priority
                />
              </Link>

              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Architectural drawing consultants
              </div>

              <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
                {title}
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            {/* Links + CTAs row */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-4 text-[12px] text-slate-700">
                <Link href="/" className="underline hover:text-slate-900">
                  Home
                </Link>
                <Link href="/areas" className="underline hover:text-slate-900">
                  View all boroughs
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PHONE_LINK}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[12px] font-semibold text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span className="text-base">📞</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[12px] font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  <span className="text-base">💬</span>
                  <span className="hidden sm:inline">WhatsApp us</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {children}
      </main>
    </>
  );
}
