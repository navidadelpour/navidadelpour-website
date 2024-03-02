import { getPost } from "@/api";
import compileMDXFromFileSystem from "@/utils/compileMDXFromFileSystem";

export default async function Project({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getPost({
    type: "projects",
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
