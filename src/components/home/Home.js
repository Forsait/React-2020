import React from 'react';

import Search from '../search/Search';
import MovieList from '../movie/MovieList';
import Footer from '../common/Footer';

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
    const url = `/api/movies?offset=${this.offset}&limit=${this.limit}&sortBy=${opt.sortBy}&search=${opt.query || ''}&searchBy=${opt.searchBy}&sortOrder=desc`
    fetch(url)
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