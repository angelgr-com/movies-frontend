import React from 'react';
import styledComponents from 'styled-components';
import Poster from '../Poster/Poster';

// Number between 0-6 to obtain a random Header
const random = () => {
  let films = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  films.sort(function() {return Math.random() - 0.5});
  console.log(films);
  return films;
}
const films = random();

const RowMovies = ({genre, id_genre}) => {
  return (
    <StyledRowMovies>
      <Poster num={films[0]} genre={genre} id_genre={id_genre}/>
      <Poster num={films[1]} genre={genre} id_genre={id_genre}/>
      <Poster num={films[2]} genre={genre} id_genre={id_genre}/>
      <Poster num={films[3]} genre={genre} id_genre={id_genre}/>
      <Poster num={films[4]} genre={genre} id_genre={id_genre}/>
      <Poster num={films[5]} genre={genre} id_genre={id_genre}/>
      {/* <Poster num={6} genre={genre} id_genre={id_genre}/>
      <Poster num={7} genre={genre} id_genre={id_genre}/>
      <Poster num={8} genre={genre} id_genre={id_genre}/>
      <Poster num={9} genre={genre} id_genre={id_genre}/>
      <Poster num={10} genre={genre} id_genre={id_genre}/>
      <Poster num={11} genre={genre} id_genre={id_genre}/>
      <Poster num={12} genre={genre} id_genre={id_genre}/>
      <Poster num={13} genre={genre} id_genre={id_genre}/>
      <Poster num={14} genre={genre} id_genre={id_genre}/>
      <Poster num={15} genre={genre} id_genre={id_genre}/>
      <Poster num={16} genre={genre} id_genre={id_genre}/>
      <Poster num={17} genre={genre} id_genre={id_genre}/>
      <Poster num={18} genre={genre} id_genre={id_genre}/>
      <Poster num={19} genre={genre} id_genre={id_genre}/> */}
    </StyledRowMovies>
  )
};

const StyledRowMovies = styledComponents.div`
  display: flex;
  flex-direction: row;
  height: 23em;
  background-color: #758787;
  width: 100%;
  margin-left: 1em;
`;

export default RowMovies;