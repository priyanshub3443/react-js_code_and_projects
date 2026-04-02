import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ image, setImage, setPreview, setResult }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert("Select image");

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(res.data);
    } catch {
      alert("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <button className="btn btn-success w-100" onClick={handleUpload}>
        {loading ? "Processing..." : "Upload & Predict"}
      </button>

      {/* Scanner */}
      {loading && (
        <div className="scanner mt-3">
          <div className="scan-line"></div>
          <p className="text-center">Analyzing MRI...</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
