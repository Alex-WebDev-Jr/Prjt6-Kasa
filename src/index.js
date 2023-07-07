import React from 'react';
import { createRoot } from 'react-dom/client';
import Index from './Index.jsx';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
