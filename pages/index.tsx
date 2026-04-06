import React, { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import HeroSlider from "../components/HeroSlider";
import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

type LeadAction = "phone_click" | "email_click" | "whatsapp_click";

type PostcodeIntel = {
  normalized: string;
  outward: string;
  borough: string | null;
  coverageLabel: string | null;
};

type NavDropdownItem = {
  label: string;
  href: string;
};

type ServiceOption = {
  label: string;
  value: string;
  href: string;
};

const gtagEvent = (name: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  }
};

const trackLeadEvent = (action: LeadAction) => {
  gtagEvent(action, {
    event_category: "lead",
    event_label: action,
  });
};

const SERVICE_OPTIONS: ServiceOption[] = [
  { label: "Extension Plans", value: "House extension drawings", href: "/extension-plans" },
  { label: "Loft Conversion Plans", value: "Loft conversion drawings", href: "/loft-conversion-plans" },
  { label: "Building Regulations Plans", value: "Building regulation drawings", href: "/building-regulation-drawings" },
  { label: "Design Plans", value: "Design plans", href: "/building-regulation-drawings" },
  { label: "Detailed Sections", value: "Detailed sections", href: "/building-regulation-drawings" },
  { label: "Dropped Kerb Plans", value: "Dropped kerb plans", href: "/building-regulation-drawings" },
  { label: "Elevation Plans", value: "Elevation plans", href: "/building-regulation-drawings" },
  { label: "Floor Plans", value: "Floor plans", href: "/building-regulation-drawings" },
  { label: "Garage Conversion Plans", value: "Garage conversion drawings", href: "/extension-plans" },
  { label: "Garage Plans", value: "Garage plans", href: "/extension-plans" },
  { label: "Garden Studio Plans", value: "Garden studio drawings", href: "/extension-plans" },
  { label: "HMO Plans", value: "HMO plans", href: "/building-regulation-drawings" },
  { label: "Party Wall Services", value: "Party wall drawings", href: "/building-regulation-drawings" },
  { label: "Planning Applications", value: "Planning drawings", href: "/extension-plans" },
  { label: "Property Conversion", value: "Property conversion drawings", href: "/new-build-plans" },
  { label: "Shop Plans", value: "Shop plans", href: "/commercial/shopfronts" },
  { label: "Structural Calculations", value: "Structural calculations", href: "/building-regulation-drawings" },
  { label: "New Build Plans", value: "New build drawings", href: "/new-build-plans" },
  { label: "Other", value: "Other drawings", href: "/contact" },
];

const BOROUGHS: { label: string; slug: string }[] = [
  { label: "Architectural drawings Barking and Dagenham", slug: "barking-dagenham" },
  { label: "Architectural drawings Barnet", slug: "barnet" },
  { label: "Architectural drawings Bexley", slug: "bexley" },
  { label: "Architectural drawings Brent", slug: "brent" },
  { label: "Architectural drawings Bromley", slug: "bromley" },
  { label: "Architectural drawings Camden", slug: "camden" },
  { label: "Architectural drawings Croydon", slug: "croydon" },
  { label: "Architectural drawings Ealing", slug: "ealing" },
  { label: "Architectural drawings Enfield", slug: "enfield" },
  { label: "Architectural drawings Greenwich", slug: "greenwich" },
  { label: "Architectural drawings Hackney", slug: "hackney" },
  { label: "Architectural drawings Hammersmith and Fulham", slug: "hammersmith-fulham" },
  { label: "Architectural drawings Haringey", slug: "haringey" },
  { label: "Architectural drawings Harrow", slug: "harrow" },
  { label: "Architectural drawings Havering", slug: "havering" },
  { label: "Architectural drawings Hillingdon", slug: "hillingdon" },
  { label: "Architectural drawings Hounslow", slug: "hounslow" },
  { label: "Architectural drawings Islington", slug: "islington" },
  { label: "Architectural drawings Kensington and Chelsea", slug: "kensington-chelsea" },
  { label: "Architectural drawings Kingston upon Thames", slug: "kingston" },
  { label: "Architectural drawings Lambeth", slug: "lambeth" },
  { label: "Architectural drawings Lewisham", slug: "lewisham" },
  { label: "Architectural drawings Merton", slug: "merton" },
  { label: "Architectural drawings Newham", slug: "newham" },
  { label: "Architectural drawings Redbridge", slug: "redbridge" },
  { label: "Architectural drawings Richmond upon Thames", slug: "richmond" },
  { label: "Architectural drawings Southwark", slug: "southwark" },
  { label: "Architectural drawings Sutton", slug: "sutton" },
  { label: "Architectural drawings Tower Hamlets", slug: "tower-hamlets" },
  { label: "Architectural drawings Waltham Forest", slug: "waltham-forest" },
  { label: "Architectural drawings Wandsworth", slug: "wandsworth" },
  { label: "Architectural drawings Westminster and City of London", slug: "westminster-city" },
  { label: "Architectural drawings Surrey borders and M25", slug: "surrey-m25" },
];

const LOCAL_DESIGNERS_ITEMS: NavDropdownItem[] = [
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
  { label: "Surrey Borders (M25)", href: "/areas/surrey-borders-m25" },
  { label: "View all boroughs", href: "/areas" },
];

const COMMERCIAL_ITEMS: NavDropdownItem[] = [
  { label: "Shopfronts and signage drawings", href: "/commercial/shopfronts" },
  { label: "Restaurant and cafe layouts", href: "/commercial/restaurants" },
  { label: "Office fit out plans", href: "/commercial/office-fitout" },
  { label: "Change of use applications (Class E, Sui Generis)", href: "/commercial/change-of-use" },
  { label: "Mixed use schemes above shops", href: "/commercial/mixed-use" },
  { label: "Basements and plant rooms", href: "/commercial/basements" },
  { label: "Fire strategy and means of escape", href: "/commercial/fire-strategy" },
  { label: "Building Regulations packs", href: "/building-regulation-drawings" },
  { label: "Commercial drawings overview", href: "/commercial" },
];

const EXTENSION_ITEMS: NavDropdownItem[] = [
  { label: "Rear extension plans", href: "/extension-plans" },
  { label: "Side return extensions", href: "/extension-plans" },
  { label: "Wrap-around extensions", href: "/extension-plans" },
  { label: "Two storey extensions", href: "/extension-plans" },
  { label: "Kitchen extension layouts", href: "/extension-plans" },
  { label: "Garage conversion plans", href: "/extension-plans" },
  { label: "Garden room / studio plans", href: "/extension-plans" },
];

const LOFT_ITEMS: NavDropdownItem[] = [
  { label: "Dormer loft conversions", href: "/loft-conversion-plans" },
  { label: "Hip to gable lofts", href: "/loft-conversion-plans" },
  { label: "Mansard loft conversions", href: "/loft-conversion-plans" },
  { label: "Velux loft layouts", href: "/loft-conversion-plans" },
  { label: "Attic conversions", href: "/loft-conversion-plans" },
];

