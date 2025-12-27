type Props = {
  slug: string;
  name: string;
  mode: "ranker" | "landing";
};

export default function BoroughLinks({ slug, name, mode }: Props) {
  if (mode === "ranker") {
    return (
      <div style={{ marginTop: 12 }}>
        <a
          href={`/areas/${slug}`}
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: "none",
            border: "1px solid #ddd",
          }}
        >
          Get a fast {name} quote (form)
        </a>
      </div>
    );
  }

  return (
    <p style={{ marginTop: 10 }}>
      Want full {name} planning guidance and examples{" "}
      <a href={`/${slug}`} style={{ textDecoration: "underline", fontWeight: 700 }}>
        Read the {name} details page
      </a>
    </p>
  );
}
