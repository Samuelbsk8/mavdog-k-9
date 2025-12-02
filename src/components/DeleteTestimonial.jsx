import React, { useState } from "react";
import "../css/DeleteTestimonial.css";

const API = process.env.REACT_APP_API_URL || "https://mavdog-server-testimonials.onrender.com";

export default function DeleteTestimonial({ testimonial, closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");

  const deleteTestimonial = async () => {
    const res = await fetch(`${API}/api/reviews/${testimonial._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setResult("Deleted successfully.");
      updateTestimonials(testimonial._id);  // ✅ SEND ONLY THE ID
      closeDialog();
    } else {
      setResult("Error deleting testimonial.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content delete-popup">
        <h3>Delete Testimonial</h3>
        <p>Are you sure you want to delete the review from <strong>{testimonial.client_name}</strong>?</p>

        <div className="delete-actions">
          <button className="cancel-btn" onClick={closeDialog}>Cancel</button>
          <button className="delete-btn" onClick={deleteTestimonial}>Delete</button>
        </div>

        <p className="delete-result">{result}</p>
      </div>
    </div>
  );
}