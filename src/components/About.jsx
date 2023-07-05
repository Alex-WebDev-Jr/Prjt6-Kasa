import React from 'react';
import Header from './Header';
import Footer from './Footer';
import aboutImage from '../assets/about.png';

function About() {
  return (
    <div>
      <Header />
      <main>
      <img src={aboutImage} alt="À Propos" />
      </main>
      <Footer />
    </div>
  );
}

export default About;