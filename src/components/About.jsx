// About.jsx

import Header from './Header';
import Banner from './Banner';

import Collapse from './Collapse';

import Footer from './Footer';


import '../style/About.scss';
import aboutImage from '../assets/about.png';


function About() {
  



  return (
    <div className="container">
      {/* En-tête */}
      <Header className="header-about"/>
      <main>
        
        {/* Bannière avec titre spécifique */}
        <div>
          <Banner image={aboutImage} altText="Bannière de la page À propos" />
        </div>
        
        {/* Collapse /////////////////// */}
        <div className="collapse-wrapper">
        {/* Collapse 1 */}
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />

        {/* Collapse 2 */}
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        {/* Collapse 3 */}
        <Collapse
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        {/* Collapse 4 */}
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
        </div>
       </main>
      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default About;
