import React from 'react';
import './style.css';
import Button from './Button';

// react context
//Prop-drilling

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
  
  return (
    <div>
      {/* con el provider se pasa el contexto que se requiere */}
      <ThemeContext.Provider value={themes.dark}> 
        <Button/>
      </ThemeContext.Provider>
      
    </div>
  );
}

