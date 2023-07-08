// Gallery.jsx

import '../style/Gallery.scss';
import React from 'react';
import { Link } from 'react-router-dom';
function Gallery({ logements }) {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id} className="gallery-item">
          <div className="gallery-item floating-image">
            <h3 className='h3-gallery'>{logement.title}</h3>
            <img src={logement.cover} alt={logement.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
