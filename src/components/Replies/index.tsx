'use client'

import { useState } from 'react'
import styles from './replies.module.css'
import { Comment as CommentPrisma } from '@prisma/client'
import { Comment } from '../Comment'
import { ModalReply } from '../ModalReply'

export type RepliesProps = {
  comment: CommentPrisma;
}

export const Replies = ({ comment }: RepliesProps) => {

  const [showReplies, setShowReplies] = useState(false);

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
            {comment.children.map(reply => (
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
