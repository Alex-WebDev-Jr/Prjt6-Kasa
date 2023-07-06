import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import About from './components/About';
import NotFound from './components/NotFound';
import Logement from './components/Logement';


function Index() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
  
  export default Index;