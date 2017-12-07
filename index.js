import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const App = () => {
  return (
    <View style={ { flex: 1 } }>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
  );
};

//render to the device
//auto returns app
AppRegistry.registerComponent('albums', () => App);



