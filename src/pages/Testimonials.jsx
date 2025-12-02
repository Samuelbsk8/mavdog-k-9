import React, { useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialPopup from "../components/TestimonialPopup";
import AddTestimonial from "../components/AddTestimonial";
import EditTestimonial from "../components/EditTestimonial";
import DeleteTestimonial from "../components/DeleteTestimonial";
import "../css/testimonials.css";

const API = process.env.REACT_APP_API_URL || "https://mavdog-server-testimonials.onrender.com";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`${API}/api/reviews`)
      .then((r) => r.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const addHandler = (newReview) =>
    setTestimonials((prev) => [...prev, newReview]);

  const updateHandler = (updated) =>
    setTestimonials((prev) =>
      prev.map((t) => (t._id === updated._id ? updated : t))
    );

  const deleteHandler = (id) =>
    setTestimonials((prev) => prev.filter((t) => t._id !== id));

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <section id="testimonials-section">
      <h1>Client Testimonials</h1>

      <button className="add-btn" onClick={() => setShowAdd(true)}>
        + Add Testimonial
      </button>

      {/* ADD */}
      {showAdd && (
        <AddTestimonial
          closeDialog={() => setShowAdd(false)}
          updateTestimonials={addHandler}
        />
      )}

      {/* EDIT */}
      {editing && (
        <EditTestimonial
          testimonial={editing}
          closeDialog={() => setEditing(null)}
          updateTestimonials={updateHandler}
        />
      )}

      {/* DELETE */}
      {deleting && (
        <DeleteTestimonial
          testimonial={deleting}
          closeDialog={() => setDeleting(null)}
          updateTestimonials={deleteHandler}
        />
      )}

      {/* LIST */}
      <div id="testimonials-container" className="columns">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item._id}
            item={item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {/* POPUP */}
      {selected && (
        <TestimonialPopup
          testimonial={selected}
          onClose={() => setSelected(null)}
          onEdit={() => {
            setEditing(selected);
            setSelected(null);
          }}
          onDelete={() => {
            setDeleting(selected);
            setSelected(null);
          }}
        />
      )}
    </section>
  );
}
