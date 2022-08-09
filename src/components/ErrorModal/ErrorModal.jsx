import React from "react";
import Button from "../Button/Button";

import classes from "./styles.module.css";

function ErrorModal({ error, onCloseModal }) {
  return (
    <div className={classes.backdrop} onClick={onCloseModal}>
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
    </div>
  );
}

export default ErrorModal;
