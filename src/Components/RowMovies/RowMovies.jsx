import React from 'react';
import styledComponents from 'styled-components';
import Poster from '../Poster/Poster';

const StyledRowMovies = styledComponents.div`
  display: flex;
  flex-direction: row;
  height: 20em;
  border: 0.1rem black solid;
  background-color: lightgreen;
  width: 100%;
  overflow: hidden;
`;

const RowMovies = () => {
  return (
    <StyledRowMovies>
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
    </StyledRowMovies>
  )
};

export default RowMovies;