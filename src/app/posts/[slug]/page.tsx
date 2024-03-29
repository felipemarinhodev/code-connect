import { CardPost, Post } from "@/components/CardPost";
import { remark } from "remark";
import html from "remark-html";

import db from "../../../../prisma/db";
import styles from "./page.module.css";
import logger from "@/logger";
import { redirect } from "next/navigation";

async function getPostBySlug(slug: string): Promise<Post | {}> {
  try {
    const post = await db.post.findFirst({
      where: {
        slug
      },
      include: {
        author: true
      }
    })

    if (!post) {
      throw new Error(`Post com o slug ${slug} não foi encontrado`)
    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post
  } catch (error) {
    logger.error('Falha ao obter o post com o slug: ', {
      slug, error
    })
  }
  redirect('/not-found')
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
