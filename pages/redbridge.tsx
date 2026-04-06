import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/redbridge",
      permanent: true,
    },
  };
};

const RedbridgeRedirectPage = () => null;
export default RedbridgeRedirectPage;
