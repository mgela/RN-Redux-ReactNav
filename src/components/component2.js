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
import {pushScreen} from '../actions'
// import {navigateTo} from '../actions'

class Component2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Component2 component</Text>
        <Button
        onPress={()=> {this.props.navigate('Component3')}}
        title="Go to COMP #3"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav,
})

const mapDispatchToProps = (dispatch) => ({
navigate: (screen)=> dispatch(navigate(screen)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component2);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
