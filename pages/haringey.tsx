import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
"https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Haringey
";

export default function HaringeyAreaPage() {
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
await submitBoroughLead(e, { boroughName: "Haringey" });
}

function scrollToForm() {
const el = document.getElementById("haringey-quote");
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const localBusinessJson = {
"@context": "https://schema.org
",
"@type": "LocalBusiness",
name: "WEDRAWPLANS",
url: "https://www.wedrawplans.co.uk/areas/haringey
",
telephone: "+44 20 3654 8508",
email: "info@wedrawplans.com
",
image: "https://www.wedrawplans.co.uk/images/drawings.jpg
",
address: {
"@type": "PostalAddress",
streetAddress: "201 Borough High Street",
addressLocality: "London",
postalCode: "SE1 1JA",
addressCountry: "UK",
},
areaServed: [
"Haringey",
"Crouch End",
"Muswell Hill",
"Tottenham",
"Wood Green",
"Harringay",
"Green Lanes",
"Hornsey",
"Bounds Green",
"Highgate borders",
"Seven Sisters",
"Finsbury Park",
"Alexandra Palace",
],
description:
"Architectural drawing services in Haringey for extensions, loft conversions, flat conversions, refurbishments and building regulations.",
};

const faqJson = {
"@context": "https://schema.org
",
"@type": "FAQPage",
mainEntity: [
{
"@type": "Question",
name: "Do I need planning permission for a rear extension in Haringey?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not always. Many rear extensions in Haringey can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
},
},
{
"@type": "Question",
name: "Is Haringey strict with loft conversions?",
acceptedAnswer: {
"@type": "Answer",
text:
"Haringey follows national permitted development rules but restrictions are more common in conservation areas and on prominent street facing roofs, including parts of Muswell Hill, Highgate borders and Crouch End.",
},
},
{
"@type": "Question",
name: "How long does Haringey Council take to decide?",
acceptedAnswer: {
"@type": "Answer",
text:
"Householder planning applications typically take around eight weeks after validation. Lawful Development Certificates often take around four to six weeks depending on workload and validation.",
},
},
{
"@type": "Question",
name: "Do you manage the full application to Haringey Council?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. We prepare the drawings, complete the forms, submit to Haringey Council and respond to planning officer queries until a decision is issued.",
},
},
],
};

