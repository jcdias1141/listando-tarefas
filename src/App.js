import './assets/App.css';
import React, { Component } from "react";
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import  FormularioCadastro  from './components/FormularioCadastro';


class App extends Component {
  render () {
    return (
      <div className='conteudo'> 
        <FormularioCadastro/>
        <ListaDeNotas/>
      </div>
    );
  }
  
}

export default App;
