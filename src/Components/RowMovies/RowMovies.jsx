import React from 'react';
import styledComponents from 'styled-components';
import Poster from '../Poster/Poster';

var as = ["max","jack","sam"];  
var s = as.sort(func);  

function func(a, b) {  
  return 0.5 - Math.random();
}

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
              11, 12, 13, 14, 15, 16, 17, 18, 19];
num = num.sort(() => Math.random() - 0.5);

const RowMovies = ({genre, id_genre}) => {
  return (
    <StyledRowMovies>
      <Poster num={num[0]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[1]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[2]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[3]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[4]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[5]} genre={genre} id_genre={id_genre}/>
      {/* <Poster num={num[6]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[7]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[8]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[9]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[10]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[11]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[12]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[13]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[14]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[15]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[16]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[17]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[18]} genre={genre} id_genre={id_genre}/>
      <Poster num={num[19]} genre={genre} id_genre={id_genre}/> */}
    </StyledRowMovies>
  )
};

const StyledRowMovies = styledComponents.div`
  display: flex;
  flex-direction: row;
  height: 24em;
  background-color: #758787;
  width: 98%;
  margin-left: 1em;
`;

export default RowMovies;