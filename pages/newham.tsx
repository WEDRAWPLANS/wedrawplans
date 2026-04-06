import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/newham",
      permanent: true,
    },
  };
};

const NewhamRedirectPage = () => null;
export default NewhamRedirectPage;
