import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/tower-hamlets",
      permanent: true,
    },
  };
};

const TowerHamletsRedirectPage = () => null;
export default TowerHamletsRedirectPage;
