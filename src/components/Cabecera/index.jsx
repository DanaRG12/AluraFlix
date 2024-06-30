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
    img{
        width: 212px;
    }
    @media (max-width: 600px) {
      HeaderEstilizado {
        max-width:50%;
      img{
        width: 50%;
        padding-right:2px;
      }}

}
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    Nav {
        max-width: 10%;
        ;
    }
  }
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
    color: #ffffff;
    border: solid blue
  }

  &:hover {
    background-color: #0a2a9e;
    color: #f0f0f1;
  }
  @media (max-width: 600px) {
    NavLink {
        max-width: 10%;
        font-size: 5px;
    }
  }
`;



const Cabecera = () => {
    return (

    <HeaderEstilizado>
   
     <img src="src\img\LogoMain.png" alt="logo aluraFix"/>
 
              <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/NuevoVideo">Nuevo Video</NavLink>
              </Nav>
     </HeaderEstilizado>


    )
};

export default Cabecera

