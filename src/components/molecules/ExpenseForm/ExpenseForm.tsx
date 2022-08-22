import React, { FormEvent, useState } from "react";

import Button from "../../atoms/Button/Button";
import ExpenseFormControl from "../../molecules/ExpenseFormControl/ExpenseFormControl";
import ErrorModal from "../../templates/Modal/ErrorModal";

import "./styles.css";

interface IProps {
  onSaveNewExpenseData: (args: {
    title: string;
    quantity: number;
    price: number;
    date: Date;
  }) => void;
  toggleAddExpenseBox: () => void;
}

interface INewItem {
  inputedTitle: string;
  inputedQuantity: number;
  inputedPrice: number;
  inputedDate: string;
}

interface IErrorModalContent extends Object {
  title: string;
  message: string;
}

const ExpenseForm: React.FC<IProps> = ({
  onSaveNewExpenseData,
  toggleAddExpenseBox,
}) => {
  let [newItem, setNewItem] = useState<INewItem>({
    inputedTitle: "",
    inputedQuantity: 1,
    inputedPrice: 0,
    inputedDate: "",
  });

  let [error, setError] = useState<IErrorModalContent | null>();

  console.log(error);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((previousState) => {
      return { ...previousState, inputedTitle: event.target.value };
    });
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((previousState) => {
      return { ...previousState, inputedQuantity: Number(event.target.value) };
    });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((previousState) => {
      return { ...previousState, inputedPrice: Number(event.target.value) };
    });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((previousState) => {
      return { ...previousState, inputedDate: event.target.value };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      newItem.inputedTitle.trim().length <= 0 ||
      newItem.inputedQuantity.toString().trim().length <= 0 ||
      newItem.inputedPrice.toString().trim().length <= 0 ||
      newItem.inputedDate.toString().trim().length <= 0
    ) {
      setError({
        title: "Missing fields!",
        message: "All fields are required to proceed.",
      });

      return;
    }

    onSaveNewExpenseData({
      title: newItem.inputedTitle,
      quantity: +newItem.inputedQuantity,
      price: +newItem.inputedPrice,
      date: new Date(newItem.inputedDate),
    });

    setNewItem({
      inputedTitle: "",
      inputedQuantity: 1,
      inputedPrice: 0,
      inputedDate: "",
    });
  };

  let handleToggleModal = () => {
    setError(null);
  };

  return (
    <>
      <form
        id="my-form"
        className="expense-form__container"
        onSubmit={submitHandler}
      >
        <div className="expense-form__controls">
          <ExpenseFormControl
            labelText={"Title"}
            inputType={"text"}
            inputValue={newItem.inputedTitle}
            onChange={handleTitleChange}
          />
          <ExpenseFormControl
            labelText={"Quantity"}
            inputType={"number"}
            min="1"
            step="1"
            inputValue={newItem.inputedQuantity}
            onChange={handleQuantityChange}
          />
          <ExpenseFormControl
            labelText={"Price"}
            inputType={"number"}
            min="0.00"
            step="0.01"
            inputValue={newItem.inputedPrice}
            onChange={handlePriceChange}
          />
          <ExpenseFormControl
            labelText={"Date"}
            inputType={"date"}
            min="2019-01-01"
            max="2030-12-31"
            inputValue={newItem.inputedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="expense-form__actions">
          <Button
            id={"add_new"}
            text={"Add Expense"}
            onClick={() => {
              toggleAddExpenseBox;
              submitHandler;
            }}
          />
          <Button
            id="cancel_values"
            text="Cancel"
            onClick={toggleAddExpenseBox}
          />
        </div>
      </form>
      {error && <ErrorModal error={error} onCloseModal={handleToggleModal} />}
    </>
  );
};

export default ExpenseForm;
