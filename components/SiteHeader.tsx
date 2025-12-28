import React from "react";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

export default function SiteHeader() {
  return (
    <header className="bg-[#fdf8f3]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/wedrawplans-logo.png"
            alt="WEDRAWPLANS"
            className="h-24 w-auto object-contain"
          />

          <div className="mt-3 text-[11px] tracking-[0.18em] text-slate-600 uppercase">
            Architectural Drawing Consultants
          </div>

          <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
            Architectural Drawings for Extensions, Lofts + New Builds at an Affordable Fixed Cost
          </div>
        </div>

        <hr className="mt-5 border-t border-slate-600" />

        <div className="mt-1 flex w-full items-center justify-end gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
            >
              <span className="text-base">📞</span>
              <span>Call us</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
            >
              <span>WhatsApp us</span>
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a href={PHONE_LINK} className="text-[12px] font-medium text-slate-900">
              Call
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#29788a]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
