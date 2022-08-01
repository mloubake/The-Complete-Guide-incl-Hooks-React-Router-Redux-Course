import React from "react";

import "./styles.css";

function ExpenseFilter({ onChangeYear }) {
  const dateArray = [
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
  ];

  function handleSelectYear(event) {
    onChangeYear(event.target.value);
  }

  return (
    <div className="expense-filter__container">
      <div className="expense-filter">
        <h2>Filter by Year</h2>
        <div className="dropdown">
          <select
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
      <div className="expense-month-summary">
        {[
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dec",
        ].map((month) => {
          return (
            <div className="month-bar__item">
              <progress className="bar" max="100" value="30"></progress>
              <h5 className="month">{month}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseFilter;
