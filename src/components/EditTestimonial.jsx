import React, { useState } from "react";
import "../css/EditTestimonial.css";

export default function EditTestimonial({ testimonial, closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState(
    testimonial.img_name.startsWith("http")
      ? testimonial.img_name
      : `${process.env.REACT_APP_API_URL}/${testimonial.img_name}`
  );

  const uploadImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setResult("Updating...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/reviews/${testimonial._id}`,
        { method: "PUT", body: formData }
      );

      if (res.ok) {
        const updated = await res.json();
        updateTestimonials(updated);
        closeDialog();
      } else {
        const errMsg = await res.text();
        setResult(errMsg || "Error updating testimonial");
      }
    } catch {
      setResult("Network or server error");
    }
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal-container">
        <button className="edit-modal-close" onClick={closeDialog}>
          &times;
        </button>

        <form className="edit-form" onSubmit={submitForm}>
          <h3>Edit Testimonial</h3>

          <label>Client Name:</label>
          <input name="client_name" required minLength={2} defaultValue={testimonial.client_name} />

          <label>Dog Name:</label>
          <input name="dog_name" required minLength={1} defaultValue={testimonial.dog_name} />

          <label>Stars (1–5):</label>
          <input type="number" name="stars" min="1" max="5" required defaultValue={testimonial.stars} />

          <label>Training Type:</label>
          <input name="training_type" required defaultValue={testimonial.training_type} />

          <label>Review:</label>
          <textarea name="review" required minLength={5} defaultValue={testimonial.review}></textarea>

          <div className="image-row">
            {preview && <img src={preview} alt="preview" id="img-prev" />}
            <div>
              <label>Upload Image:</label>
              <input type="file" name="img" accept="image/*" onChange={uploadImage} />
            </div>
          </div>

          <div className="edit-modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={closeDialog}>Cancel</button>
          </div>

          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}
