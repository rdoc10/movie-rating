//
//
//
//
//
//
import {
  ChangeRatingActionTypes
}
from './../actions/ChangeRatingActions';

const initialState = {
  moviesList: [],
  isLoading: true,
};

// const ChangeRatingHomeReducer = (state = initialState, action) => {
//   switch(action.type) {
//
//     case ChangeRatingActionTypes.ADD_NEW_RATING:
//       return {
//         ...state,
//         moviesList: action.payload,
//       };
//
//     default:
//       return state;
//   }
// };

const newRating = ( moviesList, id, rating ) => {
  return moviesList.map( movie => {
    if( moviesList.id === id ) {
      return {
        ...movie,
        rating,
      }
    }
    return movie;
  });
}

const ChangeRatingHomeReducer = (state = initialState, action) => {
  switch(action.type) {

    case ChangeRatingActionTypes.SAVE_MOVIES:
      return {
        isLoading: false,
        moviesList: action.payload,
      }

    case ChangeRatingActionTypes.ADD_NEW_RATING:
      return {
        ...state,
        moviesList: newRating( state.moviesList, action.payload.id, action.payload.rating),
      };

    default:
      return state;
  }
};

export default ChangeRatingHomeReducer;
