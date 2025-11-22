import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

// WhatsApp now uses the LANDLINE number (as requested),
// but the number is NOT shown on the screen – only the link text.
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

export default function IndexPage() {
  function handleHeroSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const service = data.get("service");
    const postcode = data.get("postcode");

    console.log({ service, postcode });

    alert(
      "Thank you. In the live site this form will send your service choice and postcode to WEDRAWPLANS and trigger a same-day call back."
    );

    e.currentTarget.reset();
  }

  return (
    <>
      <Head>
        <title>
          WEDRAWPLANS – London House Extension & Loft Conversion Drawings
        </title>
        {/* Google font similar to DrawPlans style */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* Top bar / nav */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-400 text-xs font-semibold tracking-[0.15em]">
                WD
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-[0.18em] uppercase">
                  WEDRAWPLANS
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 text-[13px] text-slate-700 lg:flex">
              <NavMenu title="Local Designers">
                <NavItem>Architectural designers Lewisham</NavItem>
                <NavItem>Architectural designers Southwark</NavItem>
                <NavItem>Architectural designers Lambeth</NavItem>
                <NavItem>Architectural designers Greenwich</NavItem>
                <NavItem>Architectural designers Bromley</NavItem>
                <NavItem>Architectural designers Croydon</NavItem>
              </NavMenu>
              <NavMenu title="Extension Plans">
                <NavItem>Rear extension plans</NavItem>
                <NavItem>Side return extension plans</NavItem>
                <NavItem>Wrap around extension plans</NavItem>
                <NavItem>Two storey extension plans</NavItem>
              </NavMenu>
              <NavMenu title="Loft Plans">
                <NavItem>Dormer loft conversion plans</NavItem>
                <NavItem>Hip to gable loft conversion</NavItem>
                <NavItem>Mansard loft conversion</NavItem>
                <NavItem>Velux loft conversion</NavItem>
              </NavMenu>
              <NavMenu title="Building Regs">
                <NavItem>Building Regulation drawing packs</NavItem>
                <NavItem>Construction details & sections</NavItem>
                <NavItem>Fire strategy plans</NavItem>
              </NavMenu>
              <a
                href="#price-guide"
                className="hover:underline"
              >
                Price guide
              </a>
              <a
                href="#contact"
                className="hover:underline"
              >
                Contact
              </a>
            </nav>

            {/* Contact CTA */}
            <div className="hidden items-center gap-3 text-[13px] lg:flex">
              <a
                href={PHONE_LINK}
                className="font-medium text-slate-900 hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#64b7c4] px-3 py-1 text-[12px] font-medium text-[#29788a]"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Mobile simple contact */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={PHONE_LINK}
                className="text-[12px] font-medium text-slate-900"
              >
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

        {/* Hero with short form (fits one mobile screen) */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-center lg:px-6 lg:py-14">
            {/* Text column */}
            <div className="flex-1">
              <h1 className="text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                Londons leading extension & loft drawing consultants for adding
                space and value at sensible fixed fees
              </h1>
              <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-700">
                WEDRAWPLANS are London based architectural drawing specialists
                focusing on house extensions, loft conversions and small
                developments. We help homeowners plan, design and obtain
                approvals for their projects across London and the M25 area.
              </p>

              <p className="mt-3 text-[12px] text-slate-600">
                Speak to a designer today on{" "}
                <a
                  href={PHONE_LINK}
                  className="font-semibold underline"
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                or request a free quote using the form.
              </p>
            </div>

            {/* Lead form – compact like DrawPlans, no scroll on most phones */}
            <div className="flex-1">
              <div className="mx-auto max-w-md rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[15px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free quote in minutes
                </h2>
                <p className="mt-2 text-[12px] text-slate-600">
                  Choose the service and enter your postcode. We will reply with
                  a fixed fee for your drawings.
                </p>

                <form
                  onSubmit={handleHeroSubmit}
                  className="mt-4 space-y-3 text-[13px]"
                >
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
                      <option value="Flat or HMO conversion plans">
                        Flat or HMO conversion plans
                      </option>
                      <option value="New build drawings">
                        New build or small development drawings
                      </option>
                      <option value="Building Regulation drawings">
                        Building Regulation drawing packs
                      </option>
                      <option value="Other">Other architectural drawings</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      required
                      placeholder="Example SE5 7GD"
                      className="w-full rounded-none border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                    />
                  </div>

                  {/* Button only – rest of contact details captured on next step / call back */}
                  <button
                    type="submit"
                    className="mt-3 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Next
                  </button>

                  <p className="mt-2 text-[11px] text-slate-500">
                    Popular: rear extensions, side return extensions, wrap
                    around extensions, loft dormers and hip to gable
                    conversions.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Local designers style section */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Local architectural drawing services across London
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              We regularly work in many London boroughs and nearby towns. Local
              experience helps us shape realistic designs and anticipate what
              councils look for in extension and loft conversion drawings.
            </p>

            <div className="mt-5 grid gap-2 text-[13px] sm:grid-cols-2 md:grid-cols-3">
              {[
                "Architectural drawings Lewisham",
                "Architectural drawings Southwark",
                "Architectural drawings Lambeth",
                "Architectural drawings Greenwich",
                "Architectural drawings Newham",
                "Architectural drawings Bromley",
                "Architectural drawings Croydon",
                "Architectural drawings Harrow",
                "Architectural drawings Redbridge",
                "Architectural drawings Barnet",
                "Architectural drawings Waltham Forest",
                "Architectural drawings Surrey borders",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-slate-200 py-1.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / sub headings like their drop downs */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Extension plans · loft plans · building regulation drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              As with Draw Plans, each service area branches into specific
              project types. WEDRAWPLANS expands this further so homeowners can
              quickly find the drawings they need.
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
                body="Plans, elevations and roof layouts for single and two storey extensions prepared for planning and permitted development routes."
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
                body="Stair positioning, headroom checks and dormer layouts with clear sections ready for structural engineer input and Building Control."
              />
              <ServiceColumn
                heading="Building Regs & construction"
                items={[
                  "Building Regulation drawing packs",
                  "Detail sections and junctions",
                  "Thermal and insulation notes",
                  "Drainage and foundations coordination",
                  "Fire escape and compartmentation plans",
                ]}
                body="Technical drawings and notes to support Building Control applications and help builders deliver work to an agreed standard."
              />
            </div>
          </div>
        </section>

        {/* Price guide + help options */}
        <section
          id="price-guide"
          className="border-b border-slate-200 bg-white py-10"
        >
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Price guide for drawings
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Each project is individually quoted once we see the property and
              understand the brief, but these guide figures help set
              expectations.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-[13px]">
              <PriceCard
                title="House extension planning drawings"
                price="from £795 + VAT"
                body="Includes existing and proposed plans and elevations ready for planning or lawful development applications."
              />
              <PriceCard
                title="Loft conversion planning drawings"
                price="from £795 + VAT"
                body="Plans, sections and elevations for dormer and hip to gable conversions tailored to your roof and staircase."
              />
              <PriceCard
                title="Building Regulation drawing packs"
                price="priced to scope"
                body="Full technical sets with notes and sections, coordinated with structural engineer designs where required."
              />
            </div>

            {/* Three help options similar to their cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-3 text-[13px]">
              <HelpCard
                title="Phone consultation"
                body="Book a telephone call to discuss your project and ask questions before committing."
                linkText="Schedule a call with a designer"
              />
              <HelpCard
                title="Give us a call now"
                body={`Talk to us today about your extension or loft conversion on ${PHONE_DISPLAY}.`}
                linkText="Call now"
              />
              <HelpCard
                title="Free quote"
                body="Send basic details and we will email a clear fixed fee for your drawings."
                linkText="Use our enquiry form"
              />
            </div>
          </div>
        </section>

        {/* Contact form section */}
        <section
          id="contact"
          className="bg-[#f8f4f0] py-10"
        >
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Get in touch / tell us what you need
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Share a short description of your project together with your
              contact details. We normally respond the same working day.
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
                <div className="text-[14px] font-semibold tracking-[0.18em] uppercase text-slate-900">
                  WEDRAWPLANS
                </div>
                <p className="mt-2 max-w-sm text-[12px] text-slate-600">
                  Architectural drawing consultants for extensions, loft
                  conversions, conversions and small developments across London
                  and the M25 area.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Contact
                </div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a
                      href={PHONE_LINK}
                      className="hover:underline"
                    >
                      Phone {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li>
                    <a
                      href={EMAIL_LINK}
                      className="hover:underline"
                    >
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

        {/* Floating WhatsApp bubble – no number shown, just icon */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with WEDRAWPLANS"
          className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#64b7c4] text-white shadow-lg ring-2 ring-white/70 hover:bg-[#4da4b4]"
        >
          <span className="text-xl">💬</span>
        </a>
      </div>
    </>
  );
}

/* ---------- Small helper components ---------- */

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
      <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 min-w-[220px] rounded-sm bg-white py-2 text-[12px] shadow-lg opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-1 hover:bg-slate-100">{children}</div>
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

type PriceCardProps = {
  title: string;
  price: string;
  body: string;
};

function PriceCard({ title, price, body }: PriceCardProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold text-slate-900">
        {title}
      </h3>
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
  return (
    <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
      <h3 className="text-[13px] font-semibold text-slate-900 uppercase tracking-[0.12em]">
        {title}
      </h3>
      <p className="mt-2 text-[12px] text-slate-600">{body}</p>
      <p className="mt-2 text-[12px] text-[#29788a] underline">{linkText}</p>
    </div>
  );
}

function ContactForm() {
  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. In the live site this form will email WEDRAWPLANS and trigger a follow up."
    );
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleContactSubmit}
      className="space-y-3 text-[13px]"
    >
      <div className="space-y-1">
        <label className="text-[11px] font-medium text-slate-700">
          Name
        </label>
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
        className="mt-2 w-full rounded-none bg-slate-900 py-2 text-[13px] font-semibold text-white"
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
        house extensions, loft conversions, garage conversions, flat
        conversions, HMOs and small developments.
      </p>
      <p className="mt-3">
        We focus on practical, buildable designs and clear drawings that help
        secure planning and Building Regulation approvals while supporting
        builders on site.
      </p>
      <p className="mt-3">
        If you already have outline sketches or estate agent drawings, feel free
        to attach them when you email us so we can review before we speak.
      </p>
    </div>
  );
}
