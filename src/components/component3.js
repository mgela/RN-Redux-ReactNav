/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {connect} from 'react-redux';
import {navigate} from '../actions'

class Component3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Component3 component</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
})

const mapDispatchToProps = (dispatch) => ({
// navigate: ()=> dispatch(navigate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component3);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
