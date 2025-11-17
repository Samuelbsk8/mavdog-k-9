import React, { useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialPopup from "../components/TestimonialPopup";
import AddTestimonial from "../components/AddTestimonial";
import "../css/testimonials.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);

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

  const handleUpdateTestimonials = (newReview) => {
    setTestimonials((prev) => [...prev, newReview]);
  };

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <section id="testimonials-section">
      <h1>Client Testimonials</h1>

      <button className="add-btn" onClick={() => setShowAddDialog(true)}>
        + Add Testimonial
      </button>

      {showAddDialog && (
        <AddTestimonial
          closeDialog={() => setShowAddDialog(false)}
          updateTestimonials={handleUpdateTestimonials}
        />
      )}

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
