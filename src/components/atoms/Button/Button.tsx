import React, { FormEvent } from "react";

interface IProps {
  className?: string;
  id?: string;
  text?: string;
  toggleAddExpenseBox?: () => void;
  submitHandler?: (event?: FormEvent<HTMLFormElement>) => void;
  onClick: (event?: any) => void;
}

const Button: React.FC<IProps> = ({ className, id, text, onClick }) => {
  return (
    <button className={className} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
