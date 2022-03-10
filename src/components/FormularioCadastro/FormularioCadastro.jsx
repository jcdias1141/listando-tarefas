import React, { Component } from "react";
import './estilo.css';

class FormularioCadastro extends Component {

  constructor() {
    super();
      this.titulo="";  
  }

  handlerMudancaTitulo(evento){
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }
    render() {
        return(
        <form className="formulario">
          <h1>Lista de Tarefas app use react </h1>
          <input
            className="formulario_input" 
            type='text' 
            placeholder='Título'
            onChange={this.handlerMudancaTitulo.bind(this)}
          />
          <textarea
          rows={5}
             className="formulario_text-area" 
             placeholder='Escreva sua nota'>
          </textarea>
          <button className="btn">Criar nota</button>
        </form>
        )
        
    }
}
export default FormularioCadastro;