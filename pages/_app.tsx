import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Lead tracking for phone, email and WhatsApp */}
      <Script id="lead-tracking" strategy="afterInteractive">
        {`
          // Track phone click
          function trackPhoneClick() {
            if (typeof gtag === 'function') {
              gtag('event', 'phone_click', {
                event_category: 'lead',
                event_label: 'Phone number clicked'
              });
            }
          }

          // Track email click
          function trackEmailClick() {
            if (typeof gtag === 'function') {
              gtag('event', 'email_click', {
                event_category: 'lead',
                event_label: 'Email clicked'
              });
            }
          }

          // Track WhatsApp click
          function trackWhatsAppClick() {
            if (typeof gtag === 'function') {
              gtag('event', 'whatsapp_click', {
                event_category: 'lead',
                event_label: 'WhatsApp clicked'
              });
            }
          }

          // Attach listeners after page loads
          document.addEventListener('DOMContentLoaded', () => {
            // All phone links
            document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
              el.addEventListener('click', trackPhoneClick);
            });

            // All email links
            document.querySelectorAll('a[href^="mailto:"]').forEach((el) => {
              el.addEventListener('click', trackEmailClick);
            });

            // All WhatsApp links
            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((el) => {
              el.addEventListener('click', trackWhatsAppClick);
            });
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}
