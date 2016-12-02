import React from 'react';
import { connect } from 'react-redux';

import { ScrollView } from 'react-native';
import Todo from './TodoComponent';


const TodoList = ({ todos }) => (
  <ScrollView>
    {todos.map((todo, index) => (
      <Todo key={index} todo={todo} index={index} />
    ))}
  </ScrollView>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos || [],
  };
};

export default connect(mapStateToProps)(TodoList);
