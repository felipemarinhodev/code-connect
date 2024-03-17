import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

import { LinkComponent } from "@/components/Link";
import { Prisma } from "@prisma/client";
import db from "../../prisma/db";
import styles from "./page.module.css";


async function getAllPosts(page: number, searchTerm: string) {
  try {

    const where = !!searchTerm ? Prisma.validator<Prisma.PostWhereInput>()({
      title: { contains: searchTerm, mode: 'insensitive' },
    }) : {};

    const perPage = 4;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;
    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        author: true
      }
    });
    return { data: posts, prev, next }
  } catch (error) {
    logger.error('Falha ao obter posts', { error });
    return { data: [], prev: null, next: null }
  }
}
export default async function Home({
  searchParams
}: {
    searchParams: { [key: string]: string }
}) {
  const currentPage = parseInt(searchParams?.page) || 1
  const searchTerm = searchParams?.q;
  const { data, prev, next } = await getAllPosts(currentPage, searchTerm);
  const posts = data;
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
