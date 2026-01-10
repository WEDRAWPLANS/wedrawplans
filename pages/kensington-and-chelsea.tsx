import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/kensington-and-chelsea",
      permanent: true,
    },
  };
};

export default function KensingtonAndChelseaRedirect() {
  return null;
}
