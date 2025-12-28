import { BuilderComponent, builder } from "@builder.io/react";
import type { GetStaticPaths, GetStaticProps } from "next";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";
if (apiKey) builder.init(apiKey);

type Props = {
  content: any | null;
};

export default function BuilderPage({ content }: Props) {
  if (!content) return null;
  return <BuilderComponent model="page" content={content} />;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slugParts = (params?.builder as string[]) || [];
  const urlPath = "/areas/" + slugParts.join("/");

  if (!apiKey) {
    return { notFound: true, revalidate: 60 };
  }

  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
    })
    .toPromise();

  if (!content) {
    return { notFound: true, revalidate: 60 };
  }

  return {
    props: { content },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
