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

  //reescritura del metodo constructor
  constructor(props){
    super(props);
    this.state ={ //modificacion del estado del componente
      contador:0
    }

    //asigna un valor al contexto para que no se modifique
    this.updateCounter = this.updateCounter.bind(this); // otra manera de manejar el contexto
  }

  
  updateCounter(){
    this.setState({contador: this.state.contador+1})
  }

  render(){
    console.log(this.props); //props de solo lectura no se pueden reaccionar
    return (
      // tag vacio sirve para agrupar componentes
      <> 
        <p>
          Contador: {this.state.contador}
          <button onClick={this.updateCounter}>Sumar</button>
        </p>
      </>
    )
  }
}

// render(<App name={2}/>, document.getElementById('root')); //prop incorrecta genera warning pero la ejecucion sigue
render(<App name="daniel" />, document.getElementById('root')); //prop correcta