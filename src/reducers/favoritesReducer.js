import { TOGGLE_FAVORITES, ADD_FAVORITES, DELETE_FAVORITES } from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavorites: false
}


const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITES:
            return({...state, favorites: [...state.favorites, action.payload]})

        case DELETE_FAVORITES:
            return({...state, favorites: state.favorites.filter(item => (item.id !== action.payload))})

        case TOGGLE_FAVORITES:
            return({...state, displayFavorites: !state.displayFavorites})

        default: return state
    }

}

export default favoritesReducer
