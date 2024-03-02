import { getPost } from "@/api";

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getPost({
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
