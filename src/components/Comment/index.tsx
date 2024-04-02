import { Comment as CommentPrisma } from "@prisma/client";
import Image from "next/image";

import styles from "./comment.module.css";

export type CommentProps = {
  comment: CommentPrisma;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.item}>
      <Image
        width={32}
        height={32}
        alt={`Avatar do(a) ${comment.author.name}`}
        src={comment.author.avatar}
      />
      <strong>
        @{comment.author.name}
      </strong>
      <p>{comment.text}</p>
    </div>
  );
}
