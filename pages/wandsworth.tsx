import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/wandsworth",
      permanent: true,
    },
  };
};

const WandsworthRedirectPage = () => null;
export default WandsworthRedirectPage;
