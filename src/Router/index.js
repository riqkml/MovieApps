import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, HomeScreen, LoginScreen, Awe} from '../Pages';

const Stack = createStackNavigator();
const hide = {headerShown: false};

export default class Router extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Awe" component={Awe} options={hide} />
        <Stack.Screen name="Splash" component={SplashScreen} options={hide} />
        <Stack.Screen name="Login" component={LoginScreen} options={hide} />
        <Stack.Screen name="Home" component={HomeScreen} options={hide} />
      </Stack.Navigator>
    );
  }
}
