import {
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUC,
  GET_MOVIES_LIST_SUC
} from '../actions/movie-info';


export const initialState = {
  movieId: 0,
  movieInfo: {
    budget: 0,
    genres: [''],
    id: 0,
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: null,
    tagline: '',
    title: '',
    vote_average: 0,
    vote_count: 0,
  },
  moviesData: {
    data: []
  }
};

export const movieInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_INFO:
      return { 
        ...state,
      };
    case GET_MOVIE_INFO_SUC:
      return { 
        ...state,
        movieInfo: action.payload
      }
    case GET_MOVIES_LIST_SUC:
      return { 
        ...state,
        moviesData: action.payload
      }
    default:
      return state;
  }
};