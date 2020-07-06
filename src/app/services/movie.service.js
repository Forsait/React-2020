export const getMovieList = (opt) => {
  const url = `/api/movies?offset=0&limit=100&sortBy=${opt.sortBy}&search=${opt.query || ''}&searchBy=${opt.searchBy}&sortOrder=desc`
  return fetch(url);
}

export const getMovieById = (id) => {
  const url = `/api/movies/` + id;
  return fetch(url);
}