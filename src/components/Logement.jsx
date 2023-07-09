import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Collapse from './Collapse';
import logementsData from '../data/logements.json';

import nextIcon from '../assets/next.svg';
import previousIcon from '../assets/previous.svg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../style/Logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!logement) {
    return <div>Nous ne trouvons pas votre logement</div>;
  }

  const previousImage = () => {
    setCurrentImage((prevImage) => prevImage === 0 ? logement.pictures.length - 1 : prevImage - 1);
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % logement.pictures.length);
  };

  return (
    <div>
      <Header />


      <main className="logement-container">
  <div className="photo-container">
    <div className="carousel">
      {/* Image du logement */}
      <img className="carousel-image" src={logement.pictures[currentImage]} alt={currentImage.toString()} />

      {/* Navigation du carrousel */}
      <div className="carousel-navigation">
        <button onClick={previousImage} className="carousel-button">
          <img src={previousIcon} alt="Previous" />
        </button>
        <button onClick={nextImage} className="carousel-button">
          <img src={nextIcon} alt="Next" />
        </button>
      </div>

      {/* Indicateur du carrousel */}
      <div className="carousel-indicator">{`${currentImage + 1}/${logement.pictures.length}`}</div>
    </div>
  </div>

  <div className="title-details-container">
  {/* Titre du logement */}
  <h2>{logement.title}</h2>

  {/* Détails du propriétaire */}
  <div className="owner-details">
    <span>{logement.host.name}</span>
    <img src={logement.host.picture} alt="Owner" />
  </div>
</div>


  {/* Emplacement du logement */}
  <div className="location">{logement.location}</div>

  {/* Informations supplémentaires */}
  <div className="information">
    {/* Tags */}
    <ul>
      {logement.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>

    {/* Évaluation */}
    <div className="rating">
  {Array.from(Array(5), (e, i) => (
    <FontAwesomeIcon key={i} icon={faStar} className={i < logement.rating ? '' : 'inactive'} />
  ))}
</div>


  </div>
  <div className="custom-collapses-container">
  {/* Description du logement */}
  <div className="custom-collapse">
    <Collapse title="Description" content={logement.description} />
  </div>

  {/* Équipements du logement */}
  <div className="custom-collapse">
    <Collapse
      title="Équipements"
      content={
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      }
    />
  </div>
</div>

</main>


      <Footer />
     
      </div>
  );
}

export default Logement;
