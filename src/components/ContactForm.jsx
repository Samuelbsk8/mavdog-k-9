import React, { useState } from "react";
import '../css/contact.css';
import '../css/main.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: ""
  });
  const [result, setResult] = useState("");

  const ACCESS_KEY = "d9e1aa0b-4c78-4f91-b4e7-e1ff65c143bd";

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Please wait...");

    const body = JSON.stringify({
      access_key: ACCESS_KEY,
      ...formData
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body
      });
      const json = await response.json();
      if (response.status === 200) {
        setResult("Form submitted successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setResult(json.message || "Something went wrong!");
        console.log(json);
      }
    } catch (err) {
      console.error(err);
      setResult("Something went wrong!");
    }

    setTimeout(() => setResult(""), 3000);
  };

  return (
    <div id="contact-form">
      <h2>Contact Form:</h2>
      <form id="form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <div id="number-email" className="columns">
          <input type="tel" name="number" placeholder="Phone number" value={formData.number} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required />
        <div id="contact-button">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <div id="result">{result}</div>
    </div>

  );
}
