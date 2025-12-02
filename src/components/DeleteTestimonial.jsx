import React, { useState } from "react";
import "../css/DeleteTestimonial.css";

const API =
  process.env.REACT_APP_API_URL ||
  "https://mavdog-server-testimonials.onrender.com";

export default function DeleteTestimonial({ testimonial, closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");

  const deleteReview = async () => {
    const res = await fetch(`${API}/api/reviews/${testimonial._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setResult("Deleted successfully");
      updateTestimonials(testimonial._id);
      closeDialog();
    } else {
      setResult("Delete failed");
    }
  };

  return (
    <div className="modal">
      <div className="delete-modal">
        <h2>Delete Testimonial</h2>
        <p>Are you sure you want to delete the testimonial from:</p>
        <h3>{testimonial.name}</h3>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={closeDialog}>Cancel</button>
          <button className="delete-btn" onClick={deleteReview}>Delete</button>
        </div>

        <p className="result">{result}</p>
      </div>
    </div>
  );
}
