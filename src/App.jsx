import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import Home from './components/Pages/Home';
import NuevoVideo from './components/Pages/NuevoVideo';
import Footer from './components/Footer'

//import Editar from "./components/Modal/Editar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <Cabecera>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path=".Pages/NuevoVideo" element={<NuevoVideo />} />
    </Routes>
      </Cabecera>
    <Footer/>
    
    </FondoGradiente>
    </>
  )
}

export default App