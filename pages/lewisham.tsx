import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/lewisham",
      permanent: true,
    },
  };
};

const LewishamRedirectPage = () => null;
export default LewishamRedirectPage;
