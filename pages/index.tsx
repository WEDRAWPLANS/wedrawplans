import GrangeRoadPromo from "../components/GrangeRoadPromo";
import IntentAreaDirectory from "../components/IntentAreaDirectory";
import BarnetCombinedExtensionPromo from "../components/BarnetCombinedExtensionPromo";
import NearbySuttonLoftCaseStudy from "../components/NearbySuttonLoftCaseStudy";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import CranbournePromo from "../components/CranbournePromo";
import HomeFeaturedResidentialApprovals from "../components/HomeFeaturedResidentialApprovals";
import Image from "next/image";
import HeroSlider from "../components/HeroSlider";
import Link from "next/link";
import AllumLaneSiteFeature from "../components/AllumLaneSiteFeature";
import HomeGoogleReviews from "../components/HomeGoogleReviews";
import WhatsAppIcon from "../components/WhatsAppIcon";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

const HOME_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.wedrawplans.co.uk/#business",
  name: "WEDRAWPLANS",
  legalName: "WEDRAWPLANS LTD",
  url: "https://www.wedrawplans.co.uk/",
  logo: "https://www.wedrawplans.co.uk/images/wedrawplans-logo.png",
  telephone: "+44 20 3654 8508",
  email: "info@wedrawplans.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "201 Borough High Street",
    addressLocality: "London",
    postalCode: "SE1 1JA",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "Place", name: "M25 and surrounding areas" },
  ],
  sameAs: [GOOGLE_BUSINESS_PROFILE_LINK, "https://twitter.com/WEDRAWPLANS"],
  description:
    "WEDRAWPLANS helps London homeowners with professional architectural and planning drawings for house extensions, loft conversions, garage conversions, garden rooms and new builds. Clear, competitive fixed-fee quotations, planning application preparation and submission, council liaison and Building Regulations drawing packages across London and the M25 area.",
};

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
  { label: "Planning Drawings", value: "Planning drawings", href: "/planning-drawings" },
  { label: "Lawful Development Certificate", value: "Lawful development certificate drawings", href: "/lawful-development-certificate-drawings" },
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
  { label: "Garden Studio Plans", value: "Garden studio drawings", href: "/garden-room-outbuilding-plans" },
  { label: "Garden Room / Outbuilding Plans", value: "Garden room or outbuilding drawings", href: "/garden-room-outbuilding-plans" },
  { label: "Solar Panel Planning Drawings", value: "Solar panel planning drawings", href: "/solar-panel-planning-drawings" },
  { label: "HMO Plans", value: "HMO plans", href: "/building-regulation-drawings" },
  { label: "Party Wall Services", value: "Party wall drawings", href: "/building-regulation-drawings" },
  { label: "Planning Applications", value: "Planning drawings", href: "/planning-drawings" },
  { label: "Property Conversion", value: "Property conversion drawings", href: "/new-build-plans" },
  { label: "Shop Plans", value: "Shop plans", href: "/commercial/shopfronts" },
  { label: "Structural Calculations", value: "Structural calculations", href: "/building-regulation-drawings" },
  { label: "New Build Plans", value: "New build drawings", href: "/new-build-plans" },
  { label: "Other", value: "Other drawings", href: "/contact" },
];

