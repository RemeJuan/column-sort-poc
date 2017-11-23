import React from 'react';
import { render } from 'react-dom';
import configureStore from './core/store';
import createHistory from 'history/createBrowserHistory';
import Root from './core/root';

const store = configureStore();
const history = createHistory();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
