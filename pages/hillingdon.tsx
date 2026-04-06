import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/hillingdon",
      permanent: true,
    },
  };
};

const HillingdonRedirectPage = () => null;
export default HillingdonRedirectPage;
