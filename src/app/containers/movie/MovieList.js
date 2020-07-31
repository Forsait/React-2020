// @flow
import React from 'react';

import styles from './MovieList.module.scss';
import Movie from '../../components/movieItem/Movie';

import type { Movie as MovieType } from '../../models/movie';

type Props = {
  movieArr: MovieType[]
}

export default class MovieList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    let moviesResult;
    if (this.props.movieArr.length > 0) {
      const movies = this.props.movieArr.map((item) => <Movie key={item.id} data={item} />);
      moviesResult = (
        <div className={styles.movie_container}>
          {movies}
        </div>
      );
    } else {
      moviesResult = (
        <div className={styles.not_found}>
          No films found
        </div>
      );
    }

    return (
      <div className={styles.movies}>
        {moviesResult}
      </div>
    );
  }
}
