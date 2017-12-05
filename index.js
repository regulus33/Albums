import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//render to the device
//auto returns app
AppRegistry.registerComponent('albums', () => App);



