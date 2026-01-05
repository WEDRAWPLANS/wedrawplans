import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/hertfordshire",
      permanent: true,
    },
  };
};

export default function hertfordshireRedirect() {
  return null;
}
