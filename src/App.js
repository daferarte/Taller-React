import React, {Suspense, useEffect, useRef, useState} from 'react';
import './style.css';
// import Surprise from './Surprise'; //cargue nativo de los import

//React lazy y suspense

// para utilizar el lazy se realiza lo siguiente

const Surprise = React.lazy(()=>import('./Surprise')); //carga el componente ondemand


export default function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  
  return (
    <div>
      <Suspense fallback={<p>Cargando ...</p>}>
      <button onClick={ (evt) => setShowSurprise(true)}>Mostrar solpresa</button>
      {
        // Suspense // es un componente que permite esperar la carga de un componente
        // todos los componentes en lazy se deben agregar en un suspense y el fallback sirve para 
        // mostrar mensaje de cargando
        // showSurprise && <Suspense fallback={<p>Cargando ...</p>}> <Surprise/></Suspense>
        //tambien el suspense se puede agregar en todo el metodo
        showSurprise && <Surprise/>
      }
      </Suspense>
    </div>
  );
}

