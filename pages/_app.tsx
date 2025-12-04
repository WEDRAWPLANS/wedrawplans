import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics Lead Tracking */}
      <Script id="lead-tracking" strategy="afterInteractive">
        {`
          // Track phone click
          function trackPhoneClick() {
            gtag('event', 'phone_click', {
              event_category: 'lead',
              event_label: 'Phone Number Clicked'
            });
          }

          // Track email click
          function trackEmailClick() {
            gtag('event', 'email_click', {
              event_category: 'lead',
              event_label: 'Email Clicked'
            });
          }

          // Track WhatsApp click
          function trackWhatsAppClick() {
            gtag('event', 'whatsapp_click', {
              event_category: 'lead',
              event_label: 'WhatsApp Clicked'
            });
          }

          // Attach listeners after page loads
          document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('a[href^="tel:"]').forEach(el => {
              el.addEventListener('click', trackPhoneClick);
            });

            document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
              el.addEventListener('click', trackEmailClick);
            });

            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(el => {
              el.addEventListener('click', trackWhatsAppClick);
            });
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}
