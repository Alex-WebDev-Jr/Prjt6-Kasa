import React from 'react';
import Header from './Header';
import Footer from './Footer';
import animatedImage from '../assets/404.jpg';
function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <h1>Erreur 404 - Page non trouvée</h1>
        <img src={animatedImage} alt="Error" />
        <p>Désolé, la page que vous recherchez est introuvable.</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
