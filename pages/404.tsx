import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ProjectEnquiryForm from "../components/ProjectEnquiryForm";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found | WEDRAWPLANS</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <SiteHeader />

      <main className="wrap">
        <section className="hero">
          <div className="heroInner">
            <div className="heroLeft">
              <div className="badge">404</div>
              <h1 className="h1">This page does not exist</h1>
              <p className="p">
                The link may be outdated, but you can still get a fast quote for
                planning drawings.
              </p>

              <div className="ctaRow">
                <a className="btnPrimary" href={PHONE_LINK}>
                  Call {PHONE_DISPLAY}
                </a>
                <Link className="btnGhost" href="/">
                  Go to homepage
                </Link>
              </div>

              <ul className="bullets">
                <li>Planning drawings and Building Regulations packages</li>
                <li>Initial survey within 48 hours</li>
                <li>London and M25 coverage</li>
              </ul>
            </div>

            <div className="heroRight">
              <ProjectEnquiryForm borough="London" sourcePath="/404" />
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .wrap {
          width: 100%;
          padding: 10px 0 40px;
        }
        .hero {
          display: flex;
          justify-content: center;
          padding: 16px;
        }
        .heroInner {
          max-width: 1160px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 18px;
        }
        .heroLeft {
          background: #fff;
          border-radius: 22px;
          padding: 18px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 18px 50px rgba(0,0,0,0.08);
        }
        .badge {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(220,0,0,0.08);
          border: 1px solid rgba(220,0,0,0.25);
          font-weight: 900;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .h1 {
          margin: 0;
          font-size: 34px;
          font-weight: 900;
          color: #111;
        }
        .p {
          margin-top: 10px;
          font-size: 14px;
          color: rgba(0,0,0,0.72);
        }
        .ctaRow {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btnPrimary {
          padding: 12px 14px;
          border-radius: 14px;
          background: linear-gradient(90deg, #dc0000, #ff3b3b);
          color: #fff;
          font-weight: 900;
          text-decoration: none;
        }
        .btnGhost {
          padding: 11px 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.12);
          text-decoration: none;
          color: #111;
          font-weight: 900;
        }
        .bullets {
          margin-top: 14px;
          padding-left: 18px;
          font-size: 13px;
          color: rgba(0,0,0,0.72);
        }
        .heroRight {
          width: 100%;
        }
        @media (max-width: 980px) {
          .heroInner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
