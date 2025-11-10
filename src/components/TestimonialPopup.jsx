import React from "react";
import "../css/TestimonialPopup.css";

export default function TestimonialPopup({ testimonial, onClose }) {
  if (!testimonial) return null;

  const totalStars = 5;
  const filledStars = testimonial.stars || 0;
  const starsArray = Array.from({ length: totalStars }, (_, i) => i < filledStars);
  const imgSrc = testimonial.img_name.startsWith('/')
    ? testimonial.img_name
    : `${process.env.PUBLIC_URL}/${testimonial.img_name}`;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="popup-header">
          <img src={imgSrc} alt={testimonial.dog_name || "Dog"} className="popup-image" />
          <h2>{testimonial.client_name} & {testimonial.dog_name}</h2>
          <p className="popup-stars">
            {starsArray.map((filled, i) => (
              <span key={i}>{filled ? "★" : "☆"}</span>
            ))}
          </p>
        </div>

        <div className="popup-body">
          <p><strong>Training Type:</strong> {testimonial.training_type}</p>
          <p className="popup-review">“{testimonial.review}”</p>
        </div>
      </div>
    </div>
  );
}
