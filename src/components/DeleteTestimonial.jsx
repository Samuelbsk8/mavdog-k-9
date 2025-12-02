import React, { useState } from "react";
import "../css/DeleteTestimonials.css";

export default function DeleteTestimonial({ testimonial, closeDialog, deleteHandler }) {
  const [result, setResult] = useState("");

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://mavdog-server-testimonials.onrender.com/api/reviews/${testimonial._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        deleteHandler(testimonial._id);
      } else {
        setResult("Failed to delete testimonial");
      }
    } catch (err) {
      console.error(err);
      setResult("Network error");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content delete-popup">
        <h3>Are you sure you want to delete {testimonial.client_name} & {testimonial.dog_name}?</h3>
        <div className="delete-buttons">
          <button onClick={closeDialog} className="cancel-btn">No</button>
          <button onClick={handleDelete} className="confirm-btn">Yes</button>
        </div>
        {result && <p className="delete-status">{result}</p>}
      </div>
    </div>
  );
}
