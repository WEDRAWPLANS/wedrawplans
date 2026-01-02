import React from "react";
import Image from "next/image";
import Link from "next/link";

type BoroughHeaderProps = {
  boroughName: string;
  phoneDisplay?: string;
  phoneLink?: string;
  whatsappLink: string;
};

const DEFAULT_PHONE_DISPLAY = "020 3654 8508";
const DEFAULT_PHONE_LINK = "tel:+442036548508";

export default function BoroughHeader({
  boroughName,
  phoneDisplay = DEFAULT_PHONE_DISPLAY,
  phoneLink = DEFAULT_PHONE_LINK,
  whatsappLink,
}: BoroughHeaderProps) {
  return (
    <header
      className="relative isolate z-[2147483647] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur"
      style={{ pointerEvents: "auto" }}
    >
      <div className="relative z-[2147483647] mx-auto max-w-5xl px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* LEFT: LOGO + TEXT */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="relative z-[2147483647] flex items-center gap-3 cursor-pointer"
            style={{ pointerEvents: "auto" }}
          >
            <div className="relative h-10 w-44 sm:h-11 sm:w-52">
              <Image
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-600">
                Architectural drawing consultants
              </div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                {boroughName}
              </div>
            </div>
          </Link>

          {/* RIGHT: CONTACT BUTTONS */}
          <div className="relative z-[2147483647] flex items-center gap-2">
            <a
              href={phoneLink}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[12px] font-semibold text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
            >
              <span className="text-base">📞</span>
              <span>{phoneDisplay}</span>
            </a>

            <a
              href={whatsappLink}
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

        {/* SMALL LINKS ROW */}
        <div className="relative z-[2147483647] mt-2 flex items-center justify-between text-[12px] text-slate-600">
          <Link href="/areas" className="underline hover:text-slate-900">
            View all boroughs
          </Link>

          <div className="hidden sm:flex items-center gap-3">
            <Link href="/#quote" className="underline hover:text-slate-900">
              Get a quote
            </Link>
            <Link href="/#contact" className="underline hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
