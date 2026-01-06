import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/merton",
      permanent: true,
    },
  };
};

export default function MertonRedirectPage() {
  return null;
}
