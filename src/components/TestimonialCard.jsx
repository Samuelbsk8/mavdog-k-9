import React from "react";
import "../css/testimonials.css";

export default function TestimonialCard({ item, onClick }) {
  const starsArray = Array.from({ length: 5 }, (_, i) => i < item.stars);

  const imgSrc = item.img_name.startsWith("/")
    ? item.img_name
    : `${process.env.REACT_APP_API_URL || "https://mavdog-server-testimonials.onrender.com"}/${item.img_name}`;

  return (
    <div className="testimonial-card" onClick={onClick}>
      {imgSrc && <img src={imgSrc} alt={item.dog_name} className="testimonial-image" />}
      <div className="testimonial-content">
        <h3>{item.client_name} & {item.dog_name}</h3>
        <p className="testimonial-stars">
          {starsArray.map((filled, i) => (
            <span key={i}>{filled ? "★" : "☆"}</span>
          ))}
        </p>
        <p className="testimonial-training"><strong>Training:</strong> {item.training_type}</p>
        <p className="testimonial-review">“{item.review}”</p>
      </div>
    </div>
  );
}
