import React, {useEffect, useRef, useState} from 'react';
import './style.css';
import Surprise from './Surprise';

//Splitting

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

