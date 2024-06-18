import styled from "styled-components"



const HeaderEstilizado = styled.header`
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
   padding: 60px 80px;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`



const Cabecera = () => {
    return <HeaderEstilizado>

        
        
     <img src="src\img\LogoMain.png" alt="logo aluraFix"/>
     
    </HeaderEstilizado>
    
}

export default Cabecera