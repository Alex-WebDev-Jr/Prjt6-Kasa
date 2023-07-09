// Banner.jsx

import React from 'react';
import '../style/Banner.scss';

function Banner({ page, title, image, altText }) {
  const bannerClass = `banner ${page}`;


  return (
    <div className={bannerClass}>
      <div className="banner-content">
      {title && <h2>{title}</h2>} {/* Utilisation de la prop "title" */}
      </div>
      <div className="banner-overlay"></div> {/* Calque noir */}
      {image && <img className="banner-image" src={image} alt={altText} />} {/* Utilisation de la prop "image" + prop alt */}
    </div>
  );
}


export default Banner;

