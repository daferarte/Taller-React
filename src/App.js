import React, {useEffect, useRef, useState} from 'react';
import './style.css';
import Surprise from './Surprise';

//Splitting

//la mejor manera de usar contenidos dinamicos es importarlos desde react con una funcion que retorne
//una promesa hasta que termina de ejecutarse este codigo

export default function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  
  return (
    <div>
      <button onClick={ (evt) => setShowSurprise(true)}>Mostrar solpresa</button>
      {
        showSurprise && <Surprise/>
      }
    </div>
  );
}

