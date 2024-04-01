'use client'

import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import styles from "./modal.module.css";

export type ModalProps = {
  children: ReactNode;
  header: string;
}

export type ModalHandle = {
  close: () => void;
  showModal: () => void;
}
export type Ref = HTMLDialogElement;

export const Modal = forwardRef<ModalHandle, ModalProps>(({ children, header }, ref) => {
  // const dialogRef = useRef<ModalHandler>(ref);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const close = () => {
    dialogRef.current?.close();
  }
  const showModal = () => {
    dialogRef.current?.showModal();
  }

  useImperativeHandle(ref, () => ({
    close,
    showModal
  }))
  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}>
      <button onClick={close}>X</button>
      <header className={styles.header}>{header}</header>
      {children}
    </dialog>
  );
})

Modal.displayName = 'Modal';
