import styled from "styled-components";
import React from "react";

const CardContainer = styled.div`
    display: flex;
    width: 35rem;
    height: 25rem;
    margin-bottom: 20px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;

  img {
    aspect-ratio: 1/1;
    width: 395px;
    height: 300px;
    background-color: var(--colorPrimario);
    border-radius: 20px 20px 0 0;
      
  }
`;

const CardStyle = styled.div`
  background: var(--colorPrimario);
  align-items: center;
  //padding: 85px;
  border-radius: 10px;
  //width: 230px;
 height: 350px;
  //margin-bottom: 4px;
  //top: 15rem;
  //position: relative;
 //display: flex;
  flex-direction: column;
 
  .editar {
    //object-fit: cover; 
    //max-width: 10%;
    //aspect-ratio: auto;
    //position: absolute;
    //right: 10%;
    //top: 198px;
    width: 185px;
    height: 50px;
    left: 10px;
   // top: 188px;
    cursor: pointer;
  }

  .eliminar {
    width: 185px;
    height: 50px;
    left: 10px;
    //top: 188px;
    cursor: pointer;
  }
  //.negro {
   // background-color: black;
   // border-color: none;
  //}
`;

const Card = ({ colorPrimario, eliminarVideo, imagen, titulo, id, openModal }) => {
  return (
  <CardContainer>
      <CardStyle style={{ backgroundColor: colorPrimario }}>
        <img src={imagen} alt={titulo} />
        <div className="info"></div>
        <div className="negro">        
          <img src="src/img/Editar.png" alt="Editar" className="editar" onClick={openModal} />
          <img src="src/img/Delete.png" alt="Eliminar" className="eliminar" onClick={() => eliminarVideo(id)} />
        </div>
  </CardStyle>
   </CardContainer>
  );
};

export default Card;