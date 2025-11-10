import React, { useState } from "react";
import testimonials from "../testimonials.json";
import "../css/testimonials.css";
import TestimonialPopup from "./TestimonialPopup";

export default function TestimonialCard() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  if (!testimonials || !Array.isArray(testimonials)) return null;

  return (
    <section id="testimonials-section">
      <h1>Client Testimonials</h1>
      <div id="testimonials-container" className="columns">
        {testimonials.map((item, index) => {
          if (!item) return null;

          const totalStars = 5;
          const filledStars = item.stars || 0;
          const starsArray = Array.from({ length: totalStars }, (_, i) => i < filledStars);
          const imgSrc = item.img_name.startsWith('/')
            ? item.img_name
            : `${process.env.PUBLIC_URL}/${item.img_name}`;

          return (
            <div
              key={item._id || index}
              className="testimonial-card"
              onClick={() => setSelectedTestimonial(item)}
            >
              <img src={imgSrc} alt={item.dog_name || 'Dog'} />
              <h2>{item.client_name} & {item.dog_name}</h2>
              <p>Training Type: {item.training_type}</p>
              <p className="stars">
                {starsArray.map((filled, i) => (
                  <span key={i}>{filled ? "★" : "☆"}</span>
                ))}
              </p>
              <p className="review">{item.review}</p>
            </div>
          );
        })}
      </div>

      {selectedTestimonial && (
        <TestimonialPopup
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </section>
  );
}
