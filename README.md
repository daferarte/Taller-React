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

# Cómo funciona JSX

JSX es una extensión de JavaScript, que busca traer la sintaxis de los lenguajes tipo HTML/XML para definir el árbol de elementos de nuestros componentes de React.

La sintaxis de JSX por sí misma no puede ser leída o ejecutada por un navegador, para hacerlo, es necesario convertir la sintaxis de JSX en instrucciones válidas del lenguaje.

Para que este proceso pase se requiere de un pragma. En programación “pragma” hace referencia a una directiva para el compilador, en otras palabras, un pragma le da instrucciones al compilador para el proceso de compilación.

Usamos un pragma en JSX para indicarle al compilador, cómo debe traducir las instrucciones de JSX a JavaScript válido. El pragma es necesario ya que aunque JSX es muy popular en el uso de React, no es el único lugar donde podemos usar JSX.

En un proyecto de React preconfigurado como el que obtenemos de usar create-react-app, el pragma de JSX es React.createElement, esta es la función que usaremos para convertir la sintaxis de JSX en JavaScript válido:

JSX	
<div> < Button /> < /div >	

JavaScript
React.createElement("div",{}, React.createElement(Button) )

Si quieres usar JSX en otro contexto, con otro framework como Vue, sólo necesitas cambiar el pragma, para que JSX use la función necesaria dependiendo de la librería que estés usando.

Si regresamos al ejemplo anterior, podemos aprender algunas cosas importantes acerca de cómo usar JSX en React:

JSX	
<div> < Button /> < /div >	

JavaScript
React.createElement("div",{}, React.createElement(Button) )

Como puedes ver, el resultado final hace uso de las variables React y Button, es por eso que, aunque no uses directamente React, debes importarlo en cualquier archivo que usa JSX:

import React from ‘react’;
<div>
   <Button />
</div>
Lo mismo pasa para cualquier componente que hayas creado, en este ejemplo Button.

JSX evaluará tus etiquetas y dependiendo de la primer letra de la declaración, sabrá si estás refiriendo a un componente tuyo o a un elemento nativo de la plataforma. En este caso, por ejemplo, podemos saber que div es un elemento de la plataforma, y Button es un componente que tú has creado.

# Qué son los componentes de clase

Un componente de clase es aquél que está definido con una clase de JavaScript. Esta clase debe tener dos particularidades:

Primero, debe ser una clase de ES6 de JavaScript que herede de React.Component
Debe poder implementar un método render() que retorne los elementos de React para la interfaz de dicho componente.
Históricamente, un componente de clase se diferencía de un componente funcional en dos principales cosas: La capacidad de administrar un estado propio del componente y la exposición de métodos que pueden ejecutar funcionalidad personalizada en distintas etapas del ciclo de vida de un componente.

Sin embargo, con la introducción de hooks en React 16, los componentes funcionales homologaron la funcionalidad de los componentes de clase en que ahora también pueden guardar un estado y ejecutar métodos del ciclo de vida de un componente.

En ese sentido, gran parte de la comunidad de desarrolladores que usan React, recomiendan usar componentes funcionales y hooks, en lugar de componentes de clase. Al mismo tiempo, el equipo que mantiene y desarrolla React, recomienda que no se re escriban componentes de clase en componentes funcionales a menos que sea necesario.

Esto quiere decir que en el futuro, React soportará ambas formas de declarar un método, con clases y con funciones. Esto significa que para un desarrollador nuevo de React es necesario conocer ambas formas de declarar componentes ya que es probable que en su trabajo día a día se encuentre con componentes de clase y componentes funcionales como parte de una misma aplicación.

Por último, cabe mencionar que algunos conceptos de React son más claros cuando se observan a través de la definición en un componente de clase, particularmente los métodos del ciclo de vida de un componente.
