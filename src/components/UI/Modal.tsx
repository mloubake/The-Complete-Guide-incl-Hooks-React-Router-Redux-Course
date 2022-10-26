import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}

interface IBackdrop {
  onClose: () => void;
}

interface IModalOverlay {
  children: React.ReactNode;
}

const Backdrop: React.FC<IBackdrop> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<IModalOverlay> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<IProps> = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
