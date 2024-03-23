import Image from "next/image"
import { Avatar } from "../Avatar"

import styles from "./cardpost.module.css";
import Link from "next/link";

type Author = {
  id: number,
  name: string;
  username: string;
  avatar: string;
}
export type Post = {
  id: number,
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author
}

type CardPostProps = {
  post: Post;
  highlight?: boolean;
}

export const CardPost = ({ post, highlight = false }: CardPostProps) => {
  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            className={styles.image}
            src={post.cover}
            alt={`Capa do post de titulo: ${post.title}`}
            fill
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
  )
}
