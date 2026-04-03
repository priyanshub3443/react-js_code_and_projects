import React from "react";

export default function Sidebar({
  threshold,
  setThreshold,
  showRaw,
  setShowRaw,
}) {
  return (
    <div className="sidebar p-3">
      <h5 className="mb-3">⚙️ Settings</h5>

      {/* Confidence Threshold */}
      <label className="form-label">Confidence Threshold: {threshold}</label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={threshold}
        className="form-range"
        onChange={(e) => setThreshold(parseFloat(e.target.value))}
      />

      {/* Show Raw Probabilities */}
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showRaw}
          onChange={() => setShowRaw(!showRaw)}
        />
        <label className="form-check-label">Show Raw Probabilities</label>
      </div>

      <hr />

      {/* About */}
      <p className="small text-muted">
        Model trained on MRI dataset using CNN (TensorFlow).
        <br />
        ⚠️ Not for clinical use.
      </p>
    </div>
  );
}
