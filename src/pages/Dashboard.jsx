import React from "react";
import LineCharts from "./LineChart";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Cards from "./Cards";
import PieChartComponent from "./PieChartComponent";

const Dash = () => {

  
  return (
    <div className="w-full h-full md:h-full bg-gray-200 px-10 py-7 flex flex-col md:flex-row ">
      <Navbar />

      <div className="w-full md:w-4/5 rounded-30 px-6 py-3 flex flex-col justify-between gap-4">
        <Searchbar />
        <Cards />
        <LineCharts />
      
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Dash;
