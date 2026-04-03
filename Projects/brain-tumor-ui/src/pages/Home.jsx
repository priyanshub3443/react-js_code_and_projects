import React from "react";
import Upload from "../components/Upload";
import ResultCard from "../components/ResultCard";
import ChartView from "../components/ChartView";

export default function Home({ result, onPredict, threshold, showRaw }) {
  return (
    <div className="container py-4">
      <h2 className="text-center text-info mb-4">🧠 Brain Tumor Detection</h2>

      <Upload onPredict={onPredict} />

      {result && (
        <>
          <ResultCard data={result} threshold={threshold} showRaw={showRaw} />
          <ChartView data={result} />
        </>
      )}
    </div>
  );
}
