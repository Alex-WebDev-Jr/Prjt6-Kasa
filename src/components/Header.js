import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../style/Header.scss';


function Header() {
  return (
    <header className="header-header">
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header-navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;