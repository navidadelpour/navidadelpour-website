import { notFound } from "next/navigation";

import Container from "@/components/Layout/Container";

export default function Gallary({
  params: { slug },
}: {
  params: { slug: string };
}) {
  if (slug && slug.length > 1) {
    notFound();
  }

  return <Container>Gallary {slug}</Container>;
}
