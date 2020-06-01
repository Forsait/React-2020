export const getMovieList = (opt) => {
  const url = `/api/movies?offset=6&limit=6&sortBy=${opt.sortBy}&search=${opt.query || ''}&searchBy=${opt.searchBy}&sortOrder=desc`
  return fetch(url);
}

export const getMovieById = (id) => {
  const url = `/api/movies/` + id;
  return fetch(url);
}