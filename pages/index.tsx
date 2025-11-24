import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

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

export default function IndexPage() {
  async function handleHeroSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      postcode: data.get("postcode"),
      message: "Quick quote from hero form",
    };

    try {
      const res = await fetch("/api/contact-resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Thank you — your request has been submitted. WEDRAWPLANS will contact you shortly.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      alert("Network error — please try again.");
    }
  }

  return (
    <>
      <Head>
        <title>
          WEDRAWPLANS – London extension, loft and new build drawings
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WD
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-[0.2em] uppercase">
                  WEDRAWPLANS
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 text-[13px] text-slate-700 lg:flex">
              <NavMenu title="Local designers">
                {BOROUGHS.slice(0, 8).map((borough) => (
                  <NavItem key={borough.slug}>
                    <a href={`/areas/${borough.slug}`} className="block">
                      {borough.label}
                    </a>
                  </NavItem>
                ))}
              </NavMenu>

              <NavMenu title="Extension plans">
                <NavItem>Rear extension plans</NavItem>
                <NavItem>Side return extension plans</NavItem>
                <NavItem>Wrap around extension plans</NavItem>
                <NavItem>Two storey extension plans</NavItem>
                <NavItem>Kitchen extension layouts</NavItem>
              </NavMenu>

              <NavMenu title="Loft plans">
                <NavItem>Dormer loft conversions</NavItem>
                <NavItem>Hip to gable loft conversions</NavItem>
                <NavItem>Mansard loft conversions</NavItem>
                <NavItem>Velux loft layouts</NavItem>
                <NavItem>Attic conversions</NavItem>
              </NavMenu>

              <NavMenu title="New build">
                <NavItem>New build house plans</NavItem>
                <NavItem>Small residential developments</NavItem>
                <NavItem>Infill plots and backland sites</NavItem>
                <NavItem>Conversion to flats</NavItem>
              </NavMenu>

              <NavMenu title="Technical and support">
                <NavItem>Building Regulation drawing packs</NavItem>
                <NavItem>Fire and escape strategy plans</NavItem>
                <NavItem>Measured surveys</NavItem>
                <NavItem>Structural engineer coordination</NavItem>
                <NavItem>Party wall drawings and support</NavItem>
                <NavItem>Interior layouts and finishes plans</NavItem>
              </NavMenu>

              {/* New link to the master Areas page */}
              <a href="/areas" className="hover:underline">
                Areas we cover
              </a>

              <a href="#price-guide" className="hover:underline">
                Price guide
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </nav>

            {/* Desktop quick contact – modern buttons */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
              >
                <span>📞</span>
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-[#1ebe57]"
              >
                <span>💬</span>
                <span>WhatsApp us</span>
              </a>
            </div>

            {/* Mobile contact */}
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
        </header>

        {/* HERO – heading block, then form, then explanatory text */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto max-w-3xl px-4 py-7 lg:px-6 lg:py-10">
            {/* Heading block */}
            <div className="text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">
                Extension · loft · new build · conversions
              </p>
              <h1 className="mt-2 text-[20px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[24px]">
                Londons leading architectural drawing consultants for adding
                space and value at sensible fixed fees
              </h1>
            </div>

            {/* Form card */}
            <div className="mt-4 rounded-2xl bg-white p-5 shadow-md">
              <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Free fixed fee quote
              </h2>
              <p className="mt-1 text-[12px] text-slate-600">
                Share a few details and receive a clear fixed price for your
                drawings. No obligation, no call centre – you deal directly
                with a designer.
              </p>

              <form
                onSubmit={handleHeroSubmit}
                className="mt-3 space-y-3 text-[13px]"
              >
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-none border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                  />
                </div>

                {/* Telephone + Email */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">
                      Telephone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-none border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-none border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Postcode */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-700">
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    required
                    placeholder="SE15 4LR"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                    }}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.placeholder = "SE15 4LR";
                      }
                    }}
                    className="w-full rounded-none border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] focus:outline-none"
                  />
                </div>

                {/* Service */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-700">
                    Which service do you need
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full rounded-none border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    <option value="House extension plans">
                      House extension plans
                    </option>
                    <option value="Loft conversion plans">
                      Loft conversion plans
                    </option>
                    <option value="New build or small development">
                      New build or small residential development
                    </option>
                    <option value="Flat or HMO conversion plans">
                      Flat or HMO conversion plans
                    </option>
                    <option value="Building Regulation drawing packs">
                      Building Regulation drawing packs
                    </option>
                    <option value="Measured survey and as existing drawings">
                      Measured survey and as existing drawings
                    </option>
                    <option value="Other architectural drawings">
                      Other architectural drawings
                    </option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my quote
                </button>

                <p className="mt-2 text-[11px] text-slate-500">
                  Popular: rear extensions, side return extensions, wrap
                  around extensions, loft dormers, hip to gable conversions,
                  new build plots and flat conversions.
                </p>
              </form>
            </div>

            {/* Text below form */}
            <div className="mt-4 text-[13px] leading-relaxed text-slate-700">
              <p>
                WEDRAWPLANS focus on practical, buildable designs for house
                extensions, loft conversions, new builds and conversions across
                London and the M25 area. Drawings are tailored to planning and
                Building Regulation requirements and to what builders need on
                site.
              </p>
              <p className="mt-2 text-[12px] text-slate-600">
                Many quotes are turned around the same working day. For urgent
                projects we can often arrange an initial survey within 48 hours.
              </p>
              <p className="mt-2 text-[12px] text-slate-600">
                Call{" "}
                <a href={PHONE_LINK} className="font-semibold underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                or use the form above to request a fixed fee.
              </p>
            </div>
          </div>
        </section>

        {/* Local designers */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Local architectural drawing services across London and M25
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              WEDRAWPLANS regularly prepare drawings in boroughs across London
              and the wider M25 area. These local area pages are designed so
              homeowners and small developers can see how typical extensions,
              lofts and new builds are viewed in their council area.
            </p>

            <div className="mt-5 grid gap-2 text-[13px] sm:grid-cols-2 md:grid-cols-3">
              {BOROUGHS.map((b) => (
                <div key={b.slug} className="border-b border-slate-200 py-1.5">
                  <a
                    href={`/areas/${b.slug}`}
                    className="text-slate-800 hover:text-[#29788a] hover:underline"
                  >
                    {b.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extension, loft, new build and technical services */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Extension plans · loft plans · new build and technical drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              WEDRAWPLANS follow a clear and structured approach similar in
              spirit to the best online drawing studios, while adding more depth
              around construction, structural coordination and on site delivery.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-[13px]">
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

        {/* Project types */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Architectural drawings for almost any residential project
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              From a simple rear extension to full house remodelling and new
              build, WEDRAWPLANS provide drawings for a wide range of project
              types so that clients can handle everything through one studio.
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
                <span
                  key={item}
                  className="inline-block rounded-full border border-slate-200 bg-[#fdf8f3] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Support services */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Support services around your drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Beyond pure drawing production, WEDRAWPLANS help bring projects
              together by coordinating key professionals and offering additional
              documentation where needed.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-[13px]">
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

        {/* Price guide */}
        <section id="price-guide" className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Price guide for drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Every project is quoted once the scope and location are understood.
              These guide figures reflect common extension and loft projects and
              help set expectations before clients get in touch.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-[13px]">
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

            <div className="mt-10 grid gap-4 md:grid-cols-3 text-[13px]">
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

        {/* Contact area */}
        <section id="contact" className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Get in touch and tell us what you need
            </h2>
          <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Share a short description of the property and what you would like
              to achieve. WEDRAWPLANS normally respond the same working day and
              can follow up by phone, email or WhatsApp depending on what you
              prefer.
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <ContactForm />
              <ContactSummary />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-[12px] text-slate-600 lg:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-[14px] font-semibold tracking-[0.2em] uppercase text-slate-900">
                  WEDRAWPLANS
                </div>
                <p className="mt-2 max-w-sm text-[12px] text-slate-600">
                  Architectural drawing consultants for extensions, loft
                  conversions, new builds, conversions and small developments
                  across London and the M25 area.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Contact
                </div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a href={PHONE_LINK} className="hover:underline">
                      Phone {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li>
                    <a href={EMAIL_LINK} className="hover:underline">
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Studio
                </div>
                <p className="mt-2 text-[12px] text-slate-600">
                  201 Borough High Street
                  <br />
                  London SE1 1JA
                  <br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-3 text-center text-[11px] text-slate-500">
              Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights
              reserved.
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp bubble */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with WEDRAWPLANS"
          className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 hover:bg-[#1ebe57]"
        >
          <span className="text-xl">💬</span>
        </a>
      </div>
    </>
  );
}

/* Helper components */

type NavMenuProps = {
  title: string;
  children: React.ReactNode;
};

function NavMenu({ title, children }: NavMenuProps) {
  return (
    <div className="relative group">
      <button className="uppercase tracking-[0.14em] text-[11px] font-medium">
        {title}
      </button>
      <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 min-w-[240px] rounded-sm bg-white py-2 text-[12px] shadow-lg opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return <div className="px-4 py-1 hover:bg-slate-100">{children}</div>;
}

type ServiceColumnProps = {
  heading: string;
  items: string[];
  body: string;
};

function ServiceColumn({ heading, items, body }: ServiceColumnProps) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
        {heading}
      </h3>
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
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900">
        {title}
      </h3>
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
      <div className="mt-1 text-[13px] font-semibold text-slate-900">
        {price}
      </div>
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
    // Scroll smoothly to the main contact section
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-[12px] text-slate-600">{body}</p>
      <button
        type="button"
        onClick={handleClick}
        className="mt-2 text-[12px] text-[#29788a] underline"
      >
        {linkText}
      </button>
    </div>
  );
}


function ContactForm() {
  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      postcode: data.get("postcode"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact-resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(
          "Thank you — your message has been sent to WEDRAWPLANS. We will contact you shortly."
        );
        form.reset();
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      alert("Network error — please try again.");
    }
  }

  return (
    <form onSubmit={handleContactSubmit} className="space-y-3 text-[13px]">
      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">Name</label>
        <input
          name="name"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">
          Telephone
        </label>
        <input
          name="phone"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">
          Postcode
        </label>
        <input
          name="postcode"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">
          Email
        </label>
        <input
          name="email"
          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">
          Type your message here
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full bg-slate-900 py-2 text-[13px] font-semibold text-white"
      >
        Submit
      </button>
    </form>
  );
}

function ContactSummary() {
  return (
    <div className="text-[13px] text-slate-700">
      <p>
        WEDRAWPLANS provide a full range of architectural drawing services for
        house extensions, loft conversions, garage conversions, garden rooms,
        flat conversions, HMOs and small new build developments.
      </p>
      <p className="mt-3">
        The focus is on clear, buildable designs that support planning and
        Building Regulation approvals and that help builders understand exactly
        what is intended on site.
      </p>
      <p className="mt-3">
        If you already have estate agent plans, older drawings or simple
        sketches, you can email them together with photos so that the property
        can be reviewed before a call.
      </p>
    </div>
  );
}
