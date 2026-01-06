import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/essex",
      permanent: true,
    },
  };
};

export default function EssexRedirectPage() {
  return null;
}
