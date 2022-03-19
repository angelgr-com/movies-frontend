import { combineReducers } from 'redux';

import credentials from './loginData-reducer';
import search from './filmsSearch-reducer';

const rootReducer = combineReducers({
    credentials,
    search
});

export default rootReducer;