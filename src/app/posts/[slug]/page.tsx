import { Post } from "@/components/CardPost";
import logger from "@/logger";

async function getPostBySlug(slug: string): Promise<Post | {}> {
  const response = await fetch(`http://localhost:3042/posts?slug=${slug}`)

  if (!response.ok) {
    logger.error(`${Date()}: Ops, alguma coisa ocorreu mal`);
    return {};
  }

  const data = await response.json();
  if (data.length === 0) {
    logger.error(`${Date()}: Ops, alguma coisa ocorreu mal`);
    return {};
  }
  logger.info(`${Date()}: Post: '${slug}' obtido com sucesso`);
  return data[0];
}

const Posts = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await getPostBySlug(params.slug) as Post;
  return (
    <h1>
      {post.title}
    </h1>
  );
}

export default Posts
