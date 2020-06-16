import React from 'react';

import ErrorBoundary from './app/components/error/ErrorBoundary';
import Home from './app/pages/Home';
import MoviePage from './app/pages/MoviePage';


export default class App extends React.Component {
  render() {
    return (
      <div className='main_container'>
        <ErrorBoundary>
          <MoviePage />
          <div style={{height: '50px', backgroundColor: '#ffffff'}}></div>
          <Home />
        </ErrorBoundary>
      </div>
    )
  }
}
