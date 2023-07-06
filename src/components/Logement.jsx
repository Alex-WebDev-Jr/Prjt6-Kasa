import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logementsData from '../data/logements.json';

function Logement() {
  const { id } = useParams(); // pour récupér l'ID du logement
  const logement = logementsData.find((item) => item.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!logement) {
    // si le logement n'est pas trouvé
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
      <main>
        <div className="photo-container">
        <img src={logement.pictures[currentImage]} alt={`${currentImage + 1}/${logement.pictures.length}`} />
          <button onClick={previousImage}>&#8592;</button>
          <span>{`${currentImage + 1}/${logement.pictures.length}`}</span>
          <button onClick={nextImage}>&#8594;</button>
        </div>

        <h2>{logement.title}</h2>

        <div className="owner-details">
          <span>{logement.host.name}</span>
          <img src={logement.host.picture} alt="Owner" />
        </div>

        <div className="location">{logement.location}</div>

        <div className="information">
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div className="rating">
            {/* Afficher les étoiles en fonction de logement.rating */}
          </div>
        </div>

        <div className="description">
          <h3>Description</h3>
          <p>{logement.description}</p>
        </div>

        <div className="equipements">
          <h3>Equipements</h3>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Logement;
