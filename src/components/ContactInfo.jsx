import React from "react";
import '../css/contact.css';
import '../css/main.css';

export default function ContactInfo() {
    return (
        <div id="contact-info">
            <h2>Contact Info:</h2>

            <h3><i className="fa-solid fa-phone"></i> MAVDOG K-9 Local:</h3>
            <a href="https://maps.app.goo.gl/J2DF2CKKUSzXoxRC9" target="_blank" rel="noreferrer">
              Columbia, SC 29223
            </a>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105747.08802025024!2d-81.01115184357387!3d34.079856449921124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a587e4f18f03%3A0x2094cbec45a4a4cc!2sColumbia%2C%20SC%2029223!5e0!3m2!1sen!2sus!4v1760663543839!5m2!1sen!2sus" 
                width="300" 
                height="225" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <h3><i className="fa-solid fa-envelope"></i> Phone Number:</h3>
            <a href="#">(555)-555-5555</a>

            <h3><i className="fa-solid fa-house"></i> Email Address:</h3>
            <a href="#">MAVDOG_K-9@email.com</a>
        </div>
    );
}

