import React, { useState } from "react";

export default function QA() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is this project?",
      a: "It is an AI-based system that detects brain tumors from MRI images using deep learning.",
    },
    {
      q: "How accurate is this model?",
      a: "Accuracy depends on training data and model performance. It is for educational purposes.",
    },
    {
      q: "Can this replace doctors?",
      a: "No, it is only an assistive tool and not a replacement for medical professionals.",
    },
    {
      q: "What types of tumors are detected?",
      a: "Glioma, Meningioma, Pituitary, and No Tumor.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container py-5 qa-page">
      <h2 className="text-center qa-title mb-4">❓ Q & A</h2>

      {faqs.map((item, index) => (
        <div key={index} className="qa-card mb-3">
          {/* Question */}
          <div className="qa-question" onClick={() => toggle(index)}>
            {item.q}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </div>

          {/* Answer */}
          {activeIndex === index && <div className="qa-answer">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
