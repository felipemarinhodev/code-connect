"use client";

import { useRef } from "react";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { ArrowForward } from "../icons/ArrowForward";
import { Chat } from "../icons/Chat";
import { Modal, ModalHandle } from "../Modal";


export const ModalComment = () => {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <>
      <Modal
        ref={modalRef}
        header="Deixe seu comentário sobre o post:"
      >
        <form>
          <textarea
            required
            rows={8}
            cols={85}
            name="text"
            placeholder="Digite aqui..."
          />
        </form>
        <Button icon={<ArrowForward />}>Comentar</Button>
      </Modal>
      <IconButton
        onClick={() => modalRef.current?.showModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}
