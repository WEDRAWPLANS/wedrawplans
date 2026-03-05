import type { AppProps } from "next/app";
import "../styles/globals.css";
import FloatingLeadWidget from "../components/FloatingLeadWidget";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingLeadWidget />
    </>
  );
}
