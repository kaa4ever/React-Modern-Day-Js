import React from 'react';
import { connect } from 'react-redux';
import TodoComponent from './TodoComponent';

const TodoListComponent = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoComponent todo={todo} index={index} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoListComponent);