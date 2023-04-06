import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
  render(){
    console.log(this.props); //props de solo lectura no se pueden reaccionar
    return <p>Hola</p>
  }
}

render(<App name="daniel"/>, document.getElementById('root')); //definicion de props