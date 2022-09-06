import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../Backdrop/Backdrop";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

import { IError } from "../AddUser/AddUser";

interface IProps {
  error: IError;
  onCloseModal: () => void;
}

const ErrorModal: React.FC<IProps> = ({ error, onCloseModal }) => {
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
};

export default ErrorModal;
