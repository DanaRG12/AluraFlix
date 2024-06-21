import styled from "styled-components";
import React from "react";

//poner la card del tamaño correcto y linea negra

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
  padding: 120px;
  border-radius: 10px;
  width: 100px;
  margin-bottom: 24px;
  position: relative;

  img {
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
  }

  .editar {
    width: 35px; /* Ajuste del ancho para que sea igual a eliminar */
    position: absolute;
    right: 125px; /* Corrección del valor para alinearlo a la derecha */
    top: 205px; /* Posicionamiento superior */
  }

  .eliminar {
    width: 35px;
    position: absolute;
    left: 5px; /* Corrección del valor para alinearlo a la izquierda */
    top: 205px; /* Posicionamiento superior */
  }

  h5 {
    font-size: 15px;
    position: absolute;
    left: 55px;
    bottom: 1px;
    color: #ffff;
  }

  h6 {
    font-size: 15px;
    position: absolute;
    right: 5px;
    bottom: -7px;
    color: #ffff;
  }
`;
const Card = (props) => {
  const { colorPrimario, eliminarVideo, editarVideo, imagen, titulo, id } = props;

  return (
    <CardContainer>
      <img src="src/img/FrontEnd.png" alt="Frontend" />

        <CardStyle style={{ backgroundColor: colorPrimario }}>
        <img src={imagen} alt={titulo} />
        <div className="info">
            <h5>BORRAR</h5>
            <h6>EDITAR</h6></div>
        <img src="src/img/Editar.png" alt="Editar" className="editar" onClick={() => editarVideo(id)} />
        <img src="src/img/Delete.png" alt="Eliminar" className="eliminar" onClick={() => eliminarVideo(id)} />
        </CardStyle>

      <img src="src/img/BackEnd.png" alt="Backend" />
        <CardStyle>CardStyle 2</CardStyle>
      <img src="src/img/Innova.png" alt="Innovación y gestión" />
        <CardStyle>CardStyle 3</CardStyle>
    </CardContainer>
  );
};

export default Card;
