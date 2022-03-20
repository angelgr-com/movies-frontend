import React from 'react';
import styledComponents from 'styled-components';
import Poster from '../Poster/Poster';

const RowMovies = ({genre, id_genre}) => {
  return (
    <StyledRowMovies>
      <Poster num={0} genre={genre} id_genre={id_genre}/>
      <Poster num={1} genre={genre} id_genre={id_genre}/>
      <Poster num={3} genre={genre} id_genre={id_genre}/>
      <Poster num={4} genre={genre} id_genre={id_genre}/>
      <Poster num={5} genre={genre} id_genre={id_genre}/>
      <Poster num={6} genre={genre} id_genre={id_genre}/>
      <Poster num={7} genre={genre} id_genre={id_genre}/>
      <Poster num={8} genre={genre} id_genre={id_genre}/>
      <Poster num={9} genre={genre} id_genre={id_genre}/>
      <Poster num={2} genre={genre} id_genre={id_genre}/>
      <Poster num={10} genre={genre} id_genre={id_genre}/>
      <Poster num={11} genre={genre} id_genre={id_genre}/>
      <Poster num={12} genre={genre} id_genre={id_genre}/>
      <Poster num={13} genre={genre} id_genre={id_genre}/>
      <Poster num={14} genre={genre} id_genre={id_genre}/>
      <Poster num={15} genre={genre} id_genre={id_genre}/>
      <Poster num={16} genre={genre} id_genre={id_genre}/>
      <Poster num={17} genre={genre} id_genre={id_genre}/>
      <Poster num={18} genre={genre} id_genre={id_genre}/>
      <Poster num={19} genre={genre} id_genre={id_genre}/>
    </StyledRowMovies>
  )
};

const StyledRowMovies = styledComponents.div`
  display: flex;
  flex-direction: row;
  height: 20em;
  // border: 0.1rem black solid;
  background-color: #758787;
  width: 100%;
  margin-left: 1em;
`;

export default RowMovies;