"use client";

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Chat } from "../icons/Chat";
import { Modal, ModalHandle } from "../Modal";

export const ModalComment = () => {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <>
      <Modal ref={modalRef}>
        <h1>olá mundo!</h1>
      </Modal>
      <IconButton
        onClick={() => modalRef.current?.showModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}
