import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class About extends Component<Props> {
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

});
