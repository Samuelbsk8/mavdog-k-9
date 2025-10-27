import React from "react";
import { Link } from "react-router-dom";
import '../css/portfolio-preview.css';
import '../css/main.css';

export default function PortfolioPreview() {
  return (
    <section id="pf-intro">
        <img id="logo" src="images/Main logo - no background.png" alt="Main-logo"></img>
        <h1>Portfolio:</h1>
        <div class="columns">
            <img src="images/harra-bark.JPG" alt="harra-bark"></img>
            <img src="images/ronin-sit.JPG" alt="ronin-sit"></img>
            <img src="images/ronin-run.JPG" alt="ronin-run"></img>
            <img src="images/ronin-bite.JPG" alt="ronin-bite"></img>
        </div>
        <Link to="/Portfolio">More Pictures Here!</Link>
    </section>
  );
}