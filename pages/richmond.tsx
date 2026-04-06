import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/richmond",
      permanent: true,
    },
  };
};

const RichmondRedirectPage = () => null;
export default RichmondRedirectPage;
