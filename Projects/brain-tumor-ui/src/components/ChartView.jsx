import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function ChartView({ data }) {
  const chartData = {
    labels: ["Glioma", "Meningioma", "Pituitary", "No Tumor"],
    datasets: [
      {
        label: "Confidence %",
        data: [data.glioma, data.meningioma, data.pituitary, data.noTumor],
      },
    ],
  };

  return (
    <div className="mt-4">
      <h4 className="text-center">Prediction Chart</h4>
      <Bar data={chartData} />
    </div>
  );
}
