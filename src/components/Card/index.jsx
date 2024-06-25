import styled from "styled-components";
import React from "react";
import Boton from "../Boton";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 35%;
    align-self: flex-start;
  }
`;

const CardStyle = styled.div`
  background: linear-gradient(45deg, rgba(0, 212, 255, 1) 0%, rgba(11, 3, 45, 1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 100px;
  border-radius: 10px;
  width: 150px;
  margin-bottom: 24px;
  position: relative;

  .negro {
    background-color: black;
    border-color: none;
  }

  .editar {
    width: 135px;
    position: absolute;
    right: 5px;
    top: 198px;
    cursor: pointer;
  }

  .eliminar {
    width: 135px;
    position: absolute;
    left: 5px;
    top: 198px;
    cursor: pointer;
  }
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
