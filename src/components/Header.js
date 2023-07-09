// Header.jsx

import React from 'react';
import logo from '../assets/LOGO.png';
import '../style/Header.scss';

function Header() {
  function isActive(path) {
    return window.location.pathname === path;
  }
  


  return (
    <header className="header-header">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo Kasa" className="header-logo"/>
      </div>
      {/* Navigation */}
      <nav className="header-navigation">
  {/* Lien vers l'accueil */}
  <a href="/" className={isActive('/') ? 'active' : ''}>
    Accueil
  </a>
  {/* Lien vers la page "A Propos" */}
  <a href="/about" className={isActive('/about') ? 'active' : ''} translate="no" >
    A Propos
  </a>
</nav>

    </header>
  );
}

export default Header;
