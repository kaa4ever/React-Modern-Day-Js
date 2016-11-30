import React from 'react';
import { connect } from 'react-redux';

import Todo from './TodoComponent';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos || [],
  };
};

export default connect(mapStateToProps)(TodoList);
