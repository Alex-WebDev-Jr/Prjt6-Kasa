import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
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
    return <Navigate to="/not-found" replace />;
  }

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? logement.pictures.length - 1 : prevImage - 1));
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % logement.pictures.length);
  };

  const showNavigationButtons = logement.pictures.length > 1;

  return (
    <div>
      <Header />

      <main className="logement-container">
        <div className="photo-container">
          <div className="carousel">
            {/* Image du logement */}
            <img className="carousel-image" src={logement.pictures[currentImage]} alt={currentImage.toString()} />

            {/* Navigation du carrousel */}
            {showNavigationButtons && (
              <div className="carousel-navigation">
                <button onClick={previousImage} className="carousel-button">
                  <img src={previousIcon} alt="Previous" />
                </button>
                <button onClick={nextImage} className="carousel-button">
                  <img src={nextIcon} alt="Next" />
                </button>
              </div>
            )}

            {/* Indicateur du carrousel */}
            <div className="carousel-indicator">{`${currentImage + 1}/${logement.pictures.length}`}</div>
          </div>
        </div>

        {/* Information Logement */}
        <div className="logement-desktop">
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
  {logement.tags.length > 0 && (
    <>
      <ul>
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </>
  )}

            {/* Évaluation */}
            <div className="rating">
              {Array.from(Array(5), (e, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className={i < logement.rating ? '' : 'inactive'} />
              ))}
            </div>
          </div>
        </div>

        {/* Information MOBILE Logement */}
        <div className="logement-mobile">
          {/* Titre du logement */}
          <h2>{logement.title}</h2>

          {/* Emplacement du logement */}
          <div className="location">{logement.location}</div>

          {/* Informations supplémentaires */}
          <ul className="tag-mobile">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>

          <div className="rate-name-mobile">
            {/* Évaluation */}
            <div className="rating">
              {Array.from(Array(5), (e, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={i < logement.rating ? '' : 'inactive'}
                />
              ))}
            </div>

            {/* Détails du propriétaire */}
            <div className="owner-details">
              <span>{logement.host.name}</span>
              <img src={logement.host.picture} alt="Owner" />
            </div>
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
