import styled from "styled-components"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import NuevoVideo from '../Pages/NuevoVideo';



const HeaderEstilizado = styled.header`
    background-color: #000;
    display: flex;
    align-items: end;
    justify-content: space-between;
   padding: 60px 80px;
   display: flex;

    img{
        width: 212px;
    }
`
const Header = styled.header`
  background-color: #000000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: #000000;
    color: #ffff;
    border: solid blue
  }

  &:hover {
    background-color: #fff;
    color: #282c34;
  }
`;



const Cabecera = () => {
    return (
        <Router>
    <HeaderEstilizado>

        
        
     <img src="src\img\LogoMain.png" alt="logo aluraFix"/>
 
              <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/NuevoVideo">Nuevo Video</NavLink>
        </Nav>
     </HeaderEstilizado>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./NuevoVideo" element={<NuevoVideo />} />
      </Routes>


     </Router>   
    )
}

export default Cabecera