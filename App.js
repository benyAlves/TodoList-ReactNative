/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoList from './src/components/TodoList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TodoList/>
    );
  }
}

const styles = StyleSheet.create({

});
