import React from "react";
import '../css/services.css';
import '../css/main.css';

export default function ServicesSection() {
  return (
    <section id="services">
            <h1>Our Services:</h1>
            <div id="s-main-div" class="columns">
                <div id="inner-s-div">
                    <h2>Boarding</h2>
                    <p>Our boarding service provides a safe and comfortable environment for your dog while you are away. We focus on personalized care, ensuring each dog feels secure and happy throughout their stay.</p>
                </div>
                <div id="inner-s-div">
                    <h2>Board & Train</h2>
                    <p>The Board & Train program combines extended training sessions with overnight care. Dogs receive focused instruction daily to improve behavior, obedience, and confidence under expert guidance.</p>
                </div>
                <div id="inner-s-div">
                    <h2>Private Sessions</h2>
                    <p>Private sessions offer one-on-one training tailored to your dog’s specific needs. These lessons provide personalized attention to address behavior issues or teach new skills at a comfortable pace.</p>
                </div>
                <div id="inner-s-div">
                    <h2>Virtual Consultation</h2>
                    <p>Virtual consultations allow dog owners to receive expert guidance from the comfort of their home. Trainers provide advice, techniques, and step-by-step instructions to improve behavior remotely.</p>
                </div>
            </div>
    </section>
  );
}