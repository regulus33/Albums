import React, { Component } from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component {

 constructor(props) {
  super(props)
  this.state = { albums: [] };

  this.renderAlbums = this.renderAlbums.bind(this)
 }

  componentWillMount() {
     fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map( album => <Text>{album.title}</Text> )
  }

  render(){

    console.log(this.state)

    return(
      <View>
        <Text>{this.renderAlbums()}</Text>
      </View>
    );
  }
}

export default AlbumList;
