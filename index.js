import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header'

const App = () => {
  return (
    <Header/>
  );
};

//render to the device
//auto returns app
AppRegistry.registerComponent('albums', () => App);



