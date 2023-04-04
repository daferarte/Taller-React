import React from 'react';
import './style.css';

const nombres = [
  'daniel',
  'Eduardo',
  'Marines',
  'Cody'
]

function getNombres(){
  const elementosLista = [];
  for(var i =0; i< nombres.length;i++){
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  console.log(elementosLista); //arreglo objetos
  return elementosLista;
}

const Nombres = () => {
  return <ul>{ getNombres() }</ul> //imprime la lista jsx
}

export default function App() {
  return (
    <div>
      <Nombres />
    </div>
  );
}
