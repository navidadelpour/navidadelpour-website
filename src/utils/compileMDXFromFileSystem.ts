import fs from "fs";
import { notFound } from "next/navigation";

import { compileMDX } from "next-mdx-remote/rsc";
import Logo from "@/components/Logo";
import Container from "@/components/Layout/Container";

const components = { Logo, Container };

export default async function compileMDXFromFileSystem({
  slug,
  type,
}: {
  slug: string;
  type: "blog" | "projects";
}) {
  const pathToFile = process.cwd() + `/src/content/${type}/${slug}.mdx`;

  if (!fs.existsSync(pathToFile)) {
    notFound();
  }

  const source = await fs.promises.readFile(pathToFile, "utf8");

  return await compileMDX<{ title: string }>({
    source,
    options: { parseFrontmatter: true },
    components,
  });
}
