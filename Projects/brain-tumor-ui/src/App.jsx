import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Home from "./pages/home";
import About from "./pages/about";
import QA from "./pages/QA";
import Help from "./pages/Help";

export default function App() {
  const [result, setResult] = useState(null);
  const [threshold, setThreshold] = useState(0.5);
  const [showRaw, setShowRaw] = useState(false);

  const handlePredict = () => {
    setResult({
      glioma: 0.65,
      meningioma: 0.15,
      pituitary: 0.1,
      noTumor: 0.1,
    });
  };

  return (
    <Router>
      <Navbar />

      <div className="app-layout">
        <Sidebar
          threshold={threshold}
          setThreshold={setThreshold}
          showRaw={showRaw}
          setShowRaw={setShowRaw}
        />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  result={result}
                  onPredict={handlePredict}
                  threshold={threshold}
                  showRaw={showRaw}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
}
