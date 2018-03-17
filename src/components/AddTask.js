import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Form, Item, Input, Button, Text as NBText } from 'native-base';

type Props = {};
export default class AddTask extends Component {

state = {
  text: ''
}
  onAdd = () => {
      this.props.navigation.state.params.saveItem(this.state.task)
      this.props.navigation.goBack()

  }

  setText = (text) => {

  }

  render() {
    return (
        <View style={styles.container}>
        <Form>
          <Item>
            <Input
              placeholder="Task"
              onChange={e => this.setState({task: e.nativeEvent.text})}
              value={this.state.task}
            />
          </Item>
        </Form>
        <Button style={styles.button} onPress={this.onAdd}>
          <NBText>Add task</NBText>
        </Button>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button:{
    alignSelf: 'flex-end',
    marginTop: 20
  }
});
