import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import AboutImage from '../images/star.png';

type Props = {};
export default class About extends Component<Props> {

  static navigationOptions = {
    header: null,
    tabBarIcon:({tintColor}) => {
      <Image
       style={[styles.icon, { tintColor }]}
       source={AboutImage}/>
    },
    tabBarLabel: 'About'
  }

  state = {
    items: null
  }


  render() {
    return (
        <View style={{flex: 1}}>
          <Text style={{
            fontSize:20,
            textAlign: 'center',
            padding: 20
          }}>About</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    height: 24,
    resizeMode: 'contain'
  }
});
