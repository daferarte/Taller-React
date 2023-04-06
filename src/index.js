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
      contador:0,
      updateAt: null
    }

  }

  //metodo se ejecuta cuando se inicia el componente
  componentDidMount(){
    console.log("fui creado");
  }

  /**
   * metodo se ejecuta cuando se actualiza el componente
   * @param {*} prevProps guarda los props anteriores
   * @param {*} prevState guarda los cambios en los estados
   */
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(prevState, this.state, snapshot);
    if(prevState.contador !== this.state.contador)
      this.setState({updateAt: new Date()})
    console.log("fui actualizado");
  }

  /**
   * se ejecuta antes de actualizar el DOM
   */
  getSnapshotBeforeUpdate(){
    console.log("Antes del DOM");
    return 3; //esto retorna y se convierte en tercer argumento pra el didupdate
  }

  /**
   * se ejecuta cuando el componente se va a ir
   * se usa para limpiar cosas
   */
  componentWillMount(){
    alert("bye");
  }
  
  updateCounter=()=>{
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