import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';
import Button from '../../Components/Button/Button';
import styled from 'styled-components';

const Home = () => {
  let navigate = useNavigate();

  const toLogin = () => {
    setTimeout(()=>{
        navigate('/login');
    },500)
  }

  const toRegister = () => {
    setTimeout(()=>{
        navigate('/register');
    },500)
  }

  const toProfile = () => {
    setTimeout(()=>{
        navigate('/register');
    },500)
  }

  const toOrders = () => {
    setTimeout(()=>{
        navigate('/orders');
    },500)
  }

  // This hook checks if user is logged in and has a token
  const [credentials, setCredentials] = useState(JSON.parse(localStorage.getItem("userData")));

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

  // Number between 0-18 to obtain a random Banner
  const max = 18, min = 0;
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  if (credentials?.userData?.token !== undefined) {
    return (
      <StyledHome>
        <ButtonsRow>
          <Button
            text={credentials.userData.user} 
            onClick={()=>toProfile()}
          />
          <Button
            text='My Movies'
            onClick={()=>toOrders()}
          />
        </ButtonsRow>
        <Banner random={random} id_genre={genres[random].id} />
        <Row genre={genres[0].genre} id_genre={genres[0].id} />
        {/* <Row genre={genres[1].genre} id_genre={genres[1].id} />
        <Row genre={genres[2].genre} id_genre={genres[2].id} />
        <Row genre={genres[3].genre} id_genre={genres[3].id} />
        <Row genre={genres[4].genre} id_genre={genres[4].id} />
        <Row genre={genres[5].genre} id_genre={genres[5].id} />
        <Row genre={genres[6].genre} id_genre={genres[6].id} />
        <Row genre={genres[7].genre} id_genre={genres[7].id} />
        <Row genre={genres[8].genre} id_genre={genres[8].id} />
        <Row genre={genres[9].genre} id_genre={genres[9].id} />
        <Row genre={genres[10].genre} id_genre={genres[10].id} />
        <Row genre={genres[11].genre} id_genre={genres[11].id} />
        <Row genre={genres[12].genre} id_genre={genres[12].id} />
        <Row genre={genres[13].genre} id_genre={genres[13].id} />
        <Row genre={genres[14].genre} id_genre={genres[14].id} />
        <Row genre={genres[15].genre} id_genre={genres[15].id} />
        <Row genre={genres[16].genre} id_genre={genres[16].id} />
        <Row genre={genres[17].genre} id_genre={genres[17].id} />
        <Row genre={genres[18].genre} id_genre={genres[18].id} /> */}
      </StyledHome>
    )
  }
  else {
    return(
      <StyledHome>
        <ButtonsRow>
          <Button
            text='Login'
            onClick={()=>toLogin()}
          />
          <Button
            text='Register'
            onClick={()=>toRegister()}
          />
        </ButtonsRow>
        <Banner random={random} id_genre={genres[random].id} />
        <Row genre={genres[0].genre} id_genre={genres[0].id}/>
        {/* <Row genre={genres[1].genre} id_genre={genres[1].id}/>
        <Row genre={genres[2].genre} id_genre={genres[2].id}/>
        <Row genre={genres[3].genre} id_genre={genres[3].id}/>
        <Row genre={genres[4].genre} id_genre={genres[4].id}/>
        <Row genre={genres[5].genre} id_genre={genres[5].id}/>
        <Row genre={genres[6].genre} id_genre={genres[6].id}/>
        <Row genre={genres[7].genre} id_genre={genres[7].id}/>
        <Row genre={genres[8].genre} id_genre={genres[8].id}/>
        <Row genre={genres[9].genre} id_genre={genres[9].id}/>
        <Row genre={genres[10].genre} id_genre={genres[10].id}/>
        <Row genre={genres[11].genre} id_genre={genres[11].id}/>
        <Row genre={genres[12].genre} id_genre={genres[12].id}/>
        <Row genre={genres[13].genre} id_genre={genres[13].id}/>
        <Row genre={genres[14].genre} id_genre={genres[14].id}/>
        <Row genre={genres[15].genre} id_genre={genres[15].id}/>
        <Row genre={genres[16].genre} id_genre={genres[16].id}/>
        <Row genre={genres[17].genre} id_genre={genres[17].id}/>
        <Row genre={genres[18].genre} id_genre={genres[18].id}/> */}
      </StyledHome>
    )
  }
};

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 1em;
  width: 100%;
  z-index: 100;
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // background-color: hsl(331, 61%, 82%, 50%);
  background-color: white;
  width: 100%;
  max-height: 100%;
`;

export default Home;