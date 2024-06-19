import styled from "styled-components";

const NuevoContainer = styled.div`
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





const NuevoVideo = () => {
  return (
    <NuevoContainer>
    <div>
      <h1>Nuevo Video</h1>
      <Image src="src\img\BannerMain.png" alt="Bannere" />
      <p>Aquí puedes agregar un nuevo video.</p>
    </div>
    </NuevoContainer>
  );
};

export default NuevoVideo;
