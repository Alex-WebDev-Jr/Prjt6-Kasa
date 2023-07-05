import React from 'react';
import Header from './Header';
import Footer from './Footer';
import accueilImage from '../assets/accueil.png'; 

function Accueil() {
  return (
    <div>
      <Header />
      <main>
      <h2>Chez vous, partout et ailleurs</h2>
      <img src={accueilImage} alt="Chez vous, partout et ailleurs" />

      </main>
      <Footer />
    </div>
  );
}

export default Accueil;