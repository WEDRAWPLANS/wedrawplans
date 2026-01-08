import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProjectEnquiryForm from "../../components/ProjectEnquiryForm";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Barnet";

const BOROUGH = "Barnet";
const SOURCE_PATH = "/areas/barnet";

export default function BarnetAreaPage() {
  const title = `Planning drawings in ${BOROUGH} | WEDRAWPLANS`;
  const description =
    "Planning drawings, building regulations drawings and advice in Barnet. Fast turnaround, clear fixed fees, and local experience for extensions, lofts, and conversions.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.com/areas/barnet",
    telephone: "+442036548508",
    email: "info@wedrawplans.com",
    areaServed: BOROUGH,
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High St",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "GB",
    },
    sameAs: ["https://twitter.com/WEDRAWPLANS"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you cover all of ${BOROUGH}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. We cover all areas across ${BOROUGH}. Share your postcode and a short description and we will confirm planning context and next steps.`,
        },
      },
      {
        "@type": "Question",
        name: "What do you need from me to start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A postcode, a short project description, and your preferred contact details. If you have sketches or photos, those help too.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We aim for an initial survey within 48 hours, subject to availability and access.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://www.wedrawplans.com${SOURCE_PATH}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <main>
        <header className="hero">
          <div className="heroInner">
            <div className="heroLeft">
              <div className="crumbs">
                <Link href="/areas" className="crumbLink">
                  Areas
                </Link>
                <span className="crumbSep">/</span>
                <span className="crumbCurrent">{BOROUGH}</span>
              </div>

              <h1 className="h1">Planning drawings in {BOROUGH}</h1>

              <p className="sub">
                Extensions, loft conversions, and conversions. Clear fees, fast turnaround, and
                planning ready drawings.
              </p>

              <div className="actions">
                <a className="btnPrimary" href={PHONE_LINK}>
                  Call {PHONE_DISPLAY}
                </a>
                <a className="btnGhost" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btnGhost" href={EMAIL_LINK}>
                  Email {EMAIL_DISPLAY}
                </a>
              </div>

              <div className="trust">
                <div className="trustItem">
                  <div className="trustNum">48h</div>
                  <div className="trustLbl">Initial survey within 48 hours</div>
                </div>
                <div className="trustItem">
                  <div className="trustNum">Fixed</div>
                  <div className="trustLbl">Clear fees and scope</div>
                </div>
                <div className="trustItem">
                  <div className="trustNum">Planning</div>
                  <div className="trustLbl">Ready drawings</div>
                </div>
              </div>
            </div>

            <div className="heroRight" aria-label="Barnet hero image">
              <div className="heroImage">
                <Image
                  src="/images/areas/barnet/hero.jpg"
                  alt="Planning drawings in Barnet"
                  width={1200}
                  height={800}
                  priority
                />
              </div>
              <div className="heroImageCaption">
                Local planning drawings support across {BOROUGH}.
              </div>
            </div>
          </div>
        </header>

        <section className="formWrap">
          <ProjectEnquiryForm
            borough={BOROUGH}
            sourcePath={SOURCE_PATH}
            defaultProjectType="House extension"
            logoSrc="/images/logo.png"
            logoAlt="WEDRAWPLANS"
            accentText={`Get a fast quote for planning drawings in ${BOROUGH}`}
          />
        </section>

        <section className="linksWrap">
          <ServiceInternalLinks />
        </section>

        <section className="gridWrap" aria-label="Barnet projects and services">
          <div className="grid">
            <div className="card">
              <div className="cardImg">
                <Image
                  src="/images/areas/barnet/project-1.jpg"
                  alt="Rear extension drawings in Barnet"
                  width={900}
                  height={600}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">House extensions</div>
                <div className="cardText">
                  Rear, side return, wraparound and double storey. We guide you on the best route
                  and prepare the drawings needed for submission.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <Image
                  src="/images/areas/barnet/project-2.jpg"
                  alt="Loft conversion drawings in Barnet"
                  width={900}
                  height={600}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">Loft conversions</div>
                <div className="cardText">
                  Dormers, mansards, and hip to gable. We prepare planning drawings and can deliver
                  building regulations drawings when needed.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <Image
                  src="/images/areas/barnet/project-3.jpg"
                  alt="Planning and building regs in Barnet"
                  width={900}
                  height={600}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">Planning and building regulations</div>
                <div className="cardText">
                  Planning submission drawings, and technical building regulations packs for tender
                  and construction.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <Image
                  src="/images/areas/barnet/project-4.jpg"
                  alt="Conversions and change of use in Barnet"
                  width={900}
                  height={600}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">Conversions and change of use</div>
                <div className="cardText">
                  Flats, layouts, and advice on planning strategy. Share details and we will map out
                  the safest route.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" aria-label="Barnet call to action">
          <div className="ctaInner">
            <div className="ctaLeft">
              <div className="ctaTitle">Ready to get a quote for {BOROUGH}?</div>
              <div className="ctaText">
                Send your postcode and a short description. We will respond with scope, fee, and next
                steps.
              </div>
            </div>
            <div className="ctaRight">
              <a className="btnPrimary" href={PHONE_LINK}>
                Call {PHONE_DISPLAY}
              </a>
              <a className="btnGhost" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btnGhost" href={EMAIL_LINK}>
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{styles}</style>
    </>
  );
}

const styles = `
.hero{
  padding:28px 0 10px 0;
  background: radial-gradient(900px 260px at 20% 0%, rgba(220,0,0,0.10) 0%, rgba(255,255,255,0) 70%),
              radial-gradient(900px 260px at 85% 0%, rgba(220,0,0,0.08) 0%, rgba(255,255,255,0) 70%),
              #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.heroInner{
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 16px;
  align-items: start;
}
.crumbs{
  display:flex;
  gap:10px;
  align-items:center;
  font-size:13px;
  color: rgba(0,0,0,0.66);
  margin-bottom: 10px;
}
.crumbLink{
  text-decoration: none;
  color: rgba(0,0,0,0.76);
  font-weight: 800;
}
.crumbSep{
  opacity: 0.5;
}
.crumbCurrent{
  font-weight: 900;
  color: rgba(0,0,0,0.78);
}
.h1{
  margin:0;
  font-size: 36px;
  line-height: 1.08;
  letter-spacing: -0.4px;
  color: #111;
}
.sub{
  margin: 10px 0 0 0;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(0,0,0,0.72);
}
.actions{
  margin-top: 14px;
  display:flex;
  gap:10px;
  flex-wrap: wrap;
}
.btnPrimary{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 12px 14px;
  border-radius: 14px;
  font-weight: 900;
  text-decoration:none;
  color: #fff;
  background: linear-gradient(90deg, #dc0000 0%, #ff3b3b 70%, #ff6d6d 100%);
  box-shadow: 0 14px 30px rgba(220,0,0,0.18);
  border: 0;
}
.btnGhost{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 12px 14px;
  border-radius: 14px;
  font-weight: 900;
  text-decoration:none;
  color: #111;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.12);
}
.trust{
  margin-top: 14px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.trustItem{
  background:#fff;
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 16px;
  padding: 10px;
}
.trustNum{
  font-weight: 900;
  font-size: 16px;
  color:#111;
}
.trustLbl{
  margin-top: 2px;
  font-size: 12px;
  color: rgba(0,0,0,0.70);
}
.heroRight{
  border: 1px solid rgba(0,0,0,0.07);
  background: #fff;
  border-radius: 18px;
  padding: 10px;
}
.heroImage{
  overflow:hidden;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.06);
}
.heroImageCaption{
  margin-top: 8px;
  font-size: 12px;
  color: rgba(0,0,0,0.66);
  font-weight: 800;
}
.formWrap{
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 16px 0 16px;
}
.linksWrap{
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 16px 0 16px;
}
.gridWrap{
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 16px 8px 16px;
}
.grid{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.card{
  border-radius: 18px;
  overflow:hidden;
  border: 1px solid rgba(0,0,0,0.07);
  background: #fff;
  box-shadow: 0 14px 40px rgba(0,0,0,0.08);
}
.cardImg{
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.cardBody{
  padding: 12px;
}
.cardTitle{
  font-weight: 900;
  color: #111;
  font-size: 15px;
}
.cardText{
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(0,0,0,0.72);
}
.cta{
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 16px 28px 16px;
}
.ctaInner{
  border-radius: 22px;
  border: 1px solid rgba(0,0,0,0.07);
  background: radial-gradient(900px 240px at 15% 0%, rgba(220,0,0,0.10) 0%, rgba(255,255,255,0) 65%),
              radial-gradient(900px 240px at 85% 0%, rgba(220,0,0,0.08) 0%, rgba(255,255,255,0) 70%),
              #ffffff;
  padding: 16px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.ctaTitle{
  font-weight: 900;
  font-size: 18px;
  color: #111;
}
.ctaText{
  margin-top: 6px;
  font-size: 13px;
  color: rgba(0,0,0,0.72);
  line-height: 1.5;
}
.ctaRight{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}

@media (max-width: 920px){
  .heroInner{ grid-template-columns: 1fr; }
  .trust{ grid-template-columns: 1fr; }
  .grid{ grid-template-columns: 1fr; }
}
`;
