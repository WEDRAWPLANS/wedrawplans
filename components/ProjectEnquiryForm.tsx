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

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

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
  const cleaned = s.replace(/[^\d+]/g, "");
  return cleaned;
}

function isLikelyPhone(v: string) {
  const s = normalizePhone(v);
  const digits = s.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isDebugMode() {
  try {
    if (typeof window === "undefined") return false;
    const url = new URL(window.location.href);
    const q = url.searchParams;
    if (q.get("ga_debug") === "1") return true;
    if (q.get("debug") === "1") return true;
    if (window.localStorage && window.localStorage.getItem("GA_DEBUG") === "1") return true;
    return false;
  } catch {
    return false;
  }
}

function gaEvent(action: string, params: Record<string, any> = {}, preferBeacon = true) {
  try {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    const payload: Record<string, any> = { ...params };

    if (isDebugMode()) {
      payload.debug_mode = true;
    }

    if (preferBeacon) {
      payload.transport_type = "beacon";
    }

    window.gtag("event", action, payload);
  } catch {
    // no op
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

const PROJECT_TYPES: { label: string; value: string; sub?: string }[] = [
  { label: "House extension", value: "House extension", sub: "Rear, side return, wraparound, double storey" },
  { label: "Loft conversion", value: "Loft conversion", sub: "Dormer, hip to gable, mansard" },
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
    const enc = encodeURIComponent(msg);
    return `https://wa.me/442036548508?text=${enc}`;
  }, [borough]);

  const gaBaseParams = useMemo(() => {
    return {
      page_path: typeof window !== "undefined" ? window.location.pathname : sourcePath || "",
      page_location: typeof window !== "undefined" ? window.location.href : "",
      borough: borough || "London",
      source_path: sourcePath || "",
    };
  }, [borough, sourcePath]);

  function trackQuickContact(kind: "call" | "whatsapp" | "email", extra: Record<string, any> = {}) {
    gaEvent(`click_${kind}`, {
      ...gaBaseParams,
      project_type: projectType || "",
      stage: stage || "",
      postcode: postcode || "",
      ...extra,
    });
  }

  function goNext() {
    setErr("");
    const ok = validateCurrentStep();
    if (!ok) return;

    gaEvent("lead_step_continue", {
      ...gaBaseParams,
      step,
      next_step: steps[Math.min(stepIndex + 1, steps.length - 1)],
      project_type: projectType || "",
      stage: stage || "",
      postcode: postcode || "",
    });

    const next = steps[Math.min(stepIndex + 1, steps.length - 1)];
    setStep(next);
  }

  function goBack() {
    setErr("");

    gaEvent("lead_step_back", {
      ...gaBaseParams,
      step,
      prev_step: steps[Math.max(stepIndex - 1, 0)],
    }, true);

    const prev = steps[Math.max(stepIndex - 1, 0)];
    setStep(prev);
  }

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");

    if (!validateCurrentStep()) return;

    setIsSubmitting(true);

    gaEvent("lead_submit_attempt", {
      ...gaBaseParams,
      project_type: projectType || "",
      stage: stage || "",
      postcode: postcode || "",
    }, true);

    try {
      await submitBoroughLead(e, { boroughName: borough || "London" });

      gaEvent("lead_submit", {
        ...gaBaseParams,
        project_type: projectType || "",
        stage: stage || "",
        postcode: postcode || "",
        has_phone: !!phone,
        has_email: !!email,
      }, true);

      await sleep(250);

      setSubmitted(true);
      if (props.onSuccess) props.onSuccess();
    } catch (error) {
      gaEvent("lead_submit_error", {
        ...gaBaseParams,
        project_type: projectType || "",
        stage: stage || "",
        postcode: postcode || "",
      }, true);

      setErr("Something went wrong sending your enquiry. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
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
              <a className="wdpMiniBtn" href={PHONE_LINK} onClick={() => trackQuickContact("call", { location: "success_top" })}>
                Call
              </a>
              <a
                className="wdpMiniBtn"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackQuickContact("whatsapp", { location: "success_top" })}
              >
                WhatsApp
              </a>
              <a className="wdpMiniBtn" href={EMAIL_LINK} onClick={() => trackQuickContact("email", { location: "success_top" })}>
                Email
              </a>
            </div>
          </div>

          <div className="wdpSuccessBody">
            <div className="wdpSuccessTitle">Thank you. We received your enquiry.</div>
            <div className="wdpSuccessText">
              We will contact you shortly. If you need a quicker response, call us on{" "}
              <a href={PHONE_LINK} className="wdpInlineLink" onClick={() => trackQuickContact("call", { location: "success_text" })}>
                {PHONE_DISPLAY}
              </a>{" "}
              or message us on WhatsApp.
            </div>

            <div className="wdpSuccessActions">
              <a
                className="wdpPrimary"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackQuickContact("whatsapp", { location: "success_actions" })}
              >
                Message on WhatsApp
              </a>
              <a className="wdpGhost" href={PHONE_LINK} onClick={() => trackQuickContact("call", { location: "success_actions" })}>
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
            <a className="wdpMiniBtn" href={PHONE_LINK} onClick={() => trackQuickContact("call", { location: "top" })}>
              Call
            </a>
            <a
              className="wdpMiniBtn"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackQuickContact("whatsapp", { location: "top" })}
            >
              WhatsApp
            </a>
            <a className="wdpMiniBtn" href={EMAIL_LINK} onClick={() => trackQuickContact("email", { location: "top" })}>
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
                  k === "type" ? "Project" : k === "postcode" ? "Location" : k === "stage" ? "Stage" : k === "details" ? "Details" : "Contact";
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
                      onClick={() => {
                        setProjectType(t.value);
                        gaEvent("lead_select_project_type", { ...gaBaseParams, value: t.value }, true);
                      }}
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
                    <a className="wdpInlineBtn" href={PHONE_LINK} onClick={() => trackQuickContact("call", { location: "postcode_strip" })}>
                      Call {PHONE_DISPLAY}
                    </a>
                    <a
                      className="wdpInlineBtn"
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackQuickContact("whatsapp", { location: "postcode_strip" })}
                    >
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
                      onClick={() => {
                        setStage(s.value);
                        gaEvent("lead_select_stage", { ...gaBaseParams, value: s.value }, true);
                      }}
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
                    </div>
                    <div className="wdpSummaryItem">
                      <div className="wdpSummaryK">Postcode</div>
                      <div className="wdpSummaryV">{postcode || "Not set"}</div>
                    </div>
                    <div className="wdpSummaryItem">
                      <div className="wdpSummaryK">Stage</div>
                      <div className="wdpSummaryV">{stage || "Not set"}</div>
                    </div>
                    {borough ? (
                      <div className="wdpSummaryItem">
                        <div className="wdpSummaryK">Area</div>
                        <div className="wdpSummaryV">{borough}</div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </>
            ) : null}

            {err ? (
              <div className="wdpError" role="alert">
                {err}
              </div>
            ) : null}

            <div className="wdpNav">
              <button type="button" className={`wdpBack ${stepIndex === 0 ? "disabled" : ""}`} onClick={goBack} disabled={stepIndex === 0 || isSubmitting}>
                Back
              </button>

              <div className="wdpNavRight">
                {step !== "contact" ? (
                  <button type="button" className="wdpPrimary" onClick={goNext} disabled={isSubmitting}>
                    Continue
                  </button>
                ) : (
                  <button type="submit" className="wdpPrimary" disabled={isSubmitting || !name || !phone || !email}>
                    {isSubmitting ? "Sending..." : "Get my quote"}
                  </button>
                )}

                <a className="wdpGhost" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => trackQuickContact("whatsapp", { location: "nav" })}>
                  Prefer WhatsApp
                </a>
              </div>
            </div>

            <div className="wdpFooterNote">
              If you prefer, call{" "}
              <a href={PHONE_LINK} className="wdpInlineLink" onClick={() => trackQuickContact("call", { location: "footer" })}>
                {PHONE_DISPLAY}
              </a>{" "}
              or email{" "}
              <a href={EMAIL_LINK} className="wdpInlineLink" onClick={() => trackQuickContact("email", { location: "footer" })}>
                {EMAIL_DISPLAY}
              </a>
              .
            </div>
          </div>
        </form>
      </div>

      <style jsx>{styles}</style>
    </section>
  );
}

