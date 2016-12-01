import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../actions';

import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = { input: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.state.input) {
      this.props.dispatch(AddTodoAction(this.state.input));
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <View>
        <Text>Thing to do:</Text>
        <TextInput style={styles.input} value={this.state.input} onChangeText={(text) => this.setState({ input: text })} />
        <TouchableHighlight style={styles.button} onPress={this.onSubmit}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    height: 20,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#CCCCCC',
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default connect()(Form);
