import React from 'react';
import styledComponents from 'styled-components';

const Backdrop = ({random, id_genre, url}) => {

  return (
    <StyledBackdrop src={url} alt="TMDB movie" />
  )
};

const StyledBackdrop = styledComponents.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 15%;
`;

export default Backdrop;