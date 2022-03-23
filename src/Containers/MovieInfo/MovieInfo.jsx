import { connect } from 'react-redux';
import Rent from '../../Components/Rent/Rent';
import styled from 'styled-components';

const MovieInfo = (props) => {
  const posterURL = 'https://image.tmdb.org/t/p/w500' + 
                    props.search?.poster_path;
  return (
    <StyledInfo>
      <Info>
        <StyledTitle>{props.search?.title}</StyledTitle>
        <span>Score: {props.search?.vote_average}/10</span><br/>
        <span>Votes: {props.search?.vote_count}</span><br/>
        <span>Release date: {props.search?.release_date}</span><br/>
        <p>{props.search?.overview}</p>
        {
          // Show button Rent if user is logged in
          props.credentials.token && 
          <Rent
            id={props.search.id}
            token={props.credentials.token}
            idUser={props.credentials.user.id}
          />
        }
      </Info>
      <Poster src={posterURL} alt=""/>
    </StyledInfo>
  )
};

const StyledTitle = styled.h1`
  text-shadow: 0.1em 0.05em  rgba(0,0,0,0.30);
`;
const StyledInfo = styled.div`
  background-color: #758787;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Info = styled.div`
  color: hsl(233, 19%, 18%);
  width: 35%;
  margin-right: 2em;
  font-size: 1.3rem;
`;

const Poster = styled.img`
  height: 30em;
  box-shadow: -6px 6px 5px 0px rgba(0,0,0,0.52);

  &:hover {
    transform: scale(1.1);
    transition: all ease 0.2s;
    box-shadow: -7px 7px 6px 0px rgba(0,0,0,0.40);
  }
`;

export default connect((state) => ({
  credentials: state.credentials,
  search : state.search.film
}))(MovieInfo);