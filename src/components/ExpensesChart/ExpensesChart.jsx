import React from "react";
import Chart from "../Chart/Chart";

// import "./styles.css";

function ExpensesChart({ expensesList }) {
  console.log(expensesList);

  let chartDataPoints = [
    { month: "Jan", value: 0 },
    { month: "Fev", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Abr", value: 0 },
    { month: "Mai", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Ago", value: 0 },
    { month: "Set", value: 0 },
    { month: "Out", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const expense of expensesList) {
    let expenseMonth = expense.date.getMonth();

    chartDataPoints[expenseMonth].value += expense.amount * expense.quantity;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
