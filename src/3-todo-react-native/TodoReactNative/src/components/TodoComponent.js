import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodoAction } from '../actions';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <View style={styles.container}>
      <Text>{todo}</Text>
      <TouchableHighlight style={styles.button} onPress={() => removeTodo(index) }>
        <Text>remove</Text>
      </TouchableHighlight>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (index) => { dispatch(removeTodoAction(index)); },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default connect(null, mapDispatchToProps)(Todo);
