import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
"[https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hackney](https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hackney)";

export default function HackneyAreaPage() {
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
await submitBoroughLead(e, { boroughName: "Hackney" });
}

function scrollToForm() {
const el = document.getElementById("hackney-quote");
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const localBusinessJson = {
"@context": "[https://schema.org](https://schema.org)",
"@type": "LocalBusiness",
name: "WEDRAWPLANS",
url: "[https://www.wedrawplans.co.uk/areas/hackney](https://www.wedrawplans.co.uk/areas/hackney)",
telephone: "+44 20 3654 8508",
email: "[info@wedrawplans.com](mailto:info@wedrawplans.com)",
image: "[https://www.wedrawplans.co.uk/images/drawings.jpg](https://www.wedrawplans.co.uk/images/drawings.jpg)",
address: {
"@type": "PostalAddress",
streetAddress: "201 Borough High Street",
addressLocality: "London",
postalCode: "SE1 1JA",
addressCountry: "UK"
},
areaServed: [
"Hackney",
"Hackney Central",
"Hackney Downs",
"London Fields",
"Dalston",
"Stoke Newington",
"Newington Green",
"Clapton",
"Upper Clapton",
"Lower Clapton",
"Homerton",
"Hoxton",
"Haggerston",
"De Beauvoir",
"Shoreditch",
"Victoria Park side streets"
],
description:
"Architectural drawing services in Hackney for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Initial survey within 48 hours and full planning support."
};

const faqJson = {
"@context": "[https://schema.org](https://schema.org)",
"@type": "FAQPage",
mainEntity: [
{
"@type": "Question",
name: "Do I need planning permission for a rear extension in Hackney",
acceptedAnswer: {
"@type": "Answer",
text:
"Not always. Many rear extensions in Hackney can be carried out under permitted development. We confirm the correct route once we review your address and house type."
}
},
{
"@type": "Question",
name: "Is Hackney strict with loft conversions and extensions",
acceptedAnswer: {
"@type": "Answer",
text:
"Hackney can be strict in conservation areas and streets with strong character, especially around Stoke Newington, De Beauvoir and London Fields. Careful drawings and a strong planning case help."
}
},
{
"@type": "Question",
name: "How long does Hackney Council take to decide",
acceptedAnswer: {
"@type": "Answer",
text:
"Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
}
},
{
"@type": "Question",
name: "Do you manage the full application to Hackney Council",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. We prepare drawings, complete forms, upload documents, submit to Hackney Council and respond to planning officer queries."
}
}
]
};

return (
<> <Head> <title>Architectural Drawings in Hackney | Extensions, Lofts, Conversions</title> <meta
       name="description"
       content="Architectural drawing services in Hackney for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Initial survey within 48 hours, clear drawings and full planning support."
     /> <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/hackney" />

```
    <meta property="og:title" content="Architectural Drawings Hackney | WEDRAWPLANS" />
    <meta
      property="og:description"
      content="Extensions, loft conversions, flat conversions and building regulations drawings across Hackney. Initial survey within 48 hours and full planning support."
    />
    <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/hackney" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Architectural Drawings Hackney | WEDRAWPLANS" />
    <meta
      name="twitter:description"
      content="Extensions, lofts, conversions and building regulations drawings across Hackney. Initial survey within 48 hours."
    />
    <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
    />
  </Head>

  <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
    <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/wedrawplans-logo.png"
            alt="WEDRAWPLANS"
            width={420}
            height={140}
            priority
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

        <div className="mt-2 flex w-full items-center justify-between gap-3">
          <div className="text-[12px] text-slate-700">
            <span className="font-semibold text-slate-900">Hackney</span> borough page
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_LINK}
              className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
            >
              📞 {PHONE_DISPLAY}
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-medium shadow-sm hover:bg-[#1ebe57]"
            >
              💬 <span className="hidden sm:inline">WhatsApp us</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section className="border-b border-slate-200 bg-[#fdf8f3]">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
          <div className="lg:w-1/2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
              Hackney architectural drawings
            </p>

            <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
              Plans for extensions, lofts and conversions in Hackney
            </h1>

            <p className="mt-3 text-[13px] text-slate-700">
              WEDRAWPLANS prepare planning and building regulation drawing packages across the London Borough of Hackney,
              including Hackney Central, Dalston, Stoke Newington, Clapton, Homerton, Haggerston, Hoxton and Shoreditch.
              Strong layouts, clear elevations and a clean submission pack.
            </p>

            <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
              <li>• Initial survey within 48 hours</li>
              <li>• Permitted development, LDC and full planning advice</li>
              <li>• Flats and maisonettes need planning strategy</li>
              <li>• Terraces: rear, side infill and wrap around extensions</li>
              <li>• Lofts: dormers, roof changes and stair planning</li>
              <li>• Full submission support and planner responses</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 items-center">
              <button
                onClick={scrollToForm}
                type="button"
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
              >
                Get a quick quote
              </button>

              <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                Or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div id="hackney-quote" className="lg:w-1/2">
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <form onSubmit={handleSubmit}></form>
            </div>
          </div>
        </div>
      </section>

      <ServiceInternalLinks boroughName="Hackney" />

      <section className="bg-white border-b border-slate-200 py-10">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <Image
            src="/images/hackney-area.jpg"
            alt="Hackney residential area"
            width={1200}
            height={600}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>
    </main>
  </div>
</>
```

);
}
