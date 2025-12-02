import React from "react";
import "../css/TestimonialPopup.css";

export default function TestimonialPopup({ testimonial, onClose, onEdit, onDelete }) {
  if (!testimonial) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <img src={testimonial.img} alt="testimonial" className="popup-img" />

        <h2>{testimonial.client_name}</h2>
        <h3>{testimonial.dog_name}</h3>

        <p><strong>Training:</strong> {testimonial.training_type}</p>
        <p><strong>Stars:</strong> {testimonial.stars}</p>
        <p className="review-text">{testimonial.review}</p>

        <div className="popup-actions">
          <button className="edit-btn" onClick={() => onEdit(testimonial)}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => onDelete(testimonial._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
