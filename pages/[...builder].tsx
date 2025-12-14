import { BuilderComponent, builder } from "@builder.io/react";
import "@builder.io/react/dist/lib.css";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderPage({ content }: any) {
  if (!content) {
    return null;
  }

  return <BuilderComponent model="page" content={content} />;
}

export async function getStaticProps({ params }: any) {
  const urlPath = "/" + (params?.builder?.join("/") || "");

  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return {
    props: {
      content: content || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
