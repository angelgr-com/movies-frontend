import { connect } from 'react-redux';
import React from 'react';
import styledComponents from 'styled-components';
import Rent from '../Rent/Rent';

const Backdrop = (props) => {

  return (
    <>
    <StyledBackdrop src={props.url} alt="TMDB movie" />
    {/* {
      // Show button Rent if user is logged in
      props.credentials.token && 
      <Rent
        id={props.search.id}
        token={props.credentials.token}
        idUser={props.credentials.user.id}
      />
    } */}
    </>
  )
};

const StyledBackdrop = styledComponents.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 15%;
`;

export default connect((state) => ({
  credentials: state.credentials,
  search : state.search.film
}))(Backdrop);