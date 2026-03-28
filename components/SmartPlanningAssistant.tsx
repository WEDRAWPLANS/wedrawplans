import React, { useEffect, useMemo, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type Step = 1 | 2 | 3 | 4;

interface SmartPlanningAssistantProps {
  boroughName?: string;
}

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
  "Internal remodelling",
  "Outbuilding or garden room",
  "Building regulations only",
  "New build house",
  "Conversion to flats",
  "Other project",
] as const;

const PROPERTY_TYPES = [
  "Terraced house",
  "Semi detached house",
  "Detached house",
  "Bungalow",
  "Flat or maisonette",
  "Commercial unit",
  "Other property",
] as const;

const STAGES = [
  "Just exploring ideas",
  "Need planning drawings",
  "Need building regulations",
  "Ready to start",
] as const;

const CONSTRAINT_OPTIONS = [
  "Conservation area or sensitive setting",
  "Flat or maisonette restrictions",
  "Listed or heritage concern",
  "Unsure about permitted development",
  "Need fast survey and fixed fee",
] as const;

const QUICK_QUESTIONS = [
  "Will I need planning permission",
  "Could this be permitted development",
  "How long does approval usually take",
  "What drawings are normally needed",
  "Can you arrange survey quickly",
  "Can you handle building regulations too",
] as const;

function includesAny(haystack: string, needles: string[]) {
  const s = haystack.toLowerCase();
  return needles.some((n) => s.includes(n));
}

function isValidUkPostcodeLoose(value: string) {
  const v = value.trim().toUpperCase();
  if (!v) return false;
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(v);
}

