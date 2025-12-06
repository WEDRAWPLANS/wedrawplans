import React, { useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type Step = 1 | 2 | 3 | 4;

interface SmartPlanningAssistantProps {
  boroughName?: string;
}

export function SmartPlanningAssistant({ boroughName }: SmartPlanningAssistantProps) {
  const [step, setStep] = useState<Step>(1);

  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [stage, setStage] = useState("");
  const [postcode, setPostcode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const effectiveBorough = boroughName || "London";

  function next() {
    setStep((prev) => (prev < 4 ? ((prev + 1) as Step) : prev));
  }

  function back() {
    setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      await submitBoroughLead(e, { boroughName: effectiveBorough });
      setDone(true);
    } catch (err) {
      console.error(err);
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  const summaryText =
    projectType && propertyType && stage
      ? `You are planning a ${projectType.toLowerCase()} to a ${propertyType.toLowerCase()} in ${effectiveBorough}. You are currently at the stage: ${stage.toLowerCase()}. WEDRAWPLANS can prepare drawings aimed at planning approval and building regulations for this type of project.`
      : `Answer the questions and we will outline the likely planning route for your project and send a fixed fee.`;

  if (done) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-[13px] text-slate-800">
        <div className="mb-2 flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-emerald-500 text-[10px] font-semibold tracking-[0.18em] text-emerald-700">
            WDP
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
              WEDRAWPLANS
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-700/80">
              Planning and drawing consultants
            </div>
          </div>
        </div>
        <h3 className="text-[14px] font-semibold text-emerald-800">
          Thank you, your details have been received
        </h3>
        <p className="mt-2">
          We will review your answers and reply with a clear fixed fee and planning advice for your
          project in {effectiveBorough}.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-[13px]">
      {/* WDP logo header inside the tool */}
      <div className="mb-3 flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-full border border-slate-500 text-[10px] font-semibold tracking-[0.18em] text-red-700">
          WDP
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
            WEDRAWPLANS
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Planning and drawing consultants
          </div>
        </div>
      </div>

      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700">
        Smart planning assistant
      </p>
      <h2 className="mt-1 text-[16px] font-semibold uppercase tracking-[0.14em] text-slate-900">
        Find your route to planning approval
      </h2>
      <p className="mt-2 text-[12px] text-slate-700">
        Answer a few quick questions and WEDRAWPLANS will assess your project and send a fixed fee
        for the drawings.
      </p>

      {/* progress bar */}
      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-600">
        <div className="h-1 flex-1 rounded-full bg-slate-200">
          <div
            className="h-1 rounded-full bg-[#64b7c4]"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
        <span>
          Step {step} of 4
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {step === 1 && (
          <div className="space-y-2">
            <label className="text-[11px] font-medium text-slate-700">
              What are you planning to do
            </label>
            <select
              name="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="Rear extension">Rear extension</option>
              <option value="Side or wrap extension">Side or wrap extension</option>
              <option value="Loft conversion">Loft conversion</option>
              <option value="Internal remodelling">Internal remodelling</option>
              <option value="Conversion to flats">Conversion to flats</option>
              <option value="New build house">New build house</option>
              <option value="Other project">Other project</option>
            </select>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-2">
            <label className="text-[11px] font-medium text-slate-700">
              What type of property is it
            </label>
            <select
              name="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              required
              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
            >
              <option value="" disabled>
                Select property type
              </option>
              <option value="Terraced house">Terraced house</option>
              <option value="Semi detached house">Semi detached house</option>
              <option value="Detached house">Detached house</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Flat or maisonette">Flat or maisonette</option>
              <option value="Other property">Other property</option>
            </select>

            <label className="mt-3 text-[11px] font-medium text-slate-700">
              Postcode
            </label>
            <input
              name="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              required
              placeholder="SE5 7GD"
              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-2">
            <label className="text-[11px] font-medium text-slate-700">
              Where are you in the process
            </label>
            <select
              name="stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              required
              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
            >
              <option value="" disabled>
                Select stage
              </option>
              <option value="Just exploring ideas">Just exploring ideas</option>
              <option value="Ready to start drawings">Ready to start drawings</option>
              <option value="Have drawings, need changes">Have drawings, need changes</option>
              <option value="Have refusal, need revision">Have refusal, need revision</option>
            </select>

            <p className="mt-3 rounded-md bg-[#fdf8f3] p-2 text-[12px] text-slate-700">
              {summaryText}
            </p>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3">
            <p className="text-[12px] text-slate-700">
              Enter your details and we will send a fixed fee and planning advice for your project
              in {effectiveBorough}.
            </p>

            <div>
              <label className="text-[11px] font-medium text-slate-700">Name</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                />
              </div>
            </div>

            {/* hidden field so the back end gets full project details text */}
            <input
              type="hidden"
              name="projectDetails"
              value={summaryText}
            />
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            {step > 1 && (
              <button
                type="button"
                onClick={back}
                className="mr-3 text-[11px] text-slate-600 underline"
              >
                Back
              </button>
            )}
          </div>

          {step < 4 && (
            <button
              type="button"
              onClick={next}
              disabled={
                (step === 1 && !projectType) ||
                (step === 2 && (!propertyType || !postcode)) ||
                (step === 3 && !stage)
              }
              className="rounded-full bg-[#64b7c4] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4] disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Next
            </button>
          )}

          {step === 4 && (
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#64b7c4] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4] disabled:bg-slate-300"
            >
              {submitting ? "Sending..." : "Send my details"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
