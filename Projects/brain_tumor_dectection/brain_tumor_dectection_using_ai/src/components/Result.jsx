import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

const Result = ({ result, darkMode }) => {
  const data = {
    labels: ["Glioma", "Meningioma", "Pituitary"],
    datasets: [
      {
        data: [
          result.glioma || 0,
          result.meningioma || 0,
          result.pituitary || 0,
        ],
      },
    ],
  };

  return (
    <div className={`mt-5 p-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <h3 className="text-center">🧠 Result</h3>

      <div className="text-center mb-3">
        <span className="badge bg-danger">{result.prediction}</span>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <label>Confidence: {result.confidence}%</label>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${result.confidence}%` }}
          >
            {result.confidence}%
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Bar data={data} />
        </div>
        <div className="col-md-6">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default Result;
