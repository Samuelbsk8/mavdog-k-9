import React from "react";
import "../css/testimonialCard.css";

export default function TestimonialCard({ item, onClick }) {
  return (
    <div className="testimonial-card" onClick={onClick}>
      <h4>{item.client_name} & {item.dog_name}</h4>
      <p>{item.review.substring(0, 60)}{item.review.length > 60 ? "..." : ""}</p>
    </div>
  );
}
