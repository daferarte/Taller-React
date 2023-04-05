import React, {useState} from 'react';
import './style.css';

//formularios

//lectura de datos
// usar JSONPlaceholder

//Formulario
const Form = () =>{
  //useState se usa para optener el valor de las variables
  let [title,setTitle] = useState("");
  let [body,setBody] = useState("");
  return (
    <form>
      <div>
        <label for="title">Titulo</label>
        <input type='text' id='title' onChange={ (evt)=> setTitle(evt.target.value)}></input>
      </div>
      <div>
        <label for="body">Publicacion</label>
        <textarea id='body' onChange={ (evt)=> setBody(evt.target.value)}></textarea>
      </div>
      <input type='submit' value="enviar" />
    </form>
  )
}




export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

