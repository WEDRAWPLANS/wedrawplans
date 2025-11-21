import React from "react";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
// Hidden WhatsApp number, used only in the link
const WHATSAPP_LINK =
  "https://wa.me/447950606111?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20my%20project";

export default function Home() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const service = data.get("service");
    const postcode = data.get("postcode");
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const message = data.get("message");

    console.log({
      service,
      postcode,
      name,
      phone,
      email,
      message,
    });

    alert(
      "Thank you. Your enquiry is captured in this preview. On the real site this will email WEDRAWPLANS and send an auto reply to the client."
    );

    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-xs font-bold tracking-wide text-white">
              WD
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">
                WEDRAWPLANS
              </div>
              <div className="text-[11px] text-slate-500">
                Architectural drawing studio for London and M25
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-sm md:flex">
            <a
              href={PHONE_LINK}
              className="font-medium text-slate-900 hover:underline"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_LINK}
              className="text-slate-700 hover:underline"
            >
              Email {EMAIL}
            </a>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="bg-gradient-to-b from-red-600 to-red-500 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:flex-row lg:items-center lg:px-6 lg:py-16">
          {/* Hero text */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              LONDONS LEADING EXTENSION AND LOFT DRAWING SPECIALISTS
              <br />
              FOR ADDING SPACE AND VALUE AT FAIR FIXED FEES
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-red-50">
              Planning and Building Regulation drawings for house extensions,
              loft conversions, flat conversions and new build projects across
              London and the M25 area.
            </p>

            {/* Quick contact strip */}
            <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-semibold text-red-600 shadow-sm"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={EMAIL_LINK}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-4 py-2 font-medium text-white"
              >
                Email the drawings team
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-red-100">
              Send your postcode and a short note and we aim to respond the
              same working day.
            </p>
          </div>

          {/* Lead form */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-2xl bg-white p-5 text-slate-900 shadow-xl">
              <h2 className="text-lg font-semibold">
                Get a free quote in minutes
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Share a few details and we will send a clear fixed fee quote for
                your drawings.
              </p>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-sm">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">
                    Which service do you need
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    <option value="Extension plans">
                      House extension plans
                    </option>
                    <option value="Loft conversion plans">
                      Loft conversion plans
                    </option>
                    <option value="New build">
                      New build house or small development
                    </option>
                    <option value="Flat conversion">
                      Flat or HMO conversion
                    </option>
                    <option value="Building regs">
                      Building Regulation drawings and details
                    </option>
                    <option value="Other">Other project type</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    required
                    placeholder="Example SE5 7GD"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-700">
                      Telephone
                    </label>
                    <input
                      name="phone"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    name="email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">
                    Brief note about the project
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="For example rear extension and loft dormer to a semi detached house"
                    className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                >
                  GET MY FREE QUOTE
                </button>

                <p className="mt-2 text-[11px] text-slate-500 text-center">
                  Popular projects: rear extension, side return, wrap around,
                  loft dormer, garage conversion, flat conversion.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose section */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Why homeowners choose WEDRAWPLANS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            A focused drawing service dedicated to London extensions, loft
            conversions and small developments with clear fixed fees and strong
            support from first call through to council decision.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Design and build experience",
                text: "Combined design and build background so drawings are practical and buildable on site.",
              },
              {
                title: "Planning and Building Control",
                text: "Regular submissions across many London councils, with drawings tailored to current requirements.",
              },
              {
                title: "Fixed fee and clear scope",
                text: "Upfront pricing with a written list of what is included so there is no confusion later.",
              },
              {
                title: "Fast response times",
                text: "Calls, emails and WhatsApp messages answered quickly with direct contact to the designer.",
              },
              {
                title: "Support for builders",
                text: "Plans, sections and details are produced in a way that builders can follow easily on site.",
              },
              {
                title: "Friendly straightforward service",
                text: "Plain language, simple explanations and help through each stage of the process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Services for extensions, lofts and conversions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            All the drawings and documentation you need from first idea to
            approved application and ready for your builder.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
            <ServiceItem title="House extension plans">
              Rear, side and wrap around extensions with clear floor plans,
              elevations and roof layouts.
            </ServiceItem>
            <ServiceItem title="Loft conversion plans">
              Dormers, hip to gable, mansard layouts, stair design and fire
              strategy.
            </ServiceItem>
            <ServiceItem title="New build and small developments">
              New houses and small blocks of flats including layout, access and
              basic site planning.
            </ServiceItem>
            <ServiceItem title="Flat and HMO conversions">
              Plans for conversions, licensing layouts and fire escape
              strategies.
            </ServiceItem>
            <ServiceItem title="Building Regulation drawings">
              Detailed plans, sections and notes for Building Control approval
              including insulation and structure coordination.
            </ServiceItem>
            <ServiceItem title="Construction packs">
              Drawing sets and schedules that help your builder price and
              construct the work with fewer questions.
            </ServiceItem>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Simple three step process
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
            <ProcessStep
              step="1"
              title="Free call or WhatsApp"
              text="Share your address, postcode and a brief outline of the work. We confirm if it is suitable and explain the next steps."
            />
            <ProcessStep
              step="2"
              title="Survey and design options"
              text="We visit to measure, then prepare layout options so you can see how space and value can be added."
            />
            <ProcessStep
              step="3"
              title="Drawings and submission"
              text="Planning and Building Regulation drawings are produced and submitted, with support until a decision is issued."
            />
          </div>
        </div>
      </section>

      {/* Areas and prices */}
      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Covering all London boroughs and M25 area
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                WEDRAWPLANS focuses on projects in London and surrounding towns
                so we stay familiar with local planning approaches.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "Lewisham",
                  "Southwark",
                  "Lambeth",
                  "Newham",
                  "Redbridge",
                  "Harrow",
                  "Barnet",
                  "Bromley",
                  "Croydon",
                  "Tower Hamlets",
                  "Greenwich",
                  "Waltham Forest",
                ].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Guide drawing fees
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Every project is priced to its scope, but these guide figures
                help set expectations.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-baseline justify-between rounded-xl bg-white px-4 py-2 shadow-sm">
                  <span>House extension planning drawings</span>
                  <span className="font-semibold">from 795 plus VAT</span>
                </li>
                <li className="flex items-baseline justify-between rounded-xl bg-white px-4 py-2 shadow-sm">
                  <span>Loft conversion planning drawings</span>
                  <span className="font-semibold">from 795 plus VAT</span>
                </li>
                <li className="flex items-baseline justify-between rounded-xl bg-white px-4 py-2 shadow-sm">
                  <span>Building Regulation drawing pack</span>
                  <span className="font-semibold">priced to project scope</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Fees exclude council planning fees and separate structural
                engineer design where needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Feedback from clients
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            Homeowners and small developers who used WEDRAWPLANS for extensions,
            lofts and other projects.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
            <Testimonial
              name="Homeowner in Brockley"
              text="Drawings were clear and the team dealt with planner questions quickly so the application moved forward without delays."
            />
            <Testimonial
              name="Client in East Ham"
              text="Building Regulation set helped the builder understand exactly what was expected on site."
            />
            <Testimonial
              name="Developer in Cuffley"
              text="Good communication, accurate layouts and support right through to decision and start on site."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm lg:flex-row lg:justify-between lg:px-6">
          <div>
            <div className="text-base font-bold tracking-tight">
              WEDRAWPLANS
            </div>
            <p className="mt-2 max-w-sm text-xs text-slate-400">
              Architectural drawings for extensions, lofts, conversions and
              small developments across London and surrounding M25 areas.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Contact
            </div>
            <ul className="mt-2 space-y-1 text-xs">
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
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Studio
            </div>
            <p className="mt-2 text-xs text-slate-400">
              201 Borough High Street
              <br />
              London SE1 1JA
              <br />
              United Kingdom
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 py-3 text-center text-[11px] text-slate-500">
          Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with WEDRAWPLANS"
        className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg ring-2 ring-white/70 hover:bg-green-600"
      >
        {/* Simple chat bubble icon */}
        <span className="text-xl">💬</span>
      </a>
    </div>
  );
}

type SimpleProps = {
  title: string;
  children: React.ReactNode;
};

function ServiceItem({ title, children }: SimpleProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-600">{children}</p>
    </div>
  );
}

type StepProps = {
  step: string;
  title: string;
  text: string;
};

function ProcessStep({ step, title, text }: StepProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-red-600 text-xs font-semibold text-white">
          {step}
        </div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-2 text-xs text-slate-600">{text}</p>
    </div>
  );
}

type TestimonialProps = {
  name: string;
  text: string;
};

function Testimonial({ name, text }: TestimonialProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs text-slate-700">{text}</p>
      <p className="mt-3 text-[11px] font-semibold text-slate-500">{name}</p>
    </div>
  );
}
