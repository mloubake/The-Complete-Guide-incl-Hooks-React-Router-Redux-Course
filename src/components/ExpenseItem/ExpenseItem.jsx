import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem({ date, title, quantity, amount }) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={date} />
        <h2>{title}</h2>
        <div className="expense-item__amount">Amount: ${amount}</div>
        <div className="expense-item__quantity">Quantity: {quantity}</div>
      </div>
      <div className="expense-item__total">Total: ${quantity * amount}</div>
    </div>
  );
}

export default ExpenseItem;
