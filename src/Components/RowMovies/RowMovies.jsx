import React from 'react';
import styledComponents from 'styled-components';

const StyledRowMovies = styledComponents.div`
  height: 15em;
  border: 0.1rem black solid;
  background-color: lightgray;
  width: 100%;
  margin-bottom: 2em;
`;

const RowMovies = () => {
  return (
    <StyledRowMovies />
  )
};

export default RowMovies;