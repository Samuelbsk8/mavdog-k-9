import React, { useState } from "react";
import "../css/AddTestimonial.css";

export default function AddTestimonial({ closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");

  const uploadImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://mavdog-server-testimonials.onrender.com/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const newReview = await res.json();
        updateTestimonials(newReview);
        setResult("Testimonial added successfully!");
        e.target.reset();
        setPreview("");
        closeDialog();
      } else {
        setResult("Error adding testimonial");
      }
    } catch (err) {
      console.error(err);
      setResult("Network or server error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={closeDialog}>
          &times;
        </button>

        <form id="add-testimonial-form" onSubmit={submitForm}>
          <h3>Add New Testimonial</h3>

          <label>Client Name:</label>
          <input name="client_name" required minLength={2} />

          <label>Dog Name:</label>
          <input name="dog_name" required minLength={1} />

          <label>Stars (1–5):</label>
          <input type="number" name="stars" min="1" max="5" required />

          <label>Training Type:</label>
          <input name="training_type" required />

          <label>Review:</label>
          <textarea name="review" required minLength={5}></textarea>

          <div className="image-row">
            {preview && <img src={preview} alt="preview" id="img-prev" />}

            <div>
              <label>Upload Image:</label>
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={uploadImage}
              />
            </div>
          </div>

          <button type="submit">Submit</button>

          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}
