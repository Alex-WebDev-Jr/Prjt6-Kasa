import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import aboutImage from '../assets/about.png';
import '../style/About.scss';

function About() {
  const [collapses, setCollapses] = useState([
    { id: 1, title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.', isOpen: false },
    { id: 2, title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.', isOpen: false },
    { id: 3, title: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.', isOpen: false },
    { id: 4, title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.', isOpen: false },
  ]);


  const handleCollapseToggle = (id) => {
    setCollapses((prevCollapses) =>
      prevCollapses.map((collapse) =>
        collapse.id === id ? { ...collapse, isOpen: !collapse.isOpen } : collapse
      )
    );
  };

  return (
    <div className="container">
   <div className="header">   
  <Header />
  </div>
  <main className="index">
    <img className="img-about" src={aboutImage} alt="À Propos" />

    {collapses.map((collapse, index) => (
      <div
        className={`collapse ${index === 0 ? 'first-collapse' : ''} ${collapse.isOpen ? 'open' : ''}`}
        key={collapse.id}
      >
        <div className="collapse-title" onClick={() => handleCollapseToggle(collapse.id)}>
          <h3>{collapse.title}</h3>
          <div className="collapse-arrow">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
        {collapse.isOpen && (
          <div className="collapse-content">
          <p className="animated-text">{collapse.content}</p>
        </div>
        
        )}
      </div>
    ))}
  </main>
  <Footer />
</div>

  );
}

export default About;