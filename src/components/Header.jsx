import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import '../css/header.css';
import '../css/main.css';

export default function Header() {
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const hamburger = hamburgerRef.current;

    if (hamburger && nav) {
      hamburger.onclick = () => {
        nav.classList.toggle('show');
      };
    }
  }, []);

  return (
    <header>
      <nav id="header-contact" className="columns">
        <a href="#"><i className="fa-solid fa-phone"></i> (555)-555-5555</a>
        <a href="#"><i className="fa-solid fa-envelope"></i> MAVDOG_K-9@email.com</a>
      </nav>

      <div id="main-header" className="columns">
        <img src={`${process.env.PUBLIC_URL}/images/Gray logo - no background.png`} alt="Logo" />
        <div id="main-header-h">
          <h1 id="header-h1">MAVDOG K-9</h1>
          <h2 id="header-h2">Sport + Home Training</h2>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/Gray logo - no background flipped.png`} alt="Logo flipped" />
      </div>

      <section id="hamburger-menu">
        <button id="hamburger-btn" ref={hamburgerRef}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </section>

      <nav id="main-nav" className="columns" ref={navRef}>
        <Link to="/">Home</Link>
        <HashLink smooth to="/#about">About Us</HashLink>
        <HashLink smooth to="/#services">Services</HashLink>
        <Link to="/Portfolio">Portfolio</Link>
        <HashLink smooth to="#contact">Contact</HashLink>
      </nav>
    </header>
  );
}
