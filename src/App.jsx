import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "./api";
import Card from "./components/Card";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Pages/Home";
import NuevoVideo from "./components/Pages/NuevoVideo";
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Editar from "./components/Modal/Editar";
import FrontEnd from "/img/FrontEnd.png";
import BackEnd from "/img/BackEnd.png";
import Innova from "/img/Innova.png";


//color el fondo degradado
const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

//tamaño y fiorma del titulo de las cards
const CategoriaTitulo = styled.img`
  width: 400px;  
  height: auto;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    CategoriaTitulo {
        max-width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    } }
`;

//para abrir modal de editar
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    api.get('')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  const openModal = (video) => {
    setVideoData(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setVideoData(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('manejo de dats: ', formData);
    closeModal();
  };


//boton borrar que elimina desde la card 
  const eliminarVideo = (id) => {
    setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
    console.log('Eliminar video con id:', id);
  
  };
  const updateVideo = (updatedVideo) => {
    setVideos(prevVideos => prevVideos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
  };

//para el titulo de las categorias de las cards
const agruparPorCategoria = (videos) => {
  return videos.reduce((acc, video) => {
    const { categoria } = video;
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(video);
    return acc;
  }, {});
};

const categoriasAgrupadas = agruparPorCategoria(videos);

const categoriaImagenes = {
  Frontend: FrontEnd,
  Backend: BackEnd,
  'Innovación y Gestión': Innova,};



  //estructura 

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


        {Object.keys(categoriasAgrupadas).map((categoria) => (
          <div key={categoria}>
            <CategoriaTitulo src={categoriaImagenes[categoria]} alt={categoria} />
            <div>
              {categoriasAgrupadas[categoria].map((video) => (
                <Card
                  key={video.id}
                  id={video.id}
                  colorPrimario={
                    video.categoria === 'Frontend' ? '#3498db' : 
                    video.categoria === 'Backend' ? '#2ecc71' : 
                    video.categoria === 'Innovación y Gestión' ? '#e74c3c' :
                     '#000000'
                    }
                  imagen={video.imagen}
                  titulo={video.titulo}
                  openModal={() => openModal(video)}
                  eliminarVideo={eliminarVideo}
                />
              ))}
            </div>
          </div>
        ))}

        <Editar   
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          videoData={videoData}
          updateVideo={updateVideo} />
        <Footer />
      </FondoGradiente>
    </>
  );
}

export default App;