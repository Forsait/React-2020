function getBaseURL() {
  return process.browser ? '/api' : 'https://reactjs-cdp.herokuapp.com';
}

export const getMovieList = (opt) => {
  const query = `/movies?offset=0&limit=100&sortBy=${opt.sortBy}&search=${opt.query || ''}&searchBy=${opt.searchBy}&sortOrder=desc`;
  return fetch(getBaseURL() + query);
};

export const getMovieById = (id) => {
  const url = `/movies/${id}`;
  return fetch(getBaseURL() + url);
};
