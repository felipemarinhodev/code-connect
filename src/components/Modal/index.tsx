'use client'

import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./modal.module.css";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { ArrowForward } from "../icons/ArrowForward";

export const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);
  const closeModal = () => {
    dialogRef.current.close();
  }
  const openModal = () => {
    dialogRef.current.showModal();
  }

  useImperativeHandle(ref, () => {
    return {
      closeModal,
      openModal
    }
  })
  return (
    <dialog
      ref={dialogRef}>
      className={styles.dialog}
      <header>
        <button>X</button>
        <h3>Deixe seu comentário sobre o post:</h3>
        <TextField placeholder="Digite seu comentário" />
        <Button
          icon={<ArrowForward />}
        >
          Comentar</Button>
      </header>
      {children}
    </dialog>
  );
})



