"use client";

import css from "./Modal.module.css";
import { ReactNode, useEffect } from "react";
import { IoClose } from "react-icons/io5";
interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div
      className={css.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={css.modal}>
        <IoClose className={css.closeIcon} onClick={onClose} />
        {children}
      </div>
    </div>
  );
}
