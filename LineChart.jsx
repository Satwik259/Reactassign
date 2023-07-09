import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "2017", react: 32, vue: 60 },
  { name: "2018", react: 42, vue: 54 },
  { name: "2019", react: 51, vue: 54 },
  { name: "2020", react: 60, vue: 28 },
  { name: "2021", react: 51, vue: 27 },
  { name: "2022", react: 95, vue: 49 },
];

const LineCharts = () => {
  return (
    <div className="w-full h-fit p-4 bg-white rounded-20">
      <div className="flex flex-col justify-between p-5 gap-5">
        <div className="flex flex-row justify-between focus-within:outline-none">
          <div>
            <h2 className="text-2xl font-bold">Top Products</h2>
            <select className="w-min text-sm text-slate-500">
              <option value="may-june">May - June 2021</option>
            </select>
          </div>
          <div className="w-1/3 flex gap-5">
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-30  bg-green-500"></div>Guest
            </li>
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-30  bg-red-500"></div>User
            </li>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex ">
          <LineChart width={500} height={250} data={data}>
            <Line
              type="monotone"
              dataKey="react"
              stroke="green"
              strokeWidth={3}
            />
            <Line type="monotone" dataKey="vue" stroke="red" strokeWidth={3} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default LineCharts;
