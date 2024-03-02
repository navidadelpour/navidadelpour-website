import compileMDXFromFileSystem from "@/utils/compileMDXFromFileSystem";

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await compileMDXFromFileSystem({
    type: "blog",
    slug,
  });

  return (
    <>
      <h1>{JSON.stringify({ frontmatter })}</h1>
      <br />
      {content}
    </>
  );
}
