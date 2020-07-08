import { createSelector } from "reselect";

export const moviesDataSelector = ({moviesData, offset, limit}) => {
  const movies = moviesData.data.slice(offset, offset + limit);
  return  {
    ...moviesData,
    data: movies,
  }
};

export const moviesListSelector = ({moviesData}) => moviesData.data

export const moviesListGoodSelector = createSelector(
  moviesListSelector,
  (moviesList = []) => {
    return moviesList.filter(film => film.vote_average > 5).slice(0, 6)
  },
)
