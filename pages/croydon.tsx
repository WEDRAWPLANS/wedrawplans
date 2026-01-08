import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/croydon",
      permanent: true,
    },
  };
};

export default function Redirect() {
  return null;
}
