import { connect } from 'react-redux';

import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import { createStore, applyMiddleware, compose } from 'redux';

import React from 'react';
import Component1 from '../components/component1'
import Component2 from '../components/component2'
import Component3 from '../components/component3'

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import logger from 'redux-logger';

import reducers from '../reducers';
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");


import {AppNavigator} from '../reducers/navigation'
export const store = createStore(reducers, applyMiddleware(logger, middleware));





class AppWithNavigationState extends React.Component {

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation = {addNavigationHelpers({
          dispatch,
          state:nav,
          addListener
        })}
      />
    );
  }
}
const mapStateToProps = state => ({
  nav:state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
