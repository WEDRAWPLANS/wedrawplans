import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/lambeth",
      permanent: true,
    },
  };
};

const LambethRedirectPage = () => null;
export default LambethRedirectPage;
