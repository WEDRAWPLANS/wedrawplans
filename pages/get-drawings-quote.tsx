import Head from "next/head";
import Link from "next/link";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  projectType: string;
  service: string;
  borough: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  projectType: "",
  service: "Planning Drawings",
  borough: "London",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
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

function getBoroughFromPostcode(postcode: string) {
  const p = postcode.trim().toUpperCase();

  if (p.startsWith("SE1") || p.startsWith("SE5") || p.startsWith("SE15")) return "Southwark";
  if (p.startsWith("N2") || p.startsWith("N3") || p.startsWith("N12") || p.startsWith("NW11") || p.startsWith("EN4")) return "Barnet";
  if (p.startsWith("N6") || p.startsWith("N8") || p.startsWith("N10") || p.startsWith("N15") || p.startsWith("N17")) return "Haringey";
  if (p.startsWith("E8") || p.startsWith("E9") || p.startsWith("N1") || p.startsWith("N16")) return "Hackney";
  if (p.startsWith("NW1") || p.startsWith("NW3") || p.startsWith("WC1") || p.startsWith("WC2")) return "Camden";
  if (p.startsWith("E18") || p.startsWith("IG8") || p.startsWith("E11")) return "Redbridge";
  if (p.startsWith("EN1") || p.startsWith("EN2") || p.startsWith("EN3") || p.startsWith("EN4")) return "Enfield";
  if (p.startsWith("HA1") || p.startsWith("HA2") || p.startsWith("HA3") || p.startsWith("HA5")) return "Harrow";
  if (p.startsWith("SW12") || p.startsWith("SW11") || p.startsWith("SW4")) return "Wandsworth";
  if (p.startsWith("E6") || p.startsWith("E12") || p.startsWith("E13")) return "Newham";

  return "London";
}

