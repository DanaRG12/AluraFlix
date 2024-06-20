import styled from "styled-components";

const NuevoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
`;



function NuevoVideo() {
  return (
    <NuevoContainer>
    <form>
      <label>Aquí puedes agregar un nuevo video.
        <input type="text" />
      </label>
    </form>
    </NuevoContainer>
  )
}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<NuevoVideo />);

export default NuevoVideo;
