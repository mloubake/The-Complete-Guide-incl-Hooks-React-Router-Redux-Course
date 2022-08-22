import React from "react";

import "./styles.css";

interface IProps {
  selectedYear: any;
  onChangeYear: (args: string) => void;
}

const ExpenseFilter: React.FC<IProps> = ({ selectedYear, onChangeYear }) => {
  const dateArray = [
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
  ];

  function handleSelectYear(event: React.ChangeEvent<HTMLSelectElement>) {
    onChangeYear(event.target.value);
  }

  return (
    <div className="expense-filter__container">
      <div className="expense-filter">
        <h2>Filter by Year</h2>
        <div className="dropdown">
          <select
            value={selectedYear}
            onChange={(event) => {
              handleSelectYear(event);
            }}
          >
            {dateArray.map((date) => {
              return (
                <option key={date} value={date}>
                  {date}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
