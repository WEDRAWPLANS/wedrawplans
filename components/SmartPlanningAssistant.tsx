import React, { useEffect, useMemo, useRef, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

interface SmartPlanningAssistantProps {
  boroughName?: string;
}

type FlowStep =
  | "project"
  | "property"
  | "postcode"
  | "stage"
  | "details"
  | "contactName"
  | "contactPhone"
  | "contactEmail"
  | "review"
  | "done";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

type GuidanceCard = {
  routeTitle: string;
  routeBody: string;
  timing: string;
  drawings: string[];
  cautions: string[];
};

const PROJECT_TYPES = [
  "Rear extension",
  "Side or wrap extension",
  "Loft conversion",
  "Garage conversion",
  "Outbuilding or garden room",
  "Internal remodelling",
  "Building regulations only",
  "New build house",
  "Flat conversion or HMO",
  "Shopfront alteration",
  "Restaurant or takeaway fit-out",
  "Office fit-out",
  "Change of use",
  "Other project",
] as const;

const PROPERTY_TYPES = [
  "House",
  "Flat or maisonette",
  "Commercial unit or shop",
  "Restaurant or takeaway",
  "Office",
  "Mixed-use building",
  "Other property",
] as const;

const STAGES = [
  "Just exploring ideas",
  "Need planning drawings",
  "Need building regulations",
  "Ready to start soon",
] as const;

const QUICK_QUESTIONS = [
  "Will I need planning permission?",
  "Could this be permitted development?",
  "How long does approval usually take?",
  "What drawings are normally needed?",
  "Can you handle commercial projects too?",
  "Can you arrange survey quickly?",
] as const;

function includesAny(haystack: string, needles: string[]) {
  const s = haystack.toLowerCase();
  return needles.some((n) => s.includes(n));
}

function sanitizeText(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

function isValidUkPostcodeLoose(value: string) {
  const v = value.trim().toUpperCase();
  if (!v) return false;
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(v);
}

function normalisePhone(value: string) {
  const raw = value.trim();
  if (!raw) return "";
  const keepPlus = raw.startsWith("+");
  const digits = raw.replace(/[^\d]/g, "");
  return keepPlus ? `+${digits}` : digits;
}

function detectGuidance(args: {
  boroughName: string;
  projectType: string;
  propertyType: string;
  stage: string;
}): GuidanceCard {
  const { boroughName, projectType, propertyType, stage } = args;

  const isFlatLike = propertyType === "Flat or maisonette";
  const isCommercial =
    propertyType === "Commercial unit or shop" ||
    propertyType === "Restaurant or takeaway" ||
    propertyType === "Office" ||
    propertyType === "Mixed-use building" ||
    includesAny(projectType, ["shopfront", "restaurant", "office", "change of use"]);

  const wantsRegsOnly = projectType === "Building regulations only";
  const isExtension = includesAny(projectType, ["extension"]);
  const isLoft = includesAny(projectType, ["loft"]);
  const isGarage = includesAny(projectType, ["garage"]);
  const isOutbuilding = includesAny(projectType, ["outbuilding", "garden room"]);
  const isNewBuild = includesAny(projectType, ["new build"]);
  const isFlats = includesAny(projectType, ["flat conversion", "hmo"]);
  const isInternal = includesAny(projectType, ["internal"]);
  const isShopfront = includesAny(projectType, ["shopfront"]);
  const isChangeOfUse = includesAny(projectType, ["change of use"]);

  if (wantsRegsOnly) {
    return {
      routeTitle: "Likely route: technical pack and building regulations",
      routeBody: `This looks more like a technical and compliance package for ${boroughName}. The next stage is usually measured survey information, technical drawings, key construction details and Building Control coordination.`,
      timing:
        stage === "Ready to start soon"
          ? "Fastest path: measured survey first, then the technical pack and Building Control route."
          : "Usual path: fix the design first, then move into the technical and Building Regulations pack.",
      drawings: [
        "Existing and proposed plans where needed",
        "Sections and construction details",
        "Fire, insulation and ventilation notes",
        "Structural coordination information",
      ],
      cautions: [
        "If the design is still moving, planning may still need to come first",
        "Structural design may need to be coordinated alongside the pack",
      ],
    };
  }

  if (isCommercial || isShopfront || isChangeOfUse) {
    return {
      routeTitle: "Likely route: commercial planning and technical review",
      routeBody: `Commercial projects in ${boroughName} often need a more careful route check first, especially for shopfronts, fit-outs and change of use proposals. The safest approach is normally to confirm the exact use, frontage changes, signage, access and any planning history before fixing the route.`,
      timing:
        "Commercial decisions vary by proposal, but many planning applications are often around 6 to 8 weeks after validation. Technical packs usually follow once the planning route is clear.",
      drawings: [
        "Existing and proposed plans",
        "Front elevation or shopfront drawings where relevant",
        "Site location and block plan where needed",
        "Technical pack after the planning route is confirmed",
      ],
      cautions: [
        "Use class, extraction, access and frontage changes can be important",
        "Commercial projects often benefit from a proper review before quoting the full route",
      ],
    };
  }

  if (isNewBuild || isFlats) {
    return {
      routeTitle: "Likely route: full planning first",
      routeBody: `For ${projectType.toLowerCase()} in ${boroughName}, the safest expectation is normally a full planning route first, followed by the technical and Building Regulations package after approval.`,
      timing:
        "Typical planning decisions are often around 6 to 8 weeks after validation, but larger or more complex schemes can take longer.",
      drawings: [
        "Proposed plans, elevations and sections",
        "Site location and block plan",
        "Roof plans and layout information",
        "Supporting planning information and then a technical pack after approval",
      ],
      cautions: [
        "Design quality, amenity, access, refuse and parking can all matter",
        "Early coordination is important for more complex schemes",
      ],
    };
  }

  if (isFlatLike) {
    return {
      routeTitle: "Likely route: flat-based planning review first",
      routeBody: `Because this involves a flat or maisonette style property in ${boroughName}, permitted development is often more limited. Many external alterations to flats need a more careful planning review first.`,
      timing: "Best next step: confirm the exact address and proposal before assuming the route.",
      drawings: [
        "Existing and proposed plans",
        "Elevations and sections where relevant",
        "Planning package depending on the proposal",
      ],
      cautions: [
        "Lease, ownership and freeholder permissions can matter",
        "External flat alterations often need more planning care",
      ],
    };
  }

  if (isExtension) {
    return {
      routeTitle: "Likely route: permitted development or householder planning",
      routeBody: `Many house extensions in ${boroughName} can work either as permitted development or a full householder planning application depending on size, height, position and local constraints.`,
      timing:
        "Householder planning decisions are often around 6 to 8 weeks after validation. A lawful development certificate is often around 4 to 6 weeks.",
      drawings: [
        "Existing and proposed floor plans",
        "Existing and proposed elevations",
        "Site location plan and block plan",
        "Sections where useful for clarity",
      ],
      cautions: [
        "Wraparound layouts and roof junctions need careful handling",
        "The exact route still depends on the property and address",
      ],
    };
  }

  if (isLoft) {
    return {
      routeTitle: "Likely route: loft review for PD or planning",
      routeBody: `Many loft conversions can be acceptable, but the route in ${boroughName} depends on roof form, volume, front-facing changes, dormer arrangement and local sensitivity.`,
      timing:
        "A lawful development certificate is often a strong route where the loft fits the limits. Full planning may be safer where the form is more visible or more complex.",
      drawings: [
        "Existing and proposed plans",
        "Existing and proposed elevations",
        "Roof plans and sections",
        "Stair and headroom coordination",
      ],
      cautions: [
        "Front roof changes can be more sensitive",
        "Stair layout and usable headroom need checking early",
      ],
    };
  }

  if (isGarage || isOutbuilding || isInternal) {
    return {
      routeTitle: "Likely route: quick route check first",
      routeBody: `Projects like ${projectType.toLowerCase()} can often move quickly, but the correct route in ${boroughName} still depends on use, external changes, structural work and location.`,
      timing:
        "Usually the fastest path is measured survey information and a quick route check first, then the correct drawing pack is prepared.",
      drawings: [
        "Existing and proposed plans",
        "Elevations if the outside changes",
        "Technical pack where structural or compliance work is involved",
      ],
      cautions: [
        "Use and occupancy can matter for outbuildings and conversions",
        "Internal structural alterations still need Building Regulations",
      ],
    };
  }

  return {
    routeTitle: "Likely route: quick project review first",
    routeBody: `This project can be assessed properly once the property details and address in ${boroughName} are confirmed.`,
    timing: "Best next step: complete the short review request so the route can be checked properly.",
    drawings: [
      "Measured survey information",
      "A planning package or technical package depending on the route",
    ],
    cautions: [
      "Avoid assuming the route until the address and proposal are checked together",
    ],
  };
}

function answerQuickQuestion(args: {
  question: string;
  boroughName: string;
  guidance: GuidanceCard;
  projectType: string;
  propertyType: string;
}) {
  const { question, boroughName, guidance, projectType, propertyType } = args;
  const q = question.toLowerCase();

  if (includesAny(q, ["planning permission", "permitted development"])) {
    return `${guidance.routeBody} Based on what has been entered so far for ${boroughName}, the current signal is: ${guidance.routeTitle.toLowerCase()}.`;
  }

  if (includesAny(q, ["approval", "take", "long"])) {
    return guidance.timing;
  }

  if (includesAny(q, ["drawings", "needed"])) {
    return `For ${projectType || "this kind of project"} to a ${propertyType || "property"}, the pack usually includes ${guidance.drawings.join(", ")}.`;
  }

  if (includesAny(q, ["commercial"])) {
    return "Yes. This assistant can also guide commercial leads such as shopfronts, restaurants, office fit-outs, mixed-use buildings and change of use proposals before details are submitted.";
  }

  if (includesAny(q, ["survey", "quickly"])) {
    return "In many cases the initial measured survey can be arranged within 48 hours, subject to availability and access.";
  }

  return `Share the project type, property type and postcode for ${boroughName}, and the route can be narrowed down properly before a fixed fee is issued.`;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function ChoiceButton(props: {
  active?: boolean;
  label: string;
  onClick: () => void;
}) {
  const { active, label, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-left text-[12px] font-semibold transition ${
        active
          ? "border-[#e31c23] bg-[#e31c23] text-white shadow-sm"
          : "border-slate-300 bg-white text-slate-800 hover:border-slate-500 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

function MessageBubble({ role, text }: { role: ChatRole; text: string }) {
  const isAssistant = role === "assistant";

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[88%] rounded-[22px] px-4 py-3 text-[13px] leading-7 shadow-sm ${
          isAssistant
            ? "border border-slate-200 bg-white text-slate-800"
            : "bg-slate-900 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default function SmartPlanningAssistant({
  boroughName,
}: SmartPlanningAssistantProps) {
  const effectiveBorough = boroughName || "London";

  const [open, setOpen] = useState(false);
  const [flowStep, setFlowStep] = useState<FlowStep>("project");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [composerValue, setComposerValue] = useState("");
  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [postcode, setPostcode] = useState("");
  const [stage, setStage] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open || messages.length) return;

    setMessages([
      {
        id: makeId(),
        role: "assistant",
        text: `Hi. I am the WEDRAWPLANS planning and property assistant for ${effectiveBorough}. I can help with homeowner and commercial projects, answer basic planning questions, and collect the right details for a proper review.`,
      },
      {
        id: makeId(),
        role: "assistant",
        text: "What are you planning to do?",
      },
    ]);
  }, [effectiveBorough, messages.length, open]);

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, flowStep]);

  const guidance = useMemo(
    () =>
      detectGuidance({
        boroughName: effectiveBorough,
        projectType,
        propertyType,
        stage,
      }),
    [effectiveBorough, projectType, propertyType, stage]
  );

  const progress = useMemo(() => {
    let score = 0;
    if (projectType) score += 1;
    if (propertyType) score += 1;
    if (postcode) score += 1;
    if (stage) score += 1;
    if (details) score += 1;
    if (name) score += 1;
    if (phone) score += 1;
    if (email) score += 1;
    return Math.round((score / 8) * 100);
  }, [details, email, name, phone, postcode, projectType, propertyType, stage]);

  const projectSummary = useMemo(() => {
    const items: string[] = [];
    if (projectType) items.push(`Project: ${projectType}`);
    if (propertyType) items.push(`Property: ${propertyType}`);
    if (postcode) items.push(`Postcode: ${postcode.toUpperCase()}`);
    if (stage) items.push(`Stage: ${stage}`);
    if (details) items.push(`Details: ${sanitizeText(details)}`);
    if (name) items.push(`Name: ${sanitizeText(name)}`);
    if (phone) items.push(`Phone: ${normalisePhone(phone)}`);
    if (email) items.push(`Email: ${sanitizeText(email)}`);
    items.push(`Guidance: ${guidance.routeTitle}`);
    items.push(`Route summary: ${guidance.routeBody}`);
    return items.join(" | ");
  }, [
    details,
    email,
    guidance.routeBody,
    guidance.routeTitle,
    name,
    phone,
    postcode,
    projectType,
    propertyType,
    stage,
  ]);

  const transcript = useMemo(() => {
    return messages.map((m) => `${m.role === "assistant" ? "Assistant" : "User"}: ${m.text}`).join("\n");
  }, [messages]);

  function addAssistant(text: string) {
    setMessages((prev) => [...prev, { id: makeId(), role: "assistant", text }]);
  }

  function addUser(text: string) {
    setMessages((prev) => [...prev, { id: makeId(), role: "user", text }]);
  }

  function askQuickQuestion(question: string) {
    const clean = sanitizeText(question);
    if (!clean) return;

    addUser(clean);
    addAssistant(
      answerQuickQuestion({
        question: clean,
        boroughName: effectiveBorough,
        guidance,
        projectType,
        propertyType,
      })
    );
    setQuestionInput("");
  }

  function selectProject(value: string) {
    setProjectType(value);
    addUser(value);
    addAssistant("Got it. What type of property is this?");
    setFlowStep("property");
    setError("");
  }

  function selectProperty(value: string) {
    setPropertyType(value);
    addUser(value);
    addAssistant("Please type the postcode so I can narrow the local route.");
    setFlowStep("postcode");
    setError("");
  }

  function selectStage(value: string) {
    setStage(value);
    addUser(value);

    const nextGuidance = detectGuidance({
      boroughName: effectiveBorough,
      projectType,
      propertyType,
      stage: value,
    });

    addAssistant(
      `${nextGuidance.routeTitle}. ${nextGuidance.routeBody} ${nextGuidance.timing}`
    );
    addAssistant("Tell me briefly what you want to build or change.");
    setFlowStep("details");
    setError("");
  }

  function handleTypedStep() {
    const value = sanitizeText(composerValue);
    if (!value) return;

    if (flowStep === "postcode") {
      const cleanPostcode = value.toUpperCase();
      if (!isValidUkPostcodeLoose(cleanPostcode)) {
        setError("Please enter a valid UK postcode.");
        return;
      }
      setPostcode(cleanPostcode);
      addUser(cleanPostcode);
      addAssistant("Thanks. Where are you in the process?");
      setFlowStep("stage");
      setComposerValue("");
      setError("");
      return;
    }

    if (flowStep === "details") {
      setDetails(value);
      addUser(value);
      addAssistant("Helpful. What is your name?");
      setFlowStep("contactName");
      setComposerValue("");
      setError("");
      return;
    }

    if (flowStep === "contactName") {
      if (value.length < 2) {
        setError("Please enter your name.");
        return;
      }
      setName(value);
      addUser(value);
      addAssistant("What is the best phone number for the review?");
      setFlowStep("contactPhone");
      setComposerValue("");
      setError("");
      return;
    }

    if (flowStep === "contactPhone") {
      const cleanPhone = normalisePhone(value);
      if (cleanPhone.length < 9) {
        setError("Please enter a valid phone number.");
        return;
      }
      setPhone(cleanPhone);
      addUser(value);
      addAssistant("And what email should we send the review to?");
      setFlowStep("contactEmail");
      setComposerValue("");
      setError("");
      return;
    }

    if (flowStep === "contactEmail") {
      if (!value.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      setEmail(value);
      addUser(value);
      addAssistant(
        "Perfect. I have enough to prepare a proper review. Check the summary below and send it through when you are ready."
      );
      setFlowStep("review");
      setComposerValue("");
      setError("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const cleanName = sanitizeText(name);
    const cleanPhone = normalisePhone(phone);
    const cleanEmail = sanitizeText(email);
    const cleanPostcode = sanitizeText(postcode).toUpperCase();

    if (!projectType) {
      setError("Please select the project type.");
      return;
    }

    if (!propertyType) {
      setError("Please select the property type.");
      return;
    }

    if (!isValidUkPostcodeLoose(cleanPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }

    if (!stage) {
      setError("Please select the project stage.");
      return;
    }

    if (!sanitizeText(details)) {
      setError("Please add brief project details.");
      return;
    }

    if (!cleanName || cleanName.length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!cleanPhone || cleanPhone.length < 9) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!cleanEmail || !cleanEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      await submitBoroughLead(e, { boroughName: effectiveBorough });
      setDone(true);
      setFlowStep("done");
      addAssistant(
        `Thank you. Your details for ${effectiveBorough} have been received. WEDRAWPLANS will review the project and reply with the likely route, next step and fixed fee.`
      );
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetAssistant() {
    setMessages([]);
    setComposerValue("");
    setProjectType("");
    setPropertyType("");
    setPostcode("");
    setStage("");
    setDetails("");
    setName("");
    setPhone("");
    setEmail("");
    setQuestionInput("");
    setError("");
    setSubmitting(false);
    setDone(false);
    setFlowStep("project");
  }

  const showChoices = flowStep === "project" || flowStep === "property" || flowStep === "stage";
  const showComposer =
    flowStep === "postcode" ||
    flowStep === "details" ||
    flowStep === "contactName" ||
    flowStep === "contactPhone" ||
    flowStep === "contactEmail";

  const composerPlaceholder =
    flowStep === "postcode"
      ? "Type your postcode"
      : flowStep === "details"
      ? "Describe the project briefly"
      : flowStep === "contactName"
      ? "Type your name"
      : flowStep === "contactPhone"
      ? "Type your phone number"
      : flowStep === "contactEmail"
      ? "Type your email address"
      : "Type here";

  return (
    <>
      {!open && (
        <>
          <div className="fixed bottom-4 right-4 z-[70] md:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-full border border-[#e31c23] bg-slate-900 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-2xl"
              aria-label="Open planning assistant"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e31c23]">
                <img
                  src="/images/wedrawplans-emblem.png"
                  alt="WEDRAWPLANS"
                  className="h-4 w-4 object-contain"
                />
              </span>
              Ask about planning
            </button>
          </div>

          <div className="fixed right-5 top-1/2 z-[70] hidden -translate-y-1/2 md:block">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 rounded-full border border-[#e31c23]/70 bg-slate-900 px-4 py-3 text-white shadow-2xl transition hover:pr-5"
              aria-label="Open planning assistant"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e31c23] shadow-sm">
                <img
                  src="/images/wedrawplans-emblem.png"
                  alt="WEDRAWPLANS"
                  className="h-5 w-5 object-contain"
                />
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-white/95 lg:block">
                Planning Help
              </span>
            </button>
          </div>
        </>
      )}

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[2px]">
          <div className="h-screen w-screen md:flex md:items-center md:justify-center md:p-6">
            <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#f8fafc] md:h-[88vh] md:max-h-[920px] md:max-w-[980px] md:rounded-[34px] md:border md:border-slate-200 md:shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
              <div className="border-b border-slate-800 bg-slate-950 px-4 py-4 text-white md:px-6 md:py-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff5d63]/40 bg-[#e31c23] shadow-sm">
                      <img
                        src="/images/wedrawplans-emblem.png"
                        alt="WEDRAWPLANS"
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/95">
                        WEDRAWPLANS
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/65">
                        Planning and Property AI Assistant
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={resetAssistant}
                      className="hidden rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 hover:bg-white/10 hover:text-white md:inline-flex"
                    >
                      Reset
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-[24px] border border-white/10 bg-white/5 px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#e31c23]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                      {effectiveBorough}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                      Homeowner + Commercial
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                      Full-screen on mobile
                    </span>
                  </div>

                  <div className="mt-3 text-[13px] leading-7 text-white/85">
                    Ask basic planning questions, get the likely route, and leave the right details for a proper review and fixed fee.
                  </div>

                  <div className="mt-4 h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-[#e31c23] transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col">
                <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-5">
                  <div className="mx-auto flex max-w-[760px] flex-col gap-3">
                    {messages.map((message) => (
                      <MessageBubble key={message.id} role={message.role} text={message.text} />
                    ))}

                    {flowStep === "review" && !done && (
                      <form onSubmit={handleSubmit} className="mt-2">
                        <input type="hidden" name="name" value={name} />
                        <input type="hidden" name="phone" value={phone} />
                        <input type="hidden" name="email" value={email} />
                        <input type="hidden" name="postcode" value={postcode} />
                        <input type="hidden" name="projectType" value={projectType} />
                        <input type="hidden" name="propertyType" value={propertyType} />
                        <input type="hidden" name="projectStage" value={stage} />
                        <input type="hidden" name="projectDetails" value={projectSummary} />
                        <input type="hidden" name="assistantTranscript" value={transcript} />

                        <div className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                            Ready to send
                          </div>

                          <div className="mt-3 grid gap-3 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-3">
                              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                                Contact
                              </div>
                              <div className="mt-2 text-[13px] leading-7 text-slate-800">
                                {name}
                                <br />
                                {phone}
                                <br />
                                {email}
                              </div>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-3">
                              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                                Route signal
                              </div>
                              <div className="mt-2 text-[13px] leading-7 text-slate-800">
                                {guidance.routeTitle}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 rounded-2xl border border-slate-200 bg-[#fff8f8] p-3 text-[13px] leading-7 text-slate-800">
                            <span className="font-semibold text-slate-900">Project summary:</span> {projectSummary}
                          </div>

                          <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                              Usually needed
                            </div>
                            <ul className="mt-2 space-y-1 text-[13px] leading-7 text-slate-800">
                              {guidance.drawings.map((item) => (
                                <li key={item}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          {error && (
                            <div className="mt-3 rounded-2xl bg-red-50 px-3 py-2 text-[12px] text-red-700">
                              {error}
                            </div>
                          )}

                          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <button
                              type="submit"
                              disabled={submitting}
                              className="inline-flex w-full items-center justify-center rounded-full bg-[#e31c23] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c9151c] disabled:cursor-not-allowed disabled:bg-slate-300"
                            >
                              {submitting ? "Sending..." : "Send for review"}
                            </button>

                            <a
                              href={`https://wa.me/442036548508?text=${encodeURIComponent(
                                `Hello WEDRAWPLANS, I would like help with my project in ${effectiveBorough}. Project: ${projectType}. Property: ${propertyType}. Postcode: ${postcode}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:bg-slate-900 hover:text-white"
                            >
                              WhatsApp instead
                            </a>
                          </div>

                          <div className="mt-3 text-[11px] leading-6 text-slate-500">
                            This sends your captured conversation and project summary so WEDRAWPLANS can reply with a clear next step and fixed fee.
                          </div>
                        </div>
                      </form>
                    )}

                    {done && (
                      <div className="rounded-[26px] border border-emerald-100 bg-emerald-50 p-4 text-[13px] leading-7 text-emerald-900 shadow-sm">
                        Thank you. Your interaction has been captured and sent through for review.
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {!done && (
                  <div className="border-t border-slate-200 bg-white px-4 py-4 md:px-6">
                    <div className="mx-auto flex max-w-[760px] flex-col gap-3">
                      {(flowStep === "project" || flowStep === "property" || flowStep === "stage") && (
                        <div className="flex flex-wrap gap-2">
                          {flowStep === "project" &&
                            PROJECT_TYPES.map((item) => (
                              <ChoiceButton
                                key={item}
                                label={item}
                                active={projectType === item}
                                onClick={() => selectProject(item)}
                              />
                            ))}

                          {flowStep === "property" &&
                            PROPERTY_TYPES.map((item) => (
                              <ChoiceButton
                                key={item}
                                label={item}
                                active={propertyType === item}
                                onClick={() => selectProperty(item)}
                              />
                            ))}

                          {flowStep === "stage" &&
                            STAGES.map((item) => (
                              <ChoiceButton
                                key={item}
                                label={item}
                                active={stage === item}
                                onClick={() => selectStage(item)}
                              />
                            ))}
                        </div>
                      )}

                      {showComposer && (
                        <div className="flex items-center gap-2">
                          <input
                            value={composerValue}
                            onChange={(e) => setComposerValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleTypedStep();
                              }
                            }}
                            placeholder={composerPlaceholder}
                            className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-3 text-[13px] outline-none transition focus:border-[#e31c23]"
                          />
                          <button
                            type="button"
                            onClick={handleTypedStep}
                            className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
                          >
                            Send
                          </button>
                        </div>
                      )}

                      {showChoices && (
                        <div className="text-[11px] leading-6 text-slate-500">
                          Tap an option to keep the route check moving.
                        </div>
                      )}

                      <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                          Quick planning questions
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {QUICK_QUESTIONS.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => askQuickQuestion(item)}
                              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                            >
                              {item}
                            </button>
                          ))}
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          <input
                            value={questionInput}
                            onChange={(e) => setQuestionInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                askQuickQuestion(questionInput);
                              }
                            }}
                            placeholder="Ask a basic planning question"
                            className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-3 text-[13px] outline-none transition focus:border-[#e31c23]"
                          />
                          <button
                            type="button"
                            onClick={() => askQuickQuestion(questionInput)}
                            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:bg-slate-900 hover:text-white"
                          >
                            Ask
                          </button>
                        </div>
                      </div>

                      {error && flowStep !== "review" && (
                        <div className="rounded-2xl bg-red-50 px-3 py-2 text-[12px] text-red-700">
                          {error}
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-3 text-[11px] leading-6 text-slate-500">
                        <div>Visible, simple and focused on getting real project details.</div>
                        <button
                          type="button"
                          onClick={resetAssistant}
                          className="font-semibold uppercase tracking-[0.14em] text-slate-700 underline"
                        >
                          Start again
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
