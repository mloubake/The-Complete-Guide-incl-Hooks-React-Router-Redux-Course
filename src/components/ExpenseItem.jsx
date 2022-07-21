import React from "react";

import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>July 21th 2022</h2>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294,67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
