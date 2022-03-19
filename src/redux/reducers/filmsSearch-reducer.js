import {MOVIE_DETAIL, MOVIES_TITLE} from '../types';

const initialState = {
  film: {},
  movies: []
};

const filmsSearchReducer = (state = initialState, action) => {
  switch(action.type) {
    // Saves movie data
    case MOVIE_DETAIL:
      return {...state, film: action.payload};

    case MOVIES_TITLE:
      return {...state, movies: action.payload};

    default :
      return state
  }
}

export default filmsSearchReducer;