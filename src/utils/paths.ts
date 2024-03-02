export const pathToContentTypeSlug = (type: string, slug: string) =>
  `${pathToContentType(type)}${slug}.mdx`;

export const pathToContentType = (type: string) =>
  `${process.cwd()}/src/content/${type}/`;
