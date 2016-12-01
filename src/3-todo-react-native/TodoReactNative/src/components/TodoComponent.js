import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeToDoAction, markToDoAsDone } from '../actions';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Todo = ({ todo, removeTodo, markTodoAsDone }) => {
  const style = { color: todo.isDone ? 'green' : 'black' };
  return (
    <View style={styles.container}>
      <Text style={style}>{todo.title}</Text>
      <TouchableHighlight style={styles.button} onPress={() => markTodoAsDone(todo.id) }>
        <Text>done</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => removeTodo(todo.id) }>
        <Text>remove</Text>
      </TouchableHighlight>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => { dispatch(removeToDoAction(id)); },
    markTodoAsDone: (id) => { dispatch(markToDoAsDone(id)); },
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
