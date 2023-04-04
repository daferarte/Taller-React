import React from 'react';
import './style.css';

function SaludarEnIdiomas({idioma}){
  if(idioma === "es") {
    return <span>Hola</span>;
  }else{
    return <span>Hello</span>;
  }
}

const Saludo = () => {
  const nombre = "Daniel";
  return <p><SaludarEnIdiomas idioma={"en"}/> { `${nombre}` } </p>;
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
