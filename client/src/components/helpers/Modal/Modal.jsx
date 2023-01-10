import React, { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./Modal.module.scss";
const cx = classNames.bind(style);

const Modal = ({ isOn, children }) => {
  const modalOverlayRef = useRef(null);
  const modalClassName = cx("modal-wrapper", {
    active: isOn,
  });
  useEffect(() => {
    const modalOverlayEl = modalOverlayRef.current;
    modalOverlayEl &&
      modalOverlayEl.addEventListener("click", (e) => {
        e.target.style = `display: none;`;
      });
  }, []);

  return (
    <div className={modalClassName}>
      <div className={cx("overlay")}>
        <section className={cx("modal-body")}>{children}</section>
      </div>
    </div>
  );
};

export default Modal;
