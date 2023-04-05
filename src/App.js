import React, {useEffect, useRef, useState} from 'react';
import './style.css';

//formularios

//Manipulacion del DOM directamente

// usar JSONPlaceholder



//Formulario
const Form = ({showed}) =>{
  //useState se usa para optener el valor de las variables
  let [title,setTitle] = useState("");
  let [body,setBody] = useState("");

  const firstInput = useRef(); //recibe el primer objeto del DOM para asignarlo

  useEffect(()=>{
    //actualiar el DOM
    // console.log(firstInput); //muestra el elemento que se ha guardado
    firstInput.current.focus();
  },[showed])

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
      .then((json) => 
      {
        setTitle("");
        setBody("");
        console.log(json);
      });
  }

  return (
    // evento onsubmit para enviar el formulario se envia el evento del formulario
    <form onSubmit={(ev)=> sendForm(ev)}> 
      <div>
        <label htmlFor="title">Titulo</label>
        <input type='text' value={title} id='title' onChange={ (evt)=> setTitle(evt.target.value)} ref={firstInput}></input>
      </div>
      <div>
        <label htmlFor="body">Publicacion</label>
        <textarea id='body' value={body} onChange={ (evt)=> setBody(evt.target.value)}></textarea>
      </div>
      {/* no romper html creando funciones innecesarios html ya las hace */}
      {/* <input onClick={()=>{ /*enviar formulario }} />  */}
      <input type='submit' value="enviar" />
    </form>
  )
}

/**
 * Metodo para mostrar el formulario
 * @returns retorna el formulario
 */
const Accordion = () =>{
  const [show,setShow] = useState(false);
  return (
    <div>
      {/* muestra el formulario */}
      <button onClick={ ()=>setShow(true)}>Mostrar form</button> 
      {show && <Form showed={show} />}
    </div>
  )
}


export default function App() {
  return (
    <div>
      
      <Accordion />
    </div>
  );
}

