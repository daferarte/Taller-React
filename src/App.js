import React, { useState } from 'react';
import './style.css';
import Button from './Button';

// react context
//Actualizar el contexto

const themes ={
  'dark':{
    backgroundColor: 'black',
    color: 'white'
  },
  'light':{
    backgroundColor: 'white',
    color: 'black'
  }
}
export const ThemeContext = React.createContext();


export default function App() {
  
  //use state para cambiar el componente
  const [theme, setTheme ] = useState(themes.dark);
  return (
    <div>
      {/* con el provider se pasa el contexto que se requiere */}
      <ThemeContext.Provider value={theme}> 
        <Button/>
        <button onClick={()=>setTheme(themes.light)}>Modo Claro</button>
        <button onClick={()=>setTheme(themes.dark)}>Modo Oscuro</button>
      </ThemeContext.Provider>
      
    </div>
  );
}

