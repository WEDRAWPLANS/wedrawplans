import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/areas/barking-and-dagenham",
      permanent: true,
    },
  };
};

export default function BarkingAndDagenhamRedirect() {
  return null;
}
