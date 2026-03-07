import Head from "next/head";
import Link from "next/link";
import type { FormEvent } from "react";
import React, { useMemo, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";
import ServiceInternalLinks from "../components/ServiceInternalLinks";

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
  borough: "London and surrounding M25 areas",
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
  if (
    p.startsWith("N2") ||
    p.startsWith("N3") ||
    p.startsWith("N12") ||
    p.startsWith("NW11") ||
    p.startsWith("EN4")
  ) {
    return "Barnet";
  }
  if (
    p.startsWith("N6") ||
    p.startsWith("N8") ||
    p.startsWith("N10") ||
    p.startsWith("N15") ||
    p.startsWith("N17")
  ) {
    return "Haringey";
  }
  if (p.startsWith("E8") || p.startsWith("E9") || p.startsWith("N1") || p.startsWith("N16")) {
    return "Hackney";
  }
  if (p.startsWith("NW1") || p.startsWith("NW3") || p.startsWith("WC1") || p.startsWith("WC2")) {
    return "Camden";
  }
  if (p.startsWith("E18") || p.startsWith("IG8") || p.startsWith("E11")) return "Redbridge";
  if (p.startsWith("EN1") || p.startsWith("EN2") || p.startsWith("EN3") || p.startsWith("EN4")) {
    return "Enfield";
  }
  if (p.startsWith("HA1") || p.startsWith("HA2") || p.startsWith("HA3") || p.startsWith("HA5")) {
    return "Harrow";
  }
  if (p.startsWith("SW12") || p.startsWith("SW11") || p.startsWith("SW4")) return "Wandsworth";
  if (p.startsWith("E6") || p.startsWith("E12") || p.startsWith("E13")) return "Newham";

  return "London and surrounding M25 areas";
}

