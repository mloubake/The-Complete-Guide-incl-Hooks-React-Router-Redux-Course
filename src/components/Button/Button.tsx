import React from "react";

import classes from "./styles.module.css";

interface IProps {
  text: string;
  onClick: () => void;
  type: "button" | "reset" | "submit";
}

const Button: React.FC<IProps> = ({ text, onClick, type }) => {
  return (
    <button className={classes.button} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
