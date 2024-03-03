import { CardPost, Post } from "@/components/CardPost";
import logger from "@/logger";

import styles from "./page.module.css";
import Link from "next/link";

async function getAllPosts(page: number) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error(`${Date()}: Ops, alguma coisa ocorreu mal`);
    return [];
  }
  logger.info(`${Date()}: Posts obtidos com sucesso`);
  return response.json();
}
export default async function Home() {
  const { data, prev, next } = await getAllPosts(1);
  const posts: Array<Post> = data;
  return (
    <main className={styles.grid}>
      {posts.map(post => (
        <CardPost
          key={post.id}
          post={post}
        />
      )
      )}
      {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Proxima página</Link>}
    </main>
  );
}
