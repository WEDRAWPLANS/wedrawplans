import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/globals.css";
import FloatingLeadWidget from "../components/FloatingLeadWidget";
import SmartPlanningAssistant from "../components/SmartPlanningAssistant";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isBoroughPage = /^\/areas\/[^/]+\/?$/.test(router.asPath.split(/[?#]/)[0]);

  return (
    <>
      {isBoroughPage ? (
        <nav aria-label="Borough page quick navigation" className="relative z-[70] border-b border-[#dae7e2] bg-[#f2f8f5] px-3 py-2.5 text-[#245963] sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-semibold sm:gap-x-6 sm:text-[13px]">
            <Link href="/" className="underline-offset-4 hover:underline focus-visible:underline">← Homepage</Link>
            <Link href="/areas" className="underline-offset-4 hover:underline focus-visible:underline">All London areas</Link>
            <Link href="/case-studies" className="underline-offset-4 hover:underline focus-visible:underline">Approved projects</Link>
            <Link href="/get-drawings-quote" className="rounded-full bg-[#245963] px-3 py-1.5 text-white hover:bg-[#173e46]">Get a fixed-fee quote →</Link>
          </div>
        </nav>
      ) : null}
      <Component {...pageProps} />
      <FloatingLeadWidget />
      <SmartPlanningAssistant compactMobile={router.pathname === "/areas/ealing"} />
    </>
  );
}
