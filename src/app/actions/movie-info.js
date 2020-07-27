import { getMovieList, getMovieById } from '../../app/services/movie.service';

export const GET_MOVIE_INFO = 'GET_MOVIE_INFO';
export const GET_MOVIE_INFO_SUC = 'GET_MOVIE_INFO_SUC';
export const GET_MOVIES_LIST_SUC = 'GET_MOVIES_LIST_SUC';

export const getMovieInfo = (id) => {
  return dispatch => {
    // dispatch({...something in future});

    return getMovieById(id)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: GET_MOVIE_INFO_SUC,
          payload: res,
        });

        const opt = {
          sortBy: 'release_date',
          query: res.genres[0],
          searchBy: 'genres'
        };

        return getMovieList(opt)
      })
      .then(res => res.json())
      .then(
        res => {
          dispatch({
            type: GET_MOVIES_LIST_SUC,
            payload: res,
          });
        },
        err => {
          console.log(err);
        }
      )
  }
}
