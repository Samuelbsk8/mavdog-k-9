import React from "react";
import "../css/deleteTestimonial.css";

export default function DeleteTestimonial({ testimonial, closeDialog, confirmDelete }) {
  return (
    <div className="delete-overlay">
      <div className="delete-box">
        <h2>Delete Testimonial?</h2>

        <p>
          Are you sure you want to delete this testimonial from{" "}
          <strong>{testimonial.name}</strong>?
        </p>

        <div className="delete-btn-row">
          <button className="cancel-btn" onClick={closeDialog}>
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={() => {
              confirmDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
