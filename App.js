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
import { TabNavigator, StackNavigator } from 'react-navigation';

import TodoList from './src/components/TodoList';
import About from './src/components/About';
import AddTask from './src/components/AddTask';


const TaskNav = StackNavigator({
  TodoList: { screen: TodoList },
  AddTask: { screen: AddTask }
}, {
  mode: 'modal'
})

const TabNav = TabNavigator({
  TaskNav: { screen: TaskNav },
  About: { screen: About }},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#0066cc',
       inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    }
})


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TabNav/>
    );
  }
}

const styles = StyleSheet.create({

});
