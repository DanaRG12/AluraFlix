import styled from "styled-components";
import React from "react";

// linea negra

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

  .negro {
    background-color: black;
  }

  .editar {
    width: 135px;
    position: absolute;
    right: 5px;
    top: 238px;
    cursor: pointer
  }

  .eliminar {
    width: 135px;
    position: absolute;
    left: 5px;
    top: 238px;
    cursor: pointer
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
            </div>
            <div className="negro">
        <img src="src/img/Editar.png" alt="Editar" className="editar" onClick={() => editarVideo(id)} />
        <img src="src/img/Delete.png" alt="Eliminar" className="eliminar" onClick={() => eliminarVideo(id)} />
            </div>
        </CardStyle>

      <img src="src/img/BackEnd.png" alt="Backend" />
        <CardStyle>CardStyle 2</CardStyle>
      <img src="src/img/Innova.png" alt="Innovación y gestión" />
        <CardStyle>CardStyle 3</CardStyle>
    </CardContainer>
  );
};

export default Card;
