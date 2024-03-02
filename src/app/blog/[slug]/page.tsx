export default function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return `Blog ${slug}`;
}
