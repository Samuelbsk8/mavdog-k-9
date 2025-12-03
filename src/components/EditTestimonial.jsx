import React, { useState } from "react";
import "../css/EditTestimonial.css";
import "../css/Testimonials.css";

export default function EditTestimonial({ testimonial, closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState(
    testimonial.img_name.startsWith("http")
      ? testimonial.img_name
      : `${process.env.REACT_APP_API_URL}/${testimonial.img_name}`
  );

  const uploadImage = (e) => setPreview(URL.createObjectURL(e.target.files[0]));

  const submitForm = async (e) => {
    e.preventDefault();
    setResult("Updating...");

    const formData = new FormData(e.target);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews/${testimonial._id}`, {
        method: "PUT",
        body: formData
      });

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
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeDialog}>&times;</button>
        <form onSubmit={submitForm}>
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

          <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={closeDialog}>Cancel</button>
          </div>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}
