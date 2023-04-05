# Taller-React

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-zjxmma)

# componentes

En una aplicación de React, organizamos nuestro código y la funcionalidad en componentes. Conceptualmente, puedes pensar en los componentes como piezas de lego, que juntas forman piezas más complejas, los componentes son las piezas de construcción de una aplicación basada en React.

De acuerdo a la documentación de React, un componente es como una función de JavaScript que recibe información y entrega una respuesta, esta respuesta son los elementos de React que deberán aparecer en la interfaz.

Una interfaz de React se compone de elementos de React que representan los elementos del DOM, como <div>, o <button>, además de elementos de React que vienen de un componente personalizado como <MiBoton>.

Estos componentes encapsulan toda la funcionalidad de un elemento de la interfaz, en un mismo lugar. Es en el componente donde se define qué se va a mostrar, qué datos recibimos, qué datos modificamos y cómo esos datos cambian la interfaz.

Esta arquitectura orientada a componentes nos ayuda a organizar y separar la complejidad de nuestra aplicación en elementos sencillos que cumplen tareas simples e independientes de los demás. Un formulario, por ejemplo, puede estar compuesto de distintos componentes como un botón, algunos controles de entrada de texto, selectores, un control de calendario, etc.

A través de esta arquitectura, aplicamos el principio de “divide y vencerás” sobre nuestra interfaz gráfica, en lugar de ver la interfaz como una gran base de código en constante actualización, vemos la interfaz como una colección de elementos que se ocupan de tareas sencillas y que, en conjunto, forman la interfaz completa.

Los componentes más complejos como un calendario, un slider, un formulario, etc. Se componen de pequeños componentes de tareas específicas, más adelante hablaremos de forma en como podemos separar nuestros componentes para hacerlos más simples y reutilizables.

En React, un componente se puede definir con una función, a éstos los llamamos componentes funcionales, y con una clase, a éstos los llamamos componentes de clase. Sin importar qué tipo de componente escribas, éstos reciben información del exterior y retornan un grupo de elementos de React que después se verán en la pantalla.

# Props

Como menciona la documentación de React:

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan datos de entrada (llamados props) y returnan elementos de React que describen lo que debería aparecer en la pantalla.

Las props son la colección de datos que un componente recibe del contenedor padre, y que pueden usarse para definir los elementos de React que retornará el componente.

En términos prácticos, si un componente necesita recibir información para funcionar, la recibe vía props.

En términos técnicos, las props tienen ciertas características:

Son inmutables, que es el adjetivo para lo que no se puede modificar o cambiar. Una prop no se modifica.
Pueden tener un valor por defecto
Pueden marcarse como obligatorias, cuando un componenente no puede funcionar sin recibir una prop.
En JSX, las props se ven como los atributos de los elementos HTML:

<Btn value=”Enviar” />
Estas props pueden recibir un string o el resultado de una expresión de JavaScript, usando la sintaxis de llaves:

<Saludo value={` Hola ${nombre} `} />

En componentes funcionales, las props se reciben como argumentos de la función. En clases se pueden leer vía la propiedad props del objeto:

const Btn = (props)=>{ return null; }

class Btn extends React.Component{
  render(){ console.log(this.props); return null; }
}

# Efectos secundarios

En programación, llamamos efectos secundarios a las modificaciones que alteran el estado de nuestro programa. Vamos a verlo en términos prácticos comparando dos funciones:

(x,y)=>  x + y 

nombre = “”;
(value)=> nombre = value;

Decimos que la primera función no produce efectos secundarios, porque la ejecución de la misma no altera nada fuera del alcance de esta función, podemos ejecutar esta función cuantas veces queramos, y nada cambiará.

Por otro lado, la segunda función cambia una variable fuera de la ejecución de la función, alterando el estado de la app. Este es un efecto secundario.

Cuando hablamos de React, si el componente ejecuta una operación que altera el estado global de la app, estaríamos produciendo un efecto secundario, en general, un componente debe hacer operaciones que alteren al componente mismo, y no más. Por supuesto que hay muchas excepciones, sin embargo, hay que tener en cuenta que el código que no produce efectos secundarios es menos impredecible y más fácil de debuggear.

Algunos ejemplos de efectos secundarios en un componente pueden ser, realizar peticiones a un servidor con AJAX, alterar el DOM manualmente, conectarse a una websocket, etc.

En un componente funcional, estas operaciones no se pueden ejecutar, ya que las funciones de un componente, no producen efectos secundarios.

Para poder ejecutar operaciones que produzcan efectos secundarios, podemos usar el hook useEffect.

useEffect nos permite enviar una función que se ejecutará luego del render de una función, esta función puede producir efectos secundarios, de ahí el nombre del hook useEffect.

En términos prácticos, useEffect es el lugar perfecto para:

Ejecutar código como parte del ciclo de vida del componente
Hacer peticiones AJAX
Actualizar el DOM directamente, por ejemplo para reproducir un vídeo
Logging de cambios
useEffect recibe como segundo argumento después de la primer función un arreglo. En este arreglo puedes pasar variables que se usarán para determinar si el efecto debe ejecutarse o no. En la documentación de React podemos ver un muy buen ejemplo:

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]); // Solo se ejecuta si count cambió entre un render y otro

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
Cuando pasamos un arreglo vacío, useEffect sólo se ejecutará una vez luego del primer render.

Por último, si una función se retorna del efecto, ésta se ejecutará luego del último render una vez que el componente desaparezca de la interfaz.
