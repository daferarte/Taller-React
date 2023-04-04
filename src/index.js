import React, { StrictMode, Component } from 'react'; //cada componente que se usa en react debe importar la libreria react
import { createRoot } from 'react-dom/client';

//import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const App = () => <h1>hola mundo</h1> // componente basico resumido

class App extends Component{ //componente en clase
  
  render(){ //metodo render que retorna el componente
    return <h1>Hola mundo</h1>
  }
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
