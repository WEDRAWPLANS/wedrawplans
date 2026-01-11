import React, { useMemo, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Barnet";

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
        "Hi, I am the WEDRAWPLANS planning assistant for Barnet. Tell me what you want to build and your postcode, and I will guide you to the fastest route for drawings and planning.",
    },
    {
      role: "assistant",
      text:
        "Quick start: type something like rear extension N20, loft conversion NW4, or building regs pack EN5.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = useMemo(
    () => [
      "Do I need planning permission in Barnet",
      "Permitted development for rear extension",
      "Loft conversion rules",
      "How long does Barnet Council take",
      "How much do drawings cost",
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
    const match = t.match(/\b(N|NW|EN)\d{1,2}\s?\d?[A-Z]{0,2}\b/g);
    if (!match) return null;
    return match[0].replace(/\s+/g, " ").trim();
  }

  function generateAssistantReply(userTextRaw: string) {
    const userText = sanitizeText(userTextRaw);
    const userLower = userText.toLowerCase();

    const foundPostcode = extractPostcode(userText);
    if (foundPostcode && !postcode) setPostcode(foundPostcode);

    const projectSignals: Array<{ key: string; label: string; terms: string[] }> = [
      { key: "extension", label: "House extension", terms: ["extension", "rear", "side", "wrap", "wraparound", "kitchen", "dining"] },
      { key: "loft", label: "Loft conversion", terms: ["loft", "dormer", "hip", "gable", "mansard", "roof"] },
      { key: "regs", label: "Building regulation pack", terms: ["building regs", "building regulation", "regulations", "building control", "technical"] },
      { key: "newbuild", label: "New build house", terms: ["new build", "newbuild", "self build", "house build"] },
      { key: "conversion", label: "Conversion to flats", terms: ["flat", "flats", "conversion", "hmo", "studio", "change of use"] },
      { key: "internal", label: "Internal remodelling", terms: ["internal", "knock through", "open plan", "layout", "reconfigure"] },
      { key: "outbuilding", label: "Outbuilding or garden room", terms: ["outbuilding", "garden room", "studio", "annexe", "shed"] },
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
    ]);

    const hasTimelineIntent = includesAny(userLower, ["how long", "timeline", "time", "weeks", "months", "decide", "decision"]);
    const hasCostIntent = includesAny(userLower, ["cost", "price", "how much", "fee", "quote", "budget"]);
    const hasLoftIntent = includesAny(userLower, ["loft", "dormer", "hip", "gable", "mansard", "roof"]);
    const hasExtensionIntent = includesAny(userLower, ["rear extension", "side return", "wrap", "extension", "kitchen", "single storey", "double storey"]);

    const knownPostcode = foundPostcode || postcode;
    const knownType =
      projectType ||
      (hasLoftIntent ? "Loft conversion" : hasExtensionIntent ? "House extension" : null);

    if (includesAny(userLower, ["book", "survey", "visit", "measure", "measured"])) {
      return [
        "We can usually arrange the initial measured survey within 48 hours in Barnet, subject to availability.",
        "If you want, tap Get a quick quote and enter your postcode and project type. We will confirm the next available survey slot.",
      ];
    }

    if (hasTimelineIntent) {
      return [
        "Typical times: a householder planning application is often 6 to 8 weeks after validation. A Lawful Development Certificate is often 4 to 6 weeks after validation.",
        "We focus on getting the submission correct first time so validation is not delayed.",
        "Tell me your postcode and what you want to build and I will suggest the best route for Barnet.",
      ];
    }

    if (hasCostIntent) {
      return [
        "We price drawings as fixed fees with a clear scope so you know exactly what you get.",
        "For the fastest accurate quote, share your postcode and project type. If you can, add a one line description like rear extension to a semi or dormer loft with ensuite.",
        "You can also tap Get a quick quote and complete the form in 60 seconds.",
      ];
    }

    if (hasPlanningIntent) {
      return [
        "In Barnet, many home extensions and loft conversions can be permitted development, but it depends on house type, location, conservation status, and any local restrictions.",
        "The safest approach is a quick check against your address and proposal, then we recommend either permitted development, prior approval, lawful certificate, or full planning where needed.",
        "Share your postcode and what you want to build and I will guide you to the correct route.",
      ];
    }

    if (hasLoftIntent) {
      return [
        "Loft conversions in Barnet often work well as rear dormers and hip to gable layouts, depending on roof shape and permitted development limits.",
        "Key checks include volume allowance, front roof restrictions, and side window rules. Conservation areas and corner plots may require more careful design.",
        "Share your postcode and your roof idea and I will tell you the likely path, then you can request a fixed fee quote.",
      ];
    }

    if (hasExtensionIntent) {
      return [
        "Rear and wraparound extensions are common in Barnet. The route can be permitted development, prior approval, or full planning depending on depth, height, and location.",
        "Share your postcode and a simple description like 4m rear extension or wraparound kitchen extension, and I will guide you to the best route.",
      ];
    }

    if (!knownPostcode || !knownType) {
      const prompts: string[] = [];
      if (!knownType) prompts.push("What is your project type: extension, loft, new build, internal, or building regs pack");
      if (!knownPostcode) prompts.push("What is your postcode: for example N20, NW4, or EN5");
      return [
        "To give accurate guidance, I need two details.",
        ...prompts,
        "Once I have them, I can recommend the fastest route and you can request a fixed fee quote.",
      ];
    }

    return [
      `Thanks. I have ${knownType}${knownPostcode ? ` for ${knownPostcode}` : ""}.`,
      "Next step: request a fixed fee quote so we can confirm scope, survey timing, and the correct planning route for Barnet.",
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

export default function BarnetAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Barnet" });
  }

  function scrollToForm() {
    const el = document.getElementById("barnet-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/barnet",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/hero.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Barnet",
        "Finchley",
        "Hendon",
        "Golders Green",
        "Mill Hill",
        "Edgware borders",
        "Colindale",
        "Burnt Oak",
        "Whetstone",
        "Totteridge",
        "High Barnet",
        "New Barnet",
        "East Barnet",
        "Friern Barnet",
        "Chipping Barnet",
      ],
      description:
        "Architectural drawing services in Barnet for extensions, loft conversions, refurbishments, conversions and building regulation packs. Fixed fees with clear scope, survey within 48 hours and fast communication.",
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
          name: "Do I need planning permission for a rear extension in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions in Barnet can be permitted development, depending on house type, depth, height and location. We confirm the correct route after checking your address.",
          },
        },
        {
          "@type": "Question",
          name: "Are loft conversions usually approved in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many loft conversions are acceptable in Barnet where design is proportionate and respects street character. Conservation areas and corner plots can require more careful design and sometimes full planning.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Barnet Council take to decide planning applications",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications are normally decided within 6 to 8 weeks after validation. Lawful Development Certificates are typically around 4 to 6 weeks, depending on workload.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the submission to Barnet Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, submit via the Planning Portal, monitor progress and respond to planning officer queries where needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare building regulation drawings for Barnet projects",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare technical drawings for Building Control, including sections, construction notes, insulation build ups, ventilation layouts, and coordination with structural design.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you carry out a measured survey in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to availability and access.",
          },
        },
        {
          "@type": "Question",
          name: "What drawings are usually required for a Barnet planning submission",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Typical requirements include existing and proposed floor plans, elevations, roof plans, sections, and a site location plan and block plan. We confirm the exact list based on your proposal.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate structural engineer calculations",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We coordinate with structural engineers so steels, load paths, and critical details align with the drawings and the build.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings in Barnet | Planning and Building Regs Plans</title>
        <meta
          name="description"
          content="Architectural drawings in Barnet for extensions, loft conversions, planning applications and building regulation packs. Fixed fees, clear scope, survey within 48 hours and fast communication."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/barnet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
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
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Barnet architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and new builds in Barnet
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions, new builds
                  and conversions across the London Borough of Barnet. Fixed fees with clear scope and fast
                  communication, focused on approval ready submissions and buildable technical packs.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions, side return and wraparound extensions</li>
                  <li>• Loft conversions including dormers, hip to gable and mansards where suitable</li>
                  <li>• New build houses and small residential schemes</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Finchley, Hendon, Mill Hill, Whetstone, Totteridge and High Barnet</li>
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

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Fast route for Barnet homeowners
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

              <div id="barnet-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build. We will reply with a clear fixed
                    fee for your drawings and the recommended next steps for Barnet.
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
                      <label className="text-[11px] font-medium">Barnet postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="N20 0JZ"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "N20 0JZ")}
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
                        placeholder="For example: rear extension to a 1930s semi with a new open plan kitchen diner and a loft bedroom."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <div className="text-[11px] text-slate-500 mt-2 space-y-1">
                      <div>Typical Barnet projects include rear extensions, loft conversions, wraparound extensions and side returns.</div>
                      <div>We reply with a clear scope, fixed fee, and the recommended planning route for your address.</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Barnet" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Barnet
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS deliver planning drawings and technical packs for Barnet homeowners and property
                    developers. We design and draw single storey and double storey house extensions, side return and
                    wraparound extensions, loft conversions, internal reconfiguration, outbuildings, and small new build
                    schemes. Every package is structured to reduce delays, improve approval confidence, and give builders
                    clear information to price and build accurately.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Finchley, Hendon, Golders Green, Mill Hill, Whetstone, Totteridge, High Barnet,
                    East Barnet, New Barnet, Friern Barnet and nearby streets. If you are in N20, NW4, EN5 or close by,
                    we can advise quickly.
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

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        What you get
                      </div>
                      <ul className="mt-3 list-disc pl-5 space-y-1 text-[13px] text-slate-700">
                        <li>Measured survey and existing drawings</li>
                        <li>Proposed plans, elevations and sections</li>
                        <li>Planning submission support if required</li>
                        <li>Building regs drawings when needed</li>
                        <li>Structural coordination and details</li>
                        <li>Fast revisions and clear scope control</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Built for lead certainty
                      </div>
                      <ul className="mt-3 list-disc pl-5 space-y-1 text-[13px] text-slate-700">
                        <li>Fixed fee quote with deliverables listed</li>
                        <li>Survey within 48 hours where possible</li>
                        <li>Barnet specific planning route guidance</li>
                        <li>WhatsApp updates if you prefer</li>
                        <li>Clear next steps after every stage</li>
                        <li>Support until submission is complete</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings for a Barnet extension"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear floor plans, elevations, sections and notes, coordinated with structural design so builders,
                      Building Control and inspectors have what they need for accurate pricing and site delivery.
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

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Barnet areas we cover
                  </h3>
                  <Image
                    src="/images/hero.jpg"
                    alt="Barnet streets and local housing"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">Drawings for the whole borough of Barnet, including:</p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Finchley</li>
                      <li>Hendon</li>
                      <li>Mill Hill</li>
                      <li>Whetstone</li>
                      <li>Totteridge</li>
                      <li>High Barnet</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Golders Green</li>
                      <li>Colindale</li>
                      <li>Burnt Oak</li>
                      <li>East Barnet</li>
                      <li>New Barnet</li>
                      <li>Friern Barnet</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Barnet
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>3m and larger rear extensions</li>
                      <li>Wraparound and L shaped extensions</li>
                      <li>Side extensions and infill extensions</li>
                      <li>Dormer loft conversions</li>
                      <li>Hip to gable loft conversions</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garage conversions</li>
                      <li>Internal reconfiguration</li>
                      <li>Outbuildings and studios</li>
                      <li>Flats, HMOs and change of use</li>
                      <li>Small new build schemes</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Completed extension and loft project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Permitted development limits in Barnet
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your
                  house type, location and any Article 4 directions or restrictions on your property.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Rear extensions</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 3m deep on terrace houses</li>
                      <li>Up to 4m on semi detached houses</li>
                      <li>Up to 6m to 8m with prior approval where eligible</li>
                      <li>Maximum 4m high for many single storey cases</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Loft conversions</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Volume allowance typically 40 to 50 cubic metres depending on house type</li>
                      <li>No extensions on the front roof slope in many cases</li>
                      <li>Side windows often require obscure glazing and fixed opening</li>
                      <li>External materials should be similar to existing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Outbuildings</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Maximum 2.5m high near boundaries in many cases</li>
                      <li>Cannot be used as a separate dwelling</li>
                      <li>Use must be incidental to the main house</li>
                      <li>Not more than 50 percent of garden area covered by buildings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Barnet
                  </h3>
                  <p className="text-[13px] text-slate-700">
                    Our Barnet planning drawings are set out for smooth validation and clear review. We make sure key
                    heights, depths and neighbour relationships are communicated properly to reduce unnecessary planning
                    queries.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plan and site location plan</li>
                    <li>Key notes to support clarity and validation</li>
                    <li>Design statement support where needed</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Barnet
                  </h3>
                  <p className="text-[13px] text-slate-700">
                    Our Barnet building regs packs focus on buildability and compliance. They reduce site questions, help
                    builders price accurately, and give Building Control the technical information they need.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Structural layout coordination and key details</li>
                    <li>Foundation strategy notes and critical junctions</li>
                    <li>Fire safety approach and escape routes where required</li>
                    <li>Thermal build ups and insulation specification</li>
                    <li>Ventilation and extract positions</li>
                    <li>Drainage strategy and basic layouts where required</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Barnet projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Barnet includes conservation areas and character streets where design, scale and materials matter
                  more. We shape each scheme to suit local context so approval confidence is as strong as possible while
                  keeping layouts practical for build cost and space gain.
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

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Barnet</h3>
                    <p>
                      Many extensions and lofts can be permitted development. We check your address and advise the best
                      route from the start so you avoid delays.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial measured survey within 48 hours of instruction.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Barnet Council</h3>
                    <p>Yes. We handle submission, monitor progress and respond to planning officer queries.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown
                      correctly on the drawings.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How do you help approval chances in Barnet</h3>
                    <p>
                      We set out clear dimensions, neighbour relationships and proportionate design. In conservation
                      areas we focus on character, materials and roof form so the proposal reads well to planners.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">What is the next step</h3>
                    <p>
                      Send your postcode and a short description. We reply with a fixed fee and the recommended route:
                      permitted development, lawful certificate, prior approval or full planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Ready to start your project</h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next
                    steps.
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

          <PlanningAssistant boroughName="Barnet" onGetQuote={scrollToForm} />
        </main>
      </div>
    </>
  );
}