function sanitizeText(input: string) {
  return input.replace(/\s+/g, " ").trim();
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
  constraints: string[];
}): GuidanceCard {
  const { boroughName, projectType, propertyType, stage, constraints } = args;

  const hasSensitiveConstraint =
    constraints.includes("Conservation area or sensitive setting") ||
    constraints.includes("Listed or heritage concern");

  const isFlatLike =
    propertyType === "Flat or maisonette" ||
    constraints.includes("Flat or maisonette restrictions");

  const wantsRegsOnly = projectType === "Building regulations only";
  const isExtension = includesAny(projectType, ["extension"]);
  const isLoft = includesAny(projectType, ["loft"]);
  const isGarage = includesAny(projectType, ["garage"]);
  const isOutbuilding = includesAny(projectType, ["outbuilding", "garden room"]);
  const isNewBuild = includesAny(projectType, ["new build"]);
  const isFlats = includesAny(projectType, ["flats"]);
  const isInternal = includesAny(projectType, ["internal"]);

  if (wantsRegsOnly) {
    return {
      routeTitle: "Likely route: technical pack and building regulations",
      routeBody: `This looks more like a buildability and compliance package for ${boroughName}. We would normally prepare technical drawings, sections, notes, structural coordination and compliance information for Building Control and the builder.`,
      timing:
        stage === "Ready to start"
          ? "Fastest path: measured survey, technical drawing pack, then Building Control submission."
          : "Usual path: confirm scope first, then prepare the technical pack once the design is fixed.",
      drawings: [
        "Existing and proposed plans where needed",
        "Sections and construction details",
        "Insulation, fire safety and ventilation notes",
        "Structural coordination and key junction information",
      ],
      cautions: [
        "If the design is not yet fixed, planning may still be needed first",
        "Structural design may need to be coordinated alongside the pack",
      ],
    };
  }

  if (isNewBuild || isFlats) {
    return {
      routeTitle: "Likely route: full planning first",
      routeBody: `For ${projectType.toLowerCase()} in ${boroughName}, the safest expectation is usually a full planning route first, followed by a full technical and building regulations pack.`,
      timing:
        "Typical planning decisions are often around 6 to 8 weeks after validation, but larger or more complex proposals can take longer.",
      drawings: [
        "Existing site information where relevant",
        "Proposed plans, elevations, sections and roof plans",
        "Site location and block plan",
        "Supporting planning information and then a technical pack after approval",
      ],
      cautions: [
        "Parking, refuse, amenity and design quality are important",
        "More complex schemes often need stronger planning coordination from the start",
      ],
    };
  }

  if (isFlatLike) {
    return {
      routeTitle: "Likely route: more caution needed",
      routeBody: `Because this involves a flat or maisonette style property, permitted development is often more limited. In ${boroughName}, many flat based alterations need a more careful planning review and often landlord or freeholder coordination as well.`,
      timing:
        "Best next step: quick review of address and proposal before locking in the route.",
      drawings: [
        "Existing and proposed plans",
        "Elevations and sections where relevant",
        "Planning package or landlord support drawings depending on the proposal",
      ],
      cautions: [
        "Lease and ownership restrictions can matter",
        "External alterations to flats often need more planning care",
      ],
    };
  }

  if (hasSensitiveConstraint) {
    return {
      routeTitle: "Likely route: sensitive setting review first",
      routeBody: `Because there may be heritage or location sensitivity in ${boroughName}, the project should be shaped carefully before assuming permitted development. A more controlled full planning route may be safer depending on the exact property and setting.`,
      timing:
        "Fastest safe path: review address and photos first, then confirm whether a full planning route is better.",
      drawings: [
        "Clear measured survey information",
        "Well proportioned proposed drawings",
        "Street scene awareness and supporting planning clarity where needed",
      ],
      cautions: [
        "Roof form, massing and materials matter more in sensitive settings",
        "Avoid overcommitting before the address is checked properly",
      ],
    };
  }

  if (isExtension) {
    return {
      routeTitle: "Likely route: permitted development or householder planning",
      routeBody: `Many house extensions in ${boroughName} can work either as permitted development or full householder planning depending on depth, height, width, position and local constraints.`,
      timing:
        "Typical householder decisions are often around 6 to 8 weeks after validation. A lawful development certificate is often around 4 to 6 weeks.",
      drawings: [
        "Existing and proposed floor plans",
        "Existing and proposed elevations",
        "Site location plan and block plan",
        "Sections where useful for clarity",
      ],
      cautions: [
        "Side return and wraparound layouts need neighbour and roof junctions handled properly",
        "The exact route still depends on the house and address",
      ],
    };
  }

  if (isLoft) {
    return {
      routeTitle: "Likely route: loft review for PD or planning",
      routeBody: `Many loft conversions can be acceptable, but the route in ${boroughName} depends on roof form, volume, front facing changes, dormer arrangement and local sensitivity.`,
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
        "The staircase and usable layout need checking early",
      ],
    };
  }

  if (isGarage || isOutbuilding || isInternal) {
    return {
      routeTitle: "Likely route: quick address and scope check",
      routeBody: `Projects like ${projectType.toLowerCase()} can often move quickly, but the right route in ${boroughName} still depends on use, external changes, structural work and location.`,
      timing:
        "Usually the fastest route is a measured survey and quick route check first, then the right drawing pack is prepared.",
      drawings: [
        "Existing and proposed plans",
        "Elevations if the outside changes",
        "Technical pack where structural or compliance work is involved",
      ],
      cautions: [
        "Use and occupancy can matter for outbuildings and conversions",
        "Internal structural alterations often still need Building Regulations",
      ],
    };
  }

  return {
    routeTitle: "Likely route: quick project review first",
    routeBody: `This project can be assessed properly once the property details and address in ${boroughName} are confirmed.`,
    timing: "Best next step: complete the short fixed fee request so the route can be checked properly.",
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
    return `${guidance.routeBody} The exact answer depends on the property in ${boroughName}, but the current signal is: ${guidance.routeTitle.toLowerCase()}.`;
  }

  if (includesAny(q, ["approval", "take", "long"])) {
    return guidance.timing;
  }

  if (includesAny(q, ["drawings", "needed"])) {
    return `For ${projectType || "this kind of project"} to a ${propertyType || "property"}, the pack usually includes: ${guidance.drawings.join(", ")}.`;
  }

  if (includesAny(q, ["survey", "quickly"])) {
    return "In many cases the initial measured survey can be arranged within 48 hours, subject to availability and access.";
  }

  if (includesAny(q, ["building regulations", "regs"])) {
    return "Yes. WEDRAWPLANS can handle planning drawings and then move into the technical and building regulations pack where the project requires it.";
  }

  return "Share the project type, property type and postcode, and the route can be narrowed down properly before a fixed fee is issued.";
}

