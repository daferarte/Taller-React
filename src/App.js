import React from 'react';
import './style.css';


const Saludo = () => {
  const nombre = "Daniel";
  const idioma = "en";

  return (
    <div>
      {
        idioma === "es" ? <p>Hola</p> : <p>Hello</p>
      }
      
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>
        {' '}
        <Saludo />
      </h1>
    </div>
  );
}
