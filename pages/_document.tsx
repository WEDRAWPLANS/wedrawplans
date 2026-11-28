import Document, { Html, Head, Main, NextScript } from "next/document";
import { businessSchema } from "../data/businessSchema";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/images/wedrawplans-logo.png" />
          <link rel="apple-touch-icon" href="/images/wedrawplans-logo.png" />
          <script
            id="wedrawplans-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
          />
          {/* Google Analytics 4 for WEDRAWPLANS */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QZ5L4HLGTQ"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QZ5L4HLGTQ');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
