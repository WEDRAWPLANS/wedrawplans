import React, { useEffect, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

interface Props {
  boroughName?: string;
}

export default function SmartPlanningAssistant({ boroughName }: Props) {
  const area = boroughName || "London";

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [project, setProject] = useState("");
  const [property, setProperty] = useState("");
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

  const PROJECTS = [
    "Rear extension",
    "Side or wrap extension",
    "Loft conversion",
    "Garage conversion",
    "Shopfront",
    "Change of use",
    "New build",
    "Other",
  ];

  const PROPERTIES = ["House", "Flat", "Commercial"];

  function next() {
    setStep((s) => s + 1);
  }

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name || !phone || !email || !postcode || !project || !property) {
      setError("Please complete all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      await submitBoroughLead(e, { boroughName: area });
      setDone(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Floating Trigger */}
      {!open && (
        <>
          {/* Mobile */}
          <div className="fixed bottom-4 right-4 z-50 md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-full bg-black px-4 py-3 text-white shadow-xl"
            >
              <span className="h-8 w-8 rounded-full bg-[#e31c23]" />
              Ask about planning
            </button>
          </div>

          {/* Desktop */}
          <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 md:block">
            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-black px-4 py-3 text-white shadow-xl"
            >
              Planning Assistant
            </button>
          </div>
        </>
      )}

      {/* Full Screen */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70">
          <div className="flex h-screen w-screen flex-col bg-white md:m-6 md:h-[90vh] md:max-w-[600px] md:rounded-2xl">

            {/* Header */}
            <div className="flex items-center justify-between bg-black px-5 py-4 text-white">
              <div>
                <div className="text-xs uppercase tracking-widest">
                  WEDRAWPLANS
                </div>
                <div className="text-xs opacity-70">Planning Assistant</div>
              </div>

              <button onClick={() => setOpen(false)}>Close</button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 py-6">

              {!done && (
                <>
                  {/* Step 1 */}
                  {step === 1 && (
                    <>
                      <h2 className="mb-4 text-lg font-semibold">
                        What are you planning?
                      </h2>
                      <div className="grid gap-3">
                        {PROJECTS.map((p) => (
                          <button
                            key={p}
                            onClick={() => {
                              setProject(p);
                              next();
                            }}
                            className="rounded-xl border px-4 py-3 text-left hover:bg-black hover:text-white"
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <>
                      <h2 className="mb-4 text-lg font-semibold">
                        Property type
                      </h2>
                      <div className="grid gap-3">
                        {PROPERTIES.map((p) => (
                          <button
                            key={p}
                            onClick={() => {
                              setProperty(p);
                              next();
                            }}
                            className="rounded-xl border px-4 py-3 text-left hover:bg-black hover:text-white"
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <>
                      <h2 className="mb-4 text-lg font-semibold">
                        Postcode
                      </h2>
                      <input
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        placeholder="e.g. RM1 2AA"
                        className="w-full rounded-xl border px-4 py-3"
                      />
                      <button
                        onClick={next}
                        className="mt-4 w-full rounded-full bg-black py-3 text-white"
                      >
                        Continue
                      </button>
                    </>
                  )}

                  {/* Step 4 */}
                  {step === 4 && (
                    <>
                      <h2 className="mb-4 text-lg font-semibold">
                        Any details (optional)
                      </h2>
                      <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                        rows={4}
                        placeholder="Short description..."
                      />
                      <button
                        onClick={next}
                        className="mt-4 w-full rounded-full bg-black py-3 text-white"
                      >
                        Continue
                      </button>
                    </>
                  )}

                  {/* Step 5 – ONE FORM */}
                  {step === 5 && (
                    <form onSubmit={handleSubmit}>
                      <h2 className="mb-4 text-lg font-semibold">
                        Your details
                      </h2>

                      <input
                        name="projectType"
                        value={project}
                        type="hidden"
                      />
                      <input
                        name="propertyType"
                        value={property}
                        type="hidden"
                      />
                      <input
                        name="postcode"
                        value={postcode}
                        type="hidden"
                      />
                      <input
                        name="projectDetails"
                        value={details}
                        type="hidden"
                      />

                      <div className="grid gap-3">
                        <input
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          className="rounded-xl border px-4 py-3"
                        />

                        <input
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          className="rounded-xl border px-4 py-3"
                        />

                        <input
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="rounded-xl border px-4 py-3"
                        />
                      </div>

                      {error && (
                        <div className="mt-3 text-sm text-red-600">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="mt-5 w-full rounded-full bg-[#e31c23] py-3 text-white"
                      >
                        {submitting ? "Sending..." : "Send enquiry"}
                      </button>
                    </form>
                  )}
                </>
              )}

              {/* Done */}
              {done && (
                <div className="text-center">
                  <h2 className="text-lg font-semibold">
                    Thank you for your enquiry
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    WEDRAWPLANS will review and get back to you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
