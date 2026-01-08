import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/barnet",
      permanent: true,
    },
  };
};

const BarnetRedirectPage = () => null;
export default BarnetRedirectPage;
