import React, { useState } from "react";
import "../css/DeleteTestimonial.css";

export default function DeleteTestimonial({ testimonial, closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");

  const deleteReview = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews/${testimonial._id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        updateTestimonials(testimonial._id);
        closeDialog();
      } else {
        setResult("Failed to delete testimonial");
      }
    } catch {
      setResult("Network error");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Delete {testimonial.client_name} & {testimonial.dog_name}?</h3>
        <div className="form-buttons">
          <button onClick={closeDialog}>Cancel</button>
          <button onClick={deleteReview} className="delete-btn">Delete</button>
        </div>
        <p>{result}</p>
      </div>
    </div>
  );
}
