import { setPathParameters } from "@ftlars/ts-path-params";

import { getPosts } from "@/api";
import { blogPost } from "@/consts/routes";
import Container from "@/components/Layout/Container";

import { Link } from "@nextui-org/react";

export default async function Blog() {
  const posts = await getPosts({ type: "blog" });

  return (
    <Container>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              color="foreground"
              href={setPathParameters(blogPost, { slug: post.slug })}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
