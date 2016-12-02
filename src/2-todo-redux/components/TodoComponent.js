import React, { Component } from 'react';

const TodoComponent = ({ todo, index, removeTodo }) => {
  return <li>{todo} [<a href="#" onClick={e => {
    e.preventDefault();
    removeTodo(index);
  }}>remove</a>]</li>;
};

export default TodoComponent;