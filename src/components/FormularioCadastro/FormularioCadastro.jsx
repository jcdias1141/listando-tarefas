import React, { Component } from "react";
import './estilo.css';

class FormularioCadastro extends Component {

  constructor(props) {
      super(props);
      this.titulo="";
      this.texto="";  
  }

  _handlerMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
    render() {
        return(
        <form className="formulario"
          onSubmit={this._criarNota.bind(this)}
        >
          <h1>App-lista de tarefas</h1>
          <input
            className="formulario_input"  
            type='text' 
            placeholder='Título'
            onChange={this._handlerMudancaTitulo.bind(this)}
          />
          <textarea
             rows={5}
             className="formulario_text-area" 
             placeholder='Escreva sua nota' 
             onChange={this._handlerMudancaTexto.bind(this)}
          />
          <button className="btn">Criar nota</button> 
        </form>
        )
        
    }
}
export default FormularioCadastro;