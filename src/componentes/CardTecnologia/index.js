import React from "react";
import './estilos.css'


function CardTecnologia(props) {
    
  
    return (
      <div className="card-tecnologia">
        <img src={props.caminhoImg} alt='icon-tecnologia' title='icon-tecnologia'/>
        <h1>{props.titulo}</h1>
      </div>
    );
  }
  
  export default CardTecnologia;