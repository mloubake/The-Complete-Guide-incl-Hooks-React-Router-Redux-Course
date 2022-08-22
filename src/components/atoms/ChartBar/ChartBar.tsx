import React, { useState } from "react";

import "./styles.css";

interface IProps {
  month: string;
  expensesInMonth: number;
  totalExpensesInYear: number;
}

const ChartBar: React.FC<IProps> = ({
  month,
  expensesInMonth,
  totalExpensesInYear,
}) => {
  let barFillHeight: number = 0;

  if (totalExpensesInYear > 0) {
    barFillHeight = Math.round((expensesInMonth / totalExpensesInYear) * 100);
  }

  return (
    <div key={month} className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHeight + "%",
            backgroundColor:
              barFillHeight >= 40 && barFillHeight < 60
                ? "#d6c217"
                : barFillHeight >= 60 && barFillHeight < 80
                ? "#d68217"
                : barFillHeight >= 80
                ? "#d61e35"
                : "#4826b9",
          }}
        ></div>
      </div>
      <h5 className="chart-bar__month">{month}</h5>
    </div>
  );
};

export default ChartBar;
