import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import About from './pages/About';
import NotFoundPage from './pages/NotFound';
import Logement from './pages/Logement';
import './style/Global.scss';

function NotFound() {
  return <Navigate to="/not-found" replace />;
}

function Index() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/not-found" element={<NotFoundPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Index;