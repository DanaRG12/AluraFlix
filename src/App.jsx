import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Home from './components/Pages/Home';
import NuevoVideo from './components/Pages/NuevoVideo';
import Cabecera from "./components/Cabecera"
import Footer from './components/Footer'
import Editar from './components/Modal/Editar';

//import Editar from "./components/Modal/Editar";


const FondoGradiente =  styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`



function App() {
  

  return (
    <>
    <FondoGradiente>
    <GlobalStyles/>
    <Router>
       <Cabecera/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NuevoVideo" element={<NuevoVideo />} />
    </Routes>
 
      </Router>
    <Footer/>
    <Editar/>
    </FondoGradiente>
    </>
  )
}

export default App