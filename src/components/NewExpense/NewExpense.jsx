import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./styles.css";

function NewExpense({ onAddNewExpense }) {
  function handleSaveNewExpenseData(inputedExpenseData) {
    const expenseData = { ...inputedExpenseData, id: Math.random().toString() };

    onAddNewExpense(expenseData);
  }

  return (
    <div className="new-expense__container">
      <ExpenseForm onSaveNewExpenseData={handleSaveNewExpenseData} />
    </div>
  );
}

export default NewExpense;
