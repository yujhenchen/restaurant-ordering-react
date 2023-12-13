import React, { forwardRef } from "react";
import RoundedButton from "./RoundedButton";

// export default function Modal({ children, open, onCloseModal, modalRef }) {
//   /* const modalRef = useRef(null);

//   useRef normally for referencing 3rd libs which are not written in React,
//   if it's about managing modal state can just use useState and pass down to the child component

//   function onCloseModal() {
//     if (modalRef) modalRef.current.close();
//   }
//    */

//   return (
//     <dialog
//       open={open}
//       className="w-[524px] h-[524px] bg-white fixed top-1/2 -translate-y-1/2 margin-auto drop-shadow-4xl"
//     >
//       <div className="absolute top-4 right-4">
//         <RoundedButton
//           onClick={onCloseModal}
//           sizeClasses="w-10 h-10"
//           text="x"
//         />
//       </div>
//       {children}
//     </dialog>
//   );
// }

const Modal = forwardRef(function Modal(
  { children, open, onCloseModal },
  modalRef
) {
  return (
    <dialog
      ref={modalRef}
      open={open}
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
});

export default Modal;
