import React from "react";

import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

interface IProps {
  labelText: string;
  inputType: string;
  inputValue: string | number;
  min?: string;
  max?: string;
  step?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExpenseFormControl: React.FC<IProps> = ({
  labelText,
  inputType,
  inputValue,
  onChange,
  min,
  max,
  step,
}) => {
  return (
    <div className="expense-form__control">
      <Label text={labelText} />
      <Input
        type={inputType}
        min={min}
        max={max}
        step={step}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default ExpenseFormControl;
