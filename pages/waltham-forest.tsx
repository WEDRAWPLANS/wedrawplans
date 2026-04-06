import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/waltham-forest",
      permanent: true,
    },
  };
};

const WalthamForestRedirectPage = () => null;
export default WalthamForestRedirectPage;
