import React from "react";
import styled from "styled-components";
import Card from "../../Card/index.jsx";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
`;

const Image = styled.img`
    width: 85%; 
    margin-bottom: 20px;
`;

const Home = () => {
  return (
      <HomeContainer>
          <Image src="src\img\BannerMain.png" alt="Bannere" />
          <Card/>
      </HomeContainer>
  );
}

export default Home;