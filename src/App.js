import React, {useState} from 'react';
import './style.css';

//formularios

//Enviando formularios

// usar JSONPlaceholder



//Formulario
const Form = () =>{
  //useState se usa para optener el valor de las variables
  let [title,setTitle] = useState("");
  let [body,setBody] = useState("");

  const sendForm = (ev)=>{
    ev.preventDefault() // previene el cargue tradicional del formulario
    /**
     * fake api de JSONPlaceholder para similar envio por ajax
     */
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json()) //respuesta
      .then((json) => console.log(json));
  }

  return (
    // evento onsubmit para enviar el formulario se envia el evento del formulario
    <form onSubmit={(ev)=> sendForm(ev)}> 
      <div>
        <label htmlFor="title">Titulo</label>
        <input type='text' id='title' onChange={ (evt)=> setTitle(evt.target.value)}></input>
      </div>
      <div>
        <label htmlFor="body">Publicacion</label>
        <textarea id='body' onChange={ (evt)=> setBody(evt.target.value)}></textarea>
      </div>
      {/* no romper html creando funciones innecesarios html ya las hace */}
      {/* <input onClick={()=>{ /*enviar formulario }} />  */}
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

