import React from "react";
import { Link } from "react-router-dom";
import '../css/portfolio-preview.css';
import '../css/main.css';
import Slideshow from '../components/Slideshow';

export default function PortfolioPreview() {
  return (
    <section id="pf-intro">
        <img id="logo" src="images/Main logo - no background.png" alt="Main-logo"></img>
        <h1>Portfolio:</h1>
        
        <Slideshow />
      
        <Link id="more-pictures" to="/Portfolio">More Pictures Here!</Link>
    </section>
  );
}