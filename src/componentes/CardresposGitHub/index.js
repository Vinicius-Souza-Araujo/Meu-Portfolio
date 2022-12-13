import React from "react";
import './estilos.css'


function CardresposGitHub(props) {
    
  
    return (
      <div className="card-esposGitHub">
        
        <h1 className="titulo">{props.titulo}</h1>
        <a className="botao-link" href={props.link}>Saiba mais!</a>
      </div>
    );
  }
  
  export default CardresposGitHub;