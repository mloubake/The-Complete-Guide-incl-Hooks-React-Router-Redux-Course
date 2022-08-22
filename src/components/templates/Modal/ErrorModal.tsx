import React from "react";
import { createPortal } from "react-dom";

import Backdrop from "../../atoms/Backdrop/Backdrop";

import ModalContent from "../../molecules/ModalContent/ModalContent";

import "./styles.css";

interface IProps {
  error: { title: string; message: string };
  onCloseModal: () => void;
}

const ErrorModal: React.FC<IProps> = ({ error, onCloseModal }) => {
  return createPortal(
    <Backdrop backdropClassName="backdrop" onHandleToggleModal={onCloseModal}>
      <ModalContent
        ModalContentStyle={"ModalContentStyle"}
        onHandleToggleModal={onCloseModal}
        error={error}
      />
    </Backdrop>,
    document.getElementById("backdrop-root") as Element | DocumentFragment
  );
};

export default ErrorModal;
