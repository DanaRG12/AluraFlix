import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;
  
  img{
        width: 35%;
        align-self: flex-start;
     }
`;

const Cardstyle = styled.div`
 background: rgb(0,212,255);
    background: linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(11,3,45,1) 100%);

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    background-size: cover;
  background-position: center; 
  align-items: center;
  justify-content: center;    
  height: 10vh;  
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    wrapper {
      width: 100%;
      height: 100%;}
`;


const Card = () => {
    return (
       <CardContainer>
        <img src="src\img\FrontEnd.png" alt="Frontend"/>
              <Cardstyle>Card 1</Cardstyle>
        <img src="src\img\BackEnd.png" alt="Backend"/>
                <Cardstyle>Cardstyle 2</Cardstyle>
                <img src="src\img\Innova.png" alt="Innovación y gestión"/>        
              <Cardstyle>Cardstyle 3</Cardstyle>
              
        </CardContainer>
 
    );
  }


export default Card;