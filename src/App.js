import React from 'react';
import './style.css';

//metodo sin desestructuracion
// const Saludar = (props) => {
//   return <p>Hola {props.nombre} </p>
// }

//metodo con desestructuracion
// const Saludar = ({nombre}) => {
//   return <p>Hola {nombre} </p>
// }

//multiples variables
const Saludar = ({nombre, idioma}) => {
  const saludo = idioma === "es" ? "'Hola":"Hello";
  return <p>{saludo} {nombre} </p>
}

/**
 * Saludar.defaultProps
 * sirve para definir valores por defecto en un props 
 * esta definicion se hace despues de definir el props
 */
Saludar.defaultProps = {
  idioma:'en'
}

export default function App() {
  return (
    <div>
      {/* una variable */}
      {/* <Saludar nombre='Daniel' /> */}
      {/* multiples variales */}
      <Saludar nombre='Daniel' idioma='es' />
    </div>
  );
}
