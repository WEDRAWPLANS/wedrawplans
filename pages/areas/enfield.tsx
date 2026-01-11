import Head from "next/head";
import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Enfield";

const HERO_IMAGE = "/images/enfield-hero.jpg";
const ENFIELD_LOCAL_IMAGE = "/images/enfield-local.jpg";
const PROJECT_IMAGE_1 = "/images/enfield-project-1.jpg";
const PROJECT_IMAGE_2 = "/images/enfield-project-2.jpg";

type ChatRole = "assistant" | "user";
type ChatMessage = { role: ChatRole; text: string };

function sanitizeText(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

function includesAny(haystack: string, needles: string[]) {
  const s = haystack.toLowerCase();
  return needles.some((n) => s.includes(n));
}

function PlanningAssistant({
  boroughName,
  onGetQuote,
}: {
  boroughName: string;
  onGetQuote: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [postcode, setPostcode] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text:
        "Hi. I am the WEDRAWPLANS planning assistant for Enfield. Tell me what you want to build and your postcode, and I will guide you to the best route for drawings and planning.",
    },
    {
      role: "assistant",
      text:
        "Quick start: type something like rear extension EN2, loft conversion N14, wraparound extension EN3, or building regs pack N21.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = useMemo(
    () => [
      "Do I need planning permission in Enfield",
      "Permitted development for rear extension",
      "Loft conversion rules and dormers",
      "How long does Enfield Council take",
      "Conservation area checks in Enfield",
      "Book a survey within 48 hours",
    ],
    []
  );

  function pushMessage(msg: ChatMessage) {
    setMessages((prev) => [...prev, msg]);
    setTimeout(() => {
      if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
    }, 0);
  }

  function extractPostcode(text: string) {
    const t = text.toUpperCase();
    const match = t.match(/\b(EN|N)\d{1,2}\s?\d?[A-Z]{0,2}\b/g);
    if (!match) return null;
    return match[0].replace(/\s+/g, " ").trim();
  }

  function generateAssistantReply(userTextRaw: string) {
    const userText = sanitizeText(userTextRaw);
    const userLower = userText.toLowerCase();

    const foundPostcode = extractPostcode(userText);
    if (foundPostcode && !postcode) setPostcode(foundPostcode);

    const projectSignals: Array<{ label: string; terms: string[] }> = [
      {
        label: "House extension",
        terms: [
          "extension",
          "rear",
          "side",
          "wrap",
          "wraparound",
          "wrap around",
          "kitchen",
          "dining",
          "single storey",
          "double storey",
          "two storey",
        ],
      },
      { label: "Loft conversion", terms: ["loft", "dormer", "hip", "gable", "mansard", "roof"] },
      {
        label: "Building regulation pack",
        terms: [
          "building regs",
          "building regulation",
          "regulations",
          "building control",
          "technical",
          "structural notes",
          "construction pack",
        ],
      },
      { label: "Garage conversion", terms: ["garage", "garage conversion"] },
      { label: "Outbuilding or garden room", terms: ["outbuilding", "garden room", "studio", "annexe", "summerhouse"] },
      { label: "New build house", terms: ["new build", "newbuild", "self build", "house build"] },
      { label: "Conversion to flats", terms: ["flat", "flats", "conversion", "hmo", "studio flat", "change of use"] },
      { label: "Internal remodelling", terms: ["internal", "knock through", "open plan", "layout", "reconfigure", "refurb"] },
    ];

    if (!projectType) {
      const match = projectSignals.find((p) => includesAny(userLower, p.terms));
      if (match) setProjectType(match.label);
    }

    const hasPlanningIntent = includesAny(userLower, [
      "planning",
      "permission",
      "permitted",
      "pd",
      "lawful",
      "ldc",
      "certificate",
      "prior approval",
      "council",
      "validation",
      "conservation",
      "article 4",
      "listed",
      "heritage",
      "street scene",
      "roof form",
    ]);

    const hasTimelineIntent = includesAny(userLower, ["how long", "timeline", "time", "weeks", "months", "decide", "decision"]);
    const hasCostIntent = includesAny(userLower, ["cost", "price", "how much", "fee", "quote", "budget"]);
    const hasSurveyIntent = includesAny(userLower, ["book", "survey", "visit", "measure", "measured", "come out"]);

    const knownPostcode = foundPostcode || postcode;
    const knownType = projectType || null;

    if (hasSurveyIntent) {
      return [
        "We can usually arrange the initial measured survey within 48 hours in Enfield, subject to availability and access.",
        "Tap Get a quick quote and enter your postcode and project type. We will confirm scope, survey timing and next steps.",
      ];
    }

    if (hasTimelineIntent) {
      return [
        "Typical times: a householder planning application is often decided about 6 to 8 weeks after validation. A Lawful Development Certificate is often about 4 to 6 weeks after validation.",
        "To avoid delays, we focus on a clean submission with the right drawings and supporting info where needed.",
        "Tell me your postcode and what you want to build and I will suggest the best route.",
      ];
    }

    if (hasCostIntent) {
      return [
        "We price drawings as fixed fees with a clear scope so you know exactly what you get.",
        "For the fastest accurate quote, share your postcode and project type, plus one line description like 4m rear extension or dormer loft with ensuite.",
        "Or tap Get a quick quote and complete the form in 60 seconds.",
      ];
    }

    if (hasPlanningIntent) {
      return [
        "In Enfield, many house extensions and loft conversions can be permitted development, but it depends on house type, previous extensions, and conservation area constraints.",
        "Flats usually need full planning permission. Roof changes and dormers are often reviewed closely where they affect the street scene.",
        "Share your postcode and what you want to build and I will guide you to the correct route.",
      ];
    }

    if (!knownPostcode || !knownType) {
      const prompts: string[] = [];
      if (!knownType)
        prompts.push("What is your project type: extension, loft, garage conversion, outbuilding, new build, or building regs pack");
      if (!knownPostcode) prompts.push("What is your postcode: for example EN1, EN2, EN3, N13, N14, N21");
      return [
        "To give accurate guidance, I need two details.",
        ...prompts,
        "Once I have them, I can recommend the fastest route and you can request a fixed fee quote.",
      ];
    }

    return [
      `Thanks. I have ${knownType}${knownPostcode ? ` for ${knownPostcode}` : ""}.`,
      "Next step: request a fixed fee quote so we can confirm scope, survey timing, and the correct planning route for your address in Enfield.",
      "Tap Get a quick quote and we will reply with clear next steps.",
    ];
  }

  function handleSend(text: string) {
    const t = sanitizeText(text);
    if (!t) return;

    pushMessage({ role: "user", text: t });

    const replies = generateAssistantReply(t);
    replies.forEach((r, idx) => {
      setTimeout(() => pushMessage({ role: "assistant", text: r }), 140 * (idx + 1));
    });

    setInput("");
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-[320px] sm:w-[360px] rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em]">
              Planning Assistant • {boroughName}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white text-[14px]"
              aria-label="Close assistant"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="max-h-[320px] overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-[#64b7c4] text-white px-3 py-2 text-[13px]"
                    : "mr-auto max-w-[85%] rounded-2xl bg-slate-100 text-slate-900 px-3 py-2 text-[13px]"
                }
              >
                {m.text}
              </div>
            ))}

            <div className="pt-1">
              <div className="text-[11px] text-slate-500 mb-2">Quick questions</div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSend(q)}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question or postcode"
                className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-[13px] outline-none focus:border-[#64b7c4]"
              />
              <button
                type="button"
                onClick={() => handleSend(input)}
                className="rounded-full bg-slate-900 text-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] hover:bg-slate-800"
              >
                Send
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={onGetQuote}
                className="flex-1 rounded-full bg-[#64b7c4] text-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] hover:bg-[#4da4b4]"
              >
                Get a quick quote
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-full border border-slate-300 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] hover:bg-slate-900 hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-2 text-[10px] text-slate-500">
              This assistant gives general guidance only. We confirm the correct route after checking your address and proposal.
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full shadow-lg border border-slate-200 bg-slate-900 text-white px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] hover:bg-slate-800"
        >
          Planning Assistant
        </button>
      )}
    </div>
  );
}

