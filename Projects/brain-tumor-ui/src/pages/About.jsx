import React from "react";

export default function About() {
  return (
    <div className="container py-5 about-page">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="about-title">🧠 Brain Tumor Detection</h1>
        <p className="about-subtitle">
          AI-powered MRI analysis system for detecting brain tumors with
          confidence scoring
        </p>
      </div>

      {/* About Project */}
      <div className="mb-5">
        <h3 className="section-title">📌 About the Project</h3>
        <p className="about-text">
          This project uses deep learning (CNN) to analyze MRI brain images and
          classify them into tumor categories like Glioma, Meningioma,
          Pituitary, or No Tumor. It provides confidence scores and
          visualization charts for better understanding.
        </p>
      </div>

      {/* Features */}
      <div className="mb-5">
        <h3 className="section-title mb-3">🚀 Features</h3>

        <div className="row">
          {/* AI Detection */}
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow feature-card ai-card">
              <h5 className="ai-title">🧠 AI Detection</h5>
              <p className="ai-text">
                Uses deep learning model for tumor classification
              </p>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow feature-card conf-card">
              <h5 className="conf-title">📊 Confidence Score</h5>
              <p className="conf-text">
                Shows probability and confidence of prediction
              </p>
            </div>
          </div>

          {/* Visualization */}
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow feature-card viz-card">
              <h5 className="viz-title">📈 Visualization</h5>
              <p className="viz-text">Graph and charts for better insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-5">
        <h3 className="section-title">⚙️ Technology Used</h3>
        <ul className="about-text">
          <li>React + Vite (Frontend)</li>
          <li>Bootstrap (UI Design)</li>
          <li>Chart.js (Visualization)</li>
          <li>Python + TensorFlow (AI Model)</li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="alert alert-warning mt-4">
        ⚠️ This system is for educational purposes only
      </div>
    </div>
  );
}
