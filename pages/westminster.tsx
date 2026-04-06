import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/westminster",
      permanent: true,
    },
  };
};

const WestminsterRedirectPage = () => null;
export default WestminsterRedirectPage;
