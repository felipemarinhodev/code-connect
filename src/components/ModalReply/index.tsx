"use client";

import { postReply } from "@/actions";
import { Comment as CommentPrisma } from "@prisma/client";
import { useRef } from "react";
import { Comment } from "../Comment";
import { Modal, ModalHandle } from "../Modal";
import { SubmitButton } from "../SubmitButton";
import { Textarea } from "../Textarea";
import styles from "./modalreply.module.css";

export type ModalCommentProps = {
  comment: CommentPrisma
}

export const ModalReply = ({ comment }: ModalCommentProps) => {
  const modalRef = useRef<ModalHandle>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  }

  const action = postReply.bind(null, comment)
  return (
    <>
      <Modal
        ref={modalRef}
      >
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider} />
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button
        className={styles.btn}
        onClick={openModal}
      >
        Responder
      </button>
    </>
  )
}
