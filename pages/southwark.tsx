import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/southwark",
      permanent: true,
    },
  };
};

const SouthwarkRedirectPage = () => null;
export default SouthwarkRedirectPage;
