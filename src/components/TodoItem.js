import React, { Component } from 'react';
import { StyleSheet, Text, View,
  TouchableOpacity } from 'react-native';


export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      completed: false
    }
  }

  toggleTodo = () => {
    this.setState({completed: !this.state.completed})
  }
  render(){
     return (
       <TouchableOpacity onPress={this.toggleTodo}
        style={styles.itemButton}
       >

       <Text style={[styles.item,{
       opacity:(this.state.completed ? 0.5 : 1),
       textDecorationLine : (this.state.completed ? 'line-through' : 'none')
     }]}>{this.props.title}</Text>

     </TouchableOpacity>

   );
   }
 }


 const styles = StyleSheet.create({
   item: {
     padding:10
   },
   itemButton: {
     borderBottomWidth: 1,
     borderColor: '#ccc'
   }
 });
