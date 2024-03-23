import Image from "next/image"
import { Avatar } from "../Avatar"

import styles from "./cardpost.module.css";
import Link from "next/link";
import { IconButton } from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
import { incrementThumbsUp } from "@/actions";

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
  author: Author;
  likes: number;
}

type CardPostProps = {
  post: Post;
  highlight?: boolean;
}

export const CardPost = ({ post, highlight = false }: CardPostProps) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, { id: post.id });

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
        <div>
          <form action={submitThumbsUp}>
            <IconButton>
              <ThumbsUp />
            </IconButton>
          </form>
          <p>{post.likes}</p>
        </div>
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
  )
}
