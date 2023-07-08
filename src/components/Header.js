import React from 'react';
import logo from '../assets/LOGO.png';
import '../style/Header.scss';


function Header() {
  const pathname = window.location.pathname;

  return (
    <header className="header-header">
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header-navigation">
        <a href="/" className={pathname === '/' ? 'active' : ''}>
          Accueil
        </a>
        <a href="/about" className={pathname === '/about' ? 'active' : ''}>
          A Propos
        </a>
      </nav>
    </header>
  );
}

export default Header;