import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import api from './api';
import Card from './components/Card';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Pages/Home';
import NuevoVideo from './components/Pages/NuevoVideo';
import Cabecera from "./components/Cabecera";
import Footer from './components/Footer';
import Editar from './components/Modal/Editar';

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const videos = [
  {
    categoria: "Frontend",
    colorPrimario: "#3498db"
  },
  {
    categoria: "Backend",
    colorPrimario: "#2ecc71"
  },
  {
    categoria: "Innovación y Gestión",
    colorPrimario: "#e74c3c"
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get('')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    closeModal();
  };

  const eliminarVideo = (id) => {
    console.log('Eliminar video con id:', id);
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <Router>
          <Cabecera />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NuevoVideo" element={<NuevoVideo />} />
          </Routes>
        </Router>
        

        {videos.map(video => (
          <Card
            key={video.id}
            id={video.id}
            colorPrimario={video.categoria === 'Frontend' ? '#3498db' : video.categoria === 'Backend' ? '#2ecc71' : '#e74c3c'}
            imagen={video.imagen}
            titulo={video.titulo}
            openModal={openModal}
            eliminarVideo={eliminarVideo}
          />
        ))}
              <Editar isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />
      <Footer />
      </FondoGradiente>
    </>
  );
}

export default App;