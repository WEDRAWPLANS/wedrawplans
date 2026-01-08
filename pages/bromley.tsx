import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/bromley",
      permanent: true,
    },
  };
};

export default function Redirect() {
  return null;
}
