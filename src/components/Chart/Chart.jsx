import React, { useEffect, useState } from "react";
import ChartBar from "../ChartBar/ChartBar";

import "./styles.css";

function Chart({ dataPoints }) {
  let dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            className={ChartBar}
            key={dataPoint.month}
            month={dataPoint.month}
            expensesInMonth={dataPoint.value}
            totalExpensesInYear={totalMaximum}
          />
        );
      })}
    </div>
  );
}

export default Chart;
