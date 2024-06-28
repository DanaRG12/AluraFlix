import React from 'react';
import styled from 'styled-components';

const ClaseSeccion = styled.section`
  margin: 20px 0;
  text-align: center;
  background-color: ${({ color }) => color};
  padding: 20px;
  border-radius: 8px;
`;

const CategoriaTitulo = [
  { categoria: "Frontend", colorPrimario: "#3498db", imagen: "./img/FrontEnd.png" },
  { categoria: "Backend", colorPrimario: "#2ecc71", imagen: "./img/BackEnd.png" },
  { categoria: "Innovación y Gestión", colorPrimario: "#e74c3c", imagen: "./img/Innova.png" }
];

const CategoriaTitulo = ({ datos }) => {
  return (
    <ClaseSeccion color={datos.colorPrimario}>
      <h3>{datos.categoria}</h3>
      <img src={datos.imagen} alt={datos.categoria} />
    </ClaseSeccion>
  );
};

export default Clasificacion;