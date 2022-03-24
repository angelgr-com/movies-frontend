import React from 'react';
import styledComponents from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Poster = (props) => {
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [film, setFilm] = useState(null);
  const [movieId, setmovieId] = useState(null);
  let navigate = useNavigate();

  const toInfo = () => {
    props.dispatch({type: MOVIE_DETAIL, payload: film});
    setTimeout(()=>{
      navigate('/info');
    },500);
  }

  const getUrl = async () => {
    // 2021 popular movies by genre
    // https://www.themoviedb.org/documentation/api/discover
    const results = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${props.id_genre}&primary_release_year=2021&sort_by=popularity.desc`);
    const film = results.data.results[props.num];
    const poster = results.data.results[props.num].poster_path;
    const title = results.data.results[props.num].title;
    const movieId = results.data.results[props.num].id;
    setTitle(title);
    setmovieId(movieId);
    setFilm(film);
    setUrl('https://image.tmdb.org/t/p/w500' + poster);
  };

  useEffect(() => {
    getUrl();
  },)

  return (
    <StyledPoster src={url} id={movieId} alt={title} onClick={()=>toInfo()}/>
  )
};

const StyledPoster = styledComponents.img`
  width: 12em;
  object-fit: cover;
  margin-right: 0.5em;
  cursor: pointer;
  box-shadow: -6px 6px 5px 0px rgba(0,0,0,0.52);

  &:hover {
    transform: scale(1.1);
    transition: all ease 0.2s;
    box-shadow: -7px 7px 6px 0px rgba(0,0,0,0.40);
  }
`;

export default connect()(Poster);