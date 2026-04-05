import React, { useEffect, useMemo, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

interface Props {
  boroughName?: string;
}

const SERVICES = [
  "Extension Plans",
  "Loft Conversion Plans",
  "Building Regulations Plans",
  "Design Plans",
  "Detailed Sections",
  "Dropped Kerb Plans",
  "Elevation Plans",
  "Floor Plans",
  "Garage Conversion Plans",
  "Garage Plans",
  "Garden Studio Plans",
  "HMO Plans",
  "Party Wall Services",
  "Planning Applications",
  "Property Conversion",
  "Shop Plans",
  "Structural Calculations",
  "New Build Plans",
  "Other",
];

const PROPERTY_TYPES = [
  "House",
  "Flat or maisonette",
  "Commercial unit",
  "Mixed-use property",
  "Other",
];

function isValidUkPostcodeLoose(value: string) {
  const v = value.trim().toUpperCase();
  if (!v) return false;
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(v);
}

function sanitizeText(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

export default function SmartPlanningAssistant({ boroughName }: Props) {
  const area = boroughName || "London";

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [service, setService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [postcode, setPostcode] = useState("");
  const [details, setDetails] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setError("");
  }, [step, open]);

  const progress = useMemo(() => {
    if (done) return 100;
    if (step === 1) return 20;
    if (step === 2) return 40;
    if (step === 3) return 60;
    if (step === 4) return 80;
    return 95;
  }, [done, step]);

  function closeAssistant() {
    setOpen(false);
  }

  function resetAssistant() {
    setStep(1);
    setService("");
    setPropertyType("");
    setPostcode("");
    setDetails("");
    setName("");
    setPhone("");
    setEmail("");
    setSubmitting(false);
    setDone(false);
    setError("");
  }

  function goNextFromPostcode() {
    const cleanPostcode = sanitizeText(postcode).toUpperCase();
    if (!cleanPostcode) {
      setError("Please enter your postcode.");
      return;
    }
    if (!isValidUkPostcodeLoose(cleanPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }
    setPostcode(cleanPostcode);
    setStep(4);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const cleanName = sanitizeText(name);
    const cleanPhone = sanitizeText(phone);
    const cleanEmail = sanitizeText(email);
    const cleanPostcode = sanitizeText(postcode).toUpperCase();
    const cleanDetails = sanitizeText(details);

    if (!service || !propertyType || !cleanPostcode || !cleanName || !cleanPhone || !cleanEmail) {
      setError("Please complete all required fields.");
      return;
    }

    if (!isValidUkPostcodeLoose(cleanPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }

    setSubmitting(true);

    try {
      await submitBoroughLead(e, { boroughName: area });
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {!open && (
        <>
          <div className="fixed bottom-4 right-4 z-50 md:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-full border border-[#16213b] bg-[#0f172a] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-2xl"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e31c23]">
                <span className="block h-3 w-3 rounded-full bg-white" />
              </span>
              Planning Assistant
            </button>
          </div>

          <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 md:block">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full border border-[#16213b] bg-[#0f172a] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-2xl transition hover:bg-[#16213b]"
            >
              Planning Assistant
            </button>
          </div>
        </>
      )}

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-[2px]">
          <div className="flex h-screen w-screen items-stretch justify-center md:p-6">
            <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#f7f4ee] md:h-[92vh] md:max-h-[940px] md:w-full md:max-w-[920px] md:rounded-[28px] md:border md:border-[#d8d2c6] md:shadow-[0_32px_120px_rgba(15,23,42,0.30)]">
              <div className="border-b border-[#ddd6c9] bg-[#f7f4ee] px-5 py-5 md:px-10 md:py-7">
                <div className="flex items-start justify-between gap-4">
                  <button
                    type="button"
                    onClick={resetAssistant}
                    className="hidden rounded-full border border-[#d8d2c6] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#24324a] transition hover:bg-[#f3efe6] md:inline-flex"
                  >
                    Reset
                  </button>

                  <div className="flex-1 text-center">
                    <img
                      src="/images/wedrawplans-logo.png"
                      alt="WEDRAWPLANS"
                      className="mx-auto h-auto w-[150px] object-contain md:w-[170px]"
                      onError={(e) => {
                        e.currentTarget.src = "/images/wedrawplans-emblem.png";
                      }}
                    />
                    <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5f6b7d]">
                      Planning Assistant
                    </div>
                    <div className="mt-2 text-[14px] text-[#24324a]">
                      Simple steps to help you get the right quote faster
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={closeAssistant}
                    className="rounded-full border border-[#d8d2c6] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#24324a] transition hover:bg-[#f3efe6]"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5">
                  <div className="h-2 rounded-full bg-[#e5dfd3]">
                    <div
                      className="h-2 rounded-full bg-[#0f172a] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6 md:px-10 md:py-8">
                {!done && (
                  <>
                    {step === 1 && (
                      <div className="mx-auto max-w-[760px]">
                        <div className="mb-6 text-center">
                          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
                            Which service do you need?
                          </h2>
                          <p className="mt-2 text-[15px] leading-7 text-[#556274]">
                            Choose the service that best matches your enquiry.
                          </p>
                        </div>

                        <div className="grid gap-3 md:grid-cols-2">
                          {SERVICES.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setService(item);
                                setStep(2);
                              }}
                              className={`rounded-[18px] border px-5 py-4 text-left text-[15px] font-medium transition ${
                                service === item
                                  ? "border-[#0f172a] bg-[#0f172a] text-white shadow-lg"
                                  : "border-[#d7d0c4] bg-white text-[#1f2a3d] hover:border-[#aeb7c3] hover:bg-[#fcfbf8]"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="mx-auto max-w-[680px]">
                        <div className="mb-6 text-center">
                          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
                            Property type
                          </h2>
                          <p className="mt-2 text-[15px] leading-7 text-[#556274]">
                            Select the type of property for this enquiry.
                          </p>
                        </div>

                        <div className="grid gap-3 md:grid-cols-2">
                          {PROPERTY_TYPES.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setPropertyType(item);
                                setStep(3);
                              }}
                              className={`rounded-[18px] border px-5 py-4 text-left text-[15px] font-medium transition ${
                                propertyType === item
                                  ? "border-[#0f172a] bg-[#0f172a] text-white shadow-lg"
                                  : "border-[#d7d0c4] bg-white text-[#1f2a3d] hover:border-[#aeb7c3] hover:bg-[#fcfbf8]"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>

                        <div className="mt-6 flex justify-center">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="rounded-full border border-[#d8d2c6] bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#24324a] transition hover:bg-[#f3efe6]"
                          >
                            Back
                          </button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="mx-auto max-w-[620px]">
                        <div className="mb-6 text-center">
                          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
                            Enter your postcode
                          </h2>
                          <p className="mt-2 text-[15px] leading-7 text-[#556274]">
                            This helps us route the enquiry correctly.
                          </p>
                        </div>

                        <div className="rounded-[22px] border border-[#d7d0c4] bg-white p-4 md:p-5">
                          <input
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                            placeholder="e.g. RM1 2AA"
                            className="w-full rounded-[16px] border border-[#d7d0c4] bg-[#fcfbf8] px-4 py-4 text-[16px] text-[#1f2a3d] outline-none transition focus:border-[#0f172a]"
                          />

                          {error && (
                            <div className="mt-3 text-[13px] text-[#c62828]">
                              {error}
                            </div>
                          )}

                          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="w-full rounded-full border border-[#d8d2c6] bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#24324a] transition hover:bg-[#f3efe6]"
                            >
                              Back
                            </button>
                            <button
                              type="button"
                              onClick={goNextFromPostcode}
                              className="w-full rounded-full bg-[#0f172a] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#16213b]"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="mx-auto max-w-[620px]">
                        <div className="mb-6 text-center">
                          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
                            Add any details
                          </h2>
                          <p className="mt-2 text-[15px] leading-7 text-[#556274]">
                            Optional, but helpful if you want to add a short note.
                          </p>
                        </div>

                        <div className="rounded-[22px] border border-[#d7d0c4] bg-white p-4 md:p-5">
                          <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            rows={5}
                            placeholder="Short description of the works..."
                            className="w-full rounded-[16px] border border-[#d7d0c4] bg-[#fcfbf8] px-4 py-4 text-[15px] text-[#1f2a3d] outline-none transition focus:border-[#0f172a]"
                          />

                          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <button
                              type="button"
                              onClick={() => setStep(3)}
                              className="w-full rounded-full border border-[#d8d2c6] bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#24324a] transition hover:bg-[#f3efe6]"
                            >
                              Back
                            </button>
                            <button
                              type="button"
                              onClick={() => setStep(5)}
                              className="w-full rounded-full bg-[#0f172a] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#16213b]"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="mx-auto max-w-[680px]">
                        <div className="mb-6 text-center">
                          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
                            Your details
                          </h2>
                          <p className="mt-2 text-[15px] leading-7 text-[#556274]">
                            Leave your details and we will come back with the next steps.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="rounded-[22px] border border-[#d7d0c4] bg-white p-4 md:p-6">
                          <input name="projectType" value={service} type="hidden" />
                          <input name="propertyType" value={propertyType} type="hidden" />
                          <input name="postcode" value={postcode} type="hidden" />
                          <input
                            name="projectDetails"
                            value={`Service: ${service} | Property: ${propertyType} | Postcode: ${postcode} | Details: ${details}`}
                            type="hidden"
                          />

                          <div className="grid gap-3 md:grid-cols-3">
                            <input
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Name"
                              className="rounded-[16px] border border-[#d7d0c4] bg-[#fcfbf8] px-4 py-4 text-[15px] text-[#1f2a3d] outline-none transition focus:border-[#0f172a]"
                            />

                            <input
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone"
                              className="rounded-[16px] border border-[#d7d0c4] bg-[#fcfbf8] px-4 py-4 text-[15px] text-[#1f2a3d] outline-none transition focus:border-[#0f172a]"
                            />

                            <input
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email"
                              className="rounded-[16px] border border-[#d7d0c4] bg-[#fcfbf8] px-4 py-4 text-[15px] text-[#1f2a3d] outline-none transition focus:border-[#0f172a]"
                            />
                          </div>

                          <div className="mt-4 rounded-[18px] border border-[#ece6db] bg-[#fcfbf8] px-4 py-4 text-[14px] leading-7 text-[#556274]">
                            <div>
                              <span className="font-semibold text-[#1f2a3d]">Service:</span> {service}
                            </div>
                            <div>
                              <span className="font-semibold text-[#1f2a3d]">Property:</span> {propertyType}
                            </div>
                            <div>
                              <span className="font-semibold text-[#1f2a3d]">Postcode:</span> {postcode}
                            </div>
                            {details && (
                              <div>
                                <span className="font-semibold text-[#1f2a3d]">Details:</span> {details}
                              </div>
                            )}
                          </div>

                          {error && (
                            <div className="mt-4 text-[13px] text-[#c62828]">
                              {error}
                            </div>
                          )}

                          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <button
                              type="button"
                              onClick={() => setStep(4)}
                              className="w-full rounded-full border border-[#d8d2c6] bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#24324a] transition hover:bg-[#f3efe6]"
                            >
                              Back
                            </button>

                            <button
                              type="submit"
                              disabled={submitting}
                              className="w-full rounded-full bg-[#e31c23] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c9151c] disabled:cursor-not-allowed disabled:bg-[#d9a4a8]"
                            >
                              {submitting ? "Sending..." : "Send enquiry"}
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </>
                )}

                {done && (
                  <div className="mx-auto max-w-[620px] text-center">
                    <div className="rounded-[24px] border border-[#d7d0c4] bg-white px-6 py-10 shadow-sm">
                      <img
                        src="/images/wedrawplans-logo.png"
                        alt="WEDRAWPLANS"
                        className="mx-auto h-auto w-[130px] object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "/images/wedrawplans-emblem.png";
                        }}
                      />

                      <h2 className="mt-6 text-[30px] font-semibold tracking-[-0.02em] text-[#0f172a]">
                        Thank you for your enquiry
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-[#556274]">
                        WEDRAWPLANS will review and get back to you shortly.
                      </p>

                      <div className="mt-6">
                        <button
                          type="button"
                          onClick={closeAssistant}
                          className="rounded-full bg-[#0f172a] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#16213b]"
                        >
                          Close
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
