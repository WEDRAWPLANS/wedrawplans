import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/haringey",
      permanent: true,
    },
  };
};

export default function HaringeyRedirect() {
  return null;
}
