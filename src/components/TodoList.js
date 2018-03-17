import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   FlatList,
   StatusBar,
   ActivityIndicator,
 } from 'react-native';
import { Button, Text as NBText } from 'native-base';

import TodoItem from './TodoItem';


export default class TodoList extends Component {

static navigationOptions = {
  header: null
}

state = {
  items: null
}

componentDidMount(){
  setTimeout(() => {
    const tasksFromNetwork = ["fsadf", "dsasd"]
    this.setState({
      items: tasksFromNetwork
    })
  }, 2000)
}

addItem = () => {
  this.props.navigation.navigate(
    'AddTask',
    { saveItem: this.saveItem }
  );
}

saveItem = (newTask) => {
  this.setState({
    items: [...this.state.items, newTask]
  })
}

  render(){
     return(
       <View style={styles.container}>
       <StatusBar barStyle="light-content"/>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Todo List
            </Text>
          </View>
          <View  style={styles.contentWrapper}>
            <View style={styles.contentHeader}>
              <Text>List Header</Text>
            </View>

            {
              !this.state.items && <ActivityIndicator
                size = "large"
                color="#2288ee"
                style={{ marginTop: 20 }}
              />
            }

            <FlatList
              style={styles.content}
              data={this.state.items}
              renderItem={(row) => {
                return <TodoItem title={row.item} />
              }}
              keyExtractor={item => item}
            />

              <View  style={styles.contentFooter}>
                <Button onPress={this.addItem}>
                  <NBText>Add Item</NBText>
                </Button>
              </View>

          </View>

       </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    paddingTop:20,
    alignSelf: 'stretch',
    backgroundColor: '#228Bee',
    borderBottomWidth: 1,
    borderColor: '#0066cc',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  content:{
    flex: 1,
    alignSelf: 'stretch'
  },
  contentWrapper:{
    flex: 1,
  },
  contentHeader:{
      height: 50,
      borderBottomWidth: 1,
      borderColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center'
  },
  contentFooter:{
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});
