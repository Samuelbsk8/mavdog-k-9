import React from "react";
import "../css/testimonialPopup.css";

export default function TestimonialPopup({ testimonial, onClose, onEdit, onDelete }) {
  if (!testimonial) return null;

  const getFullImageUrl = (img) => {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `${process.env.REACT_APP_API_URL}/${img}`;
  };

  const imgSrc = getFullImageUrl(testimonial.img_name);

  const totalStars = 5;
  const filledStars = testimonial.stars || 0;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="popup-header">
          <img src={imgSrc} alt={testimonial.dog_name || "Dog"} className="popup-image" />
          <h2>{testimonial.client_name} & {testimonial.dog_name}</h2>

          <p className="popup-stars">
            {[...Array(totalStars)].map((_, i) => (
              <span key={i}>{i < filledStars ? "★" : "☆"}</span>
            ))}
          </p>
        </div>

        <div className="popup-body">
          <p><strong>Training Type:</strong> {testimonial.training_type}</p>
          <p className="popup-review">“{testimonial.review}”</p>

          <div className="popup-actions">
            <button className="edit-btn" onClick={() => onEdit(testimonial)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(testimonial)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
