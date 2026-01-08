import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/brent",
      permanent: true,
    },
  };
};

export default function Redirect() {
  return null;
}