export default function EnfieldAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Enfield" });
  }

  function scrollToForm() {
    const el = document.getElementById("enfield-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.wedrawplans.co.uk/areas/enfield#business",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/enfield",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Enfield",
        "Enfield Town",
        "Southgate",
        "Palmers Green",
        "Winchmore Hill",
        "Edmonton",
        "Bush Hill Park",
        "Oakwood",
        "Grange Park",
        "Ponders End",
        "Enfield Highway",
        "Enfield Lock",
        "Cockfosters",
        "Bounds Green",
        "Arnos Grove",
        "New Southgate",
        "Bowes Park",
        "Lower Edmonton",
        "Upper Edmonton",
        "Tottenham borders",
        "Chingford borders",
      ],
      description:
        "Architectural drawing services in Enfield for extensions, loft conversions, refurbishments, outbuildings and building regulation packs. Survey within 48 hours and full planning submission support.",
      sameAs: ["https://twitter.com/WEDRAWPLANS"],
    }),
    []
  );

  const breadcrumbJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
        { "@type": "ListItem", position: 2, name: "Enfield", item: "https://www.wedrawplans.co.uk/areas/enfield" },
      ],
    }),
    []
  );

  const serviceJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.wedrawplans.co.uk/areas/enfield#service",
      name: "Architectural drawings in Enfield",
      provider: { "@type": "LocalBusiness", "@id": "https://www.wedrawplans.co.uk/areas/enfield#business" },
      areaServed: "London Borough of Enfield",
      serviceType: [
        "Planning drawings",
        "Permitted development drawings",
        "Lawful Development Certificate drawings",
        "Building regulation drawings",
        "Measured survey",
      ],
      description:
        "Planning and building regulation drawing packages for Enfield homes, including extensions, loft conversions, refurbishments and outbuildings.",
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
          name: "Do I need planning permission for a rear extension in Enfield",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions in Enfield can be permitted development, but it depends on your house type, site constraints, and whether restrictions apply. We confirm the best route after a quick review of your address and goals.",
          },
        },
        {
          "@type": "Question",
          name: "Is Enfield strict with loft conversions",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enfield follows national rules but can be stricter in conservation areas and on streets where roof alterations face the road or affect neighbour amenity. We design the scheme to suit local character and guidance.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Enfield Council take to decide",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Timescales vary, but householder applications are commonly decided within several weeks after validation. Lawful Development Certificates can be a safer option if you want written confirmation for a permitted development style scheme.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the full application to Enfield Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can you survey a property in Enfield",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases we can arrange a measured survey within 48 hours, subject to access and location.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings in Enfield | Extensions, Lofts, Building Regs</title>
        <meta
          name="description"
          content="Architectural drawings in Enfield for extensions, loft conversions, refurbishments and building regulation packs. Measured survey within 48 hours, clear drawings, fixed quotes, and full planning submission support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/enfield" />

        <meta property="og:title" content="Architectural Drawings Enfield | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Enfield. Survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/enfield" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings Enfield | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Planning and building regulation drawing packages in Enfield. Survey within 48 hours, fixed quote, and full submission support."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
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
                <span className="font-semibold text-slate-900">Enfield</span> borough page
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
                  Enfield architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and building regs in Enfield
                </h1>

                <p className="mt-2 text-[12px] text-slate-700">
                  Get a fixed fee quote today and book an initial survey within 48 hours
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for Enfield homes, including extensions, loft conversions, refurbishments and outbuildings.
                  Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Measured survey within 48 hours</li>
                  <li>• Planning, prior approval or LDC route confirmed early</li>
                  <li>• Rear, side and wraparound extensions</li>
                  <li>• Loft dormers and hip to gable conversions</li>
                  <li>• Building regulation packs for current standards</li>
                  <li>• Same day response on most enquiries</li>
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

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[190px] w-full">
                    <Image
                      src={ENFIELD_LOCAL_IMAGE}
                      alt="Enfield local streets and home improvement area"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">Local focus</p>
                    <p className="mt-2 text-[13px] text-slate-700">
                      We design schemes that suit Enfield streets, including conservation area constraints, with accurate measured surveys, clean layouts and clear drawings to help approvals run smoothly.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[190px] w-full">
                    <Image
                      src={HERO_IMAGE}
                      alt="Enfield planning support for extensions and lofts"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                      Built for a smooth process
                    </p>
                    <p className="mt-2 text-[13px] text-slate-700">
                      We confirm the best route early, then produce clear drawings for planning and building control so you can move to construction with confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div id="enfield-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build. We will reply with a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Enfield postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="EN1 2AB"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "EN1 2AB")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Garage conversion</option>
                        <option>Outbuilding or garden room</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: 6m rear extension to a semi with open plan kitchen, plus a dormer loft room."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">No obligation. Same day response on most enquiries.</p>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Enfield projects include 3m and 6m rear extensions, wraparound extensions, hip to gable lofts and garden rooms.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Enfield" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Enfield
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for rear and side extensions, double storey additions, loft conversions, internal alterations, outbuildings, conversions and small residential schemes across Enfield.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work across Enfield Town, Southgate, Palmers Green, Winchmore Hill, Oakwood, Grange Park, Bush Hill Park, Edmonton, Ponders End, Enfield Highway, Enfield Lock and Cockfosters.
                  </p>

                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                    >
                      Get a quick quote
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings for an Enfield project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear floor plans, elevations, sections and notes, coordinated with structural design so builders and inspectors have what they need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Enfield areas we cover
                  </h3>

                  <Image
                    src={PROJECT_IMAGE_1}
                    alt="Enfield area and typical home improvement projects"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                    priority
                  />

                  <p className="text-[13px] text-slate-700">Drawings for the whole borough, including:</p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Enfield Town EN1</li>
                      <li>Bush Hill Park EN1</li>
                      <li>Southgate N14</li>
                      <li>Palmers Green N13</li>
                      <li>Winchmore Hill N21</li>
                      <li>Grange Park N21</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Oakwood N14</li>
                      <li>Edmonton N9</li>
                      <li>Ponders End EN3</li>
                      <li>Enfield Highway EN3</li>
                      <li>Enfield Lock EN3</li>
                      <li>Cockfosters EN4</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Enfield
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions</li>
                      <li>Wraparound and L shaped extensions</li>
                      <li>Double storey side additions</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Dormers and roof extensions</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garage conversions</li>
                      <li>Internal reconfiguration</li>
                      <li>Outbuildings and studios</li>
                      <li>Flats and layout changes</li>
                      <li>Building regulation packs</li>
                    </ul>
                  </div>

                  <Image
                    src={PROJECT_IMAGE_2}
                    alt="Completed extension and loft style project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Enfield projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Enfield includes conservation areas and varied street character. Roof alterations and visible extensions can be reviewed closely on certain streets.
                  We shape each scheme to suit local context and neighbour amenity so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission for a rear extension in Enfield</h3>
                    <p>
                      Not always. Many rear extensions in Enfield can be permitted development, but it depends on your house type, site constraints, and whether restrictions apply. We confirm the best route after a quick review of your address and goals.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Is Enfield strict with loft conversions</h3>
                    <p>
                      Enfield follows national rules but can be stricter in conservation areas and on streets where roof alterations face the road or affect neighbour amenity. We design the scheme to suit local character and guidance.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you manage the full application to Enfield Council</h3>
                    <p>
                      Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey a property in Enfield</h3>
                    <p>In most cases we can arrange a measured survey within 48 hours, subject to access and location.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Ready to start your project</h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href="mailto:info@wedrawplans.com" className="font-semibold text-emerald-300 underline">
                    info@wedrawplans.com
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow hover:bg-emerald-100"
                  >
                    Get a quick quote
                  </button>
                </div>
              </div>

              <div className="text-[12px] text-slate-600 pt-2">
                See also{" "}
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-plans" className="underline">
                  loft plans
                </a>{" "}
                and{" "}
                <a href="/new-build-plans" className="underline">
                  new build plans
                </a>
                .
              </div>
            </div>
          </section>

          <PlanningAssistant boroughName="Enfield" onGetQuote={scrollToForm} />
        </main>
      </div>
    </>
  );
}
