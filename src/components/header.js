import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const {textStyle, viewStyle} = styles
  //text tag is from react native
  return(
    <View style = { styles.viewStyle }>
      <Text style = { textStyle }>Albums</Text>
    </View>
    );
}

const styles = {
  textStyle: {
    fontSize:20
  },
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }

}


export default Header