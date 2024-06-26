import Image from "next/image";
import { Avatar } from "../Avatar";

import { incrementThumbsUp, postComment } from "@/actions";
import Link from "next/link";
import styles from "./cardpost.module.css";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { Post } from "@prisma/client";
import { ModalComment } from "../ModalComment";

type CardPostProps = {
  post: Post;
  highlight?: boolean;
}

export const CardPost = ({ post, highlight = false }: CardPostProps) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitComment = postComment.bind(null, post)

  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            className={styles.image}
            src={post.cover}
            alt={`Capa do post de titulo: ${post.title}`}
            fill
            sizes="fill"
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{post.id}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment action={submitComment} />
            <p>
              {post.comments?.length}
            </p>
          </div>
        </div>
        <Avatar
          imageSrc={post.author?.avatar}
          name={post.author?.username}
        />
      </footer>
    </article>
  )
}
