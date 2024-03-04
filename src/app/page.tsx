import { CardPost, Post } from "@/components/CardPost";
import logger from "@/logger";

import styles from "./page.module.css";
import { LinkComponent } from "@/components/Link";


async function getAllPosts(page: number) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=4`);
  if (!response.ok) {
    logger.error(`${Date()}: Ops, alguma coisa ocorreu mal`);
    return [];
  }
  logger.info(`${Date()}: Posts obtidos com sucesso`);
  return response.json();
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
