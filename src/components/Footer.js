// Footer.jsx

import React from 'react';
import logo from '../assets/LOGOFOOT.png';
import '../style/Footer.scss';

function Footer() {
  return (
    <footer className="footer-component">
      {/* Logo */}
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* Texte du footer */}
      <p className="footer-text">ⓒ 2020 kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
