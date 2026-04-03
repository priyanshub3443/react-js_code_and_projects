import React from "react";

export default function Help() {
  return (
    <div className="container py-5 help-page">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="help-title">🆘 Help & Support</h1>
        <p className="help-subtitle">
          Learn how to use the Brain Tumor Detection system step by step.
        </p>
      </div>

      {/* Steps */}
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className="help-card h-100">
            <div className="help-icon">1</div>
            <h5 className="help-card-title">Upload MRI Image</h5>
            <p className="help-card-text">
              Drag and drop an MRI image or select it from your computer.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="help-card h-100">
            <div className="help-icon">2</div>
            <h5 className="help-card-title">Adjust Settings</h5>
            <p className="help-card-text">
              Set the confidence threshold and enable raw probability view from
              the sidebar.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="help-card h-100">
            <div className="help-icon">3</div>
            <h5 className="help-card-title">Run Prediction</h5>
            <p className="help-card-text">
              Click the predict button to analyze the uploaded MRI image.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="help-card h-100">
            <div className="help-icon">4</div>
            <h5 className="help-card-title">View Results</h5>
            <p className="help-card-text">
              Check tumor type, confidence percentage, raw probability, and
              chart visualization.
            </p>
          </div>
        </div>
      </div>

      {/* Support Info */}
      <div className="help-section mb-4">
        <h3 className="help-section-title">📌 Tips for Best Results</h3>
        <ul className="help-list">
          <li>Use a clear MRI brain scan image.</li>
          <li>Upload supported image formats like JPG, PNG, or JPEG.</li>
          <li>Make sure the image is not blurry or cropped incorrectly.</li>
          <li>Use the confidence threshold to filter weaker predictions.</li>
        </ul>
      </div>

      {/* FAQ type support */}
      <div className="help-section mb-4">
        <h3 className="help-section-title">❓ Common Issues</h3>
        <div className="help-issue">
          <h6>Image is not uploading</h6>
          <p>
            Check file type and size. Try another MRI image in JPG or PNG
            format.
          </p>
        </div>
        <div className="help-issue">
          <h6>Prediction is not showing</h6>
          <p>
            Make sure an image is selected before clicking the predict button.
          </p>
        </div>
        <div className="help-issue">
          <h6>Confidence seems low</h6>
          <p>
            Low confidence can happen with unclear images or uncertain model
            output.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="alert alert-warning help-alert mt-4">
        ⚠️ This tool is for educational and project demonstration purposes only.
        It should not be used as a replacement for professional medical advice.
      </div>
    </div>
  );
}
