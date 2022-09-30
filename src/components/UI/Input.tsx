import React, { LegacyRef } from "react";

import classes from "./Input.module.css";

interface IProps {
  label: string;
  ref: any;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
}

const Input: React.FC<IProps> = React.forwardRef(({ label, ...props }, ref) => {
  const inputRef = ref as LegacyRef<HTMLInputElement> | undefined;

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{label}</label>
      <input ref={inputRef} {...props.input} />
    </div>
  );
});

export default Input;
