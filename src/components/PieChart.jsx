import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Baisc Tees", "cargo short pants", "hoodies"],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      borderColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    legend: false,
  },
};
const PieChart = () => {
  const total = data.datasets[0].data;
  const x = total.reduce((a, b) => a + b, 0);

  return (
    <div className="flex justify-around items-center p-3  ">
      <div className="">
        <Pie
          data={data}
          options={options}
          style={{ width: "134px", height: "134px" }}
        />
      </div>

      <div className="flex flex-col justify-start items-start">
        <div className="flex justify-center gap-2 items-center">
          <div className="w-[11px] h-[11px] bg-[#98D89E] rounded-[11px]"></div>
          <p
            className="text-base "
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            {data.labels[0]}
          </p>
        </div>
        <p
          className="text-[#858585] text-xs  px-5"
          style={{ fontFamily: "Lato" }}
        >
          {Math.floor((data.datasets[0].data[0] / x) * 100)}
        </p>
        <div className="flex  justify-center gap-2 items-center">
          <div className="w-[11px] h-[11px] bg-[#EE8484] rounded-[11px]"></div>
          <p
            className="text-base"
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            {data.labels[1]}
          </p>
        </div>
        <p
          className="text-[#858585] text-xs px-5"
          style={{ fontFamily: "Lato" }}
        >
          {Math.floor((data.datasets[0].data[1] / x) * 100)}
        </p>
        <div className="flex  justify-center gap-2 items-center">
          <div className="w-[11px] h-[11px] bg-[#F6DC7D] rounded-[11px]"></div>
          <p
            className="text-base"
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            {data.labels[2]}
          </p>
        </div>
        <p
          className="text-[#858585] text-xs  px-5"
          style={{ fontFamily: "Lato" }}
        >
          {Math.floor((data.datasets[0].data[2] / x) * 100)}
        </p>
      </div>
    </div>
  );
};

export default PieChart;
