import React from 'react';
import styledComponents from 'styled-components';
import RowMovies from '../RowMovies/RowMovies';

const Row = ({genre, id_genre}) => {
  return (
    <StyledRow>
      <h2>{genre}</h2>
      <RowMovies genre={genre} id_genre={id_genre}/>
    </StyledRow>
  )
};

const StyledRow = styledComponents.div`
  color: hsl(0, 8%, 93%);
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 20em;
  // border: 0.1rem black solid;
  background-color: hsl(180, 7%, 49%);
  width: 100%;
  margin-bottom: 1em;

`;

export default Row;