import React from 'react';
import { shallow } from 'enzyme';

import MovieInfo from './MovieInfo';

const film = {
  budget: 0,
  genres: ["Action", "Adventure", "Drama", "Science Fiction", "Thriller"],
  id: 351286,
  overview: "A volcanic eruption threatens",
  poster_path: "https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg",
  release_date: "2018-06-01",
  revenue: 0,
  runtime: null,
  tagline: "Life finds a way",
  title: "Jurassic World: Fallen Kingdom",
  vote_average: 0,
  vote_count: 28,
}

describe('MovieInfo component', () => {

  it('should be render correctly', () => {
    const com = shallow(<MovieInfo movie={film} />);
    expect(com).toMatchSnapshot()
  });

});
