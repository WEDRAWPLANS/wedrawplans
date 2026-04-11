import React from "react";
import Head from "next/head";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20fixed%20quote%20for%20new%20build%20planning%20drawings%2C%20structural%20engineering%20and%20town%20planning%20support";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

export default function NewBuildPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "New Build Plans" });
  }

  function scrollToForm() {
    const el = document.getElementById("new-build-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function protectAsset(
    e:
      | React.MouseEvent<HTMLDivElement>
      | React.DragEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
  ) {
    e.preventDefault();
  }

  const pageTitle =
    "New Build Plans and Planning Drawings | Structural Engineering and Town Planning – WEDRAWPLANS";
  const pageDescription =
    "New build planning drawings and full design packages including structural engineering and town planning support. Single dwellings, replacement houses, backland plots, apartment schemes and small developments across London, Outer London and the M25.";

  const canonical = "https://www.wedrawplans.co.uk/new-build-plans";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: canonical,
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: ["London", "Outer London", "M25"],
    description:
      "New build planning drawings, Building Regulations packages, structural engineering coordination and town planning support for new developments."
  };

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "New Build Plans and Planning Drawings",
    provider: {
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      url: "https://www.wedrawplans.co.uk/"
    },
    areaServed: ["London", "Outer London", "M25"],
    serviceType: [
      "Planning drawings",
      "Building Regulations drawings",
      "Structural engineering coordination and calculations",
      "Town planning support",
      "Design and Access Statement support",
      "Planning statement support",
      "Pre application strategy",
      "Residential apartment scheme drawings",
      "Small development planning drawings"
    ],
    description:
      "Complete new build design service for planning and Building Control, including structural engineering coordination and town planning support for houses, apartment developments, infill sites and mixed-use schemes."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in a new build planning drawings package",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A typical package includes existing context drawings, proposed floor plans and elevations, sections, roof plans where needed, site layout plan, and presentation drawings to communicate massing and appearance clearly."
        }
      },
      {
        "@type": "Question",
        name: "Do you include structural engineering for new builds",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. New builds require structural design and calculations. We include structural engineering coordination so the drawings and calculations align for Building Control and construction."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide town planning services",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We provide town planning support including planning strategy, policy review, submission support, responses to officer questions, and amendments during determination where appropriate."
        }
      },
      {
        "@type": "Question",
        name: "Can you prepare drawings for apartment developments and small multi unit schemes",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare planning drawings and technical drawing packages for modern apartment schemes, mixed use developments, infill sites, conversions and other residential projects requiring a stronger planning and technical approach."
        }
      },
      {
        "@type": "Question",
        name: "Do you work outside London",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We cover London, Outer London and areas around the M25, including commuter locations and surrounding authorities."
        }
      },
      {
        "@type": "Question",
        name: "What causes new build applications to be refused",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Refusals often relate to scale, massing, design quality, amenity impacts, daylight and privacy, parking and highways, poor site layout, weak policy alignment, and unclear drawings. We design and present to reduce these risks."
        }
      },
      {
        "@type": "Question",
        name: "Do you help with pre application advice",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Pre application strategy can reduce risk on complex sites. We can advise what to present, how to frame the proposal, and how to improve planning probability."
        }
      },
      {
        "@type": "Question",
        name: "Can you produce Building Regulations drawings after planning",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. After planning, we produce Building Regulations drawings with coordinated structural information and practical build details to support Building Control and contractors."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="new build plans London, apartment planning drawings London, residential development drawings London, multi unit planning drawings, new build planning drawings, Building Regulations drawings, structural engineering coordination, town planning support"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/hyde-cgi-main.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO + FORM */}
        <section id="quote" className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
            <div>
              <div className="text-xs font-semibold tracking-[0.3em] text-rose-600">
                NEW BUILD DESIGN, PLANNING DRAWINGS, STRUCTURE AND PLANNING SUPPORT
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                New Build Plans, Planning Drawings, Structural Engineering and Town Planning Support
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
                WEDRAWPLANS provides a complete new build design service for single houses, replacement dwellings,
                apartment schemes, small developments and complex residential sites. We prepare planning drawings
                designed for council review, produce Building Regulations drawing packages, coordinate structural
                engineering and calculations, and support the planning process with practical town planning strategy.
              </p>

              <ul className="mt-6 space-y-2 text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Planning drawings built for approval and serious development review</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Structural engineering included through coordinated design and calculations</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Town planning support for houses, apartment developments and mixed use sites</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Building Regulations drawings and contractor ready technical details</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>London, Outer London and M25 coverage</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700"
                >
                  Get my fixed new build quote
                </button>

                <a
                  href={PHONE_LINK}
                  className="text-sm font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-white p-5">
                  <div className="text-sm font-semibold">Fastest way to start</div>
                  <div className="mt-1 text-sm text-slate-700">
                    WhatsApp the site postcode and a short description. If you have a sketch, site photos,
                    a planning history, or a land registry plan, attach it and we will advise next steps.
                  </div>
                  <div className="mt-3">
                    <a
                      href={WHATSAPP_LINK}
                      className="inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
                    >
                      WhatsApp us now
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border bg-slate-900 p-5 text-white">
                  <div className="text-sm font-extrabold">Premium new build planning support</div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-200">
                    A strong new build proposal wins when design quality, policy alignment, amenity standards,
                    access, servicing and technical coordination all read as one clear scheme. We build the page,
                    the drawings and the planning presentation to create that confidence.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="new-build-quote"
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-extrabold tracking-tight">
                Free fixed new build quote
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Share your site details and receive a clear fixed fee proposal covering drawings,
                planning support and coordinated structural engineering.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    name="phone"
                    placeholder="Telephone"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                </div>

                <input
                  name="postcode"
                  placeholder="Site postcode"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <select
                  name="schemeType"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select new build type
                  </option>
                  <option>Single dwelling new build house</option>
                  <option>Replacement dwelling</option>
                  <option>Backland plot new build</option>
                  <option>Side plot infill new build</option>
                  <option>Corner plot new build</option>
                  <option>Apartment scheme / multi unit development</option>
                  <option>Mixed use residential scheme</option>
                  <option>Other or not sure</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us your goals. Example: modern apartment building, six storeys, mixed use ground floor, tight urban site, planning drawings plus technical pack."
                  rows={6}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                >
                  Get my quote
                </button>

                <div className="text-xs text-slate-500">
                  Tip: include the site address and any known constraints such as conservation area, listed
                  context, highway access, tight boundaries, existing planning history or servicing restrictions.
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-wrap gap-2">
              {[
                ["Hyde case study", "#hyde-case-study"],
                ["Hyde drawing showcase", "#hyde-showcase"],
                ["New build types", "#types"],
                ["Planning drawings and scope", "#planning-scope"],
                ["Town planning services", "#town-planning"],
                ["Structural engineering included", "#structural"],
                ["Approval risks and refusals", "#refusals"],
                ["Technical packs and Building Regulations", "#technical"],
                ["Process and timeline", "#process"],
                ["Coverage London and Outer London", "#coverage"],
                ["FAQ", "#faq"]
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border bg-white px-4 py-2 text-xs font-semibold hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HYDE CGI HERO */}
        <section id="hyde-case-study" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
            <div className="text-center">
              <div className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold tracking-[0.2em] text-rose-700">
                APPROVED PROJECT SHOWCASE
              </div>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Project Colindale – The Hyde
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">
                New build planning drawings for multi storey modern apartments
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
              <div
                className="relative overflow-hidden bg-slate-100"
                onContextMenu={protectAsset}
                onDragStart={protectAsset}
                onTouchStart={protectAsset}
              >
                <div
                  aria-label="Project Colindale The Hyde approved CGI"
                  className="select-none bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/hyde-cgi-main.jpg')",
                    backgroundSize: "cover",
                    minHeight: "420px",
                    width: "100%",
                    WebkitUserSelect: "none",
                    userSelect: "none"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                    WEDRAWPLANS approved scheme showcase
                  </p>
                  <p className="mt-2 max-w-4xl text-xl font-semibold leading-tight sm:text-3xl">
                    Modern stepped apartment development with strong street presence, material clarity and planning-led design
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                "Approved scheme",
                "19 residential flats",
                "6 storeys",
                "40 sqm B1/commercial space"
              ].map((item) => (
                <div key={item} className="rounded-2xl border bg-slate-50 p-5 text-center text-sm font-extrabold text-slate-900">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700">
              1–5 Halt Parade, The Hyde, London NW9 5AH
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold tracking-tight">
                  Short project case study summary
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Project Colindale – The Hyde showcases WEDRAWPLANS capability in preparing planning-led
                  design work for a modern apartment development in a changing urban context. The approved
                  scheme at 1–5 Halt Parade, The Hyde, London NW9 5AH was designed as a six-storey building
                  providing 19 residential flats together with 40 sqm of B1/commercial space at ground floor
                  level.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  The design approach focused on creating a contemporary stepped form that responds to the
                  changing scale of the surrounding area, balancing the relationship between lower neighbouring
                  houses and taller adjacent buildings. The wider scope of design work addressed massing,
                  privacy, outlook, amenity, access, cycle provision, refuse strategy, landscaping,
                  sustainability and stronger overall planning presentation.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  This type of project demonstrates how WEDRAWPLANS can support not only single dwellings,
                  but also serious new build residential proposals for modern apartments, mixed use urban
                  schemes and other development-led projects where strong design communication and planning
                  clarity are essential.
                </p>
              </div>

              <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm">
                <h3 className="text-lg font-extrabold tracking-tight">
                  What this project helps prove
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  <li>Planning drawings for modern apartment developments</li>
                  <li>Strong CGI and visual communication for serious urban schemes</li>
                  <li>Confident handling of height, massing and context response</li>
                  <li>Capability across mixed use ground floor and residential upper levels</li>
                  <li>Experience presenting schemes with stronger planning narrative and design depth</li>
                  <li>Premium WEDRAWPLANS positioning for larger residential development leads</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={scrollToForm}
                    className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                  >
                    Get my fixed quote
                  </button>
                  <a
                    href={PHONE_LINK}
                    className="rounded-full border border-white px-5 py-2 text-sm font-extrabold text-white hover:bg-white hover:text-slate-900"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HYDE REVOLVER */}
        <section id="hyde-showcase" className="border-y border-slate-200 bg-[#fdf8f3]">
          <HeroSlider
            slides={[
              {
                src: "/images/hyde-slide-1.jpg",
                alt: "Project Colindale – The Hyde showcase canvas 1"
              },
              {
                src: "/images/hyde-slide-2.jpg",
                alt: "Project Colindale – The Hyde showcase canvas 2"
              },
              {
                src: "/images/hyde-slide-3.jpg",
                alt: "Project Colindale – The Hyde showcase canvas 3"
              },
              {
                src: "/images/hyde-slide-4.jpg",
                alt: "Project Colindale – The Hyde showcase canvas 4"
              },
              {
                src: "/images/hyde-slide-5.jpg",
                alt: "Project Colindale – The Hyde showcase canvas 5"
              }
            ]}
          />
        </section>

        {/* WEDRAWPLANS STRENGTH */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Why this type of project matters for new build leads
            </h2>
            <p className="mt-3 max-w-4xl text-slate-700">
              A page like this does more than describe a service. It shows that WEDRAWPLANS can handle
              premium architectural drawing services for apartment developments, new build residential
              schemes, mixed use proposals and more ambitious planning applications where the design must
              look credible, modern, coordinated and ready for serious review.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border p-6">
                <div className="text-sm font-extrabold">Planning-led design strength</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  We build schemes to read clearly in planning terms, with strong massing, context response,
                  amenity logic, access planning and urban presentation.
                </div>
              </div>
              <div className="rounded-2xl border p-6">
                <div className="text-sm font-extrabold">Premium visual communication</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  CGI views, drawing sheets, sections, elevations and image-led showcase content help
                  position WEDRAWPLANS as a serious design partner, not just a drafting service.
                </div>
              </div>
              <div className="rounded-2xl border p-6">
                <div className="text-sm font-extrabold">Technical progression after planning</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Once planning is secured, we can move the scheme into Building Regulations drawings,
                  structural coordination and contractor-ready technical development.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section id="types" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              New build projects we design
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              New build planning is not one template. Every site has policy, context, access, amenity,
              servicing and neighbour impacts that shape what is realistic. We design proposals that look
              credible to planning officers, meet key standards, and remain buildable when you get to
              construction.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Single dwelling new build houses",
                  d:
                    "Ideal for landowners and homeowners wanting a high quality new build. We design the layout, massing, elevations and site plan to meet policy and amenity expectations, then support the application with clear drawings and planning strategy."
                },
                {
                  t: "Replacement dwellings",
                  d:
                    "Replacement houses often attract strong planning scrutiny on scale, character, and street scene. We design to justify the replacement and present it in a way officers can assess quickly."
                },
                {
                  t: "Backland plots and garden developments",
                  d:
                    "Backland sites require careful access, privacy, amenity space, refuse strategy, and a convincing relationship to neighbours. We focus on layout clarity, separation distances, and a defensible planning narrative."
                },
                {
                  t: "Side plot infill and corner plots",
                  d:
                    "Infill schemes are judged heavily on rhythm, materials, plot width, and impact on neighbouring windows and gardens. We design to fit the street and reduce objections."
                },
                {
                  t: "Apartment schemes and multi unit residential projects",
                  d:
                    "For apartment developments and small multi-unit schemes, planning assessment expands into internal standards, refuse and cycle storage, servicing, amenity and stronger street presentation. We coordinate drawings and strategy to reduce delays and avoid redesign."
                },
                {
                  t: "Complex sites with constraints",
                  d:
                    "Conservation settings, tight boundaries, mixed-use edges, level changes and access limitations need a stronger strategy. We can advise whether pre application work is worth it and what evidence will strengthen the proposal."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={scrollToForm}
                      className="rounded-full bg-sky-600 px-5 py-2 text-xs font-bold text-white hover:bg-sky-700"
                    >
                      Get a fixed quote
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold">
                Who this page is built for
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                Homeowners building a single dwelling, landowners unlocking a plot, developers delivering
                a small scheme, investors seeking a planning-led design package, and clients wanting a premium
                architectural drawing service that can move from planning concept into technical delivery.
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING SCOPE */}
        <section id="planning-scope" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Planning drawings for new builds, what we produce and why it wins approvals
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              New build planning decisions are heavily influenced by how clearly the proposal is presented.
              Strong drawings reduce officer uncertainty. When the scheme reads clean, policy aligned, modern
              and buildable, planning review becomes easier.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Existing context and site understanding",
                  d:
                    "We capture what exists and what surrounds the site so the proposal has a clear baseline. This includes existing layout where relevant and a clear site relationship to neighbours and street."
                },
                {
                  t: "Proposed floor plans and layouts",
                  d:
                    "We produce clear proposed layouts that demonstrate practical rooms, circulation, access, residential quality and amenity. Layout clarity supports planning and later supports Building Control and build coordination."
                },
                {
                  t: "Proposed elevations built for officer review",
                  d:
                    "Elevations are where many new build applications are won or lost. We present proportion, materials logic, window placement and massing so officers can assess character and impact quickly."
                },
                {
                  t: "Sections to communicate height and massing",
                  d:
                    "Sections clarify levels, ridge heights, parapets, step-backs and the relationship to neighbours. This reduces disputes about scale and supports officer confidence."
                },
                {
                  t: "Site layout plan and servicing logic",
                  d:
                    "We show access, parking where applicable, refuse location, cycle storage, servicing and amenity arrangements. This removes common reasons for refusal and condition delays."
                },
                {
                  t: "Planning ready presentation structure",
                  d:
                    "We keep drawings consistent, visually strong and legible so assessment is faster. Better presentation reduces clarification requests and helps the whole proposal read as more certain."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border bg-white p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOWN PLANNING */}
        <section id="town-planning" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Town planning services for new builds, real support not generic advice
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              New build outcomes are shaped by policy and officer judgement. Town planning support helps
              you choose the right application approach, anticipate objections, and respond effectively
              during determination. We provide planning support that connects directly to the drawings.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Planning strategy and feasibility",
                  d:
                    "We review site constraints, likely policy issues, and design levers. The goal is to identify a proposal that is defensible, not just optimistic."
                },
                {
                  t: "Pre application guidance when it makes sense",
                  d:
                    "On sensitive sites, pre application advice can reduce risk. We advise what to submit, what to test, and how to interpret the response."
                },
                {
                  t: "Submission support and coordination",
                  d:
                    "We help ensure the drawing pack and supporting information are consistent, clear and ready for submission. This reduces invalidation risk."
                },
                {
                  t: "Officer questions and amendments during determination",
                  d:
                    "If officers request changes, we help develop practical amendments and updated drawings to keep the application moving."
                },
                {
                  t: "Design statements and planning narrative support",
                  d:
                    "Where needed, we support Design and Access Statements, planning narratives and project summaries that explain the proposal clearly and reduce refusal triggers."
                },
                {
                  t: "Objection risk reduction",
                  d:
                    "We design and present the scheme to reduce neighbour impact issues that often fuel objections: privacy, scale, outlook, access, noise and visual dominance."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRUCTURAL */}
        <section id="structural" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Structural engineering included through coordinated design and calculations
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              New builds require structural design from early stages. Structure affects layout, spans,
              openings, foundations, roof design and build costs. We include structural engineering
              coordination so your planning design transitions cleanly into Building Control and construction.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Foundations and ground conditions logic",
                  d:
                    "We coordinate structural approach with the likely ground scenario and site constraints. Foundation selection impacts programme and cost. The goal is a buildable design path, not guesses."
                },
                {
                  t: "Load paths, beams and openings",
                  d:
                    "We coordinate beams, bearings and structural logic around key openings, large glazing and layout requirements. This reduces redesign and supports a cleaner Building Control submission."
                },
                {
                  t: "Roof structure and upper level forms",
                  d:
                    "Roof design is both structural and architectural. We coordinate roof structure, spans and load transfer so it remains buildable and consistent with elevations and sections."
                },
                {
                  t: "Buildability and contractor clarity",
                  d:
                    "Structural information is coordinated with drawings so contractors have clear guidance. This reduces on-site uncertainty and helps pricing and sequencing."
                },
                {
                  t: "Structural calculations suitable for Building Control",
                  d:
                    "Calculations are coordinated with the drawing set. This alignment is what Building Control expects and what contractors need to progress with confidence."
                },
                {
                  t: "Coordination that reduces risk",
                  d:
                    "When structure is considered early, planning layouts do not collapse later. That is how projects stay stronger, cleaner and more controlled."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border bg-white p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REFUSALS */}
        <section id="refusals" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Why new build applications get refused and how we reduce the risk
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              New build refusals often follow predictable patterns. The strongest projects do not just look
              good, they present compliance clearly and remove uncertainty. Below are the major refusal
              triggers we design against.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Scale, massing and overdevelopment",
                  d:
                    "If a scheme reads too large for the plot or dominant compared to neighbours, refusal risk rises. We balance floorspace with proportions and setbacks that read credible."
                },
                {
                  t: "Poor design quality or weak street relationship",
                  d:
                    "Officers assess character, rhythm, material quality and urban fit. We design elevations with proper proportion and a clear design story."
                },
                {
                  t: "Amenity impact: privacy, outlook and daylight",
                  d:
                    "Window placement, separation distances, balconies and massing can harm neighbour amenity. We design for defensible privacy and clearer justification."
                },
                {
                  t: "Parking, access, servicing and highways concerns",
                  d:
                    "Many schemes fail on access geometry, visibility, servicing and parking assumptions. We present clearer layout and movement logic."
                },
                {
                  t: "Confusing drawings or inconsistent information",
                  d:
                    "If officers cannot quickly interpret the proposal, risk rises. We keep drawings consistent, legible and aligned across plans, elevations, sections and visuals."
                },
                {
                  t: "Weak planning narrative and policy alignment",
                  d:
                    "A scheme can be acceptable but still refused if it is not framed properly. Town planning support helps present the logic clearly and professionally."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL */}
        <section id="technical" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Technical packs, Building Regulations drawings, and what you need after planning
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Planning approval is only the first milestone. To build, you need coordinated technical
              drawings for Building Control and contractor clarity. We can produce Building Regulations
              packs that turn planning intent into buildable detail.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Building Regulations drawing package",
                  d:
                    "A technical drawing set that supports Building Control approval, including plans, sections, key construction build ups and compliance notes."
                },
                {
                  t: "Structural information aligned with drawings",
                  d:
                    "Structural calculations and coordinated beam and load logic that match the drawings. This is essential for a smooth Building Control process."
                },
                {
                  t: "Fire safety and life safety intent",
                  d:
                    "Fire strategy intent is shown through layouts, protected routes and key compliance notes appropriate to the project scale."
                },
                {
                  t: "Thermal and fabric performance intent",
                  d:
                    "Insulation build ups and junction intent are coordinated so the design can comply and be built without guesswork."
                },
                {
                  t: "Drainage and practical build coordination",
                  d:
                    "We coordinate typical requirements such as drainage intent and practical routing considerations so contractors do not face avoidable surprises."
                },
                {
                  t: "Contractor ready clarity",
                  d:
                    "The goal is a set of drawings that a contractor can price and build from with fewer questions and fewer changes."
                }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border bg-white p-6">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Our new build process and timeline
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              New builds move best when the steps are clear. We keep the process structured: understand the
              site, design a scheme that is policy aligned, prepare a strong submission pack, then coordinate
              technical drawings after planning.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  n: "1",
                  t: "Site review, feasibility and planning strategy",
                  d:
                    "We review the site, constraints and goals. We advise the most realistic planning route and what information will strengthen the proposal."
                },
                {
                  n: "2",
                  t: "Concept design and pre submission refinement",
                  d:
                    "We design the scheme with massing, layout, amenity, street relationship and planning presentation in mind. Refinement happens before submission so the final pack is stronger."
                },
                {
                  n: "3",
                  t: "Submission pack, coordination and next stage technical",
                  d:
                    "We prepare the planning pack, support officer questions, and after approval we move into Building Regulations drawings and structural coordination."
                }
              ].map((x) => (
                <div key={x.n} className="rounded-2xl border p-6">
                  <div className="text-xs font-bold text-slate-500">STEP {x.n}</div>
                  <div className="mt-1 text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="coverage" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Coverage: London, Outer London and the M25
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Our service is not limited to Central London. We cover all London boroughs, Outer London
              locations and surrounding areas around the M25. If your site is in a commuter area near London,
              we can still support your new build drawings, planning strategy and coordinated structural work.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6">
                <div className="text-sm font-extrabold">London borough coverage</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Full coverage across all boroughs. We also create borough-specific pages to support local
                  relevance and to make it easy for clients to find us in search.
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-6">
                <div className="text-sm font-extrabold">Outer London and surrounding authorities</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  We support projects around the M25 and in nearby areas where clients need a strong design
                  package and planning support. If you are not sure, submit your postcode and we will confirm.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS + CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="rounded-3xl border bg-slate-900 p-8 text-white">
              <div className="max-w-4xl">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Serious new build support
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Planning drawings, Building Regulations, structure and planning strategy under one roof
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                  Whether you are planning a single dwelling, replacement house, infill scheme, backland site,
                  apartment development or mixed use residential project, WEDRAWPLANS can help you move from
                  concept to planning submission and then into technical delivery with clearer coordination
                  and stronger presentation.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                  <div className="text-sm font-extrabold">For homeowners and landowners</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-300">
                    Fixed fee support for new build houses, side plots, replacement dwellings and difficult
                    sites needing a more strategic planning approach.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                  <div className="text-sm font-extrabold">For developers and investors</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-300">
                    Better presentation, stronger design communication and more coordinated progression from
                    planning into Building Regulations and construction detail.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                  <div className="text-sm font-extrabold">For faster next steps</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-300">
                    Send the site postcode, a short summary and any sketch or site photos. We will advise
                    the likely route and issue a clear fixed quote.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                >
                  Get my fixed quote
                </button>
                <a
                  href={PHONE_LINK}
                  className="rounded-full border border-white px-6 py-3 text-sm font-extrabold text-white hover:bg-white hover:text-slate-900"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white hover:bg-emerald-600"
                >
                  WhatsApp us
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold text-slate-900">
                Explore related WEDRAWPLANS services
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/extension-plans" className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100">
                  House Extension Plans
                </Link>
                <Link href="/loft-conversion-plans" className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100">
                  Loft Conversion Plans
                </Link>
                <Link href="/building-regulation-drawings" className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100">
                  Building Regulation Drawings
                </Link>
                <Link href="/areas" className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100">
                  London Borough Coverage
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              New build plans FAQ
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  q: "Do you do planning drawings only, or full packages",
                  a:
                    "We can do planning drawings only, or full packages including Building Regulations drawings, coordinated structural engineering and calculations, plus town planning support depending on your needs."
                },
                {
                  q: "Do you include structural engineering",
                  a:
                    "Yes. We include structural engineering coordination so the calculations and structural intent align with the drawings for Building Control and construction."
                },
                {
                  q: "Do you provide town planning services",
                  a:
                    "Yes. We support planning strategy, policy alignment, submission coordination and officer responses when amendments are needed."
                },
                {
                  q: "Can you help with apartment schemes and multi unit developments",
                  a:
                    "Yes. We prepare planning drawings and technical drawing packages for modern apartment schemes, mixed use projects, infill sites and other residential developments requiring a more advanced planning and design approach."
                },
                {
                  q: "Do you work in Outer London and around the M25",
                  a:
                    "Yes. We cover London, Outer London and M25 areas. Submit your postcode and we will confirm the best approach."
                },
                {
                  q: "How do I get started",
                  a:
                    "Use the form, call, or WhatsApp. Provide a site postcode, what you want to build and any constraints. We will advise next steps and issue a fixed quote."
                },
                {
                  q: "What is the fastest way to get a quote",
                  a:
                    "WhatsApp is fastest. Send the site postcode, a short description, and photos of access and the plot. We can reply quickly with next steps."
                },
                {
                  q: "Can you produce Building Regulations drawings after planning",
                  a:
                    "Yes. After planning we can produce Building Regulations drawings with coordinated structural information and practical detail for Building Control."
                }
              ].map((x) => (
                <div key={x.q} className="rounded-2xl border p-6">
                  <div className="text-sm font-extrabold">{x.q}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER STYLE CTA */}
        <section className="border-t border-slate-800 bg-[#20243b]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
              <div className="text-center lg:text-left">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                  WEDRAWPLANS
                </div>
                <p className="mt-4 max-w-md text-[13px] leading-7 text-white/80">
                  Premium architectural drawing services for single new build houses, apartment developments,
                  planning applications, Building Regulations and technical drawing packages across London and
                  the surrounding M25 area.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] shadow-sm hover:bg-slate-100"
                  >
                    Call
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                  >
                    WhatsApp
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
                    New Build Plans
                  </Link>
                  <Link href="/building-regulation-drawings" className="block hover:text-white">
                    Technical &amp; Support
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Useful links</div>
                <div className="mt-3 space-y-2 text-[13px] text-white/65">
                  <Link href="/areas" className="block hover:text-white">
                    Areas We Cover
                  </Link>
                  <Link href="/building-regulation-drawings" className="block hover:text-white">
                    Building Regulation Drawings
                  </Link>
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
                  <a href={PHONE_LINK} className="block hover:text-white">
                    {PHONE_DISPLAY}
                  </a>
                  <a href="mailto:info@wedrawplans.com" className="block hover:text-white">
                    info@wedrawplans.com
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
          </div>
        </section>

        <style jsx global>{`
          html {
            -webkit-touch-callout: none;
          }

          body {
            -webkit-user-select: text;
            user-select: text;
          }
        `}</style>
      </main>
    </>
  );
}
