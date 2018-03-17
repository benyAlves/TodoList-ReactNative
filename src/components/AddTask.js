import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

type Props = {};
export default class AddTask extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Text style={{
            fontSize:20,
            textAlign: 'center',
            padding: 20
          }}>Add Task</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
