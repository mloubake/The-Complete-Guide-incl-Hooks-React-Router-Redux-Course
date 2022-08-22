import React, { useState } from "react";
import Button from "../../atoms/Button/Button";

import NewExpense from "../../molecules/NewExpense/NewExpense";

interface IProps {
  onAddNewExpense: (args: {}) => void;
}

const AddExpense: React.FC<IProps> = ({ onAddNewExpense }) => {
  let [toggleExpenseButton, setToggleExpenseButton] = useState(false);

  let handleAddNewExpense = (newExpenseData: any) => {
    onAddNewExpense(newExpenseData);

    setToggleExpenseButton(!toggleExpenseButton);
  };

  let toggleAddExpenseBox = () => {
    setToggleExpenseButton(!toggleExpenseButton);
  };

  return (
    <>
      {toggleExpenseButton ? (
        <NewExpense
          onAddNewExpense={handleAddNewExpense}
          toggleAddExpenseBox={toggleAddExpenseBox}
        />
      ) : (
        <div className="add-expense__box">
          <Button
            className="toggle__box"
            text="Add Expense"
            onClick={toggleAddExpenseBox}
          />
        </div>
      )}
    </>
  );
};

export default AddExpense;
