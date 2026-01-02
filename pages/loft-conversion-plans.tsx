import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20quote%20for%20loft%20conversion%20plans%20and%20structural%20engineering";

export default function LoftConversionPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Loft Conversion Plans" });
  }

  function scrollToForm() {
    const el = document.getElementById("loft-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const pageTitle =
    "Loft Conversion Plans London | Dormer, Mansard, Hip to Gable – WEDRAWPLANS";
  const pageDescription =
    "Loft conversion plans and drawings in London and the M25 area with fixed fees. Dormer, mansard, hip to gable and rooflight lofts. Planning and Building Regulations packs. Structural engineer included through coordinated structural design and calculations.";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/loft-conversion-plans",
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
    areaServed: "Greater London and M25",
    description:
      "Loft conversion plans and structural design service in London and the M25 area. Planning drawings and Building Regulations packs for dormer, mansard, hip to gable and rooflight loft conversions."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a loft conversion",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Many loft conversions can be permitted development, but this depends on the property type, volume limits, roof form, conservation status and prior permissions. We confirm the correct route and prepare drawings accordingly."
        }
      },
      {
        "@type": "Question",
        name: "What drawings are needed for a loft conversion",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most loft conversions need existing and proposed plans and elevations for planning where required. For Building Regulations, drawings typically include detailed floor plans, sections, roof structure notes, insulation build ups, fire safety layout, and structural information coordinated with an engineer."
        }
      },
      {
        "@type": "Question",
        name: "Is a structural engineer required for a loft conversion",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, structural calculations are normally required because loft conversions change loads and require new steel beams, floor strengthening and sometimes roof alterations. We include structural engineer coordination so the design and calculations align with the drawings."
        }
      },
      {
        "@type": "Question",
        name: "How much do loft conversion drawings cost",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Fees depend on the loft type and complexity. We provide clear fixed fees and can supply planning packs, Building Regulations packs, and coordinated structural design and calculations as required."
        }
      },
      {
        "@type": "Question",
        name: "Which loft conversion type is best for my house",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Victorian and Edwardian terraces often suit dormer or mansard conversions, while semis commonly suit hip to gable plus rear dormer. Rooflight conversions can be suitable where the roof has enough headroom and planning constraints are tighter. We advise based on your address and roof form."
        }
      },
      {
        "@type": "Question",
        name: "Do you cover all London boroughs",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We cover all London boroughs and areas around the M25 with survey where needed, drawings, planning support and Building Regulations packs."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/loft-conversion-plans"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO + FORM */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
            <div>
              <div className="text-xs font-semibold tracking-[0.3em] text-rose-600">
                LOFT CONVERSION PLANS AND STRUCTURAL DESIGN
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Loft Conversion Plans in London at Clear Fixed Fees
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
                WEDRAWPLANS produces professional loft conversion drawings for
                planning and Building Regulations. We design rooflight lofts,
                rear dormers, mansards and hip to gable loft conversions with a
                clear scope, strong compliance logic, and coordinated structural
                engineering so the drawings and calculations match.
              </p>

              <ul className="mt-6 space-y-2 text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Fixed fee quote with clear scope</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Planning and Building Regulations drawing packs</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Structural engineer included through coordinated design and calculations</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>All London boroughs and M25 covered</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>Fast response, phone and WhatsApp support</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700"
                >
                  Get my fixed quote
                </button>

                <a
                  href={PHONE_LINK}
                  className="text-sm font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-6 rounded-2xl border bg-white p-5">
                <div className="text-sm font-semibold">
                  Roof works and loft conversion questions
                </div>
                <div className="mt-1 text-sm text-slate-700">
                  Use WhatsApp for fast replies and attach roof photos if you
                  want. We will tell you the best loft type and the likely
                  planning route.
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

              <div className="mt-6 rounded-2xl border bg-slate-900 p-6 text-white">
                <div className="text-sm font-extrabold">
                  What makes a loft conversion succeed
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-200">
                  Success is not only about adding space. Councils and Building
                  Control assess headroom, stairs, fire safety, structure,
                  insulation, dormer appearance, and neighbour impact. Our packs
                  are designed to communicate compliance clearly so approval and
                  build stages move smoothly.
                </div>
              </div>
            </div>

            <div
              id="loft-quote"
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-extrabold tracking-tight">
                Free fixed loft quote
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Share a few details and receive a clear fixed fee for loft
                conversion drawings and structural engineering coordination.
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
                  placeholder="Postcode"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <select
                  name="loftType"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select loft conversion type
                  </option>
                  <option>Rooflight loft conversion (Velux)</option>
                  <option>Rear dormer loft conversion</option>
                  <option>Mansard loft conversion</option>
                  <option>Hip to gable loft conversion</option>
                  <option>Hip to gable + rear dormer</option>
                  <option>L-shaped dormer</option>
                  <option>Other / not sure</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us briefly about your loft project. Example: rear dormer with ensuite, new stairs above existing, rooflight to front."
                  rows={5}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                >
                  Get my quote
                </button>

                <div className="text-xs text-slate-500">
                  Popular: rear dormers, hip to gable conversions, mansards and
                  rooflight lofts.
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
                ["Loft types", "#types"],
                ["Structural engineering included", "#structure"],
                ["Planning vs permitted development", "#planning"],
                ["Building Regulations and fire safety", "#regs"],
                ["What is included", "#included"],
                ["Process", "#process"],
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

        {/* TYPES */}
        <section id="types" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Loft conversion types we design
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Loft conversions are not one-size-fits-all. The right option
              depends on headroom, roof shape, party walls, planning context,
              and your desired room layout. We design lofts that create real,
              usable space with clear compliance logic.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Rooflight loft conversion (Velux)",
                  d:
                    "The simplest loft type where the roof shape is mostly kept. Great when the existing roof has enough headroom. Still needs correct structural design, insulation build-ups, stair positioning and fire safety planning."
                },
                {
                  t: "Rear dormer loft conversion",
                  d:
                    "A rear dormer adds headroom and usable floor area. Common in terraces and semis. The dormer size, set-backs, materials, window positions and neighbour impact must be presented clearly for planning where required."
                },
                {
                  t: "Mansard loft conversion",
                  d:
                    "Mansards maximise space by altering the roof profile, often used in London terraces. These usually require planning and must be designed carefully to match street character, roof rhythm and local guidance."
                },
                {
                  t: "Hip to gable loft conversion",
                  d:
                    "Often used on semi-detached homes where the hipped roof limits space. The gable conversion increases volume and usually pairs well with a rear dormer for a larger master suite layout."
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
                      Get a loft quote
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold">
                Loft conversion layout planning
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                The best loft layouts consider stair position, headroom above
                stairs, bathroom placement, rooflight positioning, dormer window
                alignment, privacy, and storage within eaves. We design layouts
                that feel natural and valuable, not cramped or awkward.
              </div>
            </div>
          </div>
        </section>

        {/* STRUCTURE */}
        <section id="structure" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Structural engineer included through coordinated design and calculations
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Loft conversions usually require structural changes including new
              steel beams, new floor joists, trimmed openings, load paths to
              bearing walls, and sometimes alterations to the roof structure.
              Building Control typically requires structural calculations for
              these works. We include structural engineering coordination so your
              drawings and calculations are aligned.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Steel beams and floor strengthening",
                  d:
                    "We coordinate beam positions, bearings, padstones and joist design so the loft floor is safe and buildable. Structural notes and calculations align with the drawing pack."
                },
                {
                  t: "Dormer and roof structure support",
                  d:
                    "Dormers and mansards change roof loads. We coordinate structural design to support new openings, rafters, cheeks, and dormer frames safely."
                },
                {
                  t: "Stair openings and trimmed joists",
                  d:
                    "Stair openings must be trimmed correctly to maintain structural integrity. We ensure the opening, stair geometry and structural design work together."
                },
                {
                  t: "Buildable drawings for contractors",
                  d:
                    "The goal is not only approval. The goal is a set of coordinated drawings and structural information that contractors can build from with fewer surprises."
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

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_LINK}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600"
              >
                WhatsApp us
              </a>
              <button
                onClick={scrollToForm}
                className="rounded-full border px-6 py-3 text-sm font-bold hover:bg-slate-100"
              >
                Get my loft quote
              </button>
            </div>
          </div>
        </section>

        {/* PLANNING */}
        <section id="planning" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Planning permission vs permitted development for loft conversions
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border p-6">
                <div className="text-sm font-extrabold">
                  Permitted development loft conversions
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Many rear dormers and rooflight conversions can be permitted
                  development, but not always. Conservation areas, flats, prior
                  roof alterations, and volume limits can remove PD rights. We
                  confirm the correct route before you spend money building the
                  wrong design.
                </div>
              </div>

              <div className="rounded-2xl border p-6">
                <div className="text-sm font-extrabold">
                  Planning applications for loft conversions
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Mansard lofts, front dormers, large rear dormers and changes
                  affecting street character often require planning permission.
                  We design with officer expectations in mind so decisions are
                  easier and faster.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold">
                London loft planning factors that matter
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Roof form, dormer height, and set-backs from eaves and ridge</li>
                <li>Materials and appearance, especially in conservation areas</li>
                <li>Neighbour privacy and overlooking from dormer windows</li>
                <li>Street character and roof rhythm on terraces</li>
                <li>Rear visibility and design quality for officer assessment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* REGS */}
        <section id="regs" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Building Regulations, fire safety, stairs and insulation
            </h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Loft conversions are heavily assessed under Building Regulations.
              The most common issues relate to stairs, headroom, fire safety,
              insulation, ventilation and structural integrity. Our Building
              Regulations packs are designed to make approval smoother and
              reduce build-stage surprises.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Stair design and headroom",
                  d:
                    "Stairs must be safe and practical. We design stair layouts that work with the existing house, respect headroom rules and achieve a clean landing arrangement."
                },
                {
                  t: "Fire safety upgrade strategy",
                  d:
                    "Lofts typically require fire protection measures such as protected stair routes, upgraded doors, smoke alarms, and sometimes escape windows depending on layout. Our drawings coordinate these requirements clearly."
                },
                {
                  t: "Thermal performance and insulation build ups",
                  d:
                    "Roof insulation and build ups affect headroom and usable space. We plan insulation strategies so you achieve compliance without losing the loft value."
                },
                {
                  t: "Bathrooms, ventilation and drainage",
                  d:
                    "Adding bathrooms in lofts requires ventilation and drainage planning. Our packs consider practical routing and coordination so contractors can build efficiently."
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

        {/* INCLUDED */}
        <section id="included" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              What is included in your loft conversion drawing package
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  t: "Existing and proposed drawings",
                  d:
                    "Existing floor plans and elevations, plus proposed loft plans and elevations that clearly show the design."
                },
                {
                  t: "Sections, roof design and key details",
                  d:
                    "Sections help Building Control and contractors understand headroom, insulation build-ups, dormer form, and structural intent."
                },
                {
                  t: "Planning submission pack where required",
                  d:
                    "Location and block plans plus planning-ready drawings that present the proposal clearly for officer review."
                },
                {
                  t: "Building Regulations pack (recommended)",
                  d:
                    "Detailed drawings for Building Control, including compliance notes for stairs, fire strategy, insulation build-ups, and coordination with structural design."
                },
                {
                  t: "Structural engineer coordination and calculations",
                  d:
                    "Structural design coordination so beam layouts, bearings, and calculations align with the drawings and are suitable for Building Control submission."
                },
                {
                  t: "Revision support prior to submission",
                  d:
                    "Most projects need refinement. We provide revision support to reach a strong final pack before submission."
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

            <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
              <div className="text-sm font-extrabold">
                Fastest way to get a loft quote
              </div>
              <div className="mt-2 text-sm text-slate-700">
                Send postcode plus roof photos on WhatsApp. We will reply with
                the best loft type, the likely planning route, and a clear fixed
                quote.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600"
                >
                  WhatsApp us
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Our loft conversion process
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  n: "1",
                  t: "Enquiry, advice and fixed quote",
                  d:
                    "We confirm your property type, roof form and goals. We advise the best loft conversion route and issue a clear fixed quote."
                },
                {
                  n: "2",
                  t: "Survey and base drawings",
                  d:
                    "We carry out a measured survey where needed and prepare existing drawings that form the foundation of the loft design."
                },
                {
                  n: "3",
                  t: "Design, coordination, and submission pack",
                  d:
                    "We develop the proposed loft design, coordinate structural requirements, and prepare the final planning and or Building Regulations pack."
                }
              ].map((x) => (
                <div key={x.n} className="rounded-2xl border bg-white p-6">
                  <div className="text-xs font-bold text-slate-500">
                    STEP {x.n}
                  </div>
                  <div className="mt-1 text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <div className="text-sm font-extrabold">
                Smooth build stage coordination
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                A loft conversion is not only a design job. It is a sequence of
                roof works, structural installs, insulation build-ups, stair
                placement, and internal fit-out. Our packs are designed so the
                contractor has clear information, and Building Control questions
                are reduced.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Loft conversion plans FAQ
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  q: "Do you provide structural calculations",
                  a:
                    "Yes. We include structural engineer coordination so your loft design, beam layouts, bearings and structural calculations align with the drawing pack for Building Control."
                },
                {
                  q: "Can you design a dormer loft conversion",
                  a:
                    "Yes. We design rear dormers, L-shaped dormers, and dormer variations with planning clarity and buildability in mind."
                },
                {
                  q: "Can you handle mansard loft conversions",
                  a:
                    "Yes. Mansards are common in London terraces and often require planning. We design them to match roof rhythm and local character guidance."
                },
                {
                  q: "Do you cover all London areas",
                  a:
                    "Yes. We cover all London boroughs and areas around the M25. We can survey where needed and deliver full drawing packs."
                },
                {
                  q: "Can you provide Building Regulations drawings",
                  a:
                    "Yes. Building Regulations packs are recommended for loft conversions and include key compliance notes for fire, stairs, insulation, and coordination with structure."
                },
                {
                  q: "How do I get a quote quickly",
                  a:
                    "Use the form, call, or WhatsApp. The fastest is WhatsApp with postcode and roof photos so we can advise the best loft type."
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

            <div className="mt-10 rounded-2xl border bg-slate-900 p-8 text-white">
              <h3 className="text-xl font-extrabold">
                Ready to plan your loft conversion
              </h3>
              <p className="mt-3 max-w-3xl text-slate-200">
                Get a fixed quote for loft conversion drawings with structural
                engineering coordination. We cover all London boroughs and the
                M25.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                >
                  Get my loft quote
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
          </div>
        </section>
      </main>
    </>
  );
}
