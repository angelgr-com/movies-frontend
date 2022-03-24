import React from 'react';
import styledComponents from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Backdrop from '../Backdrop/Backdrop';

const Header = ({random, id_genre}) => {
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);

  useEffect(() => {

    try {
      const getUrl = async () => {
        // 2021 popular movies by genre
        // https://www.themoviedb.org/documentation/api/discover
        const results = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${id_genre}&primary_release_year=2021&sort_by=popularity.desc`);
        const poster = results.data.results[random].backdrop_path;
        const title = results.data.results[random].title;
        const overview = results.data.results[random].overview;
        setUrl('https://image.tmdb.org/t/p/w1280' + poster);
        setTitle(title);
        setOverview(overview);
      };
      getUrl();
    } catch (err) {
      console.log(err);
    }
  }, [random, id_genre])

  return (
    <StyledHeader>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
      <Overlay />
      <Backdrop random={random} id_genre={id_genre} url={url} />
    </StyledHeader>
  )
};

const Overlay = styledComponents.div`
  background-color: black;
  opacity: 0.7;
  height: 25em;
  width: 100%;
  position: absolute;
  z-index: 1;
`;
const StyledHeader = styledComponents.div`
  background-color: hsl(37, 100%, 71%, 50%);
  height: 25em;
  margin-bottom: 1em;
  position: relative;
  width: 100%;
  z-index: 1;
`;
const Title = styledComponents.div`
  font-size: 4rem;
  color: white;
  margin: 0.5em;
  position: absolute;
  z-index: 10;
`;
const Overview = styledComponents.div`
  font-size: 1.3rem;
  width: 30%;
  top: 5em;
  left: 1em;
  overflow: hidden;
  color: white;
  margin: 0.25em;
  padding: 0.25em;
  position: absolute;
  z-index: 10;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default Header;