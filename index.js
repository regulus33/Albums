import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const App = () => {
  return (
    <Header headerText={'Albums'}/>
  );
};

//render to the device
//auto returns app
AppRegistry.registerComponent('albums', () => App);



