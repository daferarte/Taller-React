import React, {useState} from 'react';
import './style.css';

//contador de clicks en pantalla con state
//recuerda qeu react busca actualizar el codigo necesario

const Button = () => {
  // variable de stado que tiene el valor y la funcion para actualizar
  const [conteo, actConteo] = useState(0); //hook
  return(
    <div>
      <p> Precionado: {conteo}</p>
      {/* boton que llama al state para actualizarse con cada clic */}
      <button onClick={()=> actConteo(conteo+1)}>Clic me!</button> 
    </div>
  )
}


export default function App() {
  return (
    <div>
      <Button />
    </div>
  );
}
