import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/hammersmith-and-fulham",
      permanent: true,
    },
  };
};

export default function HammersmithFulhamRedirectPage() {
  return null;
}
