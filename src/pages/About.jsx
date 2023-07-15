// About.jsx

import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
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
          <Banner page="about" image={aboutImage} altText="Bannière de la page À propos" />
        </div>
        
        {/* Collapse /////////////////// */}
        <div className="collapse-wrapper">
      
      
           {/* Collapse 1 */}
           <Collapse
            key="collapse1"
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />

          {/* Collapse 2 */}
          <Collapse
            key="collapse2"
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          {/* Collapse 3 */}
          <Collapse
            key="collapse3"
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          {/* Collapse 4 */}
          <Collapse
            key="collapse4"
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
