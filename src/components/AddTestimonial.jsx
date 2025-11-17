import React, { useState } from "react";
import "../css/AddTestimonial.css";

export default function AddTestimonial({ closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");

  const uploadImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("http://localhost:3001/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const newReview = await res.json();
        updateTestimonials(newReview); 
        setResult("Testimonial added successfully!");
        e.target.reset();
        setPreview("");
        closeDialog();
      } else {
        setResult("Error adding testimonial");
      }
    } catch (err) {
      console.error(err);
      setResult("Network or server error");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={closeDialog}
          >
            &times;
          </span>

          <form id="add-testimonial-form" onSubmit={submitForm}>
            <h3>Add New Testimonial</h3>

            <p>
              <label>Client Name:</label>
              <input name="client_name" required minLength={2} />
            </p>

            <p>
              <label>Dog Name:</label>
              <input name="dog_name" required minLength={1} />
            </p>

            <p>
              <label>Stars (1–5):</label>
              <input type="number" name="stars" min="1" max="5" required />
            </p>

            <p>
              <label>Training Type:</label>
              <input name="training_type" required />
            </p>

            <p>
              <label>Review:</label>
              <textarea name="review" required minLength={5}></textarea>
            </p>

            <section className="columns">
              <div>
                {preview && <img src={preview} alt="preview" id="img-prev" />}
              </div>

              <p>
                <label>Upload Image:</label>
                <input
                  type="file"
                  name="img" 
                  accept="image/*"
                  onChange={uploadImage}
                />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>

            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
