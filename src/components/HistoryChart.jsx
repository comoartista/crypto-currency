import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import moment from "moment/moment";
import Skeleton from "./Skeleton";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function HistoryChart() {
  const { id } = useParams();
  const { responce } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!responce)
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  const coinCharData = responce.prices.map((price) => ({
    x: price[0],
    y: price[1].toFixed(2),
  }));

  const options = {
    responce: true,
  };

  const data = {
    labels: coinCharData.map((data) => moment(data.x).format("MMM DD")),
    datasets: [
      {
        fill: false,
        label: id,
        data: coinCharData.map((data) => data.y),
        borderColor: "#0FAE96",
        border: 1,
      },
    ],
  };
  console.log(coinCharData);

  return (
    <div className="bg-white">
      <Line options={options} data={data} />
    </div>
  );
}
