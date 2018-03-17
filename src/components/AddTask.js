import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class AddTask extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <TextInput style={styles.input}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
            Add
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  button:{
    padding: 10,
    marginTop:10,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize:20,
    color: '#fff'
  }
});
