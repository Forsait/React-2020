import { getMovieList } from '../../app/services/movie.service';

export const HOME_CHANGE = 'HOME_CHANGE';
export const GET_HOME_FIMLS_SUC = 'GET_HOME_FIMLS_SUC';

export const homeChange = (opt) => {
  return dispatch => {
    // dispatch({...something in future});
  
    return getMovieList(opt)
      .then(res => res.json())
      .then(
        res => {
          dispatch({
            type: GET_HOME_FIMLS_SUC,
            payload: res,
          })
        },
        err => {
          // do nothing
        }
      )
  }
}