const NEW_BUILD_ITEMS: NavDropdownItem[] = [
  { label: "New build house plans", href: "/new-build-plans" },
  { label: "Small residential developments", href: "/new-build-plans" },
  { label: "Backland and infill sites", href: "/new-build-plans" },
  { label: "Conversion to self-contained flats", href: "/new-build-plans" },
  { label: "Basement and lower ground conversions", href: "/new-build-plans" },
];

const TECHNICAL_ITEMS: NavDropdownItem[] = [
  { label: "Building Regulation drawing packs", href: "/building-regulation-drawings" },
  { label: "Fire and escape strategy plans", href: "/building-regulation-drawings" },
  { label: "Measured surveys", href: "/building-regulation-drawings" },
  { label: "Structural engineer coordination", href: "/building-regulation-drawings" },
  { label: "Party wall plans and support", href: "/building-regulation-drawings" },
  { label: "HMO layout and licensing drawings", href: "/building-regulation-drawings" },
  { label: "Interior layouts and finishes", href: "/building-regulation-drawings" },
];

const MOBILE_SECTIONS: { title: string; items: NavDropdownItem[]; href: string }[] = [
  { title: "Local Designers", items: LOCAL_DESIGNERS_ITEMS, href: "/areas" },
  { title: "Commercial", items: COMMERCIAL_ITEMS, href: "/commercial" },
  { title: "Extension Plans", items: EXTENSION_ITEMS, href: "/extension-plans" },
  { title: "Loft Plans", items: LOFT_ITEMS, href: "/loft-conversion-plans" },
  { title: "New Build", items: NEW_BUILD_ITEMS, href: "/new-build-plans" },
  { title: "Technical & Support", items: TECHNICAL_ITEMS, href: "/building-regulation-drawings" },
];

const POSTCODE_RULES: Array<{
  test: (outward: string) => boolean;
  borough: string;
}> = [
  { test: (o) => /^SE1$/.test(o), borough: "Southwark" },
  { test: (o) => /^SE5$/.test(o), borough: "Southwark" },
  { test: (o) => /^SE15$/.test(o), borough: "Southwark" },
  { test: (o) => /^SE16$/.test(o), borough: "Southwark" },

  { test: (o) => /^SW4$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW8$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW9$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW2$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW16$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE11$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE19$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE21$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE24$/.test(o), borough: "Lambeth" },

  { test: (o) => /^SW1/.test(o), borough: "Westminster" },
  { test: (o) => /^SW3$/.test(o), borough: "Kensington and Chelsea" },
  { test: (o) => /^SW5$/.test(o), borough: "Kensington and Chelsea" },
  { test: (o) => /^W8$/.test(o), borough: "Kensington and Chelsea" },
  { test: (o) => /^W1/.test(o), borough: "Westminster" },
  { test: (o) => /^WC/.test(o), borough: "Camden" },

  { test: (o) => /^NW1$/.test(o), borough: "Camden" },
  { test: (o) => /^NW3$/.test(o), borough: "Camden" },
  { test: (o) => /^NW5$/.test(o), borough: "Camden" },
  { test: (o) => /^N1$/.test(o), borough: "Islington" },
  { test: (o) => /^N5$/.test(o), borough: "Islington" },
  { test: (o) => /^N7$/.test(o), borough: "Islington" },
  { test: (o) => /^N19$/.test(o), borough: "Islington" },
  { test: (o) => /^N4$/.test(o), borough: "Haringey" },
  { test: (o) => /^N8$/.test(o), borough: "Haringey" },
  { test: (o) => /^N10$/.test(o), borough: "Haringey" },
  { test: (o) => /^N15$/.test(o), borough: "Haringey" },
  { test: (o) => /^N17$/.test(o), borough: "Haringey" },
  { test: (o) => /^N22$/.test(o), borough: "Haringey" },

  { test: (o) => /^E8$/.test(o), borough: "Hackney" },
  { test: (o) => /^E9$/.test(o), borough: "Hackney" },
  { test: (o) => /^E5$/.test(o), borough: "Hackney" },
  { test: (o) => /^N16$/.test(o), borough: "Hackney" },
  { test: (o) => /^E1$/.test(o), borough: "Tower Hamlets" },
  { test: (o) => /^E2$/.test(o), borough: "Tower Hamlets" },
  { test: (o) => /^E3$/.test(o), borough: "Tower Hamlets" },
  { test: (o) => /^E14$/.test(o), borough: "Tower Hamlets" },

  { test: (o) => /^E13$/.test(o), borough: "Newham" },
  { test: (o) => /^E15$/.test(o), borough: "Newham" },
  { test: (o) => /^E16$/.test(o), borough: "Newham" },
  { test: (o) => /^E6$/.test(o), borough: "Newham" },
  { test: (o) => /^IG1$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG2$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG3$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG4$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG5$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG6$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG7$/.test(o), borough: "Redbridge" },
  { test: (o) => /^E11$/.test(o), borough: "Waltham Forest" },
  { test: (o) => /^E17$/.test(o), borough: "Waltham Forest" },
  { test: (o) => /^E10$/.test(o), borough: "Waltham Forest" },
  { test: (o) => /^E4$/.test(o), borough: "Waltham Forest" },

  { test: (o) => /^EN5$/.test(o), borough: "Barnet" },
  { test: (o) => /^EN4$/.test(o), borough: "Barnet" },
  { test: (o) => /^N2$/.test(o), borough: "Barnet" },
  { test: (o) => /^N3$/.test(o), borough: "Barnet" },
  { test: (o) => /^N12$/.test(o), borough: "Barnet" },
  { test: (o) => /^NW4$/.test(o), borough: "Barnet" },
  { test: (o) => /^NW7$/.test(o), borough: "Barnet" },
  { test: (o) => /^HA8$/.test(o), borough: "Barnet" },

  { test: (o) => /^EN1$/.test(o), borough: "Enfield" },
  { test: (o) => /^EN2$/.test(o), borough: "Enfield" },
  { test: (o) => /^EN3$/.test(o), borough: "Enfield" },
  { test: (o) => /^N9$/.test(o), borough: "Enfield" },
  { test: (o) => /^N11$/.test(o), borough: "Enfield" },
  { test: (o) => /^N13$/.test(o), borough: "Enfield" },
  { test: (o) => /^N14$/.test(o), borough: "Enfield" },
  { test: (o) => /^N18$/.test(o), borough: "Enfield" },
  { test: (o) => /^N21$/.test(o), borough: "Enfield" },

  { test: (o) => /^HA1$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA2$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA3$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA5$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA7$/.test(o), borough: "Harrow" },

  { test: (o) => /^UB1$/.test(o), borough: "Ealing" },
  { test: (o) => /^UB2$/.test(o), borough: "Ealing" },
  { test: (o) => /^UB5$/.test(o), borough: "Ealing" },
  { test: (o) => /^W5$/.test(o), borough: "Ealing" },
  { test: (o) => /^W7$/.test(o), borough: "Ealing" },
  { test: (o) => /^NW10$/.test(o), borough: "Brent" },
  { test: (o) => /^HA0$/.test(o), borough: "Brent" },
  { test: (o) => /^HA9$/.test(o), borough: "Brent" },
  { test: (o) => /^NW2$/.test(o), borough: "Brent" },
  { test: (o) => /^NW6$/.test(o), borough: "Brent" },

  { test: (o) => /^TW1$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^TW9$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^TW10$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^KT1$/.test(o), borough: "Kingston upon Thames" },
  { test: (o) => /^KT2$/.test(o), borough: "Kingston upon Thames" },
  { test: (o) => /^SW19$/.test(o), borough: "Merton" },
  { test: (o) => /^SM4$/.test(o), borough: "Merton" },
  { test: (o) => /^SW17$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW18$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW11$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW12$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW15$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW13$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^SW14$/.test(o), borough: "Richmond upon Thames" },

  { test: (o) => /^CR0$/.test(o), borough: "Croydon" },
  { test: (o) => /^CR2$/.test(o), borough: "Croydon" },
  { test: (o) => /^CR7$/.test(o), borough: "Croydon" },
  { test: (o) => /^SM1$/.test(o), borough: "Sutton" },
  { test: (o) => /^SM2$/.test(o), borough: "Sutton" },
  { test: (o) => /^SM3$/.test(o), borough: "Sutton" },
  { test: (o) => /^BR1$/.test(o), borough: "Bromley" },
  { test: (o) => /^BR2$/.test(o), borough: "Bromley" },
  { test: (o) => /^BR3$/.test(o), borough: "Bromley" },
  { test: (o) => /^BR4$/.test(o), borough: "Bromley" },
  { test: (o) => /^SE9$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE10$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE18$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE28$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE12$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE13$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE23$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE26$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE6$/.test(o), borough: "Lewisham" },
];

