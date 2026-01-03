import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/enfield",
      permanent: true,
    },
  };
};

export default function EnfieldRedirectPage() {
  return null;
}
