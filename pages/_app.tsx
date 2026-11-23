import { commercialOverview, commercialServices } from "../data/commercialPages";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import FloatingLeadWidget from "../components/FloatingLeadWidget";
import SmartPlanningAssistant from "../components/SmartPlanningAssistant";
import { BOROUGH_QUOTE_ANCHOR, hasLondonBoroughQuote, LONDON_AREAS } from "../data/londonAreas";

const siteUrl = "https://www.wedrawplans.co.uk";

const servicePageNames = new Map<string, string>([
  ["/extension-plans", "House Extension Plans"],
  ["/loft-conversion-plans", "Loft Conversion Plans"],
  ["/new-build-plans", "New Build Plans"],
  ["/building-regulation-drawings", "Building Regulation Drawings"],
  ["/get-drawings-quote", "Get a Quote for Architectural Drawings"],
  [commercialOverview.path, commercialOverview.name],
  ...commercialServices.map(({ name, path }) => [path, name] as const),
]);

function getBreadcrumbSchema(pathname: string) {
  const borough = LONDON_AREAS.find(([, path]) => path === pathname);
  const pageName = borough
    ? `Architectural Drawings in ${borough[0]}`
    : servicePageNames.get(pathname);
  if (!pageName) return null;

  const trail = [{ name: "Home", item: `${siteUrl}/` }];
  if (borough) {
    trail.push({ name: "Areas We Cover", item: `${siteUrl}/areas` });
  } else if (pathname.startsWith(`${commercialOverview.path}/`)) {
    trail.push({ name: commercialOverview.name, item: `${siteUrl}${commercialOverview.path}` });
  }
  trail.push({ name: pageName, item: `${siteUrl}${pathname}` });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...crumb,
    })),
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const breadcrumbSchema = getBreadcrumbSchema(router.pathname);
  const isBoroughPage = /^\/areas\/[^/]+\/?$/.test(router.pathname);
  const hasLocalQuote = hasLondonBoroughQuote(router.pathname);

  useEffect(() => {
    function trackWhatsAppClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;

      const destination = new URL(link.getAttribute("href") || "", window.location.href);
      if (destination.hostname !== "wa.me" || destination.pathname !== "/442036548508") return;

      const analyticsWindow = window as typeof window & {
        gtag?: (...args: unknown[]) => void;
      };
      // Leave consent handling to the existing Google tag; never pass prefilled
      // WhatsApp message content (which might contain personal information).
      analyticsWindow.gtag?.("event", "whatsapp_click", {
        event_category: "lead",
        event_label: "whatsapp_click",
      });
    }

    document.addEventListener("click", trackWhatsAppClick, true);
    return () => document.removeEventListener("click", trackWhatsAppClick, true);
  }, []);

  return (
    <>
      {breadcrumbSchema ? (
        <Head>
          <script
            key="page-breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </Head>
      ) : null}
      {isBoroughPage ? (
        <nav aria-label="Borough page quick navigation" className="relative z-[70] w-full min-w-0 border-b border-[#dae7e2] bg-[#f2f8f5] px-3 py-2.5 text-[#245963] sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-semibold sm:gap-x-6 sm:text-[13px]">
            <Link href="/" className="underline-offset-4 hover:underline focus-visible:underline">← Homepage</Link>
            <Link href="/areas" className="underline-offset-4 hover:underline focus-visible:underline">All London areas</Link>
            <Link href="/case-studies" className="underline-offset-4 hover:underline focus-visible:underline">Approved projects</Link>
            <Link href={hasLocalQuote ? BOROUGH_QUOTE_ANCHOR : "/get-drawings-quote"} className="inline-flex min-h-[44px] items-center rounded-full bg-[#245963] px-4 py-2 text-white hover:bg-[#173e46]">Get a fixed-fee quote →</Link>
          </div>
        </nav>
      ) : null}
      <Component {...pageProps} />
      <FloatingLeadWidget />
      {hasLocalQuote ? null : <SmartPlanningAssistant compactMobile={isBoroughPage} />}
    </>
  );
}
