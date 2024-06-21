import React, { useState } from 'react';
import styled from 'styled-components';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
import CampoTexto from '../CampoTexto';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: bold;
  }

  input, textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007BFF;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>EDITAR CARD:</h2>
      <CampoTexto
        titulo="Título"
        name="titulo"
        placeholder="Ingresar el título"
        required
        valor={formData.titulo}
        actualizarValor={handleChange}
      />
      <ListaOpciones
        titulo="Categoría"
        name="categoria"
        placeholder="Ingresar Categoría"
        required
        valor={formData.categoria}
        actualizarValor={handleChange}
      />
      <CampoTexto
        titulo="Imagen"
        name="imagen"
        placeholder="Ingresar enlace de Imagen (obligatorio)"
        required
        valor={formData.imagen}
        actualizarValor={handleChange}
      />
      <CampoTexto
        titulo="Video"
        name="video"
        placeholder="Ingresar el enlace del video"
        required
        valor={formData.video}
        actualizarValor={handleChange}
      />
      <CampoTexto
        titulo="Descripción"
        name="descripcion"
        placeholder="¿De qué se trata este video?"
        required
        valor={formData.descripcion}
        actualizarValor={handleChange}
      />
      <Boton type="submit">
        Guardar
      </Boton>
      <Boton type="button" onClick={() => setFormData({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: '',
      })}>
        Limpiar
      </Boton>
    </FormContainer>
  );
};

export default Form;
