//
//
//
//
//
//
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { ChangeRatingActions } from './../actions/changeRatingActions';

@connect(store => ({ changeStore: store.changeStore }))

class ChangeRatingHome extends Component {

  componentDidMount() {
    console.log( 'component did mount' );
    this.props.dispatch(ChangeRatingActions.getByApi());
  }

  newRating = ( id, rating ) => {
    console.log(rating);
    this.props.dispatch( ChangeRatingActions.newRating({ id, rating }))
  };

  getMoviesList = (movie) => (
    <div key = {movie.id} className = 'movie-id'>

      <h1 className = 'movie-name'> {movie.name} </h1>
      <img src = {movie.image} />

      <div className = 'movie-rating'> {movie.rating} <br/>
        <button onClick = { () => { this.newRating( movie.id, 1)}}> 1 </button>
        <button onClick = { () => { this.newRating( movie.id, 2)}}> 2 </button>
        <button onClick = { () => { this.newRating( movie.id, 3)}}> 3 </button>
        <button onClick = { () => { this.newRating( movie.id, 4)}}> 4 </button>
        <button onClick = { () => { this.newRating( movie.id, 5)}}> 5 </button>
      </div>


    </div>

  );

  getDisplay = () => {
    return (<div className = 'home-page'>

      <div className = 'introduction'>
        <h1> Welcome to rating system </h1>
      </div>

      <ul className = 'movies-desc'>
        { this.props.changeStore.moviesList.map( this.getMoviesList )}
      </ul>

    </div>)
  };

  showLoading = () => {
    return (<div className = 'loader'> Loading Movies... </div>)
  };

  render() {
    if (this.props.changeStore.isLoading) {
      return this.showLoading();
    }
    return this.getDisplay();
  }

}

export default ChangeRatingHome;
