import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./styles.css";

function ExpenseItem({ date, title, quantity, amount }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2>
        {title} x{quantity}
      </h2>
      <div className="expense-item__amount">Amount: ${amount}</div>
      <div className="expense-item__total">Total: ${quantity * amount}</div>
    </div>
  );
}

export default ExpenseItem;