const styles = `
.wdpWrap{
  width:100%;
  display:flex;
  justify-content:center;
  padding:20px 0;
}
.wdpCard{
  width:100%;
  max-width:980px;
  border-radius:22px;
  background:linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%);
  border:1px solid rgba(0,0,0,0.08);
  box-shadow:0 18px 50px rgba(0,0,0,0.12);
  overflow:hidden;
}
.wdpCardSuccess{
  max-width:860px;
}
.wdpTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:18px 18px 10px 18px;
  gap:14px;
  border-bottom:1px solid rgba(0,0,0,0.06);
  background:radial-gradient(1000px 240px at 15% 0%, rgba(220,0,0,0.10) 0%, rgba(255,255,255,0) 65%),
             radial-gradient(1000px 240px at 85% 0%, rgba(220,0,0,0.08) 0%, rgba(255,255,255,0) 70%),
             #ffffff;
}
.wdpBrand{
  display:flex;
  flex-direction:column;
  gap:6px;
  min-width:240px;
}
.wdpLogo{
  display:inline-flex;
  align-items:center;
}
.wdpWordmark{
  font-weight:900;
  letter-spacing:0.5px;
  font-size:20px;
  color:#111;
}
.wdpTag{
  font-size:13px;
  color:rgba(0,0,0,0.70);
}
.wdpMiniActions{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  justify-content:flex-end;
}
.wdpMiniBtn{
  font-size:13px;
  text-decoration:none;
  padding:8px 10px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,0.10);
  background:#fff;
  color:#111;
  transition:transform .08s ease, box-shadow .12s ease, border-color .12s ease;
}
.wdpMiniBtn:hover{
  transform:translateY(-1px);
  box-shadow:0 10px 24px rgba(0,0,0,0.10);
  border-color:rgba(220,0,0,0.30);
}
.wdpHero{
  padding:16px 18px 10px 18px;
  display:grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap:14px;
}
.wdpHeroLeft{
  display:flex;
  flex-direction:column;
  gap:10px;
}
.wdpH{
  margin:0;
  font-size:26px;
  line-height:1.12;
  letter-spacing:-0.2px;
  color:#111;
}
.wdpSub{
  font-size:14px;
  color:rgba(0,0,0,0.72);
  line-height:1.45;
}
.wdpLocal{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin-left:10px;
  padding:5px 10px;
  border-radius:999px;
  border:1px solid rgba(220,0,0,0.18);
  background:rgba(220,0,0,0.06);
  color:rgba(0,0,0,0.85);
}
.wdpDot{
  width:8px;
  height:8px;
  border-radius:999px;
  background:#dc0000;
  box-shadow:0 0 0 3px rgba(220,0,0,0.16);
}
.wdpProof{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:10px;
  margin-top:4px;
}
.wdpProofItem{
  border:1px solid rgba(0,0,0,0.07);
  background:#fff;
  border-radius:16px;
  padding:10px 10px;
}
.wdpProofNum{
  font-weight:900;
  font-size:18px;
  color:#111;
}
.wdpProofLbl{
  font-size:12px;
  color:rgba(0,0,0,0.72);
  margin-top:2px;
}
.wdpHeroRight{
  border:1px solid rgba(0,0,0,0.07);
  background:#fff;
  border-radius:18px;
  padding:12px;
  align-self:start;
}
.wdpProgressTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:8px;
}
.wdpProgressLabel{
  font-size:12px;
  color:rgba(0,0,0,0.72);
}
.wdpProgressPct{
  font-size:12px;
  font-weight:800;
  color:#111;
}
.wdpBar{
  height:10px;
  border-radius:999px;
  background:rgba(0,0,0,0.06);
  overflow:hidden;
}
.wdpBarFill{
  height:100%;
  border-radius:999px;
  background:linear-gradient(90deg, #dc0000 0%, #ff3b3b 55%, #ff7a7a 100%);
}
.wdpSteps{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:10px;
}
.wdpStepPill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:7px 10px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,0.08);
  background:rgba(0,0,0,0.02);
  font-size:12px;
  color:rgba(0,0,0,0.72);
}
.wdpStepPill.active{
  border-color:rgba(220,0,0,0.28);
  background:rgba(220,0,0,0.06);
  color:rgba(0,0,0,0.88);
}
.wdpStepPill.done{
  border-color:rgba(0,0,0,0.10);
  background:rgba(0,0,0,0.04);
  color:rgba(0,0,0,0.78);
}
.wdpStepDot{
  width:8px;
  height:8px;
  border-radius:999px;
  background:rgba(0,0,0,0.20);
}
.wdpStepPill.active .wdpStepDot{
  background:#dc0000;
  box-shadow:0 0 0 3px rgba(220,0,0,0.16);
}
.wdpForm{
  padding:6px 18px 18px 18px;
}
.wdpPanel{
  border:1px solid rgba(0,0,0,0.07);
  background:#fff;
  border-radius:20px;
  padding:14px;
}
.wdpPanelTitle{
  font-weight:900;
  font-size:18px;
  color:#111;
}
.wdpPanelHint{
  margin-top:4px;
  font-size:13px;
  color:rgba(0,0,0,0.72);
}
.wdpGrid{
  margin-top:12px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:10px;
}
.wdpChoice{
  text-align:left;
  border:1px solid rgba(0,0,0,0.08);
  background:linear-gradient(180deg, #fff 0%, #fbfbfb 100%);
  border-radius:18px;
  padding:12px 12px;
  cursor:pointer;
  transition:transform .08s ease, box-shadow .12s ease, border-color .12s ease;
}
.wdpChoice:hover{
  transform:translateY(-1px);
  box-shadow:0 14px 30px rgba(0,0,0,0.10);
  border-color:rgba(220,0,0,0.22);
}
.wdpChoice.selected{
  border-color:rgba(220,0,0,0.55);
  box-shadow:0 18px 40px rgba(220,0,0,0.10);
}
.wdpChoiceTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
}
.wdpChoiceLabel{
  font-weight:800;
  color:#111;
  font-size:14px;
}
.wdpChoiceTick{
  opacity:0;
  width:22px;
  height:22px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:999px;
  background:rgba(220,0,0,0.10);
  color:#dc0000;
  font-weight:900;
}
.wdpChoice.selected .wdpChoiceTick{
  opacity:1;
}
.wdpChoiceSub{
  margin-top:6px;
  font-size:12px;
  color:rgba(0,0,0,0.70);
  line-height:1.35;
}
.wdpFieldRow{
  margin-top:12px;
}
.wdpLabel{
  display:block;
  font-size:13px;
  font-weight:800;
  color:#111;
  margin-bottom:6px;
}
.wdpInput{
  width:100%;
  border-radius:14px;
  border:1px solid rgba(0,0,0,0.10);
  padding:12px 12px;
  font-size:14px;
  outline:none;
  background:#fff;
  transition:border-color .12s ease, box-shadow .12s ease;
}
.wdpInput:focus{
  border-color:rgba(220,0,0,0.45);
  box-shadow:0 0 0 4px rgba(220,0,0,0.10);
}
.wdpTextarea{
  width:100%;
  border-radius:14px;
  border:1px solid rgba(0,0,0,0.10);
  padding:12px 12px;
  font-size:14px;
  outline:none;
  background:#fff;
  resize:vertical;
  transition:border-color .12s ease, box-shadow .12s ease;
}
.wdpTextarea:focus{
  border-color:rgba(220,0,0,0.45);
  box-shadow:0 0 0 4px rgba(220,0,0,0.10);
}
.wdpSmallNote{
  margin-top:8px;
  font-size:12px;
  color:rgba(0,0,0,0.62);
}
.wdpCharRow{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:8px;
  gap:10px;
}
.wdpCharHint{
  font-size:12px;
  color:rgba(0,0,0,0.62);
}
.wdpCharCount{
  font-size:12px;
  color:rgba(0,0,0,0.62);
}
.wdpLocalStrip{
  margin-top:12px;
  border-radius:16px;
  border:1px dashed rgba(220,0,0,0.28);
  background:rgba(220,0,0,0.06);
  padding:12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  flex-wrap:wrap;
}
.wdpLocalStripTitle{
  font-weight:900;
  color:#111;
  font-size:13px;
}
.wdpLocalStripActions{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}
.wdpInlineBtn{
  text-decoration:none;
  font-size:13px;
  padding:8px 10px;
  border-radius:999px;
  background:#fff;
  border:1px solid rgba(0,0,0,0.10);
  color:#111;
}
.wdpTwoCol{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
  margin-top:6px;
}
.wdpFull{
  grid-column: 1 / -1;
}
.wdpSummary{
  margin-top:12px;
  border:1px solid rgba(0,0,0,0.07);
  background:rgba(0,0,0,0.02);
  border-radius:16px;
  padding:12px;
}
.wdpSummaryTitle{
  font-weight:900;
  font-size:13px;
  color:#111;
  margin-bottom:8px;
}
.wdpSummaryGrid{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:10px;
}
.wdpSummaryItem{
  background:#fff;
  border:1px solid rgba(0,0,0,0.07);
  border-radius:14px;
  padding:10px;
}
.wdpSummaryK{
  font-size:11px;
  color:rgba(0,0,0,0.62);
  margin-bottom:4px;
  font-weight:800;
}
.wdpSummaryV{
  font-size:13px;
  color:#111;
  font-weight:800;
}
.wdpError{
  margin-top:12px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid rgba(220,0,0,0.25);
  background:rgba(220,0,0,0.08);
  color:#7a0000;
  font-size:13px;
  font-weight:800;
}
.wdpNav{
  margin-top:14px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
}
.wdpBack{
  border-radius:14px;
  border:1px solid rgba(0,0,0,0.12);
  padding:11px 14px;
  background:#fff;
  color:#111;
  font-weight:900;
  cursor:pointer;
}
.wdpBack.disabled{
  opacity:0.45;
  cursor:not-allowed;
}
.wdpNavRight{
  display:flex;
  gap:10px;
  align-items:center;
  flex-wrap:wrap;
  justify-content:flex-end;
}
.wdpPrimary{
  border-radius:14px;
  border:0;
  padding:12px 14px;
  background:linear-gradient(90deg, #dc0000 0%, #ff3b3b 70%, #ff6d6d 100%);
  color:#fff;
  font-weight:900;
  cursor:pointer;
  box-shadow:0 14px 30px rgba(220,0,0,0.18);
  transition:transform .08s ease, box-shadow .12s ease;
}
.wdpPrimary:hover{
  transform:translateY(-1px);
  box-shadow:0 18px 40px rgba(220,0,0,0.22);
}
.wdpPrimary:disabled{
  opacity:0.70;
  cursor:not-allowed;
  transform:none;
}
.wdpGhost{
  border-radius:14px;
  border:1px solid rgba(0,0,0,0.12);
  padding:11px 14px;
  background:#fff;
  color:#111;
  font-weight:900;
  text-decoration:none;
}
.wdpFooterNote{
  margin-top:12px;
  font-size:12px;
  color:rgba(0,0,0,0.64);
}
.wdpInlineLink{
  color:#111;
  font-weight:900;
  text-decoration:underline;
  text-underline-offset:3px;
}
.wdpSuccessBody{
  padding:18px;
}
.wdpSuccessTitle{
  font-size:22px;
  font-weight:900;
  color:#111;
}
.wdpSuccessText{
  margin-top:8px;
  font-size:14px;
  color:rgba(0,0,0,0.72);
  line-height:1.5;
}
.wdpSuccessActions{
  margin-top:14px;
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}
@media (max-width: 920px){
  .wdpHero{
    grid-template-columns: 1fr;
  }
  .wdpProof{
    grid-template-columns: 1fr;
  }
}
@media (max-width: 720px){
  .wdpGrid{
    grid-template-columns: 1fr;
  }
  .wdpTwoCol{
    grid-template-columns: 1fr;
  }
  .wdpSummaryGrid{
    grid-template-columns: 1fr;
  }
}
`;
