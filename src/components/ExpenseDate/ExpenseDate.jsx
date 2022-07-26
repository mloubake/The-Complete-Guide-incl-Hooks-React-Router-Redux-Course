import React from "react";

import "./styles.css";

function ExpenseDate({ date }) {
  const day = date.toLocaleString("pt-BR", { day: "2-digit" });
  const month = date.toLocaleString("pt-BR", { month: "short" });
  const year = date.getFullYear();

  return (
    <div className="container">
      <h3>
        {String(month).charAt(0).toUpperCase() + String(month).slice(1)} {year}
      </h3>
      <h1>{day}</h1>
    </div>
  );
}

export default ExpenseDate;
