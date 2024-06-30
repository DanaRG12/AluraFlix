import React from "react";
import styled from "styled-components";
import Card from "../../Card/index.jsx";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;
    text-align: center;
`;

const Image = styled.img`
    width: 100%; 
    margin-bottom: 1px;
`;

const Home = () => {
  return (
      <HomeContainer>
          <Image src="img\BannerMain.png" alt="Bannere" />
      </HomeContainer>
  );
}

export default Home;