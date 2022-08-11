import React from "react";

import classes from "./styles.module.css";

function Button({ text, type }) {
  return (
    <button className={`${classes.button} ${classes[type]}`}>{text}</button>
  );
}

export default Button;
