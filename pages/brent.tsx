import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/brent",
      permanent: true,
    },
  };
};

const BrentRedirectPage = () => null;
export default BrentRedirectPage;
