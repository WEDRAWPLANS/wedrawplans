import React, { useMemo, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Croydon";

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
        "Hi, I am the WEDRAWPLANS planning assistant for Croydon. Tell me what you want to build and your postcode, and I will guide you to the fastest route for drawings and planning.",
    },
    {
      role: "assistant",
      text:
        "Quick start: type something like rear extension CR0, loft conversion CR2, wraparound extension CR5, or building regs pack CR7.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = useMemo(
    () => [
      "Do I need planning permission in Croydon",
      "Permitted development for rear extension",
      "Loft conversion rules in Croydon",
      "How long does Croydon Council take",
      "Can you do building regs drawings",
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
    const match = t.match(/\bCR\d{1,2}\s?\d?[A-Z]{0,2}\b/g);
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
      { label: "Building regulation pack", terms: ["building regs", "building regulation", "regulations", "building control", "technical", "structural notes"] },
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
    ]);

    const hasTimelineIntent = includesAny(userLower, ["how long", "timeline", "time", "weeks", "months", "decide", "decision"]);
    const hasCostIntent = includesAny(userLower, ["cost", "price", "how much", "fee", "quote", "budget"]);
    const hasSurveyIntent = includesAny(userLower, ["book", "survey", "visit", "measure", "measured", "come out"]);

    const knownPostcode = foundPostcode || postcode;
    const knownType = projectType || null;

    if (hasSurveyIntent) {
      return [
        "We can usually arrange the initial measured survey within 48 hours in Croydon, subject to availability.",
        "Tap Get a quick quote and enter your postcode and project type. We will confirm scope, survey timing and next steps.",
      ];
    }

    if (hasTimelineIntent) {
      return [
        "Typical times: a householder planning application is often decided about 6 to 8 weeks after validation. A Lawful Development Certificate is often about 4 to 6 weeks after validation.",
        "We focus on getting the submission correct first time so validation is not delayed.",
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
        "In Croydon, many extensions and loft conversions can be permitted development, but it depends on house type, location, conservation constraints and any restrictions.",
        "The safest approach is a quick address check, then we recommend permitted development, prior approval, lawful certificate, or full planning where needed.",
        "Share your postcode and what you want to build and I will guide you to the correct route.",
      ];
    }

    if (!knownPostcode || !knownType) {
      const prompts: string[] = [];
      if (!knownType)
        prompts.push("What is your project type: extension, loft, garage conversion, outbuilding, new build, or building regs pack");
      if (!knownPostcode) prompts.push("What is your postcode: for example CR0, CR2, CR5 or CR7");
      return [
        "To give accurate guidance, I need two details.",
        ...prompts,
        "Once I have them, I can recommend the fastest route and you can request a fixed fee quote.",
      ];
    }

    return [
      `Thanks. I have ${knownType}${knownPostcode ? ` for ${knownPostcode}` : ""}.`,
      "Next step: request a fixed fee quote so we can confirm scope, survey timing, and the correct planning route for Croydon.",
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

export default function CroydonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Croydon" });
  }

  function scrollToForm() {
    const el = document.getElementById("croydon-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.wedrawplans.co.uk/areas/croydon#business",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/croydon",
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
        "Croydon",
        "South Croydon",
        "East Croydon",
        "West Croydon",
        "Purley",
        "Coulsdon",
        "Kenley",
        "Sanderstead",
        "Selhurst",
        "Thornton Heath",
        "Norbury",
        "Shirley",
        "New Addington",
      ],
      description:
        "Architectural drawing services in Croydon for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Survey within 48 hours and full planning submission support.",
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
        { "@type": "ListItem", position: 2, name: "Croydon", item: "https://www.wedrawplans.co.uk/areas/croydon" },
      ],
    }),
    []
  );

  const serviceJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.wedrawplans.co.uk/areas/croydon#service",
      name: "Architectural drawings in Croydon",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.wedrawplans.co.uk/areas/croydon#business",
      },
      areaServed: "London Borough of Croydon",
      serviceType: [
        "Planning drawings",
        "Permitted development drawings",
        "Lawful Development Certificate drawings",
        "Building regulation drawings",
        "Measured survey",
      ],
      description:
        "Planning and building regulation drawing packages for Croydon homes, including extensions, loft conversions, refurbishments and outbuildings.",
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
          name: "Do I need planning permission for a rear extension in Croydon",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions can be permitted development, but it depends on your house type, site constraints, and whether any restrictions apply. We confirm the best route after a quick review of your address and goals.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Croydon Council take to decide",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Timescales vary, but householder applications are often decided about 6 to 8 weeks after validation. If you need certainty for a permitted development style scheme, a Lawful Development Certificate can be a safer option.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the full application to Croydon Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision.",
          },
        },
        {
          "@type": "Question",
          name: "What drawings do I get for building regulations",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A coordinated package typically includes plans, elevations, sections, key construction details, notes for compliance, and coordination points for structure, ventilation, insulation, and drainage so builders can price and build correctly.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can you survey a property in Croydon",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases we can arrange a measured survey within 48 hours, subject to access and location.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with side extensions, wrap around extensions, and loft dormers",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We design and draw side extensions, wraparound rear extensions, dormer loft conversions, and internal reconfiguration so the layout works and the planning submission is clear.",
          },
        },
        {
          "@type": "Question",
          name: "Do you cover Purley, Coulsdon, Thornton Heath and Shirley",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We cover the whole borough including Croydon, Purley, Coulsdon, Kenley, Sanderstead, Selhurst, Thornton Heath, Norbury, Shirley and New Addington.",
          },
        },
        {
          "@type": "Question",
          name: "What is the fastest way to get a fixed fee quote",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Send your postcode and project type, then share one line describing what you want to build. We reply with a fixed fee, scope, and the recommended planning route for your address.",
          },
        },
      ],
    }),
    []
  );

  const visibleFaq = useMemo(
    () => [
      {
        q: "Do I need planning permission for a rear extension in Croydon",
        a: "Not always. Many rear extensions can be permitted development, but it depends on your house type, site constraints, and whether any restrictions apply. We confirm the best route after a quick review of your address and goals.",
      },
      {
        q: "How long does Croydon Council take to decide",
        a: "Timescales vary, but householder applications are often decided about 6 to 8 weeks after validation. If you need certainty for a permitted development style scheme, a Lawful Development Certificate can be a safer option.",
      },
      {
        q: "Do you manage the full application to Croydon Council",
        a: "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision.",
      },
      {
        q: "What drawings do I get for building regulations",
        a: "A coordinated package typically includes plans, elevations, sections, key construction details, notes for compliance, and coordination points for structure, ventilation, insulation, and drainage so builders can price and build correctly.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings in Croydon | Extensions, Lofts, Building Regs</title>
        <meta
          name="description"
          content="Architectural drawings in Croydon for extensions, loft conversions, refurbishments and building regulation plans. Measured survey within 48 hours, clear drawings, fixed quotes, and full planning submission support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/croydon" />
        <meta property="og:title" content="Architectural Drawings Croydon | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Croydon. Survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/croydon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings Croydon | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Planning and building regulation drawing packages in Croydon. Survey within 48 hours, fixed quote, and full submission support."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <AreaTopHeader />

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col gap-6 px-4 py-8 lg:flex-row lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Croydon architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px]">
                  Plans for extensions, lofts and building regs in Croydon
                </h1>

                <p className="mt-2 text-[12px] font-semibold text-slate-800">
                  Local London designers • Fixed fee guaranteed • Council ready drawings
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for Croydon homes, including extensions, loft
                  conversions, refurbishments and outbuildings. Fixed fees with clear scope and fast communication. Close
                  to East Croydon and West Croydon stations, with projects also covering Purley and Coulsdon streets.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Measured survey within 48 hours</li>
                  <li>• Planning, prior approval or lawful certificate route confirmed early</li>
                  <li>• Rear, side and wraparound extensions</li>
                  <li>• Loft dormers and hip to gable conversions</li>
                  <li>• Building regulation packs for 2025 standards</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <p className="mt-4 text-[13px] text-slate-700">
                  Recent projects in Croydon include rear extensions, side returns and loft conversions across CR0, CR2,
                  CR5 and CR7.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Fast route for Croydon homeowners
                  </div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px] text-slate-700">
                    <div className="rounded-xl border border-slate-100 p-3">
                      <div className="font-semibold text-slate-900">Step 1</div>
                      <div>Send postcode and project type</div>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-3">
                      <div className="font-semibold text-slate-900">Step 2</div>
                      <div>Survey within 48 hours</div>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-3">
                      <div className="font-semibold text-slate-900">Step 3</div>
                      <div>Fixed fee drawings and submission support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="croydon-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build. We will reply with a clear fixed fee
                    for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Croydon postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="CR0 1AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "CR0 1AA")}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 outline-none focus:border-[#64b7c4] focus:text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 outline-none focus:border-[#64b7c4]"
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
                        placeholder="For example: wraparound extension to a semi detached house with open plan kitchen and a dormer loft room."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 outline-none focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-600 mt-2">No obligation. Same day response on most enquiries.</p>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Croydon projects include wraparound extensions, loft dormers, garage conversions and full refurbishments.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Croydon" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-6">
              <div className="grid items-start gap-10 md:grid-cols-[1.7fr,1.3fr]">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Croydon
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS prepare full drawing packages for rear and side extensions, loft conversions, refurbishments,
                    internal alterations, outbuildings and small residential development projects across Croydon. Our drawings
                    are set out clearly for planning review and for builders to price accurately.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We cover Croydon, South Croydon, Purley, Coulsdon, Kenley, Sanderstead, Selhurst, Thornton Heath, Norbury,
                    Shirley, New Addington and nearby streets.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                    >
                      Get a quick quote
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">What you get</div>
                      <ul className="mt-3 list-disc pl-5 space-y-1 text-[13px] text-slate-700">
                        <li>Measured survey and existing drawings</li>
                        <li>Proposed plans, elevations and sections</li>
                        <li>Planning submission support if required</li>
                        <li>Building regs drawings when needed</li>
                        <li>Structural coordination and key details</li>
                        <li>Fast revisions and clear scope control</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">Built for certainty</div>
                      <ul className="mt-3 list-disc pl-5 space-y-1 text-[13px] text-slate-700">
                        <li>Fixed fee quote with deliverables listed</li>
                        <li>Survey within 48 hours where possible</li>
                        <li>Croydon route advice early</li>
                        <li>WhatsApp updates if you prefer</li>
                        <li>Clear next steps after every stage</li>
                        <li>Support through submission</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings for a Croydon extension"
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover md:h-56"
                  />
                  <div className="space-y-2 p-5">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear plans, elevations, sections and notes, coordinated with structural design so builders and inspectors have what they need.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={scrollToForm}
                        className="w-full rounded-full bg-slate-900 px-5 py-2.5 text-white text-[12px] font-semibold uppercase tracking-[0.16em] hover:bg-slate-800"
                      >
                        Get a fixed fee quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Croydon areas we cover
                  </h3>
                  <Image
                    src="/images/croydon-area.jpg"
                    alt="Croydon local area"
                    width={800}
                    height={500}
                    className="mb-3 rounded-xl object-cover"
                  />
                  <p className="text-[13px] text-slate-700">Drawings for the whole borough of Croydon, including:</p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Croydon</li>
                      <li>South Croydon</li>
                      <li>Purley</li>
                      <li>Coulsdon</li>
                      <li>Kenley</li>
                      <li>Sanderstead</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Thornton Heath</li>
                      <li>Norbury</li>
                      <li>Shirley</li>
                      <li>New Addington</li>
                      <li>Selhurst</li>
                      <li>Surrounding streets and estates</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Croydon
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>3 m and larger rear extensions</li>
                      <li>Wraparound and L shaped extensions</li>
                      <li>Side extensions and infill extensions</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Rear dormers with ensuite</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Garage conversions</li>
                      <li>Internal reconfiguration</li>
                      <li>Outbuildings and studios</li>
                      <li>Flats, HMOs and change of use</li>
                      <li>Small new build schemes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Permitted development limits in Croydon
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your house type, location and any Article 4 directions.
                </p>

                <div className="grid gap-8 text-[13px] text-slate-700 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">Rear extensions</h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Up to 3 m deep on terrace houses</li>
                      <li>Up to 4 m on semi detached houses</li>
                      <li>Up to 6 to 8 m with prior approval</li>
                      <li>Maximum 4 m high for single storey</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">Loft conversions</h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Up to 40 to 50 cubic metres volume</li>
                      <li>No extensions on the front roof slope</li>
                      <li>Side windows obscure glazed and fixed</li>
                      <li>External materials to be similar</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">Outbuildings</h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Maximum 2.5 m high near boundaries</li>
                      <li>Cannot be used as a separate dwelling</li>
                      <li>Use must be incidental to the house</li>
                      <li>Not more than 50 percent of garden area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Croydon
                  </h3>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Drainage and construction notes</li>
                    <li>Design statements where required</li>
                  </ul>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Croydon
                  </h3>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Structural layouts and coordination with engineer</li>
                    <li>Foundation, beam and bearing information</li>
                    <li>Fire safety and escape routes</li>
                    <li>Thermal build ups and insulation specs</li>
                    <li>Ventilation and extract positions</li>
                    <li>Drainage runs and manhole information</li>
                  </ul>
                </div>
              </div>

              <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions in Croydon
                </h2>

                <div className="mt-6 space-y-5">
                  {visibleFaq.map((item) => (
                    <div key={item.q} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                      <h3 className="text-[13px] font-semibold text-slate-900">{item.q}</h3>
                      <p className="mt-2 text-[13px] text-slate-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Croydon projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Croydon includes conservation areas, mixed housing stock and many family homes with scope for larger extensions and loft conversions. We shape each scheme to suit local character and neighbour amenity so approval chances are as strong as possible.
                </p>
                <div className="flex flex-wrap gap-3 items-center pt-2">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-emerald-900 px-5 py-2.5 text-white text-[12px] font-semibold uppercase tracking-[0.16em] hover:bg-emerald-800"
                  >
                    Request a fixed fee quote
                  </button>
                  <a href={PHONE_LINK} className="text-[12px] underline text-emerald-900 font-semibold">
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:p-8">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Ready to start your project</h2>
                  <p className="mt-2 text-[13px] text-slate-300">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">Prefer to speak. Call 020 3654 8508</p>
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

              <div className="pt-2 text-[12px] text-slate-600">
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

          <PlanningAssistant boroughName="Croydon" onGetQuote={scrollToForm} />
        </main>
      </div>
    </>
  );
}
