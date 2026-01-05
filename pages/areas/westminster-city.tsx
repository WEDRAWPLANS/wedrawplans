import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/city-of-london",
      permanent: true,
    },
  };
};

export default function WestminsterCityRedirectPage() {
  return null;
}
