import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["green", "orange", "red"],
      },
    ],
  };
  return (
    <div className="w-[190px] h-[190px] p-4">
      <Pie  data={data} ></Pie>
    </div>
  );
};

export default PieChart;
