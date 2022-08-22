import React, { useState } from "react";

import Card from "../../atoms/Card/Card";

import ExpenseItem from "../../molecules/ExpenseItem/ExpenseItem";
import ExpenseFilter from "../../molecules/ExpenseFilter/ExpenseFilter";
import ExpensesChart from "../../molecules/ExpensesChart/ExpensesChart";

import AddExpense from "../../organisms/AddExpense/AddExpense";

import mockedDatabase from "../../../data/mockedData";

import "./styles.css";

interface IProps {}

interface IMockedData {
  id: string;
  title: string;
  quantity: number;
  price: number;
  date: Date;
}

const ExpenseList: React.FC<IProps> = () => {
  let [expenses, setExpense] = useState<Array<IMockedData>>(mockedDatabase);

  let [year, setYear] = useState<string>("2019");

  let handleNewExpenses = (newExpenseData: any) => {
    setExpense([...expenses, newExpenseData]);
  };

  let handleChangeYear = (pickedYear: string) => {
    setYear(pickedYear);
  };

  let handleFilterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div className="expense-list">
      <h1>Expense Tracker</h1>
      <AddExpense onAddNewExpense={handleNewExpenses} />
      <Card>
        <ExpenseFilter selectedYear={year} onChangeYear={handleChangeYear} />
        {handleFilterExpenses.length === 0 ? (
          <div>
            <p>No expenses found.</p>
          </div>
        ) : (
          <></>
        )}
        <ExpensesChart expensesList={handleFilterExpenses} />
        {handleFilterExpenses.length > 0 ? (
          <>
            {handleFilterExpenses
              .map((data: IMockedData) => {
                return (
                  <ExpenseItem
                    key={data.id}
                    date={data.date}
                    title={data.title}
                    price={data.price}
                    quantity={data.quantity}
                  />
                );
              })
              .reverse()}
          </>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
};

export default ExpenseList;
