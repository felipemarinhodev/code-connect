'use client'

import { useEffect, useState } from 'react'
import styles from './replies.module.css'
import { Comment as CommentPrisma } from '@prisma/client'
import { Comment } from '../Comment'
import { ModalReply } from '../ModalReply'

export type RepliesProps = {
  comment: CommentPrisma;
}

export const Replies = ({ comment }: RepliesProps) => {

  const [showReplies, setShowReplies] = useState(false);

  const [replies, setReplies] = useState<CommentPrisma[]>([]);

  console.log(JSON.stringify(comment, null, 2));


  async function fetchData() {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  }

  useEffect(() => {
    if (showReplies) {
      fetchData();
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? 'Ocultar' : 'Ver'} respostas
        </button>
        {showReplies && (
          <ul>
            {replies.map(reply => (
              <li key={reply.id}>
                <Comment comment={reply} />
                <ModalReply comment={reply} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
