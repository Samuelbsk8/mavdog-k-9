import React, { useState } from "react";

export default function EditTestimonial({ testimonial, closeDialog, updateTestimonials }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState(testimonial.img_name ? `https://mavdog-server-testimonials.onrender.com/${testimonial.img_name}` : "");

  const uploadImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("... sending");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(`https://mavdog-server-testimonials.onrender.com/api/reviews/${testimonial._id}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        const updatedReview = await res.json();
        setResult("Testimonial updated successfully");
        e.target.reset();
        closeDialog();
        updateTestimonials(updatedReview);
      } else {
        setResult("Error editing testimonial");
      }
    } catch (err) {
      console.error(err);
      setResult("Network or server error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="edit-testimonial-form">
      <p>
        <label>Client Name:</label>
        <input type="text" name="client_name" defaultValue={testimonial.client_name} required />
      </p>
      <p>
        <label>Dog Name:</label>
        <input type="text" name="dog_name" defaultValue={testimonial.dog_name} required />
      </p>
      <p>
        <label>Stars (1–5):</label>
        <input type="number" name="stars" min="1" max="5" defaultValue={testimonial.stars} required />
      </p>
      <p>
        <label>Training Type:</label>
        <input type="text" name="training_type" defaultValue={testimonial.training_type} required />
      </p>
      <p>
        <label>Review:</label>
        <textarea name="review" defaultValue={testimonial.review} required></textarea>
      </p>

      <section>
        <div>
          {preview && <img id="img-prev" src={preview} alt="preview" />}
        </div>
        <p>
          <label>Upload Image:</label>
          <input type="file" name="img" accept="image/*" onChange={uploadImage} />
        </p>
      </section>

      <p>
        <button type="submit">Submit</button>
      </p>
      <p>{result}</p>
    </form>
  );
}
