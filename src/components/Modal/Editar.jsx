import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListaOpciones from "../ListaOpciones";
import CampoTexto from "../CampoTexto";
import Boton from "../Boton";
import api from '../../api';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogEstilizado = styled.div`
  position: relative;
  background: #162B4E;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  button1 {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
  }

  h2 {
    color: #fff;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <DialogEstilizado>
        <button1 onClick={onClose}>X</button1>
        {children}
      </DialogEstilizado>
    </Overlay>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: bold;
    color: white;
  }

  input, textarea, select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #fff;
  }

  .boton-container {
    display: flex;
    gap: 16%;
    justify-content: flex-end;
  }
`;

const Form = ({ onSubmit, initialValues  }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: '',
  });

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClear = () => {
    setFormData({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CampoTexto
        titulo="Título"
        placeholder="Ingresar el título"
        required={true}
        valor={formData.titulo}
        actualizarValor={(value) => handleChange('titulo', value)}
      />

      <label>
        <ListaOpciones 
          valor={formData.categoria} 
          actualizarEquipo={(categoria) => handleChange('categoria', categoria)} 
        />
      </label>

      <CampoTexto
        titulo="Imagen"
        placeholder="Ingresar enlace de imagen (obligatorio)"
        required={true}
        valor={formData.imagen}
        actualizarValor={(value) => handleChange('imagen', value)}
      />

      <CampoTexto
        titulo="Video"
        placeholder="Ingresar el enlace del video"
        required={true}
        valor={formData.video}
        actualizarValor={(value) => handleChange('video', value)}
      />

      <CampoTexto
        titulo="Descripción"
        placeholder="¿De qué se trata este video?"
        required={true}
        valor={formData.descripcion}
        actualizarValor={(value) => handleChange('descripcion', value)}
      />

      <div className="boton-container">
        <Boton type="submit">Guardar</Boton>
        <Boton type="button" onClick={handleClear}>Limpiar</Boton>
      </div>
    </FormContainer>
  );
};


const Editar = ({ isModalOpen, closeModal, videoData, updateVideo }) => {
  const handleFormSubmit = (formData) => {
    api.put(`/${videoData.id}`, formData)
      .then(response => {
        console.log('Video actualizado:', response.data);
        updateVideo(response.data);
        closeModal();
      })
      .catch(error => {
        console.error('Error al actualizar el video:', error);
      });
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>EDITAR CARD:</h2>
        <Form onSubmit={handleFormSubmit} initialValues={videoData} />
      </Modal>
    </div>
  );
};

export default Editar;
