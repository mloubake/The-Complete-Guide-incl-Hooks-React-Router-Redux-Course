import React from "react";

interface IProps {
  type: string;
  min?: string;
  max?: string;
  step?: string;
  value?: string | number | readonly string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ type, min, max, step, value, onChange }) => {
  return (
    <input
      type={type}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      step={step}
    />
  );
};

export default Input;
