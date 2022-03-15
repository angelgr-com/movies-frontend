import styledComponents from 'styled-components';
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';

const StyledHome = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: hsl(331, 61%, 82%, 50%);
  width: 100%;
  max-height: 100%;
`;

const Home = () => {
  const genre = ['Action', 'Comedy', 'Adventure', 'Romance', 'Horror', 'Thriller'];
  return (
    <StyledHome>
      <Banner />
      <Row genre={genre[0]}/>
      <Row genre={genre[1]}/>
      <Row genre={genre[2]}/>
      <Row genre={genre[3]}/>
      <Row genre={genre[4]}/>
      <Row genre={genre[5]}/>
    </StyledHome>
  )
};

export default Home;