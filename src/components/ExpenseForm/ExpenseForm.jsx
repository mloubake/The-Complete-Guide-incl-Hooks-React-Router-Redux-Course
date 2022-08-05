"react";

import { useState } from "react";
import "./styles.css";

function ExpenseForm({ onSaveNewExpenseData, toggleAddExpenseBox }) {
  let [newItem, setNewItem] = useState({
    inputedTitle: "",
    inputedQuantity: 1,
    inputedAmount: 0,
    inputedDate: "",
  });

  function handleTitleChange(event) {
    setNewItem((previousState) => {
      return { ...previousState, inputedTitle: event.target.value };
    });
  }

  function handleQuantityChange(event) {
    setNewItem((previousState) => {
      return { ...previousState, inputedQuantity: event.target.value };
    });
  }

  function handleAmountChange(event) {
    setNewItem((previousState) => {
      return { ...previousState, inputedAmount: event.target.value };
    });
  }

  function handleDateChange(event) {
    setNewItem((previousState) => {
      return { ...previousState, inputedDate: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: newItem.inputedTitle,
      quantity: +newItem.inputedQuantity,
      amount: newItem.inputedAmount,
      date: new Date(newItem.inputedDate),
    };
    onSaveNewExpenseData(expenseData);

    setNewItem({
      inputedTitle: "",
      inputedQuantity: 1,
      inputedAmount: 0,
      inputedDate: "",
    });
  }

  return (
    <form
      className="expense-form__container"
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            type="text"
            value={newItem.inputedTitle}
            onChange={(event) => {
              handleTitleChange(event);
            }}
          />
        </div>{" "}
        <div className="expense-form__control">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            step="1"
            value={newItem.inputedQuantity}
            onChange={(event) => {
              handleQuantityChange(event);
            }}
          />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            value={newItem.inputedAmount}
            onChange={(event) => {
              handleAmountChange(event);
            }}
          />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={newItem.inputedDate}
            onChange={(event) => {
              handleDateChange(event);
            }}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button id="add_new" type="submit">
          Add Expense
        </button>
        <button
          id="cancel_values"
          onClick={() => {
            toggleAddExpenseBox();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
