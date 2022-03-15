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
  const genres = [
    { id: '28', genre: 'Action' },
    { id: '16', genre: 'Animation' },
    { id: '12', genre: 'Adventure' },
    { id: '18', genre: 'Drama' },
    { id: '35', genre: 'Comedy' },
    { id: '99', genre: 'Documentary' },
    { id: '80', genre: 'Crime' },
    { id: '10751', genre: 'Family' },
    { id: '14', genre: 'Fantasy' },
    { id: '36', genre: 'History' },
    { id: '27', genre: 'Horror' },
    { id: '10402', genre: 'Music' },
    { id: '9648', genre: 'Mystery' },
    { id: '10749', genre: 'Romance' },
    { id: '878', genre: 'Science Fiction' },
    { id: '10770', genre: 'TV Movie' },
    { id: '53', genre: 'Thriller' },
    { id: '10752', genre: 'War' },
    { id: '37', genre: 'Western' }
  ];

  // const rows = [];

  // for (let i of genres) {
  //   rows.push(<Row genre={genres[i].genre} />);
  // }

  return (
    <StyledHome>
      <Banner />
      {/* {rows} */}
      <Row genre={genres[0].genre} id_genre={genres[0].id}/>
      <Row genre={genres[1].genre} id_genre={genres[1].id}/>
      <Row genre={genres[2].genre} id_genre={genres[2].id}/>
      <Row genre={genres[3].genre}/>
      <Row genre={genres[4].genre}/>
      <Row genre={genres[5].genre}/>
      <Row genre={genres[6].genre}/>
      <Row genre={genres[7].genre}/>
      <Row genre={genres[8].genre}/>
      <Row genre={genres[9].genre}/>
      <Row genre={genres[10].genre}/>
      <Row genre={genres[11].genre}/>
      <Row genre={genres[12].genre}/>
      <Row genre={genres[13].genre}/>
      <Row genre={genres[14].genre}/>
      <Row genre={genres[15].genre}/>
      <Row genre={genres[16].genre}/>
      <Row genre={genres[17].genre}/>
      <Row genre={genres[18].genre}/>
    </StyledHome>
  )
};

export default Home;