import React, { useRef } from "react";
import RoundedButton from "./RoundedButton";

export default function Modal() {
  const modalRef = useRef(null);

  function onCloseModal() {
    if (modalRef) modalRef.current.close();
  }

  return (
    <dialog
      ref={modalRef}
      open
      className="w-[524px] h-[524px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2	-translate-y-1/2 drop-shadow-2xl"
    >
      <RoundedButton onClick={onCloseModal} sizeClasses="w-10 h-10" text="x" />
    </dialog>
  );
}
