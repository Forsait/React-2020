import React from 'react';
import { Provider } from 'react-redux'

import '../../style/main.scss';
import ErrorBoundary from '../components/error/ErrorBoundary'
import store from '../store';

export default function App({ Component, pageProps }) {

  return (
    <ErrorBoundary>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </ErrorBoundary>
  )
}