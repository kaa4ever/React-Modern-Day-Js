import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import HeadlineComponent from './src/components/HeadlineComponent';
import FormComponent from './src/components/FormComponent';
import TodoListComponent from './src/components/TodoListComponent';

export default class TodoReactNative extends Component {

  constructor(props) {
    super(props);

    this.state = { todos: [] };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos });
  }

  removeTodo(index) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <View style={styles.container} className="small-6 columns">
        <HeadlineComponent headline="Create" />
        <FormComponent addTodo={this.addTodo} />
        <HeadlineComponent headline="TODOS" />
        <TodoListComponent todos={this.state.todos} removeTodo={this.removeTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('TodoReactNative', () => TodoReactNative);
