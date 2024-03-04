import { CardPost, Post } from "@/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

import styles from "./page.module.css";

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
  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post
}

const Posts = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await getPostBySlug(params.slug) as Post;



  return (
    <div className={styles.container}>
      <CardPost post={post} highlight />
      <h2>Código:</h2>
      <div className={styles.code}>
        <div
          dangerouslySetInnerHTML={{ __html: post.markdown }}
        />
      </div>
    </div>
  );
}

export default Posts
