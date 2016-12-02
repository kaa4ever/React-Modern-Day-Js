import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodoAction } from '../actions';

const TodoComponent = ({ todo, index, removeTodo }) => {
  return <li>{todo} [<a href="#" onClick={e => {
    e.preventDefault();
    removeTodo(index);
  }}>remove</a>]</li>;
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: index => { dispatch(removeTodoAction(index)); },
});

export default connect(null, mapDispatchToProps)(TodoComponent);