import { CardPost, Post } from "@/components/CardPost";
import logger from "@/logger";

import styles from "./page.module.css";

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    logger.error(`${Date()}: Ops, alguma coisa ocorreu mal`);
    return [];
  }
  logger.info(`${Date()}: Posts obtidos com sucesso`);
  return response.json();
}
export default async function Home() {
  const posts: Array<Post> = await getAllPosts();
  return (
    <main className={styles.grid}>
      {posts.map(post => (
        <CardPost
          key={post.id}
          post={post}
        />
      )
      )}
    </main>
  );
}
