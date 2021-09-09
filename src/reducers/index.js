import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

// export default movieReducer;

export default combineReducers({
    movieReducer: movieReducer,
    favoritesReducer: favoritesReducer
})