function StepPill({
  active,
  label,
}: {
  active: boolean;
  label: string;
}) {
  return (
    <div
      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
        active
          ? "bg-slate-900 text-white"
          : "border border-slate-200 bg-white text-slate-500"
      }`}
    >
      {label}
    </div>
  );
}

export function SmartPlanningAssistant({
  boroughName,
}: SmartPlanningAssistantProps) {
  const effectiveBorough = boroughName || "London";

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);

  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [stage, setStage] = useState("");
  const [postcode, setPostcode] = useState("");
  const [constraints, setConstraints] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const guidance = useMemo(
    () =>
      detectGuidance({
        boroughName: effectiveBorough,
        projectType,
        propertyType,
        stage,
        constraints,
      }),
    [constraints, effectiveBorough, projectType, propertyType, stage]
  );

  const progress = useMemo(() => (step / 4) * 100, [step]);

  const projectSummary = useMemo(() => {
    const bits: string[] = [];

    if (projectType) bits.push(`Project: ${projectType}`);
    if (propertyType) bits.push(`Property: ${propertyType}`);
    if (postcode) bits.push(`Postcode: ${postcode.toUpperCase()}`);
    if (stage) bits.push(`Stage: ${stage}`);
    if (constraints.length) bits.push(`Flags: ${constraints.join(", ")}`);
    if (details.trim()) bits.push(`Details: ${sanitizeText(details)}`);

    return bits.join(" | ");
  }, [constraints, details, postcode, projectType, propertyType, stage]);

  function toggleConstraint(item: string) {
    setConstraints((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  }

  function canMoveNext() {
    if (step === 1) return !!projectType;
    if (step === 2) return !!propertyType && isValidUkPostcodeLoose(postcode);
    if (step === 3) return !!stage;
    return false;
  }

  function nextStep() {
    if (step < 4 && canMoveNext()) {
      setStep((prev) => (prev + 1) as Step);
      setError("");
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
      setError("");
    }
  }

  function askQuestion(question: string) {
    const q = sanitizeText(question);
    if (!q) return;
    setQuestionInput("");
    setQuestionAnswer(
      answerQuickQuestion({
        question: q,
        boroughName: effectiveBorough,
        guidance,
        projectType,
        propertyType,
      })
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const cleanName = sanitizeText(name);
    const cleanPhone = normalisePhone(phone);
    const cleanEmail = sanitizeText(email);
    const cleanPostcode = sanitizeText(postcode).toUpperCase();

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

    if (!isValidUkPostcodeLoose(cleanPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }

    setSubmitting(true);

    try {
      await submitBoroughLead(e, { boroughName: effectiveBorough });
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <>
        <div className="fixed bottom-4 right-[76px] z-[70]">
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setDone(false);
            }}
            className="rounded-full bg-slate-900 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg hover:bg-slate-800"
          >
            Planning Assistant
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-6">
            <div className="flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:w-[460px] sm:rounded-[28px]">
              <div className="border-b border-emerald-100 bg-slate-50 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e31c23] shadow-sm">
                      <img
                        src="/images/wedrawplans-emblem.png"
                        alt="WEDRAWPLANS"
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        WEDRAWPLANS
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        Planning approval assistant
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 hover:bg-slate-100"
                    aria-label="Close assistant"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <h3 className="text-[14px] font-semibold text-emerald-900">
                    Thank you. Your details have been received
                  </h3>
                  <p className="mt-2 text-[13px] leading-7 text-emerald-900">
                    We will review your project in {effectiveBorough} and reply with a clear fixed fee,
                    the likely route, and the next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {!open && (
        <div className="fixed bottom-4 right-[76px] z-[70]">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full border border-slate-200 bg-slate-900 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg hover:bg-slate-800"
          >
            Planning Assistant
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:w-[460px] sm:rounded-[28px]">
            <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e31c23] shadow-sm">
                    <img
                      src="/images/wedrawplans-emblem.png"
                      alt="WEDRAWPLANS"
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      Smart Planning Assistant
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/65">
                      For homeowners in {effectiveBorough}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 hover:bg-white/10 hover:text-white"
                  aria-label="Close assistant"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 rounded-2xl bg-white/5 p-3">
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                  Route snapshot
                </div>
                <div className="mt-2 text-[12px] leading-6 text-white/80">
                  {guidance.routeTitle}. {guidance.timing}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <StepPill active={step === 1} label="Project" />
                <StepPill active={step === 2} label="Property" />
                <StepPill active={step === 3} label="Route" />
                <StepPill active={step === 4} label="Details" />
              </div>

              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-[#64b7c4]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                  Why this tool matters
                </div>
                <p className="mt-2 text-[13px] leading-7 text-slate-700">
                  Answer a few quick questions and WEDRAWPLANS will assess the likely route,
                  explain the basics, and collect your details for a fixed fee review.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                  Likely route
                </div>
                <h3 className="mt-2 text-[15px] font-semibold text-slate-900">
                  {guidance.routeTitle}
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-slate-700">{guidance.routeBody}</p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Usually needed
                    </div>
                    <ul className="mt-2 space-y-1 text-[12px] leading-6 text-slate-700">
                      {guidance.drawings.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Watch points
                    </div>
                    <ul className="mt-2 space-y-1 text-[12px] leading-6 text-slate-700">
                      {guidance.cautions.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                {step === 1 && (
                  <>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Step 1
                    </div>
                    <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                      What are you planning to do
                    </h3>
                    <div className="mt-4 grid gap-2">
                      {PROJECT_TYPES.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setProjectType(item)}
                          className={`rounded-2xl border px-4 py-3 text-left text-[13px] font-medium transition ${
                            projectType === item
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Step 2
                    </div>
                    <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                      Tell us the property and postcode
                    </h3>

                    <div className="mt-4 grid gap-2">
                      {PROPERTY_TYPES.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setPropertyType(item)}
                          className={`rounded-2xl border px-4 py-3 text-left text-[13px] font-medium transition ${
                            propertyType === item
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4">
                      <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                        Postcode
                      </label>
                      <input
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                        placeholder="BR1 3AA"
                        className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-[13px] outline-none focus:border-[#64b7c4]"
                      />
                      <div className="mt-2 text-[11px] text-slate-500">
                        This helps narrow the likely route and local considerations.
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Step 3
                    </div>
                    <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                      Basic planning route and smart checks
                    </h3>

                    <div className="mt-4">
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                        Where are you in the process
                      </div>
                      <div className="mt-2 grid gap-2">
                        {STAGES.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setStage(item)}
                            className={`rounded-2xl border px-4 py-3 text-left text-[13px] font-medium transition ${
                              stage === item
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                        Useful flags
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {CONSTRAINT_OPTIONS.map((item) => {
                          const active = constraints.includes(item);
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => toggleConstraint(item)}
                              className={`rounded-full border px-3 py-2 text-[11px] font-semibold transition ${
                                active
                                  ? "border-slate-900 bg-slate-900 text-white"
                                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                        Quick homeowner questions
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {QUICK_QUESTIONS.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => askQuestion(item)}
                            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 hover:bg-slate-900 hover:text-white"
                          >
                            {item}
                          </button>
                        ))}
                      </div>

                      <div className="mt-3 flex gap-2">
                        <input
                          value={questionInput}
                          onChange={(e) => setQuestionInput(e.target.value)}
                          placeholder="Ask a quick question"
                          className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-[13px] outline-none focus:border-[#64b7c4]"
                        />
                        <button
                          type="button"
                          onClick={() => askQuestion(questionInput)}
                          className="rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-slate-800"
                        >
                          Ask
                        </button>
                      </div>

                      {questionAnswer && (
                        <div className="mt-3 rounded-xl bg-white p-3 text-[12px] leading-6 text-slate-700 shadow-sm">
                          {questionAnswer}
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                        Brief project details
                      </label>
                      <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows={4}
                        placeholder="For example: 4m rear extension to a semi detached house with open plan kitchen and steels needed."
                        className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-[13px] outline-none focus:border-[#64b7c4]"
                      />
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Step 4
                    </div>
                    <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                      Get your fixed fee review
                    </h3>
                    <p className="mt-2 text-[13px] leading-7 text-slate-700">
                      Leave your details and WEDRAWPLANS will review the project, confirm the likely route,
                      and reply with the next steps and fixed fee.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                      <input type="hidden" name="projectType" value={projectType} />
                      <input type="hidden" name="propertyType" value={propertyType} />
                      <input type="hidden" name="projectStage" value={stage} />
                      <input type="hidden" name="postcode" value={postcode} />
                      <input type="hidden" name="projectDetails" value={projectSummary} />

                      <div>
                        <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                          Name
                        </label>
                        <input
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-[13px] outline-none focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                            Telephone
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>
                      </div>

                      {error && (
                        <div className="rounded-xl bg-red-50 px-3 py-2 text-[12px] text-red-700">
                          {error}
                        </div>
                      )}

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                          Your summary
                        </div>
                        <div className="mt-2 text-[12px] leading-6 text-slate-700">
                          {projectSummary || "Your selections will appear here as you complete the steps."}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-full bg-[#64b7c4] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4] disabled:cursor-not-allowed disabled:bg-slate-300"
                      >
                        {submitting ? "Sending..." : "Send my details"}
                      </button>

                      <div className="text-[11px] leading-6 text-slate-500">
                        We review the route, drawings likely needed, and the fastest next step for your project in {effectiveBorough}.
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 underline"
                    >
                      Back
                    </button>
                  ) : (
                    <span className="text-[11px] text-slate-400">WEDRAWPLANS</span>
                  )}
                </div>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canMoveNext()}
                    className="rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    Continue
                  </button>
                ) : (
                  <a
                    href={`https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20help%20with%20my%20project%20in%20${encodeURIComponent(
                      effectiveBorough
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-900 hover:text-white"
                  >
                    WhatsApp instead
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SmartPlanningAssistant;
