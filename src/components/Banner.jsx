// Banner.jsx

import React from 'react';
import '../style/Banner.scss';

function Banner({ title, image, altText }) {
  return (
    <div className="banner">
      <div className="banner-content">
      {title && <h2>{title}</h2>} {/* Utilisation de la prop "title" */}
      </div>
      <div className="banner-overlay"></div> {/* Calque noir */}
      {image && <img className="banner-image" src={image} alt={altText} />} {/* Utilisation de la prop "image" + prop alt */}
    </div>
  );
}


export default Banner;

