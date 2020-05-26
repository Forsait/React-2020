import React from 'react';

import styles from './MovieList.module.scss';
import Movie from './Movie';

export default class MovieList extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    let moviesResult;
    if (this.props.movieArr.length > 0) {
      const movies = this.props.movieArr.map((item) => {
        return <Movie key={item.id} data={item} />
      });
      moviesResult = <div className={styles.movie_container}>
        {movies}
      </div>
    } else {
      moviesResult = <div className={styles.not_found}>
        No films found
      </div>
    }

    return <div className={styles.movies}>
      {moviesResult}
    </div>
  }
}