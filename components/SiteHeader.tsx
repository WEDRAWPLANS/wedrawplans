import React from "react";
import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

const LOCAL_DESIGNERS_ITEMS = [
  // Pinned high lead boroughs first
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

  // Remaining boroughs (alphabetical)
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

  // Region page
  { label: "Surrey Borders (M25)", href: "/areas/surrey-borders-m25" },

  // Final link
  { label: "View all boroughs", href: "/areas" },
];

function LocalDesignersDropdown() {
  const detailsRef = React.useRef<HTMLDetailsElement | null>(null);

  // Close on Escape
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") detailsRef.current?.removeAttribute("open");
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close if clicking anywhere outside the dropdown panel
  React.useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const el = detailsRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (target && !el.contains(target)) el.removeAttribute("open");
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  return (
    <details ref={detailsRef} className="relative">
      <summary className="list-none cursor-pointer px-3 py-2 text-[15px] font-medium text-slate-900 hover:text-slate-700">
        Local Designers
      </summary>

      {/* Fixed panel prevents stacking-context issues with sliders/overflow parents */}
      <div className="fixed left-1/2 top-[180px] z-[2147483647] -translate-x-1/2">
        <div className="w-80 rounded-xl border border-slate-200 bg-white shadow-lg p-2 max-h-[70vh] overflow-auto">
          {LOCAL_DESIGNERS_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-[14px] text-slate-900 hover:bg-slate-100"
              onClick={() => detailsRef.current?.removeAttribute("open")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function SiteHeader() {
  return (
    <header className="relative z-[2147483647] bg-[#fdf8f3]/95 backdrop-blur">
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

        {/* Nav row */}
        <nav className="mt-3 flex w-full items-center justify-center gap-6">
          <LocalDesignersDropdown />
        </nav>

        {/* Call and WhatsApp row */}
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
