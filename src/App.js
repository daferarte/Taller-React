import React from 'react';
import './style.css';

const nombres = [
  'daniel',
  'Eduardo',
  'Marines',
  'Cody'
]

const Nombres = () => {
  return <ul>{
    nombres.map( (nombre, index) => <li key={index}>{nombre}</li>) //iteracion de arreglos con map
  }</ul> 
}

export default function App() {
  return (
    <div>
      <Nombres />
    </div>
  );
}
