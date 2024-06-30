import styled from "styled-components"

const FooterEstilizado = styled.footer`
    background-color: #000;
    justify-content: center;
    padding: 60px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        color: white;
        justify-content: center;
    }

    img{
        width: 212px;
    }
`

    const Footer = () => {
        return (
            
    <FooterEstilizado>
        <></>
        <img src="src\img\LogoMain.png" alt="logo aluraFix"/>
        <h1>
        Desarrollado para Alura Latam
                <p>
        por Diana Robles Guerrero
                </p>
        </h1>
     </FooterEstilizado>
        )
    }

    
export default Footer
