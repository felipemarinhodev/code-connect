import { Comment as CommentPrisma } from "@prisma/client";
import { Comment } from "../Comment";
import { Replies } from "../Replies";

import styles from "./commentlist.module.css";

export type CommentListProps = {
  comments: CommentPrisma[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment key={comment.id} comment={comment} />
          <Replies />
        </li>
      ))}
    </ul>
    </section>
  );
}
