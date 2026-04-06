import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/kingston",
      permanent: true,
    },
  };
};

const KingstonRedirectPage = () => null;
export default KingstonRedirectPage;
