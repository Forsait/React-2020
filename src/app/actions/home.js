import { getMovieList } from '../services/movie.service';

export const HOME_CHANGE = 'HOME_CHANGE';
export const GET_HOME_FIMLS_SUC = 'GET_HOME_FIMLS_SUC';

export const homeChange = (opt) => (dispatch) =>
// dispatch({...something in future});

  getMovieList(opt)
    .then((res) => res.json())
    .then(
      (res) => {
        dispatch({
          type: GET_HOME_FIMLS_SUC,
          payload: res,
        });
      },
      (err) => {
        // do nothing
        console.log(err);
      },
    );
