import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./styles.css";

interface IProps {
  onAddNewExpense: onAddNewExpense;
  toggleAddExpenseBox: () => void;
}

interface IExpense {
  title: string;
  quantity: number;
  price: number;
  date: Date;
}

type onAddNewExpense = (args: {}) => void;

const NewExpense: React.FC<IProps> = ({
  onAddNewExpense,
  toggleAddExpenseBox,
}) => {
  const handleSaveNewExpenseData = (inputedExpenseData: IExpense) => {
    onAddNewExpense({ id: Math.random().toString(), ...inputedExpenseData });
  };

  return (
    <div className="new-expense__container">
      <ExpenseForm
        onSaveNewExpenseData={handleSaveNewExpenseData}
        toggleAddExpenseBox={toggleAddExpenseBox}
      />
    </div>
  );
};

export default NewExpense;
