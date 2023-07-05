import React from 'react';
import logo from '../assets/LOGOFOOT.png';

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <p>ⓒ 2020 kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
