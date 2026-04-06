import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/harrow",
      permanent: true,
    },
  };
};

const HarrowRedirectPage = () => null;
export default HarrowRedirectPage;
