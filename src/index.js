import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component{
  static defaultProps ={
    name: "pepito" //props por defecto en caso de que no se asignen
  }

  static propTypes ={ //sirve para definir el tipo de datos que puede tener un prop
    name: PropTypes.string
  }
  render(){
    console.log(this.props); //props de solo lectura no se pueden reaccionar
    return <p>Hola</p>
  }
}

// render(<App name={2}/>, document.getElementById('root')); //prop incorrecta genera warning pero la ejecucion sigue
render(<App name="daniel" />, document.getElementById('root')); //prop correcta