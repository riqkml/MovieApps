import React, {Component} from 'react';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mockMovies from './utils/data/mockMovies';
import {store} from './Redux';
// function moviesReducer(state = mockMovies.Search, action) {
//   return state;
// }

// const store = createStore(moviesReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router />
          <FlashMessage position="bottom" />
        </NavigationContainer>
      </Provider>
    );
  }
}
