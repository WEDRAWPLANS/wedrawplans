import React, { useMemo, useState } from "react";
import Image from "next/image";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type StepKey = "type" | "postcode" | "stage" | "details" | "contact";

type Props = {
  borough?: string;
  sourcePath?: string;
  defaultProjectType?: string;
  logoSrc?: string;
  logoAlt?: string;
  accentText?: string;
  onSuccess?: () => void;
};

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

function clampStr(v: string, max: number) {
  const s = (v || "").toString().trim();
  return s.length > max ? s.slice(0, max) : s;
}

function isEmail(v: string) {
  const s = (v || "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function normalizePhone(v: string) {
  const s = (v || "").toString().trim();
  return s.replace(/[^\d+]/g, "");
}

function isLikelyPhone(v: string) {
  const s = normalizePhone(v);
  const digits = s.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

const PROJECT_TYPES: { label: string; value: string; sub?: string }[] = [
  { label: "House extension", value: "House extension", sub: "Rear, side return, wraparound, double storey" },
  { label: "Loft conversion", value: "Loft conversion", sub: "Dormer, mansard, hip to gable" },
  { label: "Planning drawings only", value: "Planning drawings", sub: "Drawings for council submission" },
  { label: "Lawful development certificate", value: "Lawful development certificate", sub: "LDC for permitted development works" },
  { label: "Flats or change of use", value: "Flats or change of use", sub: "Conversion, HMO, new units" },
  { label: "Other", value: "Other", sub: "Tell us what you are planning" },
];

const STAGES: { label: string; value: string; sub?: string }[] = [
  { label: "Just exploring ideas", value: "Exploring ideas", sub: "Not sure yet, need guidance" },
  { label: "Need planning drawings", value: "Need planning drawings", sub: "Ready to start drawings soon" },
  { label: "Need planning plus building regs", value: "Planning and building regs", sub: "Full technical package" },
  { label: "Already spoken to the council", value: "Spoken to council", sub: "Need help with next steps" },
  { label: "Urgent", value: "Urgent", sub: "Fast turnaround needed" },
];

export default function ProjectEnquiryForm(props: Props) {
  const borough = clampStr(props.borough || "", 80);
  const sourcePath = clampStr(props.sourcePath || "", 200);

  const [step, setStep] = useState<StepKey>("type");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [projectType, setProjectType] = useState(clampStr(props.defaultProjectType || "", 120));
  const [postcode, setPostcode] = useState("");
  const [stage, setStage] = useState("");
  const [details, setDetails] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [err, setErr] = useState<string>("");

  const steps: StepKey[] = useMemo(() => ["type", "postcode", "stage", "details", "contact"], []);
  const stepIndex = steps.indexOf(step);
  const progressPct = Math.round(((stepIndex + 1) / steps.length) * 100);

  const whatsappLink = useMemo(() => {
    const msg = `Hello WEDRAWPLANS, I would like a quote for plans${borough ? " in " + borough : ""}.`;
    return `https://wa.me/442036548508?text=${encodeURIComponent(msg)}`;
  }, [borough]);

  function validateCurrentStep() {
    if (step === "type") {
      if (!projectType.trim()) {
        setErr("Please choose what you are planning.");
        return false;
      }
      return true;
    }

    if (step === "postcode") {
      const pc = postcode.trim();
      if (!pc) {
        setErr("Please enter the property postcode.");
        return false;
      }
      if (pc.length < 5) {
        setErr("Please enter a valid postcode.");
        return false;
      }
      return true;
    }

    if (step === "stage") {
      if (!stage.trim()) {
        setErr("Please choose the stage you are at.");
        return false;
      }
      return true;
    }

    if (step === "details") {
      const d = details.trim();
      if (!d) {
        setErr("Please tell us a little about the project.");
        return false;
      }
      if (d.length < 12) {
        setErr("Please add a little more detail so we can price accurately.");
        return false;
      }
      return true;
    }

    if (step === "contact") {
      const n = name.trim();
      const p = phone.trim();
      const e = email.trim();

      if (!n) {
        setErr("Please enter your name.");
        return false;
      }
      if (!p) {
        setErr("Please enter your phone number.");
        return false;
      }
      if (!isLikelyPhone(p)) {
        setErr("Please enter a valid phone number.");
        return false;
      }
      if (!e) {
        setErr("Please enter your email address.");
        return false;
      }
      if (!isEmail(e)) {
        setErr("Please enter a valid email address.");
        return false;
      }
      return true;
    }

    return true;
  }

  function goNext() {
    setErr("");
    if (!validateCurrentStep()) return;
    setStep(steps[Math.min(stepIndex + 1, steps.length - 1)]);
  }

  function goBack() {
    setErr("");
    setStep(steps[Math.max(stepIndex - 1, 0)]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");

    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    try {
      await submitBoroughLead(e, {
        boroughName: borough || "London",
        sourcePath: sourcePath || "",
      });

      setSubmitted(true);
      setIsSubmitting(false);
      if (props.onSuccess) props.onSuccess();
    } catch (error) {
      setIsSubmitting(false);
      setErr("Something went wrong sending your enquiry. Please try again or call us.");
    }
  }

  const headline =
    props.accentText ||
    (borough ? `Get a fast quote for planning drawings in ${borough}` : "Get a fast quote for planning drawings");

  if (submitted) {
    return (
      <section className="wdpWrap" aria-label="WEDRAWPLANS enquiry form">
        <div className="wdpCard wdpCardSuccess">
          <div className="wdpTop">
            <div className="wdpBrand">
              {props.logoSrc ? (
                <div className="wdpLogo">
                  <Image src={props.logoSrc} alt={props.logoAlt || "WEDRAWPLANS"} width={180} height={48} />
                </div>
              ) : (
                <div className="wdpWordmark">WEDRAWPLANS</div>
              )}
              <div className="wdpTag">Architecture drawings. Planning ready.</div>
            </div>
            <div className="wdpMiniActions" aria-label="Quick contact">
              <a className="wdpMiniBtn" href={PHONE_LINK}>
                Call
              </a>
              <a className="wdpMiniBtn" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="wdpMiniBtn" href={EMAIL_LINK}>
                Email
              </a>
            </div>
          </div>

          <div className="wdpSuccessBody">
            <div className="wdpSuccessTitle">Thank you. We received your enquiry.</div>
            <div className="wdpSuccessText">
              We will contact you shortly. If you need a quicker response, call us on{" "}
              <a href={PHONE_LINK} className="wdpInlineLink">
                {PHONE_DISPLAY}
              </a>{" "}
              or message us on WhatsApp.
            </div>

            <div className="wdpSuccessActions">
              <a className="wdpPrimary" href={whatsappLink} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <a className="wdpGhost" href={PHONE_LINK}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <style jsx>{styles}</style>
      </section>
    );
  }

  return (
    <section className="wdpWrap" aria-label="WEDRAWPLANS enquiry form">
      <div className="wdpCard">
        <div className="wdpTop">
          <div className="wdpBrand">
            {props.logoSrc ? (
              <div className="wdpLogo">
                <Image src={props.logoSrc} alt={props.logoAlt || "WEDRAWPLANS"} width={180} height={48} />
              </div>
            ) : (
              <div className="wdpWordmark">WEDRAWPLANS</div>
            )}
            <div className="wdpTag">Planning drawings. Building regs. Clear fees. Fast turnaround.</div>
          </div>

          <div className="wdpMiniActions" aria-label="Quick contact">
            <a className="wdpMiniBtn" href={PHONE_LINK}>
              Call
            </a>
            <a className="wdpMiniBtn" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="wdpMiniBtn" href={EMAIL_LINK}>
              Email
            </a>
          </div>
        </div>

        <div className="wdpHero">
          <div className="wdpHeroLeft">
            <h2 className="wdpH">{headline}</h2>
            <div className="wdpSub">
              Answer a few quick questions and we will come back with a clear quote and next steps.
              {borough ? (
                <span className="wdpLocal">
                  <span className="wdpDot" aria-hidden="true" />
                  Local experience in {borough}
                </span>
              ) : null}
            </div>

            <div className="wdpProof">
              <div className="wdpProofItem">
                <div className="wdpProofNum">48h</div>
                <div className="wdpProofLbl">Initial survey within 48 hours</div>
              </div>
              <div className="wdpProofItem">
                <div className="wdpProofNum">5.0</div>
                <div className="wdpProofLbl">Client focused service</div>
              </div>
              <div className="wdpProofItem">
                <div className="wdpProofNum">100%</div>
                <div className="wdpProofLbl">Planning ready drawings</div>
              </div>
            </div>
          </div>

          <div className="wdpHeroRight" aria-label="Progress">
            <div className="wdpProgressTop">
              <div className="wdpProgressLabel">
                Step {stepIndex + 1} of {steps.length}
              </div>
              <div className="wdpProgressPct">{progressPct}%</div>
            </div>
            <div className="wdpBar" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
              <div className="wdpBarFill" style={{ width: `${progressPct}%` }} />
            </div>

            <div className="wdpSteps">
              {steps.map((k, i) => {
                const isActive = i === stepIndex;
                const isDone = i < stepIndex;
                const label =
                  k === "type"
                    ? "Project"
                    : k === "postcode"
                    ? "Location"
                    : k === "stage"
                    ? "Stage"
                    : k === "details"
                    ? "Details"
                    : "Contact";
                return (
                  <div key={k} className={`wdpStepPill ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}>
                    <span className="wdpStepDot" aria-hidden="true" />
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <form className="wdpForm" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="borough" value={borough} />
          <input type="hidden" name="service" value={projectType || "Planning drawings"} />
          <input type="hidden" name="projectType" value={projectType} />
          <input type="hidden" name="postcode" value={postcode} />
          <input type="hidden" name="projectStage" value={stage} />
          <input type="hidden" name="projectDetails" value={details} />
          <input type="hidden" name="sourcePath" value={sourcePath} />

          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="phone" value={phone} />
          <input type="hidden" name="email" value={email} />

          <div className="wdpPanel">
            {step === "type" ? (
              <>
                <div className="wdpPanelTitle">What are you planning?</div>
                <div className="wdpPanelHint">Choose the closest option. You can add detail later.</div>

                <div className="wdpGrid">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t.value}
                      className={`wdpChoice ${projectType === t.value ? "selected" : ""}`}
                      onClick={() => setProjectType(t.value)}
                    >
                      <div className="wdpChoiceTop">
                        <span className="wdpChoiceLabel">{t.label}</span>
                        <span className="wdpChoiceTick" aria-hidden="true">
                          ✓
                        </span>
                      </div>
                      {t.sub ? <div className="wdpChoiceSub">{t.sub}</div> : null}
                    </button>
                  ))}
                </div>
              </>
            ) : null}

            {step === "postcode" ? (
              <>
                <div className="wdpPanelTitle">Where is the property?</div>
                <div className="wdpPanelHint">Enter the postcode so we can confirm the local planning context.</div>

                <div className="wdpFieldRow">
                  <label className="wdpLabel" htmlFor="wdp_postcode">
                    Postcode
                  </label>
                  <input
                    id="wdp_postcode"
                    className="wdpInput"
                    inputMode="text"
                    placeholder="eg N20 0JZ"
                    value={postcode}
                    onChange={(e) => setPostcode(clampStr(e.target.value.toUpperCase(), 16))}
                    autoComplete="postal-code"
                  />
                  <div className="wdpSmallNote">No spam. We only use your details to respond to this enquiry.</div>
                </div>

                <div className="wdpLocalStrip">
                  <div className="wdpLocalStripTitle">Want a faster response?</div>
                  <div className="wdpLocalStripActions">
                    <a className="wdpInlineBtn" href={PHONE_LINK}>
                      Call {PHONE_DISPLAY}
                    </a>
                    <a className="wdpInlineBtn" href={whatsappLink} target="_blank" rel="noreferrer">
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </>
            ) : null}

            {step === "stage" ? (
              <>
                <div className="wdpPanelTitle">What stage are you at?</div>
                <div className="wdpPanelHint">This helps us price accurately and advise the right next step.</div>

                <div className="wdpGrid">
                  {STAGES.map((s) => (
                    <button
                      type="button"
                      key={s.value}
                      className={`wdpChoice ${stage === s.value ? "selected" : ""}`}
                      onClick={() => setStage(s.value)}
                    >
                      <div className="wdpChoiceTop">
                        <span className="wdpChoiceLabel">{s.label}</span>
                        <span className="wdpChoiceTick" aria-hidden="true">
                          ✓
                        </span>
                      </div>
                      {s.sub ? <div className="wdpChoiceSub">{s.sub}</div> : null}
                    </button>
                  ))}
                </div>
              </>
            ) : null}

            {step === "details" ? (
              <>
                <div className="wdpPanelTitle">Tell us about the project</div>
                <div className="wdpPanelHint">Write it in your own words. Mention size, storeys, or anything you already know.</div>

                <div className="wdpFieldRow">
                  <label className="wdpLabel" htmlFor="wdp_details">
                    Project details
                  </label>
                  <textarea
                    id="wdp_details"
                    className="wdpTextarea"
                    placeholder="eg Single storey rear extension, about 3m projection, bi-fold doors, plus planning drawings and advice on permitted development."
                    value={details}
                    onChange={(e) => setDetails(clampStr(e.target.value, 1200))}
                    rows={6}
                  />
                  <div className="wdpCharRow">
                    <span className="wdpCharHint">Aim for 2 to 4 sentences.</span>
                    <span className="wdpCharCount">{details.length}/1200</span>
                  </div>
                </div>
              </>
            ) : null}

            {step === "contact" ? (
              <>
                <div className="wdpPanelTitle">Where should we send your quote?</div>
                <div className="wdpPanelHint">We respond personally. Phone is best for quick clarification and faster turnaround.</div>

                <div className="wdpTwoCol">
                  <div className="wdpFieldRow">
                    <label className="wdpLabel" htmlFor="wdp_name">
                      Name
                    </label>
                    <input
                      id="wdp_name"
                      className="wdpInput"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(clampStr(e.target.value, 80))}
                      autoComplete="name"
                    />
                  </div>

                  <div className="wdpFieldRow">
                    <label className="wdpLabel" htmlFor="wdp_phone">
                      Phone
                    </label>
                    <input
                      id="wdp_phone"
                      className="wdpInput"
                      inputMode="tel"
                      placeholder="eg 07900 000 000"
                      value={phone}
                      onChange={(e) => setPhone(clampStr(e.target.value, 30))}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="wdpFieldRow wdpFull">
                    <label className="wdpLabel" htmlFor="wdp_email">
                      Email
                    </label>
                    <input
                      id="wdp_email"
                      className="wdpInput"
                      inputMode="email"
                      placeholder="eg name@email.com"
                      value={email}
                      onChange={(e) => setEmail(clampStr(e.target.value, 120))}
                      autoComplete="email"
                    />
                    <div className="wdpSmallNote">By submitting, you agree we may contact you about this enquiry only. No spam.</div>
                  </div>
                </div>

                <div className="wdpSummary">
                  <div className="wdpSummaryTitle">Your enquiry summary</div>
                  <div className="wdpSummaryGrid">
                    <div className="wdpSummaryItem">
                      <div className="wdpSummaryK">Project</div>
                      <div className="wdpSummaryV">{projectType || "Not set"}</div>
         
