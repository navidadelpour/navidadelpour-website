import { compileMDX } from "next-mdx-remote/rsc";

import Logo from "@/components/Logo";
import Container from "@/components/Layout/Container";

const components = { Logo, Container };

export default async function compileMDXFromFileSystem({
  source,
}: {
  source: string;
}) {
  return await compileMDX<{ title: string }>({
    source,
    options: { parseFrontmatter: true },
    components,
  });
}
