import React, { useState } from "react";
import Upload from "./components/Upload";
import ResultCard from "./components/ResultCard";
import ChartView from "./components/ChartView";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [result, setResult] = useState(null);
  const [threshold, setThreshold] = useState(0.5);
  const [showRaw, setShowRaw] = useState(false);

  const handlePredict = () => {
    const data = {
      glioma: 0.65,
      meningioma: 0.15,
      pituitary: 0.1,
      noTumor: 0.1,
    };
    setResult(data);
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar
        threshold={threshold}
        setThreshold={setThreshold}
        showRaw={showRaw}
        setShowRaw={setShowRaw}
      />

      {/* Main Content */}
      <div className="main-content container py-4">
        <h2 className="text-center text-info mb-4">🧠 Brain Tumor Detection</h2>

        <Upload onPredict={handlePredict} />

        {result && (
          <>
            <ResultCard data={result} threshold={threshold} showRaw={showRaw} />
            <ChartView data={result} />
          </>
        )}
      </div>
    </div>
  );
}
