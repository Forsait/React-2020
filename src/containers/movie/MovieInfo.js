import React from 'react';

import styles from './MovieInfo.module.scss';
import Header from '../../components/common/Header';
import Westside from '../../components/common/Westside';
import { getYear } from '../../utils/date';

import searchIcon from 'Assets/icon-search.svg';

export default class MovieInfo extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let genreView = '';
    if (this.props.movie.genres) {
      genreView = <div>Film by <span className={styles.som}>{this.props.movie.genres[0]}</span> genre</div>
    }

    return <>
      <div className={styles.container}>
        <Header>
          <a href="#" className={styles.search_link}>
            <img src={searchIcon} />
          </a>
        </Header>

        <div className={styles.movie}>
          <img src={this.props.movie.poster_path} className={styles.poster}/>
          <div className={styles.info}>
            <div className={styles.title_box}>
              <h1 className={styles.title}>{this.props.movie.title}</h1>
              <span className={styles.rating}>{this.props.movie.vote_average}</span>
            </div>
            <div className={styles.subtitle}>Oscar winning movie</div>
            <div className={styles.maus}>
              <div className={styles.t4}>
                <span className={styles.t4_1}>{ getYear(this.props.movie.release_date) }</span>
                <span className={styles.t4_2}>year</span>
              </div>
              <div className={styles.t4}>
                <span className={styles.t4_1}>{this.props.movie.runtime || '-'}</span>
                <span className={styles.t4_2}>min</span>
              </div>
            </div>
            <div className={styles.description}>{this.props.movie.overview}</div>
          </div>
        </div>
      </div>
      <Westside className={styles.hot}>
        {genreView}
      </Westside>
    </>
  }
}