import React, { useEffect, useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import mockedDatabase from "../../data/mockedData";

import Card from "../Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

import "./styles.css";

function ExpenseList() {
  let [mockedData, setMockedData] = useState(mockedDatabase);
  let [year, setYear] = useState("2019");

  const handleAddNewExpense = (newExpenseData) => {
    setMockedData([...mockedDatabase, newExpenseData]);
  };

  let handleChangeYear = (pickedYear) => {
    setYear(pickedYear);
  };

  let handleFilterExpenses = mockedData.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div className="expense-list">
      <h1>Expense Tracker</h1>
      <NewExpense onAddNewExpense={handleAddNewExpense} />
      <Card>
        <ExpenseFilter selectedYear={year} onChangeYear={handleChangeYear} />
        {handleFilterExpenses
          .map((data) => {
            return (
              <ExpenseItem
                key={data.id}
                date={data.date}
                title={data.title}
                amount={data.amount}
                quantity={data.quantity}
              />
            );
          })
          .reverse()}
      </Card>
    </div>
  );
}

export default ExpenseList;
