import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorites } from '../actions/movieActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    const handleDeleteFavorites = () => {
        // console.log(props.dispatch(deleteFavorites(favorites.id)))
        console.log(props.deleteFavorites(favorites.id))
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={handleDeleteFavorites} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {

    return({
        favorites: state.favoritesReducer.favorites,
        displayFavorites: state.favoritesReducer.displayFavorites
    })
}


export default connect(mapStateToProps, { deleteFavorites } )(FavoriteMovieList);