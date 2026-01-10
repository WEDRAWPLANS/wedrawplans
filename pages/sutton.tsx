import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/sutton",
      permanent: true,
    },
  };
};

export default function SuttonRedirectPage() {
  return null;
}
