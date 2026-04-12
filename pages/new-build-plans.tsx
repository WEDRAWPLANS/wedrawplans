import React, { useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
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
    "New Build Plans and Planning Drawings | Structural Engineering and Town Planning Support | WEDRAWPLANS";
  const pageDescription =
    "New build planning drawings, architectural design, structural engineering coordination and town planning support for single dwellings, replacement houses, backland plots, apartment schemes, infill developments and mixed use residential projects across London, Outer London and the M25.";
  const canonical = "https://www.wedrawplans.co.uk/new-build-plans";

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: canonical,
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/hyde-cgi-main.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: ["London", "Outer London", "M25"],
      description:
        "New build planning drawings, Building Regulation drawings, structural engineering coordination and town planning support for residential development projects.",
      sameAs: ["https://twitter.com/WEDRAWPLANS", GOOGLE_BUSINESS_PROFILE_LINK],
    }),
    [canonical]
  );

  const serviceJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "New Build Plans and Planning Drawings",
      provider: {
        "@type": "LocalBusiness",
        name: "WEDRAWPLANS",
        telephone: "+44 20 3654 8508",
        email: "info@wedrawplans.com",
        url: "https://www.wedrawplans.co.uk/",
      },
      areaServed: ["London", "Outer London", "M25"],
      serviceType: [
        "New build planning drawings",
        "Building Regulation drawings",
        "Structural engineering coordination",
        "Town planning support",
        "Design and Access Statement support",
        "Planning statement support",
        "Pre application strategy",
        "Residential apartment scheme drawings",
        "Small development planning drawings",
      ],
      description:
        "Complete new build design service for planning and Building Control, including structural engineering coordination and town planning support for houses, apartment developments, infill sites and mixed use schemes.",
    }),
    []
  );

  const faqJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in a new build planning drawings package",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A typical package includes proposed floor plans, elevations, sections, roof plans where needed, site layout information and presentation drawings to communicate scale, appearance and site response clearly.",
          },
        },
        {
          "@type": "Question",
          name: "Do you include structural engineering for new builds",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. New builds require structural design and calculations. We coordinate structural engineering so the drawings and calculations align for Building Control and construction.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide town planning services",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We provide town planning support including planning strategy, policy review, submission support, responses to officer questions and amendments during determination where appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare drawings for apartment developments and small multi unit schemes",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare planning drawings and technical drawing packages for modern apartment schemes, mixed use developments, infill sites, conversions and other residential projects requiring a stronger planning and technical approach.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work outside London",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We cover London, Outer London and areas around the M25, including commuter locations and surrounding authorities.",
          },
        },
        {
          "@type": "Question",
          name: "What causes new build applications to be refused",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Refusals often relate to scale, massing, design quality, amenity impacts, daylight and privacy, parking and highways, poor site layout, weak policy alignment and unclear drawings. We design and present to reduce these risks.",
          },
        },
        {
          "@type": "Question",
          name: "Do you help with pre application advice",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Pre application strategy can reduce risk on complex sites. We can advise what to present, how to frame the proposal and how to improve planning confidence.",
          },
        },
        {
          "@type": "Question",
          name: "Can you produce Building Regulations drawings after planning",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. After planning, we produce Building Regulation drawings with coordinated structural information and practical build details to support Building Control and contractors.",
          },
        },
      ],
    }),
    []
  );

  const quickNav = [
    ["Project showcase", "#hyde-case-study"],
    ["Drawing showcase", "#hyde-showcase"],
    ["New build types", "#types"],
    ["Planning drawings", "#planning-scope"],
    ["Town planning", "#town-planning"],
    ["Structural engineering", "#structural"],
    ["Refusal risks", "#refusals"],
    ["Building Regulations", "#technical"],
    ["Process", "#process"],
    ["Coverage", "#coverage"],
    ["Related services", "#related-services"],
    ["FAQ", "#faq"],
  ] as const;

  const newBuildTypes = [
    {
      title: "Single dwelling new build houses",
      body:
        "Ideal for landowners and homeowners wanting a high quality new house on a clear or reconfigured plot. We design the layout, massing, elevations and site arrangement to meet policy, amenity and practical build expectations.",
    },
    {
      title: "Replacement dwellings",
      body:
        "Replacement houses often attract strong planning scrutiny on size, character and street scene. We shape the proposal so the replacement reads justified, proportionate and much easier for officers to assess.",
    },
    {
      title: "Backland plots and garden developments",
      body:
        "Backland sites require careful access, privacy, amenity space, refuse strategy and a convincing relationship to neighbours. We focus on layout clarity, defensible distances and stronger planning presentation.",
    },
    {
      title: "Side plot infill and corner plots",
      body:
        "Infill schemes are judged heavily on rhythm, plot width, materials and impact on neighbouring windows and gardens. We design to fit the street and reduce obvious refusal triggers.",
    },
    {
      title: "Apartment schemes and multi unit developments",
      body:
        "For apartment developments and small multi unit schemes, planning review expands into internal standards, servicing, refuse and cycle storage, amenity quality and stronger street presentation. We coordinate the full drawing story properly.",
    },
    {
      title: "Complex sites with constraints",
      body:
        "Conservation settings, mixed use edges, tight boundaries, level changes and access limitations need a more careful approach. We can advise whether pre application work is worth doing and how to structure the proposal from the start.",
    },
  ];

  const planningScope = [
    {
      title: "Site understanding and context response",
      body:
        "We study what surrounds the site so the proposal has a clear basis. This helps the design respond properly to neighbouring buildings, street rhythm, levels, access and policy context.",
    },
    {
      title: "Proposed floor plans and layouts",
      body:
        "We prepare clear proposed layouts that demonstrate practical rooms, circulation, access, residential quality and amenity. Strong layout clarity supports planning review and later supports Building Control and build coordination.",
    },
    {
      title: "Elevations prepared for officer review",
      body:
        "Elevations are where many new build applications are won or lost. We present proportion, material logic, window placement and massing so officers can assess character and impact quickly.",
    },
    {
      title: "Sections to communicate height and massing",
      body:
        "Sections clarify levels, ridge heights, parapets, step-backs and the relationship to neighbours. This reduces uncertainty about scale and helps the proposal read more clearly.",
    },
    {
      title: "Site layout, access and servicing logic",
      body:
        "We show access, parking where applicable, refuse location, cycle storage, servicing and amenity arrangements. This removes common reasons for refusal and later condition delays.",
    },
    {
      title: "Clear planning presentation throughout",
      body:
        "We keep drawings consistent, visually strong and legible so planning assessment is easier. Better presentation helps the whole proposal feel more coordinated and more certain.",
    },
  ];

  const townPlanning = [
    {
      title: "Planning strategy and feasibility",
      body:
        "We review site constraints, likely policy issues and the design levers that can strengthen the application. The goal is to identify a proposal that is defendable, not just hopeful.",
    },
    {
      title: "Pre application guidance when useful",
      body:
        "On sensitive sites, pre application advice can reduce risk. We advise what to submit, what to test and how to interpret the feedback before full application stage.",
    },
    {
      title: "Submission support and coordination",
      body:
        "We help ensure the drawing pack and supporting information are consistent, clear and ready for submission. This reduces validation issues and helps the application start more smoothly.",
    },
    {
      title: "Officer questions and amendments",
      body:
        "If officers request changes, we help develop practical amendments and updated drawings to keep the application moving while protecting the overall design quality.",
    },
    {
      title: "Design statements and planning narrative",
      body:
        "Where needed, we support Design and Access Statements, planning narratives and project summaries that explain the proposal clearly and reduce avoidable misunderstanding.",
    },
    {
      title: "Reducing objection risk",
      body:
        "We design and present the scheme to reduce common neighbour concerns such as privacy, scale, outlook, access, visual dominance and noise related assumptions.",
    },
  ];

  const structuralItems = [
    {
      title: "Foundations and ground conditions logic",
      body:
        "We coordinate structural approach with the likely ground scenario and site constraints. Foundation selection impacts programme, cost and buildability, so early coordination matters.",
    },
    {
      title: "Load paths, beams and openings",
      body:
        "We coordinate beams, bearings and structural logic around key openings, large glazing and layout requirements. This reduces redesign and supports a cleaner Building Control submission.",
    },
    {
      title: "Roof structure and upper level forms",
      body:
        "Roof design is both structural and architectural. We coordinate roof structure, spans and load transfer so it stays buildable and consistent with the elevations and sections.",
    },
    {
      title: "Buildability and contractor clarity",
      body:
        "Structural information is coordinated with drawings so contractors have clearer guidance. This reduces on-site uncertainty and helps pricing and sequencing.",
    },
    {
      title: "Structural calculations for Building Control",
      body:
        "Calculations are coordinated with the drawing set. This alignment is what Building Control expects and what contractors need to move forward with confidence.",
    },
    {
      title: "Coordination that protects the design",
      body:
        "When structure is considered early, planning layouts do not collapse later. That is how projects stay cleaner, stronger and more controlled through the next stage.",
    },
  ];

  const refusalRisks = [
    {
      title: "Scale, massing and overdevelopment",
      body:
        "If a scheme reads too large for the plot or overly dominant compared to neighbours, refusal risk rises. We balance floorspace with proportions and setbacks that read credibly.",
    },
    {
      title: "Weak design quality or poor street relationship",
      body:
        "Officers assess character, rhythm, material quality and urban fit. We design elevations with stronger proportion, clarity and a more coherent design story.",
    },
    {
      title: "Amenity impact: privacy, outlook and daylight",
      body:
        "Window placement, separation distances, balconies and massing can harm neighbour amenity. We design for defensible privacy and a clearer planning justification.",
    },
    {
      title: "Parking, access, servicing and highways concerns",
      body:
        "Many schemes fail on access geometry, visibility, servicing and parking assumptions. We present a clearer movement and layout logic from the beginning.",
    },
    {
      title: "Confusing drawings or inconsistent information",
      body:
        "If officers cannot quickly interpret the proposal, risk rises. We keep drawings aligned across plans, elevations, sections and visuals so the scheme reads more clearly.",
    },
    {
      title: "Weak policy framing",
      body:
        "A scheme can be acceptable but still struggle if it is not framed properly. Town planning support helps present the logic more clearly and more professionally.",
    },
  ];

  const technicalItems = [
    {
      title: "Building Regulation drawing package",
      body:
        "A technical drawing set that supports Building Control approval, including plans, sections, key construction build ups and compliance notes.",
    },
    {
      title: "Structural information aligned with drawings",
      body:
        "Structural calculations and coordinated beam and load logic that match the drawings. This is essential for a smoother Building Control process.",
    },
    {
      title: "Fire safety and life safety intent",
      body:
        "Fire strategy intent is shown through layouts, protected routes and key compliance notes appropriate to the project scale and arrangement.",
    },
    {
      title: "Thermal and fabric performance intent",
      body:
        "Insulation build ups and junction intent are coordinated so the design can comply and be built without guesswork on site.",
    },
    {
      title: "Drainage and practical build coordination",
      body:
        "We coordinate typical requirements such as drainage intent and practical routing considerations so contractors do not face avoidable surprises later.",
    },
    {
      title: "Contractor ready clarity",
      body:
        "The goal is a set of drawings that a contractor can price and build from with fewer questions, fewer assumptions and fewer avoidable changes.",
    },
  ];

  const processItems = [
    {
      step: "1",
      title: "Site review, feasibility and planning route",
      body:
        "We review the site, constraints and goals. We advise the most realistic planning route and what information will strengthen the proposal.",
    },
    {
      step: "2",
      title: "Concept design and refinement",
      body:
        "We design the scheme with massing, layout, amenity, street relationship and planning presentation in mind. Refinement happens before submission so the final pack is stronger.",
    },
    {
      step: "3",
      title: "Submission pack and next stage technical",
      body:
        "We prepare the planning pack, support officer questions, and after approval we move into Building Regulation drawings and structural coordination.",
    },
  ];

  const faqs = [
    {
      q: "Do you do planning drawings only, or full packages",
      a:
        "We can do planning drawings only, or full packages including Building Regulation drawings, coordinated structural engineering and calculations, plus town planning support depending on the project.",
    },
    {
      q: "Do you include structural engineering",
      a:
        "Yes. We include structural engineering coordination so the calculations and structural intent align with the drawings for Building Control and construction.",
    },
    {
      q: "Do you provide town planning services",
      a:
        "Yes. We support planning strategy, policy alignment, submission coordination and officer responses when amendments are needed.",
    },
    {
      q: "Can you help with apartment schemes and multi unit developments",
      a:
        "Yes. We prepare planning drawings and technical drawing packages for modern apartment schemes, mixed use projects, infill sites and other residential developments requiring a more advanced planning and design approach.",
    },
    {
      q: "Do you work in Outer London and around the M25",
      a:
        "Yes. We cover London, Outer London and M25 areas. Submit your postcode and we will confirm the best approach.",
    },
    {
      q: "How do I get started",
      a:
        "Use the form, call or WhatsApp. Provide a site postcode, what you want to build and any known constraints. We will advise next steps and issue a fixed quote.",
    },
    {
      q: "What is the fastest way to get a quote",
      a:
        "WhatsApp is usually fastest. Send the site postcode, a short description, and any sketch, access photo or plot image you have available.",
    },
    {
      q: "Can you produce Building Regulation drawings after planning",
      a:
        "Yes. After planning we can produce Building Regulation drawings with coordinated structural information and practical detail for Building Control.",
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="new build plans London, apartment planning drawings London, residential development drawings London, multi unit planning drawings, new build planning drawings, Building Regulation drawings, structural engineering coordination, town planning support, replacement dwelling drawings, infill site drawings, backland plot planning drawings"
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

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 pb-3 pt-4 lg:px-6 lg:pt-5">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain lg:h-28"
                />
              </Link>

              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Architectural Drawing Consultants
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-slate-900">
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
                <Link href="/extension-plans" className="hover:text-black">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion-plans" className="hover:text-black">
                  Loft Drawings
                </Link>
                <Link href="/new-build-plans" className="hover:text-black">
                  New Build Drawings
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-black">
                  Building Regulations
                </Link>
                <Link href="/areas" className="hover:text-black">
                  Areas We Cover
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-[#20243b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#161a2f]"
                >
                  <span>📞</span>
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  <span>WhatsApp us now</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section id="quote" className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-stretch">
                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                      New build planning drawings
                    </p>

                    <h1 className="mt-2 text-[24px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[30px]">
                      New Build Plans, Planning Drawings, Structural Engineering and Town Planning Support
                    </h1>

                    <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] text-slate-800">
                      Fixed fees • Planning and Building Regulation drawings • London, Outer London and M25 coverage
                    </p>
                  </div>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS provide a complete new build design service for single dwellings, replacement houses,
                    apartment schemes, mixed use proposals, infill sites and more complex residential plots. We prepare
                    planning drawings designed for council review, coordinate structural engineering and calculations,
                    and support the planning process with clear, professional presentation.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    A strong new build proposal depends on more than floor area. It must respond properly to context,
                    scale, privacy, daylight, access, servicing, policy expectations and how the finished scheme will
                    actually be built. Our approach is to make that full story read clearly from the first review.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    Whether you are preparing a single new build house or a more ambitious residential development, we
                    shape the drawing package so it is credible, design-led, planning-focused and ready to progress into
                    Building Regulation drawings once planning is secured.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <TrustPill title="Planning focused" body="Drawings prepared to read clearly in formal review." />
                    <TrustPill title="Technical coordination" body="Structure and design aligned early." />
                    <TrustPill title="Professional presentation" body="Clear packages for serious schemes." />
                  </div>

                  <ul className="space-y-1 text-[13px] text-slate-800">
                    <li>• Single dwelling new build houses and replacement dwellings</li>
                    <li>• Apartment schemes, infill plots, backland sites and mixed use projects</li>
                    <li>• Planning drawings, town planning support and design development</li>
                    <li>• Structural engineering coordination and Building Regulation packages</li>
                    <li>• Coverage across London, Outer London and the surrounding M25 area</li>
                    <li>• Clear fixed fees and fast early advice</li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4]"
                    >
                      Get my fixed new build quote
                    </button>

                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>📞</span>
                      <span>Call {PHONE_DISPLAY}</span>
                    </a>

                    <a
                      href={GOOGLE_BUSINESS_PROFILE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>⭐</span>
                      <span>Google Profile</span>
                    </a>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                      Fast route to start
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-3 text-[12px] text-slate-700 sm:grid-cols-3">
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 1</div>
                        <div>Send site postcode and scheme type</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 2</div>
                        <div>We review site context and likely route</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 3</div>
                        <div>Clear fixed fee and next stage advice</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="new-build-quote" className="space-y-6">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <div className="p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Built for homeowners, landowners and developers
                      </div>
                      <h2 className="mt-2 text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Request your fixed fee quote
                      </h2>

                      <p className="mt-2 text-[12px] leading-6 text-slate-600">
                        Share your site details and receive a clear fixed fee proposal covering drawings, planning
                        support and coordinated structural engineering.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Name</label>
                          <input
                            name="name"
                            required
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                            <input
                              name="phone"
                              required
                              type="tel"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Email</label>
                            <input
                              name="email"
                              required
                              type="email"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Site postcode</label>
                          <input
                            name="postcode"
                            required
                            placeholder="NW9 5AH"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.placeholder = "NW9 5AH";
                            }}
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 outline-none focus:border-[#64b7c4] focus:text-slate-900"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">What drawings do you need</label>
                          <select
                            name="projectType"
                            required
                            defaultValue=""
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                          >
                            <option value="" disabled>
                              Select new build type
                            </option>
                            <option value="Single dwelling new build house">Single dwelling new build house</option>
                            <option value="Replacement dwelling">Replacement dwelling</option>
                            <option value="Backland plot new build">Backland plot new build</option>
                            <option value="Side plot infill new build">Side plot infill new build</option>
                            <option value="Corner plot new build">Corner plot new build</option>
                            <option value="Apartment scheme or multi unit development">
                              Apartment scheme or multi unit development
                            </option>
                            <option value="Mixed use residential scheme">Mixed use residential scheme</option>
                            <option value="Planning drawings only">Planning drawings only</option>
                            <option value="Building regulation pack only">Building regulation pack only</option>
                            <option value="Other or not sure">Other or not sure</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">
                            Brief description of your project
                          </label>
                          <textarea
                            name="projectDetails"
                            rows={6}
                            placeholder="For example: modern apartment building, six storeys, mixed use ground floor, tight urban site, planning drawings plus technical pack."
                            className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#64b7c4] py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                        >
                          Get my fixed quote
                        </button>

                        <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                          <div>
                            Include the site address and any known constraints such as conservation context, access,
                            existing planning history or servicing restrictions where possible.
                          </div>
                          <div>
                            We reply with a clear scope, fixed fee and recommended next steps for the site.
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <div className="p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Fastest way to start
                      </div>
                      <p className="mt-2 text-[13px] leading-7 text-slate-700">
                        WhatsApp the site postcode and a short summary. If you have a sketch, location plan, site
                        photos or planning history, send that too and we can advise the next step more quickly.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
                        >
                          <span>💬</span>
                          <span>WhatsApp us now</span>
                        </a>
                        <button
                          type="button"
                          onClick={scrollToForm}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                        >
                          Get my fixed quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-6">
              <div className="flex flex-wrap gap-2">
                {quickNav.map(([label, href]) => (
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
                      userSelect: "none",
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
                {["Approved scheme", "19 residential flats", "6 storeys", "40 sqm B1/commercial space"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border bg-slate-50 p-5 text-center text-sm font-extrabold text-slate-900"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 rounded-2xl border bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700">
                1–5 Halt Parade, The Hyde, London NW9 5AH
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-3xl border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold tracking-tight">Short project case study summary</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    Project Colindale – The Hyde showcases WEDRAWPLANS capability in preparing planning-led design work
                    for a modern apartment development in a changing urban context. The approved scheme at 1–5 Halt
                    Parade, The Hyde, London NW9 5AH was designed as a six-storey building providing 19 residential
                    flats together with 40 sqm of B1/commercial space at ground floor level.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    The design approach focused on creating a contemporary stepped form that responds to the changing
                    scale of the surrounding area, balancing the relationship between lower neighbouring houses and
                    taller adjacent buildings. The wider scope of design work addressed massing, privacy, outlook,
                    amenity, access, cycle provision, refuse strategy, landscaping, sustainability and stronger overall
                    planning presentation.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    This type of project demonstrates how WEDRAWPLANS can support not only single dwellings, but also
                    modern apartment proposals, mixed use urban schemes and other development-led projects where strong
                    design communication and planning clarity are essential.
                  </p>
                </div>

                <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm">
                  <h3 className="text-lg font-extrabold tracking-tight">What this project demonstrates</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                    <li>Planning drawings for modern apartment developments</li>
                    <li>Strong CGI and visual communication for serious urban schemes</li>
                    <li>Confident handling of height, massing and context response</li>
                    <li>Capability across mixed use ground floor and residential upper levels</li>
                    <li>Experience presenting schemes with stronger planning narrative and design depth</li>
                    <li>Progression from planning design into coordinated technical development</li>
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

          <section id="hyde-showcase" className="border-y border-slate-200 bg-[#fdf8f3]">
            <HeroSlider
              slides={[
                {
                  src: "/images/hyde-slide-1.jpg",
                  alt: "Project Colindale – The Hyde showcase canvas 1",
                },
                {
                  src: "/images/hyde-slide-2.jpg",
                  alt: "Project Colindale – The Hyde showcase canvas 2",
                },
                {
                  src: "/images/hyde-slide-3.jpg",
                  alt: "Project Colindale – The Hyde showcase canvas 3",
                },
                {
                  src: "/images/hyde-slide-4.jpg",
                  alt: "Project Colindale – The Hyde showcase canvas 4",
                },
                {
                  src: "/images/hyde-slide-5.jpg",
                  alt: "Project Colindale – The Hyde showcase canvas 5",
                },
              ]}
            />
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <h2 className="text-2xl font-extrabold tracking-tight">Why this type of project matters</h2>
              <p className="mt-3 max-w-4xl text-slate-700">
                A page like this does more than describe a service. It shows that WEDRAWPLANS can handle premium
                architectural drawing services for apartment developments, new build residential schemes, mixed use
                proposals and more ambitious planning applications where the design must look credible, modern,
                coordinated and ready for serious review.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <InfoCard
                  title="Planning-led design strength"
                  body="We build schemes to read clearly in planning terms, with strong massing, context response, amenity logic, access planning and urban presentation."
                />
                <InfoCard
                  title="Premium visual communication"
                  body="CGI views, drawing sheets, sections, elevations and image-led showcase content help present WEDRAWPLANS as a serious design partner for more ambitious residential work."
                />
                <InfoCard
                  title="Technical progression after planning"
                  body="Once planning is secured, we can move the scheme into Building Regulation drawings, structural coordination and contractor-ready technical development."
                />
              </div>
            </div>
          </section>

          <section id="types" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">New build projects we design</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                New build planning is not one template. Every site has policy, context, access, amenity, servicing and
                neighbour impacts that shape what is realistic. We design proposals that look credible to planning
                officers, meet key standards and remain buildable when you get to construction.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {newBuildTypes.map((item) => (
                  <ActionCard key={item.title} title={item.title} body={item.body} onClick={scrollToForm} />
                ))}
              </div>

              <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
                <div className="text-sm font-extrabold">Who this page is for</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Homeowners building a single dwelling, landowners unlocking a plot, developers delivering a small
                  scheme, investors seeking a planning-led design package, and clients wanting an architectural drawing
                  service that can move from concept into technical delivery with proper coordination.
                </div>
              </div>
            </div>
          </section>

          <section id="planning-scope" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Planning drawings for new builds, what we produce and why it helps
              </h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                New build planning decisions are heavily influenced by how clearly the proposal is presented. Strong
                drawings reduce uncertainty. When the scheme reads clean, policy aware, modern and buildable, planning
                review becomes more straightforward.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {planningScope.map((item) => (
                  <InfoCard key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </section>

          <section id="town-planning" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Town planning services for new builds, practical support not generic advice
              </h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                New build outcomes are shaped by policy and officer judgement. Town planning support helps choose the
                right application approach, anticipate objections and respond effectively during determination. We keep
                that support closely linked to the drawings.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {townPlanning.map((item) => (
                  <InfoCard key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </section>

          <section id="structural" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Structural engineering included through coordinated design and calculations
              </h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                New builds require structural design from early stages. Structure affects layout, spans, openings,
                foundations, roof design and build cost. We coordinate structural engineering so the planning design
                transitions more cleanly into Building Control and construction.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {structuralItems.map((item) => (
                  <InfoCard key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </section>

          <section id="refusals" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Why new build applications get refused and how we reduce the risk
              </h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                New build refusals often follow predictable patterns. The strongest projects do not just look good, they
                present compliance clearly and reduce uncertainty. Below are some of the major refusal triggers we work
                to address.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {refusalRisks.map((item) => (
                  <InfoCard key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </section>

          <section id="technical" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Technical packs, Building Regulation drawings and what you need after planning
              </h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                Planning approval is only the first milestone. To build, you need coordinated technical drawings for
                Building Control and contractor clarity. We can produce Building Regulation packs that turn planning
                intent into buildable detail.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {technicalItems.map((item) => (
                  <InfoCard key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">Our new build process and timeline</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                New builds move best when the steps are clear. We keep the process structured: understand the site,
                design a scheme that is policy aware, prepare a strong submission pack, then coordinate technical
                drawings after planning.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {processItems.map((item) => (
                  <StepCard key={item.step} step={item.step} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </section>

          <section id="coverage" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">Coverage: London, Outer London and the M25</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                Our service is not limited to Central London. We cover all London boroughs, Outer London locations and
                surrounding areas around the M25. If your site is in a commuter area near London, we can still support
                your new build drawings, planning strategy and coordinated structural work.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <InfoCard
                  title="London borough coverage"
                  body="Full coverage across all boroughs. This includes homeowner sites, infill opportunities, replacement houses and more complex urban residential projects."
                />
                <InfoCard
                  title="Outer London and surrounding authorities"
                  body="We support projects around the M25 and in nearby areas where clients need a strong design package and planning support. Submit your postcode and we will confirm."
                />
              </div>
            </div>
          </section>

          <section id="related-services" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <div className="rounded-3xl border bg-slate-900 p-8 text-white">
                <div className="max-w-4xl">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                    Coordinated support
                  </div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Planning drawings, Building Regulations, structure and planning strategy under one roof
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                    Whether you are planning a single dwelling, replacement house, infill scheme, backland site,
                    apartment development or mixed use residential project, WEDRAWPLANS can help you move from concept
                    to planning submission and then into technical delivery with clearer coordination and stronger
                    presentation.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <DarkFeatureCard
                    title="For homeowners and landowners"
                    body="Fixed fee support for new build houses, side plots, replacement dwellings and difficult sites needing a more strategic planning approach."
                  />
                  <DarkFeatureCard
                    title="For developers and investors"
                    body="Better presentation, stronger design communication and more coordinated progression from planning into Building Regulation and construction detail."
                  />
                  <DarkFeatureCard
                    title="For faster next steps"
                    body="Send the site postcode, a short summary and any sketch or site photos. We will advise the likely route and issue a clear fixed quote."
                  />
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#1ebe57]"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border bg-slate-50 p-6">
                <div className="text-sm font-extrabold text-slate-900">Explore related WEDRAWPLANS services</div>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <Link
                    href="/extension-plans"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    House Extension Plans
                  </Link>
                  <Link
                    href="/loft-conversion-plans"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    Loft Conversion Plans
                  </Link>
                  <Link
                    href="/building-regulation-drawings"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    Building Regulation Drawings
                  </Link>
                  <Link
                    href="/areas"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    London Borough Coverage
                  </Link>
                  <Link
                    href="/areas/barnet"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    Barnet Project Showcase
                  </Link>
                  <Link
                    href="/areas/richmond"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    Richmond Drawings Page
                  </Link>
                  <Link
                    href="/areas/merton"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    Merton Drawings Page
                  </Link>
                  <a
                    href={GOOGLE_BUSINESS_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border bg-white px-4 py-4 text-sm font-semibold hover:bg-slate-100"
                  >
                    Google Business Profile
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <h2 className="text-2xl font-extrabold tracking-tight">New build plans FAQ</h2>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {faqs.map((item) => (
                  <FaqCard key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#2a3050] bg-[#20243b]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">
                Architectural Drawing Consultants
              </div>

              <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/80">
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning
                applications, Building Regulations, new build houses, apartment developments and small residential
                development projects across London and surrounding areas.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] shadow-sm hover:bg-slate-100"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  WhatsApp us
                </a>

                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Email us
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Google Profile
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-4xl gap-6 border-t border-white/10 pt-8 text-center md:grid-cols-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Phone</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={PHONE_LINK} className="hover:text-white">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Email</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={EMAIL_LINK} className="hover:text-white">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Studio</div>
                  <div className="mt-2 text-[12px] leading-6 text-white/65">
                    201 Borough High Street
                    <br />
                    London SE1 1JA
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-white/65">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/areas" className="hover:text-white">
                  Areas We Cover
                </Link>
                <Link href="/extension-plans" className="hover:text-white">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion-plans" className="hover:text-white">
                  Loft Drawings
                </Link>
                <Link href="/new-build-plans" className="hover:text-white">
                  New Build
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-white">
                  Building Regulations
                </Link>
              </div>

              <div className="mt-6 text-[11px] text-white/45">
                Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        <style jsx global>{`
          html {
            -webkit-touch-callout: none;
          }

          body {
            -webkit-user-select: text;
            user-select: text;
          }
        `}</style>
      </div>
    </>
  );
}

function TrustPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] leading-6 text-slate-600">{body}</div>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{body}</div>
    </div>
  );
}

function ActionCard({
  title,
  body,
  onClick,
}: {
  title: string;
  body: string;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{body}</div>
      <div className="mt-4">
        <button
          onClick={onClick}
          className="rounded-full bg-sky-600 px-5 py-2 text-xs font-bold text-white hover:bg-sky-700"
        >
          Get a fixed quote
        </button>
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="text-xs font-bold text-slate-500">STEP {step}</div>
      <div className="mt-1 text-sm font-extrabold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{body}</div>
    </div>
  );
}

function DarkFeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-300">{body}</div>
    </div>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="text-sm font-extrabold">{question}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{answer}</div>
    </div>
  );
}
