import React, { useState } from "react";

export default function Upload({ onPredict }) {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div
      className="upload-box text-center p-4 mb-4"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h5>Drag & Drop MRI Image</h5>

      <p className="text-muted">or</p>

      {/* File Upload Button */}
      <input
        type="file"
        accept="image/*"
        className="form-control mb-3"
        onChange={handleFileChange}
      />

      {image && (
        <img src={image} alt="preview" height="150" className="mb-3 rounded" />
      )}

      <div>
        <button className="btn btn-info" onClick={onPredict}>
          Predict
        </button>
      </div>
    </div>
  );
}
