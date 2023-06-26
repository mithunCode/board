import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["", "week1", "", "week2", "", "week3", "", "week4", ""],
    datasets: [
      {
        data: [7, 6, 8, 2, 4, 6, 7, 6, 8, 2, 4],

        backgroundColor: "transparent",
        borderColor: "#e9a0a0",
        pointBorderColor: "transparent",
        pointborderWidth: 4,
        tension: 0.5,
      },
      {
        data: [1, 2, 8, 6, 4, 2, 7, 6, 8, 2, 1],

        backgroundColor: "transparent",
        borderColor: "#9bdd7c",
        pointBorderColor: "transparent",
        pointborderWidth: 4,
        tension: 0.5,
      },
    ],

    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            callback: (value) => value * 50,
          },
          grid: {
            display: true,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "90%", height: "200px", marginLeft: "20px" }}>
      <Line data={data} options={data.options}></Line>
    </div>
  );
};

export default LineChart;
