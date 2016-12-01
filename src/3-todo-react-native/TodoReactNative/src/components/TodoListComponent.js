import React from 'react';
import { connect } from 'react-redux';

import { ScrollView } from 'react-native';
import Todo from './TodoComponent';


const TodoList = ({ todos }) => (
  <ScrollView>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ScrollView>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos || [],
  };
};

export default connect(mapStateToProps)(TodoList);
