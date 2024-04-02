import { Comment as CommentPrisma } from "@prisma/client";
import { Comment } from "../Comment";

import styles from "./commentlist.module.css";
import { Replies } from "../Replies";

export type CommentListProps = {
  comments: CommentPrisma[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul className={styles.list}>
      {comments.map(comment => (
        <li key={comment.id} className={styles.item}>
          <Comment key={comment.id} comment={comment} />
          <Replies />
        </li>
      ))}
    </ul>
  );
}
