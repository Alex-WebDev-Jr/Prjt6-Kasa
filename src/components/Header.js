// Header.jsx

import React from 'react';
import logo from '../assets/LOGO.png';
import '../style/Header.scss';

function Header() {
  const pathname = window.location.pathname;

  return (
    <header className="header-header">
      {/* Logo */}
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      {/* Navigation */}
      <nav className="header-navigation">
        {/* Lien vers l'accueil */}
        <a href="/" className={pathname === '/' ? 'active' : ''}>
          Accueil
        </a>
        {/* Lien vers la page "A Propos" */}
        <a href="/about" className={pathname === '/about' ? 'active' : ''}>
          A Propos
        </a>
      </nav>
    </header>
  );
}

export default Header;
