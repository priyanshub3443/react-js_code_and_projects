import React from "react";

export default function ResultCard({ data, threshold, showRaw }) {
  const tumors = [
    {
      name: "Glioma",
      key: "glioma",
      desc: "Aggressive tumor from brain cells",
      color: "#ef4444", // red
    },
    {
      name: "Meningioma",
      key: "meningioma",
      desc: "Usually benign and slow-growing tumor",
      color: "#f59e0b", // yellow
    },
    {
      name: "Pituitary",
      key: "pituitary",
      desc: "Affects hormone-producing gland",
      color: "#8b5cf6", // purple
    },
    {
      name: "No Tumor",
      key: "noTumor",
      desc: "Normal brain, no tumor detected",
      color: "#10b981", // green
    },
  ];

  return (
    <div className="row">
      {tumors.map((t, i) => {
        const value = data[t.key];
        const percent = Math.round(value * 100);
        const isAbove = value >= threshold;

        return (
          <div className="col-md-6 mb-3" key={i}>
            <div className="card shadow p-3">
              {/* Title */}
              <h5 style={{ color: t.color }}>{t.name}</h5>

              {/* 🔥 Colored Description */}
              <p style={{ color: t.color, fontWeight: "500" }}>{t.desc}</p>

              <h6
                style={{
                  color: t.color,
                  fontWeight: "600",
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
              >
                Confidence: {percent}% {isAbove && "✅"}
              </h6>

              {showRaw && (
                <p className="small text-muted">Raw: {value.toFixed(3)}</p>
              )}

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: t.color,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
