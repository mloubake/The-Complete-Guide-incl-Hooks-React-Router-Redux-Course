import React from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./styles.css";

interface IProps {
  date: Date;
  title: string;
  quantity: number;
  price: number;
}

const ExpenseItem: React.FC<IProps> = ({ date, title, quantity, price }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2>
        {title} x{quantity}
      </h2>
      <div className="expense-item__price">Price: ${price}</div>
      <div className="expense-item__total">Total: ${quantity * price}</div>
    </div>
  );
};

export default ExpenseItem;
