//
//
//
//
//
//
import { getMovies } from '../services/moviesApi';

const ChangeRatingActionTypes = {
  ADD_NEW_RATING: 'ChangeRatingActionTypes/ADD_NEW_RATING',
  SAVE_MOVIES: 'ChangeRatingActionsTypes/SAVE_MOVIES',
};

const ChangeRatingActions = {

  // addNewRating: payload => ({
  //   type: ChangeRatingActionTypes.ADD_NEW_RATING,
  //   payload
  // }),
  //
  // getByApi: () => (dispatch) => {
  //   fetch('http://www.mocky.io/v2/5acddfc12e00001000c2bf73')
  //   .then (
  //     res => res.json()
  //   )
  //   .then (
  //     data => {
  //       dispatch(ChangeRatingActions.addNewRating(data.movies))
  //     }
  //   )
  // }

  getByApi: () => (dispatch) => {
    getMovies()
    .then( (res) => {
      res.json()
      .then( (data) => {
        dispatch(ChangeRatingActions.saveMoviesStore(data));
      })
    });
  },

  saveMoviesStore: payload => ({ type: ChangeRatingActionTypes.SAVE_MOVIES, payload }),

  changeRating: payload => ({ type: ChangeRatingActions.ADD_NEW_RATING, payload }),

};

export {
  ChangeRatingActionTypes,
  ChangeRatingActions,
};
