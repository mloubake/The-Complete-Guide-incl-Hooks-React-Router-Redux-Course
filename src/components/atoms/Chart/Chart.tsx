import React from "react";

import ChartBar from "../ChartBar/ChartBar";

import "./styles.css";

interface IProps {
  dataPoints: IDataPoints[];
}

interface IDataPoints {
  month: string;
  value: number;
}

const Chart: React.FC<IProps> = ({ dataPoints }) => {
  let dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.month}
            month={dataPoint.month}
            expensesInMonth={dataPoint.value}
            totalExpensesInYear={totalMaximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
