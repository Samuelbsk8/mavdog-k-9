import React from "react";
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import '../css/footer.css';
import '../css/main.css';

export default function Footer() {
  return (
    <footer className="columns">
      <Link to="/">Home</Link>
      <HashLink smooth to="/#about">About Us</HashLink>
      <HashLink smooth to="/#services">Services</HashLink>
      <Link to="/Portfolio">Portfolio</Link>
      <HashLink smooth to="/#contact">Contact</HashLink>
    </footer>
  );
}
