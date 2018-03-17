import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import TodoItem from './TodoItem';


export default class TodoList extends Component {

  render(){

    const items = [
      "1. Go to the Store",
      "2. Get the Milk",
      "3. Bring it home",
      "4. Consume it well",
    ]
    const thirdTask = "Bring it home";
     return(
       <View style={styles.container}>
       <StatusBar barStyle="light-content"/>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Todo List
            </Text>
          </View>
          <View  style={styles.contentWrapper}>
            <View style={styles.contentHeader}>Content header</View>
            <FlatList
              style={styles.content}
              data={items}
              renderItem={(row) => {
                return <TodoItem title={row.item} />
              }}
              keyExtractor={item => item}
            />

              <View  style={styles.contentFooter}> Content Footer</View>

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
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
