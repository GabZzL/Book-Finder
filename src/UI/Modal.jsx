import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui";

export default function Modal({ open }) {
  const dispatch = useDispatch();
  const dialog = useRef(null);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  function onCloseModal() {
    dispatch(uiActions.setError(null));
  }

  return createPortal(
    <dialog ref={dialog} onClose={onCloseModal}>
      <h2>{open.title}</h2>
      <p>{open.message}</p>
      <button onClick={onCloseModal}>Ok</button>
    </dialog>,
    document.getElementById("modal")
  );
}
