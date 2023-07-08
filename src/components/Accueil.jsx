import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logementData from '../data/logements.json';
import '../style/Accueil.scss';



function Accueil() {
  return (
    <div>
      <Header />
      <main>
      <div className="banner">
  <div className="text-container">
    <h2>Chez vous, partout et ailleurs</h2>
  </div>
</div>


        <div className="gallery">
        {logementData.map((logement) => (

<Link to={`/logement/${logement.id}`} key={logement.id} className="gallery-item">
  <div className="gallery-item floating-image">
    <h3>{logement.title}</h3>
    <img src={logement.cover} alt={logement.title}/>
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