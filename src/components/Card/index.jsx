import styled from "styled-components";
import React from "react";

const CardContainer = styled.div`
   flex: 1 1 30%;
    max-width: 30%;
    box-sizing: border-box; 
    padding: 10px; 

    img {
      width: 98%;
        height: 85%;
        margin-top: 3px;
        border-radius: 10px 10px 0 0;
        }
`;

const CardStyle = styled.div`
    background: var(--colorPrimario);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 
  .editar {
    object-fit: cover; 
    max-width: 40%;
    //aspect-ratio: auto;
    align-items: center;
    //position: absolute;
    //right: 10%;
    //top: 198px;
    width: 55%;
    height: 60%;
    //right: 10px;
   // top: 188px;
    cursor: pointer;
  }

  .eliminar {
    width: 55%;
    height: 60%;
    max-width: 40%;
   // left: 10px;
    //top: 188px;
    align-items: center;
    cursor: pointer;
  }
  //.negro {
   // background-color: black;
   // border-color: none;
  //}
`;

const Card = ({ colorPrimario, eliminarVideo, imagen, titulo, id, openModal }) => {
  const handleEditClick = () => {
    openModal({
      id,
      titulo,
      imagen,
      colorPrimario
    });
  };
  return (
  <CardContainer>
      <CardStyle style={{ backgroundColor: colorPrimario }}>
        <img src={imagen} alt={titulo} />
        <div className="info"></div>
        <div className="negro">        

          <img src="src/img/Delete.png" alt="Eliminar" className="eliminar" onClick={() => eliminarVideo(id)} />
          <img src="src/img/Editar.png" alt="Editar" className="editar" onClick={openModal} />
        </div>
  </CardStyle>
   </CardContainer>
  );
};

export default Card;