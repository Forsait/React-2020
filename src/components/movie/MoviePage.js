import React from 'react';

import styles from './MoviePage.module.scss';
import MovieList from './MovieList';
import Footer from '../common/Footer';
import Brand from '../common/Brand';

import searchIcon from '../../assets/icon-search.svg';

export default class MoviePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      movie: {},
      movieList: [],
      releaseYear: '',
    };
  }

  componentDidMount() {
    this.loadMovieInfo();
  }

  loadMovieInfo() {
    const url = `/api/movies/` + 353081;
    fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        movie: res,
        releaseYear: this.getReleaseYear(res.release_date),
      });
      console.log('movie', res);
      this.loadMoviesByGenre(res.genres[0])
    })
  }

  loadMoviesByGenre(genre) {
    const url = `/api/movies?offset=0&limit=6&sortBy=release_date&search=${genre}&searchBy=genres&sortOrder=desc`;

    fetch(url)
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        this.setState({
          movieList: res.data,
        });
      })
  }

  getReleaseYear(dateStr) {
    if (!dateStr) return '';
    return dateStr.slice(0, 4);
  }

  render() {

    let genreView = '';
    if (this.state.movie.genres) {
      genreView = <div>Film by <span className={styles.som}>{this.state.movie.genres[0]}</span> genre</div>
    }

    return <>
      <div className={styles.container}>
        <div className={styles.sub_header}>
          <Brand />
          <a href="#" className={styles.search_link}>
            <img src={searchIcon} />
          </a>
        </div>

        <div className={styles.movie}>
          <img src={this.state.movie.poster_path} className={styles.poster}/>
          <div className={styles.info}>
            <div className={styles.title_box}>
              <h1 className={styles.title}>{this.state.movie.title}</h1>
              <span className={styles.rating}>{this.state.movie.vote_average}</span>
            </div>
            <div className={styles.subtitle}>Oscar winning movie</div>
            <div className={styles.maus}>
              <div className={styles.t4}>
                <span className={styles.t4_1}>{this.state.releaseYear}</span>
                <span className={styles.t4_2}>year</span>
              </div>
              <div className={styles.t4}>
                <span className={styles.t4_1}>{this.state.movie.runtime || '-'}</span>
                <span className={styles.t4_2}>min</span>
              </div>
            </div>
            <div className={styles.description}>{this.state.movie.overview}</div>
          </div>
        </div>
      </div>
      <div className={`${styles.hot} westside`}>
        {genreView}
      </div>
      <MovieList movieArr={this.state.movieList}/>
      <Footer />
    </>
  }

}