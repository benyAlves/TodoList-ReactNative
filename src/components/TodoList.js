import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   FlatList,
   StatusBar,
   ActivityIndicator,
   Image
 } from 'react-native';
import { Button, Text as NBText } from 'native-base';

import TodoItem from './TodoItem';
import CheckImage from '../images/check.png';


export default class TodoList extends Component {

static navigationOptions = {
  header: null,
  tabBarIcon:({tintColor}) => {
    <Image style={[styles.icon, { tintColor }]} source={CheckImage}/>
  },
  tabBarLabel: 'List'
}

state = {
  items: null
}


componentDidMount(){
  fetch("http://10.42.0.1:3000/items.json")
  .then(resp => resp.json())
  .then(items => {
    this.setState({ items })
  })
}

addItem = () => {
  this.props.navigation.navigate(
    'AddTask',
    { saveItem: this.saveItem }
  );
}

saveItem = (newTask) => {
  const headers = new Headers()
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  fetch("http://10.42.0.1:3000/items.json", {
    method: 'POST',
    headers,
    body: JSON.stringify({
      task: newTask
    })
  })
  .then(resp => resp.json())
  .then(json => {
    this.setState({ items: json })
  })
}

updateTodo = (id, completed) =>{
  const headers = new Headers()
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  fetch("http://10.42.0.1:3000/items.json", {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      id,
      completed
    })
  })
  .then(resp => resp.json())
  .then(json => {
    this.setState({ items: json })
  })
}

deleteTodo = (id) =>{

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
         <View style={styles.contentHeader}><Text>Content header</Text></View>

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
                     return <TodoItem
                       item ={row.item}
                       updateTodo={this.updateTodo}
                       deleteTodo={this.deleteTodo} />
                   }}
           keyExtractor={item => item.id.toString()}
         />
   </View>

            <View  style={styles.contentFooter}>
              <Button onPress={this.addItem}>
                <NBText>Add Item</NBText>
              </Button>
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
  },
  icon:{
    height: 24,
    resizeMode: 'contain'
  }
});
