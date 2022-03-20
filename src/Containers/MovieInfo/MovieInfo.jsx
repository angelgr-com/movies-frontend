import { connect } from 'react-redux';
import styled from 'styled-components';

const MovieInfo = (props) => {
  const posterURL = 'https://image.tmdb.org/t/p/w500' + props.search?.poster_path;

  return (
    <StyledInfo>
      <Info>
        <h1>{props.search?.title}</h1>
        <span>Score: {props.search?.vote_average}/10</span><br/>
        <span>Votes: {props.search?.vote_count}</span><br/>
        <span>Release date: {props.search?.release_date}</span><br/>
        <p>{props.search?.overview}</p>
      </Info>
      <Poster src={posterURL} alt=""/>
    </StyledInfo>
  )
};

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
`;

export default connect((state) => ({
  credentials: state.credentials,
  search : state.search.film
}))(MovieInfo);