import React from "react";

import Button from "../Button/Button";

import classes from "../ErrorModal/styles.module.css";

interface IProps {
  error: { title: string; message: string };
  onCloseModal: () => void;
}

const ModalOverlay: React.FC<IProps> = ({ error, onCloseModal }) => {
  return (
    <div className={classes.modal}>
      <header>
        <label>{error.title}</label>
      </header>

      <main>
        <label>{error.message}</label>
      </main>

      <footer>
        <Button text={"Close"} onClick={onCloseModal} type="button" />
      </footer>
    </div>
  );
};

export default ModalOverlay;