function normalisePostcode(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, " ");
}

function getOutwardCode(postcode: string) {
  const cleaned = postcode.toUpperCase().replace(/\s+/g, "");
  const match = cleaned.match(/^([A-Z]{1,2}\d[A-Z\d]?)/);
  return match ? match[1] : "";
}

function detectPostcodeIntel(postcode: string): PostcodeIntel {
  const normalized = normalisePostcode(postcode);
  const outward = getOutwardCode(normalized);
  const borough = outward
    ? POSTCODE_RULES.find((rule) => rule.test(outward))?.borough || null
    : null;

  return {
    normalized,
    outward,
    borough,
    coverageLabel: borough ? `Serving ${outward} • ${borough} area` : outward ? `Serving ${outward} area` : null,
  };
}

function useCloseOnEscape(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);
}

function DesktopDropdown({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: NavDropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (!wrapRef.current) return;
      const target = e.target as Node | null;
      if (target && !wrapRef.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useCloseOnEscape(open, () => setOpen(false));

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 whitespace-nowrap text-[14px] font-medium text-slate-900 transition hover:text-black"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <span className="text-[10px]">▾</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[100] pt-3">
          <div className="max-h-[70vh] w-[290px] overflow-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_44px_rgba(15,23,42,0.18)]">
            <Link
              href={href}
              className="block rounded-xl px-3 py-2 text-[14px] font-semibold text-slate-900 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              View all {title}
            </Link>
            <div className="my-2 border-t border-slate-200" />
            {items.map((item) => (
              <Link
                key={`${title}-${item.label}`}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenuSection({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: NavDropdownItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[18px] font-medium text-slate-900">{title}</span>
        <span className="text-[22px] text-slate-700">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="pt-3">
          <Link href={href} className="block py-2 text-[15px] font-semibold text-slate-900">
            View all {title}
          </Link>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={`${title}-${item.label}`}
                href={item.href}
                className="block py-2 text-[15px] text-slate-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:border-slate-400"
    >
      <span className="relative block h-5 w-6">
        <span
          className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition ${isOpen ? "translate-y-[9px] rotate-45" : ""}`}
        />
        <span
          className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current transition ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`absolute left-0 top-[18px] h-[2px] w-6 bg-current transition ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
        />
      </span>
    </button>
  );
}

function IconButton({
  href,
  label,
  symbol,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  symbol: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[18px] text-slate-900 shadow-sm transition hover:border-slate-400 ${className}`}
    >
      <span aria-hidden="true">{symbol}</span>
    </a>
  );
}

export default function IndexPage() {
  const heroStartedRef = useRef(false);
  const heroPostcodeRef = useRef<null | HTMLInputElement>(null);
  const heroNameRef = useRef<null | HTMLInputElement>(null);
  const heroStartTimeRef = useRef<number | null>(null);

  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroExpanded, setHeroExpanded] = useState(false);
  const [heroPostcode, setHeroPostcode] = useState("");
  const [heroService, setHeroService] = useState("");
  const [heroName, setHeroName] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [heroMessage, setHeroMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLeadOpen, setMobileLeadOpen] = useState(false);

  const postcodeIntel = detectPostcodeIntel(heroPostcode);

  const selectedServiceHref = useMemo(() => {
    return SERVICE_OPTIONS.find((option) => option.value === heroService)?.href || "";
  }, [heroService]);

  useEffect(() => {
    if (!heroExpanded) return;
    const timer = window.setTimeout(() => {
      heroNameRef.current?.focus();
    }, 40);
    return () => window.clearTimeout(timer);
  }, [heroExpanded]);

  useEffect(() => {
    if (!mobileMenuOpen && !mobileLeadOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen, mobileLeadOpen]);

  useCloseOnEscape(mobileMenuOpen, () => setMobileMenuOpen(false));
  useCloseOnEscape(mobileLeadOpen, () => setMobileLeadOpen(false));

  function trackHeroFormStart(firstFieldName?: string) {
    if (!heroStartedRef.current) {
      heroStartedRef.current = true;
      heroStartTimeRef.current = Date.now();
      gtagEvent("form_start", {
        form_name: "homepage_hero",
        first_field_name: firstFieldName || "unknown",
      });
    }
  }

  function trackHeroServiceSelect(serviceValue: string) {
    if (!serviceValue) return;
    gtagEvent("lead_select_project_type", {
      form_name: "homepage_hero",
      service: serviceValue,
      borough_detected: postcodeIntel.borough || "unknown",
      outward_code: postcodeIntel.outward || "unknown",
    });
  }

  async function submitLead(formName: "homepage_hero" | "mobile_floating_widget") {
    const postcode = postcodeIntel.normalized;
    const service = heroService.trim();
    const name = heroName.trim();
    const phone = heroPhone.trim();
    const email = heroEmail.trim();
    const message = heroMessage.trim();

    if (!postcode || !service) {
      alert("Please enter your postcode and select the drawings you need.");
      return;
    }

    if (!name || !phone || !email) {
      alert("Please complete your name, phone number and email address.");
      return;
    }

    const timeTakenMs = heroStartTimeRef.current ? Date.now() - heroStartTimeRef.current : null;

    const payload = {
      name,
      phone,
      email,
      service,
      postcode,
      borough: postcodeIntel.borough,
      coverageLabel: postcodeIntel.coverageLabel,
      outwardCode: postcodeIntel.outward,
      message:
        message ||
        (formName === "mobile_floating_widget"
          ? "Lead from floating mobile widget"
          : "Quick quote from homepage hero form"),
      hp: "",
      formStartedAt: heroStartTimeRef.current,
      timeTakenMs,
    };

    try {
      setHeroSubmitting(true);

      gtagEvent("lead_step_continue", {
        form_name: formName,
        step: "submit",
        service,
        postcode,
        borough_detected: postcodeIntel.borough || "unknown",
        outward_code: postcodeIntel.outward || "unknown",
      });

      const res = await fetch("/api/contact-resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        gtagEvent("generate_lead", {
          form_name: formName,
          service,
          postcode,
          borough_detected: postcodeIntel.borough || "unknown",
          outward_code: postcodeIntel.outward || "unknown",
        });

        alert("Thank you. Your request has been submitted. WEDRAWPLANS will contact you shortly.");
        setHeroPostcode("");
        setHeroService("");
        setHeroName("");
        setHeroPhone("");
        setHeroEmail("");
        setHeroMessage("");
        setHeroExpanded(false);
        setMobileLeadOpen(false);
        heroStartedRef.current = false;
        heroStartTimeRef.current = null;
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setHeroSubmitting(false);
    }
  }

  async function handleHeroSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (heroSubmitting) return;

    if (!heroStartedRef.current) {
      heroStartedRef.current = true;
      heroStartTimeRef.current = Date.now();
    }

    if (!heroExpanded) {
      setHeroExpanded(true);
      gtagEvent("lead_step_continue", {
        form_name: "homepage_hero",
        step: "details_opened",
        service: heroService || "unknown",
        postcode: postcodeIntel.normalized || "unknown",
        borough_detected: postcodeIntel.borough || "unknown",
        outward_code: postcodeIntel.outward || "unknown",
      });
      return;
    }

    await submitLead("homepage_hero");
  }

  async function handleMobileLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (heroSubmitting) return;

    if (!heroStartedRef.current) {
      heroStartedRef.current = true;
      heroStartTimeRef.current = Date.now();
    }

    await submitLead("mobile_floating_widget");
  }

  function openMobileLead() {
    if (!heroStartedRef.current) {
      heroStartedRef.current = true;
      heroStartTimeRef.current = Date.now();
    }
    setHeroExpanded(true);
    setMobileLeadOpen(true);
  }

  return (
    <>
      <Head>
        <title>House Extension & Planning Drawings in London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="House extension, loft conversion, planning and building regulation drawings across London. Get a fixed quote today from WEDRAWPLANS."
        />
        <meta
          name="keywords"
          content="house extension drawings London, planning drawings London, loft conversion drawings London, building regulation drawings London, architectural drawings London"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] pb-24 text-slate-900 lg:pb-0">
        <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 lg:px-6 lg:py-4">
            <div className="relative flex min-h-[96px] items-center justify-center sm:min-h-[118px] lg:min-h-[120px]">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain sm:h-28 lg:h-28 xl:h-32"
                />
              </Link>

              <div className="absolute right-0 hidden items-center gap-3 lg:flex">
                <a
                  href={PHONE_LINK}
                  onClick={() => trackLeadEvent("phone_click")}
                  className="inline-flex items-center rounded-full bg-[#20243b] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#161a2f]"
                >
                  <span className="mr-2" aria-hidden="true">📞</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadEvent("whatsapp_click")}
                  className="inline-flex items-center rounded-full bg-[#25D366] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#1ebe57]"
                >
                  <span className="mr-2" aria-hidden="true">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2 lg:hidden">
                <IconButton
                  href={PHONE_LINK}
                  label="Call"
                  symbol="📞"
                  onClick={() => trackLeadEvent("phone_click")}
                />
                <IconButton
                  href={WHATSAPP_LINK}
                  label="WhatsApp"
                  symbol="💬"
                  onClick={() => trackLeadEvent("whatsapp_click")}
                />
                <HamburgerButton
                  isOpen={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen((v) => !v)}
                />
              </div>
            </div>

            <div className="hidden text-center text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:block">
              Architectural Drawing Consultants
            </div>

            <div className="mt-3 hidden border-t border-slate-300 pt-3 lg:block">
              <nav className="flex w-full items-center justify-between gap-4">
                <DesktopDropdown title="Local Designers" href="/areas" items={LOCAL_DESIGNERS_ITEMS} />
                <DesktopDropdown title="Commercial" href="/commercial" items={COMMERCIAL_ITEMS} />
                <DesktopDropdown title="Extension Plans" href="/extension-plans" items={EXTENSION_ITEMS} />
                <DesktopDropdown title="Loft Plans" href="/loft-conversion-plans" items={LOFT_ITEMS} />
                <DesktopDropdown title="New Build" href="/new-build-plans" items={NEW_BUILD_ITEMS} />
                <DesktopDropdown
                  title="Technical & Support"
                  href="/building-regulation-drawings"
                  items={TECHNICAL_ITEMS}
                />
                <Link
                  href="/areas"
                  className="whitespace-nowrap text-[14px] font-medium text-slate-900 hover:text-black"
                >
                  Areas
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[80] lg:hidden">
            <button
              type="button"
              aria-label="Close mobile menu overlay"
              className="absolute inset-0 bg-slate-900/35"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-full max-w-[420px] overflow-y-auto bg-[#fdf8f3] px-6 pb-10 pt-6 shadow-[0_20px_50px_rgba(15,23,42,0.28)]">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Menu
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[24px] text-slate-900"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 space-y-1">
                <Link
                  href="/"
                  className="block py-2 text-[18px] font-medium text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/areas"
                  className="block py-2 text-[18px] font-medium text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Areas We Cover
                </Link>
                <a
                  href="#price-guide"
                  className="block py-2 text-[18px] font-medium text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Price Guide
                </a>
                <a
                  href="#contact"
                  className="block py-2 text-[18px] font-medium text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>

              <div className="mt-4 border-t border-slate-200" />

              <div className="mt-2">
                {MOBILE_SECTIONS.map((section) => (
                  <MobileMenuSection
                    key={section.title}
                    title={section.title}
                    href={section.href}
                    items={section.items}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <IconButton
                  href={PHONE_LINK}
                  label={`Call ${PHONE_DISPLAY}`}
                  symbol="📞"
                  onClick={() => trackLeadEvent("phone_click")}
                />
                <IconButton
                  href={WHATSAPP_LINK}
                  label="Chat on WhatsApp"
                  symbol="💬"
                  onClick={() => trackLeadEvent("whatsapp_click")}
                />
                <a
                  href={EMAIL_LINK}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-[13px] font-semibold text-slate-900 shadow-sm"
                  onClick={() => trackLeadEvent("email_click")}
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        )}

        {mobileLeadOpen && (
          <div className="fixed inset-0 z-[95] bg-[#f8f4f0] lg:hidden">
            <div className="flex h-full flex-col">
              <div className="border-b border-slate-200 bg-white px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[16px] font-semibold text-slate-900">Need help with drawings?</div>
                    <div className="text-[12px] text-slate-600">Request your fixed quote</div>
                  </div>
                  <button
                    type="button"
                    aria-label="Close lead form"
                    onClick={() => setMobileLeadOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[24px] text-slate-900"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-3 rounded-2xl bg-[#f8f4f0] px-3 py-3 text-[12px] leading-5 text-slate-600">
                  Tell us the type of drawings you need, your postcode and any key details. The more context you add, the faster we can quote properly.
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <form onSubmit={handleMobileLeadSubmit} className="mx-auto max-w-[560px] space-y-4">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                    <div className="space-y-3">
                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-[#2f6f8a]">
                          ✎
                        </span>
                        <select
                          name="service"
                          value={heroService}
                          onFocus={() => trackHeroFormStart("mobile_service")}
                          onChange={(e) => {
                            setHeroService(e.target.value);
                            trackHeroServiceSelect(e.target.value);
                          }}
                          className="h-14 w-full appearance-none rounded-[16px] border border-slate-200 bg-white pl-14 pr-12 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                        >
                          <option value="">Which service do you need?</option>
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={`mobile-${option.value}`} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-700">
                          ▾
                        </span>
                      </div>

                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-[#d85e56]">
                          📍
                        </span>
                        <input
                          name="postcode"
                          value={heroPostcode}
                          onChange={(e) => setHeroPostcode(e.target.value)}
                          onFocus={() => trackHeroFormStart("mobile_postcode")}
                          placeholder="Postcode"
                          className="h-14 w-full rounded-[16px] border border-slate-200 bg-white pl-14 pr-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                        />
                      </div>

                      <input
                        name="name"
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                        onFocus={() => trackHeroFormStart("mobile_name")}
                        placeholder="Your name"
                        className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                      />

                      <input
                        name="phone"
                        type="tel"
                        value={heroPhone}
                        onChange={(e) => setHeroPhone(e.target.value)}
                        onFocus={() => trackHeroFormStart("mobile_phone")}
                        placeholder="Phone number"
                        className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                      />

                      <input
                        name="email"
                        type="email"
                        value={heroEmail}
                        onChange={(e) => setHeroEmail(e.target.value)}
                        onFocus={() => trackHeroFormStart("mobile_email")}
                        placeholder="Email address"
                        className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                      />

                      <textarea
                        name="message"
                        value={heroMessage}
                        onChange={(e) => setHeroMessage(e.target.value)}
                        onFocus={() => trackHeroFormStart("mobile_message")}
                        placeholder="Briefly tell us what you want to build or change"
                        rows={4}
                        className="w-full rounded-[16px] border border-slate-200 bg-white px-4 py-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                      />

                      {postcodeIntel.coverageLabel && (
                        <div className="px-1 text-center text-[12px] font-medium text-[#2f7f4f]">
                          ✓ {postcodeIntel.coverageLabel}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={heroSubmitting}
                        className="flex h-14 w-full items-center justify-center rounded-full bg-[#20243b] px-5 text-center text-[14px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_22px_rgba(15,23,42,0.22)] transition hover:bg-[#161a2f] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                       {heroSubmitting ? "Submitting..." : "Get a quick quote →"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <section className="border-b border-slate-200 bg-[#fdf8f3] pt-6 lg:pt-10">
          <div className="mx-auto max-w-6xl px-4 pb-8 lg:px-6 lg:pb-12">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-10">
              <div className="text-center lg:text-left">
                <div className="hidden lg:block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">
                    London architectural drawing specialists
                  </p>

                  <h1 className="mt-3 text-[26px] font-semibold uppercase leading-[1.3] tracking-[0.14em] text-slate-900 xl:text-[34px]">
                    Get Your House Extension & Planning Drawings Approved Across London & Surrounding Areas
                  </h1>

                  <p className="mt-3 max-w-[640px] text-[15px] font-medium leading-7 text-slate-800">
                    Get professional drawings for house extensions, loft conversions, new builds and Building Regulations.
                    Initial survey within 48 hours and clear fixed pricing.
                  </p>

                  <div className="mt-5 max-w-[640px] text-[14px] leading-7 text-slate-700">
                    <p>
                      WEDRAWPLANS prepare practical, buildable drawings for homeowners, developers and commercial clients
                      across London and the M25 area. We keep the process clear, fast and focused on getting your project
                      moving.
                    </p>
                    <p className="mt-3">
                      Send us your house photo on WhatsApp and we will advise instantly. Many quotes are turned around the
                      same working day.
                    </p>
                    <p className="mt-3">
                      Call{" "}
                      <a
                        href={PHONE_LINK}
                        className="font-semibold underline"
                        onClick={() => trackLeadEvent("phone_click")}
                      >
                        {PHONE_DISPLAY}
                      </a>{" "}
                      or use the form to get your fixed quote started now.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 text-[13px] md:grid-cols-3">
                    <MiniTrustCard title="Fixed price" body="Clear quoting with no vague pricing." />
                    <MiniTrustCard title="Fast turnaround" body="Quick response and fast survey booking." />
                    <MiniTrustCard title="London experts" body="Borough-aware drawings prepared for real approvals." />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLeadEvent("whatsapp_click")}
                      className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                    >
                      <span className="mr-2" aria-hidden="true">💬</span>
                      <span>WhatsApp us now</span>
                    </a>
                    <a
                      href={PHONE_LINK}
                      onClick={() => trackLeadEvent("phone_click")}
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900 shadow-sm hover:border-slate-400"
                    >
                      <span className="mr-2" aria-hidden="true">📞</span>
                      <span>Call {PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:hidden">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-700">
                    London architectural drawing specialists
                  </p>

                  <h1 className="mx-auto mt-3 max-w-[520px] text-[21px] font-semibold uppercase leading-[1.34] tracking-[0.08em] text-slate-900 sm:text-[24px]">
                    House Extension, Loft Conversion and Building Regulation Drawings in London
                  </h1>
                </div>
              </div>

              <div className="lg:pt-2">
                <div className="mx-auto max-w-[620px] rounded-[24px] bg-white p-3 shadow-[0_18px_48px_rgba(15,23,42,0.10)] sm:p-4 lg:rounded-[24px] lg:p-5">
                  <div className="rounded-[20px] border border-slate-200/80 bg-[#f7fafc] px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:px-6 sm:py-5 lg:px-6 lg:py-5">
                    <div className="text-center">
                      <p className="mx-auto max-w-[430px] text-[16px] font-semibold leading-6 text-slate-800">
                      Get your quick quote in minutes
                      </p>
                      <p className="mx-auto mt-2 max-w-[500px] text-[12px] leading-5 text-slate-600">
                        Choose the service you need, tell us your postcode, then add your details and we will come back
                        with a clear quote.
                      </p>
                    </div>

                    <form onSubmit={handleHeroSubmit} className="mx-auto mt-4 max-w-[520px]">
                      <input type="text" name="company" autoComplete="off" tabIndex={-1} className="hidden" />

                      <div className="space-y-3">
                        <div className="relative">
                          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-[#2f6f8a]">
                            ✎
                          </span>
                          <select
                            name="service"
                            value={heroService}
                            onFocus={() => trackHeroFormStart("service")}
                            onChange={(e) => {
                              setHeroService(e.target.value);
                              trackHeroServiceSelect(e.target.value);
                            }}
                            className="h-14 w-full appearance-none rounded-[16px] border border-slate-200 bg-white pl-14 pr-12 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                          >
                            <option value="">Which service do you need?</option>
                            {SERVICE_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-700">
                            ▾
                          </span>
                        </div>

                        {selectedServiceHref ? (
                          <div className="px-1 text-center text-[12px] text-slate-600">
                            Related page{" "}
                            <Link
                              href={selectedServiceHref}
                              className="font-medium text-blue-700 underline underline-offset-4"
                            >
                              View service guidance
                            </Link>
                          </div>
                        ) : null}

                        <div className="relative">
                          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-[#d85e56]">
                            📍
                          </span>
                          <input
                            ref={heroPostcodeRef}
                            name="postcode"
                            value={heroPostcode}
                            onChange={(e) => setHeroPostcode(e.target.value)}
                            onFocus={() => trackHeroFormStart("postcode")}
                            placeholder="Postcode"
                            className="h-14 w-full rounded-[16px] border border-slate-200 bg-white pl-14 pr-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                          />
                        </div>

                        {postcodeIntel.coverageLabel && (
                          <div className="px-1 text-center text-[12px] font-medium text-[#2f7f4f]">
                            ✓ {postcodeIntel.coverageLabel}
                          </div>
                        )}

                        {heroExpanded && (
                          <div className="space-y-3 pt-1">
                            <input
                              ref={heroNameRef}
                              name="name"
                              value={heroName}
                              onChange={(e) => setHeroName(e.target.value)}
                              onFocus={() => trackHeroFormStart("name")}
                              placeholder="Your name"
                              className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                            />

                            <input
                              name="phone"
                              type="tel"
                              value={heroPhone}
                              onChange={(e) => setHeroPhone(e.target.value)}
                              onFocus={() => trackHeroFormStart("phone")}
                              placeholder="Phone number"
                              className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                            />

                            <input
                              name="email"
                              type="email"
                              value={heroEmail}
                              onChange={(e) => setHeroEmail(e.target.value)}
                              onFocus={() => trackHeroFormStart("email")}
                              placeholder="Email address"
                              className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                            />
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={heroSubmitting}
                          className="mt-1 flex h-14 w-full items-center justify-center rounded-full bg-[#67a8c7] px-5 text-center text-[14px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_22px_rgba(56,111,142,0.28)] transition hover:bg-[#5a9bb9] disabled:cursor-not-allowed disabled:opacity-60 sm:text-[15px]"
                        >
                          {heroSubmitting
                            ? "Submitting..."
                            : heroExpanded
? "SEND QUOTE REQUEST →"
: "GET A QUICK QUOTE →"
                        </button>
                      </div>
                    </form>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      <div className="rounded-full border border-[#d7e8ee] bg-white px-3 py-1 text-[11px] font-medium text-slate-700">
                        ✓ Fixed price
                      </div>
                      <div className="rounded-full border border-[#d7e8ee] bg-white px-3 py-1 text-[11px] font-medium text-slate-700">
                        ✓ Fast turnaround
                      </div>
                      <div className="rounded-full border border-[#d7e8ee] bg-white px-3 py-1 text-[11px] font-medium text-slate-700">
                        ✓ London experts
                      </div>
                    </div>

                    <div className="mx-auto mt-4 hidden max-w-[460px] gap-3 sm:grid sm:grid-cols-2">
                      <a
                        href={PHONE_LINK}
                        onClick={() => trackLeadEvent("phone_click")}
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#20243b] px-5 text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(15,23,42,0.22)]"
                      >
                        <span className="mr-2" aria-hidden="true">📞</span>
                        <span>Call {PHONE_DISPLAY}</span>
                      </a>

                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackLeadEvent("whatsapp_click")}
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#58a45d] px-5 text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(34,197,94,0.18)]"
                      >
                        <span className="mr-2" aria-hidden="true">💬</span>
                        <span>WhatsApp us now</span>
                      </a>
                    </div>

                    <p className="mt-3 hidden text-center text-[12px] leading-5 text-slate-700 sm:block">
                      Send your house photo on WhatsApp for quick guidance and a faster quote.
                    </p>

                    <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                      Planning drawings specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-4">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid gap-3 text-center md:grid-cols-3 md:text-left">
              <TrustStripItem
                title="Used across London"
                body="Trusted by homeowners and property professionals across London and the M25."
              />
              <TrustStripItem
                title="Fast response"
                body="Quick quotes, rapid contact and initial survey availability within 48 hours."
              />
              <TrustStripItem
                title="Built for approvals"
                body="Planning and Building Regulation drawings prepared to move projects forward."
              />
            </div>
          </div>
        </section>

        <div className="border-b border-slate-200 bg-[#fdf8f3]">
          <HeroSlider
            slides={[
              { src: "/hero/one.jpg", alt: "Kitchen extension with rooflight" },
              { src: "/hero/two.jpg", alt: "Loft conversion with dormer" },
              { src: "/hero/three.jpg", alt: "Open plan living with garden" },
            ]}
          />
        </div>

        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Local architectural drawing services across London and M25
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              WEDRAWPLANS prepare drawings in boroughs across London and the wider M25 area. These local area pages help
              homeowners and small developers see how typical extensions, lofts and new builds are viewed in their council
              area.
            </p>

            <div className="mt-6 grid gap-3 text-[14px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {BOROUGHS.map((b) => (
                <a
                  key={b.slug}
                  href={`/areas/${b.slug}`}
                  className="block rounded-md border border-[#d7e8ee] bg-[#e8f4f8] px-4 py-3 text-center font-medium text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#29788a] hover:bg-[#29788a] hover:text-white hover:shadow-md"
                >
                  {b.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Commercial and mixed use drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              WEDRAWPLANS provide commercial and mixed use drawings across London, including shopfront upgrades,
              restaurant layouts, office fit outs, change of use applications and Building Regulation packs.
            </p>

            <div className="mt-6 grid gap-4 text-[13px] md:grid-cols-2 lg:grid-cols-4">
              {COMMERCIAL_ITEMS.map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4 transition hover:border-[#29788a] hover:shadow-sm"
                >
                  <div className="text-[13px] font-semibold text-slate-900">{x.label}</div>
                  <div className="mt-2 text-[12px] text-slate-600">View guidance and request a fixed fee quote</div>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/commercial"
                className="inline-flex items-center rounded-full bg-[#64b7c4] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
              >
                View commercial services
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Extension plans · loft plans · new build and technical drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              WEDRAWPLANS follow a clear and structured approach, while adding more depth around construction, structural
              coordination and on site delivery.
            </p>

            <div className="mt-6 grid gap-6 text-[13px] md:grid-cols-3">
              <ServiceColumn
                heading="Extension plans"
                items={[
                  "Rear extension plans",
                  "Side return extension plans",
                  "Wrap around extension plans",
                  "Two storey extension plans",
                  "Kitchen extension layouts",
                ]}
                body="Plans, elevations and roof layouts for single and two storey extensions prepared for planning, lawful development certificates and construction."
              />
              <ServiceColumn
                heading="Loft conversion plans"
                items={[
                  "Dormer loft conversions",
                  "Hip to gable conversions",
                  "Mansard loft conversions",
                  "Velux loft layouts",
                  "Attic conversions",
                ]}
                body="Stair design, headroom checks, dormer massing and roof plans set out with clear sections that are ready for structural engineer input."
              />
              <ServiceColumn
                heading="New build and conversions"
                items={[
                  "New build house layouts and elevations",
                  "Backland and infill developments",
                  "Blocks of flats and small schemes",
                  "Conversion to self contained flats",
                  "HMO layout and licensing drawings",
                ]}
                body="Site layouts, access strategies and unit plans for small residential developments, supported by practical build experience."
              />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Architectural drawings for almost any residential project
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              From a simple rear extension to full house remodelling and new build, WEDRAWPLANS provide drawings for a
              wide range of project types.
            </p>

            <div className="mt-5 grid gap-2 text-[13px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                "House extension plans",
                "Loft conversion plans",
                "New build house plans",
                "Garden room and outbuilding plans",
                "Garage conversion plans",
                "Basement and lower ground conversions",
                "Internal remodelling and open plan layouts",
                "Property conversion to flats",
                "HMO layout and licensing drawings",
                "Elevation drawings and street scenes",
                "Fire escape and evacuation plans",
                "Planning pre application reports",
                "Listed and heritage building drawings",
                "Lawful development certificate drawings",
                "Measured survey and as existing drawings",
                "3D visual and massing sketches",
                "Disability and accessibility adaptations",
                "Workplace and studio layout plans",
              ].map((item) => (
                <span key={item} className="inline-block rounded-full border border-slate-200 bg-[#fdf8f3] px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Support services around your drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Beyond pure drawing production, WEDRAWPLANS help bring projects together by coordinating key professionals
              and offering additional documentation where needed.
            </p>

            <div className="mt-6 grid gap-6 text-[13px] md:grid-cols-3">
              <SupportCard
                title="Measured surveys"
                body="On site measured surveys to capture accurate as existing information, followed by clear survey drawings that can be reused by other consultants."
              />
              <SupportCard
                title="Structural engineer coordination"
                body="Close coordination with structural engineers so beams, padstones and foundations are correctly shown and noted on architectural plans."
              />
              <SupportCard
                title="Party wall and neighbour support"
                body="Plans and sections that support party wall procedures, including drawings that highlight areas of work near boundaries."
              />
              <SupportCard
                title="Interior layout and finishes plans"
                body="Interior layouts, kitchen and bathroom arrangements and simple finishes plans for clients who want more than basic space planning."
              />
              <SupportCard
                title="3D visuals and simple CGI"
                body="Where helpful we provide basic three dimensional views or simple CGI images so neighbours and decision makers can better understand the proposal."
              />
              <SupportCard
                title="Contractor and supplier introductions"
                body="For suitable projects WEDRAWPLANS can introduce builders and specialist suppliers so that the design can move efficiently into construction."
              />
            </div>
          </div>
        </section>

        <section id="price-guide" className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Price guide for drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Every project is quoted once the scope and location are understood. These guide figures reflect common
              extension and loft projects.
            </p>

            <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-2 lg:grid-cols-3">
              <PriceCard
                title="House extension planning drawings"
                price="from £750 + VAT"
                body="Existing and proposed floor plans and elevations set out for planning or lawful development applications."
              />
              <PriceCard
                title="Loft conversion planning drawings"
                price="from £750 + VAT"
                body="Plans, elevations and key sections tailored to the roof form and staircase position."
              />
              <PriceCard
                title="Building Regulation drawing packs"
                price="priced to scope"
                body="Technical sets with notes, sections and construction details coordinated with structural engineer designs."
              />
            </div>

            <div className="mt-10 grid gap-4 text-[13px] md:grid-cols-3">
              <HelpCard
                title="Phone consultation"
                body="Arrange a telephone consultation to talk through ideas, budget and planning routes before making any commitments."
                linkText="Schedule a call with a designer"
              />
              <HelpCard
                title="Give us a call now"
                body={`Talk to WEDRAWPLANS today about an extension, loft or new build on ${PHONE_DISPLAY}.`}
                linkText="Call now"
              />
              <HelpCard
                title="Free quote"
                body="Use the enquiry form to send a short description and WEDRAWPLANS will email a clear fixed fee for the drawings."
                linkText="Use the enquiry form"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Get in touch and tell us what you need
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Share a short description of the property and what you would like to achieve. WEDRAWPLANS normally respond
              the same working day.
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <ContactForm />
              <ContactSummary />
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-[#20243b]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
              <div className="text-center">
                <Link href="/" className="inline-flex items-center justify-center">
                  <img
                    src="/images/wedrawplans-logo.png"
                    alt="WEDRAWPLANS"
                    className="h-20 w-auto object-contain"
                  />
                </Link>

                <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">
                  Architectural Drawing Consultants
                </div>

                <p className="mx-auto mt-4 max-w-md text-[13px] leading-7 text-white/80">
                  WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning
                  applications, Building Regulations and small residential development projects across London and the
                  surrounding M25 area.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] shadow-sm hover:bg-slate-100"
                    onClick={() => trackLeadEvent("phone_click")}
                  >
                    <span className="mr-2" aria-hidden="true">📞</span>
                    <span>Call</span>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                    onClick={() => trackLeadEvent("whatsapp_click")}
                  >
                    <span className="mr-2" aria-hidden="true">💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Services</div>
                <div className="mt-3 space-y-2 text-[13px] text-white/65">
                  <Link href="/extension-plans" className="block hover:text-white">
                    Extension Plans
                  </Link>
                  <Link href="/loft-conversion-plans" className="block hover:text-white">
                    Loft Plans
                  </Link>
                  <Link href="/new-build-plans" className="block hover:text-white">
                    New Build
                  </Link>
                  <Link href="/building-regulation-drawings" className="block hover:text-white">
                    Technical &amp; Support
                  </Link>
                  <Link href="/commercial" className="block hover:text-white">
                    Commercial
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Links</div>
                <div className="mt-3 space-y-2 text-[13px] text-white/65">
                  <Link href="/areas" className="block hover:text-white">
                    Areas We Cover
                  </Link>
                  <a href="#price-guide" className="block hover:text-white">
                    Price Guide
                  </a>
                  <a href="#contact" className="block hover:text-white">
                    Contact
                  </a>
                  <a
                    href={GOOGLE_BUSINESS_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white"
                  >
                    Google Profile
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Contact</div>
                <div className="mt-3 space-y-3 text-[13px] text-white/65">
                  <a
                    href={PHONE_LINK}
                    className="block hover:text-white"
                    onClick={() => trackLeadEvent("phone_click")}
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={EMAIL_LINK}
                    className="block hover:text-white"
                    onClick={() => trackLeadEvent("email_click")}
                  >
                    {EMAIL}
                  </a>
                  <div className="leading-6">
                    201 Borough High Street
                    <br />
                    London SE1 1JA
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-[11px] text-white/45">
              Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
            </div>
          </div>
        </footer>

        <div
          className="fixed inset-x-0 bottom-0 z-[90] px-3 pb-[max(env(safe-area-inset-bottom),8px)] lg:hidden"
          style={{ paddingBottom: "max(env(safe-area-inset-bottom), 8px)" }}
        >
          <div className="mx-auto max-w-md">
            <button
              type="button"
              onClick={openMobileLead}
              className="flex w-full items-center gap-3 rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xl">
                ✎
              </div>

              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-semibold text-slate-900">
                  Need help with drawings?
                </div>
                <div className="truncate text-[11px] text-slate-600">
                  Tap to get your fixed quote
                </div>
              </div>

              <div className="rounded-full bg-[#20243b] px-4 py-2 text-[12px] font-semibold text-white">
                Start
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

type ServiceColumnProps = {
  heading: string;
  items: string[];
  body: string;
};

function ServiceColumn({ heading, items, body }: ServiceColumnProps) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-slate-900">{heading}</h3>
      <ul className="mt-2 space-y-1 text-[13px] text-slate-700">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
      <p className="mt-3 text-[12px] text-slate-600">{body}</p>
    </div>
  );
}

type SupportCardProps = {
  title: string;
  body: string;
};

function SupportCard({ title, body }: SupportCardProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</h3>
      <p className="mt-2 text-[12px] text-slate-600">{body}</p>
    </div>
  );
}

type PriceCardProps = {
  title: string;
  price: string;
  body: string;
};

function PriceCard({ title, price, body }: PriceCardProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold text-slate-900">{title}</h3>
      <div className="mt-1 text-[13px] font-semibold text-slate-900">{price}</div>
      <p className="mt-2 text-[12px] text-slate-600">{body}</p>
    </div>
  );
}

type HelpCardProps = {
  title: string;
  body: string;
  linkText: string;
};

function HelpCard({ title, body, linkText }: HelpCardProps) {
  function handleClick() {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</h3>
      <p className="mt-2 text-[12px] text-slate-600">{body}</p>
      <button type="button" onClick={handleClick} className="mt-2 text-[12px] text-[#29788a] underline">
        {linkText}
      </button>
    </div>
  );
}

function ContactForm() {
  const formStartedRef = useRef<number>(Date.now());
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactService, setContactService] = useState("");

  useEffect(() => {
    formStartedRef.current = Date.now();
  }, []);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (contactSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const honeypot = String(data.get("company") || "").trim();
    if (honeypot) return;

    const rawName = String(data.get("name") || "").trim();
    const rawPhone = String(data.get("phone") || "").trim();
    const rawPostcode = String(data.get("postcode") || "").trim();
    const rawEmail = String(data.get("email") || "").trim();
    const rawMessage = String(data.get("message") || "").trim();
    const rawService = String(data.get("service") || "").trim();

    if (!rawService) {
      alert("Please select the service you need.");
      return;
    }

    if (!rawName || (!rawPhone && !rawEmail)) {
      alert("Please add your name and at least a phone number or email address.");
      return;
    }

    const postcodeIntel = rawPostcode ? detectPostcodeIntel(rawPostcode) : null;
    const timeTakenMs = formStartedRef.current ? Date.now() - formStartedRef.current : null;

    const payload = {
      name: rawName,
      phone: rawPhone,
      postcode: rawPostcode,
      email: rawEmail,
      message: rawMessage || "General enquiry from homepage contact form",
      service: rawService,
      borough: postcodeIntel?.borough || null,
      coverageLabel: postcodeIntel?.coverageLabel || null,
      outwardCode: postcodeIntel?.outward || null,
      hp: honeypot,
      formStartedAt: formStartedRef.current,
      timeTakenMs,
    };

    try {
      setContactSubmitting(true);

      const res = await fetch("/api/contact-resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        gtagEvent("generate_lead", {
          form_name: "homepage_contact",
          service: rawService,
          postcode: rawPostcode || "unknown",
          borough_detected: postcodeIntel?.borough || "unknown",
          outward_code: postcodeIntel?.outward || "unknown",
        });

        alert("Thank you. Your message has been sent to WEDRAWPLANS. We will contact you shortly.");
        form.reset();
        setContactService("");
        formStartedRef.current = Date.now();
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setContactSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleContactSubmit} className="space-y-3 text-[13px]">
      <input type="text" name="company" autoComplete="off" tabIndex={-1} className="hidden" />

      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Service required</label>
        <select
          name="service"
          value={contactService}
          onChange={(e) => setContactService(e.target.value)}
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        >
          <option value="">Select service</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={`contact-${option.value}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Name</label>
        <input
          name="name"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
        <input
          name="phone"
          type="tel"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Postcode</label>
        <input
          name="postcode"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Email</label>
        <input
          name="email"
          type="email"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Type your message here</label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={contactSubmitting}
        className="mt-2 w-full bg-slate-900 py-2 text-[13px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {contactSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

function ContactSummary() {
  return (
    <div className="text-[13px] text-slate-700">
      <p>
        WEDRAWPLANS provide a full range of architectural drawing services for new builds, house extensions, loft
        conversions, garage conversions, garden rooms, flat conversions, HMOs and commercial developments.
      </p>
      <p className="mt-3">
        The focus is on clear, buildable designs that support planning and Building Regulation approvals and that help
        builders understand exactly what is intended on site.
      </p>
      <p className="mt-3">
        If you already have estate agent plans, older drawings or simple sketches, you can email them together with
        photos so the property can be reviewed before a call.
      </p>
    </div>
  );
}

function MiniTrustCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] text-slate-600">{body}</div>
    </div>
  );
}

function TrustStripItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-[#fdf8f3] px-4 py-4">
      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] leading-6 text-slate-600">{body}</div>
    </div>
  );
}
