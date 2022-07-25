import React from "react";

// import { Container } from './styles';

function ExpenseDate({ date }) {
  const day = date.toLocaleString("pt-BR", { day: "2-digit" });
  const month = date.toLocaleString("pt-BR", { month: "2-digit" });
  const year = date.getFullYear();

  return (
    <h3>
      {day} / {month} / {year}
    </h3>
  );
}

export default ExpenseDate;
