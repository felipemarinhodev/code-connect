"use client";

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Chat } from "../icons/Chat";
import { Modal, ModalHandle } from "../Modal";
import { Subheading } from "../Subheading";
import { SubmitButton } from "../SubmitButton";
import styles from "./modalcomment.module.css";
import { Textarea } from "../Textarea";

export type ModalCommentProps = {
  action: () => void;
}

export const ModalComment = ({ action }: ModalCommentProps) => {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <>
      <Modal
        ref={modalRef}
      >
        <form action={action} onSubmit={() => modalRef.current?.close()}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton
        onClick={() => modalRef.current?.showModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}
