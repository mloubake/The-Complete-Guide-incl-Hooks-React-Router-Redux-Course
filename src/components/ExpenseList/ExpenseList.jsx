import React from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import mockedData from "../../data/mockedData";

import "./styles.css";

function ExpenseList() {
  return (
    <div className="expense-list">
      <h1>Expense Tracker</h1>
      {mockedData.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            amount={data.amount}
            quantity={data.quantity}
          />
        );
      })}
    </div>
  );
}

export default ExpenseList;
