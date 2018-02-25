import { createStore, applyMiddleware, compose } from 'redux';

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import logger from 'redux-logger';

import reducers from '../reducers';


const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const store = createStore(reducers, applyMiddleware(logger, middleware));



export default store;
