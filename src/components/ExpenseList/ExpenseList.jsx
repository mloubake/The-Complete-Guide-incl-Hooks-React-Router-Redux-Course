import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import mockedDatabase from "../../data/mockedData";

import "./styles.css";
import NewExpense from "../NewExpense/NewExpense";

function ExpenseList() {
  let [mockedData, setMockedData] = useState(mockedDatabase);

  const handleAddNewExpense = (newExpenseData) => {
    setMockedData([...mockedDatabase, newExpenseData]);
  };

  return (
    <div className="expense-list">
      <h1>Expense Tracker</h1>
      <NewExpense onAddNewExpense={handleAddNewExpense} />
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
