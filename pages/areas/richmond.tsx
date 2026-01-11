// pages/areas/richmond.tsx
import Head from "next/head";
import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Richmond%20upon%20Thames";

const HERO_IMAGE = "/images/richmond-hero.jpg";
const RICHMOND_LOCAL_IMAGE = "/images/richmond-local.jpg";
const PROJECT_IMAGE_1 = "/images/richmond-project-1.jpg";
const PROJECT_IMAGE_2 = "/images/richmond-project-2.jpg";

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
        "Hi, I am the WEDRAWPLANS planning assistant for Richmond upon Thames. Tell me what you want to build and your postcode, and I will guide you to the fastest route for drawings and planning.",
    },
    {
      role: "assistant",
      text:
        "Quick start: type something like rear extension TW10, loft conversion TW1, wraparound extension TW9, or building regs pack SW14.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = useMemo(
    () => [
      "Do I need planning permission in Richmond upon Thames",
      "Permitted development for rear extension",
      "Loft conversion rules and dormers",
      "How long does Richmond Council take",
      "Conservation area and Article 4 checks",
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
    const match = t.match(/\b(TW|SW|KT)\d{1,2}\s?\d?[A-Z]{0,2}\b/g);
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
      "river",
      "riverside",
    ]);

    const hasTimelineIntent = includesAny(userLower, ["how long", "timeline", "time", "weeks", "months", "decide", "decision"]);
    const hasCostIntent = includesAny(userLower, ["cost", "price", "how much", "fee", "quote", "budget"]);
    const hasSurveyIntent = includesAny(userLower, ["book", "survey", "visit", "measure", "measured", "come out"]);

    const knownPostcode = foundPostcode || postcode;
    const knownType = projectType || null;

    if (hasSurveyIntent) {
      return [
        "We can usually arrange the initial measured survey within 48 hours in Richmond upon Thames, subject to availability.",
        "Tap Get a quick quote and enter your postcode and project type. We will confirm scope, survey timing and next steps.",
      ];
    }

    if (hasTimelineIntent) {
      return [
        "Typical times: a householder planning application is often decided about 6 to 8 weeks after validation. A Lawful Development Certificate is often about 4 to 6 weeks after validation.",
        "Richmond can be sensitive in conservation areas, so we focus on a clean submission to avoid validation delays.",
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
        "In Richmond upon Thames, many house extensions and loft conversions can be permitted development, but it depends on house type, previous extensions, and whether you are in a conservation area or subject to an Article 4 direction.",
        "Flats usually need full planning permission. Roof changes and dormers are often reviewed closely where they affect the street scene.",
        "Share your postcode and what you want to build and I will guide you to the correct route.",
      ];
    }

    if (!knownPostcode || !knownType) {
      const prompts: string[] = [];
      if (!knownType)
        prompts.push("What is your project type: extension, loft, garage conversion, outbuilding, new build, or building regs pack");
      if (!knownPostcode) prompts.push("What is your postcode: for example TW1, TW9, TW10, SW14");
      return [
        "To give accurate guidance, I need two details.",
        ...prompts,
        "Once I have them, I can recommend the fastest route and you can request a fixed fee quote.",
      ];
    }

    return [
      `Thanks. I have ${knownType}${knownPostcode ? ` for ${knownPostcode}` : ""}.`,
      "Next step: request a fixed fee quote so we can confirm scope, survey timing, and the correct planning route for your address in Richmond upon Thames.",
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

export default function RichmondAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Richmond upon Thames" });
  }

  function scrollToForm() {
    const el = document.getElementById("richmond-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/richmond",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Richmond upon Thames",
        "Richmond",
        "Twickenham",
        "Kew",
        "Kew Gardens",
        "Barnes",
        "Mortlake",
        "East Sheen",
        "North Sheen",
        "St Margarets",
        "Teddington",
        "Hampton",
        "Hampton Wick",
        "Ham",
        "Petersham",
        "Whitton",
      ],
      description:
        "Architectural drawing services in Richmond upon Thames for extensions, loft conversions, refurbishments, conversions and building regulation packs. Fixed fees with clear scope and fast communication.",
      priceRange: "££",
      sameAs: ["https://twitter.com/WEDRAWPLANS"],
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
          name: "Do I need planning permission for a rear extension in Richmond upon Thames",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many house extensions can be permitted development, but this depends on your house type, previous extensions, and whether you are in a conservation area or subject to an Article 4 direction. We confirm the correct route once we review your address and proposal.",
          },
        },
        {
          "@type": "Question",
          name: "Is Richmond strict with loft conversions",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Richmond upon Thames can be stricter in conservation areas and where roof alterations affect the street scene. Well designed dormers, careful window positions, and a clear set of drawings usually make the process smoother.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Richmond Council take to decide",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications usually take six to eight weeks after validation. Lawful Development Certificates are often around four to six weeks, depending on workload and the completeness of the submission.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the full application to Richmond upon Thames Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare the drawings, complete the forms, upload documents, submit to the council and respond to planning officer queries until a decision is issued.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you survey a property in Richmond upon Thames",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases we can arrange a measured survey within 48 hours, subject to access and location.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings in Richmond upon Thames | Extensions, Lofts, New Builds</title>
        <meta
          name="description"
          content="Architectural drawings in Richmond upon Thames for house extensions, loft conversions, refurbishments, conversions and building regulation packs. Fixed fees with clear scope and fast communication."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/richmond" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }} />
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
                <span className="font-semibold text-slate-900">Richmond upon Thames</span> borough page
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
                  Richmond upon Thames architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and new builds in Richmond upon Thames
                </h1>

                <p className="mt-2 text-[12px] text-slate-700">
                  Get a fixed fee quote today and book an initial survey within 48 hours
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions, refurbishments and small residential schemes across Richmond upon Thames.
                  Clear scope, fast communication and a smooth process from start to submission.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions, wraparound extensions and internal remodelling</li>
                  <li>• Loft conversions including hip to gable and dormers</li>
                  <li>• New build houses and small residential schemes</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Richmond, Twickenham, Kew, Barnes, Teddington and more</li>
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
                      src={RICHMOND_LOCAL_IMAGE}
                      alt="Richmond upon Thames local street and home improvement area"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                      Local focus
                    </p>
                    <p className="mt-2 text-[13px] text-slate-700">
                      We design schemes that suit Richmond streets, including conservation area constraints, with accurate measured surveys, clean layouts and clear drawings to help approvals run smoothly.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-[190px] w-full">
                    <Image
                      src={HERO_IMAGE}
                      alt="Richmond upon Thames planning support for extensions and lofts"
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

              <div id="richmond-quote" className="lg:w-1/2">
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
                      <label className="text-[11px] font-medium">Richmond upon Thames postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="TW10 6XX"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "TW10 6XX")}
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
                        placeholder="For example: rear extension to a Victorian terrace in Twickenham with new open plan kitchen."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Richmond projects include rear extensions, loft conversions, refurbishments and internal remodelling.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Richmond upon Thames" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Richmond upon Thames
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for single and double storey extensions, loft conversions, internal alterations, outbuildings, flat conversions and small new developments across Richmond upon Thames.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Richmond, Twickenham, St Margarets, Kew, Barnes, Mortlake, East Sheen, North Sheen, Teddington, Hampton, Hampton Wick, Petersham, Ham and Whitton.
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
                    alt="Example of architectural drawings for a Richmond upon Thames extension"
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
                    Richmond areas we cover
                  </h3>

                  <Image
                    src="/images/richmond-area.jpg"
                    alt="Richmond upon Thames area map and coverage"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />

                  <p className="text-[13px] text-slate-700">Drawings for the whole borough, including:</p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Richmond and North Sheen</li>
                      <li>East Sheen and Mortlake</li>
                      <li>Barnes and Kew</li>
                      <li>St Margarets</li>
                      <li>Twickenham</li>
                      <li>Teddington</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Hampton and Hampton Wick</li>
                      <li>Ham and Petersham</li>
                      <li>Whitton</li>
                      <li>Corner plots and side access</li>
                      <li>River facing streets</li>
                      <li>Conservation area streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Richmond
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions</li>
                      <li>Wraparound and L shaped extensions</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Rear dormers</li>
                      <li>Kitchen and open plan layouts</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garden studios and outbuildings</li>
                      <li>Garage conversions</li>
                      <li>Internal reconfiguration</li>
                      <li>Flats and conversions where suitable</li>
                      <li>Small new build schemes</li>
                    </ul>
                  </div>

                  <Image
                    src={PROJECT_IMAGE_1}
                    alt="Richmond upon Thames project example"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
                  <div className="relative h-56 w-full">
                    <Image
                      src={PROJECT_IMAGE_2}
                      alt="Richmond loft and extension drawing example"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear packs for planning and building control
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      We provide drawing packs that help you obtain planning approval and move into construction with the right information.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Permitted development limits in Richmond upon Thames
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    This is a simplified guide to common permitted development limits. Final confirmation depends on your house type, location and any Article 4 directions or conservation area constraints.
                  </p>

                  <div className="grid gap-6 text-[13px] text-slate-700">
                    <div>
                      <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Rear extensions</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Up to 3 m deep on terraces</li>
                        <li>Up to 4 m on semi detached houses</li>
                        <li>Up to 6 to 8 m with prior approval</li>
                        <li>Maximum 4 m high for single storey</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Loft conversions</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Up to 40 to 50 cubic metres volume</li>
                        <li>No extensions on the front roof slope</li>
                        <li>Side windows obscure glazed and fixed</li>
                        <li>External materials to be similar</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Outbuildings</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Maximum 2.5 m high near boundaries</li>
                        <li>Cannot be used as a separate dwelling</li>
                        <li>Use must be incidental to the house</li>
                        <li>Not more than 50 percent of garden area</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Richmond
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Drainage and construction notes</li>
                    <li>Design and access statements where needed</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Richmond
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Structural layouts and coordination</li>
                    <li>Foundation and beam information</li>
                    <li>Fire safety and escape routes</li>
                    <li>Thermal build ups and insulation specs</li>
                    <li>Ventilation and extract positions</li>
                    <li>Drainage runs and manhole information</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Richmond upon Thames projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Richmond upon Thames includes conservation areas and heritage streets, plus tighter design expectations for roof alterations and visible extensions. We shape each scheme to fit the local context so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Richmond upon Thames</h3>
                    <p>
                      Many extensions and lofts can proceed under permitted development, but conservation areas and Article 4 directions can change what is allowed. We check your address and advise the best route at the start.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial measured survey within 48 hours of instruction.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Richmond Council</h3>
                    <p>Yes. We handle the submission, monitor progress and respond to planning officer queries.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>Yes. We coordinate with structural engineers so beams and load paths are designed and shown correctly on the drawings.</p>
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

          <PlanningAssistant boroughName="Richmond upon Thames" onGetQuote={scrollToForm} />
        </main>
      </div>
    </>
  );
}