return (
<>
<Head>
<title>
Architectural Drawings in Haringey – Extensions, Lofts and New Builds
</title>
<meta name="description" content="Architectural drawings in Haringey for extensions, loft conversions and new build projects. Measured survey within 48 hours, planning support and Building Regulations drawing packages." />
<link rel="canonical" href="https://www.wedrawplans.co.uk/areas/haringey" />
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
/>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
/>
</Head>

  <main className="bg-slate-50">
    {/* HERO */}
    <section className="relative bg-emerald-900 text-white">
      <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
        <Image
          src="/images/drawings.jpg"
          alt="Architectural drawings for Haringey extensions and lofts"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
          WEDRAWPLANS • HARINGEY
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Architectural Drawings in Haringey
        </h1>

        <p className="max-w-3xl text-sm md:text-base text-emerald-50">
          Architectural drawing services in Haringey for house extensions,
          loft conversions, outbuildings, flat conversions and small new
          build homes. We prepare planning drawings and Building Regulations
          packages that are clear, accurate and ready for submission.
        </p>

        <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
          <div className="space-y-3 text-sm">
            <div className="grid sm:grid-cols-2 gap-3">
              <ul className="space-y-1 list-disc pl-4">
                <li>Measured survey within 48 hours</li>
                <li>Planning and permitted development advice</li>
                <li>Full planning and Lawful Development applications</li>
              </ul>
              <ul className="space-y-1 list-disc pl-4">
                <li>Drawings tailored to Haringey planning policies</li>
                <li>Building regulation packages for 2025 standards</li>
                <li>Fixed quotes with clear scope of work</li>
              </ul>
            </div>

            <p className="mt-2 text-xs text-emerald-100">
              Typical Haringey projects include rear extensions in Crouch
              End and Muswell Hill, loft conversions on terraces around
              Harringay and Green Lanes, and conversion layouts across
              Tottenham and Wood Green.
            </p>
          </div>

          <div className="space-y-2 text-sm text-right md:text-left">
            <p className="text-xs text-emerald-100">Talk to us</p>
            <p className="text-sm text-white">
              Phone{" "}
              <a
                href={PHONE_LINK}
                className="font-semibold text-white underline"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="text-sm text-white">
              WhatsApp{" "}
              <a
                href={WHATSAPP_LINK}
                className="font-semibold text-white underline"
                target="_blank"
                rel="noreferrer"
              >
                message us
              </a>
            </p>
            <p className="text-sm text-white">
              Email{" "}
              <a
                href="mailto:info@wedrawplans.com"
                className="font-semibold text-white underline"
              >
                info@wedrawplans.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition"
          >
            Get your free Haringey quote
          </button>
        </div>
      </div>
    </section>

    <ServiceInternalLinks boroughName="Haringey" />

    {/* MAIN CONTENT */}
    <section className="mx-auto max-w-5xl px-6 py-14 space-y-14">
      {/* INTRO + DRAWINGS CARD */}
      <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Architectural drawing services in Haringey
          </h2>
          <p className="text-sm md:text-base text-slate-700">
            WEDRAWPLANS prepares complete drawing packages for rear and side
            extensions, double storey additions, loft conversions, internal
            alterations, flat conversions and small new developments across
            Haringey.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            We work throughout Crouch End, Muswell Hill, Harringay, Green
            Lanes, Hornsey, Wood Green, Tottenham, Seven Sisters, Bounds
            Green, Alexandra Palace and surrounding streets.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
          <Image
            src="/images/drawings.jpg"
            alt="Example of architectural drawings for a Haringey extension"
            width={800}
            height={500}
            className="object-cover w-full h-48 md:h-56"
          />
          <div className="p-5 space-y-2">
            <h3 className="text-lg font-semibold">
              Clear drawings focused on planning and Building Control
            </h3>
            <p className="text-sm text-slate-700">
              We produce floor plans, elevations, sections and key notes
              coordinated with structural input, so Haringey Council and
              your builder can work from a single consistent set of plans.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGES + AREAS / PROJECT TYPES */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
          <h3 className="text-lg font-semibold">Haringey areas we cover</h3>
          <Image
            src="/images/areas/haringey/haringey-area.jpg"
            alt="Haringey residential streets and local area"
            width={800}
            height={500}
            className="rounded-xl object-cover mb-3"
          />
          <p className="text-sm text-slate-700">
            Architectural drawings for the whole borough of Haringey,
            including:
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
            <ul className="list-disc pl-4 space-y-1">
              <li>Crouch End</li>
              <li>Muswell Hill</li>
              <li>Harringay</li>
              <li>Green Lanes</li>
              <li>Hornsey</li>
              <li>Highgate borders</li>
            </ul>
            <ul className="list-disc pl-4 space-y-1">
              <li>Wood Green</li>
              <li>Tottenham</li>
              <li>Seven Sisters</li>
              <li>Bounds Green</li>
              <li>Finsbury Park</li>
              <li>Alexandra Palace</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
          <h3 className="text-lg font-semibold">Popular projects in Haringey</h3>
          <Image
            src="/images/areas/haringey/project-1.jpg"
            alt="Haringey extension and loft conversion project example"
            width={800}
            height={500}
            className="rounded-xl object-cover mb-3"
          />
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
            <ul className="list-disc pl-4 space-y-1">
              <li>Rear and side extensions on terraces</li>
              <li>Wraparound and L shaped extensions</li>
              <li>Loft dormers on Victorian streets</li>
              <li>Hip to gable loft conversions</li>
              <li>Kitchen and open plan layouts</li>
            </ul>
            <ul className="list-disc pl-4 space-y-1">
              <li>Garden rooms and studios</li>
              <li>Flat conversions and layouts</li>
              <li>Internal reconfiguration and knock throughs</li>
              <li>HMOs and small new build schemes</li>
              <li>Front porches and infill extensions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PERMITTED DEVELOPMENT */}
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold">
          Permitted development limits in Haringey
        </h2>
        <p className="text-sm text-slate-700">
          Below is a simplified summary of typical permitted development
          limits. Final advice depends on your house type, location and any
          Article 4 directions or conservation area status in your part of
          Haringey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold mb-2">Rear extensions</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Up to 3 m deep on terrace houses</li>
              <li>Up to 4 m on semi detached houses</li>
              <li>Up to 6 to 8 m with Prior Approval</li>
              <li>Maximum 4 m height for single storey</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Loft conversions</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Up to 40 to 50 cubic metres volume</li>
              <li>No dormers on the principal front roof slope</li>
              <li>Side windows obscure glazed and fixed shut</li>
              <li>External materials similar to existing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Outbuildings</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Maximum 2.5 m high near boundaries</li>
              <li>Cannot be used as a separate dwelling</li>
              <li>Use must be incidental to the house</li>
              <li>Not more than 50 percent of garden area</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PLANNING & BUILDING REG PACKS */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
          <h3 className="text-lg font-semibold">Planning drawings for Haringey</h3>
          <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
            <li>Existing and proposed floor plans</li>
            <li>Existing and proposed elevations</li>
            <li>Roof plans and key sections</li>
            <li>Block plans and location plans</li>
            <li>Drainage and construction notes</li>
            <li>Design statements where required</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
          <h3 className="text-lg font-semibold">
            Building regulation drawings for Haringey
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
            <li>Structural layouts and coordination with engineer</li>
            <li>Foundation, beam and bearing information</li>
            <li>Fire safety and escape routes</li>
            <li>Thermal build ups and insulation specs</li>
            <li>Ventilation and extract positions</li>
            <li>Drainage runs and manhole information</li>
          </ul>
        </div>
      </div>

      {/* LOCAL KNOWLEDGE */}
      <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
        <h2 className="text-2xl font-semibold text-emerald-900">
          Local planning knowledge for Haringey projects
        </h2>
        <p className="text-sm text-emerald-900">
          Haringey includes conservation areas and character streets in
          places like Crouch End, Muswell Hill and Highgate borders, as well
          as dense terraces around Harringay, Green Lanes and Tottenham. We
          design each scheme to suit the local context so the approval
          process is as smooth as possible.
        </p>
      </div>

      {/* FORM */}
      <section
        id="haringey-quote"
        className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden"
      >
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-0">
          <div className="p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Get a fixed quote for drawings in Haringey
            </h2>
            <p className="mt-3 text-sm text-slate-700 max-w-xl">
              Tell us your address and what you want to build. We will review
              it and reply with the next steps and a fixed quote.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800">
                    Full name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800">
                    Phone
                  </label>
                  <input
                    name="phone"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800">
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="e.g. N8 8AA"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800">
                  What do you need
                </label>
                <select
                  name="service"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>House extension plans</option>
                  <option>Loft conversion plans</option>
                  <option>Planning application</option>
                  <option>Lawful Development Certificate</option>
                  <option>Building Regulations drawings</option>
                  <option>Flat conversion / HMO</option>
                  <option>New build</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800">
                  Project details
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="Briefly describe what you want to do (rear extension, loft dormer, etc.) and the full property address if available."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition"
                >
                  Get my quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  WhatsApp us instead
                </a>
              </div>
            </form>
          </div>

          <div className="relative bg-slate-900 text-white p-8">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/areas/haringey/project-2.jpg"
                alt="Haringey project example"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative space-y-5">
              <h3 className="text-xl font-semibold">What you get</h3>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li>Measured survey within 48 hours</li>
                <li>Clear planning drawings ready for submission</li>
                <li>Advice on permitted development and best route</li>
                <li>Optional Building Regulations package</li>
                <li>Support until decision or certificate is issued</li>
              </ul>

              <div className="pt-3 space-y-2 text-sm">
                <p className="text-slate-300">Call now</p>
                <a
                  href={PHONE_LINK}
                  className="font-semibold text-emerald-300 underline"
                >
                  {PHONE_DISPLAY}
                </a>

                <p className="text-slate-300 pt-2">Email</p>
                <a
                  href="mailto:info@wedrawplans.com"
                  className="font-semibold text-emerald-300 underline"
                >
                  info@wedrawplans.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
          <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
            <h3 className="font-semibold">
              Do I need planning permission for my Haringey extension
            </h3>
            <p>
              Many extensions and lofts can proceed under permitted development.
              We check your address, house type and location and then advise
              the best route at the start.
            </p>
          </div>
          <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
            <h3 className="font-semibold">
              How fast can you visit and survey the property
            </h3>
            <p>
              In most cases we can arrange the initial measured survey in
              Haringey within 48 hours of instruction.
            </p>
          </div>
          <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
            <h3 className="font-semibold">
              Do you submit the application to Haringey Council
            </h3>
            <p>
              Yes. We handle the full submission process, monitor progress
              on the planning portal and respond to any planning officer
              comments or requests.
            </p>
          </div>
          <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
            <h3 className="font-semibold">
              Can you help with structural calculations
            </h3>
            <p>
              We coordinate with qualified structural engineers so that beams,
              padstones and load bearing elements are designed and shown on the
              drawings for Building Control approval.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Ready to start your Haringey project</h2>
          <p className="text-sm text-slate-300">
            Send your address and a short description of what you want to build.
            We will review it and come back with a fixed quote and next steps.
          </p>
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
            {PHONE_DISPLAY}
          </a>
          <a
            href="mailto:info@wedrawplans.com"
            className="font-semibold text-emerald-300 underline"
          >
            info@wedrawplans.com
          </a>
          <button
            type="button"
            onClick={scrollToForm}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-100"
          >
            Get your free Haringey quote
          </button>
        </div>
      </div>
    </section>
  </main>
</>


);
}
