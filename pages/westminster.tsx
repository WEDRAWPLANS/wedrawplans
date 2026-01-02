import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/westminster",
      permanent: true,
    },
  };
};

export default function WestminsterRedirect() {
  return null;
}
