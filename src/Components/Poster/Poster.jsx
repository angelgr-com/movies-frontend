import React from 'react';
import styledComponents from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';

const Poster = (props) => {
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [idTMDB, setIdTMDB] = useState(null);
  let navigate = useNavigate();
  
  const getUrl = async () => {
    // 2021 popular movies by genre
    // https://www.themoviedb.org/documentation/api/discover
    const results = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${props.id_genre}&primary_release_year=2021&sort_by=popularity.desc`);
    const poster = results.data.results[props.num].poster_path;
    setUrl('https://image.tmdb.org/t/p/w500' + poster);
    setTitle(results.data.results[props.num].title);
    setIdTMDB(results.data.results[props.num].id);
  };

  useEffect(() => {
    getUrl();
  });

  const selectedFilm = (pelicula) => {
        
    console.log(pelicula);
    //Guardamos la pelicula escogida en redux
    props.dispatch({type:MOVIE_DETAIL, payload: pelicula});


    // Redirect to movie info
    navigate("/info");
}

  
  return (
    <StyledImg src={url} alt={title} onclick={()=>selectedFilm({idTMDB})}/>
  )
};

const StyledImg = styledComponents.img`
  height: 17em;
  object-fit: cover;
  margin-right: 1em;
  width: 100%;
`;

export default connect()(Poster);