const siteUrl = "https://www.wedrawplans.co.uk";
const googleMapsUrl = "https://maps.google.com/maps?cid=1112633828621225968";
const companiesHouseUrl = "https://find-and-update.company-information.service.gov.uk/company/12251348";

export const businessReference = { "@id": `${siteUrl}/#organization` };

const coreServices = [
  { name: "House Extension Planning Drawings", path: "/extension-plans" },
  { name: "Loft Conversion Drawings", path: "/loft-conversion-plans" },
  { name: "Building Regulation Technical Drawings", path: "/building-regulation-drawings" },
  { name: "New Build Architectural Plans", path: "/new-build-plans" },
];

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  ...businessReference,
  name: "WEDRAWPLANS",
  legalName: "WEDRAWPLANS LTD",
  url: siteUrl,
  telephone: "+442036548508",
  email: "info@wedrawplans.com",
  priceRange: "££",
  logo: `${siteUrl}/images/wedrawplans-logo.png`,
  description:
    "WEDRAWPLANS helps London homeowners with professional architectural and planning drawings for house extensions, loft conversions, garage conversions, garden rooms and new builds. Clear, competitive fixed-fee quotations, planning application preparation and submission, council liaison and Building Regulations drawing packages across London and the M25 area.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "201 Borough High Street",
    addressLocality: "London",
    postalCode: "SE1 1JA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5018614,
    longitude: -0.0921968,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    "London", "Southwark", "Wandsworth", "Bexley", "Bromley", "Croydon",
    "Lewisham", "Greenwich", "Lambeth", "Barnet", "Enfield", "Harrow", "M25",
  ],
  hasMap: googleMapsUrl,
  sameAs: [googleMapsUrl, companiesHouseUrl, "https://twitter.com/WEDRAWPLANS"],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House company number",
    value: "12251348",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architectural Drawing & Planning Services",
    itemListElement: coreServices.map(({ name, path }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        url: siteUrl + path,
        provider: businessReference,
      },
    })),
  },
};
