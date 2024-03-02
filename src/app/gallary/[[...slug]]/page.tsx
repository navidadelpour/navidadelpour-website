import { notFound } from "next/navigation";

export default function Gallary({
  params: { slug },
}: {
  params: { slug: string };
}) {
  if (slug && slug.length > 1) {
    notFound();
  }

  return `Gallary ${slug}`;
}
