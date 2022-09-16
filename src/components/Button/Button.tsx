import React, { ButtonHTMLAttributes } from "react";

import classes from "./styles.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  button_class: string;
}

const Button: React.FC<IProps> = ({ text, button_class, ...props }) => {
  return (
    <button {...props} className={`${classes.button} ${classes[button_class]}`}>
      {text}
    </button>
  );
};

export default Button;
