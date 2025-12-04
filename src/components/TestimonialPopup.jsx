import React from "react";
import "../css/testimonialPopup.css";
import "../css/Testimonials.css";

export default function TestimonialPopup({ testimonial, onClose, onEdit, onDelete }) {
  if (!testimonial) return null;

  const totalStars = 5;
  const filledStars = testimonial.stars || 0;
  const starsArray = Array.from({ length: totalStars }, (_, i) => i < filledStars);

  const imgSrc = testimonial.img;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="popup-header">
          {imgSrc && <img src={imgSrc} alt={testimonial.dog_name} className="popup-image" />}
          <h2>{testimonial.client_name} & {testimonial.dog_name}</h2>
          <p className="popup-stars">
            {starsArray.map((f, i) => <span key={i}>{f ? "★" : "☆"}</span>)}
          </p>
        </div>

        <div className="popup-body">
          <p><strong>Training Type:</strong> {testimonial.training_type}</p>
          <p className="popup-review">“{testimonial.review}”</p>
          <div className="popup-actions">
            <button className="edit-btn" onClick={onEdit}>Edit</button>
            <button className="delete-btn" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
