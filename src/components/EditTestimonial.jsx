import React, { useState } from "react";
import "../css/EditTestimonial.css";

export default function EditTestimonial({ testimonial, closeDialog, updateTestimonials }) {

  const getFullImageUrl = (img) => {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `${process.env.REACT_APP_API_URL}/${img}`;
  };

  const [result, setResult] = useState("");
  const [preview, setPreview] = useState(getFullImageUrl(testimonial.img_name));

  const uploadImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setResult("Updating...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews/${testimonial._id}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        const updatedReview = await res.json();
        updateTestimonials(updatedReview);
        closeDialog();
      } else {
        const errMsg = await res.text();
        setResult(errMsg || "Error updating testimonial");
      }
    } catch (err) {
      console.error(err);
      setResult("Network or server error");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews/${testimonial._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        updateTestimonials({ _id: testimonial._id, deleted: true });
        closeDialog();
      } else {
        const errMsg = await res.text();
        setResult(errMsg || "Error deleting testimonial");
      }
    } catch (err) {
      console.error(err);
      setResult("Network or server error");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content form-popup">
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

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
            <button type="submit">Save</button>
            <button type="button" onClick={handleDelete} style={{ backgroundColor: "#d9534f" }}>
              Delete
            </button>
          </div>

          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}
