import React, { useRef } from "react";
import RoundedButton from "./RoundedButton";

export default function Modal({ children }) {
  const modalRef = useRef(null);

  function onCloseModal() {
    if (modalRef) modalRef.current.close();
  }

  return (
    <dialog
      ref={modalRef}
      open
      className="w-[524px] h-[524px] bg-white fixed top-1/2 -translate-y-1/2 margin-auto drop-shadow-4xl"
    >
      <div className="absolute top-4 right-4">
        <RoundedButton
          onClick={onCloseModal}
          sizeClasses="w-10 h-10"
          text="x"
        />
      </div>
      {children}
    </dialog>
  );
}
