import React from 'react';
import App from "next/app";

import '../../style/main.scss';
import ErrorBoundary from '../components/error/ErrorBoundary'
import { wrapper } from '../store';

class MyApp extends App {

  async getInitialProps ({ Component, ctx }) {
    // Keep in mind that this will be called twice on server, one for page and second for error page

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        appProp: ctx.pathname
      }
    };
  };

  render(ctx) {
    return (
      <ErrorBoundary>
        <Component {...ctx} />
      </ErrorBoundary>
    )
  }
}

export default wrapper.withRedux(App);