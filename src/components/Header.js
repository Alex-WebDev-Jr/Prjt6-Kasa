import React from 'react';
import logo from '../assets/LOGO.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/a-propos">A Propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
