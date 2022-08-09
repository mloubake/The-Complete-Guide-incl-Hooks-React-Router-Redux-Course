import React from "react";
import ReactDOM from "react-dom";

import Button from "../Button/Button";

import classes from "./styles.module.css";

const Backdrop = ({ children, onCloseModal }) => {
  return (
    <div className={classes.backdrop} onClick={onCloseModal}>
      {children}
    </div>
  );
};

const ModalOverlay = ({ error, onCloseModal }) => {
  return (
    <div className={classes.modal}>
      <header>
        <label>{error.title}</label>
      </header>

      <main>
        <label>{error.message}</label>
      </main>

      <footer>
        <Button text={"Close"} onClick={onCloseModal} />
      </footer>
    </div>
  );
};

function ErrorModal({ error, onCloseModal }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={error} onCloseModal={onCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
