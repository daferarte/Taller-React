import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
  static defaultProps ={
    name: "pepito" //props por defecto en caso de que no se asignen
  }
  render(){
    console.log(this.props); //props de solo lectura no se pueden reaccionar
    return <p>Hola</p>
  }
}

render(<App />, document.getElementById('root')); //definicion de props