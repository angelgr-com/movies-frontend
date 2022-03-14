import styledComponents from 'styled-components';
import Banner from '../../Components/Banner/Banner';
import RowMovies from '../../Components/RowMovies/RowMovies';

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
  return (
    <StyledHome>
      <Banner />
      <RowMovies />
      <RowMovies />
      <RowMovies />
      <RowMovies />
      <RowMovies />
      <RowMovies />
    </StyledHome>
  )
};

export default Home;