export default function GetDrawingsQuotePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const canonicalUrl = "https://www.wedrawplans.co.uk/get-drawings-quote";

  const inferredBorough = useMemo(() => {
    return form.postcode.trim()
      ? getBoroughFromPostcode(form.postcode)
      : "London and surrounding M25 areas";
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
          `New architectural drawings quote request for ${form.projectType}. Postcode: ${cleanedPostcode}.`,
        raw: {
          source: "get-drawings-quote-page",
          page: "/get-drawings-quote",
          projectType: form.projectType,
          inferredBorough,
          service: form.service,
          originalMessage: cleanedMessage,
        },
      });

      setSuccess(
        "Thank you. Your request has been sent successfully. We will contact you shortly."
      );
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError(
        "Sorry, something went wrong while sending your request. Please try again or call us on 020 3654 8508."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WEDRAWPLANS",
    url: canonicalUrl,
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    areaServed: [
      "London",
      "Surrounding M25 areas",
      "Barnet",
      "Camden",
      "Hackney",
      "Haringey",
      "Enfield",
      "Southwark",
      "Harrow",
      "Redbridge",
      "Newham",
      "Wandsworth",
      "Hertfordshire",
      "Essex",
    ],
    description:
      "WEDRAWPLANS provides architectural drawings, planning drawings, building regulation drawings, loft conversion drawings, extension plans and measured building surveys across London and surrounding M25 areas.",
    serviceType: [
      "Architectural Drawings",
      "Planning Drawings",
      "Building Regulation Drawings",
      "Loft Conversion Drawings",
      "Extension Plans",
      "Measured Building Surveys",
      "Planning Application Drawings",
      "Commercial Drawings",
    ],
  };

  return (
    <>
      <Head>
        <title>Get a Quote for Architectural Drawings in London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Get a quote for architectural drawings in London and surrounding M25 areas with WEDRAWPLANS. We prepare planning drawings, extension plans, loft conversion drawings, measured surveys, planning application drawings and building regulation drawings."
        />
        <meta
          name="keywords"
          content="architectural drawings London, architectural drawings M25, planning drawings London, extension drawings quote, loft conversion drawings London, building regulation drawings London, measured building survey London, house extension plans London, planning application drawings London, commercial drawings London, WEDRAWPLANS"
        />
        <meta
          property="og:title"
          content="Get a Quote for Architectural Drawings in London | WEDRAWPLANS"
        />
        <meta
          property="og:description"
          content="Need architectural drawings for a house extension, loft conversion, commercial project or planning application? Send your details to WEDRAWPLANS for a fast quote."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
          <div className="container headerInner">
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
                minWidth: 0,
              }}
            >
              <img
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                style={{ height: 44, width: "auto", display: "block", flexShrink: 0 }}
              />
              <span style={{ whiteSpace: "nowrap" }}>WEDRAWPLANS</span>
            </Link>

            <div className="topCtas">
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
                  whiteSpace: "nowrap",
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
                  whiteSpace: "nowrap",
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
            <div className="container heroGrid">
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
                  Architectural drawings • Planning drawings • Extension plans • London and M25 coverage
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
                  Get a Quote for Architectural Drawings in London
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
                  Tell us your postcode and project type and send your details directly to
                  WEDRAWPLANS. We prepare architectural drawings, planning drawings, building
                  regulation drawings, loft conversion drawings, extension plans, commercial
                  drawings and measured building surveys for clients across London and surrounding
                  M25 areas.
                </p>

                <div className="pillRow" style={{ marginTop: 24 }}>
                  {[
                    "Initial survey within 48 hours",
                    "Fast quote review",
                    "Phone and email follow up",
                    "London and surrounding M25 areas",
                  ].map((item) => (
                    <div
                      key={item}
                      className="pill"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        color: "#ffffff",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="featureGridTwo" style={{ marginTop: 28 }}>
                  {[
                    "Rear house extension drawings",
                    "Loft conversion drawings",
                    "Side and wraparound extension plans",
                    "Measured building surveys",
                    "Internal structural alteration drawings",
                    "Commercial drawings and planning applications",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 18,
                        padding: "14px 16px",
                        fontWeight: 700,
                        lineHeight: 1.5,
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
                    Complete this short form and we will review your project details quickly.
                  </p>
                </div>

                <div className="pillRow" style={{ marginBottom: 18 }}>
                  {[
                    "Trusted by homeowners and developers",
                    "Fast response",
                    "Professional architectural drawings",
                  ].map((item) => (
                    <div
                      key={item}
                      className="pill"
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e5e7eb",
                        color: "#334155",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gap: 14 }}>
                    <div>
                      <label
                        htmlFor="name"
                        style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                      >
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

                    <div className="formTwoCol">
                      <div>
                        <label
                          htmlFor="email"
                          style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                        >
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
                        <label
                          htmlFor="phone"
                          style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                        >
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

                    <div className="formTwoCol">
                      <div>
                        <label
                          htmlFor="postcode"
                          style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                        >
                          Postcode
                        </label>
                        <input
                          id="postcode"
                          type="text"
                          value={form.postcode}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, postcode: e.target.value }))
                          }
                          placeholder="SE1 1JA"
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="projectType"
                          style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                        >
                          Project type
                        </label>
                        <select
                          id="projectType"
                          value={form.projectType}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, projectType: e.target.value }))
                          }
                          style={inputStyle}
                        >
                          <option value="">Select project type</option>
                          <option value="Rear extension">Rear extension</option>
                          <option value="Side extension">Side extension</option>
                          <option value="Wraparound extension">Wraparound extension</option>
                          <option value="Loft conversion">Loft conversion</option>
                          <option value="Garage conversion">Garage conversion</option>
                          <option value="Internal alterations">Internal alterations</option>
                          <option value="Building regulation drawings">
                            Building regulation drawings
                          </option>
                          <option value="Measured survey">Measured survey</option>
                          <option value="Commercial project">Commercial project</option>
                          <option value="Other domestic project">Other domestic project</option>
                        </select>
                      </div>
                    </div>

                    <div className="formTwoCol">
                      <div>
                        <label
                          htmlFor="service"
                          style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                        >
                          Service needed
                        </label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, service: e.target.value }))
                          }
                          style={inputStyle}
                        >
                          <option value="Planning Drawings">Planning Drawings</option>
                          <option value="Building Regulation Drawings">
                            Building Regulation Drawings
                          </option>
                          <option value="Measured Building Survey">
                            Measured Building Survey
                          </option>
                          <option value="Planning Application Support">
                            Planning Application Support
                          </option>
                          <option value="Commercial Drawings">Commercial Drawings</option>
                          <option value="Full Drawing Package">Full Drawing Package</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="borough"
                          style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                        >
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
                      <label
                        htmlFor="message"
                        style={{ display: "block", marginBottom: 6, fontWeight: 700 }}
                      >
                        Project details
                      </label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us what you need, for example rear extension, loft conversion, commercial fit out, planning application or building regulation drawings."
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
                      {submitting ? "Sending request..." : "Get My Quote"}
                    </button>

                    <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                      By submitting this form, you agree to be contacted by phone or email regarding
                      your drawings project.
                    </div>

                    <div style={{ fontSize: 14, color: "#334155", lineHeight: 1.6, fontWeight: 700 }}>
                      We typically respond to quote requests the same day.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="London" />

          <section className="sectionWrap">
            <div className="container">
              <div className="cardGridThree">
                {[
                  {
                    title: "Planning drawings",
                    text: "Clear proposed planning drawings for house extensions, loft conversions, commercial projects and home improvement works across London and surrounding M25 areas.",
                  },
                  {
                    title: "Measured surveys",
                    text: "Accurate existing drawings and measured building surveys to support planning applications and building regulation packages.",
                  },
                  {
                    title: "Building regulation drawings",
                    text: "Professional drawing packages for building control, structural coordination and the technical stage of your project.",
                  },
                ].map((item) => (
                  <div key={item.title} className="whiteCard">
                    <h2 style={{ margin: 0, fontSize: 22 }}>{item.title}</h2>
                    <p style={{ margin: "10px 0 0", color: "#475569", lineHeight: 1.7 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="sectionWrapSmallTop">
            <div className="container">
              <div className="bigWhiteCard">
                <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>Why Choose WEDRAWPLANS</h2>
                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#475569",
                    lineHeight: 1.8,
                    maxWidth: 980,
                  }}
                >
                  WEDRAWPLANS provides professional architectural drawings for house extensions,
                  loft conversions, internal alterations, commercial projects and planning
                  applications across London and surrounding M25 areas. Our team prepares clear and
                  accurate drawings for planning permission, building regulations and the next
                  stages of your project.
                </p>
                <p
                  style={{
                    margin: "12px 0 0",
                    color: "#475569",
                    lineHeight: 1.8,
                    maxWidth: 980,
                  }}
                >
                  Whether you need rear extension drawings, side extension plans, loft conversion
                  drawings, measured surveys, commercial drawings or building regulation drawings,
                  we can review your project and guide you on the right package.
                </p>

                <div className="cardGridFour" style={{ marginTop: 24 }}>
                  {[
                    "Architectural drawings for homeowners and commercial clients",
                    "Fast quote request in less than one minute",
                    "Professional follow up by phone or email",
                    "London wide and surrounding M25 coverage",
                  ].map((item) => (
                    <div key={item} className="softCard">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="sectionWrapSmallTop">
            <div className="container">
              <div className="bigWhiteCard">
                <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>
                  Architectural Drawing Services We Provide
                </h2>
                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#475569",
                    lineHeight: 1.8,
                    maxWidth: 980,
                  }}
                >
                  We prepare a wide range of architectural drawing services for clients across
                  London and surrounding M25 areas, including planning drawings, extension plans,
                  loft conversion drawings, garage conversion drawings, measured building surveys,
                  planning application drawings, commercial drawings and building regulation drawing
                  packages.
                </p>

                <div className="cardGridThree" style={{ marginTop: 24 }}>
                  {[
                    "House extension drawings",
                    "Rear extension drawings",
                    "Side extension drawings",
                    "Wraparound extension plans",
                    "Loft conversion drawings",
                    "Garage conversion drawings",
                    "Planning application drawings",
                    "Measured building surveys",
                    "Commercial drawings",
                  ].map((item) => (
                    <div key={item} className="softCard">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="sectionWrapSmallTop">
            <div className="container">
              <div className="bigWhiteCard">
                <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>
                  London Areas We Commonly Cover
                </h2>
                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#475569",
                    lineHeight: 1.8,
                    maxWidth: 980,
                  }}
                >
                  WEDRAWPLANS works across London and surrounding M25 areas, helping homeowners,
                  developers and commercial clients who need professional architectural drawings,
                  planning drawings and building regulation drawings. We commonly support projects
                  in Barnet, Camden, Hackney, Haringey, Enfield, Southwark, Harrow, Redbridge,
                  Newham and Wandsworth, as well as nearby surrounding areas around the M25.
                </p>

                <div className="cardGridFive" style={{ marginTop: 24 }}>
                  {[
                    "Barnet",
                    "Camden",
                    "Hackney",
                    "Haringey",
                    "Enfield",
                    "Southwark",
                    "Harrow",
                    "Redbridge",
                    "Newham",
                    "Wandsworth",
                  ].map((item) => (
                    <div key={item} className="softCard centerCard">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="sectionWrapSmallTop">
            <div className="container">
              <div className="bigWhiteCard">
                <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>
                  What Happens After You Submit the Form
                </h2>

                <div className="cardGridFour" style={{ marginTop: 24 }}>
                  {[
                    {
                      step: "1",
                      title: "We review your details",
                      text: "We check your postcode, project type and the architectural drawing service required.",
                    },
                    {
                      step: "2",
                      title: "We contact you",
                      text: "Our team follows up by phone or email to discuss your extension, loft conversion, commercial project or planning proposal.",
                    },
                    {
                      step: "3",
                      title: "We provide guidance",
                      text: "We explain the likely drawings package, scope and quotation route for your project.",
                    },
                    {
                      step: "4",
                      title: "We arrange the next step",
                      text: "If you proceed, we arrange the initial survey and move the project forward quickly.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="softCard">
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 999,
                          background: "#111827",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          marginBottom: 14,
                        }}
                      >
                        {item.step}
                      </div>
                      <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.25 }}>{item.title}</h3>
                      <p style={{ margin: "10px 0 0", color: "#475569", lineHeight: 1.7 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="sectionWrapSmallTop sectionBottomPad">
            <div className="container">
              <div className="bigWhiteCard">
                <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>
                  Frequently Asked Questions
                </h2>

                <div className="faqGrid" style={{ marginTop: 24 }}>
                  {[
                    {
                      q: "Do I need planning drawings for a house extension?",
                      a: "In many cases, yes. Professional planning drawings are usually needed for planning applications and are often also helpful when checking whether a project may fall under permitted development.",
                    },
                    {
                      q: "Do you provide building regulation drawings?",
                      a: "Yes. WEDRAWPLANS prepares building regulation drawings and technical drawing packages for projects moving beyond the planning stage.",
                    },
                    {
                      q: "Can you help with loft conversion drawings?",
                      a: "Yes. We prepare loft conversion drawings, house extension drawings, internal alteration drawings and other residential design packages across London and surrounding M25 areas.",
                    },
                    {
                      q: "Do you cover my area in London?",
                      a: "We cover many London boroughs and surrounding M25 areas. Submit your postcode above and we will review your location and project requirements.",
                    },
                    {
                      q: "How do I get a quote for architectural drawings?",
                      a: "Simply complete the quote form on this page with your postcode, project type and contact details. We will review your enquiry and contact you to discuss the next steps.",
                    },
                    {
                      q: "Do you provide measured building surveys?",
                      a: "Yes. We provide measured building surveys and existing drawings to support planning drawings, extension plans and building regulation packages.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="softCard">
                      <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.35 }}>{item.q}</h3>
                      <p style={{ margin: "12px 0 0", color: "#475569", lineHeight: 1.75 }}>
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="bottomCta"
                  style={{
                    marginTop: 28,
                    padding: 22,
                    borderRadius: 20,
                    background: "#111827",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>
                      Ready to request your drawings quote?
                    </h2>
                    <p
                      style={{
                        margin: "10px 0 0",
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.7,
                      }}
                    >
                      Send your details today and our team will review your project and get back to you.
                    </p>
                  </div>

                  <div className="bottomCtaButtons">
                    <a
                      href="tel:+442036548508"
                      style={{
                        textDecoration: "none",
                        background: "#ffffff",
                        color: "#111827",
                        padding: "13px 18px",
                        borderRadius: 999,
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Call now
                    </a>
                    <a
                      href="https://wa.me/442036548508"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        background: "#16a34a",
                        color: "#ffffff",
                        padding: "13px 18px",
                        borderRadius: 999,
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      WhatsApp us
                    </a>
                    <a
                      href="mailto:info@wedrawplans.com"
                      style={{
                        textDecoration: "none",
                        background: "transparent",
                        color: "#ffffff",
                        border: "1px solid rgba(255,255,255,0.35)",
                        padding: "13px 18px",
                        borderRadius: 999,
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Email us
                    </a>
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "#475569", paddingTop: 18 }}>
                  See also{" "}
                  <a href="/extension-plans" style={{ textDecoration: "underline" }}>
                    extension plans
                  </a>
                  ,{" "}
                  <a href="/loft-plans" style={{ textDecoration: "underline" }}>
                    loft plans
                  </a>{" "}
                  and{" "}
                  <a href="/new-build-plans" style={{ textDecoration: "underline" }}>
                    new build plans
                  </a>
                  .
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .headerInner {
          padding-top: 14px;
          padding-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .topCtas {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .heroGrid {
          padding-top: 64px;
          padding-bottom: 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: start;
        }

        .sectionWrap {
          padding-top: 42px;
          padding-bottom: 20px;
        }

        .sectionWrapSmallTop {
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .sectionBottomPad {
          padding-bottom: 60px;
        }

        .whiteCard {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          min-width: 0;
        }

        .bigWhiteCard {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 26px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .softCard {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 18px;
          font-weight: 700;
          line-height: 1.6;
          min-width: 0;
          overflow-wrap: break-word;
          word-break: normal;
        }

        .centerCard {
          text-align: center;
        }

        .pillRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .pill {
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .formTwoCol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .featureGridTwo {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          max-width: 760px;
        }

        .cardGridThree {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .cardGridFour {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .cardGridFive {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .faqGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .bottomCtaButtons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .heroGrid,
          .cardGridFour,
          .cardGridFive {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 900px) {
          .cardGridThree,
          .faqGrid,
          .featureGridTwo {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .headerInner {
            align-items: flex-start;
          }

          .topCtas {
            width: 100%;
          }

          .topCtas a {
            flex: 1 1 auto;
            text-align: center;
          }

          .heroGrid,
          .formTwoCol,
          .cardGridThree,
          .cardGridFour,
          .cardGridFive,
          .faqGrid,
          .featureGridTwo {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 36px !important;
          }

          .bigWhiteCard {
            padding: 22px;
          }

          .bottomCtaButtons {
            width: 100%;
          }

          .bottomCtaButtons a {
            flex: 1 1 100%;
            text-align: center;
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
