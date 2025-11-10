import React, { useEffect } from "react";
import '../css/portfolio.css';
import '../css/main.css';

export default function PortfolioGallery({ images = [] }) {
  useEffect(() => {
    const imgs = document.querySelectorAll('#pf-content img');
    imgs.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        window.location.href = 'Testimonials';
      });
    });

    return () => {
      imgs.forEach(img => {
        img.replaceWith(img.cloneNode(true));
      });
    };
  }, []);

  return (
    <section id="pf-main-content">
      <div id="pf-cover-img">
        <h1>Portfolio</h1>
      </div>

      <div id="pf-socials">
        <h2>Socials:</h2>
        <div>
          <a href="https://www.facebook.com/share/16R22v2rrG/?mibextid=wwXIfr"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/jbrit0013?igsh=Z2J6YzlneWI5YnVs"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/jason-britton-8988a113/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>

      <div id="pf-content">
        <img src={`${process.env.PUBLIC_URL}/images/IMG_3474.jpg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/ronin-bite.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/5N1A3386.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/Harra-laydown.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/harra-bark.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/cover.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/5N1A3416.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/ronin-sit.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/ronin-run.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/ronin-walk.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/IMG_0914.jpg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/IMG_1415.jpg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/5N1A3441.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/IMG_1928.jpg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/IMG_1929.jpg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/IMG_2055.jpg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/IMG_1967.JPG`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/images/FullSizeRender.jpg`} alt="" />
      </div>
    </section>
  );
}
