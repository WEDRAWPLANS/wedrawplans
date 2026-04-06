import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/islington",
      permanent: true,
    },
  };
};

const IslingtonRedirectPage = () => null;
export default IslingtonRedirectPage;
