import type { GetServerSideProps } from "next";

/**
 * This page exists only to redirect users and search engines
 * to the canonical borough page:
 * https://www.wedrawplans.co.uk/areas/islington
 *
 * This avoids duplicate content and concentrates SEO authority
 * on a single Islington landing page.
 */

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/islington",
      permanent: true, // 301 redirect
    },
  };
};

export default function IslingtonRedirectPage() {
  return null;
}
