import React, { useState } from "react";
import "../css/AddTestimonial.css";

const API =
  process.env.REACT_APP_API_URL ||
  "https://mavdog-server-testimonials.onrender.com";

export default function AddTestimonial({ closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(`${API}/api/reviews`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const newReview = await res.json();
        updateTestimonials(newReview);
        closeDialog();
      } else {
        setResult("Error adding testimonial");
      }
    } catch {
      setResult("Server error");
    }
  };

  return (
    <div className="add-modal-overlay">
      <div className="add-modal-container">
        <button className="add-modal-close" onClick={closeDialog}>
          &times;
        </button>

        <form className="add-form" onSubmit={submitForm}>
          <h3>Add New Testimonial</h3>

          <label>Client Name:</label>
          <input name="client_name" required />

          <label>Dog Name:</label>
          <input name="dog_name" required />

          <label>Stars (1–5):</label>
          <input type="number" name="stars" min="1" max="5" required />

          <label>Training Type:</label>
          <input name="training_type" required />

          <label>Review:</label>
          <textarea name="review" required />

          <div className="image-row">
            {preview && <img src={preview} id="img-prev" alt="" />}
            <div>
              <label>Upload Image:</label>
              <input type="file" name="img" accept="image/*" onChange={uploadImage} />
            </div>
          </div>

          <div className="add-modal-buttons">
            <button type="submit" className="save-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={closeDialog}>Cancel</button>
          </div>

          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}
