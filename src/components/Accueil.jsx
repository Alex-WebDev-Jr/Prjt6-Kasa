// Accueil.jsx

import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';
import Footer from './Footer';
import logementData from '../data/logements.json';
import '../style/Accueil.scss';
import acceuilImage from '../assets/accueil.png';

function Accueil() {
  return (
    <div>
      {/* En-tête */}
      <Header />
            <main>

              {/* Bannière avec titre spécifique */}
                  <div className="banner-accueil">
                  <Banner 
                          image={acceuilImage} 
                          title="Chez vous, partout et ailleurs" 
                          altText="Bannière de la page d'accueil"
                        />
                  </div>

                  <div className="banner-accueil-mobile">
                    <Banner page="accueil" image={acceuilImage} title={ <div>Chez vous,<br />partout et ailleurs</div> }
                            altText="Bannière de la page d'accueil"
                          />
                    </div>

                {/* Galerie */}
                <Gallery logements={logementData} />


            </main>
      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default Accueil;
