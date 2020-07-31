import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './app/store';

import './style/main.scss';
import ErrorBoundary from './app/components/error/ErrorBoundary';

import Home from './app/pages/Home';
import MoviePage from './app/pages/MoviePage';
import NotFound from './app/pages/NotFound';


ReactDOM.render(
  <div className="main_container">
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movieinfo/:id" component={MoviePage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  </div>,
  document.getElementById('root'),
);
