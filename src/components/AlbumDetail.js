import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {

  const {title, artist, thumbnail_image} = album;
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle  } = styles

  return(
    <Card>
      <CardSection>
        <View style={ thumbnailContainerStyle } >
          <Image
          style={ thumbnailStyle }
          source={{ uri: thumbnail_image}}
          />
        </View>
        <View style={ headerContentStyle }>
          <Text style={ headerTextStyle }>{title}</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
    </Card>
  )
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },

    thumbnailStyle: {
      height: 50,
      width: 50
    },

    thumbnailContainerStyle: {
      justifyContent: 'center',
      martginLeft: 10,
      marginRight: 10
    },

    headerTextStyle: {
      fontSize: 18
    }

}

export default AlbumDetail