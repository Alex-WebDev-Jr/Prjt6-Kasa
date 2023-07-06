import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import accueilImage from '../assets/accueil.png'; 
import logementData from '../data/logements.json';



function Accueil() {
  return (
    <div>
      <Header />
      <main>
        <h2>Chez vous, partout et ailleurs</h2>
        <img src={accueilImage} alt="Chez vous, partout et ailleurs" />

        <div className="gallery">
        {logementData.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <div className="gallery-item">
              
              <h3>{logement.title}</h3>
              <img src={logement.cover} alt={logement.title} />
            </div>
          </Link>
        ))}
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;