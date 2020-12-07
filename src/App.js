import React, {Component} from 'react';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router />
        <FlashMessage position="bottom" />
      </NavigationContainer>
    );
  }
}
