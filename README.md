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