import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Pure from './components/Pure';
import Functional from './components/Functional';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Pure />, document.getElementById('root1'));
ReactDOM.render(<Functional />, document.getElementById('root2'));

const elem = React.createElement('div', null, 
  React.createElement('h1', null, 'Hello world!'),
  'Created by React.createElement'
);
ReactDOM.render(elem, document.getElementById('root3'));