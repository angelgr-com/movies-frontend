import React from 'react';
import styledComponents from 'styled-components';
import RowMovies from '../RowMovies/RowMovies';

const StyledRow = styledComponents.div`
  display: flex;
  flex-direction: column;
  height: 20em;
  border: 0.1rem black solid;
  background-color: lightgray;
  width: 100%;
  margin-bottom: 1em;
  overflow: hidden;
`;

const Row = ({genre, id_genre}) => {
  return (
    <StyledRow>
      <h3>{genre}</h3>
      <RowMovies genre={genre} id_genre={id_genre}/>
    </StyledRow>
  )
};

export default Row;