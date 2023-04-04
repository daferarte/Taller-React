import React, { StrictMode, Component } from 'react'; //cada componente que se usa en react debe importar la libreria react
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
