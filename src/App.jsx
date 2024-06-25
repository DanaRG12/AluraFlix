import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Pages/Home';
import NuevoVideo from './components/Pages/NuevoVideo';
import Cabecera from "./components/Cabecera";
import Footer from './components/Footer';
import Editar from './components/Modal/Editar';
import Card from './components/Card';

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actualizarVideo] = useState();

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
    console.log('Eliminar video con id:', id)
    const nuevoVideos = videos.filter((video) => video.id !== id)

    ;
  };

  // Suponiendo que tienes una lista de cards para mostrar
  const cardsData = [
    { id: 1, colorPrimario: '#3498db', imagen: 'src/img/Frontend.png', titulo: 'Frontend' },
    { id: 2, colorPrimario: '#2ecc71', imagen: 'src/img/Backend.png', titulo: 'Backend' },
    { id: 3, colorPrimario: '#e74c3c', imagen: 'src/img/Innova.png', titulo: 'Innovación y gestión' },
  ];

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
        
        {cardsData.map(card => (
          <Card
            key={card.id}
            id={card.id}
            colorPrimario={card.colorPrimario}
            imagen={card.imagen}
            titulo={card.titulo}
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
