export default function Project({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return `Project ${slug}`;
}
