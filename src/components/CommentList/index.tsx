import { Comment as CommentPrisma } from "@prisma/client";
import { Comment } from "../Comment";

export type CommentListProps = {
  comments: CommentPrisma[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul>
      {comments.map(comment => <li><Comment key={comment.id} comment={comment} /></li>)}
    </ul>
  );
}
