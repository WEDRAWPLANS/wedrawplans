import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/hounslow",
      permanent: true,
    },
  };
};

const HounslowRedirectPage = () => null;
export default HounslowRedirectPage;
