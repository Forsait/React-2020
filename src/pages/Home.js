import React from 'react';

import Search from '../containers/search/Search';
import MovieList from '../containers/movie/MovieList';
import Footer from '../components/common/Footer';

import { getMovieList } from '../services/movie.service';

const startSearchOptions = {
  searchBy: 'title',
  sortBy:'release_date',
}

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.searchFormSubmit = this.searchFormSubmit.bind(this);

    this.state = {
      result: {
        data: [],
        limit: 0,
        offset: 0,
        total: 0
      },
      totalResult: null
    };

    this.offset = 0;
    this.limit = 6;
  }

  searchFormSubmit(opt, skipUpdateTotal = false) {
    getMovieList(opt)
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        this.setState({
          result: res,
          totalResult: skipUpdateTotal ? this.state.totalResult : res.total
        });
      })
  }

  componentDidMount() {
    this.searchFormSubmit(startSearchOptions, true);
  }

  render() {
    return (
      <>
        <Search resultTotal={this.state.totalResult} submit={this.searchFormSubmit}/>
        <MovieList movieArr={this.state.result.data}/>
        <Footer />
      </>
    )
  }
}