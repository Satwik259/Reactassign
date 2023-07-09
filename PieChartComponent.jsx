import React from "react";
import PieChart from "./PieChart";


const PieChartComponent = () => {
    const products = [
        { title: "Basic Tees", percent: 55, color: "green" },
        { title: "Custom Short Pants", percent: 31, color: "orange" },
        { title: "Super Hoodies", percent: 14, color: "red" },
      ];
    
  return (
    <div className="w-full h-2/5 flex flex-col flex-wrap justify-between md:flex-row gap-10">
      <div className="w-full md:w-[500px] md:h-fit bg-white rounded-20 px-10 py-2 flex flex-col">
        <div className="flex justify-between focus-within:outline-none">
          <h2 className="text-2xl font-bold">Top Products</h2>
          <select className="text-sm text-slate-500">
            <option value="may-june">May - June 2021</option>
          </select>
        </div>
        <div className="flex justify-around">
          <PieChart />
          <div className="flex flex-col">
            {products.map((e) => (
              <div className="my-1" key={e.title}>
                <div className="flex items-center gap-2">
                  <div
                    className={`inline-block w-3 h-3 bg-${e.color}-200 rounded-30`}
                  ></div>
                  <p className="w-full text-md font-bold">{e.title}</p>
                </div>
                <p className="text-xs text-slate-400 ml-5">{e.percent}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[500px] md:h-fit bg-white rounded-20 px-10 py-5 flex flex-col">
        <div className="flex justify-between items-end focus-within:outline-none">
          <h2 className="text-2xl font-bold">Today's schedule</h2>
          <p className="text-sm text-slate-500">See All &gt;</p>
        </div>
        <div className="flex flex-col gap-4 my-3">
          <div className="my-1 flex items-center">
            <div className="w-1.5 h-14 bg-green-500"></div>
            <div>
              <div className="flex items-center gap-1">
                <div className={`inline-block w-3 h-3 rounded-30`}></div>
                <p className="w-full text-md font-bold">
                  Meeting with suppliers from Kuta Bali
                </p>
              </div>
              <p className="text-xs text-slate-400 ml-4">14.00-15.00</p>
              <p className="text-xs text-slate-400 ml-4">
                at Sunset Road, Kuta, Bali
              </p>
            </div>
          </div>
          <div className="my-1 flex items-center">
            <div className="w-1.5 h-14 bg-blue-500"></div>
            <div>
              <div className="flex items-center gap-1">
                <div className={`inline-block w-3 h-3 rounded-30`}></div>
                <p className="w-full text-md font-bold">
                  Check operation at Giga Factory 1
                </p>
              </div>
              <p className="text-xs text-slate-400 ml-4">18.00-20.00</p>
              <p className="text-xs text-slate-400 ml-4">at Central Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
