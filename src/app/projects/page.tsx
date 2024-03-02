import { setPathParameters } from "@ftlars/ts-path-params";

import { getPosts } from "@/api";
import { project } from "@/consts/routes";

import { Link } from "@nextui-org/react";

export default async function Projects() {
  const posts = await getPosts({ type: "projects" });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            color="foreground"
            href={setPathParameters(project, { slug: post.slug })}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
