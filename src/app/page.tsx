import { CardPost, Post } from "@/components/CardPost";
import logger from "@/logger";

import styles from "./page.module.css";
import { LinkComponent } from "@/components/Link";
import db from "../../prisma/db";


async function getAllPosts(page: number) {
  try {
    const posts = await db.post.findMany();
    return { data: posts, prev: null, next: null }
  } catch (error) {
    logger.error('Falha ao obter posts', { error });
    return { data: [], prev: null, next: null }
  }
}
export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const currentPage = searchParams?.page ? Number(searchParams?.page) : 1;
  const { data, prev, next } = await getAllPosts(currentPage);
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
      <div className={styles.footer}>
        {prev && <LinkComponent href={`/?page=${prev}`}>Página anterior</LinkComponent>}
        {next && <LinkComponent href={`/?page=${next}`}>Proxima página</LinkComponent>}
      </div>
    </main>
  );
}
