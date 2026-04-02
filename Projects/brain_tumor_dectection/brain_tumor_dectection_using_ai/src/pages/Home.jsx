import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import Result from "../components/Result";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-light d-flex flex-column min-vh-100"
          : "bg-light d-flex flex-column min-vh-100"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero */}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          height: "300px",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="text-white text-center fade-in">
          <h1>AI Brain Tumor Detection</h1>
          <p>Upload MRI and get instant result</p>
        </div>
      </div>

      {/* Main */}
      <div className="container py-5 flex-grow-1">
        <div className="row">
          {/* Upload */}
          <div className="col-md-6">
            <div className="glass-card p-4 fade-in">
              <h4>Upload MRI</h4>

              <ImageUpload
                image={image}
                setImage={setImage}
                setPreview={setPreview}
                setResult={setResult}
              />
            </div>
          </div>

          {/* Preview */}
          <div className="col-md-6">
            {preview && (
              <div className="image-container fade-in">
                <img src={preview} className="img-fluid rounded" />
                <div className="overlay-text">MRI Scan</div>
              </div>
            )}
          </div>
        </div>

        {/* Result */}
        {result && <Result result={result} darkMode={darkMode} />}
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
