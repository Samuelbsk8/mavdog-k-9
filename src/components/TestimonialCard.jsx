import React from "react";
import "../css/testimonials.css";

const API = process.env.REACT_APP_API_URL || "https://mavdog-server-testimonials.onrender.com";

export default function TestimonialCard({ item, onClick }) {
  const totalStars = 5;
  const filled = item.stars || 0;
  const stars = Array.from({length: totalStars}, (_, i) => i < filled);

  const imgSrc = item.img_name
    ? (item.img_name.startsWith("http") ? item.img_name : `${API}/${item.img_name}`)
    : null;

  return (
    <div className="testimonial-card" onClick={onClick}>
      {imgSrc ? <img src={imgSrc} alt={item.dog_name || "Dog"} /> : <div className="no-img">No image</div>}
      <h2>{item.client_name} & {item.dog_name}</h2>
      <p>Training Type: {item.training_type}</p>
      <p className="stars">{stars.map((s,i)=>(<span key={i}>{s ? "★":"☆"}</span>))}</p>
      <p className="review">{item.review}</p>
    </div>
  );
}