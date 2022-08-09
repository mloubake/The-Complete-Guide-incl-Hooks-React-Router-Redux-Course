import React from "react";

import classes from "./styles.module.css";

function Button({ text, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
