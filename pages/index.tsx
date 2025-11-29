import React, { useState } from "react";
import Link from "next/link";

type MenuKey = "local" | "services" | "portfolio" | "planning" | "more" | null;

const HomePage: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (key: MenuKey) => {
    setOpenMenu((current) => (current === key ? null : key));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HEADER / NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400 text-slate-950 font-extrabold text-lg">
              WD
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.18em] uppercase">
                WEDRAWPLANS
              </span>
              <span className="text-xs text-slate-400">
                Architectural Drawing Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {/* Local Designers */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("local")}
                className="flex items-center gap-1 hover:text-emerald-400"
              >
                <span>Local Designers</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "local" && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-slate-800 bg-slate-900/95 shadow-lg">
                  <div className="px-3 py-2 text-[11px] uppercase tracking-wide text-slate-400">
                    London Boroughs
                  </div>
                  <div className="grid grid-cols-2 gap-1 px-3 pb-3 text-xs">
                    <Link href="/boroughs/barnet" className="hover:text-emerald-400">
                      Barnet
                    </Link>
                    <Link href="/boroughs/enfield" className="hover:text-emerald-400">
                      Enfield
                    </Link>
                    <Link href="/boroughs/haringey" className="hover:text-emerald-400">
                      Haringey
                    </Link>
                    <Link href="/boroughs/islington" className="hover:text-emerald-400">
                      Islington
                    </Link>
                    <Link href="/boroughs/redbridge" className="hover:text-emerald-400">
                      Redbridge
                    </Link>
                    <Link href="/boroughs/bromley" className="hover:text-emerald-400">
                      Bromley
                    </Link>
                    <Link href="/boroughs/croydon" className="hover:text-emerald-400">
                      Croydon
                    </Link>
                    <Link href="/boroughs/tower-hamlets" className="hover:text-emerald-400">
                      Tower Hamlets
                    </Link>
                    <Link href="/boroughs/lambeth" className="hover:text-emerald-400">
                      Lambeth
                    </Link>
                    <Link
                      href="/boroughs/southwark"
                      className="hover:text-emerald-400"
                    >
                      Southwark
                    </Link>
                    <Link
                      href="/boroughs/waltham-forest"
                      className="hover:text-emerald-400"
                    >
                      Waltham Forest
                    </Link>
                    <Link
                      href="/boroughs/all"
                      className="font-semibold text-emerald-400"
                    >
                      View all boroughs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("services")}
                className="flex items-center gap-1 hover:text-emerald-400"
              >
                <span>Services</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "services" && (
                <div className="absolute right-0 mt-2 w-64 rounded-md border border-slate-800 bg-slate-900/95 shadow-lg">
                  <div className="px-3 py-2 text-[11px] uppercase tracking-wide text-slate-400">
                    Residential Plans
                  </div>
                  <div className="flex flex-col gap-1 px-3 pb-2 text-xs">
                    <Link href="/services/extensions" className="hover:text-emerald-400">
                      Extension Plans
                    </Link>
                    <Link href="/services/lofts" className="hover:text-emerald-400">
                      Loft Conversion Plans
                    </Link>
                    <Link href="/services/garage" className="hover:text-emerald-400">
                      Garage Conversion Plans
                    </Link>
                    <Link href="/services/2d-plans" className="hover:text-emerald-400">
                      2D Planning Drawings
                    </Link>
                    <Link href="/services/3d" className="hover:text-emerald-400">
                      3D Visuals and Views
                    </Link>
                  </div>
                  <div className="border-t border-slate-800 px-3 py-2 text-[11px] uppercase tracking-wide text-slate-400">
                    Compliance and Technical
                  </div>
                  <div className="flex flex-col gap-1 px-3 pb-3 text-xs">
                    <Link
                      href="/services/building-regs"
                      className="hover:text-emerald-400"
                    >
                      Building Regulation Drawings
                    </Link>
                    <Link
                      href="/services/structural"
                      className="hover:text-emerald-400"
                    >
                      Structural Coordination
                    </Link>
                    <Link
                      href="/services/commercial"
                      className="hover:text-emerald-400"
                    >
                      Commercial and Mixed Use
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio / Projects */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("portfolio")}
                className="flex items-center gap-1 hover:text-emerald-400"
              >
                <span>Portfolio</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "portfolio" && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-slate-800 bg-slate-900/95 shadow-lg text-xs">
                  <div className="flex flex-col gap-1 px-3 py-3">
                    <Link
                      href="/projects/residential"
                      className="hover:text-emerald-400"
                    >
                      Residential Projects
                    </Link>
                    <Link
                      href="/projects/commercial"
                      className="hover:text-emerald-400"
                    >
                      Commercial Projects
                    </Link>
                    <Link
                      href="/projects/planning-approvals"
                      className="hover:text-emerald-400"
                    >
                      Planning Approvals
                    </Link>
                    <Link
                      href="/projects/before-after"
                      className="hover:text-emerald-400"
                    >
                      Before and After Drawings
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Price Guide */}
            <Link href="/price-guide" className="hover:text-emerald-400">
              Price Guide
            </Link>

            {/* Planning */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("planning")}
                className="flex items-center gap-1 hover:text-emerald-400"
              >
                <span>Planning</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "planning" && (
                <div className="absolute right-0 mt-2 w-60 rounded-md border border-slate-800 bg-slate-900/95 shadow-lg text-xs">
                  <div className="flex flex-col gap-1 px-3 py-3">
                    <Link
                      href="/planning/householder"
                      className="hover:text-emerald-400"
                    >
                      Householder Planning Applications
                    </Link>
                    <Link
                      href="/planning/permitted-development"
                      className="hover:text-emerald-400"
                    >
                      Permitted Development Packs
                    </Link>
                    <Link
                      href="/planning/listed-buildings"
                      className="hover:text-emerald-400"
                    >
                      Heritage and Listed Building Advice
                    </Link>
                    <Link
                      href="/planning/change-of-use"
                      className="hover:text-emerald-400"
                    >
                      Change of Use Applications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" className="hover:text-emerald-400">
              Contact
            </Link>

            {/* More */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("more")}
                className="flex items-center gap-1 hover:text-emerald-400"
              >
                <span>More</span>
                <span className="text-xs">▼</span>
              </button>
              {openMenu === "more" && (
                <div className="absolute right-0 mt-2 w-52 rounded-md border border-slate-800 bg-slate-900/95 shadow-lg text-xs">
                  <div className="flex flex-col gap-1 px-3 py-3">
                    <Link href="/about" className="hover:text-emerald-400">
                      About WEDRAWPLANS
                    </Link>
                    <Link href="/faq" className="hover:text-emerald-400">
                      FAQ and Process
                    </Link>
                    <Link href="/blog" className="hover:text-emerald-400">
                      Guides and Articles
                    </Link>
                    <Link href="/for-agents" className="hover:text-emerald-400">
                      For Estate Agents
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Call to action */}
            <Link
              href="/contact"
              className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-950 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm">
              <details>
                <summary className="cursor-pointer py-1 text-slate-100">
                  Local Designers
                </summary>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-300">
                  <Link href="/boroughs/barnet">Barnet</Link>
                  <Link href="/boroughs/enfield">Enfield</Link>
                  <Link href="/boroughs/haringey">Haringey</Link>
                  <Link href="/boroughs/islington">Islington</Link>
                  <Link href="/boroughs/redbridge">Redbridge</Link>
                  <Link href="/boroughs/croydon">Croydon</Link>
                  <Link href="/boroughs/all" className="text-emerald-400">
                    View all boroughs
                  </Link>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer py-1 text-slate-100">
                  Services
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-300">
                  <Link href="/services/extensions">Extension Plans</Link>
                  <Link href="/services/lofts">Loft Conversion Plans</Link>
                  <Link href="/services/garage">Garage Conversion Plans</Link>
                  <Link href="/services/2d-plans">2D Planning Drawings</Link>
                  <Link href="/services/3d">3D Visuals and Views</Link>
                  <Link href="/services/building-regs">
                    Building Regulation Drawings
                  </Link>
                  <Link href="/services/commercial">Commercial and Mixed Use</Link>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer py-1 text-slate-100">
                  Portfolio
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-300">
                  <Link href="/projects/residential">Residential Projects</Link>
                  <Link href="/projects/commercial">Commercial Projects</Link>
                  <Link href="/projects/planning-approvals">
                    Planning Approvals
                  </Link>
                </div>
              </details>

              <Link href="/price-guide" className="py-1 text-slate-100">
                Price Guide
              </Link>

              <details>
                <summary className="cursor-pointer py-1 text-slate-100">
                  Planning
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-300">
                  <Link href="/planning/householder">
                    Householder Applications
                  </Link>
                  <Link href="/planning/permitted-development">
                    Permitted Development
                  </Link>
                  <Link href="/planning/listed-buildings">
                    Heritage and Listed
                  </Link>
                  <Link href="/planning/change-of-use">Change of Use</Link>
                </div>
              </details>

              <Link href="/contact" className="py-1 text-slate-100">
                Contact
              </Link>

              <details>
                <summary className="cursor-pointer py-1 text-slate-100">
                  More
                </summary>
                <div className="mt-1 flex flex-col gap-1 text-xs text-slate-300">
                  <Link href="/about">About WEDRAWPLANS</Link>
                  <Link href="/faq">FAQ and Process</Link>
                  <Link href="/blog">Guides and Articles</Link>
                  <Link href="/for-agents">For Estate Agents</Link>
                </div>
              </details>

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* background effect */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),_transparent_55%),radial-gradient(circle_at_left,_rgba(56,189,248,0.12),_transparent_55%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-start md:pb-20 md:pt-16">
          {/* Text side */}
          <div className="flex-1">
            <p className="mb-3 inline-flex items-center rounded-full border border-emerald-400/40 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-300">
              Planning and Building Regulation Drawings for London
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              WEDRAWPLANS — Your Architectural Drawing Services
            </h1>

            <h2 className="mt-4 text-sm font-medium text-slate-200 sm:text-base">
              Planning | Extensions | Loft Conversions | New Build | Building Regs — High
              Quality, Low Cost Plans
            </h2>

            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Initial Survey Within 48 Hours — Serving All London Boroughs. We focus on
              drawings only so you receive clear, accurate plans that planners, builders
              and building control can trust.
            </p>

            {/* Call to actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Get a Free Drawing Quote
              </Link>
              <Link
                href="/projects/planning-approvals"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300"
              >
                View Example Drawings
              </Link>
            </div>

            {/* Quick trust bar */}
            <div className="mt-6 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              <div>
                <div className="font-semibold text-slate-100">Drawings Only Focus</div>
                <div>
                  Plans for extensions, lofts and new homes prepared to current London
                  standards.
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-100">
                  All 32 London Boroughs
                </div>
                <div>
                  Local planning experience across inner and outer London including
                  conservation areas.
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-100">Fixed Low Cost Fees</div>
                <div>
                  Transparent prices with clear drawing scopes so you know exactly what is
                  included.
                </div>
              </div>
            </div>

            {/* Secondary mini-section: who we serve */}
            <div className="mt-6 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  Homeowners
                </div>
                <p>
                  Rear and side extensions, loft conversions, garage conversions and full
                  house refurb plans.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  Developers &amp; Builders
                </div>
                <p>
                  Planning packs, building regulation drawings and coordination with your
                  structural engineer.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
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
          <div
            id="lead-form"
            className="flex-1 md:max-w-md md:pt-3"
          >
            <div className="rounded-2xl border border-emerald-400/40 bg-slate-900/80 p-5 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
              <h3 className="text-base font-semibold text-slate-50">
                Get a Free Drawing Quote
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Tell us about your project and we will come back with an outline scope and
                fee guide. No obligation.
              </p>

              <form
                className="mt-4 space-y-3 text-sm"
                action="mailto:info@wedrawplans.com"
                method="post"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-xs text-slate-200">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="+44..."
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="borough" className="text-xs text-slate-200">
                    London Borough
                  </label>
                  <input
                    id="borough"
                    name="borough"
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="e.g. Redbridge, Barnet, Southwark"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="projectType" className="text-xs text-slate-200">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
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
                  <label htmlFor="message" className="text-xs text-slate-200">
                    Brief Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="Tell us about your extension, loft or new build..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-emerald-400 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-emerald-300"
                >
                  Send My Drawing Enquiry
                </button>

                <p className="mt-2 text-[10px] leading-snug text-slate-400">
                  By sending this form you agree for WEDRAWPLANS to contact you regarding
                  your project. We never share your details with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