const BOROUGHS: { label: string; slug: string }[] = [
  { label: "Architectural drawings Barking and Dagenham", slug: "barking-and-dagenham" },
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
  { label: "Architectural drawings Hammersmith and Fulham", slug: "hammersmith-and-fulham" },
  { label: "Architectural drawings Haringey", slug: "haringey" },
  { label: "Architectural drawings Harrow", slug: "harrow" },
  { label: "Architectural drawings Havering", slug: "havering" },
  { label: "Architectural drawings Hillingdon", slug: "hillingdon" },
  { label: "Architectural drawings Hounslow", slug: "hounslow" },
  { label: "Architectural drawings Islington", slug: "islington" },
  { label: "Architectural drawings Kensington and Chelsea", slug: "kensington-and-chelsea" },
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
  { label: "Architectural drawings Westminster", slug: "westminster" },
  { label: "Architectural drawings City of London", slug: "city-of-london" },
  { label: "Architectural drawings Surrey borders and M25", slug: "surrey-borders-m25" },
  { label: "Architectural drawings Hertfordshire", slug: "hertfordshire" },
  { label: "Architectural drawings Essex", slug: "essex" },
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
  { label: "Barking and Dagenham", href: "/areas/barking-and-dagenham" },
  { label: "Bexley", href: "/areas/bexley" },
  { label: "Brent", href: "/areas/brent" },
  { label: "City of London", href: "/areas/city-of-london" },
  { label: "Greenwich", href: "/areas/greenwich" },
  { label: "Hackney", href: "/areas/hackney" },
  { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
  { label: "Haringey", href: "/areas/haringey" },
  { label: "Havering", href: "/areas/havering" },
  { label: "Hounslow", href: "/areas/hounslow" },
  { label: "Islington", href: "/areas/islington" },
  { label: "Kensington and Chelsea", href: "/areas/kensington-and-chelsea" },
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
  { label: "Conversion to self-contained flats", href: "/commercial/change-of-use" },
  { label: "Basement and lower ground conversions", href: "/new-build-plans" },
];

const TECHNICAL_ITEMS: NavDropdownItem[] = [
  { label: "Building Regulation drawing packs", href: "/building-regulation-drawings" },
  { label: "Fire and escape strategy plans", href: "/building-regulation-drawings" },
  { label: "Measured surveys", href: "/building-regulation-drawings" },
  { label: "Structural engineer coordination", href: "/building-regulation-drawings" },
  { label: "Party wall plans and support", href: "/building-regulation-drawings" },
  { label: "HMO layout and licensing drawings", href: "/hmo-planning-drawings" },
  { label: "HMO & flats conversion case studies", href: "/hmo-planning-drawings#approved-projects" },
  { label: "Flats & established-use drawings", href: "/commercial/change-of-use" },
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
  variant = "default",
}: {
  href: string;
  label: string;
  symbol: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "whatsapp";
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168344] ${variant === "whatsapp" ? "border-[#25D366] bg-[#25D366] text-white hover:bg-[#1eb857]" : "border-slate-300 bg-white text-[18px] text-slate-900 hover:border-slate-400"} ${className}`}
    >
      <span aria-hidden="true">{symbol}</span>
    </a>
  );
}

export default function IndexPage() {
  const heroStartedRef = useRef(false);
  const heroPostcodeRef = useRef<null | HTMLInputElement>(null);
  const heroFormRef = useRef<HTMLFormElement | null>(null);
  const heroStartTimeRef = useRef<number | null>(null);

  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroPostcode, setHeroPostcode] = useState("");
  const [heroService, setHeroService] = useState("");
  const [heroName, setHeroName] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [heroMessage, setHeroMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLeadOpen, setMobileLeadOpen] = useState(false);
  const [showFloatingQuote, setShowFloatingQuote] = useState(false);

  const postcodeIntel = detectPostcodeIntel(heroPostcode);

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

  useEffect(() => {
    // Do not cover homepage form fields with a second call to action on mobile.
    // Offer the floating quote shortcut only after visitors scroll past the form.
    const updateFloatingQuote = () => {
      const form = heroFormRef.current;
      setShowFloatingQuote(Boolean(form && form.getBoundingClientRect().bottom < 0));
    };

    updateFloatingQuote();
    window.addEventListener("scroll", updateFloatingQuote, { passive: true });
    window.addEventListener("resize", updateFloatingQuote);

    return () => {
      window.removeEventListener("scroll", updateFloatingQuote);
      window.removeEventListener("resize", updateFloatingQuote);
    };
  }, []);

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
    // Keep the detailed service dropdown in the mobile modal and detailed quote page.
    // Homepage visitors can simply describe their project in their own words.
    const service = heroService.trim() || "Homeowner project enquiry";
    const name = heroName.trim();
    const phone = heroPhone.trim();
    const email = heroEmail.trim();
    const message = heroMessage.trim();

    if (!postcode) {
      alert("Please enter your property postcode.");
      return;
    }
    if (formName === "mobile_floating_widget" && !heroService.trim()) {
      alert("Please select the drawings you need.");
      return;
    }
    if (formName === "homepage_hero" && !message) {
      alert("Please describe what you would like to build or change.");
      return;
    }

    if (!name) {
      alert("Please enter your name so we can address your quotation.");
      return;
    }
    if (!phone && !email) {
      gtagEvent("lead_contact_needed", { form_name: formName });
      alert("Please enter a telephone number OR an email address so we can reply.");
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

      const serverResult = await res.json().catch(() => null);
      if (res.ok && serverResult?.success === true) {
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

    // One visible form and one submission step; no extra click to reveal fields.
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
    setMobileLeadOpen(true);
  }

  return (
    <>
      <Head>
        <title>House Extension & Planning Drawings in London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Professional fixed-fee architectural drawings for London homeowners: extensions, lofts, planning applications and Building Regulations. Get a clear quote."
        />
        <meta
          name="keywords"
          content="house extension drawings London, planning drawings London, loft conversion drawings London, building regulation drawings London, architectural drawings London"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="House Extension & Planning Drawings in London | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="WEDRAWPLANS helps London homeowners with professional extension and loft drawings, clear fixed-fee quotes, planning applications and Building Regulations support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_BUSINESS_JSONLD) }}
        />
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
                  <span className="mr-2 inline-flex" aria-hidden="true"><WhatsAppIcon size={20} /></span>
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
                  label="Chat with WEDRAWPLANS on WhatsApp"
                  symbol={<WhatsAppIcon size={24} />}
                  variant="whatsapp"
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
                  href="/case-studies"
                  className="whitespace-nowrap text-[14px] font-medium text-slate-900 hover:text-[#29788a]"
                >
                  Our Projects
                </Link>
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
                <Link
                  href="/case-studies"
                  className="block py-2 text-[18px] font-medium text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Projects &amp; Approvals
                </Link>
                <a
                  href="#google-reviews"
                  className="block py-2 text-[18px] font-medium text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Google Reviews
                </a>
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
                  label="Chat with WEDRAWPLANS on WhatsApp"
                  symbol={<WhatsAppIcon size={24} />}
                  variant="whatsapp"
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
                        placeholder="Phone number (or email)"
                        className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                      />

                      <input
                        name="email"
                        type="email"
                        value={heroEmail}
                        onChange={(e) => setHeroEmail(e.target.value)}
                        onFocus={() => trackHeroFormStart("mobile_email")}
                        placeholder="Email address (or phone)"
                        className="h-14 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 shadow-sm outline-none transition focus:border-[#64b7c4]"
                      />

                      <p className="text-left text-[12px] font-medium text-slate-600">Provide a phone number or email address; you do not need both.</p>
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
                      WEDRAWPLANS helps London homeowners plan extensions, loft conversions and other improvements with
                      professional architectural drawings, clear fixed-fee quotations and guidance through planning applications
                      and local council requirements. We also support developers and commercial clients across London and the M25 area.
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
                    <MiniTrustCard title="London experts" body="Planning drawings informed by local council requirements." />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLeadEvent("whatsapp_click")}
                      className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                    >
                      <span className="mr-2 inline-flex" aria-hidden="true"><WhatsAppIcon size={20} /></span>
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
                        Tell us what you would like to build, add your property postcode and your preferred contact details.
                        We will review the project and provide a clear fixed-fee quotation.
                      </p>
                    </div>

                    <form id="home-quote" ref={heroFormRef} onSubmit={handleHeroSubmit} className="mx-auto mt-4 max-w-[520px] scroll-mt-36">
                      <input type="text" name="company" autoComplete="off" tabIndex={-1} className="hidden" />
                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <label htmlFor="home-project-brief" className="block text-left text-[12px] font-semibold text-[#203e4a]">
                            What would you like to build or change?
                          </label>
                          <textarea
                            id="home-project-brief"
                            name="message"
                            rows={3}
                            required
                            value={heroMessage}
                            onChange={(e) => setHeroMessage(e.target.value)}
                            onFocus={() => trackHeroFormStart("project_description")}
                            placeholder="Briefly describe your project..."
                            className="min-h-[96px] w-full resize-y rounded-[16px] border border-slate-200 bg-white px-4 py-3 text-[14px] leading-6 text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#64b7c4]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="home-postcode" className="block text-left text-[12px] font-semibold text-[#203e4a]">Property postcode</label>
                          <input
                            id="home-postcode"
                            ref={heroPostcodeRef}
                            name="postcode"
                            autoComplete="postal-code"
                            required
                            value={heroPostcode}
                            onChange={(e) => setHeroPostcode(e.target.value)}
                            onFocus={() => trackHeroFormStart("postcode")}
                            placeholder="e.g. NW7 3AA"
                            className="h-12 w-full rounded-[14px] border border-slate-200 bg-white px-4 text-[15px] text-slate-800 outline-none transition focus:border-[#64b7c4]"
                          />
                          {postcodeIntel.coverageLabel ? (
                            <p className="text-left text-[12px] font-medium text-[#2f7f4f]">✓ {postcodeIntel.coverageLabel}</p>
                          ) : null}
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="home-contact-name" className="block text-left text-[12px] font-semibold text-[#203e4a]">Your name</label>
                          <input
                            id="home-contact-name"
                            name="name"
                            autoComplete="name"
                            required
                            value={heroName}
                            onChange={(e) => setHeroName(e.target.value)}
                            onFocus={() => trackHeroFormStart("name")}
                            placeholder="Your name"
                            className="h-12 w-full rounded-[14px] border border-slate-200 bg-white px-4 text-[15px] text-slate-800 outline-none transition focus:border-[#64b7c4]"
                          />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <label htmlFor="home-contact-email" className="block text-left text-[12px] font-semibold text-[#203e4a]">Email (preferred)</label>
                            <input
                              id="home-contact-email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              value={heroEmail}
                              onChange={(e) => setHeroEmail(e.target.value)}
                              onFocus={() => trackHeroFormStart("email")}
                              placeholder="Email address"
                              className="h-12 w-full rounded-[14px] border border-slate-200 bg-white px-3 text-[15px] text-slate-800 outline-none transition focus:border-[#64b7c4]"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="home-contact-phone" className="block text-left text-[12px] font-semibold text-[#203e4a]">Phone (optional)</label>
                            <input
                              id="home-contact-phone"
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              value={heroPhone}
                              onChange={(e) => setHeroPhone(e.target.value)}
                              onFocus={() => trackHeroFormStart("phone")}
                              placeholder="Telephone number"
                              className="h-12 w-full rounded-[14px] border border-slate-200 bg-white px-3 text-[15px] text-slate-800 outline-none transition focus:border-[#64b7c4]"
                            />
                          </div>
                        </div>
                        <p className="text-left text-[12px] leading-5 text-slate-600">
                          One way to contact you is enough — email or telephone. No drawings or plans are needed to enquire.
                        </p>
                        <button
                          type="submit"
                          disabled={heroSubmitting}
                          className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#236f7b] px-5 py-3 text-center text-[14px] font-bold uppercase tracking-[0.10em] text-white shadow-[0_8px_22px_rgba(20,79,91,0.2)] transition hover:bg-[#194e5b] disabled:cursor-not-allowed disabled:opacity-60 sm:text-[15px]"
                        >
                          {heroSubmitting ? "Submitting..." : "Get my fixed-fee quote →"}
                        </button>
                        <p className="text-center text-[12px] leading-5 text-slate-600">
                          Prefer to select a service from a list?{" "}
                          <Link href="/get-drawings-quote" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-600">
                            Use the detailed quote form
                          </Link>
                        </p>
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
                        <span className="mr-2 inline-flex" aria-hidden="true"><WhatsAppIcon size={20} /></span>
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
    {
      src: "/images/rear-extension-planning-building-reg-drawings.jpg",
      alt: "Rear extension planning and Building Regulation drawings by WEDRAWPLANS",
    },
    {
      src: "/images/loft-conversion-mansard-hip-to-gable.jpg",
      alt: "Mansard and hip to gable loft conversion drawings by WEDRAWPLANS",
    },
    {
      src: "/images/building-regulation-technical-drawing-packs.jpg",
      alt: "Building Regulation and technical drawing packs by WEDRAWPLANS",
    },
    {
      src: "/images/new-build-house-planning-design-drawings.jpg",
      alt: "New build house planning and design drawings by WEDRAWPLANS",
    },
    {
      src: "/images/flats-small-developments-planning-drawings.jpg",
      alt: "Flats and small developments planning drawings by WEDRAWPLANS",
    },
    {
      src: "/images/structural-coordination-technical-detailing.jpg",
      alt: "Structural coordination and technical detailing by WEDRAWPLANS",
    },
    {
      src: "/images/interior-layout-planning-3d-visuals.jpg",
      alt: "Interior layout planning and 3D visuals by WEDRAWPLANS",
    },
    {
      src: "/images/new-build-homes-small-developments.jpg",
      alt: "New build homes and small developments by WEDRAWPLANS",
    },
  ]}
/>
        </div>

        <section aria-label="Sample of WEDRAWPLANS planning-approved projects" className="bg-white pb-2 pt-9 sm:pt-12">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#26786e]">Sample of WEDRAWPLANS approved projects</p>
            <h2 className="mt-2 max-w-3xl text-[24px] font-semibold leading-tight text-[#244952] sm:text-[31px]">Approved extension and loft projects</h2>
            <p className="mt-2 max-w-3xl text-[13px] leading-7 text-[#577277]">Explore selected planning-approved extensions and loft schemes, original architectural drawings and the decisions behind the projects.</p>
          </div>
        </section>

        <CranbournePromo context="Homepage" />
        <AllumLaneSiteFeature placement="home" title="Explore the drawings behind an approved house transformation" intro="Allum Lane in Elstree is an approved Hertsmere house-extension design. Explore the three selected architectural drawing sheets and three 3D visuals to see how professional plans explain a complex proposal." />
        <HomeFeaturedResidentialApprovals />

                <NearbySuttonLoftCaseStudy context="home" />
        <BarnetCombinedExtensionPromo context="home" />
        <GrangeRoadPromo context="home" />
        <section aria-labelledby="home-greenwich-tenflats" className="border-b border-[#dce6df] bg-white py-9">
          <div className="mx-auto grid max-w-6xl items-center gap-5 px-4 md:grid-cols-[minmax(0,.6fr)_minmax(0,1fr)] lg:px-6">
            <Link href="/case-studies/chestnut-rise-plumstead-greenwich-ten-flats-lawfulness" className="block overflow-hidden rounded-xl border border-[#dbe7df] bg-[#f7faf7]" aria-label="See the Greenwich ten-flat Certificate of Lawfulness case study">
              <div className="relative aspect-[1240/770]">
                <Image src="/images/case-studies/greenwich-plumstead-ten-flats-lawfulness/existing-floor-plans-detail.webp" alt="Existing floor plan from the WEDRAWPLANS Greenwich ten-flat certificate case study" fill sizes="(max-width: 768px) 100vw, 42vw" className="pointer-events-none object-contain" draggable={false}/>
              </div>
            </Link>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#267458]">Greenwich · Ten self-contained flats · Certificate granted</p>
              <h2 id="home-greenwich-tenflats" className="mt-2 text-[23px] font-semibold leading-tight text-[#264b50]">When drawings and evidence make the difference</h2>
              <p className="mt-3 text-[13px] leading-7 text-[#557174]">
                A complex existing-use case in Plumstead: an earlier refusal, a more compelling evidence record,
                and Greenwich's 2020 certification of ten established independent flats. Explore how architectural
                plans and documented occupation history supported the successful decision.
              </p>
              <Link href="/case-studies/chestnut-rise-plumstead-greenwich-ten-flats-lawfulness" className="mt-4 inline-flex rounded-full border border-[#9bc6bb] bg-[#edf7f1] px-5 py-3 text-[12px] font-bold text-[#296e71] hover:bg-[#e4f2e9]">Explore the Greenwich ten-flat case study</Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-hmo-example" className="border-b border-[#dce8e1] bg-[#f6faf7] py-8 sm:py-10">
          <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[minmax(0,.5fr)_minmax(0,1fr)] lg:px-6">
            <Link href="/case-studies/sevington-road-hendon-seven-bedroom-hmo-planning-approval" className="block overflow-hidden rounded-[15px] border border-[#dce8df] bg-white shadow-sm" aria-label="View the Hendon seven-bedroom HMO planning case study">
              <div className="relative aspect-[3309/2339]">
                <Image src="/images/case-studies/sevington-road-hendon-seven-bedroom-hmo/approved-proposed-p03-rev-c.webp" alt="WEDRAWPLANS approved seven-bedroom HMO ground, first and loft-floor planning drawing" fill sizes="(max-width: 768px) 100vw, 38vw" className="pointer-events-none object-contain" draggable={false}/>
              </div>
            </Link>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#27745c]">Property conversion experience · West Hendon, Barnet</p>
              <h2 id="home-hmo-example" className="mt-2 text-[23px] font-semibold leading-tight text-[#284d51] sm:text-[28px]">Seven-bedroom HMO planning approval — see how the proposal was assessed</h2>
              <p className="mt-3 text-[13px] leading-7 text-[#587377]">
                Barnet granted permission for a seven-bedroom House in Multiple Occupation after considering
                the layout, room standards, transport, neighbourhood amenity and protective conditions.
                Explore the original WEDRAWPLANS drawings, planning issues and successful decision.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/case-studies/sevington-road-hendon-seven-bedroom-hmo-planning-approval" className="inline-flex rounded-full bg-[#246d75] px-5 py-3 text-[12px] font-semibold text-white hover:bg-[#19585e]">View the approved HMO case study</Link>
                <Link href="/hmo-planning-drawings" className="inline-flex rounded-full border border-[#b9d5ca] px-5 py-3 text-[12px] font-semibold text-[#286b70]">HMO drawing services</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="approved-barnet-garden-care-outbuilding" aria-labelledby="home-sunbury-garden-heading" className="border-b border-[#dbe7df] bg-[#f2f8f4] py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl items-center gap-7 px-4 md:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)] lg:px-6">
            <Link href="/case-studies/sunbury-avenue-mill-hill-accessible-garden-care-outbuilding" className="block overflow-hidden rounded-[19px] border border-[#d0e0d6] bg-white shadow-[0_16px_38px_rgba(30,71,69,.08)]" aria-label="Explore the Barnet garden care outbuilding case study">
              <div className="relative aspect-[16/9] w-full bg-[#eff6f1]">
                <Image src="/images/case-studies/sunbury-avenue-barnet-accessible-garden-outbuilding/garden-care-visualisation.webp" alt="Architectural design visualisation of an accessible single-storey garden care outbuilding with a landscaped domestic garden" fill sizes="(max-width: 768px) 100vw, 55vw" className="pointer-events-none object-contain" draggable={false} />
              </div>
            </Link>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#29755b]">Certificate of Lawfulness · Barnet · March 2026</p>
              <h2 id="home-sunbury-garden-heading" className="mt-3 text-[25px] font-semibold leading-tight text-[#254a4f] sm:text-[32px]">An accessible garden care outbuilding with a lawful planning outcome</h2>
              <p className="mt-4 text-[13px] leading-7 text-[#536f72]">
                WEDRAWPLANS designed a single-storey ancillary garden building with an accessible wet room and wheelchair-friendly circulation.
                Barnet Council granted a Certificate of Lawfulness after reviewing its intended use, size, garden position and architectural plans.
                See the drawings behind the decision and learn how we approach garden studios, rooms and other outbuildings.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/case-studies/sunbury-avenue-mill-hill-accessible-garden-care-outbuilding" className="inline-flex rounded-full bg-[#246e74] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#18575e]">Explore the approved garden outbuilding</Link>
                <Link href="/garden-room-outbuilding-plans" className="inline-flex rounded-full border border-[#aacac0] bg-white px-5 py-3 text-[12px] font-semibold text-[#296b70]">Garden studio &amp; outbuilding drawings</Link>
              </div>
            </div>
          </div>
        </section>

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

            <h3 className="mt-7 text-[16px] font-semibold text-slate-900">Why homeowners choose WEDRAWPLANS</h3>
            <p className="mt-2 max-w-4xl text-[13px] leading-6 text-slate-700">
              Homeowners receive professional architectural drawings, competitive fixed-fee quotations and clear advice
              on the appropriate planning or lawful development route. We prepare applications for council submission,
              liaise with planning officers where required, and offer Building Regulations drawing packages with
              structural engineer coordination when needed. Our aim is to make the design and application process
              easier to understand from the first enquiry onwards.{" "}
              <Link href="/case-studies" className="font-semibold text-[#246d76] underline underline-offset-2">
                Explore our approved project examples.
              </Link>
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
                linkText="Request a call with a designer"
                href="#contact"
              />
              <HelpCard
                title="Give us a call now"
                body={`Talk to WEDRAWPLANS today about an extension, loft or new build on ${PHONE_DISPLAY}.`}
                linkText="Call now"
                href={PHONE_LINK}
              />
              <HelpCard
                title="Free quote"
                body="Use the enquiry form to send a short description and WEDRAWPLANS will email a clear fixed fee for the drawings."
                linkText="Use the enquiry form"
                href="#home-quote"
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

        <HomeGoogleReviews googleProfileUrl={GOOGLE_BUSINESS_PROFILE_LINK} googleReviewsUrl="https://search.google.com/local/reviews?placeid=ChIJ1YtyjfQXdkgR8A8NeJLecA8" />

        <IntentAreaDirectory context="home" />
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
                    <span className="mr-2 inline-flex" aria-hidden="true"><WhatsAppIcon size={20} /></span>
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
                  <Link href="/case-studies" className="block hover:text-white">
                    Our Projects &amp; Approvals
                  </Link>
                  <a href="#google-reviews" className="block hover:text-white">
                    Google Reviews
                  </a>
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

        {showFloatingQuote && !mobileLeadOpen && (
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
        )}
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
  href: string;
};

function HelpCard({ title, body, linkText, href }: HelpCardProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</h3>
      <p className="mt-2 text-[12px] text-slate-600">{body}</p>
      <a href={href} className="mt-2 inline-block text-[12px] text-[#29788a] underline underline-offset-2 hover:text-[#185464] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29788a]">
        {linkText}
      </a>
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

      const serverResult = await res.json().catch(() => null);
      if (res.ok && serverResult?.success === true) {
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
