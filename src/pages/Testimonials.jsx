import React, { useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialPopup from "../components/TestimonialPopup";
import "../css/testimonials.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    fetch("https://mavdog-server-testimonials.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading testimonials...</p>;
  if (!testimonials.length) return <p>No testimonials found.</p>;

  return (
    <section id="testimonials-section">
      <h1>Client Testimonials</h1>
      <div id="testimonials-container" className="columns">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item._id}
            item={item}
            onClick={() => setSelectedTestimonial(item)}
          />
        ))}
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
