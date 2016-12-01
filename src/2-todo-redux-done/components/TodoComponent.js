import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeToDoAction, markToDoAsDone } from '../actions';

const Todo = ({ todo, removeTodo, markTodoAsDone }) => {
  const style = { textDecoration: todo.isDone ? 'line-through' : 'inherit' };
  return (
    <li>
      <span style={style}>{todo.title}</span>
      <a onClick={(e) => {
        e.preventDefault();
        markTodoAsDone(todo.id);
      }}>[done]</a>
      <a onClick={(e) => {
        e.preventDefault();
        removeTodo(todo.id);
      }}>[remove]</a>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => { dispatch(removeToDoAction(id)); },
    markTodoAsDone: (id) => { dispatch(markToDoAsDone(id)); },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
