import React from "react";
import Link from "next/link";


const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";
const LOCAL_DESIGNERS_ITEMS = [
  // Pinned high-lead boroughs
  { label: "Barnet", href: "/areas/barnet" },
  { label: "Harrow", href: "/areas/harrow" },
  { label: "Croydon", href: "/areas/croydon" },
  { label: "Ealing", href: "/areas/ealing" },
  { label: "Enfield", href: "/areas/enfield" },
  { label: "Redbridge", href: "/areas/redbridge" },
  { label: "Hillingdon", href: "/areas/hillingdon" },
  { label: "Bromley", href: "/areas/bromley" },
  { label: "Wandsworth", href: "/areas/wandsworth" },
  { label: "Camden", href: "/areas/camden" },

  // Remaining boroughs
  { label: "Barking and Dagenham", href: "/areas/barking-dagenham" },
  { label: "Bexley", href: "/areas/bexley" },
  { label: "Brent", href: "/areas/brent" },
  { label: "City of London", href: "/areas/city-of-london" },
  { label: "Greenwich", href: "/areas/greenwich" },
  { label: "Hackney", href: "/areas/hackney" },
  { label: "Hammersmith and Fulham", href: "/areas/hammersmith-fulham" },
  { label: "Haringey", href: "/areas/haringey" },
  { label: "Havering", href: "/areas/havering" },
  { label: "Hounslow", href: "/areas/hounslow" },
  { label: "Islington", href: "/areas/islington" },
  { label: "Kensington and Chelsea", href: "/areas/kensington-chelsea" },
  { label: "Kingston upon Thames", href: "/areas/kingston" },
  { label: "Lambeth", href: "/areas/lambeth" },
  { label: "Lewisham", href: "/areas/lewisham" },
  { label: "Merton", href: "/areas/merton" },
  { label: "Newham", href: "/areas/newham" },
  { label: "Richmond upon Thames", href: "/areas/richmond" },
  { label: "Southwark", href: "/areas/southwark" },
  { label: "Sutton", href: "/areas/sutton" },
  { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
  { label: "Waltham Forest", href: "/areas/waltham-forest" },
  { label: "Westminster", href: "/areas/westminster" },

  // Extra region
  { label: "Surrey Borders (M25)", href: "/areas/surrey-borders-m25" },

  // Final link
  { label: "View all boroughs", href: "/areas" },
];
function LocalDesignersDropdown() {
  return (
    <div className="relative group">
      <button
        type="button"
        className="px-3 py-2 text-[15px] font-medium text-slate-900 hover:text-slate-700"
      >
        Local Designers
      </button>

      <div className="absolute left-0 top-full hidden group-hover:block z-50">
        <div className="mt-2 w-80 rounded-xl border bg-white shadow-lg p-2 max-h-[70vh] overflow-auto">
          {LOCAL_DESIGNERS_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

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
<nav className="mt-3 hidden w-full justify-center lg:flex">
  <LocalDesignersDropdown />
</nav>

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
