export const film = {
  budget: 0,
  genres: ['Action', 'Adventure', 'Drama', 'Science Fiction', 'Thriller'],
  id: 351286,
  overview: 'A volcanic eruption threatens',
  poster_path: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
  release_date: '2018-06-01',
  revenue: 0,
  runtime: null,
  tagline: 'Life finds a way',
  title: 'Jurassic World: Fallen Kingdom',
  vote_average: 0,
  vote_count: 28,
};

export const moviesData = {
  data: new Array(6).fill(film),
  limit: 0,
  offset: 0,
  total: 0,
};

export const radioOptions = {
  title: 'Radio title',
  list: [
    {
      key: 'key 1',
      title: 'title 1',
    },
    {
      key: 'key 2',
      title: 'title 2',
    },
  ],
};
