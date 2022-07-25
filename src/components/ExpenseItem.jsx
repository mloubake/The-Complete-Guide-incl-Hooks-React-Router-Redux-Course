import React from "react";

import "./ExpenseItem.css";

function ExpenseItem({ date, title, quantity, amount }) {
  return (
    <div className="expense-item">
      <h2>{date.toISOString()}</h2>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <div className="expense-item__price">Quantity: {quantity}</div>
        <div className="expense-item__price">Total: ${quantity * amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
