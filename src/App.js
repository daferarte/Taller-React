import React, {useEffect, useState} from 'react';
import './style.css';

//eventos

const Saludo = () =>{
  const [name, setName]=useState("")
  return(
    <div>
      {/* syntheticEvent */}
      {/* <input type='text' onChange={(ev)=>console.log(ev)}></input> */}
      {/* enparejamiento de una funcion cuando se ejecuta con un evento */}
      <input type='text' onChange={(ev)=>setName(ev.target.value)}></input> 
      <p>hola {name}</p>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <Saludo />
    </div>
  );
}