export default function GetInstantQuotePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const canonicalUrl = "https://www.wedrawplans.co.uk/get-instant-quote";

  const inferredBorough = useMemo(() => {
    return form.postcode.trim() ? getBoroughFromPostcode(form.postcode) : "London";
  }, [form.postcode]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess("");
    setError("");

    const cleanedName = form.name.trim();
    const cleanedEmail = form.email.trim();
    const cleanedPhone = normalisePhone(form.phone);
    const cleanedPostcode = form.postcode.trim().toUpperCase();
    const cleanedMessage = form.message.trim();

    if (!cleanedName) {
      setError("Please enter your name.");
      return;
    }

    if (!isValidEmail(cleanedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!cleanedPhone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!cleanedPostcode || !isValidUkPostcodeLoose(cleanedPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }

    if (!form.projectType.trim()) {
      setError("Please select your project type.");
      return;
    }

    setSubmitting(true);

    try {
      await submitBoroughLead({
        name: cleanedName,
        email: cleanedEmail,
        phone: cleanedPhone,
        postcode: cleanedPostcode,
        borough: inferredBorough,
        service: form.service,
        message:
          cleanedMessage ||
          `New instant quote request for ${form.projectType}. Postcode: ${cleanedPostcode}.`,
        raw: {
          source: "get-instant-quote-page",
          page: "/get-instant-quote",
          projectType: form.projectType,
          inferredBorough,
          service: form.service,
          originalMessage: cleanedMessage,
        },
      });

      setSuccess("Thank you. Your request has been sent successfully. We will contact you shortly.");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError("Sorry, something went wrong while sending your request. Please try again or call us on 020 3654 8508.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Get Instant Quote | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Get an instant quote request started with WEDRAWPLANS for planning drawings, extension plans, loft conversion drawings, measured surveys and building regulation drawings across London."
        />
        <meta
          name="keywords"
          content="get instant quote, planning drawings quote, extension drawings quote, loft conversion drawings quote, building regulation drawings quote, WEDRAWPLANS"
        />
        <meta property="og:title" content="Get Instant Quote | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Need architectural drawings for your extension, loft conversion or planning application? Send your details to WEDRAWPLANS now."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                color: "#0f172a",
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: 0.2,
              }}
            >
              <img
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                style={{ height: 44, width: "auto", display: "block" }}
              />
              <span>WEDRAWPLANS</span>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <a
                href="tel:+442036548508"
                style={{
                  textDecoration: "none",
                  background: "#111827",
                  color: "#ffffff",
                  padding: "11px 16px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Call 020 3654 8508
              </a>
              <a
                href="https://wa.me/442036548508"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  background: "#16a34a",
                  color: "#ffffff",
                  padding: "11px 16px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          <section
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 50%, rgba(17,24,39,1) 100%)",
              color: "#ffffff",
            }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "64px 20px 40px",
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 28,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.1)",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 18,
                  }}
                >
                  Planning drawings • Extension plans • Loft conversion drawings
                </div>

                <h1
                  style={{
                    margin: 0,
                    fontSize: 48,
                    lineHeight: 1.08,
                    fontWeight: 900,
                    maxWidth: 760,
                  }}
                >
                  Get instant quote guidance for your drawings project
                </h1>

                <p
                  style={{
                    marginTop: 18,
                    marginBottom: 0,
                    fontSize: 19,
                    lineHeight: 1.7,
                    maxWidth: 760,
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  Tell us your postcode and project type and send your details directly to WEDRAWPLANS.
                  We handle planning drawings, building regulation drawings, measured surveys and extension
                  plans across London.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 24,
                  }}
                >
                  {[
                    "Initial survey within 48 hours",
                    "Fast quote review",
                    "Phone and email follow up",
                    "London coverage",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "10px 14px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.1)",
                        fontSize: 14,
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  color: "#0f172a",
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.24)",
                }}
              >
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.15 }}>Request your quote</h2>
                  <p style={{ margin: "10px 0 0", color: "#475569", lineHeight: 1.6 }}>
                    Complete this short form and we will review your project details.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gap: 14 }}>
                    <div>
                      <label htmlFor="name" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label htmlFor="email" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="you@example.com"
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="07..."
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label htmlFor="postcode" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                          Postcode
                        </label>
                        <input
                          id="postcode"
                          type="text"
                          value={form.postcode}
                          onChange={(e) => setForm((prev) => ({ ...prev, postcode: e.target.value }))}
                          placeholder="SE1 1JA"
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label htmlFor="projectType" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                          Project type
                        </label>
                        <select
                          id="projectType"
                          value={form.projectType}
                          onChange={(e) => setForm((prev) => ({ ...prev, projectType: e.target.value }))}
                          style={inputStyle}
                        >
                          <option value="">Select project type</option>
                          <option value="Rear extension">Rear extension</option>
                          <option value="Side extension">Side extension</option>
                          <option value="Wraparound extension">Wraparound extension</option>
                          <option value="Loft conversion">Loft conversion</option>
                          <option value="Garage conversion">Garage conversion</option>
                          <option value="Internal alterations">Internal alterations</option>
                          <option value="Building regulation drawings">Building regulation drawings</option>
                          <option value="Measured survey">Measured survey</option>
                          <option value="Other domestic project">Other domestic project</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label htmlFor="service" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                          Service needed
                        </label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                          style={inputStyle}
                        >
                          <option value="Planning Drawings">Planning Drawings</option>
                          <option value="Building Regulation Drawings">Building Regulation Drawings</option>
                          <option value="Measured Building Survey">Measured Building Survey</option>
                          <option value="Planning Application Support">Planning Application Support</option>
                          <option value="Full Drawing Package">Full Drawing Package</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="borough" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                          Area served
                        </label>
                        <input
                          id="borough"
                          type="text"
                          value={form.postcode.trim() ? inferredBorough : form.borough}
                          readOnly
                          style={{ ...inputStyle, background: "#f8fafc", color: "#334155" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" style={{ display: "block", marginBottom: 6, fontWeight: 700 }}>
                        Project details
                      </label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us what you need, for example rear extension, loft conversion, planning application or building regulation drawings."
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                      />
                    </div>

                    {error ? (
                      <div
                        style={{
                          background: "#fef2f2",
                          color: "#b91c1c",
                          border: "1px solid #fecaca",
                          padding: "12px 14px",
                          borderRadius: 14,
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      >
                        {error}
                      </div>
                    ) : null}

                    {success ? (
                      <div
                        style={{
                          background: "#ecfdf5",
                          color: "#166534",
                          border: "1px solid #bbf7d0",
                          padding: "12px 14px",
                          borderRadius: 14,
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      >
                        {success}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        border: 0,
                        cursor: submitting ? "not-allowed" : "pointer",
                        opacity: submitting ? 0.7 : 1,
                        background: "#dc2626",
                        color: "#ffffff",
                        padding: "16px 18px",
                        borderRadius: 16,
                        fontSize: 16,
                        fontWeight: 800,
                      }}
                    >
                      {submitting ? "Sending request..." : "Get my quote review"}
                    </button>

                    <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                      By submitting this form, you agree to be contacted by phone or email regarding your drawings project.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "42px 20px 20px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {[
                {
                  title: "Planning drawings",
                  text: "Clear proposed drawings for house extensions, loft conversions and home improvement projects.",
                },
                {
                  title: "Measured surveys",
                  text: "Accurate existing drawings to support planning applications and building regulation packages.",
                },
                {
                  title: "Fast follow up",
                  text: "Your enquiry goes straight to WEDRAWPLANS so we can review and respond quickly.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 22,
                    padding: 22,
                    boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: 22 }}>{item.title}</h3>
                  <p style={{ margin: "10px 0 0", color: "#475569", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 20px 60px" }}>
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: 26,
                padding: 28,
                boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>Why this page matters for Google leads</h2>
              <p style={{ margin: "14px 0 0", color: "#475569", lineHeight: 1.8, maxWidth: 980 }}>
                This page gives your Google Business Profile a dedicated conversion destination. Instead of sending visitors
                to a general page, you can now link your profile, posts, services, products and Q and A directly to a short
                lead form page designed to convert homeowners who need drawings.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: 16,
                  marginTop: 24,
                }}
              >
                {[
                  "Use this as the Website link in Google posts",
                  "Use this as the Product button link",
                  "Use this in Google Q and A answers",
                  "Use this in booking and contact call to actions",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e5e7eb",
                      borderRadius: 18,
                      padding: 18,
                      fontWeight: 700,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="tel:+442036548508"
                  style={{
                    textDecoration: "none",
                    background: "#111827",
                    color: "#ffffff",
                    padding: "13px 18px",
                    borderRadius: 999,
                    fontWeight: 800,
                  }}
                >
                  Call now
                </a>
                <a
                  href="mailto:info@wedrawplans.com"
                  style={{
                    textDecoration: "none",
                    background: "#ffffff",
                    color: "#111827",
                    border: "1px solid #cbd5e1",
                    padding: "13px 18px",
                    borderRadius: 999,
                    fontWeight: 800,
                  }}
                >
                  Email info@wedrawplans.com
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 760px) {
          h1 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#0f172a",
  borderRadius: 14,
  padding: "14px 15px",
  fontSize: 15,
  lineHeight: 1.4,
  outline: "none",
  boxSizing: "border-box",
};
