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
      <Poster num={0}/>
      <Poster num={1}/>
      <Poster num={2}/>
      <Poster num={3}/>
      <Poster num={4}/>
      <Poster num={5}/>
      <Poster num={6}/>
      <Poster num={7}/>
      <Poster num={8}/>
      <Poster num={9}/>
      <Poster num={10}/>
      <Poster num={11}/>
      <Poster num={12}/>
      <Poster num={13}/>
      <Poster num={14}/>
      <Poster num={15}/>
      <Poster num={16}/>
      <Poster num={17}/>
      <Poster num={18}/>
      <Poster num={19}/>
    </StyledRowMovies>
  )
};

export default RowMovies;