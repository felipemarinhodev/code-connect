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
  post: Post
}

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            className={styles.image}
            src={post.cover}
            alt={`Capa do post de titulo: ${post.title}`}
            width={438}
            height={133}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
    </Link>
  )
}
