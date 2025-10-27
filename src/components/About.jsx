import React from "react";
import '../css/about.css';
import '../css/main.css';

export default function AboutSection() {
  return (
    <section id="about" className="columns">
      <div id="about-div">
        <img src="images/Gray logo - no background.png"></img>
        <h3>Our Mission at</h3>
        <h2>MAVDOG K-9 Training</h2>
        <p>At MAVDOG K-9, we are dedicated to providing exceptional dog training for both sport and home environments. Our team focuses on creating strong bonds between dogs and their owners while promoting safety, discipline, and positive reinforcement. Each program is tailored to fit the unique needs of every dog, ensuring they learn in a supportive and engaging environment. We believe that proper training builds trust, respect, and lasting companionship between pets and their families.</p>
        <p>Our certified trainers work closely with each client to develop a training plan that meets their goals. Whether improving basic obedience, addressing behavioral challenges, or preparing for competitive events, our methods are effective, humane, and focused on long-term success.</p>
        <p>We specialize in customized sessions designed to strengthen the communication between dogs and their handlers. From basic commands to advanced skills, our programs provide the tools needed for well-behaved, confident dogs in any setting.</p>
        <a href="#contact">Contact Us</a>
      </div>
      <img id="harra-laydown" src="images/Harra-laydown.JPG"></img>
    </section>
  )
};
