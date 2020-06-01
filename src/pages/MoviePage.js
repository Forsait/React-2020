import React from 'react';

import MovieInfo from '../containers/movie/MovieInfo';
import MovieList from '../containers/movie/MovieList';
import Footer from '../components/common/Footer';

import { getMovieList, getMovieById } from '../services/movie.service';

export default class MoviePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      movie: {},
      movieList: [],
    };
  }

  componentDidMount() {
    this.loadMovieInfo();
  }

  loadMovieInfo() {
    getMovieById(353081)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movie: res,
        });
        console.log('movie', res);
        this.loadMoviesByGenre(res.genres[0])
      })
  }

  loadMoviesByGenre(genre) {
    const opt = {
      sortBy: 'release_date',
      query: genre,
      searchBy: 'genres'
    };

    getMovieList(opt)
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
    return <>
      <MovieInfo movie={this.state.movie} />
      <MovieList movieArr={this.state.movieList}/>
      <Footer />
    </>
  }

}