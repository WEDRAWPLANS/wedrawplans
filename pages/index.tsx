import React, { useState } from "react";
import Link from "next/link";

type MenuKey = "local" | "services" | "portfolio" | "planning" | "more" | null;

const HomePage: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpen = (key: MenuKey) => setOpenMenu(key);
  const handleClose = () => setOpenMenu(null);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER / NAVBAR */}
      <header className="relative z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3">
            {/* When you have your real logo, replace this div with an <img> */}
            {/* <img src="/images/wedrawplans-logo.png" alt="WEDRAWPLANS" className="h-10" /> */}
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-slate-900 text-lg font-extrabold">
              WD
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.18em] uppercase">
                WEDRAWPLANS
              </span>
              <span className="text-xs text-slate-500">
                Architectural Drawing Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {/* Local Designers */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("local")}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-emerald-600"
              >
                <span>Local Designers</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "local" && (
                <div className="absolute left-0 mt-3 w-64 rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
                  <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    London Boroughs
                  </div>
                  <div className="grid grid-cols-2 gap-1 px-4 pb-4 text-xs">
                    <Link href="/boroughs/barnet" className="hover:text-emerald-600">
                      Barnet
                    </Link>
                    <Link href="/boroughs/enfield" className="hover:text-emerald-600">
                      Enfield
                    </Link>
                    <Link href="/boroughs/haringey" className="hover:text-emerald-600">
                      Haringey
                    </Link>
                    <Link href="/boroughs/islington" className="hover:text-emerald-600">
                      Islington
                    </Link>
                    <Link href="/boroughs/redbridge" className="hover:text-emerald-600">
                      Redbridge
                    </Link>
                    <Link href="/boroughs/bromley" className="hover:text-emerald-600">
                      Bromley
                    </Link>
                    <Link href="/boroughs/croydon" className="hover:text-emerald-600">
                      Croydon
                    </Link>
                    <Link
                      href="/boroughs/tower-hamlets"
                      className="hover:text-emerald-600"
                    >
                      Tower Hamlets
                    </Link>
                    <Link href="/boroughs/lambeth" className="hover:text-emerald-600">
                      Lambeth
                    </Link>
                    <Link
                      href="/boroughs/southwark"
                      className="hover:text-emerald-600"
                    >
                      Southwark
                    </Link>
                    <Link
                      href="/boroughs/waltham-forest"
                      className="hover:text-emerald-600"
                    >
                      Waltham Forest
                    </Link>
                    <Link
                      href="/boroughs/all"
                      className="font-semibold text-emerald-600"
                    >
                      View all boroughs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("services")}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-emerald-600"
              >
                <span>Services</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "services" && (
                <div className="absolute left-0 mt-3 w-72 rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
                  <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Residential Plans
                  </div>
                  <div className="flex flex-col gap-1 px-4 pb-2 text-xs">
                    <Link href="/services/extensions" className="hover:text-emerald-600">
                      Extension Plans
                    </Link>
                    <Link href="/services/lofts" className="hover:text-emerald-600">
                      Loft Conversion Plans
                    </Link>
                    <Link href="/services/garage" className="hover:text-emerald-600">
                      Garage Conversion Plans
                    </Link>
                    <Link href="/services/2d-plans" className="hover:text-emerald-600">
                      2D Planning Drawings
                    </Link>
                    <Link href="/services/3d" className="hover:text-emerald-600">
                      3D Visuals and Views
                    </Link>
                  </div>
                  <div className="border-t border-slate-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Compliance and Technical
                  </div>
                  <div className="flex flex-col gap-1 px-4 pb-4 text-xs">
                    <Link
                      href="/services/building-regs"
                      className="hover:text-emerald-600"
                    >
                      Building Regulation Drawings
                    </Link>
                    <Link
                      href="/services/structural"
                      className="hover:text-emerald-600"
                    >
                      Structural Coordination
                    </Link>
                    <Link
                      href="/services/commercial"
                      className="hover:text-emerald-600"
                    >
                      Commercial and Mixed Use
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio / Projects */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("portfolio")}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-emerald-600"
              >
                <span>Portfolio</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "portfolio" && (
                <div className="absolute left-0 mt-3 w-56 rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-200/70 text-xs">
                  <div className="flex flex-col gap-1 px-4 py-3">
                    <Link
                      href="/projects/residential"
                      className="hover:text-emerald-600"
                    >
                      Residential Projects
                    </Link>
                    <Link
                      href="/projects/commercial"
                      className="hover:text-emerald-600"
                    >
                      Commercial Projects
                    </Link>
                    <Link
                      href="/projects/planning-approvals"
                      className="hover:text-emerald-600"
                    >
                      Planning Approvals
                    </Link>
                    <Link
                      href="/projects/before-after"
                      className="hover:text-emerald-600"
                    >
                      Before &amp; After Drawings
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Price Guide */}
            <Link href="/price-guide" className="hover:text-emerald-600">
              Price Guide
            </Link>

            {/* Planning */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("planning")}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-emerald-600"
              >
                <span>Planning</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "planning" && (
                <div className="absolute left-0 mt-3 w-64 rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-200/70 text-xs">
                  <div className="flex flex-col gap-1 px-4 py-3">
                    <Link
                      href="/planning/householder"
                      className="hover:text-emerald-600"
                    >
                      Householder Planning Applications
                    </Link>
                    <Link
                      href="/planning/permitted-development"
                      className="hover:text-emerald-600"
                    >
                      Permitted Development Packs
                    </Link>
                    <Link
                      href="/planning/listed-buildings"
                      className="hover:text-emerald-600"
                    >
                      Heritage &amp; Listed Building Advice
                    </Link>
                    <Link
                      href="/planning/change-of-use"
                      className="hover:text-emerald-600"
                    >
                      Change of Use Applications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" className="hover:text-emerald-600">
              Contact
            </Link>

            {/* More */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("more")}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-emerald-600"
              >
                <span>More</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "more" && (
                <div className="absolute left-0 mt-3 w-52 rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-200/70 text-xs">
                  <div className="flex flex-col gap-1 px-4 py-3">
                    <Link href="/about" className="hover:text-emerald-600">
                      About WEDRAWPLANS
                    </Link>
                    <Link href="/faq" className="hover:text-emerald-600">
                      FAQ &amp; Process
                    </Link>
                    <Link href="/blog" className="hover:text-emerald-600">
                      Guides &amp; Articles
                    </Link>
                    <Link href="/for-agents" className="hover:text-emerald-600">
                      For Estate Agents
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Call to action */}
            <Link
              href="#lead-form"
              className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-1 text-xs md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm">
              <details>
                <summary className="cursor-pointer py-1 text-slate-800">
                  Local Designers
                </summary>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-600">
                  <Link href="/boroughs/barnet">Barnet</Link>
                  <Link href="/boroughs/enfield">Enfield</Link>
                  <Link href="/boroughs/haringey">Haringey</Link>
                  <Link href="/boroughs/islington">Islington</Link>
                  <Link href="/boroughs/redbridge">Redbridge</Link>
                  <Link href="/boroughs/croydon">Croydon</Link>
                  <Link href="/boroughs/all" className="text-emerald-600">
                    View all boroughs
                  </Link>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer py-1 text-slate-800">
                  Services
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-600">
                  <Link href="/services/extensions">Extension Plans</Link>
                  <Link href="/services/lofts">Loft Conversion Plans</Link>
                  <Link href="/services/garage">Garage Conversion Plans</Link>
                  <Link href="/services/2d-plans">2D Planning Drawings</Link>
                  <Link href="/services/3d">3D Visuals &amp; Views</Link>
                  <Link href="/services/building-regs">
                    Building Regulation Drawings
                  </Link>
                  <Link href="/services/commercial">Commercial &amp; Mixed Use</Link>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer py-1 text-slate-800">
                  Portfolio
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-600">
                  <Link href="/projects/residential">Residential Projects</Link>
                  <Link href="/projects/commercial">Commercial Projects</Link>
                  <Link href="/projects/planning-approvals">
                    Planning Approvals
                  </Link>
                </div>
              </details>

              <Link href="/price-guide" className="py-1 text-slate-800">
                Price Guide
              </Link>

              <details>
                <summary className="cursor-pointer py-1 text-slate-800">
                  Planning
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-600">
                  <Link href="/planning/householder">
                    Householder Applications
                  </Link>
                  <Link href="/planning/permitted-development">
                    Permitted Development
                  </Link>
                  <Link href="/planning/listed-buildings">
                    Heritage &amp; Listed
                  </Link>
                  <Link href="/planning/change-of-use">Change of Use</Link>
                </div>
              </details>

              <Link href="/contact" className="py-1 text-slate-800">
                Contact
              </Link>

              <details>
                <summary className="cursor-pointer py-1 text-slate-800">
                  More
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-600">
                  <Link href="/about">About WEDRAWPLANS</Link>
                  <Link href="/faq">FAQ &amp; Process</Link>
                  <Link href="/blog">Guides &amp; Articles</Link>
                  <Link href="/for-agents">For Estate Agents</Link>
                </div>
              </details>

              <Link
                href="#lead-form"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.10),_transparent_60%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-start md:pb-20 md:pt-16">
          {/* Text side */}
          <div className="flex-1">
            <p className="mb-3 inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-700">
              Planning and Building Regulation Drawings for London
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              WEDRAWPLANS — Your Architectural Drawing Services
            </h1>

            <h2 className="mt-4 text-sm font-medium text-slate-700 sm:text-base">
              Planning | Extensions | Loft Conversions | New Build | Building Regs — High
              Quality, Low Cost Plans
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Initial Survey Within 48 Hours — Serving All London Boroughs. We are
              architectural draftsmen focused purely on drawings: clear planning and
              building regulation packs that planners, builders and building control can
              work from without questions.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Get a Free Drawing Quote
              </Link>
              <Link
                href="/projects/planning-approvals"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
              >
                View Example Drawings
              </Link>
            </div>

            {/* Quick trust bar */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <div className="font-semibold text-slate-900">Drawings Only Focus</div>
                <div>
                  Plans for extensions, lofts and new homes prepared to current London
                  standards.
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  All 32 London Boroughs
                </div>
                <div>
                  Local planning experience across inner and outer London, including
                  conservation areas.
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Fixed Low Cost Fees</div>
                <div>
                  Transparent prices with clear drawing scopes so you know exactly what is
                  included.
                </div>
              </div>
            </div>

            {/* Who we serve */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                  Homeowners
                </div>
                <p>
                  Rear and side extensions, loft conversions, garage conversions and full
                  house refurb plans.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                  Developers &amp; Builders
                </div>
                <p>
                  Planning packs, building regulation drawings and coordination with your
                  structural engineer.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                  Estate Agents
                </div>
                <p>
                  Fast, clear drawings for marketing, lease plans and conversion studies
                  across London.
                </p>
              </div>
            </div>
          </div>

          {/* Lead form side */}
          <div id="lead-form" className="flex-1 md:max-w-md md:pt-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">
                Get a Free Drawing Quote
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Tell us about your project and we will come back with an outline scope and
                fee guide. No obligation.
              </p>

              <form
                className="mt-4 space-y-3 text-sm"
                action="mailto:info@wedrawplans.com"
                method="post"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-xs text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                    placeholder="+44..."
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="borough" className="text-xs text-slate-700">
                    London Borough
                  </label>
                  <input
                    id="borough"
                    name="borough"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                    placeholder="e.g. Redbridge, Barnet, Southwark"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="projectType" className="text-xs text-slate-700">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                  >
                    <option value="">Select</option>
                    <option value="extension">Rear / Side Extension</option>
                    <option value="loft">Loft Conversion</option>
                    <option value="new-build">New Build House / Flats</option>
                    <option value="garage">Garage Conversion</option>
                    <option value="internal">Internal Reconfiguration</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs text-slate-700">
                    Brief Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                    placeholder="Tell us about your extension, loft or new build..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-600"
                >
                  Send My Drawing Enquiry
                </button>

                <p className="mt-2 text-[10px] leading-snug text-slate-500">
                  By sending this form you agree for WEDRAWPLANS to contact you regarding
                  your project. We never share your details with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp / Call button – keeps what you had before in spirit */}
      <a
        href="https://wa.me/442036548508"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-300/60 hover:bg-emerald-600"
      >
        <span>WhatsApp / Call</span>
        <span className="hidden sm:inline">+44 20 3654 8508</span>
      </a>
    </main>
  );
};

export default HomePage;
