import React, {useEffect, useState} from 'react';
import './style.css';

//ciclo de vida del componente 



const Button = () => {
  // aqui no deben haber efectos secundarios
  const [count, setCount] = useState(0);
  /**
   * useEffect recibe un cambio cada vez que se actualize una variable
   * en cada render se puede definir cambios
   */
  useEffect(()=>{
    console.log("me ejecuto");
    //ejecuta al finalizar el componente
    return ()=>{
      console.log("adios");
    }
  },[]); 
  return(
    <div>
       
      <button onClick={()=>setCount(count+1)}>Enviar!</button> 
    </div>
  )
}


export default function App() {
  const [showButton, setShowButton] = useState(true)
  return (
    <div>
      <button onClick={()=>setShowButton(false)}>Eliminar</button>
      <div>{showButton && <Button />}</div>
    </div>
  );
}

