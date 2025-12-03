import React, { useState } from "react";
import "../css/DeleteTestimonial.css";

const API =
  process.env.REACT_APP_API_URL ||
  "https://mavdog-server-testimonials.onrender.com";

export default function DeleteTestimonial({
  testimonial,
  closeDialog,
  updateTestimonials,
}) {
  const [result, setResult] = useState("");

  const deleteReview = async () => {
    const res = await fetch(`${API}/api/reviews/${testimonial._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setResult("Deleted successfully");
      updateTestimonials(testimonial._id);
      closeDialog();
    } else {
      setResult("Delete failed");
    }
  };

  return (
    <div className="deleteTestimonial_modal-bg">
      <div className="deleteTestimonial_modal">
        <h2>Delete Testimonial</h2>

        <p>Are you sure you want to delete the testimonial from:</p>
        <h3>{testimonial.name}</h3>

        <div className="deleteTestimonial_buttons">
          <button onClick={closeDialog} className="deleteTestimonial_cancel">
            Cancel
          </button>

          <button onClick={deleteReview} className="deleteTestimonial_delete">
            Delete
          </button>
        </div>

        <p className="deleteTestimonial_result">{result}</p>
      </div>
    </div>
  );
}
