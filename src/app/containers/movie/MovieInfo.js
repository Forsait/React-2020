// @flow
import React from 'react';
import { connect } from 'react-redux';

import styles from './MovieInfo.module.scss';
import Header from '../../components/common/Header';
import Westside from '../../components/common/Westside';
import { getYear } from '../../utils/date';

import searchIcon from '../../../assets/icon-search.svg';

import type { Movie as MovieType } from '../../models/movie';

type Props = {
  movie: MovieType
}

type State = {
  src: string,
}

export class MovieInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    let genreView = null;
    if (movie.genres) {
      genreView = (
        <div>
          Film by
          <span className={styles.som}>{movie.genres[0]}</span>
          {' '}
          genre
        </div>
      );
    }

    return (
      <>
        <div className={styles.container}>
          <Header>
            <span className={styles.search_link}>
              <img src={searchIcon} alt="alt" />
            </span>
          </Header>

          <div className={styles.movie}>
            <img src={movie.poster_path} className={styles.poster} alt="alt" />
            <div className={styles.info}>
              <div className={styles.title_box}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
              </div>
              <div className={styles.subtitle}>Oscar winning movie</div>
              <div className={styles.maus}>
                <div className={styles.t4}>
                  <span className={styles.t4_1}>{ getYear(movie.release_date) }</span>
                  <span className={styles.t4_2}>year</span>
                </div>
                <div className={styles.t4}>
                  <span className={styles.t4_1}>{movie.runtime || '-'}</span>
                  <span className={styles.t4_2}>min</span>
                </div>
              </div>
              <div className={styles.description}>{movie.overview}</div>
            </div>
          </div>
        </div>
        <Westside className={styles.hot}>
          {genreView}
        </Westside>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { movieInfo } = state.movieInfo;
  return { movie: movieInfo };
}

export default connect(mapStateToProps)(MovieInfo);
