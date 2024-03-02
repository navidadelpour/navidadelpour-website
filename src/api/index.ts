import fs from "fs";
import { notFound } from "next/navigation";

import compileMDXFromFileSystem from "@/utils/compileMDXFromFileSystem";
import { pathToContentType, pathToContentTypeSlug } from "@/utils/paths";
import { ContentType } from "@/utils/types";

export async function getPosts({ type }: { type: ContentType }) {
  const path = pathToContentType(type);

  if (!fs.existsSync(path)) {
    notFound();
  }

  const slugs = (await fs.promises.readdir(path)).map((fileName) =>
    fileName.replace(".mdx", ""),
  );

  const blogPosts = slugs.map(async (slug) => {
    const { frontmatter } = await getPost({ type, slug });
    return { slug, ...frontmatter };
  });

  return await Promise.all(blogPosts);
}

export async function getPost({
  type,
  slug,
}: {
  type: ContentType;
  slug: string;
}) {
  const path = pathToContentTypeSlug(type, slug);

  if (!fs.existsSync(path)) {
    notFound();
  }

  const source = await fs.promises.readFile(path, "utf8");

  return await compileMDXFromFileSystem({
    source,
  });
}
