import React from 'react';
import styled from 'styled-components';
import RowMovies from '../RowMovies/RowMovies';

const Row = ({genre, id_genre}) => {
  return (
    <StyledRow>
      <StyledGenre>{genre}</StyledGenre>
      <RowMovies genre={genre} id_genre={id_genre}/>
    </StyledRow>
  )
};

const StyledGenre = styled.h2`
  text-shadow: 0.15em 0.08em  rgba(0,0,0,0.30);
  margin-left: 0.7em;
`;

const StyledRow = styled.div`
  box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.52);
  color: hsl(0, 8%, 93%);
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 24em;
  // border: 0.1rem black solid;
  background-color: hsl(180, 7%, 49%);
  width: 100%;
  margin-bottom: 1em;
  overflow: hidden;
`;

export default Row;