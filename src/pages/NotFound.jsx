// NotFound.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../style/NotFound.scss';

function NotFoundPage() { 
  return (
    <div className="not-found-container">
      <div className="header-container">
        <Header />
      </div>
      <main>
        <div className="not-found">
          <h1 className='H1fail'>404</h1>
          <p className='fail'>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/" className="home-link">Retourner sur la page d'accueil</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage; 
